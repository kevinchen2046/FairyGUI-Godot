#ifndef __GGROUP_H__
#define __GGROUP_H__

// cocos2d.h removed - see godot_types.h
#include "FairyGUIMacros.h"
#include "GObject.h"

NS_FGUI_BEGIN

/// @brief 高级组组件。
/// GGroup 不是一个可见的容器，而是一个逻辑分组。它将多个子对象
/// 关联起来，提供以下功能：
/// - 自动布局（排列/列对齐）
/// - 自动调整组内元素尺寸
/// - 统一的透明度/可见性控制
/// - 排除不可见元素
///
/// 注意：GGroup 不是 GComponent，因此不能包含子对象层次的显示列表管理。
class GGroup : public GObject
{
    GDCLASS(GGroup, GuiObject)

public:
    GGroup();
    virtual ~GGroup();

    FAIRYGUI_CREATE(GGroup)

    static void _bind_methods();

    /** 获取布局类型。 */
    GroupLayoutType getLayout() const { return _layout; }
    /** 设置布局类型。 */
    void setLayout(GroupLayoutType value);

    void gd_setLayout(int value);
    int gd_getLayout() const;

    /** 获取列间距。 */
    int getColumnGap() { return _columnGap; }
    /** 设置列间距。 */
    void setColumnGap(int value);

    /** 获取行间距。 */
    int getLineGap() { return _lineGap; }
    /** 设置行间距。 */
    void setLineGap(int value);

    /** 是否排除不可见元素（在布局计算时忽略隐藏的子对象）。 */
    bool isExcludeInvisibles() { return _excludeInvisibles; }
    void setExcludeInvisibles(bool value);

    /** 是否禁用自动调整尺寸。 */
    bool isAutoSizeDisabled() { return _autoSizeDisabled; }
    void setAutoSizeDisabled(bool value);

    /** 获取主轴网格索引。 */
    int getMainGridIndex() { return _mainGridIndex; }
    void setMainGridIndex(int value);

    /** 获取主轴网格最小尺寸。 */
    int getMainGridMinSize() { return _mainGridMinSize; }
    void setMainGridMinSize(int value);

    /** 标记边界已改变。 */
    void setBoundsChangedFlag(bool positionChangedOnly = false);
    /** 移动组内所有子对象。 */
    void moveChildren(float dx, float dy);
    /** 调整组内所有子对象尺寸。 */
    void resizeChildren(float dw, float dh);

    int _updating;  ///< 更新计数器（防止递归）。

protected:
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void handleAlphaChanged() override;
    virtual void handleVisibleChanged() override;

private:
    void updateBounds();
    void handleLayout();
    CALL_LATER_FUNC(GGroup, ensureBoundsCorrect);

    GroupLayoutType _layout;     ///< 布局类型。
    int _lineGap;                ///< 行间距。
    int _columnGap;              ///< 列间距。
    bool _excludeInvisibles;     ///< 是否排除不可见元素。
    bool _autoSizeDisabled;      ///< 是否禁用自动尺寸。
    int _mainGridIndex;          ///< 主轴网格索引。
    int _mainGridMinSize;        ///< 主轴最小尺寸。

    bool _percentReady;
    bool _boundsChanged;
    int _mainChildIndex;
    float _totalSize;
    int _numChildren;

};

NS_FGUI_END

#endif
