using Godot;

namespace FairyGUI.Examples;

public partial class VirtualListScene : DemoSceneBase
{
    private GuiObject _list;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/VirtualList");
        _view = UIPackage.CreateObject("VirtualList", "Main");
        _groot.AddChild(_view);

        var n6 = _view.GetChild("n6");
        n6?.AddClickListener(Callable.From(() =>
        {
            _list?.AddSelection(500, true);
        }));

        var n7 = _view.GetChild("n7");
        n7?.AddClickListener(Callable.From(() =>
        {
            var sp = _list?.GetScrollPane();
            sp?.ScrollTop(true);
        }));

        var n8 = _view.GetChild("n8");
        n8?.AddClickListener(Callable.From(() =>
        {
            var sp = _list?.GetScrollPane();
            sp?.ScrollBottom(true);
        }));

        _list = _view.GetChild("mailList");
        if (_list == null)
            return;

        _list.SetItemRenderer(new Callable(this, MethodName.RenderListItem));
        _list.SetVirtual();
        _list.SetNumItems(1000);
    }

    private void RenderListItem(int index, GodotObject obj)
    {
        var readCtrl = obj.GetController("IsRead");
        readCtrl?.SetSelectedIndex(index % 2 == 0 ? 0 : 1);

        var fetchCtrl = obj.GetController("c1");
        fetchCtrl?.SetSelectedIndex(index % 3 != 0 ? 0 : 1);

        var timeText = obj.GetChild("timeText");
        timeText?.SetText("5 Nov 2015 16:24:33");
        obj.SetText(index + " Mail title here");
    }
}
