#ifndef __GSLIDER_H__
#define __GSLIDER_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"

NS_FGUI_BEGIN

/// @brief 滑块组件，允许用户在一个范围内拖动滑块选择数值。
///
/// GSlider 由标题文本、进度条背景、进度条填充和滑块组成。
/// 支持水平/垂直方向（由组件编辑时的方向决定），支持最小/最大值范围。
class GSlider : public GComponent
{
    GDCLASS(GSlider, GComponent)

public:
    GSlider();
    virtual ~GSlider();

    FAIRYGUI_CREATE(GSlider)

    static void _bind_methods();

    /// @brief 获取标题类型（百分比/当前值/最大值等显示方式）
    ProgressTitleType getTitleType() const { return _titleType; }

    /// @brief 设置标题类型
    void setTitleType(ProgressTitleType value);

    /// @brief 获取最小值
    double getMin() const { return _min; }

    /// @brief 设置最小值
    void setMin(double value);

    /// @brief 获取最大值
    double getMax() const { return _max; }

    /// @brief 设置最大值
    void setMax(double value);

    /// @brief 获取当前值
    double getValue() const { return _value; }

    /// @brief 设置当前值
    void setValue(double value);

    /// @brief 是否只允许整数值
    bool getWholeNumbers() const { return _wholeNumbers; }

    /// @brief 设置是否只允许整数值
    void setWholeNumbers(bool value);

    /// @brief 是否允许点击进度条区域改变数值
    bool changeOnClick;

    /// @brief 是否允许拖拽滑块
    bool canDrag;

protected:
    virtual void onConstruct() override;
    virtual void handleSizeChanged() override;
    virtual void constructExtension(ByteBuffer* buffer) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;

    void update();
    void updateWithPercent(float percent, bool manual);

private:
    void onTouchBegin(EventContext* context);
    void onGripTouchBegin(EventContext* context);
    void onGripTouchMove(EventContext* context);

    double _min;
    double _max;
    double _value;
    ProgressTitleType _titleType;
    bool _reverse;
    bool _wholeNumbers;

    GObject* _titleObject;
    GObject* _barObjectH;
    GObject* _barObjectV;
    float _barMaxWidth;
    float _barMaxHeight;
    float _barMaxWidthDelta;
    float _barMaxHeightDelta;
    GObject* _gripObject;
    Vector2 _clickPos;
    float _clickPercent;
    float _barStartX;
    float _barStartY;
};

NS_FGUI_END

#endif
