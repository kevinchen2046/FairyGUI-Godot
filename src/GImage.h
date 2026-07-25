#ifndef __GIMAGE_H__
#define __GIMAGE_H__

#include "FairyGUIMacros.h"
#include "GObject.h"
// cocos2d.h removed - see godot_types.h
#include "display/FUISprite.h"

NS_FGUI_BEGIN

class FUISprite;

/// @brief 图片组件。
/// GImage 用于显示纹理图片，支持以下功能：
/// - 翻转（水平/垂直）
/// - 颜色调节
/// - 填充模式（进度条/冷却效果）
/// - 九宫格（自动从包中读取 scale9Grid）
class GImage : public GObject
{
    GDCLASS(GImage, GuiObject)

public:
    GImage();
    virtual ~GImage();

    FAIRYGUI_CREATE(GImage)

    static void _bind_methods();

    /** 获取翻转模式。 */
    FlipType getFlip() const;
    /** 设置翻转模式。 */
    void setFlip(FlipType value);

    void gd_setFlip(int value);
    int gd_getFlip() const;

    /** 获取颜色。 */
    Color getColor() const;
    /** 设置颜色（叠加到纹理上）。 */
    void setColor(const Color& value);

    /** 获取填充方法。 */
    FillMethod getFillMethod() const;
    /** 设置填充方法。 */
    void setFillMethod(FillMethod value);

    void gd_setFillMethod(int value);
    int gd_getFillMethod() const;

    /** 获取填充原点。 */
    FillOrigin getFillOrigin() const;
    /** 设置填充原点。 */
    void setFillOrigin(FillOrigin value);

    void gd_setFillOrigin(int value);
    int gd_getFillOrigin() const;

    /** 是否顺时针填充。 */
    bool isFillClockwise() const;
    void setFillClockwise(bool value);

    /** 获取填充量（0-1）。 */
    float getFillAmount() const;
    /** 设置填充量（0-1）。 */
    void setFillAmount(float value);

    virtual void constructFromResource() override;

    /** 直接设置/获取纹理（绕过 URL 加载机制）。 */
    Ref<Texture2D> getTexture() const;
    void setTexture(const Ref<Texture2D>& value);

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    virtual void handleInit() override;
    virtual void handleSizeChanged() override;
    virtual void applyPivotOffset() override;
    virtual void handleGrayedChanged() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;

private:
    FUISprite* _content;  ///< 底层精灵渲染节点。
};

NS_FGUI_END

#endif
