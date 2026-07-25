#ifndef __HTMLELEMENT_H__
#define __HTMLELEMENT_H__

#include "FairyGUIMacros.h"
#include "display/TextFormat.h"

NS_FGUI_BEGIN

class HtmlObject;

/// @brief HTML 元素，表示 HTML/UBB 解析树中的一个节点。
///
/// HtmlElement 可以是文本、图片、链接、输入框、下拉框、普通对象或换行等类型。
/// 每个元素包含文本内容、格式信息、属性字典等。
class HtmlElement
{
public:
    /// @brief HTML 元素类型
    enum class Type
    {
        TEXT,   ///< 纯文本
        IMAGE,  ///< 图片
        LINK,   ///< 超链接
        INPUT,  ///< 输入框
        SELECT, ///< 下拉框
        OBJECT, ///< 自定义对象
        BR      ///< 换行
    };

    HtmlElement(Type type);
    virtual ~HtmlElement() {};

    /// @brief 获取整型属性值
    /// @param attrName 属性名
    /// @param defValue 默认值
    int getInt(const std::string& attrName, int defValue = 0);

    /// @brief 获取字符串属性值
    std::string getString(const std::string& attrName, const std::string& defValue = EMPTY_STRING);

    /// @brief 获取数组属性值
    Array getArray(const std::string& attrName);

    /// @brief 元素类型
    Type type;

    /// @brief 文本内容
    std::string text;

    /// @brief 文本格式
    TextFormat format;

    /// @brief 链接目标（如果 type==LINK 则指向另一个 LINK 元素）
    HtmlElement* link;

    /// @brief 关联的 HTML 对象（用于渲染）
    HtmlObject *obj;

    /// @brief 空白字符数量
    int space;

    /// @brief 属性字典（键值对）
    Dictionary attrs;
};

NS_FGUI_END

#endif
