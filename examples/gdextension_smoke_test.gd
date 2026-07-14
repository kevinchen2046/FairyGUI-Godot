extends SceneTree

const REQUIRED_CLASSES := [
    "GuiObject",
    "GComponent",
    "GRoot",
    "GButton",
    "GList",
    "UIPackage",
    "FUIContainer",
    "FUISprite",
]

func _initialize() -> void:
    var missing: Array[String] = []
    for required_class in REQUIRED_CLASSES:
        if not ClassDB.class_exists(required_class):
            missing.append(required_class)

    if missing.is_empty():
        print("FairyGUI GDExtension smoke test passed")
        quit(0)
    else:
        push_error("Missing FairyGUI classes: %s" % [missing])
        quit(1)
