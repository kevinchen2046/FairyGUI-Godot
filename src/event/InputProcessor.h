#ifndef __INPUTPROCESSOR_H__
#define __INPUTPROCESSOR_H__

#include "FairyGUIMacros.h"
#include "InputEvent.h"
#include <functional>
#include <vector>

NS_FGUI_BEGIN

class GComponent;
class TouchInfo;

/// @brief 输入处理器。
/// 处理所有触摸/鼠标/键盘输入事件，并将其路由到正确的 GObject 目标。
/// 每个 GRoot 实例拥有一个 InputProcessor，负责管理触摸状态、
/// 命中测试、事件分发、RollOver/RollOut 检测等。
class InputProcessor
{
public:
    /** 捕获事件回调类型。 */
    typedef std::function<void(int eventType)> CaptureEventCallback;

    /** 构造输入处理器。
     * @param owner 所属的 GRoot 组件。
     */
    InputProcessor(GComponent* owner);
    ~InputProcessor();

    /** 获取最近一次输入事件。 */
    InputEvent* getRecentInput() { return &_recentInput; }
    /** 检查当前是否有触摸事件在 UI 上。 */
    static bool isTouchOnUI();

    /** 获取指定触摸点 ID 的当前位置。 */
    Vector2 getTouchPosition(int touchId);

    /** 添加触摸监视器（使指定对象持续接收同一触摸点的所有事件）。
     * @param touchId 触摸点 ID。
     * @param target 监视目标对象。
     */
    void addTouchMonitor(int touchId, GObject* target);
    /** 移除指定对象的触摸监视器。 */
    void removeTouchMonitor(GObject* target);

    /** 取消指定触摸点的点击判定。 */
    void cancelClick(int touchId);
    /** 模拟对指定目标执行点击。 */
    void simulateClick(GObject* target, int touchId = -1);

    /** 设置事件捕获回调（用于模态窗口等场景拦截所有事件）。 */
    void setCaptureCallback(CaptureEventCallback value) { _captureCallback = value; }

    // ===== Godot 输入入口 =====

    /** 禁用默认触摸事件处理。 */
    void disableDefaultTouchEvent();
    /** 触摸监听是否已启用。 */
    bool isTouchListenerEnabled() const { return _touchListenerEnabled; }
    /** 处理触摸按下事件。
     * @return true 表示事件被 UI 消费。
     */
    bool onTouchBegin(const Vector2& screenPos, int touchId);
    /** 处理触摸移动事件。 */
    void onTouchMove(const Vector2& screenPos, int touchId);
    /** 处理触摸释放事件。 */
    void onTouchEnd(const Vector2& screenPos, int touchId);
    /** 处理触摸取消事件。 */
    void onTouchCancel(const Vector2& screenPos, int touchId);

    /** 处理鼠标按下事件。 */
    bool onMouseDown(const Vector2& screenPos, int button);
    /** 处理鼠标释放事件。 */
    void onMouseUp(const Vector2& screenPos, int button);
    /** 处理鼠标移动事件（包含 RollOver/RollOut 检测）。 */
    void onMouseMove(const Vector2& screenPos);
    /** 窗口离开时清除当前悬停链，确保触发 RollOut 并允许重新进入触发 RollOver。 */
    void resetRollOver();
    /** 处理鼠标滚轮事件。 */
    void onMouseScroll(const Vector2& screenPos, int delta);

    /** 处理键盘按下事件。 */
    void onKeyDown(int keyCode);
    /** 处理键盘释放事件。 */
    void onKeyUp(int keyCode);

    /** 逐帧更新（处理拖曳和长按等状态）。 */
    void onFrameUpdate();

    static InputProcessor* _activeProcessor; ///< 当前活跃的输入处理器。

private:
    TouchInfo* getTouch(int touchId, bool createIfNotExisits = true);
    void updateRecentInput(TouchInfo* touch, GObject* target);
    void handleRollOver(TouchInfo* touch, GObject* target);
    void setBegin(TouchInfo* touch, GObject* target);
    void setEnd(TouchInfo* touch, GObject* target);
    GObject* clickTest(TouchInfo* touch, GObject* target);

    std::vector<TouchInfo*> _touches;       ///< 所有触摸点信息。
    GComponent* _owner;                     ///< 所属 GRoot 组件。
    CaptureEventCallback _captureCallback;  ///< 事件捕获回调。
    InputEvent _recentInput;                ///< 最近输入事件缓存。
    uint16_t _keyModifiers;                 ///< 当前修饰键状态。
    bool _touchListenerEnabled;             ///< 触摸监听是否启用。

    static bool _touchOnUI;                 ///< 标记触摸是否在 UI 上。
    static unsigned int _touchOnUIFlagFrameId; ///< 触摸在 UI 上的帧标记。

    friend class UIEventDispatcher;
};

NS_FGUI_END

#endif
