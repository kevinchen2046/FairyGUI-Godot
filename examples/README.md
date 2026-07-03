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

- **C#**：需启用 `module_mono`/C# 支持，打开工程后生成 `.sln`；见 `FairyGUI.Godot.Examples.csproj`
- **TypeScript**：需 Godot TypeScript 脚本支持；见 `tsconfig.json` 与 `ts/fairygui.d.ts`

## Demo 列表

Basics、Transition、VirtualList、LoopList、HitTest、PullToRefresh、ModalWaiting、Joystick、Bag、Chat、ListEffect、ScrollPane、TreeView、Guide、Cooldown
