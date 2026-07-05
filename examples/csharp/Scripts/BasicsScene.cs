using Godot;
using System.Collections.Generic;

namespace FairyGUI.Examples;

public partial class BasicsScene : DemoSceneBase
{
    private GuiObject _backBtn;
    private GuiObject _demoContainer;
    private GController _cc;
    private readonly Dictionary<string, GuiObject> _demoObjects = new();

    private GWindow _winA;
    private GWindow _winB;
    private GPopupMenu _pm;

    private GuiObject _popupCom;
    private bool _progressRunning;
    private Vector2 _depthStartPos;

    protected override void ContinueInit()
    {
        UIConfigHelper.GetInstance().SetButtonSound("ui://Basics/click");
        UIConfigHelper.GetInstance().SetVerticalScrollBar("ui://Basics/ScrollBar_VT");
        UIConfigHelper.GetInstance().SetHorizontalScrollBar("ui://Basics/ScrollBar_HZ");
        UIConfigHelper.GetInstance().SetTooltipsWin("ui://Basics/WindowFrame");
        UIConfigHelper.GetInstance().SetPopupMenu("ui://Basics/PopupMenu");

        UIPackage.AddPackage("res://Resources/UI/Basics");
        _view = UIPackage.CreateObject("Basics", "Main");
        _groot.AddChild(_view);

        _backBtn = _view.GetChild("btn_Back");
        _backBtn.SetVisible(false);
        _backBtn.AddClickListener(new Callable(this, MethodName.DeferredClickBack));

        _demoContainer = _view.GetChild("container");
        _cc = _view.GetController("c1");

        var cnt = _view.NumChildren();
        for (var i = 0; i < cnt; i++)
        {
            var obj = _view.GetChildAt(i);
            if (obj?.GetGroup() != null && obj.GetGroup().GetName() == "btns")
            {
                var sender = obj;
                obj.AddClickListener(Callable.From(() => CallDeferred(MethodName.DeferredRunDemo, sender)));
            }
        }
    }

    private void DeferredClickBack()
    {
        if (!IsUiActive())
            return;
        if (_winB != null && _winB.IsShowing())
            _winB.HideImmediately();
        if (_winA != null && _winA.IsShowing())
            _winA.HideImmediately();
        CleanupGrootOverlays();
        _demoContainer.RemoveChildren();
        _demoObjects.Clear();
        CallDeferred(MethodName.ApplyDemoMenu);
    }

    private void ApplyDemoMenu()
    {
        if (!IsUiActive())
            return;
        CallDeferred(MethodName.ApplyDemoMenuController);
    }

    private void ApplyDemoMenuController()
    {
        if (!IsUiActive())
            return;
        _cc.SetSelectedIndex(0);
        _backBtn.SetVisible(false);
        _progressRunning = false;
    }

    private void DeferredRunDemo(GuiObject sender)
    {
        if (!IsUiActive() || sender == null)
            return;
        CleanupGrootOverlays();
        var typeName = sender.GetName().ToString()[4..];

        if (!_demoObjects.TryGetValue(typeName, out var obj))
        {
            obj = UIPackage.CreateObject("Basics", "Demo_" + typeName);
            if (obj == null)
                return;
            _demoObjects[typeName] = obj;
        }

        _demoContainer.RemoveChildren();
        _cc.SetSelectedIndex(1);
        _backBtn.SetVisible(true);
        _demoContainer.AddChild(obj);
        CallDeferred(MethodName.ApplyDemoPlay, typeName, obj);
    }

    private void ApplyDemoPlay(string typeName, GuiObject obj)
    {
        if (!IsUiActive() || obj == null)
            return;

        switch (typeName)
        {
            case "Text":
                PlayText(obj);
                break;
            case "Window":
                PlayWindow(obj);
                break;
            case "Popup":
                PlayPopup(obj);
                break;
            case "ProgressBar":
                PlayProgress(obj);
                break;
            case "Drag&Drop":
                PlayDragDrop(obj);
                break;
            case "Depth":
                PlayDepth(obj);
                break;
        }
    }

    private void PlayText(GuiObject obj)
    {
        var n12 = obj.GetChild("n12");
        if (n12 != null)
        {
            n12.AddEventListener(FguiEvent.ClickLink, Callable.From(() =>
            {
                n12.SetText("[img]ui://Basics/pet[/img][color=#FF0000]You click the link[/color]:clicked");
            }));
        }

        var n25 = obj.GetChild("n25");
        if (n25 != null)
        {
            n25.AddClickListener(Callable.From(() =>
            {
                var n22 = obj.GetChild("n22");
                var n24 = obj.GetChild("n24");
                n24.SetText(n22.GetText());
            }));
        }
    }

    private void PlayPopup(GuiObject obj)
    {
        if (_pm == null)
        {
            _pm = GPopupMenu.Create();
            if (_pm == null)
            {
                GD.PushError("BasicsScene: GPopupMenu.Create failed");
                return;
            }
            _pm.AddItem("Item 1");
            _pm.AddItem("Item 2");
            _pm.AddItem("Item 3");
            _pm.AddItem("Item 4");
        }

        if (_popupCom == null)
        {
            _popupCom = UIPackage.CreateObject("Basics", "Component12");
            _popupCom.Center();
        }

        var n0 = obj.GetChild("n0");
        n0?.AddClickListener(Callable.From(() => _pm.ShowMenuAt(n0, 2)));

        var n1 = obj.GetChild("n1");
        n1?.AddClickListener(Callable.From(() => _groot.ShowPopupSimple(_popupCom)));

        obj.AddEventListener(FguiEvent.RightClick, Callable.From(() => _pm.Show()));
    }

    private void PlayWindow(GuiObject obj)
    {
        if (_winA != null)
            return;

        _winA = new Window1();
        _winB = new Window2();

        var n0 = obj.GetChild("n0");
        n0?.AddClickListener(Callable.From(() => _winA.Show()));

        var n1 = obj.GetChild("n1");
        n1?.AddClickListener(Callable.From(() => _winB.Show()));
    }

    private void PlayDepth(GuiObject obj)
    {
        var testContainer = obj.GetChild("n22");
        if (testContainer == null)
            return;
        var fixedObj = testContainer.GetChild("n0");
        fixedObj.SetSortingOrder(100);
        fixedObj.SetDraggable(true);

        var num = testContainer.NumChildren();
        var i = 0;
        while (i < num)
        {
            var child = testContainer.GetChildAt(i);
            if (child != fixedObj)
            {
                testContainer.RemoveChildAt(i);
                num--;
            }
            else
            {
                i++;
            }
        }
        _depthStartPos = new Vector2(fixedObj.GetX(), fixedObj.GetY());

        var btn0 = obj.GetChild("btn0");
        btn0?.AddClickListener(Callable.From(() =>
        {
            _depthStartPos.X += 10;
            _depthStartPos.Y += 10;
            var graph = UIPackage.CreateObject("Basics", "graph_template");
            if (graph != null)
            {
                graph.SetPosition(_depthStartPos.X, _depthStartPos.Y);
                testContainer.AddChild(graph);
            }
        }));

        var btn1 = obj.GetChild("btn1");
        btn1?.AddClickListener(Callable.From(() =>
        {
            _depthStartPos.X += 10;
            _depthStartPos.Y += 10;
            var graph = UIPackage.CreateObject("Basics", "graph_template");
            if (graph != null)
            {
                graph.SetPosition(_depthStartPos.X, _depthStartPos.Y);
                graph.SetSortingOrder(200);
                testContainer.AddChild(graph);
            }
        }));
    }

    private void PlayDragDrop(GuiObject obj)
    {
        var a = obj.GetChild("a");
        a?.SetDraggable(true);

        var b = obj.GetChild("b");
        if (b != null)
        {
            b.SetDraggable(true);
            b.AddEventListener(FguiEvent.DragStart, Callable.From<FguiEventContext>(ctx =>
            {
                ctx.PreventDefault();
                DragDropManagerHelper.GetInstance().StartDrag(b.GetIcon(), b.GetIcon(), ctx.GetTouchId());
            }));
        }

        var c = obj.GetChild("c");
        if (c != null)
        {
            c.SetIcon("");
            c.AddEventListener(FguiEvent.Drop, Callable.From<FguiEventContext>(ctx =>
            {
                c.SetIcon(ctx.GetData().AsString());
            }));
        }

        var d = obj.GetChild("d");
        if (d != null)
        {
            var n7 = obj.GetChild("n7");
            if (n7 != null)
            {
                var parent = d.GetParent();
                var rect = n7.TransformRect(new Rect2(Vector2.Zero, new Vector2(n7.GetWidth(), n7.GetHeight())), parent);
                d.SetDraggable(true);
                d.SetDragBounds(rect);
            }
        }
    }

    private void PlayProgress(GuiObject obj)
    {
        _progressRunning = true;
        obj.AddEventListener(FguiEvent.Exit, Callable.From(() => _progressRunning = false));
    }

    public override void _Process(double delta)
    {
        if (!_progressRunning)
            return;
        if (!_demoObjects.TryGetValue("ProgressBar", out var obj))
            return;
        var cnt = obj.NumChildren();
        for (var i = 0; i < cnt; i++)
        {
            var child = obj.GetChildAt(i);
            if (child is GProgressBar pb)
            {
                var val = pb.GetValue() + 1;
                if (val > pb.GetMax())
                    val = pb.GetMin();
                pb.SetValue(val);
            }
        }
    }
}
