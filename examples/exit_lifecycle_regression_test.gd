extends SceneTree

func _initialize() -> void:
	call_deferred("_run")

func _run() -> void:
	# A registered Script must be released before Godot bindings shut down,
	# rather than by a static std::function destructor at process exit.
	UIObjectFactoryHelper.getInstance().setPackageItemExtension("ui://exit_regression",load("res://exit_lifecycle_regression_test.gd"))
	var host:=Node.new()
	root.add_child(host)
	var first:=GRoot.create(host)
	var second_host:=Node.new()
	root.add_child(second_host)
	var second:=GRoot.create(second_host)
	first.addChild(GComponent.new())
	second.addChild(GComponent.new())
	# Retain FairyGUI wrappers after their Godot display Nodes are gone.
	host.queue_free()
	second_host.queue_free()
	await process_frame
	await process_frame
	assert(first.getDisplayObject()==null)
	assert(second.getDisplayObject()==null)
	GRoot.cleanup()
	GRoot.cleanup()
	assert(GRoot.getInstance()==null)
	first=null
	second=null
	await process_frame
	print("PASS: destroyed display nodes, multiple roots and repeated cleanup")
	# Also cover automatic extension cleanup without an explicit cleanup call.
	GRoot.create(root).addChild(GComponent.new())
	quit()
