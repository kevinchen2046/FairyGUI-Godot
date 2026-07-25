#ifndef __UICONFIG_H__
#define __UICONFIG_H__

#include "FairyGUIMacros.h"
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/font.hpp>
#else
#include "scene/resources/font.h"
#endif

NS_FGUI_BEGIN

/// @brief UI 全局配置类，管理 FairyGUI 的全局默认设置。
///
/// UIConfig 包含以下可配置的全局属性：
/// - 字体（defaultFont）
/// - 声音（buttonSound）
/// - 滚动行为（滚动步长、减速率、回弹、触摸效果等）
/// - 滚动条样式（默认滚动条 URL）
/// - 拖拽灵敏度（touchDragSensitivity, clickDragSensitivity）
/// - 弹出菜单样式（popupMenu, popupMenu_seperator）
/// - 模态遮罩颜色（modalLayerColor）
/// - 窗口行为（bringWindowToFrontOnClick）
class UIConfig
{
public:
    /// @brief 默认字体名称
    static std::string defaultFont;

    /// @brief 按钮点击音效 URL
    static std::string buttonSound;

    /// @brief 按钮音效音量缩放
    static float buttonSoundVolumeScale;

    /// @brief 默认滚动步长
    static int defaultScrollStep;

    /// @brief 默认滚动减速率
    static float defaultScrollDecelerationRate;

    /// @brief 默认滚动触摸效果
    static bool defaultScrollTouchEffect;

    /// @brief 默认滚动回弹效果
    static bool defaultScrollBounceEffect;

    /// @brief 默认滚动条显示方式
    static ScrollBarDisplayType defaultScrollBarDisplay;

    /// @brief 默认垂直滚动条 URL
    static std::string verticalScrollBar;

    /// @brief 默认水平滚动条 URL
    static std::string horizontalScrollBar;

    /// @brief 触摸拖拽灵敏度
    static int touchDragSensitivity;

    /// @brief 点击拖拽灵敏度
    static int clickDragSensitivity;

    /// @brief 触摸滚动灵敏度
    static int touchScrollSensitivity;

    /// @brief 下拉框默认可见项目数
    static int defaultComboBoxVisibleItemCount;

    /// @brief 全局模态等待 UI 的 URL
    static std::string globalModalWaiting;

    /// @brief 模态遮罩颜色
    static Color modalLayerColor;

    /// @brief 默认提示窗口 URL
    static std::string tooltipsWin;

    /// @brief 点击窗口时是否自动置前
    static bool bringWindowToFrontOnClick;

    /// @brief 窗口模态等待 UI 的 URL
    static std::string windowModalWaiting;

    /// @brief 弹出菜单组件 URL
    static std::string popupMenu;

    /// @brief 弹出菜单分隔线 URL
    static std::string popupMenu_seperator;

    /// @brief 注册字体别名
    /// @param aliasName 别名（FairyGUI 中使用的字体名）
    /// @param realName 真实字体名称或文件路径
    static void registerFont(const std::string& aliasName, const std::string& realName);

    /// @brief 获取真实字体名
    /// @param aliasName 别名字体名
    /// @param isTTF 输出：是否为 TTF 字体
    /// @return 真实字体名称
    static const std::string& getRealFontName(const std::string& aliasName, bool* isTTF = nullptr);

    /// @brief 加载字体资源
    /// @param resolvedName 已解析的字体名或路径
    /// @param is_file 是否为文件路径（而非内置字体名）
    /// @return Godot Font 引用
    static Ref<Font> loadFont(const std::string& resolvedName, bool is_file);

private:
    /// @brief 判断路径是否为字体文件
    static bool isFontFilePath(const std::string& path);

    /// @brief 字体名条目
    struct FontNameItem
    {
        std::string name;   ///< 实际字体名或路径
        bool ttf;           ///< 是否为 TTF 字体
    };

    /// @brief 注册的字体映射表
    static std::unordered_map<std::string, FontNameItem> _fontNames;
};

NS_FGUI_END

#endif
