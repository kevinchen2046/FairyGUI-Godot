#ifndef __GEARANIMATION_H__
#define __GEARANIMATION_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "GearBase.h"

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"

/// @brief 动画关联器。
/// 根据控制器页面切换控制对象的动画播放状态和当前帧。
class GearAnimation : public GearBase
{
public:
    GearAnimation(GObject* owner);
    virtual ~GearAnimation();

    void apply() override;
    void updateState() override;

protected:
    void addStatus(const std::string&  pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    /// 动画状态值。
    class GearAnimationValue
    {
    public:
        bool playing;  ///< 是否播放中。
        int frame;     ///< 当前帧索引。

        GearAnimationValue();
        GearAnimationValue(bool playing, int frame);
    };
    std::unordered_map<std::string, GearAnimationValue> _storage; ///< 各页面对应的动画值。
    GearAnimationValue _default;  ///< 默认动画值。
};

NS_FGUI_END

#endif
