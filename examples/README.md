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
- `Resources/fonts/*`：内嵌 TTF（`DroidSansFallback.ttf`、`arial.ttf` 等；**Web 不支持 SystemFont，必须打包**）

可选：在 **编辑器 → 编辑器设置 → 文件系统 → Other File Extensions** 追加 `fui`，便于在文件系统面板看到 `.fui`，并在「导出全部资源」时被扫描。

### 多线程与本地测试

- 若启用 **Variant → Thread Support**，托管服务器须返回 COOP/COEP 头（`Cross-Origin-Opener-Policy: same-origin`、`Cross-Origin-Embedder-Policy: require-corp`），否则浏览器报 `SharedArrayBuffer` / `crossOriginIsolated` 错误。
- 本地测试可用 Godot 自带脚本（已含上述头）：

```powershell
python D:\Source\godot\platform\web\serve.py -r "你的导出目录" -p 8060
```

### 中文与字体（内嵌 TTF，不用 SystemFont）

- **Web 端没有 SystemFont**，FUI 里写 `font="Consolas"` 这类系统字体名若未注册，会回退到 `defaultFont`；仍建议用 `registerFont` 显式映射到 `res://*.ttf`。
- Demo 在 `_registerDefaultFonts()` 中**只注册内嵌路径**（`.ttf` / `.otf`），例如 `default`、`en`、`微软雅黑`、`Consolas` → 项目内 TTF。
- 引擎加载内嵌字体时会关闭 `allow_system_fallback`（见 `UIConfig::loadFont`），避免缺字时混用系统字形导致 Web 字距异常。
- 字体 `.import` 中 `allow_system_fallback=false`，与运行时一致。
- 导出 Include Filters 须包含 `Resources/fonts/*`。

| 别名 | 内嵌文件 |
|------|----------|
| `default` / `微软雅黑` | `DroidSansFallback.ttf`（中文 + 默认） |
| `en` / `Consolas` / `Arial` 等 | `arial.ttf`（拉丁 UI） |

- **不要**写 `registerFont("SimHei", "SimHei")`（无扩展名会走 `SystemFont`）。若需某字体，把 TTF 放进 `Resources/fonts/` 再注册别名。

### 语言说明

- **GDScript / TypeScript** 可导出 Web；**C# / Mono 不支持 Web 导出**，Web 请用 `gd/` 或 `ts/` 主场景。
- TypeScript 另见 [`ts/README.md`](ts/README.md) 中的编译与 GodotJS 说明。
