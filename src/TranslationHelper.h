#ifndef __TRANSLATIONHELPER_H_
#define __TRANSLATIONHELPER_H_

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

class PackageItem;

/// @brief 翻译助手，加载 XML 格式的多语言翻译数据并应用到 UI 组件。
///
/// 翻译数据结构：
/// strings[包名][资源ID+属性] = 翻译文本
///
/// 例如 strings["Basics"]["n1_title"] = "你好"
class TranslationHelper
{
public:
    /// @brief 全局翻译字符串映射表
    /// @details 第一层 key 为包名称，第二层 key 为"资源ID+属性名"，value 为翻译文本。
    static std::unordered_map<std::string, std::unordered_map<std::string, std::string>> strings;

    /// @brief 从 XML 字符串加载翻译数据
    /// @param xmlString XML 数据的 C 字符串
    /// @param nBytes 数据字节数
    static void loadFromXML(const char *xmlString, size_t nBytes);

    /// @brief 将翻译应用到指定组件项
    /// @param item 要翻译的 PackageItem
    static void translateComponent(PackageItem* item);
};

NS_FGUI_END

#endif
