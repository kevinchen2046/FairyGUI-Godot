#include "GObject.h"
#include "GTreeNode.h"
#include "GGroup.h"
#include "GList.h"
#include "GRoot.h"
#include "UIConfig.h"
#include "display/FUIContainer.h"
#include "UIPackage.h"
#include "display/FUISprite.h"
#include "gears/GearDisplay.h"
#include "gears/GearDisplay2.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/control.hpp>
#else
#include "scene/gui/control.h"
#endif
#include "tween/GTween.h"
#include "tween/GTweener.h"
#include "utils/ByteBuffer.h"
#include "utils/ToolSet.h"
#include "utils/WeakPtr.h"
#include <sstream>
#include <cfloat>
#include "fgui_godot_compat.h"

NS_FGUI_BEGIN
GuiObject* GuiObject::_draggingObject = nullptr;

static int apply_absolute_overlay_z_order(Node* node, int baseZ, int localZ)
{
    if (!node)
        return localZ;

    if (CanvasItem* ci = Object::cast_to<CanvasItem>(node))
    {
        ci->set_z_as_relative(false);
        ci->set_z_index(CLAMP(baseZ + localZ,
#ifdef FGUI_GDEXTENSION
                RenderingServer::CANVAS_ITEM_Z_MIN, RenderingServer::CANVAS_ITEM_Z_MAX
#else
                RS::CANVAS_ITEM_Z_MIN, RS::CANVAS_ITEM_Z_MAX
#endif
                ));
        localZ++;
    }

    const int childCount = node->get_child_count();
    for (int i = 0; i < childCount; i++)
        localZ = apply_absolute_overlay_z_order(node->get_child(i), baseZ, localZ);
    return localZ;
}

static Vector2 sGlobalDragStart;
static Rect sGlobalRect;
static bool sUpdateInDragging;

GuiObject::GuiObject() : _underConstruct(false),
                     _gearLocked(false),
                     _alignToBL(false),
                     _parent(nullptr),
                     _displayObject(nullptr),
                     _packageItem(nullptr),
                     _sizeImplType(0),
                     _touchDisabled(false),
                     _scale{1, 1},
                     _pivotAsAnchor(false),
                     _alpha(1.0f),
                     _rotation(0.0f),
                     _skewX(0.0f),
                     _skewY(0.0f),
                     _visible(true),
                     _touchable(true),
                     _grayed(false),
                     _finalGrayed(false),
                     _deferredCallsCancelled(false),
                     _internalVisible(true),
                     _handlingController(false),
                     _draggable(false),
                     _sortingOrder(0),
                     _focusable(false),
                     _pixelSnapping(false),
                     _group(nullptr),
                     _sizePercentInGroup(0.0f),
                     _data(nullptr),
                     _dragBounds(nullptr),
                     _dragTesting(false),
                     _treeNode(nullptr),
                     _weakPtrRef(0)
{
    static uint64_t _gInstanceCounter = 1;
    _uid = _gInstanceCounter++;
    std::stringstream ss;
    ss << _uid;
    id = ss.str();
    _relations = new Relations(this);

    for (int i = 0; i < 10; i++)
        _gears[i] = nullptr;

    register_live_gobject(this);
}

GuiObject::~GuiObject()
{
    unregister_live_gobject(this);
    GTween::kill(this, false);
    removeFromParent();

    if (_displayObject)
    {
        if (FUIContainer* fc = Object::cast_to<FUIContainer>(_displayObject))
            fc->gOwner = nullptr;
        _displayObject->queue_free();
        // // CC_SAFE_RELEASE removed - _displayObject managed by Godot ref counting;
    }
    for (int i = 0; i < 10; i++)
        FGUI_DELETE(_gears[i]);
    FGUI_DELETE(_relations);
    FGUI_DELETE(_dragBounds);

    if (_weakPtrRef > 0)
        WeakPtr::markDisposed(this);
}

bool GuiObject::init()
{
    if (_displayObject != nullptr)
        return true;

    handleInit();

    if (_displayObject != nullptr)
    {
        _displayObject->connect("tree_entered", callable_mp(this, &GuiObject::onDisplayTreeEntered), CONNECT_REFERENCE_COUNTED);
        _displayObject->connect("tree_exiting", callable_mp(this, &GuiObject::onDisplayTreeExiting), CONNECT_REFERENCE_COUNTED);
    }
    return true;
}

void GuiObject::_notification(int p_what)
{
    if (p_what == Object::NOTIFICATION_POSTINITIALIZE)
        init();
}

void GuiObject::setX(float value)
{
    setPosition(value, _position.y);
}

void GuiObject::setY(float value)
{
    setPosition(_position.x, value);
}

void GuiObject::setPosition(float xv, float yv)
{
    if (_position.x != xv || _position.y != yv)
    {
        float dx = xv - _position.x;
        float dy = yv - _position.y;
        _position.x = xv;
        _position.y = yv;

        handlePositionChanged();

        GGroup* g = dynamic_cast<GGroup*>(this);
        if (g != nullptr)
            g->moveChildren(dx, dy);

        updateGear(1);

        if (_parent != nullptr && dynamic_cast<GList*>(_parent) == nullptr)
        {
            _parent->setBoundsChangedFlag();
            if (_group != nullptr)
                _group->setBoundsChangedFlag(true);

            dispatchEvent(UIEventType::PositionChange);
        }

        if (_draggingObject == this && !sUpdateInDragging)
            sGlobalRect = localToGlobal(Rect(Vector2(), _size));
    }
}

float GuiObject::getXMin() const
{
    return _pivotAsAnchor ? (_position.x - _size.width * _pivot.x) : _position.x;
}

void GuiObject::setXMin(float value)
{
    if (_pivotAsAnchor)
        setPosition(value + _size.width * _pivot.x, _position.y);
    else
        setPosition(value, _position.y);
}

float GuiObject::getYMin() const
{
    return _pivotAsAnchor ? (_position.y - _size.height * _pivot.y) : _position.y;
}

void GuiObject::setYMin(float value)
{
    if (_pivotAsAnchor)
        setPosition(_position.x, value + _size.height * _pivot.y);
    else
        setPosition(_position.x, value);
}

void GuiObject::setPixelSnapping(bool value)
{
    if (_pixelSnapping != value)
    {
        _pixelSnapping = value;
        handlePositionChanged();
    }
}

void GuiObject::setSize(float wv, float hv, bool ignorePivot /*= false*/)
{
    if (_rawSize.width != wv || _rawSize.height != hv)
    {
        _rawSize.width = wv;
        _rawSize.height = hv;
        if (wv < minSize.width)
            wv = minSize.width;
        else if (maxSize.width > 0 && wv > maxSize.width)
            wv = maxSize.width;
        if (hv < minSize.height)
            hv = minSize.height;
        else if (maxSize.height > 0 && hv > maxSize.height)
            hv = maxSize.height;
        float dWidth = wv - _size.width;
        float dHeight = hv - _size.height;
        _size.width = wv;
        _size.height = hv;

        handleSizeChanged();

        if (_pivot.x != 0 || _pivot.y != 0)
        {
            if (!_pivotAsAnchor)
            {
                if (!ignorePivot)
                    setPosition(_position.x - _pivot.x * dWidth, _position.y - _pivot.y * dHeight);
                else
                    handlePositionChanged();
            }
            else
                handlePositionChanged();
        }
        else
            handlePositionChanged();

        GGroup* g = dynamic_cast<GGroup*>(this);
        if (g != nullptr)
            g->resizeChildren(dWidth, dHeight);

        updateGear(2);

        if (_parent != nullptr)
        {
            _relations->onOwnerSizeChanged(dWidth, dHeight, _pivotAsAnchor || !ignorePivot);
            _parent->setBoundsChangedFlag();
            if (_group != nullptr)
                _group->setBoundsChangedFlag();
        }

        dispatchEvent(UIEventType::SizeChange);
    }
}

void GuiObject::setSizeDirectly(float wv, float hv)
{
    _rawSize.width = wv;
    _rawSize.height = hv;
    if (wv < 0)
        wv = 0;
    if (hv < 0)
        hv = 0;
    _size.width = wv;
    _size.height = hv;
}

void GuiObject::center(bool restraint /*= false*/)
{
    GComponent* r;
    if (_parent != nullptr)
        r = _parent;
    else
        r = GRoot::getInstance();

    setPosition((int)((r->_size.width - _size.width) / 2), (int)((r->_size.height - _size.height) / 2));
    if (restraint)
    {
        addRelation(r, RelationType::Center_Center);
        addRelation(r, RelationType::Middle_Middle);
    }
}

void GuiObject::makeFullScreen()
{
    setSize(GRoot::getInstance()->getWidth(), GRoot::getInstance()->getHeight());
}

void GuiObject::setPivot(float xv, float yv, bool asAnchor)
{
    if (_pivot.x != xv || _pivot.y != yv || _pivotAsAnchor != asAnchor)
    {
        _pivot = Vector2(xv, yv);
        _pivotAsAnchor = asAnchor;
        applyPivotOffset();
        handlePositionChanged();
    }
}

void GuiObject::setScale(float xv, float yv)
{
    if (_scale.x != xv || _scale.y != yv)
    {
        _scale.x = xv;
        _scale.y = yv;
        handleScaleChanged();

        updateGear(2);
    }
}

GTweener* GuiObject::tweenScale(const Vector2& endValue, float duration)
{
    return GTween::to(_scale, endValue, duration)->setTarget(this, TweenPropType::Scale);
}

Ref<GTweener> GuiObject::gd_tweenScale(const Vector2& endValue, float duration)
{
    return Ref<GTweener>(tweenScale(endValue, duration));
}

void GuiObject::setSkewX(float value)
{
    if (_skewX != value)
    {
        _skewX = value;
        if (_skewX == 0.0f && _skewY == 0.0f)
        {
            if (Node2D* node = Object::cast_to<Node2D>(_displayObject))
            {
                node->set_position(computeDisplayPosition());
                node->set_rotation(Math::deg_to_rad(_rotation));
                node->set_scale(computeDisplayScale());
            }
            else
                syncControlDisplay();
        }
        else
            rebuildSkewedTransform();
    }
}

void GuiObject::setSkewY(float value)
{
    if (_skewY != value)
    {
        _skewY = value;
        if (_skewX == 0.0f && _skewY == 0.0f)
        {
            if (Node2D* node = Object::cast_to<Node2D>(_displayObject))
            {
                node->set_position(computeDisplayPosition());
                node->set_rotation(Math::deg_to_rad(_rotation));
                node->set_scale(computeDisplayScale());
            }
            else
                syncControlDisplay();
        }
        else
            rebuildSkewedTransform();
    }
}

void GuiObject::setRotation(float value)
{
    if (_rotation != value)
    {
        _rotation = value;
        if (_displayObject)
        {
            if (_skewX != 0.0f || _skewY != 0.0f)
                rebuildSkewedTransform();
            else if (Node2D* node = Object::cast_to<Node2D>(_displayObject))
                node->set_rotation(Math::deg_to_rad(_rotation));
            else
                syncControlDisplay();
        }
        updateGear(3);
    }
}

void GuiObject::setAlpha(float value)
{
    if (_alpha != value)
    {
        _alpha = value;
        handleAlphaChanged();
        updateGear(3);
    }
}

void GuiObject::setGrayed(bool value)
{
    if (_grayed != value || _finalGrayed != value)
    {
        _grayed = value;
        handleGrayedChanged();
        updateGear(3);
    }
}

void GuiObject::setVisible(bool value)
{
    if (_visible != value)
    {
        _visible = value;
        handleVisibleChanged();
        if (_parent != nullptr)
            _parent->setBoundsChangedFlag();
        if (_group != nullptr && _group->isExcludeInvisibles())
            _group->setBoundsChangedFlag();
    }
}

bool GuiObject::internalVisible() const
{
    return _internalVisible && (_group == nullptr || _group->internalVisible());
}

bool GuiObject::internalVisible2() const
{
    return _visible && (_group == nullptr || _group->internalVisible2());
}

bool GuiObject::internalVisible3() const
{
    return _visible && _internalVisible;
}

void GuiObject::setTouchable(bool value)
{
    _touchable = value;
}

void GuiObject::setSortingOrder(int value)
{
    if (value < 0)
        value = 0;
    if (_sortingOrder != value)
    {
        int old = _sortingOrder;
        _sortingOrder = value;
        if (_parent != nullptr)
            _parent->childSortingOrderChanged(this, old, _sortingOrder);
        handleSortingOrderChanged();
    }
}

void GuiObject::applyAbsoluteOverlayZOrder(int baseZ)
{
    if (_displayObject)
        apply_absolute_overlay_z_order(_displayObject, baseZ, 0);
}

void GuiObject::setGroup(GGroup* value)
{
    if (_group != value)
    {
        if (_group != nullptr)
            _group->setBoundsChangedFlag();
        _group = value;
        if (_group != nullptr)
            _group->setBoundsChangedFlag();
        handleVisibleChanged();
        if (_parent)
            _parent->childStateChanged(this);
    }
}

const std::string& GuiObject::getText() const
{
    static const std::string empty;
    return empty;
}

void GuiObject::setText(const std::string& text)
{
}

const std::string& GuiObject::getIcon() const
{
    static const std::string empty;
    return empty;
}

void GuiObject::setIcon(const std::string& text)
{
}

void GuiObject::setTooltips(const std::string& value)
{
    _tooltips = value;
    if (!_tooltips.empty())
    {
        addEventListener(UIEventType::RollOver, [this](EventContext* ctx) { GuiObject::onRollOver(ctx); }, EventTag(this));
        addEventListener(UIEventType::RollOut, [this](EventContext* ctx) { GuiObject::onRollOut(ctx); }, EventTag(this));
    }
}

void GuiObject::onRollOver(EventContext* context)
{
    getRoot()->showTooltips(_tooltips);
}

void GuiObject::onRollOut(EventContext* context)
{
    getRoot()->hideTooltips();
}

void GuiObject::setDraggable(bool value)
{
    if (_draggable != value)
    {
        _draggable = value;
        initDrag();
    }
}

void GuiObject::setDragBounds(const Rect2& value)
{
    if (_dragBounds == nullptr)
        _dragBounds = new Rect();
    *_dragBounds = value;
}

void GuiObject::startDrag(int touchId)
{
    dragBegin(touchId);
}

void GuiObject::stopDrag()
{
    dragEnd();
}

std::string GuiObject::getResourceURL() const
{
    if (_packageItem != nullptr)
        return "ui://" + _packageItem->owner->getId() + _packageItem->id;
    else
        return "";
}

Vector2 GuiObject::localToGlobal(const Vector2& pt)
{
    return GRoot::getInstance()->worldToRoot(localPointToCanvas(pt));
}

Rect2 GuiObject::localToGlobal(const Rect2& rect)
{
    Rect ret;
    Vector2 v = localToGlobal(rect.position);
    ret.position.x = v.x;
    ret.position.y = v.y;
    v = localToGlobal(Vector2(rect.position.x + rect.size.x, rect.position.y + rect.size.y));
    ret.size.x = v.x - ret.position.x;
    ret.size.y = v.y - ret.position.y;
    return ret;
}

Vector2 GuiObject::localPointToCanvas(const Vector2& pt) const
{
    Vector2 pt2 = pt;
    if (_pivot.x != 0.0f || _pivot.y != 0.0f)
        pt2 += computeContentPivotOffset();
    if (_displayObject == nullptr)
        return pt2;
    return Object::cast_to<CanvasItem>(_displayObject)->get_global_transform_with_canvas().xform(pt2);
}

Vector2 GuiObject::globalToLocal(const Vector2& pt)
{
    Vector2 pt2 = GRoot::getInstance()->rootToWorld(pt);
    pt2 = ((CanvasItem*)_displayObject)->get_global_transform_with_canvas().affine_inverse().xform(pt2);
    return displayLocalToLogical(pt2);
}

Vector2 GuiObject::displayLocalToLogical(const Vector2& displayLocal) const
{
    if (_pivot.x != 0.0f || _pivot.y != 0.0f)
        return displayLocal - computeContentPivotOffset();
    return displayLocal;
}

Rect2 GuiObject::globalToLocal(const Rect2& rect)
{
    Rect ret;
    Vector2 v = globalToLocal(rect.position);
    ret.position.x = v.x;
    ret.position.y = v.y;
    v = globalToLocal(Vector2(rect.position.x + rect.size.x, rect.position.y + rect.size.y));
    ret.size.x = v.x - ret.position.x;
    ret.size.y = v.y - ret.position.y;
    return ret;
}

Rect2 GuiObject::transformRect(const Rect2& rect, GObject* targetSpace)
{
    if (targetSpace == this)
        return rect;

    if (targetSpace == _parent) // optimization
    {
        return Rect((_position.x + rect.position.x) * _scale.x,
                    (_position.y + rect.position.y) * _scale.y,
                    rect.size.x * _scale.x,
                    rect.size.y * _scale.y);
    }
    else
    {
        float result[4]{FLT_MAX, FLT_MAX, -FLT_MAX, -FLT_MAX};

        transformRectPoint(rect.position, result, targetSpace);
        transformRectPoint(Vector2(rect.position.x + rect.size.x, rect.position.y), result, targetSpace);
        transformRectPoint(Vector2(rect.position.x, rect.position.y + rect.size.y), result, targetSpace);
        transformRectPoint(Vector2(rect.position.x + rect.size.x, rect.position.y + rect.size.y), result, targetSpace);

        return Rect(result[0], result[1], result[2] - result[0], result[3] - result[1]);
    }
}

void GuiObject::transformRectPoint(const Vector2& pt, float rect[], GObject* targetSpace)
{
    Vector2 v = localToGlobal(pt);
    if (targetSpace != nullptr)
        v = targetSpace->globalToLocal(v);

    if (rect[0] > v.x)
        rect[0] = v.x;
    if (rect[2] < v.x)
        rect[2] = v.x;
    if (rect[1] > v.y)
        rect[1] = v.y;
    if (rect[3] < v.y)
        rect[3] = v.y;
}

void GuiObject::addRelation(GObject* target, RelationType relationType, bool usePercent)
{
    _relations->add(target, relationType, usePercent);
}

void GuiObject::removeRelation(GObject* target, RelationType relationType)
{
    _relations->remove(target, relationType);
}

GearBase* GuiObject::getGear(int index)
{
    GearBase* gear = _gears[index];
    if (gear == nullptr)
    {
        gear = GearBase::create(this, index);
        _gears[index] = gear;
    }
    return gear;
}

void GuiObject::updateGear(int index)
{
    if (_underConstruct || _gearLocked)
        return;

    GearBase* gear = _gears[index];
    if (gear != nullptr && gear->getController() != nullptr)
        gear->updateState();
}

bool GuiObject::checkGearController(int index, GController* c)
{
    return _gears[index] != nullptr && _gears[index]->getController() == c;
}

void GuiObject::updateGearFromRelations(int index, float dx, float dy)
{
    if (_gears[index] != nullptr)
        _gears[index]->updateFromRelations(dx, dy);
}

uint32_t GuiObject::addDisplayLock()
{
    GearDisplay* gearDisplay = (GearDisplay*)_gears[0];
    if (gearDisplay != nullptr && gearDisplay->getController() != nullptr)
    {
        uint32_t ret = gearDisplay->addLock();
        checkGearDisplay();

        return ret;
    }
    else
        return 0;
}

void GuiObject::releaseDisplayLock(uint32_t token)
{
    GearDisplay* gearDisplay = (GearDisplay*)_gears[0];
    if (gearDisplay != nullptr && gearDisplay->getController() != nullptr)
    {
        gearDisplay->releaseLock(token);
        checkGearDisplay();
    }
}

void GuiObject::checkGearDisplay()
{
    if (_handlingController)
        return;

    bool connected = _gears[0] == nullptr || ((GearDisplay*)_gears[0])->isConnected();
    if (_gears[8] != nullptr)
        connected = dynamic_cast<GearDisplay2*>(_gears[8])->evaluate(connected);

    if (connected != _internalVisible)
    {
        _internalVisible = connected;
        if (_parent != nullptr)
            _parent->childStateChanged(this);
        if (_group != nullptr && _group->isExcludeInvisibles())
            _group->setBoundsChangedFlag();
    }
}

bool GuiObject::onStage() const
{
    if (!_displayObject)
        return false;
    return _displayObject->is_inside_tree();
}

GObject* GuiObject::findParent() const
{
    GObject* self = resolve_live_gobject(const_cast<GuiObject*>(this));
    if (self == nullptr)
        return nullptr;

    if (self->_parent != nullptr)
        return resolve_live_gobject(self->_parent);

    if (self->_displayObject == nullptr)
        return nullptr;

    Node* pn = self->_displayObject->get_parent();
    if (pn == nullptr)
        return nullptr;

    while (pn != nullptr)
    {
        FUIContainer* fc = dynamic_cast<FUIContainer*>(pn);
        if (fc != nullptr && fc->gOwner)
        {
            if (GObject* owner = resolve_live_gobject(fc->gOwner))
                return owner;
        }

        pn = pn->get_parent();
    }

    return nullptr;
}

GRoot* GuiObject::getRoot() const
{
    GObject* p = (GObject*)this;
    while (p->_parent != nullptr)
        p = p->_parent;

    GRoot* root = dynamic_cast<GRoot*>(p);
    if (root != nullptr)
        return root;
    else
        return GRoot::getInstance();
}

void GuiObject::removeFromParent()
{
    if (_parent != nullptr)
        _parent->removeChild(this);
}

Variant GuiObject::getProp(ObjectPropID propId)
{
    switch (propId)
    {
    case ObjectPropID::Text:
        return Variant(toGodotStr(getText()));
    case ObjectPropID::Icon:
        return Variant(toGodotStr(getIcon()));
    default:
        return Variant();
    }
}

void GuiObject::setProp(ObjectPropID propId, const Variant& value)
{
    switch (propId)
    {
    case ObjectPropID::Text:
        return setText(std::string((const char*)value.stringify().utf8().ptr()));
    case ObjectPropID::Icon:
        return setIcon(std::string((const char*)value.stringify().utf8().ptr()));
    default:
        break;
    }
}

void GuiObject::constructFromResource()
{
}

GObject* GuiObject::hitTest(const Vector2& worldPoint, const Camera2D* camera)
{
    if (_touchDisabled || !_touchable || !((CanvasItem*)_displayObject)->is_visible() || !_displayObject->get_parent())
        return nullptr;

    Rect rect;
    rect.size = _size;
    if (rect.has_point(globalToLocal(worldPoint)))
        return this;
    else
        return nullptr;
}

void GuiObject::handleInit()
{
    _displayObject = memnew(FUISprite);

}

void GuiObject::onDisplayTreeEntered()
{
    _enter_tree();
    if (FUISprite* sp = Object::cast_to<FUISprite>(_displayObject))
        sp->queue_redraw();
}

void GuiObject::onDisplayTreeExiting()
{
    _exit_tree();
}

void GuiObject::_enter_tree()
{
    dispatchEvent(UIEventType::Enter);
}

void GuiObject::_exit_tree()
{
    dispatchEvent(UIEventType::Exit);
}

void GuiObject::_ready()
{
}

void GuiObject::_process(double delta)
{
}

void GuiObject::dispose()
{
}

void GuiObject::addChild(Node* node)
{
    if (_displayObject)
        _displayObject->add_child(node);
}

void GuiObject::removeChild(Node* node)
{
    if (_displayObject)
        _displayObject->remove_child(node);
}

GObject* GuiObject::addChild(const Ref<GObject>& child)
{
    addChild(child->displayObject());
    return child.ptr();
}

void GuiObject::removeChild(GObject* child)
{
    removeChild(child->displayObject());
}

void GuiObject::gd_addChild(Object* node)
{
    GObject* go = Object::cast_to<GObject>(node);
    if (go) addChild(Ref<GObject>(go));
}

void GuiObject::gd_removeChild(Object* node)
{
    GObject* go = Object::cast_to<GObject>(node);
    if (go) removeChild(go);
}

Vector2 GuiObject::computeDisplayPosition() const
{
    Vector2 pt = _position;
    if (!_pivotAsAnchor)
    {
        pt.x += _size.width * _pivot.x;
        pt.y += _size.height * _pivot.y;
    }
    // FairyGUI + Godot are both Y-down; do not apply Cocos bottom-left flip here.
    if (_pixelSnapping)
    {
        pt.x = (int)pt.x;
        pt.y = (int)pt.y;
    }
    return pt;
}

Vector2 GuiObject::computeControlPosition() const
{
    Vector2 pt = _pivotAsAnchor ? Vector2(getXMin(), getYMin()) : _position;
    if (_pixelSnapping)
    {
        pt.x = (int)pt.x;
        pt.y = (int)pt.y;
    }
    return pt;
}

void GuiObject::syncControlDisplay()
{
    Control* ctrl = Object::cast_to<Control>(_displayObject);
    if (!ctrl)
        return;
    ctrl->set_position(computeControlPosition());
    ctrl->set_pivot_offset(Vector2(_size.width * _pivot.x, _size.height * _pivot.y));
    ctrl->set_rotation(Math::deg_to_rad(_rotation));
    ctrl->set_scale(computeDisplayScale());
}

Vector2 GuiObject::computeContentPivotOffset() const
{
    // Cocos: setAnchorPoint(pivot.x, 1 - pivot.y) on Y-up engine.
    // Godot Y-down: shift content so node origin sits on the pivot (rotation/scale center).
    return Vector2(-_size.width * _pivot.x, -_size.height * _pivot.y);
}

void GuiObject::applyPivotOffset()
{
    if (!_displayObject)
        return;

    const Vector2 off = computeContentPivotOffset();
    if (FUISprite* sp = Object::cast_to<FUISprite>(_displayObject))
        sp->set_offset(off);
    else if (Control* ctrl = Object::cast_to<Control>(_displayObject))
        ctrl->set_pivot_offset(Vector2(_size.width * _pivot.x, _size.height * _pivot.y));
}

Vector2 GuiObject::computeDisplayScale() const
{
    if (_sizeImplType == 0 || sourceSize.width == 0 || sourceSize.height == 0)
        return Vector2(_scale.x, _scale.y);
    return Vector2(_scale.x * _size.width / sourceSize.width, _scale.y * _size.height / sourceSize.height);
}

void GuiObject::rebuildSkewedTransform()
{
    if (!_displayObject)
        return;

    const Vector2 scale = computeDisplayScale();
    const Vector2 origin = computeDisplayPosition();

    Transform2D xf;
    if (_skewX != 0.0f || _skewY != 0.0f)
    {
        // Godot Y-down: use FairyGUI skew values directly (Cocos negated for Y-up).
        const float radiansX = Math::deg_to_rad(_skewX);
        const float radiansY = Math::deg_to_rad(_skewY);
        xf.columns[0][0] = Math::cos(radiansY) * scale.x;
        xf.columns[0][1] = Math::sin(radiansY) * scale.x;
        xf.columns[1][0] = -Math::sin(radiansX) * scale.y;
        xf.columns[1][1] = Math::cos(radiansX) * scale.y;
        if (_rotation != 0.0f)
        {
            Transform2D rot(Math::deg_to_rad(_rotation), Vector2());
            xf = rot * xf;
        }
    }
    else
    {
        xf.set_rotation(Math::deg_to_rad(_rotation));
        xf.set_scale(scale);
    }
    xf.set_origin(origin);

    if (Object::cast_to<Control>(_displayObject))
    {
        syncControlDisplay();
        return;
    }

    Node2D* node = Object::cast_to<Node2D>(_displayObject);
    if (!node)
        return;

    node->set_transform(xf);
}

void GuiObject::handlePositionChanged()
{
    if (!_displayObject)
        return;

    applyPivotOffset();

    if (_skewX != 0.0f || _skewY != 0.0f)
        rebuildSkewedTransform();
    else if (Node2D* node = Object::cast_to<Node2D>(_displayObject))
        node->set_position(computeDisplayPosition());
    else
        syncControlDisplay();
}

void GuiObject::handleSizeChanged()
{
    if (!_displayObject)
        return;

    // Match Cocos: size change only updates content size or size-impl scale,
    // never rebuilds position / rotation (avoids gear hover artifacts).
    if (_sizeImplType == 0 || sourceSize.width == 0 || sourceSize.height == 0)
    {
        if (FUISprite* sp = Object::cast_to<FUISprite>(_displayObject))
            sp->set_content_size(_size);
    }
    else
        handleScaleChanged();

    applyPivotOffset();
}

void GuiObject::handleScaleChanged()
{
    if (!_displayObject)
        return;

    if (_skewX != 0.0f || _skewY != 0.0f)
        rebuildSkewedTransform();
    else if (Node2D* node = Object::cast_to<Node2D>(_displayObject))
        node->set_scale(computeDisplayScale());
    else
        syncControlDisplay();
}

void GuiObject::handleAlphaChanged()
{
    if (!_displayObject)
        return;

    ((CanvasItem*)_displayObject)->set_self_modulate(Color(1, 1, 1, _alpha));
}

void GuiObject::handleGrayedChanged()
{
    _finalGrayed = (_parent && _parent->_finalGrayed) || _grayed;
}

void GuiObject::refreshGrayedVisual()
{
    handleGrayedChanged();
}

void GuiObject::handleVisibleChanged()
{
    if (_displayObject)
        ((CanvasItem*)_displayObject)->set_visible(internalVisible2());
}

void GuiObject::handleControllerChanged(GController* c)
{
    _handlingController = true;
    for (int i = 0; i < 10; i++)
    {
        GearBase* gear = _gears[i];
        if (gear != nullptr && gear->getController() == c)
            gear->apply();
    }
    _handlingController = false;

    checkGearDisplay();
}

void GuiObject::setup_beforeAdd(ByteBuffer* buffer, int beginPos)
{
    buffer->seek(beginPos, 0);
    buffer->skip(5);

    id = buffer->readS();
    name = buffer->readS();
    float f1 = buffer->readInt();
    float f2 = buffer->readInt();
    setPosition(f1, f2);

    if (buffer->readBool())
    {
        initSize.width = buffer->readInt();
        initSize.height = buffer->readInt();
        setSize(initSize.width, initSize.height, true);
    }

    if (buffer->readBool())
    {
        minSize.width = buffer->readInt();
        maxSize.width = buffer->readInt();
        minSize.height = buffer->readInt();
        maxSize.height = buffer->readInt();
    }

    if (buffer->readBool())
    {
        f1 = buffer->readFloat();
        f2 = buffer->readFloat();
        setScale(f1, f2);
    }

    if (buffer->readBool())
    {
        f1 = buffer->readFloat();
        f2 = buffer->readFloat();
        setSkewX(f1);
        setSkewY(f2);
    }

    if (buffer->readBool())
    {
        f1 = buffer->readFloat();
        f2 = buffer->readFloat();
        setPivot(f1, f2, buffer->readBool());
    }

    f1 = buffer->readFloat();
    if (f1 != 1)
        setAlpha(f1);

    f1 = buffer->readFloat();
    if (f1 != 0)
        setRotation(f1);

    if (!buffer->readBool())
        setVisible(false);
    if (!buffer->readBool())
        setTouchable(false);
    if (buffer->readBool())
        setGrayed(true);
    buffer->readByte(); //blendMode
    buffer->readByte(); //filter

    const std::string& str = buffer->readS();
    if (!str.empty())
        _customData = Variant(toGodotStr(str));
}

void GuiObject::setup_afterAdd(ByteBuffer* buffer, int beginPos)
{
    buffer->seek(beginPos, 1);

    const std::string& str = buffer->readS();
    if (!str.empty())
        setTooltips(str);

    int groupId = buffer->readShort();
    if (groupId >= 0)
        _group = dynamic_cast<GGroup*>(_parent->getChildAt(groupId));

    buffer->seek(beginPos, 2);

    int cnt = buffer->readShort();
    for (int i = 0; i < cnt; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        GearBase* gear = getGear(buffer->readByte());
        gear->setup(buffer);

        buffer->setPos(nextPos);
    }
}

void GuiObject::initDrag()
{
    if (_draggable)
    {
        addEventListener(UIEventType::TouchBegin, [this](EventContext* ctx) { GuiObject::onTouchBegin(ctx); }, EventTag(this));
        addEventListener(UIEventType::TouchMove, [this](EventContext* ctx) { GuiObject::onTouchMove(ctx); }, EventTag(this));
        addEventListener(UIEventType::TouchEnd, [this](EventContext* ctx) { GuiObject::onTouchEnd(ctx); }, EventTag(this));
    }
    else
    {
        removeEventListener(UIEventType::TouchBegin, EventTag(this));
        removeEventListener(UIEventType::TouchBegin, EventTag(this));
        removeEventListener(UIEventType::TouchMove, EventTag(this));
        removeEventListener(UIEventType::TouchEnd, EventTag(this));
    }
}

void GuiObject::dragBegin(int touchId)
{
    if (_draggingObject != nullptr)
    {
        GObject* tmp = _draggingObject;
        _draggingObject->stopDrag();
        _draggingObject = nullptr;
        tmp->dispatchEvent(UIEventType::DragEnd);
    }

    sGlobalDragStart = GRoot::getInstance()->getTouchPosition(touchId);
    sGlobalRect = localToGlobal(Rect(Vector2(), _size));

    _draggingObject = this;
    _dragTesting = true;
    GRoot::getInstance()->getInputProcessor()->addTouchMonitor(touchId, this);

    addEventListener(UIEventType::TouchMove, [this](EventContext* ctx) { GuiObject::onTouchMove(ctx); }, EventTag(this));
    addEventListener(UIEventType::TouchEnd, [this](EventContext* ctx) { GuiObject::onTouchEnd(ctx); }, EventTag(this));
}

void GuiObject::dragEnd()
{
    if (_draggingObject == this) {
        _draggingObject = nullptr;
    }
}

void GuiObject::onTouchBegin(EventContext* context)
{
    _dragTouchStartPos = context->getInput()->getPosition();
    _dragTesting = true;
    context->captureTouch();
}

void GuiObject::onTouchMove(EventContext* context)
{
    InputEvent* evt = context->getInput();

    if (_draggingObject != this && _draggable && _dragTesting)
    {
        int sensitivity = ToolSet::isDesktopInput()
                ? UIConfig::clickDragSensitivity
                : UIConfig::touchDragSensitivity;
        if (std::abs(_dragTouchStartPos.x - evt->getPosition().x) < sensitivity && std::abs(_dragTouchStartPos.y - evt->getPosition().y) < sensitivity)
            return;

        _dragTesting = false;
        if (!dispatchEvent(UIEventType::DragStart))
            dragBegin(evt->getTouchId());
    }

    if (_draggingObject == this)
    {
        float xx = evt->getPosition().x - sGlobalDragStart.x + sGlobalRect.position.x;
        float yy = evt->getPosition().y - sGlobalDragStart.y + sGlobalRect.position.y;

        if (_dragBounds != nullptr)
        {
            Rect2 boundsRect = *_dragBounds;
            if (_parent != nullptr)
                boundsRect = _parent->localToGlobal(boundsRect);
            else
                boundsRect = GRoot::getInstance()->localToGlobal(boundsRect);
            const Rect rect(boundsRect.position.x, boundsRect.position.y, boundsRect.size.x, boundsRect.size.y);
            if (xx < rect.position.x)
                xx = rect.position.x;
            else if (xx + sGlobalRect.size.x > rect.position.x + rect.size.x)
            {
                xx = rect.position.x + rect.size.x - sGlobalRect.size.x;
                if (xx < rect.position.x)
                    xx = rect.position.x;
            }

            if (yy < rect.position.y)
                yy = rect.position.y;
            else if (yy + sGlobalRect.size.y > rect.position.y + rect.size.y)
            {
                yy = rect.position.y + rect.size.y - sGlobalRect.size.y;
                if (yy < rect.position.y)
                    yy = rect.position.y;
            }
        }

        Vector2 pt = _parent->globalToLocal(Vector2(xx, yy));

        sUpdateInDragging = true;
        setPosition(round(pt.x), round(pt.y));
        sUpdateInDragging = false;

        dispatchEvent(UIEventType::DragMove);
    }
}

void GuiObject::onTouchEnd(EventContext* context)
{
    if (_draggingObject == this)
    {
        _draggingObject = nullptr;
        dispatchEvent(UIEventType::DragEnd);
    }
}

void GuiObject::gd_addClickListener(const Callable& callable)
{
    addEventListener(UIEventType::Click, [callable](EventContext* ctx) {
        callable.call();
    });
}

void GuiObject::gd_removeClickListener()
{
    removeEventListener(UIEventType::Click, EventTag::None);
}

void GuiObject::gd_setIcon(const String& icon)
{
    setIcon(icon.utf8().get_data());
}

String GuiObject::gd_getIcon() const
{
    return toGodotStr(getIcon());
}

void GuiObject::gd_setPivot(float xv, float yv, bool asAnchor)
{
    setPivot(xv, yv, asAnchor);
}

Vector2 GuiObject::gd_getPivot() const
{
    return getPivot();
}

Rect2 GuiObject::gd_transformRect(const Rect2& rect, GObject* target_space)
{
    return transformRect(rect, target_space);
}

void GuiObject::gd_setDragBounds(const Rect2& bounds)
{
    setDragBounds(bounds);
}

Ref<GGroup> GuiObject::gd_getGroup() const
{
    return Ref<GGroup>(_group);
}

Ref<GObject> GuiObject::gd_getParent() const
{
    return Ref<GObject>(_parent);
}

Ref<GTreeNode> GuiObject::gd_getTreeNode() const
{
    GTreeNode* node = findTreeNode();
    if (node == nullptr)
        return Ref<GTreeNode>();
    return Ref<GTreeNode>(node);
}

GTreeNode* GuiObject::findTreeNode() const
{
    for (GObject* obj = const_cast<GObject*>(this); obj != nullptr; obj = obj->_parent)
    {
        if (obj->_treeNode != nullptr)
            return obj->_treeNode;
    }
    return nullptr;
}

void GuiObject::gd_addRelation(Object* target, int relation_type, bool use_percent)
{
    GObject* go = Object::cast_to<GObject>(target);
    if (go)
        addRelation(go, (RelationType)relation_type, use_percent);
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
void GuiObject::gd_removeRelation(Object* target, int relation_type)
{
    GObject* go = Object::cast_to<GObject>(target);
    if (go)
        removeRelation(go, (RelationType)relation_type);
}

bool GuiObject::hasProperty(const StringName& property_name) const
{
    const TypedArray<Dictionary> properties = get_property_list();
    for (int i = 0; i < properties.size(); ++i)
    {
        const Dictionary property = properties[i];
        if (property.has("name") && StringName(property["name"]) == property_name)
            return true;
    }
    return false;
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// 枚举常量已从 GuiObject 移除，拆分为独立的枚举容器类：
///   GEnumRelation    - RelationType（关联类型）
///   GEnumAlign       - AlignType（水平对齐）
///   GEnumVAlign      - VertAlignType（垂直对齐）
///   GEnumProp        - ObjectPropID（属性ID）
///   GEnumObject      - ObjectType（对象类型）
///   GEnumPackage     - PackageItemType（包资源类型）
///   GEnumMouse       - MouseButton（鼠标按钮）
///   GEnumKey         - KeyCode（键盘按键）
/// 拆分原因：Godot 类级别常量名必须唯一，不同枚举的同名常量
/// （TEXT/LEFT/RIGHT/CENTER/NONE等）集中在 GuiObject 上会导致冲突。
/// 每个枚举独立为一个 RefCounted 子类后，各自拥有独立命名空间，无冲突。
void GuiObject::_bind_methods()
{
    ClassDB::bind_method(D_METHOD("setX", "value"), &GuiObject::setX);
    ClassDB::bind_method(D_METHOD("getX"), &GuiObject::getX);

    ClassDB::bind_method(D_METHOD("setY", "value"), &GuiObject::setY);
    ClassDB::bind_method(D_METHOD("getY"), &GuiObject::getY);

    ClassDB::bind_method(D_METHOD("setPosition", "x", "y"), &GuiObject::setPosition);
    ClassDB::bind_method(D_METHOD("getPosition"), &GuiObject::getPosition);

    ClassDB::bind_method(D_METHOD("setWidth", "value"), &GuiObject::setWidth);
    ClassDB::bind_method(D_METHOD("getWidth"), &GuiObject::getWidth);

    ClassDB::bind_method(D_METHOD("setHeight", "value"), &GuiObject::setHeight);
    ClassDB::bind_method(D_METHOD("getHeight"), &GuiObject::getHeight);

    ClassDB::bind_method(D_METHOD("setSize", "width", "height", "ignore_pivot"), &GuiObject::setSize, DEFVAL(false));
    ClassDB::bind_method(D_METHOD("getSize"), &GuiObject::getSize);

    ClassDB::bind_method(D_METHOD("setPixelSnapping", "value"), &GuiObject::setPixelSnapping);
    ClassDB::bind_method(D_METHOD("isPixelSnapping"), &GuiObject::isPixelSnapping);

    ClassDB::bind_method(D_METHOD("setScale", "x", "y"), &GuiObject::setScale);
    ClassDB::bind_method(D_METHOD("getScale"), &GuiObject::getScale);
    ClassDB::bind_method(D_METHOD("setScaleX", "value"), &GuiObject::setScaleX);
    ClassDB::bind_method(D_METHOD("getScaleX"), &GuiObject::getScaleX);
    ClassDB::bind_method(D_METHOD("setScaleY", "value"), &GuiObject::setScaleY);
    ClassDB::bind_method(D_METHOD("getScaleY"), &GuiObject::getScaleY);
    ClassDB::bind_method(D_METHOD("tweenScale", "end_value", "duration"), &GuiObject::gd_tweenScale);

    ClassDB::bind_method(D_METHOD("setSkewX", "value"), &GuiObject::setSkewX);
    ClassDB::bind_method(D_METHOD("getSkewX"), &GuiObject::getSkewX);
    ClassDB::bind_method(D_METHOD("setSkewY", "value"), &GuiObject::setSkewY);
    ClassDB::bind_method(D_METHOD("getSkewY"), &GuiObject::getSkewY);

    ClassDB::bind_method(D_METHOD("setRotation", "value"), &GuiObject::setRotation);
    ClassDB::bind_method(D_METHOD("getRotation"), &GuiObject::getRotation);

    ClassDB::bind_method(D_METHOD("setAlpha", "value"), &GuiObject::setAlpha);
    ClassDB::bind_method(D_METHOD("getAlpha"), &GuiObject::getAlpha);

    ClassDB::bind_method(D_METHOD("setGrayed", "value"), &GuiObject::setGrayed);
    ClassDB::bind_method(D_METHOD("isGrayed"), &GuiObject::isGrayed);

    ClassDB::bind_method(D_METHOD("setVisible", "value"), &GuiObject::setVisible);
    ClassDB::bind_method(D_METHOD("isVisible"), &GuiObject::isVisible);

    ClassDB::bind_method(D_METHOD("setTouchable", "value"), &GuiObject::setTouchable);
    ClassDB::bind_method(D_METHOD("isTouchable"), &GuiObject::isTouchable);

    ClassDB::bind_method(D_METHOD("setSortingOrder", "value"), &GuiObject::setSortingOrder);
    ClassDB::bind_method(D_METHOD("getSortingOrder"), &GuiObject::getSortingOrder);

    ClassDB::bind_method(D_METHOD("center"), &GuiObject::center, DEFVAL(false));
    ClassDB::bind_method(D_METHOD("makeFullScreen"), &GuiObject::makeFullScreen);

    ClassDB::bind_method(D_METHOD("setText", "text"), &GuiObject::gd_setText);
    ClassDB::bind_method(D_METHOD("getText"), &GuiObject::gd_getText);

    ClassDB::bind_method(D_METHOD("setName", "name"), &GuiObject::gd_setName);
    ClassDB::bind_method(D_METHOD("getName"), &GuiObject::gd_getName);

    ClassDB::bind_method(D_METHOD("setTooltips", "text"), &GuiObject::gd_setTooltips);
    ClassDB::bind_method(D_METHOD("getTooltips"), &GuiObject::gd_getTooltips);

    ClassDB::bind_method(D_METHOD("setDraggable", "value"), &GuiObject::setDraggable);
    ClassDB::bind_method(D_METHOD("isDraggable"), &GuiObject::isDraggable);

    ClassDB::bind_method(D_METHOD("startDrag", "touch_id"), &GuiObject::startDrag, DEFVAL(-1));
    ClassDB::bind_method(D_METHOD("stopDrag"), &GuiObject::stopDrag);

    ClassDB::bind_method(D_METHOD("getResourceURL"), &GuiObject::gd_getResourceURL);

    // get_parent returns GComponent* which can't be bound directly
    ClassDB::bind_method(D_METHOD("removeFromParent"), &GuiObject::removeFromParent);
    ClassDB::bind_method(D_METHOD("onStage"), &GuiObject::onStage);

    ClassDB::bind_method(D_METHOD("localToGlobal", "pt"), &GuiObject::gd_localToGlobal);
    ClassDB::bind_method(D_METHOD("globalToLocal", "pt"), &GuiObject::gd_globalToLocal);

    ClassDB::bind_method(D_METHOD("addChild", "node"), &GuiObject::gd_addChild);
    ClassDB::bind_method(D_METHOD("removeChild", "node"), &GuiObject::gd_removeChild);

    // GDScript extensions
    ClassDB::bind_method(D_METHOD("setupDisplay"), &GuiObject::init);

    ClassDB::bind_method(D_METHOD("addClickListener", "callable"), &GuiObject::gd_addClickListener);
    ClassDB::bind_method(D_METHOD("removeClickListener"), &GuiObject::gd_removeClickListener);
    ClassDB::bind_method(D_METHOD("setIcon", "icon"), &GuiObject::gd_setIcon);
    ClassDB::bind_method(D_METHOD("getIcon"), &GuiObject::gd_getIcon);
    ADD_PROPERTY(PropertyInfo(Variant::STRING, "icon"), "setIcon", "getIcon");
    ClassDB::bind_method(D_METHOD("setPivot", "x", "y", "as_anchor"), &GuiObject::gd_setPivot, DEFVAL(false));
    ClassDB::bind_method(D_METHOD("getPivot"), &GuiObject::gd_getPivot);
    ClassDB::bind_method(D_METHOD("transformRect", "rect", "target_space"), &GuiObject::gd_transformRect);
    ClassDB::bind_method(D_METHOD("setDragBounds", "bounds"), &GuiObject::gd_setDragBounds);
    ClassDB::bind_method(D_METHOD("getParent"), &GuiObject::gd_getParent);

    ClassDB::bind_method(D_METHOD("setGroup", "group"), &GuiObject::setGroup);
    ClassDB::bind_method(D_METHOD("getGroup"), &GuiObject::gd_getGroup);
    ADD_PROPERTY(PropertyInfo(Variant::OBJECT, "group", PROPERTY_HINT_RESOURCE_TYPE, "GGroup"), "setGroup", "getGroup");

    ClassDB::bind_method(D_METHOD("getInitSize"), &GuiObject::getSize);
    ClassDB::bind_method(D_METHOD("addRelation", "target", "relation_type", "use_percent"), &GuiObject::gd_addRelation, DEFVAL(false));
    ClassDB::bind_method(D_METHOD("removeRelation", "target", "relation_type"), &GuiObject::gd_removeRelation);
    ClassDB::bind_method(D_METHOD("hasProperty", "property_name"), &GuiObject::hasProperty);
    ClassDB::bind_method(D_METHOD("getTreeNode"), &GuiObject::gd_getTreeNode);
}

void GuiObject::gd_setText(const String& text) { setText(text.utf8().get_data()); }
String GuiObject::gd_getText() const { return toGodotStr(getText()); }

void GuiObject::gd_setName(const String& v) { name = v.utf8().get_data(); }
String GuiObject::gd_getName() const { return toGodotStr(name); }
void GuiObject::gd_setTooltips(const String& value) { setTooltips(value.utf8().get_data()); }
String GuiObject::gd_getTooltips() const { return toGodotStr(getTooltips()); }
String GuiObject::gd_getResourceURL() const { return toGodotStr(getResourceURL()); }

NS_FGUI_END
