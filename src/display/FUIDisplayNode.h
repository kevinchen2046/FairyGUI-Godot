#ifndef __FUIDISPLAYNODE_H__
#define __FUIDISPLAYNODE_H__

#include "FairyGUIMacros.h"
#include "scene/2d/node_2d.h"

class Control;

NS_FGUI_BEGIN

// Mirrors Node2D child_order_changed wiring; each child must pair connect/disconnect via REFERENCE_COUNTED.
void fui_sync_child_order_changed(Node2D* self, bool p_connect);

// Skip duplicate ENTER_CANVAS / READY on FairyGUI Control nodes (CanvasLayer / GRoot mass enter).
// Returns true when the notification was fully handled and Control::_notification must not run.
bool fui_control_handle_notification(Control* self, int p_what, uint8_t& state);

NS_FGUI_END

#endif
