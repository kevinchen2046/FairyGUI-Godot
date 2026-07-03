"use strict";
/// <reference path="../fairygui.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const DemoSceneBase_1 = __importDefault(require("./DemoSceneBase"));
class GuideScene extends DemoSceneBase_1.default {
    _guideLayer = null;
    _bagBtn = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/Guide");
        this._view = UIPackage.createObject("Guide", "Main");
        this._groot.addChild(this._view);
        this._guideLayer = UIPackage.createObject("Guide", "GuideLayer");
        if (this._guideLayer != null) {
            this._guideLayer.makeFullScreen();
            this._guideLayer.addRelation(this._groot, GObject.RIGHT_RIGHT, false);
        }
        this._bagBtn = this._view.getChild("bagBtn");
        if (this._bagBtn != null) {
            this._bagBtn.addClickListener(godot_1.Callable.create(() => {
                if (this._guideLayer != null && this._guideLayer.getParent() != null) {
                    this._guideLayer.removeFromParent();
                }
            }));
        }
        const n2 = this._view.getChild("n2");
        if (n2 != null) {
            n2.addClickListener(godot_1.Callable.create(this._showGuide.bind(this)));
        }
    }
    _showGuide() {
        if (this._guideLayer == null || this._bagBtn == null) {
            return;
        }
        this._groot.addChild(this._guideLayer);
        const rect = this._bagBtn.transformRect(new godot_1.Rect2(0, 0, this._bagBtn.getWidth(), this._bagBtn.getHeight()), this._guideLayer);
        const window = this._guideLayer.getChild("window");
        if (window != null) {
            window.setSize(rect.size.x, rect.size.y);
            GTweenHelper.getInstance()
                .toVec2(window.getPosition(), rect.position, 0.5)
                .setTarget(window, GTweener.TweenPropType.POSITION);
        }
    }
}
exports.default = GuideScene;
//# sourceMappingURL=GuideScene.js.map