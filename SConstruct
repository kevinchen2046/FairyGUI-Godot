#!/usr/bin/env python
import os

env = Environment(tools=["default"], PLATFORM="")

godot_cpp_dir = ARGUMENTS.get("godot_cpp_dir", "godot-cpp")
if not os.path.isfile(os.path.join(godot_cpp_dir, "SConstruct")):
    print("godot-cpp was not found at '%s'." % godot_cpp_dir)
    print("Clone it there or build with: scons godot_cpp_dir=/absolute/path/to/godot-cpp")
    Exit(1)

env["build_profile"] = ARGUMENTS.get("build_profile", "gdextension_build_profile.json")
env = SConscript(
    os.path.join(godot_cpp_dir, "SConstruct"),
    exports={"env": env},
)

env.Append(CPPDEFINES=["FGUI_GDEXTENSION", "SPINE_GODOT_DISABLED", "TYPED_METHOD_BIND"])
env.Append(CPPPATH=[
    ".", "src", "src/event", "src/display", "src/gears", "src/tween",
    "src/utils", "src/utils/html", "src/controller_action",
])

sources = ["register_types.cpp", "gdextension_entry.cpp"]
for directory in [
    "src", "src/event", "src/display", "src/gears", "src/tween",
    "src/utils", "src/utils/html", "src/controller_action",
]:
    sources += Glob(os.path.join(directory, "*.cpp"))

# 嵌入类文档 (Godot 4.3+ 编辑器内帮助支持)
if env["target"] in ["editor", "template_debug", "template_release"]:
    try:
        doc_data = env.GodotCPPDocData("src/gen/doc_data.gen.cpp", source=Glob("doc_classes/*.xml"))
        sources.append(doc_data)
    except AttributeError:
        print("Not including class reference as we're targeting a pre-4.3 baseline.")

suffix = env["suffix"]
if env["platform"] == "macos":
    library = env.SharedLibrary(
        "examples/addons/fairygui/bin/libfairygui.{}.{}.framework/libfairygui.{}.{}".format(
            env["platform"], env["target"], env["platform"], env["target"]
        ),
        source=sources,
    )
elif env["platform"] == "ios":
    ios_variant = ".simulator" if env["ios_simulator"] else ""
    library = env.StaticLibrary(
        "examples/addons/fairygui/bin/libfairygui.{}.{}{}.a".format(
            env["platform"], env["target"], ios_variant
        ),
        source=sources,
    )
else:
    library = env.SharedLibrary(
        "examples/addons/fairygui/bin/libfairygui" + suffix + env["SHLIBSUFFIX"],
        source=sources,
    )
Default(library)
