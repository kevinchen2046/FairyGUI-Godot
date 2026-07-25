#ifndef __GPATH_H__
#define __GPATH_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

/// @brief 路径点，定义路径动画中的一个控制点。
///
/// 支持多种曲线类型：
/// - CRSpline：Catmull-Rom 样条曲线
/// - Bezier：贝塞尔曲线（单个控制点）
/// - CubicBezier：三次贝塞尔曲线（两个控制点）
/// - Straight：直线段
struct GPathPoint
{
    /// @brief 曲线类型枚举
    enum class CurveType
    {
        CRSpline,       ///< Catmull-Rom 样条曲线
        Bezier,         ///< 贝塞尔曲线
        CubicBezier,    ///< 三次贝塞尔曲线
        Straight        ///< 直线
    };

    /// @brief 控制点位置
    Vector3 pos;

    /// @brief 贝塞尔曲线控制点1
    Vector3 control1;

    /// @brief 贝塞尔曲线控制点2
    Vector3 control2;

    /// @brief 曲线类型
    CurveType curveType;

    GPathPoint(const Vector3& pos);
    GPathPoint(const Vector3& pos, const Vector3& control);
    GPathPoint(const Vector3& pos, const Vector3& control1, const Vector3& control2);
    GPathPoint(const Vector3& pos, CurveType curveType);
};

/// @brief 路径类，管理一组 GPathPoint 形成的路径。
///
/// GPath 用于 FairyGUI 的路径动画，可在 tween 中让对象沿路径移动。
/// 支持沿路径获取任意 t (0~1) 位置的点、以及按段获取路径点。
class GPath
{
public:
    GPath();

    /// @brief 通过点数组创建路径
    /// @param points 路径点数组
    /// @param count 点的数量
    void create(GPathPoint* points, int count);

    /// @brief 清空路径
    void clear();

    /// @brief 获取路径上 t 位置的点
    /// @param t 路径参数 (0~1)
    /// @return 路径上的点坐标
    Vector3 getPointAt(float t);

    /// @brief 获取路径总长度
    float getLength() { return _fullLength; }

    /// @brief 获取路径段数
    int getSegmentCount() { return (int)_segments.size(); }

    /// @brief 获取指定段的长度
    float getSegmentLength(int segmentIndex);

    /// @brief 获取指定段上等分后的路径点
    /// @param segmentIndex 段索引
    /// @param t0 起始参数 (0~1)
    /// @param t1 结束参数 (0~1)
    /// @param points 输出的点列表
    /// @param ts 输出的参数值列表（可选）
    /// @param pointDensity 采样密度
    void getPointsInSegment(int segmentIndex, float t0, float t1,
                            std::vector<Vector3>& points, std::vector<float>* ts = nullptr, float pointDensity = 0.1f);

    /// @brief 获取路径上所有等分点
    /// @param points 输出的点列表
    /// @param pointDensity 采样密度
    void getAllPoints(std::vector<Vector3>& points, float pointDensity = 0.1f);

    /// @brief 路径段定义
    struct Segment
    {
        GPathPoint::CurveType type;  ///< 曲线类型
        float length;                ///< 段长度
        int ptStart;                 ///< 起始点索引
        int ptCount;                 ///< 点数量
    };

private:
    void createSplineSegment();
    Vector3 onCRSplineCurve(int ptStart, int ptCount, float t);
    Vector3 onBezierCurve(int ptStart, int ptCount, float t);

    /// @brief 路径段列表
    std::vector<Segment> _segments;

    /// @brief 路径点列表
    std::vector<Vector3> _points;

    /// @brief 路径总长度
    float _fullLength;
};

NS_FGUI_END

#endif
