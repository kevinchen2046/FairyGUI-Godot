#ifndef FGUI_GODOT_COMPAT_H
#define FGUI_GODOT_COMPAT_H

/// @file    fgui_godot_compat.h
/// @brief   Godot 版本兼容层，处理 GDExtension 和引擎内建模块之间的 API 差异。
///
/// 主要差异：
/// - 服务器头文件路径差异（Godot 4.6+ 移动了头文件位置）
/// - Dictionary::operator[] 在 GDExtension 中使用 .get() 代替

#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/display_server.hpp>
#include <godot_cpp/classes/rendering_server.hpp>
#include <godot_cpp/classes/text_server.hpp>
#include <godot_cpp/variant/dictionary.hpp>
using namespace godot;
#else
#include "core/version.h"
#include "core/variant/dictionary.h"

// Godot 4.6+ 将服务器头文件移到了子目录
#if GODOT_VERSION_MAJOR > 4 || (GODOT_VERSION_MAJOR == 4 && GODOT_VERSION_MINOR >= 6)
#  include "servers/rendering/rendering_server.h"
#  include "servers/display/display_server.h"
#  include "servers/text/text_server.h"
#else
#  include "servers/rendering_server.h"
#  include "servers/display_server.h"
#  include "servers/text_server.h"
#endif
#endif

/// @brief 安全的 Dictionary 取值函数。
///
/// Godot 4.6+：Dictionary::operator[] 在 key 不存在时抛出错误。
/// GDExtension：使用 .get() 方法。
/// @param p_dict 目标字典
/// @param p_key  查找的键
/// @return 找到的值，未找到返回空 Variant
inline Variant fgui_dictionary_get(const Dictionary& p_dict, const String& p_key)
{
#ifdef FGUI_GDEXTENSION
    return p_dict.get(p_key, Variant());
#else
    return p_dict.get_valid(p_key);
#endif
}

#endif
