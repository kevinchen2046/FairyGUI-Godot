extends SceneTree

var _failed := false

func _initialize() -> void:
	call_deferred("_run")

func _check(condition: bool, message: String) -> void:
	if not condition:
		push_error("Controller gear regression: " + message)
		_failed = true

func _run() -> void:
	UIPackage.addPackage("res://Resources/UI/Basics")
	UIPackage.addPackage("res://Resources/UI/PullToRefresh")
	UIPackage.addPackage("res://Resources/UI/TreeView")
	GRoot.create(self)

	var demo := UIPackage.createObject("Basics", "Demo_Controller")
	GRoot.getInstance().addChild(demo)
	var controller: Variant = demo.getController("c1")
	controller.selectedIndex = 1
	await create_timer(0.5).timeout

	var n3: Variant = demo.getChild("n3")
	_check(n3.getPosition() == Vector2(60, 328), "XY gear")
	_check(n3.getSize() == Vector2(196, 174), "size gear")
	_check(n3.getScale() == Vector2.ONE, "scale gear")
	var n7: Variant = demo.getChild("n7")
	_check(n7.getPosition() == Vector2(314, 349), "XY gear on image")
	_check(n7.getSize() == Vector2(132, 132), "size gear on image")
	_check(is_equal_approx(n7.getAlpha(), 0.54), "alpha gear")
	_check(is_equal_approx(n7.getRotation(), 180), "rotation gear")
	_check(not n7.isGrayed() and not n7.isTouchable(), "grayed/touchable gear")
	_check(demo.getChild("n6").get("color") == Color.BLACK, "text color gear")
	var image_color: Color = demo.getChild("n9").get("imageColor")
	_check(image_color.is_equal_approx(Color("66ff99")), "image color gear")

	var header := UIPackage.createObject("PullToRefresh", "Header")
	var header_controller: Variant = header.getController("c1")
	header_controller.selectedIndex = 1
	_check(header.getChild("n1").getText() == "Release to refresh", "text gear")

	var tree_item := UIPackage.createObject("TreeView", "TreeItem")
	var expanded: Variant = tree_item.getController("expanded")
	expanded.selectedIndex = 0
	var collapsed_icon: Variant = tree_item.getChild("icon").getIcon()
	expanded.selectedIndex = 1
	_check(tree_item.getChild("icon").getIcon() != collapsed_icon, "icon gear")

	var button52 := UIPackage.createObject("Basics", "Button52")
	var grayed_controller: Variant = button52.getController("grayed")
	var button52_icon: Variant = button52.getChild("icon")
	grayed_controller.selectedIndex = 0
	_check(not button52_icon.isGrayed(), "grayed gear false state")
	grayed_controller.selectedIndex = 1
	_check(button52_icon.isGrayed(), "grayed gear true state")

	if _failed:
		GRoot.cleanup()
		quit(1)
		return
	print("Controller gear regression test passed")
	GRoot.cleanup()
	quit()
