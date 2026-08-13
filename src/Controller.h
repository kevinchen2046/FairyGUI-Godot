#ifndef __GCONTROLLER_H__
#define __GCONTROLLER_H__

#include "FairyGUIMacros.h"
// cocos2d.h removed - see godot_types.h
#include "event/UIEventDispatcher.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/variant/packed_string_array.hpp>
#endif

NS_FGUI_BEGIN

class GComponent;
class ControllerAction;
class ByteBuffer;

/// @brief 控制器。
/// 控制器是 FairyGUI 的核心机制之一，用于管理组件的多个页面状态。
/// 每个控制器包含多个页面（page），可以在这些页面之间切换，
/// 通过 Gear 系统自动修改关联对象的属性。
///
/// 控制器的创建和设计需通过编辑器完成，不建议使用代码创建。
/// 最常用的方法是通过 selectedIndex 获得或改变控制器的活动页面。
/// 如果要获得控制器页面改变的通知，监听 Changed 事件。
class GController : public UIEventDispatcher
{
    GDCLASS(GController, UIEventDispatcher)

public:
    GController();
    virtual ~GController();

    static void _bind_methods();

    /** 获取父组件。 */
    GComponent* getParent() const { return _parent; }
    Ref<GComponent> gd_getParent() const;
    void setParent(GComponent* value) { _parent = value; }

    // ===== 页面选择 =====

    /** 获取当前选中的页面索引。 */
    int getSelectedIndex() const { return _selectedIndex; }
    /** 设置当前选中的页面索引。
     * @param value 页面索引。
     * @param triggerEvent 是否触发 Changed 事件。
     */
    void setSelectedIndex(int value, bool triggerEvent = true);
    void gd_setSelectedIndex(int value) { setSelectedIndex(value); }

    /** 获取当前选中页面的名称。 */
    const std::string& getSelectedPage() const;
    /** 通过页面名称设置选中页面。 */
    void setSelectedPage(const std::string& value, bool triggerEvent = true);

    /** 获取当前选中页面的 ID。 */
    const std::string& getSelectedPageId() const;
    /** 通过页面 ID 设置选中页面。 */
    void setSelectedPageId(const std::string& value, bool triggerEvent = true);

    void gd_setSelectedPage(const String& value);
    String gd_getSelectedPage() const;
    void gd_setSelectedPageId(const String& value);
    String gd_getSelectedPageId() const;

    /** 获取上一个选中的页面索引。 */
    int getPrevisousIndex() const { return _previousIndex; }
    /** 获取上一个选中页面的名称。 */
    const std::string& getPreviousPage() const;
    /** 获取上一个选中页面的 ID。 */
    const std::string& getPreviousPageId() const;

    String gd_getPreviousPage() const;
    String gd_getPreviousPageId() const;

    // ===== 页面管理 =====

    /** 获取页面总数。 */
    int getPageCount() const;
    /** 是否存在指定名称的页面。 */
    bool hasPage(const std::string& aName) const;
    /** 通过页面 ID 获取索引。 */
    int getPageIndexById(const std::string& value) const;
    /** 通过页面 ID 获取名称。 */
    const std::string& getPageNameById(const std::string& value) const;
    /** 通过索引获取页面 ID。 */
    const std::string& getPageId(int index) const;
    /** 通过索引获取页面名称。索引无效时返回空字符串。 */
    const std::string& getPageName(int index) const;

    // GDScript 页面查询接口。
    bool gd_hasPage(const String& pageName) const;
    bool gd_hasPageId(const String& pageId) const;
    int gd_getPageIndexById(const String& pageId) const;
    String gd_getPageNameById(const String& pageId) const;
    String gd_getPageId(int index) const;
    String gd_getPageName(int index) const;
    PackedStringArray gd_getPageIds() const;
    PackedStringArray gd_getPageNames() const;
    /** 设置反向页面 ID（用于切换回）。 */
    void setOppositePageId(const std::string& value);
    /** 执行所有关联的动作。 */
    void runActions();

    /** 从二进制数据加载控制器配置。 */
    void setup(ByteBuffer* buffer);

    std::string name;                    ///< 控制器名称。

    String gd_getName() const;
    void gd_setName(const String& value);

    bool changing;                       ///< 是否正在切换页面。
    bool autoRadioGroupDepth;            ///< 是否自动调整 RadioGroup 的深度。

private:
    GComponent* _parent;                 ///< 父组件。
    int _selectedIndex;                  ///< 当前选中页面索引。
    int _previousIndex;                  ///< 上一个选中页面索引。
    std::vector<std::string> _pageIds;   ///< 页面 ID 列表。
    std::vector<std::string> _pageNames; ///< 页面名称列表。
    std::vector<ControllerAction*> _actions; ///< 关联动作列表。
};

NS_FGUI_END

#endif
