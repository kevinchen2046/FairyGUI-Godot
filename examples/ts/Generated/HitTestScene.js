"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class HitTestScene extends DemoSceneBase_1.default {
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/HitTest");
        this._view = UIPackage.createObject("HitTest", "Main");
        this._groot.addChild(this._view);
    }
}
exports.default = HitTestScene;
//# sourceMappingURL=HitTestScene.js.map