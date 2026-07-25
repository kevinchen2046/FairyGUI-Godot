#ifndef __GROOT_H__
#define __GROOT_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"
#include "GGraph.h"
#include "Window.h"
#include "godot_types.h"
#include "event/InputProcessor.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/audio_stream_player.hpp>
#include <godot_cpp/classes/canvas_layer.hpp>
#else
#include "scene/main/canvas_layer.h"
#include "scene/audio/audio_stream_player.h"
#endif

NS_FGUI_BEGIN

class WeakPtr;

/// @brief FairyGUI 的根节点，所有 UI 对象的最顶层父级。
/// 每个场景中只有一个 GRoot 实例，可通过 getInstance() 获取。
/// GRoot 负责窗口管理、弹出窗口、提示框、声音播放、内容缩放等功能。
class GRoot : public GComponent
{
    GDCLASS(GRoot, GComponent)

public:
    GRoot();
    virtual ~GRoot();

    /// @brief 创建并添加 GRoot 到场景中
    /// @param parent 父节点
    /// @param zOrder CanvasLayer 的 Z 序
    static GRoot* create(Node* parent, int zOrder = 1000);

    /// @brief 延迟创建 GRoot（在下一帧加入场景树）
    /// @param parent 父节点
    /// @param zOrder CanvasLayer 的 Z 序
    static GRoot* createDeferred(Node* parent, int zOrder = 1000);

    /// @brief 获取全局唯一 GRoot 实例
    static GRoot* getInstance() { return _inst; }

    // --- GDScript 绑定方法 ---
    static Ref<GRoot> gd_create(Node* parent, int zOrder = 1000) { return Ref<GRoot>(create(parent, zOrder)); }
    static Ref<GRoot> gd_createDeferred(Node* parent, int zOrder = 1000) { return Ref<GRoot>(createDeferred(parent, zOrder)); }
    static Ref<GRoot> gd_getInstance() { return Ref<GRoot>(_inst); }

    /// @brief 清理全局实例
    static void cleanup();

    static void _bind_methods();

    // ---- 窗口管理 ----

    /// @brief 显示窗口
    void showWindow(GWindow* win);

    /// @brief 隐藏窗口
    void hideWindow(GWindow* win);

    /// @brief 立即隐藏窗口（跳过关闭动画）
    void hideWindowImmediately(GWindow* win);

    /// @brief 将窗口置顶
    void bringToFront(GWindow* win);

    /// @brief 显示全局模态等待
    void showModalWait();

    /// @brief 关闭全局模态等待
    void closeModalWait();

    /// @brief 关闭所有非模态窗口
    void closeAllExceptModals();

    /// @brief 关闭所有窗口
    void closeAllWindows();

    /// @brief 获取最顶层的窗口
    GWindow* getTopWindow();

    /// @brief 获取模态等待面板
    GObject* getModalWaitingPane();

    /// @brief 获取模态遮罩层
    GGraph* getModalLayer();

    /// @brief 是否有模态窗口
    bool hasModalWindow();

    /// @brief 是否处于模态等待状态
    bool isModalWaiting();

    // ---- GDScript 包装方法 (Window) ----
    void gd_showWindow(GWindow* win) { showWindow(win); }
    void gd_hideWindow(GWindow* win) { hideWindow(win); }
    void gd_hideWindowImmediately(GWindow* win) { hideWindowImmediately(win); }
    void gd_bringToFront(GWindow* win) { bringToFront(win); }
    Ref<GWindow> gd_getTopWindow() { return Ref<GWindow>(getTopWindow()); }
    void gd_closeAllWindows() { closeAllWindows(); }
    bool gd_hasModalWindow() { return hasModalWindow(); }
    void gd_hidePopup() { hidePopup(); }
    Ref<GObject> gd_getModalWaitingPane() { return Ref<GObject>(getModalWaitingPane()); }
    Ref<GObject> gd_getTouchTarget() { return Ref<GObject>(getTouchTarget()); }
    Ref<GGraph> gd_getModalLayer() { return Ref<GGraph>(getModalLayer()); }
    Vector2 gd_getTouchPosition() { return getTouchPosition(0); }
    void gd_showTooltipsWin(GObject* tooltipWin) { showTooltipsWin(tooltipWin); }
    void gd_showPopup(GObject* popup, GObject* target, int dir) { showPopup(popup, target, (PopupDirection)dir); }
    void gd_showPopupSimple(GObject* popup) { showPopup(popup, nullptr, PopupDirection::AUTO); }

    // ---- 输入处理 ----

    /// @brief 获取输入处理器
    InputProcessor* getInputProcessor() const { return _inputProcessor; }

    /// @brief 获取指定触摸点的位置
    /// @param touchId 触摸点索引
    Vector2 getTouchPosition(int touchId);

    /// @brief 获取当前触摸命中的目标
    GObject* getTouchTarget();

    // ---- 坐标转换 ----

    /// @brief 世界坐标转为根节点坐标
    Vector2 worldToRoot(const Vector2& pt);

    /// @brief 根节点坐标转为世界坐标
    Vector2 rootToWorld(const Vector2& pt);

    // ---- 弹出面板 ----

    /// @brief 显示弹出面板
    void showPopup(GObject* popup);

    /// @brief 显示弹出面板并指定目标与方向
    /// @param popup 弹出面板对象
    /// @param target 目标对象
    /// @param dir 弹出方向
    void showPopup(GObject* popup, GObject* target, PopupDirection dir);

    /// @brief 切换弹出面板的显示/隐藏
    void togglePopup(GObject* popup);

    /// @brief 切换弹出面板的显示/隐藏（指定目标与方向）
    void togglePopup(GObject* popup, GObject* target, PopupDirection dir);

    /// @brief 隐藏所有弹出面板
    void hidePopup();

    /// @brief 隐藏指定弹出面板
    void hidePopup(GObject* popup);

    /// @brief 是否有弹出面板显示
    bool hasAnyPopup();

    /// @brief 计算弹出面板应出现的位置
    /// @param popup 弹出面板
    /// @param target 目标对象
    /// @param dir 弹出方向
    /// @param scope 作用域（可选，用于坐标转换）
    Vector2 getPoupPosition(GObject* popup, GObject* target, PopupDirection dir, GComponent* scope = nullptr);

    /// @brief 指定弹出面板是否刚被关闭
    bool wasPopupJustClosed(GObject* popup) const;

    // ---- 提示信息 ----

    /// @brief 显示文本提示（Tooltips）
    /// @param msg 提示文本
    void showTooltips(const std::string& msg);

    /// @brief GDScript 绑定：显示文本提示
    void gd_showTooltips(const String& msg);

    /// @brief 显示自定义提示窗口
    /// @param tooltipWin 自定义提示窗口对象
    void showTooltipsWin(GObject* tooltipWin);

    /// @brief 隐藏提示信息
    void hideTooltips();

    // ---- 声音播放 ----

    /// @brief 播放声音
    /// @param url 声音资源路径
    /// @param volumeScale 音量缩放
    void playSound(const std::string& url, float volumeScale = 1);

    /// @brief GDScript 绑定：播放声音
    void gd_playSound(const String& url, float volumeScale = 1.0f);

    /// @brief 声音是否启用
    bool isSoundEnabled() const { return _soundEnabled; }

    /// @brief 设置声音是否启用
    void setSoundEnabled(bool value);

    /// @brief 获取全局声音音量
    float getSoundVolumeScale() const { return _soundVolumeScale; }

    /// @brief 设置全局声音音量
    void setSoundVolumeScale(float value);

    // ---- 内容缩放 ----

    /// @brief 当前内容缩放级别（静态变量）
    static int contentScaleLevel;

    /// @brief 设置内容缩放因子
    /// @param designWidth 设计分辨率宽度
    /// @param designHeight 设计分辨率高度
    /// @param matchMode 屏幕适配模式
    void setContentScaleFactor(int designWidth, int designHeight, int matchMode);

    /// @brief 获取设计分辨率
    const Vector2& getDesignResolution() const { return _designResolution; }

    /// @brief 获取屏幕适配模式
    ScreenMatchMode getScreenMatchMode() const { return _screenMatchMode; }

    /// @brief 窗口尺寸变化回调
    void onWindowSizeChanged();

    /// @brief 获取显示对象节点
    Node* getDisplayObject() const { return _displayObject; }

    /// @brief 获取覆盖层容器
    virtual FUIInnerContainer* getOverlayContainer() const override;

    /// @brief 点碰撞检测
    virtual GObject* hitTest(const Vector2& worldPoint, const Camera2D* camera) override;

protected:
    virtual void handlePositionChanged() override;
    virtual void handleSizeChanged() override;
    virtual void handleInit() override;
    virtual void applyPivotOffset() override;
    virtual void handleVisibleChanged() override;
    virtual void _enter_tree() override;
    virtual void _exit_tree() override;

private:
    /// @brief 同步 CanvasLayer 的 Transform
    void syncCanvasLayerTransform();
    bool initWithParent(Node* parent, int zOrder);
    void onInitWithParent(Node* parent, int zOrder, bool deferAdd = false);
    void createModalLayer();
    void adjustModalLayer();
    void bringPopupToFront(GObject* popup);
    void closePopup(GObject* target);
    void checkPopups();
    void onTouchEvent(int eventType);
    void updateContentScaleLevel();
    void applyContentScale();
    Node* gd_getDisplayObject();

    CALL_LATER_FUNC(GRoot, doShowTooltipsWin);

    InputProcessor* _inputProcessor;

    /// @brief 模态遮罩层
    GGraph* _modalLayer;
    Ref<GGraph> _modalLayerRef;

    /// @brief 模态等待面板
    Ref<GObject> _modalWaitPane;

    /// @brief 弹出面板栈
    std::vector<WeakPtr> _popupStack;

    /// @brief 刚关闭的弹出面板
    std::vector<WeakPtr> _justClosedPopups;

    /// @brief 当前提示窗口
    GObject* _tooltipWin;

    /// @brief 默认提示窗口
    GObject* _defaultTooltipWin;

    /// @brief 全局声音是否启用（静态）
    static bool _soundEnabled;

    /// @brief 全局声音音量（静态）
    static float _soundVolumeScale;

    /// @brief 声音播放器池大小
    static constexpr int SOUND_POOL_MAX = 8;

    /// @brief 声音播放器池
    AudioStreamPlayer* _soundPlayers[SOUND_POOL_MAX];
    int _soundPlayerCount;
    int _soundPoolIndex;

    /// @brief 设计分辨率
    Vector2 _designResolution;

    /// @brief 屏幕适配模式
    ScreenMatchMode _screenMatchMode;

    /// @brief 是否已设置设计分辨率
    bool _hasDesignResolution;

    /// @brief 是否已连接视口尺寸信号
    bool _viewportSizeConnected;

    /// @brief 全局唯一 GRoot 实例（静态）
    static GRoot* _inst;

    /// @brief 内容层 CanvasLayer Z 序
    static const int kGRootContentCanvasLayer = 0;

    /// @brief 覆盖层 CanvasLayer Z 序
    static const int kGRootOverlayCanvasLayer = 100;

    ::CanvasLayer* _contentCanvasLayer;
    ::CanvasLayer* _overlayCanvasLayer;
    FUIInnerContainer* _overlayContainer;
};

NS_FGUI_END

#endif
