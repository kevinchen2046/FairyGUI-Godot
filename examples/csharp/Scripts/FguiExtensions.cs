namespace FairyGUI.Examples;

/// <summary>
/// Godot glue 生成的事件常量为 camelCase（如 Clickitem），与 GDScript 命名不一致，在此提供 PascalCase 别名。
/// </summary>
public static class FguiEvent
{
    public const int Click = (int)UIEventDispatcher.Click;
    public const int Submit = (int)UIEventDispatcher.Submit;
    public const int Exit = (int)UIEventDispatcher.Exit;
    public const int Scroll = (int)UIEventDispatcher.Scroll;
    public const int TouchBegin = (int)UIEventDispatcher.Touchbegin;
    public const int TouchMove = (int)UIEventDispatcher.Touchmove;
    public const int TouchEnd = (int)UIEventDispatcher.Touchend;
    public const int RightClick = (int)UIEventDispatcher.Rightclick;
    public const int ClickItem = (int)UIEventDispatcher.Clickitem;
    public const int ClickLink = (int)UIEventDispatcher.Clicklink;
    public const int DragStart = (int)UIEventDispatcher.Dragstart;
    public const int Drop = (int)UIEventDispatcher.Drop;
    public const int PullDownRelease = (int)UIEventDispatcher.Pulldownrelease;
    public const int PullUpRelease = (int)UIEventDispatcher.Pulluprelease;
}

/// <summary>
/// GDScript 中 GObject 子类方法可直接调用；C# 需按实际类型转换。扩展方法便于 Demo 脚本保持简洁写法。
/// </summary>
public static class FguiExtensions
{
    private static GComponent Comp(GObject self) => (GComponent)self;
    private static GList List(GObject self) => (GList)self;
    private static GTree Tree(GObject self) => (GTree)self;
    private static GComponent Comp(GodotObject self) => (GComponent)self;
    private static GObject Obj(GodotObject self) => (GObject)self;

    public static GObject GetChild(this GObject self, string name) => Comp(self).GetChild(name);
    public static GObject GetChildAt(this GObject self, int index) => Comp(self).GetChildAt(index);
    public static int NumChildren(this GObject self) => Comp(self).NumChildren();
    public static void RemoveChildren(this GObject self) => Comp(self).RemoveChildren();
    public static void RemoveChildAt(this GObject self, int index) => Comp(self).RemoveChildAt(index);
    public static Transition GetTransition(this GObject self, string name) => Comp(self).GetTransition(name);
    public static bool IsAncestorOf(this GObject self, GObject obj) => Comp(self).IsAncestorOf(obj);
    public static bool IsChildInView(this GObject self, GObject child) => Comp(self).IsChildInView(child);
    public static ScrollPane GetScrollPane(this GObject self) => Comp(self).GetScrollPane();

    public static GController GetController(this GObject self, string name) => Comp(self).GetController(name);

    public static void SetItemRenderer(this GObject self, Callable callable) => List(self).SetItemRenderer(callable);
    public static void SetItemProvider(this GObject self, Callable callable) => List(self).SetItemProvider(callable);
    public static void SetVirtual(this GObject self) => List(self).SetVirtual();
    public static void SetVirtualAndLoop(this GObject self) => List(self).SetVirtualAndLoop();
    public static void SetNumItems(this GObject self, int value) => List(self).SetNumItems(value);
    public static int GetNumItems(this GObject self) => List(self).GetNumItems();
    public static void AddSelection(this GObject self, int index, bool scrollToView = false) => List(self).AddSelection(index, scrollToView);
    public static int GetFirstChildInView(this GObject self) => List(self).GetFirstChildInView();
    public static float GetViewWidth(this GObject self) => List(self).GetViewWidth();
    public static void EnsureBoundsCorrect(this GObject self) => List(self).EnsureBoundsCorrect();
    public static GObject AddItemFromPool(this GObject self, string url = null) => List(self).AddItemFromPool(url);
    public static void RemoveChildrenToPool(this GObject self) => List(self).RemoveChildrenToPool();

    public static void SetTreeNodeRender(this GObject self, Callable callable) => Tree(self).SetTreeNodeRender(callable);
    public static GTreeNode GetRootNode(this GObject self) => Tree(self).GetRootNode();

    public static GController GetController(this GodotObject self, string name) => Comp(self).GetController(name);
    public static GObject GetChild(this GodotObject self, string name) => Comp(self).GetChild(name);
    public static ScrollPane GetScrollPane(this GodotObject self) => Comp(self).GetScrollPane();
    public static string GetText(this GodotObject self) => Obj(self).GetText();
    public static void SetText(this GodotObject self, string text) => Obj(self).SetText(text);
    public static void SetIcon(this GodotObject self, string icon) => Obj(self).SetIcon(icon);
    public static void SetPivot(this GodotObject self, float x, float y, bool asAnchor = false) => Obj(self).SetPivot(x, y, asAnchor);
    public static void SetTitle(this GodotObject self, string title) => ((GButton)self).SetTitle(title);

    public static void AddRelation(this GObject self, GodotObject target, GObject.RelationType relationType, bool usePercent = false) =>
        self.AddRelation(target, (int)relationType, usePercent);
}
