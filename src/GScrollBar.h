#ifndef __GSCROLLBAR_H__
#define __GSCROLLBAR_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"

NS_FGUI_BEGIN

/// @brief 滚动条组件，配合 ScrollPane 使用。
///
/// GScrollBar 由箭头按钮、滚动轨道和拖拽滑块组成。
/// 通过 setScrollPane() 绑定到一个 ScrollPane 实例，自动响应滚动位置变化。
class GScrollBar : public GComponent
{
    GDCLASS(GScrollBar, GComponent)

public:
    GScrollBar();
    virtual ~GScrollBar();

    FAIRYGUI_CREATE(GScrollBar)

    static void _bind_methods();

    /// @brief 绑定到指定的 ScrollPane
    /// @param target 目标滚动面板
    /// @param vertical 是否为垂直滚动条
    void setScrollPane(ScrollPane* target, bool vertical);

    /// @brief 设置显示百分比（滑块大小与轨道大小的比例）
    /// @param value 百分比 (0~1)
    void setDisplayPerc(float value);

    /// @brief 设置滚动百分比（滑块位置）
    /// @param value 百分比 (0~1)
    void setScrollPerc(float value);

    /// @brief 获取滑块的最小尺寸
    float getMinSize();

    /// @brief 滑块是否正在被拖拽
    bool _gripDragging;

protected:
    virtual void constructExtension(ByteBuffer* buffer) override;
    virtual void handleSizeChanged() override;

private:
    void onTouchBegin(EventContext* context);
    void onGripTouchBegin(EventContext* context);
    void onGripTouchMove(EventContext* context);
    void onGripTouchEnd(EventContext* context);
    void onArrowButton1Click(EventContext* context);
    void onArrowButton2Click(EventContext* context);

    /// @brief 拖拽滑块
    GObject* _grip;

    /// @brief 箭头按钮1（上/左）
    GObject* _arrowButton1;

    /// @brief 箭头按钮2（下/右）
    GObject* _arrowButton2;

    /// @brief 滚动轨道
    GObject* _bar;

    /// @brief 关联的 ScrollPane
    ScrollPane* _target;

    /// @brief 是否为垂直滚动条
    bool _vertical;

    /// @brief 滚动百分比
    float _scrollPerc;

    /// @brief 显示百分比
    float _displayPerc;

    /// @brief 是否固定滑块大小
    bool _fixedGripSize;

    /// @brief 拖拽偏移量
    Vector2 _dragOffset;
};

NS_FGUI_END

#endif
