#ifdef FGUI_GDEXTENSION

#include "register_types.h"

#include <godot_cpp/godot.hpp>

using namespace godot;

extern "C" {
GDExtensionBool GDE_EXPORT fairygui_library_init(
        GDExtensionInterfaceGetProcAddress p_get_proc_address,
        const GDExtensionClassLibraryPtr p_library,
        GDExtensionInitialization *r_initialization) {
    GDExtensionBinding::InitObject init_obj(p_get_proc_address, p_library, r_initialization);
    init_obj.register_initializer(initialize_fairygui_module);
    init_obj.register_terminator(uninitialize_fairygui_module);
    init_obj.set_minimum_library_initialization_level(MODULE_INITIALIZATION_LEVEL_SCENE);
    return init_obj.init();
}
}

#endif
