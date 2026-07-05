# FairyGUI Examples (C#)

与 `gd/` 目录结构对应的 C# 版 Demo。

## 目录结构

```
csharp/
  Scenes/          # 场景入口（.tscn）
  Scripts/         # C# 脚本（.cs）
```

## 前置条件（必读）

C# Demo **必须**使用带 **Mono + FairyGUI** 的自编译 Godot，且 API 绑定来自本地 glue，**不能**用 NuGet 官方 `GodotSharp`（不含 `GRoot`、`GuiObject` 等 FairyGUI 类型）。

### 1. 编译引擎（启用 Mono）

```powershell
cd D:\Source\godot
scons platform=windows target=editor dev_build=yes module_mono_enabled=yes -j8
```

### 2. 生成 Mono glue（含 FairyGUI 绑定）

```powershell
.\bin\godot.windows.editor.dev.x86_64.mono.exe --headless --editor --generate-mono-glue modules/mono/glue
```

成功标志：输出 `The Godot API sources were successfully generated`。

### 3. 编译 GodotSharp API

```powershell
dotnet build modules\mono\glue\GodotSharp\GodotSharp.sln -c Debug
```

产物：`D:\Source\godot\bin\GodotSharp\Api\Debug\GodotSharp.dll`（含 `GRoot`、`GWindow` 等）。

### 4. 用 Mono 编辑器打开工程

**必须**使用：

```
godot.windows.editor.dev.x86_64.mono.exe
```

不要用无 `.mono` 后缀的编辑器；否则 C# 无法加载。

## 工程配置与命名（重要）

Godot 编辑器按 **`dotnet/project/assembly_name`** 查找 C# 工程，不会扫描目录里所有 `.csproj`：

| 配置 | 当前值 | 说明 |
|------|--------|------|
| `FairyGUI.Godot.Examples.csproj` | 文件名 | 须与 `assembly_name` 一致 |
| `project.godot` → `dotnet/project/assembly_name` | `FairyGUI.Godot.Examples` | 编辑器找 `{name}.csproj` / `{name}.sln` |
| 运行时加载的 DLL | `FairyGUI.Godot.Examples.dll` | 位于 `.godot/mono/temp/bin/Debug/` |
| C# 命名空间 | `FairyGUI.Examples` | 与程序集名无关，可单独命名 |
| `application/config/name` | `FairyGUI-Godot-Examples` | 仅项目显示名，**不必**与程序集名相同 |

三者必须对齐：**csproj 文件名 = `assembly_name` = 输出 DLL 名（不含扩展名）**。

若 `assembly_name` 为 `FairyGUI-Godot-Examples` 而 csproj 叫 `FairyGUI.Godot.Examples.csproj`，则编辑器找不到工程，运行时也会找错 DLL 名。

## 构建项目脚本（GODOT_BIN）

`FairyGUI.Godot.Examples.csproj` 引用自编译 GodotSharp 的优先级：

1. MSBuild 参数 `/p:GodotSharpApiDir=...`（最高）
2. 环境变量 **`GODOT_BIN`** → `{GODOT_BIN}/GodotSharp/Api/Debug`
3. 相对路径 `../../../bin/GodotSharp/Api/Debug`（仅在 godot 源码树 `modules/fairygui/examples` 内有效）

### 在 godot 源码树内构建

```powershell
cd D:\Source\godot\modules\fairygui\examples
dotnet build FairyGUI.Godot.Examples.csproj -c Debug
```

未设置 `GODOT_BIN` 时自动使用相对路径 `../../../bin`（即 `D:\Source\godot\bin`）。

### 在外部仓库（如 mkdevkit）构建

工程不在 godot 源码树内时，**必须**设置 `GODOT_BIN`：

```powershell
$env:GODOT_BIN = "D:\Source\godot\bin"

cd D:\WorkSpace\mkdevkit\FairyGUI-Godot\examples
dotnet build FairyGUI.Godot.Examples.csproj -c Debug
```

也可单次指定路径：

```powershell
dotnet build FairyGUI.Godot.Examples.csproj -c Debug `
  /p:GodotSharpApiDir="D:\Source\godot\bin\GodotSharp\Api\Debug"
```

### 编辑器内 C# 构建与环境变量

- 命令行 `dotnet build`：读取当前 shell 的 `$env:GODOT_BIN`。
- Godot 编辑器底部 **Build** 按钮：启动 MSBuild 子进程，**不会**继承 PowerShell 临时变量。
- 若在外部目录打开工程且需在编辑器内构建，请任选其一：
  - 在 **系统环境变量** 中永久设置 `GODOT_BIN=D:\Source\godot\bin`
  - 或在 godot 源码树 `modules/fairygui/examples` 下打开 `project.godot`（走相对路径回退）

### 构建产物

```
{工程目录}/.godot/mono/temp/bin/Debug/FairyGUI.Godot.Examples.dll
```

必须在 **当前用编辑器打开的那个工程** 目录下构建；不要从 A 工程 build 后 copy 到 B 工程的 `.godot`（除非 DLL 名与 `assembly_name` 完全一致且脚本文本一致）。

## 运行 C# Demo

1. 用 **Mono 编辑器**打开 `examples/project.godot`（确认打开的是你要运行的那份工程）。
2. **项目 → 项目设置 → 应用 → 运行 → 主场景** 设为：
   ```
   res://csharp/Scenes/MainMenu.tscn
   ```
   （默认 `project.godot` 可能仍是 `res://gd/Scenes/MainMenu.tscn`，F5 会跑 GDScript 版。）
3. 等待编辑器底部 **C# 构建成功**（或按上文执行 `dotnet build`）。
4. 运行项目。

## 常见问题

| 现象 | 原因 | 处理 |
|------|------|------|
| `Cannot instantiate C# script ... class could not be found` | 项目 DLL 未生成、名不对或未加载 | 确认 `.godot/mono/temp/bin/Debug/FairyGUI.Godot.Examples.dll` 存在；检查 `assembly_name` 与 csproj 一致 |
| 编辑器找不到 C# 工程 / Build 失败 | csproj 文件名与 `assembly_name` 不一致 | 统一为 `FairyGUI.Godot.Examples` |
| `未能找到 GRoot/GuiObject/GWindow` | 引用了 NuGet 官方 GodotSharp | 设置 `GODOT_BIN` 或 `/p:GodotSharpApiDir` 指向自编译 API |
| copy DLL 仍无效 | copy 了错误文件名或 copy 到非当前工程 | 在打开的工程目录 build，勿跨工程 copy |
| 打开 C# 场景却跑 GD | 主场景仍指向 `gd/` | 修改 `run/main_scene` 或用「运行当前场景」 |

## 说明

- 脚本命名空间：`FairyGUI.Examples`
- UI 资源与 `gd/` 共用 `res://Resources/UI/`
- CloseButton 返回 `res://csharp/Scenes/MainMenu.tscn`

## C# 与 GDScript API 差异

Mono glue 生成的命名与 GDScript 不完全一致，Demo 通过 `Scripts/FguiExtensions.cs` 适配：

| GDScript / 直觉写法 | C# glue 实际名称 | Demo 中的用法 |
|---------------------|------------------|---------------|
| `UIEventDispatcher.CLICK_ITEM` | `UIEventDispatcher.Clickitem` | `FguiEvent.ClickItem` |
| `FGUIEventContext` | `FguiEventContext` | 直接使用 `FguiEventContext` |
| `obj.getChild()` 在任意 GuiObject 上 | 仅 `GComponent`/`GList` 等有 | `FguiExtensions` 扩展方法 |
| `add_relation(..., RelationType.X)` | 第二参数为 `int` | `AddRelation(..., RelationType.X)` 扩展自动转换 |
| 继承 `GWindow` 的类 | 须 `partial class` | `BagWindow`、`Window1`、`Window2` |

**C# `addEventListener` 回调**：FairyGUI 会传入 `FguiEventContext`。须用 `Callable.From<FguiEventContext>(ctx => ...)` 或方法签名 `void Handler(FguiEventContext ctx)`；0 参数 lambda / 可选参数会导致 `Invalid argument count` 运行时错误。`addClickListener` 无参数，不受影响。
