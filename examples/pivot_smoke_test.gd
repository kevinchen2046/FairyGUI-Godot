extends SceneTree

func _init() -> void:
	var host := Node2D.new()
	root.add_child(host)
	var gui_root := GRoot.create(host)

	var normal := GComponent.new()
	var normal_child := GComponent.new()
	normal.setSize(100, 80)
	normal.setPosition(10, 20)
	normal.setPivot(0.5, 0.5, false)
	normal.addChild(normal_child)
	gui_root.addChild(normal)
	assert(normal_child.getDisplayObject().global_position == Vector2(10, 20))

	var anchored := GComponent.new()
	var anchored_child := GComponent.new()
	anchored.setSize(100, 80)
	anchored.setPosition(60, 60)
	anchored.setPivot(0.5, 0.5, true)
	anchored.addChild(anchored_child)
	gui_root.addChild(anchored)
	assert(anchored_child.getDisplayObject().global_position == Vector2(10, 20))

	print("FairyGUI pivot smoke test passed")
	quit()
