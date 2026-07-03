using Godot;

namespace FairyGUI.Examples;

public class Window1 : GWindow
{
    public Window1()
    {
        SetupDisplay();
        SetOnInitCallback(Callable.From(OnInit));
        SetOnShownCallback(Callable.From(OnShown));
    }

    private void OnInit()
    {
        SetContentPane(UIPackage.CreateObject("Basics", "WindowA") as GComponent);
        Center();
    }

    private void OnShown()
    {
        var pane = GetContentPane();
        if (pane == null)
            return;
        var list = pane.GetChild("n6");
        if (list == null)
            return;
        list.RemoveChildrenToPool();
        for (var i = 0; i < 6; i++)
        {
            var item = list.AddItemFromPool();
            item.SetTitle(i.ToString());
            item.SetIcon("ui://Basics/r4");
        }
    }
}
