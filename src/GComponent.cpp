#include "GComponent.h"
#include "GButton.h"
#include "GGroup.h"
#include "GRoot.h"
#include "Window.h"
#include "Relations.h"
#include "TranslationHelper.h"
#include "UIObjectFactory.h"
#include "UIPackage.h"
#include "display/FUIContainer.h"
#include "display/FUISprite.h"
#include "display/FUILabel.h"
#include "event/HitTest.h"
#include "utils/ByteBuffer.h"
#include "utils/ToolSet.h"
#include <cfloat>
#include <unordered_map>
#include <vector>
#include "fgui_godot_compat.h"

NS_FGUI_BEGIN
using namespace std;

static void set_display_child_z_order(GObject* child, int siblingIndex)
{
    (void)siblingIndex;
    Node* display = child->displayObject();
    if (display != nullptr && display->get_parent() != nullptr)
    {
        // FairyGUI already encodes draw order in _children and mirrors it to the
        // Godot scene-tree sibling order. Giving every child its sibling index as
        // a relative z_index makes nested values accumulate, so descendants of an
        // earlier component can render above a later sibling. Keep ordinary UI
        // nodes at local z=0 and let tree order provide subtree-stable ordering.
        CanvasItem* canvasItem = Object::cast_to<CanvasItem>(display);
        canvasItem->set_z_as_relative(true);
        canvasItem->set_z_index(0);
    }
}

static void sync_container_tree_order(FUIInnerContainer* container, const std::vector<Node*>& ordered)
{
    if (container == nullptr)
        return;
    for (int i = 0; i < (int)ordered.size(); i++)
    {
        Node* n = ordered[i];
        if (n == nullptr || n->get_parent() != container)
            continue;
        if (n->get_index() != i)
            container->move_child(n, i);
    }
}

static void queue_display_redraw(Node* display)
{
    if (FUISprite* sp = Object::cast_to<FUISprite>(display))
        sp->queue_redraw();
    else if (FUILabel* label = Object::cast_to<FUILabel>(display))
        label->queue_redraw();
}

void GComponent::ensure_display_child_added(FUIInnerContainer* container, GObject* child)
{
    ERR_FAIL_NULL_MSG(container, "GComponent display container is not initialized. Call setupDisplay() before adding children.");
    ERR_FAIL_NULL(child);

    Node* display = child->displayObject();
    if (display != nullptr && display->get_parent() == nullptr)
    {
        container->add_child(display);
        child->handlePositionChanged();
        child->handleAlphaChanged();
        child->handleVisibleChanged();
        queue_display_redraw(display);

        // gearDisplay may re-add a background child on hover; fix z-order immediately
        // (Web can draw before deferred buildNativeDisplayList, leaving text covered).
        switch (_childrenRenderOrder)
        {
        case ChildrenRenderOrder::ASCENT:
            set_display_child_z_order(child, getDisplaySiblingIndex(child));
            break;
        case ChildrenRenderOrder::DESCENT:
            set_display_child_z_order(child, getDisplaySiblingIndexDescent(child));
            break;
        default:
            break;
        }
    }
}

FUIInnerContainer* GComponent::getDisplayContainerFor(GObject* child) const
{
    if (child == nullptr || child->getSortingOrder() == 0)
        return _container;

    // Overlay containers are for popup/window mount only (direct children of GRoot).
    // Nested components use sortingOrder for local z-order within their own _container.
    const GRoot* root = getRoot();
    if (this == root && child->getParent() == this)
    {
        if (FUIInnerContainer* overlay = getOverlayContainer())
            return overlay;
    }

    return _container;
}

GWindow* GComponent::findWindowOf(const GObject* obj)
{
    for (const GObject* p = obj; p != nullptr; p = p->getParent())
    {
        if (GWindow* win = dynamic_cast<GWindow*>(const_cast<GObject*>(p)))
            return win;
    }
    return nullptr;
}

GComponent* GComponent::findPopupMountScope(GObject* obj)
{
    if (GWindow* win = findWindowOf(obj))
        return win;
    return obj != nullptr ? obj->getRoot() : GRoot::getInstance();
}

int GComponent::getDisplaySiblingIndex(GObject* child) const
{
    FUIInnerContainer* dc = getDisplayContainerFor(child);
    int z = 0;
    for (const auto& c : _children)
    {
        if (c.ptr() == child)
            break;
        if (c->internalVisible() && c.ptr() != _maskOwner && getDisplayContainerFor(c.ptr()) == dc
                && c->_displayObject != nullptr && c->_displayObject->get_parent() != nullptr)
            z++;
    }
    return z;
}

int GComponent::getDisplaySiblingIndexDescent(GObject* child) const
{
    FUIInnerContainer* dc = getDisplayContainerFor(child);
    int sameCnt = 0;
    for (const auto& c : _children)
    {
        if (c->internalVisible() && c.ptr() != _maskOwner && getDisplayContainerFor(c.ptr()) == dc
                && c->_displayObject != nullptr && c->_displayObject->get_parent() != nullptr)
            sameCnt++;
    }

    int z = 0;
    for (const auto& c : _children)
    {
        if (c.ptr() == child)
            break;
        if (c->internalVisible() && c.ptr() != _maskOwner && getDisplayContainerFor(c.ptr()) == dc
                && c->_displayObject != nullptr && c->_displayObject->get_parent() != nullptr)
            z++;
    }
    return sameCnt - 1 - z;
}

void GComponent::refreshDisplayChildrenZOrder()
{
    const int cnt = (int)_children.size();
    switch (_childrenRenderOrder)
    {
    case ChildrenRenderOrder::ASCENT:
        for (int i = 0; i < cnt; i++)
        {
            GObject* c = _children.at(i).ptr();
            if (c->_displayObject != nullptr && c != _maskOwner && c->internalVisible()
                    && c->_displayObject->get_parent() != nullptr)
                set_display_child_z_order(c, getDisplaySiblingIndex(c));
        }
        break;
    case ChildrenRenderOrder::DESCENT:
        for (int i = 0; i < cnt; i++)
        {
            GObject* c = _children.at(i).ptr();
            if (c->_displayObject != nullptr && c != _maskOwner && c->internalVisible()
                    && c->_displayObject->get_parent() != nullptr)
                set_display_child_z_order(c, getDisplaySiblingIndexDescent(c));
        }
        break;
    default:
        break;
    }
}

GComponent::GComponent() : _buildingDisplayList(false),
_container(nullptr),
_overflowClipContainer(nullptr),
_childrenRenderOrder(ChildrenRenderOrder::ASCENT),
_apexIndex(0),
_boundsChanged(false),
_trackBounds(false),
_maskOwner(nullptr),
_hitArea(nullptr),
_opaque(false),
_sortingChildCount(0),
_applyingController(nullptr)
{
}

GComponent::~GComponent()
{
    for (auto& child : _children)
        child->_parent = nullptr;
    _children.clear();
    // _controllers, _transitions, _scrollPane managed by Godot Ref<> 
    _controllers.clear();
    _transitions.clear();
    // _maskOwner, _container managed by Godot ref counting
    FGUI_DELETE(_hitArea);
    CALL_LATER_CANCEL(GComponent, doUpdateBounds);
    CALL_LATER_CANCEL(GComponent, buildNativeDisplayList);
}

void GComponent::handleInit()
{
    FUIContainer* c = FUIContainer::create();
    c->gOwner = this;
    _displayObject = c;

    _container = memnew(FUIInnerContainer);
    _displayObject->add_child(_container);
}

GObject* GComponent::addChild(const Ref<GObject>& child)
{
    addChildAt(child, (int)_children.size());
    return child.ptr();
}

GObject* GComponent::addChildAt(const Ref<GObject>& child, int index)
{
    if (child->_parent == this)
    {
        setChildIndex(child.ptr(), index);
    }
    else
    {
        child->removeFromParent();
        child->_parent = this;

        int cnt = (int)_children.size();
        if (child->_sortingOrder != 0)
        {
            _sortingChildCount++;
            index = getInsertPosForSortingChild(child.ptr());
        }
        else if (_sortingChildCount > 0)
        {
            if (index > (cnt - _sortingChildCount))
                index = cnt - _sortingChildCount;
        }

        if (index == cnt)
            _children.push_back(child);
        else
            _children.insert(_children.begin() + index, child);

        childStateChanged(child.ptr());
        setBoundsChangedFlag();
    }
    return child.ptr();
}

int GComponent::getInsertPosForSortingChild(GObject* target)
{
    size_t cnt = _children.size();
    size_t i;
    for (i = 0; i < cnt; i++)
    {
        GObject* child = _children.at(i).ptr();
        if (child == target)
            continue;

        if (target->_sortingOrder < child->_sortingOrder)
            break;
    }
    return (int)i;
}

void GComponent::removeChild(GObject* child)
{
    // Removing an object that is no longer a child is intentionally a no-op.
    // This also makes repeated removeChild/removeFromParent calls safe.
    if (child == nullptr)
        return;

    auto it = std::find_if(_children.begin(), _children.end(),
        [child](const Ref<GObject>& r) { return r.ptr() == child; });
    if (it != _children.end())
        removeChildAt((int)(it - _children.begin()));
}

void GComponent::removeChildAt(int index)
{
    if (index < 0 || index >= (int)_children.size())
        return;

    Ref<GObject> child = _children.at(index);

    FUIInnerContainer* displayContainer = nullptr;
    if (child->_displayObject != nullptr && child->_displayObject->get_parent() != nullptr)
        displayContainer = getDisplayContainerFor(child.ptr());

    child->_parent = nullptr;

    if (child->_sortingOrder != 0)
        _sortingChildCount--;

    child->setGroup(nullptr);
    if (child->_displayObject != nullptr && child->_displayObject->get_parent() != nullptr)
    {
        if (displayContainer)
            displayContainer->remove_child(child->_displayObject);
        if (_childrenRenderOrder == ChildrenRenderOrder::ARCH)
            CALL_LATER(GComponent, buildNativeDisplayList);
    }

    _children.erase(_children.begin() + index);
    syncNativeChildrenZOrder();
    setBoundsChangedFlag();
}

void GComponent::removeChildren(int beginIndex, int endIndex)
{
    if (beginIndex < 0)
        beginIndex = 0;
    if (beginIndex >= (int)_children.size())
        return;
    if (endIndex < 0 || endIndex >= _children.size())
        endIndex = (int)_children.size() - 1;

    for (int i = beginIndex; i <= endIndex; ++i)
        removeChildAt(beginIndex);
}

GObject* GComponent::getChildAt(int index) const
{
    // CCASSERT(index >= 0 && index < _children.size(), "Invalid child index");

    return _children.at(index).ptr();
}

GObject* GComponent::getChild(const std::string& pName) const
{
    for (const auto& child : _children)
    {
        if (child->name.compare(pName) == 0)
            return child.ptr();
    }

    return nullptr;
}

GObject* GComponent::getChildByPath(const std::string& path) const
{
    const GComponent* gcom = this;
    GObject* obj = nullptr;

    FastSplitter fs;
    fs.start(path.data(), path.length(), '.');
    std::string str;
    while (fs.next())
    {
        if (gcom == nullptr)
        {
            gcom = dynamic_cast<GComponent*>(obj);
            if (gcom == nullptr)
            {
                obj = nullptr;
                break;
            }
        }

        str.append(fs.getText(), fs.getTextLength());
        obj = gcom->getChild(std::string(fs.getText(), fs.getTextLength()));
        if (!obj)
            break;

        gcom = nullptr;
    }

    return obj;
}

GObject* GComponent::getChildInGroup(const GGroup* group, const std::string& pName) const
{
    // CCASSERT(group != nullptr, "Argument must be non-nil")

    for (const auto& child : _children)
    {
        if (child->_group == group && child->name.compare(pName) == 0)
            return child.ptr();
    }

    return nullptr;
}

GObject* GComponent::getChildById(const std::string& pId) const
{
    for (const auto& child : _children)
    {
        if (child->id.compare(pId) == 0)
            return child.ptr();
    }

    return nullptr;
}

int GComponent::getChildIndex(const GObject* child) const
{
    // CCASSERT(child != nullptr, "Argument must be non-nil")

    return (int)(std::find_if(_children.begin(), _children.end(), [&](const Ref<GObject>& r) { return r.ptr() == child; }) - _children.begin());
}

void GComponent::setChildIndex(GObject* child, int index)
{
    // CCASSERT(child != nullptr, "Argument must be non-nil")

    int oldIndex = (int)(std::find_if(_children.begin(), _children.end(), [&](const Ref<GObject>& r) { return r.ptr() == child; }) - _children.begin());
    // CCASSERT(oldIndex != -1, "Not a child of this container")

    if (child->_sortingOrder != 0) //no effect
        return;

    int cnt = (int)_children.size();
    if (_sortingChildCount > 0)
    {
        if (index > (cnt - _sortingChildCount - 1))
            index = cnt - _sortingChildCount - 1;
    }

    moveChild(child, oldIndex, index);
}

int GComponent::setChildIndexBefore(GObject* child, int index)
{
    // CCASSERT(child != nullptr, "Argument must be non-nil")

    int oldIndex = (int)(std::find_if(_children.begin(), _children.end(), [&](const Ref<GObject>& r) { return r.ptr() == child; }) - _children.begin());
    // CCASSERT(oldIndex != -1, "Not a child of this container")

    if (child->_sortingOrder != 0) //no effect
        return oldIndex;

    int cnt = (int)_children.size();
    if (_sortingChildCount > 0)
    {
        if (index > (cnt - _sortingChildCount - 1))
            index = cnt - _sortingChildCount - 1;
    }

    if (oldIndex < index)
        return moveChild(child, oldIndex, index - 1);
    else
        return moveChild(child, oldIndex, index);
}

int GComponent::moveChild(GObject* child, int oldIndex, int index)
{
    int cnt = (int)_children.size();
    if (index > cnt)
        index = cnt;

    if (oldIndex == index)
        return oldIndex;

    Ref<GObject> tmp = _children[oldIndex];
    _children.erase(_children.begin() + oldIndex);
    if (index >= cnt)
        _children.push_back(tmp);
    else
        _children.insert(_children.begin() + index, tmp);
    if (child->_displayObject->get_parent() != nullptr)
    {
        buildNativeDisplayList();
        setBoundsChangedFlag();
    }

    return index;
}

void GComponent::swapChildren(GObject* child1, GObject* child2)
{
    // CCASSERT(child1 != nullptr, "Argument1 must be non-nil")
    // CCASSERT(child2 != nullptr, "Argument2 must be non-nil")

    int index1 = (int)(std::find_if(_children.begin(), _children.end(), [&](const Ref<GObject>& r) { return r.ptr() == child1; }) - _children.begin());
    int index2 = (int)(std::find_if(_children.begin(), _children.end(), [&](const Ref<GObject>& r) { return r.ptr() == child2; }) - _children.begin());

    // CCASSERT(index1 != -1, "Not a child of this container")
    // CCASSERT(index2 != -1, "Not a child of this container")

    swapChildrenAt(index1, index2);
}

void GComponent::swapChildrenAt(int index1, int index2)
{
    GObject* child1 = _children.at(index1).ptr();
    GObject* child2 = _children.at(index2).ptr();

    setChildIndex(child1, index2);
    setChildIndex(child2, index1);
}

int GComponent::numChildren() const
{
    return (int)_children.size();
}

bool GComponent::isAncestorOf(const GObject* obj) const
{
    if (obj == nullptr)
        return false;

    GComponent* p = obj->_parent;
    while (p != nullptr)
    {
        if (p == this)
            return true;

        p = p->_parent;
    }
    return false;
}

bool GComponent::isChildInView(GObject* child)
{
    if (_scrollPane.is_valid())
    {
        return _scrollPane->isChildInView(child);
    }
    else if (((FUIContainer*)_displayObject)->isClippingEnabled())
    {
        return child->_position.x + child->_size.width >= 0 && child->_position.x <= _size.width && child->_position.y + child->_size.height >= 0 && child->_position.y <= _size.height;
    }
    else
        return true;
}

int GComponent::getFirstChildInView()
{
    int i = 0;
    for (auto& child : _children)
    {

        if (isChildInView(child.ptr()))
            return i;
        i++;
    }
    return -1;
}

GController* GComponent::getController(const std::string& pName) const
{
    for (auto& c : _controllers)
    {
        if (c->name.compare(pName) == 0)
            return c.ptr();
    }

    return nullptr;
}

void GComponent::addController(GController* c)
{
    // CCASSERT(c != nullptr, "Argument must be non-nil")

    _controllers.push_back(Ref<GController>(c));
}

GController* GComponent::getControllerAt(int index) const
{
    // CCASSERT(index >= 0 && index < _controllers.size(), "Invalid controller index");

    return _controllers[index].ptr();
}

void GComponent::removeController(GController* c)
{
    // CCASSERT(c != nullptr, "Argument must be non-nil")

    auto it = std::find_if(_controllers.begin(), _controllers.end(),
        [c](const Ref<GController>& ref) { return ref.ptr() == c; });
    if (it == _controllers.end())
        return;
    
    c->setParent(nullptr);
    applyController(c);
    _controllers.erase(it);
}

void GComponent::applyController(GController* c)
{
    _applyingController = c;

    for (size_t i = 0; i < _children.size(); i++)
        _children.at(i)->handleControllerChanged(c);

    _applyingController = nullptr;

    c->runActions();
}

void GComponent::applyAllControllers()
{
    for (const auto& c : _controllers)
        applyController(c.ptr());
}

Transition* GComponent::getTransition(const std::string& pName) const
{
    for (const auto& c : _transitions)
    {
        if (c->name.compare(pName) == 0)
            return c.ptr();
    }

    return nullptr;
}

Transition* GComponent::getTransitionAt(int index) const
{
    // CCASSERT(index >= 0 && index < _transitions.size(), "Invalid transition index");

    return _transitions[index].ptr();
}

void GComponent::adjustRadioGroupDepth(GObject* obj, GController* c)
{
    ssize_t cnt = (ssize_t)_children.size();
    ssize_t i;
    GObject* child;
    ssize_t myIndex = -1, maxIndex = -1;
    for (i = 0; i < cnt; i++)
    {
        child = _children.at(i).ptr();
        if (child == obj)
        {
            myIndex = i;
        }
        else if (dynamic_cast<GButton*>(child) && ((GButton*)child)->getRelatedController() == c)
        {
            if (i > maxIndex)
                maxIndex = i;
        }
    }
    if (myIndex < maxIndex)
    {
        if (_applyingController != nullptr)
            _children.at(maxIndex)->handleControllerChanged(_applyingController);
        swapChildrenAt((int)myIndex, (int)maxIndex);
    }
}

void GComponent::setOpaque(bool value)
{
    _opaque = value;
}

void GComponent::setMargin(const Margin& value)
{
    _margin = value;
}

void GComponent::setChildrenRenderOrder(ChildrenRenderOrder value)
{
    if (_childrenRenderOrder != value)
    {
        _childrenRenderOrder = value;
        CALL_LATER(GComponent, buildNativeDisplayList);
    }
}

void GComponent::setApexIndex(int value)
{
    if (_apexIndex != value)
    {
        _apexIndex = value;

        if (_childrenRenderOrder == ChildrenRenderOrder::ARCH)
            CALL_LATER(GComponent, buildNativeDisplayList);
    }
}

Node* GComponent::getMask() const
{
    return ((FUIContainer*)_displayObject)->getStencil();
}

void GComponent::setMask(Node* value, bool inverted)
{
    if (_maskOwner)
    {
        _maskOwner->_alignToBL = false;
        childStateChanged(_maskOwner);
        _maskOwner->handlePositionChanged();
        _maskOwner = nullptr;
    }

    if (value)
    {
        for (auto& child : _children)
        {
            if (child->_displayObject == value)
            {
                _maskOwner = child.ptr();
                if (value->get_parent())
                    value->get_parent()->remove_child(value);
                _maskOwner->_alignToBL = true;
                _maskOwner->handlePositionChanged();
                break;
            }
        }
    }

    ((FUIContainer*)_displayObject)->setStencil(value);
    if (value)
    {
        ((FUIContainer*)_displayObject)->setAlphaThreshold(0.05f);
        ((FUIContainer*)_displayObject)->setInverted(inverted);
    }
}

void GComponent::setHitArea(IHitTest* value)
{
    if (_hitArea != value)
    {
        FGUI_DELETE(_hitArea);
        _hitArea = value;
        ensureHitAreaChildAttached();
    }
}

void GComponent::ensureHitAreaChildAttached()
{
    ChildHitArea* childHit = dynamic_cast<ChildHitArea*>(_hitArea);
    if (!childHit)
        return;

    GObject* child = childHit->getHitChild();
    if (!child || !_container)
        return;

    ensure_display_child_added(_container, child);
    child->handlePositionChanged();
}

const std::string& GComponent::getBaseUserData() const
{
    ByteBuffer* buffer = _packageItem->rawData;
    buffer->seek(0, 4);
    return buffer->readS();
}

float GComponent::getViewWidth() const
{
    if (_scrollPane.is_valid())
        return _scrollPane->getViewSize().width;
    else
        return _size.width - _margin.left - _margin.right;
}

void GComponent::setViewWidth(float value)
{
    if (_scrollPane.is_valid())
        _scrollPane->setViewWidth(value);
    else
        setWidth(value + _margin.left + _margin.right);
}

float GComponent::getViewHeight() const
{
    if (_scrollPane.is_valid())
        return _scrollPane->getViewSize().height;
    else
        return _size.height - _margin.top - _margin.bottom;
}

void GComponent::setViewHeight(float value)
{
    if (_scrollPane.is_valid())
        _scrollPane->setViewHeight(value);
    else
        setHeight(value + _margin.top + _margin.bottom);
}

void GComponent::setBoundsChangedFlag()
{
    if (!_scrollPane.is_valid() && !_trackBounds)
        return;

    _boundsChanged = true;
    CALL_LATER(GComponent, doUpdateBounds);
}

void GComponent::ensureBoundsCorrect()
{
    if (_boundsChanged)
        updateBounds();
}

void GComponent::updateBounds()
{
    float ax, ay, aw, ah;
    if (!_children.empty())
    {
        ax = FLT_MAX;
        ay = FLT_MAX;
        float ar = -FLT_MAX, ab = -FLT_MAX;
        float tmp;

        size_t cnt = _children.size();
        for (size_t i = 0; i < cnt; ++i)
        {
            GObject* child = _children.at(i).ptr();
            tmp = child->getX();
            if (tmp < ax)
                ax = tmp;
            tmp = child->getY();
            if (tmp < ay)
                ay = tmp;
            tmp = child->getX() + child->getWidth();
            if (tmp > ar)
                ar = tmp;
            tmp = child->getY() + child->getHeight();
            if (tmp > ab)
                ab = tmp;
        }
        aw = ar - ax;
        ah = ab - ay;
    }
    else
    {
        ax = 0;
        ay = 0;
        aw = 0;
        ah = 0;
    }
    setBounds(ax, ay, aw, ah);
}

void GComponent::setBounds(float ax, float ay, float aw, float ah)
{
    _boundsChanged = false;
    if (_scrollPane.is_valid())
        _scrollPane->setContentSize(std::ceil(ax + aw), std::ceil(ay + ah));
}

void GComponent::doUpdateBounds()
{
    if (_deferredCallsCancelled)
        return;
    if (_boundsChanged)
        updateBounds();
}

void GComponent::childStateChanged(GObject* child)
{
    if (_buildingDisplayList)
        return;

    int cnt = (int)_children.size();

    if (dynamic_cast<GGroup*>(child) != nullptr)
    {
        for (int i = 0; i < cnt; ++i)
        {
            GObject* g = _children.at(i).ptr();
            if (g->_group == child)
                childStateChanged(g);
        }
    }

    if (child->getParent() != this)
        return;

    if ((child->_displayObject == nullptr) || (child == _maskOwner))
        return;

    if (child->internalVisible())
    {
        FUIInnerContainer* dc = getDisplayContainerFor(child);
        Node* display = child->_displayObject;
        Node* parent = display->get_parent();
        if (parent != dc)
        {
            if (parent != nullptr)
                parent->remove_child(display);
            ensure_display_child_added(dc, child);
        }
        else if (parent == nullptr)
        {
            ensure_display_child_added(dc, child);
        }

        buildNativeDisplayList();
    }
    else
    {
        if (child->_displayObject->get_parent() != nullptr)
            child->_displayObject->get_parent()->remove_child(child->_displayObject);
        buildNativeDisplayList();
    }
}

void GComponent::syncNativeChildrenZOrder()
{
    buildNativeDisplayList();
}

void GComponent::refreshDisplayList()
{
    buildNativeDisplayList();
}

void GComponent::refreshDisplayListRecursive()
{
    buildNativeDisplayList();
    for (const auto& child : _children)
    {
        if (GComponent* com = dynamic_cast<GComponent*>(child.ptr()))
            com->refreshDisplayListRecursive();
    }
}

void GComponent::childSortingOrderChanged(GObject* child, int oldValue, int newValue)
{
    if (newValue == 0)
    {
        _sortingChildCount--;
        setChildIndex(child, (int)_children.size());
    }
    else
    {
        if (oldValue == 0)
            _sortingChildCount++;

        int oldIndex = (int)(std::find_if(_children.begin(), _children.end(), [&](const Ref<GObject>& r) { return r.ptr() == child; }) - _children.begin());
        int index = getInsertPosForSortingChild(child);
        if (oldIndex < index)
            moveChild(child, oldIndex, index - 1);
        else
            moveChild(child, oldIndex, index);
    }

    childStateChanged(child);
}

void GComponent::buildNativeDisplayList()
{
    if (_deferredCallsCancelled)
        return;
    int cnt = (int)_children.size();
    if (cnt == 0)
        return;

    switch (_childrenRenderOrder)
    {
    case ChildrenRenderOrder::ASCENT:
    {
        std::unordered_map<FUIInnerContainer*, std::vector<Node*>> treeOrders;
        for (int i = 0; i < cnt; i++)
        {
            GObject* child = _children.at(i).ptr();
            if (child->_displayObject != nullptr && child != _maskOwner && child->internalVisible())
            {
                FUIInnerContainer* dc = getDisplayContainerFor(child);
                ensure_display_child_added(dc, child);
                set_display_child_z_order(child, getDisplaySiblingIndex(child));
                treeOrders[dc].push_back(child->_displayObject);
                queue_display_redraw(child->_displayObject);
            }
        }
        for (const auto& it : treeOrders)
            sync_container_tree_order(it.first, it.second);
    }
    break;
    case ChildrenRenderOrder::DESCENT:
    {
        std::unordered_map<FUIInnerContainer*, std::vector<Node*>> treeOrders;
        for (int i = cnt - 1; i >= 0; i--)
        {
            GObject* child = _children.at(i).ptr();
            if (child->_displayObject != nullptr && child != _maskOwner && child->internalVisible())
            {
                FUIInnerContainer* dc = getDisplayContainerFor(child);
                ensure_display_child_added(dc, child);
                set_display_child_z_order(child, getDisplaySiblingIndexDescent(child));
                treeOrders[dc].push_back(child->_displayObject);
                queue_display_redraw(child->_displayObject);
            }
        }
        for (const auto& it : treeOrders)
            sync_container_tree_order(it.first, it.second);
    }
    break;

    case ChildrenRenderOrder::ARCH:
    {
        std::unordered_map<FUIInnerContainer*, std::vector<Node*>> treeOrders;
        int ai = std::min(_apexIndex, cnt);
        for (int i = 0; i < ai; i++)
        {
            GObject* child = _children.at(i).ptr();
            if (child->_displayObject != nullptr && child != _maskOwner && child->internalVisible())
            {
                FUIInnerContainer* dc = getDisplayContainerFor(child);
                ensure_display_child_added(dc, child);
                set_display_child_z_order(child, i);
                treeOrders[dc].push_back(child->_displayObject);
                queue_display_redraw(child->_displayObject);
            }
        }
        for (int i = cnt - 1; i >= ai; i--)
        {
            GObject* child = _children.at(i).ptr();
            if (child->_displayObject != nullptr && child != _maskOwner && child->internalVisible())
            {
                FUIInnerContainer* dc = getDisplayContainerFor(child);
                ensure_display_child_added(dc, child);
                set_display_child_z_order(child, ai + cnt - 1 - i);
                treeOrders[dc].push_back(child->_displayObject);
                queue_display_redraw(child->_displayObject);
            }
        }
        for (const auto& it : treeOrders)
            sync_container_tree_order(it.first, it.second);
    }
    break;
    }
}

Vector2 GComponent::getSnappingPosition(const Vector2& pt)
{
    int cnt = (int)_children.size();
    if (cnt == 0)
        return pt;

    ensureBoundsCorrect();

    GObject* obj = nullptr;

    Vector2 ret = pt;

    int i = 0;
    if (ret.y != 0)
    {
        for (; i < cnt; i++)
        {
            obj = _children.at(i).ptr();
            if (ret.y < obj->getY())
            {
                if (i == 0)
                {
                    ret.y = 0;
                    break;
                }
                else
                {
                    GObject* prev = _children.at(i - 1).ptr();
                    if (ret.y < prev->getY() + prev->getHeight() / 2) //top half part
                        ret.y = prev->getY();
                    else //bottom half part
                        ret.y = obj->getY();
                    break;
                }
            }
        }

        if (i == cnt)
            ret.y = obj->getY();
    }

    if (ret.x != 0)
    {
        if (i > 0)
            i--;
        for (; i < cnt; i++)
        {
            obj = _children.at(i).ptr();
            if (ret.x < obj->getX())
            {
                if (i == 0)
                {
                    ret.x = 0;
                    break;
                }
                else
                {
                    GObject* prev = _children.at(i - 1).ptr();
                    if (ret.x < prev->getX() + prev->getWidth() / 2) // top half part
                        ret.x = prev->getX();
                    else //bottom half part
                        ret.x = obj->getX();
                    break;
                }
            }
        }
        if (i == cnt)
            ret.x = obj->getX();
    }

    return ret;
}

GObject* GComponent::hitTest(const Vector2& worldPoint, const Camera2D* camera)
{
    if (_touchDisabled || !_touchable || !((CanvasItem*)_displayObject)->is_visible() || !_displayObject->get_parent())
        return nullptr;

    Vector2 canvasPoint = getRoot()->rootToWorld(worldPoint);

    GObject* target = nullptr;
    if (_maskOwner)
    {
        if (_maskOwner->hitTest(worldPoint, camera) != nullptr)
        {
            if (((FUIContainer*)_displayObject)->isInverted())
                return nullptr;
        }
        else
        {
            if (!((FUIContainer*)_displayObject)->isInverted())
                return nullptr;
        }
    }

    Rect rect;
    int flag = 0;

    if (_hitArea)
    {
        Rect rect;
        rect.size = _size;
        Vector2 displayLocal = ((CanvasItem*)_displayObject)->get_global_transform_with_canvas().affine_inverse().xform(canvasPoint);
        Vector2 localPoint = displayLocalToLogical(displayLocal);
        flag = rect.has_point(localPoint) ? 1 : 2;

        ChildHitArea* childHit = dynamic_cast<ChildHitArea*>(_hitArea);
        if (childHit)
        {
            if (!childHit->hitTestCanvas(this, canvasPoint))
                return nullptr;
        }
        else if (!_hitArea->hitTest(this, localPoint))
            return nullptr;
    }
    else if (_overflowClipContainer)
    {
        Vector2 displayLocal = ((CanvasItem*)_displayObject)->get_global_transform_with_canvas().affine_inverse().xform(canvasPoint);
        Vector2 localPoint = displayLocalToLogical(displayLocal);
        const Rect2 clipRect(_margin.left, _margin.top,
            _size.width - _margin.left - _margin.right,
            _size.height - _margin.top - _margin.bottom);
        if (!clipRect.has_point(localPoint))
            return nullptr;
    }
    else if (((FUIContainer*)_displayObject)->isClippingEnabled())
    {
        Rect rect;
        rect.size = _size;
        Vector2 displayLocal = ((CanvasItem*)_displayObject)->get_global_transform_with_canvas().affine_inverse().xform(canvasPoint);
        Vector2 localPoint = displayLocalToLogical(displayLocal);
        flag = rect.has_point(localPoint) ? 1 : 2;

        const Rect& clipRect = ((FUIContainer*)_displayObject)->getClippingRegion();
        if (!clipRect.has_point(localPoint))
            return nullptr;
    }

    if (_scrollPane.is_valid())
    {
        target = _scrollPane->hitTest(worldPoint, camera);
        if (!target)
            return nullptr;

        if (target != this)
            return target;
    }

    int cnt = (int)_children.size();

    switch (_childrenRenderOrder)
    {
    case ChildrenRenderOrder::ASCENT:
    {
        for (int i = cnt - 1; i >= 0; i--)
        {
            GObject* child = _children.at(i).ptr();
            if (!child->_displayObject || child == _maskOwner)
                continue;

            target = child->hitTest(worldPoint, camera);
            if (target)
                return target;
        }
    }
    break;
    case ChildrenRenderOrder::DESCENT:
    {
        for (int i = 0; i < cnt; i++)
        {
            GObject* child = _children.at(i).ptr();
            if (!child->_displayObject || child == _maskOwner)
                continue;

            target = child->hitTest(worldPoint, camera);
            if (target)
                return target;
        }
    }
    break;

    case ChildrenRenderOrder::ARCH:
    {
        int ai = std::min(_apexIndex, cnt);
        for (int i = ai; i < cnt; i++)
        {
            GObject* child = _children.at(i).ptr();
            if (!child->_displayObject || child == _maskOwner)
                continue;

            target = child->hitTest(worldPoint, camera);
            if (target)
                return target;
        }
        for (int i = ai - 1; i >= 0; i--)
        {
            GObject* child = _children.at(i).ptr();
            if (!child->_displayObject || child == _maskOwner)
                continue;

            target = child->hitTest(worldPoint, camera);
            if (target)
                return target;
        }
    }
    }

    if (_opaque)
    {
        if (flag == 0)
        {
            rect.size = _size;
            Vector2 displayLocal = ((CanvasItem*)_displayObject)->get_global_transform_with_canvas().affine_inverse().xform(canvasPoint);
            Vector2 localPoint = displayLocalToLogical(displayLocal);
            flag = rect.has_point(localPoint) ? 1 : 2;
        }

        if (flag == 1)
            return this;
        else
            return nullptr;
    }
    else
        return nullptr;
}

void GComponent::applyPivotOffset()
{
    // Match FUISprite: computeDisplayPosition() shifts the outer node by pivot when
    // !pivotAsAnchor; inner content must be shifted back so (x,y) stays top-left.
    // When pivotAsAnchor, the outer node sits on the anchor and the same offset applies.
    Vector2 pos(-_size.width * _pivot.x, -_size.height * _pivot.y);
    if (!_scrollPane.is_valid() && !_overflowClipContainer)
    {
        pos.x += _margin.left;
        pos.y += _margin.top;
    }

    if (_container && !_scrollPane.is_valid())
        _container->set_position(pos);

    // When ScrollPane is active it owns _container position via scroll offset.
    // Sync in-window overlay only (GRoot overlay lives in a separate CanvasLayer).
    if (FUIInnerContainer* overlay = getOverlayContainer())
    {
        if (overlay->get_parent() == _displayObject)
            overlay->set_position(pos);
    }

    GuiObject::applyPivotOffset();
}

void GComponent::updateOverflowClipRect()
{
    if (!_overflowClipContainer)
        return;

    const float mx = floor(_margin.left + _alignOffset.x);
    const float my = floor(_margin.top + _alignOffset.y);
    const float w = std::max(1.0f, _size.width - _margin.left - _margin.right);
    const float h = std::max(1.0f, _size.height - _margin.top - _margin.bottom);
    _overflowClipContainer->applyClipRect(Vector2(mx, my), Vector2(w, h));
}

void GComponent::setupOverflow(OverflowType overflow)
{
    if (overflow == OverflowType::HIDDEN)
    {
        if (!_overflowClipContainer)
        {
            _overflowClipContainer = memnew(FUIClipContainer);
            _displayObject->add_child(_overflowClipContainer);
            if (_container && _container->get_parent() == _displayObject)
            {
                _displayObject->remove_child(_container);
                _overflowClipContainer->add_child(_container);
            }
        }
        updateOverflowClipRect();
        ((FUIContainer*)_displayObject)->setClippingEnabled(false);
    }

    applyPivotOffset();
}

void GComponent::setupScroll(ByteBuffer* buffer)
{
    _scrollPane = memnew(ScrollPane(this));
    _scrollPane->setup(buffer);
}

void GComponent::handleSizeChanged()
{
    GObject::handleSizeChanged();
    applyPivotOffset();

    if (_scrollPane.is_valid())
        _scrollPane->onOwnerSizeChanged();
    else if (_overflowClipContainer)
        updateOverflowClipRect();
    else
    {
        // Keep the non-scroll clipping region in sync with size changes.
        FUIContainer* fui = dynamic_cast<FUIContainer*>(_displayObject);
        if (fui && fui->isClippingEnabled())
        {
            fui->setClippingRegion(Rect(_margin.left, _margin.top,
                _size.width - _margin.left - _margin.right,
                _size.height - _margin.top - _margin.bottom));
        }
    }

    if (_maskOwner)
    {
        _maskOwner->handlePositionChanged();
        if (FUIContainer* fui = dynamic_cast<FUIContainer*>(_displayObject))
            fui->queue_redraw();
    }

    if (_hitArea)
    {
        PixelHitTest* test = dynamic_cast<PixelHitTest*>(_hitArea);
        if (sourceSize.width != 0)
            test->scaleX = _size.width / sourceSize.width;
        if (sourceSize.height != 0)
            test->scaleY = _size.height / sourceSize.height;
    }
}

void GComponent::handleGrayedChanged()
{
    GObject::handleGrayedChanged();

    GController* cc = getController("grayed");
    if (cc != nullptr)
        cc->setSelectedIndex(isGrayed() ? 1 : 0);
    else
    {
        for (auto& child : _children)
            child->handleGrayedChanged();
    }
}

void GComponent::handleControllerChanged(GController* c)
{
    GObject::handleControllerChanged(c);

    if (_scrollPane.is_valid())
        _scrollPane->handleControllerChanged(c);
}

void GComponent::_enter_tree()
{
    GObject::_enter_tree();
    ensureHitAreaChildAttached();
    ensureBoundsCorrect();
    if (_scrollPane.is_valid())
        _scrollPane->onOwnerStageChanged(true);
    else if (_overflowClipContainer)
        updateOverflowClipRect();

    if (FUIContainer* fui = dynamic_cast<FUIContainer*>(_displayObject))
    {
        if (fui->getStencil())
            fui->queue_redraw();
    }

    if (!_transitions.empty())
    {
        for (auto& trans : _transitions)
            trans->onOwnerAddedToStage();
    }
}

void GComponent::_exit_tree()
{
    if (_scrollPane.is_valid())
        _scrollPane->onOwnerStageChanged(false);

    GObject::_exit_tree();

    if (!_transitions.empty())
    {
        for (auto& trans : _transitions)
            trans->onOwnerRemovedFromStage();
    }
}

void GComponent::constructFromResource()
{
    constructFromResource(nullptr, 0);
}

void GComponent::constructFromResource(std::vector<GObject*>* objectPool, int poolIndex)
{
    PackageItem* contentItem = _packageItem->getBranch();

    if (!contentItem->translated)
    {
        contentItem->translated = true;
        TranslationHelper::translateComponent(contentItem);
    }

    ByteBuffer* buffer = contentItem->rawData;
    buffer->seek(0, 0);

    _underConstruct = true;

    sourceSize.width = buffer->readInt();
    sourceSize.height = buffer->readInt();
    initSize = sourceSize;

    setSize(sourceSize.width, sourceSize.height);

    if (buffer->readBool())
    {
        minSize.width = buffer->readInt();
        maxSize.width = buffer->readInt();
        minSize.height = buffer->readInt();
        maxSize.height = buffer->readInt();
    }

    if (buffer->readBool())
    {
        float f1 = buffer->readFloat();
        float f2 = buffer->readFloat();
        setPivot(f1, f2, buffer->readBool());
    }

    if (buffer->readBool())
    {
        _margin.top = buffer->readInt();
        _margin.bottom = buffer->readInt();
        _margin.left = buffer->readInt();
        _margin.right = buffer->readInt();
    }

    OverflowType overflow = (OverflowType)buffer->readByte();
    if (overflow == OverflowType::SCROLL)
    {
        int savedPos = buffer->getPos();
        buffer->seek(0, 7);
        setupScroll(buffer);
        buffer->setPos(savedPos);
    }
    else
        setupOverflow(overflow);

    if (buffer->readBool()) //clipsoft
        buffer->skip(8);

    _buildingDisplayList = true;

    buffer->seek(0, 1);

    int controllerCount = buffer->readShort();
    for (int i = 0; i < controllerCount; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        Ref<GController> controller = memnew(GController);
        _controllers.push_back(controller);
        controller->setParent(this);
        controller->setup(buffer);
        buffer->setPos(nextPos);
    }

    buffer->seek(0, 2);

    Ref<GObject> child;
    int childCount = buffer->readShort();
    for (int i = 0; i < childCount; i++)
    {
        int dataLen = buffer->readUshort();
        int curPos = buffer->getPos();

        if (objectPool != nullptr)
            child = (*objectPool)[poolIndex + i];
        else
        {
            buffer->seek(curPos, 0);

            ObjectType type = (ObjectType)buffer->readByte();
            const string& src = buffer->readS();
            const string& pkgId = buffer->readS();

            PackageItem* pi = nullptr;
            if (!src.empty())
            {
                UIPackage* pkg;
                if (!pkgId.empty())
                    pkg = UIPackage::getById(pkgId);
                else
                    pkg = contentItem->owner;

                pi = pkg != nullptr ? pkg->getItem(src) : nullptr;
            }

            if (pi != nullptr)
            {
                child = UIObjectFactory::newObject(pi);
                if (child.is_valid())					
                    child->constructFromResource();
            }
            else
                child = UIObjectFactory::newObject(type);

            if (!child.is_valid())
                continue;
        }

        child->_underConstruct = true;
        child->setup_beforeAdd(buffer, curPos);
        child->_parent = this;
        _children.push_back(child);

        buffer->setPos(curPos + dataLen);
    }

    buffer->seek(0, 3);
    _relations->setup(buffer, true);

    buffer->seek(0, 2);
    buffer->skip(2);

    for (int i = 0; i < childCount; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        buffer->seek(buffer->getPos(), 3);
        _children.at(i)->relations()->setup(buffer, false);

        buffer->setPos(nextPos);
    }

    buffer->seek(0, 2);
    buffer->skip(2);

    for (int i = 0; i < childCount; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        child = _children.at(i).ptr();
        child->setup_afterAdd(buffer, buffer->getPos());
        child->_underConstruct = false;

        buffer->setPos(nextPos);
    }

    buffer->seek(0, 4);

    buffer->skip(2); //customData
    _opaque = buffer->readBool();
    int maskId = buffer->readShort();
    if (maskId != -1)
    {
        bool inverted = buffer->readBool();
        setMask(getChildAt(maskId)->displayObject(), inverted);
    }

    const string& hitTestId = buffer->readS();
    int i1 = buffer->readInt();
    int i2 = buffer->readInt();
    if (!hitTestId.empty())
    {
        PackageItem* pi = contentItem->owner->getItem(hitTestId);
        if (pi != nullptr && pi->pixelHitTestData != nullptr)
            setHitArea(new PixelHitTest(pi->pixelHitTestData, i1, i2));
        else
        {
            // Shape hit test: editor hitTest="childId" (button4.xml style).
            GObject* child = getChildById(hitTestId);
            if (child)
                setHitArea(new ChildHitArea(child));
        }
    }
    else if (i1 != 0 && i2 != -1)
    {
        // Shape hit test: Unity / binary format uses child index (i2).
        GObject* child = getChildAt(i2);
        if (child)
            setHitArea(new ChildHitArea(child));
    }

    buffer->seek(0, 5);

    int transitionCount = buffer->readShort();
    for (int i = 0; i < transitionCount; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        Ref<Transition> trans = memnew(Transition(this));
        trans->setup(buffer);
        _transitions.push_back(trans);
        buffer->setPos(nextPos);
    }

    applyAllControllers();

    _buildingDisplayList = false;
    _underConstruct = false;

    buildNativeDisplayList();

    if (contentItem->objectType != ObjectType::COMPONENT)
        constructExtension(buffer);

    // GButton::setState etc. may change gearDisplay visibility after the first build.
    buildNativeDisplayList();
    setBoundsChangedFlag();
    ensureBoundsCorrect();

    // C++ vtable 分发：GButton / GSlider 等子类覆写
    onConstruct();
    // GDScript/C# 虚方法分发：用户可在 _on_construct() 中安全访问子节点
    GDVIRTUAL_CALL(_on_construct);
}

void GComponent::constructExtension(ByteBuffer* buffer)
{
}

void GComponent::onConstruct()
{
}

void GComponent::setup_afterAdd(ByteBuffer* buffer, int beginPos)
{
    GObject::setup_afterAdd(buffer, beginPos);

    buffer->seek(beginPos, 4);

    int pageController = buffer->readShort();
    if (pageController != -1 && _scrollPane.is_valid() && _scrollPane->isPageMode())
        _scrollPane->setPageController(_parent->getControllerAt(pageController));

    int cnt = buffer->readShort();
    for (int i = 0; i < cnt; i++)
    {
        GController* cc = getController(buffer->readS());
        const string& pageId = buffer->readS();
        if (cc)
            cc->setSelectedPageId(pageId);
    }

    if (buffer->version >= 2)
    {
        cnt = buffer->readShort();
        for (int i = 0; i < cnt; i++)
        {
            std::string target = buffer->readS();
            ObjectPropID propId = (ObjectPropID)buffer->readShort();
            std::string value = buffer->readS();
            GObject* obj = getChildByPath(target);
            if (obj != nullptr)
                obj->setProp(propId, Variant(GObject::toGodotStr(value)));
        }
    }
}

void GComponent::_bind_methods()
{
    /// @author Kevin.CodeBuddy.Auto / 2026-07-16
    // ChildrenRenderOrder 枚举
    ClassDB::bind_integer_constant(get_class_static(), "ChildrenRenderOrder", "ASCENT", static_cast<int64_t>(ChildrenRenderOrder::ASCENT));
    ClassDB::bind_integer_constant(get_class_static(), "ChildrenRenderOrder", "DESCENT", static_cast<int64_t>(ChildrenRenderOrder::DESCENT));
    ClassDB::bind_integer_constant(get_class_static(), "ChildrenRenderOrder", "ARCH", static_cast<int64_t>(ChildrenRenderOrder::ARCH));

    // OverflowType 枚举
    ClassDB::bind_integer_constant(get_class_static(), "OverflowType", "VISIBLE", static_cast<int64_t>(OverflowType::VISIBLE));
    ClassDB::bind_integer_constant(get_class_static(), "OverflowType", "HIDDEN", static_cast<int64_t>(OverflowType::HIDDEN));
    ClassDB::bind_integer_constant(get_class_static(), "OverflowType", "SCROLL", static_cast<int64_t>(OverflowType::SCROLL));

    ClassDB::bind_method(D_METHOD("getChild", "name"), &GComponent::gd_getChild);
    ClassDB::bind_method(D_METHOD("getChildByPath", "path"), &GComponent::gd_getChildByPath);
    ClassDB::bind_method(D_METHOD("getChildById", "id"), &GComponent::gd_getChildById);

    ClassDB::bind_method(D_METHOD("getChildIndex", "child"), &GComponent::getChildIndex);
    ClassDB::bind_method(D_METHOD("setChildIndex", "child", "index"), &GComponent::setChildIndex);
    ClassDB::bind_method(D_METHOD("swapChildren", "child1", "child2"), &GComponent::swapChildren);
    ClassDB::bind_method(D_METHOD("swapChildrenAt", "index1", "index2"), &GComponent::swapChildrenAt);
    ClassDB::bind_method(D_METHOD("numChildren"), &GComponent::numChildren);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "numChildren", PROPERTY_HINT_NONE, "", PROPERTY_USAGE_EDITOR | PROPERTY_USAGE_READ_ONLY), "", "numChildren");

    ClassDB::bind_method(D_METHOD("addController", "controller"), &GComponent::addController);
    ClassDB::bind_method(D_METHOD("getControllerAt", "index"), &GComponent::gd_getControllerAt);
    ClassDB::bind_method(D_METHOD("getController", "name"), &GComponent::gd_getController);
    ClassDB::bind_method(D_METHOD("removeController", "controller"), &GComponent::gd_removeController);
    ClassDB::bind_method(D_METHOD("numControllers"), &GComponent::numControllers);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "numControllers", PROPERTY_HINT_NONE, "", PROPERTY_USAGE_EDITOR | PROPERTY_USAGE_READ_ONLY), "", "numControllers");
    ClassDB::bind_method(D_METHOD("applyController", "controller"), &GComponent::applyController);
    ClassDB::bind_method(D_METHOD("applyAllControllers"), &GComponent::applyAllControllers);

    ClassDB::bind_method(D_METHOD("addChildAt", "child", "index"), &GComponent::gd_addChildAt);
    ClassDB::bind_method(D_METHOD("removeChildAt", "index"), &GComponent::gd_removeChildAt);
    ClassDB::bind_method(D_METHOD("removeChildren", "begin_index", "end_index"), &GComponent::gd_removeChildren, DEFVAL(0), DEFVAL(-1));


    ClassDB::bind_method(D_METHOD("setOpaque", "value"), &GComponent::setOpaque);
    ClassDB::bind_method(D_METHOD("getOpaque"), &GComponent::getOpaque);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "opaque"), "setOpaque", "getOpaque");

    ClassDB::bind_method(D_METHOD("setViewWidth", "value"), &GComponent::setViewWidth);
    ClassDB::bind_method(D_METHOD("getViewWidth"), &GComponent::getViewWidth);
    ADD_PROPERTY(PropertyInfo(Variant::FLOAT, "viewWidth"), "setViewWidth", "getViewWidth");

    ClassDB::bind_method(D_METHOD("setViewHeight", "value"), &GComponent::setViewHeight);
    ClassDB::bind_method(D_METHOD("getViewHeight"), &GComponent::getViewHeight);
    ADD_PROPERTY(PropertyInfo(Variant::FLOAT, "viewHeight"), "setViewHeight", "getViewHeight");

    // GDScript extensions
    ClassDB::bind_method(D_METHOD("getChildAt", "index"), &GComponent::gd_getChildAt);
    ClassDB::bind_method(D_METHOD("getTransition", "name"), &GComponent::gd_getTransition);
    ClassDB::bind_method(D_METHOD("getTransitionAt", "index"), &GComponent::gd_getTransitionAt);
    ClassDB::bind_method(D_METHOD("numTransitions"), &GComponent::numTransitions);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "numTransitions", PROPERTY_HINT_NONE, "", PROPERTY_USAGE_EDITOR | PROPERTY_USAGE_READ_ONLY), "", "numTransitions");
    ClassDB::bind_method(D_METHOD("getScrollPane"), &GComponent::gd_getScrollPane);
    ClassDB::bind_method(D_METHOD("ensureBoundsCorrect"), &GComponent::ensureBoundsCorrect);
    ClassDB::bind_method(D_METHOD("doUpdateBounds"), &GComponent::doUpdateBounds);
    ClassDB::bind_method(D_METHOD("buildNativeDisplayList"), &GComponent::buildNativeDisplayList);
    ClassDB::bind_method(D_METHOD("isChildInView", "child"), &GComponent::isChildInView);
    ClassDB::bind_method(D_METHOD("isAncestorOf", "obj"), &GComponent::isAncestorOf);

    // 构建完成虚方法，GDScript/C# 覆写 _on_construct() 在 XML 构建完成后安全访问子节点
    GDVIRTUAL_BIND(_on_construct);
}

void GComponent::gd_removeChildAt(int index) { removeChildAt(index); }
void GComponent::gd_addChildAt(Object* child, int index) {
    GObject* go = Object::cast_to<GObject>(child);
    if (go) addChildAt(Ref<GObject>(go), index);
}
void GComponent::gd_removeChildren(int beginIndex, int endIndex) { removeChildren(beginIndex, endIndex); }

Ref<GObject> GComponent::gd_getChild(const String& child_name) const { return Ref<GObject>(getChild(child_name.utf8().get_data())); }
Ref<GObject> GComponent::gd_getChildByPath(const String& path) const { return Ref<GObject>(getChildByPath(path.utf8().get_data())); }
Ref<GObject> GComponent::gd_getChildById(const String& child_id) const { return Ref<GObject>(getChildById(child_id.utf8().get_data())); }
Ref<GObject> GComponent::gd_getChildAt(int index) const { return Ref<GObject>(getChildAt(index)); }
Ref<ScrollPane> GComponent::gd_getScrollPane() { return Ref<ScrollPane>(getScrollPane()); }

Ref<GController> GComponent::gd_getController(const String& pName) const { return Ref<GController>(getController(pName.utf8().get_data())); }
Ref<GController> GComponent::gd_getControllerAt(int index) const { return Ref<GController>(getControllerAt(index)); }
Ref<Transition> GComponent::gd_getTransition(const String& pName) const { return Ref<Transition>(getTransition(pName.utf8().get_data())); }
Ref<Transition> GComponent::gd_getTransitionAt(int index) const { return Ref<Transition>(getTransitionAt(index)); }

NS_FGUI_END
