#ifndef __FUISPRITE_H__
#define __FUISPRITE_H__

#include "FairyGUIMacros.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/material.hpp>
#include <godot_cpp/classes/shader_material.hpp>
#else
#include "scene/resources/material.h"
#endif
#include <functional>

NS_FGUI_BEGIN

/// @brief FairyGUI 精灵渲染节点，继承自 Godot 的 Sprite2D。
///
/// FUISprite 是 FairyGUI 中最基础的图像显示单元，扩展了 Sprite2D 的功能：
/// - 九宫格缩放 (Scale9Grid)
/// - 平铺模式 (Tile)
/// - 填充模式 (FillMethod)：水平/垂直/径向填充
/// - 灰度效果 (Grayed)
/// - 自定义着色器材质 (ShaderMaterial)
/// - 翻转 (FlippedH/V)
///
/// 所有 GImage、GLoader 等组件底层都使用 FUISprite 渲染图像。
class FUISprite : public Sprite2D
{
    GDCLASS(FUISprite, Sprite2D)

public:
    FUISprite();
    virtual ~FUISprite();

    static FUISprite* create();

    /// @brief 清除当前显示内容
    void clearContent();

    /// @brief 设置九宫格缩放区域
    void setScale9Grid(const Rect2& value);

    /// @brief 设置是否使用平铺模式缩放
    void setScaleByTile(bool value);

    /// @brief 是否使用平铺模式缩放
    bool isScaleByTile() const { return _scaleByTile; }

    /// @brief 设置纹理是否使用平滑（线性）过滤
    void setSmoothing(bool value);

    /// @brief 是否使用平滑（线性）纹理过滤
    bool isSmoothing() const { return _smoothing; }

    /// @brief 设置为灰度显示
    void setGrayed(bool value);

    /// @brief 是否为灰度显示
    bool isGrayed() const { return _grayed; }

    // ---- Sprite2D 封装方法 ----

    /// @brief 设置水平翻转
    void setFlippedH(bool v);

    /// @brief 是否水平翻转
    bool isFlippedH() const { return is_flipped_h(); }

    /// @brief 设置垂直翻转
    void setFlippedV(bool v);

    /// @brief 是否垂直翻转
    bool isFlippedV() const { return is_flipped_v(); }

    /// @brief 获取色调颜色
    Color getColor() const { return _tintColor; }

    /// @brief 设置色调颜色
    void setColor(const Color& c);

    /// @brief 设置纹理区域
    void setRegion(const Rect2& r) { set_region_rect(r); }

    /// @brief 获取纹理区域
    Rect2 getRegion() const { return get_region_rect(); }

    /// @brief 设置图像帧信息（原始尺寸和裁剪偏移）
    void setImageFrameInfo(const Vector2& originalSize, const Vector2& trimOffset);

    /// @brief 设置是否启用纹理区域
    void setRegionEnabled(bool v) { set_region_enabled(v); }

    /// @brief 是否启用纹理区域
    bool isRegionEnabled() const { return is_region_enabled(); }

    /// @brief 设置纹理
    void setTexture(const Ref<Texture2D>& t);

    /// @brief 获取纹理
    Ref<Texture2D> getTexture() const { return get_texture(); }

    /// @brief 获取真实纹理（内部存储）
    Ref<Texture2D> getRealTexture() const { return _realTexture; }

    // ---- 填充方法属性 ----

    /// @brief 获取填充方法（水平/垂直/径向等）
    FillMethod getFillMethod() const { return _fillMethod; }

    /// @brief 设置填充方法
    void setFillMethod(FillMethod value);
    int gd_getFillMethod() const { return static_cast<int>(getFillMethod()); }
    void gd_setFillMethod(int value) { setFillMethod(static_cast<FillMethod>(value)); }

    /// @brief 获取填充起点
    FillOrigin getFillOrigin() const { return _fillOrigin; }

    /// @brief 设置填充起点
    void setFillOrigin(FillOrigin value);
    int gd_getFillOrigin() const { return static_cast<int>(getFillOrigin()); }
    void gd_setFillOrigin(int value) { setFillOrigin(static_cast<FillOrigin>(value)); }

    /// @brief 是否顺时针填充
    bool isFillClockwise() const { return _fillClockwise; }

    /// @brief 设置是否顺时针填充
    void setFillClockwise(bool value);

    /// @brief 获取填充量 (0~1)
    float getFillAmount() const { return _fillAmount; }

    /// @brief 设置填充量 (0~1)
    void setFillAmount(float value);

    // ---- 内容尺寸 ----

    /// @brief 设置内容尺寸（覆盖 Godot 方法）
    void set_content_size(const Vector2& size);

    /// @brief 设置内容尺寸
    void setContentSize(const Vector2& size) { _contentSize = size; }

    /// @brief 获取内容尺寸
    const Vector2& getContentSize() const { return _contentSize; }

    /// @brief 设置是否旋转
    void setRotated(bool v) { _rotated = v; }

    /// @brief 是否旋转
    bool isRotated() const { return _rotated; }

    /// @brief 清理静态引用
    static void clearStaticRefs();

    /// @brief 处理回调（每帧调用）
    std::function<void(float)> _processCallback;

    static void _bind_methods();
    void _draw();

protected:
    void _notification(int p_what);

private:
    void applyTintColor();
    void updateDrawMaterial();
    void setupFill();
    void drawFillHorizontal();
    void drawFillVertical();
    void drawFillRadial();
    void drawScale9(const Color& drawModulate);
    void drawTile(const Color& drawModulate);

    Vector2 boundaryTexCoord(char index) const;

    FillMethod _fillMethod;
    FillOrigin _fillOrigin;
    float _fillAmount;
    bool _fillClockwise;
    bool _scaleByTile;
    bool _smoothing;
    bool _grayed;
    bool _rotated;
    Color _tintColor;
    Ref<ShaderMaterial> _drawMaterial;

    /// @brief 真实纹理引用（保持 Sprite2D::texture 为空以抑制自动渲染）
    Ref<Texture2D> _realTexture;

    // 九宫格数据
    bool _scale9Enabled;
    Rect2 _scale9Grid;
    Vector2 _originalContentSize;
    Vector2 _trimOffset;
    Vector2 _contentSize;
    Vector2 _tileDisplaySize;

    // 填充模式顶点数据（径向填充用）
    std::vector<Vector2> _fillVertices;
    std::vector<Vector2> _fillTexCoords;
    std::vector<int> _fillIndices;

    /// @brief 空白纹理静态引用
    static Ref<Texture2D> _empty;
};

NS_FGUI_END

#endif
