extends "res://gd/Scripts/DemoSceneBase.gd"

var _joystick: JoystickModule

func continue_init() -> void:
	UIPackage.addPackage("res://Resources/UI/Joystick")

	_view = UIPackage.createObject("Joystick", "Main")
	_groot.addChild(_view)

	_joystick = JoystickModule.new(_view)

	var tf = _view.getChild("n9") as GTextField
	if tf != null:
		_joystick.move_changed.connect(func(degree: float):
			tf.setText(str(degree))
		)
		_joystick.ended.connect(func():
			tf.setText("")
		)
