using Godot;

namespace FairyGUI.Examples;

public partial class ListEffectScene : DemoSceneBase
{
    private GObject _list;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Extension");
        _view = UIPackage.CreateObject("Extension", "Main");
        _groot.AddChild(_view);

        _list = _view.GetChild("mailList");
        if (_list == null)
            return;

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
        var delay = 1.0f;
        for (var i = 0; i < 10; i++)
        {
            var item = _list.GetChildAt(i);
            if (item == null)
                break;
            if (_list.IsChildInView(item))
            {
                var trans = item.GetTransition("t0");
                trans?.Play(1, delay, Callable.From(() => { }));
                delay += 0.2f;
            }
            else
            {
                break;
            }
        }
    }
}
