#include "InputEvent.h"
#include "GObject.h"

NS_FGUI_BEGIN

InputEvent::InputEvent() :
    _touchId(-1),
    _clickCount(0),
    _mouseWheelDelta(0),
    _button(/*EventMouse*/(MouseButton)0),
    _keyCode(/*EventKeyboard*/(KeyCode)0),
    _keyModifiers(0),
    _inputProcessor(nullptr)
{
}

InputEvent::~InputEvent()
{

}


NS_FGUI_END