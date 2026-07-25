#ifndef __ACTION_MOVIE_CLIP_H__
#define __ACTION_MOVIE_CLIP_H__

#include "FairyGUIMacros.h"
#include "PackageItem.h"
#include <functional>

NS_FGUI_BEGIN

class FUISprite;

/// @brief 影片剪辑播放控制器，驱动 GMovieClip 的帧动画播放。
///
/// ActionMovieClip 负责管理帧动画的时间推进、循环控制、播放参数等。
/// 支持正向/反向播放、摇摆模式（swing）、重复延迟等。
class ActionMovieClip
{
public:
    ActionMovieClip();
    ~ActionMovieClip() = default;

    /// @brief 创建影片剪辑控制器
    /// @param md 影片剪辑数据
    /// @param repeatDelay 重复延迟时间
    /// @param swing 是否摇摆模式（正反交替播放）
    static ActionMovieClip* create(MovieClipData* md, float repeatDelay = 0, bool swing = false);

    /// @brief 设置目标精灵（显示帧图用的 FUISprite）
    void setSprite(FUISprite* sprite) { _sprite = sprite; }

    /// @brief 设置动画数据
    /// @param md 影片剪辑数据
    /// @param repeatDelay 重复延迟时间
    /// @param swing 是否摇摆模式
    void setAnimation(MovieClipData* md, float repeatDelay = 0, bool swing = false);

    /// @brief 设置播放参数
    /// @param start 开始帧
    /// @param end 结束帧
    /// @param times 播放次数
    /// @param endAt 结束停留帧
    /// @param completeCallback 完成回调
    void setPlaySettings(int start, int end, int times, int endAt, std::function<void()> completeCallback = nullptr);

    /// @brief 设置时间缩放因子
    void setTimeScale(float ts) { _timeScale = ts; }

    /// @brief 获取时间缩放因子
    float getTimeScale() const { return _timeScale; }

    /// @brief 获取当前帧索引
    int getFrame() const { return _frame; }

    /// @brief 设置当前帧
    void setFrame(int f);

    /// @brief 推进一帧的时间
    /// @param dt 经过的时间（秒）
    void step(float dt);

    /// @brief 前进指定时间
    /// @param time 前进时间（秒）
    void advance(float time);

private:
    float getFrameDelay() const;
    void advanceOneFrame();
    void handlePlaySettingsAfterFrame();
    void drawFrame();

    /// @brief 目标精灵
    FUISprite* _sprite;

    /// @brief 影片剪辑数据
    MovieClipData* _md;

    /// @brief 时间缩放因子
    float _timeScale;

    /// @brief 重复延迟时间
    float _repeatDelay;

    /// @brief 是否摇摆模式
    bool _swing;

    /// @brief 当前帧索引
    int _frame;

    /// @brief 当前显示帧索引
    int _displayFrame;

    /// @brief 帧内累计时间
    float _frameElapsed;

    /// @brief 已重复次数
    int _repeatedCount;

    /// @brief 是否反向播放
    bool _reversed;

    /// @brief 播放开始帧
    int _start;

    /// @brief 播放结束帧
    int _end;

    /// @brief 播放次数
    int _times;

    /// @brief 结束停留帧
    int _endAt;

    /// @brief 播放状态：0-无, 1-准备下一次循环, 2-正在结束, 3-已结束
    int _status;

    /// @brief 播放完成回调
    std::function<void()> _completeCallback;
};

NS_FGUI_END

#endif
