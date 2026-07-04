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
/// GDScript 中 GuiObject 子类方法可直接调用；C# 需按实际类型转换。扩展方法便于 Demo 脚本保持简洁写法。
/// </summary>
public static class FguiExtensions
{
    private static GComponent Comp(GuiObject self) => (GComponent)self;
    private static GList List(GuiObject self) => (GList)self;
    private static GTree Tree(GuiObject self) => (GTree)self;
    private static GComponent Comp(GodotObject self) => (GComponent)self;
    private static GuiObject Obj(GodotObject self) => (GuiObject)self;

    public static GuiObject GetChild(this GuiObject self, string name) => Comp(self).GetChild(name);
    public static GuiObject GetChildAt(this GuiObject self, int index) => Comp(self).GetChildAt(index);
    public static int NumChildren(this GuiObject self) => Comp(self).NumChildren();
    public static void RemoveChildren(this GuiObject self) => Comp(self).RemoveChildren();
    public static void RemoveChildAt(this GuiObject self, int index) => Comp(self).RemoveChildAt(index);
    public static Transition GetTransition(this GuiObject self, string name) => Comp(self).GetTransition(name);
    public static bool IsAncestorOf(this GuiObject self, GuiObject obj) => Comp(self).IsAncestorOf(obj);
    public static bool IsChildInView(this GuiObject self, GuiObject child) => Comp(self).IsChildInView(child);
    public static ScrollPane GetScrollPane(this GuiObject self) => Comp(self).GetScrollPane();

    public static GController GetController(this GuiObject self, string name) => Comp(self).GetController(name);

    public static void SetItemRenderer(this GuiObject self, Callable callable) => List(self).SetItemRenderer(callable);
    public static void SetItemProvider(this GuiObject self, Callable callable) => List(self).SetItemProvider(callable);
    public static void SetVirtual(this GuiObject self) => List(self).SetVirtual();
    public static void SetVirtualAndLoop(this GuiObject self) => List(self).SetVirtualAndLoop();
    public static void SetNumItems(this GuiObject self, int value) => List(self).SetNumItems(value);
    public static int GetNumItems(this GuiObject self) => List(self).GetNumItems();
    public static void AddSelection(this GuiObject self, int index, bool scrollToView = false) => List(self).AddSelection(index, scrollToView);
    public static int GetFirstChildInView(this GuiObject self) => List(self).GetFirstChildInView();
    public static float GetViewWidth(this GuiObject self) => List(self).GetViewWidth();
    public static void EnsureBoundsCorrect(this GuiObject self) => List(self).EnsureBoundsCorrect();
    public static GuiObject AddItemFromPool(this GuiObject self, string url = null) => List(self).AddItemFromPool(url);
    public static void RemoveChildrenToPool(this GuiObject self) => List(self).RemoveChildrenToPool();

    public static void SetTreeNodeRender(this GuiObject self, Callable callable) => Tree(self).SetTreeNodeRender(callable);
    public static GTreeNode GetRootNode(this GuiObject self) => Tree(self).GetRootNode();

    public static GController GetController(this GodotObject self, string name) => Comp(self).GetController(name);
    public static GuiObject GetChild(this GodotObject self, string name) => Comp(self).GetChild(name);
    public static ScrollPane GetScrollPane(this GodotObject self) => Comp(self).GetScrollPane();
    public static string GetText(this GodotObject self) => Obj(self).GetText();
    public static void SetText(this GodotObject self, string text) => Obj(self).SetText(text);
    public static void SetIcon(this GodotObject self, string icon) => Obj(self).SetIcon(icon);
    public static void SetPivot(this GodotObject self, float x, float y, bool asAnchor = false) => Obj(self).SetPivot(x, y, asAnchor);
    public static void SetTitle(this GodotObject self, string title) => ((GButton)self).SetTitle(title);

    public static void AddRelation(this GuiObject self, GodotObject target, GuiObject.RelationType relationType, bool usePercent = false) =>
        self.AddRelation(target, (int)relationType, usePercent);
}
