#include "BitmapFont.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/font.hpp>
#include <godot_cpp/classes/font_file.hpp>
#else
#include "scene/resources/font.h"
#endif

NS_FGUI_BEGIN

FontAtlas::FontAtlas(BitmapFont& font)
    : _font(font)
    , _lineHeight(0)
{
}

FontAtlas::~FontAtlas()
{
}

void FontAtlas::addLetterDefinition(unsigned short ch, const FontLetterDefinition& def)
{
    _letterDefinitions[ch] = def;
}

void FontAtlas::addTexture(Ref<Texture2D> texture, int index)
{
    if (index >= (int)_textures.size())
        _textures.resize(index + 1);
    _textures[index] = texture;
}

void FontAtlas::setLineHeight(float height)
{
    _lineHeight = height;
}

const FontLetterDefinition* FontAtlas::getLetterDefinition(unsigned short ch) const
{
    auto it = _letterDefinitions.find(ch);
    if (it != _letterDefinitions.end())
        return &it->second;
    return nullptr;
}

Ref<Texture2D> FontAtlas::getTexture(int index) const
{
    if (index >= 0 && index < (int)_textures.size())
        return _textures[index];
    return Ref<Texture2D>();
}

BitmapFont::BitmapFont()
    : _originalFontSize(0)
    , _fontAtlas(nullptr)
    , _canTint(false)
    , _resizable(false)
    , _fontSize(0)
{
}

BitmapFont::~BitmapFont()
{
    releaseAtlas();
}

BitmapFont* BitmapFont::create()
{
    return memnew(BitmapFont);
}

void BitmapFont::releaseAtlas()
{
    if (_fontAtlas)
    {
        delete _fontAtlas;
        _fontAtlas = nullptr;
    }
}

const FontLetterDefinition* BitmapFont::getLetterDefinition(unsigned short ch) const
{
    if (_fontAtlas)
        return _fontAtlas->getLetterDefinition(ch);
    return nullptr;
}

void BitmapFont::buildGodotFont()
{
    if (!_fontAtlas)
        return;

    Ref<Texture2D> texture = _fontAtlas->getTexture(0);
    if (texture.is_null())
        return;

    Ref<FontFile> fontFile;
    fontFile.instantiate();
    const int baseSize = MAX(1, (int)_originalFontSize);
    fontFile->set_fixed_size(baseSize);
    fontFile->set_modulate_color_glyphs(_canTint);
    fontFile->set_antialiasing(TextServer::FONT_ANTIALIASING_NONE);

    Ref<Image> img = texture->get_image();
    if (img.is_valid())
        fontFile->set_texture_image(0, Vector2i(baseSize, 0), 0, img);

    float lineHeight = _fontAtlas->getLineHeight();
    if (lineHeight <= 0.0f)
        lineHeight = (float)baseSize;
    const float ascent = lineHeight;
    const float descent = MAX(1.0f, lineHeight - (float)baseSize * 0.25f);
    fontFile->set_cache_ascent(0, baseSize, ascent);
    fontFile->set_cache_descent(0, baseSize, descent);

    for (const auto& pair : _fontAtlas->getLetterDefinitions())
    {
        const unsigned short ch = pair.first;
        const FontLetterDefinition& def = pair.second;
        if (!def.validDefinition)
            continue;

        const Vector2 size(def.width, def.height);
        const Vector2 advance(def.xAdvance, 0.0f);
        const Vector2 offset(def.offsetX, def.offsetY - ascent);
        const Rect2 uv(def.U, def.V, def.width, def.height);

        fontFile->set_glyph_advance(0, baseSize, (int32_t)ch, advance);
        fontFile->set_glyph_offset(0, Vector2i(baseSize, 0), (int32_t)ch, offset);
        fontFile->set_glyph_size(0, Vector2i(baseSize, 0), (int32_t)ch, size);
        fontFile->set_glyph_uv_rect(0, Vector2i(baseSize, 0), (int32_t)ch, uv);
        fontFile->set_glyph_texture_idx(0, Vector2i(baseSize, 0), (int32_t)ch, 0);
    }

    _font = fontFile;
    _atlasTexture = texture;
}

NS_FGUI_END
