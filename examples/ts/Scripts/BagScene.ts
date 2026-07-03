/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import DemoSceneBase from "./DemoSceneBase";
import BagWindow from "./BagWindow";

export default class BagScene extends DemoSceneBase {
    private _bagWindow: BagWindow | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/Bag");

        this._view = UIPackage.createObject("Bag", "Main");
        this._groot!.addChild(this._view);

        this._bagWindow = new BagWindow();

        const bagBtn = this._view.getChild("bagBtn");
        if (bagBtn != null) {
            bagBtn.addClickListener(
                Callable.create(() => {
                    this._bagWindow?.show();
                }),
            );
        }
    }
}
