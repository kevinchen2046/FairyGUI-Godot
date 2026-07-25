#ifndef __FUIINPUT_H__
#define __FUIINPUT_H__

#include "FairyGUIMacros.h"
#include "TextFormat.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/control.hpp>
#include <godot_cpp/classes/input_event.hpp>
#else
#include "core/input/input_event.h"
#include "scene/gui/control.h"
#endif
#include <functional>

#ifndef FGUI_GDEXTENSION
class LineEdit;
class TextEdit;
#endif

NS_FGUI_BEGIN

#ifdef FGUI_GDEXTENSION
void register_fui_input_internal_classes();
#endif

/// @brief FairyGUI 文本输入渲染节点，继承自 Control。
///
/// FUIInput 提供文本输入功能，支持：
/// - 单行/多行输入 (singleLine)
/// - 密码模式 (password)
/// - 占位文本 (placeholder) 和占位文本样式
/// - 输入限制 (inputRestrict)，正则表达式过滤
/// - 最大长度限制 (maxLength)
/// - 键盘类型设置 (keyboardType)
/// - 提交回调 (submittedCallback)
/// - 文本变更回调 (textChangedCallback)
class FUIInput : public Control
{
    GDCLASS(FUIInput, Control)

public:
    FUIInput();
    virtual ~FUIInput();

    static FUIInput* create();

    /// @brief 设置输入文本
    void setText(const std::string& value);

    /// @brief 获取输入文本
    const std::string& getText() const { return _text; }

    void gd_setText(const String& value);
    String gd_getText() const;

    /// @brief 设置最大输入长度
    void setMaxLength(int value);

    /// @brief 获取最大输入长度
    int getMaxLength() const { return _maxLength; }

    /// @brief 设置是否为密码输入
    void setPassword(bool value);

    /// @brief 是否为密码输入
    bool isPassword() const { return _password; }

    /// @brief 设置是否为单行输入
    void setSingleLine(bool value);

    /// @brief 是否为单行输入
    bool isSingleLine() const { return _singleLine; }

    /// @brief 设置是否可编辑
    void setEditable(bool value);

    /// @brief 是否可编辑
    bool isEditable() const { return _editable; }

    /// @brief 设置输入限制正则表达式
    void setInputRestrict(const std::string& value) { _inputRestrict = value; }

    /// @brief 获取输入限制正则表达式
    const std::string& getInputRestrict() const { return _inputRestrict; }

    void gd_setInputRestrict(const String& value);
    String gd_getInputRestrict() const;

    /// @brief 设置占位文本
    void setPlaceHolder(const std::string& value);

    /// @brief 获取占位文本
    const std::string& getPlaceHolder() const { return _placeHolder; }
    void gd_setPlaceHolder(const String& value);

    /// @brief 设置占位文本颜色
    void setPlaceholderColor(const Color& value) { _placeholderColor = value; }

    /// @brief 获取占位文本颜色
    Color getPlaceholderColor() const { return _placeholderColor; }

    /// @brief 设置占位文本字体大小
    void setPlaceholderFontSize(int value) { _placeholderFontSize = value; }

    /// @brief 获取占位文本字体大小
    int getPlaceholderFontSize() const { return _placeholderFontSize; }

    /// @brief 设置键盘类型
    void setKeyboardType(int value);

    /// @brief 获取键盘类型
    int getKeyboardType() const { return _keyboardType; }

    /// @brief 应用文本格式
    void applyTextFormat();

    /// @brief 打开系统键盘
    void openKeyboard();

    /// @brief 设置提交回调（按下回车时触发）
    void setSubmittedCallback(const std::function<void()>& callback) { _submittedCallback = callback; }

    /// @brief 设置文本变更回调
    void setTextChangedCallback(const std::function<void()>& callback) { _textChangedCallback = callback; }

    /// @brief 处理全局鼠标/触摸事件
    static void handleGlobalPointer(const Vector2& screenPos);

    /// @brief 获取文本格式对象
    TextFormat* getTextFormat() const { return _textFormat; }

    static void _bind_methods();

protected:
    void _notification(int p_what);

private:
    void ensureEditor();
    void rebuildEditor();
    void applyEditorTheme();
    bool isCharAllowed(char32_t ch) const;
    std::string filterText(const std::string& value) const;
    void syncTextFromEditor();
    void _on_line_edit_changed(const String& text);
    void _on_line_edit_submitted(const String& text);
    void _on_text_edit_changed();
    void _on_editor_focus_entered();
    void _on_editor_focus_exited();
    void updatePlaceholderVisibility();
    void connectEditorSignals();

    /// @brief 当前活跃的输入框（静态）
    static FUIInput* _activeInput;

    /// @brief 内部编辑器控件（LineEdit 或 TextEdit）
    Control* _editor;

    /// @brief 文本内容
    std::string _text;

    /// @brief 最大输入长度
    int _maxLength;

    /// @brief 是否为密码模式
    bool _password;

    /// @brief 是否为单行模式
    bool _singleLine;

    /// @brief 是否可编辑
    bool _editable;

    /// @brief 输入限制正则表达式
    std::string _inputRestrict;

    /// @brief 占位文本
    std::string _placeHolder;

    /// @brief 占位文本颜色
    Color _placeholderColor;

    /// @brief 占位文本字体大小
    int _placeholderFontSize;

    /// @brief 键盘类型
    int _keyboardType;

    /// @brief 是否获得焦点
    bool _focused;

    /// @brief 文本格式对象
    TextFormat* _textFormat;

    /// @brief 提交回调
    std::function<void()> _submittedCallback;

    /// @brief 文本变更回调
    std::function<void()> _textChangedCallback;
};

NS_FGUI_END

#endif
