#ifndef __FGUI_GD_HELPER_H__
#define __FGUI_GD_HELPER_H__

#include "FairyGUIMacros.h"
#include "GObject.h"

NS_FGUI_BEGIN

class GRoot;

/// @brief FairyGUI 的 Godot 脚本桥接辅助类，提供 GDScript 常用功能的便捷入口。
///
/// FGUIHelper 封装了以下全局功能供 GDScript 调用：
/// - 获取 GRoot 实例
/// - 创建 UI 对象
/// - 加载 UI 包
/// - 加载多语言翻译
/// - 设置富文本中 HTML 元素的默认样式
class FGUIHelper : public RefCounted
{
    GDCLASS(FGUIHelper, RefCounted)

public:
    /// @brief 获取全局单例
    static FGUIHelper* getInstance();
    static Ref<FGUIHelper> gd_getInstance() { return Ref<FGUIHelper>(getInstance()); }

    /// @brief 获取全局 GRoot 实例
    Ref<GRoot> gd_getGRoot();

    /// @brief 创建 UI 对象
    /// @param pkgName UI 包名称
    /// @param resName 资源名称
    Ref<GObject> gd_createObject(const String& pkgName, const String& resName);

    /// @brief 加载 UI 包
    /// @param path 包描述文件路径
    void addPackage(const String& path);

    /// @brief 加载翻译文件（XML 文件路径）
    /// @param xmlPath XML 翻译文件路径
    void loadTranslation(const String& xmlPath);

    /// @brief 直接从 XML 字符串加载翻译
    /// @param xml XML 字符串
    void loadTranslationFromXML(const String& xml);

    /// @brief 设置富文本中 HTML 按钮的默认资源
    void setHtmlButtonResource(const String& url);

    /// @brief 设置富文本中 HTML 输入框的默认资源
    void setHtmlInputResource(const String& url);

    /// @brief 设置富文本中 HTML 下拉框的默认资源
    void setHtmlSelectResource(const String& url);

    static void _bind_methods();

private:
    static FGUIHelper* _inst;
};

NS_FGUI_END

#endif
