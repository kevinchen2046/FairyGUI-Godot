#ifndef __GTREENODE_H__
#define __GTREENODE_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

class GTree;
class GComponent;

/// @brief 树节点，表示 GTree 中一个数据项。
///
/// GTreeNode 支持两种类型：
/// - 叶子节点（isFolder=false）：不包含子节点
/// - 文件夹节点（isFolder=true）：可以包含子节点，支持展开/折叠
///
/// 通过 addChild/removeChild 管理子节点，通过 cell 获取关联的 UI 组件。
class GTreeNode : public RefCounted
{
    GDCLASS(GTreeNode, RefCounted)

public:
    /// @brief 创建树节点
    /// @param isFolder 是否为文件夹节点
    /// @param resURL 节点关联的 UI 资源 URL
    static Ref<GTreeNode> create(bool isFolder = false, const std::string& resURL = EMPTY_STRING);

    GTreeNode();
    virtual ~GTreeNode();

    static void _bind_methods();

    /// @brief 获取父节点
    GTreeNode* getParent() const { return _parent; }

    /// @brief 获取所属的树
    GTree* getTree() const { return _tree; }

    /// @brief 获取节点关联的 UI 组件（Cell）
    GComponent* getCell() const { return _cell.ptr(); }

    /// @brief 获取节点数据（用户自定义数据）
    const Variant& getData() const { return _data; }

    /// @brief 设置节点数据
    void setData(const Variant& value) { _data = value; }

    /// @brief 是否已展开
    bool isExpanded() const { return _expanded; }

    /// @brief 设置展开状态
    void setExpaned(bool value);

    /// @brief 是否为文件夹节点
    bool isFolder() const { return _isFolder; }

    /// @brief 获取节点文本
    const std::string& getText() const;

    /// @brief 设置节点文本
    void setText(const std::string& value);

    void gd_setText(const String& value);
    String gd_getText() const;
    void gd_init(bool is_folder, const String& res_url);

    /// @brief 获取节点图标
    const std::string& getIcon() const;
    Ref<GTreeNode> gd_getParent() const;
    Ref<GTree> gd_getTree() const;
    Ref<GComponent> gd_getCell() const;
    Ref<GTreeNode> gd_getChildAt(int index) const;

    /// @brief 设置节点图标
    void setIcon(const std::string& value);
    void gd_setIcon(const String& value);
    String gd_getIcon() const;

    // ---- 子节点管理 ----

    /// @brief 添加子节点（添加到末尾）
    /// @param child 子节点
    /// @return 添加的子节点
    GTreeNode* addChild(const Ref<GTreeNode>& child);

    /// @brief 在指定位置插入子节点
    /// @param child 子节点
    /// @param index 插入位置
    /// @return 插入的子节点
    GTreeNode* addChildAt(const Ref<GTreeNode>& child, int index);

    Ref<GTreeNode> gd_addChild(const Ref<GTreeNode>& child);

    /// @brief 移除子节点
    void removeChild(GTreeNode* child);

    /// @brief 移除指定位置的子节点
    void removeChildAt(int index);

    /// @brief 移除所有子节点
    void removeChildren() { removeChildren(0, -1); }

    /// @brief 移除指定范围内的子节点
    void removeChildren(int beginIndex, int endIndex);

    /// @brief 获取指定位置的子节点
    GTreeNode* getChildAt(int index) const;

    /// @brief 获取前一个兄弟节点
    GTreeNode* getPrevSibling() const;

    /// @brief 获取后一个兄弟节点
    GTreeNode* getNextSibling() const;

    /// @brief 获取子节点的索引
    int getChildIndex(const GTreeNode* child) const;

    /// @brief 设置子节点的索引位置
    void setChildIndex(GTreeNode* child, int index);

    /// @brief 将子节点移动到指定索引之前
    int setChildIndexBefore(GTreeNode* child, int index);

    /// @brief 交换两个子节点的位置
    void swapChildren(GTreeNode* child1, GTreeNode* child2);

    /// @brief 交换两个索引位置的子节点
    void swapChildrenAt(int index1, int index2);

    /// @brief 获取子节点数量
    int numChildren() const;

private:
    bool init(bool isFolder, const std::string& resURL);
    int moveChild(GTreeNode* child, int oldIndex, int index);
    void setTree(GTree* value);

    /// @brief 所属树
    GTree* _tree;

    /// @brief 父节点
    GTreeNode* _parent;

    /// @brief 关联的 UI 组件（Cell）
    Ref<GComponent> _cell;

    /// @brief 层级深度
    int _level;

    /// @brief 是否已展开
    bool _expanded;

    /// @brief 是否为文件夹节点
    bool _isFolder;

    /// @brief 用户自定义数据
    Variant _data;

    /// @brief 子节点列表
    std::vector<Ref<GTreeNode>> _children;

    /// @brief 资源 URL
    std::string _resURL;

    friend class GTree;
};

NS_FGUI_END

#endif
