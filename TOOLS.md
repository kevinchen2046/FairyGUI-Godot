# FairyGUI-Godot 工具脚本说明

本项目 `tools/` 目录下的脚本用于自动化文档生成、编译和部署流程。

---

## 目录结构

```
tools/
├── update_docs.py          # 一键更新类文档
├── build_and_deploy.py     # 一键编译 + 部署到目标项目
├── deploy_config.json      # 部署目标项目配置
└── run_godot_native_debug.ps1  # GDB 调试 Godot 原生崩溃
```

---

## update_docs.py

**作用**：从 C++ `_bind_methods` 自动生成 Godot 编辑器内帮助所需的 `doc_classes/*.xml` 文件，并填充中文描述。

**执行流程**：
1. 扫描 `src/` 下所有 `.cpp` 文件，提取每个类的 `_bind_methods` 中的方法、属性、信号、常量
2. 生成 XML 骨架文件到 `doc_classes/`
3. 根据内置的中文描述字典，为已知类和关键方法/属性填充中文说明
4. 修正 XML 文件格式（确保 `<?xml?>` 声明）

**使用方法**：
```bash
cd FairyGUI-Godot.git
python tools/update_docs.py
```

**何时使用**：
- 新增或修改了 C++ 中的 `_bind_methods`（方法、属性、信号、常量）
- 在头文件中添加/修改了类或方法的 `@brief` 注释后
- 在 `CLASS_DESCRIPTIONS` / `METHOD_DESCRIPTIONS` / `PROPERTY_DESCRIPTIONS` 字典中添加了新的中文描述

**新增描述**：编辑 `update_docs.py` 中的三个字典：
- `CLASS_DESCRIPTIONS` — 类的 `brief`（简介）和 `description`（详细说明）
- `METHOD_DESCRIPTIONS` — 按类分组的方法描述
- `PROPERTY_DESCRIPTIONS` — 按类分组的属性描述

---

## build_and_deploy.py

**作用**：一键完成文档更新 → 编译 → DLL 部署到目标项目的完整流程。

**执行流程**：
1. 调用 `update_docs.py` 更新类文档
2. 运行 `scons -j8 target=editor` 编译编辑器版本
3. 运行 `scons -j8 target=template_debug` 编译调试版本
4. 读取 `deploy_config.json` 中的目标项目列表
5. 将编译生成的 `.dll` 文件复制到各目标项目的 `addons/fairygui/bin/` 目录

**使用方法**：
```bash
cd FairyGUI-Godot.git

# 完整流程：文档 → 编译(editor+debug) → 部署
python tools/build_and_deploy.py

# 跳过文档更新步骤
python tools/build_and_deploy.py --no-docs

# 跳过部署步骤
python tools/build_and_deploy.py --no-deploy

# 只编译 editor 目标
python tools/build_and_deploy.py --target editor

# 只编译 template_debug 目标
python tools/build_and_deploy.py --target template_debug
```

**前置要求**：
- 已安装 Python 3
- 已安装 SCons（`pip install scons`）
- 已克隆 godot-cpp 子模块并完成一次初始编译

**典型工作流**：
1. 修改 C++ 源码后，新增/修改了 `_bind_methods`：
   ```bash
   python tools/build_and_deploy.py
   ```
2. 仅修改了实现代码，绑定无变化：
   ```bash
   python tools/build_and_deploy.py --no-docs
   ```
3. 仅更新文档描述：
   ```bash
   python tools/update_docs.py
   python tools/build_and_deploy.py --no-docs
   ```

---

## deploy_config.json

**作用**：配置编译产物（DLL）的部署目标路径。

**格式**：
```json
{
    "comment": "可选注释，说明配置文件用途",
    "target_projects": [
        "F:/projects/my-game/addons/fairygui/bin",
        "E:/other-game/addons/fairygui/bin"
    ]
}
```

**字段说明**：
| 字段 | 类型 | 说明 |
|------|------|------|
| `comment` | string | 可选，配置文件用途说明 |
| `target_projects` | string[] | Godot 项目的根目录路径列表 |

每个目标路径指向 Godot 项目的根目录（包含 `project.godot` 的目录）。部署时脚本会自动将 DLL 复制到 `目标路径/addons/fairygui/bin/` 下。

---

## run_godot_native_debug.ps1

**作用**：通过 GDB 启动 Godot 编辑器，捕获 C++ 原生崩溃的调用栈，用于调试 GDExtension 的 native crash。

**使用方法**：
```powershell
# 使用默认路径
.\tools\run_godot_native_debug.ps1

# 自定义路径
.\tools\run_godot_native_debug.ps1 -GodotExe "C:\godot\godot.exe" -GdbExe "C:\mingw64\bin\gdb.exe" -ProjectPath "..\examples"
```

**参数说明**：
| 参数 | 默认值 | 说明 |
|------|--------|------|
| `-GodotExe` | `D:\godot\Godot_v4.7-stable_win64.exe` | Godot 编辑器路径 |
| `-GdbExe` | `D:\mingw64\bin\gdb.exe` | GDB 调试器路径 |
| `-ProjectPath` | `..\examples` | 要打开的 Godot 项目路径 |

**输出**：崩溃日志写入 `diagnostics/` 目录：
- `godot.log` — Godot 编辑器日志
- `native-crash.log` — GDB 捕获的崩溃调用栈
