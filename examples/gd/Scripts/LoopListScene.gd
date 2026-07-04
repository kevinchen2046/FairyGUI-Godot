extends "res://gd/Scripts/DemoSceneBase.gd"

var _list: Object

func continue_init() -> void:
	UIPackage.addPackage("res://Resources/UI/LoopList")
	_view = UIPackage.createObject("LoopList", "Main")
	_groot.addChild(_view)

	_list = _view.getChild("list")
	if _list != null:
		_list.setItemRenderer(_render_list_item)
		_list.setVirtualAndLoop()
		_list.setNumItems(5)
		_list.addEventListener(UIEventDispatcher.SCROLL, _do_special_effect)
		_do_special_effect()

func _render_list_item(index: int, obj: Object) -> void:
	obj.setPivot(0.5, 0.5, false)
	obj.setIcon("ui://LoopList/n" + str(index + 1))

func _do_special_effect() -> void:
	if _list == null:
		return
	var cnt = _list.numChildren()
	var view_center_x = _list.localToGlobal(Vector2(_list.getViewWidth() / 2.0, 0)).x
	for i in range(cnt):
		var obj = _list.getChildAt(i)
		if obj == null:
			continue
		var obj_center_x = obj.localToGlobal(Vector2(obj.getWidth() / 2.0, 0)).x
		var dist = abs(view_center_x - obj_center_x)
		if dist > obj.getWidth():
			obj.setScaleX(1)
			obj.setScaleY(1)
		else:
			var ss = 1 + (1 - dist / obj.getWidth()) * 0.24
			obj.setScaleX(ss)
			obj.setScaleY(ss)

	var n3 = _view.getChild("n3")
	if n3 != null:
		var first_idx = _list.getFirstChildInView()
		var total = _list.getNumItems()
		n3.setText(str((first_idx + 1) % total))
