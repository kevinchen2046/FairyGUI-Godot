using Godot;

namespace FairyGUI.Examples;

public partial class PullToRefreshScene : DemoSceneBase
{
    private GObject _list1;
    private GObject _list2;
    private bool _refreshing1;
    private bool _refreshing2;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/PullToRefresh");
        _view = UIPackage.CreateObject("PullToRefresh", "Main");
        _groot.AddChild(_view);

        _list1 = _view.GetChild("list1");
        if (_list1 != null)
        {
            _list1.SetItemRenderer(new Callable(this, MethodName.RenderListItem1));
            _list1.SetVirtual();
            _list1.SetNumItems(1);
            _list1.AddEventListener(FguiEvent.PullDownRelease, new Callable(this, MethodName.OnPullDownToRefresh));
        }

        _list2 = _view.GetChild("list2");
        if (_list2 != null)
        {
            _list2.SetItemRenderer(new Callable(this, MethodName.RenderListItem2));
            _list2.SetVirtual();
            _list2.SetNumItems(1);
            _list2.AddEventListener(FguiEvent.PullUpRelease, new Callable(this, MethodName.OnPullUpToRefresh));
        }
    }

    private void RenderListItem1(int index, GodotObject obj)
    {
        var num = _list1.GetNumItems();
        obj.SetText("Item " + (num - index - 1));
    }

    private void RenderListItem2(int index, GodotObject obj)
    {
        obj.SetText("Item " + index);
    }

    private async void OnPullDownToRefresh()
    {
        if (_refreshing1)
            return;
        _refreshing1 = true;
        var sp = _list1.GetScrollPane();
        if (sp == null)
        {
            _refreshing1 = false;
            return;
        }

        var header = sp.GetHeader();
        if (header != null)
        {
            var c1 = header.GetController("c1");
            c1?.SetSelectedIndex(2);
            sp.LockHeader((int)header.GetHeight());
        }

        await ToSignal(GetTree().CreateTimer(2.0), SceneTreeTimer.SignalName.Timeout);

        _list1.SetNumItems(_list1.GetNumItems() + 5);

        if (header != null)
        {
            var c1 = header.GetController("c1");
            c1?.SetSelectedIndex(3);
            sp.LockHeader(35);
        }

        await ToSignal(GetTree().CreateTimer(2.0), SceneTreeTimer.SignalName.Timeout);

        if (header != null)
        {
            var c1 = header.GetController("c1");
            c1?.SetSelectedIndex(0);
            sp.LockHeader(0);
        }
        _refreshing1 = false;
    }

    private async void OnPullUpToRefresh()
    {
        if (_refreshing2)
            return;
        _refreshing2 = true;
        var sp = _list2.GetScrollPane();
        if (sp == null)
        {
            _refreshing2 = false;
            return;
        }

        var footer = sp.GetFooter();
        if (footer != null)
        {
            var c1 = footer.GetController("c1");
            c1?.SetSelectedIndex(1);
            sp.LockFooter((int)footer.GetHeight());
        }

        await ToSignal(GetTree().CreateTimer(2.0), SceneTreeTimer.SignalName.Timeout);

        _list2.SetNumItems(_list2.GetNumItems() + 5);

        if (footer != null)
        {
            var c1 = footer.GetController("c1");
            c1?.SetSelectedIndex(0);
            sp.LockFooter(0);
        }
        _refreshing2 = false;
    }
}
