#ifndef __GODOT_TYPES_H__
#define __GODOT_TYPES_H__

/// @file    godot_types.h
/// @brief   FairyGUI 从 cocos2d-x 移植到 Godot 的类型映射和头文件聚合。
///
/// 本文件提供：
/// - STL 标准库头文件（所有 FairyGUI 头文件需要的公共依赖）
/// - Godot 引擎头文件（GDExtension 或引擎内建模块两种构建模式）
/// - Rect 类型别名（Rect = Rect2）
/// - EMPTY_STRING 空字符串常量
/// - 数学工具常量（M_PI, MATH_DEG_TO_RAD）
/// - FGUI_CREATE/FGUI_DELETE 内存管理宏

// ---- STL 标准库 ----
#include <functional>
#include <vector>
#include <unordered_map>
#include <string>
#include <algorithm>
#include <cmath>
#include <cstring>
#include <cstdlib>
#include <climits>

// ---- Godot 引擎头文件 ----
// GDExtension 模式下使用 godot-cpp 的公开 API；
// 引擎内建模式下使用 Godot 引擎原始头文件。
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/camera2d.hpp>
#include <godot_cpp/classes/canvas_layer.hpp>
#include <godot_cpp/classes/canvas_item.hpp>
#include <godot_cpp/classes/control.hpp>
#include <godot_cpp/classes/file_access.hpp>
#include <godot_cpp/classes/font.hpp>
#include <godot_cpp/classes/image.hpp>
#include <godot_cpp/classes/image_texture.hpp>
#include <godot_cpp/classes/node.hpp>
#include <godot_cpp/classes/node2d.hpp>
#include <godot_cpp/classes/object.hpp>
#include <godot_cpp/classes/ref_counted.hpp>
#include <godot_cpp/classes/sprite2d.hpp>
#include <godot_cpp/classes/style_box.hpp>
#include <godot_cpp/classes/texture2d.hpp>
#include <godot_cpp/core/memory.hpp>
#include <godot_cpp/templates/vector.hpp>
#include <godot_cpp/variant/array.hpp>
#include <godot_cpp/variant/color.hpp>
#include <godot_cpp/variant/rect2.hpp>
#include <godot_cpp/variant/string.hpp>
#include <godot_cpp/variant/transform2d.hpp>
#include <godot_cpp/variant/variant.hpp>
#include <godot_cpp/variant/vector2.hpp>
#include <godot_cpp/variant/vector3.hpp>
#include <godot_cpp/variant/vector4.hpp>
using namespace godot;
using CanvasLayer = godot::CanvasLayer;
#else
#include "core/object/ref_counted.h"
#include "core/object/object.h"
#include "core/os/memory.h"
#include "core/io/image.h"
#include "core/io/file_access.h"
#include "core/math/vector2.h"
#include "core/math/vector3.h"
#include "core/math/rect2.h"
#include "core/math/color.h"
#include "core/math/transform_2d.h"
#include "core/variant/variant.h"
#include "core/variant/array.h"
#include "core/string/ustring.h"
#include "core/templates/vector.h"

#include "scene/main/node.h"
#include "scene/2d/node_2d.h"
#include "scene/main/canvas_item.h"
#include "scene/gui/control.h"
#include "scene/resources/texture.h"
#include "scene/resources/image_texture.h"
#include "scene/resources/style_box.h"
#include "scene/resources/font.h"
#include "scene/2d/sprite_2d.h"
#include "scene/2d/camera_2d.h"
#include "core/math/vector4.h"
#endif

/// @brief Rect 类型别名，与 Godot 的 Rect2 等价。
/// 保留以便与 cocos2d 原有代码兼容。
using Rect = Rect2;

/// @brief 空字符串常量，替代 cocos2d 的 EMPTY_STRING 宏。
const std::string EMPTY_STRING;

// ---- 数学工具 ----
#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

/// @brief 角度转弧度宏
#define MATH_DEG_TO_RAD(angle) ((angle) * 3.14159265358979323846f / 180.0f)

// ---- Godot 内存管理助手 ----
#define FGUI_CREATE(T) memnew(T)
#define FGUI_DELETE(T) do { delete (T); (T) = nullptr; } while(0)

#endif
