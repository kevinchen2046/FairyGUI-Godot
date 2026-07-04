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
        _list.AddEventListener(FguiEvent.Scroll, new Callable(this, MethodName.DoSpecialEffect));
        DoSpecialEffect();
    }

    private void RenderListItem(int index, GodotObject obj)
    {
        obj.SetPivot(0.5f, 0.5f, false);
        obj.SetIcon("ui://LoopList/n" + (index + 1));
    }

    private void DoSpecialEffect()
    {
        if (_list == null)
            return;

        var cnt = _list.NumChildren();
        var viewCenterX = _list.LocalToGlobal(new Vector2(_list.GetViewWidth() / 2.0f, 0)).X;
        for (var i = 0; i < cnt; i++)
        {
            var obj = _list.GetChildAt(i);
            if (obj == null)
                continue;
            var objCenterX = obj.LocalToGlobal(new Vector2(obj.GetWidth() / 2.0f, 0)).X;
            var dist = Mathf.Abs(viewCenterX - objCenterX);
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
