#ifndef FGUI_GODOT_COMPAT_H
#define FGUI_GODOT_COMPAT_H

#include "core/version.h"
#include "core/variant/dictionary.h"

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

// Godot 4.6+: Dictionary::operator[] errors when the key is missing; use get_valid/get instead.
inline Variant fgui_dictionary_get(const Dictionary& p_dict, const String& p_key)
{
    return p_dict.get_valid(p_key);
}

#endif
