# FairyGUI Examples (TypeScript / GodotJS)

与 `gd/` 目录结构对应的 TypeScript 版 Demo，运行时需要 **GodotJS** 模块。

## 目录结构

```
ts/
  Scenes/          # 场景入口（.tscn），挂载 Scripts 下的 .ts 源文件
  Scripts/         # TypeScript 源码（.ts）
  fairygui.d.ts    # FairyGUI 类型声明
.godot/GodotJS/    # tsc 编译输出（.js），GodotJS 运行时加载此目录
gen/godot/         # Godot 内置类型声明（供 tsc 与 IDE 使用）
```

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
| 基类继承 | `class_name` + `extends` | `import` + `extends`（ES Module） |
| 场景挂载 | `.gd` 源文件 | `.ts` 源文件（非 `.js`） |
| 编译输出 | 无 | `.godot/GodotJS/` |
| tsc module | — | `node16`（CommonJS，GodotJS 要求） |

**不需要** 做 GDScript 那套 `DemoSceneBase` 全局类 / 路径继承修改；TypeScript 用 `import DemoSceneBase from "./DemoSceneBase"` 即可。

## GodotJS 项目设置

`project.godot` 中需启用（与 GDScript 示例 API 命名一致）：

```ini
[GodotJS/runtime/core]
camel_case_bindings_enabled=true
```

## FairyGUI 在 GodotJS 中的用法

GDScript 可直接写 `GRoot.getInstance()`；GodotJS 中 ClassDB 类型在 **`godot` 模块**上，不会自动成为 JS 全局变量。

推荐从 `godot` 显式导入（脚本可逐步迁移）：

```typescript
import { Callable, Node, GRoot, UIPackage, UIConfigHelper } from "godot";
```

`fairygui.d.ts` 的 `declare global` 仅用于 TypeScript 类型检查。

## 说明

- Godot 内置类型与 FairyGUI 运行时类均从 `"godot"` 模块获取（见上）。
- UI 资源与 `gd/` 共用 `res://Resources/UI/`。
- CloseButton 返回 `res://ts/Scenes/MainMenu.tscn`。

## 首次配置（可选）

在 Godot 编辑器中可通过 GodotJS 插件菜单 **Install TS Project** 生成/更新 `tsconfig.json` 与类型文件；本仓库已包含适配后的配置，一般直接 `tsc` 即可。
