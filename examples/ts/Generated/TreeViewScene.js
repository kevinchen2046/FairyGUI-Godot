/// <reference path="../fairygui.d.ts" />
import { Callable } from "godot";
import DemoSceneBase from "./DemoSceneBase";
export default class TreeViewScene extends DemoSceneBase {
    _tree1 = null;
    _tree2 = null;
    ContinueInit() {
        UIPackage.addPackage("res://Resources/UI/TreeView");
        this._view = UIPackage.createObject("TreeView", "Main");
        this._groot.addChild(this._view);
        this._tree1 = this._view.getChild("tree");
        if (this._tree1 != null) {
            this._tree1.addEventListener(UIEventDispatcher.CLICKITEM, Callable.create(this._onClickNode.bind(this)));
        }
        this._tree2 = this._view.getChild("tree2");
        if (this._tree2 != null) {
            this._tree2.addEventListener(UIEventDispatcher.CLICKITEM, Callable.create(this._onClickNode.bind(this)));
            this._tree2.setTreeNodeRender(this._renderTreeNode.bind(this));
            this._buildTree2();
        }
    }
    _buildTree2() {
        if (this._tree2 == null) {
            return;
        }
        const rootNode = this._tree2.getRootNode();
        if (rootNode == null) {
            return;
        }
        const topNode = new GTreeNode();
        topNode.init(true, "");
        topNode.setText("I'm a top node");
        rootNode.addChild(topNode);
        for (let i = 0; i < 5; i++) {
            const node = new GTreeNode();
            node.setText(`Hello ${String(i)}`);
            topNode.addChild(node);
        }
        const folderNode = new GTreeNode();
        folderNode.init(true, "");
        folderNode.setText("A folder node");
        topNode.addChild(folderNode);
        for (let i = 0; i < 5; i++) {
            const node = new GTreeNode();
            node.setText(`Good ${String(i)}`);
            folderNode.addChild(node);
        }
        for (let i = 0; i < 3; i++) {
            const node = new GTreeNode();
            node.setText(`World ${String(i)}`);
            topNode.addChild(node);
        }
        const anotherTop = new GTreeNode();
        anotherTop.setText("I'm a top node too");
        rootNode.addChild(anotherTop);
    }
    _onClickNode() {
        const obj = this._groot.getTouchTarget();
        if (obj != null) {
            const node = obj.getTreeNode();
            if (node != null) {
                console.log("click node ", node.getText());
            }
        }
    }
    _renderTreeNode(node, obj) {
        let btn = obj.getChild("btn");
        if (btn == null) {
            btn = obj;
        }
        if (node.isFolder()) {
            btn.setText(node.getText());
        }
        else {
            btn.setIcon("ui://TreeView/file");
            btn.setText(node.getText());
        }
    }
}
