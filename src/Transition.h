#ifndef __TRANSITION_H__
#define __TRANSITION_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

#include "GuiObjectFwd.h"
class GComponent;
class TransitionItem;
class GTweener;
class ByteBuffer;

/// @brief 过渡动画，用于播放 FairyGUI 编辑器中制作的动画。
///
/// Transition 管理一组动画项目（TransitionItem），每个项目可控制
/// 属性动画（位置、大小、颜色、透明度、旋转等）、声音播放等。
///
/// 主要功能：
/// - play() 播放 / playReverse() 反向播放
/// - 支持循环次数、延迟、时间范围控制
/// - 支持 hook 回调，在特定标签处执行自定义代码
/// - 支持 setValue() 动态设置过渡中的属性值
/// - 支持 setTarget() 更改动画目标对象
/// - 支持 setDuration() 修改某段动画的持续时间
/// - 时间缩放 (timeScale)
class Transition : public RefCounted
{
    GDCLASS(Transition, RefCounted)
public:
    /// @brief 播放完成回调类型
    typedef std::function<void()> PlayCompleteCallback;

    /// @brief 钩子回调类型（在指定标签处触发）
    typedef std::function<void()> TransitionHook;

    Transition();
    explicit Transition(GComponent* owner);
    virtual ~Transition();

    /// @brief 获取过渡动画所属的组件
    GComponent* getOwner() const { return _fguiOwner; }
    Ref<GComponent> gd_getOwner() const;

    /// @brief 是否正在播放
    bool isPlaying() const { return _playing; }

    static void _bind_methods();

    // ---- GDScript 绑定播放方法 ----
    void gd_play(int times, float delay, const Callable& callback);
    void gd_stop();

    // ---- 播放控制 ----

    /// @brief 播放过渡动画（默认1次，无延迟）
    /// @param callback 播放完成回调
    void play(PlayCompleteCallback callback = nullptr);

    /// @brief 播放过渡动画
    /// @param times 播放次数（-1 表示无限循环）
    /// @param delay 延迟时间（秒）
    /// @param callback 播放完成回调
    void play(int times, float delay, PlayCompleteCallback callback = nullptr);

    /// @brief 播放过渡动画（指定时间范围）
    /// @param times 播放次数
    /// @param delay 延迟时间
    /// @param startTime 开始时间点（秒）
    /// @param endTime 结束时间点（秒）
    /// @param callback 播放完成回调
    void play(int times, float delay, float startTime, float endTime, PlayCompleteCallback callback = nullptr);

    /// @brief 反向播放过渡动画
    void playReverse(PlayCompleteCallback callback = nullptr);

    /// @brief 反向播放过渡动画（指定次数和延迟）
    void playReverse(int times, float delay, PlayCompleteCallback callback = nullptr);

    /// @brief 修改当前播放次数
    /// @param value 新的播放次数
    void changePlayTimes(int value);

    /// @brief 停止播放
    void stop();

    /// @brief 停止播放
    /// @param setToComplete 是否直接设置到最终状态
    /// @param processCallback 是否触发完成回调
    void stop(bool setToComplete, bool processCallback);

    /// @brief 设置自动播放参数
    /// @param autoPlay 是否自动播放
    /// @param times 播放次数
    /// @param delay 延迟时间
    void setAutoPlay(bool autoPlay, int times, float delay);

    /// @brief 暂停/恢复播放
    /// @param paused 是否暂停
    void setPaused(bool paused);

    // ---- 动画控制 ----

    /// @brief 设置过渡中某标签的属性值
    /// @param label 标签名
    /// @param values 属性值数组
    void setValue(const std::string& label, const Array& values);

    /// @brief 设置在标签处执行的钩子回调
    /// @param label 标签名
    /// @param callback 回调函数
    void setHook(const std::string& label, TransitionHook callback);

    /// @brief 清除所有钩子
    void clearHooks();

    /// @brief 更改某标签的动画目标
    /// @param label 标签名
    /// @param newTarget 新目标对象
    void setTarget(const std::string& label, GObject* newTarget);

    /// @brief 设置某标签动画的持续时间
    /// @param label 标签名
    /// @param value 持续时间（秒）
    void setDuration(const std::string& label, float value);

    /// @brief 获取指定标签的时间点
    /// @param label 标签名
    /// @return 标签时间点（秒）
    float getLabelTime(const std::string& label) const;

    /// @brief 获取时间缩放因子
    float getTimeScale() const { return _timeScale; }

    /// @brief 设置时间缩放因子（>1 加速，<1 减速）
    /// @param value 缩放值
    void setTimeScale(float value);

    // ---- 关系更新 ----

    /// @brief 通知过渡中指定目标的关联对象位置变化
    /// @param targetId 目标 ID
    /// @param dx X 偏移量
    /// @param dy Y 偏移量
    void updateFromRelations(const std::string& targetId, float dx, float dy);

    /// @brief 所有者被添加到舞台
    void onOwnerAddedToStage();

    /// @brief 所有者被移出舞台
    void onOwnerRemovedFromStage();

    /// @brief 从二进制数据构建过渡
    /// @param buffer 二进制数据
    void setup(ByteBuffer* buffer);

    /// @brief 过渡名称
    std::string name;

    /// @brief GDScript 可访问的 name getter/setter
    String gd_getName() const;
    void gd_setName(const String& value);

private:
    void play(int times, float delay, float startTime, float endTime, PlayCompleteCallback onComplete, bool reverse);
    void stopItem(TransitionItem* item, bool setToComplete);
    void onDelayedPlay();
    void internalPlay();
    void playItem(TransitionItem* item);
    void skipAnimations();
    void onDelayedPlayItem(GTweener* tweener);
    void onTweenStart(GTweener* tweener);
    void onTweenUpdate(GTweener* tweener);
    void onTweenComplete(GTweener* tweener);
    void onPlayTransCompleted(TransitionItem* item);
    void callHook(TransitionItem* item, bool tweenEnd);
    void checkAllComplete();
    void applyValue(TransitionItem* item);
    void decodeValue(TransitionItem* item, ByteBuffer* buffer, void* value);

    /// @brief 所属组件
    GComponent* _fguiOwner;

    /// @brief 动画项目列表
    std::vector<TransitionItem*> _items;

    /// @brief 总播放次数
    int _totalTimes;

    /// @brief 总任务数
    int _totalTasks;

    /// @brief 是否正在播放
    bool _playing;

    /// @brief 是否已暂停
    bool _paused;

    /// @brief 所有者基准 X 坐标
    float _ownerBaseX;

    /// @brief 所有者基准 Y 坐标
    float _ownerBaseY;

    /// @brief 播放完成回调
    PlayCompleteCallback _onComplete;

    /// @brief 选项标志
    int _options;

    /// @brief 是否反向播放
    bool _reversed;

    /// @brief 总持续时间
    float _totalDuration;

    /// @brief 是否自动播放
    bool _autoPlay;

    /// @brief 自动播放次数
    int _autoPlayTimes;

    /// @brief 自动播放延迟
    float _autoPlayDelay;

    /// @brief 时间缩放
    float _timeScale;

    /// @brief 开始时间
    float _startTime;

    /// @brief 结束时间
    float _endTime;
};

NS_FGUI_END

#endif
