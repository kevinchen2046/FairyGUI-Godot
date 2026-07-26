#ifndef __UIEVENTDISPATCHER_H__
#define __UIEVENTDISPATCHER_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#ifdef FGUI_GDEXTENSION
#include <vector>
#else
#include "core/templates/local_vector.h"
#endif
#include "EventContext.h"
#include "UIEventType.h"

NS_FGUI_BEGIN

/** FairyGUI 事件回调类型。
 * @param context 事件上下文。
 */
typedef std::function<void(EventContext* context)> EventCallback;

/// @brief 事件标签。
/// 用于标识事件监听器，便于精确移除。可以使用指针、整数或默认值。
class EventTag
{
public:
    static const EventTag None;  ///< 空标签（不参与匹配）。

    EventTag();
    explicit EventTag(void* ptr);
    explicit EventTag(int value);
    explicit EventTag(const EventTag& other);
    explicit EventTag(EventTag&& other);
    ~EventTag();

    EventTag& operator= (const EventTag& other);
    EventTag& operator= (EventTag&& other);
    EventTag& operator= (void* ptr);
    EventTag& operator= (int v);

    bool operator!= (const EventTag& v);
    bool operator!= (const EventTag& v) const;
    bool operator== (const EventTag& v);
    bool operator== (const EventTag& v) const;

    /** 是否为空标签。 */
    bool isNone() const { return _value == 0; }

private:
    uintptr_t _value;  ///< 标签值（指针或整数）。
};

class InputProcessor;

/// @brief FairyGUI 事件分发器基类。
/// 提供标准的事件监听和分发机制：
/// - addEventListener / removeEventListener：注册和移除事件监听
/// - dispatchEvent：向当前对象直接分发事件（不冒泡）
/// - bubbleEvent：向当前对象及其父级链冒泡分发事件
///
/// 所有 GObject 都继承自 UIEventDispatcher，因此所有 UI 对象都支持事件。
class UIEventDispatcher : public RefCounted
{
    GDCLASS(UIEventDispatcher, RefCounted)

public:
    UIEventDispatcher();
    virtual ~UIEventDispatcher();

    static void _bind_methods();

    /** 添加事件监听器（无标签）。
     * @param eventType 事件类型（参考 UIEventType 常量）。
     * @param callback 事件回调函数。
     */
    void addEventListener(int eventType, const EventCallback& callback) { return addEventListener(eventType, callback, EventTag::None); }
    /** 添加事件监听器（带标签）。
     * @param tag 事件标签，用于精确移除。
     */
    void addEventListener(int eventType, const EventCallback& callback, const EventTag& tag);
    /** 移除指定事件类型的所有监听器（无标签）。 */
    void removeEventListener(int eventType) { removeEventListener(eventType, EventTag::None); }
    /** 移除指定事件类型和标签的监听器。 */
    void removeEventListener(int eventType, const EventTag& tag);
    /** 移除所有事件监听器。 */
    void removeEventListeners();
    /** 检查是否有指定事件类型的监听器。 */
    bool hasEventListener(int eventType) const { return hasEventListener(eventType, EventTag::None); }
    /** 检查是否有指定事件类型和标签的监听器。 */
    bool hasEventListener(int eventType, const EventTag& tag) const;

    /** 向当前对象分发事件（不冒泡）。
     * @param eventType 事件类型。
     * @param data 附带数据指针（可选）。
     * @param dataValue 附带数据值（可选，Variant 类型）。
     * @return true 如果事件被阻止默认行为。
     */
    bool dispatchEvent(int eventType, void* data = nullptr, const Variant& dataValue = Variant());
    /** 沿父级链冒泡分发事件。
     * @return true 如果事件被阻止默认行为。
     */
    bool bubbleEvent(int eventType, void* data = nullptr, const Variant& dataValue = Variant());

    /** 检查指定事件类型的监听器是否正在分发中。 */
    bool isDispatchingEvent(int eventType);

    // Callable-based event handling for GDScript
    /** GDScript：添加事件监听器。
     * @param eventType 事件类型（参考 GuiObject.ROLLOVER 等常量）。
     * @param callable GDScript Callable（支持 func() 和 func(evt) 两种形式）。
     */
    void gd_addEventListener(int eventType, const Callable& callable);
    /** GDScript：移除事件监听器。 */
    void gd_removeEventListener(int eventType);
    /** GDScript：直接发送事件，不冒泡。data 会通过 FGUIEventContext.getData() 获取。 */
    bool gd_emit(int eventType, const Variant& data = Variant());
    /** GDScript：发送并沿父级链冒泡事件。 */
    bool gd_emitBubble(int eventType, const Variant& data = Variant());
    /** GDScript：判断指定事件是否存在监听器。 */
    bool gd_hasEventListener(int eventType) const;
    /** GDScript：移除当前对象的全部 FairyGUI 事件监听器。 */
    void gd_removeAllEventListeners();

private:
    void doDispatch(int eventType, EventContext* context);
    void doBubble(int eventType, EventContext* context);

    /// 事件回调项（内部存储结构）。
    struct EventCallbackItem
    {
        EventCallback callback;       ///< 回调函数。
        int eventType;                ///< 事件类型。
        EventTag tag;                 ///< 事件标签。
        int dispatching;              ///< 当前分发深度（用于防止递归）。
        bool pending_delete = false;  ///< 标记为待删除（延迟释放）。
    };
    std::vector<EventCallbackItem*> _callbacks; ///< 回调列表。
    int _dispatching;                           ///< 当前分发计数器。

#ifdef FGUI_GDEXTENSION
    static std::vector<EventCallbackItem*> _deferred_callback_items;
#else
    static LocalVector<EventCallbackItem*> _deferred_callback_items;
#endif
    /** 调度延迟删除回调项（安全地推迟到分发结束后执行）。 */
    static void _schedule_callback_item_delete(EventCallbackItem* p_item);

public:
    /** 延迟释放含脚本 Callable 的监听器项，避免 GodotJS 在 V8 回调栈内析构 JSCallable。 */
    static void flush_deferred_callback_items();
};

NS_FGUI_END

#endif
