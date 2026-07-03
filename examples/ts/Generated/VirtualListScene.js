"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class VirtualListScene extends DemoSceneBase_1.default {
    _list = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/VirtualList");
        this._view = UIPackage.createObject("VirtualList", "Main");
        this._groot.addChild(this._view);
        const n6 = this._view.getChild("n6");
        if (n6 != null) {
            n6.addClickListener(godot_1.Callable.create(() => {
                this._list?.addSelection(500, true);
            }));
        }
        const n7 = this._view.getChild("n7");
        if (n7 != null) {
            n7.addClickListener(godot_1.Callable.create(() => {
                const sp = this._list?.getScrollPane();
                sp?.scrollTop(true);
            }));
        }
        const n8 = this._view.getChild("n8");
        if (n8 != null) {
            n8.addClickListener(godot_1.Callable.create(() => {
                const sp = this._list?.getScrollPane();
                sp?.scrollBottom(true);
            }));
        }
        this._list = this._view.getChild("mailList");
        if (this._list != null) {
            this._list.setItemRenderer(this._renderListItem.bind(this));
            this._list.setVirtual();
            this._list.setNumItems(1000);
        }
    }
    _renderListItem(index, obj) {
        const readCtrl = obj.getController("IsRead");
        if (readCtrl != null) {
            readCtrl.setSelectedIndex(index % 2 === 0 ? 0 : 1);
        }
        const fetchCtrl = obj.getController("c1");
        if (fetchCtrl != null) {
            fetchCtrl.setSelectedIndex(index % 3 !== 0 ? 0 : 1);
        }
        const timeText = obj.getChild("timeText");
        if (timeText != null) {
            timeText.setText("5 Nov 2015 16:24:33");
        }
        obj.setText(`${String(index)} Mail title here`);
    }
}
exports.default = VirtualListScene;
//# sourceMappingURL=VirtualListScene.js.map