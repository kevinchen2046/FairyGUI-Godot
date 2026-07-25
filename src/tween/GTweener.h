#ifndef __GTWEENER_H__
#define __GTWEENER_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "EaseType.h"
#include "TweenValue.h"
#include "TweenPropType.h"

NS_FGUI_BEGIN

class GPath;

/// @brief 缓动动画实例。
/// 通过 GTween 工厂方法创建，提供链式调用设置延迟、时长、缓动类型、
/// 重复次数、回调函数等属性。
///
/// 使用示例：
/// @code
/// GTween::to(0, 100, 1.0f)
///     ->setDelay(0.5f)
///     ->setEase(EaseType::BackOut)
///     ->onComplete([]() { print("finish!"); })
///     ->setTarget(obj);
/// @endcode
class GTweener : public RefCounted
{
    GDCLASS(GTweener, RefCounted)
public:
    typedef std::function<void(GTweener* tweener)> GTweenCallback;
    typedef std::function<void()> GTweenCallback0;

    GTweener();
    ~GTweener();

    /** 设置延迟开始时间（秒）。 */
    GTweener* setDelay(float pValue);
    float getDelay() const { return _delay; }
    /** 设置动画持续时间（秒）。 */
    GTweener* setDuration(float pValue);
    float getDuration() const { return _duration; }
    /** 设置断点时间。 */
    GTweener* setBreakpoint(float pValue);
    /** 设置缓动类型。
     * @param pValue EaseType 枚举值，如 EaseType::QuadOut。
     */
    GTweener* setEase(EaseType pValue);
    /** 设置缓动周期参数（用于弹性、回弹等）。 */
    GTweener* setEasePeriod(float pValue);
    /** 设置缓动超调/振幅参数。 */
    GTweener* setEaseOvershootOrAmplitude(float pValue);
    /** 设置重复次数和是否往复（yoyo）。
     * @param repeat 重复次数（0 表示只播放一次）。
     * @param yoyo 是否来回播放。
     */
    GTweener* setRepeat(int repeat, bool yoyo = false);
    int getRepeat() const { return _repeat; }
    /** 设置时间缩放（加速/减速）。 */
    GTweener* setTimeScale(float pValue);
    /** 设置是否像素吸附（结果值对齐到整数）。 */
    GTweener* setSnapping(bool pValue);
    /** 设置任意目标（void* 格式）。 */
    GTweener* setTargetAny(void* pValue);
    /** 设置目标对象（仅关联引用）。 */
    GTweener* setTarget(RefCounted* target);
    /** 设置目标对象和属性类型（自动应用动画到目标属性）。
     * @param target 目标对象。
     * @param propType 动画属性类型（如 TweenPropType::X）。
     */
    GTweener* setTarget(RefCounted* target, TweenPropType propType);
    void* getTarget() const { return _target; }
    /** 设置用户自定义数据。 */
    GTweener* setGtUserData(const Variant& pValue);
    /** 设置运动路径（贝塞尔曲线）。 */
    GTweener* setPath(GPath* path);
    const Variant& getUserData() const { return _userData; }

    /** 设置每帧更新回调。 */
    GTweener* onUpdate(GTweenCallback callback);
    /** 设置动画开始回调。 */
    GTweener* onStart(GTweenCallback callback);
    /** 设置动画完成回调（无参数版本）。 */
    GTweener* onComplete(GTweenCallback0 callback);
    /** 设置动画完成回调（带参数版本）。 */
    GTweener* onComplete1(GTweenCallback callback);

    /** 获取当前归一化时间（0-1）。 */
    float getNormalizedTime() const { return _normalizedTime; }
    /** 是否已完成（含自然完成和被终止）。 */
    bool isCompleted() const { return _ended != 0; }
    /** 是否所有重复都已自然完成。 */
    bool allCompleted() const { return _ended == 1; }
    /** 是否已被终止。 */
    bool isKilled() const { return _killed; }
    /** 设置暂停状态。 */
    GTweener* setPaused(bool paused);
    /** 跳转到指定时间位置。 */
    void seek(float time);
    /** 终止动画（不触发完成回调）。
     * @param complete 是否先完成动画再终止。
     */
    void kill(bool complete = false);

    TweenValue startValue;   ///< 起始值。
    TweenValue endValue;     ///< 结束值。
    TweenValue value;        ///< 当前值。
    TweenValue deltaValue;   ///< 变化量（end-start）。

    static void _bind_methods();

    // GDScript bindings
    Ref<GTweener> gd_setDelay(float pValue);
    Ref<GTweener> gd_setDuration(float pValue);
    Ref<GTweener> gd_setRepeat(int repeat, bool yoyo);
    Ref<GTweener> gd_setTimeScale(float pValue);
    Ref<GTweener> gd_setSnapping(bool pValue);
    Ref<GTweener> gd_setPaused(bool paused);
    Ref<GTweener> gd_onUpdate(const Callable& callable);
    Ref<GTweener> gd_onStart(const Callable& callable);
    Ref<GTweener> gd_onComplete(const Callable& callable);
    Ref<GTweener> gd_setEase(int pValue);
    Ref<GTweener> gd_setTarget(Object* target, int prop_type);

private:
    GTweener* _to(float start, float end, float duration);
    GTweener* _to(const Vector2& start, const Vector2& end, float duration);
    GTweener* _to(const Vector3& start, const Vector3& end, float duration);
    GTweener* _to(const Vector4& start, const Vector4& end, float duration);
    GTweener* _to(const Color& start, const Color& end, float duration);
    GTweener* _to(double start, double end, float duration);
    GTweener* _shake(const Vector2& start, float amplitude, float duration);
    void _init();
    void _reset();
    void _update(float dt);
    void update();
    void callStartCallback();
    void callUpdateCallback();
    void callCompleteCallback();
    void clearScriptBindings();
    static void abandonVariant(Variant& pVariant);
    static void abandonCallable(Callable& callable, ObjectID& id);
    static void abandonCallback(GTweenCallback& callback);
    static void abandonCallback0(GTweenCallback0& callback);
    void callScriptOnStart(GTweener* tweener);
    void callScriptOnUpdate(GTweener* tweener);
    void callScriptOnComplete();

private:
    void clearRefTarget();

    void* _target;                           ///< 目标对象（void*）。
    Ref<RefCounted> _refTarget;              ///< 目标对象（Ref 引用）。
    ObjectID _refTargetId;                   ///< 目标对象 ID。
    TweenPropType _propType;                 ///< 动画属性类型。
    bool _killed;                            ///< 是否已终止。
    bool _paused;                            ///< 是否暂停。

    float _delay;                            ///< 延迟时间（秒）。
    float _duration;                         ///< 持续时间（秒）。
    float _breakpoint;                       ///< 断点时间。
    EaseType _easeType;                      ///< 缓动类型。
    float _easeOvershootOrAmplitude;         ///< 缓动超调/振幅。
    float _easePeriod;                       ///< 缓动周期。
    int _repeat;                             ///< 重复次数。
    bool _yoyo;                              ///< 是否来回播放。
    float _timeScale;                        ///< 时间缩放。
    bool _snapping;                          ///< 是否像素吸附。
    Variant _userData;                       ///< 用户数据。
    int _valueSize;                          ///< 值维度大小。
    GPath* _path;                            ///< 运动路径。

    GTweenCallback _onUpdate;                ///< 每帧回调。
    GTweenCallback _onStart;                 ///< 开始回调。
    GTweenCallback _onComplete;              ///< 完成回调（带参数）。
    GTweenCallback0 _onComplete0;            ///< 完成回调（无参数）。

    Callable _scriptOnStart;                 ///< GDScript 开始回调。
    Callable _scriptOnUpdate;                ///< GDScript 更新回调。
    Callable _scriptOnComplete;              ///< GDScript 完成回调。
    ObjectID _scriptOnStartId;
    ObjectID _scriptOnUpdateId;
    ObjectID _scriptOnCompleteId;

    bool _started;                           ///< 是否已开始。
    int _ended;                              ///< 结束状态（0=未结束, 1=正常结束, 2=被终止）。
    float _elapsedTime;                      ///< 已播放时间。
    float _normalizedTime;                   ///< 归一化时间（0-1）。

    friend class GTween;
    friend class TweenManager;
};

NS_FGUI_END

#endif
