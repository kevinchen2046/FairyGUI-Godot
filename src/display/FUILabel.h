#ifndef __FUILABEL_H__
#define __FUILABEL_H__

#include "FairyGUIMacros.h"
#include "TextFormat.h"

NS_FGUI_BEGIN

class BitmapFont;

/// @brief FairyGUI 文本标签渲染节点，继承自 Node2D。
///
/// FUILabel 负责将文本字符串渲染为可显示的文字。
/// 支持功能包括：
/// - 文本格式设置（字体、大小、颜色、对齐等）通过 TextFormat
/// - 自动换行 (wrapEnabled)
/// - 灰度效果 (grayed)
/// - 位图字体 (BMFont)
/// - 下划线颜色
/// - 绘制偏移 (drawOffset)
class FUILabel : public Node2D
{
    GDCLASS(FUILabel, Node2D)

public:
    FUILabel();
    virtual ~FUILabel();

    static FUILabel* create();

    /// @brief 设置显示文本
    void setText(const std::string& value);

    /// @brief 获取显示文本
    std::string& getText() { return _text; }

    void gd_setText(const String& text);
    String gd_getText();

    /// @brief 获取文本长度（字符数）
    int getTextLength() const { return (int)_text.length(); }

    /// @brief 获取文本格式对象
    TextFormat* getTextFormat() const { return _textFormat; }

    /// @brief 应用文本格式到渲染
    void applyTextFormat();

    /// @brief 设置灰度效果
    void setGrayed(bool value);

    /// @brief 是否启用灰度效果
    bool isGrayed() const { return _grayed; }

    /// @brief 设置是否自动换行
    void setWrapEnabled(bool value)
    {
        if (_wrapEnabled != value)
        {
            _wrapEnabled = value;
            queue_redraw();
        }
    }

    /// @brief 是否自动换行
    bool isWrapEnabled() const { return _wrapEnabled; }

    /// @brief 获取文本渲染尺寸
    Vector2 getTextSize() const { return Vector2(getTextWidth(), getTextHeight()); }

    /// @brief 设置内容尺寸
    void setContentSize(const Vector2& size) { _contentSize = size; }

    /// @brief 内容尺寸
    Vector2 _contentSize;

    /// @brief 设置下划线颜色
    void setUnderlineColor(const Color& value);

    /// @brief 设置绘制时的字体大小
    void setDrawFontSize(int value) { _drawFontSize = value; queue_redraw(); }

    /// @brief 获取绘制时的字体大小
    int getDrawFontSize() const;

    /// @brief 设置绘制偏移
    void setDrawOffset(const Vector2& value) { _drawOffset = value; queue_redraw(); }

    /// @brief 获取绘制偏移
    const Vector2& getDrawOffset() const { return _drawOffset; }

    /// @brief 获取文本绘制宽度
    float getTextWidth() const;

    /// @brief 获取文本绘制高度
    float getTextHeight() const;

    static void _bind_methods();
    void _notification(int p_what);
    void _draw();

protected:

private:
    bool setBMFontFilePath(const std::string& bmfontFilePath, float fontSize = 0);
    void updateBMFontScale();
    void updateDrawFont();
    void updateText();

    /// @brief 是否使用位图字体
    bool isBMFont() const { return !_bmFontPath.empty(); }

    static Color toGrayed(const Color& source);

    std::string _text;
    std::string _fontName;
    TextFormat* _textFormat;
    float _fontSize;
    bool _grayed;
    bool _wrapEnabled;
    Color _underlineColor;
    bool _hasUnderlineColor;
    int _drawFontSize;
    Vector2 _drawOffset;

    // 位图字体数据
    std::string _bmFontPath;
    float _bmFontSize;
    float _bmfontScale;
    bool _bmFontCanTint;
    Ref<Font> _bmFont;
    Ref<Font> _drawFont;
    Ref<Texture2D> _bmAtlasTexture;

    friend class UIPackage;
};

NS_FGUI_END

#endif
