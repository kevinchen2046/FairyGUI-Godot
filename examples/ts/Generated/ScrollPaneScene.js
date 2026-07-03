/// <reference path="../fairygui.d.ts" />
import { Callable } from "godot";
import DemoSceneBase from "./DemoSceneBase";
export default class ScrollPaneScene extends DemoSceneBase {
    _list = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/ScrollPane");
        this._view = UIPackage.createObject("ScrollPane", "Main");
        this._groot.addChild(this._view);
        this._list = this._view.getChild("list");
        if (this._list != null) {
            this._list.setItemRenderer(this._renderListItem.bind(this));
            this._list.setVirtual();
            this._list.setNumItems(1000);
            this._list.addEventListener(UIEventDispatcher.TOUCHBEGIN, Callable.create(this._onClickList.bind(this)));
        }
    }
    _renderListItem(index, obj) {
        obj.setTitle(`Item ${String(index)}`);
        const sp = obj.getScrollPane();
        if (sp != null) {
            sp.setPosX(0, false);
        }
        const b0 = obj.getChild("b0");
        if (b0 != null) {
            b0.addEventListener(UIEventDispatcher.CLICK, Callable.create(() => {
                const txt = this._view.getChild("txt");
                if (txt != null) {
                    txt.setText(`Stick ${obj.getText()}`);
                }
            }));
        }
        const b1 = obj.getChild("b1");
        if (b1 != null) {
            b1.addEventListener(UIEventDispatcher.CLICK, Callable.create(() => {
                const txt = this._view.getChild("txt");
                if (txt != null) {
                    txt.setText(`Delete ${obj.getText()}`);
                }
            }));
        }
    }
    _onClickList() {
        if (this._list == null) {
            return;
        }
        const cnt = this._list.numChildren();
        for (let i = 0; i < cnt; i++) {
            const item = this._list.getChildAt(i);
            if (item == null) {
                continue;
            }
            const sp = item.getScrollPane();
            if (sp != null && sp.getPosX() !== 0) {
                const touchTarget = this._groot.getTouchTarget();
                const b0 = item.getChild("b0");
                const b1 = item.getChild("b1");
                if (touchTarget != null &&
                    ((b0 != null && b0.isAncestorOf(touchTarget)) ||
                        (b1 != null && b1.isAncestorOf(touchTarget)))) {
                    return;
                }
                sp.setPosX(0, true);
                sp.cancelDragging();
                this._list.getScrollPane()?.cancelDragging();
                break;
            }
        }
    }
}
