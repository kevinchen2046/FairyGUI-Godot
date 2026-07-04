/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import { DemoSceneBase } from "./DemoSceneBase";

export default class LoopListScene extends DemoSceneBase {
    private _list: GList | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/LoopList");
        this._view = UIPackage.createObject("LoopList", "Main");
        this._groot!.addChild(this._view);

        this._list = this._view.getChild("list") as GList | null;
        if (this._list != null) {
            this._list.setItemRenderer(Callable.create(this._renderListItem.bind(this)));
            this._list.setVirtualAndLoop();
            this._list.setNumItems(5);
            this._list.addEventListener(
                UIEventDispatcher.SCROLL,
                Callable.create(this._doSpecialEffect.bind(this)),
            );
            this._doSpecialEffect();
        }
    }

    private _renderListItem(index: number, obj: GComponent): void {
        obj.setPivot(0.5, 0.5, false);
        obj.icon = `ui://LoopList/n${String(index + 1)}`;
    }

    private _doSpecialEffect(): void {
        if (this._list == null) {
            return;
        }
        const sp = this._list.getScrollPane();
        if (sp == null) {
            return;
        }
        const midX = sp.getPosX() + this._list.getViewWidth() / 2.0;
        const cnt = this._list.numChildren();
        for (let i = 0; i < cnt; i++) {
            const obj = this._list.getChildAt(i);
            if (obj == null) {
                continue;
            }
            const dist = Math.abs(midX - obj.getX() - obj.getWidth() / 2.0);
            if (dist > obj.getWidth()) {
                obj.setScaleX(1);
                obj.setScaleY(1);
            } else {
                const ss = 1 + (1 - dist / obj.getWidth()) * 0.24;
                obj.setScaleX(ss);
                obj.setScaleY(ss);
            }
        }

        const n3 = this._view!.getChild("n3");
        if (n3 != null) {
            const firstIdx = this._list.getFirstChildInView();
            const total = this._list.getNumItems();
            n3.setText(String((firstIdx + 1) % total));
        }
    }
}
