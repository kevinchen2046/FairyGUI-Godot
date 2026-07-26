extends SceneTree

func _init() -> void:
	var host_a := Node2D.new()
	var host_b := Node2D.new()
	root.add_child(host_a)
	root.add_child(host_b)

	var root_a := GRoot.create(host_a)
	var root_b := GRoot.create(host_b)
	assert(root_a != null and root_b != null)
	assert(root_a != root_b)
	assert(GRoot.getInstance() == root_a)
	assert(root_a.getDisplayObject() != root_b.getDisplayObject())

	var view_a := GComponent.new()
	var view_b := GComponent.new()
	root_a.addChild(view_a)
	root_b.addChild(view_b)
	assert(view_a.getDisplayObject() != null)
	assert(view_b.getDisplayObject() != null)
	print("FairyGUI multi-root smoke test passed")
	quit()
