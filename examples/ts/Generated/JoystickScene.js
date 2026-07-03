"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
const JoystickModule_1 = __importDefault(require("./JoystickModule"));
class JoystickScene extends DemoSceneBase_1.default {
    _joystick = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/Joystick");
        this._view = UIPackage.createObject("Joystick", "Main");
        this._groot.addChild(this._view);
        this._joystick = new JoystickModule_1.default(this._view);
        const tf = this._view.getChild("n9");
        if (tf != null && this._joystick != null) {
            this._joystick.move_changed.connect((degree) => {
                tf.setText(String(degree));
            });
            this._joystick.ended.connect(() => {
                tf.setText("");
            });
        }
    }
}
exports.default = JoystickScene;
//# sourceMappingURL=JoystickScene.js.map