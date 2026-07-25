#ifndef __WEAKPTR_H__
#define __WEAKPTR_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"

/// @brief 判断 GObject 是否仍然存活（是 Godot 活跃的 Object 实例）。
/// @param obj 要检查的对象
/// @return 如果存活返回该对象，否则返回 nullptr
GObject* resolve_live_gobject(GObject* obj);

/// @brief 注册一个活跃的 GObject（用于弱引用追踪）
void register_live_gobject(GObject* obj);

/// @brief 取消注册一个 GObject（对象已销毁时调用）
void unregister_live_gobject(GObject* obj);

/// @brief 弱引用指针，用于安全引用可能已被销毁的 GObject。
///
/// WeakPtr 通过内部 ID 跟踪 GObject 的生命周期。
/// 当目标对象被销毁后，ptr() 返回 nullptr，避免悬空指针。
/// 适用于回调、事件监听、缓存等场景。
class WeakPtr
{
public:
    WeakPtr();
    explicit WeakPtr(GObject* obj);
    explicit WeakPtr(const WeakPtr& other);
    explicit WeakPtr(WeakPtr&& other);
    ~WeakPtr();

    WeakPtr& operator= (const WeakPtr& other);
    WeakPtr& operator= (WeakPtr&& other);
    WeakPtr& operator= (GObject* obj);
    bool operator!= (const WeakPtr& v);
    bool operator!= (const WeakPtr& v) const;
    bool operator== (const WeakPtr& v);
    bool operator== (const WeakPtr& v) const;
    bool operator== (const GObject* v);
    bool operator== (const GObject* v) const { return ptr() == v; }

    /// @brief 获取指向的 GObject（如果已销毁则返回 nullptr）
    GObject* ptr() const;

    /// @brief 目标对象是否在舞台上
    bool onStage() const;

private:
    /// @brief 唯一的弱引用 ID
    uint64_t _id;

    static uint64_t add(GObject * obj);
    static GObject* remove(uint64_t id);
    static void markDisposed(GObject* obj);

    friend class GuiObject;
};

NS_FGUI_END

#endif
