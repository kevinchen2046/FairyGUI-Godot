using Godot;

namespace FairyGUI.Examples;

public partial class TransitionDemoScene : DemoSceneBase
{
    private GuiObject _btnGroup;

    private GuiObject _g1;
    private GuiObject _g2;
    private GuiObject _g3;
    private GuiObject _g4;
    private GuiObject _g5;
    private GuiObject _g6;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Transition");
        _view = UIPackage.CreateObject("Transition", "Main");
        _groot.AddChild(_view);

        _btnGroup = _view.GetChild("g0");

        _g1 = UIPackage.CreateObject("Transition", "BOSS");
        _g2 = UIPackage.CreateObject("Transition", "BOSS_SKILL");
        _g3 = UIPackage.CreateObject("Transition", "TRAP");
        _g4 = UIPackage.CreateObject("Transition", "GoodHit");
        _g5 = UIPackage.CreateObject("Transition", "PowerUp");
        _g6 = UIPackage.CreateObject("Transition", "PathDemo");

        SetupTransitionBtn("btn0", _g1);
        SetupTransitionBtn("btn1", _g2);
        SetupTransitionBtn("btn2", _g3);
        SetupTransitionBtn("btn3", _g4);
        SetupTransitionBtn("btn4", _g5);
        SetupTransitionBtn("btn5", _g6);
    }

    private void SetupTransitionBtn(string btnName, GuiObject target)
    {
        var btn = _view.GetChild(btnName);
        if (btn == null || target == null)
            return;
        btn.AddClickListener(Callable.From(() =>
        {
            _btnGroup.SetVisible(false);
            _groot.AddChild(target);
            var trans = target.GetTransition("t0");
            trans?.Play(1, 0, Callable.From(() =>
            {
                _btnGroup.SetVisible(true);
                target.RemoveFromParent();
            }));
        }));
    }
}
