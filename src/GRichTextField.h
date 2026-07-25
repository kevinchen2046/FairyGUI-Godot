#ifndef __GRICHTEXTFIELD_H__
#define __GRICHTEXTFIELD_H__

// cocos2d.h removed - see godot_types.h
#include "FairyGUIMacros.h"
#include "GTextField.h"
#include "display/FUIRichText.h"

NS_FGUI_BEGIN

/// @brief 富文本字段。
/// GRichTextField 是支持富文本（HTML 样式）和 UBB 语法的文本组件。
/// 支持：
/// - 图文混排（通过 HtmlElement 和 HtmlObject）
/// - 链接点击检测
/// - 锚文本样式设置
/// - 内嵌控件（通过 getControl 获取）
class GRichTextField : public GTextField
{
    GDCLASS(GRichTextField, GTextField)

public:
    GRichTextField();
    virtual ~GRichTextField();

    FAIRYGUI_CREATE(GRichTextField)

    static void _bind_methods();

    virtual void setAutoSize(AutoSizeType value) override;

    virtual bool isSingleLine() const override { return _singleLine; }
    virtual void setSingleLine(bool value) override;

    virtual TextFormat* getTextFormat() const override { return _richText->getTextFormat(); }
    virtual void applyTextFormat() override;

    virtual Vector2 getTextSize() override;

    /** 通过名称获取内嵌的 Html 控件对象。 */
    HtmlObject* getControl(const std::string& pName) const;

    /** 是否显示链接下划线。 */
    bool isAnchorTextUnderline() const;
    void setAnchorTextUnderline(bool value);
    /** 获取链接文本颜色。 */
    Color getAnchorFontColor() const;
    /** 设置链接文本颜色。 */
    void setAnchorFontColor(const Color& value);

    virtual GObject* hitTest(const Vector2& worldPoint, const Camera2D* camera) override;
protected:
    virtual void handleInit() override;
    virtual void handleSizeChanged() override;
    virtual void handleGrayedChanged() override;

    virtual void setTextFieldText() override;
    virtual void updateSize() override;

private:
    FUIRichText* _richText;  ///< 底层富文本渲染节点。
    bool _updatingSize;
    bool _singleLine;
};

NS_FGUI_END

#endif
