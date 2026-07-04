/// <reference path="../fairygui.d.ts" />

import "./fgui-globals";
import { Callable, Engine, Node, SceneTree } from "godot";

type GodotNode = Node & {
    isInsideTree(): boolean;
    getTree(): SceneTree;
    callDeferred(method: string, ...args: unknown[]): void;
};

export class DemoSceneBase extends Node {
    protected mainMenuScenePath = "res://ts/Scenes/MainMenu.tscn";

    protected _groot: GRoot | null = null;
    protected _view: GComponent | null = null;

    private _sceneActive = false;
    private _pendingScenePath: string | null = null;

    _ready(): void {
        this._sceneActive = true;
        this._registerDefaultFonts();
        if (GRoot.getInstance() != null) {
            GRoot.cleanup();
        }
        (this as unknown as GodotNode).callDeferred("_delayedInit");
    }

    _exit_tree(): void {
        this._sceneActive = false;
        this._pendingScenePath = null;
    }

    protected isSceneActive(): boolean {
        return this._sceneActive;
    }

    /** 不依赖场景节点，切场景后仍可用。 */
    protected getEngineTree(): SceneTree | null {
        const loop = Engine.getMainLoop();
        if (loop == null) {
            return null;
        }
        return loop as SceneTree;
    }

    /** GodotJS 在节点已离树时调用 getTree() 会报错，须先 isInsideTree()。 */
    protected safeGetTree(): SceneTree | null {
        const self = this as unknown as GodotNode;
        if (!this._sceneActive || !self.isInsideTree()) {
            return null;
        }
        return self.getTree();
    }

    _delayedInit(): void {
        if (!this.isSceneActive()) {
            return;
        }
        const tree = this.safeGetTree();
        if (tree == null) {
            return;
        }
        if (GRoot.getInstance() == null) {
            GRoot.create(tree);
        }
        this._deferredAttachToGroot();
    }

    _deferredAttachToGroot(): void {
        if (!this.isSceneActive()) {
            return;
        }
        this._groot = GRoot.getInstance();
        this._prepareGrootForScene();
        void this.ContinueInit();
        this._addCloseButton();
    }

    protected _prepareGrootForScene(): void {
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
        this._groot.removeChildren();
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
        if (!this.isSceneActive()) {
            return;
        }
        const tree = this.safeGetTree() ?? this.getEngineTree();
        if (tree == null) {
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
        closeBtn.addRelation(this._groot, FguiRelationType.RightRight, false);
        closeBtn.addRelation(this._groot, FguiRelationType.BottomBottom, false);
        closeBtn.setSortingOrder(100000);
        closeBtn.addClickListener(
            Callable.create(() => {
                (this as unknown as GodotNode).callDeferred("_onClose");
            }),
        );
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

    /** 延迟清空 GRoot 并切场景，分帧 detach 避免 FUIContainer 信号断开警告。 */
    protected _requestSceneChange(scenePath: string): void {
        if (!this.isSceneActive()) {
            return;
        }
        this._pendingScenePath = scenePath;
        (this as unknown as GodotNode).callDeferred("_deferredFinishSceneChange");
    }

    _deferredFinishSceneChange(): void {
        if (this._pendingScenePath == null || !this.isSceneActive()) {
            this._pendingScenePath = null;
            return;
        }
        this._cleanupGrootOverlays();
        (this as unknown as GodotNode).callDeferred("_deferredDetachGroot");
    }

    _deferredDetachGroot(): void {
        if (this._pendingScenePath == null || !this.isSceneActive()) {
            this._pendingScenePath = null;
            return;
        }
        GRoot.cleanup();
        this._groot = null;
        (this as unknown as GodotNode).callDeferred("_deferredChangeScene");
    }

    _deferredChangeScene(): void {
        const scenePath = this._pendingScenePath;
        this._pendingScenePath = null;
        if (scenePath == null) {
            return;
        }
        this.getEngineTree()?.callDeferred("change_scene_to_file", scenePath);
    }

    _onClose(): void {
        this._requestSceneChange(this.mainMenuScenePath);
    }
}
