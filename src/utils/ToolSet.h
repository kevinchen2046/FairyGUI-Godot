#ifndef __TOOLSET_H__
#define __TOOLSET_H__

#include "FairyGUI.h"

#if defined(_MSC_VER)
#include <basetsd.h>
typedef SSIZE_T ssize_t;
#else
#include <sys/types.h>
#endif

NS_FGUI_BEGIN

/// @brief 工具类，提供常用的辅助函数。
///
/// 包含颜色转换、矩形交集计算、字符串数组查找、文件存在检测等功能。
class ToolSet
{
public:
    /// @brief 将十六进制颜色字符串转换为 Color
    /// @param str 十六进制颜色字符串（如 "#FF0000" 或 "FF0000"）
    static Color hexToColor(const char* str);

    /// @brief 将整数值转换为 Color
    /// @param rgb RGB 整数值
    static Color intToColor(unsigned int rgb);

    /// @brief 将 Color 转换为整数值
    static unsigned int colorToInt(const Color& color);

    /// @brief 计算两个矩形的交集
    static Rect2 intersection(const Rect2& rect1, const Rect2& rect2);

    /// @brief 在字符串数组中查找指定字符串的索引
    /// @param arr 字符串数组
    /// @param str 要查找的字符串
    /// @return 索引，未找到返回 -1
    static int findInStringArray(const std::vector<std::string>& arr, const std::string& str);

    /// @brief 检查文件是否存在
    static bool isFileExist(const std::string& fileName);

    /// @brief 是否为桌面端输入（用于输入/滚动灵敏度判断）
    static bool isDesktopInput();
};

/// @brief 快速字符串分割器，用于解析键值对等分隔文本。
///
/// 高性能的字符串分割器，使用指针操作避免内存分配。
/// 主要用于解析 UI 包的元数据和配置文件。
class FastSplitter
{
public:
    FastSplitter();

    /// @brief 开始分割
    /// @param pData 源数据
    /// @param pDataLength 数据长度
    /// @param pDelimiter 分隔符
    void start(const char* pData, ssize_t pDataLength, char pDelimiter);

    /// @brief 移动到下一个分割段
    /// @return true 表示有数据，false 表示结束
    bool next();

    /// @brief 获取当前分割段的文本
    const char* getText();

    /// @brief 获取当前分割段的文本长度
    ssize_t getTextLength();

    /// @brief 将当前段解析为 key=value 键值对
    void getKeyValuePair(char* keyBuf, ssize_t keyBufSize, char* valueBuf, ssize_t valueBufSize);

private:
    const char* data;
    ssize_t dataLength;
    ssize_t textLength;
    char delimiter;
};

NS_FGUI_END

#endif
