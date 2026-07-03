namespace FairyGUI.Examples;

public partial class CooldownScene : DemoSceneBase
{
    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Cooldown");
        _view = UIPackage.CreateObject("Cooldown", "Main");
        _groot.AddChild(_view);

        var b0 = _view.GetChild("b0");
        if (b0 is GProgressBar pb0)
        {
            var icon0 = pb0.GetChild("icon");
            icon0?.SetIcon("res://Resources/icons/k0.png");
            pb0.TweenValue(100, 5);
        }

        var b1 = _view.GetChild("b1");
        if (b1 is GProgressBar pb1)
        {
            var icon1 = pb1.GetChild("icon");
            icon1?.SetIcon("res://Resources/icons/k1.png");
            pb1.TweenValue(0, 10);
        }
    }
}
