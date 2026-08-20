#ifndef __EVENTCONTEXT_H__
#define __EVENTCONTEXT_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "InputEvent.h"

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"
class InputProcessor;

/// @brief 事件上下文（C++ 内部使用）。
/// 封装事件相关数据：事件类型、发送者、输入事件、数据等。
/// 通常不直接使用，而是通过 FGUIEventContext 在 GDScript 中访问。
class EventContext
{
public:
    EventContext();
    ~EventContext();

    /** 获取事件类型。 */
    int getType() const { return _type; }
    /** 获取事件发送者。 */
    RefCounted* getSender() const { return _sender; }
    /** 获取最初派发事件的目标。冒泡过程中保持不变。 */
    RefCounted* getTarget() const { return _target; }
    /** 获取关联的输入事件。 */
    InputEvent* getInput() const { return _inputEvent; }
    /** 阻止事件冒泡。 */
    void stopPropagation() { _isStopped = true; }
    /** 阻止默认行为。 */
    void preventDefault() { _defaultPrevented = true; }
    /** 是否已阻止默认行为。 */
    bool isDefaultPrevented() { return _defaultPrevented; }
    /** 捕获触摸（使后续触摸事件只发送给此对象）。 */
    void captureTouch() { _touchCapture = 1; }
    /** 取消捕获触摸。 */
    void uncaptureTouch() { _touchCapture = 2; }

    /** 获取附带的数据值（Variant 类型）。 */
    const Variant& getDataValue() const { return _dataValue; }
    /** 获取附带的数据指针（C++ 使用）。 */
    void* getData() const { return _data; }

private:
    RefCounted* _sender;       ///< 事件发送者。
    RefCounted* _target;       ///< 最初派发事件的目标。
    InputEvent* _inputEvent;   ///< 关联的输入事件。
    Variant _dataValue;        ///< 附带数据（Variant）。
    void* _data;               ///< 附带数据（指针）。
    bool _isStopped;           ///< 是否已阻止冒泡。
    bool _defaultPrevented;    ///< 是否已阻止默认行为。
    int _touchCapture;         ///< 触摸捕获状态：0=未捕获, 1=开始捕获, 2=取消捕获。
    int _type;                 ///< 事件类型。

    friend class UIEventDispatcher;
    friend class FGUIEventContext;
};

/// @brief FairyGUI 事件上下文（GDScript 可访问）。
/// 在 addEventListener 的回调中作为参数传入，提供：
/// - 阻止默认行为 (preventDefault)
/// - 获取附带数据 (getData)
/// - 获取列表项文本 (getItemText)
/// - 获取触摸 ID (getTouchId)
class FGUIEventContext : public RefCounted
{
    GDCLASS(FGUIEventContext, RefCounted)

public:
    /** 绑定到内部 EventContext。 */
    void bind(EventContext* context) { _context = context; }

    /** 阻止事件的默认行为。
     * 例如在右键点击事件中阻止浏览器默认菜单。
     */
    void preventDefault();
    /** 获取事件类型（UIEventDispatcher 常量值）。 */
    int getType() const;
    /** 获取当前处理事件的对象；冒泡时会随处理层级变化。 */
    Ref<RefCounted> getSender() const;
    /** 获取最初派发事件的对象；冒泡过程中保持不变。 */
    Ref<RefCounted> getTarget() const;
    /** 获取事件携带的数据。 */
    Variant getData() const;
    /** ClickItem 等事件的列表项文本；不返回 GuiObject，供 GodotJS 等避免对象绑定崩溃。 */
    String getItemText() const;
    /** 获取当前触摸点的 ID。 */
    int getTouchId() const;

protected:
    static void _bind_methods();

private:
    EventContext* _context = nullptr;
};

NS_FGUI_END

#endif
