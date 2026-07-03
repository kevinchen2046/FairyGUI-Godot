/// <reference path="../fairygui.d.ts" />

import { Callable } from "godot";

type MoveChangedListener = (degree: number) => void;
type EndedListener = () => void;

class SimpleSignal<T extends (...args: never[]) => void> {
    private readonly _listeners: Array<T> = [];

    connect(listener: T): void {
        this._listeners.push(listener);
    }

    emit(...args: Parameters<T>): void {
        for (const listener of this._listeners) {
            listener(...args);
        }
    }
}

export default class JoystickModule {
    readonly move_changed = new SimpleSignal<MoveChangedListener>();
    readonly ended = new SimpleSignal<EndedListener>();

    private _button: GButton | null = null;
    private _thumb: GObject | null = null;
    private _touchArea: GObject | null = null;
    private _center: GObject | null = null;
    private _groot: GRoot | null = null;

    private _initX = 0.0;
    private _initY = 0.0;
    private _startStageX = 0.0;
    private _startStageY = 0.0;
    private _lastStageX = 0.0;
    private _lastStageY = 0.0;
    private readonly _radius = 150;
    private _touchId = -1;

    constructor(mainView: GObject) {
        this._groot = GRoot.getInstance();
        this._button = mainView.getChild("joystick") as GButton | null;
        if (this._button != null) {
            this._thumb = this._button.getChild("thumb");
            this._button.changeStateOnClick = false;
        }
        this._touchArea = mainView.getChild("joystick_touch");
        this._center = mainView.getChild("joystick_center");

        if (this._center != null) {
            this._initX = this._center.getX() + this._center.getWidth() / 2.0;
            this._initY = this._center.getY() + this._center.getHeight() / 2.0;
        }

        if (this._touchArea != null) {
            this._touchArea.addEventListener(
                UIEventDispatcher.TOUCHBEGIN,
                Callable.create(this._onTouchBegin.bind(this)),
            );
            this._touchArea.addEventListener(
                UIEventDispatcher.TOUCHMOVE,
                Callable.create(this._onTouchMove.bind(this)),
            );
            this._touchArea.addEventListener(
                UIEventDispatcher.TOUCHEND,
                Callable.create(this._onTouchEnd.bind(this)),
            );
        }
    }

    private _onTouchBegin(): void {
        if (this._touchId !== -1 || this._groot == null || this._button == null || this._thumb == null) {
            return;
        }
        this._touchId = 0;

        const pt = this._groot.globalToLocal(this._groot.getTouchPosition());
        let bx = pt.x;
        let by = pt.y;

        if (bx < 0) {
            bx = 0;
        }
        if (this._touchArea != null && bx > this._touchArea.getWidth()) {
            bx = this._touchArea.getWidth();
        }
        if (by > this._groot.getHeight()) {
            by = this._groot.getHeight();
        } else if (this._touchArea != null && by < this._touchArea.getY()) {
            by = this._touchArea.getY();
        }

        this._lastStageX = bx;
        this._lastStageY = by;
        this._startStageX = bx;
        this._startStageY = by;
        this._button.selected = true;

        if (this._center != null) {
            this._center.setVisible(true);
            this._center.setPosition(
                bx - this._center.getWidth() / 2.0,
                by - this._center.getHeight() / 2.0,
            );
        }
        this._button.setPosition(
            bx - this._button.getWidth() / 2.0,
            by - this._button.getHeight() / 2.0,
        );

        const deltaX = bx - this._initX;
        const deltaY = by - this._initY;
        const degrees = (Math.atan2(deltaY, deltaX) * 180.0) / Math.PI;
        this._thumb.setRotation(degrees + 90);
    }

    private _onTouchMove(): void {
        if (
            this._touchId === -1 ||
            this._groot == null ||
            this._button == null ||
            this._thumb == null
        ) {
            return;
        }

        const pt = this._groot.globalToLocal(this._groot.getTouchPosition());
        const bx = pt.x;
        const by = pt.y;
        const moveX = bx - this._lastStageX;
        const moveY = by - this._lastStageY;

        this._lastStageX = bx;
        this._lastStageY = by;

        let buttonX = this._button.getX() + moveX;
        let buttonY = this._button.getY() + moveY;
        let offsetX = buttonX + this._button.getWidth() / 2.0 - this._startStageX;
        let offsetY = buttonY + this._button.getHeight() / 2.0 - this._startStageY;

        const rad = Math.atan2(offsetY, offsetX);
        const degree = (rad * 180.0) / Math.PI;
        this._thumb.setRotation(degree + 90);

        const maxX = this._radius * Math.cos(rad);
        const maxY = this._radius * Math.sin(rad);
        if (Math.abs(offsetX) > Math.abs(maxX)) {
            offsetX = maxX;
        }
        if (Math.abs(offsetY) > Math.abs(maxY)) {
            offsetY = maxY;
        }

        buttonX = this._startStageX + offsetX;
        buttonY = this._startStageY + offsetY;
        if (buttonX < 0) {
            buttonX = 0;
        }
        if (buttonY > this._groot.getHeight()) {
            buttonY = this._groot.getHeight();
        }

        this._button.setPosition(
            buttonX - this._button.getWidth() / 2.0,
            buttonY - this._button.getHeight() / 2.0,
        );
        this.move_changed.emit(degree);
    }

    private _onTouchEnd(): void {
        if (this._touchId === -1 || this._button == null || this._thumb == null) {
            return;
        }
        this._touchId = -1;
        this._thumb.setRotation(this._thumb.getRotation() + 180);
        if (this._center != null) {
            this._center.setVisible(true);
            this._center.setPosition(
                this._initX - this._center.getWidth() / 2.0,
                this._initY - this._center.getHeight() / 2.0,
            );
        }
        this._button.setPosition(
            this._initX - this._button.getWidth() / 2.0,
            this._initY - this._button.getHeight() / 2.0,
        );
        this._button.selected = false;
        this._thumb.setRotation(0);
        this.ended.emit();
    }
}
