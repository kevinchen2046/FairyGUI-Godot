extends SceneTree

var _demo: Object

func _initialize() -> void:
    call_deferred("_run")

func _run() -> void:
    var ui := UIConfigHelper.getInstance()
    ui.registerFont("default", "res://Resources/fonts/NotoSansSC-Regular.ttf")
    ui.setDefaultFont("default")

    UIPackage.addPackage("res://Resources/UI/Basics")
    GRoot.create(self)
    var root := GRoot.getInstance()
    if root == null:
        push_error("TextDemo regression: GRoot creation failed")
        quit(1)
        return

    _demo = UIPackage.createObject("Basics", "Demo_Text")
    if _demo == null:
        push_error("TextDemo regression: Demo_Text creation failed")
        quit(1)
        return

    root.addChild(_demo)
    await create_timer(0.25).timeout
    print("TextDemo regression test passed")
    GRoot.cleanup()
    _demo = null
    # Let queued Node frees run before terminating the headless SceneTree.
    await create_timer(0.1).timeout
    quit(0)
