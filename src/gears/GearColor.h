#ifndef __GEARCOLOR_H__
#define __GEARCOLOR_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "GearBase.h"

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"
class GTweener;

/// @brief 颜色关联器。
/// 根据控制器页面切换改变对象的颜色和轮廓色。
/// 当 tween 启用时，颜色变化会带有平滑过渡动画。
class GearColor : public GearBase
{
public:
    GearColor(GObject* owner);
    virtual ~GearColor();

    /** 应用当前控制器页面对应的颜色状态。 */
    void apply() override;
    /** 将对象当前颜色保存到对应控制器页面。 */
    void updateState() override;

protected:
    void addStatus(const std::string&  pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    void onTweenUpdate(GTweener* tweener);
    void onTweenComplete();

    /// 颜色状态值。
    class GearColorValue
    {
    public:
        Color color;          ///< 主颜色。
        Color outlineColor;   ///< 轮廓色。

        GearColorValue();
        GearColorValue(const Color& color, const Color& outlineColor);
    };

    std::unordered_map<std::string, GearColorValue> _storage; ///< 各页面对应的颜色值。
    GearColorValue _default;  ///< 默认颜色值。
};

NS_FGUI_END

#endif
