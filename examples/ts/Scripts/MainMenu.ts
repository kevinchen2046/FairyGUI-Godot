/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";
import { DemoSceneBase } from "./DemoSceneBase";

export default class MainMenu extends DemoSceneBase {
    protected ContinueInit(): void {
        UIPackage.addPackage("res://Resources/UI/MainMenu");
        this._view = UIPackage.createObject("MainMenu", "Main");
        this._groot!.addChild(this._view);

        this._navBtn("n1", "res://ts/Scenes/BasicsScene.tscn");
        this._navBtn("n2", "res://ts/Scenes/TransitionDemoScene.tscn");
        this._navBtn("n4", "res://ts/Scenes/VirtualListScene.tscn");
        this._navBtn("n5", "res://ts/Scenes/LoopListScene.tscn");
        this._navBtn("n6", "res://ts/Scenes/HitTestScene.tscn");
        this._navBtn("n7", "res://ts/Scenes/PullToRefreshScene.tscn");
        this._navBtn("n8", "res://ts/Scenes/ModalWaitingScene.tscn");
        this._navBtn("n9", "res://ts/Scenes/JoystickScene.tscn");
        this._navBtn("n10", "res://ts/Scenes/BagScene.tscn");
        this._navBtn("n11", "res://ts/Scenes/ChatScene.tscn");
        this._navBtn("n12", "res://ts/Scenes/ListEffectScene.tscn");
        this._navBtn("n13", "res://ts/Scenes/ScrollPaneScene.tscn");
        this._navBtn("n14", "res://ts/Scenes/TreeViewScene.tscn");
        this._navBtn("n15", "res://ts/Scenes/GuideScene.tscn");
        this._navBtn("n16", "res://ts/Scenes/CooldownScene.tscn");
    }

    private _navBtn(childName: string, scenePath: string): void {
        const btn = this._view!.getChild(childName);
        if (btn != null) {
            btn.addClickListener(
                Callable.create(() => {
                    (this as unknown as { callDeferred(method: string, scenePath: string): void }).callDeferred(
                        "_navigateToScene",
                        scenePath,
                    );
                }),
            );
        }
    }

    _navigateToScene(scenePath: string): void {
        this._requestSceneChange(scenePath);
    }

    _onClose(): void {
        this.safeGetTree()?.quit();
    }
}
