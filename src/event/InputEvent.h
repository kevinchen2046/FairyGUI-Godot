#ifndef __INPUTEVENT_H__
#define __INPUTEVENT_H__

#include "FairyGUIMacros.h"
#include "godot_types.h"

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"
class InputProcessor;

/// @brief 鼠标按键枚举。
/// 定义各种鼠标操作对应的按键类型。
enum class MouseButton
{
    NONE = 0,       ///< 无按键。
    LEFT = 1,       ///< 鼠标左键。
    RIGHT = 2,      ///< 鼠标右键。
    MIDDLE = 3,     ///< 鼠标中键。
    WHEEL_UP = 4,   ///< 滚轮向上。
    WHEEL_DOWN = 5, ///< 滚轮向下。
    WHEEL_LEFT = 6, ///< 滚轮向左。
    WHEEL_RIGHT = 7 ///< 滚轮向右。
};

/// @brief 键盘按键枚举。
enum class KeyCode
{
    NONE = 0,        ///< 无按键。
    BACKSPACE = 8,   ///< 退格键。
    TAB = 9,         ///< Tab 键。
    ENTER = 13,      ///< 回车键。
    ESCAPE = 27,     ///< Escape 键。
    SPACE = 32,      ///< 空格键。
    LEFT = 37,       ///< 方向键左。
    UP = 38,         ///< 方向键上。
    RIGHT = 39,      ///< 方向键右。
    DOWN = 40,       ///< 方向键下。
    DELETE = 46,     ///< Delete 键。
    A = 65,          ///< A 键。
    C = 67,          ///< C 键。
    V = 86,          ///< V 键。
    X = 88,          ///< X 键。
    Y = 89,          ///< Y 键。
    Z = 90           ///< Z 键。
};

/// @brief 输入事件描述。
/// 封装触摸/鼠标/键盘事件的详细信息：目标对象、坐标、按键、修饰键等。
class InputEvent
{
public:
    InputEvent();
    ~InputEvent();

    /** 获取事件目标对象。 */
    GObject* getTarget() const { return _target; }
    /** 获取事件发生时的 X 坐标（整数）。 */
    const int getX() const { return (int)_pos.x; }
    /** 获取事件发生时的 Y 坐标（整数）。 */
    const int getY() const { return (int)_pos.y; }
    /** 获取事件发生时的坐标。 */
    const Vector2& getPosition() const { return _pos; }
    /** 获取触摸点 ID。 */
    int getTouchId() const { return _touchId; }
    /** 是否是双击事件。 */
    int isDoubleClick() const { return _clickCount == 2; }
    /** 获取鼠标按键类型。 */
    MouseButton getButton() const { return _button; }
    /** 获取键盘按键。 */
    KeyCode getKeyCode() const { return _keyCode; }
    /** Ctrl 键是否按下。 */
    bool isCtrlDown() const { return (_keyModifiers & 1) != 0; }
    /** Alt 键是否按下。 */
    bool isAltDown() const  { return (_keyModifiers & 2) != 0; }
    /** Shift 键是否按下。 */
    bool isShiftDown() const { return (_keyModifiers & 4) != 0; }
    /** 获取鼠标滚轮变化量。 */
    int getMouseWheelDelta() const { return _mouseWheelDelta; }

    /** 获取关联的输入处理器。 */
    InputProcessor* getProcessor() const { return _inputProcessor; }

private:
    GObject* _target;           ///< 事件目标对象。
    Vector2 _pos;               ///< 事件位置坐标。
    int _touchId;               ///< 触摸点 ID。
    int _clickCount;            ///< 点击次数（2 表示双击）。
    int _mouseWheelDelta;       ///< 鼠标滚轮变化量。
    MouseButton _button;        ///< 鼠标按键。
    KeyCode _keyCode;           ///< 键盘按键。
    uint16_t _keyModifiers;     ///< 修饰键位掩码（1=Ctrl, 2=Alt, 4=Shift）。
    InputProcessor* _inputProcessor; ///< 输入处理器。

    friend class InputProcessor;
};

NS_FGUI_END

#endif
