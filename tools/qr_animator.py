import os
import sys
import zlib
import math
import cv2
import numpy as np
import qrcode
from PIL import Image

# ---------------------------------------------------------
# 配置参数
# ---------------------------------------------------------
CHUNK_SIZE = 500       # 每帧二维码容纳的原始数据字节数 (推荐 300-800，越大点阵越密)
FRAME_DURATION = 100   # GIF 帧间隔时间 (毫秒)，100ms = 10 FPS

def file_to_animated_qr(input_file_path: str, output_gif_path: str):
    """【编码】将文件压缩切片并生成 GIF 动画二维码"""
    if not os.path.exists(input_file_path):
        print(f"❌ 错误：找不到文件 '{input_file_path}'")
        return

    print(f"📦 读取文件: {input_file_path}")
    with open(input_file_path, "rb") as f:
        raw_data = f.read()

    # 1. 使用 zlib 压缩数据，尽量减小传输量
    compressed = zlib.compress(raw_data)
    total_bytes = len(compressed)
    filename = os.path.basename(input_file_path)
    
    # 2. 计算切片数
    total_chunks = math.ceil(total_bytes / CHUNK_SIZE)
    print(f"⚡ 原始大小: {len(raw_data)/1024:.2f} KB | 压缩后: {total_bytes/1024:.2f} KB")
    print(f"🧩 共切分为 {total_chunks} 帧动画二维码...")

    frames = []
    qr_builder = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_L, # 使用 L 级容错以提升存储容量
        box_size=6,
        border=2,
    )

    for i in range(total_chunks):
        start = i * CHUNK_SIZE
        end = min(start + CHUNK_SIZE, total_bytes)
        chunk_data = compressed[start:end]

        # 头部协议格式：文件名|总帧数|当前帧索引|数据类型标识
        # 使用 bytearray 拼接二进制协议头，保证完美兼容各种文件类型
        header = f"{filename}|{total_chunks}|{i}|".encode('utf-8')
        payload = header + chunk_data

        qr_builder.clear()
        # 注意：这里必须直接传输 raw_bytes
        qr_builder.add_data(payload, optimize=0)
        qr_builder.make(fit=True)

        img = qr_builder.make_image(fill_color="black", back_color="white").convert("RGB")
        frames.append(img)

        # 打印进度条
        sys.stdout.write(f"\r⏳ 正在生成二维码帧: [{i + 1}/{total_chunks}]")
        sys.stdout.flush()

    print("\n🎞️ 正在合成 GIF 动画文件...")
    frames[0].save(
        output_gif_path,
        save_all=True,
        append_images=frames[1:],
        duration=FRAME_DURATION,
        loop=0
    )
    print(f"✅ 生成完毕！导出文件为: {output_gif_path}")


def animated_qr_to_file(gif_or_video_path: str, output_dir: str = "."):
    """【解码】从 GIF 动画或录屏视频中解析恢复原始文件"""
    if not os.path.exists(gif_or_video_path):
        print(f"❌ 错误：找不到图像/视频文件 '{gif_or_video_path}'")
        return

    print(f"🔍 正在从 '{gif_or_video_path}' 解析数据...")
    cap = cv2.VideoCapture(gif_or_video_path)
    detector = cv2.QRCodeDetector()

    received_chunks = {}
    total_chunks = None
    target_filename = None

    frame_count = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame_count += 1

        # OpenCV 扫码识别
        data_str, _, _ = detector.detectAndDecode(frame)
        if data_str:
            # 数据还原处理
            try:
                # 尝试解析头部
                parts = data_str.encode('latin1').split(b'|', 3)
                if len(parts) == 4:
                    fname = parts[0].decode('utf-8')
                    t_chunks = int(parts[1].decode('utf-8'))
                    c_idx = int(parts[2].decode('utf-8'))
                    chunk_payload = parts[3]

                    if target_filename is None:
                        target_filename = fname
                        total_chunks = t_chunks

                    if c_idx not in received_chunks:
                        received_chunks[c_idx] = chunk_payload
                        print(f"   [+] 成功解析第 {c_idx + 1}/{total_chunks} 帧")

                    if len(received_chunks) == total_chunks:
                        print("🎉 所有帧已成功提取完，正在重构文件...")
                        break
            except Exception:
                pass

    cap.release()

    if total_chunks and len(received_chunks) == total_chunks:
        # 按序号重组并解压缩
        full_compressed = b"".join([received_chunks[i] for i in range(total_chunks)])
        original_data = zlib.decompress(full_compressed)

        out_path = os.path.join(output_dir, "restored_" + target_filename)
        with open(out_path, "wb") as f:
            f.write(original_data)
        print(f"✨ 文件完全还原成功！输出路径: {out_path}")
        return out_path
    else:
        got = len(received_chunks)
        needed = total_chunks if total_chunks else "未知"
        print(f"❌ 还原失败：只成功读取了 {got}/{needed} 帧数据，请检查 GIF 播放速度或完整性。")


# ---------------------------------------------------------
# 交互测试菜单
# ---------------------------------------------------------
if __name__ == "__main__":
    print("=== 动画二维码生成 & 还原器 ===")
    print("1. [生成] 将文件转换成 GIF 动画二维码")
    print("2. [还原] 从 GIF 动画或视频还原出文件")
    choice = input("请选择功能 (1/2): ").strip()

    if choice == "1":
        file_p = input("请输入要转换的文件路径 (例如: test.pdf / pic.jpg): ").strip()
        out_gif = input("请输入导出的 GIF 名称 (回车默认: output.gif): ").strip()
        if not out_gif:
            out_gif = "output.gif"
        file_to_animated_qr(file_p, out_gif)

    elif choice == "2":
        gif_p = input("请输入 GIF 或视频文件路径 (例如: output.gif): ").strip()
        animated_qr_to_file(gif_p)