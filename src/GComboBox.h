#ifndef __GCOMBOBOX_H__
#define __GCOMBOBOX_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"
#include "GList.h"

NS_FGUI_BEGIN

class GTextField;

/// @brief 下拉组合框组件。
///
/// GComboBox 由一个标题按钮和一个下拉列表组成，用户点击后弹出下拉列表选择项目。
///
/// 主要功能：
/// - 下拉列表项目（items/values/icons 三个并行数组）
/// - selectedIndex / value 管理选中项
/// - selectionController 与控制器联动
/// - 可见项目数 (visibleItemCount) 控制下拉列表的显示高度
/// - 弹出方向控制 (popupDirection)
class GComboBox : public GComponent
{
    GDCLASS(GComboBox, GComponent)

public:
    GComboBox();
    virtual ~GComboBox();

    FAIRYGUI_CREATE(GComboBox)

    static void _bind_methods();

    /// @brief 获取当前显示的标题文本
    const std::string& getTitle() const;

    /// @brief 设置标题文本
    void setTitle(const std::string& value);

    void gd_setTitle(const String& value);
    String gd_getTitle() const;

    virtual const std::string& getText() const override { return getTitle(); }
    virtual void setText(const std::string& value) override { setTitle(value); }

    /// @brief 获取标题文本颜色
    const Color getTitleColor() const;
    Color gd_getTitleColor() const { return getTitleColor(); }

    /// @brief 设置标题文本颜色
    void setTitleColor(const Color& value);

    /// @brief 获取标题字体大小
    int getTitleFontSize() const;

    /// @brief 设置标题字体大小
    void setTitleFontSize(int value);

    virtual const std::string& getIcon() const override;
    virtual void setIcon(const std::string& value) override;

    void gd_setIcon(const String& value);
    String gd_getIcon() const;

    /// @brief 获取当前选中项的值
    const std::string& getValue() const;

    /// @brief 设置当前选中项的值（按值查找匹配项）
    void setValue(const std::string& value);

    void gd_setValue(const String& value);
    String gd_getValue() const;

    /// @brief 获取当前选中项的索引
    int getSelectedIndex() const { return _selectedIndex; }

    /// @brief 设置当前选中项的索引
    void setSelectedIndex(int value);

    /// @brief 获取选择控制器（与下拉框选中项联动）
    GController* getSelectionController() const { return _selectionController; }
    void setSelectionController(GController* value) { _selectionController = value; }

    /// @brief 获取所有下拉项文本列表
    std::vector<std::string>& getItems() { return _items; }

    /// @brief 获取所有下拉项图标列表
    std::vector<std::string>& getIcons() { return _icons; }

    /// @brief 获取所有下拉项值列表
    std::vector<std::string>& getValues() { return _values; }

    /// @brief 获取下拉面板组件
    GComponent* getDropdown() const { return _dropdown; }
    Ref<GComponent> gd_getDropdown() const;

    /// @brief 刷新下拉列表
    void refresh();

    /// @brief 下拉列表可见项目数量
    int visibleItemCount;

    /// @brief 弹出方向
    PopupDirection popupDirection;

    /// @brief 获取内部的文本字段组件
    GTextField* getTextField() const;

    virtual Variant getProp(ObjectPropID propId) override;
    virtual void setProp(ObjectPropID propId, const Variant& value) override;

protected:
    virtual void constructExtension(ByteBuffer* buffer) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void handleControllerChanged(GController* c) override;
    virtual void handleGrayedChanged() override;

    void setState(const std::string& value);
    void setCurrentState();
    void updateSelectionController();
    void updateDropdownList();
    void showDropdown();
    void renderDropdownList();

    Ref<GComponent> _dropdownRef;
    GComponent* _dropdown;
    GObject* _titleObject;
    GObject* _iconObject;
    GList* _list;
    GController* _selectionController;

    std::vector<std::string> _items;
    std::vector<std::string> _icons;
    std::vector<std::string> _values;

private:
    void onClickItem(EventContext* context);
    void onRollover(EventContext* context);
    void onRollout(EventContext* context);
    void onTouchBegin(EventContext* context);
    void onTouchEnd(EventContext* context);
    void onPopupWinClosed(EventContext* context);

    bool _itemsUpdated;
    int _selectedIndex;
    GController* _buttonController;
    bool _down;
    bool _over;
};

NS_FGUI_END

#endif
