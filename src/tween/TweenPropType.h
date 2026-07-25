#ifndef __TWEENPROPTYPE_H__
#define __TWEENPROPTYPE_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

class TweenValue;
#include "../GuiObjectFwd.h"

/// @brief 缓动动画属性类型枚举。
/// 指定 GTweener 作用于目标的哪个属性。
enum class TweenPropType
{
    None,       ///< 无指定。
    X,          ///< X 坐标。
    Y,          ///< Y 坐标。
    Position,   ///< 位置（X+Y）。
    Width,      ///< 宽度。
    Height,     ///< 高度。
    Size,       ///< 尺寸（宽+高）。
    ScaleX,     ///< X 方向缩放。
    ScaleY,     ///< Y 方向缩放。
    Scale,      ///< 缩放（X+Y）。
    Rotation,   ///< 旋转角度。
    Alpha,      ///< 透明度。
    Progress    ///< 进度值。
};

/// @brief 缓动属性工具类。
/// 提供将 TweenValue 应用到目标对象指定属性的功能。
class TweenPropTypeUtils
{
public:
    /** 将缓动值应用到 GObject 的指定属性。 */
    static void setProps(GObject* target, TweenPropType propType, const TweenValue& value);
    /** 将缓动值应用到 Node 的指定属性。 */
    static void setProps(Node* target, TweenPropType propType, const TweenValue& value);
};


NS_FGUI_END

#endif
