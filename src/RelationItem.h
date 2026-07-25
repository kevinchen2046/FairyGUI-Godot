#ifndef __RELATIONITEM_H__
#define __RELATIONITEM_H__

#include "FairyGUIMacros.h"
#include "utils/WeakPtr.h"

NS_FGUI_BEGIN

#include "GuiObjectFwd.h"
class EventContext;

/// @brief 关联类型枚举，定义了对象之间的位置和大小约束关系。
///
/// 关联系统用于实现 UI 自适应布局，当一个对象的大小或位置发生变化时，
/// 与其关联的其他对象会自动调整。
///
/// 命名格式：{自身锚点}_{目标锚点}，例如 Left_Right 表示自身左边缘对齐目标右边缘。
/// 扩展型（*Ext_*）：考虑到目标对象的缩放，使用偏移量计算。
enum class RelationType
{
    Left_Left,          ///< 左侧对齐目标左侧
    Left_Center,        ///< 左侧对齐目标中心
    Left_Right,         ///< 左侧对齐目标右侧
    Center_Center,      ///< 中心对齐目标中心
    Right_Left,         ///< 右侧对齐目标左侧
    Right_Center,       ///< 右侧对齐目标中心
    Right_Right,        ///< 右侧对齐目标右侧

    Top_Top,            ///< 顶部对齐目标顶部
    Top_Middle,         ///< 顶部对齐目标中部
    Top_Bottom,         ///< 顶部对齐目标底部
    Middle_Middle,      ///< 中部对齐目标中部
    Bottom_Top,         ///< 底部对齐目标顶部
    Bottom_Middle,      ///< 底部对齐目标中部
    Bottom_Bottom,      ///< 底部对齐目标底部

    Width,              ///< 宽度跟随目标宽度
    Height,             ///< 高度跟随目标高度

    LeftExt_Left,       ///< 左侧扩展对齐目标左侧
    LeftExt_Right,      ///< 左侧扩展对齐目标右侧
    RightExt_Left,      ///< 右侧扩展对齐目标左侧
    RightExt_Right,     ///< 右侧扩展对齐目标右侧
    TopExt_Top,         ///< 顶部扩展对齐目标顶部
    TopExt_Bottom,      ///< 顶部扩展对齐目标底部
    BottomExt_Top,      ///< 底部扩展对齐目标顶部
    BottomExt_Bottom,   ///< 底部扩展对齐目标底部

    Size                ///< 尺寸同时跟随目标
};

/// @brief 单个关联关系定义，描述一个具体的约束规则。
class RelationDef
{
public:
    /// @brief 是否使用百分比（而非像素偏移）
    bool percent;

    /// @brief 关联类型
    RelationType type;

    /// @brief 轴向（0=X轴, 1=Y轴, 2=两者）
    int axis;

    RelationDef() {}

    RelationDef(const RelationDef& source)
    {
        this->percent = source.percent;
        this->type = source.type;
        this->axis = source.axis;
    }
};

/// @brief 关联项，管理一个对象对另一个目标对象的所有关联关系。
///
/// 每个 RelationItem 包含一个目标对象和一组 RelationDef 定义。
/// 当目标对象的位置或大小改变时，会自动调整所有者对象。
class RelationItem
{
public:
    RelationItem(GObject* owner);
    ~RelationItem();

    /// @brief 获取关联目标对象
    GObject* getTarget() { return _target.ptr(); }

    /// @brief 设置关联目标对象
    void setTarget(GObject* value);

    /// @brief 添加关联关系
    /// @param relationType 关联类型
    /// @param usePercent 是否使用百分比
    void add(RelationType relationType, bool usePercent);

    /// @brief 内部添加关联关系（不检查重复）
    void internalAdd(RelationType relationType, bool usePercent);

    /// @brief 移除指定类型的关联关系
    void remove(RelationType relationType);

    /// @brief 从另一个 RelationItem 复制关联关系
    void copyFrom(const RelationItem& source);

    /// @brief 是否没有任何关联关系
    bool isEmpty() const;

    /// @brief 应用自身尺寸变化到关联关系
    /// @param dWidth 宽度变化量
    /// @param dHeight 高度变化量
    /// @param applyPivot 是否应用轴心偏移
    void applyOnSelfSizeChanged(float dWidth, float dHeight, bool applyPivot);

private:
    void applyOnXYChanged(GObject* target, const RelationDef& info, float dx, float dy);
    void applyOnSizeChanged(GObject* target, const RelationDef& info);
    void addRefTarget(GObject* target);
    void releaseRefTarget(GObject* target);
    void onTargetXYChanged(EventContext* context);
    void onTargetSizeChanged(EventContext* context);

    /// @brief 所有者对象
    GObject* _owner;

    /// @brief 关联的目标对象（弱引用）
    WeakPtr _target;

    /// @brief 关联关系定义列表
    std::vector<RelationDef> _defs;

    /// @brief 目标对象数据（缓存的 x, y, width, height）
    Vector4 _targetData;
};

NS_FGUI_END

#endif
