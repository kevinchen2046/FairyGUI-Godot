"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
const BagWindow_1 = __importDefault(require("./BagWindow"));
class BagScene extends DemoSceneBase_1.default {
    _bagWindow = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/Bag");
        this._view = UIPackage.createObject("Bag", "Main");
        this._groot.addChild(this._view);
        this._bagWindow = new BagWindow_1.default();
        const bagBtn = this._view.getChild("bagBtn");
        if (bagBtn != null) {
            bagBtn.addClickListener(godot_1.Callable.create(() => {
                this._bagWindow?.show();
            }));
        }
    }
}
exports.default = BagScene;
//# sourceMappingURL=BagScene.js.map