# FairyGUI Examples (TypeScript)

与 `gd/` 目录结构对应的 TypeScript 版 Demo。

## 目录结构

```
ts/
  Scenes/          # 场景入口（.tscn），挂载 Generated 下的 .js
  Scripts/         # TypeScript 源码（.ts）
  Generated/       # tsc 编译输出（.js），由 tsconfig outDir 生成
  fairygui.d.ts    # FairyGUI GDExtension 类型声明
```

## 编译

在 `examples/` 目录执行：

```bash
npx -p typescript tsc
```

输出到 `ts/Generated/*.js`。修改 `.ts` 后需重新编译，场景才会加载最新脚本。

## 运行

1. 使用 **支持 TypeScript 脚本** 的 Godot 编辑器打开 `examples/` 工程。
2. 将主场景设为 `res://ts/Scenes/MainMenu.tscn`。
3. 运行项目。

## 说明

- FairyGUI 类通过 `fairygui.d.ts` 全局声明，用法与 GDScript 一致。
- Godot 内置类型从 `"godot"` 模块导入。
- UI 资源与 `gd/` 共用 `res://Resources/UI/` 与 `res://UIProject/`
- CloseButton 返回 `res://ts/Scenes/MainMenu.tscn`
