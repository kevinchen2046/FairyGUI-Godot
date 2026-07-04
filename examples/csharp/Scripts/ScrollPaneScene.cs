using Godot;

namespace FairyGUI.Examples;

public partial class ScrollPaneScene : DemoSceneBase
{
    private GuiObject _list;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/ScrollPane");
        _view = UIPackage.CreateObject("ScrollPane", "Main");
        _groot.AddChild(_view);

        _list = _view.GetChild("list");
        if (_list == null)
            return;

        _list.SetItemRenderer(new Callable(this, MethodName.RenderListItem));
        _list.SetVirtual();
        _list.SetNumItems(1000);
        _list.AddEventListener(FguiEvent.TouchBegin, new Callable(this, MethodName.OnClickList));
    }

    private void RenderListItem(int index, GodotObject obj)
    {
        obj.SetTitle("Item " + index);
        var sp = obj.GetScrollPane();
        sp?.SetPosX(0, false);

        var b0 = obj.GetChild("b0");
        b0?.AddEventListener(FguiEvent.Click, Callable.From(() =>
        {
            var txt = _view.GetChild("txt");
            txt?.SetText("Stick " + obj.GetText());
        }));

        var b1 = obj.GetChild("b1");
        b1?.AddEventListener(FguiEvent.Click, Callable.From(() =>
        {
            var txt = _view.GetChild("txt");
            txt?.SetText("Delete " + obj.GetText());
        }));
    }

    private void OnClickList()
    {
        if (_list == null)
            return;
        var cnt = _list.NumChildren();
        for (var i = 0; i < cnt; i++)
        {
            var item = _list.GetChildAt(i);
            if (item == null)
                continue;
            var sp = item.GetScrollPane();
            if (sp != null && sp.GetPosX() != 0)
            {
                var touchTarget = _groot.GetTouchTarget();
                var b0 = item.GetChild("b0");
                var b1 = item.GetChild("b1");
                if ((b0 != null && b0.IsAncestorOf(touchTarget)) ||
                    (b1 != null && b1.IsAncestorOf(touchTarget)))
                    return;
                sp.SetPosX(0, true);
                sp.CancelDragging();
                _list.GetScrollPane().CancelDragging();
                break;
            }
        }
    }
}
