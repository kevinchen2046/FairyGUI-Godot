#include "UIObjectFactoryHelper.h"
#include "UIObjectFactory.h"

NS_FGUI_BEGIN

UIObjectFactoryHelper* UIObjectFactoryHelper::_inst = nullptr;

UIObjectFactoryHelper* UIObjectFactoryHelper::getInstance()
{
    if (_inst == nullptr)
    {
#ifdef FGUI_GDEXTENSION
        Ref<UIObjectFactoryHelper> instance = memnew(UIObjectFactoryHelper);
        _inst = instance.ptr();
#else
        _inst = memnew(UIObjectFactoryHelper);
#endif
        _inst->reference();
    }
    return _inst;
}

/// @brief 通过 Script/Resource 类引用注册扩展组件（推荐方式）
/// 用 GComponent::create()（内部调用 memnew + init）创建实例，再 set_script() 挂载 GDScript。
/// _on_construct() 在 constructFromResource() 完成后调用。
/// @author Kevin.CodeBuddy.Auto / 2026-07-15
void UIObjectFactoryHelper::setPackageItemExtension(const String& url, const Ref<Resource>& script)
{
    if (script.is_null())
        return;

    UIObjectFactory::setPackageItemExtension(url.utf8().get_data(), [script]() -> Ref<GComponent> {
        Ref<GComponent> comp = GComponent::create();
        if (comp.is_valid())
            comp->set_script(script);
        return comp;
    });
}

/// @brief 通过 Callable 工厂函数注册扩展组件（备选方式）
/// 用于 TypeScript / GodotJS 等无法 extends ClassDB 类的脚本语言。
/// 工厂函数会在 constructFromResource() 之前被调用，因此脚本 _init() 时子节点尚未构建。
/// 建议结合 GComponent._on_construct() 回调处理初始化逻辑。
/// @author Kevin.CodeBuddy.Auto / 2026-07-15
void UIObjectFactoryHelper::setPackageItemExtensionWithCreator(const String& url, const Callable& creator)
{
    UIObjectFactory::setPackageItemExtension(url.utf8().get_data(), [creator]() -> Ref<GComponent> {
        Variant ret = creator.call();
        Object* obj = ret;
        GComponent* comp = Object::cast_to<GComponent>(obj);
        return Ref<GComponent>(comp);
    });
}

void UIObjectFactoryHelper::_bind_methods()
{
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getInstance"), &UIObjectFactoryHelper::gd_getInstance);
    ClassDB::bind_method(D_METHOD("setPackageItemExtension", "url", "script"), &UIObjectFactoryHelper::setPackageItemExtension);
    ClassDB::bind_method(D_METHOD("setPackageItemExtensionWithCreator", "url", "creator"), &UIObjectFactoryHelper::setPackageItemExtensionWithCreator);
}

NS_FGUI_END
