#ifndef __GTEXTINPUT_H__
#define __GTEXTINPUT_H__

#include "FairyGUIMacros.h"
#include "GTextField.h"
#include "display/FUIInput.h"

NS_FGUI_BEGIN

/// @brief 文本输入组件。
/// GTextInput 是可接受用户输入的文本组件，支持：
/// - 单行/多行模式
/// - 密码模式（文本显示为 *）
/// - 占位符（placeholder）文本
/// - 输入限制（正则表达式）
/// - 最大长度限制
/// - 键盘类型设置
class GTextInput : public GTextField
{
    GDCLASS(GTextInput, GTextField)

public:
    GTextInput();
    virtual ~GTextInput();

    FAIRYGUI_CREATE(GTextInput)

    static void _bind_methods();

    virtual bool isSingleLine() const override;
    virtual void setSingleLine(bool value) override;

    virtual TextFormat* getTextFormat() const override { return _input->getTextFormat(); }
    virtual void applyTextFormat() override;

    virtual Vector2 getTextSize() override;

    /** 设置占位符文本（输入框为空时显示的提示文字）。 */
    void setPrompt(const std::string& value);
    void gd_setPrompt(const String& value) { setPrompt(value.utf8().get_data()); }
    /** 设置密码模式（输入的字符显示为 *）。 */
    void setPassword(bool value);
    /** 设置键盘类型（如数字键盘、邮箱键盘等）。 */
    void setKeyboardType(int value);
    /** 设置最大输入字符数。 */
    void setMaxLength(int value);
    /** 设置输入限制正则表达式。 */
    void setRestrict(const std::string& value);

    /** 编辑框回车提交处理。 */
    void editBoxReturn();
    /** 编辑框文本变化处理。 */
    void editBoxTextChanged(const std::string& text);
    /** 文本提交通知。 */
    void onTextSubmitted();

protected:
    virtual void handleInit() override;
    virtual void handleSizeChanged() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;

    virtual void setTextFieldText() override;

private:
    FUIInput* _input;  ///< 底层输入控件。
};

NS_FGUI_END

#endif
