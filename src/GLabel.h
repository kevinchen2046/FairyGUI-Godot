#ifndef __GLABEL_H__
#define __GLABEL_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"

NS_FGUI_BEGIN

class GTextField;

/// @brief 标签组件，显示一个图标和一段文字。
///
/// GLabel 是最常用的基础组件之一，由一个标题文本和一个图标组成。
/// 继承自 GComponent，但进一步封装了文字显示的便捷访问。
class GLabel : public GComponent
{
    GDCLASS(GLabel, GComponent)

public:
    GLabel();
    virtual ~GLabel();

    FAIRYGUI_CREATE(GLabel)

    static void _bind_methods();

    /// @brief 获取标题文本（等同于 getText()）
    const std::string& getTitle() { return getText(); }

    /// @brief 设置标题文本（等同于 setText()）
    void setTitle(const std::string& value) { setText(value); };

    void gd_setTitle(const String& value);
    String gd_getTitle();

    /// @brief 获取标签显示的文本
    virtual const std::string& getText() const override;

    /// @brief 设置标签显示的文本
    virtual void setText(const std::string& value) override;

    /// @brief 获取标签显示的图标
    virtual const std::string& getIcon() const override;

    /// @brief 设置标签显示的图标
    virtual void setIcon(const std::string& value) override;

    void gd_setIcon(const String& value);
    String gd_getIcon() const;

    /// @brief 获取标题文本颜色
    Color getTitleColor() const;

    /// @brief 设置标题文本颜色
    void setTitleColor(const Color& value);

    /// @brief 获取标题字体大小
    int getTitleFontSize() const;

    /// @brief 设置标题字体大小
    void setTitleFontSize(int value);

    /// @brief 获取内部的文本字段组件
    GTextField* getTextField() const;

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    virtual void constructExtension(ByteBuffer* buffer) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;

private:
    /// @brief 标题文本对象
    GObject* _titleObject;

    /// @brief 图标对象
    GObject* _iconObject;
};

NS_FGUI_END

#endif
