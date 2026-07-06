#ifndef FGUI_GODOT_COMPAT_H
#define FGUI_GODOT_COMPAT_H

#include "core/version.h"

// Godot 4.6 moved several server headers into subdirectories.
#if GODOT_VERSION_MAJOR > 4 || (GODOT_VERSION_MAJOR == 4 && GODOT_VERSION_MINOR >= 6)
#  include "servers/rendering/rendering_server.h"
#  include "servers/display/display_server.h"
#  include "servers/text/text_server.h"
#else
#  include "servers/rendering_server.h"
#  include "servers/display_server.h"
#  include "servers/text_server.h"
#endif

#endif
