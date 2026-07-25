#ifndef __GLIST_H__
#define __GLIST_H__

#include "FairyGUIMacros.h"
#include "GComponent.h"
#include "GObjectPool.h"
// cocos2d.h removed - see godot_types.h

NS_FGUI_BEGIN

/// @brief 列表组件。
/// GList 是 FairyGUI 中最常用的容器组件之一，支持：
/// - 多种布局模式（单列、单行、水平流、垂直流、分页）
/// - 单选/多选/无选择模式
/// - 虚拟列表（大量数据时的性能优化）
/// - 循环列表（无限滚动）
/// - 对象池复用
/// - 对齐和间距配置
///
/// 通过编辑器设置 defaultItem 指定列表项模板，运行时动态创建。
class GList : public GComponent
{
    GDCLASS(GList, GComponent)

public:
    /** 列表项渲染回调（用于虚拟列表）。
     * @param index 列表项索引。
     * @param item 列表项 GObject。
     */
    typedef std::function<void(int, GObject*)> ListItemRenderer;
    /** 列表项 URL 提供回调（用于虚拟列表，返回每项的资源 URL）。 */
    typedef std::function<std::string(int)> ListItemProvider;

    GList();
    virtual ~GList();

    FAIRYGUI_CREATE(GList)

    static void _bind_methods();

    // ===== 默认项模板 =====

    /** 获取默认列表项的资源 URL。 */
    const std::string& getDefaultItem() const { return _defaultItem; }
    /** 设置默认列表项的资源 URL。 */
    void setDefaultItem(const std::string& value);

    void gd_setDefaultItem(const String& value);
    String gd_getDefaultItem() const;

    void gd_clearSelection(bool triggerEvent);

    // ===== 布局设置 =====

    /** 获取布局模式。 */
    ListLayoutType getLayout() const { return _layout; }
    void setLayout(ListLayoutType value);
    int gd_getLayout() const { return static_cast<int>(getLayout()); }
    void gd_setLayout(int value) { setLayout(static_cast<ListLayoutType>(value)); }

    /** 获取行数（单行/分页模式时有效）。 */
    int getLineCount() const { return _lineCount; }
    void setLineCount(int value);

    /** 获取列数（单列/分页模式时有效）。 */
    int getColumnCount() { return _columnCount; }
    void setColumnCount(int value);

    /** 获取列间距。 */
    int getColumnGap() const { return _columnGap; }
    void setColumnGap(int value);

    /** 获取行间距。 */
    int getLineGap() const { return _lineGap; }
    void setLineGap(int value);

    /** 获取水平对齐方式。 */
    AlignType getAlign() const { return _align; }
    void setAlign(AlignType value);

    /** 获取垂直对齐方式。 */
    VertAlignType getVerticalAlign() const { return _verticalAlign; }
    void setVerticalAlign(VertAlignType value);

    /** 获取是否自动调整项尺寸（与列表等宽/等高）。 */
    bool getAutoResizeItem() const { return _autoResizeItem; }
    void setAutoResizeItem(bool value);

    /** 获取选择模式。 */
    ListSelectionMode getSelectionMode() const { return _selectionMode; }
    /** 设置选择模式。 */
    void setSelectionMode(ListSelectionMode value) { _selectionMode = value; }

    // ===== 对象池 =====

    /** 获取对象池（管理列表项的复用）。 */
    GObjectPool* getItemPool() const { return _pool; }
    /** 从对象池获取一个列表项。 */
    Ref<GObject> getFromPool() { return getFromPool(EMPTY_STRING); }
    Ref<GObject> getFromPool(const std::string& url);
    /** 将对象归还到对象池。 */
    void returnToPool(GObject* obj);
    /** 从对象池获取并添加到列表末尾。 */
    GObject* addItemFromPool() { return addItemFromPool(EMPTY_STRING); }
    GObject* addItemFromPool(const std::string& url);

    // ===== 子对象管理（覆写） =====

    GObject* addChildAt(const Ref<GObject>& child, int index) override;
    void removeChildAt(int index) override;
    /** 移除子对象并归还到对象池。 */
    void removeChildToPoolAt(int index);
    void removeChildToPool(GObject* child);
    /** 移除所有子对象并归还到对象池。 */
    void removeChildrenToPool();
    void removeChildrenToPool(int beginIndex, int endIndex);
    void gd_removeChildrenToPool(int beginIndex, int endIndex);

    // GDScript extensions
    void gd_setItemRenderer(const Callable& callable);
    void gd_setItemProvider(const Callable& callable);
    Ref<GObject> gd_addItemFromPool();
    /** 设置为虚拟列表模式。 */
    void gd_setVirtual();
    /** 设置为虚拟+循环列表模式。 */
    void gd_setVirtualAndLoop();
    void gd_setNumItems(int value);
    int gd_getNumItems();
    int gd_getFirstChildInView();
    void gd_addSelection(int index, bool scroll_it_to_view);

    // ===== 选择操作 =====

    /** 获取当前选中项的索引（单选模式）。 */
    int getSelectedIndex() const;
    void setSelectedIndex(int value);

    /** 获取所有选中项的索引列表（多选模式）。 */
    void getSelection(std::vector<int>& result) const;
    /** 添加一个选中项。 */
    void addSelection(int index, bool scrollItToView);
    /** 移除一个选中项。 */
    void removeSelection(int index);
    /** 清除所有选中。 */
    void clearSelection();
    /** 全选。 */
    void selectAll();
    /** 反选。 */
    void selectReverse();

    /** 处理方向键导航（在列表项之间移动）。 */
    void handleArrowKey(int dir);

    /** 调整列表尺寸以恰好容纳指定数量的项。 */
    void resizeToFit(int itemCount) { resizeToFit(itemCount, 0); }
    void resizeToFit(int itemCount, int pMinSize);

    virtual int getFirstChildInView() override;

    /** 滚动到指定索引的项。
     * @param index 项索引。
     * @param ani 是否使用动画。
     * @param setFirst 是否将该项作为可见区域的第一项。
     */
    void scrollToView(int index, bool ani = false, bool setFirst = false);

    /** 获取选择控制器（关联的控制器，选择变化时自动更新）。 */
    GController* getSelectionController() const { return _selectionController.ptr(); }
    Ref<GController> gd_getSelectionController() const { return _selectionController; }
    void setSelectionController(GController* value);

    // ===== 虚拟列表 =====

    /** 启用虚拟列表（仅创建可见区域的项，大数据量时必备）。 */
    void setVirtual();
    /** 启用虚拟+循环列表（无限滚动）。 */
    void setVirtualAndLoop();
    /** 是否虚拟列表模式。 */
    bool isVirtual() { return _virtual; }
    /** 刷新虚拟列表。 */
    void refreshVirtualList();

    /** 获取列表总项数（虚拟列表模式下）。 */
    int getNumItems();
    /** 设置列表总项数（虚拟列表模式下）。 */
    void setNumItems(int value);

    /** 子对象索引转项索引。 */
    int childIndexToItemIndex(int index);
    /** 项索引转子对象索引。 */
    int itemIndexToChildIndex(int index);

    virtual Vector2 getSnappingPosition(const Vector2& pt) override;

    // ===== 公开成员 =====

    ListItemRenderer itemRenderer;   ///< 项渲染回调（虚拟列表）。
    ListItemProvider itemProvider;   ///< 项 URL 提供回调（虚拟列表）。
    bool scrollItemToViewOnClick;    ///< 点击项时是否自动滚动到可视区域。
    bool foldInvisibleItems;         ///< 是否折叠不可见项（优化显示性能）。

protected:
    virtual void handleControllerChanged(GController* c) override;
    virtual void handleSizeChanged() override;
    virtual void _enter_tree() override;
    virtual void updateBounds() override;
    virtual void setup_beforeAdd(ByteBuffer* buffer, int beginPos) override;
    virtual void setup_afterAdd(ByteBuffer* buffer, int beginPos) override;

    virtual void dispatchItemEvent(GObject* item, EventContext* context);
    virtual void readItems(ByteBuffer* buffer);
    virtual void setupItem(ByteBuffer* buffer, GObject* obj);

private:
    void clearSelectionExcept(GObject* g);
    void setSelectionOnEvent(GObject* item, InputEvent* evt);

    void onItemTouchBegin(EventContext* context);
    void onClickItem(EventContext* context);

    void updateSelectionController(int index);

    void setVirtual(bool loop);
    void checkVirtualList();
    void setVirtualListChangedFlag(bool layoutChanged);
    CALL_LATER_FUNC(GList, doRefreshVirtualListDeferred);
    void doRefreshVirtualList();

    void onScroll(EventContext* context);

    int getIndexOnPos1(float& pos, bool forceUpdate);
    int getIndexOnPos2(float& pos, bool forceUpdate);
    int getIndexOnPos3(float& pos, bool forceUpdate);

    void handleScroll(bool forceUpdate);
    bool handleScroll1(bool forceUpdate);
    bool handleScroll2(bool forceUpdate);
    void handleScroll3(bool forceUpdate);

    void handleArchOrder1();
    void handleArchOrder2();

    void handleAlign(float contentWidth, float contentHeight);

    ListLayoutType _layout;              ///< 布局模式。
    int _lineCount;                      ///< 行数。
    int _columnCount;                    ///< 列数。
    int _lineGap;                        ///< 行间距。
    int _columnGap;                      ///< 列间距。
    AlignType _align;                    ///< 水平对齐。
    VertAlignType _verticalAlign;        ///< 垂直对齐。
    bool _autoResizeItem;                ///< 是否自动调整项尺寸。
    ListSelectionMode _selectionMode;    ///< 选择模式。
    std::string _defaultItem;            ///< 默认项 URL。
    Ref<GController> _selectionController; ///< 选择控制器。

    GObjectPool* _pool;                  ///< 对象池。
    bool _selectionHandled;
    int _lastSelectedIndex;

    //Virtual List support
    bool _virtual;                       ///< 是否虚拟列表。
    bool _loop;                          ///< 是否循环列表。
    int _numItems;                       ///< 总项数。
    int _realNumItems;                   ///< 实际项数（循环模式）。
    int _firstIndex;                     ///< 左上角第一个项的索引。
    int _curLineItemCount;              ///< 当前行的项数。
    int _curLineItemCount2;             ///< 垂直方向的项数（分页模式）。
    Vector2 _itemSize;                   ///< 项尺寸。
    int _virtualListChanged;             ///< 虚拟列表变化标记（1=内容变化, 2=尺寸变化）。
    bool _eventLocked;
    uint32_t _itemInfoVer;

    struct ItemInfo
    {
        Vector2 size;
        Ref<GObject> obj;
        uint32_t updateFlag;
        bool selected;

        ItemInfo();
    };
    std::vector<ItemInfo> _virtualItems;  ///< 虚拟列表项信息。
};

NS_FGUI_END

#endif
