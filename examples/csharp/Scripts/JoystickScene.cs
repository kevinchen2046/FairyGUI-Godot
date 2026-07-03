namespace FairyGUI.Examples;

public partial class JoystickScene : DemoSceneBase
{
    private JoystickModule _joystick;

    protected override void ContinueInit()
    {
        UIPackage.AddPackage("res://Resources/UI/Joystick");

        _view = UIPackage.CreateObject("Joystick", "Main");
        _groot.AddChild(_view);

        _joystick = new JoystickModule(_view);

        var tf = _view.GetChild("n9") as GTextField;
        if (tf != null)
        {
            _joystick.MoveChanged += degree => tf.SetText(degree.ToString());
            _joystick.Ended += () => tf.SetText("");
        }
    }
}
