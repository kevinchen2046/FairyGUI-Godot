using Godot;

namespace FairyGUI.Examples;

public partial class ListEffectScene : DemoSceneBase
{
    private GuiObject _list;

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
        // 等布局更新后再判断可见项并播放入场动画（与 GD/TS 一致，避免 isChildInView 误判）
        CallDeferred(MethodName.PlayListEffects);
    }

    private void PlayListEffects()
    {
        if (!IsUiActive() || _list == null)
            return;

        var delay = 1.0f;
        for (var i = 0; i < 10; i++)
        {
            var item = _list.GetChildAt(i);
            if (item == null)
                break;
            if (!_list.IsChildInView(item))
                break;

            // 与 Unity MailItem.PlayEffect 一致：先隐藏，再由 transition 的 Visible 关键帧显示并滑入
            item.SetVisible(false);
            item.GetTransition("t0")?.Play(1, delay);
            delay += 0.2f;
        }
    }
}
