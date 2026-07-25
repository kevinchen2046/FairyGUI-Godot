#ifndef __GEARICON_H__
#define __GEARICON_H__

#include "FairyGUIMacros.h"
#include "GearBase.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"

/// @brief 图标关联器。
/// 根据控制器页面切换改变对象的图标 URL。
class GearIcon : public GearBase
{
public:
    GearIcon(GObject* owner);
    virtual ~GearIcon();

    void apply() override;
    void updateState() override;

protected:
    void addStatus(const std::string& pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    std::unordered_map<std::string, std::string> _storage; ///< 各页面对应的图标 URL。
    std::string _default;  ///< 默认图标 URL。
};

NS_FGUI_END

#endif
