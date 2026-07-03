/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import DemoSceneBase from "./DemoSceneBase";

export default class TransitionDemoScene extends DemoSceneBase {
    private _btnGroup: GObject | null = null;

    private _g1: GObject | null = null;
    private _g2: GObject | null = null;
    private _g3: GObject | null = null;
    private _g4: GObject | null = null;
    private _g5: GObject | null = null;
    private _g6: GObject | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/Transition");
        this._view = UIPackage.createObject("Transition", "Main");
        this._groot!.addChild(this._view);

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

    private _setupTransitionBtn(btnName: string, target: GObject | null): void {
        const btn = this._view!.getChild(btnName);
        if (btn == null || target == null) {
            return;
        }
        btn.addClickListener(
            Callable.create(() => {
                this._btnGroup?.setVisible(false);
                this._groot!.addChild(target);
                const trans = target.getTransition("t0");
                if (trans != null) {
                    trans.play(
                        1,
                        0,
                        Callable.create(() => {
                            this._btnGroup?.setVisible(true);
                            target.removeFromParent();
                        }),
                    );
                }
            }),
        );
    }
}
