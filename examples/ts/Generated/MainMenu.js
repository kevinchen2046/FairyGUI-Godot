"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class MainMenu extends DemoSceneBase_1.default {
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/MainMenu");
        this._view = UIPackage.createObject("MainMenu", "Main");
        this._groot.addChild(this._view);
        this._navBtn("n1", "res://ts/Scenes/BasicsScene.tscn");
        this._navBtn("n2", "res://ts/Scenes/TransitionDemoScene.tscn");
        this._navBtn("n4", "res://ts/Scenes/VirtualListScene.tscn");
        this._navBtn("n5", "res://ts/Scenes/LoopListScene.tscn");
        this._navBtn("n6", "res://ts/Scenes/HitTestScene.tscn");
        this._navBtn("n7", "res://ts/Scenes/PullToRefreshScene.tscn");
        this._navBtn("n8", "res://ts/Scenes/ModalWaitingScene.tscn");
        this._navBtn("n9", "res://ts/Scenes/JoystickScene.tscn");
        this._navBtn("n10", "res://ts/Scenes/BagScene.tscn");
        this._navBtn("n11", "res://ts/Scenes/ChatScene.tscn");
        this._navBtn("n12", "res://ts/Scenes/ListEffectScene.tscn");
        this._navBtn("n13", "res://ts/Scenes/ScrollPaneScene.tscn");
        this._navBtn("n14", "res://ts/Scenes/TreeViewScene.tscn");
        this._navBtn("n15", "res://ts/Scenes/GuideScene.tscn");
        this._navBtn("n16", "res://ts/Scenes/CooldownScene.tscn");
    }
    _navBtn(childName, scenePath) {
        const btn = this._view.getChild(childName);
        if (btn != null) {
            btn.addClickListener(godot_1.Callable.create(() => {
                this._cleanupGrootOverlays();
                this._groot.removeChildren();
                this.get_tree()?.change_scene_to_file(scenePath);
            }));
        }
    }
    _onClose() {
        this.get_tree()?.quit();
    }
}
exports.default = MainMenu;
//# sourceMappingURL=MainMenu.js.map