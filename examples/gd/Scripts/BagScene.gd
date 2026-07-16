extends "res://gd/Scripts/DemoSceneBase.gd"

var _bag_window: Object = null

func continue_init() -> void:
	UIPackage.addPackage("res://Resources/UI/Bag")
	
	# mvvm测试代码
	#UIObjectFactoryHelper.getInstance().setPackageItemExtension("ui://Bag/Main", BagView)
	
	_view = UIPackage.createObject("Bag", "Main")
	_groot.addChild(_view)

	_bag_window = load("res://gd/Scripts/BagWindow.gd").new()

	var bag_btn = _view.getChild("bagBtn")
	if bag_btn != null:
		bag_btn.addClickListener(func(): _bag_window.show())
		
## mvvm测试代码
#class BagView extends GRuntime:
	#@export_storage var VMBinds:Dictionary={
		#UIDecortor.BindType.BindTrigger:{
			#"bagBtn":UIDecortor.bind_trigger(Events.UIEvent.Test)
		#}
	#}
	#var bagBtn:GButton
	#func _on_construct():
		#super._on_construct()
		#print(bagBtn)
