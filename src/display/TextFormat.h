#ifndef __TEXTFORMAT_H__
#define __TEXTFORMAT_H__

#include "FairyGUIMacros.h"
#include <string>

NS_FGUI_BEGIN

/// @brief 文本格式定义类，描述文本的样式属性。
///
/// 包含字体、大小、颜色、对齐方式、特殊效果（描边/阴影/发光）等。
/// 被 FUILabel、FUIRichText、FUIInput 等文本显示组件共享使用。
class TextFormat
{
public:
    TextFormat();
    TextFormat(const TextFormat& other);
    TextFormat& operator=(const TextFormat& other);

    /// @brief 从另一个 TextFormat 复制格式设置
    void setFormat(const TextFormat& format);

    /// @brief 启用指定效果
    /// @param effectFlag 效果标志位
    void enableEffect(int effectFlag) { effect |= effectFlag; }

    /// @brief 禁用指定效果
    /// @param effectFlag 效果标志位
    void disableEffect(int effectFlag) { effect &= ~effectFlag; }

    /// @brief 是否启用了指定效果
    /// @param effectFlag 效果标志位
    bool hasEffect(int effectFlag) const { return (effect & effectFlag) != 0; }

    /// @brief 描边效果标志
    static const int OUTLINE = 1;

    /// @brief 阴影效果标志
    static const int SHADOW = 2;

    /// @brief 发光效果标志
    static const int GLOW = 4;

    /// @brief 字体名称
    std::string face;

    /// @brief 字体大小
    float fontSize;

    /// @brief 文本颜色
    Color color;

    /// @brief 是否粗体
    bool bold;

    /// @brief 是否斜体
    bool italics;

    /// @brief 是否下划线
    bool underline;

    /// @brief 行间距
    int lineSpacing;

    /// @brief 字符间距
    int letterSpacing;

    /// @brief 水平对齐
    int align;

    /// @brief 垂直对齐
    int verticalAlign;

    /// @brief 效果标志位（OUTLINE|SHADOW|GLOW）
    int effect;

    /// @brief 描边颜色
    Color outlineColor;

    /// @brief 描边大小
    float outlineSize;

    /// @brief 阴影颜色
    Color shadowColor;

    /// @brief 阴影偏移
    Vector2 shadowOffset;

    /// @brief 阴影模糊半径
    int shadowBlurRadius;

    /// @brief 发光颜色
    Color glowColor;

    /// @brief 内部使用：是否设置了颜色
    bool _hasColor;
};

NS_FGUI_END

#endif
