namespace FairyGUI.Examples;

public partial class HitTestScene : DemoSceneBase
{
    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/HitTest");
        _view = UIPackage.CreateObject("HitTest", "Main");
        _groot.AddChild(_view);
    }
}
