#ifndef __GOBJECT_H__
#define __GOBJECT_H__

#include "Controller.h"
#include "FairyGUIMacros.h"
#include "Relations.h"
// cocos2d.h removed - see godot_types.h
#include "event/UIEventDispatcher.h"
#include "gears/GearBase.h"

NS_FGUI_BEGIN

#include "GuiObjectFwd.h"

class GComponent;
class GGroup;
class GTreeNode;
class ByteBuffer;
class GRoot;
class PackageItem;
class GTreeNode;
class GTweener;

/// @brief FairyGUI 所有 UI 对象的基类。
/// GuiObject（又名 GObject）提供坐标、尺寸、缩放、旋转、透明度、
/// 可见性、可触摸性等基础属性，以及关联系统(Gear)和拖曳功能。
class GuiObject : public UIEventDispatcher
{
    GDCLASS(GuiObject, UIEventDispatcher)

public:
    /** 获取当前正在被拖曳的对象。 */
    static GuiObject* getDraggingObject() { return _draggingObject; }

    GuiObject();
    virtual ~GuiObject();

    FAIRYGUI_CREATE(GuiObject)

    static void _bind_methods();

    // Native classes created through ClassDB (for example GComponent.new() in
    // GDScript) do not pass through FAIRYGUI_CREATE. Initialize their display
    // object after the complete derived instance has been constructed.
    void _notification(int p_what);

    // ===== 位置属性 =====

    /** 获取 X 坐标。 */
    float getX() const { return _position.x; };
    /** 设置 X 坐标。 */
    void setX(float value);
    /** 获取 Y 坐标。 */
    float getY() const { return _position.y; };
    /** 设置 Y 坐标。 */
    void setY(float value);
    /** 获取位置（相对于父组件的坐标）。 */
    const Vector2& getPosition() const { return _position; }
    /** 同时设置 X 和 Y 坐标。 */
    void setPosition(float xv, float yv);
    /** 获取组件左边缘的 X 坐标（含宽度）。 */
    float getXMin() const;
    /** 设置组件左边缘的 X 坐标（通过修改宽度保持右边缘不变）。 */
    void setXMin(float value);
    /** 获取组件上边缘的 Y 坐标（含高度）。 */
    float getYMin() const;
    /** 设置组件上边缘的 Y 坐标（通过修改高度保持下边缘不变）。 */
    void setYMin(float value);

    // ===== 像素对齐 =====

    /** 是否启用像素对齐（使对象位置对齐到整数像素）。 */
    bool isPixelSnapping() const { return _pixelSnapping; }
    /** 设置是否启用像素对齐。 */
    void setPixelSnapping(bool value);

    /** 延迟调用是否已被取消。 */
    bool isDeferredCallCancelled() const { return _deferredCallsCancelled; }

    // ===== 尺寸属性 =====

    /** 获取宽度。 */
    float getWidth() const { return _size.width; }
    /** 设置宽度。 */
    void setWidth(float value) { setSize(value, _rawSize.height); }
    /** 获取高度。 */
    float getHeight() const { return _size.height; }
    /** 设置高度。 */
    void setHeight(float value) { setSize(_rawSize.width, value); }
    /** 获取尺寸。 */
    const Vector2& getSize() const { return _size; }
    /** 设置尺寸。
     * @param ignorePivot 是否忽略轴心影响（默认否，尺寸变化会相对于轴心调整位置）。
     */
    void setSize(float wv, float hv, bool ignorePivot = false);

    /** 将对象居中于父组件。
     * @param restraint 是否根据关联关系约束。
     */
    void center(bool restraint = false);
    /** 将对象铺满父组件（全屏）。 */
    void makeFullScreen();

    // ===== 轴心属性 =====

    /** 获取轴心坐标（归一化值，默认为 (0,0) 即左上角）。 */
    const Vector2& getPivot() const { return _pivot; }
    /** 设置轴心坐标。
     * @param asAnchor 是否作为锚点使用（true 时轴心影响位置计算）。
     */
    void setPivot(float xv, float yv, bool asAnchor = false);
    /** 轴心是否作为锚点使用。 */
    bool isPivotAsAnchor() const { return _pivotAsAnchor; }
    void gd_setPivotAsAnchor(bool value) { setPivot(_pivot.x, _pivot.y, value); }

    // ===== 缩放属性 =====

    /** 获取 X 方向缩放。 */
    float getScaleX() const { return _scale.x; }
    void setScaleX(float value) { setScale(value, _scale.y); }
    /** 获取 Y 方向缩放。 */
    float getScaleY() const { return _scale.y; }
    void setScaleY(float value) { setScale(_scale.x, value); }
    /** 获取缩放。 */
    const Vector2& getScale() const { return _scale; }
    /** 设置缩放。 */
    void setScale(float xv, float yv);
    /** 对缩放执行缓动动画。
     * @param endValue 目标缩放值。
     * @param duration 动画时长（秒）。
     * @return GTweener 缓动对象。
     */
    GTweener* tweenScale(const Vector2& endValue, float duration);
    Ref<GTweener> gd_tweenScale(const Vector2& endValue, float duration);

    // ===== 倾斜属性 =====

    /** 获取 X 方向倾斜角度。 */
    float getSkewX() const { return _skewX; }
    void setSkewX(float value);
    /** 获取 Y 方向倾斜角度。 */
    float getSkewY() const { return _skewY; }
    void setSkewY(float value);

    // ===== 旋转属性 =====

    /** 获取旋转角度（度数）。 */
    float getRotation() const { return _rotation; }
    /** 设置旋转角度（度数）。 */
    void setRotation(float value);

    // ===== 透明度属性 =====

    /** 获取透明度（0-1，1 为完全不透明）。 */
    float getAlpha() const { return _alpha; }
    /** 设置透明度。 */
    void setAlpha(float value);

    // ===== 变灰属性 =====

    /** 是否处于灰色滤镜状态。 */
    bool isGrayed() const { return _grayed; }
    /** 设置是否变灰。 */
    void setGrayed(bool value);

    // ===== 可见性 =====

    /** 是否可见。 */
    bool isVisible() const { return _visible; }
    /** 设置是否可见。 */
    void setVisible(bool value);

    // ===== 可触摸性 =====

    /** 是否可触摸（可接收输入事件）。 */
    bool isTouchable() const { return _touchable; }
    /** 设置是否可触摸。 */
    void setTouchable(bool value);

    // ===== 启用状态 =====

    /** 是否启用。等价于未变灰且可触摸。 */
    bool isEnabled() const { return !_grayed && _touchable; }
    /** 设置启用状态。禁用时同时变灰并关闭触摸，启用时恢复二者。 */
    void setEnabled(bool value)
    {
        setGrayed(!value);
        setTouchable(value);
    }

    // ===== 渲染排序 =====

    /** 获取渲染层级（值越大渲染越靠前）。 */
    int getSortingOrder() const { return _sortingOrder; }
    /** 设置渲染层级。 */
    void setSortingOrder(int value);
    /** 强制弹出层/覆盖层使用绝对 Z 序。 */
    void applyAbsoluteOverlayZOrder(int baseZ);

    // ===== 高级组 =====

    /** 获取关联的高级组 (GGroup)。 */
    GGroup* getGroup() const { return _group; }
    Ref<GGroup> gd_getGroup() const;
    /** 设置关联的高级组。 */
    void setGroup(GGroup* value);

    // ===== 文本属性 =====

    /** 获取文本内容（虚函数，子类可覆写）。 */
    virtual const std::string& getText() const;
    /** 设置文本内容（虚函数，子类可覆写）。 */
    virtual void setText(const std::string& text);

    void gd_setText(const String& text);
    String gd_getText() const;
    void gd_setName(const String& v);
    String gd_getName() const;

    void gd_setTooltips(const String& value);
    String gd_getTooltips() const;

    // ===== 图标属性 =====

    /** 获取图标 URL（虚函数，子类可覆写）。 */
    virtual const std::string& getIcon() const;
    /** 设置图标 URL。 */
    virtual void setIcon(const std::string& text);

    // ===== 提示信息 (Tooltips) =====

    /** 获取鼠标悬停提示文本。 */
    const std::string& getTooltips() const { return _tooltips; }
    /** 设置鼠标悬停提示文本。 */
    void setTooltips(const std::string& value);

    // ===== 用户自定义数据 =====

    /** 获取用户自定义数据指针（C++ 使用）。 */
    void* getData() const { return _data; };
    void setData(void* value) { _data = value; }
    /** 获取用户自定义数据（GDScript/C# 使用，Variant 类型）。 */
    const Variant& getCustomData() const { return _customData; }
    void setCustomData(const Variant& value) { _customData = value; }

    // ===== 拖曳功能 =====

    /** 是否可拖曳。 */
    bool isDraggable() const { return _draggable; }
    /** 设置是否可拖曳。 */
    void setDraggable(bool value);
    /** 获取拖曳范围限制。 */
    Rect2* getDragBounds() const { return _dragBounds; }
    /** 设置拖曳范围限制。 */
    void setDragBounds(const Rect2& value);

    /** 开始拖曳。
     * @param touchId 触摸点 ID（-1 表示使用默认触摸点）。
     */
    void startDrag(int touchId = -1);
    /** 停止拖曳。 */
    void stopDrag();

    // ===== 资源 URL =====

    /** 获取对象在 UI 包中的资源 URL。格式：ui://包名/资源名 */
    std::string getResourceURL() const;
    String gd_getResourceURL() const;

    static String toGodotStr(const std::string& raw) { return String::utf8(raw.c_str(), (int)raw.size()); }
    static std::string toFairyStr(const String& str) { return str.utf8().get_data(); }

    /** 获取关联的 PackageItem（UI 包中的资源项）。 */
    PackageItem* getPackageItem() const { return _packageItem; }

    // ===== 坐标变换 =====

    /** 将局部坐标转换为全局坐标。 */
    Vector2 globalToLocal(const Vector2& pt);
    Rect2 globalToLocal(const Rect2& rect);
    /** 将全局坐标转换为局部坐标。 */
    Vector2 localToGlobal(const Vector2& pt);
    Rect2 localToGlobal(const Rect2& rect);
    /** 将局部点转换为画布坐标（绕过 GRoot 逻辑空间转换）。 */
    Vector2 localPointToCanvas(const Vector2& pt) const;
    /** 在 targetSpace 空间中变换矩形。
     * @param rect 源矩形。
     * @param targetSpace 目标空间对象（nullptr 表示全局空间）。
     */
    Rect2 transformRect(const Rect2& rect, GObject* targetSpace);

    Vector2 gd_localToGlobal(const Vector2& pt) { return localToGlobal(pt); }
    Vector2 gd_globalToLocal(const Vector2& pt) { return globalToLocal(pt); }

    // ===== 关联系统 (Relations) =====

    /** 获取关联关系管理器。 */
    Relations* relations() { return _relations; }
    /** 添加一个关联关系。
     * @param target 关联目标对象。
     * @param relationType 关联类型（对齐、尺寸跟随等）。
     * @param usePercent 是否使用百分比模式。
     */
    void addRelation(GObject* target, RelationType relationType, bool usePercent = false);
    /** 移除一个关联关系。 */
    void removeRelation(GObject* target, RelationType relationType);

    // ===== 控制器关联 (Gear) =====

    /** 获取指定索引的 Gear。
     * @param index Gear 索引（0=显示, 1=颜色, 2=大小, 3=外观, 4=文字, 5=图标, 6=XY, 7=动画, 8=字体大小）。
     */
    GearBase* getGear(int index);
    /** 检查指定 Gear 是否被指定控制器关联。 */
    bool checkGearController(int index, GController* c);
    /** 添加显示锁定（防止 Gear 更新显示状态）。
     * @return 解锁令牌。
     */
    uint32_t addDisplayLock();
    /** 释放显示锁定。
     * @param token addDisplayLock 返回的令牌。
     */
    void releaseDisplayLock(uint32_t token);

    // ===== 层级关系 =====

    /** 获取父组件。 */
    GComponent* getParent() const { return _parent; }
    /** 查找顶层的 GObject 父对象（可能穿透非 GObject 节点）。 */
    GObject* findParent() const;
    /** 获取引擎显示节点。 */
    Node* displayObject() const { return _displayObject; }
    /** 获取对应的 Godot 显示节点（GDScript/C#）。 */
    Node* gd_getDisplayObject() const { return _displayObject; }
    /** 获取根节点 (GRoot)。 */
    GRoot* getRoot() const;
    /** 是否已添加到舞台（显示列表）中。 */
    bool onStage() const;
    /** 从父组件中移除自己。 */
    void removeFromParent();

    // ===== 事件监听快捷方法 =====

    /** 添加点击事件监听器。 */
    void addClickListener(const EventCallback& callback) { addEventListener(UIEventType::Click, callback); }
    void addClickListener(const EventCallback& callback, const EventTag& tag) { addEventListener(UIEventType::Click, callback, tag); }
    /** 移除指定标签的点击事件监听器。 */
    void removeClickListener(const EventTag& tag) { removeEventListener(UIEventType::Click, tag); }

    // ===== 属性访问（用于 Gear 系统） =====

    /** 获取指定属性 ID 的值（虚函数，子类可覆写）。 */
    virtual Variant getProp(ObjectPropID propId);
    /** 设置指定属性 ID 的值（虚函数，子类可覆写）。 */
    virtual void setProp(ObjectPropID propId, const Variant& value);

    /** 从 UI 包资源数据构建对象。 */
    virtual void constructFromResource();
    /** 命中检测（在 worldPoint 处是否命中本对象）。
     * @return 命中的最顶层 GObject，nullptr 表示未命中。
     */
    virtual GObject* hitTest(const Vector2& worldPoint, const Camera2D* camera);

    /** 重新刷新变灰状态的视觉传播。 */
    void refreshGrayedVisual();

    /** 将对象转换为指定子类类型。
     * @tparam T 目标子类。
     */
    template <typename T>
    T* as();

    /** 获取关联的树节点（如果此对象在 GTree 中）。 */
    GTreeNode* treeNode() const { return _treeNode; }
    /** 逐级向上查找关联的树节点。 */
    GTreeNode* findTreeNode() const;

    // ===== 公开成员变量 =====

    std::string id;          ///< 对象 ID（在组件内唯一）。
    std::string name;        ///< 对象名称。
    Vector2 sourceSize;      ///< 源素材尺寸（来自 UI 包中的原始大小）。
    Vector2 initSize;        ///< 初始尺寸（UI 包中定义的尺寸）。
    Vector2 minSize;         ///< 最小尺寸限制。
    Vector2 maxSize;         ///< 最大尺寸限制。

    //internal use
    bool _underConstruct;    ///< 内部标记：是否正在构建中。
    bool _gearLocked;        ///< 内部标记：Gear 是否锁定（防止递归更新）。
    bool _alignToBL;         ///< 内部标记：是否使用左下对齐模式。

protected:
    GComponent* _parent;          ///< 父组件指针。
    Node* _displayObject;         ///< 引擎显示节点。
    PackageItem* _packageItem;    ///< UI 包资源项。
    int _sizeImplType;            ///< 尺寸实现类型。
    bool _touchDisabled;          ///< 是否禁用触摸。

    /** 初始化回调（在显示对象创建后调用）。 */
    virtual void handleInit();
    /** 尺寸变化回调。 */
    virtual void handleSizeChanged();
    /** 缩放变化回调。 */
    virtual void handleScaleChanged();
    /** 变灰状态变化回调。 */
    virtual void handleGrayedChanged();
    /** 位置变化回调。 */
    virtual void handlePositionChanged();
    /** 同步 Control 显示节点变换。 */
    void syncControlDisplay();
    /** 计算显示节点的位置（含缩放和锚点逻辑）。 */
    Vector2 computeDisplayPosition() const;
    /** 计算 Control 节点的位置（在父节点坐标系）。 */
    Vector2 computeControlPosition() const;
    /** 计算内容轴心偏移量。 */
    Vector2 computeContentPivotOffset() const;
    /** 计算显示缩放值（含内容缩放）。 */
    Vector2 computeDisplayScale() const;
    /** 将显示局部坐标转换为逻辑坐标。 */
    Vector2 displayLocalToLogical(const Vector2& displayLocal) const;
    /** 应用轴心偏移（虚函数，子类可覆写）。 */
    virtual void applyPivotOffset();
    /** 渲染排序变化回调（虚函数，子类可覆写）。 */
    virtual void handleSortingOrderChanged() {}
    /** 重建倾斜变换矩阵。 */
    void rebuildSkewedTransform();
    /** 控制器变化回调（虚函数，子类可覆写）。 */
    virtual void handleControllerChanged(GController* c);
    /** 透明度变化回调。 */
    virtual void handleAlphaChanged();
    /** 可见性变化回调。 */
    virtual void handleVisibleChanged();

    /// 进入场景树回调。
    virtual void _enter_tree();
    /// 退出场景树回调。
    virtual void _exit_tree();
    /// 添加到显示列表后调用。
    void onDisplayTreeEntered();
    /// 即将从显示列表移除前调用。
    void onDisplayTreeExiting();
    /// 就绪回调（在 _enter_tree 后、第一个 _process 前调用）。
    void _ready();
    /// 逐帧更新。
    virtual void _process(double delta);

    /** 从二进制数据加载前设置（虚函数，子类可覆写）。 */
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos);
    /** 从二进制数据加载后设置（虚函数，子类可覆写）。 */
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos);

    /** 销毁对象，释放资源。 */
    virtual void dispose();

    /** 添加引擎节点子节点。 */
    void addChild(Node* node);
    /** 移除引擎节点子节点。 */
    void removeChild(Node* node);
    /** 添加 GObject 子对象（虚函数，GComponent 可覆写）。
     * @return 添加的 GObject 指针（可能返回池中的对象）。
     */
    virtual GObject* addChild(const Ref<GObject>& child);
    /** 移除 GObject 子对象。 */
    virtual void removeChild(GObject* child);
    void gd_addChild(Object* node);
    void gd_removeChild(Object* node);

    // ===== GDScript 扩展方法 =====

    /** GDScript：添加点击事件监听。 */
    void gd_addClickListener(const Callable& callable);
    /** GDScript：移除点击事件监听。 */
    void gd_removeClickListener();
    void gd_setIcon(const String& icon);
    String gd_getIcon() const;
    void gd_setPosition(const Vector2& value);
    void gd_setSize(const Vector2& value);
    void gd_setScale(const Vector2& value);
    void gd_setPivotValue(const Vector2& value);
    void gd_setPivot(float xv, float yv, bool asAnchor);
    Vector2 gd_getPivot() const;
    Rect2 gd_transformRect(const Rect2& rect, GObject* target_space);
    void gd_setDragBounds(const Rect2& bounds);
    Ref<GObject> gd_getParent() const;
    Ref<GTreeNode> gd_getTreeNode() const;
    void gd_addRelation(Object* target, int relation_type, bool use_percent);
    void gd_removeRelation(Object* target, int relation_type);
    /** 检查对象是否具有指定属性。 */
    bool hasProperty(const StringName& property_name) const;

protected:
    /** 初始化对象（创建显示节点等）。 */
    bool init();

    /** 更新指定索引的 Gear。 */
    void updateGear(int index);
    /** 检查并应用 Gear 的显示/隐藏逻辑 (GearDisplay)。 */
    void checkGearDisplay();

    /** 直接设置尺寸（不触发 Gear 等副作用）。 */
    void setSizeDirectly(float wv, float hv);

    /** 计算内部可见性（用于 GearDisplay 判决）。 */
    bool internalVisible2() const;

    // ===== 内部状态变量 =====

    Vector2 _position;        ///< 位置坐标。
    Vector2 _size;            ///< 逻辑尺寸。
    Vector2 _rawSize;         ///< 原始尺寸（受 min/max 约束前的值）。
    Vector2 _pivot;           ///< 轴心（归一化值 0-1）。
    Vector2 _scale;           ///< 缩放。
    bool _pivotAsAnchor;      ///< 轴心是否作为锚点。
    float _alpha;             ///< 透明度（0-1）。
    float _rotation;          ///< 旋转角度（度数）。
    float _skewX;             ///< X 倾斜角度。
    float _skewY;             ///< Y 倾斜角度。
    bool _visible;            ///< 是否可见。
    bool _touchable;          ///< 是否可触摸。
    bool _grayed;             ///< 是否变灰。
    bool _finalGrayed;        ///< 最终变灰状态（含父级继承）。
    bool _deferredCallsCancelled;  ///< 延迟调用是否已取消。

private:
    bool internalVisible() const;
    bool internalVisible3() const;
    void updateGearFromRelations(int index, float dx, float dy);
    void transformRectPoint(const Vector2& pt, float rect[], GObject* targetSpace);

    void initDrag();
    void dragBegin(int touchId);
    void dragEnd();
    void onTouchBegin(EventContext* context);
    void onTouchMove(EventContext* context);
    void onTouchEnd(EventContext* context);
    void onRollOver(EventContext* context);
    void onRollOut(EventContext* context);

    bool _internalVisible;
    bool _handlingController;
    bool _draggable;
    int _sortingOrder;            ///< 渲染层级。
    bool _focusable;
    std::string _tooltips;        ///< 提示文本。
    bool _pixelSnapping;          ///< 是否像素对齐。
    GGroup* _group;               ///< 关联的高级组。
    float _sizePercentInGroup;    ///< 在组中的尺寸百分比。
    Relations* _relations;        ///< 关联关系管理器。
    GearBase* _gears[10];         ///< Gear 数组（索引对应 Gear 类型）。
    void* _data;                  ///< C++ 用户自定义数据。
    Variant _customData;          ///< GDScript/C# 用户自定义数据。
    Vector2 _dragTouchStartPos;
    Rect2* _dragBounds;
    bool _dragTesting;
    GTreeNode* _treeNode;         ///< 关联的树节点。

    uint64_t _uid;
    size_t _weakPtrRef;

    static GuiObject* _draggingObject;  ///< 当前正在拖曳的对象。

    friend class GComponent;
    friend class GGroup;
    friend class RelationItem;
    friend class UIObjectFactory;
    friend class WeakPtr;
    friend class UIPackage;
    friend class GTree;
};

template <typename T>
inline T* GuiObject::as()
{
    return dynamic_cast<T*>(this);
}

NS_FGUI_END

#endif
