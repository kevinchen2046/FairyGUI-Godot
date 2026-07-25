#ifndef __CHANGEPAGEACTION_H__
#define __CHANGEPAGEACTION_H__

#include "ControllerAction.h"

NS_FGUI_BEGIN

/// @brief 切换页面动作，在控制器页面切换时自动切换到另一个控制器的页面。
///
/// 当当前控制器满足 fromPage/toPage 规则时，
/// 自动切换 objectId 对应的控制器（通过 controllerName 查找）到 targetPage。
class ChangePageAction : public ControllerAction
{
public:
    virtual void setup(ByteBuffer * buffer) override;

    /// @brief 目标对象 ID
    std::string objectId;

    /// @brief 目标控制器名称
    std::string controllerName;

    /// @brief 目标页面名称
    std::string targetPage;

protected:
    virtual void enter(GController* controller) override;
    virtual void leave(GController* controller) override;
};

NS_FGUI_END

#endif
