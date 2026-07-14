# Standalone GDExtension build

The original in-tree Godot module build remains supported. The standalone
build defines `FGUI_GDEXTENSION` and currently disables the optional Spine
integration.

## Prerequisites

- Godot 4.7
- Python 3 and SCons
- A current `godot-cpp` checkout compatible with the Godot 4.7 extension API
- A C++ compiler supported by Godot

Clone `godot-cpp` next to this file, or keep it elsewhere and pass its path to
SCons:

```powershell
git clone --recursive https://github.com/godotengine/godot-cpp.git godot-cpp
& "D:\godot\Godot_v4.7-stable_win64_console.exe" --headless --dump-extension-api
scons platform=windows target=editor godot_cpp_dir=godot-cpp custom_api_file=extension_api.json -j8
```

The build writes the extension library into
`examples/addons/fairygui/bin`. The descriptor is
`examples/addons/fairygui/fairygui.gdextension`.

The Windows x86_64 editor and template-release targets compile against the
Godot 4.7 extension API. Spine support remains disabled for the standalone
build.

For a native diagnostic build with full source-level symbols:

```powershell
scons platform=windows target=editor dev_build=yes debug_symbols=yes `
  custom_api_file=extension_api.json -j8
.\tools\run_godot_native_debug.ps1
```

Reproduce the crash in the editor. Godot output is written to
`diagnostics/godot.log`; GDB writes all native thread backtraces to
`diagnostics/native-crash.log`.

The TextDemo path also has a headless regression test:

```powershell
& "D:\godot\Godot_v4.7-stable_win64_console.exe" --headless `
  --path examples --script res://text_demo_regression_test.gd
```

Run the registration smoke test with:

```powershell
& "D:\godot\Godot_v4.7-stable_win64_console.exe" --headless `
  --path examples --script res://gdextension_smoke_test.gd
```
