using Godot;

namespace FairyGUI.Examples;

public partial class ModalWaitingScene : DemoSceneBase
{
    private GWindow _testWin;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/ModalWaiting");
        UIConfigHelper.GetInstance().SetGlobalModalWaiting("ui://ModalWaiting/GlobalModalWaiting");
        UIConfigHelper.GetInstance().SetWindowModalWaiting("ui://ModalWaiting/WindowModalWaiting");

        _view = UIPackage.CreateObject("ModalWaiting", "Main");
        _groot.AddChild(_view);

        _testWin = new GWindow();
        _testWin.SetOnInitCallback(new Callable(this, MethodName.OnTestWinInit));
        _testWin.Show();

        RunGlobalModalWait();
    }

    private async void RunGlobalModalWait()
    {
        _groot.ShowModalWait();
        await ToSignal(GetTree().CreateTimer(3.0), SceneTreeTimer.SignalName.Timeout);
        _groot.CloseModalWait();
    }

    private void OnTestWinInit()
    {
        _testWin.SetContentPane(UIPackage.CreateObject("ModalWaiting", "TestWin") as GComponent);
        var pane = _testWin.GetContentPane();
        if (pane == null)
            return;
        var n1 = pane.GetChild("n1");
        n1?.AddClickListener(Callable.From(async () =>
        {
            _testWin.ShowModalWait();
            await ToSignal(GetTree().CreateTimer(3.0), SceneTreeTimer.SignalName.Timeout);
            _testWin.CloseModalWait();
        }));
    }
}
