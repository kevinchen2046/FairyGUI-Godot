using Godot;

namespace FairyGUI.Examples;

public partial class GuideScene : DemoSceneBase
{
    private GuiObject _guideLayer;
    private GuiObject _bagBtn;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Guide");

        _view = UIPackage.CreateObject("Guide", "Main");
        _groot.AddChild(_view);

        _guideLayer = UIPackage.CreateObject("Guide", "GuideLayer");
        if (_guideLayer != null)
        {
            _guideLayer.MakeFullScreen();
            _guideLayer.AddRelation(_groot, GuiObject.RelationType.RightRight, false);
        }

        _bagBtn = _view.GetChild("bagBtn");
        _bagBtn?.AddClickListener(Callable.From(() =>
        {
            if (_guideLayer != null && _guideLayer.GetParent() != null)
                _guideLayer.RemoveFromParent();
        }));

        var n2 = _view.GetChild("n2");
        n2?.AddClickListener(new Callable(this, MethodName.ShowGuide));
    }

    private void ShowGuide()
    {
        if (_guideLayer == null || _bagBtn == null)
            return;
        _groot.AddChild(_guideLayer);

        var rect = _bagBtn.TransformRect(
            new Rect2(Vector2.Zero, new Vector2(_bagBtn.GetWidth(), _bagBtn.GetHeight())),
            _guideLayer);
        var window = _guideLayer.GetChild("window");
        if (window != null)
        {
            window.SetSize(rect.Size.X, rect.Size.Y);
            GTweenHelper.GetInstance()
                .ToVec2(window.GetPosition(), rect.Position, 0.5f)
                .SetTarget(window, (int)GTweener.TweenPropType.Position);
        }
    }
}
