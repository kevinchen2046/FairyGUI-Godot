#ifndef __GLOADER3D_H__
#define __GLOADER3D_H__

#include "FairyGUIMacros.h"
#include "GObject.h"
#include "godot_types.h"

#ifndef SPINE_GODOT_DISABLED
class SpineSprite;
#endif

NS_FGUI_BEGIN

class FUIContainer;
class PackageItem;

/// @brief 3D 内容加载器，用于在 FairyGUI 中嵌入 3D 模型或 Spine 动画。
///
/// GLoader3D 继承自 GObject，可以加载和显示以下内容：
/// - 3D 模型（通过 Node 嵌入）
/// - Spine 骨骼动画
/// - 包中定义的 MovieClip 等其他资源
///
/// 支持对齐模式 (align)、填充模式 (fill)、动画控制等。
class GLoader3D : public GObject
{
    GDCLASS(GLoader3D, GuiObject)

public:
    GLoader3D();
    virtual ~GLoader3D();

    FAIRYGUI_CREATE(GLoader3D)

    static void _bind_methods();

    void dispose() override;

    /// @brief 获取加载的 URL
    const std::string& getURL() const { return _url; }

    /// @brief 设置加载的 URL
    void setURL(const std::string& value);

    virtual const std::string& getIcon() const override { return _url; }
    virtual void setIcon(const std::string& value) override { setURL(value); }

    void gd_setURL(const String& value);
    String gd_getURL() const;

    /// @brief 获取水平对齐方式
    AlignType getAlign() const { return _align; }

    /// @brief 设置水平对齐方式
    void setAlign(AlignType value);
    void gd_setAlign(int value);
    int gd_getAlign() const;

    /// @brief 获取垂直对齐方式
    VertAlignType getVerticalAlign() const { return _verticalAlign; }

    /// @brief 设置垂直对齐方式
    void setVerticalAlign(VertAlignType value);
    void gd_setVerticalAlign(int value);
    int gd_getVerticalAlign() const;

    /// @brief 获取是否自动调整大小
    bool getAutoSize() const { return _autoSize; }

    /// @brief 设置是否自动调整大小
    void setAutoSize(bool value);

    /// @brief 获取填充模式
    LoaderFillType getFill() const { return _fill; }

    /// @brief 设置填充模式
    void setFill(LoaderFillType value);
    void gd_setFillType(int value);
    int gd_getFillType() const;

    /// @brief 是否仅在需要缩小时才缩小（不放大）
    bool isShrinkOnly() const { return _shrinkOnly; }

    /// @brief 设置是否仅缩小
    void setShrinkOnly(bool value);

    /// @brief 获取内容颜色（色调）
    Color getColor() const;

    /// @brief 设置内容颜色（色调）
    void setColor(const Color& value);

    /// @brief 动画是否正在播放
    bool isPlaying() const { return _playing; }

    /// @brief 设置动画播放状态
    void setPlaying(bool value);

    /// @brief 获取当前帧
    int getFrame() const { return _frame; }

    /// @brief 设置当前帧
    void setFrame(int value);

    /// @brief 获取当前播放的动画名称
    const std::string& getAnimationName() const { return _animationName; }

    /// @brief 设置动画名称
    void setAnimationName(const std::string& value);
    void gd_setAnimationName(const String& value);
    String gd_getPlayingAnimationName() const;

    /// @brief 获取皮肤名称
    const std::string& getSkinName() const { return _skinName; }

    /// @brief 设置皮肤名称
    void setSkinName(const std::string& value);
    void gd_setSkinName(const String& value);
    String gd_getSkinName() const;

    /// @brief 动画是否循环播放
    bool isLoop() const { return _loop; }

    /// @brief 设置动画是否循环播放
    void setLoop(bool value);

    /// @brief 播放指定动画
    /// @param animName 动画名称（为空则播放默认动画）
    void play(const std::string& animName = EMPTY_STRING);

    /// @brief 停止动画播放
    void stop();
    void gd_play(const String& animName);

    /// @brief 获取嵌入的内容节点
    Node* getContent() const;

    /// @brief 设置嵌入的内容节点
    void setContent(Node* value);

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    virtual void handleInit() override;
    virtual void handleSizeChanged() override;
    virtual void _enter_tree() override;
    virtual void applyPivotOffset() override;
    virtual void handleGrayedChanged() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual GObject* hitTest(const Vector2& worldPoint, const Camera2D* camera) override;

private:
    void loadContent();
    void loadFromPackage();
    void loadExternal();
    void clearContent();
    void updateLayout();
    void onChange();
    void onChangeSpine();
    void setErrorState();
    void clearErrorState();

#ifndef SPINE_GODOT_DISABLED
    bool loadSpineContent();
    bool loadSpineFromFiles(const std::string& skelFile, const Vector2& anchor);
#endif

    std::string _url;
    AlignType _align;
    VertAlignType _verticalAlign;
    bool _autoSize;
    LoaderFillType _fill;
    bool _shrinkOnly;
    bool _updatingLayout;
    PackageItem* _contentItem;
    bool _playing;
    int _frame;
    bool _loop;
    std::string _animationName;
    std::string _skinName;
    Color _color;

    FUIContainer* _container;
    Node* _content;

#ifndef SPINE_GODOT_DISABLED
    SpineSprite* _spineSprite;
#endif

    Node* getContentNode() const;
};

NS_FGUI_END

#endif
