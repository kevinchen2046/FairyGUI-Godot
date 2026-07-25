#ifndef __MARGIN_H__
#define __MARGIN_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

/// @brief 边距类，用于表示上、下、左、右四个方向的边距值。
class Margin
{
public:
    /// @brief 左边距
    float left;
    /// @brief 上边距
    float top;
    /// @brief 右边距
    float right;
    /// @brief 下边距
    float bottom;

public:
    /// @brief 默认构造函数（所有边距初始化为 0）
    Margin();

    /// @brief 使用指定的左、上、右、下边距构造
    /// @param l 左边距
    /// @param t 上边距
    /// @param r 右边距
    /// @param b 下边距
    Margin(float l, float t, float r, float b);

    /// @brief 拷贝构造函数
    Margin(const Margin& other);

    /// @brief 拷贝赋值运算符
    Margin& operator= (const Margin& other);

    /// @brief 设置四个方向的边距值
    /// @param l 左边距
    /// @param t 上边距
    /// @param r 右边距
    /// @param b 下边距
    void setMargin(float l, float t, float r, float b);

    /// @brief 判断两个边距是否相等
    /// @param target 要比较的 Margin 对象
    /// @return true 表示相等，false 表示不相等
    bool equals(const Margin& target) const;

    /// @brief 全零边距常量
    static const Margin ZERO;
};

NS_FGUI_END

#endif
