using Godot;

namespace FairyGUI.Examples;

public partial class ListEffectScene : DemoSceneBase
{
    private GList _list;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Extension");
        _view = UIPackage.CreateObject("Extension", "Main");
        _groot.AddChild(_view);

        _list = ((GComponent)_view).GetChild("mailList") as GList;
        if (_list == null)
        {
            GD.PushError("ListEffectScene: mailList is missing or not a GList.");
            return;
        }

        CallDeferred(MethodName.PopulateList);
    }

    private void PopulateList()
    {
        if (!IsUiActive() || _list == null)
            return;

        _list.RemoveChildrenToPool();

        for (var i = 0; i < 10; i++)
        {
            var item = _list.AddItemFromPool();
            if (item == null)
                continue;

            var timeText = item.GetChild("timeText");
            timeText?.SetText("5 Nov 2015 16:24:33");

            var readCtrl = item.GetController("IsRead");
            readCtrl?.SetSelectedIndex(i % 2 == 0 ? 0 : 1);

            var fetchCtrl = item.GetController("c1");
            fetchCtrl?.SetSelectedIndex(i % 3 != 0 ? 0 : 1);

            item.SetTitle("Mail title here");
        }

        _list.EnsureBoundsCorrect();
        PlayListEffects();
    }

    private void PlayListEffects()
    {
        if (!IsUiActive() || _list == null)
            return;

        var delay = 0.0f;
        for (var i = 0; i < 10; i++)
        {
            var item = _list.GetChildAt(i);
            if (item == null)
                break;
            if (!_list.IsChildInView(item))
                break;

            item.SetVisible(false);
            ((GComponent)item).GetTransition("t0")?.Play(1, delay);
            delay += 0.2f;
        }
    }
}
