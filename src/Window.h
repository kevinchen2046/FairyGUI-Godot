#ifndef __WINDOW_H__
#define __WINDOW_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"

#ifndef FGUI_GDEXTENSION
class CanvasLayer;
#endif

NS_FGUI_BEGIN

/// @brief UI 源接口，用于窗口的内容加载。
/// 实现此接口可实现自定义的窗口内容加载逻辑，
/// 例如从 URL、AssetBundle 等方式加载 UI。
class IUISource : public RefCounted
{
public:
    /// @brief 获取文件名/路径
    virtual const std::string& getFileName() = 0;

    /// @brief 设置文件名/路径
    virtual void setFileName(const std::string& value) = 0;

    /// @brief 是否已加载完成
    virtual bool isLoaded() = 0;

    /// @brief 开始加载，完成后调用回调
    /// @param callback 加载完成后的回调
    virtual void load(std::function<void()> callback) = 0;
};

/// @brief 窗口组件，是一个带有窗口行为（显示/隐藏/拖拽/模态）的 GComponent。
///
/// 窗口支持以下功能：
/// - show()/hide() 显示与隐藏，支持显示/隐藏动画
/// - 模态窗口 (setModal(true))，打开时可在窗口后方显示灰色遮罩
/// - 拖拽：由 dragArea 区域控制拖拽
/// - 关闭按钮：由 closeButton 控制
/// - 内容面板：contentPane 指定窗口主内容区域
/// - UI 源：通过 addUISource() 加载外部 UI 资源
///
/// 可在 GDScript 中覆写 onInit/onShown/onHide/doShowAnimation/doHideAnimation 等回调。
class GWindow : public GComponent
{
    GDCLASS(GWindow, GComponent)

public:
    GWindow();
    virtual ~GWindow();

    FAIRYGUI_CREATE(GWindow)
    static Ref<GWindow> gd_create();

    // ---- GDScript 绑定 getter ----
    Ref<GComponent> gd_getContentPane() const;
    Ref<GComponent> gd_getFrame() const;
    Ref<GObject> gd_getCloseButton() const;
    Ref<GObject> gd_getDragArea() const;
    Ref<GObject> gd_getContentArea() const;
    Ref<GObject> gd_getModalWaitingPane() const;

    static void _bind_methods();

    // ---- 窗口的基本操作 ----

    /// @brief 显示窗口。会调用 doShowAnimation() 执行显示动画。
    void show();

    /// @brief 隐藏窗口。会调用 doHideAnimation() 执行隐藏动画。
    void hide();

    /// @brief 立即隐藏窗口（跳过动画）。
    void hideImmediately();

    /// @brief 切换窗口的显示/隐藏状态。
    void toggleStatus();

    /// @brief 将窗口置顶到所有窗口的最上层。
    void bringToFront();

    /// @brief 窗口是否正在显示
    bool isShowing() const { return _parent != nullptr; }

    /// @brief 窗口是否在所有窗口的最顶层
    bool isTop() const;

    /// @brief 窗口是否为模态窗口
    bool isModal() const { return _modal; }

    /// @brief 设置窗口是否为模态
    void setModal(bool value) { _modal = value; }

    // ---- 模态等待 ----

    /// @brief 在窗口中显示模态等待效果
    void showModalWait() { showModalWait(0); }

    /// @brief 在窗口中显示模态等待效果（带请求标识）
    /// @param requestingCmd 请求命令标识，用于多个请求的匹配
    void showModalWait(int requestingCmd);

    /// @brief 关闭模态等待效果
    bool closeModalWait() { return closeModalWait(0); }

    /// @brief 关闭模态等待效果（带请求标识）
    /// @param requestingCmd 请求命令标识
    bool closeModalWait(int requestingCmd);

    void gd_showModalWait(int requestingCmd) { showModalWait(requestingCmd); }
    bool gd_closeModalWait(int requestingCmd) { return closeModalWait(requestingCmd); }

    // ---- 窗口初始化与 UI 加载 ----

    /// @brief 初始化窗口结构（加载 frame、contentPane 等内部组件）
    void initWindow();

    /// @brief 添加 UI 源代码（用于自定义窗口内容加载）
    /// @param uiSource UI 源对象
    void addUISource(IUISource* uiSource);

    // ---- 弹出层布局 ----

    /// @brief 获取弹出面板在窗口坐标中的目标矩形
    /// @param target 目标对象
    /// @param pos 输出：矩形位置
    /// @param size 输出：矩形大小
    bool getPopupTargetRect(GObject* target, Vector2& pos, Vector2& size) const;

    /// @brief 同步弹出层的布局
    void syncPopupMountLayout() { syncCanvasLayerTransform(); }

    // ---- 属性访问器 ----

    /// @brief 点击时是否自动将窗口置前
    bool isBringToFrontOnClick() { return _bringToFontOnClick; }

    /// @brief 设置点击时是否自动将窗口置前
    void setBringToFrontOnClick(bool value) { _bringToFontOnClick = value; }

    /// @brief 获取窗口的内容面板
    GComponent* getContentPane() const { return _contentPane; }

    /// @brief 设置窗口的内容面板
    void setContentPane(GComponent* value);

    /// @brief 获取窗口的框架组件
    GComponent* getFrame() const { return _frame; }

    /// @brief 获取窗口的关闭按钮
    GObject* getCloseButton() const { return _closeButton; }

    /// @brief 设置窗口的关闭按钮
    void setCloseButton(GObject* value);

    /// @brief 获取窗口的拖拽区域
    GObject* getDragArea() const { return _dragArea; }

    /// @brief 设置窗口的拖拽区域
    void setDragArea(GObject* value);

    /// @brief 获取窗口的内容区域
    GObject* getContentArea() const { return _contentArea; }

    /// @brief 设置窗口的内容区域
    void setContentArea(GObject* value) { _contentArea = value; }

    /// @brief 获取模态等待面板
    GObject* getModalWaitingPane() const { return _modalWaitPane.is_valid() ? _modalWaitPane.ptr() : nullptr; }

    // ---- GDScript 虚方法回调 (Callable) ----
    /// @brief 设置 onInit 回调（窗口初始化时调用）
    void setOnInitCallback(const Callable& cb) { _onInitCallback = cb; }
    Callable getOnInitCallback() const { return _onInitCallback; }

    /// @brief 设置 onShown 回调（窗口显示后调用）
    void setOnShownCallback(const Callable& cb) { _onShownCallback = cb; }
    Callable getOnShownCallback() const { return _onShownCallback; }

    /// @brief 设置 onHide 回调（窗口隐藏后调用）
    void setOnHideCallback(const Callable& cb) { _onHideCallback = cb; }
    Callable getOnHideCallback() const { return _onHideCallback; }

    /// @brief 设置 doShowAnimation 回调（自定义显示动画）
    void setDoShowAnimationCallback(const Callable& cb) { _doShowAnimationCallback = cb; }
    Callable getDoShowAnimationCallback() const { return _doShowAnimationCallback; }

    /// @brief 设置 doHideAnimation 回调（自定义隐藏动画）
    void setDoHideAnimationCallback(const Callable& cb) { _doHideAnimationCallback = cb; }
    Callable getDoHideAnimationCallback() const { return _doHideAnimationCallback; }

    virtual FUIInnerContainer* getOverlayContainer() const override;
    virtual FUIInnerContainer* getDisplayContainerFor(GObject* child) const override;
    virtual GObject* hitTest(const Vector2& worldPoint, const Camera2D* camera) override;

protected:
    virtual void handleInit() override;
    virtual void applyPivotOffset() override;
    virtual void handlePositionChanged() override;
    virtual void handleScaleChanged() override;
    virtual void handleSortingOrderChanged() override;
    virtual void handleVisibleChanged() override;

    /// @brief 窗口初始化时的虚方法，可供子类或 GDScript 覆写
    virtual void onInit() {};

    /// @brief 窗口显示后的虚方法，可供子类或 GDScript 覆写
    virtual void onShown() {};

    /// @brief 窗口隐藏后的虚方法，可供子类或 GDScript 覆写
    virtual void onHide() {};

    /// @brief 执行显示动画的虚方法，可供子类或 GDScript 覆写
    virtual void doShowAnimation();

    /// @brief 执行隐藏动画的虚方法，可供子类或 GDScript 覆写
    virtual void doHideAnimation();

    virtual void _enter_tree() override;
    virtual void _exit_tree() override;

    /// @brief 关闭按钮点击事件处理
    void closeEventHandler(EventContext* context);

    Ref<GComponent> _contentPaneRef;
    GComponent* _contentPane;

private:
    void layoutModalWaitPane();
    void onUILoadComplete();
    void _initWindow();
    void syncCanvasLayer();
    void syncCanvasLayerTransform();

    void onTouchBegin(EventContext* context);
    void onDragStart(EventContext* context);

    /// @brief 当前正在等待的请求命令标识
    int _requestingCmd;

    /// @brief 窗口框架组件
    GComponent* _frame;

    /// @brief 模态等待面板引用
    Ref<GObject> _modalWaitPane;

    /// @brief 关闭按钮
    GObject* _closeButton;

    /// @brief 拖拽区域
    GObject* _dragArea;

    /// @brief 内容区域
    GObject* _contentArea;

    /// @brief 是否为模态窗口
    bool _modal;

    /// @brief 点击时是否置前
    bool _bringToFontOnClick;

    /// @brief UI 源列表
    std::vector<IUISource*> _uiSources;

    /// @brief 是否已初始化
    bool _inited;

    /// @brief 是否正在加载
    bool _loading;

    // ---- GDScript 虚方法回调 (Callable) ----
    Callable _onInitCallback;
    Callable _onShownCallback;
    Callable _onHideCallback;
    Callable _doShowAnimationCallback;
    Callable _doHideAnimationCallback;

    ::CanvasLayer* _contentCanvasLayer;
    ::CanvasLayer* _overlayCanvasLayer;
    FUIInnerContainer* _overlayContainer;
};

NS_FGUI_END

#endif
