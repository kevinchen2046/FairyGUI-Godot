#ifndef __GGGRAPH_H__
#define __GGGRAPH_H__

#include "FairyGUIMacros.h"
#include "GObject.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

#ifdef FGUI_GDEXTENSION
void register_draw_node_class();
#endif

class DrawNode;

/// @brief 图形组件。
/// GGraph 对应编辑器里的图形对象。图形有两个用途：
/// 1. 显示简单的图形（矩形、椭圆、多边形等）。
/// 2. 作为一个占位用途，可以将本对象替换为其他对象，或在它的前后添加其他对象。
///
/// 提供 drawRect/drawEllipse/drawPolygon/drawRegularPolygon 等方法绘制图形，
/// 以及 setColor 设置图形颜色。
class GGraph : public GObject
{
    GDCLASS(GGraph, GuiObject)

public:
    GGraph();
    virtual ~GGraph();

    FAIRYGUI_CREATE(GGraph)

    static void _bind_methods();

    /** 绘制矩形。
     * @param aWidth 宽度。
     * @param aHeight 高度。
     * @param lineSize 线条粗细（0 表示不描边）。
     * @param lineColor 线条颜色。
     * @param fillColor 填充颜色。
     */
    void drawRect(float aWidth, float aHeight, int lineSize, const Color& lineColor, const Color& fillColor);
    /** 绘制椭圆。
     * @param aWidth 宽度。
     * @param aHeight 高度。
     * @param lineSize 线条粗细。
     * @param lineColor 线条颜色。
     * @param fillColor 填充颜色。
     */
    void drawEllipse(float aWidth, float aHeight, int lineSize, const Color& lineColor, const Color& fillColor);
    /** 绘制多边形。
     * @param lineSize 线条粗细。
     * @param lineColor 线条颜色。
     * @param fillColor 填充颜色。
     * @param points 顶点坐标数组。
     * @param count 顶点数量。
     */
    void drawPolygon(int lineSize, const Color& lineColor, const Color& fillColor, const Vector2* points, int count);
    /** 绘制正多边形。
     * @param lineSize 线条粗细。
     * @param lineColor 线条颜色。
     * @param fillColor 填充颜色。
     * @param sides 边数（3=三角形, 4=菱形, 5=五边形...）。
     * @param startAngle 起始角度（度数）。
     * @param distances 各顶点距离中心的距离数组（可选，nullptr 表示等距）。
     * @param distanceCount 距离数组长度。
     */
    void drawRegularPolygon(int lineSize, const Color& lineColor, const Color& fillColor, int sides, float startAngle = 0, const float* distances = nullptr, int distanceCount = 0);
    /** 是否为空（未绘制任何图形）。 */
    bool isEmpty() const { return _type == 0; }
    /** 获取图形类型（1=矩形, 2=椭圆, 3=多边形, 4=正多边形）。 */
    int getShapeType() const { return _type; }
    /** 获取多边形顶点列表。 */
    const std::vector<Vector2>* getPolygonPoints() const { return _polygonPoints; }

    /** 获取图形颜色。 */
    Color getColor() const;
    /** 设置图形颜色。 */
    void setColor(const Color& value);

    /** 图形命中检测（仅检测几何形状，忽略触摸/可见性）。 */
    bool hitTestShape(const Vector2& localPoint) const;

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

    virtual GObject* hitTest(const Vector2& worldPoint, const Camera2D* camera) override;

protected:
    virtual void handleInit() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void handleSizeChanged() override;
    virtual void applyPivotOffset() override;

private:
    void updateShape();

    int _type;                         ///< 图形类型。
    Color _lineColor;                  ///< 线条颜色。
    Color _fillColor;                  ///< 填充颜色。
    int _lineSize;                     ///< 线条粗细。
    float* _cornerRadius;              ///< 圆角半径。
    std::vector<Vector2>* _polygonPoints; ///< 多边形顶点列表。
    float _polygonBaseWidth;
    float _polygonPointOffset;
    int _sides;                        ///< 正多边形边数。
    float _startAngle;                 ///< 正多边形起始角度。
    std::vector<float>* _distances;    ///< 正多边形顶点距离数组。

    DrawNode* _shape;                  ///< 引擎绘制节点。
};

NS_FGUI_END

#endif
