/// <reference path="../fairygui.d.ts" />

import DemoSceneBase from "./DemoSceneBase";
import { Callable, Vector2 } from "godot";

void DemoSceneBase;

export default class Window2 extends GWindow {
    constructor() {
        super();
        this.setupDisplay();
        this.setOnInitCallback(Callable.create(this._onInit.bind(this)));
        this.setDoShowAnimationCallback(Callable.create(this._doShowAnimation.bind(this)));
        this.setDoHideAnimationCallback(Callable.create(this._doHideAnimation.bind(this)));
        this.setOnHideCallback(Callable.create(this._onHide.bind(this)));
    }

    private _onInit(): void {
        this.setContentPane(UIPackage.createObject("Basics", "WindowB") as GComponent);
        this.center();
    }

    private _doShowAnimation(): void {
        this.setScale(0.1, 0.1);
        this.setPivot(0.5, 0.5);
        this.tweenScale(new Vector2(1.0, 1.0), 0.3).onComplete(Callable.create(this._onShown.bind(this)));
    }

    private _onShown(): void {
        const pane = this.getContentPane();
        if (pane == null) {
            return;
        }
        const trans = pane.getTransition("t1");
        if (trans != null) {
            trans.play(1, 0);
        }
    }

    private _doHideAnimation(): void {
        GTweenHelper.getInstance().kill(this, false);
        this.tweenScale(new Vector2(0.1, 0.1), 0.3).onComplete(
            Callable.create(this.hideImmediately.bind(this)),
        );
    }

    private _onHide(): void {
        const pane = this.getContentPane();
        if (pane == null) {
            return;
        }
        const trans = pane.getTransition("t1");
        if (trans != null) {
            trans.stop();
        }
    }
}
