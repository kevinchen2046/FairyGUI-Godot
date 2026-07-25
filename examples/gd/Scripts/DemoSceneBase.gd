extends Node

var _groot: Object
var _view: Object = null
var _scene_active := false
var _pending_scene_path: String = ""

func _ready() -> void:
	_scene_active = true
	_register_default_fonts()
	_register_default_scroll_bars()
	if GRoot.getInstance() != null:
		GRoot.cleanup()
	call_deferred("_delayed_init")

func _exit_tree() -> void:
	_view = null
	_groot = null
	_scene_active = false
	_pending_scene_path = ""

func _is_scene_active() -> bool:
	return _scene_active

func _is_ui_active() -> bool:
	if not _is_scene_active() or not is_inside_tree():
		return false
	if _groot == null or _view == null:
		return false
	return GRoot.getInstance() != null

func _get_engine_tree() -> SceneTree:
	var loop = Engine.get_main_loop()
	if loop == null:
		return null
	return loop

func _safe_get_tree() -> SceneTree:
	if not _scene_active or not is_inside_tree():
		return null
	return get_tree()

func _delayed_init() -> void:
	if not _is_scene_active():
		return
	var tree = _safe_get_tree()
	if tree == null:
		return
	if GRoot.getInstance() == null:
		GRoot.create(self)
	_deferred_attach_to_groot()

func _deferred_attach_to_groot() -> void:
	if not _is_scene_active():
		return
	_groot = GRoot.getInstance()
	_prepare_groot_for_scene()
	call_deferred("_finish_continue_init")

func _finish_continue_init() -> void:
	if not _is_scene_active() or _groot == null:
		return
	continue_init()
	_add_close_button()

func _prepare_groot_for_scene() -> void:
	if _groot == null:
		return
	if DragDropManagerHelper.getInstance().isDragging():
		DragDropManagerHelper.getInstance().cancel()
	_groot.hideTooltips()
	_groot.hidePopup()
	_groot.closeModalWait()
	_groot.closeAllWindows()
	_groot.removeChildren()

func _register_default_fonts() -> void:
	var font_path := "res://Resources/fonts/NotoSansSC-Regular.ttf"
	var ui := UIConfigHelper.getInstance()
	ui.registerFont("default", font_path)
	ui.registerFont("en", font_path)
	ui.registerFont("微软雅黑", font_path)
	ui.setDefaultFont("default")

func _register_default_scroll_bars() -> void:
	UIPackage.addPackage("res://Resources/UI/Basics")
	var ui := UIConfigHelper.getInstance()
	ui.verticalScrollBar = "ui://Basics/ScrollBar_VT"
	ui.horizontalScrollBar = "ui://Basics/ScrollBar_HZ"

func continue_init() -> void:
	pass

func _wait_seconds(seconds: float) -> void:
	if not _is_scene_active():
		return
	var tree := _safe_get_tree()
	if tree == null:
		tree = _get_engine_tree()
	if tree == null:
		return
	await tree.create_timer(seconds).timeout

func _add_close_button() -> void:
	var close_btn = UIPackage.createObject("MainMenu", "CloseButton")
	if close_btn == null:
		return
	close_btn.setPosition(_groot.getWidth() - close_btn.getWidth() - 10, _groot.getHeight() - close_btn.getHeight() - 10)
	close_btn.addRelation(_groot, GEnumRelation.RIGHT_RIGHT, false)
	close_btn.addRelation(_groot, GEnumRelation.BOTTOM_BOTTOM, false)
	close_btn.setSortingOrder(100000)
	close_btn.addClickListener(func(): call_deferred("_on_close"))
	_groot.addChild(close_btn)

func _cleanup_groot_overlays() -> void:
	if _groot == null:
		return
	if DragDropManagerHelper.getInstance().isDragging():
		DragDropManagerHelper.getInstance().cancel()
	_groot.hideTooltips()
	_groot.hidePopup()
	_groot.closeModalWait()
	_groot.closeAllWindows()
	var i = _groot.numChildren() - 1
	while i >= 0:
		var child = _groot.getChildAt(i)
		if child == _view:
			i -= 1
			continue
		if child.getSortingOrder() >= 100000:
			i -= 1
			continue
		if child.getSortingOrder() >= 50000:
			_groot.removeChildAt(i)
		else:
			i -= 1

func _request_scene_change(scene_path: String) -> void:
	if not _is_scene_active():
		return
	_pending_scene_path = scene_path
	call_deferred("_deferred_finish_scene_change")

func _deferred_finish_scene_change() -> void:
	if _pending_scene_path.is_empty() or not _is_scene_active():
		_pending_scene_path = ""
		return
	_cleanup_groot_overlays()
	call_deferred("_deferred_detach_groot")

func _deferred_detach_groot() -> void:
	if _pending_scene_path.is_empty() or not _is_scene_active():
		_pending_scene_path = ""
		return
	GRoot.cleanup()
	_view = null
	_groot = null
	call_deferred("_deferred_change_scene")

func _deferred_change_scene() -> void:
	var scene_path = _pending_scene_path
	_pending_scene_path = ""
	if scene_path.is_empty():
		return
	var tree = _get_engine_tree()
	if tree != null:
		tree.call_deferred("change_scene_to_file", scene_path)

func _on_close() -> void:
	_request_scene_change("res://gd/Scenes/MainMenu.tscn")
