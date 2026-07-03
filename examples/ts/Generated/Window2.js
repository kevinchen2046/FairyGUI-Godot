/// <reference path="../fairygui.d.ts" />
import { Callable, Vector2 } from "godot";
export default class Window2 extends GWindow {
    constructor() {
        super();
        this.setupDisplay();
        this.setOnInitCallback(Callable.create(this._onInit.bind(this)));
        this.setDoShowAnimationCallback(Callable.create(this._doShowAnimation.bind(this)));
        this.setDoHideAnimationCallback(Callable.create(this._doHideAnimation.bind(this)));
        this.setOnHideCallback(Callable.create(this._onHide.bind(this)));
    }
    _onInit() {
        this.setContentPane(UIPackage.createObject("Basics", "WindowB"));
        this.center();
    }
    _doShowAnimation() {
        this.setScale(0.1, 0.1);
        this.setPivot(0.5, 0.5);
        this.tweenScale(new Vector2(1.0, 1.0), 0.3).onComplete(Callable.create(this._onShown.bind(this)));
    }
    _onShown() {
        const pane = this.getContentPane();
        if (pane == null) {
            return;
        }
        const trans = pane.getTransition("t1");
        if (trans != null) {
            trans.play(1, 0);
        }
    }
    _doHideAnimation() {
        GTweenHelper.getInstance().kill(this, false);
        this.tweenScale(new Vector2(0.1, 0.1), 0.3).onComplete(Callable.create(this.hideImmediately.bind(this)));
    }
    _onHide() {
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
