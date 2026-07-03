# FairyGUI Examples (C#)

与 `gd/` 目录结构对应的 C# 版 Demo。

## 目录结构

```
csharp/
  Scenes/          # 场景入口（.tscn）
  Scripts/         # C# 脚本（.cs）
```

## 前置条件（必读）

C# Demo **必须**使用带 **Mono + FairyGUI** 的自编译 Godot，且 API 绑定来自本地 glue，**不能**用 NuGet 官方 `GodotSharp 4.5.0`（不含 `GRoot`、`GObject` 等 FairyGUI 类型）。

### 1. 编译引擎（启用 Mono）

```powershell
cd D:\Source\godot
scons platform=windows target=editor dev_build=yes module_mono_enabled=yes -j8
```

### 2. 生成 Mono glue（含 FairyGUI 绑定）

```powershell
.\bin\godot.windows.editor.dev.x86_64.mono.exe --headless --generate-mono-glue modules/mono/glue
```

成功标志：输出 `The Godot API sources were successfully generated`。

### 3. 编译 GodotSharp API

```powershell
dotnet build modules\mono\glue\GodotSharp\GodotSharp.sln -c Debug
```

产物：`bin/GodotSharp/Api/Debug/GodotSharp.dll`（含 `GRoot`、`GWindow` 等）。

### 4. 用 Mono 编辑器打开工程

**必须**使用：

```
godot.windows.editor.dev.x86_64.mono.exe
```

不要用无 `.mono` 后缀的编辑器；否则 C# 无法加载，行为会像“没挂上脚本”或仍跑 GD 主场景。

## 运行 C# Demo

1. 用 **Mono 编辑器**打开 `examples/project.godot`。
2. **项目 → 项目设置 → 应用 → 运行 → 主场景** 设为：
   ```
   res://csharp/Scenes/MainMenu.tscn
   ```
   （当前 `project.godot` 默认仍是 `res://gd/Scenes/MainMenu.tscn`，按 F5 会跑 **GDScript 版**，与当前打开的场景无关。）
3. 等待编辑器底部 **C# 构建成功**（或执行 `dotnet build FairyGUI.Godot.Examples.csproj`）。
4. 运行项目。

## 为什么“打开 C# 场景却跑了 GD 脚本”？

常见原因（可同时存在）：

| 原因 | 说明 |
|------|------|
| **主场景仍是 GD 版** | F5 运行的是 `project.godot` 里的 `run/main_scene`，不是编辑器里当前打开的标签页。需改主场景或用“运行当前场景”。 |
| **C# 未编译成功** | 编译失败时 `.cs` 不会生效，节点相当于无脚本或报错。 |
| **用了非 Mono 编辑器** | 无法加载 C# 程序集。 |
| **GodotSharp 引用错误** | 若引用 NuGet 官方包，会报 `未能找到 GRoot/GObject/GWindow`。本仓库 `FairyGUI.Godot.Examples.csproj` 已配置引用 `../../../bin/GodotSharp/Api/Debug`。 |

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
| `obj.getChild()` 在任意 GObject 上 | 仅 `GComponent`/`GList` 等有 | `FguiExtensions` 扩展方法 |
| `add_relation(..., RelationType.X)` | 第二参数为 `int` | `AddRelation(..., RelationType.X)` 扩展自动转换 |
| 继承 `GWindow` 的类 | 须 `partial class` | `BagWindow`、`Window1`、`Window2` |

本地构建：

```powershell
cd modules\fairygui\examples
dotnet build FairyGUI.Godot.Examples.csproj
```

需已存在 `bin/GodotSharp/Api/Debug/GodotSharp.dll`（见上文 glue 步骤）。
