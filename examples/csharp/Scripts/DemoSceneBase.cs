using Godot;

namespace FairyGUI.Examples;

public partial class DemoSceneBase : Node
{
    protected const string MainMenuScenePath = "res://csharp/Scenes/MainMenu.tscn";

    protected GRoot _groot;
    protected GuiObject _view;

    private bool _sceneActive;
    private string _pendingScenePath = "";

    public override void _Ready()
    {
        _sceneActive = true;
        RegisterDefaultFonts();
        if (GRoot.GetInstance() != null)
            GRoot.Cleanup();
        CallDeferred(MethodName.DelayedInit);
    }

    public override void _ExitTree()
    {
        _view = null;
        _groot = null;
        _sceneActive = false;
        _pendingScenePath = "";
    }

    protected bool IsSceneActive() => _sceneActive;

    protected bool IsUiActive()
    {
        if (!_sceneActive || !IsInsideTree())
            return false;
        if (_groot == null || _view == null)
            return false;
        if (GRoot.GetInstance() == null)
            return false;
        return GRoot.GetInstance() != null;
    }

    protected SceneTree GetEngineTree()
    {
        return Engine.GetMainLoop() as SceneTree;
    }

    protected SceneTree SafeGetTree()
    {
        if (!_sceneActive || !IsInsideTree())
            return null;
        return GetTree();
    }

    private void DelayedInit()
    {
        if (!IsSceneActive())
            return;
        var tree = SafeGetTree();
        if (tree == null)
            return;
        if (GRoot.GetInstance() == null)
            GRoot.Create(tree);
        DeferredAttachToGroot();
    }

    private void DeferredAttachToGroot()
    {
        if (!IsSceneActive())
            return;
        _groot = GRoot.GetInstance();
        PrepareGrootForScene();
        CallDeferred(MethodName.FinishContinueInit);
    }

    private void FinishContinueInit()
    {
        if (!IsSceneActive() || _groot == null)
            return;
        ContinueInit();
        AddCloseButton();
    }

    private void PrepareGrootForScene()
    {
        if (_groot == null)
            return;
        if (DragDropManagerHelper.GetInstance().IsDragging())
            DragDropManagerHelper.GetInstance().Cancel();
        _groot.HideTooltips();
        _groot.HidePopup();
        _groot.CloseModalWait();
        _groot.CloseAllWindows();
        _groot.RemoveChildren();
    }

    private void RegisterDefaultFonts()
    {
        const string cjkFont = "res://Resources/fonts/DroidSansFallback.ttf";
        const string latinFont = "res://Resources/fonts/arial.ttf";
        var ui = UIConfigHelper.GetInstance();
        ui.RegisterFont("default", cjkFont);
        ui.RegisterFont("en", latinFont);
        ui.RegisterFont("微软雅黑", cjkFont);
        ui.RegisterFont("Consolas", latinFont);
        ui.RegisterFont("Comic Sans MS", latinFont);
        ui.RegisterFont("Arial", latinFont);
        ui.SetDefaultFont("default");
    }

    protected void UseLatinDefaultFontOnWeb()
    {
        if (!Engine.HasFeature("web"))
            return;
        UIConfigHelper.GetInstance().SetDefaultFont("en");
    }

    protected void RestoreCjkDefaultFont()
    {
        UIConfigHelper.GetInstance().SetDefaultFont("default");
    }

    protected virtual void ContinueInit()
    {
    }

    protected async Task WaitSeconds(double seconds)
    {
        if (!IsSceneActive())
            return;
        var tree = SafeGetTree() ?? GetEngineTree();
        if (tree == null)
            return;
        await ToSignal(tree.CreateTimer(seconds), SceneTreeTimer.SignalName.Timeout);
    }

    private void AddCloseButton()
    {
        var closeBtn = UIPackage.CreateObject("MainMenu", "CloseButton");
        if (closeBtn == null)
            return;
        closeBtn.SetPosition(_groot.GetWidth() - closeBtn.GetWidth() - 10, _groot.GetHeight() - closeBtn.GetHeight() - 10);
        closeBtn.AddRelation(_groot, GuiObject.RelationType.RightRight, false);
        closeBtn.AddRelation(_groot, GuiObject.RelationType.BottomBottom, false);
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

    protected void RequestSceneChange(string scenePath)
    {
        if (!IsSceneActive())
            return;
        _pendingScenePath = scenePath;
        CallDeferred(MethodName.DeferredFinishSceneChange);
    }

    private void DeferredFinishSceneChange()
    {
        if (string.IsNullOrEmpty(_pendingScenePath) || !IsSceneActive())
        {
            _pendingScenePath = "";
            return;
        }
        CleanupGrootOverlays();
        CallDeferred(MethodName.DeferredDetachGroot);
    }

    private void DeferredDetachGroot()
    {
        if (string.IsNullOrEmpty(_pendingScenePath) || !IsSceneActive())
        {
            _pendingScenePath = "";
            return;
        }
        GRoot.Cleanup();
        _view = null;
        _groot = null;
        CallDeferred(MethodName.DeferredChangeScene);
    }

    private void DeferredChangeScene()
    {
        var scenePath = _pendingScenePath;
        _pendingScenePath = "";
        if (string.IsNullOrEmpty(scenePath))
            return;
        GetEngineTree()?.CallDeferred(SceneTree.MethodName.ChangeSceneToFile, scenePath);
    }

    protected virtual void OnClose()
    {
        RequestSceneChange(MainMenuScenePath);
    }
}
