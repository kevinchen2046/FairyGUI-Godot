#ifndef __GEARLOOK_H__
#define __GEARLOOK_H__

#include "FairyGUIMacros.h"
#include "GearBase.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"
class GTweener;

/// @brief 外观关联器。
/// 根据控制器页面切换改变对象的外观属性：
/// 透明度 (alpha)、旋转 (rotation)、变灰 (grayed)、可触摸 (touchable)。
class GearLook : public GearBase
{
public:
    GearLook(GObject* owner);
    virtual ~GearLook();

    void apply() override;
    void updateState() override;

protected:
    void addStatus(const std::string& pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    void onTweenUpdate(GTweener* tweener);
    void onTweenComplete();

    /// 外观状态值。
    class GearLookValue
    {
    public:
        float alpha;      ///< 透明度（0-1）。
        float rotation;   ///< 旋转角度。
        bool grayed;      ///< 是否变灰。
        bool touchable;   ///< 是否可触摸。

        GearLookValue();
        GearLookValue(float alpha, float rotation, bool grayed, bool touchable);
    };

    std::unordered_map<std::string, GearLookValue> _storage; ///< 各页面对应的外观值。
    GearLookValue _default;  ///< 默认外观值。
};

NS_FGUI_END

#endif
