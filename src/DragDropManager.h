#ifndef __DRAGDROPMANAGER_H__
#define __DRAGDROPMANAGER_H__

#include "FairyGUIMacros.h"
#include "GLoader.h"

NS_FGUI_BEGIN

class GRoot;

/// @brief 拖放管理器，管理 FairyGUI 的拖放操作。
///
/// DragDropManager 负责：
/// - 创建拖拽代理图标（通过 GLoader 显示拖拽中的图标）
/// - startDrag() 开始拖拽，传入图标 URL 和源数据
/// - cancel() 取消拖拽
/// - 触发全局的 DragEnd 事件
class DragDropManager
{
public:
    DragDropManager();
    ~DragDropManager();

    /// @brief 获取全局单例
    static DragDropManager* getInstance();

    /// @brief 获取拖拽代理对象（GLoader）
    GLoader* getAgent() const { return _agent.ptr(); }

    /// @brief 是否正在拖拽中
    bool isDragging() const { return _agent->getParent() != nullptr; }

    /// @brief 开始拖拽
    /// @param icon 拖拽图标 URL
    /// @param sourceData 拖拽源数据（可选）
    /// @param touchPointID 触摸点 ID（-1 表示自动）
    void startDrag(const std::string& icon, const Variant& sourceData = Variant(), int touchPointID = -1);
    void startDrag(GRoot* root, const std::string& icon, const Variant& sourceData = Variant(), int touchPointID = -1);

    /// @brief 取消拖拽
    void cancel();

private:
    /// @brief 拖拽结束时回调
    void onDragEnd(EventContext* context);

    /// @brief 全局单例
    static DragDropManager* _inst;

    /// @brief 拖拽代理对象
    Ref<GLoader> _agent;

    /// @brief 拖拽源数据
    Variant _sourceData;
    GRoot* _root = nullptr;
};

NS_FGUI_END

#endif
