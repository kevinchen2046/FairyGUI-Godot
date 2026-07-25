#ifndef __FUICONTANER_H__
#define __FUICONTANER_H__

#include "FairyGUIMacros.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/input_event.hpp>
#endif
#include <functional>

NS_FGUI_BEGIN

#include "../GuiObjectFwd.h"

/// @brief 基于 Control 的裁剪容器（用于 ScrollPane / overflow:hidden）。
/// 使用 clip_contents 而非不可靠的 Node2D CLIP_CHILDREN_AND_DRAW 方式。
class FUIClipContainer : public Control
{
    GDCLASS(FUIClipContainer, Control)

public:
    FUIClipContainer();

    /// @brief 应用裁剪矩形（用于 ScrollPane 或溢出裁剪）
    /// @param p_pos 裁剪区域位置
    /// @param p_size 裁剪区域大小
    void applyClipRect(const Vector2 &p_pos, const Vector2 &p_size);

    /// @brief 更新裁剪区域位置
    void applyClipPosition(const Vector2 &p_pos);

    static void _bind_methods() {}
};

/// @brief FairyGUI 显示容器基类，继承自 Node2D。
///
/// FUIContainer 是 FairyGUI 渲染层的核心节点，负责：
/// - 矩形裁剪 (clippingEnabled/clippingRegion)
/// - 模板遮罩 (stencil/alphaThreshold/inverted)
/// - 自定义绘制（Graph 遮罩绘制）
/// - 托管 GObject 的所有子节点渲染
class FUIContainer : public Node2D
{
    GDCLASS(FUIContainer, Node2D)

public:
    FUIContainer();
    virtual ~FUIContainer();

    static FUIContainer* create();

    /// @brief 是否启用矩形裁剪
    bool isClippingEnabled() const;

    /// @brief 设置是否启用矩形裁剪
    void setClippingEnabled(bool value);

    /// @brief 获取裁剪区域
    const Rect2& getClippingRegion() const;

    /// @brief 设置裁剪区域
    void setClippingRegion(const Rect2& clippingRegion);

    /// @brief 设置裁剪模式
    void setClipMode(int mode);

    /// @brief 获取模板遮罩节点
    Node* getStencil() const;

    /// @brief 设置模板遮罩节点
    void setStencil(Node* stencil);

    /// @brief 获取透明度阈值
    float getAlphaThreshold() const;

    /// @brief 设置透明度阈值
    void setAlphaThreshold(float alphaThreshold);

    /// @brief 是否反转遮罩
    bool isInverted() const;

    /// @brief 设置是否反转遮罩
    void setInverted(bool inverted);

    /// @brief 关联的 GObject 所有者
    GObject* gOwner;

    /// @brief 处理回调（每帧调用，参数为 delta time）
    std::function<void(float)> _processCallback;

#ifdef FGUI_GDEXTENSION
    Rect2 get_anchorable_rect() const;
    void _draw() override;
    void _unhandled_input(const Ref<::InputEvent>& event) override;
#else
    Rect2 get_anchorable_rect() const override;
#endif

protected:
    static void _bind_methods();

    void _notification(int p_what);
    void _deferred_redraw_all();
#ifndef FGUI_GDEXTENSION
    void _draw();
    virtual void unhandled_input(const Ref<::InputEvent>& event) override;
#endif

private:
    void applyClipping();
    void applyStencilEffects();
    void _drawStencilSilhouette();
    void _drawGraphMask(class GGraph* graph);
    static class FUISprite* findSpriteInTree(Node* node);

    /// @brief 矩形裁剪是否启用
    bool _clippingEnabled;

    /// @brief 裁剪区域
    Rect2 _clippingRegion;

    /// @brief 裁剪模式（clip_mode/disabled/clip_only等）
    CanvasItem::ClipChildrenMode _clipMode;

    /// @brief 模板遮罩节点
    Node* _stencil;

    /// @brief 透明度阈值
    float _alphaThreshold;

    /// @brief 是否反转遮罩
    bool _inverted;
};

/// @brief 内部使用的容器，特化自 FUIContainer。
/// 用于 GComponent 内部的内容容器。
class FUIInnerContainer : public FUIContainer
{
    GDCLASS(FUIInnerContainer, FUIContainer)
public:
    FUIInnerContainer() = default;
    static void _bind_methods() {}
};

NS_FGUI_END

#endif
