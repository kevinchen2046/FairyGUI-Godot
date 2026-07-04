/// <reference path="../fairygui.d.ts" />

/**
 * GodotJS 运行时：FairyGUI 类型经 godot.lib.api 代理后注册到 globalThis。
 * 勿用 require("godot") 直接拷贝（实例方法会报 not a function）；
 * 勿用 import * as godot（会生成 __importStar / __esModule 冲突）。
 */
const flag = "__fguiGlobalsRegistered";
const g = globalThis as Record<string, unknown>;

/** 与 fairygui::RelationItem.h RelationType 前 16 项一致，不依赖 GodotJS 枚举加载时机。 */
const FguiRelationType = {
    LeftLeft: 0,
    LeftCenter: 1,
    LeftRight: 2,
    CenterCenter: 3,
    RightLeft: 4,
    RightCenter: 5,
    RightRight: 6,
    TopTop: 7,
    TopMiddle: 8,
    TopBottom: 9,
    MiddleMiddle: 10,
    BottomTop: 11,
    BottomMiddle: 12,
    BottomBottom: 13,
    Width: 14,
    Height: 15,
} as const;

/** GodotJS 嵌套枚举 RelationType（camelCase）；GDScript 为 GuiObject.RIGHT_RIGHT 扁平常量。 */
function jsEnumKeyToGd(name: string): string {
    return name.replace(/([A-Z])/g, "_$1").replace(/^_/, "").toUpperCase();
}

function ensureGuiObjectEnumAliases(GuiObject: Record<string, unknown>): void {
    if ((GuiObject as { __fguiEnumPatched?: boolean }).__fguiEnumPatched) {
        return;
    }
    (GuiObject as { __fguiEnumPatched?: boolean }).__fguiEnumPatched = true;

    const rt = GuiObject.RelationType as Record<string, number> | undefined;
    const source: Record<string, number> = rt ?? { ...FguiRelationType };

    for (const jsKey of Object.keys(source)) {
        const value = source[jsKey];
        if (typeof value !== "number") {
            continue;
        }
        const gdKey = jsEnumKeyToGd(jsKey);
        if (!(gdKey in GuiObject)) {
            Object.defineProperty(GuiObject, gdKey, {
                value,
                enumerable: true,
                configurable: true,
            });
        }
    }

    if (rt == null && !("RelationType" in GuiObject)) {
        Object.defineProperty(GuiObject, "RelationType", {
            value: { ...FguiRelationType },
            enumerable: true,
            configurable: true,
        });
    }
}

/** GodotJS 上 group 属性与 getGroup() 行为不一致时的兼容读取。 */
function fguiGroupName(obj: GuiObject | null | undefined): string {
    if (obj == null) {
        return "";
    }
    const record = obj as unknown as Record<string, unknown>;
    let grp: unknown = null;
    if (typeof record.getGroup === "function") {
        grp = (record.getGroup as () => unknown)();
    } else if ("group" in record) {
        grp = record.group;
    }
    if (grp == null) {
        return "";
    }
    const group = grp as Record<string, unknown>;
    if (typeof group.getName === "function") {
        return String((group.getName as () => string)());
    }
    if (typeof group.name === "string") {
        return group.name;
    }
    return String(group.name ?? "");
}

if (!g[flag]) {
    g[flag] = true;
    g.FguiRelationType = FguiRelationType;
    g.fguiGroupName = fguiGroupName;

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

    Object.defineProperty(g, "GuiObject", {
        get(): unknown {
            const cls = getMod().GuiObject as Record<string, unknown>;
            ensureGuiObjectEnumAliases(cls);
            return cls;
        },
        enumerable: true,
        configurable: true,
    });

    Object.defineProperty(g, "FGUIEventContext", {
        get(): unknown {
            return getMod().FguiEventContext;
        },
        enumerable: true,
        configurable: true,
    });
}

export {};
