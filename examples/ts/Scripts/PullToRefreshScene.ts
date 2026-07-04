/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import { DemoSceneBase } from "./DemoSceneBase";

export default class PullToRefreshScene extends DemoSceneBase {
    private _list1: GList | null = null;
    private _list2: GList | null = null;
    private _refreshing1 = false;
    private _refreshing2 = false;

    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/PullToRefresh");
        this._view = UIPackage.createObject("PullToRefresh", "Main");
        this._groot!.addChild(this._view);

        this._list1 = this._view.getChild("list1") as GList | null;
        if (this._list1 != null) {
            this._list1.setItemRenderer(this._renderListItem1.bind(this));
            this._list1.setVirtual();
            this._list1.setNumItems(1);
            this._list1.addEventListener(
                UIEventDispatcher.PULLDOWNRELEASE,
                Callable.create(this._onPullDownToRefresh.bind(this)),
            );
        }

        this._list2 = this._view.getChild("list2") as GList | null;
        if (this._list2 != null) {
            this._list2.setItemRenderer(this._renderListItem2.bind(this));
            this._list2.setVirtual();
            this._list2.setNumItems(1);
            this._list2.addEventListener(
                UIEventDispatcher.PULLUPRELEASE,
                Callable.create(this._onPullUpToRefresh.bind(this)),
            );
        }
    }

    private _renderListItem1(index: number, obj: GComponent): void {
        const num = this._list1!.getNumItems();
        obj.setText(`Item ${String(num - index - 1)}`);
    }

    private _renderListItem2(index: number, obj: GComponent): void {
        obj.setText(`Item ${String(index)}`);
    }

    private async _onPullDownToRefresh(): Promise<void> {
        if (this._refreshing1 || this._list1 == null) {
            return;
        }
        this._refreshing1 = true;
        const sp = this._list1.getScrollPane();
        if (sp == null) {
            this._refreshing1 = false;
            return;
        }
        const header = sp.getHeader();
        if (header != null) {
            const c1 = header.getController("c1");
            c1!.selectedIndex = 2;
            sp.lockHeader(header.getHeight());
        }

        await this.waitSeconds(2.0);
        if (!this.isSceneActive() || this._list1 == null) {
            this._refreshing1 = false;
            return;
        }

        this._list1.setNumItems(this._list1.getNumItems() + 5);

        if (header != null) {
            const c1 = header.getController("c1");
            c1!.selectedIndex = 3;
            sp.lockHeader(35);
        }

        await this.waitSeconds(2.0);
        if (!this.isSceneActive() || this._list1 == null) {
            this._refreshing1 = false;
            return;
        }

        if (header != null) {
            const c1 = header.getController("c1");
            c1!.selectedIndex = 0;
            sp.lockHeader(0);
        }
        this._refreshing1 = false;
    }

    private async _onPullUpToRefresh(): Promise<void> {
        if (this._refreshing2 || this._list2 == null) {
            return;
        }
        this._refreshing2 = true;
        const sp = this._list2.getScrollPane();
        if (sp == null) {
            this._refreshing2 = false;
            return;
        }
        const footer = sp.getFooter();
        if (footer != null) {
            const c1 = footer.getController("c1");
            c1!.selectedIndex = 1;
            sp.lockFooter(footer.getHeight());
        }

        await this.waitSeconds(2.0);
        if (!this.isSceneActive() || this._list2 == null) {
            this._refreshing2 = false;
            return;
        }

        this._list2.setNumItems(this._list2.getNumItems() + 5);

        if (footer != null) {
            const c1 = footer.getController("c1");
            c1!.selectedIndex = 0;
            sp.lockFooter(0);
        }
        this._refreshing2 = false;
    }
}
