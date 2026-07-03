"use strict";
/// <reference path="../fairygui.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
class DebugPopup extends godot_1.SceneTree {
    _initialize() {
        this.call_deferred("_run");
    }
    _run() {
        const groot = GRoot.create(this);
        UIConfigHelper.getInstance().setPopupMenu("ui://Basics/PopupMenu");
        UIPackage.addPackage("res://Resources/UI/Basics");
        const view = UIPackage.createObject("Basics", "Demo_Popup");
        if (view != null) {
            groot.addChild(view);
        }
        const pm = GPopupMenu.create();
        console.log("GPopupMenu.create=", pm);
        if (pm != null) {
            pm.addItem("Item 1");
            pm.addItem("Item 2");
            const n0 = view?.getChild("n0");
            if (n0 != null) {
                pm.showMenuAt(n0, 2);
            }
            this._printPane("GPopupMenu", pm.getContentPane());
        }
        else {
            console.log("Fallback: showPopup via createObjectFromURL");
            const cp = UIPackage.createObjectFromURL("ui://Basics/PopupMenu");
            if (cp != null) {
                groot.showPopupSimple(cp);
                this._printPane("manual", cp);
            }
        }
        this.quit();
    }
    _printPane(label, cp) {
        if (cp == null) {
            console.log(`${label}: contentPane is null`);
            return;
        }
        console.log(`${label} parent=`, cp.getParent());
        console.log(`${label} size=`, cp.getWidth(), "x", cp.getHeight());
        console.log(`${label} pos=`, cp.getPosition(), " visible=", cp.isVisible());
        const disp = cp.displayObject();
        if (disp == null) {
            console.log(`${label} displayObject=null`);
            return;
        }
        console.log(`${label} display parent=`, disp.get_parent());
        console.log(`${label} display in_tree=`, disp.is_inside_tree());
        if (disp instanceof godot_1.CanvasItem) {
            console.log(`${label} display visible=`, disp.visible, " z_index=", disp.z_index);
        }
        if (disp instanceof godot_1.Node2D) {
            console.log(`${label} display pos=`, disp.position);
        }
    }
}
exports.default = DebugPopup;
//# sourceMappingURL=DebugPopup.js.map