#ifndef __BITMAPFONT_H__
#define __BITMAPFONT_H__

#include "FairyGUIMacros.h"
#include "PackageItem.h"
#include <unordered_map>
#include <vector>

NS_FGUI_BEGIN

/// @brief 位图字体字符定义，描述单个字符在纹理图集中的位置和度量信息。
struct FontLetterDefinition
{
    /// @brief 纹理左坐标
    float U;

    /// @brief 纹理上坐标
    float V;

    /// @brief 纹理中的宽度
    float width;

    /// @brief 纹理中的高度
    float height;

    /// @brief X 偏移量
    float offsetX;

    /// @brief Y 偏移量
    float offsetY;

    /// @brief X 前进量（字符绘制后的光标移动距离）
    float xAdvance;

    /// @brief 是否为有效定义
    bool validDefinition;

    FontLetterDefinition()
        : U(0), V(0), width(0), height(0)
        , offsetX(0), offsetY(0), xAdvance(0)
        , validDefinition(false)
    {
    }
};

/// @brief 字体图集，管理位图字体中所有字符的纹理信息和度量数据。
class FontAtlas
{
public:
    FontAtlas(BitmapFont& font);
    ~FontAtlas();

    /// @brief 添加字符定义
    /// @param ch Unicode 字符码
    /// @param def 字符定义数据
    void addLetterDefinition(unsigned short ch, const FontLetterDefinition& def);

    /// @brief 添加纹理页
    /// @param texture 纹理
    /// @param index 纹理页索引
    void addTexture(Ref<Texture2D> texture, int index);

    /// @brief 设置行高
    void setLineHeight(float height);

    /// @brief 获取行高
    float getLineHeight() const { return _lineHeight; }

    /// @brief 获取指定字符的定义数据
    const FontLetterDefinition* getLetterDefinition(unsigned short ch) const;

    /// @brief 获取指定索引的纹理页
    Ref<Texture2D> getTexture(int index) const;

    /// @brief 获取所有字符定义的映射
    const std::unordered_map<unsigned short, FontLetterDefinition>& getLetterDefinitions() const { return _letterDefinitions; }

private:
    [[maybe_unused]] BitmapFont& _font;
    std::unordered_map<unsigned short, FontLetterDefinition> _letterDefinitions;
    std::vector<Ref<Texture2D>> _textures;
    float _lineHeight;
};

/// @brief 位图字体类，管理 FairyGUI 位图字体资源。
///
/// BitmapFont 负责加载和管理 FairyGUI 编辑器导出的 BM Font 格式字体，
/// 将位图字体数据转换为 Godot 可用的纹理和字符映射。
class BitmapFont
{
public:
    BitmapFont();
    virtual ~BitmapFont();

    static BitmapFont* create();

    /// @brief 释放图集
    void releaseAtlas();

    /// @brief 构建 Godot Font 对象
    void buildGodotFont();

    /// @brief 获取 Godot Font 对象
    Ref<Font> getFont() const { return _font; }

    /// @brief 获取图集纹理
    Ref<Texture2D> getAtlasTexture() const { return _atlasTexture; }

    /// @brief 获取原始字体大小
    float getOriginalFontSize() const { return _originalFontSize; }

    /// @brief 获取字体大小（整数）
    int getFontSize() const { return (int)_originalFontSize; }

    /// @brief 获取指定字符的定义数据
    const FontLetterDefinition* getLetterDefinition(unsigned short ch) const;

    /// @brief 获取字体图集
    const FontAtlas* getFontAtlas() const { return _fontAtlas; }

private:
    /// @brief 原始字体大小
    float _originalFontSize;

    /// @brief Godot Font 对象
    Ref<Font> _font;

    /// @brief 图集纹理
    Ref<Texture2D> _atlasTexture;

    /// @brief 字体图集
    FontAtlas* _fontAtlas;

    /// @brief 是否可着色
    bool _canTint;

    /// @brief 是否可缩放
    bool _resizable;

    /// @brief 字体大小
    int _fontSize;

    friend class UIPackage;
    friend class FontAtlas;
};

NS_FGUI_END

#endif
