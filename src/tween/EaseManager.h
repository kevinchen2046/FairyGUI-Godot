#ifndef __EASE_MANAGER_H__
#define __EASE_MANAGER_H__

#include "FairyGUIMacros.h"
#include "EaseType.h"

NS_FGUI_BEGIN

/// @brief 缓动函数计算器，根据缓动类型计算插值结果。
///
/// 用于 GTweener 在动画过程中对值进行非线性插值，
/// 实现弹性、回弹、正弦等过渡效果。
class EaseManager
{
public:
    /// @brief 计算指定缓动类型在给定时间点的插值结果
    /// @param easeType 缓动类型
    /// @param time 当前时间
    /// @param duration 总持续时间
    /// @param overshootOrAmplitude 过冲量或振幅
    /// @param period 周期（用于弹性等缓动）
    /// @return 插值结果（0~1 之间，也可能超出范围如回弹效果）
    static float evaluate(EaseType easeType, float time, float duration, float overshootOrAmplitude, float period);
};

NS_FGUI_END

#endif
