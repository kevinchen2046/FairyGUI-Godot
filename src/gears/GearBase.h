#ifndef __GEARBASE_H__
#define __GEARBASE_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "tween/EaseType.h"

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"
class GController;
class GTweener;
class ByteBuffer;

/// @brief Gear 缓动配置。
/// 控制 Gear 动画的缓动类型、持续时间和延迟。
class GearTweenConfig
{
public:
    GearTweenConfig();

    bool tween;               ///< 是否启用缓动动画。
    EaseType easeType;        ///< 缓动类型。
    float duration;           ///< 动画持续时间（秒）。
    float delay;              ///< 动画延迟时间（秒）。

    uint32_t _displayLockToken; ///< 内部：显示锁定令牌。
    GTweener* _tweener;        ///< 内部：缓动动画实例。
};

/// @brief Gear 基类。
/// Gear（关联器）是控制器和对象属性之间的桥梁。
/// 当控制器页面切换时，Gear 会根据配置自动修改对象的相应属性，
/// 实现界面状态随控制器动态变化的效果。
///
/// 每个 GObject 拥有 10 个 Gear，分别控制不同属性：
/// - 0: GearDisplay（显示/隐藏）
/// - 1: GearColor（颜色/轮廓色）
/// - 2: GearSize（尺寸）
/// - 3: GearLook（透明度/旋转/变灰/可触摸）
/// - 4: GearText（文本内容）
/// - 5: GearIcon（图标）
/// - 6: GearXY（位置）
/// - 7: GearAnimation（动画播放/帧）
/// - 8: GearFontSize（字体大小）
/// - 9: GearDisplay2（高级显示控制）
class GearBase
{
public:
    /** 构造 Gear。
     * @param owner 所属的 GObject。
     */
    GearBase(GObject* owner);
    virtual ~GearBase();

    /** 获取关联的控制器。 */
    GController* getController() const { return _controller; }
    /** 设置关联的控制器。 */
    void setController(GController* value);

    /** 获取缓动配置（若不存在则自动创建）。 */
    GearTweenConfig* getTweenConfig();

    /** 由 Relations 系统触发的位置更新（虚函数，GearXY/GearSize 覆写）。 */
    virtual void updateFromRelations(float dx, float dy);
    /** 应用当前控制器页面对应的状态（虚函数，子类实现）。 */
    virtual void apply();
    /** 将对象当前属性状态保存到对应控制器页面（用于编辑模式）。 */
    virtual void updateState();

    /** 从二进制数据加载 Gear 配置。 */
    void setup(ByteBuffer* buffer);

    /** 工厂方法：根据索引创建对应类型的 Gear。 */
    static GearBase* create(GObject* owner, int index);
    static bool disableAllTweenEffect; ///< 全局禁用所有 Gear 缓动效果。

protected:
    /** 为指定控制器页面添加状态（虚函数，子类实现）。 */
    virtual void addStatus(const std::string& pageId, ByteBuffer* buffer);
    /** 初始化 Gear。 */
    virtual void init();
    /** 验证并清理缓动器。 */
    void validateStoredTweener();

    GObject* _owner;              ///< 所属 GObject。
    GController* _controller;    ///< 关联的控制器。
    GearTweenConfig* _tweenConfig; ///< 缓动配置。
};

NS_FGUI_END

#endif
