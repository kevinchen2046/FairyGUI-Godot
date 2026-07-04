#include "FUIDisplayNode.h"
#include "scene/main/canvas_item.h"
#include "scene/main/node.h"
#include "scene/main/viewport.h"
#include "scene/main/canvas_layer.h"
#include "scene/gui/control.h"
#include "core/object/callable_method_pointer.h"

NS_FGUI_BEGIN

// Access Control protected callables for is_connected checks (must match engine connect targets).
class FUIControlNotifyAccess : public Control {
protected:
    static Callable size_changed_callable(Control* self)
    {
        return callable_mp(self, &Control::_size_changed);
    }
#ifdef DEBUG_ENABLED
    static Callable clear_size_warning_callable(Control* self)
    {
        return callable_mp(self, &Control::_clear_size_warning);
    }
#endif
};

static bool fui_control_canvas_wired(Control* self)
{
    const Callable size_cb = FUIControlNotifyAccess::size_changed_callable(self);
    if (CanvasItem* parent_item = self->get_parent_item())
        return parent_item->is_connected(SNAME("item_rect_changed"), size_cb);
    if (Viewport* viewport = self->get_viewport())
        return viewport->is_connected(SNAME("size_changed"), size_cb);
    return false;
}

bool fui_control_handle_notification(Control* self, int p_what, uint8_t& state)
{
    if (self == nullptr)
        return false;

    if (p_what == CanvasItem::NOTIFICATION_ENTER_CANVAS)
    {
        if (state & 1)
            return true;
        // Stale wiring: disconnect before reconnect (missed EXIT_CANVAS during GRoot cleanup).
        if (fui_control_canvas_wired(self))
            Control::_notification(CanvasItem::NOTIFICATION_EXIT_CANVAS);
        state |= 1;
        return false;
    }
    if (p_what == CanvasItem::NOTIFICATION_EXIT_CANVAS)
    {
        if (!(state & 1))
        {
            if (!fui_control_canvas_wired(self))
                return true;
        }
        state &= ~1;
        return false;
    }
#ifdef DEBUG_ENABLED
    if (p_what == Node::NOTIFICATION_READY)
    {
        if (state & 2)
            return true;
        const Callable clear_cb = FUIControlNotifyAccess::clear_size_warning_callable(self);
        if (self->is_connected(SNAME("ready"), clear_cb))
        {
            state |= 2;
            return true;
        }
        state |= 2;
        return false;
    }
#endif
    if (p_what == Node::NOTIFICATION_EXIT_TREE)
    {
        state = 0;
        return false;
    }
    return false;
}

NS_FGUI_END

NS_FGUI_BEGIN

void fui_sync_child_order_changed(Node2D* self, bool p_connect)
{
    if (self == nullptr)
        return;

    Viewport* viewport = self->get_viewport();
    Node* parent = self->get_parent();
    if (!viewport || !parent)
        return;

    // GRoot mounts content on CanvasLayer; it uses canvas_parent_mark_dirty, not gui_set_root_order_dirty.
    // Node2D under CanvasLayer must not wire gui_set_root_order_dirty on the layer (cleanup disconnect errors).
    if (Object::cast_to<CanvasLayer>(parent))
        return;

    Callable callable = callable_mp(viewport, &Viewport::gui_set_root_order_dirty);
    if (p_connect)
    {
        // Always connect: REFERENCE_COUNTED increments ref when the slot already exists.
        // Skipping connect when is_connected left exit disconnect unbalanced (ERR on parent).
        parent->connect(SNAME("child_order_changed"), callable, Object::CONNECT_REFERENCE_COUNTED);
    }
    else if (parent->is_connected(SNAME("child_order_changed"), callable))
    {
        parent->disconnect(SNAME("child_order_changed"), callable);
    }
}

NS_FGUI_END
