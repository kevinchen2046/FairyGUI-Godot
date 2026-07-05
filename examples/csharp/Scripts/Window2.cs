using Godot;

namespace FairyGUI.Examples;

public partial class Window2 : GWindow
{
    public Window2()
    {
        SetupDisplay();
        SetOnInitCallback(Callable.From(OnInit));
        SetDoShowAnimationCallback(Callable.From(DoShowAnimation));
        SetDoHideAnimationCallback(Callable.From(DoHideAnimation));
        SetOnHideCallback(Callable.From(OnHide));
    }

    private void OnInit()
    {
        SetContentPane(UIPackage.CreateObject("Basics", "WindowB") as GComponent);
        Center();
    }

    private void DoShowAnimation()
    {
        SetScale(0.1f, 0.1f);
        SetPivot(0.5f, 0.5f);
        TweenScale(new Vector2(1.0f, 1.0f), 0.3f).OnComplete(Callable.From(OnShown));
    }

    private void OnShown()
    {
        var pane = GetContentPane();
        if (pane == null)
            return;
        var trans = pane.GetTransition("t1");
        trans?.Play(1, 0);
    }

    private void DoHideAnimation()
    {
        GTweenHelper.GetInstance().Kill(this, false);
        TweenScale(new Vector2(0.1f, 0.1f), 0.3f).OnComplete(Callable.From(HideImmediately));
    }

    private void OnHide()
    {
        var pane = GetContentPane();
        if (pane == null)
            return;
        var trans = pane.GetTransition("t1");
        trans?.Stop();
    }
}
