#ifndef FAIRYGUI_REGISTER_TYPES_H
#define FAIRYGUI_REGISTER_TYPES_H

#ifdef FGUI_GDEXTENSION
#include <godot_cpp/core/class_db.hpp>
using godot::ModuleInitializationLevel;
#else
#include "modules/register_module_types.h"
#endif

void initialize_fairygui_module(ModuleInitializationLevel p_level);
void uninitialize_fairygui_module(ModuleInitializationLevel p_level);

#endif
