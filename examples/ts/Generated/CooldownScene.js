"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class CooldownScene extends DemoSceneBase_1.default {
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/Cooldown");
        this._view = UIPackage.createObject("Cooldown", "Main");
        this._groot.addChild(this._view);
        const b0 = this._view.getChild("b0");
        if (b0 instanceof GProgressBar) {
            const icon0 = b0.getChild("icon");
            if (icon0 != null) {
                icon0.setIcon("res://Resources/icons/k0.png");
            }
            b0.tweenValue(100, 5);
        }
        const b1 = this._view.getChild("b1");
        if (b1 instanceof GProgressBar) {
            const icon1 = b1.getChild("icon");
            if (icon1 != null) {
                icon1.setIcon("res://Resources/icons/k1.png");
            }
            b1.tweenValue(0, 10);
        }
    }
}
exports.default = CooldownScene;
//# sourceMappingURL=CooldownScene.js.map