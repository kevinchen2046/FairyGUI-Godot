#ifndef __GPROGRESSBAR_H__
#define __GPROGRESSBAR_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"

NS_FGUI_BEGIN

/// @brief 进度条组件，用于显示一个操作的进度。
///
/// GProgressBar 由标题文本、进度条背景和进度条填充组成。
/// 支持水平/垂直方向，支持最小/最大值范围，支持缓动过渡动画。
class GProgressBar : public GComponent
{
    GDCLASS(GProgressBar, GComponent)

public:
    GProgressBar();
    virtual ~GProgressBar();

    FAIRYGUI_CREATE(GProgressBar)

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

    /// @brief 获取当前进度值
    double getValue() const { return _value; }

    /// @brief 设置当前进度值
    void setValue(double value);

    /// @brief 通过缓动动画过渡到目标值
    /// @param value 目标值
    /// @param duration 动画持续时间（秒）
    void tweenValue(double value, float duration);

    /// @brief 直接更新进度值并刷新显示
    /// @param newValue 新进度值
    void update(double newValue);

protected:
    virtual void handleSizeChanged() override;
    virtual void constructExtension(ByteBuffer* buffer) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;

    /// @brief 设置进度条填充对象的填充量
    /// @param bar 进度条对象
    /// @param amount 填充量 (0~1)
    /// @return 是否成功
    bool setFillAmount(GObject* bar, float amount);

private:
    double _min;
    double _max;
    double _value;
    ProgressTitleType _titleType;
    bool _reverse;

    GObject* _titleObject;
    GObject* _barObjectH;
    GObject* _barObjectV;
    float _barMaxWidth;
    float _barMaxHeight;
    float _barMaxWidthDelta;
    float _barMaxHeightDelta;
    float _barStartX;
    float _barStartY;
};

NS_FGUI_END

#endif
