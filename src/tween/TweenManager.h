#ifndef __TWEENMANAGER_H__
#define __TWEENMANAGER_H__

#include "FairyGUIMacros.h"
#include "TweenPropType.h"

NS_FGUI_BEGIN

class GTweener;

/// @brief 缓动管理器，管理所有活跃的 GTweener 实例。
///
/// TweenManager 负责：
/// - 创建和回收 GTweener（对象池模式）
/// - 每帧更新所有活跃的缓动
/// - 查询某个对象的缓动状态
/// - 终止指定对象的所有或指定类型的缓动
///
/// 所有 GTween 创建的缓动都会被 TweenManager 管理。
class TweenManager
{
public:
    /// @brief 创建或从池中获取一个 GTweener
    static GTweener* createTween();

    /// @brief 判断目标对象的指定属性是否正在缓动
    /// @param target 目标对象
    /// @param propType 属性类型
    static bool isTweening(RefCounted* target, TweenPropType propType);

    /// @brief 终止目标对象的指定属性的缓动
    /// @param target 目标对象
    /// @param propType 属性类型
    /// @param completed 是否视为完成（触发完成回调）
    static bool killTweens(RefCounted* target, TweenPropType propType, bool completed);

    /// @brief 终止目标对象的所有缓动（按指针匹配）
    static bool killTweensAny(void* target, bool completed);

    /// @brief 获取目标对象指定属性的缓动（如果存在）
    static GTweener* getTween(RefCounted* target, TweenPropType propType);

    /// @brief 每帧更新所有活跃的缓动
    static void update(float dt);

    /// @brief 清理所有缓动资源
    static void clean();

    /// @brief 终止并移除所有缓动
    /// @param completed 是否视为完成
    static void killAll(bool completed = false);

    /// @brief 初始化缓动管理器
    static void init();

    /// @brief 缓动开始回调
    static void beginCallback(GTweener* tweener);

    /// @brief 缓动结束回调
    static void endCallback();

    /// @brief 当前是否正在更新缓动
    static bool isUpdating() { return _updating; }

    /// @brief 刷洗等待中的缓动（将其加入活跃列表）
    static void flushPendingTweeners();

private:
    static void flushKilledTweeners();
    static void reset();

    /// @brief 活跃缓动数组
    static Ref<GTweener>* _activeTweens;

    /// @brief 缓动对象池
    static std::vector<Ref<GTweener>> _tweenerPool;

    /// @brief 活跃缓动总数
    static int _totalActiveTweens;

    /// @brief 数组容量
    static int _arrayLength;

    /// @brief 是否已初始化
    static bool _inited;

    /// @brief 是否正在更新
    static bool _updating;

    /// @brief 当前正在执行的缓动
    static GTweener* _executingTweener;
};

NS_FGUI_END

#endif
