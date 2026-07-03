extends DemoSceneBase

var _test_win: GWindow = null

func continue_init() -> void:
	UIPackage.addPackage("res://Resources/UI/ModalWaiting")
	UIConfigHelper.getInstance().setGlobalModalWaiting("ui://ModalWaiting/GlobalModalWaiting")
	UIConfigHelper.getInstance().setWindowModalWaiting("ui://ModalWaiting/WindowModalWaiting")

	_view = UIPackage.createObject("ModalWaiting", "Main")
	_groot.addChild(_view)

	_test_win = GWindow.new()
	_test_win.setOnInitCallback(_on_test_win_init)
	_test_win.show()

	_groot.showModalWait()
	await get_tree().create_timer(3.0).timeout
	_groot.closeModalWait()

func _on_test_win_init() -> void:
	_test_win.setContentPane(UIPackage.createObject("ModalWaiting", "TestWin"))
	var pane = _test_win.getContentPane()
	if pane == null:
		return
	var n1 = pane.getChild("n1")
	if n1 != null:
		n1.addClickListener(func():
			_test_win.showModalWait()
			await get_tree().create_timer(3.0).timeout
			_test_win.closeModalWait()
		)
