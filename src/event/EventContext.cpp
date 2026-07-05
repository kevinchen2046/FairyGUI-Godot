#include "EventContext.h"
#include "GObject.h"
#include "GTreeNode.h"

NS_FGUI_BEGIN

EventContext::EventContext() :
    _sender(nullptr),
    _inputEvent(nullptr),
    _data(nullptr),
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
    if (_context == nullptr)
        return Variant();

    const Variant& value = _context->getDataValue();
    if (value.get_type() != Variant::NIL)
        return value;

    if (void* data = _context->getData())
        return Variant(Ref<GObject>(static_cast<GObject*>(data)));

    return Variant();
}

String FGUIEventContext::getItemText() const
{
    if (_context == nullptr)
        return String();

    const Variant& value = _context->getDataValue();
    if (value.get_type() == Variant::STRING)
        return value;
    if (value.get_type() == Variant::STRING_NAME)
        return value;

    if (void* data = _context->getData())
    {
        GObject* obj = static_cast<GObject*>(data);
        const std::string& text = obj->getText();
        if (!text.empty())
            return GObject::toGodotStr(text);
        if (GTreeNode* node = obj->findTreeNode())
            return GObject::toGodotStr(node->getText());
    }

    return String();
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
    ClassDB::bind_method(D_METHOD("getItemText"), &FGUIEventContext::getItemText);
    ClassDB::bind_method(D_METHOD("getTouchId"), &FGUIEventContext::getTouchId);
}

NS_FGUI_END