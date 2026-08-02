extends SceneTree

func _init() -> void:
	var host := Node2D.new()
	root.add_child(host)
	var gui_root := GRoot.create(host)

	# A nested subtree must not escape above a later sibling through relative z sums.
	var parent := GComponent.new()
	var back := GComponent.new()
	var front := GComponent.new()
	gui_root.addChild(parent)
	parent.addChild(back)
	for i in range(4):
		back.addChild(GComponent.new())
	parent.addChild(front)

	assert(back.getDisplayObject().get_index() < front.getDisplayObject().get_index())
	assert(back.getDisplayObject().z_index == 0)
	assert(front.getDisplayObject().z_index == 0)
	for i in range(back.numChildren()):
		assert(back.getChildAt(i).getDisplayObject().z_index == 0)

	# sortingOrder is represented by FairyGUI/tree ordering, not accumulated z values.
	var normal := GComponent.new()
	var sorted_high := GComponent.new()
	var sorted_low := GComponent.new()
	sorted_high.sortingOrder = 20
	sorted_low.sortingOrder = 10
	parent.addChild(sorted_high)
	parent.addChild(normal)
	parent.addChild(sorted_low)
	assert(parent.getChildAt(parent.numChildren() - 2) == sorted_low)
	assert(parent.getChildAt(parent.numChildren() - 1) == sorted_high)
	assert(sorted_low.getDisplayObject().z_index == 0)
	assert(sorted_high.getDisplayObject().z_index == 0)

	print("FairyGUI sorting regression test passed")
	quit()
