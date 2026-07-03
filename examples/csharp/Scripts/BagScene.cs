using Godot;

namespace FairyGUI.Examples;

public partial class BagScene : DemoSceneBase
{
    private BagWindow _bagWindow;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Bag");

        _view = UIPackage.CreateObject("Bag", "Main");
        _groot.AddChild(_view);

        _bagWindow = new BagWindow();

        var bagBtn = _view.GetChild("bagBtn");
        bagBtn?.AddClickListener(Callable.From(() => _bagWindow.Show()));
    }
}
