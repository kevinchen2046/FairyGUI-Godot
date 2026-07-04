/// <reference path="../fairygui.d.ts" />

import "./fgui-globals";
import { Callable } from "godot";

/** GodotJS 不可用 `extends GWindow`，用组合包装原生 GWindow 实例。 */
export class Window1 {
    private readonly _win: GWindow;

    constructor() {
        this._win = new GWindow();
        this._win.setupDisplay();
        this._win.onInitCallback = Callable.create(() => this._onInit());
        this._win.onShownCallback = Callable.create(() => this._onShown());
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
        this._win.contentPane = UIPackage.createObject("Basics", "WindowA") as GComponent;
        this._win.center();
    }

    private _onShown(): void {
        const pane = this._win.getContentPane();
        if (pane == null) {
            return;
        }
        const list = pane.getChild("n6") as GList | null;
        if (list == null) {
            return;
        }
        list.removeChildrenToPool();
        for (let i = 0; i < 6; i++) {
            const item = list.addItemFromPool();
            if (item == null) {
                continue;
            }
            item.setTitle(String(i));
            item.icon = "ui://Basics/r4";
        }
    }
}
