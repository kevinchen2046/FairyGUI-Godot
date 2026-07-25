#ifndef __SCROLLPANE_H__
#define __SCROLLPANE_H__

#include "FairyGUIMacros.h"
#include "Margin.h"

NS_FGUI_BEGIN

#include "GuiObjectFwd.h"
class GComponent;
class GScrollBar;
class FUIContainer;
class FUIInnerContainer;
class FUIClipContainer;
class GController;
class EventContext;
class ByteBuffer;
class GTweener;

/// @brief 滚动面板，为组件提供滚动功能。
///
/// ScrollPane 是一个非可视的功能组件，通过 GComponent 关联。
/// 它管理滚动位置、惯性滚动、回弹效果、页面模式、虚拟循环等高级滚动行为。
///
/// 主要特性：
/// - 水平和垂直滚动
/// - 惯性滚动与减速率控制
/// - 回弹效果
/// - 页面模式（翻页效果）
/// - 吸附到项目（Snap To Item）
/// - 滚动条自动显示/隐藏
/// - 虚拟循环（Loop）
/// - 鼠标滚轮支持
/// - 滚动动画（Tween）
class ScrollPane : public RefCounted
{
    GDCLASS(ScrollPane, RefCounted)
public:
    ScrollPane();
    explicit ScrollPane(GComponent* owner);
    virtual ~ScrollPane();

    /// @brief 从二进制数据中设置滚动面板（用于 UI 反序列化）
    /// @param buffer 二进制数据
    void setup(ByteBuffer* buffer);

    /// @brief 获取滚动面板所属的组件
    GComponent* getOwner() const { return _fguiOwner; }

    /// @brief 获取头部组件
    GComponent* getHeader() const { return _header.ptr(); }

    /// @brief 获取底部组件
    GComponent* getFooter() const { return _footer.ptr(); }

    Ref<GComponent> gd_getHeader() const { return _header; }
    Ref<GComponent> gd_getFooter() const { return _footer; }

    /// @brief 获取垂直滚动条
    GScrollBar* getVtScrollBar() const { return _vtScrollBar.ptr(); }

    /// @brief 获取水平滚动条
    GScrollBar* getHzScrollBar() const { return _hzScrollBar.ptr(); }

    /// @brief 同步覆盖层 Z 序
    void syncOverlayZOrder();

    static void _bind_methods();

    // ---- GDScript 包装方法 ----
    float gd_getPosX() const { return getPosX(); }
    void gd_setPosX(float value, bool ani) { setPosX(value, ani); }
    float gd_getPosY() const { return getPosY(); }
    void gd_setPosY(float value, bool ani) { setPosY(value, ani); }
    void gd_scrollTop(bool ani) { scrollTop(ani); }
    void gd_scrollBottom(bool ani) { scrollBottom(ani); }
    bool gd_isBottomMost() const { return isBottomMost(); }

    // ---- 滚动行为属性 ----

    /// @brief 是否启用回弹效果（滚动超出边界后回弹）
    bool isBouncebackEffect() const { return _bouncebackEffect; }
    void setBouncebackEffect(bool value) { _bouncebackEffect = value; }

    /// @brief 是否启用触摸效果（触摸滚动时是否允许超出边界）
    bool isTouchEffect() const { return _touchEffect; }
    void setTouchEffect(bool value) { _touchEffect = value; }

    /// @brief 是否禁用惯性滚动
    bool isInertiaDisabled() const { return _inertiaDisabled; }
    void setInertiaDisabled(bool value) { _inertiaDisabled = value; }

    /// @brief 获取滚动步长（点击滚动条箭头时的滚动距离）
    float getScrollStep() const { return _scrollStep; }
    void setScrollStep(float value);

    /// @brief 是否启用吸附到项目（滚动停止时自动对齐到最近的项目）
    bool isSnapToItem() const { return _snapToItem; }
    void setSnapToItem(bool value) { _snapToItem = value; }

    /// @brief 是否启用页面模式（按页翻动）
    bool isPageMode() const { return _pageMode; }
    void setPageMode(bool value) { _pageMode = value; }

    /// @brief 获取页面控制器（与页面模式联动）
    GController* getPageController() const { return _pageController; }
    void setPageController(GController* value) { _pageController = value; }

    /// @brief 是否启用鼠标滚轮
    bool isMouseWheelEnabled() const { return _mouseWheelEnabled; }
    void setMouseWheelEnabled(bool value) { _mouseWheelEnabled = value; }

    /// @brief 获取减速率（值越小减速越快）
    float getDecelerationRate() const { return _decelerationRate; }
    void setDecelerationRate(float value) { _decelerationRate = value; }

    // ---- 滚动位置 ----

    /// @brief 获取水平滚动位置
    float getPosX() const { return _xPos; }

    /// @brief 设置水平滚动位置
    /// @param value 位置值
    /// @param ani 是否使用动画
    void setPosX(float value, bool ani = false);

    /// @brief 获取垂直滚动位置
    float getPosY() const { return _yPos; }

    /// @brief 设置垂直滚动位置
    /// @param value 位置值
    /// @param ani 是否使用动画
    void setPosY(float value, bool ani = false);

    /// @brief 获取水平滚动百分比 (0~1)
    float getPercX() const;

    /// @brief 设置水平滚动百分比
    /// @param value 百分比 (0~1)
    /// @param ani 是否使用动画
    void setPercX(float value, bool ani = false);

    /// @brief 获取垂直滚动百分比 (0~1)
    float getPercY() const;

    /// @brief 设置垂直滚动百分比
    /// @param value 百分比 (0~1)
    /// @param ani 是否使用动画
    void setPercY(float value, bool ani = false);

    /// @brief 是否已滚动到底部
    bool isBottomMost() const;

    /// @brief 是否已滚动到最右侧
    bool isRightMost() const;

    // ---- 滚动操作 ----

    /// @brief 向左滚动
    /// @param ratio 滚动比例（相对页面大小的倍数，默认1页）
    /// @param ani 是否使用动画
    void scrollLeft(float ratio = 1, bool ani = false);

    /// @brief 向右滚动
    void scrollRight(float ratio = 1, bool ani = false);

    /// @brief 向上滚动
    void scrollUp(float ratio = 1, bool ani = false);

    /// @brief 向下滚动
    void scrollDown(float ratio = 1, bool ani = false);

    /// @brief 滚动到顶部
    void scrollTop(bool ani = false);

    /// @brief 滚动到底部
    void scrollBottom(bool ani = false);

    /// @brief 滚动以显示指定对象
    /// @param obj 目标对象
    /// @param ani 是否使用动画
    /// @param setFirst 是否将该对象移动到可见区域的顶部（而非底部）
    void scrollToView(GObject* obj, bool ani = false, bool setFirst = false);

    /// @brief 滚动以显示指定矩形区域
    /// @param rect 目标矩形
    /// @param ani 是否使用动画
    /// @param setFirst 是否将矩形放在可见区域的顶部
    void scrollToView(const Rect2& rect, bool ani = false, bool setFirst = false);

    /// @brief 判断子对象是否在可见区域内
    bool isChildInView(GObject* obj) const;

    // ---- 页面索引 ----

    /// @brief 获取当前水平页面索引
    int getPageX() const;

    /// @brief 设置水平页面索引
    void setPageX(int value, bool ani = false);

    /// @brief 获取当前垂直页面索引
    int getPageY() const;

    /// @brief 设置垂直页面索引
    void setPageY(int value, bool ani = false);

    // ---- 滚动中的位置 ----

    /// @brief 获取水平方向滚动中的当前位置
    float getScrollingPosX() const;

    /// @brief 获取垂直方向滚动中的当前位置
    float getScrollingPosY() const;

    float gd_getScrollingPosX() const { return getScrollingPosX(); }
    float gd_getScrollingPosY() const { return getScrollingPosY(); }

    /// @brief 从容器同步滚动位置
    void syncScrollPosFromContainer();

    /// @brief 滚动条拖拽手柄是否正在被拖拽
    bool isBarGripDragging() const;

    /// @brief 获取内容区域大小
    const Vector2& getContentSize() const { return _contentSize; }

    /// @brief 获取可视区域大小
    const Vector2& getViewSize() const { return _viewSize; }

    // ---- 头部/底部锁定 ----

    /// @brief 锁定头部区域大小（头部不随滚动移动）
    /// @param size 锁定的高度
    void lockHeader(int size);

    /// @brief 锁定底部区域大小（底部不随滚动移动）
    /// @param size 锁定的高度
    void lockFooter(int size);

    // ---- 拖拽与动画 ----

    /// @brief 取消当前拖拽
    void cancelDragging();

    /// @brief 获取当前正在被拖拽的滚动面板（静态）
    static ScrollPane* getDraggingPane() { return _draggingPane; }

    /// @brief 更新所有滚动面板的缓动动画
    static void updateAllTweens(float dt);

private:
    void onOwnerSizeChanged();
    void adjustMaskContainer();
    void setContentSize(float wv, float hv);
    void changeContentSizeOnScrolling(float deltaWidth, float deltaHeight, float deltaPosX, float deltaPosY);
    void setViewWidth(float value);
    void setViewHeight(float value);
    void setSize(float wv, float hv);
    void handleSizeChanged();

    void handleControllerChanged(GController* c);
    void updatePageController();

    GObject* hitTest(const Vector2& pt, const Camera2D* camera);

    void posChanged(bool ani);
    CALL_LATER_FUNC(ScrollPane, refresh);
    void refresh2();

    void updateScrollBarDisplayPerc();
    void updateScrollBarPos();
    CALL_LATER_FUNC(ScrollPane, refreshScrollBars);
    void updateScrollBarVisible();
    void updateScrollBarVisible2(GScrollBar* bar);

    float getLoopPartSize(float division, int axis);
    bool loopCheckingCurrent();
    void loopCheckingTarget(Vector2& endPos);
    void loopCheckingTarget(Vector2& endPos, int axis);
    void loopCheckingNewPos(float& value, int axis);
    void alignPosition(Vector2& pos, bool inertialScrolling);
    float alignByPage(float pos, int axis, bool inertialScrolling);
    Vector2 updateTargetAndDuration(const Vector2& orignPos);
    float updateTargetAndDuration(float pos, int axis);
    void fixDuration(int axis, float oldChange);
    void startTween(int type);
    void killTween();
    void tweenUpdate(float dt);
    float runTween(int axis, float dt);

    void checkRefreshBar();

    void onTouchBegin(EventContext* context);
    void onTouchMove(EventContext* context);
    void onTouchEnd(EventContext* context);
    void onMouseWheel(EventContext* context);
    void onRollOver(EventContext* context);
    void onRollOut(EventContext* context);
    void onBarTweenComplete(GTweener* tweener);
    void onOwnerStageChanged(bool onStage);

    // ---- 属性 ----

    /// @brief 滚动类型（水平/垂直/两者）
    ScrollType _scrollType;

    /// @brief 滚动步长
    float _scrollStep;

    /// @brief 鼠标滚轮步长
    float _mouseWheelStep;

    /// @brief 滚动条边距
    Margin _scrollBarMargin;

    /// @brief 回弹效果
    bool _bouncebackEffect;

    /// @brief 触摸效果
    bool _touchEffect;

    /// @brief 滚动条自动显示
    bool _scrollBarDisplayAuto;

    /// @brief 无垂直滚动
    bool _vScrollNone;

    /// @brief 无水平滚动
    bool _hScrollNone;

    /// @brief 需要刷新
    bool _needRefresh;

    /// @brief 刷新时滚动条轴向
    int _refreshBarAxis;

    /// @brief 滚动条显示在左侧
    bool _displayOnLeft;

    /// @brief 吸附到项目
    bool _snapToItem;

    /// @brief 按需显示
    bool _displayInDemand;

    /// @brief 鼠标滚轮启用
    bool _mouseWheelEnabled;

    /// @brief 惯性禁用
    bool _inertiaDisabled;

    /// @brief 减速率
    float _decelerationRate;

    /// @brief 页面模式
    bool _pageMode;

    /// @brief 是否浮动
    bool _floating;

    /// @brief 不裁剪边距
    bool _dontClipMargin;

    float _xPos;
    float _yPos;

    Vector2 _viewSize;
    Vector2 _contentSize;
    Vector2 _overlapSize;
    Vector2 _pageSize;

    Vector2 _containerPos;
    Vector2 _beginTouchPos;
    Vector2 _lastTouchPos;
    Vector2 _lastTouchGlobalPos;
    Vector2 _velocity;
    float _velocityScale;
    clock_t _lastMoveTime;
    bool _dragged;
    bool _isHoldAreaDone;
    int _aniFlag;
    int _loop;
    bool _hover;

    bool _deferredCallsCancelled;

    int _headerLockedSize;
    int _footerLockedSize;

    /// @brief 是否正在缓动
    int _tweening;
    Vector2 _tweenStart;
    Vector2 _tweenChange;
    Vector2 _tweenTime;
    Vector2 _tweenDuration;

    GComponent* _fguiOwner;
    FUIClipContainer* _maskContainer;
    FUIInnerContainer* _container;
    Ref<GScrollBar> _hzScrollBar;
    Ref<GScrollBar> _vtScrollBar;
    Ref<GComponent> _header;
    Ref<GComponent> _footer;
    GController* _pageController;

    static int _gestureFlag;
    static ScrollPane* _draggingPane;

    friend class GComponent;
    friend class GList;
    friend class GScrollBar;
};

NS_FGUI_END

#endif
