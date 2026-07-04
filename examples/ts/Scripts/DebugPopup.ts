/// <reference path="../fairygui.d.ts" />

import "./fgui-globals";
import { CanvasItem, Node2D, SceneTree } from "godot";

export default class DebugPopup extends SceneTree {
    _initialize(): void {
        (this as unknown as { callDeferred(method: string): void }).callDeferred("_run");
    }

    private _run(): void {
        const groot = GRoot.create(this);
        UIConfigHelper.getInstance()!.popupMenu = "ui://Basics/PopupMenu";
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
        } else {
            console.log("Fallback: showPopup via createObjectFromURL");
            const cp = UIPackage.createObjectFromURL("ui://Basics/PopupMenu");
            if (cp != null) {
                groot.showPopupSimple(cp);
                this._printPane("manual", cp as GComponent);
            }
        }
        this.quit();
    }

    private _printPane(label: string, cp: GComponent | null): void {
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
        console.log(`${label} display parent=`, disp.getParent());
        console.log(`${label} display in_tree=`, disp.isInsideTree());
        if (disp instanceof CanvasItem) {
            console.log(`${label} display visible=`, disp.visible, " zIndex=", disp.zIndex);
        }
        if (disp instanceof Node2D) {
            console.log(`${label} display pos=`, disp.position);
        }
    }
}
