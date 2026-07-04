/// <reference path="../fairygui.d.ts" />

import "./fgui-globals";
import { Callable, Vector2 } from "godot";

/** GodotJS 不可用 `extends GWindow`，用组合包装原生 GWindow 实例。 */
export class BagWindow {
    private readonly _win: GWindow;
    private _list: GList | null = null;

    constructor() {
        this._win = new GWindow();
        this._win.setupDisplay();
        this._win.onInitCallback = Callable.create(() => this._onInit());
        this._win.doShowAnimationCallback = Callable.create(() => this._doShowAnimation());
        this._win.doHideAnimationCallback = Callable.create(() => this._doHideAnimation());
    }

    show(): void {
        this._win.show();
    }

    hideImmediately(): void {
        this._win.hideImmediately();
    }

    isShowing(): boolean {
        return this._win.isShowing();
    }

    private _onInit(): void {
        this._win.contentPane = UIPackage.createObject("Bag", "BagWin") as GComponent;
        this._win.center();
        this._win.modal = true;

        const pane = this._win.contentPane;
        if (pane == null) {
            return;
        }
        this._list = pane.getChild("list") as GList | null;
        if (this._list == null) {
            return;
        }
        this._list.addEventListener(UIEventDispatcher.CLICKITEM, Callable.create(() => this._onClickItem()));
        this._list.setItemRenderer(Callable.create(this._renderListItem.bind(this)));
        this._list.setNumItems(45);
    }

    private _renderListItem(index: number, obj: GComponent): void {
        const iconIdx = randi() % 10;
        obj.icon = `res://Resources/icons/i${String(iconIdx)}.png`;
        obj.setText(String(randi() % 100));
    }

    private _onClickItem(): void {
        const item = GRoot.getInstance()?.getTouchTarget();
        if (item == null) {
            return;
        }
        const pane = this._win.contentPane;
        if (pane == null) {
            return;
        }
        const n11 = pane.getChild("n11");
        const n13 = pane.getChild("n13");
        if (n11 != null && n13 != null) {
            n11.icon = item.icon;
            n13.setText(item.getText());
        }
    }

    private _doShowAnimation(): void {
        this._win.setScale(0.1, 0.1);
        this._win.setPivot(0.5, 0.5);
        this._win.tweenScale(new Vector2(1.0, 1.0), 0.3);
    }

    private _doHideAnimation(): void {
        GTweenHelper.getInstance().kill(this._win, false);
        this._win.tweenScale(new Vector2(0.1, 0.1), 0.3).onComplete(
            Callable.create(() => this._win.hideImmediately()),
        );
    }
}
