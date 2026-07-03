/// <reference types="godot" />

import type { Callable, Node, Object, Rect2, RefCounted, Vector2 } from "godot";

declare global {
    /** Godot built-in random helpers used by GDScript examples. */
    function randi(): number;
    function randf(): number;

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
        getTouchId(): number;
    }

    class GObject extends UIEventDispatcher {
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
        setName(name: string): void;
        getName(): string;
        setIcon(icon: string): void;
        getIcon(): string;
        setDraggable(value: boolean): void;
        setDragBounds(bounds: Rect2): void;
        addClickListener(callable: Callable): void;
        addRelation(target: GObject, relationType: number, usePercent?: boolean): void;
        removeFromParent(): void;
        globalToLocal(pt: Vector2): Vector2;
        transformRect(rect: Rect2, targetSpace: GObject): Rect2;
        getInitSize(): Vector2;
        getParent(): GComponent | null;
        getGroup(): GGroup | null;
        getTreeNode(): GTreeNode | null;
        setupDisplay(): void;
        tweenScale(endValue: Vector2, duration: number): GTweener;
        displayObject(): Node | null;

        selected?: boolean;
        changeStateOnClick?: boolean;
    }

    class GGroup extends GObject {}

    class GComponent extends GObject {
        getChild(name: string): GObject | null;
        getChildAt(index: number): GObject | null;
        numChildren(): number;
        getController(name: string): GController | null;
        getTransition(name: string): Transition | null;
        getScrollPane(): ScrollPane | null;
        addChild(child: GObject): GObject;
        addChildAt(child: GObject, index: number): GObject;
        removeChildAt(index: number): void;
        removeChildren(beginIndex?: number, endIndex?: number): void;
        getViewWidth(): number;
        ensureBoundsCorrect(): void;
        isChildInView(child: GObject): boolean;
        isAncestorOf(obj: GObject): boolean;
        setTitle(title: string): void;
    }

    class GRoot extends GComponent {
        static create(tree: import("godot").SceneTree, zOrder?: number): GRoot;
        static getInstance(): GRoot | null;

        getWidth(): number;
        getHeight(): number;
        getTouchTarget(): GObject | null;
        getTouchPosition(touchId?: number): Vector2;
        addChild(child: GObject): GObject;
        removeChildren(beginIndex?: number, endIndex?: number): void;
        showPopupSimple(popup: GObject): void;
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
        addItemFromPool(): GObject | null;
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
        setSelectedIndex(index: number): void;
        getSelectedIndex(): number;
    }

    class GPopupMenu extends GComponent {
        static create(): GPopupMenu | null;
        addItem(caption: string): void;
        show(): void;
        showMenuAt(target: GObject, dir: number): void;
        getContentPane(): GComponent | null;
    }

    class ScrollPane extends RefCounted {
        getHeader(): GComponent | null;
        getFooter(): GComponent | null;
        getPosX(): number;
        setPosX(value: number, ani: boolean): void;
        lockHeader(size: number): void;
        lockFooter(size: number): void;
        scrollTop(ani: boolean): void;
        scrollBottom(ani: boolean): void;
        isBottomMost(): boolean;
        cancelDragging(): void;
    }

    class Transition extends RefCounted {
        play(times: number, delay: number, callback: Callable): void;
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

        setTarget(target: GObject, propType?: number): GTweener;
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
        setDefaultFont(value: string): void;
        setButtonSound(value: string): void;
        setVerticalScrollBar(value: string): void;
        setHorizontalScrollBar(value: string): void;
        setTooltipsWin(value: string): void;
        setPopupMenu(value: string): void;
        setGlobalModalWaiting(value: string): void;
        setWindowModalWaiting(value: string): void;
    }

    class UIPackage extends RefCounted {
        static addPackage(assetPath: string): UIPackage;
        static createObject(pkgName: string, resName: string): GObject | null;
        static createObjectFromURL(url: string): GObject | null;
    }

    class DragDropManagerHelper extends RefCounted {
        static getInstance(): DragDropManagerHelper;
        startDrag(icon: string, sourceData?: unknown, touchPointId?: number): void;
        cancel(): void;
        isDragging(): boolean;
    }
}

export {};
