/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import { DemoSceneBase } from "./DemoSceneBase";

export default class ListEffectScene extends DemoSceneBase {
    private _list: GList | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/Extension");
        this._view = UIPackage.createObject("Extension", "Main");
        this._groot!.addChild(this._view);

        this._list = this._view.getChild("mailList") as GList | null;
        if (this._list == null) {
            return;
        }

        for (let i = 0; i < 10; i++) {
            const item = this._list.addItemFromPool() as GComponent | null;
            if (item == null) {
                continue;
            }
            const timeText = item.getChild("timeText");
            if (timeText != null) {
                timeText.setText("5 Nov 2015 16:24:33");
            }

            const readCtrl = item.getController("IsRead");
            if (readCtrl != null) {
                readCtrl.selectedIndex = i % 2 === 0 ? 0 : 1;
            }

            const fetchCtrl = item.getController("c1");
            if (fetchCtrl != null) {
                fetchCtrl.selectedIndex = i % 3 !== 0 ? 0 : 1;
            }

            item.setTitle("Mail title here");
        }

        this._list.ensureBoundsCorrect();
        let delay = 1.0;
        for (let i = 0; i < 10; i++) {
            const item = this._list.getChildAt(i) as GComponent | null;
            if (item == null) {
                break;
            }
            if (this._list.isChildInView(item)) {
                const trans = item.getTransition("t0");
                if (trans != null) {
                    trans.play(1, delay);
                }
                delay += 0.2;
            } else {
                break;
            }
        }
    }
}
