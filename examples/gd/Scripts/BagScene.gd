extends DemoSceneBase

var _bag_window: BagWindow = null

func continue_init() -> void:
	UIPackage.addPackage("res://Resources/UI/Bag")

	_view = UIPackage.createObject("Bag", "Main")
	_groot.addChild(_view)

	_bag_window = BagWindow.new()

	var bag_btn = _view.getChild("bagBtn")
	if bag_btn != null:
		bag_btn.addClickListener(func(): _bag_window.show())
