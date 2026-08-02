#ifndef __PACKAGEITEM_H__
#define __PACKAGEITEM_H__

#include "FairyGUIMacros.h"
#include "godot_types.h"

NS_FGUI_BEGIN

class UIPackage;
class UIObjectFactory;
class GComponent;
class BitmapFont;
class PixelHitTestData;
class ByteBuffer;

/// @brief 图像帧数据，描述一张纹理中某个子图的信息。
struct ImageFrame
{
    /// @brief 纹理引用
    Ref<Texture2D> texture;

    /// @brief 子图在纹理中的区域（像素坐标）
    Rect2 region;

    /// @brief 子图是否在纹理中旋转了
    bool rotated;

    /// @brief 子图偏移量（裁剪后的偏移）
    Vector2 offset;

    /// @brief 原始尺寸（逻辑点）
    Vector2 originalSize;

    /// @brief 原始像素尺寸
    Vector2 originalSizeInPixels;

    ImageFrame()
        : region()
        , rotated(false)
        , offset()
        , originalSize()
        , originalSizeInPixels()
    {
    }

    ~ImageFrame() {}
};

/// @brief 影片剪辑的单帧数据
struct MovieClipFrameData
{
    /// @brief 帧图像数据
    ImageFrame imageData;

    /// @brief 当前帧的额外延迟时间
    float addDelay;

    MovieClipFrameData() : imageData(), addDelay(0) {}
};

/// @brief 影片剪辑动画数据
struct MovieClipData
{
    /// @brief 帧列表
    std::vector<MovieClipFrameData> frames;

    /// @brief 帧间隔
    float interval;

    /// @brief 循环间隔（循环播放时帧之间的延迟）
    float repeatDelay;

    /// @brief 是否摇摆模式（正反向交替播放）
    bool swing;

    MovieClipData()
        : interval(0)
        , repeatDelay(0)
        , swing(false)
    {
    }
};

/// @brief 包资源项，表示 UI 包中的一个元素（图片、字体、组件、影片剪辑等）。
///
/// PackageItem 是 UIPackage 中所有资源的基本单元。
/// 每种资源类型使用不同的数据字段存储其内容：
/// - IMAGE：texture, imageFrame, scale9Grid, pixelHitTestData
/// - MOVIECLIP：movieclip
/// - FONT：bitmapFont
/// - COMPONENT：rawData（组件的二进制描述数据）
class PackageItem
{
public:
    PackageItem();
    virtual ~PackageItem();

    /// @brief 加载资源项的数据
    void load();

    /// @brief 获取分支变体（用于多语言/多平台）
    PackageItem* getBranch();

    /// @brief 获取高分辨率变体
    PackageItem* getHighResolution();

public:
    /// @brief 所属的 UI 包
    UIPackage* owner;

    /// @brief 资源类型
    PackageItemType type;

    /// @brief 对象类型（仅对组件有效）
    ObjectType objectType;

    /// @brief 资源 ID
    std::string id;

    /// @brief 资源名称
    std::string name;

    /// @brief 宽度
    int width;

    /// @brief 高度
    int height;

    /// @brief 文件名
    std::string file;

    /// @brief 原始二进制数据（组件用）
    ByteBuffer* rawData;

    /// @brief 分支名称列表
    std::vector<std::string>* branches;

    /// @brief 高分辨率资源名列表
    std::vector<std::string>* highResolution;

    // ---- 纹理/图集数据 ----
    Ref<Texture2D> texture;

    // ---- 图像数据 ----
    /// @brief 九宫格区域
    Rect2 scale9Grid;

    /// @brief 是否使用平铺缩放
    bool scaleByTile;

    /// @brief 平铺缩影索引
    int tileGridIndice;

    /// @brief 九宫格数据是否有效
    bool hasScale9Grid;

    /// @brief 是否使用平滑（线性）纹理过滤
    bool smoothing;

    /// @brief 图像帧数据
    ImageFrame imageFrame;

    /// @brief 像素级碰撞检测数据
    PixelHitTestData* pixelHitTestData;

    // ---- 影片剪辑数据 ----
    MovieClipData* movieclip;
    float repeatDelay;
    bool swing;

    // ---- 组件数据 ----
    /// @brief 扩展组件创建函数（用于 GDScript/C# 扩展组件）
    std::function<Ref<GComponent>()> extensionCreator;

    /// @brief 是否已翻译
    bool translated;

    // ---- 字体数据 ----
    BitmapFont* bitmapFont;

    // ---- 骨骼动画数据 ----
    /// @brief Spine 骨骼锚点
    Vector2 skeletonAnchor;

    /// @brief 骨骼锚点是否有效
    bool hasSkeletonAnchor;
};

NS_FGUI_END

#endif
