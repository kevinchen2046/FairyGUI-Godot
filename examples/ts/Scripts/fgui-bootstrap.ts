/**
 * GodotJS 运行时：FairyGUI ClassDB 类型在 godot 模块上，不会自动成为全局变量。
 * 本文件在模块加载时注册到 globalThis，与 fairygui.d.ts 的 declare global 配套。
 */
import * as godot from "godot";

const FGUI_GLOBALS = [
    "DragDropManagerHelper",
    "FguiEventContext",
    "GButton",
    "GComponent",
    "GController",
    "GLabel",
    "GList",
    "GObject",
    "GPopupMenu",
    "GProgressBar",
    "GRichTextField",
    "GRoot",
    "GTextField",
    "GTree",
    "GTreeNode",
    "GTweenHelper",
    "GTweener",
    "GWindow",
    "ScrollPane",
    "Transition",
    "UIConfigHelper",
    "UIEventDispatcher",
    "UIPackage",
    "randf",
    "randi",
] as const;

const g = globalThis as Record<string, unknown>;
const mod = godot as Record<string, unknown>;

for (const name of FGUI_GLOBALS) {
    g[name] = mod[name];
}

g.FGUIEventContext = mod.FguiEventContext;

export {};
