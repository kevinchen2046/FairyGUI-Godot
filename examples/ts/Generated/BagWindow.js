/// <reference path="../fairygui.d.ts" />
import { Callable, Vector2 } from "godot";
export default class BagWindow extends GWindow {
    _list = null;
    constructor() {
        super();
        this.setupDisplay();
        this.setOnInitCallback(Callable.create(this._onInit.bind(this)));
        this.setDoShowAnimationCallback(Callable.create(this._doShowAnimation.bind(this)));
        this.setDoHideAnimationCallback(Callable.create(this._doHideAnimation.bind(this)));
    }
    _onInit() {
        this.setContentPane(UIPackage.createObject("Bag", "BagWin"));
        this.center();
        this.setModal(true);
        const pane = this.getContentPane();
        if (pane == null) {
            return;
        }
        this._list = pane.getChild("list");
        if (this._list == null) {
            return;
        }
        this._list.addEventListener(UIEventDispatcher.CLICKITEM, Callable.create(this._onClickItem.bind(this)));
        this._list.setItemRenderer(this._renderListItem.bind(this));
        this._list.setNumItems(45);
    }
    _renderListItem(index, obj) {
        const iconIdx = randi() % 10;
        obj.setIcon(`res://Resources/icons/i${String(iconIdx)}.png`);
        obj.setText(String(randi() % 100));
    }
    _onClickItem() {
        const item = GRoot.getInstance()?.getTouchTarget();
        if (item == null) {
            return;
        }
        const pane = this.getContentPane();
        if (pane == null) {
            return;
        }
        const n11 = pane.getChild("n11");
        const n13 = pane.getChild("n13");
        if (n11 != null && n13 != null) {
            n11.setIcon(item.getIcon());
            n13.setText(item.getText());
        }
    }
    _doShowAnimation() {
        this.setScale(0.1, 0.1);
        this.setPivot(0.5, 0.5);
        this.tweenScale(new Vector2(1.0, 1.0), 0.3);
    }
    _doHideAnimation() {
        GTweenHelper.getInstance().kill(this, false);
        this.tweenScale(new Vector2(0.1, 0.1), 0.3).onComplete(Callable.create(this.hideImmediately.bind(this)));
    }
}
