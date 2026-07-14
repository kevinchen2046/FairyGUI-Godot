extends SceneTree

var _demo: Object

func _initialize() -> void:
    call_deferred("_run")

func _run() -> void:
    UIPackage.addPackage("res://Resources/UI/Basics")
    GRoot.create(self)
    var root := GRoot.getInstance()
    _demo = UIPackage.createObject("Basics", "Demo_MovieClip")
    if root == null or _demo == null:
        push_error("MovieClip regression: failed to create demo")
        quit(1)
        return

    root.addChild(_demo)
    var clips := [
        _demo.getChild("n8"),
        _demo.getChild("n13"),
        _demo.getChild("n14"),
        _demo.getChild("n15"),
        _demo.getChild("n19"),
        _demo.getChild("n22"),
    ]
    for clip in clips:
        if clip == null or not clip is GMovieClip:
            push_error("MovieClip regression: expected GMovieClip child")
            quit(1)
            return

    # Exercise explicit frame selection as well as timed playback.
    for frame in range(12):
        for clip in clips:
            clip.setFrame(frame)
        await process_frame

    for clip in clips:
        clip.setPlaying(true)
    await create_timer(0.5).timeout

    print("MovieClip regression test passed")
    GRoot.cleanup()
    _demo = null
    await create_timer(0.1).timeout
    quit(0)
