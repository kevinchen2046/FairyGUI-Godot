extends SceneTree
# Run with Godot --path examples --script ../tools/tests/text_ubb_fixed_size_test.gd
var fields = []
func _initialize():
	call_deferred("run_test")
func run_test():
	UIPackage.setDefaultFont("res://Resources/fonts/NotoSansSC-Regular.ttf")
	root.size = Vector2i(600,200)
	RenderingServer.set_default_clear_color(Color.BLACK)
	for i in range(4):
		var text = GBasicTextField.new()
		fields.append(text)
		text.setAutoSize(GTextField.NONE)
		text.setSize(131,51)
		text.setFontSize(12+i*2)
		text.setColor(Color.WHITE)
		text.setUBBEnabled(true)
		text.setTemplateVars({})
		var template = "码头地板: [color=#FFFF00]{length=1}块[/color]\n游客槽位: [color=#FFFF00]{total=4}个[/color]"
		text.setText(template)
		for values in [[2,8],[7,12]]:
			text.setVar("length",values[0])
			text.setVar("total",values[1])
			text.flushVars()
			if text.text != template:
				push_error("flushVars changed the source template")
				quit(1)
				return
		root.add_child(text.getDisplayObject())
		text.getDisplayObject().position = Vector2(10+i*145,10)
		var actual = ""
		for run in text.getDisplayObject().get_child(1).get_child(0).get_children():
			actual += run.getText()
		print("fontSize=",12+i*2," text=",actual)
		if actual != "码头地板: 7块游客槽位: 12个":
			quit(1)
			return
	await process_frame
	await RenderingServer.frame_post_draw
	var image = root.get_texture().get_image()
	image.save_png("res://_text_fixed_size_test.png")
	for i in range(4):
		var yellow = 0
		for y in range(51):
			for x in range(131):
				var color = image.get_pixel(10+i*145+x,10+y)
				if color.r > 0.5 and color.g > 0.5 and color.b < 0.1:
					yellow += 1
		print("fontSize=",12+i*2," yellow_pixels=",yellow)
		if yellow == 0:
			quit(1)
			return
	print("Fixed 131x51 UBB regression passed")
	fields.clear()
	quit()
