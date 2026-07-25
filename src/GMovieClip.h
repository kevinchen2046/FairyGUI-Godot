#ifndef __GMOVIECLIP_H__
#define __GMOVIECLIP_H__

#include "FairyGUIMacros.h"
#include "GObject.h"
#include "ActionMovieClip.h"

NS_FGUI_BEGIN

class FUISprite;

/// @brief 影片剪辑组件，用于播放帧动画序列。
///
/// GMovieClip 基于 FairyGUI 编辑器中的影片剪辑资源。
/// 支持播放控制（play/stop）、帧控制、时间缩放、翻转、颜色调节等。
class GMovieClip : public GObject
{
    GDCLASS(GMovieClip, GuiObject)

public:
    GMovieClip();
    virtual ~GMovieClip();

    FAIRYGUI_CREATE(GMovieClip)

    static void _bind_methods();

    /// @brief 是否正在播放
    bool isPlaying() const { return _playing; }

    /// @brief 设置播放状态
    void setPlaying(bool value);

    /// @brief 获取当前帧索引
    int getFrame() const;

    /// @brief 设置当前帧索引
    void setFrame(int value);

    /// @brief 获取时间缩放因子
    float getTimeScale() const;

    /// @brief 设置时间缩放因子
    void setTimeScale(float value);

    /// @brief 前进指定时间
    /// @param time 前进时间（秒）
    void advance(float time);

    /// @brief 获取翻转模式
    FlipType getFlip() const;

    /// @brief 设置翻转模式
    void setFlip(FlipType value);
    int gd_getFlip() const { return static_cast<int>(getFlip()); }
    void gd_setFlip(int value) { setFlip(static_cast<FlipType>(value)); }

    /// @brief 获取颜色（色调）
    Color getColor() const;

    /// @brief 设置颜色（色调）
    void setColor(const Color& value);

    /// @brief 设置播放参数
    /// @param start 开始帧（默认 0）
    /// @param end 结束帧（默认 -1 表示末尾）
    /// @param times 播放次数（0=循环，1=播放一次）
    /// @param endAt 播放结束后停留的帧（-1 表示不改变）
    /// @param completeCallback 播放完成回调
    void setPlaySettings(int start = 0, int end = -1, int times = 0, int endAt = -1,
        std::function<void()> completeCallback = nullptr);

    /// @brief 从资源构建（实现基类虚方法）
    virtual void constructFromResource() override;

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    virtual void handleInit() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void handleGrayedChanged() override;
    virtual void handleSizeChanged() override;

private:
    void syncContentSize();

    /// @brief 显示内容的精灵
    FUISprite* _content;

    /// @brief 帧动画播放控制器
    ActionMovieClip* _playAction;

    /// @brief 是否正在播放
    bool _playing;

    /// @brief 翻转模式
    FlipType _flip;
};

NS_FGUI_END

#endif
