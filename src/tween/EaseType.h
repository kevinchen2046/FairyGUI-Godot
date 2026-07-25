#ifndef __EASETYPE_H__
#define __EASETYPE_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

/// @brief 缓动类型枚举。
/// 定义所有支持的缓动函数曲线，用于 GTweener 的 setEase() 方法。
///
/// In  = 缓入（开始慢，结束快）
/// Out = 缓出（开始快，结束慢）
/// InOut = 先缓入再缓出
enum class EaseType
{
    Linear,        ///< 线性（匀速）。

    SineIn,        ///< 正弦缓入。
    SineOut,       ///< 正弦缓出。
    SineInOut,     ///< 正弦缓入缓出。

    QuadIn,        ///< 二次方缓入。
    QuadOut,       ///< 二次方缓出。
    QuadInOut,     ///< 二次方缓入缓出。

    CubicIn,       ///< 三次方缓入。
    CubicOut,      ///< 三次方缓出。
    CubicInOut,    ///< 三次方缓入缓出。

    QuartIn,       ///< 四次方缓入。
    QuartOut,      ///< 四次方缓出。
    QuartInOut,    ///< 四次方缓入缓出。

    QuintIn,       ///< 五次方缓入。
    QuintOut,      ///< 五次方缓出。
    QuintInOut,    ///< 五次方缓入缓出。

    ExpoIn,        ///< 指数缓入。
    ExpoOut,       ///< 指数缓出。
    ExpoInOut,     ///< 指数缓入缓出。

    CircIn,        ///< 圆形缓入。
    CircOut,       ///< 圆形缓出。
    CircInOut,     ///< 圆形缓入缓出。

    ElasticIn,     ///< 弹性缓入。
    ElasticOut,    ///< 弹性缓出。
    ElasticInOut,  ///< 弹性缓入缓出。

    BackIn,        ///< 回弹缓入。
    BackOut,       ///< 回弹缓出。
    BackInOut,     ///< 回弹缓入缓出。

    BounceIn,      ///< 弹跳缓入。
    BounceOut,     ///< 弹跳缓出。
    BounceInOut,   ///< 弹跳缓入缓出。

    Custom         ///< 自定义缓动函数。
};

NS_FGUI_END

#endif
