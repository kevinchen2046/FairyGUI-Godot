/// <reference path="../fairygui.d.ts" />
import DemoSceneBase from "./DemoSceneBase";
import JoystickModule from "./JoystickModule";
export default class JoystickScene extends DemoSceneBase {
    _joystick = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/Joystick");
        this._view = UIPackage.createObject("Joystick", "Main");
        this._groot.addChild(this._view);
        this._joystick = new JoystickModule(this._view);
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
