#ifndef __POPUPMENU_H__
#define __POPUPMENU_H__

#include "FairyGUIMacros.h"
#include "event/UIEventDispatcher.h"
#include "GComponent.h"

NS_FGUI_BEGIN

#include "GuiObjectFwd.h"
class GComponent;
class GButton;
class GList;

/// @brief 弹出菜单组件，在指定位置弹出的菜单列表。
///
/// GPopupMenu 支持：
/// - 通过 addItem() 动态添加菜单项
/// - 菜单项的选中/灰掉/隐藏状态控制
/// - 分隔线
/// - 可选的 UI 资源模板（通过 resourceURL 指定自定义菜单样式）
class GPopupMenu : public RefCounted
{
    GDCLASS(GPopupMenu, RefCounted)

public:
    /// @brief 创建弹出菜单
    /// @param resourceURL 自定义菜单 UI 资源 URL（可选）
    static Ref<GPopupMenu> create(const std::string& resourceURL);
    static Ref<GPopupMenu> create() { return create(""); }
    static Ref<GPopupMenu> gd_create() { return create(); }

    Ref<GButton> gd_addItem(const String& caption);
    Ref<GComponent> gd_getContentPane() const;
    Ref<GList> gd_getList() const;

    GPopupMenu();
    virtual ~GPopupMenu();

    static void _bind_methods();

    /// @brief 添加菜单项
    /// @param caption 菜单项文本
    /// @param callback 点击回调（可选）
    /// @return 创建的按钮
    GButton* addItem(const std::string& caption, EventCallback callback = nullptr);

    /// @brief 在指定位置插入菜单项
    /// @param caption 菜单项文本
    /// @param index 插入位置
    /// @param callback 点击回调（可选）
    /// @return 创建的按钮
    GButton* addItemAt(const std::string& caption, int index, EventCallback callback = nullptr);

    /// @brief 添加分隔线
    void addSeperator();

    /// @brief 获取指定索引的菜单项名称
    const std::string& getItemName(int index) const;

    /// @brief 设置菜单项文本
    /// @param name 菜单项名称
    /// @param caption 新文本
    void setItemText(const std::string& name, const std::string& caption);

    /// @brief 设置菜单项是否可见
    void setItemVisible(const std::string& name, bool visible);

    /// @brief 设置菜单项是否灰掉（不可点击）
    void setItemGrayed(const std::string& name, bool grayed);

    /// @brief 设置菜单项是否可勾选
    void setItemCheckable(const std::string& name, bool checkable);

    /// @brief 设置菜单项是否已勾选
    void setItemChecked(const std::string& name, bool check);

    /// @brief 判断菜单项是否已勾选
    bool isItemChecked(const std::string& name) const;

    /// @brief 移除指定名称的菜单项
    bool removeItem(const std::string& name);

    /// @brief 清除所有菜单项
    void clearItems();

    /// @brief 获取菜单项数量
    int getItemCount() const;

    // ---- GDScript 绑定方法 ----
    String gd_getItemName(int index) const;
    void gd_setItemText(const String& name, const String& caption);
    void gd_setItemVisible(const String& name, bool visible);
    void gd_setItemGrayed(const String& name, bool grayed);
    void gd_setItemCheckable(const String& name, bool checkable);
    void gd_setItemChecked(const String& name, bool check);
    bool gd_isItemChecked(const String& name);
    bool gd_removeItem(const String& name);
    void gd_showMenuAt(GObject* target, int dir);

    /// @brief 显示菜单（自动方向，无目标）
    void show() { show(nullptr, PopupDirection::AUTO); }

    /// @brief 显示菜单
    /// @param target 目标对象（菜单将显示在其附近）
    /// @param dir 弹出方向
    void show(GObject* target, PopupDirection dir);

protected:
    bool init(const std::string& resourceURL);

    Ref<GComponent> _contentPaneRef;
    GComponent* _contentPane;
    GList* _list;

private:
    void resetListItemStates();
    void onClickItem(EventContext* context);
    void onEnter(EventContext* context);
};

NS_FGUI_END

#endif
