/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import { DemoSceneBase } from "./DemoSceneBase";

export default class VirtualListScene extends DemoSceneBase {
    private _list: GList | null = null;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/VirtualList");
        this._view = UIPackage.createObject("VirtualList", "Main");
        this._groot!.addChild(this._view);

        const n6 = this._view.getChild("n6");
        if (n6 != null) {
            n6.addClickListener(
                Callable.create(() => {
                    this._list?.addSelection(500, true);
                }),
            );
        }
        const n7 = this._view.getChild("n7");
        if (n7 != null) {
            n7.addClickListener(
                Callable.create(() => {
                    const sp = this._list?.getScrollPane();
                    sp?.scrollTop(true);
                }),
            );
        }
        const n8 = this._view.getChild("n8");
        if (n8 != null) {
            n8.addClickListener(
                Callable.create(() => {
                    const sp = this._list?.getScrollPane();
                    sp?.scrollBottom(true);
                }),
            );
        }

        this._list = this._view.getChild("mailList") as GList | null;
        if (this._list != null) {
            this._list.setItemRenderer(Callable.create(this._renderListItem.bind(this)));
            this._list.setVirtual();
            this._list.setNumItems(1000);
        }
    }

    private _renderListItem(index: number, obj: GComponent): void {
        const readCtrl = obj.getController("IsRead");
        if (readCtrl != null) {
            readCtrl.selectedIndex = index % 2 === 0 ? 0 : 1;
        }
        const fetchCtrl = obj.getController("c1");
        if (fetchCtrl != null) {
            fetchCtrl.selectedIndex = index % 3 !== 0 ? 0 : 1;
        }
        const timeText = obj.getChild("timeText");
        if (timeText != null) {
            timeText.setText("5 Nov 2015 16:24:33");
        }
        obj.setText(`${String(index)} Mail title here`);
    }
}
