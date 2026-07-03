/// <reference path="../fairygui.d.ts" />
import DemoSceneBase from "./DemoSceneBase";
export default class HitTestScene extends DemoSceneBase {
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/HitTest");
        this._view = UIPackage.createObject("HitTest", "Main");
        this._groot.addChild(this._view);
    }
}
