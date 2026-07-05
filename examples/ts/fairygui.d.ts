/// <reference types="godot" />

import type { Callable, Node, Object, Rect2, RefCounted, Vector2 } from "godot";

declare global {
    /** GodotJS CommonJS require（用于加载 godot 模块等） */
    function require(moduleId: string): unknown;

    /** Godot built-in random helpers used by GDScript examples. */
    function randi(): number;
    function randf(): number;

    /** RelationType 数值常量（与 C++ RelationItem.h 一致，Demo 优先使用）。 */
    const FguiRelationType: {
        readonly LeftLeft: 0;
        readonly LeftCenter: 1;
        readonly LeftRight: 2;
        readonly CenterCenter: 3;
        readonly RightLeft: 4;
        readonly RightCenter: 5;
        readonly RightRight: 6;
        readonly TopTop: 7;
        readonly TopMiddle: 8;
        readonly TopBottom: 9;
        readonly MiddleMiddle: 10;
        readonly BottomTop: 11;
        readonly BottomMiddle: 12;
        readonly BottomBottom: 13;
        readonly Width: 14;
        readonly Height: 15;
    };

    /** 读取 GObject 所属 GGroup 名称（兼容 group 属性 / getGroup()）。 */
    function fguiGroupName(obj: GuiObject | null | undefined): string;

    class UIEventDispatcher extends RefCounted {
        static readonly ENTER: number;
        static readonly EXIT: number;
        static readonly CHANGED: number;
        static readonly SUBMIT: number;
        static readonly CLICK: number;
        static readonly TOUCHBEGIN: number;
        static readonly TOUCHMOVE: number;
        static readonly TOUCHEND: number;
        static readonly ROLLOVER: number;
        static readonly ROLLOUT: number;
        static readonly MOUSEWHEEL: number;
        static readonly RIGHTCLICK: number;
        static readonly MIDDLECLICK: number;
        static readonly KEYDOWN: number;
        static readonly KEYUP: number;
        static readonly SCROLL: number;
        static readonly SCROLLEND: number;
        static readonly PULLDOWNRELEASE: number;
        static readonly PULLUPRELEASE: number;
        static readonly POSITIONCHANGE: number;
        static readonly SIZECHANGE: number;
        static readonly CLICKITEM: number;
        static readonly CLICKLINK: number;
        static readonly CLICKMENU: number;
        static readonly RIGHTCLICKITEM: number;
        static readonly DRAGSTART: number;
        static readonly DRAGMOVE: number;
        static readonly DRAGEND: number;
        static readonly DROP: number;
        static readonly GEARSTOP: number;

        addEventListener(type: number, callable: Callable): void;
        removeEventListener(type: number): void;
    }

    class FGUIEventContext extends RefCounted {
        preventDefault(): void;
        getData(): unknown;
        /** ClickItem 等事件的列表项文本（仅需字符串时可代替 getData） */
        getItemText(): string;
        getTouchId(): number;
    }

    class GuiObject extends UIEventDispatcher {
        /** GodotJS 原生嵌套枚举（camelCase，如 RelationType.RightRight） */
        static readonly RelationType: {
            readonly LeftLeft: number;
            readonly LeftCenter: number;
            readonly LeftRight: number;
            readonly CenterCenter: number;
            readonly RightLeft: number;
            readonly RightCenter: number;
            readonly RightRight: number;
            readonly TopTop: number;
            readonly TopMiddle: number;
            readonly TopBottom: number;
            readonly MiddleMiddle: number;
            readonly BottomTop: number;
            readonly BottomMiddle: number;
            readonly BottomBottom: number;
            readonly Width: number;
            readonly Height: number;
        };
        /** GDScript 风格扁平常量（由 fgui-globals 从 RelationType 别名，运行时可用） */
        static readonly LEFT_LEFT: number;
        static readonly LEFT_CENTER: number;
        static readonly LEFT_RIGHT: number;
        static readonly CENTER_CENTER: number;
        static readonly RIGHT_LEFT: number;
        static readonly RIGHT_CENTER: number;
        static readonly RIGHT_RIGHT: number;
        static readonly TOP_TOP: number;
        static readonly TOP_MIDDLE: number;
        static readonly TOP_BOTTOM: number;
        static readonly MIDDLE_MIDDLE: number;
        static readonly BOTTOM_TOP: number;
        static readonly BOTTOM_MIDDLE: number;
        static readonly BOTTOM_BOTTOM: number;
        static readonly WIDTH: number;
        static readonly HEIGHT: number;

        getX(): number;
        getY(): number;
        getPosition(): Vector2;
        setPosition(x: number, y: number): void;
        getWidth(): number;
        getHeight(): number;
        setWidth(value: number): void;
        setSize(w: number, h: number, ignorePivot?: boolean): void;
        isVisible(): boolean;
        center(restraint?: boolean): void;
        makeFullScreen(): void;
        setPivot(x: number, y: number, asAnchor?: boolean): void;
        setScale(x: number, y: number): void;
        setScaleX(value: number): void;
        setScaleY(value: number): void;
        getScaleX(): number;
        getScaleY(): number;
        setRotation(value: number): number;
        getRotation(): number;
        setVisible(value: boolean): void;
        setSortingOrder(value: number): number;
        getSortingOrder(): number;
        setText(text: string): void;
        getText(): string;
        setTitle(title: string): void;
        setName(name: string): void;
        getName(): string;
        /** GodotJS：ADD_PROPERTY，读写用 icon 属性 */
        icon: string;
        setIcon(icon: string): void;
        getIcon(): string;
        setDraggable(value: boolean): void;
        setDragBounds(bounds: Rect2): void;
        addClickListener(callable: Callable): void;
        addRelation(target: GuiObject, relationType: number, usePercent?: boolean): void;
        removeFromParent(): void;
        localToGlobal(pt: Vector2): Vector2;
        globalToLocal(pt: Vector2): Vector2;
        transformRect(rect: Rect2, targetSpace: GuiObject): Rect2;
        getInitSize(): Vector2;
        getParent(): GComponent | null;
        onStage(): boolean;
        /** GodotJS：ADD_PROPERTY，用属性不用 getGroup() */
        group: GGroup | null;
        getGroup(): GGroup | null;
        getTreeNode(): GTreeNode | null;
        setupDisplay(): void;
        tweenScale(endValue: Vector2, duration: number): GTweener;
        displayObject(): Node | null;

        selected?: boolean;
        changeStateOnClick?: boolean;
    }

    class GGroup extends GuiObject {}

    class GComponent extends GuiObject {
        getChild(name: string): GuiObject | null;
        getChildAt(index: number): GuiObject | null;
        numChildren(): number;
        getController(name: string): GController | null;
        getTransition(name: string): Transition | null;
        getScrollPane(): ScrollPane | null;
        addChild(child: GuiObject): GuiObject;
        addChildAt(child: GuiObject, index: number): GuiObject;
        removeChildAt(index: number): void;
        removeChildren(beginIndex?: number, endIndex?: number): void;
        /** GodotJS：ADD_PROPERTY，用 viewWidth 而非 getViewWidth() */
        readonly viewWidth: number;
        readonly viewHeight: number;
        ensureBoundsCorrect(): void;
        isChildInView(child: GuiObject): boolean;
        isAncestorOf(obj: GuiObject): boolean;
        setTitle(title: string): void;
    }

    class GRoot extends GComponent {
        static create(tree: import("godot").SceneTree, zOrder?: number): GRoot;
        static getInstance(): GRoot | null;
        /** 从 Window 根节点卸载 GRoot 显示层，切 Demo 场景前应调用。 */
        static cleanup(): void;

        getWidth(): number;
        getHeight(): number;
        getTouchTarget(): GuiObject | null;
        getTouchPosition(touchId?: number): Vector2;
        addChild(child: GuiObject): GuiObject;
        removeChildren(beginIndex?: number, endIndex?: number): void;
        showPopupSimple(popup: GuiObject): void;
        showModalWait(): void;
        closeModalWait(): void;
        closeAllWindows(): void;
        hideTooltips(): void;
        hidePopup(): void;
    }

    class GWindow extends GComponent {
        show(): void;
        hide(): void;
        hideImmediately(): void;
        isShowing(): boolean;
        /** GodotJS：ADD_PROPERTY */
        modal: boolean;
        contentPane: GComponent | null;
        onInitCallback: Callable;
        onShownCallback: Callable;
        onHideCallback: Callable;
        doShowAnimationCallback: Callable;
        doHideAnimationCallback: Callable;
        setModal(value: boolean): void;
        showModalWait(requestingCmd?: number): void;
        closeModalWait(requestingCmd?: number): boolean;
        getContentPane(): GComponent | null;
        setContentPane(pane: GComponent): void;
        setOnInitCallback(callback: Callable): void;
        setOnShownCallback(callback: Callable): void;
        setOnHideCallback(callback: Callable): void;
        setDoShowAnimationCallback(callback: Callable): void;
        setDoHideAnimationCallback(callback: Callable): void;
    }

    class GButton extends GComponent {
        setTitle(title: string): void;
        selected: boolean;
        changeStateOnClick: boolean;
    }

    class GTextField extends GComponent {
        setUBBEnabled(value: boolean): void;
        getTextSize(): Vector2;
    }

    class GRichTextField extends GTextField {}

    class GProgressBar extends GComponent {
        /** GodotJS：ADD_PROPERTY */
        min: number;
        max: number;
        value: number;
        getMin(): number;
        getMax(): number;
        getValue(): number;
        setValue(value: number): void;
        tweenValue(value: number, duration: number): void;
    }

    class GList extends GComponent {
        setItemRenderer(callable: Callable): void;
        setItemProvider(callable: Callable): void;
        setVirtual(): void;
        setVirtualAndLoop(): void;
        setNumItems(value: number): void;
        getNumItems(): number;
        getFirstChildInView(): number;
        addSelection(index: number, scrollToView?: boolean): void;
        addItemFromPool(): GuiObject | null;
        removeChildrenToPool(beginIndex?: number, endIndex?: number): void;
    }

    class GTree extends GList {
        getRootNode(): GTreeNode | null;
        setTreeNodeRender(callable: Callable): void;
    }

    class GTreeNode extends RefCounted {
        init(isFolder: boolean, resUrl?: string): void;
        setText(text: string): void;
        getText(): string;
        isFolder(): boolean;
        addChild(child: GTreeNode): GTreeNode;
    }

    class GController extends RefCounted {
        /** GodotJS：ADD_PROPERTY，读写用 selectedIndex */
        selectedIndex: number;
        setSelectedIndex(index: number): void;
        getSelectedIndex(): number;
    }

    class GPopupMenu extends GComponent {
        static create(): GPopupMenu | null;
        addItem(caption: string): void;
        show(): void;
        showMenuAt(target: GuiObject, dir: number): void;
        getContentPane(): GComponent | null;
    }

    class ScrollPane extends RefCounted {
        getHeader(): GComponent | null;
        getFooter(): GComponent | null;
        getPosX(): number;
        getScrollingPosX(): number;
        getScrollingPosY(): number;
        setPosX(value: number, ani: boolean): void;
        lockHeader(size: number): void;
        lockFooter(size: number): void;
        scrollTop(ani: boolean): void;
        scrollBottom(ani: boolean): void;
        isBottomMost(): boolean;
        cancelDragging(): void;
    }

    class Transition extends RefCounted {
        play(times: number, delay: number, callback?: Callable): void;
        stop(): void;
    }

    class GTweener extends RefCounted {
        static readonly TweenPropType: {
            readonly NONE: number;
            readonly X: number;
            readonly Y: number;
            readonly POSITION: number;
            readonly WIDTH: number;
            readonly HEIGHT: number;
            readonly SIZE: number;
            readonly SCALE_X: number;
            readonly SCALE_Y: number;
            readonly SCALE: number;
            readonly ROTATION: number;
            readonly ALPHA: number;
            readonly PROGRESS: number;
        };

        setTarget(target: GuiObject, propType?: number): GTweener;
        onComplete(callable: Callable): GTweener;
    }

    class GTweenHelper extends RefCounted {
        static getInstance(): GTweenHelper;
        toVec2(start: Vector2, end: Vector2, duration: number): GTweener;
        kill(target: Object, complete?: boolean): void;
    }

    class UIConfigHelper extends RefCounted {
        static getInstance(): UIConfigHelper;
        registerFont(aliasName: string, realName: string): void;
        getRealFontName(aliasName: string): string;
        defaultFont: string;
        buttonSound: string;
        verticalScrollBar: string;
        horizontalScrollBar: string;
        tooltipsWin: string;
        popupMenu: string;
        globalModalWaiting: string;
        windowModalWaiting: string;
    }

    class UIPackage extends RefCounted {
        static addPackage(assetPath: string): UIPackage;
        static createObject(pkgName: string, resName: string): GComponent | null;
        static createObjectFromURL(url: string): GComponent | null;
    }

    class DragDropManagerHelper extends RefCounted {
        static getInstance(): DragDropManagerHelper;
        startDrag(icon: string, sourceData?: unknown, touchPointId?: number): void;
        cancel(): void;
        isDragging(): boolean;
    }
}

export {};
