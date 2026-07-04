/// <reference path="../fairygui.d.ts" />

import "./fgui-globals";
import { Callable, Node } from "godot";

export class DemoSceneBase extends Node {
    protected mainMenuScenePath = "res://ts/Scenes/MainMenu.tscn";

    protected _groot: GRoot | null = null;
    protected _view: GComponent | null = null;

    _ready(): void {
        this._registerDefaultFonts();
        if (GRoot.getInstance() == null) {
            (this as unknown as { callDeferred(method: string): void }).callDeferred("_delayedInit");
        } else {
            this._groot = GRoot.getInstance();
            void this.ContinueInit();
            this._addCloseButton();
        }
    }

    _delayedInit(): void {
        GRoot.create(this.getTree()!);
        this._groot = GRoot.getInstance();
        void this.ContinueInit();
        this._addCloseButton();
    }

    protected _registerDefaultFonts(): void {
        const fontPath = "res://Resources/fonts/DroidSansFallback.ttf";
        const ui = UIConfigHelper.getInstance()!;
        ui.registerFont("default", fontPath);
        ui.registerFont("微软雅黑", fontPath);
        ui.defaultFont = "default";
    }

    protected ContinueInit(): void | Promise<void> {
        // Override in subclasses.
    }

    protected async waitSeconds(seconds: number): Promise<void> {
        const tree = this.getTree();
        if (!tree) {
            return;
        }
        const timer = tree.createTimer(seconds) as { timeout: { asPromise(): Promise<void> } };
        await timer.timeout.asPromise();
    }

    protected _addCloseButton(): void {
        if (!this._groot) {
            return;
        }
        const closeBtn = UIPackage.createObject("MainMenu", "CloseButton");
        if (closeBtn == null) {
            return;
        }
        closeBtn.setPosition(
            this._groot.getWidth() - closeBtn.getWidth() - 10,
            this._groot.getHeight() - closeBtn.getHeight() - 10,
        );
        closeBtn.addRelation(this._groot, GuiObject.RIGHT_RIGHT, false);
        closeBtn.addRelation(this._groot, GuiObject.BOTTOM_BOTTOM, false);
        closeBtn.setSortingOrder(100000);
        closeBtn.addClickListener(Callable.create(this._onClose.bind(this)));
        this._groot.addChild(closeBtn);
    }

    protected _cleanupGrootOverlays(): void {
        if (this._groot == null) {
            return;
        }
        if (DragDropManagerHelper.getInstance().isDragging()) {
            DragDropManagerHelper.getInstance().cancel();
        }
        this._groot.hideTooltips();
        this._groot.hidePopup();
        this._groot.closeModalWait();
        this._groot.closeAllWindows();

        let i = this._groot.numChildren() - 1;
        while (i >= 0) {
            const child = this._groot.getChildAt(i);
            if (child === this._view) {
                i -= 1;
                continue;
            }
            if (child.getSortingOrder() >= 100000) {
                i -= 1;
                continue;
            }
            if (child.getSortingOrder() >= 50000) {
                this._groot.removeChildAt(i);
            } else {
                i -= 1;
            }
        }
    }

    protected _onClose(): void {
        this._cleanupGrootOverlays();
        if (this._groot != null) {
            this._groot.removeChildren();
        }
        this.getTree()?.changeSceneToFile(this.mainMenuScenePath);
    }
}
