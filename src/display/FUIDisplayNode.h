#ifndef __FUIDISPLAYNODE_H__
#define __FUIDISPLAYNODE_H__

#include "FairyGUIMacros.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/node2d.hpp>
#else
#include "scene/2d/node_2d.h"
#endif

NS_FGUI_BEGIN

/// @brief 同步 Node2D 的 child_order_changed 信号连接。
///
/// 每个子节点必须通过 REFERENCE_COUNTED 配对调用 connect/disconnect，
/// 以保持子节点顺序变化的正确同步。
/// @param self 要同步的 Node2D 节点
/// @param p_connect true=连接信号, false=断开信号
void fui_sync_child_order_changed(Node2D* self, bool p_connect);

NS_FGUI_END

#endif
