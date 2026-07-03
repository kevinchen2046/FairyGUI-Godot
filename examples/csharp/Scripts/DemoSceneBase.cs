using Godot;

namespace FairyGUI.Examples;

public partial class DemoSceneBase : Node
{
    protected const string MainMenuScenePath = "res://csharp/Scenes/MainMenu.tscn";

    protected GRoot _groot;
    protected GObject _view;

    public override void _Ready()
    {
        RegisterDefaultFonts();
        if (GRoot.GetInstance() == null)
            CallDeferred(MethodName.DelayedInit);
        else
        {
            _groot = GRoot.GetInstance();
            ContinueInit();
            AddCloseButton();
        }
    }

    private void DelayedInit()
    {
        GRoot.Create(GetTree());
        _groot = GRoot.GetInstance();
        ContinueInit();
        AddCloseButton();
    }

    private void RegisterDefaultFonts()
    {
        const string fontPath = "res://Resources/fonts/DroidSansFallback.ttf";
        UIConfigHelper.GetInstance().RegisterFont("default", fontPath);
        UIConfigHelper.GetInstance().RegisterFont("微软雅黑", fontPath);
        UIConfigHelper.GetInstance().SetDefaultFont("default");
    }

    protected virtual void ContinueInit()
    {
    }

    private void AddCloseButton()
    {
        var closeBtn = UIPackage.CreateObject("MainMenu", "CloseButton");
        if (closeBtn == null)
            return;
        closeBtn.SetPosition(_groot.GetWidth() - closeBtn.GetWidth() - 10, _groot.GetHeight() - closeBtn.GetHeight() - 10);
        closeBtn.AddRelation(_groot, GObject.RelationType.RightRight, false);
        closeBtn.AddRelation(_groot, GObject.RelationType.BottomBottom, false);
        closeBtn.SetSortingOrder(100000);
        closeBtn.AddClickListener(new Callable(this, MethodName.OnClose));
        _groot.AddChild(closeBtn);
    }

    protected void CleanupGrootOverlays()
    {
        if (_groot == null)
            return;
        if (DragDropManagerHelper.GetInstance().IsDragging())
            DragDropManagerHelper.GetInstance().Cancel();
        _groot.HideTooltips();
        _groot.HidePopup();
        _groot.CloseModalWait();
        _groot.CloseAllWindows();

        var i = _groot.NumChildren() - 1;
        while (i >= 0)
        {
            var child = _groot.GetChildAt(i);
            if (child == _view)
            {
                i--;
                continue;
            }
            if (child.GetSortingOrder() >= 100000)
            {
                i--;
                continue;
            }
            if (child.GetSortingOrder() >= 50000)
                _groot.RemoveChildAt(i);
            else
                i--;
        }
    }

    protected virtual void OnClose()
    {
        CleanupGrootOverlays();
        if (_groot != null)
            _groot.RemoveChildren();
        GetTree().ChangeSceneToFile(MainMenuScenePath);
    }
}
