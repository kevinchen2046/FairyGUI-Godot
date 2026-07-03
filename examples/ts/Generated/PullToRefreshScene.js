"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class PullToRefreshScene extends DemoSceneBase_1.default {
    _list1 = null;
    _list2 = null;
    _refreshing1 = false;
    _refreshing2 = false;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/PullToRefresh");
        this._view = UIPackage.createObject("PullToRefresh", "Main");
        this._groot.addChild(this._view);
        this._list1 = this._view.getChild("list1");
        if (this._list1 != null) {
            this._list1.setItemRenderer(this._renderListItem1.bind(this));
            this._list1.setVirtual();
            this._list1.setNumItems(1);
            this._list1.addEventListener(UIEventDispatcher.PULLDOWNRELEASE, godot_1.Callable.create(this._onPullDownToRefresh.bind(this)));
        }
        this._list2 = this._view.getChild("list2");
        if (this._list2 != null) {
            this._list2.setItemRenderer(this._renderListItem2.bind(this));
            this._list2.setVirtual();
            this._list2.setNumItems(1);
            this._list2.addEventListener(UIEventDispatcher.PULLUPRELEASE, godot_1.Callable.create(this._onPullUpToRefresh.bind(this)));
        }
    }
    _renderListItem1(index, obj) {
        const num = this._list1.getNumItems();
        obj.setText(`Item ${String(num - index - 1)}`);
    }
    _renderListItem2(index, obj) {
        obj.setText(`Item ${String(index)}`);
    }
    async _onPullDownToRefresh() {
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
            c1?.setSelectedIndex(2);
            sp.lockHeader(header.getHeight());
        }
        await this.waitSeconds(2.0);
        this._list1.setNumItems(this._list1.getNumItems() + 5);
        if (header != null) {
            const c1 = header.getController("c1");
            c1?.setSelectedIndex(3);
            sp.lockHeader(35);
        }
        await this.waitSeconds(2.0);
        if (header != null) {
            const c1 = header.getController("c1");
            c1?.setSelectedIndex(0);
            sp.lockHeader(0);
        }
        this._refreshing1 = false;
    }
    async _onPullUpToRefresh() {
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
            c1?.setSelectedIndex(1);
            sp.lockFooter(footer.getHeight());
        }
        await this.waitSeconds(2.0);
        this._list2.setNumItems(this._list2.getNumItems() + 5);
        if (footer != null) {
            const c1 = footer.getController("c1");
            c1?.setSelectedIndex(0);
            sp.lockFooter(0);
        }
        this._refreshing2 = false;
    }
}
exports.default = PullToRefreshScene;
//# sourceMappingURL=PullToRefreshScene.js.map