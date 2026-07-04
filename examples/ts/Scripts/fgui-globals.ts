/// <reference path="../fairygui.d.ts" />

/**
 * GodotJS 运行时：FairyGUI ClassDB 类型在 godot 模块上，注册到 globalThis。
 * 与 fairygui.d.ts 的 declare global 配套；勿使用 import * as godot（会生成 __importStar）。
 */
const flag = "__fguiGlobalsRegistered";
const g = globalThis as Record<string, unknown>;

if (!g[flag]) {
    g[flag] = true;

    const mod = require("godot") as Record<string, unknown>;
    const names = [
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

    for (const name of names) {
        g[name] = mod[name];
    }
    g.FGUIEventContext = mod.FguiEventContext;
}

export {};
