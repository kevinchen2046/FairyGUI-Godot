#ifndef __HITTEST_H__
#define __HITTEST_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

class GComponent;
#include "../GuiObjectFwd.h"
class ByteBuffer;

/// @brief 命中测试接口。
/// 实现此接口可自定义组件的命中判定逻辑（如不规则形状点击检测）。
class IHitTest
{
public:
    virtual ~IHitTest() = default;

    /** 判断指定局部坐标系下的点是否命中。
     * @param obj 被测试的组件。
     * @param localPoint 局部坐标点。
     * @return true 表示命中。
     */
    virtual bool hitTest(GComponent* obj, const Vector2& localPoint)
    {
        return true;
    }
};

/// @brief 像素级命中测试数据。
/// 从 UI 包中读取的像素级透明度数据，用于精确判定点击是否在物体轮廓内。
class PixelHitTestData
{
public:
    int pixelWidth;           ///< 像素数据宽度。
    float scale;              ///< 缩放比例。
    unsigned char* pixels;    ///< 像素数据（RGBA 格式）。
    size_t pixelsLength;      ///< 像素数据长度。

    PixelHitTestData();
    ~PixelHitTestData();

    /** 从二进制缓冲区加载像素数据。 */
    void load(ByteBuffer* buffer);
};

/// @brief 像素级命中测试实现。
/// 通过检查 alpha 通道值判定是否命中（通常用于精确点击检测）。
class PixelHitTest : public IHitTest
{
public:
    /** 构造像素命中测试。
     * @param data 像素数据。
     * @param offsetX X 方向偏移。
     * @param offsetY Y 方向偏移。
     */
    PixelHitTest(PixelHitTestData* data, int offsetX, int offsetY);

    virtual bool hitTest(GComponent* obj, const Vector2& localPoint) override;

    int offsetX;   ///< X 方向偏移。
    int offsetY;   ///< Y 方向偏移。
    float scaleX;  ///< X 方向缩放。
    float scaleY;  ///< Y 方向缩放。

private:
    PixelHitTestData* _data;
};

/// @brief 子对象命中区域。
/// 将命中测试委托给指定的子对象。
class ChildHitArea : public IHitTest
{
public:
    explicit ChildHitArea(GObject* child);

    virtual bool hitTest(GComponent* obj, const Vector2& localPoint) override;
    /** 在画布坐标空间进行命中测试。 */
    bool hitTestCanvas(GComponent* obj, const Vector2& canvasPoint);

    /** 获取作为命中区域使用的子对象。 */
    GObject* getHitChild() const { return _child; }

private:
    GObject* _child;
};

NS_FGUI_END

#endif
