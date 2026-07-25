#ifndef __FIELDTYPES_H__
#define __FIELDTYPES_H__

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

/// @brief 包资源类型枚举
enum class PackageItemType
{
    IMAGE,          ///< 图片
    MOVIECLIP,      ///< 影片剪辑
    SOUND,          ///< 声音
    COMPONENT,      ///< 组件
    ATLAS,          ///< 图集
    FONT,           ///< 字体
    SWF,            ///< SWF（已废弃）
    MISC,           ///< 其他
    UNKNOWN,        ///< 未知类型
    SPINE,          ///< Spine 骨骼动画
    DRAGONBONES     ///< DragonBones（已废弃）
};

/// @brief 对象类型枚举，标识 FairyGUI 组件的运行时类型
enum class ObjectType
{
    IMAGE,          ///< GImage
    MOVIECLIP,      ///< GMovieClip
    SWF,            ///< (已废弃)
    GRAPH,          ///< GGraph
    LOADER,         ///< GLoader
    GROUP,          ///< GGroup
    TEXT,           ///< GTextField
    RICHTEXT,       ///< GRichTextField
    INPUTTEXT,      ///< GTextInput
    COMPONENT,      ///< GComponent
    LIST,           ///< GList
    LABEL,          ///< GLabel
    BUTTON,         ///< GButton
    COMBOBOX,       ///< GComboBox
    PROGRESSBAR,    ///< GProgressBar
    SLIDER,         ///< GSlider
    SCROLLBAR,      ///< GScrollBar
    TREE,           ///< GTree
    LOADER3D        ///< GLoader3D
};

/// @brief 按钮模式枚举
enum class ButtonMode
{
    COMMON,     ///< 普通按钮
    CHECK,      ///< 复选框按钮
    RADIO       ///< 单选按钮
};

/// @brief 子节点渲染顺序
enum class ChildrenRenderOrder
{
    ASCENT,     ///< 升序
    DESCENT,    ///< 降序
    ARCH,       ///< 拱形（从两边到中间）
};

/// @brief 溢出类型枚举
enum class OverflowType
{
    VISIBLE,    ///< 可见（不裁剪）
    HIDDEN,     ///< 隐藏（裁剪）
    SCROLL      ///< 滚动
};

/// @brief 滚动类型枚举
enum class ScrollType
{
    HORIZONTAL, ///< 水平滚动
    VERTICAL,   ///< 垂直滚动
    BOTH        ///< 双向滚动
};

/// @brief 滚动条显示类型
enum class ScrollBarDisplayType
{
    DEFAULT,    ///< 默认
    VISIBLE,    ///< 始终可见
    AUTO,       ///< 自动（滚动时显示）
    HIDDEN      ///< 始终隐藏
};

/// @brief 加载器填充模式
enum class LoaderFillType
{
    NONE,               ///< 无缩放
    SCALE,              ///< 等比缩放
    SCALE_MATCH_HEIGHT, ///< 等比缩放匹配高度
    SCALE_MATCH_WIDTH,  ///< 等比缩放匹配宽度
    SCALE_FREE,         ///< 自由缩放（拉伸）
    SCALE_NO_BORDER     ///< 无边框缩放
};

/// @brief 进度条标题类型
enum class ProgressTitleType
{
    PERCENT,    ///< 百分比显示
    VALUE_MAX,  ///< 值/最大值
    VALUE,      ///< 仅当前值
    MAX         ///< 仅最大值
};

/// @brief 列表布局类型
enum class ListLayoutType
{
    SINGLE_COLUMN,      ///< 单列
    SINGLE_ROW,         ///< 单行
    FLOW_HORIZONTAL,    ///< 水平流动
    FLOW_VERTICAL,      ///< 垂直流动
    PAGINATION          ///< 分页
};

/// @brief 列表选择模式
enum class ListSelectionMode
{
    SINGLE,                 ///< 单选
    MULTIPLE,               ///< 多选
    MULTIPLE_SINGLECLICK,   ///< 单击多选
    NONE                    ///< 不可选
};

/// @brief 编组布局类型
enum class GroupLayoutType
{
    NONE,           ///< 无布局
    HORIZONTAL,     ///< 水平布局
    VERTICAL        ///< 垂直布局
};

/// @brief 弹出方向
enum class PopupDirection
{
    AUTO,   ///< 自动选择方向
    UP,     ///< 向上弹出
    DOWN    ///< 向下弹出
};

/// @brief 自动尺寸类型
enum class AutoSizeType
{
    NONE,       ///< 无自动调整
    BOTH,       ///< 双向调整
    HEIGHT,     ///< 仅高度自动
    SHRINK      ///< 收缩模式
};

/// @brief 翻转类型
enum class FlipType
{
    NONE,           ///< 无翻转
    HORIZONTAL,     ///< 水平翻转
    VERTICAL,       ///< 垂直翻转
    BOTH            ///< 双向翻转
};

/// @brief 水平对齐方式
enum class AlignType
{
    LEFT = 0,       ///< 左对齐
    CENTER = 1,     ///< 居中对齐
    RIGHT = 2       ///< 右对齐
};

/// @brief 垂直对齐方式
enum class VertAlignType
{
    TOP = 0,        ///< 顶部对齐
    CENTER = 1,     ///< 垂直居中
    BOTTOM = 2      ///< 底部对齐
};

/// @brief 过渡动画动作类型
enum class TransitionActionType
{
    XY,             ///< 位置变化
    Size,           ///< 大小变化
    Scale,          ///< 缩放
    Pivot,          ///< 轴心点
    Alpha,          ///< 透明度
    Rotation,       ///< 旋转
    Color,          ///< 颜色变化
    Animation,      ///< 帧动画
    Visible,        ///< 可见性
    Sound,          ///< 声音
    Transition,     ///< 子过渡动画
    Shake,          ///< 抖动
    ColorFilter,    ///< 颜色滤镜
    Skew,           ///< 倾斜
    Text,           ///< 文本
    Icon,           ///< 图标
    Unknown         ///< 未知
};

/// @brief 填充方法枚举（进度条、图片的填充方式）
enum class FillMethod
{
    None,           ///< 无填充
    Horizontal,     ///< 水平方向填充
    Vertical,       ///< 垂直方向填充
    Radial90,       ///< 径向 90° 填充
    Radial180,      ///< 径向 180° 填充
    Radial360,      ///< 径向 360° 填充
};

/// @brief 填充起点枚举
enum class FillOrigin
{
    Top,            ///< 顶部
    Bottom,         ///< 底部
    Left,           ///< 左侧
    Right           ///< 右侧
};

/// @brief 对象属性 ID 枚举，用于 getProp/setProp 通用属性访问
enum class ObjectPropID {
    Text,           ///< 文本内容
    Icon,           ///< 图标
    Color,          ///< 颜色
    OutlineColor,   ///< 描边颜色
    Playing,        ///< 是否播放（MovieClip）
    Frame,          ///< 当前帧
    DeltaTime,      ///< 时间增量
    TimeScale,      ///< 时间缩放
    FontSize,       ///< 字体大小
    Selected        ///< 是否选中
};

/// @brief 屏幕适配模式
enum class ScreenMatchMode
{
    MatchWidthOrHeight,     ///< 按宽或高匹配
    MatchWidth,             ///< 按宽匹配
    MatchHeight,            ///< 按高匹配
    MatchFill               ///< 填充模式
};

NS_FGUI_END

#endif
