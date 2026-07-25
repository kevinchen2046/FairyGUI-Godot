#ifndef __GUIOBJECT_FWD_H__
#define __GUIOBJECT_FWD_H__

/// @file    GuiObjectFwd.h
/// @brief   GObject/GuiObject 的前向声明头文件。
///
/// 须在 NS_FGUI_BEGIN 之后 include，且本头文件自身不再包含 namespace 声明。
/// 定义 GuiObject 类的前向声明和 GObject 别名，避免循环依赖。

// 需在 NS_FGUI_BEGIN 之后 include，且本头文件自身不得再包一层 namespace
#ifndef FAIRYGUI_GUIOBJECT_FWD_DECLARED
#define FAIRYGUI_GUIOBJECT_FWD_DECLARED
class GuiObject;                 ///< GuiObject 前向声明
using GObject = GuiObject;      ///< GObject 是 GuiObject 的别名（简化名称）
#endif

#endif
