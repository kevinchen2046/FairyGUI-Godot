/// <reference path="../fairygui.d.ts" />

import "./fgui-globals";
import { Callable } from "godot";

export class Window1 extends GWindow {
    constructor() {
        super();
        this.setupDisplay();
        this.setOnInitCallback(Callable.create(this._onInit.bind(this)));
        this.setOnShownCallback(Callable.create(this._onShown.bind(this)));
    }

    private _onInit(): void {
        this.setContentPane(UIPackage.createObject("Basics", "WindowA") as GComponent);
        this.center();
    }

    private _onShown(): void {
        const pane = this.getContentPane();
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
