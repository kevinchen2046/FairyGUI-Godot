# Exit lifecycle regression

The extension must release captured Script/Callable references before Godot's
bindings shut down, not from process-exit C++ static destructors. All registered
GRoot instances are cleaned up, and display nodes are resolved by instance ID
before late teardown accesses them. Godot retains ownership of display children.

Run from the repository root:

```sh
godot --headless --path examples --script res://exit_lifecycle_regression_test.gd
godot --rendering-method gl_compatibility --path examples --script res://exit_lifecycle_regression_test.gd
godot --headless --path examples --script res://multi_root_smoke_test.gd
godot --headless --path examples --script res://sorting_regression_test.gd
```

The test covers multiple roots, display nodes destroyed before their wrappers,
idempotent explicit cleanup, captured scripts, and automatic exit cleanup.

macOS editor and release binaries were built with `arch=universal` (x86_64 and
arm64). Build targets sequentially: the current SConstruct shares object paths.
Restart the Godot editor after replacing the extension (`reloadable=false`).

Known follow-ups: the full game's exit still reports resource leaks. An extra
Forward+ run of the minimal lifecycle test crashed inside Godot; Compatibility
and headless tests pass. Neither is claimed resolved by this patch.
