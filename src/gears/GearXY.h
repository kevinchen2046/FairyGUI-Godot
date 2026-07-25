#ifndef __GEARXY_H__
#define __GEARXY_H__

#include "FairyGUIMacros.h"
#include "GearBase.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"
class GTweener;

/// @brief 位置关联器。
/// 根据控制器页面切换改变对象的 X/Y 坐标。
/// 支持百分比位置模式。
class GearXY : public GearBase
{
public:
    GearXY(GObject* owner);
    virtual ~GearXY();

    void apply() override;
    void updateState() override;
    void updateFromRelations(float dx, float dy) override;

    bool positionsInPercent; ///< 位置是否使用百分比模式（相对于父组件）。

    /** 添加扩展状态（用于百分比模式的位置数据）。 */
    void addExtStatus(const std::string& pageId, ByteBuffer* buffer);

protected:
    void addStatus(const std::string& pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    void onTweenUpdate(GTweener* tweener);
    void onTweenComplete();

    std::unordered_map<std::string, Vector4> _storage; ///< 各页面对应的位置值（x, y, px, py）。
    Vector4 _default;  ///< 默认位置值。
};

NS_FGUI_END

#endif
