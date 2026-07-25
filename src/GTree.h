#ifndef __GTREE_H__
#define __GTREE_H__

#include "FairyGUIMacros.h"
#include "GList.h"
#include "GTreeNode.h"

NS_FGUI_BEGIN

class GList;
class GComponent;

/// @brief 树形列表组件，继承自 GList，以树形结构展示数据。
///
/// GTree 可以展示带有层级关系的节点，支持展开/折叠父子节点。
/// 通过 treeNodeRender 和 treeNodeWillExpand 回调函数自定义节点渲染和展开行为。
class GTree : public GList
{
    GDCLASS(GTree, GList)

public:
    /// @brief 树节点渲染回调类型
    typedef std::function<void(GTreeNode* node, GComponent* obj)> TreeNodeRenderFunction;

    /// @brief 树节点将要展开/折叠的回调类型
    typedef std::function<void(GTreeNode* node, bool expand)> TreeNodeWillExpandFunction;

    GTree();
    virtual ~GTree();

    FAIRYGUI_CREATE(GTree)

    static void _bind_methods();

    /// @brief 获取子节点的缩进距离（像素）
    int getIndent() const { return _indent; }

    /// @brief 设置子节点的缩进距离
    void setIndent(int value) { _indent = value; }

    /// @brief 获取点击展开的触发次数（1=单击展开，2=双击展开）
    int getClickToExpand() const { return _clickToExpand; }

    /// @brief 设置点击展开的触发次数
    void setClickToExpand(int value) { _clickToExpand = value; }

    /// @brief 获取根节点（所有节点的顶层父节点）
    GTreeNode* getRootNode() const { return _rootNode.ptr(); }

    /// @brief 获取当前选中的节点
    GTreeNode* getSelectedNode() const;

    /// @brief 获取所有选中的节点（多选模式）
    /// @param result 输出的选中节点列表
    void getSelectedNodes(std::vector<GTreeNode*>& result) const;

    /// @brief 选中指定节点
    /// @param node 要选中的节点
    /// @param scrollItToView 是否滚动到该节点可见
    void selectNode(GTreeNode* node, bool scrollItToView = false);

    /// @brief 取消选中指定节点
    void unselectNode(GTreeNode* node);

    /// @brief 展开指定文件夹节点及其所有子节点
    void expandAll(GTreeNode* folderNode);

    /// @brief 折叠指定文件夹节点及其所有子节点
    void collapseAll(GTreeNode* folderNode);

    /// @brief 树节点渲染回调（用于自定义节点样式）
    TreeNodeRenderFunction treeNodeRender;

    /// @brief 树节点将要展开/折叠回调
    TreeNodeWillExpandFunction treeNodeWillExpand;

protected:
    virtual void handleInit() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void readItems(ByteBuffer* buffer) override;
    virtual void dispatchItemEvent(GObject* item, EventContext* context) override;

private:
    void createCell(GTreeNode* node);
    void afterInserted(GTreeNode* node);
    int getInsertIndexForNode(GTreeNode* node);
    void afterRemoved(GTreeNode* node);
    void afterExpanded(GTreeNode* node);
    void afterCollapsed(GTreeNode* node);
    void afterMoved(GTreeNode* node);
    int checkChildren(GTreeNode* folderNode, int index);
    void hideFolderNode(GTreeNode* folderNode);
    void removeNode(GTreeNode* node);
    int getFolderEndIndex(int startIndex, int level);

    void onCellTouchBegin(EventContext* context);
    void onExpandedStateChanged(EventContext* context);

    /// @brief 子节点缩进距离
    int _indent;

    /// @brief 根节点
    Ref<GTreeNode> _rootNode;

    /// @brief 点击展开触发次数
    int _clickToExpand;

    /// @brief 展开状态是否在事件中
    bool _expandedStatusInEvt;

    friend class GTreeNode;

    // GDScript extension
    void gd_setTreeNodeRender(const Callable& callable);
    Ref<GTreeNode> gd_getRootNode() const { return Ref<GTreeNode>(getRootNode()); }
    Ref<GTreeNode> gd_getSelectedNode() const;
};

NS_FGUI_END

#endif
