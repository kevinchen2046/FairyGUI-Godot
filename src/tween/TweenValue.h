#ifndef __TWEENVALUE_H__
#define __TWEENVALUE_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

/// @brief 缓动动画值容器。
/// 一个通用容器，可以存储标量、Vector2/3/4、Color 等多种类型的值，
/// 并用统一的接口进行缓动插值计算。
class TweenValue
{
public:
    float x;  ///< 分量 X / R。
    float y;  ///< 分量 Y / G。
    float z;  ///< 分量 Z / B。
    float w;  ///< 分量 W / A。
    double d; ///< 双精度分量。

    TweenValue();

    /** 获取为 Vector2 格式的值。 */
    Vector2 getVec2() const;
    void setVec2(const Vector2& value);
    /** 获取为 Vector3 格式的值。 */
    Vector3 getVec3() const;
    void setVec3(const Vector3& value);
    /** 获取为 Vector4 格式的值。 */
    Vector4 getVec4() const;
    void setVec4(const Vector4& value);
    /** 获取为 Color 格式的值。 */
    Color getColor() const;
    void setColor(const Color& value);
    /** 按索引访问分量（0=x, 1=y, 2=z, 3=w）。 */
    float operator[] (int index) const;
    float& operator[] (int index);
    /** 将所有分量归零。 */
    void setZero();
};

NS_FGUI_END

#endif
