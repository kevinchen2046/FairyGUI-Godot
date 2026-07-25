#ifndef __GEARTEXT_H__
#define __GEARTEXT_H__

#include "FairyGUIMacros.h"
#include "GearBase.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"

/// @brief 文本关联器。
/// 根据控制器页面切换改变对象的文本内容。
class GearText : public GearBase
{
public:
    GearText(GObject* owner);
    virtual ~GearText();

    void apply() override;
    void updateState() override;

protected:
    void addStatus(const std::string& pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    std::unordered_map<std::string, std::string> _storage; ///< 各页面对应的文本。
    std::string _default;  ///< 默认文本。
};

NS_FGUI_END

#endif
