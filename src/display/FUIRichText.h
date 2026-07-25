#ifndef __FUIRICHTEXT_H__
#define __FUIRICHTEXT_H__

#include "FairyGUIMacros.h"
#include "TextFormat.h"
#include "utils/html/HtmlParser.h"
#ifdef FGUI_GDEXTENSION
#include <unordered_map>
#else
#include "core/templates/hash_map.h"
#endif

NS_FGUI_BEGIN

class HtmlElement;
class HtmlObject;
class FUIClipContainer;

/// @brief FairyGUI 富文本渲染节点，支持 HTML/UBB 标记语言的文本排版。
///
/// FUIRichText 将 HTML 或 UBB 标记的文本解析为 HTML 元素树，
/// 然后递归渲染为 Godot 节点层次结构。主要功能：
/// - HTML 标签支持（字体、颜色、大小、粗体、斜体、下划线、链接等）
/// - 图文混排（图片、图标标签）
/// - 链接点击检测 (hitTestLink)
/// - 自定义对象工厂 (objectFactory)，可注册自定义 HTML 对象处理器
/// - 溢出模式控制 (overflow)
/// - 锚点文本样式（下划线、颜色）
class FUIRichText : public Node2D
{
    GDCLASS(FUIRichText, Node2D)

public:
    FUIRichText();
    virtual ~FUIRichText();

    static FUIRichText* create();

    /// @brief 设置文本区域尺寸
    /// @param width 宽度
    /// @param height 高度
    void setDimensions(float width, float height);

    /// @brief 获取文本区域尺寸
    Vector2 getDimensions() const { return Vector2(_dimensionsX, _dimensionsY); }

    /// @brief 获取内容尺寸
    virtual Vector2 get_content_size() const;

    /// @brief 设置富文本内容（HTML/UBB 格式）
    void setText(const std::string& value);

    void gd_setText(const String& value);
    Node* gd_getControl(const String& name);
    String gd_hitTestLink(const Vector2& worldPoint);

    /// @brief 获取文本格式对象
    TextFormat* getTextFormat() { return &_textFormat; }

    /// @brief 应用文本格式到所有子节点
    void applyTextFormat();

    /// @brief 获取溢出模式
    int getOverflow() const { return _overflow; }

    /// @brief 设置溢出模式（可见/隐藏/裁剪/省略号）
    void setOverflow(int overflow);

    /// @brief 设置 HTML 对象工厂回调（用于自定义 HTML 标签处理器）
    void setObjectFactory(const std::function<HtmlObject*(HtmlElement*)>& value) { _objectFactory = value; }

    /// @brief 获取 HTML 解析选项（可修改链接颜色、下划线等）
    HtmlParseOptions& parseOptions() { return _parseOptions; }

    /// @brief 获取所有内嵌控件对象列表
    const std::vector<HtmlObject*>& getControls() const { return _controls; }

    /// @brief 根据名称获取内嵌控件
    HtmlObject* getControl(const std::string& name) const;

    /// @brief 检测世界坐标下命中的链接
    /// @param worldPoint 世界坐标点
    /// @return 命中的链接 URL（nullptr 表示未命中）
    const char* hitTestLink(const Vector2& worldPoint);

    /// @brief 是否启用锚点文本下划线
    bool isAnchorTextUnderline() const { return _parseOptions.linkUnderline; }

    /// @brief 设置锚点文本下划线启用
    void setAnchorTextUnderline(bool enable);

    /// @brief 获取锚点文本颜色
    Color getAnchorFontColor() const { return _parseOptions.linkColor; }

    /// @brief 设置锚点文本颜色
    void setAnchorFontColor(const Color& color);

    /// @brief 对所有标签应用灰度效果
    void applyGrayedToLabels(bool grayed);

#ifdef FGUI_GDEXTENSION
    Rect2 get_anchorable_rect() const;
#else
    Rect2 get_anchorable_rect() const override;
#endif

    static void _bind_methods();

protected:
    void _notification(int p_what);

private:
    void formatText();
    void formarRenderers();
    void handleTextRenderer(HtmlElement* element, const std::string& text);
    void handleRichRenderer(HtmlElement* element, HtmlObject* obj);
    void addNewLine();
    int findSplitPositionForWord(Node* label, const std::string& text);
    void doHorizontalAlignment(const std::vector<Node*>& row, float rowWidth);
    void updateClipping();
    void resetRendererChildren();
    void bindRendererElement(Node *p_node, HtmlElement *p_element);
    HtmlElement *getRendererElement(Node *p_node) const;
    Vector2 measureRendererNode(Node *p_node) const;

    /// @brief HTML 元素树
    std::vector<HtmlElement*> _elements;

    /// @brief HTML 对象列表
    std::vector<HtmlObject*> _objects;

    /// @brief 内嵌控件列表
    std::vector<HtmlObject*> _controls;

    /// @brief HTML 解析器
    HtmlParser* _parser;

    /// @brief 自定义对象工厂
    std::function<HtmlObject*(HtmlElement*)> _objectFactory;

    /// @brief 解析选项
    HtmlParseOptions _parseOptions;

    /// @brief 基础文本格式
    TextFormat _textFormat;

    /// @brief 文本区域宽度
    float _dimensionsX;

    /// @brief 文本区域高度
    float _dimensionsY;

    /// @brief 内容宽度
    float _contentWidth;

    /// @brief 内容高度
    float _contentHeight;

    /// @brief 溢出模式
    int _overflow;

    /// @brief 是否需要重新排版
    bool _dirty;

    /// @brief 渲染行数据（每行包含多个渲染节点）
    std::vector<std::vector<Node*>> _renderers;

    /// @brief 行剩余空间宽度
    float _leftSpaceWidth;

    /// @brief 文本区域可用宽度
    float _textRectWidth;

    /// @brief 行数
    int _numLines;

    /// @brief 原始文本
    std::string _text;

    /// @brief 裁剪容器
    FUIClipContainer* _clipContainer;

#ifdef FGUI_GDEXTENSION
    /// @brief 渲染节点到 HTML 元素的映射
    std::unordered_map<Node *, HtmlElement *> _rendererElements;
#else
    HashMap<Node *, HtmlElement *> _rendererElements;
#endif
};

NS_FGUI_END

#endif
