#include "EventContext.h"
#include "GObject.h"

NS_FGUI_BEGIN

EventContext::EventContext() :
    _sender(nullptr),
    _data(nullptr),
    _inputEvent(nullptr),
    _isStopped(false),
    _defaultPrevented(false),
    _touchCapture(0),
    _type(0)
{
}

EventContext::~EventContext()
{

}

void FGUIEventContext::preventDefault()
{
    if (_context != nullptr)
        _context->preventDefault();
}

Variant FGUIEventContext::getData() const
{
    if (_context != nullptr)
        return _context->getDataValue();
    return Variant();
}

int FGUIEventContext::getTouchId() const
{
    if (_context != nullptr && _context->getInput() != nullptr)
        return _context->getInput()->getTouchId();
    return -1;
}

void FGUIEventContext::_bind_methods()
{
    ClassDB::bind_method(D_METHOD("preventDefault"), &FGUIEventContext::preventDefault);
    ClassDB::bind_method(D_METHOD("getData"), &FGUIEventContext::getData);
    ClassDB::bind_method(D_METHOD("getTouchId"), &FGUIEventContext::getTouchId);
}

NS_FGUI_END