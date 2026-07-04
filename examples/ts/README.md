# FairyGUI Examples (TypeScript / GodotJS)

与 `gd/` 目录结构对应的 TypeScript 版 Demo，运行时需要 **GodotJS** 模块。

## 目录结构

```
ts/
  Scenes/          # 场景入口（.tscn），挂载 Scripts 下的 .ts 源文件
  Scripts/         # TypeScript 源码（.ts）
  fairygui.d.ts    # FairyGUI 类型声明
.godot/GodotJS/    # tsc 编译输出（.js），GodotJS 运行时加载此目录
typings/           # GodotJS 生成的引擎 API 类型（declare module "godot"），需提交或本地生成
gen/godot/         # GodotJS 生成的项目资源/场景/脚本映射（*.gen.ts），本地生成，不提交
```

### `typings/` 与 `gen/` 的区别

| 目录 | 内容 | 作用 | 是否提交 |
|------|------|------|----------|
| `typings/` | `godot0.gen.d.ts`～`godot10.gen.d.ts`、`godot.mix.d.ts` 等 | 让 `import { Node, GRoot } from "godot"` 通过类型检查 | 建议提交（当前未跟踪） |
| `gen/godot/` | 按项目资源生成的 `*.gen.ts`（如 `MainMenu.ts.gen.ts`、`.nodes.gen.ts`、UI 资源映射） | 为场景节点、脚本路径等提供 `ResourceTypes` / `SceneNodes` 增强 | 不提交（`.gitignore`） |

**`Cannot find module 'godot'` 的原因：** 旧版曾用手写 `gen/godot/index.d.ts` + `tsconfig paths`；现在 GodotJS 标准流程是 **`typings/` 提供 `godot` 模块类型**。克隆仓库后若没有 `typings/`，`tsc` 会报找不到 `godot`。

### 本地生成类型

需使用带 **GodotJS** 模块的自编译 Godot 编辑器：

```powershell
# 在项目根 examples/ 下执行（约需数分钟）
.\path\to\godot.windows.editor.*.exe --headless --editor --generate-types --path "D:\Source\godot\modules\fairygui\examples"
```

或在编辑器 GodotJS 菜单：**Install TS Project** → **Generate Types**。

会同时生成/更新 `typings/` 与 `gen/godot/`。仅做 `tsc` 类型检查时，**至少需要 `typings/`**；`gen/` 主要用于场景节点类型增强，当前 `tsconfig` 未纳入 `gen/` 下的文件。

## 编译

在 `examples/` 目录执行：

```bash
npx -p typescript tsc
```

输出到 `.godot/GodotJS/ts/Scripts/*.js`。修改 `.ts` 后需重新编译。

## 运行

1. 使用 **带 GodotJS + FairyGUI 模块** 的自编译 Godot 打开 `examples/` 工程。
2. 将主场景设为 `res://ts/Scenes/MainMenu.tscn`（或在项目设置里切换）。
3. 先 `tsc` 编译，再运行项目。

## 与 GDScript 版的区别

| 项目 | GDScript (`gd/`) | GodotJS (`ts/`) |
|------|------------------|-----------------|
| 基类继承 | `class_name` + `extends` | 场景脚本 `export default class`；**基类/辅助类用命名导出**（勿 `export default`，见 GodotJS 脚本解析） |
| 场景挂载 | `.gd` 源文件 | `.ts` 源文件（非 `.js`） |
| 编译输出 | 无 | `.godot/GodotJS/` |
| tsc module | — | `node16`（CommonJS，GodotJS 要求） |

**不需要** 做 GDScript 那套 `DemoSceneBase` 全局类 / 路径继承修改；TypeScript 用 `import { DemoSceneBase } from "./DemoSceneBase"` 即可。

**GodotJS 脚本解析：** 只有挂到场景节点的脚本才应 `export default class X extends Node`。`DemoSceneBase`、`Window1`、`BagWindow`、`JoystickModule` 等基类/辅助类须 **`export class`（命名导出）**，否则 `_parse_script_class` 会把它们当 Godot 脚本类解析，切场景 `require` 时可能在 debug 构建里触发断言崩溃。

**注意：** `gd/` 与 `ts/` 同仓共存时，勿在 GDScript 里对 `DemoSceneBase`、`BagWindow` 等写 `class_name`（与 TS 的 `export default class` 全局注册重名）。GD 子场景已用 `extends "res://gd/Scripts/..."` 或 `load(...).new()`，不依赖 `class_name`。

## GodotJS 项目设置

`project.godot` 中需启用（与 GDScript 示例 API 命名一致）：

```ini
[GodotJS/runtime/core]
camel_case_bindings_enabled=true
```

## FairyGUI 在 GodotJS 中的用法

GDScript 可直接写 `GRoot.getInstance()`；GodotJS 中 ClassDB 类型在 **`godot` 模块**上，不会自动成为 JS 全局变量。

FairyGUI 类在 GodotJS 运行时挂在 `godot` 模块上，不会自动成为 JS 全局变量。侧效模块 `ts/Scripts/fgui-globals.ts` 通过 **`require("godot.lib.api")`** 取带 proxy 的 API，再注册到 `globalThis`（直接用 `require("godot")` 拷贝会导致 `getInstance().xxx()` 报 `not a function`）。

各脚本在文件顶部 `import "./fgui-globals"`。单独编写的新脚本也需添加该行。

**GodotJS 与 GDScript 差异（常见）：**

- `UIConfigHelper` 的配置项用**属性**（`ui.defaultFont = "..."`），不用 `setDefaultFont()`（GodotJS 对 `ADD_PROPERTY` 隐藏 setter 方法）。
- 同理 `GuiObject.group` / `GuiObject.icon`、`GController.selectedIndex`、`GProgressBar.value` 等带 `ADD_PROPERTY` 的字段（勿用 `setSelectedIndex()` / `setIcon()` / `setValue()`）。
- **RelationType**：Demo 优先用全局 `FguiRelationType.RightRight` 等常量（不依赖 GodotJS 枚举加载时机）；也可写 `GuiObject.RelationType.RightRight` 或经 `fgui-globals` 延迟别名后的 `GuiObject.RIGHT_RIGHT`。
- **GGroup 名称**：用 `fguiGroupName(obj)` 代替 `obj.group?.getName()`（GodotJS 上 `group` 属性返回的对象可能缺少 `getName` 方法）。
- **GodotJS 点击回调**：不要在 `addClickListener` 回调里**同步** `removeChildren()` / 切场景（会触发 `JSCallable` 在 V8 栈内析构崩溃）。Demo 用 `_requestSceneChange()` / `callDeferred` 延迟清理与切场景；模块侧 `UIEventDispatcher` 也会延迟释放监听器项。
- **`getTree()`**：节点离树后 GodotJS 调用 `getTree()` 会报错，须用 `safeGetTree()`（先 `isInsideTree()`）；`await waitSeconds()` 之后也要检查 `isSceneActive()`。
- **`child_order_changed` disconnect 警告**：GRoot 跨场景复用时，同步 `removeChildren()` 可能触发引擎层 benign 警告；Demo 已改为延迟清空 GRoot 子节点。
- FairyGUI 基类在 ClassDB 中注册为 **`GuiObject`**（C++ 内部仍可用 `GObject` 别名），避免与 GodotJS 引擎 `Object` 的 JS 名 `GObject` 冲突。
- 若 `GComponent.addChild` 报 `not a function`：多为上述命名冲突导致继承链错误；重编含 `GuiObject` 的 FairyGUI 后应恢复正常。

## 说明

- Godot 内置类型与 FairyGUI 运行时类均从 `"godot"` 模块获取（见上）。
- UI 资源与 `gd/` 共用 `res://Resources/UI/`。
- CloseButton 返回 `res://ts/Scenes/MainMenu.tscn`。

## 首次配置（可选）

在 Godot 编辑器中可通过 GodotJS 插件菜单 **Install TS Project** 生成/更新 `tsconfig.json` 与类型文件；本仓库已包含适配后的配置，一般直接 `tsc` 即可。
