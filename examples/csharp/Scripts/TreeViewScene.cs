using Godot;

namespace FairyGUI.Examples;

public partial class TreeViewScene : DemoSceneBase
{
    private GuiObject _tree1;
    private GuiObject _tree2;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/TreeView");
        _view = UIPackage.CreateObject("TreeView", "Main");
        _groot.AddChild(_view);

        _tree1 = _view.GetChild("tree");
        _tree1?.AddEventListener(FguiEvent.ClickItem, new Callable(this, MethodName.OnClickNode));

        _tree2 = _view.GetChild("tree2");
        if (_tree2 != null)
        {
            _tree2.AddEventListener(FguiEvent.ClickItem, new Callable(this, MethodName.OnClickNode));
            _tree2.SetTreeNodeRender(new Callable(this, MethodName.RenderTreeNode));
            BuildTree2();
        }
    }

    private void BuildTree2()
    {
        if (_tree2 == null)
            return;
        var rootNode = _tree2.GetRootNode();
        if (rootNode == null)
            return;

        var topNode = new GTreeNode();
        topNode.Init(true, "");
        topNode.SetText("I'm a top node");
        rootNode.AddChild(topNode);

        for (var i = 0; i < 5; i++)
        {
            var node = new GTreeNode();
            node.SetText("Hello " + i);
            topNode.AddChild(node);
        }

        var folderNode = new GTreeNode();
        folderNode.Init(true, "");
        folderNode.SetText("A folder node");
        topNode.AddChild(folderNode);
        for (var i = 0; i < 5; i++)
        {
            var node = new GTreeNode();
            node.SetText("Good " + i);
            folderNode.AddChild(node);
        }

        for (var i = 0; i < 3; i++)
        {
            var node = new GTreeNode();
            node.SetText("World " + i);
            topNode.AddChild(node);
        }

        var anotherTop = new GTreeNode();
        anotherTop.SetText("I'm a top node too");
        rootNode.AddChild(anotherTop);
    }

    private void OnClickNode(FguiEventContext ctx)
    {
        GuiObject item = ctx?.GetData().As<GuiObject>();
        if (item == null)
            item = _groot.GetTouchTarget();
        if (item == null)
            return;
        var node = item.GetTreeNode();
        if (node != null)
            GD.Print("click node ", node.GetText());
    }

    private void RenderTreeNode(GTreeNode node, GodotObject obj)
    {
        var item = (GuiObject)obj;
        var btn = item.GetChild("btn");
        if (btn == null)
            btn = item;
        if (node.IsFolder())
            btn.SetText(node.GetText());
        else
        {
            btn.SetIcon("ui://TreeView/file");
            btn.SetText(node.GetText());
        }
    }
}
