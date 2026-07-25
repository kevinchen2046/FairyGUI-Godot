#ifndef __UICONFIG_HELPER_H__
#define __UICONFIG_HELPER_H__

#include "FairyGUIMacros.h"
#include "FieldTypes.h"

NS_FGUI_BEGIN

/// @brief UIConfig 的 Godot 脚本桥接层，提供 GDScript 可调用的全局配置访问接口。
///
/// 将 UIConfig 的 C++ 静态属性和方法包装为 RefCounted 类型的实例方法，
/// 使 GDScript 可以方便地通过 UIConfigHelper.get_instance() 获取单例并读写配置。
class UIConfigHelper : public RefCounted
{
    GDCLASS(UIConfigHelper, RefCounted)

public:
    /// @brief 获取全局单例
    static UIConfigHelper* getInstance();
    static Ref<UIConfigHelper> gd_getInstance() { return Ref<UIConfigHelper>(getInstance()); }

    // ---- 字体相关 ----
    void setDefaultFont(const String& value);
    String getDefaultFont() const;
    void registerFont(const String& aliasName, const String& realName);
    String getRealFontName(const String& aliasName) const;

    // ---- 音效相关 ----
    void setButtonSound(const String& value);
    String getButtonSound() const;
    void setButtonSoundVolumeScale(float value);
    float getButtonSoundVolumeScale() const;

    // ---- 滚动行为 ----
    void setDefaultScrollStep(int value);
    int getDefaultScrollStep() const;
    void setDefaultScrollDecelerationRate(float value);
    float getDefaultScrollDecelerationRate() const;
    void setDefaultScrollTouchEffect(bool value);
    bool getDefaultScrollTouchEffect() const;
    void setDefaultScrollBounceEffect(bool value);
    bool getDefaultScrollBounceEffect() const;
    void setDefaultScrollBarDisplay(int value);
    int getDefaultScrollBarDisplay() const;
    void setVerticalScrollBar(const String& value);
    String getVerticalScrollBar() const;
    void setHorizontalScrollBar(const String& value);
    String getHorizontalScrollBar() const;

    // ---- 拖拽灵敏度 ----
    void setTouchDragSensitivity(int value);
    int getTouchDragSensitivity() const;
    void setClickDragSensitivity(int value);
    int getClickDragSensitivity() const;
    void setTouchScrollSensitivity(int value);
    int getTouchScrollSensitivity() const;

    // ---- 下拉框 ----
    void setDefaultComboBoxVisibleItemCount(int value);
    int getDefaultComboBoxVisibleItemCount() const;

    // ---- 模态与提示 ----
    void setGlobalModalWaiting(const String& value);
    String getGlobalModalWaiting() const;
    void setModalLayerColor(const Color& value);
    Color getModalLayerColor() const;
    void setTooltipsWin(const String& value);
    String getTooltipsWin() const;

    // ---- 窗口行为 ----
    void setBringWindowToFrontOnClick(bool value);
    bool getBringWindowToFrontOnClick() const;
    void setWindowModalWaiting(const String& value);
    String getWindowModalWaiting() const;

    // ---- 弹出菜单 ----
    void setPopupMenu(const String& value);
    String getPopupMenu() const;
    void setPopupMenuSeperator(const String& value);
    String getPopupMenuSeperator() const;

    static void _bind_methods();

private:
    static UIConfigHelper* _inst;
};

NS_FGUI_END

#endif
