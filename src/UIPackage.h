#ifndef __UIPACKAGE_H__
#define __UIPACKAGE_H__

#include "FairyGUIMacros.h"
#include "GObject.h"
#include "PackageItem.h"
#include "godot_types.h"

NS_FGUI_BEGIN

struct AtlasSprite;
class ByteBuffer;

/// @brief UI 包管理类，负责加载和解析 FairyGUI 编辑器导出的 UI 包（.fui 文件）。
///
/// UIPackage 是整个 FairyGUI 资源系统的核心，管理以下资源：
/// - UI 组件和元件的创建（createObject / createObjectFromURL）
/// - 图片、纹理图集（atlas）
/// - 字体（font）
/// - 影片剪辑（movieClip）
/// - 资源路径的映射（URL 解析）
///
/// 使用方式：
/// @code
/// // 加载 UI 包
/// UIPackage::addPackage("res://ui/Basics");
/// // 创建 UI 对象
/// Ref<GObject> btn = UIPackage::createObject("Basics", "Button");
/// // 或通过 URL 创建
/// Ref<GObject> obj = UIPackage::createObjectFromURL("ui://Basics/Button");
/// @endcode
class UIPackage : public RefCounted
{
    GDCLASS(UIPackage, RefCounted)

public:
    UIPackage();
    ~UIPackage();

    static void _bind_methods();

    // ---- 包管理 ----

    /// @brief 通过 ID 获取 UI 包
    /// @param id 包 ID
    static UIPackage* getById(const std::string& id);

    /// @brief 通过名称获取 UI 包
    /// @param name 包名称
    static UIPackage* getByName(const std::string& name);

    /// @brief 加载 UI 包
    /// @param descFilePath 包描述文件路径（.fui）
    /// @return 加载成功的 UI 包实例
    static UIPackage* addPackage(const std::string& descFilePath);

    /// @brief 移除 UI 包
    /// @param packageIdOrName 包 ID 或名称
    static void removePackage(const std::string& packageIdOrName);

    /// @brief 移除所有已加载的 UI 包
    static void removeAllPackages();

    // ---- 对象创建 ----

    /// @brief 通过包名和资源名创建 UI 对象
    /// @param pkgName 包名称
    /// @param resName 资源名称
    /// @return 创建的 GObject
    static Ref<GObject> createObject(const std::string& pkgName, const std::string& resName);

    /// @brief 通过 URL 创建 UI 对象（URL 格式：ui://包名/资源名）
    /// @param url UI 资源 URL
    /// @return 创建的 GObject
    static Ref<GObject> createObjectFromURL(const std::string& url);

    /// @brief 获取 UI 资源的完整 URL
    /// @param pkgName 包名称
    /// @param resName 资源名称
    /// @return URL 字符串（如 "ui://Basics/Button"）
    static std::string getItemURL(const std::string& pkgName, const std::string& resName);

    /// @brief 通过 URL 获取 PackageItem
    /// @param url UI 资源 URL
    static PackageItem* getItemByURL(const std::string& url);

    // ---- GDScript 绑定方法 ----
    static Ref<UIPackage> gd_getById(const String& id);
    static Ref<UIPackage> gd_getByName(const String& name);
    static Ref<UIPackage> gd_addPackage(const String& descFilePath);
    static void gd_removePackage(const String& packageIdOrName);
    static Ref<GObject> gd_createObject(const String& pkgName, const String& resName);
    static Ref<GObject> gd_createObjectFromURL(const String& url);
    static String gd_getItemURL(const String& pkgName, const String& resName);
    static Dictionary gd_getItemByURL(const String& url);
    static String gd_normalizeURL(const String& url);
    static Variant gd_getItemAsset(const String& pkgName, const String& resName, int type = static_cast<int>(PackageItemType::UNKNOWN));
    static Variant gd_getItemAssetByURL(const String& url, int type = static_cast<int>(PackageItemType::UNKNOWN));
    static Ref<Texture2D> gd_getEmptyTexture();
    static String gd_getBranch();
    static void gd_setBranch(const String& value);
    static String gd_getVar(const String& key);
    static void gd_setVar(const String& key, const String& value);

    /// @brief GDScript 绑定：注册字体别名
    static void gd_registerFont(const String& aliasName, const String& realName);

    /// @brief GDScript 绑定：设置默认字体
    static void gd_setDefaultFont(const String& fontName);

    // ---- 资源获取 ----

    /// @brief 标准化 URL 格式
    static std::string normalizeURL(const std::string& url);

    /// @brief 按名称获取资源
    /// @param pkgName 包名称
    /// @param resName 资源名称
    /// @param type 资源类型
    /// @return 资源指针（需要根据类型转型）
    static void* getItemAsset(const std::string& pkgName, const std::string& resName, PackageItemType type = PackageItemType::UNKNOWN);

    /// @brief 按 URL 获取资源
    /// @param url UI 资源 URL
    /// @param type 资源类型
    /// @return 资源指针
    static void* getItemAssetByURL(const std::string& url, PackageItemType type = PackageItemType::UNKNOWN);

    /// @brief 获取空白占位纹理（静态）
    static Ref<Texture2D> getEmptyTexture() { return _emptyTexture; }

    /// @brief 清理静态引用
    static void clearStaticRefs() { _emptyTexture.unref(); }

    // ---- 实例属性 ----

    /// @brief 获取包 ID
    const std::string& getId() const { return _id; }

    String gd_getId() const;
    String gd_getName() const;
    Dictionary gd_getItem(const String& itemId);
    Dictionary gd_getItemByName(const String& itemName);
    Variant gd_getItemAssetById(const String& itemId);
    Array gd_getItems() const;
    Array gd_getDependencies() const;

    /// @brief 获取包名称
    const std::string& getName() const { return _name; }

    /// @brief 获取包内的资源项
    /// @param itemId 资源 ID
    PackageItem* getItem(const std::string& itemId);

    /// @brief 通过名称获取包内的资源项
    /// @param itemName 资源名称
    PackageItem* getItemByName(const std::string& itemName);

    /// @brief 获取资源项的资产数据
    /// @param item 资源项
    void* getItemAsset(PackageItem* item);

    // ---- 分支与变量 ----

    /// @brief 获取当前分支名称（静态）
    static const std::string& getBranch() { return _branch; }

    /// @brief 设置当前分支名称（用于多语言/多平台资源切换）
    static void setBranch(const std::string& value);

    /// @brief 获取全局变量
    /// @param key 变量名
    static const std::string& getVar(const std::string& key);

    /// @brief 设置全局变量
    /// @param key 变量名
    /// @param value 变量值
    static void setVar(const std::string& key, const std::string& value);

    /// @brief 是否正在构建中（静态）
    static int _constructing;

    /// @brief URL 前缀常量 "ui://"
    static const std::string URL_PREFIX;

private:
    /// @brief 加载并解析包二进制数据
    bool loadPackage(ByteBuffer* buffer);

    /// @brief 加载图集资源
    void loadAtlas(PackageItem* item);

    /// @brief 获取精灵信息
    AtlasSprite* getSprite(const std::string& spriteId);

    /// @brief 创建精灵纹理
    void createSpriteTexture(AtlasSprite* sprite, ImageFrame& outFrame);

    /// @brief 加载图片资源
    void loadImage(PackageItem* item);

    /// @brief 加载影片剪辑资源
    void loadMovieClip(PackageItem* item);

    /// @brief 加载字体资源
    void loadFont(PackageItem* item);

    /// @brief 创建 UI 对象（内部使用）
    Ref<GObject> createObject(const std::string& resName);

    /// @brief 通过 PackageItem 创建 UI 对象
    Ref<GObject> createObject(PackageItem* item);

private:
    /// @brief 包 ID
    std::string _id;

    /// @brief 包名称
    std::string _name;

    /// @brief 资源路径
    std::string _assetPath;

    /// @brief 资源项列表
    std::vector<PackageItem*> _items;

    /// @brief 按 ID 索引的资源项映射
    std::unordered_map<std::string, PackageItem*> _itemsById;

    /// @brief 按名称索引的资源项映射
    std::unordered_map<std::string, PackageItem*> _itemsByName;

    /// @brief 精灵映射（图集中的子图）
    std::unordered_map<std::string, AtlasSprite*> _sprites;

    /// @brief 自定义 ID
    std::string _customId;

    /// @brief 字符串表
    std::vector<std::string> _stringTable;

    /// @brief 依赖关系映射
    std::vector<std::unordered_map<std::string, std::string>> _dependencies;

    /// @brief 分支列表
    std::vector<std::string> _branches;

    /// @brief 当前分支索引
    int _branchIndex;

    // ---- 静态成员 ----

    /// @brief 按 ID 索引的包实例（静态）
    static std::unordered_map<std::string, UIPackage*> _packageInstById;

    /// @brief 按名称索引的包实例（静态）
    static std::unordered_map<std::string, UIPackage*> _packageInstByName;

    /// @brief 所有已加载的包列表（静态）
    static std::vector<UIPackage*> _packageList;

    /// @brief 全局变量（静态）
    static std::unordered_map<std::string, std::string> _vars;

    /// @brief 当前分支（静态）
    static std::string _branch;

    /// @brief 空白占位纹理（静态）
    static Ref<Texture2D> _emptyTexture;

    friend class PackageItem;
};

/// @brief 图集精灵数据，描述图集中一个子图的矩形区域及偏移信息。
struct AtlasSprite
{
    /// @brief 所属图集
    PackageItem* atlas;

    /// @brief 子图在图集中的矩形区域
    Rect2 rect;

    /// @brief 原始尺寸
    Vector2 originalSize;

    /// @brief 偏移量
    Vector2 offset;

    /// @brief 是否已旋转
    bool rotated;
};

NS_FGUI_END

#endif
