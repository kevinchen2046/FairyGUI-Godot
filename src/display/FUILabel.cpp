#include "FUILabel.h"
#include "FUIDisplayNode.h"
#include "BitmapFont.h"
#include "GObject.h"
#include "GRoot.h"
#include "UIConfig.h"
#include "UIPackage.h"
#include "scene/resources/font.h"
#include "fgui_godot_compat.h"

NS_FGUI_BEGIN

static HorizontalAlignment fui_text_h_align(int align)
{
    switch (align)
    {
    case 1:
        return HORIZONTAL_ALIGNMENT_CENTER;
    case 2:
        return HORIZONTAL_ALIGNMENT_RIGHT;
    default:
        return HORIZONTAL_ALIGNMENT_LEFT;
    }
}

static String fui_sanitize_text(const String& text)
{
    if (text.find_char('\t') == -1)
        return text;
    return text.replace("\t", " ");
}

static Vector2 fui_measure_text(const Ref<Font>& font, const String& text, int fontSize, bool wrap, float maxWidth, int align)
{
    const String sanitized = fui_sanitize_text(text);
    if (wrap)
        return font->get_multiline_string_size(sanitized, fui_text_h_align(align), maxWidth, fontSize,
                -1, TextServer::BREAK_MANDATORY | TextServer::BREAK_WORD_BOUND, TextServer::JUSTIFICATION_NONE,
                TextServer::DIRECTION_LTR);
    return font->get_string_size(sanitized, HORIZONTAL_ALIGNMENT_LEFT, -1, fontSize,
            TextServer::JUSTIFICATION_NONE, TextServer::DIRECTION_LTR);
}

static void fui_draw_text(CanvasItem* item, const Ref<Font>& font, const Vector2& pos, const String& text,
        int fontSize, const Color& color, bool wrap, float boxWidth, int align, bool manualHAlignOffset)
{
    const String sanitized = fui_sanitize_text(text);
    const float drawWidth = boxWidth > 0 ? boxWidth : -1;
    const HorizontalAlignment hAlign = manualHAlignOffset ? HORIZONTAL_ALIGNMENT_LEFT : fui_text_h_align(align);

    if (wrap)
    {
        item->draw_multiline_string(font, pos, sanitized, fui_text_h_align(align), drawWidth, fontSize, -1, color,
                TextServer::BREAK_MANDATORY | TextServer::BREAK_WORD_BOUND, TextServer::JUSTIFICATION_NONE,
                TextServer::DIRECTION_LTR);
    }
    else
    {
        item->draw_string(font, pos, sanitized, hAlign, drawWidth, fontSize, color,
                TextServer::JUSTIFICATION_NONE, TextServer::DIRECTION_LTR);
    }
}

// Match FairyGUI VertexBuffer.GenerateOutline: duplicate text at cardinal/diagonal offsets.
static void fui_draw_stroke(CanvasItem* item, const Ref<Font>& font, const Vector2& pos, const String& text,
        int fontSize, const Color& color, bool wrap, float boxWidth, int align, bool manualHAlignOffset, float strokeWidth)
{
    static const Vector2 STROKE_DIRS[] = {
        Vector2(-1, 0), Vector2(1, 0), Vector2(0, -1), Vector2(0, 1),
        Vector2(-1, -1), Vector2(1, -1), Vector2(-1, 1), Vector2(1, 1),
    };
    const float w = MAX(strokeWidth, 1.f);
    for (const Vector2& dir : STROKE_DIRS)
        fui_draw_text(item, font, pos + dir * w, text, fontSize, color, wrap, boxWidth, align, manualHAlignOffset);
}

Color FUILabel::toGrayed(const Color& source)
{
    float gray = source.r * 0.299f + source.g * 0.587f + source.b * 0.114f;
    return Color(gray, gray, gray, source.a);
}

FUILabel::FUILabel() :
    _contentSize(0, 0),
    _textFormat(new TextFormat()),
    _fontSize(-1),
    _grayed(false),
    _wrapEnabled(false),
    _hasUnderlineColor(false),
    _drawFontSize(0),
    _drawOffset(0, 0),
    _bmFontSize(0),
    _bmfontScale(1.0f),
    _bmFontCanTint(false)
{
    item_rect_changed(); // enable NOTIFICATION_DRAW for Node2D
}

FUILabel::~FUILabel()
{
    _drawFont = Ref<Font>();
    _bmFont = Ref<Font>();
    _bmAtlasTexture = Ref<Texture2D>();
    delete _textFormat;
}

FUILabel* FUILabel::create()
{
    return memnew(FUILabel);
}

void FUILabel::_bind_methods()
{
    ClassDB::bind_method(D_METHOD("setText", "text"), &FUILabel::gd_setText);
    ClassDB::bind_method(D_METHOD("getText"), &FUILabel::gd_getText);

    ClassDB::bind_method(D_METHOD("setGrayed", "value"), &FUILabel::setGrayed);
    ClassDB::bind_method(D_METHOD("isGrayed"), &FUILabel::isGrayed);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "grayed"), "setGrayed", "isGrayed");

    ClassDB::bind_method(D_METHOD("setWrapEnabled", "value"), &FUILabel::setWrapEnabled);
    ClassDB::bind_method(D_METHOD("isWrapEnabled"), &FUILabel::isWrapEnabled);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "wrapEnabled"), "setWrapEnabled", "isWrapEnabled");

    ClassDB::bind_method(D_METHOD("getTextSize"), &FUILabel::getTextSize);

    ClassDB::bind_method(D_METHOD("setUnderlineColor", "color"), &FUILabel::setUnderlineColor);

    ClassDB::bind_method(D_METHOD("getTextWidth"), &FUILabel::getTextWidth);
    ClassDB::bind_method(D_METHOD("getTextHeight"), &FUILabel::getTextHeight);

    ClassDB::bind_method(D_METHOD("applyTextFormat"), &FUILabel::applyTextFormat);
}

void FUILabel::setText(const std::string& value)
{
    if (_text != value)
    {
        _text = value;
        if (_fontSize < 0)
            applyTextFormat();
        updateText();
    }
}

void FUILabel::applyTextFormat()
{
    bool firstTime = (_fontSize < 0);

    if (firstTime || _fontName != _textFormat->face)
    {
        _fontName = _textFormat->face;

        if (_fontName.find("ui://") != std::string::npos)
        {
            // BM Font
            setBMFontFilePath(_fontName);
        }
        else
        {
            // System/TTF font
            _bmFontPath.clear();
            bool ttf = false;
            const std::string& fontName = UIConfig::getRealFontName(_fontName, &ttf);
            _bmFont = UIConfig::loadFont(fontName, ttf);
            if (_bmFont.is_null())
                _bmFont.instantiate(); // fallback to empty
        }
    }

    if (_fontSize != _textFormat->fontSize)
    {
        _fontSize = _textFormat->fontSize;
    }

    if (isBMFont())
    {
        if (_bmFontCanTint)
            set_modulate(_grayed ? toGrayed(_textFormat->color) : _textFormat->color);
    }
    else
    {
        // TTF/system font: keep modulate neutral so fill/outline colors are not multiplied twice.
        set_modulate(_grayed ? Color(1, 1, 1, toGrayed(_textFormat->color).a) : Color(1, 1, 1, _textFormat->color.a));
    }

    updateDrawFont();
    queue_redraw();
}

void FUILabel::updateDrawFont()
{
    _drawFont = _bmFont;
    if (_drawFont.is_null())
        return;

    if (!_textFormat->bold && !_textFormat->italics && _textFormat->lineSpacing == 0 && _textFormat->letterSpacing == 0)
        return;

    Ref<FontVariation> variation;
    variation.instantiate();
    variation->set_base_font(_bmFont);

    if (_textFormat->bold)
        variation->set_variation_embolden(1.0f);

    if (_textFormat->italics)
    {
        Transform2D slant(1.0f, Math::tan(Math::deg_to_rad(12.0f)), 0.0f, 1.0f, 0.0f, 0.0f);
        variation->set_variation_transform(slant);
    }

    if (_textFormat->letterSpacing != 0)
        variation->set_spacing(TextServer::SPACING_GLYPH, _textFormat->letterSpacing);

    if (_textFormat->lineSpacing != 0)
        variation->set_spacing(TextServer::SPACING_BOTTOM, _textFormat->lineSpacing);

    _drawFont = variation;
}

bool FUILabel::setBMFontFilePath(const std::string& bmfontFilePath, float fontSize)
{
    BitmapFont* bmFont = (BitmapFont*)UIPackage::getItemAssetByURL(bmfontFilePath, PackageItemType::FONT);
    if (bmFont == nullptr)
    {
        _bmFontPath.clear();
        _bmFont.unref();
        _bmAtlasTexture.unref();
        return false;
    }

    if (fontSize == 0)
    {
        _bmFontSize = bmFont->getOriginalFontSize();
    }
    else
    {
        _bmFontSize = fontSize;
    }

    _bmFontPath = bmfontFilePath;
    _bmFont = bmFont->getFont();
    _bmAtlasTexture = bmFont->getAtlasTexture();
    _bmFontCanTint = true; // GODOT: BM fonts can tint if GPU rendered

    updateBMFontScale();
    return true;
}

void FUILabel::setGrayed(bool value)
{
    _grayed = value;
    applyTextFormat();
}

void FUILabel::setUnderlineColor(const Color& value)
{
    _underlineColor = value;
    _hasUnderlineColor = true;
    queue_redraw();
}

void FUILabel::updateBMFontScale()
{
    _bmfontScale = 1.0f;
    if (!isBMFont() || _bmFontPath.empty())
        return;

    BitmapFont* bmFont = (BitmapFont*)UIPackage::getItemAssetByURL(_bmFontPath, PackageItemType::FONT);
    if (bmFont == nullptr)
        return;

    float contentScale = 1.0f;
    switch (GRoot::contentScaleLevel)
    {
    case 1:
        contentScale = 2.0f;
        break;
    case 2:
        contentScale = 3.0f;
        break;
    case 3:
        contentScale = 4.0f;
        break;
    default:
        break;
    }

    float originalFontSize = bmFont->getOriginalFontSize();
    if (originalFontSize > 0)
        _bmfontScale = _bmFontSize * contentScale / originalFontSize;
}

int FUILabel::getDrawFontSize() const
{
    int size = _drawFontSize > 0 ? _drawFontSize : (int)_textFormat->fontSize;
    if (isBMFont() && _bmfontScale > 0 && _bmfontScale != 1.0f)
        return MAX(1, (int)Math::round(size * _bmfontScale));
    return size;
}

static float fui_font_style_extra_width(const Ref<Font>& font, const TextFormat* format, int fontSize, float measuredHeight)
{
    float extra = 0.0f;
    if (format->italics)
    {
        // FontVariation slant overhang is often missing from get_string_size().
        float height = measuredHeight > 0.0f
            ? measuredHeight
            : (font.is_valid() ? font->get_height(fontSize) : (float)fontSize);
        extra += height * Math::tan(Math::deg_to_rad(12.0f));
        extra += MAX(2.0f, fontSize * 0.06f);
    }
    if (format->bold)
        extra += fontSize * 0.12f + 2.0f;
    if (format->letterSpacing != 0)
        extra += Math::abs((float)format->letterSpacing);
    return extra;
}

float FUILabel::getTextWidth() const
{
    if (_text.empty()) return 0;
    Ref<Font> font = _drawFont.is_valid() ? _drawFont : _bmFont;
    if (font.is_valid())
    {
        int fontSize = getDrawFontSize();
        bool wrap = _wrapEnabled && _contentSize.x > 0;
        float maxWidth = wrap ? _contentSize.x : -1;
        Vector2 measured = fui_measure_text(font, GObject::toGodotStr(_text), fontSize, wrap, maxWidth, _textFormat->align);
        float width = measured.x + fui_font_style_extra_width(font, _textFormat, fontSize, measured.y);
        return Math::ceil(width);
    }
    return 0;
}

float FUILabel::getTextHeight() const
{
    if (_text.empty()) return 0;
    Ref<Font> font = _drawFont.is_valid() ? _drawFont : _bmFont;
    if (font.is_valid())
    {
        int fontSize = getDrawFontSize();
        bool wrap = _wrapEnabled && _contentSize.x > 0;
        float maxWidth = wrap ? _contentSize.x : -1;
        return fui_measure_text(font, GObject::toGodotStr(_text), fontSize, wrap, maxWidth, _textFormat->align).y;
    }
    return getDrawFontSize();
}

void FUILabel::updateText()
{
    queue_redraw();
}

void FUILabel::_notification(int p_what) {
    if (p_what == NOTIFICATION_DRAW) {
        _draw();
        return;
    }
    if (p_what == NOTIFICATION_ENTER_TREE) {
        fui_sync_child_order_changed(this, true);
        queue_redraw();
        return;
    }
    if (p_what == NOTIFICATION_EXIT_TREE) {
        fui_sync_child_order_changed(this, false);
        return;
    }
    if (p_what == NOTIFICATION_PREDELETE) {
        _drawFont = Ref<Font>();
        _bmFont = Ref<Font>();
        _bmAtlasTexture = Ref<Texture2D>();
        return;
    }
    Node2D::_notification(p_what);
}

void FUILabel::_draw()
{
    if (_text.empty()) return;

    Ref<Font> font = _drawFont.is_valid() ? _drawFont : _bmFont;
    if (font.is_null()) return;

    Color textColor = _grayed ? toGrayed(_textFormat->color) : _textFormat->color;
    int fontSize = getDrawFontSize();
    bool wrap = _wrapEnabled && _contentSize.x > 0;
    const float boxWidth = _contentSize.x > 0 ? _contentSize.x : -1;
    const bool manualHAlignOffset = !wrap && boxWidth > 0;
    String godotText = fui_sanitize_text(GObject::toGodotStr(_text));

    // Compute alignment offset within content rect
    Vector2 offset = _drawOffset;
    float fontAscent = font.is_valid() ? font->get_ascent(fontSize) : fontSize * 0.8f;
    if (_contentSize.x > 0 || _contentSize.y > 0)
    {
        float textW = getTextWidth();
        float textH = getTextHeight();
        if (manualHAlignOffset)
        {
            if (_textFormat->align == 1)      offset.x = (_contentSize.x - textW) * 0.5f;
            else if (_textFormat->align == 2) offset.x = _contentSize.x - textW;
        }
        if (_textFormat->verticalAlign == 1)      offset.y = (_contentSize.y - textH) * 0.5f + fontAscent;
        else if (_textFormat->verticalAlign == 2) offset.y = _contentSize.y - textH + fontAscent;
        else                                      offset.y = fontAscent; // top: baseline offset
    }
    else
    {
        offset.y = fontAscent;
    }

    // Effects
    if (_textFormat->hasEffect(TextFormat::SHADOW))
    {
        Color shadowColor = _grayed ? toGrayed(_textFormat->shadowColor) : _textFormat->shadowColor;
        Vector2 shadowPos = offset + _textFormat->shadowOffset;
        fui_draw_text(this, font, shadowPos, godotText, fontSize, shadowColor, wrap, boxWidth, _textFormat->align, manualHAlignOffset);
    }

    if (_textFormat->hasEffect(TextFormat::OUTLINE) && _textFormat->outlineSize > 0.f)
    {
        Color outlineColor = _grayed ? toGrayed(_textFormat->outlineColor) : _textFormat->outlineColor;
        fui_draw_stroke(this, font, offset, godotText, fontSize, outlineColor, wrap, boxWidth, _textFormat->align, manualHAlignOffset, _textFormat->outlineSize);
    }
    else if (_textFormat->hasEffect(TextFormat::GLOW))
    {
        Color glowColor = _grayed ? toGrayed(_textFormat->glowColor) : _textFormat->glowColor;
        fui_draw_text(this, font, offset, godotText, fontSize, glowColor, wrap, boxWidth, _textFormat->align, manualHAlignOffset);
    }

    // Main text
    fui_draw_text(this, font, offset, godotText, fontSize, textColor, wrap, boxWidth, _textFormat->align, manualHAlignOffset);

    // Underline
    if (_textFormat->underline)
    {
        const float textWidth = getTextWidth();
        Color lineColor = (_hasUnderlineColor && _underlineColor.a > 0.0f) ? _underlineColor : textColor;
        const float descent = font->get_descent(fontSize);
        const float underlineY = offset.y + MAX(1.0f, descent);
        draw_line(Vector2(offset.x, underlineY), Vector2(offset.x + textWidth, underlineY), lineColor);
    }
}

void FUILabel::gd_setText(const String& text) { setText(text.utf8().get_data()); }
String FUILabel::gd_getText() { return GObject::toGodotStr(getText()); }

NS_FGUI_END
