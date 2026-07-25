#ifndef __GOBJECTPOOL_H__
#define __GOBJECTPOOL_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

#include "GuiObjectFwd.h"

/// @brief 对象池，用于缓存和复用 GObject 实例。
///
/// 通过 URL 作为键，缓存不再使用的 UI 对象，
/// 下次需要相同 URL 的对象时直接从池中获取，避免重复创建。
/// 常用于 GList 虚拟列表中的项目复用。
class GObjectPool
{
public:
    GObjectPool();
    ~GObjectPool();

    /// @brief 从对象池中获取指定 URL 的对象
    /// @param url UI 资源 URL
    /// @return 复用的对象（如果池中不存在则返回空引用）
    Ref<GObject> getObject(const std::string& url);

    /// @brief 将不再使用的对象归还到对象池
    /// @param obj 要归还的对象
    void returnObject(GObject* obj);

private:
    /// @brief 对象池存储（key=URL, value=对象列表）
    std::unordered_map<std::string, std::vector<Ref<GObject>>> _pool;
};

NS_FGUI_END

#endif
