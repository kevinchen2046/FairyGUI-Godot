#ifndef __RELATIONS_H__
#define __RELATIONS_H__

#include "FairyGUIMacros.h"
#include "RelationItem.h"

NS_FGUI_BEGIN

#include "GuiObjectFwd.h"
class ByteBuffer;

/// @brief 关联系统管理器，管理一个 GObject 对所有其他对象的位置和大小约束。
///
/// 通过 add() 方法添加目标对象和关联类型，当目标对象的尺寸或位置改变时，
/// 所有者的尺寸和位置会自动调整，实现 UI 自适应布局。
class Relations
{
public:
    /// @param owner 关联的所有者对象
    Relations(GObject* owner);
    ~Relations();

    /// @brief 添加关联关系
    /// @param target 关联的目标对象
    /// @param relationType 关联类型
    void add(GObject* target, RelationType relationType);

    /// @brief 添加关联关系（指定是否使用百分比）
    /// @param target 关联的目标对象
    /// @param relationType 关联类型
    /// @param usePercent 是否使用百分比模式
    void add(GObject* target, RelationType relationType, bool usePercent);

    /// @brief 移除与指定目标的某种关联关系
    /// @param target 目标对象
    /// @param relationType 关联类型
    void remove(GObject* target, RelationType relationType);

    /// @brief 是否包含与指定目标的关联
    bool contains(GObject* target);

    /// @brief 清除与指定目标的所有关联关系
    void clearFor(GObject* target);

    /// @brief 清除所有关联关系
    void clearAll();

    /// @brief 从另一个 Relations 对象复制所有关联关系
    void copyFrom(const Relations& source);

    /// @brief 当所有者大小改变时调用，重新计算所有关联对象的位置
    /// @param dWidth 宽度变化量
    /// @param dHeight 高度变化量
    /// @param applyPivot 是否应用轴心偏移
    void onOwnerSizeChanged(float dWidth, float dHeight, bool applyPivot);

    /// @brief 是否为空（没有任何关联关系）
    bool isEmpty() const;

    /// @brief 从二进制数据初始化（用于 UI 反序列化）
    /// @param buffer 二进制数据
    /// @param parentToChild 是否为父到子的关联
    void setup(ByteBuffer* buffer, bool parentToChild);

    /// @brief 当前正在处理的关联目标（防止循环触发）
    GObject* handling;

private:
    /// @brief 所有者对象
    GObject* _owner;

    /// @brief 关联项列表
    std::vector<RelationItem*> _items;
};

NS_FGUI_END

#endif
