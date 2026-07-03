/// <reference path="../fairygui.d.ts" />
import { Callable, Rect2, Vector2 } from "godot";
import DemoSceneBase from "./DemoSceneBase";
import Window1 from "./Window1";
import Window2 from "./Window2";
export default class BasicsScene extends DemoSceneBase {
    _backBtn = null;
    _demoContainer = null;
    _cc = null;
    _demoObjects = new Map();
    _winA = null;
    _winB = null;
    _pm = null;
    _popupCom = null;
    _progressRunning = false;
    _depthStartPos = new Vector2(0, 0);
    ContinueInit() {
        UIConfigHelper.getInstance().setButtonSound("ui://Basics/click");
        UIConfigHelper.getInstance().setVerticalScrollBar("ui://Basics/ScrollBar_VT");
        UIConfigHelper.getInstance().setHorizontalScrollBar("ui://Basics/ScrollBar_HZ");
        UIConfigHelper.getInstance().setTooltipsWin("ui://Basics/WindowFrame");
        UIConfigHelper.getInstance().setPopupMenu("ui://Basics/PopupMenu");
        UIPackage.addPackage("res://Resources/UI/Basics");
        this._view = UIPackage.createObject("Basics", "Main");
        this._groot.addChild(this._view);
        this._backBtn = this._view.getChild("btn_Back");
        this._backBtn?.setVisible(false);
        this._backBtn?.addClickListener(Callable.create(this._onClickBack.bind(this)));
        this._demoContainer = this._view.getChild("container");
        this._cc = this._view.getController("c1");
        const cnt = this._view.numChildren();
        for (let i = 0; i < cnt; i++) {
            const obj = this._view.getChildAt(i);
            if (obj != null && obj.getGroup()?.getName() === "btns") {
                obj.addClickListener(Callable.create(this._runDemo.bind(this)));
            }
        }
    }
    _onClickBack() {
        if (this._winB?.isShowing()) {
            this._winB.hideImmediately();
        }
        if (this._winA?.isShowing()) {
            this._winA.hideImmediately();
        }
        this._cleanupGrootOverlays();
        this._demoContainer?.removeChildren();
        this._cc?.setSelectedIndex(0);
        this._backBtn?.setVisible(false);
        this._progressRunning = false;
    }
    _runDemo() {
        this._cleanupGrootOverlays();
        const sender = this._groot.getTouchTarget();
        if (sender == null) {
            return;
        }
        const typeName = String(sender.getName()).substring(4);
        let obj = this._demoObjects.get(typeName) ?? null;
        if (obj == null) {
            obj = UIPackage.createObject("Basics", `Demo_${typeName}`);
            if (obj == null) {
                return;
            }
            this._demoObjects.set(typeName, obj);
        }
        this._demoContainer?.removeChildren();
        this._demoContainer?.addChild(obj);
        this._cc?.setSelectedIndex(1);
        this._backBtn?.setVisible(true);
        switch (typeName) {
            case "Text":
                this._playText(obj);
                break;
            case "Window":
                this._playWindow(obj);
                break;
            case "Popup":
                this._playPopup(obj);
                break;
            case "ProgressBar":
                this._playProgress(obj);
                break;
            case "Drag&Drop":
                this._playDragDrop(obj);
                break;
            case "Depth":
                this._playDepth(obj);
                break;
        }
    }
    _playText(obj) {
        const n12 = obj.getChild("n12");
        if (n12 != null) {
            n12.addEventListener(UIEventDispatcher.CLICKLINK, Callable.create(() => {
                n12.setText("[img]ui://Basics/pet[/img][color=#FF0000]You click the link[/color]:clicked");
            }));
        }
        const n25 = obj.getChild("n25");
        if (n25 != null) {
            n25.addClickListener(Callable.create(() => {
                const n22 = obj.getChild("n22");
                const n24 = obj.getChild("n24");
                if (n22 != null && n24 != null) {
                    n24.setText(n22.getText());
                }
            }));
        }
    }
    _playPopup(obj) {
        if (this._pm == null) {
            this._pm = GPopupMenu.create();
            if (this._pm == null) {
                console.error("BasicsScene: GPopupMenu.create failed");
                return;
            }
            this._pm.addItem("Item 1");
            this._pm.addItem("Item 2");
            this._pm.addItem("Item 3");
            this._pm.addItem("Item 4");
        }
        if (this._popupCom == null) {
            this._popupCom = UIPackage.createObject("Basics", "Component12");
            this._popupCom?.center();
        }
        const n0 = obj.getChild("n0");
        if (n0 != null) {
            n0.addClickListener(Callable.create(() => {
                this._pm?.showMenuAt(n0, 2);
            }));
        }
        const n1 = obj.getChild("n1");
        if (n1 != null && this._popupCom != null) {
            n1.addClickListener(Callable.create(() => {
                this._groot.showPopupSimple(this._popupCom);
            }));
        }
        obj.addEventListener(UIEventDispatcher.RIGHTCLICK, Callable.create(() => {
            this._pm?.show();
        }));
    }
    _playWindow(obj) {
        if (this._winA != null) {
            return;
        }
        this._winA = new Window1();
        this._winB = new Window2();
        const n0 = obj.getChild("n0");
        if (n0 != null) {
            n0.addClickListener(Callable.create(() => {
                this._winA?.show();
            }));
        }
        const n1 = obj.getChild("n1");
        if (n1 != null) {
            n1.addClickListener(Callable.create(() => {
                this._winB?.show();
            }));
        }
    }
    _playDepth(obj) {
        const testContainer = obj.getChild("n22");
        if (testContainer == null) {
            return;
        }
        const fixedObj = testContainer.getChildAt(0);
        fixedObj.setSortingOrder(100);
        fixedObj.setDraggable(true);
        let num = testContainer.numChildren();
        let i = 0;
        while (i < num) {
            const child = testContainer.getChildAt(i);
            if (child !== fixedObj) {
                testContainer.removeChildAt(i);
                num -= 1;
            }
            else {
                i += 1;
            }
        }
        this._depthStartPos = new Vector2(fixedObj.getX(), fixedObj.getY());
        const btn0 = obj.getChild("btn0");
        if (btn0 != null) {
            btn0.addClickListener(Callable.create(() => {
                this._depthStartPos.x += 10;
                this._depthStartPos.y += 10;
                const graph = UIPackage.createObject("Basics", "graph_template");
                if (graph != null) {
                    graph.setPosition(this._depthStartPos.x, this._depthStartPos.y);
                    testContainer.addChild(graph);
                }
            }));
        }
        const btn1 = obj.getChild("btn1");
        if (btn1 != null) {
            btn1.addClickListener(Callable.create(() => {
                this._depthStartPos.x += 10;
                this._depthStartPos.y += 10;
                const graph = UIPackage.createObject("Basics", "graph_template");
                if (graph != null) {
                    graph.setPosition(this._depthStartPos.x, this._depthStartPos.y);
                    graph.setSortingOrder(200);
                    testContainer.addChild(graph);
                }
            }));
        }
    }
    _playDragDrop(obj) {
        const a = obj.getChild("a");
        if (a != null) {
            a.setDraggable(true);
        }
        const b = obj.getChild("b");
        if (b != null) {
            b.setDraggable(true);
            b.addEventListener(UIEventDispatcher.DRAGSTART, Callable.create((ctx) => {
                ctx.preventDefault();
                DragDropManagerHelper.getInstance().startDrag(b.getIcon(), b.getIcon(), ctx.getTouchId());
            }));
        }
        const c = obj.getChild("c");
        if (c != null) {
            c.setIcon("");
            c.addEventListener(UIEventDispatcher.DROP, Callable.create((ctx) => {
                c.setIcon(String(ctx.getData()));
            }));
        }
        const d = obj.getChild("d");
        if (d != null) {
            const n7 = obj.getChild("n7");
            if (n7 != null) {
                const parent = d.getParent();
                if (parent != null) {
                    const rect = n7.transformRect(new Rect2(0, 0, n7.getWidth(), n7.getHeight()), parent);
                    d.setDraggable(true);
                    d.setDragBounds(rect);
                }
            }
        }
    }
    _playProgress(obj) {
        this._progressRunning = true;
        obj.addEventListener(UIEventDispatcher.EXIT, Callable.create(() => {
            this._progressRunning = false;
        }));
    }
    _process(_delta) {
        if (!this._progressRunning) {
            return;
        }
        const obj = this._demoObjects.get("ProgressBar") ?? null;
        if (obj == null) {
            return;
        }
        const cnt = obj.numChildren();
        for (let i = 0; i < cnt; i++) {
            const child = obj.getChildAt(i);
            if (child instanceof GProgressBar) {
                let val = child.getValue() + 1;
                if (val > child.getMax()) {
                    val = child.getMin();
                }
                child.setValue(val);
            }
        }
    }
}
