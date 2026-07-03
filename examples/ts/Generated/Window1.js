"use strict";
/// <reference path="../fairygui.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
class Window1 extends GWindow {
    constructor() {
        super();
        this.setupDisplay();
        this.setOnInitCallback(godot_1.Callable.create(this._onInit.bind(this)));
        this.setOnShownCallback(godot_1.Callable.create(this._onShown.bind(this)));
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
exports.default = Window1;
//# sourceMappingURL=Window1.js.map