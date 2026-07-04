extends GWindow

var _list: Object = null

func _init() -> void:
	setupDisplay()
	setOnInitCallback(_on_init)
	setDoShowAnimationCallback(_do_show_animation)
	setDoHideAnimationCallback(_do_hide_animation)

func _on_init() -> void:
	setContentPane(UIPackage.createObject("Bag", "BagWin"))
	center()
	setModal(true)

	var pane = getContentPane()
	if pane == null:
		return
	_list = pane.getChild("list")
	if _list == null:
		return
	_list.addEventListener(UIEventDispatcher.CLICKITEM, _on_click_item)
	_list.setItemRenderer(_render_list_item)
	_list.setNumItems(45)

func _render_list_item(index: int, obj: Object) -> void:
	var icon_idx = randi() % 10
	obj.setIcon("res://Resources/icons/i" + str(icon_idx) + ".png")
	obj.setText(str(randi() % 100))

func _on_click_item() -> void:
	var item = GRoot.getInstance().getTouchTarget()
	if item == null:
		return
	var pane = getContentPane()
	if pane == null:
		return
	var n11 = pane.getChild("n11")
	var n13 = pane.getChild("n13")
	if n11 != null and n13 != null:
		n11.setIcon(item.getIcon())
		n13.setText(item.getText())

func _do_show_animation() -> void:
	setScale(0.1, 0.1)
	setPivot(0.5, 0.5)
	tweenScale(Vector2(1.0, 1.0), 0.3)

func _do_hide_animation() -> void:
	GTweenHelper.getInstance().kill(self, false)
	tweenScale(Vector2(0.1, 0.1), 0.3).onComplete(hideImmediately)
