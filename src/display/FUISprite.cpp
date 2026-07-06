#include "FUISprite.h"
#include "FUIDisplayNode.h"
#include <cfloat>
#include "scene/resources/shader.h"
#include "fgui_godot_compat.h"

NS_FGUI_BEGIN

Ref<Texture2D> FUISprite::_empty;

// Const for radial fill boundary coords lookup
static const char kProgressTextureCoords = 0x4b; // {0,1} {0,0} {1,0} {1,1}
static const int kProgressTextureCoordsCount = 4;

static Ref<Shader> get_fui_sprite_shader()
{
    static Ref<Shader> shader;
    if (shader.is_null())
    {
        shader.instantiate();
        shader->set_code(
            "shader_type canvas_item;\n"
            "uniform bool u_grayed = false;\n"
            "void fragment() {\n"
            "    vec4 c = texture(TEXTURE, UV) * COLOR;\n"
            "    if (u_grayed) {\n"
            "        float g = dot(c.rgb, vec3(0.299, 0.587, 0.114));\n"
            "        COLOR = vec4(vec3(g), c.a);\n"
            "    } else {\n"
            "        COLOR = c;\n"
            "    }\n"
            "}\n");
    }
    return shader;
}

static Rect2 getRotatedAtlasSrcRect(float ox, float oy, float ow, float oh, const Rect2& atlasRect);
static Vector2 getRotatedLogicalTrimSize(const Rect2& atlasRect, const Vector2& originalSize);
static void drawRotatedAtlasRegion(CanvasItem* item, const Ref<Texture2D>& tex,
        const Rect2& atlasRect, const Vector2& drawOrigin, const Vector2& contentSize,
        const Vector2& dstPos, float logicalW, float logicalH, float sx, float sy,
        const Color& modulate);

FUISprite::FUISprite() :
    _fillMethod(FillMethod::None),
    _fillOrigin(FillOrigin::Left),
    _fillAmount(0),
    _fillClockwise(false),
    _scaleByTile(false),
    _grayed(false),
    _rotated(false),
    _tintColor(1, 1, 1, 1),
    _scale9Enabled(false),
    _trimOffset(),
    _tileDisplaySize(0, 0)
{
    set_centered(false); // FairyGUI uses top-left origin, NOT center origin
    item_rect_changed(); // enable NOTIFICATION_DRAW for Node2D
}

FUISprite::~FUISprite()
{
}

void FUISprite::_bind_methods()
{
    // Enum bindings
    ClassDB::bind_integer_constant(get_class_static(), "FillMethod", "None", static_cast<GDExtensionInt>(FillMethod::None));
    ClassDB::bind_integer_constant(get_class_static(), "FillMethod", "Horizontal", static_cast<GDExtensionInt>(FillMethod::Horizontal));
    ClassDB::bind_integer_constant(get_class_static(), "FillMethod", "Vertical", static_cast<GDExtensionInt>(FillMethod::Vertical));
    ClassDB::bind_integer_constant(get_class_static(), "FillMethod", "Radial90", static_cast<GDExtensionInt>(FillMethod::Radial90));
    ClassDB::bind_integer_constant(get_class_static(), "FillMethod", "Radial180", static_cast<GDExtensionInt>(FillMethod::Radial180));
    ClassDB::bind_integer_constant(get_class_static(), "FillMethod", "Radial360", static_cast<GDExtensionInt>(FillMethod::Radial360));

    ClassDB::bind_integer_constant(get_class_static(), "FillOrigin", "Top", static_cast<GDExtensionInt>(FillOrigin::Top));
    ClassDB::bind_integer_constant(get_class_static(), "FillOrigin", "Bottom", static_cast<GDExtensionInt>(FillOrigin::Bottom));
    ClassDB::bind_integer_constant(get_class_static(), "FillOrigin", "Left", static_cast<GDExtensionInt>(FillOrigin::Left));
    ClassDB::bind_integer_constant(get_class_static(), "FillOrigin", "Right", static_cast<GDExtensionInt>(FillOrigin::Right));

    ClassDB::bind_method(D_METHOD("clearContent"), &FUISprite::clearContent);
    ClassDB::bind_method(D_METHOD("setScale9Grid", "rect"), &FUISprite::setScale9Grid);

    ClassDB::bind_method(D_METHOD("setScaleByTile", "value"), &FUISprite::setScaleByTile);
    ClassDB::bind_method(D_METHOD("isScaleByTile"), &FUISprite::isScaleByTile);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "scaleByTile"), "setScaleByTile", "isScaleByTile");

    ClassDB::bind_method(D_METHOD("setGrayed", "value"), &FUISprite::setGrayed);
    ClassDB::bind_method(D_METHOD("isGrayed"), &FUISprite::isGrayed);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "grayed"), "setGrayed", "isGrayed");

    // Wrapped Sprite2D properties
    ClassDB::bind_method(D_METHOD("setFlippedH", "value"), &FUISprite::setFlippedH);
    ClassDB::bind_method(D_METHOD("isFlippedH"), &FUISprite::isFlippedH);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "flippedH"), "setFlippedH", "isFlippedH");

    ClassDB::bind_method(D_METHOD("setFlippedV", "value"), &FUISprite::setFlippedV);
    ClassDB::bind_method(D_METHOD("isFlippedV"), &FUISprite::isFlippedV);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "flippedV"), "setFlippedV", "isFlippedV");

    ClassDB::bind_method(D_METHOD("setColor", "color"), &FUISprite::setColor);
    ClassDB::bind_method(D_METHOD("getColor"), &FUISprite::getColor);
    ADD_PROPERTY(PropertyInfo(Variant::COLOR, "color"), "setColor", "getColor");

    ClassDB::bind_method(D_METHOD("setRegion", "rect"), &FUISprite::setRegion);
    ClassDB::bind_method(D_METHOD("getRegion"), &FUISprite::getRegion);
    ADD_PROPERTY(PropertyInfo(Variant::RECT2, "region"), "setRegion", "getRegion");

    ClassDB::bind_method(D_METHOD("setRegionEnabled", "value"), &FUISprite::setRegionEnabled);
    ClassDB::bind_method(D_METHOD("isRegionEnabled"), &FUISprite::isRegionEnabled);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "regionEnabled"), "setRegionEnabled", "isRegionEnabled");

    ClassDB::bind_method(D_METHOD("setTexture", "texture"), &FUISprite::setTexture);
    ClassDB::bind_method(D_METHOD("getTexture"), &FUISprite::getTexture);
    ADD_PROPERTY(PropertyInfo(Variant::OBJECT, "texture", PROPERTY_HINT_RESOURCE_TYPE, "Texture2D"), "setTexture", "getTexture");

    // Fill properties
    ClassDB::bind_method(D_METHOD("setFillMethod", "method"), &FUISprite::gd_setFillMethod);
    ClassDB::bind_method(D_METHOD("getFillMethod"), &FUISprite::gd_getFillMethod);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "fillMethod"), "setFillMethod", "getFillMethod");

    ClassDB::bind_method(D_METHOD("setFillOrigin", "origin"), &FUISprite::gd_setFillOrigin);
    ClassDB::bind_method(D_METHOD("getFillOrigin"), &FUISprite::gd_getFillOrigin);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "fillOrigin"), "setFillOrigin", "getFillOrigin");

    ClassDB::bind_method(D_METHOD("setFillClockwise", "value"), &FUISprite::setFillClockwise);
    ClassDB::bind_method(D_METHOD("isFillClockwise"), &FUISprite::isFillClockwise);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "fillClockwise"), "setFillClockwise", "isFillClockwise");

    ClassDB::bind_method(D_METHOD("setFillAmount", "amount"), &FUISprite::setFillAmount);
    ClassDB::bind_method(D_METHOD("getFillAmount"), &FUISprite::getFillAmount);
    ADD_PROPERTY(PropertyInfo(Variant::FLOAT, "fillAmount", PROPERTY_HINT_RANGE, "0,1,0.01"), "setFillAmount", "getFillAmount");
}

FUISprite* FUISprite::create()
{
    FUISprite* ret = memnew(FUISprite);
    return ret;
}

void FUISprite::_notification(int p_what)
{
    if (p_what == NOTIFICATION_DRAW) {
        _draw();
        return;
    }
    if (p_what == NOTIFICATION_PROCESS)
    {
        if (_processCallback)
            _processCallback(get_process_delta_time());
        return;
    }
    if (p_what == NOTIFICATION_ENTER_TREE)
    {
        fui_sync_child_order_changed(this, true);
        queue_redraw();
        return;
    }
    if (p_what == NOTIFICATION_EXIT_TREE)
    {
        fui_sync_child_order_changed(this, false);
        return;
    }
    if (p_what == NOTIFICATION_ENTER_CANVAS)
    {
        if (_fillMethod != FillMethod::None)
            setupFill();
    }
    Sprite2D::_notification(p_what);
}

void FUISprite::clearContent()
{
    _realTexture.unref();
    set_texture(nullptr);
    _scale9Enabled = false;
    _empty = get_texture();
    queue_redraw();
}

void FUISprite::setImageFrameInfo(const Vector2& originalSize, const Vector2& trimOffset)
{
    _originalContentSize = originalSize;
    _trimOffset = trimOffset;
    queue_redraw();
}

void FUISprite::setScale9Grid(const Rect2& value)
{
    if (value.size.x == 0 && value.size.y == 0)
    {
        _scale9Enabled = false;
        return;
    }

    Rect2 insets = value;
    Vector2 trimmedSize = get_region_rect().size;
    if (trimmedSize.x <= 0 || trimmedSize.y <= 0)
    {
        if (_realTexture.is_valid())
            trimmedSize = _realTexture->get_size();
    }
    if (_rotated && _originalContentSize.x > 0.0f && _originalContentSize.y > 0.0f
        && (Math::abs(trimmedSize.x - _originalContentSize.x) > 0.5f
            || Math::abs(trimmedSize.y - _originalContentSize.y) > 0.5f))
    {
        trimmedSize = getRotatedLogicalTrimSize(get_region_rect(), _originalContentSize);
    }

    if (_originalContentSize.x <= 0 || _originalContentSize.y <= 0)
        _originalContentSize = trimmedSize;

    if (insets.position.x == 0 && insets.position.y == 0 && insets.size.x == 0 && insets.size.y == 0)
    {
        insets = Rect2(
            _originalContentSize.x / 3.0f,
            _originalContentSize.y / 3.0f,
            _originalContentSize.x / 3.0f,
            _originalContentSize.y / 3.0f);
    }

    if (insets.position.x > _originalContentSize.x)
        insets.position.x = 0;
    if (insets.position.y > _originalContentSize.y)
        insets.position.y = 0;
    if (insets.size.x > _originalContentSize.x)
        insets.size.x = 1;
    if (insets.size.y > _originalContentSize.y)
        insets.size.y = 1;

    insets.position.x -= (_originalContentSize.x - trimmedSize.x) / 2 + _trimOffset.x;
    insets.position.y -= (_originalContentSize.y - trimmedSize.y) / 2 - _trimOffset.y;

    float x1 = MAX(insets.position.x, 0.0f);
    float y1 = MAX(insets.position.y, 0.0f);
    float x2 = MIN(insets.position.x + insets.size.x, trimmedSize.x);
    float y2 = MIN(insets.position.y + insets.size.y, trimmedSize.y);

    _scale9Grid = Rect2(x1, y1, x2 - x1, y2 - y1);
    _scale9Enabled = _scale9Grid.size.x > 0 && _scale9Grid.size.y > 0;
    queue_redraw();
}

void FUISprite::setScaleByTile(bool value)
{
    _scaleByTile = value;
    if (_scaleByTile)
        set_texture_repeat(CanvasItem::TEXTURE_REPEAT_ENABLED);
    else
        set_texture_repeat(CanvasItem::TEXTURE_REPEAT_DISABLED);
    queue_redraw();
}

void FUISprite::setFlippedH(bool v)
{
    set_flip_h(v);
    queue_redraw();
}

void FUISprite::setFlippedV(bool v)
{
    set_flip_v(v);
    queue_redraw();
}

static void draw_texture_region_with_flip(CanvasItem* item, const Ref<Texture2D>& tex,
        const Rect2& dst, const Rect2& src, const Color& modulate, bool flipH, bool flipV)
{
    if (!flipH && !flipV)
    {
        item->draw_texture_rect_region(tex, dst, src, modulate);
        return;
    }

    // FairyGUI keeps the object bounds fixed and flips around the top-left corner.
    const Vector2 scale(flipH ? -1.0f : 1.0f, flipV ? -1.0f : 1.0f);
    const float localX = flipH ? -dst.size.x : 0.0f;
    const float localY = flipV ? -dst.size.y : 0.0f;
    item->draw_set_transform(dst.position, 0.0f, scale);
    item->draw_texture_rect_region(tex, Rect2(localX, localY, dst.size.x, dst.size.y), src, modulate);
    item->draw_set_transform(Vector2(), 0.0f, Vector2(1.0f, 1.0f));
}

// NTexture.GetDrawRect: mirror trimmed sprite position inside the content rect when flipping.
static Rect2 getTrimmedDrawRect(const Vector2& contentSize, const Vector2& drawOrigin,
        const Vector2& trimOffset, const Vector2& trimSize, float sx, float sy, bool flipH, bool flipV)
{
    Vector2 localPos(trimOffset.x * sx, trimOffset.y * sy);
    const Vector2 localSize(trimSize.x * sx, trimSize.y * sy);
    if (flipH)
        localPos.x = contentSize.x - localPos.x - localSize.x;
    if (flipV)
        localPos.y = contentSize.y - localPos.y - localSize.y;
    return Rect2(drawOrigin + localPos, localSize);
}

static Rect2 getRotatedAtlasSrcRect(float ox, float oy, float ow, float oh, const Rect2& atlasRect)
{
    const float atlasX = atlasRect.position.x;
    const float atlasY = atlasRect.position.y;
    const float atlasW = atlasRect.size.x;
    const float atlasH = atlasRect.size.y;

    if (Math::is_equal_approx(ox, 0.0f) && Math::is_equal_approx(oy, 0.0f)
            && Math::is_equal_approx(ow, atlasW) && Math::is_equal_approx(oh, atlasH))
    {
        return Rect2(
            atlasRect.position - Vector2(0.5f, 0.5f),
            Vector2(atlasH + 1.0f, atlasW + 1.0f)
        );
    }

    return Rect2(
        atlasX + oy - 0.5f,
        atlasY + atlasW - ox - ow - 0.5f,
        oh + 1.0f,
        ow + 1.0f
    );
}

static Vector2 getRotatedLogicalTrimSize(const Rect2& atlasRect, const Vector2& originalSize)
{
    if (originalSize.x > 0.0f && originalSize.y > 0.0f
        && Math::is_equal_approx(atlasRect.size.x, originalSize.x)
        && Math::is_equal_approx(atlasRect.size.y, originalSize.y))
    {
        return originalSize;
    }
    return Vector2(atlasRect.size.y, atlasRect.size.x);
}

static void drawRotatedAtlasRegion(CanvasItem* item, const Ref<Texture2D>& tex,
        const Rect2& atlasRect, const Vector2& drawOrigin, const Vector2& contentSize,
        const Vector2& dstPos, float logicalW, float logicalH, float sx, float sy,
        const Color& modulate)
{
    const Rect2 src(
        atlasRect.position - Vector2(0.5f, 0.5f),
        Vector2(atlasRect.size.y + 1.0f, atlasRect.size.x + 1.0f)
    );
    const float dw = logicalW * sx;
    const float dh = logicalH * sy;
    const float dx = dstPos.x - drawOrigin.x;
    const float dy = dstPos.y - drawOrigin.y;
    const Vector2 center = drawOrigin + contentSize * 0.5f;

    item->draw_set_transform(center, Math::deg_to_rad(-90.0f), Vector2(1, 1));
    item->draw_texture_rect_region(tex,
        Rect2(dy - center.y, center.x - dx - dw, dh, dw),
        src, modulate);
    item->draw_set_transform(Vector2(), 0, Vector2(1, 1));
}

void FUISprite::setColor(const Color& c)
{
    _tintColor = Color(c.r, c.g, c.b, 1.0f);
    queue_redraw();
}

void FUISprite::updateDrawMaterial()
{
    if (!_grayed)
    {
        set_material(Ref<Material>());
        return;
    }

    if (_drawMaterial.is_null())
    {
        _drawMaterial.instantiate();
        _drawMaterial->set_shader(get_fui_sprite_shader());
    }
    _drawMaterial->set_shader_parameter("u_grayed", true);
    set_material(_drawMaterial);
}

void FUISprite::applyTintColor()
{
    updateDrawMaterial();
}

void FUISprite::setGrayed(bool value)
{
    if (_grayed == value)
        return;

    _grayed = value;
    if (_grayed)
    {
        updateDrawMaterial();
    }
    else
    {
        set_material(Ref<Material>());
    }
    queue_redraw();
}

void FUISprite::setFillMethod(FillMethod value)
{
    if (_fillMethod != value)
    {
        _fillMethod = value;
        if (_fillMethod != FillMethod::None)
            setupFill();
        else
        {
            _fillVertices.clear();
            _fillTexCoords.clear();
            _fillIndices.clear();
        }
        queue_redraw();
    }
}

void FUISprite::setFillOrigin(FillOrigin value)
{
    if (_fillOrigin != value)
    {
        _fillOrigin = value;
        if (_fillMethod != FillMethod::None)
            setupFill();
        queue_redraw();
    }
}

void FUISprite::setFillClockwise(bool value)
{
    if (_fillClockwise != value)
    {
        _fillClockwise = value;
        if (_fillMethod != FillMethod::None)
            setupFill();
        queue_redraw();
    }
}

void FUISprite::setFillAmount(float value)
{
    if (_fillAmount != value)
    {
        _fillAmount = value;
        if (_fillMethod != FillMethod::None)
            setupFill();
        queue_redraw();
    }
}

void FUISprite::setTexture(const Ref<Texture2D>& t)
{
    _realTexture = t;
    // Keep Sprite2D texture null to block auto-rendering via RenderingServer
    Sprite2D::set_texture(nullptr);
    queue_redraw();
}

void FUISprite::set_content_size(const Vector2& size)
{
    if (_scaleByTile)
        _tileDisplaySize = size;
    else
        _contentSize = size;
    queue_redraw();
}

void FUISprite::setupFill()
{
    if (_fillMethod == FillMethod::Horizontal || _fillMethod == FillMethod::Vertical)
        drawFillHorizontal(); // both bar types handled
    else
        drawFillRadial();
}

// ===== Fill: Horizontal / Vertical progress bar =====

void FUISprite::drawFillHorizontal()
{
    Vector2 minT, maxT;
    bool isHorizontal = (_fillMethod == FillMethod::Horizontal);

    if (isHorizontal)
    {
        if (_fillOrigin == FillOrigin::Left || _fillOrigin == FillOrigin::Top)
        {
            minT = Vector2(0, 0);
            maxT = Vector2(_fillAmount, 1);
        }
        else
        {
            minT = Vector2(1 - _fillAmount, 0);
            maxT = Vector2(1, 1);
        }
    }
    else
    {
        if (_fillOrigin == FillOrigin::Left || _fillOrigin == FillOrigin::Top)
        {
            minT = Vector2(0, 1 - _fillAmount);
            maxT = Vector2(1, 1);
        }
        else
        {
            minT = Vector2(0, 0);
            maxT = Vector2(1, _fillAmount);
        }
    }

    _fillVertices.resize(4);
    _fillTexCoords.resize(4);
    _fillIndices = { 0, 1, 2, 2, 1, 3 };

    // Top-Left
    _fillTexCoords[0] = Vector2(minT.x, maxT.y);
    _fillVertices[0] = _fillTexCoords[0];

    // Bottom-Left
    _fillTexCoords[1] = Vector2(minT.x, minT.y);
    _fillVertices[1] = _fillTexCoords[1];

    // Top-Right
    _fillTexCoords[2] = Vector2(maxT.x, maxT.y);
    _fillVertices[2] = _fillTexCoords[2];

    // Bottom-Right
    _fillTexCoords[3] = Vector2(maxT.x, minT.y);
    _fillVertices[3] = _fillTexCoords[3];
}

void FUISprite::drawFillVertical()
{
    // Same as horizontal, handled by drawFillHorizontal() above
    drawFillHorizontal();
}

// ===== Fill: Radial progress (circle/pie) =====

// FairyGUI fill uses Cocos-style alpha coords: (0,0)=bottom-left, (1,1)=top-right.
// Godot canvas is Y-down: convert alpha.y with (1 - alpha.y).
static Vector2 fillAlphaToDisplay(const Vector2& alpha, const Vector2& origin, const Vector2& size)
{
    return origin + Vector2(alpha.x * size.x, (1.0f - alpha.y) * size.y);
}

static Vector2 fillAlphaToUV(const Vector2& alpha, const Rect2& texRect, const Vector2& texSize)
{
    return Vector2(
            (texRect.position.x + alpha.x * texRect.size.x) / texSize.x,
            (texRect.position.y + (1.0f - alpha.y) * texRect.size.y) / texSize.y);
}

void FUISprite::drawFillRadial()
{
    if (_fillAmount <= 0.0f)
    {
        _fillVertices.clear();
        _fillTexCoords.clear();
        _fillIndices.clear();
        return;
    }

    float angle = 2.0f * Math::PI * (_fillClockwise ? (1.0f - _fillAmount) : _fillAmount);

    Vector2 midpoint(0.5f, 0.5f);
    Vector2 topMid(0.5f, 1.0f);
    // Rotate topMid around midpoint by angle
    float dx = topMid.x - midpoint.x;
    float dy = topMid.y - midpoint.y;
    float cosA = cos(angle);
    float sinA = sin(angle);
    Vector2 percentagePt(midpoint.x + dx * cosA - dy * sinA,
                         midpoint.y + dx * sinA + dy * cosA);

    int index = 0;
    Vector2 hit;

    if (_fillAmount >= 1.0f)
    {
        hit = topMid;
        index = 4;
    }
    else
    {
        float min_t = FLT_MAX;
        for (int i = 0; i <= kProgressTextureCoordsCount; ++i)
        {
            int pIndex = (i + (kProgressTextureCoordsCount - 1)) % kProgressTextureCoordsCount;
            Vector2 edgePtA = boundaryTexCoord(i % kProgressTextureCoordsCount);
            Vector2 edgePtB = boundaryTexCoord(pIndex);

            if (i == 0)
                edgePtB = edgePtA.lerp(edgePtB, 1.0f - midpoint.x);
            else if (i == 4)
                edgePtA = edgePtA.lerp(edgePtB, 1.0f - midpoint.x);

            // Line intersection: midpoint->percentagePt vs edgePtA->edgePtB
            // Solve: midpoint + t*(percentagePt-midpoint) = edgePtA + s*(edgePtB-edgePtA)
            Vector2 pv = percentagePt - midpoint;
            Vector2 ev = edgePtB - edgePtA;
            float cross = pv.x * ev.y - pv.y * ev.x;
            if (fabsf(cross) < 0.00001f) continue;

            float t_val = ((edgePtA.x - midpoint.x) * ev.y - (edgePtA.y - midpoint.y) * ev.x) / cross;
            float s_val = ((edgePtA.x - midpoint.x) * pv.y - (edgePtA.y - midpoint.y) * pv.x) / cross;

            if ((i == 0 || i == 4) && !(0.0f <= s_val && s_val <= 1.0f))
                continue;

            if (t_val >= 0.0f && t_val < min_t)
            {
                min_t = t_val;
                index = i;
            }
        }
        if (min_t == FLT_MAX)
        {
            _fillVertices.clear();
            _fillTexCoords.clear();
            _fillIndices.clear();
            return;
        }
        hit = midpoint + (percentagePt - midpoint) * min_t;
    }

    // Build vertex data
    int vertCount = index + 3;
    int triCount = vertCount - 2;

    _fillVertices.resize(vertCount);
    _fillTexCoords.resize(vertCount);
    _fillIndices.resize(triCount * 3);

    _fillVertices[0] = midpoint;
    _fillTexCoords[0] = midpoint;
    _fillVertices[1] = topMid;
    _fillTexCoords[1] = topMid;

    for (int i = 0; i < index; i++)
    {
        Vector2 pt = boundaryTexCoord(i);
        _fillVertices[i + 2] = pt;
        _fillTexCoords[i + 2] = pt;
    }

    _fillVertices[vertCount - 1] = hit;
    _fillTexCoords[vertCount - 1] = hit;

    for (int i = 0; i < triCount; i++)
    {
        _fillIndices[i * 3] = 0;
        _fillIndices[i * 3 + 1] = i + 1;
        _fillIndices[i * 3 + 2] = i + 2;
    }
}

Vector2 FUISprite::boundaryTexCoord(char index) const
{
    if (index < kProgressTextureCoordsCount)
    {
        if (!_fillClockwise)
        {
            return Vector2(
                (kProgressTextureCoords >> (7 - (index << 1))) & 1 ? 1.0f : 0.0f,
                (kProgressTextureCoords >> (7 - ((index << 1) + 1))) & 1 ? 1.0f : 0.0f);
        }
        else
        {
            return Vector2(
                (kProgressTextureCoords >> ((index << 1) + 1)) & 1 ? 1.0f : 0.0f,
                (kProgressTextureCoords >> (index << 1)) & 1 ? 1.0f : 0.0f);
        }
    }
    return Vector2();
}

// ===== Main draw =====

void FUISprite::_draw()
{
    if (_realTexture.is_null() || _realTexture == _empty)
        return;

    Ref<Texture2D> tex = _realTexture;
    const Color drawModulate = _grayed ? _tintColor : Color(_tintColor.r, _tintColor.g, _tintColor.b, get_modulate().a);

    Vector2 contentSize = _contentSize.x > 0 ? _contentSize : get_rect().size;
    Rect2 texRect = get_region_rect();
    if (texRect.size.x <= 0 || texRect.size.y <= 0)
        return; // region not set yet — nothing to draw

    const Vector2 drawOrigin = get_offset();
    const bool flipH = is_flipped_h();
    const bool flipV = is_flipped_v();

    if (_fillMethod != FillMethod::None)
    {
        if (_fillIndices.empty())
            return;

        const Color color = drawModulate;
        const Vector2 texSize = tex->get_size();
        if (texSize.x <= 0.0f || texSize.y <= 0.0f)
            return;

        auto map_vertex = [&](int idx) -> Vector2 {
            return fillAlphaToDisplay(_fillTexCoords[idx], drawOrigin, contentSize);
        };
        auto map_uv = [&](int idx) -> Vector2 {
            return fillAlphaToUV(_fillTexCoords[idx], texRect, texSize);
        };

        // Radial fill uses a triangle fan from alpha-space center (0.5, 0.5); each tri: center + arc edge.
        for (size_t i = 0; i < _fillIndices.size() / 3; i++)
        {
            PackedVector2Array tri;
            PackedVector2Array uvs;
            tri.resize(3);
            uvs.resize(3);
            for (int j = 0; j < 3; j++)
            {
                const int idx = _fillIndices[i * 3 + j];
                tri.set(j, map_vertex(idx));
                uvs.set(j, map_uv(idx));
            }
            draw_polygon(tri, Vector<Color>{ color, color, color }, uvs, tex);
        }
        return;
    }

    if (_scale9Enabled)
    {
        drawScale9(drawModulate);
        return;
    }

    if (_scaleByTile)
    {
        drawTile(drawModulate);
        return;
    }

    Vector2 origSize = _originalContentSize;
    if (origSize.x <= 0.0f || origSize.y <= 0.0f)
        origSize = contentSize;
    const float sx = origSize.x > 0.0f ? (contentSize.x / origSize.x) : 1.0f;
    const float sy = origSize.y > 0.0f ? (contentSize.y / origSize.y) : 1.0f;
    Vector2 trimSize = texRect.size;
    if (_rotated)
        trimSize = getRotatedLogicalTrimSize(texRect, _originalContentSize);
    const bool hasAtlasTrim = _originalContentSize.x > 0.0f && _originalContentSize.y > 0.0f
        && trimSize.x > 0.0f && trimSize.y > 0.0f
        && (Math::abs(_originalContentSize.x - trimSize.x) > 0.5f
            || Math::abs(_originalContentSize.y - trimSize.y) > 0.5f);

    // Normal sprite draw
    if (_rotated)
    {
        Vector2 logicalTrim = trimSize;
        if (logicalTrim.x <= 0.0f || logicalTrim.y <= 0.0f)
            logicalTrim = texRect.size;

        const Vector2 dstPos = drawOrigin + Vector2(_trimOffset.x * sx, _trimOffset.y * sy);
        drawRotatedAtlasRegion(this, tex, texRect, drawOrigin, contentSize,
            dstPos, logicalTrim.x, logicalTrim.y, sx, sy, drawModulate);
    }
    else if (hasAtlasTrim)
    {
        const Rect2 dst = getTrimmedDrawRect(contentSize, drawOrigin, _trimOffset, trimSize, sx, sy, flipH, flipV);
        draw_texture_region_with_flip(this, tex, dst, texRect, drawModulate, flipH, flipV);
    }
    else
    {
        draw_texture_region_with_flip(this, tex,
            Rect2(drawOrigin, contentSize),
            texRect,
            drawModulate, flipH, flipV);
    }
}

static void draw_tile_region(CanvasItem* item, const Ref<Texture2D>& tex,
        const Vector2& dst, float rw, float rh, const Rect2& src, const Color& modulate,
        bool flipH, bool flipV)
{
    if (!flipH && !flipV)
    {
        item->draw_texture_rect_region(tex, Rect2(dst.x, dst.y, rw, rh), src, modulate);
        return;
    }

    const Vector2 scale(flipH ? -1.0f : 1.0f, flipV ? -1.0f : 1.0f);
    const float localX = flipH ? -rw : 0.0f;
    const float localY = flipV ? -rh : 0.0f;
    item->draw_set_transform(dst, 0.0f, scale);
    item->draw_texture_rect_region(tex, Rect2(localX, localY, rw, rh), src, modulate);
    item->draw_set_transform(Vector2(), 0.0f, Vector2(1.0f, 1.0f));
}

void FUISprite::drawTile(const Color& drawModulate)
{
    if (_realTexture.is_null())
        return;

    Rect2 tileSrc = get_region_rect();
    if (tileSrc.size.x <= 0.0f || tileSrc.size.y <= 0.0f)
        return;

    Vector2 displaySize = _tileDisplaySize;
    if (displaySize.x <= 0.0f || displaySize.y <= 0.0f)
        displaySize = _contentSize.x > 0.0f ? _contentSize : get_rect().size;
    if (displaySize.x <= 0.0f || displaySize.y <= 0.0f)
        return;

    const Vector2 topLeft = get_offset();
    const bool flipH = is_flipped_h();
    const bool flipV = is_flipped_v();
    const float tw = tileSrc.size.x;
    const float th = tileSrc.size.y;
    const float endX = displaySize.x;
    const float endY = displaySize.y;

    float y = 0.0f;
    while (y < endY)
    {
        const float rh = MIN(th, endY - y);
        float x = 0.0f;
        while (x < endX)
        {
            const float rw = MIN(tw, endX - x);
            const float srcX = (flipH && rw < tw) ? tileSrc.position.x + tw - rw : tileSrc.position.x;
            const float srcY = (flipV && rh < th) ? tileSrc.position.y + th - rh : tileSrc.position.y;
            const Rect2 src(srcX, srcY, rw, rh);
            draw_tile_region(this, _realTexture,
                topLeft + Vector2(x, y), rw, rh, src, drawModulate, flipH, flipV);
            x += tw;
        }
        y += th;
    }
}

void FUISprite::drawScale9(const Color& drawModulate)
{
    if (_realTexture.is_null()) return;

    Ref<Texture2D> tex = _realTexture;

    Vector2 contentSize = _contentSize.x > 0 ? _contentSize : get_rect().size;
    Rect2 texRect = get_region_rect();
    if (texRect.size.x == 0)
        texRect.size = tex->get_size();

    const Vector2 drawOrigin = get_offset();
    const bool flipH = is_flipped_h();
    const bool flipV = is_flipped_v();

    const float srcX = texRect.position.x;
    const float srcY = texRect.position.y;
    const float sourceW = texRect.size.x;
    const float sourceH = texRect.size.y;
    const float contentW = contentSize.x;
    const float contentH = contentSize.y;

    const Rect2& gridRect = _scale9Grid;
    const float gridRight = gridRect.position.x + gridRect.size.x;
    const float gridBottom = gridRect.position.y + gridRect.size.y;

    float gridX[4];
    gridX[0] = 0.0f;
    if (contentW >= (sourceW - gridRect.size.x))
    {
        gridX[1] = gridRect.position.x;
        gridX[2] = contentW - (sourceW - gridRight);
        gridX[3] = contentW;
    }
    else
    {
        const float tmp = gridRect.position.x / (sourceW - gridRight);
        const float edge = contentW * tmp / (1.0f + tmp);
        gridX[1] = edge;
        gridX[2] = edge;
        gridX[3] = contentW;
    }

    float gridY[4];
    gridY[0] = 0.0f;
    if (contentH >= (sourceH - gridRect.size.y))
    {
        gridY[1] = gridRect.position.y;
        gridY[2] = contentH - (sourceH - gridBottom);
        gridY[3] = contentH;
    }
    else
    {
        const float tmp = gridRect.position.y / (sourceH - gridBottom);
        const float edge = contentH * tmp / (1.0f + tmp);
        gridY[1] = edge;
        gridY[2] = edge;
        gridY[3] = contentH;
    }

    float gridTexX[4] = {
        srcX,
        srcX + gridRect.position.x,
        srcX + gridRight,
        srcX + sourceW,
    };
    float gridTexY[4] = {
        srcY,
        srcY + gridRect.position.y,
        srcY + gridBottom,
        srcY + sourceH,
    };

    auto swapCapBandSizes = [](float grid[4]) {
        const float cap0 = grid[1] - grid[0];
        const float mid = grid[2] - grid[1];
        const float cap2 = grid[3] - grid[2];
        grid[0] = 0.0f;
        grid[1] = cap2;
        grid[2] = cap2 + mid;
        grid[3] = cap2 + mid + cap0;
    };
    if (flipV)
        swapCapBandSizes(gridY);
    if (flipH)
        swapCapBandSizes(gridX);

    auto resolveScale9Patch = [&](int row, int col, int& srcRow, int& srcCol, bool& patchFlipH, bool& patchFlipV) {
        srcRow = row;
        srcCol = col;
        if (flipV)
        {
            if (row != 1)
                srcRow = 2 - row;
            patchFlipV = true;
        }
        if (flipH)
        {
            if (col != 1)
                srcCol = 2 - col;
            patchFlipH = true;
        }
    };

    auto drawPatch = [&](const Rect2& dst, const Rect2& src, bool patchFlipH, bool patchFlipV) {
        if (src.size.x <= 0.0f || src.size.y <= 0.0f)
            return;

        if (patchFlipH || patchFlipV)
            draw_texture_region_with_flip(this, tex, dst, src, drawModulate, patchFlipH, patchFlipV);
        else
            draw_texture_rect_region(tex, dst, src, drawModulate);
    };

    if (_rotated)
    {
        Vector2 center = drawOrigin + contentSize * 0.5f;
        draw_set_transform(center, Math::deg_to_rad(-90.0f), Vector2(1, 1));

        for (int row = 0; row < 3; row++)
        {
            for (int col = 0; col < 3; col++)
            {
                int srcRow = row;
                int srcCol = col;
                bool patchFlipH = false;
                bool patchFlipV = false;
                resolveScale9Patch(row, col, srcRow, srcCol, patchFlipH, patchFlipV);

                const float sx = gridTexX[srcCol];
                const float sy = gridTexY[srcRow];
                const float sw = gridTexX[srcCol + 1] - sx;
                const float sh = gridTexY[srcRow + 1] - sy;

                const float localOx = gridTexX[srcCol] - srcX;
                const float localOy = gridTexY[srcRow] - srcY;
                Rect2 src = getRotatedAtlasSrcRect(localOx, localOy, sw, sh, texRect);

                const float dx = gridX[col];
                const float dy = gridY[row];
                const float dw = gridX[col + 1] - dx;
                const float dh = gridY[row + 1] - dy;
                if (dw <= 0.0f || dh <= 0.0f)
                    continue;

                Rect2 localDst(dy - center.y, center.x - dx - dw, dh, dw);
                drawPatch(localDst, src, patchFlipH, patchFlipV);
            }
        }

        draw_set_transform(Vector2(), 0, Vector2(1, 1));
        return;
    }

    for (int row = 0; row < 3; row++)
    {
        for (int col = 0; col < 3; col++)
        {
            const float dx = gridX[col];
            const float dy = gridY[row];
            const float dw = gridX[col + 1] - dx;
            const float dh = gridY[row + 1] - dy;
            if (dw <= 0.0f || dh <= 0.0f)
                continue;

            int srcRow = row;
            int srcCol = col;
            bool patchFlipH = false;
            bool patchFlipV = false;
            resolveScale9Patch(row, col, srcRow, srcCol, patchFlipH, patchFlipV);

            const float sx = gridTexX[srcCol];
            const float sy = gridTexY[srcRow];
            const float sw = gridTexX[srcCol + 1] - sx;
            const float sh = gridTexY[srcRow + 1] - sy;

            const Rect2 dst(drawOrigin.x + dx, drawOrigin.y + dy, dw, dh);
            const Rect2 src(sx - 0.5f, sy - 0.5f, sw + 1.0f, sh + 1.0f);
            drawPatch(dst, src, patchFlipH, patchFlipV);
        }
    }
}

NS_FGUI_END
