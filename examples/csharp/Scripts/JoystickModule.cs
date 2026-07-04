using Godot;
using System;

namespace FairyGUI.Examples;

public class JoystickModule
{
    public event Action<float> MoveChanged;
    public event Action Ended;

    private GuiObject _button;
    private GuiObject _thumb;
    private GuiObject _touchArea;
    private GuiObject _center;
    private GRoot _groot;

    private float _initX;
    private float _initY;
    private float _startStageX;
    private float _startStageY;
    private float _lastStageX;
    private float _lastStageY;
    private int _radius = 150;
    private int _touchId = -1;

    public JoystickModule(GuiObject mainView)
    {
        _groot = GRoot.GetInstance();
        _button = mainView.GetChild("joystick");
        _thumb = _button.GetChild("thumb");
        _touchArea = mainView.GetChild("joystick_touch");
        _center = mainView.GetChild("joystick_center");

        if (_button is GButton btn)
            btn.SetChangeStateOnClick(false);

        if (_center != null)
        {
            _initX = _center.GetX() + _center.GetWidth() / 2.0f;
            _initY = _center.GetY() + _center.GetHeight() / 2.0f;
        }

        _touchArea?.AddEventListener(FguiEvent.TouchBegin, Callable.From(OnTouchBegin));
        _touchArea?.AddEventListener(FguiEvent.TouchMove, Callable.From(OnTouchMove));
        _touchArea?.AddEventListener(FguiEvent.TouchEnd, Callable.From(OnTouchEnd));
    }

    private void OnTouchBegin()
    {
        if (_touchId != -1)
            return;
        _touchId = 0;

        var pt = _groot.GlobalToLocal(_groot.GetTouchPosition());
        var bx = pt.X;
        var by = pt.Y;

        if (bx < 0) bx = 0;
        if (bx > _touchArea.GetWidth()) bx = _touchArea.GetWidth();
        if (by > _groot.GetHeight()) by = _groot.GetHeight();
        else if (by < _touchArea.GetY()) by = _touchArea.GetY();

        _lastStageX = bx;
        _lastStageY = by;
        _startStageX = bx;
        _startStageY = by;

        if (_button is GButton btn)
            btn.SetSelected(true);

        _center.SetVisible(true);
        _center.SetPosition(bx - _center.GetWidth() / 2.0f, by - _center.GetHeight() / 2.0f);
        _button.SetPosition(bx - _button.GetWidth() / 2.0f, by - _button.GetHeight() / 2.0f);

        var deltaX = bx - _initX;
        var deltaY = by - _initY;
        var degrees = Mathf.RadToDeg(Mathf.Atan2(deltaY, deltaX));
        _thumb.SetRotation(degrees + 90);
    }

    private void OnTouchMove()
    {
        if (_touchId == -1)
            return;

        var pt = _groot.GlobalToLocal(_groot.GetTouchPosition());
        var bx = pt.X;
        var by = pt.Y;
        var moveX = bx - _lastStageX;
        var moveY = by - _lastStageY;

        _lastStageX = bx;
        _lastStageY = by;

        var buttonX = _button.GetX() + moveX;
        var buttonY = _button.GetY() + moveY;
        var offsetX = buttonX + _button.GetWidth() / 2.0f - _startStageX;
        var offsetY = buttonY + _button.GetHeight() / 2.0f - _startStageY;

        var rad = Mathf.Atan2(offsetY, offsetX);
        var degree = Mathf.RadToDeg(rad);
        _thumb.SetRotation(degree + 90);

        var maxX = _radius * Mathf.Cos(rad);
        var maxY = _radius * Mathf.Sin(rad);
        if (Mathf.Abs(offsetX) > Mathf.Abs(maxX)) offsetX = maxX;
        if (Mathf.Abs(offsetY) > Mathf.Abs(maxY)) offsetY = maxY;

        buttonX = _startStageX + offsetX;
        buttonY = _startStageY + offsetY;
        if (buttonX < 0) buttonX = 0;
        if (buttonY > _groot.GetHeight()) buttonY = _groot.GetHeight();

        _button.SetPosition(buttonX - _button.GetWidth() / 2.0f, buttonY - _button.GetHeight() / 2.0f);
        MoveChanged?.Invoke(degree);
    }

    private void OnTouchEnd()
    {
        if (_touchId == -1)
            return;
        _touchId = -1;

        _thumb.SetRotation(_thumb.GetRotation() + 180);
        _center.SetVisible(true);
        _center.SetPosition(_initX - _center.GetWidth() / 2.0f, _initY - _center.GetHeight() / 2.0f);
        _button.SetPosition(_initX - _button.GetWidth() / 2.0f, _initY - _button.GetHeight() / 2.0f);

        if (_button is GButton btn)
            btn.SetSelected(false);

        _thumb.SetRotation(0);
        Ended?.Invoke();
    }
}
