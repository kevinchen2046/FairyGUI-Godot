#ifndef __FUIDISPLAYNODE_H__
#define __FUIDISPLAYNODE_H__

#include "FairyGUIMacros.h"
#include "scene/2d/node_2d.h"

NS_FGUI_BEGIN

// Mirrors Node2D child_order_changed wiring; each child must pair connect/disconnect via REFERENCE_COUNTED.
void fui_sync_child_order_changed(Node2D* self, bool p_connect);

NS_FGUI_END

#endif
