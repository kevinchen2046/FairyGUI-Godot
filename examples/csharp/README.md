# FairyGUI Examples (C#)

与 `gd/` 目录结构对应的 C# 版 Demo。

## 目录结构

```
csharp/
  Scenes/          # 场景入口（.tscn）
  Scripts/         # C# 脚本（.cs）
```

## 运行

1. 使用 **启用 C# 模块** 的 Godot 编辑器打开 `examples/` 工程。
2. 首次打开时 Godot 会生成/更新 `FairyGUI.Godot.Examples.csproj` 与 `.sln`。
3. 将主场景设为 `res://csharp/Scenes/MainMenu.tscn`（项目设置 → 应用 → 运行 → 主场景）。
4. 运行项目。

## 说明

- 脚本命名空间：`FairyGUI.Examples`
- UI 资源与 `gd/` 共用 `res://Resources/UI/` 与 `res://UIProject/`
- CloseButton 返回 `res://csharp/Scenes/MainMenu.tscn`
