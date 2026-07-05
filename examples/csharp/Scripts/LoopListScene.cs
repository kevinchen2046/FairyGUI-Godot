using Godot;

namespace FairyGUI.Examples;

public partial class LoopListScene : DemoSceneBase
{
    private GuiObject _list;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/LoopList");
        _view = UIPackage.CreateObject("LoopList", "Main");
        _groot.AddChild(_view);

        _list = _view.GetChild("list");
        if (_list == null)
            return;

        _list.SetItemRenderer(new Callable(this, MethodName.RenderListItem));
        _list.SetVirtualAndLoop();
        _list.SetNumItems(5);
        _list.AddEventListener(FguiEvent.Scroll, new Callable(this, MethodName.OnScroll));
        UpdateSpecialEffect();
    }

    private void RenderListItem(int index, GodotObject obj)
    {
        obj.SetPivot(0.5f, 0.5f, false);
        obj.SetIcon("ui://LoopList/n" + (index + 1));
    }

    private void OnScroll(FguiEventContext ctx)
    {
        UpdateSpecialEffect();
    }

    private void UpdateSpecialEffect()
    {
        if (_list == null)
            return;
        var sp = _list.GetScrollPane();
        if (sp == null)
            return;

        var midX = sp.GetScrollingPosX() + _list.GetViewWidth() / 2.0f;
        var cnt = _list.NumChildren();
        for (var i = 0; i < cnt; i++)
        {
            var obj = _list.GetChildAt(i);
            if (obj == null)
                continue;
            var dist = Mathf.Abs(midX - obj.GetX() - obj.GetWidth() / 2.0f);
            if (dist > obj.GetWidth())
            {
                obj.SetScaleX(1);
                obj.SetScaleY(1);
            }
            else
            {
                var ss = 1 + (1 - dist / obj.GetWidth()) * 0.24f;
                obj.SetScaleX(ss);
                obj.SetScaleY(ss);
            }
        }

        var n3 = _view.GetChild("n3");
        if (n3 != null)
        {
            var firstIdx = _list.GetFirstChildInView();
            var total = _list.GetNumItems();
            n3.SetText(((firstIdx + 1) % total).ToString());
        }
    }
}
