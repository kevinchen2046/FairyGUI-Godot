"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class TransitionDemoScene extends DemoSceneBase_1.default {
    _btnGroup = null;
    _g1 = null;
    _g2 = null;
    _g3 = null;
    _g4 = null;
    _g5 = null;
    _g6 = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/Transition");
        this._view = UIPackage.createObject("Transition", "Main");
        this._groot.addChild(this._view);
        this._btnGroup = this._view.getChild("g0");
        this._g1 = UIPackage.createObject("Transition", "BOSS");
        this._g2 = UIPackage.createObject("Transition", "BOSS_SKILL");
        this._g3 = UIPackage.createObject("Transition", "TRAP");
        this._g4 = UIPackage.createObject("Transition", "GoodHit");
        this._g5 = UIPackage.createObject("Transition", "PowerUp");
        this._g6 = UIPackage.createObject("Transition", "PathDemo");
        this._setupTransitionBtn("btn0", this._g1);
        this._setupTransitionBtn("btn1", this._g2);
        this._setupTransitionBtn("btn2", this._g3);
        this._setupTransitionBtn("btn3", this._g4);
        this._setupTransitionBtn("btn4", this._g5);
        this._setupTransitionBtn("btn5", this._g6);
    }
    _setupTransitionBtn(btnName, target) {
        const btn = this._view.getChild(btnName);
        if (btn == null || target == null) {
            return;
        }
        btn.addClickListener(godot_1.Callable.create(() => {
            this._btnGroup?.setVisible(false);
            this._groot.addChild(target);
            const trans = target.getTransition("t0");
            if (trans != null) {
                trans.play(1, 0, godot_1.Callable.create(() => {
                    this._btnGroup?.setVisible(true);
                    target.removeFromParent();
                }));
            }
        }));
    }
}
exports.default = TransitionDemoScene;
//# sourceMappingURL=TransitionDemoScene.js.map