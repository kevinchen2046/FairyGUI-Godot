#ifndef __GEARFONTSIZE_H__
#define __GEARFONTSIZE_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "GearBase.h"

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"

/// @brief 字体大小关联器。
/// 根据控制器页面切换改变对象的字体大小。
class GearFontSize : public GearBase
{
public:
    GearFontSize(GObject* owner);
    virtual ~GearFontSize();

    void apply() override;
    void updateState() override;

protected:
    void addStatus(const std::string&  pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    std::unordered_map<std::string, int> _storage; ///< 各页面对应的字体大小。
    int _default;  ///< 默认字体大小。
};

NS_FGUI_END

#endif
