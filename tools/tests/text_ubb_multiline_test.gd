extends SceneTree
# Run against examples with --headless --script pointing to this file.
var fields = []
func _initialize():
	UIPackage.setDefaultFont("res://Resources/fonts/NotoSansSC-Regular.ttf")
	var cases = 0
	for rich in [false, true]:
		for newline in ["\n", "\r\n", "\r"]:
			var label = GRichTextField.new() if rich else GBasicTextField.new()
			fields.append(label)
			label.setAutoSize(GTextField.NONE)
			label.setSize(200,120)
			label.setSingleLine(false)
			label.setUBBEnabled(true)
			label.setText("[size=20][color=#118811]{level=3}级[/color][/size]" + newline + "[size=14]{name=xx}[/size]")
			for level in [3, 7]:
				label.setVar("level",level)
				label.setVar("name","xx")
				label.flushVars()
				var display = label.getDisplayObject() if rich else label.getDisplayObject().get_child(1)
				var runs = display.get_child(0).get_children()
				if runs.size() != 2 or runs[0].getText() != str(level)+"级" or runs[1].getText() != "xx" or runs[1].position.y <= runs[0].position.y:
					push_error("Styled UBB newline lost after flushVars")
					quit(1)
					return
				cases += 1
			label.setSingleLine(true)
			var display = label.getDisplayObject() if rich else label.getDisplayObject().get_child(1)
			var rows = {}
			for run in display.get_child(0).get_children():
				rows[run.position.y] = true
			if rows.size() != 1:
				push_error("Single-line mode no longer removes explicit line breaks")
				quit(1)
				return
			cases += 1
	print("UBB styled multiline regression passed: ",cases," cases")
	fields.clear()
	quit()
