#ifndef __GTWEEN_H__
#define __GTWEEN_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "GTweener.h"
#include "EaseType.h"
#include "TweenValue.h"
#include "TweenPropType.h"

NS_FGUI_BEGIN

/// @brief 缓动动画工具类（静态方法）。
/// 提供创建各种缓动动画的工厂方法，包括线性插值、矢量插值、颜色插值等。
/// 同时提供查询和终止缓动动画的管理功能。
///
/// 使用示例：
/// @code
/// // 创建一个 1 秒的从 0 到 100 的渐变
/// GTween::to(0, 100, 1.0f)->setTarget(obj, TweenPropType::Width);
/// @endcode
class GTween
{
public:
    /** 创建浮点数值缓动动画。
     * @param startValue 起始值。
     * @param endValue 结束值。
     * @param duration 持续时间（秒）。
     * @return GTweener 实例。
     */
    static GTweener* to(float startValue, float endValue, float duration);
    /** 创建二维向量缓动动画。 */
    static GTweener* to(const Vector2& startValue, const Vector2& endValue, float duration);
    /** 创建三维向量缓动动画。 */
    static GTweener* to(const Vector3& startValue, const Vector3& endValue, float duration);
    /** 创建四维向量缓动动画。 */
    static GTweener* to(const Vector4& startValue, const Vector4& endValue, float duration);
    /** 创建颜色缓动动画。 */
    static GTweener* to(const Color& startValue, const Color& endValue, float duration);
    /** 创建双精度浮点缓动动画。 */
    static GTweener* toDouble(double startValue, double endValue, float duration);
    /** 创建延迟调用（计时器）。
     * @param delay 延迟时间（秒）。
     * @return GTweener 实例（完成时触发回调）。
     */
    static GTweener* delayedCall(float delay);
    /** 创建抖动动画。
     * @param startValue 起始值。
     * @param amplitude 抖动幅度。
     * @param duration 持续时间。
     */
    static GTweener* shake(const Vector2& startValue, float amplitude, float duration);

    /** 检查指定对象是否正在进行缓动动画。 */
    static bool isTweening(RefCounted* target);
    /** 检查指定对象的指定属性是否正在进行缓动动画。 */
    static bool isTweening(RefCounted* target, TweenPropType propType);
    /** 终止指定对象的所有缓动动画。
     * @param complete 是否先完成动画（跳到结束值）。
     */
    static void kill(void* target, bool complete = false);
    static void kill(RefCounted* target);
    static void kill(RefCounted* target, bool complete);
    /** 终止指定对象指定属性的缓动动画。 */
    static void kill(RefCounted* target, TweenPropType propType, bool complete);
    /** 获取指定对象的活跃缓动器。 */
    static GTweener* getTween(RefCounted* target);
    /** 获取指定对象指定属性的活跃缓动器。 */
    static GTweener* getTween(RefCounted* target, TweenPropType propType);
    /** 清理所有缓动资源。 */
    static void clean();
    /** 终止所有缓动动画。
     * @param completed 是否先完成动画。
     */
    static void killAll(bool completed = false);
};

NS_FGUI_END

#endif
