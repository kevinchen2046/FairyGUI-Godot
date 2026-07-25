#ifndef __UBBPARSER_H__
#define __UBBPARSER_H__

#include "FairyGUIMacros.h"
#include "ToolSet.h"

NS_FGUI_BEGIN

/// @brief UBB 标签处理器绑定宏，简化 std::bind 调用。
/// @param __selector__ 处理函数
/// @param __target__ 目标对象
#define UBB_TAG_HANDLER(__selector__,__target__, ...) std::bind(&__selector__,__target__, std::placeholders::_1, std::placeholders::_2, std::placeholders::_3, std::placeholders::_4, ##__VA_ARGS__)

/// @brief UBB 解析器，将 UBB（Universal Bulletin Board）标记文本转换为 HTML。
///
/// FairyGUI 的文本组件支持简化的 UBB 标记语法，例如：
/// - [b]粗体[/b]
/// - [color=#FF0000]红色文字[/color]
/// - [size=20]大字体[/size]
/// - [img]图片路径[/img]
/// - [url=http://...]链接[/url]
///
/// UBBParser 将 UBB 文本解析并转换为对应的 HTML 标记，
/// 供 FUIRichText 渲染。
class UBBParser
{
public:
    UBBParser();
    virtual ~UBBParser();

    /// @brief 获取全局唯一的 UBBParser 实例
    static UBBParser* getInstance();

    /// @brief 解析 UBB 文本为 HTML
    /// @param text 输入的 UBB 文本
    /// @param remove 是否移除不支持的标签
    /// @return 转换后的 HTML 文本
    std::string parse(const char *text, bool remove = false);

    /// @brief 默认图片宽度
    int defaultImgWidth;

    /// @brief 默认图片高度
    int defaultImgHeight;

    /// @brief 最后一次解析的颜色
    std::string lastColor;

    /// @brief 最后一次解析的字体大小
    std::string lastFontSize;

protected:
    /// @brief 处理 [url] 标签
    virtual void onTag_URL(const std::string& tagName, bool end, const std::string& attr, std::string& replacement);

    /// @brief 处理 [img] 标签
    virtual void onTag_IMG(const std::string& tagName, bool end, const std::string& attr, std::string& replacement);

    /// @brief 处理简单标签（[b][/b][i][/i][u][/u] 等）
    virtual void onTag_Simple(const std::string& tagName, bool end, const std::string& attr, std::string& replacement);

    /// @brief 处理 [color] 标签
    virtual void onTag_COLOR(const std::string& tagName, bool end, const std::string& attr, std::string& replacement);

    /// @brief 处理 [font] 标签
    virtual void onTag_FONT(const std::string& tagName, bool end, const std::string& attr, std::string& replacement);

    /// @brief 处理 [size] 标签
    virtual void onTag_SIZE(const std::string& tagName, bool end, const std::string& attr, std::string& replacement);

    /// @brief 处理 [align] 标签
    virtual void onTag_ALIGN(const std::string& tagName, bool end, const std::string& attr, std::string& replacement);

    /// @brief 获取标签内的文本
    /// @param out 输出文本
    /// @param remove 是否移除标签
    void getTagText(std::string& out, bool remove);

    /// @brief 标签处理函数类型
    typedef std::function<void(const std::string& tagName, bool end, const std::string& attr, std::string& replacement)> TagHandler;

    /// @brief 标签处理器映射
    std::unordered_map<std::string, TagHandler> _handlers;

    const char* _pString;
    ssize_t _readPos;

private:
    static UBBParser* _inst;
};

NS_FGUI_END

#endif
