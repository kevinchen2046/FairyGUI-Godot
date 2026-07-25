#ifndef __GBUTTON_H
#define __GBUTTON_H

// cocos2d.h removed - see godot_types.h
#include "FairyGUIMacros.h"
#include "GComponent.h"

NS_FGUI_BEGIN

class GTextField;

/// @brief 按钮组件。
/// GButton 支持普通按钮、单选按钮、复选按钮三种模式。
/// 提供按下、弹起、悬停、选中、禁用等多种状态显示。
/// 支持通过控制器关联页面的切换（如 Tab 页切换）。
///
/// 通过编辑器制作按钮时通常包含 title（标题文本）、icon（图标）两个命名子对象。
class GButton : public GComponent
{
    GDCLASS(GButton, GComponent)

public:
    // ===== 按钮状态常量 =====
    static const std::string UP;              ///< 弹起状态。
    static const std::string DOWN;            ///< 按下状态。
    static const std::string OVER;            ///< 悬停状态。
    static const std::string SELECTED_OVER;   ///< 选中+悬停状态。
    static const std::string DISABLED;        ///< 禁用状态。
    static const std::string SELECTED_DISABLED; ///< 选中+禁用状态。

    GButton();
    virtual ~GButton();

    FAIRYGUI_CREATE(GButton)

    static void _bind_methods();

    // ===== 标题属性 =====

    /** 获取按钮标题文本。 */
    const std::string& getTitle() { return _title; }
    /** 设置按钮标题文本。 */
    void setTitle(const std::string& value);

    void gd_setTitle(const String& value);
    String gd_getTitle();

    virtual const std::string& getText() const override { return _title; }
    virtual void setText(const std::string& value) override { setTitle(value); }

    /** 获取按钮图标 URL。 */
    virtual const std::string& getIcon() const override { return _icon; }
    /** 设置按钮图标 URL。 */
    virtual void setIcon(const std::string& value) override;

    /** 获取选中状态的标题文本。 */
    const std::string& getSelectedTitle() const { return _selectedTitle; }
    /** 设置选中状态的标题文本。 */
    void setSelectedTitle(const std::string& value);

    void gd_setSelectedTitle(const String& value);
    String gd_getSelectedTitle() const;

    /** 获取选中状态的图标 URL。 */
    const std::string& getSelectedIcon() const { return _selectedIcon; }
    /** 设置选中状态的图标 URL。 */
    void setSelectedIcon(const std::string& value);

    void gd_setSelectedIcon(const String& value);
    String gd_getSelectedIcon() const;

    void gd_setIcon(const String& value);
    String gd_getIcon() const;

    /** 获取标题颜色。 */
    Color getTitleColor() const;
    /** 设置标题颜色。 */
    void setTitleColor(const Color& value);

    /** 获取标题字体大小。 */
    int getTitleFontSize() const;
    /** 设置标题字体大小。 */
    void setTitleFontSize(int value);

    // ===== 选中状态 =====

    /** 是否处于选中状态。 */
    bool isSelected() const { return _selected; }
    /** 设置选中状态。 */
    void setSelected(bool value);

    // ===== 控制器关联 =====

    /** 获取关联的控制器（页面切换关联）。 */
    GController* getRelatedController() const { return _relatedController.ptr(); }
    Ref<GController> gd_getRelatedController() const { return _relatedController; }
    /** 设置关联的控制器。 */
    void setRelatedController(GController* c);

    /** 是否在点击时改变状态（按下/弹起）。 */
    bool isChangeStateOnClick() { return _changeStateOnClick; }
    /** 设置是否在点击时改变状态。 */
    void setChangeStateOnClick(bool value) { _changeStateOnClick = value; }

    /** 重置列表项状态（用于列表中的按钮项）。 */
    void resetListItemState();

    /** 获取标题文本字段对象。 */
    GTextField* getTextField() const;

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    virtual void constructExtension(ByteBuffer* buffer) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void handleControllerChanged(GController* c) override;

    /** 设置按钮状态。 */
    void setState(const std::string& value);
    /** 根据当前条件（是否按下/悬停/选中/禁用）自动设置状态。 */
    void setCurrentState();
    /** 同步按钮控制器的状态。 */
    void syncButtonControllerState();

    virtual void onConstruct() override;

private:
    void onRollOver(EventContext* context);
    void onRollOut(EventContext* context);
    void onTouchBegin(EventContext* context);
    void onTouchEnd(EventContext* context);
    void onClick(EventContext* context);
    void onExit(EventContext* context);

    ButtonMode _mode;                  ///< 按钮模式（Common/Radio/Check）。
    GObject* _titleObject;             ///< 标题文本子对象。
    GObject* _iconObject;              ///< 图标子对象。
    Ref<GController> _buttonController; ///< 按钮状态控制器。
    Ref<GController> _relatedController; ///< 关联页面控制器。
    std::string _relatedPageId;        ///< 关联页面 ID。
    std::string _title;                ///< 标题文本。
    std::string _selectedTitle;        ///< 选中状态标题。
    std::string _icon;                 ///< 图标 URL。
    std::string _selectedIcon;         ///< 选中状态图标。
    std::string _sound;                ///< 点击音效 URL。
    float _soundVolumeScale;           ///< 音效音量。
    bool _selected;                    ///< 是否选中。
    bool _over;                        ///< 鼠标是否悬停。
    bool _down;                        ///< 是否按下。
    int _downEffect;                   ///< 按下效果类型（0=无, 1=缩放, 2=变暗）。
    bool _downScaled;                  ///< 是否已按下缩放。
    float _downEffectValue;            ///< 按下效果值（缩放比例/暗度）。
    bool _changeStateOnClick;          ///< 点击时是否改变状态。
};

NS_FGUI_END

#endif
