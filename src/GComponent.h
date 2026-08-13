#ifndef __GCOMPONENT_H__
#define __GCOMPONENT_H__

#include "FairyGUIMacros.h"
#include "GObject.h"
#include "Margin.h"
#include "ScrollPane.h"
#include "Transition.h"
// cocos2d.h removed - see godot_types.h
#include "display/FUIContainer.h"
#include "event/HitTest.h"

#ifdef FGUI_GDEXTENSION
#include <godot_cpp/core/gdvirtual.gen.inc>
#endif

NS_FGUI_BEGIN

class GWindow;

/// @brief FairyGUI 组件基类。
/// GComponent 是所有容器类组件的基类，支持：
/// - 添加/移除/管理子对象
/// - 控制器 (Controller) 系统
/// - 过渡动画 (Transition) 系统
/// - 滚动面板 (ScrollPane)
/// - 遮罩 (Mask) 和命中区域 (HitArea)
/// - 不透明模式 (Opaque)
/// - 高级显示列表管理
class GComponent : public GObject
{
    GDCLASS(GComponent, GuiObject)

public:
    GComponent();
    virtual ~GComponent();

    FAIRYGUI_CREATE(GComponent)

    static void _bind_methods();

    // ===== 子对象管理 =====

    /** 添加一个子对象到末尾。
     * @return 实际添加的对象（可能返回池中的对象）。
     */
    GObject* addChild(const Ref<GObject>& child) override;
    /** 在指定索引位置插入一个子对象。
     * @param child 要添加的子对象。
     * @param index 插入位置索引。
     * @return 实际添加的对象。
     */
    virtual GObject* addChildAt(const Ref<GObject>& child, int index);

    void gd_addChildAt(Object* child, int index);
    void gd_removeChildren(int beginIndex, int endIndex);

    /** 移除指定子对象。 */
    void removeChild(GObject* child) override;
    /** 移除指定索引的子对象。 */
    virtual void removeChildAt(int index);
    void gd_removeChildAt(int index);
    /** 移除所有子对象。 */
    void removeChildren() { removeChildren(0, -1); }
    /** 移除指定范围的子对象。
     * @param beginIndex 起始索引（包含）。
     * @param endIndex 结束索引（不包含，-1 表示到末尾）。
     */
    void removeChildren(int beginIndex, int endIndex);

    /** 获取指定索引的子对象。 */
    GObject* getChildAt(int index) const;
    /** 通过名称获取子对象。 */
    GObject* getChild(const std::string& pName) const;
    /** 通过路径获取子对象（支持多级路径，用 "/" 分隔）。 */
    GObject* getChildByPath(const std::string& path) const;
    /** 在指定组内通过名称查找子对象。 */
    GObject* getChildInGroup(const GGroup* group, const std::string& pName) const;
    /** 通过 ID 获取子对象。 */
    GObject* getChildById(const std::string& pId) const;
    /** 获取所有子对象列表。 */
    const std::vector<Ref<GObject>>& getChildren() const { return _children; }

    Ref<GObject> gd_getChild(const String& child_name) const;
    Ref<GObject> gd_getChildByPath(const String& path) const;
    Ref<GObject> gd_getChildById(const String& child_id) const;
    Ref<GObject> gd_getChildAt(int index) const;
    Ref<ScrollPane> gd_getScrollPane();

    /** 获取子对象在父组件中的索引。 */
    int getChildIndex(const GObject* child) const;
    /** 设置子对象在父组件中的索引（调整显示顺序）。 */
    void setChildIndex(GObject* child, int index);
    /** 设置子对象的索引（插入到指定索引之前）。 */
    int setChildIndexBefore(GObject* child, int index);
    /** 交换两个子对象的位置。 */
    void swapChildren(GObject* child1, GObject* child2);
    /** 交换两个索引的子对象。 */
    void swapChildrenAt(int index1, int index2);

    /** 获取子对象数量。 */
    int numChildren() const;
    /** 判断指定对象是否是本组件的祖先（向上递归检查）。 */
    bool isAncestorOf(const GObject* obj) const;

    /** 指定子对象是否在可视区域内（虚函数，GList 覆写）。 */
    virtual bool isChildInView(GObject* child);
    /** 获取第一个在可视区域内的子对象索引（虚函数，GList 覆写）。 */
    virtual int getFirstChildInView();

    // ===== 控制器管理 =====

    /** 添加一个控制器。
     * 控制器的创建和设计应通过编辑器完成，不建议使用代码创建。
     */
    void addController(GController* c);
    /** 通过索引获取控制器。 */
    GController* getControllerAt(int index) const;
    /** 通过名称获取控制器。 */
    GController* getController(const std::string& pName) const;

    Ref<GController> gd_getController(const String& pName) const;
    Ref<GController> gd_getControllerAt(int index) const;

    /** 移除指定控制器。 */
    void removeController(GController* c);
    void gd_removeController(GController* c) { removeController(c); }

    /** 获取控制器数量。 */
    int numControllers() const { return (int)_controllers.size(); }

    /** 获取所有控制器列表。 */
    const std::vector<Ref<GController>>& getControllers() const { return _controllers; }

    /** 应用指定控制器的状态到所有关联对象。 */
    void applyController(GController* c);
    /** 应用所有控制器的状态。 */
    void applyAllControllers();

    // ===== 过渡动画管理 =====

    /** 通过名称获取过渡动画。 */
    Transition* getTransition(const std::string& pName) const;
    /** 通过索引获取过渡动画。 */
    Transition* getTransitionAt(int index) const;

    Ref<Transition> gd_getTransition(const String& pName) const;
    Ref<Transition> gd_getTransitionAt(int index) const;

    /** 获取过渡动画数量。 */
    int numTransitions() const { return (int)_transitions.size(); }

    /** 获取所有过渡动画列表。 */
    const std::vector<Ref<Transition>>& getTransitions() const { return _transitions; }

    // ===== 不透明模式 (Opaque) =====

    /** 是否不透明（开启后自身会参与命中测试，而不仅仅是子节点）。 */
    bool getOpaque() const { return _opaque; }
    /** 设置是否不透明。不透明时，即使子节点都不可命中，本组件自身也会响应。 */
    void setOpaque(bool value);

    // ===== 边距 =====

    /** 获取边距设置。 */
    const Margin& getMargin() { return _margin; }
    /** 设置边距。 */
    void setMargin(const Margin& value);

    // ===== 子对象渲染顺序 =====

    /** 获取子对象的渲染顺序模式。 */
    ChildrenRenderOrder getChildrenRenderOrder() const { return _childrenRenderOrder; }
    /** 设置子对象的渲染顺序模式。
     * - AS_ARRANGED: 按添加顺序
     * - ARCHIMEDES: 按索引顺序反向渲染（顶部在上）
     * - DESCENT: 降序渲染
     */
    void setChildrenRenderOrder(ChildrenRenderOrder value);
    /** 获取 Archimedes 模式下的顶点索引（分割线）。 */
    int getApexIndex() const { return _apexIndex; }
    /** 设置 Archimedes 模式下的顶点索引。 */
    void setApexIndex(int value);

    // ===== 遮罩 (Mask) =====

    /** 获取遮罩节点。 */
    Node* getMask() const;
    /** 设置遮罩节点。
     * @param value 用作遮罩的节点。
     * @param inverted 是否反转遮罩效果（显示遮罩之外的区域）。
     */
    void setMask(Node* value, bool inverted = false);
    /** 获取拥有遮罩的对象（本对象作为遮罩被其他对象使用）。 */
    GObject* getMaskOwner() const { return _maskOwner; }

    // ===== 命中区域 (HitArea) =====

    /** 获取自定义命中测试区域。 */
    IHitTest* getHitArea() const { return _hitArea; }
    /** 设置自定义命中测试区域（用于不规则形状点击判定）。 */
    void setHitArea(IHitTest* value);
    /** 确保命中区域子节点已添加到显示列表。 */
    void ensureHitAreaChildAttached();

    // ===== 滚动面板 =====

    /** 获取滚动面板。如果组件未设置为可滚动，返回 nullptr。 */
    ScrollPane* getScrollPane() const { return _scrollPane.ptr(); }

    // ===== 视口尺寸 =====

    /** 获取视口宽度（有滚动面板时为可视区域宽度，否则为组件宽度）。 */
    float getViewWidth() const;
    void setViewWidth(float value);
    /** 获取视口高度。 */
    float getViewHeight() const;
    void setViewHeight(float value);

    /** 获取 UI 包中的原始用户数据。 */
    const std::string& getBaseUserData() const;

    // ===== 显示列表管理 =====

    /** 标记边界已改变，需要重新计算。 */
    void setBoundsChangedFlag();
    /** 确保边界计算正确（延迟处理）。 */
    void ensureBoundsCorrect();
    /** 强制刷新显示列表（重建渲染节点树）。 */
    void refreshDisplayList();
    /** 递归刷新本组件及所有子孙组件的显示列表。 */
    void refreshDisplayListRecursive();
    /** 同步子节点的 Z 序（调整引擎节点的渲染顺序）。 */
    void syncNativeChildrenZOrder();
    void syncOverlayLayout() { applyPivotOffset(); }

    // ===== 命中测试 =====

    /** 在指定世界坐标点进行命中测试。
     * @return 命中的最顶层 GObject，nullptr 表示未命中。
     */
    virtual GObject* hitTest(const Vector2& worldPoint, const Camera2D* camera) override;
    /** 获取吸附位置（用于 ScrollPane 的 snap 功能）。 */
    virtual Vector2 getSnappingPosition(const Vector2& pt);

    //internal use
    void childSortingOrderChanged(GObject* child, int oldValue, int newValue);
    void childStateChanged(GObject* child);
    void adjustRadioGroupDepth(GObject* obj, GController* c);

    /** 查找指定对象所在的窗口。 */
    static GWindow* findWindowOf(const GObject* obj);
    /** 查找弹出窗口的挂载范围。 */
    static GComponent* findPopupMountScope(GObject* obj);

    /** 获取覆盖层容器（Window 覆写）。 */
    virtual FUIInnerContainer* getOverlayContainer() const { return nullptr; }
    /** 获取内容容器。 */
    FUIInnerContainer* getContentContainer() const { return _container; }
    /** 获取子对象的显示容器。 */
    virtual FUIInnerContainer* getDisplayContainerFor(GObject* child) const;

    /** 从 UI 包资源构建对象。 */
    virtual void constructFromResource() override;
    /** 从对象池构建对象。
     * @param objectPool 对象池。
     * @param poolIndex 池中的索引。
     */
    void constructFromResource(std::vector<GObject*>* objectPool, int poolIndex);

    bool _buildingDisplayList;  ///< 内部标记：是否正在构建显示列表。

protected:
    /** 从二进制数据构建扩展属性（虚函数，子类可覆写）。 */
    virtual void constructExtension(ByteBuffer* buffer);
    /** 构建完成后回调（C++ vtable 分发，GButton/GSlider 等覆写此方法）。 */
    virtual void onConstruct();
    /** 构建完成后回调（GDScript/C# 可覆写此虚方法，在 XML 构建完成后被调用，可安全访问子节点）。 */
    GDVIRTUAL0(_on_construct);
    /** 显示节点进入 SceneTree 后回调。父级整体加入节点树时也会触发。 */
    GDVIRTUAL0(_on_added);
    /** 显示节点离开 SceneTree 时回调。父级整体移出节点树时也会触发。 */
    GDVIRTUAL0(_on_removed);
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void handleInit() override;
    virtual void handleSizeChanged() override;
    virtual void applyPivotOffset() override;
    virtual void handleGrayedChanged() override;
    virtual void handleControllerChanged(GController* c) override;

    virtual void _enter_tree() override;
    virtual void _exit_tree() override;

    /** 更新组件边界（递归计算内容范围）。 */
    virtual void updateBounds();
    /** 直接设置边界。 */
    void setBounds(float ax, float ay, float aw, float ah);

    /** 设置溢出处理模式。 */
    void setupOverflow(OverflowType overflow);
    /** 从二进制数据加载滚动面板设置。 */
    void setupScroll(ByteBuffer* buffer);
    /** 更新溢出裁剪矩形。 */
    void updateOverflowClipRect();
    /** 刷新子对象的 Z 序排列。 */
    void refreshDisplayChildrenZOrder();

    // ===== 子对象集合 =====

    std::vector<Ref<GObject>> _children;          ///< 所有子对象。
    std::vector<Ref<GController>> _controllers;    ///< 所有控制器。
    std::vector<Ref<Transition>> _transitions;     ///< 所有过渡动画。
    FUIInnerContainer* _container;                 ///< 内容容器节点。
    FUIClipContainer* _overflowClipContainer;      ///< 溢出裁剪容器。
    Ref<ScrollPane> _scrollPane;                   ///< 滚动面板。
    Margin _margin;                                ///< 边距。
    Vector2 _alignOffset;                          ///< 对齐偏移量。
    ChildrenRenderOrder _childrenRenderOrder;      ///< 子对象渲染顺序模式。
    int _apexIndex;                                ///< 顶点索引（Archimedes 模式分割线）。
    bool _boundsChanged;                           ///< 边界是否需要重新计算。
    bool _trackBounds;                             ///< 是否跟踪边界变化。
    GObject* _maskOwner;                           ///< 遮罩的所有者。
    IHitTest* _hitArea;                            ///< 自定义命中测试区域。

private:
    int getDisplaySiblingIndex(GObject* child) const;
    int getDisplaySiblingIndexDescent(GObject* child) const;
    int getInsertPosForSortingChild(GObject* target);
    int moveChild(GObject* child, int oldIndex, int index);
    void ensure_display_child_added(FUIInnerContainer* container, GObject* child);

    CALL_LATER_FUNC(GComponent, doUpdateBounds);
    CALL_LATER_FUNC(GComponent, buildNativeDisplayList);

    bool _opaque;                 ///< 是否不透明（参与自身命中测试）。
    int _sortingChildCount;       ///< 有自定义排序的子对象数量。
    GController* _applyingController; ///< 当前正在应用的控制器。

    friend class ScrollPane;
};

NS_FGUI_END

#endif
