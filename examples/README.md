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
- `Resources/fonts/*`：中文字体 `NotoSansSC-Regular.ttf`（**Web 须打包 TTF**）

可选：在 **编辑器 → 编辑器设置 → 文件系统 → Other File Extensions** 追加 `fui`，便于在文件系统面板看到 `.fui`，并在「导出全部资源」时被扫描。

### 多线程与本地测试

- 若启用 **Variant → Thread Support**，托管服务器须返回 COOP/COEP 头（`Cross-Origin-Opener-Policy: same-origin`、`Cross-Origin-Embedder-Policy: require-corp`），否则浏览器报 `SharedArrayBuffer` / `crossOriginIsolated` 错误。
- 本地测试可用 Godot 自带脚本（已含上述头）：

```powershell
python D:\Source\godot\platform\web\serve.py -r "你的导出目录" -p 8060
```

### 中文与字体

- 示例在 `_registerDefaultFonts()` 注册 `Resources/fonts/NotoSansSC-Regular.ttf`（别名 `default` / `en` / `微软雅黑`）。
- Web 导出须 Include Filters 包含 `Resources/fonts/*`。

### PopupMenu 悬停文字

- 若悬停菜单项时文字被背景盖住，需**重新编译 Godot**（`GComponent` 显示列表顺序修复）并在 FairyGUI 编辑器中**重导 `Basics` 包**（`PopupMenuItem.xml` 已调整 `gearColor` 与 title 层级）。

### 滚动条（ScrollBar）

FairyGUI 的 ScrollPane **不会**自动从 `UIProject/settings/Common.json` 里的 `scrollBars` 配置加载滚动条组件。编辑器里的「默认滚动条 / 水平 / 垂直」URL 会写入各组件的 `.fui` 二进制；运行时若 URL 为空，则回退到 **`UIConfig::horizontalScrollBar` / `verticalScrollBar`**（进程内静态变量，需代码注册）。

#### Demo 中的注册方式

三套 Demo 在 `DemoSceneBase` 的 `_registerDefaultScrollBars()`（GD：` _register_default_scroll_bars()`）里统一：

1. `UIPackage.addPackage("res://Resources/UI/Basics")` — 滚动条组件资源在 **Basics** 包（`ScrollBar_HZ` / `ScrollBar_VT`），**Bag 等包本身不含 ScrollBar**。
2. 设置 `UIConfigHelper` 的 `horizontalScrollBar` / `verticalScrollBar` 为 `ui://Basics/ScrollBar_HZ` 等。

若只加载 `Bag` 包、未注册上述 URL，ScrollPane 创建时 `_hzScrollBar == null`，表现为**完全没有滚动条**（悬停、滚轮、拖动均无条可显）。先打开过 **Basics → List** 等 demo 后行为「突然正常」，是因为 `BasicsScene` 曾写入全局 `UIConfig`，**与 GList 的 item pool 无关**（pool 只回收列表格子，不创建 ScrollBar）。

#### 「滚动时显示」（编辑器 = `scrollBar="auto"`）

与 Cocos2dx 原版一致：AUTO 模式下初始隐藏；**桌面悬停**、拖动、惯性滚动、拖 grip 时显示；无上述条件时延迟淡出。

| 条件 | 行为 |
|------|------|
| 初始 | 滚动条隐藏 |
| 鼠标悬停（桌面） | 显示 |
| 触摸/鼠标拖动滚动 | 显示 |
| 惯性滚动 | 显示 |
| 滚轮滚动 | 不触发显示（与 Cocos 一致） |
| 无上述条件 | 延迟 0.5s 后淡出隐藏 |

悬停移入移出时的闪烁为 AUTO 模式正常淡出/重显。

#### 自有工程注意

在创建任何带 `overflow="scroll"` 的 UI **之前**完成包加载与 URL 注册，例如：

```typescript
UIPackage.addPackage("res://Resources/UI/Basics");
const ui = UIConfigHelper.getInstance()!;
ui.horizontalScrollBar = "ui://Basics/ScrollBar_HZ";
ui.verticalScrollBar = "ui://Basics/ScrollBar_VT";
```

也可把 ScrollBar 组件做到自己的 UI 包中，再注册对应 `ui://YourPkg/ScrollBar_HZ` URL。

### 语言说明

- **GDScript / TypeScript** 可导出 Web；**C# / Mono 不支持 Web 导出**，Web 请用 `gd/` 或 `ts/` 主场景。
- TypeScript 另见 [`ts/README.md`](ts/README.md) 中的编译与 GodotJS 说明。
