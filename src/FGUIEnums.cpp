/**
 * @file    FGUIEnums.cpp
 * @author  Kevin.CodeBuddy.Auto
 * @date    2026-07-16
 * @brief   枚举常量类的 Godot 绑定实现
 * @details 每个类的 _bind_methods() 仅负责将对应 C++ enum class 的常量值
 *          通过 ClassDB::bind_integer_constant() 暴露到 GDScript。
 *          将原集中在 GuiObject 上的枚举拆分为独立类，每个类有自己的常量命名空间，
 *          从根源上避免同名常量的类级冲突。
 */

#include "FGUIEnums.h"

#ifdef FGUI_GDEXTENSION
#include <godot_cpp/core/class_db.hpp>
using namespace godot;
#else
#include "core/object/class_db.h"
#endif

NS_FGUI_BEGIN

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 RelationType 枚举常量（关联类型：24个值）
void GEnumRelation::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "LEFT_LEFT", static_cast<int64_t>(RelationType::Left_Left));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "LEFT_CENTER", static_cast<int64_t>(RelationType::Left_Center));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "LEFT_RIGHT", static_cast<int64_t>(RelationType::Left_Right));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "CENTER_CENTER", static_cast<int64_t>(RelationType::Center_Center));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "RIGHT_LEFT", static_cast<int64_t>(RelationType::Right_Left));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "RIGHT_CENTER", static_cast<int64_t>(RelationType::Right_Center));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "RIGHT_RIGHT", static_cast<int64_t>(RelationType::Right_Right));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "TOP_TOP", static_cast<int64_t>(RelationType::Top_Top));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "TOP_MIDDLE", static_cast<int64_t>(RelationType::Top_Middle));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "TOP_BOTTOM", static_cast<int64_t>(RelationType::Top_Bottom));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "MIDDLE_MIDDLE", static_cast<int64_t>(RelationType::Middle_Middle));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "BOTTOM_TOP", static_cast<int64_t>(RelationType::Bottom_Top));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "BOTTOM_MIDDLE", static_cast<int64_t>(RelationType::Bottom_Middle));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "BOTTOM_BOTTOM", static_cast<int64_t>(RelationType::Bottom_Bottom));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "WIDTH", static_cast<int64_t>(RelationType::Width));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "HEIGHT", static_cast<int64_t>(RelationType::Height));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "LEFTEXT_LEFT", static_cast<int64_t>(RelationType::LeftExt_Left));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "LEFTEXT_RIGHT", static_cast<int64_t>(RelationType::LeftExt_Right));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "RIGHTEXT_LEFT", static_cast<int64_t>(RelationType::RightExt_Left));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "RIGHTEXT_RIGHT", static_cast<int64_t>(RelationType::RightExt_Right));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "TOPEXT_TOP", static_cast<int64_t>(RelationType::TopExt_Top));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "TOPEXT_BOTTOM", static_cast<int64_t>(RelationType::TopExt_Bottom));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "BOTTOMEXT_TOP", static_cast<int64_t>(RelationType::BottomExt_Top));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "BOTTOMEXT_BOTTOM", static_cast<int64_t>(RelationType::BottomExt_Bottom));
    ClassDB::bind_integer_constant(get_class_static(), "RelationType", "SIZE", static_cast<int64_t>(RelationType::Size));
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 AlignType 枚举常量（水平对齐：3个值）
void GEnumAlign::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "AlignType", "LEFT", static_cast<int64_t>(AlignType::LEFT));
    ClassDB::bind_integer_constant(get_class_static(), "AlignType", "CENTER", static_cast<int64_t>(AlignType::CENTER));
    ClassDB::bind_integer_constant(get_class_static(), "AlignType", "RIGHT", static_cast<int64_t>(AlignType::RIGHT));
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 VertAlignType 枚举常量（垂直对齐：3个值）
void GEnumVAlign::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "VertAlignType", "TOP", static_cast<int64_t>(VertAlignType::TOP));
    ClassDB::bind_integer_constant(get_class_static(), "VertAlignType", "CENTER", static_cast<int64_t>(VertAlignType::CENTER));
    ClassDB::bind_integer_constant(get_class_static(), "VertAlignType", "BOTTOM", static_cast<int64_t>(VertAlignType::BOTTOM));
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 ObjectPropID 枚举常量（属性ID：10个值）
void GEnumProp::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "TEXT", static_cast<int64_t>(ObjectPropID::Text));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "ICON", static_cast<int64_t>(ObjectPropID::Icon));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "COLOR", static_cast<int64_t>(ObjectPropID::Color));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "OUTLINE_COLOR", static_cast<int64_t>(ObjectPropID::OutlineColor));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "PLAYING", static_cast<int64_t>(ObjectPropID::Playing));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "FRAME", static_cast<int64_t>(ObjectPropID::Frame));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "DELTA_TIME", static_cast<int64_t>(ObjectPropID::DeltaTime));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "TIME_SCALE", static_cast<int64_t>(ObjectPropID::TimeScale));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "FONT_SIZE", static_cast<int64_t>(ObjectPropID::FontSize));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectPropID", "SELECTED", static_cast<int64_t>(ObjectPropID::Selected));
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 ObjectType 枚举常量（对象类型：19个值）
void GEnumObject::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "IMAGE", static_cast<int64_t>(ObjectType::IMAGE));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "MOVIECLIP", static_cast<int64_t>(ObjectType::MOVIECLIP));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "SWF", static_cast<int64_t>(ObjectType::SWF));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "GRAPH", static_cast<int64_t>(ObjectType::GRAPH));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "LOADER", static_cast<int64_t>(ObjectType::LOADER));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "GROUP", static_cast<int64_t>(ObjectType::GROUP));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "TEXT", static_cast<int64_t>(ObjectType::TEXT));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "RICHTEXT", static_cast<int64_t>(ObjectType::RICHTEXT));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "INPUTTEXT", static_cast<int64_t>(ObjectType::INPUTTEXT));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "COMPONENT", static_cast<int64_t>(ObjectType::COMPONENT));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "LIST", static_cast<int64_t>(ObjectType::LIST));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "LABEL", static_cast<int64_t>(ObjectType::LABEL));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "BUTTON", static_cast<int64_t>(ObjectType::BUTTON));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "COMBOBOX", static_cast<int64_t>(ObjectType::COMBOBOX));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "PROGRESSBAR", static_cast<int64_t>(ObjectType::PROGRESSBAR));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "SLIDER", static_cast<int64_t>(ObjectType::SLIDER));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "SCROLLBAR", static_cast<int64_t>(ObjectType::SCROLLBAR));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "TREE", static_cast<int64_t>(ObjectType::TREE));
    ClassDB::bind_integer_constant(get_class_static(), "ObjectType", "LOADER3D", static_cast<int64_t>(ObjectType::LOADER3D));
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 PackageItemType 枚举常量（包资源类型：11个值）
void GEnumPackage::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "IMAGE", static_cast<int64_t>(PackageItemType::IMAGE));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "MOVIECLIP", static_cast<int64_t>(PackageItemType::MOVIECLIP));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "SOUND", static_cast<int64_t>(PackageItemType::SOUND));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "COMPONENT", static_cast<int64_t>(PackageItemType::COMPONENT));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "ATLAS", static_cast<int64_t>(PackageItemType::ATLAS));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "FONT", static_cast<int64_t>(PackageItemType::FONT));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "SWF", static_cast<int64_t>(PackageItemType::SWF));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "MISC", static_cast<int64_t>(PackageItemType::MISC));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "UNKNOWN", static_cast<int64_t>(PackageItemType::UNKNOWN));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "SPINE", static_cast<int64_t>(PackageItemType::SPINE));
    ClassDB::bind_integer_constant(get_class_static(), "PackageItemType", "DRAGONBONES", static_cast<int64_t>(PackageItemType::DRAGONBONES));
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 MouseButton 枚举常量（鼠标按钮：8个值）
void GEnumMouse::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "NONE", static_cast<int64_t>(MouseButton::NONE));
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "LEFT", static_cast<int64_t>(MouseButton::LEFT));
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "RIGHT", static_cast<int64_t>(MouseButton::RIGHT));
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "MIDDLE", static_cast<int64_t>(MouseButton::MIDDLE));
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "WHEEL_UP", static_cast<int64_t>(MouseButton::WHEEL_UP));
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "WHEEL_DOWN", static_cast<int64_t>(MouseButton::WHEEL_DOWN));
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "WHEEL_LEFT", static_cast<int64_t>(MouseButton::WHEEL_LEFT));
    ClassDB::bind_integer_constant(get_class_static(), "MouseButton", "WHEEL_RIGHT", static_cast<int64_t>(MouseButton::WHEEL_RIGHT));
}

/// @author Kevin.CodeBuddy.Auto / 2026-07-16
/// @brief 注册 KeyCode 枚举常量（键盘按键：17个值）
void GEnumKey::_bind_methods()
{
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "NONE", static_cast<int64_t>(KeyCode::NONE));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "BACKSPACE", static_cast<int64_t>(KeyCode::BACKSPACE));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "TAB", static_cast<int64_t>(KeyCode::TAB));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "ENTER", static_cast<int64_t>(KeyCode::ENTER));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "ESCAPE", static_cast<int64_t>(KeyCode::ESCAPE));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "SPACE", static_cast<int64_t>(KeyCode::SPACE));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "LEFT", static_cast<int64_t>(KeyCode::LEFT));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "UP", static_cast<int64_t>(KeyCode::UP));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "RIGHT", static_cast<int64_t>(KeyCode::RIGHT));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "DOWN", static_cast<int64_t>(KeyCode::DOWN));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "DELETE", static_cast<int64_t>(KeyCode::DELETE));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "A", static_cast<int64_t>(KeyCode::A));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "C", static_cast<int64_t>(KeyCode::C));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "V", static_cast<int64_t>(KeyCode::V));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "X", static_cast<int64_t>(KeyCode::X));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "Y", static_cast<int64_t>(KeyCode::Y));
    ClassDB::bind_integer_constant(get_class_static(), "KeyCode", "Z", static_cast<int64_t>(KeyCode::Z));
}

NS_FGUI_END
