"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class ModalWaitingScene extends DemoSceneBase_1.default {
    _testWin = null;
    async ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/ModalWaiting");
        UIConfigHelper.getInstance().setGlobalModalWaiting("ui://ModalWaiting/GlobalModalWaiting");
        UIConfigHelper.getInstance().setWindowModalWaiting("ui://ModalWaiting/WindowModalWaiting");
        this._view = UIPackage.createObject("ModalWaiting", "Main");
        this._groot.addChild(this._view);
        this._testWin = new GWindow();
        this._testWin.setupDisplay();
        this._testWin.setOnInitCallback(godot_1.Callable.create(this._onTestWinInit.bind(this)));
        this._testWin.show();
        this._groot.showModalWait();
        await this.waitSeconds(3.0);
        this._groot.closeModalWait();
    }
    _onTestWinInit() {
        this._testWin.setContentPane(UIPackage.createObject("ModalWaiting", "TestWin"));
        const pane = this._testWin.getContentPane();
        if (pane == null) {
            return;
        }
        const n1 = pane.getChild("n1");
        if (n1 != null) {
            n1.addClickListener(godot_1.Callable.create(async () => {
                this._testWin.showModalWait();
                await this.waitSeconds(3.0);
                this._testWin.closeModalWait();
            }));
        }
    }
}
exports.default = ModalWaitingScene;
//# sourceMappingURL=ModalWaitingScene.js.map