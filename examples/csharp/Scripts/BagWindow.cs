using Godot;
using System;

namespace FairyGUI.Examples;

public partial class BagWindow : GWindow
{
    private GList _list;

    public BagWindow()
    {
        SetupDisplay();
        SetOnInitCallback(Callable.From(OnInit));
        SetDoShowAnimationCallback(Callable.From(DoShowAnimation));
        SetDoHideAnimationCallback(Callable.From(DoHideAnimation));
    }

    private void OnInit()
    {
        SetContentPane(UIPackage.CreateObject("Bag", "BagWin") as GComponent);
        Center();
        SetModal(true);

        var pane = GetContentPane();
        if (pane == null)
            return;
        _list = pane.GetChild("list") as GList;
        if (_list == null)
            return;
        _list.AddEventListener(FguiEvent.ClickItem, Callable.From(OnClickItem));
        _list.SetItemRenderer(Callable.From(new Action<int, GodotObject>(RenderListItem)));
        _list.SetNumItems(45);
    }

    private void RenderListItem(int index, GodotObject obj)
    {
        var iconIdx = (int)(GD.Randi() % 10);
        obj.SetIcon($"res://Resources/icons/i{iconIdx}.png");
        obj.SetText(((int)(GD.Randi() % 100)).ToString());
    }

    private void OnClickItem()
    {
        var item = GRoot.GetInstance().GetTouchTarget();
        if (item == null)
            return;
        var pane = GetContentPane();
        if (pane == null)
            return;
        var n11 = pane.GetChild("n11");
        var n13 = pane.GetChild("n13");
        if (n11 != null && n13 != null)
        {
            n11.SetIcon(item.GetIcon());
            n13.SetText(item.GetText());
        }
    }

    private void DoShowAnimation()
    {
        SetScale(0.1f, 0.1f);
        SetPivot(0.5f, 0.5f);
        TweenScale(new Vector2(1.0f, 1.0f), 0.3f);
    }

    private void DoHideAnimation()
    {
        GTweenHelper.GetInstance().Kill(this, false);
        TweenScale(new Vector2(0.1f, 0.1f), 0.3f).OnComplete(Callable.From(HideImmediately));
    }
}
