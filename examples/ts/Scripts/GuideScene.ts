/// <reference path="../fairygui.d.ts" />

import { Callable, Rect2, Vector2 } from "godot";
import { DemoSceneBase } from "./DemoSceneBase";

export default class GuideScene extends DemoSceneBase {
    private _guideLayer: GComponent | null = null;
    private _bagBtn: GuiObject | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/Guide");

        this._view = UIPackage.createObject("Guide", "Main");
        this._groot!.addChild(this._view);

        this._guideLayer = UIPackage.createObject("Guide", "GuideLayer");
        if (this._guideLayer != null) {
            this._guideLayer.makeFullScreen();
            this._guideLayer.addRelation(this._groot!, FguiRelationType.RightRight, false);
        }

        this._bagBtn = this._view.getChild("bagBtn");
        if (this._bagBtn != null) {
            this._bagBtn.addClickListener(
                Callable.create(() => {
                    if (this._guideLayer != null && this._guideLayer.getParent() != null) {
                        this._guideLayer.removeFromParent();
                    }
                }),
            );
        }

        const n2 = this._view.getChild("n2");
        if (n2 != null) {
            n2.addClickListener(Callable.create(this._showGuide.bind(this)));
        }
    }

    private _showGuide(): void {
        if (this._guideLayer == null || this._bagBtn == null) {
            return;
        }
        this._groot!.addChild(this._guideLayer);

        const rect = this._bagBtn.transformRect(
            new Rect2(0, 0, this._bagBtn.getWidth(), this._bagBtn.getHeight()),
            this._guideLayer,
        );
        const window = this._guideLayer.getChild("window");
        if (window != null) {
            window.setSize(rect.size.x, rect.size.y);
            GTweenHelper.getInstance()
                .toVec2(window.getPosition(), rect.position, 0.5)
                .setTarget(window, GTweener.TweenPropType.POSITION);
        }
    }
}
