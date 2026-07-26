#include "DragDropManagerHelper.h"
#include "DragDropManager.h"
#include "GRoot.h"

NS_FGUI_BEGIN

DragDropManagerHelper* DragDropManagerHelper::_inst = nullptr;

DragDropManagerHelper* DragDropManagerHelper::getInstance()
{
    if (_inst == nullptr)
    {
#ifdef FGUI_GDEXTENSION
        Ref<DragDropManagerHelper> instance = memnew(DragDropManagerHelper);
        _inst = instance.ptr();
#else
        _inst = memnew(DragDropManagerHelper);
#endif
        _inst->reference();
    }
    return _inst;
}

void DragDropManagerHelper::startDrag(const String& icon, const Variant& sourceData, int touchPointID)
{
    DragDropManager::getInstance()->startDrag(icon.utf8().get_data(), sourceData, touchPointID);
}

void DragDropManagerHelper::startDragInRoot(GRoot* root, const String& icon, const Variant& sourceData, int touchPointID)
{
    DragDropManager::getInstance()->startDrag(root, icon.utf8().get_data(), sourceData, touchPointID);
}

void DragDropManagerHelper::cancel()
{
    DragDropManager::getInstance()->cancel();
}

bool DragDropManagerHelper::isDragging()
{
    return DragDropManager::getInstance()->isDragging();
}

void DragDropManagerHelper::_bind_methods()
{
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getInstance"), &DragDropManagerHelper::gd_getInstance);
    ClassDB::bind_method(D_METHOD("startDrag", "icon", "source_data", "touch_point_id"), &DragDropManagerHelper::startDrag, DEFVAL(Variant()), DEFVAL(-1));
    ClassDB::bind_method(D_METHOD("startDragInRoot", "root", "icon", "source_data", "touch_point_id"), &DragDropManagerHelper::startDragInRoot, DEFVAL(Variant()), DEFVAL(-1));
    ClassDB::bind_method(D_METHOD("cancel"), &DragDropManagerHelper::cancel);
    ClassDB::bind_method(D_METHOD("isDragging"), &DragDropManagerHelper::isDragging);
}

NS_FGUI_END
