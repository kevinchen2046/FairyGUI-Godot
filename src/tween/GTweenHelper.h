#ifndef __GTWEEN_HELPER_H__
#define __GTWEEN_HELPER_H__

#include "FairyGUIMacros.h"
#include "GTweener.h"

NS_FGUI_BEGIN

/// @brief 缓动助手，提供便捷的缓动创建方法。
///
/// GTweenHelper 简化了 GTween 的使用，内置了常用类型的 to() 方法
/// （float、Vector2、Vector3、Vector4、Color、double），
/// 以及 delayedCall（延迟调用）和 shake（抖动效果）。
///
/// @code
/// # GDScript 示例
/// var helper = GTweenHelper.get_instance()
/// helper.to_float(0.0, 1.0, 0.5).set_target(node).set_on_update(callable)\n/// @endcode
class GTweenHelper : public RefCounted
{
    GDCLASS(GTweenHelper, RefCounted)

public:
    /// @brief 获取全局单例
    static GTweenHelper* getInstance();
    static Ref<GTweenHelper> gd_getInstance() { return Ref<GTweenHelper>(getInstance()); }

    /// @brief 创建 float 类型缓动
    GTweener* to_float(float start, float end, float duration);

    /// @brief 创建 Vector2 类型缓动
    GTweener* to_vec2(const Vector2& start, const Vector2& end, float duration);

    /// @brief 创建 Vector3 类型缓动
    GTweener* to_vec3(const Vector3& start, const Vector3& end, float duration);

    /// @brief 创建 Vector4 类型缓动
    GTweener* to_vec4(const Vector4& start, const Vector4& end, float duration);

    /// @brief 创建 Color 类型缓动
    GTweener* to_color(const Color& start, const Color& end, float duration);

    /// @brief 创建 double 类型缓动
    GTweener* to_double(double start, double end, float duration);

    /// @brief 创建延迟调用
    GTweener* delayedCall(float delay);

    /// @brief 创建抖动效果
    /// @param start 起始位置
    /// @param amplitude 抖动幅度
    /// @param duration 持续时间
    GTweener* shake(const Vector2& start, float amplitude, float duration);

    // ---- GDScript 包装方法 ----
    Ref<GTweener> gd_to_float(float start, float end, float duration);
    Ref<GTweener> gd_to_vec2(const Vector2& start, const Vector2& end, float duration);
    Ref<GTweener> gd_to_vec3(const Vector3& start, const Vector3& end, float duration);
    Ref<GTweener> gd_to_vec4(const Vector4& start, const Vector4& end, float duration);
    Ref<GTweener> gd_to_color(const Color& start, const Color& end, float duration);
    Ref<GTweener> gd_to_double(double start, double end, float duration);
    Ref<GTweener> gd_delayedCall(float delay);
    Ref<GTweener> gd_shake(const Vector2& start, float amplitude, float duration);

    /// @brief 目标对象是否有正在进行的缓动
    bool isTweening(RefCounted* target);

    /// @brief 终止目标对象的缓动
    /// @param target 目标对象
    /// @param complete 是否视为完成
    void kill(RefCounted* target, bool complete);

    /// @brief 清理所有缓动
    void clean();

    /// @brief 终止所有缓动
    /// @param complete 是否视为完成
    void killAll(bool complete = false);

    static void _bind_methods();

private:
    static GTweenHelper* _inst;
};

NS_FGUI_END

#endif
