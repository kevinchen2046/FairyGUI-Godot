/// <reference path="../fairygui.d.ts" />

import "./fgui-globals";
import { Callable, Vector2 } from "godot";

/** GodotJS 不可用 `extends GWindow`，用组合包装原生 GWindow 实例。 */
export class Window2 {
    private readonly _win: GWindow;

    constructor() {
        this._win = new GWindow();
        this._win.setupDisplay();
        this._win.onInitCallback = Callable.create(() => this._onInit());
        this._win.doShowAnimationCallback = Callable.create(() => this._doShowAnimation());
        this._win.doHideAnimationCallback = Callable.create(() => this._doHideAnimation());
        this._win.onHideCallback = Callable.create(() => this._onHide());
    }

    show(): void {
        this._win.show();
    }

    hideImmediately(): void {
        this._win.hideImmediately();
    }

    isShowing(): boolean {
        return this._win.isShowing();
    }

    private _onInit(): void {
        this._win.contentPane = UIPackage.createObject("Basics", "WindowB") as GComponent;
        this._win.center();
    }

    private _doShowAnimation(): void {
        this._win.setScale(0.1, 0.1);
        this._win.setPivot(0.5, 0.5);
        this._win.tweenScale(new Vector2(1.0, 1.0), 0.3).onComplete(Callable.create(() => this._onShown()));
    }

    private _onShown(): void {
        const pane = this._win.contentPane;
        if (pane == null) {
            return;
        }
        const trans = pane.getTransition("t1");
        if (trans != null) {
            trans.play(1, 0);
        }
    }

    private _doHideAnimation(): void {
        GTweenHelper.getInstance().kill(this._win, false);
        this._win.tweenScale(new Vector2(0.1, 0.1), 0.3).onComplete(
            Callable.create(() => this._win.hideImmediately()),
        );
    }

    private _onHide(): void {
        const pane = this._win.contentPane;
        if (pane == null) {
            return;
        }
        const trans = pane.getTransition("t1");
        if (trans != null) {
            trans.stop();
        }
    }
}
