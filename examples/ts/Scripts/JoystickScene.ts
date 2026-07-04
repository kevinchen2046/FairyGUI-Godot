/// <reference path="../fairygui.d.ts" />

import { DemoSceneBase } from "./DemoSceneBase";
import { JoystickModule } from "./JoystickModule";

export default class JoystickScene extends DemoSceneBase {
    private _joystick: JoystickModule | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/Joystick");

        this._view = UIPackage.createObject("Joystick", "Main");
        this._groot!.addChild(this._view);

        this._joystick = new JoystickModule(this._view);

        const tf = this._view.getChild("n9") as GTextField | null;
        if (tf != null && this._joystick != null) {
            this._joystick.move_changed.connect((degree: number) => {
                tf.setText(String(degree));
            });
            this._joystick.ended.connect(() => {
                tf.setText("");
            });
        }
    }
}
