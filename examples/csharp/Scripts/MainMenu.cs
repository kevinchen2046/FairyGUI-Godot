using Godot;

namespace FairyGUI.Examples;

public partial class MainMenu : DemoSceneBase
{
    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/MainMenu");
        _view = UIPackage.CreateObject("MainMenu", "Main");
        _groot.AddChild(_view);

        NavBtn("n1", "res://csharp/Scenes/BasicsScene.tscn");
        NavBtn("n2", "res://csharp/Scenes/TransitionDemoScene.tscn");
        NavBtn("n4", "res://csharp/Scenes/VirtualListScene.tscn");
        NavBtn("n5", "res://csharp/Scenes/LoopListScene.tscn");
        NavBtn("n6", "res://csharp/Scenes/HitTestScene.tscn");
        NavBtn("n7", "res://csharp/Scenes/PullToRefreshScene.tscn");
        NavBtn("n8", "res://csharp/Scenes/ModalWaitingScene.tscn");
        NavBtn("n9", "res://csharp/Scenes/JoystickScene.tscn");
        NavBtn("n10", "res://csharp/Scenes/BagScene.tscn");
        NavBtn("n11", "res://csharp/Scenes/ChatScene.tscn");
        NavBtn("n12", "res://csharp/Scenes/ListEffectScene.tscn");
        NavBtn("n13", "res://csharp/Scenes/ScrollPaneScene.tscn");
        NavBtn("n14", "res://csharp/Scenes/TreeViewScene.tscn");
        NavBtn("n15", "res://csharp/Scenes/GuideScene.tscn");
        NavBtn("n16", "res://csharp/Scenes/CooldownScene.tscn");
    }

    private void NavBtn(string childName, string scenePath)
    {
        var btn = _view.GetChild(childName);
        if (btn == null)
            return;
        btn.AddClickListener(Callable.From(() =>
        {
            CleanupGrootOverlays();
            _groot.RemoveChildren();
            GetTree().ChangeSceneToFile(scenePath);
        }));
    }

    protected override void OnClose()
    {
        GetTree().Quit();
    }
}
