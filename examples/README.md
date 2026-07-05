# FairyGUI Godot Examples

三套语言版本的 Demo，结构一致，共用 UI 资源（`Resources/UI/`、`UIProject/`）。

| 目录 | 语言 | 主场景 |
|------|------|--------|
| `gd/` | GDScript | `res://gd/Scenes/MainMenu.tscn` |
| `csharp/` | C# | `res://csharp/Scenes/MainMenu.tscn` |
| `ts/` | TypeScript | `res://ts/Scenes/MainMenu.tscn` |

## 目录结构（各语言相同）

```
<lang>/
  Scenes/     # 16 个子 demo 场景 + MainMenu
  Scripts/    # 场景脚本 + 辅助类（Window1/2、BagWindow、JoystickModule 等）
```

## 切换语言版本

在项目设置 → 应用 → 运行 → **主场景** 中选择对应语言的 `MainMenu.tscn`。

- **C#**：需 Mono + 自编译 GodotSharp（含 FairyGUI glue）；工程文件 `FairyGUI.Godot.Examples.csproj`，详细步骤见 [`csharp/README.md`](csharp/README.md)（含 `GODOT_BIN` 环境变量与 `assembly_name` 配置）
- **TypeScript**：需 Godot TypeScript 脚本支持；见 `tsconfig.json` 与 `ts/fairygui.d.ts`

## Demo 列表

Basics、Transition、VirtualList、LoopList、HitTest、PullToRefresh、ModalWaiting、Joystick、Bag、Chat、ListEffect、ScrollPane、TreeView、Guide、Cooldown

## Web 导出

FairyGUI 的 UI 包（`.fui`）与图集等资源**不会**随「导出选定场景及依赖」自动打进 `.pck`：`UIPackage.addPackage("res://Resources/UI/...")` 是运行时字符串，Godot 导出器不会把它当作资源依赖。

### 导出预设（项目 → 导出 → Web → 资源）

| 项 | 建议值 |
|----|--------|
| **导出模式** | 「导出项目中的全部资源」；若仍用「选定场景」，必须配置下方过滤器 |
| **过滤器 / 非资源文件（Include Filters）** | `*.fui, Resources/UI/*, Resources/fonts/*` |

说明：

- `*.fui`：FairyGUI 包描述文件（`UIPackage` 通过 `FileAccess` 读取，非 Godot `Resource`）
- `Resources/UI/*`：各包图集 PNG、音频等（同样多在代码里按路径加载，不一定出现在场景依赖链里）
- `Resources/fonts/*`：拉丁字体 `Marker Felt.ttf`（默认 UI 字体）+ 中文字体 `DroidSansFallback.ttf`（「微软雅黑」别名；**Web 不支持 SystemFont，必须打包 TTF**）

可选：在 **编辑器 → 编辑器设置 → 文件系统 → Other File Extensions** 追加 `fui`，便于在文件系统面板看到 `.fui`，并在「导出全部资源」时被扫描。

### 多线程与本地测试

- 若启用 **Variant → Thread Support**，托管服务器须返回 COOP/COEP 头（`Cross-Origin-Opener-Policy: same-origin`、`Cross-Origin-Embedder-Policy: require-corp`），否则浏览器报 `SharedArrayBuffer` / `crossOriginIsolated` 错误。
- 本地测试可用 Godot 自带脚本（已含上述头）：

```powershell
python D:\Source\godot\platform\web\serve.py -r "你的导出目录" -p 8060
```

### 中文与字体

- `default` / `en` → `Resources/fonts/Marker Felt.ttf`（英文 UI 标签；Web 上 DroidSansFallback 对部分拉丁字母字距异常，如含 **T/t** 的 Button、Text）。
- UI 包内「微软雅黑」→ `Resources/fonts/DroidSansFallback.ttf`（中文标题等显式指定该字体名的控件）。
- **Web 端不能使用浏览器系统字体**（Godot Web 未实现 `SystemFont`），须与 `.fui` 一样通过 Include Filters 把 `Resources/fonts/*` 打进包。

### 语言说明

- **GDScript / TypeScript** 可导出 Web；**C# / Mono 不支持 Web 导出**，Web 请用 `gd/` 或 `ts/` 主场景。
- TypeScript 另见 [`ts/README.md`](ts/README.md) 中的编译与 GodotJS 说明。
