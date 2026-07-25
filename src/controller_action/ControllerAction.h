#ifndef __CONTROLLERACTION_H__
#define __CONTROLLERACTION_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

class GController;
class ByteBuffer;

/// @brief 控制器动作基类，定义控制器页面切换时执行的逻辑。
///
/// 当 GController 的页面发生切换时，会执行相关的 ControllerAction。
/// 每个动作定义了 fromPage/toBePage 的匹配规则，
/// enter()在进入页面时调用，leave()在离开页面时调用。
///
/// 子类包括：ChangePageAction（切换页面）、PlayTransitionAction（播放过渡动画）等。
class ControllerAction
{
public:
    /// @brief 根据类型创建对应的动作实例
    /// @param types 动作类型标识
    static ControllerAction* createAction(int types);

    ControllerAction();
    virtual ~ControllerAction();

    /// @brief 运行动作
    /// @param controller 关联的控制器
    /// @param prevPage 上一个页面名称
    /// @param curPage 当前页面名称
    void run(GController* controller, const std::string& prevPage, const std::string& curPage);

    /// @brief 从二进制数据初始化
    /// @param buffer 二进制数据
    virtual void setup(ByteBuffer * buffer);

    /// @brief 从这些页面离开时触发 enter()
    std::vector<std::string> fromPage;

    /// @brief 进入这些页面时触发 enter()
    std::vector<std::string> toPage;

protected:
    /// @brief 进入匹配页面时调用（子类实现）
    virtual void enter(GController* controller) = 0;

    /// @brief 离开匹配页面时调用（子类实现）
    virtual void leave(GController* controller) = 0;
};

NS_FGUI_END

#endif
