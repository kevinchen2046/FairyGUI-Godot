/**
 * @file    FGUIEnums.h
 * @author  Kevin.CodeBuddy.Auto
 * @date    2026-07-16
 * @brief   FairyGUI 枚举常量类集合
 *
 * @details 【设计动机 - 为什么要拆分】
 *          原有设计将 RelationType、AlignType、ObjectType 等 8 个枚举全部集中
 *          在 GuiObject 上通过 ClassDB::bind_integer_constant() 注册。
 *
 *          Godot 的常量系统是类级别平坦命名空间，bind_integer_constant 的第二个参数
 *          （枚举分组名）仅用于编辑器补全提示的分组，不参与常量名的去重。
 *          因此不同枚举的同名常量（如 TEXT、LEFT、RIGHT、NONE、CENTER、IMAGE 等）
 *          会在 GuiObject 类级别产生冲突，导致 Godot 引擎加载时报错。
 *
 *          Godot 原生枚举的做法是为每个枚举的常量添加唯一前缀（如 PROCESS_MODE_INHERIT、
 *          MOUSE_FILTER_STOP 等），但 FairyGUI 的 C++ 层面使用 enum class 天然有
 *          命名空间隔离，不宜强行修改 C++ 枚举值名。
 *
 *          解决方案：将每个枚举拆分为独立的 RefCounted 子类。Godot 中每个 GDCLASS
 *          拥有独立的常量命名空间，即使不同类有同名常量也不会冲突。
 *
 *          GDScript 使用方式：
 *            var align = GEnumAlign.CENTER              # 类名直接访问
 *            var align = GEnumAlign.AlignType.CENTER    # 也可通过枚举标签访问
 *            var objType = GEnumObject.TEXT              # 不再与 ObjectPropID 的 TEXT 冲突
 *
 * @note   这些类不包含任何方法或属性，仅为枚举常量的容器。继承自 RefCounted，
 *          由 Godot 的引用计数系统管理生命周期，无需手动释放。
 */

#ifndef FGUI_ENUMS_H
#define FGUI_ENUMS_H

#include "FairyGUIMacros.h"
#include "RelationItem.h"
#include "event/InputEvent.h"

NS_FGUI_BEGIN

/// @brief 关联类型枚举容器（RelationType）
/// @details 定义 FairyGUI 对象之间的关联关系，如左对齐、居中对齐、宽度绑定等。
///          用于 GObject.addRelation() / removeRelation() 方法的参数。
///          GDScript: GEnumRelation.RelationType.LEFT_LEFT
class GEnumRelation : public RefCounted {
    GDCLASS(GEnumRelation, RefCounted)
    static void _bind_methods();
};

/// @brief 水平对齐枚举容器（AlignType）
/// @details 定义对象在水伂方向的对齐方式：左对齐(0)、居中(1)、右对齐(2)。
///          GDScript: GEnumAlign.AlignType.CENTER
class GEnumAlign : public RefCounted {
    GDCLASS(GEnumAlign, RefCounted)
    static void _bind_methods();
};

/// @brief 垂直对齐枚举容器（VertAlignType）
/// @details 定义对象在垂直方向的对齐方式：顶部对齐(0)、居中(1)、底部对齐(2)。
///          GDScript: GEnumVAlign.VertAlignType.CENTER
class GEnumVAlign : public RefCounted {
    GDCLASS(GEnumVAlign, RefCounted)
    static void _bind_methods();
};

/// @brief 对象属性ID枚举容器（ObjectPropID）
/// @details 定义可通过 GObject.setProp() / getProp() 操作的属性标识。
///          如文本内容(Text=0)、图标(Icon=1)、颜色(Color=2) 等。
///          GDScript: GEnumProp.ObjectPropID.TEXT
class GEnumProp : public RefCounted {
    GDCLASS(GEnumProp, RefCounted)
    static void _bind_methods();
};

/// @brief 对象类型枚举容器（ObjectType）
/// @details 定义 FairyGUI 所有对象类型的标识：IMAGE(0)、TEXT(6)、BUTTON(12) 等。
///          用于 GObject.type 属性做运行时类型判断。
///          GDScript: GEnumObject.ObjectType.IMAGE
class GEnumObject : public RefCounted {
    GDCLASS(GEnumObject, RefCounted)
    static void _bind_methods();
};

/// @brief 包资源类型枚举容器（PackageItemType）
/// @details 定义 UIPackage 中包含的资源类型：IMAGE(0)、MOVIECLIP(1)、FONT(5)、SPINE(9) 等。
///          GDScript: GEnumPackage.PackageItemType.IMAGE
class GEnumPackage : public RefCounted {
    GDCLASS(GEnumPackage, RefCounted)
    static void _bind_methods();
};

/// @brief 鼠标按钮枚举容器（MouseButton）
/// @details 定义鼠标按键标识：NONE(0)、LEFT(1)、RIGHT(2)、MIDDLE(3) 及滚轮方向。
///          用于 InputEvent.getButton() 返回值判断。
///          GDScript: GEnumMouse.MouseButton.LEFT
class GEnumMouse : public RefCounted {
    GDCLASS(GEnumMouse, RefCounted)
    static void _bind_methods();
};

/// @brief 键盘按键枚举容器（KeyCode）
/// @details 定义常用键盘按键码：方向键(LEFT=37, UP=38 等)、功能键(ENTER=13, ESCAPE=27)、
///          字母键(A=65 ~ Z=90)。用于 InputEvent.getKeyCode() 返回值判断。
///          GDScript: GEnumKey.KeyCode.LEFT
class GEnumKey : public RefCounted {
    GDCLASS(GEnumKey, RefCounted)
    static void _bind_methods();
};

NS_FGUI_END

#endif // FGUI_ENUMS_H
