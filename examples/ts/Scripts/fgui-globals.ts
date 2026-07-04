/// <reference path="../fairygui.d.ts" />

/**
 * GodotJS 运行时：FairyGUI 类型经 godot.lib.api 代理后注册到 globalThis。
 * 勿用 require("godot") 直接拷贝（实例方法会报 not a function）；
 * 勿用 import * as godot（会生成 __importStar / __esModule 冲突）。
 */
const flag = "__fguiGlobalsRegistered";
const g = globalThis as Record<string, unknown>;

if (!g[flag]) {
    g[flag] = true;

    const getMod = (): Record<string, unknown> =>
        require("godot.lib.api") as Record<string, unknown>;

    const names = [
        "DragDropManagerHelper",
        "FguiEventContext",
        "GButton",
        "GComponent",
        "GController",
        "GLabel",
        "GList",
        "GuiObject",
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
        Object.defineProperty(g, name, {
            get(): unknown {
                return getMod()[name];
            },
            enumerable: true,
            configurable: true,
        });
    }

    Object.defineProperty(g, "FGUIEventContext", {
        get(): unknown {
            return getMod().FguiEventContext;
        },
        enumerable: true,
        configurable: true,
    });
}

export {};
