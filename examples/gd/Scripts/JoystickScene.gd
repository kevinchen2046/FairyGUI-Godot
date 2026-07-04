extends "res://gd/Scripts/DemoSceneBase.gd"

var _joystick: JoystickModule

func continue_init() -> void:
	UIPackage.addPackage("res://Resources/UI/Joystick")

	_view = UIPackage.createObject("Joystick", "Main")
	_groot.addChild(_view)

	_joystick = JoystickModule.new()
	_joystick.setup(_view)

	var touch_area = _view.getChild("joystick_touch")
	if touch_area != null:
		touch_area.addEventListener(
			UIEventDispatcher.TOUCHBEGIN,
			func(_ctx = null): _joystick.on_touch_begin(),
		)
		touch_area.addEventListener(
			UIEventDispatcher.TOUCHMOVE,
			func(_ctx = null): _joystick.on_touch_move(),
		)
		touch_area.addEventListener(
			UIEventDispatcher.TOUCHEND,
			func(_ctx = null): _joystick.on_touch_end(),
		)

	var tf = _view.getChild("n9") as GTextField
	if tf != null:
		_joystick.move_changed.connect(func(degree: float):
			tf.setText(str(degree))
		)
		_joystick.ended.connect(func():
			tf.setText("")
		)
