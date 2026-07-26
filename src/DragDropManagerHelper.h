#ifndef __DRAGDROPMANAGER_HELPER_H__
#define __DRAGDROPMANAGER_HELPER_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

class GRoot;

/// @brief DragDropManager 的 Godot 脚本桥接层。
///
/// 将 DragDropManager 的 C++ API 包装为 GDScript 可调用的 RefCounted 接口，
/// 通过 startDrag()、cancel()、isDragging() 方法提供拖放功能。
class DragDropManagerHelper : public RefCounted
{
    GDCLASS(DragDropManagerHelper, RefCounted)

public:
    /// @brief 获取全局单例
    static DragDropManagerHelper* getInstance();
    static Ref<DragDropManagerHelper> gd_getInstance() { return Ref<DragDropManagerHelper>(getInstance()); }

    /// @brief 开始拖拽
    /// @param icon 拖拽图标 URL
    /// @param sourceData 拖拽源数据
    /// @param touchPointID 触摸点 ID
    void startDrag(const String& icon, const Variant& sourceData, int touchPointID);
    void startDragInRoot(GRoot* root, const String& icon, const Variant& sourceData, int touchPointID);

    /// @brief 取消拖拽
    void cancel();

    /// @brief 是否正在拖拽中
    bool isDragging();

    static void _bind_methods();

private:
    static DragDropManagerHelper* _inst;
};

NS_FGUI_END

#endif
