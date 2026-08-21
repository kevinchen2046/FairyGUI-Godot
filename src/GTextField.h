#ifndef __GTEXTFIELD_H__
#define __GTEXTFIELD_H__

#include "FairyGUIMacros.h"
#include "GObject.h"
#include "display/FUILabel.h"
#include "display/FUIRichText.h"
#include "godot_types.h"

NS_FGUI_BEGIN

/// @brief 文本字段基类。
/// GTextField 是所有文本组件的基类，提供：
/// - 文本内容设置和获取
/// - UBB 语法支持（富文本标记）
/// - 自动尺寸模式
/// - 模板变量替换
/// - 颜色/字体大小设置
class GTextField : public GObject
{
    GDCLASS(GTextField, GuiObject)

public:
    GTextField();
    virtual ~GTextField();

    static void _bind_methods();

    virtual const std::string& getText() const override { return _text; }
    virtual void setText(const std::string& value) override;

    /** 通过字典设置模板变量（批量替换 {字段名} 格式的占位符）。 */
    void gd_setTemplateVars(const Dictionary& vars);

    /** 是否启用 UBB 语法解析。 */
    bool isUBBEnabled() const { return _ubbEnabled; }
    virtual void setUBBEnabled(bool value);

    /** 获取自动尺寸模式。 */
    AutoSizeType getAutoSize() const { return _autoSize; }
    virtual void setAutoSize(AutoSizeType value) {};
    int gd_getAutoSize() const { return static_cast<int>(getAutoSize()); }
    void gd_setAutoSize(int value) { setAutoSize(static_cast<AutoSizeType>(value)); }

    /** 是否为单行模式。 */
    virtual bool isSingleLine() const { return false; }
    virtual void setSingleLine(bool value) {};

    /** 获取文本格式对象（纯虚函数）。 */
    virtual TextFormat* getTextFormat() const = 0;
    /** 应用文本格式到引擎节点（纯虚函数）。 */
    virtual void applyTextFormat() = 0;

    /** 获取渲染后的文本尺寸。 */
    virtual Vector2 getTextSize();

    /** 获取文本颜色。 */
    Color getColor() const { TextFormat* tf = getTextFormat(); return tf ? tf->color : Color(1,1,1,1); }
    void setColor(const Color& value);

    /** 获取字体大小。 */
    float getFontSize() const { TextFormat* tf = getTextFormat(); return tf ? tf->fontSize : 0.0f; }
    void setFontSize(float value);

    /** 获取轮廓颜色。 */
    Color getOutlineColor() const { TextFormat* tf = getTextFormat(); return tf ? tf->outlineColor : Color(1,1,1,1); }
    void setOutlineColor(const Color& value);

    /** 获取模板变量表。 */
    std::unordered_map<std::string, Variant>* getTemplateVars() { return _templateVars; }
    void setTemplateVars(std::unordered_map<std::string, Variant>* value);

    /** 设置单个模板变量值，返回 this 支持链式调用。 */
    GTextField* setVar(const std::string& name, const Variant& value);
    /** 刷新所有模板变量到文本。 */
    void flushVars();

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    /** 将文本内容设置到实际渲染节点（纯虚函数）。 */
    virtual void setTextFieldText() = 0;
    virtual void updateSize();

    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;

    /** 解析文本中的模板变量。 */
    std::string parseTemplate(const char* text);

    std::string _text;                                       ///< 当前文本。
    bool _ubbEnabled;                                        ///< 是否启用 UBB。
    AutoSizeType _autoSize;                                  ///< 自动尺寸模式。
    std::unordered_map<std::string, Variant>* _templateVars;  ///< 模板变量表。
};

/// @brief 基础文本字段。
/// GBasicTextField 是 GTextField 的标准实现，内部可切换使用 FUILabel（纯文本）
/// 或 FUIRichText（富文本）渲染。
class GBasicTextField : public GTextField
{
    GDCLASS(GBasicTextField, GTextField)

public:
    GBasicTextField();
    virtual ~GBasicTextField();

    FAIRYGUI_CREATE(GBasicTextField)

    static void _bind_methods();

    virtual void setAutoSize(AutoSizeType value) override;
    virtual void setUBBEnabled(bool value) override;

    virtual bool isSingleLine() const override { return _singleLine; }
    virtual void setSingleLine(bool value) override;

    virtual TextFormat* getTextFormat() const override { return _label ? _label->getTextFormat() : nullptr; }
    virtual void applyTextFormat() override;
    virtual Vector2 getTextSize() override;

protected:
    virtual void handleInit() override;
    virtual void handleSizeChanged() override;
    virtual void handleGrayedChanged() override;

    virtual void setTextFieldText() override;
    virtual void updateSize() override;

private:
    void syncRichTextSettings();
    void syncTextDimensions();
    void updateShrink();
    void updateDisplayMode();
    void configureRichTextAutoSize(AutoSizeType value);

    FUILabel* _label;          ///< 纯文本渲染节点。
    FUIRichText* _richText;    ///< 富文本渲染节点。
    bool _updatingSize;
    bool _singleLine;
};

NS_FGUI_END

#endif
