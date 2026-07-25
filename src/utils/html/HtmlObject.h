#ifndef __HTMLOBJECT_H__
#define __HTMLOBJECT_H__

#include "FairyGUIMacros.h"
#include "GObjectPool.h"

NS_FGUI_BEGIN

class FUIRichText;
class HtmlElement;
#include "../../GuiObjectFwd.h"

/// @brief HTML 对象，负责将 HtmlElement 创建为实际的 Godot 节点。
///
/// HtmlObject 是 HtmlElement 和实际 UI 组件之间的桥梁。
/// 不同类型的 HTML 元素（图片、按钮、输入框、下拉框等）对应不同的 create 方法。
/// 支持对象池复用以提高性能。
class HtmlObject
{
public:
    /// @brief 按钮资源路径（静态）
    static std::string buttonResource;

    /// @brief 输入框资源路径（静态）
    static std::string inputResource;

    /// @brief 下拉框资源路径（静态）
    static std::string selectResource;

    /// @brief 是否启用对象池（静态）
    static bool usePool;

    /// @brief 获取对象池实例
    static GObjectPool& getObjectPool();

    HtmlObject();
    virtual ~HtmlObject();

    /// @brief 获取关联的 HTML 元素
    HtmlElement* getElement() const { return _element; }

    /// @brief 设置关联的 HTML 元素
    void setElement(HtmlElement* elem) { _element = elem; }

    /// @brief 获取渲染的 UI 对象
    GObject* getUI() const { return _ui.ptr(); }

    /// @brief 是否隐藏
    bool isHidden() const { return _hidden; }

    /// @brief 加载器对象池（静态）
    static std::vector<Ref<GObject>> loaderPool;

    /// @brief 创建实际渲染对象（子类可覆写）
    /// @param owner 所属的 FUIRichText 实例
    /// @param element 对应的 HTML 元素
    virtual void create(FUIRichText* owner, HtmlElement* element);

    /// @brief 销毁渲染对象
    virtual void destroy();

protected:
    void createCommon();
    void createImage();
    void createButton();
    void createInput();
    void createSelect();
    void prepareEmbedUI();

    /// @brief 关联的 HTML 元素
    HtmlElement* _element;

    /// @brief 所属的 FUIRichText 实例
    FUIRichText* _owner;

    /// @brief 渲染的 UI 对象引用
    Ref<GObject> _ui;

    /// @brief 是否隐藏
    bool _hidden;
};

NS_FGUI_END

#endif
