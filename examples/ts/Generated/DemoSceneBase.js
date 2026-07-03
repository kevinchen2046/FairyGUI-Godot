"use strict";
/// <reference path="../fairygui.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
class DemoSceneBase extends godot_1.Node {
    mainMenuScenePath = "res://ts/Scenes/MainMenu.tscn";
    _groot = null;
    _view = null;
    _ready() {
        this._registerDefaultFonts();
        if (GRoot.getInstance() == null) {
            this.call_deferred("_delayedInit");
        }
        else {
            this._groot = GRoot.getInstance();
            void this.ContinueInit();
            this._addCloseButton();
        }
    }
    _delayedInit() {
        GRoot.create(this.get_tree());
        this._groot = GRoot.getInstance();
        void this.ContinueInit();
        this._addCloseButton();
    }
    _registerDefaultFonts() {
        const fontPath = "res://Resources/fonts/DroidSansFallback.ttf";
        UIConfigHelper.getInstance().registerFont("default", fontPath);
        UIConfigHelper.getInstance().registerFont("微软雅黑", fontPath);
        UIConfigHelper.getInstance().setDefaultFont("default");
    }
    ContinueInit() {
        // Override in subclasses.
    }
    async waitSeconds(seconds) {
        const tree = this.get_tree();
        if (!tree) {
            return;
        }
        const timer = tree.create_timer(seconds);
        await timer.timeout.as_promise();
    }
    _addCloseButton() {
        if (!this._groot) {
            return;
        }
        const closeBtn = UIPackage.createObject("MainMenu", "CloseButton");
        if (closeBtn == null) {
            return;
        }
        closeBtn.setPosition(this._groot.getWidth() - closeBtn.getWidth() - 10, this._groot.getHeight() - closeBtn.getHeight() - 10);
        closeBtn.addRelation(this._groot, GObject.RIGHT_RIGHT, false);
        closeBtn.addRelation(this._groot, GObject.BOTTOM_BOTTOM, false);
        closeBtn.setSortingOrder(100000);
        closeBtn.addClickListener(godot_1.Callable.create(this._onClose.bind(this)));
        this._groot.addChild(closeBtn);
    }
    _cleanupGrootOverlays() {
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
            }
            else {
                i -= 1;
            }
        }
    }
    _onClose() {
        this._cleanupGrootOverlays();
        if (this._groot != null) {
            this._groot.removeChildren();
        }
        this.get_tree()?.change_scene_to_file(this.mainMenuScenePath);
    }
}
exports.default = DemoSceneBase;
//# sourceMappingURL=DemoSceneBase.js.map