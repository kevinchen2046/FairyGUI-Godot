#include "FUIDisplayNode.h"
#include "scene/main/node.h"
#include "scene/main/viewport.h"
#include "scene/main/canvas_layer.h"
#include "core/object/callable_method_pointer.h"

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
