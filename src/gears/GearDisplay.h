#ifndef __GEARDISPLAY_H__
#define __GEARDISPLAY_H__

#include "FairyGUIMacros.h"
#include "GearBase.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"

/// @brief 显示关联器。
/// 根据控制器页面切换决定对象的显示/隐藏状态。
/// 这是最常用的 Gear 之一，通常与 RadioButton 控制器配合使用。
/// 支持显示锁定（addLock/releaseLock）机制防止意外的隐藏。
class GearDisplay : public GearBase
{
public:
    GearDisplay(GObject* owner);
    virtual ~GearDisplay();

    /** 根据当前控制器页面决定显示/隐藏。 */
    void apply() override;
    /** 将当前显示状态保存到控制器页面。 */
    void updateState() override;

    /** 添加显示锁定（增加引用计数）。
     * @return 解锁令牌（用于 releaseLock）。
     */
    uint32_t addLock();
    /** 释放显示锁定。
     * @param token addLock 返回的令牌。
     */
    void releaseLock(uint32_t token);
    /** 是否已连接到控制器。 */
    bool isConnected();

    std::vector<std::string> pages; ///< 关联的控制器页面列表（对象在这些页面中为可见）。

protected:
    void addStatus(const std::string& pageId, ByteBuffer* buffer) override;
    void init() override;

private:
    int _visible;                 ///< 可见状态：0=不可见, >0=可见。
    uint32_t _displayLockToken;   ///< 显示锁定令牌。
};

NS_FGUI_END

#endif
