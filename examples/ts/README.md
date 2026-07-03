# FairyGUI Examples (TypeScript)

与 `gd/` 目录结构对应的 TypeScript 版 Demo。

## 目录结构

```
ts/
  Scenes/          # 场景入口（.tscn）
  Scripts/         # TypeScript 脚本（.ts）
  fairygui.d.ts    # FairyGUI GDExtension 类型声明
```

## 运行

1. 使用 **支持 TypeScript 脚本** 的 Godot 编辑器打开 `examples/` 工程。
2. 将主场景设为 `res://ts/Scenes/MainMenu.tscn`。
3. 运行项目。

## 说明

- FairyGUI 类通过 `fairygui.d.ts` 全局声明，用法与 GDScript 一致。
- Godot 内置类型从 `"godot"` 模块导入。
- UI 资源与 `gd/` 共用 `res://Resources/UI/` 与 `res://UIProject/`
- CloseButton 返回 `res://ts/Scenes/MainMenu.tscn`
