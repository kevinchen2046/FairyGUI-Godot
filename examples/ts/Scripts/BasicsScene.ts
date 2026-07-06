/// <reference path="../fairygui.d.ts" />

import { Callable, Rect2, Vector2 } from "godot";
import { DemoSceneBase, GodotNode } from "./DemoSceneBase";
import { Window1 } from "./Window1";
import { Window2 } from "./Window2";

export default class BasicsScene extends DemoSceneBase {
    private _backBtn: GuiObject | null = null;
    private _demoContainer: GComponent | null = null;
    private _cc: GController | null = null;
    private readonly _demoObjects = new Map<string, GComponent>();

    private _winA: Window1 | null = null;
    private _winB: Window2 | null = null;
    private _pm: GPopupMenu | null = null;

    private _popupCom: GuiObject | null = null;
    private _progressRunning = false;
    private _depthStartPos = new Vector2(0, 0);

    protected ContinueInit(): void {
        const ui = UIConfigHelper.getInstance()!;
        ui.buttonSound = "ui://Basics/click";
        ui.verticalScrollBar = "ui://Basics/ScrollBar_VT";
        ui.horizontalScrollBar = "ui://Basics/ScrollBar_HZ";
        ui.tooltipsWin = "ui://Basics/WindowFrame";
        ui.popupMenu = "ui://Basics/PopupMenu";

        UIPackage.addPackage("res://Resources/UI/Basics");
        this._view = UIPackage.createObject("Basics", "Main");
        this._groot!.addChild(this._view);

        this._backBtn = this._view.getChild("btn_Back");
        this._backBtn?.setVisible(false);
        this._backBtn?.addClickListener(
            Callable.create(() => {
                (this as unknown as GodotNode).callDeferred("_deferredClickBack");
            }),
        );

        this._demoContainer = this._view.getChild("container") as GComponent | null;
        this._cc = this._view.getController("c1");

        const cnt = this._view.numChildren();
        for (let i = 0; i < cnt; i++) {
            const obj = this._view.getChildAt(i);
            if (obj != null && fguiGroupName(obj) === "btns") {
                obj.addClickListener(
                    Callable.create(() => {
                        (this as unknown as GodotNode).callDeferred("_deferredRunDemo", obj);
                    }),
                );
            }
        }
    }

    _deferredClickBack(): void {
        if (!this.isUiActive()) {
            return;
        }
        if (this._winB?.isShowing()) {
            this._winB.hideImmediately();
        }
        if (this._winA?.isShowing()) {
            this._winA.hideImmediately();
        }
        this._winA = null;
        this._winB = null;
        this._cleanupGrootOverlays();
        this._demoContainer?.removeChildren();
        this._demoObjects.clear();
        (this as unknown as GodotNode).callDeferred("_applyDemoMenu");
    }

    _applyDemoMenu(): void {
        if (!this.isUiActive()) {
            return;
        }
        (this as unknown as GodotNode).callDeferred("_applyDemoMenuController");
    }

    _applyDemoMenuController(): void {
        if (!this.isUiActive()) {
            return;
        }
        this._cc!.selectedIndex = 0;
        this._backBtn?.setVisible(false);
        this._progressRunning = false;
    }

    _deferredRunDemo(sender: GuiObject): void {
        if (!this.isUiActive() || sender == null) {
            return;
        }
        this._cleanupGrootOverlays();
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
        this._cc!.selectedIndex = 1;
        this._backBtn?.setVisible(true);
        this._demoContainer?.addChild(obj);
        (this as unknown as GodotNode).callDeferred("_applyDemoPlay", typeName, obj);
    }

    _applyDemoPlay(typeName: string, obj: GComponent): void {
        if (!this.isUiActive() || obj == null) {
            return;
        }

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

    private _playText(obj: GComponent): void {
        const n12 = obj.getChild("n12");
        if (n12 != null) {
            n12.addEventListener(
                UIEventDispatcher.CLICKLINK,
                Callable.create(() => {
                    n12.setText(
                        "[img]ui://Basics/pet[/img][color=#FF0000]You click the link[/color]:clicked",
                    );
                }),
            );
        }
        const n25 = obj.getChild("n25");
        if (n25 != null) {
            n25.addClickListener(
                Callable.create(() => {
                    const n22 = obj.getChild("n22");
                    const n24 = obj.getChild("n24");
                    if (n22 != null && n24 != null) {
                        n24.setText(n22.getText());
                    }
                }),
            );
        }
    }

    private _playPopup(obj: GComponent): void {
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
            n0.addClickListener(
                Callable.create(() => {
                    this._pm?.showMenuAt(n0, 2);
                }),
            );
        }

        const n1 = obj.getChild("n1");
        if (n1 != null && this._popupCom != null) {
            n1.addClickListener(
                Callable.create(() => {
                    this._groot!.showPopupSimple(this._popupCom!);
                }),
            );
        }

        obj.addEventListener(
            UIEventDispatcher.RIGHTCLICK,
            Callable.create(() => {
                this._pm?.show();
            }),
        );
    }

    private _playWindow(obj: GComponent): void {
        if (this._winA == null) {
            this._winA = new Window1();
            this._winB = new Window2();
        }

        const n0 = obj.getChild("n0");
        if (n0 != null) {
            n0.addClickListener(
                Callable.create(() => {
                    this._winA?.show();
                }),
            );
        }

        const n1 = obj.getChild("n1");
        if (n1 != null) {
            n1.addClickListener(
                Callable.create(() => {
                    this._winB?.show();
                }),
            );
        }
    }

    private _playDepth(obj: GComponent): void {
        const testContainer = obj.getChild("n22") as GComponent | null;
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
            } else {
                i += 1;
            }
        }
        this._depthStartPos = new Vector2(fixedObj.getX(), fixedObj.getY());

        const btn0 = obj.getChild("btn0");
        if (btn0 != null) {
            btn0.addClickListener(
                Callable.create(() => {
                    this._depthStartPos.x += 10;
                    this._depthStartPos.y += 10;
                    const graph = UIPackage.createObject("Basics", "graph_template");
                    if (graph != null) {
                        graph.setPosition(this._depthStartPos.x, this._depthStartPos.y);
                        testContainer.addChild(graph);
                    }
                }),
            );
        }

        const btn1 = obj.getChild("btn1");
        if (btn1 != null) {
            btn1.addClickListener(
                Callable.create(() => {
                    this._depthStartPos.x += 10;
                    this._depthStartPos.y += 10;
                    const graph = UIPackage.createObject("Basics", "graph_template");
                    if (graph != null) {
                        graph.setPosition(this._depthStartPos.x, this._depthStartPos.y);
                        graph.setSortingOrder(200);
                        testContainer.addChild(graph);
                    }
                }),
            );
        }
    }

    private _playDragDrop(obj: GComponent): void {
        const a = obj.getChild("a");
        if (a != null) {
            a.setDraggable(true);
        }
        const b = obj.getChild("b");
        if (b != null) {
            b.setDraggable(true);
            b.addEventListener(
                UIEventDispatcher.DRAGSTART,
                Callable.create((ctx: FGUIEventContext) => {
                    ctx.preventDefault();
                    DragDropManagerHelper.getInstance().startDrag(
                        b.icon,
                        b.icon,
                        ctx.getTouchId(),
                    );
                }),
            );
        }
        const c = obj.getChild("c");
        if (c != null) {
            c.icon = "";
            c.addEventListener(
                UIEventDispatcher.DROP,
                Callable.create((ctx: FGUIEventContext) => {
                    c.icon = String(ctx.getData());
                }),
            );
        }
        const d = obj.getChild("d");
        if (d != null) {
            const n7 = obj.getChild("n7");
            if (n7 != null) {
                const parent = d.getParent();
                if (parent != null) {
                    const rect = n7.transformRect(
                        new Rect2(0, 0, n7.getWidth(), n7.getHeight()),
                        parent,
                    );
                    d.setDraggable(true);
                    d.setDragBounds(rect);
                }
            }
        }
    }

    private _playProgress(obj: GComponent): void {
        this._progressRunning = true;
        obj.addEventListener(
            UIEventDispatcher.EXIT,
            Callable.create(() => {
                this._progressRunning = false;
            }),
        );
    }

    _process(_delta: number): void {
        if (!this.isSceneActive()) {
            return;
        }
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
                let val = child.value + 1;
                if (val > child.max) {
                    val = child.min;
                }
                child.value = val;
            }
        }
    }
}
