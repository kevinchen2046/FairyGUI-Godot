#ifndef __GLOADER_H__
#define __GLOADER_H__

// cocos2d.h removed - see godot_types.h
#include "FairyGUIMacros.h"
#include "GObject.h"
#include "PackageItem.h"
#include "ActionMovieClip.h"

NS_FGUI_BEGIN

class GComponent;
class FUISprite;

/// @brief 加载器组件。
/// GLoader 可以根据 URL 加载并显示图片、动画、组件等内容。
/// 支持：
/// - 图片加载（支持对齐和缩放模式）
/// - 动画（MovieClip）加载和播放
/// - 组件加载（外层包装）
/// - 填充模式（进度条效果）
/// - 自动尺寸适配
class GLoader : public GObject
{
    GDCLASS(GLoader, GuiObject)

public:
    GLoader();
    virtual ~GLoader();

    FAIRYGUI_CREATE(GLoader)

    static void _bind_methods();

    /** 获取加载内容 URL。格式：ui://包名/资源名 */
    const std::string& getURL() const { return _url; }
    /** 设置加载内容 URL。 */
    void setURL(const std::string& value);

    void gd_setURL(const String& value);
    String gd_getURL() const;

    virtual const std::string& getIcon() const override { return _url; }
    virtual void setIcon(const std::string& value) override { setURL(value); }

    /** 获取水平对齐方式。 */
    AlignType getAlign() const { return _align; }
    void setAlign(AlignType value);
    int gd_getAlign() const { return static_cast<int>(getAlign()); }
    void gd_setAlign(int value) { setAlign(static_cast<AlignType>(value)); }

    /** 获取垂直对齐方式。 */
    VertAlignType getVerticalAlign() const { return _verticalAlign; }
    void setVerticalAlign(VertAlignType value);
    int gd_getVerticalAlign() const { return static_cast<int>(getVerticalAlign()); }
    void gd_setVerticalAlign(int value) { setVerticalAlign(static_cast<VertAlignType>(value)); }

    /** 是否自动调整尺寸（根据加载内容自适应）。 */
    bool getAutoSize() const { return _autoSize; }
    void setAutoSize(bool value);

    /** 获取填充模式（内容在 Loader 中的缩放方式）。 */
    LoaderFillType getFill() const { return _fill; }
    void setFill(LoaderFillType value);
    int gd_getFillType() const { return static_cast<int>(getFill()); }
    void gd_setFillType(int value) { setFill(static_cast<LoaderFillType>(value)); }

    /** 是否仅在需要时缩小（不放大）。 */
    bool isShrinkOnly() const { return _shrinkOnly; }
    void setShrinkOnly(bool value);

    /** 获取加载内容的原始尺寸。 */
    Vector2 getContentSize();

    /** 获取颜色。 */
    Color getColor() const;
    /** 设置颜色。 */
    void setColor(const Color& value);

    /** 是否正在播放动画。 */
    bool isPlaying() const { return _playing; }
    /** 设置是否播放动画。 */
    void setPlaying(bool value);

    /** 获取当前动画帧。 */
    int getFrame() const;
    /** 设置当前动画帧。 */
    void setFrame(int value);

    /** 获取填充方法（进度条效果）。 */
    FillMethod getFillMethod() const;
    void setFillMethod(FillMethod value);
    int gd_getFillMethod() const { return static_cast<int>(getFillMethod()); }
    void gd_setFillMethod(int value) { setFillMethod(static_cast<FillMethod>(value)); }

    /** 获取填充原点。 */
    FillOrigin getFillOrigin() const;
    void setFillOrigin(FillOrigin value);
    int gd_getFillOrigin() const { return static_cast<int>(getFillOrigin()); }
    void gd_setFillOrigin(int value) { setFillOrigin(static_cast<FillOrigin>(value)); }

    /** 是否顺时针填充。 */
    bool isFillClockwise() const;
    void setFillClockwise(bool value);

    /** 获取填充量（0-1）。 */
    float getFillAmount() const;
    void setFillAmount(float value);

    /** 获取加载的组件（当加载内容为组件时）。 */
    GComponent* getComponent() const { return _content2; }
    Ref<GComponent> gd_getComponent() const;

    /** 直接设置/获取纹理（绕过 URL 加载机制）。 */
    Ref<Texture2D> getTexture() const;
    void setTexture(const Ref<Texture2D>& value);

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    virtual void handleInit() override;
    virtual void handleSizeChanged() override;
    virtual void _enter_tree() override;
    virtual void applyPivotOffset() override;
    virtual void handleGrayedChanged() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual GObject* hitTest(const Vector2 & worldPoint, const Camera2D * camera) override;

    virtual void loadExternal();
    virtual void freeExternal(ImageFrame* spriteFrame);
    void onExternalLoadSuccess(ImageFrame* spriteFrame);
    void onExternalLoadFailed();

private:
    void loadContent();
    void loadFromPackage();
    void clearContent();
    void updateLayout();
    void setErrorState();
    void clearErrorState();
    void updateMovieClipProcess();

    std::string _url;             ///< 加载内容 URL。
    AlignType _align;             ///< 水平对齐。
    VertAlignType _verticalAlign; ///< 垂直对齐。
    bool _autoSize;               ///< 是否自动尺寸。
    LoaderFillType _fill;         ///< 填充模式。
    bool _shrinkOnly;             ///< 是否仅缩小。
    bool _updatingLayout;
    PackageItem* _contentItem;    ///< 内容资源项。
    int _contentStatus;
    bool _playing;                ///< 是否播放中。
    int _frame;                   ///< 当前帧。

    FUISprite* _content;          ///< 图片内容节点。
    GComponent* _content2;        ///< 组件内容。
    ActionMovieClip* _playAction; ///< 动画播放控制器。
    ImageFrame* _externalFrame;   ///< 外部加载的帧数据。
    Vector2 _sourceSize;          ///< 源素材尺寸。
};

NS_FGUI_END

#endif
