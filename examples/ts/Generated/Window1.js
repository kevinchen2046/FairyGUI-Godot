/// <reference path="../fairygui.d.ts" />
import { Callable } from "godot";
export default class Window1 extends GWindow {
    constructor() {
        super();
        this.setupDisplay();
        this.setOnInitCallback(Callable.create(this._onInit.bind(this)));
        this.setOnShownCallback(Callable.create(this._onShown.bind(this)));
    }
    _onInit() {
        this.setContentPane(UIPackage.createObject("Basics", "WindowA"));
        this.center();
    }
    _onShown() {
        const pane = this.getContentPane();
        if (pane == null) {
            return;
        }
        const list = pane.getChild("n6");
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
            item.setIcon("ui://Basics/r4");
        }
    }
}
