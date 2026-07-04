class_name JoystickModule
extends RefCounted

signal move_changed(degree: float)
signal ended()

var _button: Object
var _thumb: Object
var _touch_area: Object
var _center: Object

var _init_x: float = 0.0
var _init_y: float = 0.0
var _start_stage_x: float = 0.0
var _start_stage_y: float = 0.0
var _last_stage_x: float = 0.0
var _last_stage_y: float = 0.0
var _radius: int = 150
var _touch_id: int = -1

func setup(main_view: Object) -> void:
	_button = main_view.getChild("joystick")
	if _button != null:
		_thumb = _button.getChild("thumb")
		_button.setTouchable(false)
		if _button is GButton:
			(_button as GButton).changeStateOnClick = false

	_touch_area = main_view.getChild("joystick_touch")
	_center = main_view.getChild("joystick_center")
	if _center != null:
		_center.setTouchable(false)
		_init_x = _center.getX() + _center.getWidth() / 2.0
		_init_y = _center.getY() + _center.getHeight() / 2.0

func on_touch_begin() -> void:
	var groot = GRoot.getInstance()
	if _touch_id != -1 or groot == null or _touch_area == null or _button == null or _thumb == null:
		return
	_touch_id = 0

	var pt = groot.globalToLocal(groot.getTouchPosition())
	var bx = pt.x
	var by = pt.y

	if bx < 0:
		bx = 0
	if bx > _touch_area.getWidth():
		bx = _touch_area.getWidth()
	if by > groot.getHeight():
		by = groot.getHeight()
	elif by < _touch_area.getY():
		by = _touch_area.getY()

	_last_stage_x = bx
	_last_stage_y = by
	_start_stage_x = bx
	_start_stage_y = by

	if _button is GButton:
		(_button as GButton).selected = true

	if _center != null:
		_center.setVisible(true)
		_center.setPosition(bx - _center.getWidth() / 2.0, by - _center.getHeight() / 2.0)
	_button.setPosition(bx - _button.getWidth() / 2.0, by - _button.getHeight() / 2.0)

	var delta_x = bx - _init_x
	var delta_y = by - _init_y
	var degrees = atan2(delta_y, delta_x) * 180.0 / PI
	_thumb.setRotation(degrees + 90)

func on_touch_move() -> void:
	var groot = GRoot.getInstance()
	if _touch_id == -1 or groot == null or _button == null or _thumb == null:
		return

	var pt = groot.globalToLocal(groot.getTouchPosition())
	var bx = pt.x
	var by = pt.y
	var move_x = bx - _last_stage_x
	var move_y = by - _last_stage_y

	_last_stage_x = bx
	_last_stage_y = by

	var button_x = _button.getX() + move_x
	var button_y = _button.getY() + move_y
	var offset_x = button_x + _button.getWidth() / 2.0 - _start_stage_x
	var offset_y = button_y + _button.getHeight() / 2.0 - _start_stage_y

	var rad = atan2(offset_y, offset_x)
	var degree = rad * 180.0 / PI
	_thumb.setRotation(degree + 90)

	var max_x = _radius * cos(rad)
	var max_y = _radius * sin(rad)
	if abs(offset_x) > abs(max_x):
		offset_x = max_x
	if abs(offset_y) > abs(max_y):
		offset_y = max_y

	button_x = _start_stage_x + offset_x
	button_y = _start_stage_y + offset_y
	if button_x < 0:
		button_x = 0
	if button_y > groot.getHeight():
		button_y = groot.getHeight()

	_button.setPosition(button_x - _button.getWidth() / 2.0, button_y - _button.getHeight() / 2.0)
	move_changed.emit(degree)

func on_touch_end() -> void:
	if _touch_id == -1 or _button == null or _thumb == null:
		return
	_touch_id = -1
	_thumb.setRotation(_thumb.getRotation() + 180)
	if _center != null:
		_center.setVisible(true)
		_center.setPosition(_init_x - _center.getWidth() / 2.0, _init_y - _center.getHeight() / 2.0)
	_button.setPosition(_init_x - _button.getWidth() / 2.0, _init_y - _button.getHeight() / 2.0)

	if _button is GButton:
		(_button as GButton).selected = false

	_thumb.setRotation(0)
	ended.emit()
