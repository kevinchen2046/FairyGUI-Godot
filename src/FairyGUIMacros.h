#ifndef __FAIRYGUIMACROS_H__
#define __FAIRYGUIMACROS_H__

/// @file    FairyGUIMacros.h
/// @brief   命名空间宏和 FairyGUI 核心宏定义

/// @def NS_FGUI_BEGIN
/// @brief FairyGUI 命名空间开始（namespace fairygui {）

/// @def NS_FGUI_END
/// @brief FairyGUI 命名空间结束（}）

/// @def USING_NS_FGUI
/// @brief 引入 FairyGUI 命名空间（using namespace fairygui）

// 在包含任何使用这些宏的头文件之前定义命名空间宏
#define NS_FGUI_BEGIN                     namespace fairygui {
#define NS_FGUI_END                       }
#define USING_NS_FGUI                     using namespace fairygui

#include "godot_types.h"
#include "FieldTypes.h"

/// @def CALL_LATER_FUNC(__TYPE__, __FUNC__)
/// @brief 声明延迟调用的成员函数。在 Godot 中使用 call_deferred。
/// @param __TYPE__ 类名
/// @param __FUNC__ 函数名
#define CALL_LATER_FUNC(__TYPE__,__FUNC__) \
    void __FUNC__()

/// @def CALL_LATER(__TYPE__, __FUNC__, ...)
/// @brief 延迟调用成员函数。内部使用 godot 的 call_deferred 机制。
/// @param __TYPE__ 类名
/// @param __FUNC__ 函数名
#define CALL_LATER(__TYPE__,__FUNC__,...) \
    { \
        _deferredCallsCancelled = false; \
        call_deferred(StringName(#__FUNC__)); \
    }

/// @def CALL_LATER_CANCEL(__TYPE__, __FUNC__)
/// @brief 取消之前调度的延迟调用
/// @param __TYPE__ 类名
/// @param __FUNC__ 函数名
#define CALL_LATER_CANCEL(__TYPE__,__FUNC__) \
    _deferredCallsCancelled = true

/// @def FAIRYGUI_CREATE(TYPE)
/// @brief 创建 FairyGUI 对象的工厂方法宏。
///
/// 返回 Ref<TYPE>。memnew 将 refcount 设为 1，Ref<TYPE>(pRet) 调用 reference() 加 1（refcount=2）。
/// 当返回的 Ref<> 被存储（例如在 _children 中）时，refcount 反映所有活跃引用。
/// 对象会在最后一个 Ref<> 析构时自动释放。
///
/// GDExtension 模式下，直接从 Ref 构造；非 GDExtension 模式下需要额外封装。
#ifdef FGUI_GDEXTENSION
#define FAIRYGUI_CREATE(TYPE) \
    static Ref<TYPE> create() { \
        Ref<TYPE> pRet = memnew(TYPE); \
        if (pRet->init()) \
            return pRet; \
        return Ref<TYPE>(); \
    }
#else
#define FAIRYGUI_CREATE(TYPE) \
    static Ref<TYPE> create() { \
        TYPE* pRet = memnew(TYPE); \
        if (pRet->init()) \
            return Ref<TYPE>(pRet); \
        memdelete(pRet); \
        return Ref<TYPE>(); \
    }
#endif

#endif
