/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import { DemoSceneBase } from "./DemoSceneBase";

export default class ModalWaitingScene extends DemoSceneBase {
    private _testWin: GWindow | null = null;

    protected async ContinueInit(): Promise<void> {
        UIPackage.addPackage("res://Resources/UI/ModalWaiting");
        const ui = UIConfigHelper.getInstance()!;
        ui.globalModalWaiting = "ui://ModalWaiting/GlobalModalWaiting";
        ui.windowModalWaiting = "ui://ModalWaiting/WindowModalWaiting";

        this._view = UIPackage.createObject("ModalWaiting", "Main");
        this._groot!.addChild(this._view);

        this._testWin = new GWindow();
        this._testWin.setupDisplay();
        this._testWin.setOnInitCallback(Callable.create(this._onTestWinInit.bind(this)));
        this._testWin.show();

        this._groot!.showModalWait();
        await this.waitSeconds(3.0);
        if (!this.isSceneActive() || this._groot == null) {
            return;
        }
        this._groot.closeModalWait();
    }

    private _onTestWinInit(): void {
        this._testWin!.setContentPane(
            UIPackage.createObject("ModalWaiting", "TestWin") as GComponent,
        );
        const pane = this._testWin!.getContentPane();
        if (pane == null) {
            return;
        }
        const n1 = pane.getChild("n1");
        if (n1 != null) {
            n1.addClickListener(
                Callable.create(async () => {
                    this._testWin!.showModalWait();
                    await this.waitSeconds(3.0);
                    if (!this.isSceneActive() || this._testWin == null) {
                        return;
                    }
                    this._testWin.closeModalWait();
                }),
            );
        }
    }
}
