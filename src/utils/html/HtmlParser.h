#ifndef __HTMLPARSER_H__
#define __HTMLPARSER_H__

#include "FairyGUIMacros.h"
#include "display/TextFormat.h"

NS_FGUI_BEGIN

class HtmlElement;

/// @brief HTML 解析选项，控制富文本中链接的样式。
class HtmlParseOptions
{
public:
    /// @brief 默认链接下划线（静态）
    static bool defaultLinkUnderline;

    /// @brief 默认链接颜色（静态）
    static Color defaultLinkColor;

    HtmlParseOptions();

    /// @brief 链接是否显示下划线
    bool linkUnderline;

    /// @brief 链接文字颜色
    Color linkColor;
};

/// @brief HTML 解析器，将 HTML 字符串解析为 HtmlElement 树。
///
/// HtmlParser 使用 SAX 风格的 XML 解析，逐个处理开始标签、结束标签和文本内容。
/// 解析结果为一棵 HtmlElement 树，供 FUIRichText 渲染使用。
class HtmlParser
{
public:
    /// @brief 默认解析器实例
    static HtmlParser defaultParser;

    /// @brief 获取默认解析器
    static HtmlParser& getDefaultParser();

    HtmlParser();
    virtual ~HtmlParser();

    /// @brief 解析 HTML 字符串
    /// @param source HTML 源文本
    /// @param format 基础文本格式
    /// @param elements 输出的 HtmlElement 列表
    /// @param parseOptions 解析选项
    void parse(const std::string& source, const TextFormat& format, std::vector<HtmlElement*>& elements, const HtmlParseOptions& parseOptions);

    /// @brief SAX 风格：开始标签回调
    void startElement(void *ctx, const char *name, const char **atts);

    /// @brief SAX 风格：结束标签回调
    void endElement(void *ctx, const char *name);

    /// @brief SAX 风格：文本内容回调
    void textHandler(void *ctx, const char *s, size_t len);

private:
    Dictionary parseAttrs(const char ** attrs);
    int attributeInt(const Dictionary& vm, const std::string& key, int defaultValue);

    void pushTextFormat();
    void popTextFormat();
    void addNewLine(bool check);
    void finishTextBlock();

    std::vector<HtmlElement*>* _elements;
    std::vector<TextFormat> _textFormatStack;
    std::vector<HtmlElement*> _linkStack;
    HtmlElement* _currentSelect;
    TextFormat _format;
    size_t _textFormatStackTop;
    int _skipText;
    bool _ignoreWhiteSpace;
    std::string _textBlock;
    HtmlParseOptions _parseOptions;
};

NS_FGUI_END

#endif
