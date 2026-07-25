#ifndef __UIEVENTTYPE_H__
#define __UIEVENTTYPE_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

/// @brief UI 事件类型常量定义。
/// 所有事件类型均为静态常量，通过这些常量注册和识别事件类型。
class UIEventType
{
public:
    // ===== 基础事件 =====
    static const int Enter = 0;    ///< 进入事件（组件进入场景时）。
    static const int Exit = 1;     ///< 退出事件（组件退出场景时）。
    static const int Changed = 2;  ///< 值变化事件（控制器页面切换时）。
    static const int Submit = 3;   ///< 提交事件（文本框提交时）。

    // ===== 触摸/鼠标事件 =====
    static const int TouchBegin = 10;  ///< 触摸/鼠标按下开始。
    static const int TouchMove = 11;   ///< 触摸/鼠标移动。
    static const int TouchEnd = 12;    ///< 触摸/鼠标释放。
    static const int Click = 13;       ///< 点击事件（按下并释放在同一位置）。
    static const int RollOver = 14;    ///< 鼠标悬停进入事件。
    static const int RollOut = 15;     ///< 鼠标悬停离开事件。
    static const int MouseWheel = 16;  ///< 鼠标滚轮事件。
    static const int RightClick = 17;  ///< 右键点击事件。
    static const int MiddleClick = 18; ///< 中键点击事件。

    // ===== 变换事件 =====
    static const int PositionChange = 20; ///< 位置变化事件。
    static const int SizeChange = 21;     ///< 尺寸变化事件。

    // ===== 键盘事件 =====
    static const int KeyDown = 30; ///< 键盘按下事件。
    static const int KeyUp = 31;   ///< 键盘释放事件。

    // ===== 滚动相关事件 =====
    static const int Scroll = 40;          ///< 滚动事件（滚动时持续触发）。
    static const int ScrollEnd = 41;       ///< 滚动结束事件。
    static const int PullDownRelease = 42; ///< 下拉释放事件。
    static const int PullUpRelease = 43;   ///< 上拉释放事件。

    // ===== 列表相关事件 =====
    static const int ClickItem = 50;     ///< 点击列表项事件。
    static const int ClickLink = 51;     ///< 点击链接事件（富文本中的链接）。
    static const int ClickMenu = 52;     ///< 点击菜单项事件。
    static const int RightClickItem = 53; ///< 右键点击列表项事件。

    // ===== 拖放事件 =====
    static const int DragStart = 60; ///< 拖曳开始事件。
    static const int DragMove = 61;  ///< 拖曳移动事件。
    static const int DragEnd = 62;   ///< 拖曳结束事件。
    static const int Drop = 63;      ///< 放置事件（拖放目标接收）。

    // ===== 关联动画事件 =====
    static const int GearStop = 70;  ///< Gear 动画停止事件。
};

NS_FGUI_END

#endif
