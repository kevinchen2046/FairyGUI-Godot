#ifndef __UIOBJECTFACTORY_HELPER_H__
#define __UIOBJECTFACTORY_HELPER_H__

#include "FairyGUIMacros.h"
#include "GObject.h"

NS_FGUI_BEGIN

/// @brief UIObjectFactory 的 Godot 脚本桥接层。
///
/// 将 GDScript / C# / TypeScript 的调用桥接到 C++ 核心 UIObjectFactory。
/// 提供两种扩展注册方式：
///
/// 1. **Script/Resource 方式（推荐）**：传入类引用，桥接层创建原生 GComponent 并挂载脚本
/// @code
/// # GDScript:
/// UIObjectFactoryHelper.get_instance().setPackageItemExtension("ui://...", MyComponent)
/// # C#:
/// UIObjectFactoryHelper.GetInstance().SetPackageItemExtension("ui://...", GD.Load<CSharpScript>("res://MyComponent.cs"))
/// @endcode
///
/// 2. **Callable 方式（TypeScript 等备选）**：传入工厂函数，由脚本层创建实例
/// @code
/// # TypeScript:
/// UIObjectFactoryHelper.get_instance().setPackageItemExtensionWithCreator("ui://...", () => new MyComponent())
/// @endcode
class UIObjectFactoryHelper : public RefCounted
{
    GDCLASS(UIObjectFactoryHelper, RefCounted)

public:
    /// @brief 获取全局单例
    static UIObjectFactoryHelper* getInstance();
    static Ref<UIObjectFactoryHelper> gd_getInstance() { return Ref<UIObjectFactoryHelper>(getInstance()); }

    /// @brief 通过 Script/Resource 类引用注册扩展组件（推荐方式，支持 GDScript / C#）
    /// @param url    组件 URL，如 "ui://PackageName/ComponentName"
    /// @param script GDScript 或 CSharpScript 资源引用，将挂载到新建的原生 GComponent
    void setPackageItemExtension(const String& url, const Ref<Resource>& script);

    /// @brief 通过 Callable 工厂函数注册扩展组件（备选方式，用于 TypeScript 等无法 extends ClassDB 类的场景）
    /// @param url     组件 URL
    /// @param creator 无参工厂函数，返回 GComponent 子类实例
    void setPackageItemExtensionWithCreator(const String& url, const Callable& creator);

    static void _bind_methods();

private:
    static UIObjectFactoryHelper* _inst;
};

NS_FGUI_END

#endif
