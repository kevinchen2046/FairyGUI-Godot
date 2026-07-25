#ifndef __PLAYTRNASITIONACTION_H__
#define __PLAYTRNASITIONACTION_H__

#include "ControllerAction.h"

NS_FGUI_BEGIN

class Transition;

/// @brief 播放过渡动作，在控制器页面切换时播放指定的 Transition 动画。
///
/// 支持设置播放次数、延迟时间。
/// 当 stopOnExit 为 true 时，离开匹配页面时会自动停止该动画。
class PlayTransitionAction : public ControllerAction
{
public:
    PlayTransitionAction();
    virtual void setup(ByteBuffer * buffer) override;

    /// @brief 要播放的过渡名称
    std::string transitionName;

    /// @brief 播放次数
    int playTimes;

    /// @brief 延迟播放时间
    float delay;

    /// @brief 离开匹配页面时是否停止播放
    bool stopOnExit;

protected:
    virtual void enter(GController* controller) override;
    virtual void leave(GController* controller) override;

    /// @brief 当前正在播放的过渡引用
    Transition* _currentTransition;
};

NS_FGUI_END

#endif
