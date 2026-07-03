#ifndef __EVENTCONTEXT_H__
#define __EVENTCONTEXT_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "InputEvent.h"

NS_FGUI_BEGIN

class GObject;
class InputProcessor;

class EventContext
{
public:
    EventContext();
    ~EventContext();

    int getType() const { return _type; }
    RefCounted* getSender() const { return _sender; }
    InputEvent* getInput() const { return _inputEvent; }
    void stopPropagation() { _isStopped = true; }
    void preventDefault() { _defaultPrevented = true; }
    bool isDefaultPrevented() { return _defaultPrevented; }
    void captureTouch() { _touchCapture = 1; }
    void uncaptureTouch() { _touchCapture = 2; }

    const Variant& getDataValue() const { return _dataValue; }
    void* getData() const { return _data; }

private:
    RefCounted* _sender;
    InputEvent* _inputEvent;
    Variant _dataValue;
    void* _data;
    bool _isStopped;
    bool _defaultPrevented;
    int _touchCapture;
    int _type;

    friend class UIEventDispatcher;
    friend class FGUIEventContext;
};

class FGUIEventContext : public RefCounted
{
    GDCLASS(FGUIEventContext, RefCounted)

public:
    void bind(EventContext* context) { _context = context; }

    void preventDefault();
    Variant getData() const;
    int getTouchId() const;

protected:
    static void _bind_methods();

private:
    EventContext* _context = nullptr;
};

NS_FGUI_END

#endif
