#ifndef __UIOBJECTFACTORY_H__
#define __UIOBJECTFACTORY_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"
#include "PackageItem.h"
#include "GLoader.h"

NS_FGUI_BEGIN

/// @brief UI 对象工厂（C++ 核心层），负责创建 FairyGUI 所有运行时对象。
///
/// UIObjectFactory 提供：
/// - 按 URL 注册扩展组件工厂函数 (setPackageItemExtension)
/// - 按 PackageItem 或 ObjectType 创建对象 (newObject)
/// - 自定义 Loader 扩展注册 (setLoaderExtension)
///
/// 脚本层应通过 UIObjectFactoryHelper::setPackageItemExtension 注册扩展类型。
class UIObjectFactory
{
public:
    /// @brief GComponent 工厂函数类型
    typedef std::function<Ref<GComponent>()> GComponentCreator;

    /// @brief GLoader 工厂函数类型
    typedef std::function<Ref<GLoader>()> GLoaderCreator;

    /// @brief 注册扩展组件的工厂函数
    /// @param url 组件 URL（如 "ui://PackageName/ComponentName"）
    /// @param creator 工厂函数
    static void setPackageItemExtension(const std::string& url, GComponentCreator creator);

    /// @brief 根据 PackageItem 创建对象
    /// @param pi 包资源项
    /// @return 创建的 GObject
    static Ref<GObject> newObject(PackageItem* pi);

    /// @brief 根据对象类型创建对象
    /// @param type 对象类型
    /// @return 创建的 GObject
    static Ref<GObject> newObject(ObjectType type);

    /// @brief 注册自定义 Loader 工厂函数
    /// @param creator 工厂函数
    static void setLoaderExtension(GLoaderCreator creator);

private:
    /// @brief 解析 PackageItem 的扩展组件工厂
    static void resolvePackageItemExtension(PackageItem* pi);

    /// @brief 已注册的扩展组件工厂映射
    static std::unordered_map<std::string, GComponentCreator> _packageItemExtensions;

    /// @brief 自定义 Loader 工厂
    static GLoaderCreator _loaderCreator;

    friend class UIPackage;
};

NS_FGUI_END

#endif
