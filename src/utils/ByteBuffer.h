#ifndef __BYTEBUFFER_H_
#define __BYTEBUFFER_H_

#include "FairyGUIMacros.h"

NS_FGUI_BEGIN

/// @brief 二进制缓冲区读写类，用于解析 FairyGUI 编辑器导出的二进制数据格式。
///
/// ByteBuffer 提供类型化的读取方法（readByte/readShort/readInt/readString 等），
/// 支持大小端切换、字符串表引用、Seek 跳转等。
/// 是 UIPackage 解析和 UI 组件反序列化的核心工具类。
class ByteBuffer
{
public:
    /// @param buffer 数据缓冲区
    /// @param offset 起始偏移
    /// @param len 数据长度
    /// @param transferOwnerShip 是否转移所有权（析构时是否释放 buffer）
    ByteBuffer(char* buffer, int offset, int len, bool transferOwnerShip);
    ~ByteBuffer();

    /// @brief 获取缓冲区原始指针
    const char* getBuffer() const { return _buffer; }

    /// @brief 是否为小端字节序
    bool isLittleEndian() const { return _littleEndian; }

    /// @brief 设置字节序
    void setLittleEndian(bool value) { _littleEndian = value; }

    /// @brief 获取剩余可读字节数
    int getBytesAvailable() const;

    /// @brief 获取数据总长度
    int getLength() const { return _length; }

    /// @brief 获取当前读取位置
    int getPos() const { return _position; }

    /// @brief 设置当前读取位置
    void setPos(int value) { _position = value; }

    /// @brief 跳过指定字节数
    void skip(int count) { _position += count; }

    /// @brief 读取一个有符号字节
    char readByte();

    /// @brief 读取一个无符号字节
    unsigned char readUbyte();

    /// @brief 读取一个布尔值
    bool readBool();

    /// @brief 读取一个有符号短整数（2字节）
    short readShort();

    /// @brief 读取一个无符号短整数（2字节）
    unsigned short readUshort();

    /// @brief 读取一个有符号整数（4字节）
    int readInt();

    /// @brief 读取一个无符号整数（4字节）
    unsigned int readUint();

    /// @brief 读取一个浮点数（4字节）
    float readFloat();

    /// @brief 读取一个字符串（长度前缀）
    std::string readString();

    /// @brief 读取指定长度的字符串
    std::string readString(int len);

    /// @brief 读取字符串（通过字符串表索引）
    const std::string& readS();

    /// @brief 读取指定数量的字符串数组
    void readSArray(std::vector<std::string>& arr, int count);

    /// @brief 读取字符串到 result 参数
    bool readS(std::string& result);

    /// @brief 读取字符串指针（通过字符串表）
    const std::string* readSP();

    /// @brief 写入字符串到内部位置
    void writeS(const std::string& value);

    /// @brief 读取颜色（RGBA）
    Color readColor();

    /// @brief 读取子缓冲区
    ByteBuffer* readBuffer();

    /// @brief 跳转到索引表中的指定位置
    /// @param indexTablePos 索引表起始偏移
    /// @param blockIndex 块索引
    bool seek(int indexTablePos, int blockIndex);

    /// @brief 获取字符串表
    std::vector<std::string>* getStringTable() const { return _stringTable; }

    /// @brief 设置字符串表
    void setStringTable(std::vector<std::string>* value) { _stringTable = value; }

    /// @brief 数据版本号
    int version;

private:
    char* _buffer;
    int _offset;
    int _length;
    bool _littleEndian;
    bool _ownsBuffer;
    int _position;
    std::vector<std::string>* _stringTable;
};

NS_FGUI_END

#endif
