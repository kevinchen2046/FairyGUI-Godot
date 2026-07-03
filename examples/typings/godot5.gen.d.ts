// AUTO-GENERATED
declare module "godot" {
    namespace LinkButton {
        enum UnderlineMode {
            UnderlineModeAlways = 0,
            UnderlineModeOnHover = 1,
            UnderlineModeNever = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLinkButton extends __RPCMapBaseButton {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLinkButton extends __NameMapBaseButton {
        text_direction: "textDirection";
        structured_text_bidi_override: "structuredTextBidiOverride";
        structured_text_bidi_override_options: "structuredTextBidiOverrideOptions";
    }
    /** A button that represents a link.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_linkbutton.html  
     */
    class LinkButton<Map extends NodePathMap = any> extends BaseButton<Map> {
        constructor(identifier?: any)
        /** The button's text that will be displayed inside the button's area. */
        get text(): string
        set text(value: string)
        
        /** The underline mode to use for the text. */
        get underline(): int64
        set underline(value: int64)
        
        /** The [url=https://en.wikipedia.org/wiki/Uniform_Resource_Identifier]URI[/url] for this [LinkButton]. If set to a valid URI, pressing the button opens the URI using the operating system's default program for the protocol (via [method OS.shell_open]). HTTP and HTTPS URLs open the default web browser.  
         *    
         */
        get uri(): string
        set uri(value: string)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLinkButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLinkButton;
    }
    namespace Logger {
        enum ErrorType {
            ErrorTypeError = 0,
            ErrorTypeWarning = 1,
            ErrorTypeScript = 2,
            ErrorTypeShader = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLogger extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLogger extends __NameMapRefCounted {
        _log_error: "_logError";
        _log_message: "_logMessage";
    }
    /** Custom logger to receive messages from the internal error/warning stream.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_logger.html  
     */
    class Logger extends RefCounted {
        constructor(identifier?: any)
        /** Called when an error is logged. The error provides the [param function], [param file], and [param line] that it originated from, as well as either the [param code] that generated the error or a [param rationale].  
         *  The type of error provided by [param error_type] is described in the [enum ErrorType] enumeration.  
         *  Additionally, [param script_backtraces] provides backtraces for each of the script languages. These will only contain stack frames in editor builds and debug builds by default. To enable them for release builds as well, you need to enable [member ProjectSettings.debug/settings/gdscript/always_track_call_stacks].  
         *  **Warning:** This function may be called from multiple different threads, so you may need to do your own locking.  
         *      
         *  **Note:** [param script_backtraces] will not contain any captured variables, due to its prohibitively high cost. To get those you will need to capture the backtraces yourself, from within the [Logger] virtual methods, using [method Engine.capture_script_backtraces].  
         */
        /* gdvirtual */ _logError(function_: string, file: string, line: int64, code: string, rationale: string, editorNotify: boolean, errorType: int64, scriptBacktraces: GArray<ScriptBacktrace>): void
        
        /** Called when a message is logged. If [param error] is `true`, then this message was meant to be sent to `stderr`.  
         *  **Warning:** This function may be called from multiple different threads, so you may need to do your own locking.  
         */
        /* gdvirtual */ _logMessage(message: string, error: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLogger;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLogger;
    }
    namespace LookAtModifier3D {
        enum OriginFrom {
            OriginFromSelf = 0,
            OriginFromSpecificBone = 1,
            OriginFromExternalNode = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLookAtModifier3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLookAtModifier3D extends __NameMapSkeletonModifier3D {
        get_interpolation_remaining: "getInterpolationRemaining";
        is_interpolating: "isInterpolating";
        is_target_within_limitation: "isTargetWithinLimitation";
        target_node: "targetNode";
        bone_name: "boneName";
        forward_axis: "forwardAxis";
        primary_rotation_axis: "primaryRotationAxis";
        use_secondary_rotation: "useSecondaryRotation";
        origin_from: "originFrom";
        origin_bone_name: "originBoneName";
        origin_bone: "originBone";
        origin_external_node: "originExternalNode";
        origin_offset: "originOffset";
        origin_safe_margin: "originSafeMargin";
        transition_type: "transitionType";
        ease_type: "easeType";
        use_angle_limitation: "useAngleLimitation";
        symmetry_limitation: "symmetryLimitation";
        primary_limit_angle: "primaryLimitAngle";
        primary_damp_threshold: "primaryDampThreshold";
        primary_positive_limit_angle: "primaryPositiveLimitAngle";
        primary_positive_damp_threshold: "primaryPositiveDampThreshold";
        primary_negative_limit_angle: "primaryNegativeLimitAngle";
        primary_negative_damp_threshold: "primaryNegativeDampThreshold";
        secondary_limit_angle: "secondaryLimitAngle";
        secondary_damp_threshold: "secondaryDampThreshold";
        secondary_positive_limit_angle: "secondaryPositiveLimitAngle";
        secondary_positive_damp_threshold: "secondaryPositiveDampThreshold";
        secondary_negative_limit_angle: "secondaryNegativeLimitAngle";
        secondary_negative_damp_threshold: "secondaryNegativeDampThreshold";
    }
    /** The [LookAtModifier3D] rotates a bone to look at a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lookatmodifier3d.html  
     */
    class LookAtModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** Returns the remaining seconds of the time-based interpolation. */
        getInterpolationRemaining(): float64
        
        /** Returns `true` if time-based interpolation is running. If `true`, it is equivalent to [method get_interpolation_remaining] returning `0.0`.  
         *  This is useful to determine whether a [LookAtModifier3D] can be removed safely.  
         */
        isInterpolating(): boolean
        
        /** Returns whether the target is within the angle limitations. It is useful for unsetting the [member target_node] when the target is outside of the angle limitations.  
         *      
         *  **Note:** The value is updated after [method SkeletonModifier3D._process_modification]. To retrieve this value correctly, we recommend using the signal [signal SkeletonModifier3D.modification_processed].  
         */
        isTargetWithinLimitation(): boolean
        
        /** The [NodePath] to the node that is the target for the look at modification. This node is what the modification will rotate the bone to. */
        get targetNode(): NodePath
        set targetNode(value: NodePath | string)
        
        /** The bone name of the [Skeleton3D] that the modification will operate on. */
        get boneName(): string
        set boneName(value: string)
        
        /** Index of the [member bone_name] in the parent [Skeleton3D]. */
        get bone(): int64
        set bone(value: int64)
        
        /** The forward axis of the bone. This [SkeletonModifier3D] modifies the bone so that this axis points toward the [member target_node]. */
        get forwardAxis(): int64
        set forwardAxis(value: int64)
        
        /** The axis of the first rotation. This [SkeletonModifier3D] works by compositing the rotation by Euler angles to prevent to rotate the [member forward_axis]. */
        get primaryRotationAxis(): int64
        set primaryRotationAxis(value: int64)
        
        /** If `true`, provides rotation by two axes. */
        get useSecondaryRotation(): boolean
        set useSecondaryRotation(value: boolean)
        
        /** This value determines from what origin is retrieved for use in the calculation of the forward vector. */
        get originFrom(): int64
        set originFrom(value: int64)
        
        /** If [member origin_from] is [constant ORIGIN_FROM_SPECIFIC_BONE], the bone global pose position specified for this is used as origin. */
        get originBoneName(): string
        set originBoneName(value: string)
        
        /** Index of the [member origin_bone_name] in the parent [Skeleton3D]. */
        get originBone(): int64
        set originBone(value: int64)
        
        /** If [member origin_from] is [constant ORIGIN_FROM_EXTERNAL_NODE], the global position of the [Node3D] specified for this is used as origin. */
        get originExternalNode(): NodePath
        set originExternalNode(value: NodePath | string)
        
        /** The offset of the bone pose origin. Matching the origins by offset is useful for cases where multiple bones must always face the same direction, such as the eyes.  
         *      
         *  **Note:** This value indicates the local position of the object set in [member origin_from].  
         */
        get originOffset(): Vector3
        set originOffset(value: Vector3)
        
        /** If the target passes through too close to the origin than this value, time-based interpolation is used even if the target is within the angular limitations, to prevent the angular velocity from becoming too high. */
        get originSafeMargin(): float64
        set originSafeMargin(value: float64)
        
        /** The duration of the time-based interpolation. Interpolation is triggered at the following cases:  
         *  - When the target node is changed  
         *  - When an axis is flipped due to angle limitation  
         *      
         *  **Note:** The flipping occurs when the target is outside the angle limitation and the internally computed secondary rotation axis of the forward vector is flipped. Visually, it occurs when the target is outside the angle limitation and crosses the plane of the [member forward_axis] and [member primary_rotation_axis].  
         */
        get duration(): float64
        set duration(value: float64)
        
        /** The transition type of the time-based interpolation. See also [enum Tween.TransitionType]. */
        get transitionType(): int64
        set transitionType(value: int64)
        
        /** The ease type of the time-based interpolation. See also [enum Tween.EaseType]. */
        get easeType(): int64
        set easeType(value: int64)
        
        /** If `true`, limits the amount of rotation. For example, this helps to prevent a character's neck from rotating 360 degrees.  
         *      
         *  **Note:** As with [AnimationTree] blending, interpolation is provided that favors [method Skeleton3D.get_bone_rest]. This means that interpolation does not select the shortest path in some cases.  
         *      
         *  **Note:** Some values for [member transition_type] (such as [constant Tween.TRANS_BACK], [constant Tween.TRANS_ELASTIC], and [constant Tween.TRANS_SPRING]) may exceed the limitations. If interpolation occurs while overshooting the limitations, the result might not respect the bone rest.  
         */
        get useAngleLimitation(): boolean
        set useAngleLimitation(value: boolean)
        
        /** If `true`, the limitations are spread from the bone symmetrically.  
         *  If `false`, the limitation can be specified separately for each side of the bone rest.  
         */
        get symmetryLimitation(): boolean
        set symmetryLimitation(value: boolean)
        
        /** The limit angle of the primary rotation when [member symmetry_limitation] is `true`. */
        get primaryLimitAngle(): float64
        set primaryLimitAngle(value: float64)
        
        /** The threshold to start damping for [member primary_limit_angle]. It provides non-linear (b-spline) interpolation, let it feel more resistance the more it rotate to the edge limit. This is useful for simulating the limits of human motion.  
         *  If `1.0`, no damping is performed. If `0.0`, damping is always performed.  
         */
        get primaryDampThreshold(): float64
        set primaryDampThreshold(value: float64)
        
        /** The limit angle of positive side of the primary rotation when [member symmetry_limitation] is `false`. */
        get primaryPositiveLimitAngle(): float64
        set primaryPositiveLimitAngle(value: float64)
        
        /** The threshold to start damping for [member primary_positive_limit_angle]. */
        get primaryPositiveDampThreshold(): float64
        set primaryPositiveDampThreshold(value: float64)
        
        /** The limit angle of negative side of the primary rotation when [member symmetry_limitation] is `false`. */
        get primaryNegativeLimitAngle(): float64
        set primaryNegativeLimitAngle(value: float64)
        
        /** The threshold to start damping for [member primary_negative_limit_angle]. */
        get primaryNegativeDampThreshold(): float64
        set primaryNegativeDampThreshold(value: float64)
        
        /** The limit angle of the secondary rotation when [member symmetry_limitation] is `true`. */
        get secondaryLimitAngle(): float64
        set secondaryLimitAngle(value: float64)
        
        /** The threshold to start damping for [member secondary_limit_angle]. */
        get secondaryDampThreshold(): float64
        set secondaryDampThreshold(value: float64)
        
        /** The limit angle of positive side of the secondary rotation when [member symmetry_limitation] is `false`. */
        get secondaryPositiveLimitAngle(): float64
        set secondaryPositiveLimitAngle(value: float64)
        
        /** The threshold to start damping for [member secondary_positive_limit_angle]. */
        get secondaryPositiveDampThreshold(): float64
        set secondaryPositiveDampThreshold(value: float64)
        
        /** The limit angle of negative side of the secondary rotation when [member symmetry_limitation] is `false`. */
        get secondaryNegativeLimitAngle(): float64
        set secondaryNegativeLimitAngle(value: float64)
        
        /** The threshold to start damping for [member secondary_negative_limit_angle]. */
        get secondaryNegativeDampThreshold(): float64
        set secondaryNegativeDampThreshold(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLookAtModifier3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLookAtModifier3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMainLoop extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMainLoop extends __NameMapGObject {
        _physics_process: "_physicsProcess";
        on_request_permissions_result: "onRequestPermissionsResult";
    }
    /** Abstract base class for the game's main loop.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_mainloop.html  
     */
    class MainLoop extends GObject {
        /** Notification received from the OS when the application is exceeding its allocated memory.  
         *  Specific to the iOS platform.  
         */
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        
        /** Notification received when translations may have changed. Can be triggered by the user changing the locale. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [method Object.tr]. */
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        
        /** Notification received from the OS when a request for "About" information is sent.  
         *  Specific to the macOS platform.  
         */
        static readonly NOTIFICATION_WM_ABOUT = 2011
        
        /** Notification received from Godot's crash handler when the engine is about to crash.  
         *  Implemented on desktop platforms if the crash handler is enabled.  
         */
        static readonly NOTIFICATION_CRASH = 2012
        
        /** Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).  
         *  Implemented on desktop and web platforms.  
         */
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        
        /** Notification received from the OS when the application is resumed.  
         *  Specific to the Android and iOS platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        
        /** Notification received from the OS when the application is paused.  
         *  Specific to the Android and iOS platforms.  
         *      
         *  **Note:** On iOS, you only have approximately 5 seconds to finish a task started by this signal. If you go over this allotment, iOS will kill the app instead of pausing it.  
         */
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        
        /** Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        
        /** Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        
        /** Notification received when text server is changed. */
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        constructor(identifier?: any)
        
        /** Called once during initialization. */
        /* gdvirtual */ _initialize(): void
        
        /** Called each physics tick. [param delta] is the logical time between physics ticks in seconds and is equal to [member Engine.time_scale] / [member Engine.physics_ticks_per_second]. Equivalent to [method Node._physics_process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next step.  
         *      
         *  **Note:** [method _physics_process] may be called up to [member Engine.max_physics_steps_per_frame] times per (idle) frame. This step limit may be reached when the engine is suffering performance issues.  
         *      
         *  **Note:** Accumulated [param delta] may diverge from real world seconds.  
         */
        /* gdvirtual */ _physicsProcess(delta: float64): boolean
        
        /** Called on each idle frame, prior to rendering, and after physics ticks have been processed. [param delta] is the time between frames in seconds. Equivalent to [method Node._process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         *      
         *  **Note:** When the engine is struggling and the frame rate is lowered, [param delta] will increase. When [param delta] is increased, it's capped at a maximum of [member Engine.time_scale] * [member Engine.max_physics_steps_per_frame] / [member Engine.physics_ticks_per_second]. As a result, accumulated [param delta] may not represent real world time.  
         *      
         *  **Note:** When `--fixed-fps` is enabled or the engine is running in Movie Maker mode (see [MovieWriter]), process [param delta] will always be the same for every frame, regardless of how much time the frame took to render.  
         *      
         *  **Note:** Frame delta may be post-processed by [member OS.delta_smoothing] if this is enabled for the project.  
         */
        /* gdvirtual */ _process(delta: float64): boolean
        
        /** Called before the program exits. */
        /* gdvirtual */ _finalize(): void
        
        /** Emitted when a user responds to a permission request. */
        readonly onRequestPermissionsResult: Signal<(permission: string, granted: boolean) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMainLoop;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMainLoop;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMarginContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMarginContainer extends __NameMapContainer {
    }
    /** A container that keeps a margin around its child controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_margincontainer.html  
     */
    class MarginContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMarginContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMarginContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMarker2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMarker2D extends __NameMapNode2D {
        gizmo_extents: "gizmoExtents";
    }
    /** Generic 2D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_marker2d.html  
     */
    class Marker2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Size of the gizmo cross that appears in the editor. */
        get gizmoExtents(): float64
        set gizmoExtents(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMarker2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMarker2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMarker3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMarker3D extends __NameMapNode3D {
        gizmo_extents: "gizmoExtents";
    }
    /** Generic 3D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_marker3d.html  
     */
    class Marker3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Size of the gizmo cross that appears in the editor. */
        get gizmoExtents(): float64
        set gizmoExtents(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMarker3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMarker3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMaterial extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMaterial extends __NameMapResource {
        _get_shader_rid: "_getShaderRid";
        _get_shader_mode: "_getShaderMode";
        _can_do_next_pass: "_canDoNextPass";
        _can_use_render_priority: "_canUseRenderPriority";
        inspect_native_shader_code: "inspectNativeShaderCode";
        create_placeholder: "createPlaceholder";
        render_priority: "renderPriority";
        next_pass: "nextPass";
    }
    /** Virtual base class for applying visual properties to an object, such as color and roughness.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_material.html  
     */
    class Material extends Resource {
        /** Maximum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MAX = 127
        
        /** Minimum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MIN = -128
        constructor(identifier?: any)
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. Used to access the RID of the [Material]'s [Shader]. */
        /* gdvirtual */ _getShaderRid(): Rid
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. */
        /* gdvirtual */ _getShaderMode(): Shader.Mode
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member next_pass] should be shown in the editor or not. */
        /* gdvirtual */ _canDoNextPass(): boolean
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member render_priority] should be shown in the editor or not. */
        /* gdvirtual */ _canUseRenderPriority(): boolean
        
        /** Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. See also [method Shader.inspect_native_shader_code]. */
        inspectNativeShaderCode(): void
        
        /** Creates a placeholder version of this resource ([PlaceholderMaterial]). */
        createPlaceholder(): Resource
        
        /** Sets the render priority for objects in 3D scenes. Higher priority objects will be sorted in front of lower priority objects. In other words, all objects with [member render_priority] `1` will render on top of all objects with [member render_priority] `0`.  
         *      
         *  **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".  
         *      
         *  **Note:** This will not impact how transparent objects are sorted relative to opaque objects or how dynamic meshes will be sorted relative to other opaque meshes. This is because all transparent objects are drawn after all opaque objects and all dynamic opaque meshes are drawn before other opaque meshes.  
         */
        get renderPriority(): int64
        set renderPriority(value: int64)
        
        /** Sets the [Material] to be used for the next pass. This renders the object again using a different material.  
         *      
         *  **Note:** [member next_pass] materials are not necessarily drawn immediately after the source [Material]. Draw order is determined by material properties, [member render_priority], and distance to camera.  
         *      
         *  **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".  
         */
        get nextPass(): null | Material
        set nextPass(value: null | Material)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMaterial;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMenuBar extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMenuBar extends __NameMapControl {
        set_disable_shortcuts: "setDisableShortcuts";
        is_native_menu: "isNativeMenu";
        get_menu_count: "getMenuCount";
        set_menu_title: "setMenuTitle";
        get_menu_title: "getMenuTitle";
        set_menu_tooltip: "setMenuTooltip";
        get_menu_tooltip: "getMenuTooltip";
        set_menu_disabled: "setMenuDisabled";
        is_menu_disabled: "isMenuDisabled";
        set_menu_hidden: "setMenuHidden";
        is_menu_hidden: "isMenuHidden";
        get_menu_popup: "getMenuPopup";
        start_index: "startIndex";
        switch_on_hover: "switchOnHover";
        prefer_global_menu: "preferGlobalMenu";
        text_direction: "textDirection";
    }
    /** A horizontal menu bar that creates a menu for each [PopupMenu] child.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_menubar.html  
     */
    class MenuBar<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        setDisableShortcuts(disabled: boolean): void
        
        /** Returns `true`, if system global menu is supported and used by this [MenuBar]. */
        isNativeMenu(): boolean
        
        /** Returns number of menu items. */
        getMenuCount(): int64
        
        /** Sets menu item title. */
        setMenuTitle(menu: int64, title: string): void
        
        /** Returns menu item title. */
        getMenuTitle(menu: int64): string
        
        /** Sets menu item tooltip. */
        setMenuTooltip(menu: int64, tooltip: string): void
        
        /** Returns menu item tooltip. */
        getMenuTooltip(menu: int64): string
        
        /** If `true`, menu item is disabled. */
        setMenuDisabled(menu: int64, disabled: boolean): void
        
        /** Returns `true`, if menu item is disabled. */
        isMenuDisabled(menu: int64): boolean
        
        /** If `true`, menu item is hidden. */
        setMenuHidden(menu: int64, hidden: boolean): void
        
        /** Returns `true`, if menu item is hidden. */
        isMenuHidden(menu: int64): boolean
        
        /** Returns [PopupMenu] associated with menu item. */
        getMenuPopup(menu: int64): null | PopupMenu
        
        /** Flat [MenuBar] don't display item decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** Position order in the global menu to insert [MenuBar] items at. All menu items in the [MenuBar] are always inserted as a continuous range. Menus with lower [member start_index] are inserted first. Menus with [member start_index] equal to `-1` are inserted last. */
        get startIndex(): int64
        set startIndex(value: int64)
        
        /** If `true`, when the cursor hovers above menu item, it will close the current [PopupMenu] and open the other one. */
        get switchOnHover(): boolean
        set switchOnHover(value: boolean)
        
        /** If `true`, [MenuBar] will use system global menu when supported.  
         *      
         *  **Note:** If `true` and global menu is supported, this node is not displayed, has zero size, and all its child nodes except [PopupMenu]s are inaccessible.  
         *      
         *  **Note:** This property overrides the value of the [member PopupMenu.prefer_native_menu] property of the child nodes.  
         */
        get preferGlobalMenu(): boolean
        set preferGlobalMenu(value: boolean)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMenuBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMenuBar;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMenuButton extends __RPCMapButton {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMenuButton extends __NameMapButton {
        get_popup: "getPopup";
        show_popup: "showPopup";
        set_disable_shortcuts: "setDisableShortcuts";
        switch_on_hover: "switchOnHover";
        item_count: "itemCount";
        about_to_popup: "aboutToPopup";
    }
    /** A button that brings up a [PopupMenu] when clicked.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_menubutton.html  
     */
    class MenuButton<Map extends NodePathMap = any> extends Button<Map> {
        constructor(identifier?: any)
        /** Returns the [PopupMenu] contained in this button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getPopup(): null | PopupMenu
        
        /** Adjusts popup position and sizing for the [MenuButton], then shows the [PopupMenu]. Prefer this over using `get_popup().popup()`. */
        showPopup(): void
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        setDisableShortcuts(disabled: boolean): void
        
        /** If `true`, when the cursor hovers above another [MenuButton] within the same parent which also has [member switch_on_hover] enabled, it will close the current [MenuButton] and open the other one. */
        get switchOnHover(): boolean
        set switchOnHover(value: boolean)
        
        /** The number of items currently in the list. */
        get itemCount(): int64
        set itemCount(value: int64)
        
        /** Emitted when the [PopupMenu] of this MenuButton is about to show. */
        readonly aboutToPopup: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMenuButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMenuButton;
    }
    namespace Mesh {
        enum PrimitiveType {
            PrimitivePoints = 0,
            PrimitiveLines = 1,
            PrimitiveLineStrip = 2,
            PrimitiveTriangles = 3,
            PrimitiveTriangleStrip = 4,
        }
        enum ArrayType {
            ArrayVertex = 0,
            ArrayNormal = 1,
            ArrayTangent = 2,
            ArrayColor = 3,
            ArrayTexUV = 4,
            ArrayTexUV2 = 5,
            ArrayCustom0 = 6,
            ArrayCustom1 = 7,
            ArrayCustom2 = 8,
            ArrayCustom3 = 9,
            ArrayBones = 10,
            ArrayWeights = 11,
            ArrayIndex = 12,
            ArrayMax = 13,
        }
        enum ArrayCustomFormat {
            ArrayCustomRgba8Unorm = 0,
            ArrayCustomRgba8Snorm = 1,
            ArrayCustomRgHalf = 2,
            ArrayCustomRgbaHalf = 3,
            ArrayCustomRFloat = 4,
            ArrayCustomRgFloat = 5,
            ArrayCustomRgbFloat = 6,
            ArrayCustomRgbaFloat = 7,
            ArrayCustomMax = 8,
        }
        enum ArrayFormat {
            ArrayFormatVertex = 1,
            ArrayFormatNormal = 2,
            ArrayFormatTangent = 4,
            ArrayFormatColor = 8,
            ArrayFormatTexUV = 16,
            ArrayFormatTexUV2 = 32,
            ArrayFormatCustom0 = 64,
            ArrayFormatCustom1 = 128,
            ArrayFormatCustom2 = 256,
            ArrayFormatCustom3 = 512,
            ArrayFormatBones = 1024,
            ArrayFormatWeights = 2048,
            ArrayFormatIndex = 4096,
            ArrayFormatBlendShapeMask = 7,
            ArrayFormatCustomBase = 13,
            ArrayFormatCustomBits = 3,
            ArrayFormatCustom0Shift = 13,
            ArrayFormatCustom1Shift = 16,
            ArrayFormatCustom2Shift = 19,
            ArrayFormatCustom3Shift = 22,
            ArrayFormatCustomMask = 7,
            ArrayCompressFlagsBase = 25,
            ArrayFlagUse2DVertices = 33554432,
            ArrayFlagUseDynamicUpdate = 67108864,
            ArrayFlagUse8BoneWeights = 134217728,
            ArrayFlagUsesEmptyVertexArray = 268435456,
            ArrayFlagCompressAttributes = 536870912,
        }
        enum BlendShapeMode {
            BlendShapeModeNormalized = 0,
            BlendShapeModeRelative = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMesh extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMesh extends __NameMapResource {
        _get_surface_count: "_getSurfaceCount";
        _surface_get_array_len: "_surfaceGetArrayLen";
        _surface_get_array_index_len: "_surfaceGetArrayIndexLen";
        _surface_get_arrays: "_surfaceGetArrays";
        _surface_get_blend_shape_arrays: "_surfaceGetBlendShapeArrays";
        _surface_get_lods: "_surfaceGetLods";
        _surface_get_format: "_surfaceGetFormat";
        _surface_get_primitive_type: "_surfaceGetPrimitiveType";
        _surface_set_material: "_surfaceSetMaterial";
        _surface_get_material: "_surfaceGetMaterial";
        _get_blend_shape_count: "_getBlendShapeCount";
        _get_blend_shape_name: "_getBlendShapeName";
        _set_blend_shape_name: "_setBlendShapeName";
        _get_aabb: "_getAabb";
        get_aabb: "getAabb";
        get_faces: "getFaces";
        get_surface_count: "getSurfaceCount";
        surface_get_arrays: "surfaceGetArrays";
        surface_get_blend_shape_arrays: "surfaceGetBlendShapeArrays";
        surface_set_material: "surfaceSetMaterial";
        surface_get_material: "surfaceGetMaterial";
        create_placeholder: "createPlaceholder";
        create_trimesh_shape: "createTrimeshShape";
        create_convex_shape: "createConvexShape";
        create_outline: "createOutline";
        generate_triangle_mesh: "generateTriangleMesh";
        lightmap_size_hint: "lightmapSizeHint";
    }
    /** A [Resource] that contains vertex array-based geometry.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_mesh.html  
     */
    class Mesh extends Resource {
        constructor(identifier?: any)
        /** Virtual method to override the surface count for a custom class extending [Mesh]. */
        /* gdvirtual */ _getSurfaceCount(): int64
        
        /** Virtual method to override the surface array length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetArrayLen(index: int64): int64
        
        /** Virtual method to override the surface array index length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetArrayIndexLen(index: int64): int64
        
        /** Virtual method to override the surface arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetArrays(index: int64): GArray
        
        /** Virtual method to override the blend shape arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetBlendShapeArrays(index: int64): GArray<GArray>
        
        /** Virtual method to override the surface LODs for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetLods(index: int64): GDictionary
        
        /** Virtual method to override the surface format for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetFormat(index: int64): int64
        
        /** Virtual method to override the surface primitive type for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetPrimitiveType(index: int64): int64
        
        /** Virtual method to override the setting of a [param material] at the given [param index] for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceSetMaterial(index: int64, material: Material): void
        
        /** Virtual method to override the surface material for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetMaterial(index: int64): null | Material
        
        /** Virtual method to override the number of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _getBlendShapeCount(): int64
        
        /** Virtual method to override the retrieval of blend shape names for a custom class extending [Mesh]. */
        /* gdvirtual */ _getBlendShapeName(index: int64): StringName
        
        /** Virtual method to override the names of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _setBlendShapeName(index: int64, name: StringName): void
        
        /** Virtual method to override the [AABB] for a custom class extending [Mesh]. */
        /* gdvirtual */ _getAabb(): Aabb
        
        /** Returns the smallest [AABB] enclosing this mesh in local space. Not affected by `custom_aabb`.  
         *      
         *  **Note:** This is only implemented for [ArrayMesh] and [PrimitiveMesh].  
         */
        getAabb(): Aabb
        
        /** Returns all the vertices that make up the faces of the mesh. Each three vertices represent one triangle. */
        getFaces(): PackedVector3Array
        
        /** Returns the number of surfaces that the [Mesh] holds. This is equivalent to [method MeshInstance3D.get_surface_override_material_count]. */
        getSurfaceCount(): int64
        
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see [method ArrayMesh.add_surface_from_arrays]). */
        surfaceGetArrays(surfIdx: int64): GArray
        
        /** Returns the blend shape arrays for the requested surface. */
        surfaceGetBlendShapeArrays(surfIdx: int64): GArray<GArray>
        
        /** Sets a [Material] for a given surface. Surface will be rendered using this material.  
         *      
         *  **Note:** This assigns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To set the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.set_surface_override_material] instead.  
         */
        surfaceSetMaterial(surfIdx: int64, material: Material): void
        
        /** Returns a [Material] in a given surface. Surface is rendered using this material.  
         *      
         *  **Note:** This returns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To get the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.get_surface_override_material] instead.  
         */
        surfaceGetMaterial(surfIdx: int64): null | Material
        
        /** Creates a placeholder version of this resource ([PlaceholderMesh]). */
        createPlaceholder(): Resource
        
        /** Calculate a [ConcavePolygonShape3D] from the mesh. */
        createTrimeshShape(): ConcavePolygonShape3D
        
        /** Calculate a [ConvexPolygonShape3D] from the mesh.  
         *  If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.  
         *  If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.  
         */
        createConvexShape(clean?: boolean /* = true */, simplify?: boolean /* = false */): ConvexPolygonShape3D
        
        /** Calculate an outline mesh at a defined offset (margin) from the original mesh.  
         *      
         *  **Note:** This method typically returns the vertices in reverse order (e.g. clockwise to counterclockwise).  
         */
        createOutline(margin: float64): Mesh
        
        /** Generate a [TriangleMesh] from the mesh. Considers only surfaces using one of these primitive types: [constant PRIMITIVE_TRIANGLES], [constant PRIMITIVE_TRIANGLE_STRIP]. */
        generateTriangleMesh(): null | TriangleMesh
        
        /** Sets a hint to be used for lightmap resolution. */
        get lightmapSizeHint(): Vector2I
        set lightmapSizeHint(value: Vector2I)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMesh;
    }
    namespace MeshConvexDecompositionSettings {
        enum Mode {
            ConvexDecompositionModeVoxel = 0,
            ConvexDecompositionModeTetrahedron = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMeshConvexDecompositionSettings extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMeshConvexDecompositionSettings extends __NameMapRefCounted {
        max_concavity: "maxConcavity";
        symmetry_planes_clipping_bias: "symmetryPlanesClippingBias";
        revolution_axes_clipping_bias: "revolutionAxesClippingBias";
        min_volume_per_convex_hull: "minVolumePerConvexHull";
        max_num_vertices_per_convex_hull: "maxNumVerticesPerConvexHull";
        plane_downsampling: "planeDownsampling";
        convex_hull_downsampling: "convexHullDownsampling";
        normalize_mesh: "normalizeMesh";
        convex_hull_approximation: "convexHullApproximation";
        max_convex_hulls: "maxConvexHulls";
        project_hull_vertices: "projectHullVertices";
    }
    /** Parameters to be used with a [Mesh] convex decomposition operation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_meshconvexdecompositionsettings.html  
     */
    class MeshConvexDecompositionSettings extends RefCounted {
        constructor(identifier?: any)
        /** Maximum concavity. Ranges from `0.0` to `1.0`. */
        get maxConcavity(): float64
        set maxConcavity(value: float64)
        
        /** Controls the bias toward clipping along symmetry planes. Ranges from `0.0` to `1.0`. */
        get symmetryPlanesClippingBias(): float64
        set symmetryPlanesClippingBias(value: float64)
        
        /** Controls the bias toward clipping along revolution axes. Ranges from `0.0` to `1.0`. */
        get revolutionAxesClippingBias(): float64
        set revolutionAxesClippingBias(value: float64)
        
        /** Controls the adaptive sampling of the generated convex-hulls. Ranges from `0.0` to `0.01`. */
        get minVolumePerConvexHull(): float64
        set minVolumePerConvexHull(value: float64)
        
        /** Maximum number of voxels generated during the voxelization stage. */
        get resolution(): int64
        set resolution(value: int64)
        
        /** Controls the maximum number of triangles per convex-hull. Ranges from `4` to `1024`. */
        get maxNumVerticesPerConvexHull(): int64
        set maxNumVerticesPerConvexHull(value: int64)
        
        /** Controls the granularity of the search for the "best" clipping plane. Ranges from `1` to `16`. */
        get planeDownsampling(): int64
        set planeDownsampling(value: int64)
        
        /** Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from `1` to `16`. */
        get convexHullDownsampling(): int64
        set convexHullDownsampling(value: int64)
        
        /** If `true`, normalizes the mesh before applying the convex decomposition. */
        get normalizeMesh(): boolean
        set normalizeMesh(value: boolean)
        
        /** Mode for the approximate convex decomposition. */
        get mode(): int64
        set mode(value: int64)
        
        /** If `true`, uses approximation for computing convex hulls. */
        get convexHullApproximation(): boolean
        set convexHullApproximation(value: boolean)
        
        /** The maximum number of convex hulls to produce from the merge operation. */
        get maxConvexHulls(): int64
        set maxConvexHulls(value: int64)
        
        /** If `true`, projects output convex hull vertices onto the original source mesh to increase floating-point accuracy of the results. */
        get projectHullVertices(): boolean
        set projectHullVertices(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMeshConvexDecompositionSettings;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMeshConvexDecompositionSettings;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMeshDataTool extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMeshDataTool extends __NameMapRefCounted {
        create_from_surface: "createFromSurface";
        commit_to_surface: "commitToSurface";
        get_format: "getFormat";
        get_vertex_count: "getVertexCount";
        get_edge_count: "getEdgeCount";
        get_face_count: "getFaceCount";
        set_vertex: "setVertex";
        get_vertex: "getVertex";
        set_vertex_normal: "setVertexNormal";
        get_vertex_normal: "getVertexNormal";
        set_vertex_tangent: "setVertexTangent";
        get_vertex_tangent: "getVertexTangent";
        set_vertex_uv: "setVertexUV";
        get_vertex_uv: "getVertexUV";
        set_vertex_uv2: "setVertexUV2";
        get_vertex_uv2: "getVertexUV2";
        set_vertex_color: "setVertexColor";
        get_vertex_color: "getVertexColor";
        set_vertex_bones: "setVertexBones";
        get_vertex_bones: "getVertexBones";
        set_vertex_weights: "setVertexWeights";
        get_vertex_weights: "getVertexWeights";
        set_vertex_meta: "setVertexMeta";
        get_vertex_meta: "getVertexMeta";
        get_vertex_edges: "getVertexEdges";
        get_vertex_faces: "getVertexFaces";
        get_edge_vertex: "getEdgeVertex";
        get_edge_faces: "getEdgeFaces";
        set_edge_meta: "setEdgeMeta";
        get_edge_meta: "getEdgeMeta";
        get_face_vertex: "getFaceVertex";
        get_face_edge: "getFaceEdge";
        set_face_meta: "setFaceMeta";
        get_face_meta: "getFaceMeta";
        get_face_normal: "getFaceNormal";
        set_material: "setMaterial";
        get_material: "getMaterial";
    }
    /** Helper tool to access and edit [Mesh] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_meshdatatool.html  
     */
    class MeshDataTool extends RefCounted {
        constructor(identifier?: any)
        /** Clears all data currently in MeshDataTool. */
        clear(): void
        
        /** Uses specified surface of given [Mesh] to populate data for MeshDataTool.  
         *  Requires [Mesh] with primitive type [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        createFromSurface(mesh: ArrayMesh, surface: int64): GError
        
        /** Adds a new surface to specified [Mesh] with edited data. */
        commitToSurface(mesh: ArrayMesh, compressionFlags?: int64 /* = 0 */): GError
        
        /** Returns the [Mesh]'s format as a combination of the [enum Mesh.ArrayFormat] flags. For example, a mesh containing both vertices and normals would return a format of `3` because [constant Mesh.ARRAY_FORMAT_VERTEX] is `1` and [constant Mesh.ARRAY_FORMAT_NORMAL] is `2`. */
        getFormat(): int64
        
        /** Returns the total number of vertices in [Mesh]. */
        getVertexCount(): int64
        
        /** Returns the number of edges in this [Mesh]. */
        getEdgeCount(): int64
        
        /** Returns the number of faces in this [Mesh]. */
        getFaceCount(): int64
        
        /** Sets the position of the given vertex. */
        setVertex(idx: int64, vertex: Vector3): void
        
        /** Returns the position of the given vertex. */
        getVertex(idx: int64): Vector3
        
        /** Sets the normal of the given vertex. */
        setVertexNormal(idx: int64, normal: Vector3): void
        
        /** Returns the normal of the given vertex. */
        getVertexNormal(idx: int64): Vector3
        
        /** Sets the tangent of the given vertex. */
        setVertexTangent(idx: int64, tangent: Plane): void
        
        /** Returns the tangent of the given vertex. */
        getVertexTangent(idx: int64): Plane
        
        /** Sets the UV of the given vertex. */
        setVertexUV(idx: int64, uV: Vector2): void
        
        /** Returns the UV of the given vertex. */
        getVertexUV(idx: int64): Vector2
        
        /** Sets the UV2 of the given vertex. */
        setVertexUV2(idx: int64, uV2: Vector2): void
        
        /** Returns the UV2 of the given vertex. */
        getVertexUV2(idx: int64): Vector2
        
        /** Sets the color of the given vertex. */
        setVertexColor(idx: int64, color: Color): void
        
        /** Returns the color of the given vertex. */
        getVertexColor(idx: int64): Color
        
        /** Sets the bones of the given vertex. */
        setVertexBones(idx: int64, bones: PackedInt32Array | int32[]): void
        
        /** Returns the bones of the given vertex. */
        getVertexBones(idx: int64): PackedInt32Array
        
        /** Sets the bone weights of the given vertex. */
        setVertexWeights(idx: int64, weights: PackedFloat32Array | float32[]): void
        
        /** Returns bone weights of the given vertex. */
        getVertexWeights(idx: int64): PackedFloat32Array
        
        /** Sets the metadata associated with the given vertex. */
        setVertexMeta(idx: int64, meta: any): void
        
        /** Returns the metadata associated with the given vertex. */
        getVertexMeta(idx: int64): any
        
        /** Returns an array of edges that share the given vertex. */
        getVertexEdges(idx: int64): PackedInt32Array
        
        /** Returns an array of faces that share the given vertex. */
        getVertexFaces(idx: int64): PackedInt32Array
        
        /** Returns the index of the specified [param vertex] connected to the edge at index [param idx].  
         *  [param vertex] can only be `0` or `1`, as edges are composed of two vertices.  
         */
        getEdgeVertex(idx: int64, vertex: int64): int64
        
        /** Returns array of faces that touch given edge. */
        getEdgeFaces(idx: int64): PackedInt32Array
        
        /** Sets the metadata of the given edge. */
        setEdgeMeta(idx: int64, meta: any): void
        
        /** Returns meta information assigned to given edge. */
        getEdgeMeta(idx: int64): any
        
        /** Returns the specified vertex index of the given face.  
         *  [param vertex] must be either `0`, `1`, or `2` because faces contain three vertices.  
         *    
         */
        getFaceVertex(idx: int64, vertex: int64): int64
        
        /** Returns the edge associated with the face at index [param idx].  
         *  [param edge] argument must be either `0`, `1`, or `2` because a face only has three edges.  
         */
        getFaceEdge(idx: int64, edge: int64): int64
        
        /** Sets the metadata of the given face. */
        setFaceMeta(idx: int64, meta: any): void
        
        /** Returns the metadata associated with the given face. */
        getFaceMeta(idx: int64): any
        
        /** Calculates and returns the face normal of the given face. */
        getFaceNormal(idx: int64): Vector3
        
        /** Sets the material to be used by newly-constructed [Mesh]. */
        setMaterial(material: Material): void
        
        /** Returns the material assigned to the [Mesh]. */
        getMaterial(): null | Material
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMeshDataTool;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMeshDataTool;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMeshInstance2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMeshInstance2D extends __NameMapNode2D {
        texture_changed: "textureChanged";
    }
    /** Node used for displaying a [Mesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_meshinstance2d.html  
     */
    class MeshInstance2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [Mesh] that will be drawn by the [MeshInstance2D]. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Emitted when the [member texture] is changed. */
        readonly textureChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMeshInstance2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMeshInstance2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMeshInstance3D extends __RPCMapGeometryInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMeshInstance3D extends __NameMapGeometryInstance3D {
        get_skin_reference: "getSkinReference";
        get_surface_override_material_count: "getSurfaceOverrideMaterialCount";
        set_surface_override_material: "setSurfaceOverrideMaterial";
        get_surface_override_material: "getSurfaceOverrideMaterial";
        get_active_material: "getActiveMaterial";
        create_trimesh_collision: "createTrimeshCollision";
        create_convex_collision: "createConvexCollision";
        create_multiple_convex_collisions: "createMultipleConvexCollisions";
        get_blend_shape_count: "getBlendShapeCount";
        find_blend_shape_by_name: "findBlendShapeByName";
        get_blend_shape_value: "getBlendShapeValue";
        set_blend_shape_value: "setBlendShapeValue";
        create_debug_tangents: "createDebugTangents";
        bake_mesh_from_current_blend_shape_mix: "bakeMeshFromCurrentBlendShapeMix";
        bake_mesh_from_current_skeleton_pose: "bakeMeshFromCurrentSkeletonPose";
    }
    /** Node that instances meshes into a scenario.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_meshinstance3d.html  
     */
    class MeshInstance3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        /** Returns the internal [SkinReference] containing the skeleton's [RID] attached to this RID. See also [method Resource.get_rid], [method SkinReference.get_skeleton], and [method RenderingServer.instance_attach_skeleton]. */
        getSkinReference(): null | SkinReference
        
        /** Returns the number of surface override materials. This is equivalent to [method Mesh.get_surface_count]. See also [method get_surface_override_material]. */
        getSurfaceOverrideMaterialCount(): int64
        
        /** Sets the override [param material] for the specified [param surface] of the [Mesh] resource. This material is associated with this [MeshInstance3D] rather than with [member mesh].  
         *      
         *  **Note:** This assigns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To set the material within the [Mesh] resource, use [method Mesh.surface_set_material] instead.  
         */
        setSurfaceOverrideMaterial(surface: int64, material: Material): void
        
        /** Returns the override [Material] for the specified [param surface] of the [Mesh] resource. See also [method get_surface_override_material_count].  
         *      
         *  **Note:** This returns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To get the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.  
         */
        getSurfaceOverrideMaterial(surface: int64): null | Material
        
        /** Returns the [Material] that will be used by the [Mesh] when drawing. This can return the [member GeometryInstance3D.material_override], the surface override [Material] defined in this [MeshInstance3D], or the surface [Material] defined in the [member mesh]. For example, if [member GeometryInstance3D.material_override] is used, all surfaces will return the override material.  
         *  Returns `null` if no material is active, including when [member mesh] is `null`.  
         */
        getActiveMaterial(surface: int64): null | Material
        
        /** This helper creates a [StaticBody3D] child node with a [ConcavePolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing. */
        createTrimeshCollision(): void
        
        /** This helper creates a [StaticBody3D] child node with a [ConvexPolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing.  
         *  If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.  
         *  If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.  
         */
        createConvexCollision(clean?: boolean /* = true */, simplify?: boolean /* = false */): void
        
        /** This helper creates a [StaticBody3D] child node with multiple [ConvexPolygonShape3D] collision shapes calculated from the mesh geometry via convex decomposition. The convex decomposition operation can be controlled with parameters from the optional [param settings]. */
        createMultipleConvexCollisions(settings?: MeshConvexDecompositionSettings): void
        
        /** Returns the number of blend shapes available. Produces an error if [member mesh] is `null`. */
        getBlendShapeCount(): int64
        
        /** Returns the index of the blend shape with the given [param name]. Returns `-1` if no blend shape with this name exists, including when [member mesh] is `null`. */
        findBlendShapeByName(name: StringName): int64
        
        /** Returns the value of the blend shape at the given [param blend_shape_idx]. Returns `0.0` and produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        getBlendShapeValue(blendShapeIdx: int64): float64
        
        /** Sets the value of the blend shape at [param blend_shape_idx] to [param value]. Produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        setBlendShapeValue(blendShapeIdx: int64, value: float64): void
        
        /** This helper creates a [MeshInstance3D] child node with gizmos at every vertex calculated from the mesh geometry. It's mainly used for testing. */
        createDebugTangents(): void
        
        /** Takes a snapshot from the current [ArrayMesh] with all blend shapes applied according to their current weights and bakes it to the provided [param existing] mesh. If no [param existing] mesh is provided a new [ArrayMesh] is created, baked and returned. Mesh surface materials are not copied.  
         *  **Performance:** [Mesh] data needs to be received from the GPU, stalling the [RenderingServer] in the process.  
         */
        bakeMeshFromCurrentBlendShapeMix(existing?: ArrayMesh): null | ArrayMesh
        
        /** Takes a snapshot of the current animated skeleton pose of the skinned mesh and bakes it to the provided [param existing] mesh. If no [param existing] mesh is provided a new [ArrayMesh] is created, baked, and returned. Requires a skeleton with a registered skin to work. Blendshapes are ignored. Mesh surface materials are not copied.  
         *  **Performance:** [Mesh] data needs to be retrieved from the GPU, stalling the [RenderingServer] in the process.  
         */
        bakeMeshFromCurrentSkeletonPose(existing?: ArrayMesh): null | ArrayMesh
        
        /** The [Mesh] resource for the instance. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** The [Skin] to be used by this instance. */
        get skin(): null | Skin
        set skin(value: null | Skin)
        
        /** [NodePath] to the [Skeleton3D] associated with the instance. */
        get skeleton(): NodePath
        set skeleton(value: NodePath | string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMeshInstance3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMeshInstance3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMeshLibrary extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMeshLibrary extends __NameMapResource {
        create_item: "createItem";
        set_item_name: "setItemName";
        set_item_mesh: "setItemMesh";
        set_item_mesh_transform: "setItemMeshTransform";
        set_item_mesh_cast_shadow: "setItemMeshCastShadow";
        set_item_navigation_mesh: "setItemNavigationMesh";
        set_item_navigation_mesh_transform: "setItemNavigationMeshTransform";
        set_item_navigation_layers: "setItemNavigationLayers";
        set_item_shapes: "setItemShapes";
        set_item_preview: "setItemPreview";
        get_item_name: "getItemName";
        get_item_mesh: "getItemMesh";
        get_item_mesh_transform: "getItemMeshTransform";
        get_item_mesh_cast_shadow: "getItemMeshCastShadow";
        get_item_navigation_mesh: "getItemNavigationMesh";
        get_item_navigation_mesh_transform: "getItemNavigationMeshTransform";
        get_item_navigation_layers: "getItemNavigationLayers";
        get_item_shapes: "getItemShapes";
        get_item_preview: "getItemPreview";
        remove_item: "removeItem";
        find_item_by_name: "findItemByName";
        get_item_list: "getItemList";
        get_last_unused_item_id: "getLastUnusedItemId";
    }
    /** Library of meshes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_meshlibrary.html  
     */
    class MeshLibrary extends Resource {
        constructor(identifier?: any)
        /** Creates a new item in the library with the given ID.  
         *  You can get an unused ID from [method get_last_unused_item_id].  
         */
        createItem(id: int64): void
        
        /** Sets the item's name.  
         *  This name is shown in the editor. It can also be used to look up the item later using [method find_item_by_name].  
         */
        setItemName(id: int64, name: string): void
        
        /** Sets the item's mesh. */
        setItemMesh(id: int64, mesh: Mesh): void
        
        /** Sets the transform to apply to the item's mesh. */
        setItemMeshTransform(id: int64, meshTransform: Transform3D): void
        
        /** Sets the item's shadow casting mode to [param shadow_casting_setting]. */
        setItemMeshCastShadow(id: int64, shadowCastingSetting: RenderingServer.ShadowCastingSetting): void
        
        /** Sets the item's navigation mesh. */
        setItemNavigationMesh(id: int64, navigationMesh: NavigationMesh): void
        
        /** Sets the transform to apply to the item's navigation mesh. */
        setItemNavigationMeshTransform(id: int64, navigationMesh: Transform3D): void
        
        /** Sets the item's navigation layers bitmask. */
        setItemNavigationLayers(id: int64, navigationLayers: int64): void
        
        /** Sets an item's collision shapes.  
         *  The array should consist of [Shape3D] objects, each followed by a [Transform3D] that will be applied to it. For shapes that should not have a transform, use [constant Transform3D.IDENTITY].  
         */
        setItemShapes(id: int64, shapes: GArray): void
        
        /** Sets a texture to use as the item's preview icon in the editor. */
        setItemPreview(id: int64, texture: Texture2D): void
        
        /** Returns the item's name. */
        getItemName(id: int64): string
        
        /** Returns the item's mesh. */
        getItemMesh(id: int64): null | Mesh
        
        /** Returns the transform applied to the item's mesh. */
        getItemMeshTransform(id: int64): Transform3D
        
        /** Returns the item's shadow casting mode. */
        getItemMeshCastShadow(id: int64): RenderingServer.ShadowCastingSetting
        
        /** Returns the item's navigation mesh. */
        getItemNavigationMesh(id: int64): null | NavigationMesh
        
        /** Returns the transform applied to the item's navigation mesh. */
        getItemNavigationMeshTransform(id: int64): Transform3D
        
        /** Returns the item's navigation layers bitmask. */
        getItemNavigationLayers(id: int64): int64
        
        /** Returns an item's collision shapes.  
         *  The array consists of each [Shape3D] followed by its [Transform3D].  
         */
        getItemShapes(id: int64): GArray
        
        /** When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using [method set_item_preview]. Returns an empty [Texture2D] if no preview was manually set in a running project. */
        getItemPreview(id: int64): null | Texture2D
        
        /** Removes the item. */
        removeItem(id: int64): void
        
        /** Returns the first item with the given name, or `-1` if no item is found. */
        findItemByName(name: string): int64
        
        /** Clears the library. */
        clear(): void
        
        /** Returns the list of item IDs in use. */
        getItemList(): PackedInt32Array
        
        /** Gets an unused ID for a new item. */
        getLastUnusedItemId(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMeshLibrary;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMeshLibrary;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMeshTexture extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMeshTexture extends __NameMapTexture2D {
        base_texture: "baseTexture";
        image_size: "imageSize";
    }
    /** Simple texture that uses a mesh to draw itself.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_meshtexture.html  
     */
    class MeshTexture extends Texture2D {
        constructor(identifier?: any)
        /** Sets the mesh used to draw. It must be a mesh using 2D vertices. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** Sets the base texture that the Mesh will use to draw. */
        get baseTexture(): null | Texture2D
        set baseTexture(value: null | Texture2D)
        
        /** Sets the size of the image, needed for reference. */
        get imageSize(): Vector2
        set imageSize(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMeshTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMeshTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMethodTweener extends __RPCMapTweener {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMethodTweener extends __NameMapTweener {
        set_delay: "setDelay";
        set_trans: "setTrans";
        set_ease: "setEase";
    }
    /** Interpolates an abstract value and supplies it to a method called over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_methodtweener.html  
     */
    class MethodTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets the time in seconds after which the [MethodTweener] will start interpolating. By default there's no delay. */
        setDelay(delay: float64): null | MethodTweener
        
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        setTrans(trans: Tween.TransitionType): null | MethodTweener
        
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        setEase(ease: Tween.EaseType): null | MethodTweener
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMethodTweener;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMethodTweener;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMissingNode extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMissingNode extends __NameMapNode {
        original_class: "originalClass";
        original_scene: "originalScene";
        recording_properties: "recordingProperties";
    }
    /** An internal editor class intended for keeping the data of unrecognized nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_missingnode.html  
     */
    class MissingNode<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** The name of the class this node was supposed to be (see [method Object.get_class]). */
        get originalClass(): string
        set originalClass(value: string)
        
        /** Returns the path of the scene this node was instance of originally. */
        get originalScene(): string
        set originalScene(value: string)
        
        /** If `true`, allows new properties to be set along with existing ones. If `false`, only existing properties' values can be set, and new properties cannot be added. */
        get recordingProperties(): boolean
        set recordingProperties(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMissingNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMissingNode;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMissingResource extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMissingResource extends __NameMapResource {
        original_class: "originalClass";
        recording_properties: "recordingProperties";
    }
    /** An internal editor class intended for keeping the data of unrecognized resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_missingresource.html  
     */
    class MissingResource extends Resource {
        constructor(identifier?: any)
        /** The name of the class this resource was supposed to be (see [method Object.get_class]). */
        get originalClass(): string
        set originalClass(value: string)
        
        /** If set to `true`, allows new properties to be added on top of the existing ones with [method Object.set]. */
        get recordingProperties(): boolean
        set recordingProperties(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMissingResource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMissingResource;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMobileVRInterface extends __RPCMapXRInterface {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMobileVRInterface extends __NameMapXRInterface {
        eye_height: "eyeHeight";
        display_width: "displayWidth";
        display_to_lens: "displayToLens";
        offset_rect: "offsetRect";
        vrs_min_radius: "vrsMinRadius";
        vrs_strength: "vrsStrength";
    }
    /** Generic mobile VR implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_mobilevrinterface.html  
     */
    class MobileVRInterface extends XRInterface {
        constructor(identifier?: any)
        /** The height at which the camera is placed in relation to the ground (i.e. [XROrigin3D] node). */
        get eyeHeight(): float64
        set eyeHeight(value: float64)
        
        /** The interocular distance, also known as the interpupillary distance. The distance between the pupils of the left and right eye. */
        get iod(): float64
        set iod(value: float64)
        
        /** The width of the display in centimeters. */
        get displayWidth(): float64
        set displayWidth(value: float64)
        
        /** The distance between the display and the lenses inside of the device in centimeters. */
        get displayToLens(): float64
        set displayToLens(value: float64)
        
        /** Set the offset rect relative to the area being rendered. A length of 1 represents the whole rendering area on that axis. */
        get offsetRect(): Rect2
        set offsetRect(value: Rect2)
        
        /** The oversample setting. Because of the lens distortion we have to render our buffers at a higher resolution then the screen can natively handle. A value between 1.5 and 2.0 often provides good results but at the cost of performance. */
        get oversample(): float64
        set oversample(value: float64)
        
        /** The k1 lens factor is one of the two constants that define the strength of the lens used and directly influences the lens distortion effect. */
        get k1(): float64
        set k1(value: float64)
        
        /** The k2 lens factor, see k1. */
        get k2(): float64
        set k2(value: float64)
        
        /** The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        
        /** The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is. This improves performance at the cost of quality.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsStrength(): float64
        set vrsStrength(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMobileVRInterface;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMobileVRInterface;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapModifierBoneTarget3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapModifierBoneTarget3D extends __NameMapSkeletonModifier3D {
        bone_name: "boneName";
    }
    /** А node that dynamically copies the 3D transform of a bone in its parent [Skeleton3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_modifierbonetarget3d.html  
     */
    class ModifierBoneTarget3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** The name of the attached bone. */
        get boneName(): string
        set boneName(value: string)
        
        /** The index of the attached bone. */
        get bone(): int64
        set bone(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapModifierBoneTarget3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapModifierBoneTarget3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMovieWriter extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMovieWriter extends __NameMapGObject {
        _get_audio_mix_rate: "_getAudioMixRate";
        _get_audio_speaker_mode: "_getAudioSpeakerMode";
        _handles_file: "_handlesFile";
        _write_begin: "_writeBegin";
        _write_frame: "_writeFrame";
        _write_end: "_writeEnd";
        add_writer: "addWriter";
    }
    /** Abstract class for non-real-time video recording encoders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_moviewriter.html  
     */
    class MovieWriter extends GObject {
        constructor(identifier?: any)
        /** Called when the audio sample rate used for recording the audio is requested by the engine. The value returned must be specified in Hz. Defaults to 48000 Hz if [method _get_audio_mix_rate] is not overridden. */
        /* gdvirtual */ _getAudioMixRate(): int64
        
        /** Called when the audio speaker mode used for recording the audio is requested by the engine. This can affect the number of output channels in the resulting audio file/stream. Defaults to [constant AudioServer.SPEAKER_MODE_STEREO] if [method _get_audio_speaker_mode] is not overridden. */
        /* gdvirtual */ _getAudioSpeakerMode(): AudioServer.SpeakerMode
        
        /** Called when the engine determines whether this [MovieWriter] is able to handle the file at [param path]. Must return `true` if this [MovieWriter] is able to handle the given file path, `false` otherwise. Typically, [method _handles_file] is overridden as follows to allow the user to record a file at any path with a given file extension:  
         *    
         */
        /* gdvirtual */ _handlesFile(path: string): boolean
        
        /** Called once before the engine starts writing video and audio data. [param movie_size] is the width and height of the video to save. [param fps] is the number of frames per second specified in the project settings or using the `--fixed-fps <fps>` [url=https://docs.godotengine.org/en/4.5/tutorials/editor/command_line_tutorial.html]command line argument[/url]. */
        /* gdvirtual */ _writeBegin(movieSize: Vector2I, fps: int64, basePath: string): GError
        
        /** Called at the end of every rendered frame. The [param frame_image] and [param audio_frame_block] function arguments should be written to. */
        /* gdvirtual */ _writeFrame(frameImage: Image, audioFrameBlock: int64): GError
        
        /** Called when the engine finishes writing. This occurs when the engine quits by pressing the window manager's close button, or when [method SceneTree.quit] is called.  
         *      
         *  **Note:** Pressing [kbd]Ctrl + C[/kbd] on the terminal running the editor/project does  *not*  result in [method _write_end] being called.  
         */
        /* gdvirtual */ _writeEnd(): void
        
        /** Adds a writer to be usable by the engine. The supported file extensions can be set by overriding [method _handles_file].  
         *      
         *  **Note:** [method add_writer] must be called early enough in the engine initialization to work, as movie writing is designed to start at the same time as the rest of the engine.  
         */
        static addWriter(writer: MovieWriter): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMovieWriter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMovieWriter;
    }
    namespace MultiMesh {
        enum TransformFormat {
            Transform2D = 0,
            Transform3D = 1,
        }
        enum PhysicsInterpolationQuality {
            InterpQualityFast = 0,
            InterpQualityHigh = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiMesh extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiMesh extends __NameMapResource {
        set_instance_transform: "setInstanceTransform";
        set_instance_transform_2d: "setInstanceTransform2D";
        get_instance_transform: "getInstanceTransform";
        get_instance_transform_2d: "getInstanceTransform2D";
        set_instance_color: "setInstanceColor";
        get_instance_color: "getInstanceColor";
        set_instance_custom_data: "setInstanceCustomData";
        get_instance_custom_data: "getInstanceCustomData";
        reset_instance_physics_interpolation: "resetInstancePhysicsInterpolation";
        get_aabb: "getAabb";
        set_buffer_interpolated: "setBufferInterpolated";
        transform_format: "transformFormat";
        use_colors: "useColors";
        use_custom_data: "useCustomData";
        custom_aabb: "customAabb";
        instance_count: "instanceCount";
        visible_instance_count: "visibleInstanceCount";
        transform_array: "transformArray";
        transform_2d_array: "transform2DArray";
        color_array: "colorArray";
        custom_data_array: "customDataArray";
        physics_interpolation_quality: "physicsInterpolationQuality";
    }
    /** Provides high-performance drawing of a mesh multiple times using GPU instancing.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_multimesh.html  
     */
    class MultiMesh extends Resource {
        constructor(identifier?: any)
        /** Sets the [Transform3D] for a specific instance. */
        setInstanceTransform(instance: int64, transform: Transform3D): void
        
        /** Sets the [Transform2D] for a specific instance. */
        setInstanceTransform2D(instance: int64, transform: Transform2D): void
        
        /** Returns the [Transform3D] of a specific instance. */
        getInstanceTransform(instance: int64): Transform3D
        
        /** Returns the [Transform2D] of a specific instance. */
        getInstanceTransform2D(instance: int64): Transform2D
        
        /** Sets the color of a specific instance by  *multiplying*  the mesh's existing vertex colors. This allows for different color tinting per instance.  
         *      
         *  **Note:** Each component is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.  
         *  For the color to take effect, ensure that [member use_colors] is `true` on the [MultiMesh] and [member BaseMaterial3D.vertex_color_use_as_albedo] is `true` on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white (`Color(1, 1, 1)`).  
         */
        setInstanceColor(instance: int64, color: Color): void
        
        /** Gets a specific instance's color multiplier. */
        getInstanceColor(instance: int64): Color
        
        /** Sets custom data for a specific instance. [param custom_data] is a [Color] type only to contain 4 floating-point numbers.  
         *      
         *  **Note:** Each number is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.  
         *  For the custom data to be used, ensure that [member use_custom_data] is `true`.  
         *  This custom instance data has to be manually accessed in your custom shader using `INSTANCE_CUSTOM`.  
         */
        setInstanceCustomData(instance: int64, customData: Color): void
        
        /** Returns the custom data that has been set for a specific instance. */
        getInstanceCustomData(instance: int64): Color
        
        /** When using  *physics interpolation* , this function allows you to prevent interpolation on an instance in the current physics tick.  
         *  This allows you to move instances instantaneously, and should usually be used when initially placing an instance such as a bullet to prevent graphical glitches.  
         */
        resetInstancePhysicsInterpolation(instance: int64): void
        
        /** Returns the visibility axis-aligned bounding box in local space. */
        getAabb(): Aabb
        
        /** An alternative to setting the [member buffer] property, which can be used with  *physics interpolation* . This method takes two arrays, and can set the data for the current and previous tick in one go. The renderer will automatically interpolate the data at each frame.  
         *  This is useful for situations where the order of instances may change from physics tick to tick, such as particle systems.  
         *  When the order of instances is coherent, the simpler alternative of setting [member buffer] can still be used with interpolation.  
         */
        setBufferInterpolated(bufferCurr: PackedFloat32Array | float32[], bufferPrev: PackedFloat32Array | float32[]): void
        
        /** Format of transform used to transform mesh, either 2D or 3D. */
        get transformFormat(): int64
        set transformFormat(value: int64)
        
        /** If `true`, the [MultiMesh] will use color data (see [method set_instance_color]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        get useColors(): boolean
        set useColors(value: boolean)
        
        /** If `true`, the [MultiMesh] will use custom data (see [method set_instance_custom_data]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        get useCustomData(): boolean
        set useCustomData(value: boolean)
        
        /** Custom AABB for this MultiMesh resource. Setting this manually prevents costly runtime AABB recalculations. */
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        
        /** Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.  
         *  By default, all instances are drawn but you can limit this with [member visible_instance_count].  
         */
        get instanceCount(): int64
        set instanceCount(value: int64)
        
        /** Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers. */
        get visibleInstanceCount(): int64
        set visibleInstanceCount(value: int64)
        
        /** [Mesh] resource to be instanced.  
         *  The looks of the individual instances can be modified using [method set_instance_color] and [method set_instance_custom_data].  
         */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        get buffer(): PackedFloat32Array
        set buffer(value: PackedFloat32Array | float32[])
        
        /** Array containing each [Transform3D] value used by all instances of this mesh, as a [PackedVector3Array]. Each transform is divided into 4 [Vector3] values corresponding to the transforms' `x`, `y`, `z`, and `origin`. */
        get transformArray(): PackedVector3Array
        set transformArray(value: PackedVector3Array | Vector3[])
        
        /** Array containing each [Transform2D] value used by all instances of this mesh, as a [PackedVector2Array]. Each transform is divided into 3 [Vector2] values corresponding to the transforms' `x`, `y`, and `origin`. */
        get transform2DArray(): PackedVector2Array
        set transform2DArray(value: PackedVector2Array | Vector2[])
        
        /** Array containing each [Color] used by all instances of this mesh. */
        get colorArray(): PackedColorArray
        set colorArray(value: PackedColorArray | Color[])
        
        /** Array containing each custom data value used by all instances of this mesh, as a [PackedColorArray]. */
        get customDataArray(): PackedColorArray
        set customDataArray(value: PackedColorArray | Color[])
        
        /** Choose whether to use an interpolation method that favors speed or quality.  
         *  When using low physics tick rates (typically below 20) or high rates of object rotation, you may get better results from the high quality setting.  
         *      
         *  **Note:** Fast quality does not equate to low quality. Except in the special cases mentioned above, the quality should be comparable to high quality.  
         */
        get physicsInterpolationQuality(): int64
        set physicsInterpolationQuality(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiMeshInstance2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiMeshInstance2D extends __NameMapNode2D {
        texture_changed: "textureChanged";
    }
    /** Node that instances a [MultiMesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_multimeshinstance2d.html  
     */
    class MultiMeshInstance2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [MultiMesh] that will be drawn by the [MultiMeshInstance2D]. */
        get multimesh(): null | MultiMesh
        set multimesh(value: null | MultiMesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Emitted when the [member texture] is changed. */
        readonly textureChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiMeshInstance2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiMeshInstance2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiMeshInstance3D extends __RPCMapGeometryInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiMeshInstance3D extends __NameMapGeometryInstance3D {
    }
    /** Node that instances a [MultiMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_multimeshinstance3d.html  
     */
    class MultiMeshInstance3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        /** The [MultiMesh] resource that will be used and shared among all instances of the [MultiMeshInstance3D]. */
        get multimesh(): null | MultiMesh
        set multimesh(value: null | MultiMesh)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiMeshInstance3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiMeshInstance3D;
    }
    namespace MultiplayerApi {
        enum RpcMode {
            RpcModeDisabled = 0,
            RpcModeAnyPeer = 1,
            RpcModeAuthority = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiplayerApi extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiplayerApi extends __NameMapRefCounted {
        has_multiplayer_peer: "hasMultiplayerPeer";
        get_unique_id: "getUniqueId";
        is_server: "isServer";
        get_remote_sender_id: "getRemoteSenderId";
        object_configuration_add: "objectConfigurationAdd";
        object_configuration_remove: "objectConfigurationRemove";
        get_peers: "getPeers";
        set_default_interface: "setDefaultInterface";
        get_default_interface: "getDefaultInterface";
        create_default_interface: "createDefaultInterface";
        multiplayer_peer: "multiplayerPeer";
        peer_connected: "peerConnected";
        peer_disconnected: "peerDisconnected";
        connected_to_server: "connectedToServer";
        connection_failed: "connectionFailed";
        server_disconnected: "serverDisconnected";
    }
    class MultiplayerApi extends RefCounted {
        constructor(identifier?: any)
        hasMultiplayerPeer(): boolean
        getUniqueId(): int64
        isServer(): boolean
        getRemoteSenderId(): int64
        poll(): GError
        rpc(peer: int64, object: GObject, method: StringName, arguments_?: GArray): GError
        objectConfigurationAdd(object: GObject, configuration: any): GError
        objectConfigurationRemove(object: GObject, configuration: any): GError
        getPeers(): PackedInt32Array
        static setDefaultInterface(interfaceName: StringName): void
        static getDefaultInterface(): StringName
        static createDefaultInterface(): MultiplayerApi
        get multiplayerPeer(): null | MultiplayerPeer
        set multiplayerPeer(value: null | MultiplayerPeer)
        readonly peerConnected: Signal<(id: int64) => void>
        readonly peerDisconnected: Signal<(id: int64) => void>
        readonly connectedToServer: Signal<() => void>
        readonly connectionFailed: Signal<() => void>
        readonly serverDisconnected: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiplayerApi;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiplayerApi;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiplayerApiExtension extends __RPCMapMultiplayerApi {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiplayerApiExtension extends __NameMapMultiplayerApi {
        _set_multiplayer_peer: "_setMultiplayerPeer";
        _get_multiplayer_peer: "_getMultiplayerPeer";
        _get_unique_id: "_getUniqueId";
        _get_peer_ids: "_getPeerIds";
        _get_remote_sender_id: "_getRemoteSenderId";
        _object_configuration_add: "_objectConfigurationAdd";
        _object_configuration_remove: "_objectConfigurationRemove";
    }
    class MultiplayerApiExtension extends MultiplayerApi {
        constructor(identifier?: any)
        /* gdvirtual */ _poll(): GError
        /* gdvirtual */ _setMultiplayerPeer(multiplayerPeer: MultiplayerPeer): void
        /* gdvirtual */ _getMultiplayerPeer(): null | MultiplayerPeer
        /* gdvirtual */ _getUniqueId(): int64
        /* gdvirtual */ _getPeerIds(): PackedInt32Array
        /* gdvirtual */ _rpc(peer: int64, object: GObject, method: StringName, args: GArray): GError
        /* gdvirtual */ _getRemoteSenderId(): int64
        /* gdvirtual */ _objectConfigurationAdd(object: GObject, configuration: any): GError
        /* gdvirtual */ _objectConfigurationRemove(object: GObject, configuration: any): GError
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiplayerApiExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiplayerApiExtension;
    }
    namespace MultiplayerPeer {
        enum ConnectionStatus {
            ConnectionDisconnected = 0,
            ConnectionConnecting = 1,
            ConnectionConnected = 2,
        }
        enum TransferMode {
            TransferModeUnreliable = 0,
            TransferModeUnreliableOrdered = 1,
            TransferModeReliable = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiplayerPeer extends __RPCMapPacketPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiplayerPeer extends __NameMapPacketPeer {
        set_target_peer: "setTargetPeer";
        get_packet_peer: "getPacketPeer";
        get_packet_channel: "getPacketChannel";
        get_packet_mode: "getPacketMode";
        disconnect_peer: "disconnectPeer";
        get_connection_status: "getConnectionStatus";
        get_unique_id: "getUniqueId";
        generate_unique_id: "generateUniqueId";
        is_server_relay_supported: "isServerRelaySupported";
        refuse_new_connections: "refuseNewConnections";
        transfer_mode: "transferMode";
        transfer_channel: "transferChannel";
        peer_connected: "peerConnected";
        peer_disconnected: "peerDisconnected";
    }
    /** Abstract class for specialized [PacketPeer]s used by the [MultiplayerAPI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_multiplayerpeer.html  
     */
    class MultiplayerPeer extends PacketPeer {
        /** Packets are sent to all connected peers. */
        static readonly TARGET_PEER_BROADCAST = 0
        
        /** Packets are sent to the remote peer acting as server. */
        static readonly TARGET_PEER_SERVER = 1
        constructor(identifier?: any)
        
        /** Sets the peer to which packets will be sent.  
         *  The [param id] can be one of: [constant TARGET_PEER_BROADCAST] to send to all connected peers, [constant TARGET_PEER_SERVER] to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is [constant TARGET_PEER_BROADCAST].  
         */
        setTargetPeer(id: int64): void
        
        /** Returns the ID of the [MultiplayerPeer] who sent the next available packet. See [method PacketPeer.get_available_packet_count]. */
        getPacketPeer(): int64
        
        /** Returns the channel over which the next available packet was received. See [method PacketPeer.get_available_packet_count]. */
        getPacketChannel(): int64
        
        /** Returns the transfer mode the remote peer used to send the next available packet. See [method PacketPeer.get_available_packet_count]. */
        getPacketMode(): MultiplayerPeer.TransferMode
        
        /** Waits up to 1 second to receive a new network event. */
        poll(): void
        
        /** Immediately close the multiplayer peer returning to the state [constant CONNECTION_DISCONNECTED]. Connected peers will be dropped without emitting [signal peer_disconnected]. */
        close(): void
        
        /** Disconnects the given [param peer] from this host. If [param force] is `true` the [signal peer_disconnected] signal will not be emitted for this peer. */
        disconnectPeer(peer: int64, force?: boolean /* = false */): void
        
        /** Returns the current state of the connection. */
        getConnectionStatus(): MultiplayerPeer.ConnectionStatus
        
        /** Returns the ID of this [MultiplayerPeer]. */
        getUniqueId(): int64
        
        /** Returns a randomly generated integer that can be used as a network unique ID. */
        generateUniqueId(): int64
        
        /** Returns `true` if the server can act as a relay in the current configuration. That is, if the higher level [MultiplayerAPI] should notify connected clients of other peers, and implement a relay protocol to allow communication between them. */
        isServerRelaySupported(): boolean
        
        /** If `true`, this [MultiplayerPeer] refuses new connections. */
        get refuseNewConnections(): boolean
        set refuseNewConnections(value: boolean)
        
        /** The manner in which to send packets to the target peer. See the [method set_target_peer] method. */
        get transferMode(): int64
        set transferMode(value: int64)
        
        /** The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send **different and independent** state updates is a common way to optimize network usage and decrease latency in fast-paced games.  
         *      
         *  **Note:** The default channel (`0`) actually works as 3 separate channels (one for each [enum TransferMode]) so that [constant TRANSFER_MODE_RELIABLE] and [constant TRANSFER_MODE_UNRELIABLE_ORDERED] does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.  
         */
        get transferChannel(): int64
        set transferChannel(value: int64)
        
        /** Emitted when a remote peer connects. */
        readonly peerConnected: Signal<(id: int64) => void>
        
        /** Emitted when a remote peer has disconnected. */
        readonly peerDisconnected: Signal<(id: int64) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiplayerPeer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiplayerPeer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiplayerPeerExtension extends __RPCMapMultiplayerPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiplayerPeerExtension extends __NameMapMultiplayerPeer {
        _get_packet: "_getPacket";
        _put_packet: "_putPacket";
        _get_available_packet_count: "_getAvailablePacketCount";
        _get_max_packet_size: "_getMaxPacketSize";
        _get_packet_script: "_getPacketScript";
        _put_packet_script: "_putPacketScript";
        _get_packet_channel: "_getPacketChannel";
        _get_packet_mode: "_getPacketMode";
        _set_transfer_channel: "_setTransferChannel";
        _get_transfer_channel: "_getTransferChannel";
        _set_transfer_mode: "_setTransferMode";
        _get_transfer_mode: "_getTransferMode";
        _set_target_peer: "_setTargetPeer";
        _get_packet_peer: "_getPacketPeer";
        _is_server: "_isServer";
        _disconnect_peer: "_disconnectPeer";
        _get_unique_id: "_getUniqueId";
        _set_refuse_new_connections: "_setRefuseNewConnections";
        _is_refusing_new_connections: "_isRefusingNewConnections";
        _is_server_relay_supported: "_isServerRelaySupported";
        _get_connection_status: "_getConnectionStatus";
    }
    /** Class that can be inherited to implement custom multiplayer API networking layers via GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_multiplayerpeerextension.html  
     */
    class MultiplayerPeerExtension extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Called when a packet needs to be received by the [MultiplayerAPI], with [param r_buffer_size] being the size of the binary [param r_buffer] in bytes. */
        /* gdvirtual */ _getPacket(rBuffer: int64, rBufferSize: int64): GError
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], with [param p_buffer_size] being the size of the binary [param p_buffer] in bytes. */
        /* gdvirtual */ _putPacket(pBuffer: int64, pBufferSize: int64): GError
        
        /** Called when the available packet count is internally requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _getAvailablePacketCount(): int64
        
        /** Called when the maximum allowed packet size (in bytes) is requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _getMaxPacketSize(): int64
        
        /** Called when a packet needs to be received by the [MultiplayerAPI], if [method _get_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _getPacketScript(): PackedByteArray
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], if [method _put_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _putPacketScript(pBuffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Called to get the channel over which the next available packet was received. See [method MultiplayerPeer.get_packet_channel]. */
        /* gdvirtual */ _getPacketChannel(): int64
        
        /** Called to get the transfer mode the remote peer used to send the next available packet. See [method MultiplayerPeer.get_packet_mode]. */
        /* gdvirtual */ _getPacketMode(): MultiplayerPeer.TransferMode
        
        /** Called when the channel to use is set for this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _setTransferChannel(pChannel: int64): void
        
        /** Called when the transfer channel to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _getTransferChannel(): int64
        
        /** Called when the transfer mode is set on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _setTransferMode(pMode: MultiplayerPeer.TransferMode): void
        
        /** Called when the transfer mode to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _getTransferMode(): MultiplayerPeer.TransferMode
        
        /** Called when the target peer to use is set for this [MultiplayerPeer] (see [method MultiplayerPeer.set_target_peer]). */
        /* gdvirtual */ _setTargetPeer(pPeer: int64): void
        
        /** Called when the ID of the [MultiplayerPeer] who sent the most recent packet is requested (see [method MultiplayerPeer.get_packet_peer]). */
        /* gdvirtual */ _getPacketPeer(): int64
        
        /** Called when the "is server" status is requested on the [MultiplayerAPI]. See [method MultiplayerAPI.is_server]. */
        /* gdvirtual */ _isServer(): boolean
        
        /** Called when the [MultiplayerAPI] is polled. See [method MultiplayerAPI.poll]. */
        /* gdvirtual */ _poll(): void
        
        /** Called when the multiplayer peer should be immediately closed (see [method MultiplayerPeer.close]). */
        /* gdvirtual */ _close(): void
        
        /** Called when the connected [param p_peer] should be forcibly disconnected (see [method MultiplayerPeer.disconnect_peer]). */
        /* gdvirtual */ _disconnectPeer(pPeer: int64, pForce: boolean): void
        
        /** Called when the unique ID of this [MultiplayerPeer] is requested (see [method MultiplayerPeer.get_unique_id]). The value must be between `1` and `2147483647`. */
        /* gdvirtual */ _getUniqueId(): int64
        
        /** Called when the "refuse new connections" status is set on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _setRefuseNewConnections(pEnable: boolean): void
        
        /** Called when the "refuse new connections" status is requested on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _isRefusingNewConnections(): boolean
        
        /** Called to check if the server can act as a relay in the current configuration. See [method MultiplayerPeer.is_server_relay_supported]. */
        /* gdvirtual */ _isServerRelaySupported(): boolean
        
        /** Called when the connection status is requested on the [MultiplayerPeer] (see [method MultiplayerPeer.get_connection_status]). */
        /* gdvirtual */ _getConnectionStatus(): MultiplayerPeer.ConnectionStatus
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiplayerPeerExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiplayerPeerExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiplayerSpawner extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiplayerSpawner extends __NameMapNode {
        add_spawnable_scene: "addSpawnableScene";
        get_spawnable_scene_count: "getSpawnableSceneCount";
        get_spawnable_scene: "getSpawnableScene";
        clear_spawnable_scenes: "clearSpawnableScenes";
        _spawnable_scenes: "_spawnableScenes";
        spawn_path: "spawnPath";
        spawn_limit: "spawnLimit";
        spawn_function: "spawnFunction";
    }
    /** Automatically replicates spawnable nodes from the authority to other multiplayer peers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_multiplayerspawner.html  
     */
    class MultiplayerSpawner<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Adds a scene path to spawnable scenes, making it automatically replicated from the multiplayer authority to other peers when added as children of the node pointed by [member spawn_path]. */
        addSpawnableScene(path: string): void
        
        /** Returns the count of spawnable scene paths. */
        getSpawnableSceneCount(): int64
        
        /** Returns the spawnable scene path by index. */
        getSpawnableScene(index: int64): string
        
        /** Clears all spawnable scenes. Does not despawn existing instances on remote peers. */
        clearSpawnableScenes(): void
        
        /** Requests a custom spawn, with [param data] passed to [member spawn_function] on all peers. Returns the locally spawned node instance already inside the scene tree, and added as a child of the node pointed by [member spawn_path].  
         *      
         *  **Note:** Spawnable scenes are spawned automatically. [method spawn] is only needed for custom spawns.  
         */
        spawn(data?: any /* = {} */): null | Node
        get _spawnableScenes(): PackedStringArray
        set _spawnableScenes(value: PackedStringArray | string[])
        
        /** Path to the spawn root. Spawnable scenes that are added as direct children are replicated to other peers. */
        get spawnPath(): NodePath
        set spawnPath(value: NodePath | string)
        
        /** Maximum number of nodes allowed to be spawned by this spawner. Includes both spawnable scenes and custom spawns.  
         *  When set to `0` (the default), there is no limit.  
         */
        get spawnLimit(): int64
        set spawnLimit(value: int64)
        
        /** Method called on all peers when a custom [method spawn] is requested by the authority. Will receive the `data` parameter, and should return a [Node] that is not in the scene tree.  
         *      
         *  **Note:** The returned node should **not** be added to the scene with [method Node.add_child]. This is done automatically.  
         */
        get spawnFunction(): Callable
        set spawnFunction(value: Callable)
        
        /** Emitted when a spawnable scene or custom spawn was despawned by the multiplayer authority. Only called on remote peers. */
        readonly despawned: Signal<(node: Node) => void>
        
        /** Emitted when a spawnable scene or custom spawn was spawned by the multiplayer authority. Only called on remote peers. */
        readonly spawned: Signal<(node: Node) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiplayerSpawner;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiplayerSpawner;
    }
    namespace MultiplayerSynchronizer {
        enum VisibilityUpdateMode {
            VisibilityProcessIdle = 0,
            VisibilityProcessPhysics = 1,
            VisibilityProcessNone = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMultiplayerSynchronizer extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMultiplayerSynchronizer extends __NameMapNode {
        update_visibility: "updateVisibility";
        add_visibility_filter: "addVisibilityFilter";
        remove_visibility_filter: "removeVisibilityFilter";
        set_visibility_for: "setVisibilityFor";
        get_visibility_for: "getVisibilityFor";
        root_path: "rootPath";
        replication_interval: "replicationInterval";
        delta_interval: "deltaInterval";
        replication_config: "replicationConfig";
        visibility_update_mode: "visibilityUpdateMode";
        public_visibility: "publicVisibility";
        delta_synchronized: "deltaSynchronized";
        visibility_changed: "visibilityChanged";
    }
    /** Synchronizes properties from the multiplayer authority to the remote peers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_multiplayersynchronizer.html  
     */
    class MultiplayerSynchronizer<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Updates the visibility of [param for_peer] according to visibility filters. If [param for_peer] is `0` (the default), all peers' visibilties are updated. */
        updateVisibility(forPeer?: int64 /* = 0 */): void
        
        /** Adds a peer visibility filter for this synchronizer.  
         *  [param filter] should take a peer ID [int] and return a [bool].  
         */
        addVisibilityFilter(filter: Callable): void
        
        /** Removes a peer visibility filter from this synchronizer. */
        removeVisibilityFilter(filter: Callable): void
        
        /** Sets the visibility of [param peer] to [param visible]. If [param peer] is `0`, the value of [member public_visibility] will be updated instead. */
        setVisibilityFor(peer: int64, visible: boolean): void
        
        /** Queries the current visibility for peer [param peer]. */
        getVisibilityFor(peer: int64): boolean
        
        /** Node path that replicated properties are relative to.  
         *  If [member root_path] was spawned by a [MultiplayerSpawner], the node will be also be spawned and despawned based on this synchronizer visibility options.  
         */
        get rootPath(): NodePath
        set rootPath(value: NodePath | string)
        
        /** Time interval between synchronizations. Used when the replication is set to [constant SceneReplicationConfig.REPLICATION_MODE_ALWAYS]. If set to `0.0` (the default), synchronizations happen every network process frame. */
        get replicationInterval(): float64
        set replicationInterval(value: float64)
        
        /** Time interval between delta synchronizations. Used when the replication is set to [constant SceneReplicationConfig.REPLICATION_MODE_ON_CHANGE]. If set to `0.0` (the default), delta synchronizations happen every network process frame. */
        get deltaInterval(): float64
        set deltaInterval(value: float64)
        
        /** Resource containing which properties to synchronize. */
        get replicationConfig(): null | SceneReplicationConfig
        set replicationConfig(value: null | SceneReplicationConfig)
        
        /** Specifies when visibility filters are updated. */
        get visibilityUpdateMode(): int64
        set visibilityUpdateMode(value: int64)
        
        /** Whether synchronization should be visible to all peers by default. See [method set_visibility_for] and [method add_visibility_filter] for ways of configuring fine-grained visibility options. */
        get publicVisibility(): boolean
        set publicVisibility(value: boolean)
        
        /** Emitted when a new synchronization state is received by this synchronizer after the properties have been updated. */
        readonly synchronized: Signal<() => void>
        
        /** Emitted when a new delta synchronization state is received by this synchronizer after the properties have been updated. */
        readonly deltaSynchronized: Signal<() => void>
        
        /** Emitted when visibility of [param for_peer] is updated. See [method update_visibility]. */
        readonly visibilityChanged: Signal<(forPeer: int64) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMultiplayerSynchronizer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMultiplayerSynchronizer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapMutex extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapMutex extends __NameMapRefCounted {
        try_lock: "tryLock";
    }
    /** A binary [Semaphore] for synchronization of multiple [Thread]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_mutex.html  
     */
    class Mutex extends RefCounted {
        constructor(identifier?: any)
        /** Locks this [Mutex], blocks until it is unlocked by the current owner.  
         *      
         *  **Note:** This function returns without blocking if the thread already has ownership of the mutex.  
         */
        lock(): void
        
        /** Tries locking this [Mutex], but does not block. Returns `true` on success, `false` otherwise.  
         *      
         *  **Note:** This function returns `true` if the thread already has ownership of the mutex.  
         */
        tryLock(): boolean
        
        /** Unlocks this [Mutex], leaving it to other threads.  
         *      
         *  **Note:** If a thread called [method lock] or [method try_lock] multiple times while already having ownership of the mutex, it must also call [method unlock] the same number of times in order to unlock it correctly.  
         *  **Warning:** Calling [method unlock] more times that [method lock] on a given thread, thus ending up trying to unlock a non-locked mutex, is wrong and may causes crashes or deadlocks.  
         */
        unlock(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapMutex;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapMutex;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationAgent2D extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationAgent2D extends __NameMapNode {
        get_rid: "getRid";
        set_navigation_layer_value: "setNavigationLayerValue";
        get_navigation_layer_value: "getNavigationLayerValue";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        get_path_length: "getPathLength";
        get_next_path_position: "getNextPathPosition";
        set_velocity_forced: "setVelocityForced";
        distance_to_target: "distanceToTarget";
        get_current_navigation_result: "getCurrentNavigationResult";
        get_current_navigation_path: "getCurrentNavigationPath";
        get_current_navigation_path_index: "getCurrentNavigationPathIndex";
        is_target_reached: "isTargetReached";
        is_target_reachable: "isTargetReachable";
        is_navigation_finished: "isNavigationFinished";
        get_final_position: "getFinalPosition";
        _avoidance_done: "_avoidanceDone";
        set_avoidance_layer_value: "setAvoidanceLayerValue";
        get_avoidance_layer_value: "getAvoidanceLayerValue";
        set_avoidance_mask_value: "setAvoidanceMaskValue";
        get_avoidance_mask_value: "getAvoidanceMaskValue";
        target_position: "targetPosition";
        path_desired_distance: "pathDesiredDistance";
        target_desired_distance: "targetDesiredDistance";
        path_max_distance: "pathMaxDistance";
        navigation_layers: "navigationLayers";
        pathfinding_algorithm: "pathfindingAlgorithm";
        path_postprocessing: "pathPostprocessing";
        path_metadata_flags: "pathMetadataFlags";
        simplify_path: "simplifyPath";
        simplify_epsilon: "simplifyEpsilon";
        path_return_max_length: "pathReturnMaxLength";
        path_return_max_radius: "pathReturnMaxRadius";
        path_search_max_polygons: "pathSearchMaxPolygons";
        path_search_max_distance: "pathSearchMaxDistance";
        avoidance_enabled: "avoidanceEnabled";
        neighbor_distance: "neighborDistance";
        max_neighbors: "maxNeighbors";
        time_horizon_agents: "timeHorizonAgents";
        time_horizon_obstacles: "timeHorizonObstacles";
        max_speed: "maxSpeed";
        avoidance_layers: "avoidanceLayers";
        avoidance_mask: "avoidanceMask";
        avoidance_priority: "avoidancePriority";
        debug_enabled: "debugEnabled";
        debug_use_custom: "debugUseCustom";
        debug_path_custom_color: "debugPathCustomColor";
        debug_path_custom_point_size: "debugPathCustomPointSize";
        debug_path_custom_line_width: "debugPathCustomLineWidth";
        path_changed: "pathChanged";
        target_reached: "targetReached";
        waypoint_reached: "waypointReached";
        link_reached: "linkReached";
        navigation_finished: "navigationFinished";
        velocity_computed: "velocityComputed";
    }
    /** A 2D agent used to pathfind to a position while avoiding obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationagent2d.html  
     */
    class NavigationAgent2D<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this agent on the [NavigationServer2D]. */
        getRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the `agent` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Returns the length of the currently calculated path. The returned value is `0.0`, if the path is still calculating or no calculation has been requested yet. */
        getPathLength(): float64
        
        /** Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent. */
        getNextPathPosition(): Vector2
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        setVelocityForced(velocity: Vector2): void
        
        /** Returns the distance to the target position, using the agent's global position. The user must set [member target_position] in order for this to be accurate. */
        distanceToTarget(): float64
        
        /** Returns the path query result for the path the agent is currently following. */
        getCurrentNavigationResult(): null | NavigationPathQueryResult2D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        getCurrentNavigationPath(): PackedVector2Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector2Array]. */
        getCurrentNavigationPathIndex(): int64
        
        /** Returns `true` if the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position]. */
        isTargetReached(): boolean
        
        /** Returns `true` if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        isTargetReachable(): boolean
        
        /** Returns `true` if the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached.  
         *      
         *  **Note:** While `true` prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.  
         */
        isNavigationFinished(): boolean
        
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        getFinalPosition(): Vector2
        _avoidanceDone(newVelocity: Vector2): void
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        setAvoidanceMaskValue(maskNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        getAvoidanceMaskValue(maskNumber: int64): boolean
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to it leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot the distance to the next point on each physics frame update. */
        get pathDesiredDistance(): float64
        set pathDesiredDistance(value: float64)
        
        /** The distance threshold before the target is considered to be reached. On reaching the target, [signal target_reached] is emitted and navigation ends (see [method is_navigation_finished] and [signal navigation_finished]).  
         *  You can make navigation end early by setting this property to a value greater than [member path_desired_distance] (navigation will end before reaching the last waypoint).  
         *  You can also make navigation end closer to the target than each individual path position by setting this property to a value lower than [member path_desired_distance] (navigation won't immediately end when reaching the last waypoint). However, if the value set is too low, the agent will be stuck in a repath loop because it will constantly overshoot the distance to the target on each physics frame update.  
         */
        get targetDesiredDistance(): float64
        set targetDesiredDistance(value: float64)
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        get pathMaxDistance(): float64
        set pathMaxDistance(value: float64)
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to return with the navigation path. */
        get pathMetadataFlags(): int64
        set pathMetadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** The maximum allowed length of the returned path in world units. A path will be clipped when going over this length. */
        get pathReturnMaxLength(): float64
        set pathReturnMaxLength(value: float64)
        
        /** The maximum allowed radius in world units that the returned path can be from the path start. The path will be clipped when going over this radius. Compared to [member path_return_max_length], this allows the agent to go that much further, if they need to walk around a corner.  
         *      
         *  **Note:** This will perform a sphere clip considering only the actual navigation mesh path points with the first path position being the sphere's center.  
         */
        get pathReturnMaxRadius(): float64
        set pathReturnMaxRadius(value: float64)
        
        /** The maximum number of polygons that are searched before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxPolygons(): int64
        set pathSearchMaxPolygons(value: int64)
        
        /** The maximum distance a searched polygon can be away from the start polygon before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxDistance(): float64
        set pathSearchMaxDistance(value: float64)
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer2D]. When [member velocity] is used and the processing is completed a `safe_velocity` Vector2 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationPolygon] resources with a different [member NavigationPolygon.agent_radius] property and use different navigation maps for each actor size.  
         */
        get radius(): float64
        set radius(value: float64)
        
        /** The distance to search for other agents. */
        get neighborDistance(): float64
        set neighborDistance(value: float64)
        
        /** The maximum number of neighbors for the agent to consider. */
        get maxNeighbors(): int64
        set maxNeighbors(value: int64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonAgents(): float64
        set timeHorizonAgents(value: float64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonObstacles(): float64
        set timeHorizonObstacles(value: float64)
        
        /** The maximum speed that an agent can move. */
        get maxSpeed(): float64
        set maxSpeed(value: float64)
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        get avoidanceMask(): int64
        set avoidanceMask(value: int64)
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        get avoidancePriority(): float64
        set avoidancePriority(value: float64)
        
        /** If `true` shows debug visuals for this agent. */
        get debugEnabled(): boolean
        set debugEnabled(value: boolean)
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        get debugUseCustom(): boolean
        set debugUseCustom(value: boolean)
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        get debugPathCustomColor(): Color
        set debugPathCustomColor(value: Color)
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        get debugPathCustomPointSize(): float64
        set debugPathCustomPointSize(value: float64)
        
        /** If [member debug_use_custom] is `true` uses this line width for rendering paths for this agent instead of global line width. */
        get debugPathCustomLineWidth(): float64
        set debugPathCustomLineWidth(value: float64)
        
        /** Emitted when the agent had to update the loaded path:  
         *  - because path was previously empty.  
         *  - because navigation map has changed.  
         *  - because agent pushed further away from the current path segment than the [member path_max_distance].  
         */
        readonly pathChanged: Signal<() => void>
        
        /** Signals that the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just before [signal navigation_finished] when the target is reachable.  
         *  It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position].  
         */
        readonly targetReached: Signal<() => void>
        
        /** Signals that the agent reached a waypoint. Emitted when the agent moves within [member path_desired_distance] of the next position of the path.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The position of the waypoint that was reached.  
         *  - `type`: The type of navigation primitive (region or link) that contains this waypoint.  
         *  - `rid`: The [RID] of the containing navigation primitive (region or link).  
         *  - `owner`: The object which manages the containing navigation primitive (region or link).  
         */
        readonly waypointReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent reached a navigation link. Emitted when the agent moves within [member path_desired_distance] of the next position of the path when that position is a navigation link.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The start position of the link that was reached.  
         *  - `type`: Always [constant NavigationPathQueryResult2D.PATH_SEGMENT_TYPE_LINK].  
         *  - `rid`: The [RID] of the link.  
         *  - `owner`: The object which manages the link (usually [NavigationLink2D]).  
         *  - `link_entry_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point the agent is entering.  
         *  - `link_exit_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point which the agent is exiting.  
         */
        readonly linkReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just after [signal target_reached] when the target is reachable.  
         */
        readonly navigationFinished: Signal<() => void>
        
        /** Notifies when the collision avoidance velocity is calculated. Emitted every update as long as [member avoidance_enabled] is `true` and the agent has a navigation map. */
        readonly velocityComputed: Signal<(safeVelocity: Vector2) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationAgent2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationAgent2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationAgent3D extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationAgent3D extends __NameMapNode {
        get_rid: "getRid";
        set_navigation_layer_value: "setNavigationLayerValue";
        get_navigation_layer_value: "getNavigationLayerValue";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        get_path_length: "getPathLength";
        get_next_path_position: "getNextPathPosition";
        set_velocity_forced: "setVelocityForced";
        distance_to_target: "distanceToTarget";
        get_current_navigation_result: "getCurrentNavigationResult";
        get_current_navigation_path: "getCurrentNavigationPath";
        get_current_navigation_path_index: "getCurrentNavigationPathIndex";
        is_target_reached: "isTargetReached";
        is_target_reachable: "isTargetReachable";
        is_navigation_finished: "isNavigationFinished";
        get_final_position: "getFinalPosition";
        _avoidance_done: "_avoidanceDone";
        set_avoidance_layer_value: "setAvoidanceLayerValue";
        get_avoidance_layer_value: "getAvoidanceLayerValue";
        set_avoidance_mask_value: "setAvoidanceMaskValue";
        get_avoidance_mask_value: "getAvoidanceMaskValue";
        target_position: "targetPosition";
        path_desired_distance: "pathDesiredDistance";
        target_desired_distance: "targetDesiredDistance";
        path_height_offset: "pathHeightOffset";
        path_max_distance: "pathMaxDistance";
        navigation_layers: "navigationLayers";
        pathfinding_algorithm: "pathfindingAlgorithm";
        path_postprocessing: "pathPostprocessing";
        path_metadata_flags: "pathMetadataFlags";
        simplify_path: "simplifyPath";
        simplify_epsilon: "simplifyEpsilon";
        path_return_max_length: "pathReturnMaxLength";
        path_return_max_radius: "pathReturnMaxRadius";
        path_search_max_polygons: "pathSearchMaxPolygons";
        path_search_max_distance: "pathSearchMaxDistance";
        avoidance_enabled: "avoidanceEnabled";
        neighbor_distance: "neighborDistance";
        max_neighbors: "maxNeighbors";
        time_horizon_agents: "timeHorizonAgents";
        time_horizon_obstacles: "timeHorizonObstacles";
        max_speed: "maxSpeed";
        use_3d_avoidance: "use3DAvoidance";
        keep_y_velocity: "keepYVelocity";
        avoidance_layers: "avoidanceLayers";
        avoidance_mask: "avoidanceMask";
        avoidance_priority: "avoidancePriority";
        debug_enabled: "debugEnabled";
        debug_use_custom: "debugUseCustom";
        debug_path_custom_color: "debugPathCustomColor";
        debug_path_custom_point_size: "debugPathCustomPointSize";
        path_changed: "pathChanged";
        target_reached: "targetReached";
        waypoint_reached: "waypointReached";
        link_reached: "linkReached";
        navigation_finished: "navigationFinished";
        velocity_computed: "velocityComputed";
    }
    /** A 3D agent used to pathfind to a position while avoiding obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationagent3d.html  
     */
    class NavigationAgent3D<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this agent on the [NavigationServer3D]. */
        getRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the `agent` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Returns the length of the currently calculated path. The returned value is `0.0`, if the path is still calculating or no calculation has been requested yet. */
        getPathLength(): float64
        
        /** Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent. */
        getNextPathPosition(): Vector3
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        setVelocityForced(velocity: Vector3): void
        
        /** Returns the distance to the target position, using the agent's global position. The user must set [member target_position] in order for this to be accurate. */
        distanceToTarget(): float64
        
        /** Returns the path query result for the path the agent is currently following. */
        getCurrentNavigationResult(): null | NavigationPathQueryResult3D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        getCurrentNavigationPath(): PackedVector3Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector3Array]. */
        getCurrentNavigationPathIndex(): int64
        
        /** Returns `true` if the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position]. */
        isTargetReached(): boolean
        
        /** Returns `true` if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        isTargetReachable(): boolean
        
        /** Returns `true` if the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached.  
         *      
         *  **Note:** While `true` prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.  
         */
        isNavigationFinished(): boolean
        
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        getFinalPosition(): Vector3
        _avoidanceDone(newVelocity: Vector3): void
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        setAvoidanceMaskValue(maskNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        getAvoidanceMaskValue(maskNumber: int64): boolean
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to it leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot the distance to the next point on each physics frame update. */
        get pathDesiredDistance(): float64
        set pathDesiredDistance(value: float64)
        
        /** The distance threshold before the target is considered to be reached. On reaching the target, [signal target_reached] is emitted and navigation ends (see [method is_navigation_finished] and [signal navigation_finished]).  
         *  You can make navigation end early by setting this property to a value greater than [member path_desired_distance] (navigation will end before reaching the last waypoint).  
         *  You can also make navigation end closer to the target than each individual path position by setting this property to a value lower than [member path_desired_distance] (navigation won't immediately end when reaching the last waypoint). However, if the value set is too low, the agent will be stuck in a repath loop because it will constantly overshoot the distance to the target on each physics frame update.  
         */
        get targetDesiredDistance(): float64
        set targetDesiredDistance(value: float64)
        
        /** The height offset is subtracted from the y-axis value of any vector path position for this NavigationAgent. The NavigationAgent height offset does not change or influence the navigation mesh or pathfinding query result. Additional navigation maps that use regions with navigation meshes that the developer baked with appropriate agent radius or height values are required to support different-sized agents. */
        get pathHeightOffset(): float64
        set pathHeightOffset(value: float64)
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        get pathMaxDistance(): float64
        set pathMaxDistance(value: float64)
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to return with the navigation path. */
        get pathMetadataFlags(): int64
        set pathMetadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** The maximum allowed length of the returned path in world units. A path will be clipped when going over this length. */
        get pathReturnMaxLength(): float64
        set pathReturnMaxLength(value: float64)
        
        /** The maximum allowed radius in world units that the returned path can be from the path start. The path will be clipped when going over this radius. Compared to [member path_return_max_length], this allows the agent to go that much further, if they need to walk around a corner.  
         *      
         *  **Note:** This will perform a sphere clip considering only the actual navigation mesh path points with the first path position being the sphere's center.  
         */
        get pathReturnMaxRadius(): float64
        set pathReturnMaxRadius(value: float64)
        
        /** The maximum number of polygons that are searched before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxPolygons(): int64
        set pathSearchMaxPolygons(value: int64)
        
        /** The maximum distance a searched polygon can be away from the start polygon before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxDistance(): float64
        set pathSearchMaxDistance(value: float64)
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer3D]. When [member velocity] is set and the processing is completed a `safe_velocity` Vector3 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** The height of the avoidance agent. Agents will ignore other agents or obstacles that are above or below their current position + height in 2D avoidance. Does nothing in 3D avoidance which uses radius spheres alone. */
        get height(): float64
        set height(value: float64)
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.  
         */
        get radius(): float64
        set radius(value: float64)
        
        /** The distance to search for other agents. */
        get neighborDistance(): float64
        set neighborDistance(value: float64)
        
        /** The maximum number of neighbors for the agent to consider. */
        get maxNeighbors(): int64
        set maxNeighbors(value: int64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonAgents(): float64
        set timeHorizonAgents(value: float64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonObstacles(): float64
        set timeHorizonObstacles(value: float64)
        
        /** The maximum speed that an agent can move. */
        get maxSpeed(): float64
        set maxSpeed(value: float64)
        
        /** If `true`, the agent calculates avoidance velocities in 3D omnidirectionally, e.g. for games that take place in air, underwater or space. Agents using 3D avoidance only avoid other agents using 3D avoidance, and react to radius-based avoidance obstacles. They ignore any vertex-based obstacles.  
         *  If `false`, the agent calculates avoidance velocities in 2D along the x and z-axes, ignoring the y-axis. Agents using 2D avoidance only avoid other agents using 2D avoidance, and react to radius-based avoidance obstacles or vertex-based avoidance obstacles. Other agents using 2D avoidance that are below or above their current position including [member height] are ignored.  
         */
        get use3DAvoidance(): boolean
        set use3DAvoidance(value: boolean)
        
        /** If `true`, and the agent uses 2D avoidance, it will remember the set y-axis velocity and reapply it after the avoidance step. While 2D avoidance has no y-axis and simulates on a flat plane this setting can help to soften the most obvious clipping on uneven 3D geometry. */
        get keepYVelocity(): boolean
        set keepYVelocity(value: boolean)
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        get avoidanceMask(): int64
        set avoidanceMask(value: int64)
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        get avoidancePriority(): float64
        set avoidancePriority(value: float64)
        
        /** If `true` shows debug visuals for this agent. */
        get debugEnabled(): boolean
        set debugEnabled(value: boolean)
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        get debugUseCustom(): boolean
        set debugUseCustom(value: boolean)
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        get debugPathCustomColor(): Color
        set debugPathCustomColor(value: Color)
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        get debugPathCustomPointSize(): float64
        set debugPathCustomPointSize(value: float64)
        
        /** Emitted when the agent had to update the loaded path:  
         *  - because path was previously empty.  
         *  - because navigation map has changed.  
         *  - because agent pushed further away from the current path segment than the [member path_max_distance].  
         */
        readonly pathChanged: Signal<() => void>
        
        /** Signals that the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just before [signal navigation_finished] when the target is reachable.  
         *  It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position].  
         */
        readonly targetReached: Signal<() => void>
        
        /** Signals that the agent reached a waypoint. Emitted when the agent moves within [member path_desired_distance] of the next position of the path.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The position of the waypoint that was reached.  
         *  - `type`: The type of navigation primitive (region or link) that contains this waypoint.  
         *  - `rid`: The [RID] of the containing navigation primitive (region or link).  
         *  - `owner`: The object which manages the containing navigation primitive (region or link).  
         */
        readonly waypointReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent reached a navigation link. Emitted when the agent moves within [member path_desired_distance] of the next position of the path when that position is a navigation link.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The start position of the link that was reached.  
         *  - `type`: Always [constant NavigationPathQueryResult3D.PATH_SEGMENT_TYPE_LINK].  
         *  - `rid`: The [RID] of the link.  
         *  - `owner`: The object which manages the link (usually [NavigationLink3D]).  
         *  - `link_entry_position`: If `owner` is available and the owner is a [NavigationLink3D], it will contain the global position of the link's point the agent is entering.  
         *  - `link_exit_position`: If `owner` is available and the owner is a [NavigationLink3D], it will contain the global position of the link's point which the agent is exiting.  
         */
        readonly linkReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just after [signal target_reached] when the target is reachable.  
         */
        readonly navigationFinished: Signal<() => void>
        
        /** Notifies when the collision avoidance velocity is calculated. Emitted every update as long as [member avoidance_enabled] is `true` and the agent has a navigation map. */
        readonly velocityComputed: Signal<(safeVelocity: Vector3) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationAgent3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationAgent3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationLink2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationLink2D extends __NameMapNode2D {
        get_rid: "getRid";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        set_navigation_layer_value: "setNavigationLayerValue";
        get_navigation_layer_value: "getNavigationLayerValue";
        set_global_start_position: "setGlobalStartPosition";
        get_global_start_position: "getGlobalStartPosition";
        set_global_end_position: "setGlobalEndPosition";
        get_global_end_position: "getGlobalEndPosition";
        navigation_layers: "navigationLayers";
        start_position: "startPosition";
        end_position: "endPosition";
        enter_cost: "enterCost";
        travel_cost: "travelCost";
    }
    /** A link between two positions on [NavigationRegion2D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationlink2d.html  
     */
    class NavigationLink2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this link on the [NavigationServer2D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this link should use. By default the link will automatically join the [World2D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this link. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [member start_position] that is relative to the link from a global [param position]. */
        setGlobalStartPosition(position: Vector2): void
        
        /** Returns the [member start_position] that is relative to the link as a global position. */
        getGlobalStartPosition(): Vector2
        
        /** Sets the [member end_position] that is relative to the link from a global [param position]. */
        setGlobalEndPosition(position: Vector2): void
        
        /** Returns the [member end_position] that is relative to the link as a global position. */
        getGlobalEndPosition(): Vector2
        
        /** Whether this link is currently active. If `false`, [method NavigationServer2D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer2D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        get startPosition(): Vector2
        set startPosition(value: Vector2)
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        get endPosition(): Vector2
        set endPosition(value: Vector2)
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationLink2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationLink2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationLink3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationLink3D extends __NameMapNode3D {
        get_rid: "getRid";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        set_navigation_layer_value: "setNavigationLayerValue";
        get_navigation_layer_value: "getNavigationLayerValue";
        set_global_start_position: "setGlobalStartPosition";
        get_global_start_position: "getGlobalStartPosition";
        set_global_end_position: "setGlobalEndPosition";
        get_global_end_position: "getGlobalEndPosition";
        navigation_layers: "navigationLayers";
        start_position: "startPosition";
        end_position: "endPosition";
        enter_cost: "enterCost";
        travel_cost: "travelCost";
    }
    /** A link between two positions on [NavigationRegion3D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationlink3d.html  
     */
    class NavigationLink3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this link on the [NavigationServer3D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this link should use. By default the link will automatically join the [World3D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this link. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [member start_position] that is relative to the link from a global [param position]. */
        setGlobalStartPosition(position: Vector3): void
        
        /** Returns the [member start_position] that is relative to the link as a global position. */
        getGlobalStartPosition(): Vector3
        
        /** Sets the [member end_position] that is relative to the link from a global [param position]. */
        setGlobalEndPosition(position: Vector3): void
        
        /** Returns the [member end_position] that is relative to the link as a global position. */
        getGlobalEndPosition(): Vector3
        
        /** Whether this link is currently active. If `false`, [method NavigationServer3D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer3D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        get startPosition(): Vector3
        set startPosition(value: Vector3)
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        get endPosition(): Vector3
        set endPosition(value: Vector3)
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationLink3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationLink3D;
    }
    namespace NavigationMesh {
        enum SamplePartitionType {
            SamplePartitionWatershed = 0,
            SamplePartitionMonotone = 1,
            SamplePartitionLayers = 2,
            SamplePartitionMax = 3,
        }
        enum ParsedGeometryType {
            ParsedGeometryMeshInstances = 0,
            ParsedGeometryStaticColliders = 1,
            ParsedGeometryBoth = 2,
            ParsedGeometryMax = 3,
        }
        enum SourceGeometryMode {
            SourceGeometryRootNodeChildren = 0,
            SourceGeometryGroupsWithChildren = 1,
            SourceGeometryGroupsExplicit = 2,
            SourceGeometryMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationMesh extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationMesh extends __NameMapResource {
        set_collision_mask_value: "setCollisionMaskValue";
        get_collision_mask_value: "getCollisionMaskValue";
        add_polygon: "addPolygon";
        get_polygon_count: "getPolygonCount";
        get_polygon: "getPolygon";
        clear_polygons: "clearPolygons";
        create_from_mesh: "createFromMesh";
        sample_partition_type: "samplePartitionType";
        geometry_parsed_geometry_type: "geometryParsedGeometryType";
        geometry_collision_mask: "geometryCollisionMask";
        geometry_source_geometry_mode: "geometrySourceGeometryMode";
        geometry_source_group_name: "geometrySourceGroupName";
        cell_size: "cellSize";
        cell_height: "cellHeight";
        border_size: "borderSize";
        agent_height: "agentHeight";
        agent_radius: "agentRadius";
        agent_max_climb: "agentMaxClimb";
        agent_max_slope: "agentMaxSlope";
        region_min_size: "regionMinSize";
        region_merge_size: "regionMergeSize";
        edge_max_length: "edgeMaxLength";
        edge_max_error: "edgeMaxError";
        vertices_per_polygon: "verticesPerPolygon";
        detail_sample_distance: "detailSampleDistance";
        detail_sample_max_error: "detailSampleMaxError";
        filter_low_hanging_obstacles: "filterLowHangingObstacles";
        filter_ledge_spans: "filterLedgeSpans";
        filter_walkable_low_height_spans: "filterWalkableLowHeightSpans";
        filter_baking_aabb: "filterBakingAabb";
        filter_baking_aabb_offset: "filterBakingAabbOffset";
    }
    /** A navigation mesh that defines traversable areas and obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationmesh.html  
     */
    class NavigationMesh extends Resource {
        constructor(identifier?: any)
        /** Based on [param value], enables or disables the specified layer in the [member geometry_collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member geometry_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
        addPolygon(polygon: PackedInt32Array | int32[]): void
        
        /** Returns the number of polygons in the navigation mesh. */
        getPolygonCount(): int64
        
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        getPolygon(idx: int64): PackedInt32Array
        
        /** Clears the array of polygons, but it doesn't clear the array of vertices. */
        clearPolygons(): void
        
        /** Initializes the navigation mesh by setting the vertices and indices according to a [Mesh].  
         *      
         *  **Note:** The given [param mesh] must be of type [constant Mesh.PRIMITIVE_TRIANGLES] and have an index array.  
         */
        createFromMesh(mesh: Mesh): void
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        get polygons(): GArray
        set polygons(value: GArray)
        
        /** Partitioning algorithm for creating the navigation mesh polys. */
        get samplePartitionType(): int64
        set samplePartitionType(value: int64)
        
        /** Determines which type of nodes will be parsed as geometry. */
        get geometryParsedGeometryType(): int64
        set geometryParsedGeometryType(value: int64)
        
        /** The physics layers to scan for static colliders.  
         *  Only used when [member geometry_parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].  
         */
        get geometryCollisionMask(): int64
        set geometryCollisionMask(value: int64)
        
        /** The source of the geometry used when baking. */
        get geometrySourceGeometryMode(): int64
        set geometrySourceGeometryMode(value: int64)
        
        /** The name of the group to scan for geometry.  
         *  Only used when [member geometry_source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].  
         */
        get geometrySourceGroupName(): string
        set geometrySourceGroupName(value: string)
        
        /** The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map. */
        get cellSize(): float64
        set cellSize(value: float64)
        
        /** The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map. */
        get cellHeight(): float64
        set cellHeight(value: float64)
        
        /** The size of the non-navigable border around the bake bounding area.  
         *  In conjunction with the [member filter_baking_aabb] and a [member edge_max_error] value at `1.0` or below the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by [member agent_radius].  
         *      
         *  **Note:** If this value is not `0.0`, it will be rounded up to the nearest multiple of [member cell_size] during baking.  
         */
        get borderSize(): float64
        set borderSize(value: float64)
        
        /** The minimum floor to ceiling height that will still allow the floor area to be considered walkable.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_height].  
         */
        get agentHeight(): float64
        set agentHeight(value: float64)
        
        /** The distance to erode/shrink the walkable area of the heightfield away from obstructions.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         *      
         *  **Note:** The radius must be equal or higher than `0.0`. If the radius is `0.0`, it won't be possible to fix invalid outline overlaps and other precision errors during the baking process. As a result, some obstacles may be excluded incorrectly from the final navigation mesh, or may delete the navigation mesh's polygons.  
         */
        get agentRadius(): float64
        set agentRadius(value: float64)
        
        /** The minimum ledge height that is considered to still be traversable.  
         *      
         *  **Note:** While baking, this value will be rounded down to the nearest multiple of [member cell_height].  
         */
        get agentMaxClimb(): float64
        set agentMaxClimb(value: float64)
        
        /** The maximum slope that is considered walkable, in degrees. */
        get agentMaxSlope(): float64
        set agentMaxSlope(value: float64)
        
        /** The minimum size of a region for it to be created.  
         *      
         *  **Note:** This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.  
         */
        get regionMinSize(): float64
        set regionMinSize(value: float64)
        
        /** Any regions with a size smaller than this will be merged with larger regions if possible.  
         *      
         *  **Note:** This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.  
         */
        get regionMergeSize(): float64
        set regionMergeSize(value: float64)
        
        /** The maximum allowed length for contour edges along the border of the mesh. A value of `0.0` disables this feature.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        get edgeMaxLength(): float64
        set edgeMaxLength(value: float64)
        
        /** The maximum distance a simplified contour's border edges should deviate the original raw contour. */
        get edgeMaxError(): float64
        set edgeMaxError(value: float64)
        
        /** The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process. */
        get verticesPerPolygon(): float64
        set verticesPerPolygon(value: float64)
        
        /** The sampling distance to use when generating the detail mesh, in cell unit. */
        get detailSampleDistance(): float64
        set detailSampleDistance(value: float64)
        
        /** The maximum distance the detail mesh surface should deviate from heightfield, in cell unit. */
        get detailSampleMaxError(): float64
        set detailSampleMaxError(value: float64)
        
        /** If `true`, marks non-walkable spans as walkable if their maximum is within [member agent_max_climb] of a walkable neighbor. */
        get filterLowHangingObstacles(): boolean
        set filterLowHangingObstacles(value: boolean)
        
        /** If `true`, marks spans that are ledges as non-walkable. */
        get filterLedgeSpans(): boolean
        set filterLedgeSpans(value: boolean)
        
        /** If `true`, marks walkable spans as not walkable if the clearance above the span is less than [member agent_height]. */
        get filterWalkableLowHeightSpans(): boolean
        set filterWalkableLowHeightSpans(value: boolean)
        
        /** If the baking [AABB] has a volume the navigation mesh baking will be restricted to its enclosing area. */
        get filterBakingAabb(): Aabb
        set filterBakingAabb(value: Aabb)
        
        /** The position offset applied to the [member filter_baking_aabb] [AABB]. */
        get filterBakingAabbOffset(): Vector3
        set filterBakingAabbOffset(value: Vector3)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationMeshSourceGeometryData2D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationMeshSourceGeometryData2D extends __NameMapResource {
        has_data: "hasData";
        append_traversable_outlines: "appendTraversableOutlines";
        append_obstruction_outlines: "appendObstructionOutlines";
        add_traversable_outline: "addTraversableOutline";
        add_obstruction_outline: "addObstructionOutline";
        add_projected_obstruction: "addProjectedObstruction";
        clear_projected_obstructions: "clearProjectedObstructions";
        get_bounds: "getBounds";
        traversable_outlines: "traversableOutlines";
        obstruction_outlines: "obstructionOutlines";
        projected_obstructions: "projectedObstructions";
    }
    /** Container for parsed source geometry data used in navigation mesh baking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationmeshsourcegeometrydata2d.html  
     */
    class NavigationMeshSourceGeometryData2D extends Resource {
        constructor(identifier?: any)
        /** Clears the internal data. */
        clear(): void
        
        /** Returns `true` when parsed source geometry data exists. */
        hasData(): boolean
        
        /** Appends another array of [param traversable_outlines] at the end of the existing traversable outlines array. */
        appendTraversableOutlines(traversableOutlines: GArray<PackedVector2Array>): void
        
        /** Appends another array of [param obstruction_outlines] at the end of the existing obstruction outlines array. */
        appendObstructionOutlines(obstructionOutlines: GArray<PackedVector2Array>): void
        
        /** Adds the outline points of a shape as traversable area. */
        addTraversableOutline(shapeOutline: PackedVector2Array | Vector2[]): void
        
        /** Adds the outline points of a shape as obstructed area. */
        addObstructionOutline(shapeOutline: PackedVector2Array | Vector2[]): void
        
        /** Adds the geometry data of another [NavigationMeshSourceGeometryData2D] to the navigation mesh baking data. */
        merge(otherGeometry: NavigationMeshSourceGeometryData2D): void
        
        /** Adds a projected obstruction shape to the source geometry. If [param carve] is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process. */
        addProjectedObstruction(vertices: PackedVector2Array | Vector2[], carve: boolean): void
        
        /** Clears all projected obstructions. */
        clearProjectedObstructions(): void
        
        /** Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made. */
        getBounds(): Rect2
        get traversableOutlines(): GArray
        set traversableOutlines(value: GArray)
        get obstructionOutlines(): GArray
        set obstructionOutlines(value: GArray)
        get projectedObstructions(): GArray
        set projectedObstructions(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationMeshSourceGeometryData2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationMeshSourceGeometryData2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationMeshSourceGeometryData3D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationMeshSourceGeometryData3D extends __NameMapResource {
        append_arrays: "appendArrays";
        has_data: "hasData";
        add_mesh: "addMesh";
        add_mesh_array: "addMeshArray";
        add_faces: "addFaces";
        add_projected_obstruction: "addProjectedObstruction";
        clear_projected_obstructions: "clearProjectedObstructions";
        get_bounds: "getBounds";
        projected_obstructions: "projectedObstructions";
    }
    /** Container for parsed source geometry data used in navigation mesh baking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationmeshsourcegeometrydata3d.html  
     */
    class NavigationMeshSourceGeometryData3D extends Resource {
        constructor(identifier?: any)
        /** Appends arrays of [param vertices] and [param indices] at the end of the existing arrays. Adds the existing index as an offset to the appended indices. */
        appendArrays(vertices: PackedFloat32Array | float32[], indices: PackedInt32Array | int32[]): void
        
        /** Clears the internal data. */
        clear(): void
        
        /** Returns `true` when parsed source geometry data exists. */
        hasData(): boolean
        
        /** Adds the geometry data of a [Mesh] resource to the navigation mesh baking data. The mesh must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        addMesh(mesh: Mesh, xform: Transform3D): void
        
        /** Adds an [Array] the size of [constant Mesh.ARRAY_MAX] and with vertices at index [constant Mesh.ARRAY_VERTEX] and indices at index [constant Mesh.ARRAY_INDEX] to the navigation mesh baking data. The array must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        addMeshArray(meshArray: GArray, xform: Transform3D): void
        
        /** Adds an array of vertex positions to the geometry data for navigation mesh baking to form triangulated faces. For each face the array must have three vertex positions in clockwise winding order. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        addFaces(faces: PackedVector3Array | Vector3[], xform: Transform3D): void
        
        /** Adds the geometry data of another [NavigationMeshSourceGeometryData3D] to the navigation mesh baking data. */
        merge(otherGeometry: NavigationMeshSourceGeometryData3D): void
        
        /** Adds a projected obstruction shape to the source geometry. The [param vertices] are considered projected on an xz-axes plane, placed at the global y-axis [param elevation] and extruded by [param height]. If [param carve] is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process. */
        addProjectedObstruction(vertices: PackedVector3Array | Vector3[], elevation: float64, height: float64, carve: boolean): void
        
        /** Clears all projected obstructions. */
        clearProjectedObstructions(): void
        
        /** Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made. */
        getBounds(): Aabb
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        get indices(): PackedInt32Array
        set indices(value: PackedInt32Array | int32[])
        get projectedObstructions(): GArray
        set projectedObstructions(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationMeshSourceGeometryData3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationMeshSourceGeometryData3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationObstacle2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationObstacle2D extends __NameMapNode2D {
        get_rid: "getRid";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        set_avoidance_layer_value: "setAvoidanceLayerValue";
        get_avoidance_layer_value: "getAvoidanceLayerValue";
        affect_navigation_mesh: "affectNavigationMesh";
        carve_navigation_mesh: "carveNavigationMesh";
        avoidance_enabled: "avoidanceEnabled";
        avoidance_layers: "avoidanceLayers";
    }
    /** 2D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationobstacle2d.html  
     */
    class NavigationObstacle2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this obstacle on the [NavigationServer2D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Sets the avoidance radius for the obstacle. */
        get radius(): float64
        set radius(value: float64)
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        get vertices(): PackedVector2Array
        set vertices(value: PackedVector2Array | Vector2[])
        
        /** If enabled and parsed in a navigation mesh baking process the obstacle will discard source geometry inside its [member vertices] defined shape. */
        get affectNavigationMesh(): boolean
        set affectNavigationMesh(value: boolean)
        
        /** If enabled the obstacle vertices will carve into the baked navigation mesh with the shape unaffected by additional offsets (e.g. agent radius).  
         *  It will still be affected by further postprocessing of the baking process, like edge and polygon simplification.  
         *  Requires [member affect_navigation_mesh] to be enabled.  
         */
        get carveNavigationMesh(): boolean
        set carveNavigationMesh(value: boolean)
        
        /** If `true` the obstacle affects avoidance using agents. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationObstacle2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationObstacle2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationObstacle3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationObstacle3D extends __NameMapNode3D {
        get_rid: "getRid";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        set_avoidance_layer_value: "setAvoidanceLayerValue";
        get_avoidance_layer_value: "getAvoidanceLayerValue";
        affect_navigation_mesh: "affectNavigationMesh";
        carve_navigation_mesh: "carveNavigationMesh";
        avoidance_enabled: "avoidanceEnabled";
        avoidance_layers: "avoidanceLayers";
        use_3d_avoidance: "use3DAvoidance";
    }
    /** 3D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationobstacle3d.html  
     */
    class NavigationObstacle3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this obstacle on the [NavigationServer3D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Sets the avoidance radius for the obstacle. */
        get radius(): float64
        set radius(value: float64)
        
        /** Sets the obstacle height used in 2D avoidance. 2D avoidance using agent's ignore obstacles that are below or above them. */
        get height(): float64
        set height(value: float64)
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        
        /** If enabled and parsed in a navigation mesh baking process the obstacle will discard source geometry inside its [member vertices] and [member height] defined shape. */
        get affectNavigationMesh(): boolean
        set affectNavigationMesh(value: boolean)
        
        /** If enabled the obstacle vertices will carve into the baked navigation mesh with the shape unaffected by additional offsets (e.g. agent radius).  
         *  It will still be affected by further postprocessing of the baking process, like edge and polygon simplification.  
         *  Requires [member affect_navigation_mesh] to be enabled.  
         */
        get carveNavigationMesh(): boolean
        set carveNavigationMesh(value: boolean)
        
        /** If `true` the obstacle affects avoidance using agents. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        
        /** If `true` the obstacle affects 3D avoidance using agent's with obstacle [member radius].  
         *  If `false` the obstacle affects 2D avoidance using agent's with both obstacle [member vertices] as well as obstacle [member radius].  
         */
        get use3DAvoidance(): boolean
        set use3DAvoidance(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationObstacle3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationObstacle3D;
    }
    namespace NavigationPathQueryParameters2D {
        enum PathfindingAlgorithm {
            PathfindingAlgorithmAstar = 0,
        }
        enum PathPostProcessing {
            PathPostprocessingCorridorfunnel = 0,
            PathPostprocessingEdgecentered = 1,
            PathPostprocessingNone = 2,
        }
        enum PathMetadataFlags {
            PathMetadataIncludeNone = 0,
            PathMetadataIncludeTypes = 1,
            PathMetadataIncludeRids = 2,
            PathMetadataIncludeOwners = 4,
            PathMetadataIncludeAll = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationPathQueryParameters2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationPathQueryParameters2D extends __NameMapRefCounted {
        start_position: "startPosition";
        target_position: "targetPosition";
        navigation_layers: "navigationLayers";
        pathfinding_algorithm: "pathfindingAlgorithm";
        path_postprocessing: "pathPostprocessing";
        metadata_flags: "metadataFlags";
        simplify_path: "simplifyPath";
        simplify_epsilon: "simplifyEpsilon";
        excluded_regions: "excludedRegions";
        included_regions: "includedRegions";
        path_return_max_length: "pathReturnMaxLength";
        path_return_max_radius: "pathReturnMaxRadius";
        path_search_max_polygons: "pathSearchMaxPolygons";
        path_search_max_distance: "pathSearchMaxDistance";
    }
    /** Provides parameters for 2D navigation path queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationpathqueryparameters2d.html  
     */
    class NavigationPathQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** The navigation map [RID] used in the path query. */
        get map(): Rid
        set map(value: Rid)
        
        /** The pathfinding start position in global coordinates. */
        get startPosition(): Vector2
        set startPosition(value: Vector2)
        
        /** The pathfinding target position in global coordinates. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The navigation layers the query will use (as a bitmask). */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to include with the navigation path. */
        get metadataFlags(): int64
        set metadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** The list of region [RID]s that will be excluded from the path query. Use [method NavigationRegion2D.get_rid] to get the [RID] associated with a [NavigationRegion2D] node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get excludedRegions(): GArray<Rid>
        set excludedRegions(value: GArray<Rid>)
        
        /** The list of region [RID]s that will be included by the path query. Use [method NavigationRegion2D.get_rid] to get the [RID] associated with a [NavigationRegion2D] node. If left empty all regions are included. If a region ends up being both included and excluded at the same time it will be excluded.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get includedRegions(): GArray<Rid>
        set includedRegions(value: GArray<Rid>)
        
        /** The maximum allowed length of the returned path in world units. A path will be clipped when going over this length. A value of `0` or below counts as disabled. */
        get pathReturnMaxLength(): float64
        set pathReturnMaxLength(value: float64)
        
        /** The maximum allowed radius in world units that the returned path can be from the path start. The path will be clipped when going over this radius. A value of `0` or below counts as disabled.  
         *      
         *  **Note:** This will perform a circle shaped clip operation on the path with the first path position being the circle's center position.  
         */
        get pathReturnMaxRadius(): float64
        set pathReturnMaxRadius(value: float64)
        
        /** The maximum number of polygons that are searched before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxPolygons(): int64
        set pathSearchMaxPolygons(value: int64)
        
        /** The maximum distance a searched polygon can be away from the start polygon before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxDistance(): float64
        set pathSearchMaxDistance(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationPathQueryParameters2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationPathQueryParameters2D;
    }
    namespace NavigationPathQueryParameters3D {
        enum PathfindingAlgorithm {
            PathfindingAlgorithmAstar = 0,
        }
        enum PathPostProcessing {
            PathPostprocessingCorridorfunnel = 0,
            PathPostprocessingEdgecentered = 1,
            PathPostprocessingNone = 2,
        }
        enum PathMetadataFlags {
            PathMetadataIncludeNone = 0,
            PathMetadataIncludeTypes = 1,
            PathMetadataIncludeRids = 2,
            PathMetadataIncludeOwners = 4,
            PathMetadataIncludeAll = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationPathQueryParameters3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationPathQueryParameters3D extends __NameMapRefCounted {
        start_position: "startPosition";
        target_position: "targetPosition";
        navigation_layers: "navigationLayers";
        pathfinding_algorithm: "pathfindingAlgorithm";
        path_postprocessing: "pathPostprocessing";
        metadata_flags: "metadataFlags";
        simplify_path: "simplifyPath";
        simplify_epsilon: "simplifyEpsilon";
        excluded_regions: "excludedRegions";
        included_regions: "includedRegions";
        path_return_max_length: "pathReturnMaxLength";
        path_return_max_radius: "pathReturnMaxRadius";
        path_search_max_polygons: "pathSearchMaxPolygons";
        path_search_max_distance: "pathSearchMaxDistance";
    }
    /** Provides parameters for 3D navigation path queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationpathqueryparameters3d.html  
     */
    class NavigationPathQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** The navigation map [RID] used in the path query. */
        get map(): Rid
        set map(value: Rid)
        
        /** The pathfinding start position in global coordinates. */
        get startPosition(): Vector3
        set startPosition(value: Vector3)
        
        /** The pathfinding target position in global coordinates. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The navigation layers the query will use (as a bitmask). */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to include with the navigation path. */
        get metadataFlags(): int64
        set metadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** The list of region [RID]s that will be excluded from the path query. Use [method NavigationRegion3D.get_rid] to get the [RID] associated with a [NavigationRegion3D] node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get excludedRegions(): GArray<Rid>
        set excludedRegions(value: GArray<Rid>)
        
        /** The list of region [RID]s that will be included by the path query. Use [method NavigationRegion3D.get_rid] to get the [RID] associated with a [NavigationRegion3D] node. If left empty all regions are included. If a region ends up being both included and excluded at the same time it will be excluded.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get includedRegions(): GArray<Rid>
        set includedRegions(value: GArray<Rid>)
        
        /** The maximum allowed length of the returned path in world units. A path will be clipped when going over this length. A value of `0` or below counts as disabled. */
        get pathReturnMaxLength(): float64
        set pathReturnMaxLength(value: float64)
        
        /** The maximum allowed radius in world units that the returned path can be from the path start. The path will be clipped when going over this radius. A value of `0` or below counts as disabled.  
         *      
         *  **Note:** This will perform a sphere shaped clip operation on the path with the first path position being the sphere's center position.  
         */
        get pathReturnMaxRadius(): float64
        set pathReturnMaxRadius(value: float64)
        
        /** The maximum number of polygons that are searched before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxPolygons(): int64
        set pathSearchMaxPolygons(value: int64)
        
        /** The maximum distance a searched polygon can be away from the start polygon before the pathfinding cancels the search for a path to the (possibly unreachable or very far away) target position polygon. In this case the pathfinding resets and builds a path from the start polygon to the polygon that was found closest to the target position so far. A value of `0` or below counts as unlimited. In case of unlimited the pathfinding will search all polygons connected with the start polygon until either the target position polygon is found or all available polygon search options are exhausted. */
        get pathSearchMaxDistance(): float64
        set pathSearchMaxDistance(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationPathQueryParameters3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationPathQueryParameters3D;
    }
    namespace NavigationPathQueryResult2D {
        enum PathSegmentType {
            PathSegmentTypeRegion = 0,
            PathSegmentTypeLink = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationPathQueryResult2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationPathQueryResult2D extends __NameMapRefCounted {
        path_types: "pathTypes";
        path_rids: "pathRids";
        path_owner_ids: "pathOwnerIds";
        path_length: "pathLength";
    }
    /** Represents the result of a 2D pathfinding query.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationpathqueryresult2d.html  
     */
    class NavigationPathQueryResult2D extends RefCounted {
        constructor(identifier?: any)
        /** Reset the result object to its initial state. This is useful to reuse the object across multiple queries. */
        reset(): void
        
        /** The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [method NavigationServer2D.map_get_path]. */
        get path(): PackedVector2Array
        set path(value: PackedVector2Array | Vector2[])
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        get pathTypes(): PackedInt32Array
        set pathTypes(value: PackedInt32Array | int32[])
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        get pathRids(): GArray<Rid>
        set pathRids(value: GArray<Rid>)
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        get pathOwnerIds(): PackedInt64Array
        set pathOwnerIds(value: PackedInt64Array | int64[])
        
        /** Returns the length of the path. */
        get pathLength(): float64
        set pathLength(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationPathQueryResult2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationPathQueryResult2D;
    }
    namespace NavigationPathQueryResult3D {
        enum PathSegmentType {
            PathSegmentTypeRegion = 0,
            PathSegmentTypeLink = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationPathQueryResult3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationPathQueryResult3D extends __NameMapRefCounted {
        path_types: "pathTypes";
        path_rids: "pathRids";
        path_owner_ids: "pathOwnerIds";
        path_length: "pathLength";
    }
    /** Represents the result of a 3D pathfinding query.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationpathqueryresult3d.html  
     */
    class NavigationPathQueryResult3D extends RefCounted {
        constructor(identifier?: any)
        /** Reset the result object to its initial state. This is useful to reuse the object across multiple queries. */
        reset(): void
        
        /** The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [method NavigationServer3D.map_get_path]. */
        get path(): PackedVector3Array
        set path(value: PackedVector3Array | Vector3[])
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        get pathTypes(): PackedInt32Array
        set pathTypes(value: PackedInt32Array | int32[])
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        get pathRids(): GArray<Rid>
        set pathRids(value: GArray<Rid>)
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        get pathOwnerIds(): PackedInt64Array
        set pathOwnerIds(value: PackedInt64Array | int64[])
        
        /** Returns the length of the path. */
        get pathLength(): float64
        set pathLength(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationPathQueryResult3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationPathQueryResult3D;
    }
    namespace NavigationPolygon {
        enum SamplePartitionType {
            SamplePartitionConvexPartition = 0,
            SamplePartitionTriangulate = 1,
            SamplePartitionMax = 2,
        }
        enum ParsedGeometryType {
            ParsedGeometryMeshInstances = 0,
            ParsedGeometryStaticColliders = 1,
            ParsedGeometryBoth = 2,
            ParsedGeometryMax = 3,
        }
        enum SourceGeometryMode {
            SourceGeometryRootNodeChildren = 0,
            SourceGeometryGroupsWithChildren = 1,
            SourceGeometryGroupsExplicit = 2,
            SourceGeometryMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationPolygon extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationPolygon extends __NameMapResource {
        add_polygon: "addPolygon";
        get_polygon_count: "getPolygonCount";
        get_polygon: "getPolygon";
        clear_polygons: "clearPolygons";
        get_navigation_mesh: "getNavigationMesh";
        add_outline: "addOutline";
        add_outline_at_index: "addOutlineAtIndex";
        get_outline_count: "getOutlineCount";
        set_outline: "setOutline";
        get_outline: "getOutline";
        remove_outline: "removeOutline";
        clear_outlines: "clearOutlines";
        make_polygons_from_outlines: "makePolygonsFromOutlines";
        set_parsed_collision_mask_value: "setParsedCollisionMaskValue";
        get_parsed_collision_mask_value: "getParsedCollisionMaskValue";
        sample_partition_type: "samplePartitionType";
        parsed_geometry_type: "parsedGeometryType";
        parsed_collision_mask: "parsedCollisionMask";
        source_geometry_mode: "sourceGeometryMode";
        source_geometry_group_name: "sourceGeometryGroupName";
        cell_size: "cellSize";
        border_size: "borderSize";
        agent_radius: "agentRadius";
        baking_rect: "bakingRect";
        baking_rect_offset: "bakingRectOffset";
    }
    /** A 2D navigation mesh that describes a traversable surface for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationpolygon.html  
     */
    class NavigationPolygon extends Resource {
        constructor(identifier?: any)
        /** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
        addPolygon(polygon: PackedInt32Array | int32[]): void
        
        /** Returns the count of all polygons. */
        getPolygonCount(): int64
        
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        getPolygon(idx: int64): PackedInt32Array
        
        /** Clears the array of polygons, but it doesn't clear the array of outlines and vertices. */
        clearPolygons(): void
        
        /** Returns the [NavigationMesh] resulting from this navigation polygon. This navigation mesh can be used to update the navigation mesh of a region with the [method NavigationServer3D.region_set_navigation_mesh] API directly. */
        getNavigationMesh(): null | NavigationMesh
        
        /** Appends a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines. */
        addOutline(outline: PackedVector2Array | Vector2[]): void
        
        /** Adds a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines at a fixed position. */
        addOutlineAtIndex(outline: PackedVector2Array | Vector2[], index: int64): void
        
        /** Returns the number of outlines that were created in the editor or by script. */
        getOutlineCount(): int64
        
        /** Changes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        setOutline(idx: int64, outline: PackedVector2Array | Vector2[]): void
        
        /** Returns a [PackedVector2Array] containing the vertices of an outline that was created in the editor or by script. */
        getOutline(idx: int64): PackedVector2Array
        
        /** Removes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        removeOutline(idx: int64): void
        
        /** Clears the array of the outlines, but it doesn't clear the vertices and the polygons that were created by them. */
        clearOutlines(): void
        
        /** Creates polygons from the outlines added in the editor or by script. */
        makePolygonsFromOutlines(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member parsed_collision_mask], given a [param layer_number] between 1 and 32. */
        setParsedCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member parsed_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getParsedCollisionMaskValue(layerNumber: int64): boolean
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        get vertices(): PackedVector2Array
        set vertices(value: PackedVector2Array | Vector2[])
        get polygons(): GArray
        set polygons(value: GArray)
        get outlines(): GArray
        set outlines(value: GArray)
        
        /** Partitioning algorithm for creating the navigation mesh polys. */
        get samplePartitionType(): int64
        set samplePartitionType(value: int64)
        
        /** Determines which type of nodes will be parsed as geometry. */
        get parsedGeometryType(): int64
        set parsedGeometryType(value: int64)
        
        /** The physics layers to scan for static colliders.  
         *  Only used when [member parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].  
         */
        get parsedCollisionMask(): int64
        set parsedCollisionMask(value: int64)
        
        /** The source of the geometry used when baking. */
        get sourceGeometryMode(): int64
        set sourceGeometryMode(value: int64)
        
        /** The group name of nodes that should be parsed for baking source geometry.  
         *  Only used when [member source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].  
         */
        get sourceGeometryGroupName(): string
        set sourceGeometryGroupName(value: string)
        
        /** The cell size used to rasterize the navigation mesh vertices. Must match with the cell size on the navigation map. */
        get cellSize(): float64
        set cellSize(value: float64)
        
        /** The size of the non-navigable border around the bake bounding area defined by the [member baking_rect] [Rect2].  
         *  In conjunction with the [member baking_rect] the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by [member agent_radius].  
         */
        get borderSize(): float64
        set borderSize(value: float64)
        
        /** The distance to erode/shrink the walkable surface when baking the navigation mesh.  
         *      
         *  **Note:** The radius must be equal or higher than `0.0`. If the radius is `0.0`, it won't be possible to fix invalid outline overlaps and other precision errors during the baking process. As a result, some obstacles may be excluded incorrectly from the final navigation mesh, or may delete the navigation mesh's polygons.  
         */
        get agentRadius(): float64
        set agentRadius(value: float64)
        
        /** If the baking [Rect2] has an area the navigation mesh baking will be restricted to its enclosing area. */
        get bakingRect(): Rect2
        set bakingRect(value: Rect2)
        
        /** The position offset applied to the [member baking_rect] [Rect2]. */
        get bakingRectOffset(): Vector2
        set bakingRectOffset(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationPolygon;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationPolygon;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationRegion2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationRegion2D extends __NameMapNode2D {
        get_rid: "getRid";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        set_navigation_layer_value: "setNavigationLayerValue";
        get_navigation_layer_value: "getNavigationLayerValue";
        get_region_rid: "getRegionRid";
        bake_navigation_polygon: "bakeNavigationPolygon";
        is_baking: "isBaking";
        _navigation_polygon_changed: "_navigationPolygonChanged";
        get_bounds: "getBounds";
        navigation_polygon: "navigationPolygon";
        use_edge_connections: "useEdgeConnections";
        navigation_layers: "navigationLayers";
        enter_cost: "enterCost";
        travel_cost: "travelCost";
        navigation_polygon_changed: "navigationPolygonChanged";
        bake_finished: "bakeFinished";
    }
    /** A traversable 2D region that [NavigationAgent2D]s can use for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationregion2d.html  
     */
    class NavigationRegion2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this region on the [NavigationServer2D]. Combined with [method NavigationServer2D.map_get_closest_point_owner] can be used to identify the [NavigationRegion2D] closest to a point on the merged navigation map. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World2D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this region. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Returns the [RID] of this region on the [NavigationServer2D]. */
        getRegionRid(): Rid
        
        /** Bakes the [NavigationPolygon]. If [param on_thread] is set to `true` (default), the baking is done on a separate thread. */
        bakeNavigationPolygon(onThread?: boolean /* = true */): void
        
        /** Returns `true` when the [NavigationPolygon] is being baked on a background thread. */
        isBaking(): boolean
        _navigationPolygonChanged(): void
        
        /** Returns the axis-aligned rectangle for the region's transformed navigation mesh. */
        getBounds(): Rect2
        
        /** The [NavigationPolygon] resource to use. */
        get navigationPolygon(): null | NavigationPolygon
        set navigationPolygon(value: null | NavigationPolygon)
        
        /** Determines if the [NavigationRegion2D] is enabled or disabled. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        get useEdgeConnections(): boolean
        set useEdgeConnections(value: boolean)
        
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer2D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
        
        /** Emitted when the used navigation polygon is replaced or changes to the internals of the current navigation polygon are committed. */
        readonly navigationPolygonChanged: Signal<() => void>
        
        /** Emitted when a navigation polygon bake operation is completed. */
        readonly bakeFinished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationRegion2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationRegion2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNavigationRegion3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNavigationRegion3D extends __NameMapNode3D {
        get_rid: "getRid";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        set_navigation_layer_value: "setNavigationLayerValue";
        get_navigation_layer_value: "getNavigationLayerValue";
        get_region_rid: "getRegionRid";
        bake_navigation_mesh: "bakeNavigationMesh";
        is_baking: "isBaking";
        get_bounds: "getBounds";
        navigation_mesh: "navigationMesh";
        use_edge_connections: "useEdgeConnections";
        navigation_layers: "navigationLayers";
        enter_cost: "enterCost";
        travel_cost: "travelCost";
        navigation_mesh_changed: "navigationMeshChanged";
        bake_finished: "bakeFinished";
    }
    /** A traversable 3D region that [NavigationAgent3D]s can use for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_navigationregion3d.html  
     */
    class NavigationRegion3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this region on the [NavigationServer3D]. Combined with [method NavigationServer3D.map_get_closest_point_owner] can be used to identify the [NavigationRegion3D] closest to a point on the merged navigation map. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World3D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this region. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Returns the [RID] of this region on the [NavigationServer3D]. */
        getRegionRid(): Rid
        
        /** Bakes the [NavigationMesh]. If [param on_thread] is set to `true` (default), the baking is done on a separate thread. Baking on separate thread is useful because navigation baking is not a cheap operation. When it is completed, it automatically sets the new [NavigationMesh]. Please note that baking on separate thread may be very slow if geometry is parsed from meshes as async access to each mesh involves heavy synchronization. Also, please note that baking on a separate thread is automatically disabled on operating systems that cannot use threads (such as Web with threads disabled). */
        bakeNavigationMesh(onThread?: boolean /* = true */): void
        
        /** Returns `true` when the [NavigationMesh] is being baked on a background thread. */
        isBaking(): boolean
        
        /** Returns the axis-aligned bounding box for the region's transformed navigation mesh. */
        getBounds(): Aabb
        
        /** The [NavigationMesh] resource to use. */
        get navigationMesh(): null | NavigationMesh
        set navigationMesh(value: null | NavigationMesh)
        
        /** Determines if the [NavigationRegion3D] is enabled or disabled. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        get useEdgeConnections(): boolean
        set useEdgeConnections(value: boolean)
        
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer3D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
        
        /** Notifies when the [NavigationMesh] has changed. */
        readonly navigationMeshChanged: Signal<() => void>
        
        /** Notifies when the navigation mesh bake operation is completed. */
        readonly bakeFinished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNavigationRegion3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNavigationRegion3D;
    }
    namespace NinePatchRect {
        enum AxisStretchMode {
            AxisStretchModeStretch = 0,
            AxisStretchModeTile = 1,
            AxisStretchModeTileFit = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNinePatchRect extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNinePatchRect extends __NameMapControl {
        set_patch_margin: "setPatchMargin";
        get_patch_margin: "getPatchMargin";
        draw_center: "drawCenter";
        region_rect: "regionRect";
        patch_margin_left: "patchMarginLeft";
        patch_margin_top: "patchMarginTop";
        patch_margin_right: "patchMarginRight";
        patch_margin_bottom: "patchMarginBottom";
        axis_stretch_horizontal: "axisStretchHorizontal";
        axis_stretch_vertical: "axisStretchVertical";
        texture_changed: "textureChanged";
    }
    /** A control that displays a texture by keeping its corners intact, but tiling its edges and center.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_ninepatchrect.html  
     */
    class NinePatchRect<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Sets the size of the margin on the specified [enum Side] to [param value] pixels. */
        setPatchMargin(margin: Side, value: int64): void
        
        /** Returns the size of the margin on the specified [enum Side]. */
        getPatchMargin(margin: Side): int64
        
        /** The node's texture resource. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** If `true`, draw the panel's center. Else, only draw the 9-slice's borders. */
        get drawCenter(): boolean
        set drawCenter(value: boolean)
        
        /** Rectangular region of the texture to sample from. If you're working with an atlas, use this property to define the area the 9-slice should use. All other properties are relative to this one. If the rect is empty, NinePatchRect will use the whole texture. */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** The width of the 9-slice's left column. A margin of 16 means the 9-slice's left corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginLeft(): int64
        set patchMarginLeft(value: int64)
        
        /** The height of the 9-slice's top row. A margin of 16 means the 9-slice's top corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginTop(): int64
        set patchMarginTop(value: int64)
        
        /** The width of the 9-slice's right column. A margin of 16 means the 9-slice's right corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginRight(): int64
        set patchMarginRight(value: int64)
        
        /** The height of the 9-slice's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginBottom(): int64
        set patchMarginBottom(value: int64)
        
        /** The stretch mode to use for horizontal stretching/tiling. */
        get axisStretchHorizontal(): int64
        set axisStretchHorizontal(value: int64)
        
        /** The stretch mode to use for vertical stretching/tiling. */
        get axisStretchVertical(): int64
        set axisStretchVertical(value: int64)
        
        /** Emitted when the node's texture changes. */
        readonly textureChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNinePatchRect;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNinePatchRect;
    }
    namespace Node {
        enum ProcessMode {
            ProcessModeInherit = 0,
            ProcessModePausable = 1,
            ProcessModeWhenPaused = 2,
            ProcessModeAlways = 3,
            ProcessModeDisabled = 4,
        }
        enum ProcessThreadGroup {
            ProcessThreadGroupInherit = 0,
            ProcessThreadGroupMainThread = 1,
            ProcessThreadGroupSubThread = 2,
        }
        enum ProcessThreadMessages {
            FlagProcessThreadMessages = 1,
            FlagProcessThreadMessagesPhysics = 2,
            FlagProcessThreadMessagesAll = 3,
        }
        enum PhysicsInterpolationMode {
            PhysicsInterpolationModeInherit = 0,
            PhysicsInterpolationModeOn = 1,
            PhysicsInterpolationModeOff = 2,
        }
        enum DuplicateFlags {
            DuplicateSignals = 1,
            DuplicateGroups = 2,
            DuplicateScripts = 4,
            DuplicateUseInstantiation = 8,
        }
        enum InternalMode {
            InternalModeDisabled = 0,
            InternalModeFront = 1,
            InternalModeBack = 2,
        }
        enum AutoTranslateMode {
            AutoTranslateModeInherit = 0,
            AutoTranslateModeAlways = 1,
            AutoTranslateModeDisabled = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNode extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNode extends __NameMapGObject {
        _physics_process: "_physicsProcess";
        _enter_tree: "_enterTree";
        _exit_tree: "_exitTree";
        _get_configuration_warnings: "_getConfigurationWarnings";
        _get_accessibility_configuration_warnings: "_getAccessibilityConfigurationWarnings";
        _shortcut_input: "_shortcutInput";
        _unhandled_input: "_unhandledInput";
        _unhandled_key_input: "_unhandledKeyInput";
        _get_focused_accessibility_element: "_getFocusedAccessibilityElement";
        print_orphan_nodes: "printOrphanNodes";
        get_orphan_node_ids: "getOrphanNodeIds";
        add_sibling: "addSibling";
        set_name: "setName";
        get_name: "getName";
        add_child: "addChild";
        remove_child: "removeChild";
        get_child_count: "getChildCount";
        get_children: "getChildren";
        get_child: "getChild";
        has_node: "hasNode";
        get_node: "getNode";
        get_node_or_null: "getNodeOrNull";
        get_parent: "getParent";
        find_child: "findChild";
        find_children: "findChildren";
        find_parent: "findParent";
        has_node_and_resource: "hasNodeAndResource";
        get_node_and_resource: "getNodeAndResource";
        is_inside_tree: "isInsideTree";
        is_part_of_edited_scene: "isPartOfEditedScene";
        is_ancestor_of: "isAncestorOf";
        is_greater_than: "isGreaterThan";
        get_path: "getPath";
        get_path_to: "getPathTo";
        add_to_group: "addToGroup";
        remove_from_group: "removeFromGroup";
        is_in_group: "isInGroup";
        move_child: "moveChild";
        get_groups: "getGroups";
        get_index: "getIndex";
        print_tree: "printTree";
        print_tree_pretty: "printTreePretty";
        get_tree_string: "getTreeString";
        get_tree_string_pretty: "getTreeStringPretty";
        propagate_notification: "propagateNotification";
        propagate_call: "propagateCall";
        set_physics_process: "setPhysicsProcess";
        get_physics_process_delta_time: "getPhysicsProcessDeltaTime";
        is_physics_processing: "isPhysicsProcessing";
        get_process_delta_time: "getProcessDeltaTime";
        set_process: "setProcess";
        is_processing: "isProcessing";
        set_process_input: "setProcessInput";
        is_processing_input: "isProcessingInput";
        set_process_shortcut_input: "setProcessShortcutInput";
        is_processing_shortcut_input: "isProcessingShortcutInput";
        set_process_unhandled_input: "setProcessUnhandledInput";
        is_processing_unhandled_input: "isProcessingUnhandledInput";
        set_process_unhandled_key_input: "setProcessUnhandledKeyInput";
        is_processing_unhandled_key_input: "isProcessingUnhandledKeyInput";
        can_process: "canProcess";
        queue_accessibility_update: "queueAccessibilityUpdate";
        get_accessibility_element: "getAccessibilityElement";
        set_display_folded: "setDisplayFolded";
        is_displayed_folded: "isDisplayedFolded";
        set_process_internal: "setProcessInternal";
        is_processing_internal: "isProcessingInternal";
        set_physics_process_internal: "setPhysicsProcessInternal";
        is_physics_processing_internal: "isPhysicsProcessingInternal";
        is_physics_interpolated: "isPhysicsInterpolated";
        is_physics_interpolated_and_enabled: "isPhysicsInterpolatedAndEnabled";
        reset_physics_interpolation: "resetPhysicsInterpolation";
        can_auto_translate: "canAutoTranslate";
        set_translation_domain_inherited: "setTranslationDomainInherited";
        get_window: "getWindow";
        get_last_exclusive_window: "getLastExclusiveWindow";
        get_tree: "getTree";
        create_tween: "createTween";
        replace_by: "replaceBy";
        set_scene_instance_load_placeholder: "setSceneInstanceLoadPlaceholder";
        get_scene_instance_load_placeholder: "getSceneInstanceLoadPlaceholder";
        set_editable_instance: "setEditableInstance";
        is_editable_instance: "isEditableInstance";
        get_viewport: "getViewport";
        queue_free: "queueFree";
        request_ready: "requestReady";
        is_node_ready: "isNodeReady";
        set_multiplayer_authority: "setMultiplayerAuthority";
        get_multiplayer_authority: "getMultiplayerAuthority";
        is_multiplayer_authority: "isMultiplayerAuthority";
        rpc_config: "rpcConfig";
        get_node_rpc_config: "getNodeRpcConfig";
        atr_n: "atrN";
        _set_property_pinned: "_setPropertyPinned";
        rpc_id: "rpcId";
        update_configuration_warnings: "updateConfigurationWarnings";
        call_deferred_thread_group: "callDeferredThreadGroup";
        set_deferred_thread_group: "setDeferredThreadGroup";
        notify_deferred_thread_group: "notifyDeferredThreadGroup";
        call_thread_safe: "callThreadSafe";
        set_thread_safe: "setThreadSafe";
        notify_thread_safe: "notifyThreadSafe";
        _import_path: "_importPath";
        unique_name_in_owner: "uniqueNameInOwner";
        scene_file_path: "sceneFilePath";
        process_mode: "processMode";
        process_priority: "processPriority";
        process_physics_priority: "processPhysicsPriority";
        process_thread_group: "processThreadGroup";
        process_thread_group_order: "processThreadGroupOrder";
        process_thread_messages: "processThreadMessages";
        physics_interpolation_mode: "physicsInterpolationMode";
        auto_translate_mode: "autoTranslateMode";
        editor_description: "editorDescription";
        tree_entered: "treeEntered";
        tree_exiting: "treeExiting";
        tree_exited: "treeExited";
        child_entered_tree: "childEnteredTree";
        child_exiting_tree: "childExitingTree";
        child_order_changed: "childOrderChanged";
        replacing_by: "replacingBy";
        editor_description_changed: "editorDescriptionChanged";
        editor_state_changed: "editorStateChanged";
    }
    namespace __PathMappableDummyKeys { const Node: unique symbol }
    /** Base class for all scene objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_node.html  
     */
    class Node<Map extends NodePathMap = any> extends GObject implements PathMappable<typeof __PathMappableDummyKeys.Node, Map> {
        [__PathMappableDummyKeys.Node]: Map
        /** Notification received when the node enters a [SceneTree]. See [method _enter_tree].  
         *  This notification is received  *before*  the related [signal tree_entered] signal.  
         */
        static readonly NOTIFICATION_ENTER_TREE = 10
        
        /** Notification received when the node is about to exit a [SceneTree]. See [method _exit_tree].  
         *  This notification is received  *after*  the related [signal tree_exiting] signal.  
         */
        static readonly NOTIFICATION_EXIT_TREE = 11
        static readonly NOTIFICATION_MOVED_IN_PARENT = 12
        
        /** Notification received when the node is ready. See [method _ready]. */
        static readonly NOTIFICATION_READY = 13
        
        /** Notification received when the node is paused. See [member process_mode]. */
        static readonly NOTIFICATION_PAUSED = 14
        
        /** Notification received when the node is unpaused. See [member process_mode]. */
        static readonly NOTIFICATION_UNPAUSED = 15
        
        /** Notification received from the tree every physics frame when [method is_physics_processing] returns `true`. See [method _physics_process]. */
        static readonly NOTIFICATION_PHYSICS_PROCESS = 16
        
        /** Notification received from the tree every rendered frame when [method is_processing] returns `true`. See [method _process]. */
        static readonly NOTIFICATION_PROCESS = 17
        
        /** Notification received when the node is set as a child of another node (see [method add_child] and [method add_sibling]).  
         *      
         *  **Note:** This does  *not*  mean that the node entered the [SceneTree].  
         */
        static readonly NOTIFICATION_PARENTED = 18
        
        /** Notification received when the parent node calls [method remove_child] on this node.  
         *      
         *  **Note:** This does  *not*  mean that the node exited the [SceneTree].  
         */
        static readonly NOTIFICATION_UNPARENTED = 19
        
        /** Notification received  *only*  by the newly instantiated scene root node, when [method PackedScene.instantiate] is completed. */
        static readonly NOTIFICATION_SCENE_INSTANTIATED = 20
        
        /** Notification received when a drag operation begins. All nodes receive this notification, not only the dragged one.  
         *  Can be triggered either by dragging a [Control] that provides drag data (see [method Control._get_drag_data]) or using [method Control.force_drag].  
         *  Use [method Viewport.gui_get_drag_data] to get the dragged data.  
         */
        static readonly NOTIFICATION_DRAG_BEGIN = 21
        
        /** Notification received when a drag operation ends.  
         *  Use [method Viewport.gui_is_drag_successful] to check if the drag succeeded.  
         */
        static readonly NOTIFICATION_DRAG_END = 22
        
        /** Notification received when the node's [member name] or one of its ancestors' [member name] is changed. This notification is  *not*  received when the node is removed from the [SceneTree]. */
        static readonly NOTIFICATION_PATH_RENAMED = 23
        
        /** Notification received when the list of children is changed. This happens when child nodes are added, moved or removed. */
        static readonly NOTIFICATION_CHILD_ORDER_CHANGED = 24
        
        /** Notification received from the tree every rendered frame when [method is_processing_internal] returns `true`. */
        static readonly NOTIFICATION_INTERNAL_PROCESS = 25
        
        /** Notification received from the tree every physics frame when [method is_physics_processing_internal] returns `true`. */
        static readonly NOTIFICATION_INTERNAL_PHYSICS_PROCESS = 26
        
        /** Notification received when the node enters the tree, just before [constant NOTIFICATION_READY] may be received. Unlike the latter, it is sent every time the node enters tree, not just once. */
        static readonly NOTIFICATION_POST_ENTER_TREE = 27
        
        /** Notification received when the node is disabled. See [constant PROCESS_MODE_DISABLED]. */
        static readonly NOTIFICATION_DISABLED = 28
        
        /** Notification received when the node is enabled again after being disabled. See [constant PROCESS_MODE_DISABLED]. */
        static readonly NOTIFICATION_ENABLED = 29
        
        /** Notification received when [method reset_physics_interpolation] is called on the node or its ancestors. */
        static readonly NOTIFICATION_RESET_PHYSICS_INTERPOLATION = 2001
        
        /** Notification received right before the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects. */
        static readonly NOTIFICATION_EDITOR_PRE_SAVE = 9001
        
        /** Notification received right after the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects. */
        static readonly NOTIFICATION_EDITOR_POST_SAVE = 9002
        
        /** Notification received when the mouse enters the window.  
         *  Implemented for embedded windows and on desktop and web platforms.  
         */
        static readonly NOTIFICATION_WM_MOUSE_ENTER = 1002
        
        /** Notification received when the mouse leaves the window.  
         *  Implemented for embedded windows and on desktop and web platforms.  
         */
        static readonly NOTIFICATION_WM_MOUSE_EXIT = 1003
        
        /** Notification received from the OS when the node's [Window] ancestor is focused. This may be a change of focus between two windows of the same engine instance, or from the OS desktop or a third-party application to a window of the game (in which case [constant NOTIFICATION_APPLICATION_FOCUS_IN] is also received).  
         *  A [Window] node receives this notification when it is focused.  
         */
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_IN = 1004
        
        /** Notification received from the OS when the node's [Window] ancestor is defocused. This may be a change of focus between two windows of the same engine instance, or from a window of the game to the OS desktop or a third-party application (in which case [constant NOTIFICATION_APPLICATION_FOCUS_OUT] is also received).  
         *  A [Window] node receives this notification when it is defocused.  
         */
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_OUT = 1005
        
        /** Notification received from the OS when a close request is sent (e.g. closing the window with a "Close" button or [kbd]Alt + F4[/kbd]).  
         *  Implemented on desktop platforms.  
         */
        static readonly NOTIFICATION_WM_CLOSE_REQUEST = 1006
        
        /** Notification received from the OS when a go back request is sent (e.g. pressing the "Back" button on Android).  
         *  Implemented only on Android.  
         */
        static readonly NOTIFICATION_WM_GO_BACK_REQUEST = 1007
        
        /** Notification received when the window is resized.  
         *      
         *  **Note:** Only the resized [Window] node receives this notification, and it's not propagated to the child nodes.  
         */
        static readonly NOTIFICATION_WM_SIZE_CHANGED = 1008
        
        /** Notification received from the OS when the screen's dots per inch (DPI) scale is changed. Only implemented on macOS. */
        static readonly NOTIFICATION_WM_DPI_CHANGE = 1009
        
        /** Notification received when the mouse cursor enters the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        static readonly NOTIFICATION_VP_MOUSE_ENTER = 1010
        
        /** Notification received when the mouse cursor leaves the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        static readonly NOTIFICATION_VP_MOUSE_EXIT = 1011
        
        /** Notification received when the window is moved. */
        static readonly NOTIFICATION_WM_POSITION_CHANGED = 1012
        
        /** Notification received from the OS when the application is exceeding its allocated memory.  
         *  Implemented only on iOS.  
         */
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        
        /** Notification received when translations may have changed. Can be triggered by the user changing the locale, changing [member auto_translate_mode] or when the node enters the scene tree. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [method Object.tr].  
         *      
         *  **Note:** This notification is received alongside [constant NOTIFICATION_ENTER_TREE], so if you are instantiating a scene, the child nodes will not be initialized yet. You can use it to setup translations for this node, child nodes created from script, or if you want to access child nodes added in the editor, make sure the node is ready using [method is_node_ready].  
         *    
         */
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        
        /** Notification received from the OS when a request for "About" information is sent.  
         *  Implemented only on macOS.  
         */
        static readonly NOTIFICATION_WM_ABOUT = 2011
        
        /** Notification received from Godot's crash handler when the engine is about to crash.  
         *  Implemented on desktop platforms, if the crash handler is enabled.  
         */
        static readonly NOTIFICATION_CRASH = 2012
        
        /** Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).  
         *  Implemented on desktop and web platforms.  
         */
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        
        /** Notification received from the OS when the application is resumed.  
         *  Specific to the Android and iOS platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        
        /** Notification received from the OS when the application is paused.  
         *  Specific to the Android and iOS platforms.  
         *      
         *  **Note:** On iOS, you only have approximately 5 seconds to finish a task started by this signal. If you go over this allotment, iOS will kill the app instead of pausing it.  
         */
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        
        /** Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        
        /** Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        
        /** Notification received when the [TextServer] is changed. */
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        
        /** Notification received when an accessibility information update is required. */
        static readonly NOTIFICATION_ACCESSIBILITY_UPDATE = 3000
        
        /** Notification received when accessibility elements are invalidated. All node accessibility elements are automatically deleted after receiving this message, therefore all existing references to such elements should be discarded. */
        static readonly NOTIFICATION_ACCESSIBILITY_INVALIDATE = 3001
        constructor(identifier?: any)
        
        /** Called on each idle frame, prior to rendering, and after physics ticks have been processed. [param delta] is the time between frames in seconds.  
         *  It is only called if processing is enabled for this Node, which is done automatically if this method is overridden, and can be toggled with [method set_process].  
         *  Processing happens in order of [member process_priority], lower priority values are called first. Nodes with the same priority are processed in tree order, or top to bottom as seen in the editor (also known as pre-order traversal).  
         *  Corresponds to the [constant NOTIFICATION_PROCESS] notification in [method Object._notification].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         *      
         *  **Note:** When the engine is struggling and the frame rate is lowered, [param delta] will increase. When [param delta] is increased, it's capped at a maximum of [member Engine.time_scale] * [member Engine.max_physics_steps_per_frame] / [member Engine.physics_ticks_per_second]. As a result, accumulated [param delta] may not represent real world time.  
         *      
         *  **Note:** When `--fixed-fps` is enabled or the engine is running in Movie Maker mode (see [MovieWriter]), process [param delta] will always be the same for every frame, regardless of how much time the frame took to render.  
         *      
         *  **Note:** Frame delta may be post-processed by [member OS.delta_smoothing] if this is enabled for the project.  
         */
        /* gdvirtual */ _process(delta: float64): void
        
        /** Called once on each physics tick, and allows Nodes to synchronize their logic with physics ticks. [param delta] is the logical time between physics ticks in seconds and is equal to [member Engine.time_scale] / [member Engine.physics_ticks_per_second].  
         *  It is only called if physics processing is enabled for this Node, which is done automatically if this method is overridden, and can be toggled with [method set_physics_process].  
         *  Processing happens in order of [member process_physics_priority], lower priority values are called first. Nodes with the same priority are processed in tree order, or top to bottom as seen in the editor (also known as pre-order traversal).  
         *  Corresponds to the [constant NOTIFICATION_PHYSICS_PROCESS] notification in [method Object._notification].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         *      
         *  **Note:** Accumulated [param delta] may diverge from real world seconds.  
         */
        /* gdvirtual */ _physicsProcess(delta: float64): void
        
        /** Called when the node enters the [SceneTree] (e.g. upon instantiating, scene changing, or after calling [method add_child] in a script). If the node has children, its [method _enter_tree] callback will be called first, and then that of the children.  
         *  Corresponds to the [constant NOTIFICATION_ENTER_TREE] notification in [method Object._notification].  
         */
        /* gdvirtual */ _enterTree(): void
        
        /** Called when the node is about to leave the [SceneTree] (e.g. upon freeing, scene changing, or after calling [method remove_child] in a script). If the node has children, its [method _exit_tree] callback will be called last, after all its children have left the tree.  
         *  Corresponds to the [constant NOTIFICATION_EXIT_TREE] notification in [method Object._notification] and signal [signal tree_exiting]. To get notified when the node has already left the active tree, connect to the [signal tree_exited].  
         */
        /* gdvirtual */ _exitTree(): void
        
        /** Called when the node is "ready", i.e. when both the node and its children have entered the scene tree. If the node has children, their [method _ready] callbacks get triggered first, and the parent node will receive the ready notification afterwards.  
         *  Corresponds to the [constant NOTIFICATION_READY] notification in [method Object._notification]. See also the `@onready` annotation for variables.  
         *  Usually used for initialization. For even earlier initialization, [method Object._init] may be used. See also [method _enter_tree].  
         *      
         *  **Note:** This method may be called only once for each node. After removing a node from the scene tree and adding it again, [method _ready] will **not** be called a second time. This can be bypassed by requesting another call with [method request_ready], which may be called anywhere before adding the node again.  
         */
        /* gdvirtual */ _ready(): void
        
        /** The elements in the array returned from this method are displayed as warnings in the Scene dock if the script that overrides it is a `tool` script.  
         *  Returning an empty array produces no warnings.  
         *  Call [method update_configuration_warnings] when the warnings need to be updated for this node.  
         *    
         */
        /* gdvirtual */ _getConfigurationWarnings(): PackedStringArray
        
        /** The elements in the array returned from this method are displayed as warnings in the Scene dock if the script that overrides it is a `tool` script, and accessibility warnings are enabled in the editor settings.  
         *  Returning an empty array produces no warnings.  
         */
        /* gdvirtual */ _getAccessibilityConfigurationWarnings(): PackedStringArray
        
        /** Called when there is an input event. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  For gameplay input, [method _unhandled_input] and [method _unhandled_key_input] are usually a better fit as they allow the GUI to intercept the events first.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _input(event: InputEvent): void
        
        /** Called when an [InputEventKey], [InputEventShortcut], or [InputEventJoypadButton] hasn't been consumed by [method _input] or any GUI [Control] item. It is called before [method _unhandled_key_input] and [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if shortcut processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_shortcut_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  This method can be used to handle shortcuts. For generic GUI events, use [method _input] instead. Gameplay events should usually be handled with either [method _unhandled_input] or [method _unhandled_key_input].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not orphan).  
         */
        /* gdvirtual */ _shortcutInput(event: InputEvent): void
        
        /** Called when an [InputEvent] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] and after [method _unhandled_key_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if unhandled input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  For gameplay input, this method is usually a better fit than [method _input], as GUI events need a higher priority. For keyboard shortcuts, consider using [method _shortcut_input] instead, as it is called before this method. Finally, to handle keyboard events, consider using [method _unhandled_key_input] for performance reasons.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _unhandledInput(event: InputEvent): void
        
        /** Called when an [InputEventKey] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] but before [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if unhandled key input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_key_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  This method can be used to handle Unicode character input with [kbd]Alt[/kbd], [kbd]Alt + Ctrl[/kbd], and [kbd]Alt + Shift[/kbd] modifiers, after shortcuts were handled.  
         *  For gameplay input, this and [method _unhandled_input] are usually a better fit than [method _input], as GUI events should be handled first. This method also performs better than [method _unhandled_input], since unrelated events such as [InputEventMouseMotion] are automatically filtered. For shortcuts, consider using [method _shortcut_input] instead.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _unhandledKeyInput(event: InputEvent): void
        
        /** Called during accessibility information updates to determine the currently focused sub-element, should return a sub-element RID or the value returned by [method get_accessibility_element]. */
        /* gdvirtual */ _getFocusedAccessibilityElement(): Rid
        
        /** Prints all orphan nodes (nodes outside the [SceneTree]). Useful for debugging.  
         *      
         *  **Note:** This method only works in debug builds. Does nothing in a project exported in release mode.  
         */
        static printOrphanNodes(): void
        
        /** Returns object IDs of all orphan nodes (nodes outside the [SceneTree]). Used for debugging.  
         *      
         *  **Note:** [method get_orphan_node_ids] only works in debug builds. When called in a project exported in release mode, [method get_orphan_node_ids] will return an empty array.  
         */
        static getOrphanNodeIds(): GArray<int64>
        
        /** Adds a [param sibling] node to this node's parent, and moves the added sibling right below this node.  
         *  If [param force_readable_name] is `true`, improves the readability of the added [param sibling]. If not named, the [param sibling] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.  
         *  Use [method add_child] instead of this method if you don't need the child node to be added below a specific node in the list of children.  
         *      
         *  **Note:** If this node is internal, the added sibling will be internal too (see [method add_child]'s `internal` parameter).  
         */
        addSibling(sibling: Node, forceReadableName?: boolean /* = false */): void
        setName(name: StringName): void
        getName(): StringName
        
        /** Adds a child [param node]. Nodes can have any number of children, but every child must have a unique name. Child nodes are automatically deleted when the parent node is deleted, so an entire scene can be removed by deleting its topmost node.  
         *  If [param force_readable_name] is `true`, improves the readability of the added [param node]. If not named, the [param node] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.  
         *  If [param internal] is different than [constant INTERNAL_MODE_DISABLED], the child will be added as internal node. These nodes are ignored by methods like [method get_children], unless their parameter `include_internal` is `true`. It also prevents these nodes being duplicated with their parent. The intended usage is to hide the internal nodes from the user, so the user won't accidentally delete or modify them. Used by some GUI nodes, e.g. [ColorPicker].  
         *      
         *  **Note:** If [param node] already has a parent, this method will fail. Use [method remove_child] first to remove [param node] from its current parent. For example:  
         *    
         *  If you need the child node to be added below a specific node in the list of children, use [method add_sibling] instead of this method.  
         *      
         *  **Note:** If you want a child to be persisted to a [PackedScene], you must set [member owner] in addition to calling [method add_child]. This is typically relevant for [url=https://docs.godotengine.org/en/4.5/tutorials/plugins/running_code_in_the_editor.html]tool scripts[/url] and [url=https://docs.godotengine.org/en/4.5/tutorials/plugins/editor/index.html]editor plugins[/url]. If [method add_child] is called without setting [member owner], the newly added [Node] will not be visible in the scene tree, though it will be visible in the 2D/3D view.  
         */
        addChild(node: NodePathMapChild<Map>, forceReadableName?: boolean /* = false */, internal?: Node.InternalMode /* = 0 */): void
        
        /** Removes a child [param node]. The [param node], along with its children, are **not** deleted. To delete a node, see [method queue_free].  
         *      
         *  **Note:** When this node is inside the tree, this method sets the [member owner] of the removed [param node] (or its descendants) to `null`, if their [member owner] is no longer an ancestor (see [method is_ancestor_of]).  
         */
        removeChild(node: NodePathMapChild<Map>): void
        
        /** Changes the parent of this [Node] to the [param new_parent]. The node needs to already have a parent. The node's [member owner] is preserved if its owner is still reachable from the new location (i.e., the node is still a descendant of the new parent after the operation).  
         *  If [param keep_global_transform] is `true`, the node's global transform will be preserved if supported. [Node2D], [Node3D] and [Control] support this argument (but [Control] keeps only position).  
         */
        reparent(newParent: Node, keepGlobalTransform?: boolean /* = true */): void
        
        /** Returns the number of children of this node.  
         *  If [param include_internal] is `false`, internal children are not counted (see [method add_child]'s `internal` parameter).  
         */
        getChildCount(includeInternal?: boolean /* = false */): int64
        
        /** Returns all children of this node inside an [Array].  
         *  If [param include_internal] is `false`, excludes internal children from the returned array (see [method add_child]'s `internal` parameter).  
         */
        getChildren(includeInternal?: boolean /* = false */): GArray<NodePathMapChild<Map>>
        
        /** Fetches a child node by its index. Each child node has an index relative to its siblings (see [method get_index]). The first child is at index 0. Negative values can also be used to start from the end of the list. This method can be used in combination with [method get_child_count] to iterate over this node's children. If no child exists at the given index, this method returns `null` and an error is generated.  
         *  If [param include_internal] is `false`, internal children are ignored (see [method add_child]'s `internal` parameter).  
         *    
         *      
         *  **Note:** To fetch a node by [NodePath], use [method get_node].  
         */
        getChild(idx: int64, includeInternal?: boolean /* = false */): NodePathMapChild<Map>
        
        /** Returns `true` if the [param path] points to a valid node. See also [method get_node]. */
        hasNode(path: NodePath | string): boolean
        
        /** Fetches a node. The [NodePath] can either be a relative path (from this node), or an absolute path (from the [member SceneTree.root]) to a node. If [param path] does not point to a valid node, generates an error and returns `null`. Attempts to access methods on the return value will result in an  *"Attempt to call <method> on a null instance."*  error.  
         *      
         *  **Note:** Fetching by absolute path only works when the node is inside the scene tree (see [method is_inside_tree]).  
         *  **Example:** Assume this method is called from the Character node, inside the following tree:  
         *  [codeblock lang=text]  
         *   ┖╴root  
         *      ┠╴Character (you are here!)  
         *      ┃  ┠╴Sword  
         *      ┃  ┖╴Backpack  
         *      ┃     ┖╴Dagger  
         *      ┠╴MyGame  
         *      ┖╴Swamp  
         *         ┠╴Alligator  
         *         ┠╴Mosquito  
         *         ┖╴Goblin  
         *  [/codeblock]  
         *  The following calls will return a valid node:  
         *    
         */
        getNode<Path extends StaticNodePath<Map>, Default = never>(path: Path): ResolveNodePath<Map, Path, Default>
        
        /** Fetches a node by [NodePath]. Similar to [method get_node], but does not generate an error if [param path] does not point to a valid node. */
        getNodeOrNull<Path extends StaticNodePath<Map, undefined | Node>, Default = null>(path: Path): null | ResolveNodePath<Map, Path, Default, undefined | Node>
        getNodeOrNull(path: NodePath | string): null | Node
        
        /** Returns this node's parent node, or `null` if the node doesn't have a parent. */
        getParent(): null | Node
        
        /** Finds the first descendant of this node whose [member name] matches [param pattern], returning `null` if no match is found. The matching is done against node names,  *not*  their paths, through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.  
         *  If [param recursive] is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [method add_child]).  
         *  If [param owned] is `true`, only descendants with a valid [member owner] node are checked.  
         *      
         *  **Note:** This method can be very slow. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).  
         *      
         *  **Note:** To find all descendant nodes matching a pattern or a class type, see [method find_children].  
         */
        findChild(pattern: string, recursive?: boolean /* = true */, owned?: boolean /* = true */): null | Node
        
        /** Finds all descendants of this node whose names match [param pattern], returning an empty [Array] if no match is found. The matching is done against node names,  *not*  their paths, through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.  
         *  If [param type] is not empty, only ancestors inheriting from [param type] are included (see [method Object.is_class]).  
         *  If [param recursive] is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [method add_child]).  
         *  If [param owned] is `true`, only descendants with a valid [member owner] node are checked.  
         *      
         *  **Note:** This method can be very slow. Consider storing references to the found nodes in a variable.  
         *      
         *  **Note:** To find a single descendant node matching a pattern, see [method find_child].  
         */
        findChildren(pattern: string, type?: string /* = '' */, recursive?: boolean /* = true */, owned?: boolean /* = true */): GArray<Node>
        
        /** Finds the first ancestor of this node whose [member name] matches [param pattern], returning `null` if no match is found. The matching is done through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character. See also [method find_child] and [method find_children].  
         *      
         *  **Note:** As this method walks upwards in the scene tree, it can be slow in large, deeply nested nodes. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).  
         */
        findParent(pattern: string): null | Node
        
        /** Returns `true` if [param path] points to a valid node and its subnames point to a valid [Resource], e.g. `Area2D/CollisionShape2D:shape`. Properties that are not [Resource] types (such as nodes or other [Variant] types) are not considered. See also [method get_node_and_resource]. */
        hasNodeAndResource(path: NodePath | string): boolean
        
        /** Fetches a node and its most nested resource as specified by the [NodePath]'s subname. Returns an [Array] of size `3` where:  
         *  - Element `0` is the [Node], or `null` if not found;  
         *  - Element `1` is the subname's last nested [Resource], or `null` if not found;  
         *  - Element `2` is the remaining [NodePath], referring to an existing, non-[Resource] property (see [method Object.get_indexed]).  
         *  **Example:** Assume that the child's [member Sprite2D.texture] has been assigned an [AtlasTexture]:  
         *    
         */
        getNodeAndResource(path: NodePath | string): GArray
        
        /** Returns `true` if this node is currently inside a [SceneTree]. See also [method get_tree]. */
        isInsideTree(): boolean
        
        /** Returns `true` if the node is part of the scene currently opened in the editor. */
        isPartOfEditedScene(): boolean
        
        /** Returns `true` if the given [param node] is a direct or indirect child of this node. */
        isAncestorOf(node: Node): boolean
        
        /** Returns `true` if the given [param node] occurs later in the scene hierarchy than this node. A node occurring later is usually processed last. */
        isGreaterThan(node: Node): boolean
        
        /** Returns the node's absolute path, relative to the [member SceneTree.root]. If the node is not inside the scene tree, this method fails and returns an empty [NodePath]. */
        getPath(): NodePath
        
        /** Returns the relative [NodePath] from this node to the specified [param node]. Both nodes must be in the same [SceneTree] or scene hierarchy, otherwise this method fails and returns an empty [NodePath].  
         *  If [param use_unique_path] is `true`, returns the shortest path accounting for this node's unique name (see [member unique_name_in_owner]).  
         *      
         *  **Note:** If you get a relative path which starts from a unique node, the path may be longer than a normal relative path, due to the addition of the unique node's name.  
         */
        getPathTo(node: Node, useUniquePath?: boolean /* = false */): NodePath
        
        /** Adds the node to the [param group]. Groups can be helpful to organize a subset of nodes, for example `"enemies"` or `"collectables"`. See notes in the description, and the group methods in [SceneTree].  
         *  If [param persistent] is `true`, the group will be stored when saved inside a [PackedScene]. All groups created and displayed in the Node dock are persistent.  
         *      
         *  **Note:** To improve performance, the order of group names is  *not*  guaranteed and may vary between project runs. Therefore, do not rely on the group order.  
         *      
         *  **Note:** [SceneTree]'s group methods will  *not*  work on this node if not inside the tree (see [method is_inside_tree]).  
         */
        addToGroup(group: StringName, persistent?: boolean /* = false */): void
        
        /** Removes the node from the given [param group]. Does nothing if the node is not in the [param group]. See also notes in the description, and the [SceneTree]'s group methods. */
        removeFromGroup(group: StringName): void
        
        /** Returns `true` if this node has been added to the given [param group]. See [method add_to_group] and [method remove_from_group]. See also notes in the description, and the [SceneTree]'s group methods. */
        isInGroup(group: StringName): boolean
        
        /** Moves [param child_node] to the given index. A node's index is the order among its siblings. If [param to_index] is negative, the index is counted from the end of the list. See also [method get_child] and [method get_index].  
         *      
         *  **Note:** The processing order of several engine callbacks ([method _ready], [method _process], etc.) and notifications sent through [method propagate_notification] is affected by tree order. [CanvasItem] nodes are also rendered in tree order. See also [member process_priority].  
         */
        moveChild(childNode: NodePathMapChild<Map>, toIndex: int64): void
        
        /** Returns an [Array] of group names that the node has been added to.  
         *      
         *  **Note:** To improve performance, the order of group names is  *not*  guaranteed and may vary between project runs. Therefore, do not rely on the group order.  
         *      
         *  **Note:** This method may also return some group names starting with an underscore (`_`). These are internally used by the engine. To avoid conflicts, do not use custom groups starting with underscores. To exclude internal groups, see the following code snippet:  
         *    
         */
        getGroups(): GArray<StringName>
        
        /** Returns this node's order among its siblings. The first node's index is `0`. See also [method get_child].  
         *  If [param include_internal] is `false`, returns the index ignoring internal children. The first, non-internal child will have an index of `0` (see [method add_child]'s `internal` parameter).  
         */
        getIndex(includeInternal?: boolean /* = false */): int64
        
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. This method outputs [NodePath]s relative to this node, and is good for copy/pasting into [method get_node]. See also [method print_tree_pretty].  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *  .  
         *  Menu  
         *  Menu/Label  
         *  Menu/Camera2D  
         *  SplashScreen  
         *  SplashScreen/Camera2D  
         *  [/codeblock]  
         */
        printTree(): void
        
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. Similar to [method print_tree], but the graphical representation looks like what is displayed in the editor's Scene dock. It is useful for inspecting larger trees.  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *   ┖╴TheGame  
         *      ┠╴Menu  
         *      ┃  ┠╴Label  
         *      ┃  ┖╴Camera2D  
         *      ┖╴SplashScreen  
         *         ┖╴Camera2D  
         *  [/codeblock]  
         */
        printTreePretty(): void
        
        /** Returns the tree as a [String]. Used mainly for debugging purposes. This version displays the path relative to the current node, and is good for copy/pasting into the [method get_node] function. It also can be used in game UI/UX.  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *  TheGame  
         *  TheGame/Menu  
         *  TheGame/Menu/Label  
         *  TheGame/Menu/Camera2D  
         *  TheGame/SplashScreen  
         *  TheGame/SplashScreen/Camera2D  
         *  [/codeblock]  
         */
        getTreeString(): string
        
        /** Similar to [method get_tree_string], this returns the tree as a [String]. This version displays a more graphical representation similar to what is displayed in the Scene Dock. It is useful for inspecting larger trees.  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *   ┖╴TheGame  
         *      ┠╴Menu  
         *      ┃  ┠╴Label  
         *      ┃  ┖╴Camera2D  
         *      ┖╴SplashScreen  
         *         ┖╴Camera2D  
         *  [/codeblock]  
         */
        getTreeStringPretty(): string
        
        /** Calls [method Object.notification] with [param what] on this node and all of its children, recursively. */
        propagateNotification(what: int64): void
        
        /** Calls the given [param method] name, passing [param args] as arguments, on this node and all of its children, recursively.  
         *  If [param parent_first] is `true`, the method is called on this node first, then on all of its children. If `false`, the children's methods are called first.  
         */
        propagateCall(method: StringName, args?: GArray, parentFirst?: boolean /* = false */): void
        
        /** If set to `true`, enables physics (fixed framerate) processing. When a node is being processed, it will receive a [constant NOTIFICATION_PHYSICS_PROCESS] at a fixed (usually 60 FPS, see [member Engine.physics_ticks_per_second] to change) interval (and the [method _physics_process] callback will be called if it exists).  
         *      
         *  **Note:** If [method _physics_process] is overridden, this will be automatically enabled before [method _ready] is called.  
         */
        setPhysicsProcess(enable: boolean): void
        
        /** Returns the time elapsed (in seconds) since the last physics callback. This value is identical to [method _physics_process]'s `delta` parameter, and is often consistent at run-time, unless [member Engine.physics_ticks_per_second] is changed. See also [constant NOTIFICATION_PHYSICS_PROCESS].  
         *      
         *  **Note:** The returned value will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using `delta` for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        getPhysicsProcessDeltaTime(): float64
        
        /** Returns `true` if physics processing is enabled (see [method set_physics_process]). */
        isPhysicsProcessing(): boolean
        
        /** Returns the time elapsed (in seconds) since the last process callback. This value is identical to [method _process]'s `delta` parameter, and may vary from frame to frame. See also [constant NOTIFICATION_PROCESS].  
         *      
         *  **Note:** The returned value will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using `delta` for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        getProcessDeltaTime(): float64
        
        /** If set to `true`, enables processing. When a node is being processed, it will receive a [constant NOTIFICATION_PROCESS] on every drawn frame (and the [method _process] callback will be called if it exists).  
         *      
         *  **Note:** If [method _process] is overridden, this will be automatically enabled before [method _ready] is called.  
         *      
         *  **Note:** This method only affects the [method _process] callback, i.e. it has no effect on other callbacks like [method _physics_process]. If you want to disable all processing for the node, set [member process_mode] to [constant PROCESS_MODE_DISABLED].  
         */
        setProcess(enable: boolean): void
        
        /** Returns `true` if processing is enabled (see [method set_process]). */
        isProcessing(): boolean
        
        /** If set to `true`, enables input processing.  
         *      
         *  **Note:** If [method _input] is overridden, this will be automatically enabled before [method _ready] is called. Input processing is also already enabled for GUI controls, such as [Button] and [TextEdit].  
         */
        setProcessInput(enable: boolean): void
        
        /** Returns `true` if the node is processing input (see [method set_process_input]). */
        isProcessingInput(): boolean
        
        /** If set to `true`, enables shortcut processing for this node.  
         *      
         *  **Note:** If [method _shortcut_input] is overridden, this will be automatically enabled before [method _ready] is called.  
         */
        setProcessShortcutInput(enable: boolean): void
        
        /** Returns `true` if the node is processing shortcuts (see [method set_process_shortcut_input]). */
        isProcessingShortcutInput(): boolean
        
        /** If set to `true`, enables unhandled input processing. It enables the node to receive all input that was not previously handled (usually by a [Control]).  
         *      
         *  **Note:** If [method _unhandled_input] is overridden, this will be automatically enabled before [method _ready] is called. Unhandled input processing is also already enabled for GUI controls, such as [Button] and [TextEdit].  
         */
        setProcessUnhandledInput(enable: boolean): void
        
        /** Returns `true` if the node is processing unhandled input (see [method set_process_unhandled_input]). */
        isProcessingUnhandledInput(): boolean
        
        /** If set to `true`, enables unhandled key input processing.  
         *      
         *  **Note:** If [method _unhandled_key_input] is overridden, this will be automatically enabled before [method _ready] is called.  
         */
        setProcessUnhandledKeyInput(enable: boolean): void
        
        /** Returns `true` if the node is processing unhandled key input (see [method set_process_unhandled_key_input]). */
        isProcessingUnhandledKeyInput(): boolean
        
        /** Returns `true` if the node can receive processing notifications and input callbacks ([constant NOTIFICATION_PROCESS], [method _input], etc.) from the [SceneTree] and [Viewport]. The returned value depends on [member process_mode]:  
         *  - If set to [constant PROCESS_MODE_PAUSABLE], returns `true` when the game is processing, i.e. [member SceneTree.paused] is `false`;  
         *  - If set to [constant PROCESS_MODE_WHEN_PAUSED], returns `true` when the game is paused, i.e. [member SceneTree.paused] is `true`;  
         *  - If set to [constant PROCESS_MODE_ALWAYS], always returns `true`;  
         *  - If set to [constant PROCESS_MODE_DISABLED], always returns `false`;  
         *  - If set to [constant PROCESS_MODE_INHERIT], use the parent node's [member process_mode] to determine the result.  
         *  If the node is not inside the tree, returns `false` no matter the value of [member process_mode].  
         */
        canProcess(): boolean
        
        /** Queues an accessibility information update for this node. */
        queueAccessibilityUpdate(): void
        
        /** Returns main accessibility element RID.  
         *      
         *  **Note:** This method should be called only during accessibility information updates ([constant NOTIFICATION_ACCESSIBILITY_UPDATE]).  
         */
        getAccessibilityElement(): Rid
        
        /** If set to `true`, the node appears folded in the Scene dock. As a result, all of its children are hidden. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_displayed_folded]. */
        setDisplayFolded(fold: boolean): void
        
        /** Returns `true` if the node is folded (collapsed) in the Scene dock. This method is intended to be used in editor plugins and tools. See also [method set_display_folded]. */
        isDisplayedFolded(): boolean
        
        /** If set to `true`, enables internal processing for this node. Internal processing happens in isolation from the normal [method _process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or processing is disabled for scripting ([method set_process]).  
         *  **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.  
         */
        setProcessInternal(enable: boolean): void
        
        /** Returns `true` if internal processing is enabled (see [method set_process_internal]). */
        isProcessingInternal(): boolean
        
        /** If set to `true`, enables internal physics for this node. Internal physics processing happens in isolation from the normal [method _physics_process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or physics processing is disabled for scripting ([method set_physics_process]).  
         *  **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.  
         */
        setPhysicsProcessInternal(enable: boolean): void
        
        /** Returns `true` if internal physics processing is enabled (see [method set_physics_process_internal]). */
        isPhysicsProcessingInternal(): boolean
        
        /** Returns `true` if physics interpolation is enabled for this node (see [member physics_interpolation_mode]).  
         *      
         *  **Note:** Interpolation will only be active if both the flag is set **and** physics interpolation is enabled within the [SceneTree]. This can be tested using [method is_physics_interpolated_and_enabled].  
         */
        isPhysicsInterpolated(): boolean
        
        /** Returns `true` if physics interpolation is enabled (see [member physics_interpolation_mode]) **and** enabled in the [SceneTree].  
         *  This is a convenience version of [method is_physics_interpolated] that also checks whether physics interpolation is enabled globally.  
         *  See [member SceneTree.physics_interpolation] and [member ProjectSettings.physics/common/physics_interpolation].  
         */
        isPhysicsInterpolatedAndEnabled(): boolean
        
        /** When physics interpolation is active, moving a node to a radically different transform (such as placement within a level) can result in a visible glitch as the object is rendered moving from the old to new position over the physics tick.  
         *  That glitch can be prevented by calling this method, which temporarily disables interpolation until the physics tick is complete.  
         *  The notification [constant NOTIFICATION_RESET_PHYSICS_INTERPOLATION] will be received by the node and all children recursively.  
         *      
         *  **Note:** This function should be called **after** moving the node, rather than before.  
         */
        resetPhysicsInterpolation(): void
        
        /** Returns `true` if this node can automatically translate messages depending on the current locale. See [member auto_translate_mode], [method atr], and [method atr_n]. */
        canAutoTranslate(): boolean
        
        /** Makes this node inherit the translation domain from its parent node. If this node has no parent, the main translation domain will be used.  
         *  This is the default behavior for all nodes. Calling [method Object.set_translation_domain] disables this behavior.  
         */
        setTranslationDomainInherited(): void
        
        /** Returns the [Window] that contains this node. If the node is in the main window, this is equivalent to getting the root node (`get_tree().get_root()`). */
        getWindow(): null | Window
        
        /** Returns the [Window] that contains this node, or the last exclusive child in a chain of windows starting with the one that contains this node. */
        getLastExclusiveWindow(): null | Window
        
        /** Returns the [SceneTree] that contains this node. If this node is not inside the tree, generates an error and returns `null`. See also [method is_inside_tree]. */
        getTree(): SceneTree
        
        /** Creates a new [Tween] and binds it to this node.  
         *  This is the equivalent of doing:  
         *    
         *  The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]). See [method Tween.bind_node] for more info on Tweens bound to nodes.  
         *      
         *  **Note:** The method can still be used when the node is not inside [SceneTree]. It can fail in an unlikely case of using a custom [MainLoop].  
         */
        createTween(): Tween
        
        /** Duplicates the node, returning a new node with all of its properties, signals, groups, and children copied from the original. The behavior can be tweaked through the [param flags] (see [enum DuplicateFlags]). Internal nodes are not duplicated.  
         *      
         *  **Note:** For nodes with a [Script] attached, if [method Object._init] has been defined with required parameters, the duplicated node will not have a [Script].  
         */
        duplicate(flags?: int64 /* = 15 */): null | Node
        
        /** Replaces this node by the given [param node]. All children of this node are moved to [param node].  
         *  If [param keep_groups] is `true`, the [param node] is added to the same groups that the replaced node is in (see [method add_to_group]).  
         *  **Warning:** The replaced node is removed from the tree, but it is **not** deleted. To prevent memory leaks, store a reference to the node in a variable, or use [method Object.free].  
         */
        replaceBy(node: Node, keepGroups?: boolean /* = false */): void
        
        /** If set to `true`, the node becomes an [InstancePlaceholder] when packed and instantiated from a [PackedScene]. See also [method get_scene_instance_load_placeholder]. */
        setSceneInstanceLoadPlaceholder(loadPlaceholder: boolean): void
        
        /** Returns `true` if this node is an instance load placeholder. See [InstancePlaceholder] and [method set_scene_instance_load_placeholder]. */
        getSceneInstanceLoadPlaceholder(): boolean
        
        /** Set to `true` to allow all nodes owned by [param node] to be available, and editable, in the Scene dock, even if their [member owner] is not the scene root. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_editable_instance]. */
        setEditableInstance(node: Node, isEditable: boolean): void
        
        /** Returns `true` if [param node] has editable children enabled relative to this node. This method is intended to be used in editor plugins and tools. See also [method set_editable_instance]. */
        isEditableInstance(node: Node): boolean
        
        /** Returns the node's closest [Viewport] ancestor, if the node is inside the tree. Otherwise, returns `null`. */
        getViewport(): null | Viewport
        
        /** Queues this node to be deleted at the end of the current frame. When deleted, all of its children are deleted as well, and all references to the node and its children become invalid.  
         *  Unlike with [method Object.free], the node is not deleted instantly, and it can still be accessed before deletion. It is also safe to call [method queue_free] multiple times. Use [method Object.is_queued_for_deletion] to check if the node will be deleted at the end of the frame.  
         *      
         *  **Note:** The node will only be freed after all other deferred calls are finished. Using this method is not always the same as calling [method Object.free] through [method Object.call_deferred].  
         */
        queueFree(): void
        
        /** Requests [method _ready] to be called again the next time the node enters the tree. Does **not** immediately call [method _ready].  
         *      
         *  **Note:** This method only affects the current node. If the node's children also need to request ready, this method needs to be called for each one of them. When the node and its children enter the tree again, the order of [method _ready] callbacks will be the same as normal.  
         */
        requestReady(): void
        
        /** Returns `true` if the node is ready, i.e. it's inside scene tree and all its children are initialized.  
         *  [method request_ready] resets it back to `false`.  
         */
        isNodeReady(): boolean
        
        /** Sets the node's multiplayer authority to the peer with the given peer [param id]. The multiplayer authority is the peer that has authority over the node on the network. Defaults to peer ID 1 (the server). Useful in conjunction with [method rpc_config] and the [MultiplayerAPI].  
         *  If [param recursive] is `true`, the given peer is recursively set as the authority for all children of this node.  
         *  **Warning:** This does **not** automatically replicate the new authority to other peers. It is the developer's responsibility to do so. You may replicate the new authority's information using [member MultiplayerSpawner.spawn_function], an RPC, or a [MultiplayerSynchronizer]. Furthermore, the parent's authority does **not** propagate to newly added children.  
         */
        setMultiplayerAuthority(id: int64, recursive?: boolean /* = true */): void
        
        /** Returns the peer ID of the multiplayer authority for this node. See [method set_multiplayer_authority]. */
        getMultiplayerAuthority(): int64
        
        /** Returns `true` if the local system is the multiplayer authority of this node. */
        isMultiplayerAuthority(): boolean
        
        /** Changes the RPC configuration for the given [param method]. [param config] should either be `null` to disable the feature (as by default), or a [Dictionary] containing the following entries:  
         *  - `rpc_mode`: see [enum MultiplayerAPI.RPCMode];  
         *  - `transfer_mode`: see [enum MultiplayerPeer.TransferMode];  
         *  - `call_local`: if `true`, the method will also be called locally;  
         *  - `channel`: an [int] representing the channel to send the RPC on.  
         *      
         *  **Note:** In GDScript, this method corresponds to the [annotation @GDScript.@rpc] annotation, with various parameters passed (`@rpc(any)`, `@rpc(authority)`...). See also the [url=https://docs.godotengine.org/en/4.5/tutorials/networking/high_level_multiplayer.html]high-level multiplayer[/url] tutorial.  
         */
        rpcConfig(method: StringName, config: any): void
        
        /** Returns a [Dictionary] mapping method names to their RPC configuration defined for this node using [method rpc_config].  
         *      
         *  **Note:** This method only returns the RPC configuration assigned via [method rpc_config]. See [method Script.get_rpc_config] to retrieve the RPCs defined by the [Script].  
         */
        getNodeRpcConfig(): any
        
        /** Translates a [param message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation. Note that most [Control] nodes automatically translate their strings, so this method is mostly useful for formatted strings or custom drawn text.  
         *  This method works the same as [method Object.tr], with the addition of respecting the [member auto_translate_mode] state.  
         *  If [method Object.can_translate_messages] is `false`, or no translation is available, this method returns the [param message] without changes. See [method Object.set_message_translation].  
         *  For detailed examples, see [url=https://docs.godotengine.org/en/4.5/tutorials/i18n/internationalizing_games.html]Internationalizing games[/url].  
         */
        atr(message: string, context?: StringName /* = '' */): string
        
        /** Translates a [param message] or [param plural_message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.  
         *  This method works the same as [method Object.tr_n], with the addition of respecting the [member auto_translate_mode] state.  
         *  If [method Object.can_translate_messages] is `false`, or no translation is available, this method returns [param message] or [param plural_message], without changes. See [method Object.set_message_translation].  
         *  The [param n] is the number, or amount, of the message's subject. It is used by the translation system to fetch the correct plural form for the current language.  
         *  For detailed examples, see [url=https://docs.godotengine.org/en/4.5/tutorials/i18n/localization_using_gettext.html]Localization using gettext[/url].  
         *      
         *  **Note:** Negative and [float] numbers may not properly apply to some countable subjects. It's recommended to handle these cases with [method atr].  
         */
        atrN(message: string, pluralMessage: StringName, n: int64, context?: StringName /* = '' */): string
        _setPropertyPinned(property: string, pinned: boolean): void
        
        /** Sends a remote procedure call request for the given [param method] to peers on the network (and locally), sending additional arguments to the method called by the RPC. The call request will only be received by nodes with the same [NodePath], including the exact same [member name]. Behavior depends on the RPC configuration for the given [param method] (see [method rpc_config] and [annotation @GDScript.@rpc]). By default, methods are not exposed to RPCs.  
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.  
         *      
         *  **Note:** You can only safely use RPCs on clients after you received the [signal MultiplayerAPI.connected_to_server] signal from the [MultiplayerAPI]. You also need to keep track of the connection state, either by the [MultiplayerAPI] signals like [signal MultiplayerAPI.server_disconnected] or by checking (`get_multiplayer().peer.get_connection_status() == CONNECTION_CONNECTED`).  
         */
        rpc<Method extends GodotRpcNames<this>>(method: Method, ...varargs: ResolveGodotRpcParameters<this, Method>): Error
        
        /** Sends a [method rpc] to a specific peer identified by [param peer_id] (see [method MultiplayerPeer.set_target_peer]).  
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.  
         */
        rpcId<Method extends GodotRpcNames<this>>(peerId: int64, method: Method, ...varargs: ResolveGodotRpcParameters<this, Method>): Error
        
        /** Refreshes the warnings displayed for this node in the Scene dock. Use [method _get_configuration_warnings] to customize the warning messages to display. */
        updateConfigurationWarnings(): void
        
        /** This function is similar to [method Object.call_deferred] except that the call will take place when the node thread group is processed. If the node thread group processes in sub-threads, then the call will be done on that thread, right before [constant NOTIFICATION_PROCESS] or [constant NOTIFICATION_PHYSICS_PROCESS], the [method _process] or [method _physics_process] or their internal versions are called. */
        callDeferredThreadGroup(method: StringName, ...varargs: any[]): any
        
        /** Similar to [method call_deferred_thread_group], but for setting properties. */
        setDeferredThreadGroup(property: StringName, value: any): void
        
        /** Similar to [method call_deferred_thread_group], but for notifications. */
        notifyDeferredThreadGroup(what: int64): void
        
        /** This function ensures that the calling of this function will succeed, no matter whether it's being done from a thread or not. If called from a thread that is not allowed to call the function, the call will become deferred. Otherwise, the call will go through directly. */
        callThreadSafe(method: StringName, ...varargs: any[]): any
        
        /** Similar to [method call_thread_safe], but for setting properties. */
        setThreadSafe(property: StringName, value: any): void
        
        /** Similar to [method call_thread_safe], but for notifications. */
        notifyThreadSafe(what: int64): void
        get _importPath(): NodePath
        set _importPath(value: NodePath | string)
        
        /** If `true`, the node can be accessed from any node sharing the same [member owner] or from the [member owner] itself, with special `%Name` syntax in [method get_node].  
         *      
         *  **Note:** If another node with the same [member owner] shares the same [member name] as this node, the other node will no longer be accessible as unique.  
         */
        get uniqueNameInOwner(): boolean
        set uniqueNameInOwner(value: boolean)
        
        /** The original scene's file path, if the node has been instantiated from a [PackedScene] file. Only scene root nodes contains this. */
        get sceneFilePath(): string
        set sceneFilePath(value: string)
        
        /** The owner of this node. The owner must be an ancestor of this node. When packing the owner node in a [PackedScene], all the nodes it owns are also saved with it. See also [member unique_name_in_owner].  
         *      
         *  **Note:** In the editor, nodes not owned by the scene root are usually not displayed in the Scene dock, and will **not** be saved. To prevent this, remember to set the owner after calling [method add_child].  
         */
        get owner(): null | Node
        set owner(value: null | Node)
        
        /** The [MultiplayerAPI] instance associated with this node. See [method SceneTree.get_multiplayer].  
         *      
         *  **Note:** Renaming the node, or moving it in the tree, will not move the [MultiplayerAPI] to the new path, you will have to update this manually.  
         */
        get multiplayer(): null | MultiplayerApi
        set multiplayer(value: null | MultiplayerApi)
        
        /** The node's processing behavior. To check if the node can process in its current mode, use [method can_process]. */
        get processMode(): int64
        set processMode(value: int64)
        
        /** The node's execution order of the process callbacks ([method _process], [constant NOTIFICATION_PROCESS], and [constant NOTIFICATION_INTERNAL_PROCESS]). Nodes whose priority value is  *lower*  call their process callbacks first, regardless of tree order. */
        get processPriority(): int64
        set processPriority(value: int64)
        
        /** Similar to [member process_priority] but for [constant NOTIFICATION_PHYSICS_PROCESS], [method _physics_process], or [constant NOTIFICATION_INTERNAL_PHYSICS_PROCESS]. */
        get processPhysicsPriority(): int64
        set processPhysicsPriority(value: int64)
        
        /** Set the process thread group for this node (basically, whether it receives [constant NOTIFICATION_PROCESS], [constant NOTIFICATION_PHYSICS_PROCESS], [method _process] or [method _physics_process] (and the internal versions) on the main thread or in a sub-thread.  
         *  By default, the thread group is [constant PROCESS_THREAD_GROUP_INHERIT], which means that this node belongs to the same thread group as the parent node. The thread groups means that nodes in a specific thread group will process together, separate to other thread groups (depending on [member process_thread_group_order]). If the value is set is [constant PROCESS_THREAD_GROUP_SUB_THREAD], this thread group will occur on a sub thread (not the main thread), otherwise if set to [constant PROCESS_THREAD_GROUP_MAIN_THREAD] it will process on the main thread. If there is not a parent or grandparent node set to something other than inherit, the node will belong to the  *default thread group* . This default group will process on the main thread and its group order is 0.  
         *  During processing in a sub-thread, accessing most functions in nodes outside the thread group is forbidden (and it will result in an error in debug mode). Use [method Object.call_deferred], [method call_thread_safe], [method call_deferred_thread_group] and the likes in order to communicate from the thread groups to the main thread (or to other thread groups).  
         *  To better understand process thread groups, the idea is that any node set to any other value than [constant PROCESS_THREAD_GROUP_INHERIT] will include any child (and grandchild) nodes set to inherit into its process thread group. This means that the processing of all the nodes in the group will happen together, at the same time as the node including them.  
         */
        get processThreadGroup(): int64
        set processThreadGroup(value: int64)
        
        /** Change the process thread group order. Groups with a lesser order will process before groups with a greater order. This is useful when a large amount of nodes process in sub thread and, afterwards, another group wants to collect their result in the main thread, as an example. */
        get processThreadGroupOrder(): int64
        set processThreadGroupOrder(value: int64)
        
        /** Set whether the current thread group will process messages (calls to [method call_deferred_thread_group] on threads), and whether it wants to receive them during regular process or physics process callbacks. */
        get processThreadMessages(): int64
        set processThreadMessages(value: int64)
        
        /** The physics interpolation mode to use for this node. Only effective if [member ProjectSettings.physics/common/physics_interpolation] or [member SceneTree.physics_interpolation] is `true`.  
         *  By default, nodes inherit the physics interpolation mode from their parent. This property can enable or disable physics interpolation individually for each node, regardless of their parents' physics interpolation mode.  
         *      
         *  **Note:** Some node types like [VehicleWheel3D] have physics interpolation disabled by default, as they rely on their own custom solution.  
         *      
         *  **Note:** When teleporting a node to a distant position, it's recommended to temporarily disable interpolation with [method Node.reset_physics_interpolation]  *after*  moving the node. This avoids creating a visual streak between the old and new positions.  
         */
        get physicsInterpolationMode(): int64
        set physicsInterpolationMode(value: int64)
        
        /** Defines if any text should automatically change to its translated version depending on the current locale (for nodes such as [Label], [RichTextLabel], [Window], etc.). Also decides if the node's strings should be parsed for POT generation.  
         *      
         *  **Note:** For the root node, auto translate mode can also be set via [member ProjectSettings.internationalization/rendering/root_node_auto_translate].  
         */
        get autoTranslateMode(): int64
        set autoTranslateMode(value: int64)
        
        /** An optional description to the node. It will be displayed as a tooltip when hovering over the node in the editor's Scene dock. */
        get editorDescription(): string
        set editorDescription(value: string)
        
        /** Emitted when the node is considered ready, after [method _ready] is called. */
        readonly ready: Signal<() => void>
        
        /** Emitted when the node's [member name] is changed, if the node is inside the tree. */
        readonly renamed: Signal<() => void>
        
        /** Emitted when the node enters the tree.  
         *  This signal is emitted  *after*  the related [constant NOTIFICATION_ENTER_TREE] notification.  
         */
        readonly treeEntered: Signal<() => void>
        
        /** Emitted when the node is just about to exit the tree. The node is still valid. As such, this is the right place for de-initialization (or a "destructor", if you will).  
         *  This signal is emitted  *after*  the node's [method _exit_tree], and  *before*  the related [constant NOTIFICATION_EXIT_TREE].  
         */
        readonly treeExiting: Signal<() => void>
        
        /** Emitted after the node exits the tree and is no longer active.  
         *  This signal is emitted  *after*  the related [constant NOTIFICATION_EXIT_TREE] notification.  
         */
        readonly treeExited: Signal<() => void>
        
        /** Emitted when the child [param node] enters the [SceneTree], usually because this node entered the tree (see [signal tree_entered]), or [method add_child] has been called.  
         *  This signal is emitted  *after*  the child node's own [constant NOTIFICATION_ENTER_TREE] and [signal tree_entered].  
         */
        readonly childEnteredTree: Signal<(node: Node) => void>
        
        /** Emitted when the child [param node] is about to exit the [SceneTree], usually because this node is exiting the tree (see [signal tree_exiting]), or because the child [param node] is being removed or freed.  
         *  When this signal is received, the child [param node] is still accessible inside the tree. This signal is emitted  *after*  the child node's own [signal tree_exiting] and [constant NOTIFICATION_EXIT_TREE].  
         */
        readonly childExitingTree: Signal<(node: Node) => void>
        
        /** Emitted when the list of children is changed. This happens when child nodes are added, moved or removed. */
        readonly childOrderChanged: Signal<() => void>
        
        /** Emitted when this node is being replaced by the [param node], see [method replace_by].  
         *  This signal is emitted  *after*  [param node] has been added as a child of the original parent node, but  *before*  all original child nodes have been reparented to [param node].  
         */
        readonly replacingBy: Signal<(node: Node) => void>
        
        /** Emitted when the node's editor description field changed. */
        readonly editorDescriptionChanged: Signal<(node: Node) => void>
        
        /** Emitted when an attribute of the node that is relevant to the editor is changed. Only emitted in the editor. */
        readonly editorStateChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNode;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNode2D extends __RPCMapCanvasItem {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNode2D extends __NameMapCanvasItem {
        move_local_x: "moveLocalX";
        move_local_y: "moveLocalY";
        global_translate: "globalTranslate";
        apply_scale: "applyScale";
        look_at: "lookAt";
        get_angle_to: "getAngleTo";
        to_local: "toLocal";
        to_global: "toGlobal";
        get_relative_transform_to_parent: "getRelativeTransformToParent";
        rotation_degrees: "rotationDegrees";
        global_position: "globalPosition";
        global_rotation: "globalRotation";
        global_rotation_degrees: "globalRotationDegrees";
        global_scale: "globalScale";
        global_skew: "globalSkew";
        global_transform: "globalTransform";
    }
    /** A 2D game object, inherited by all 2D-related nodes. Has a position, rotation, scale, and skew.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_node2d.html  
     */
    class Node2D<Map extends NodePathMap = any> extends CanvasItem<Map> {
        constructor(identifier?: any)
        /** Applies a rotation to the node, in radians, starting from its current rotation. */
        rotate(radians: float64): void
        
        /** Applies a local translation on the node's X axis with the amount specified in [param delta]. If [param scaled] is `false`, normalizes the movement to occur independently of the node's [member scale]. */
        moveLocalX(delta: float64, scaled?: boolean /* = false */): void
        
        /** Applies a local translation on the node's Y axis with the amount specified in [param delta]. If [param scaled] is `false`, normalizes the movement to occur independently of the node's [member scale]. */
        moveLocalY(delta: float64, scaled?: boolean /* = false */): void
        
        /** Translates the node by the given [param offset] in local coordinates. */
        translate(offset: Vector2): void
        
        /** Adds the [param offset] vector to the node's global position. */
        globalTranslate(offset: Vector2): void
        
        /** Multiplies the current scale by the [param ratio] vector. */
        applyScale(ratio: Vector2): void
        
        /** Rotates the node so that its local +X axis points towards the [param point], which is expected to use global coordinates.  
         *  [param point] should not be the same as the node's position, otherwise the node always looks to the right.  
         */
        lookAt(point: Vector2): void
        
        /** Returns the angle between the node and the [param point] in radians.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/node2d_get_angle_to.png]Illustration of the returned angle.[/url]  
         */
        getAngleTo(point: Vector2): float64
        
        /** Transforms the provided global position into a position in local coordinate space. The output will be local relative to the [Node2D] it is called on. e.g. It is appropriate for determining the positions of child nodes, but it is not appropriate for determining its own position relative to its parent. */
        toLocal(globalPoint: Vector2): Vector2
        
        /** Transforms the provided local position into a position in global coordinate space. The input is expected to be local relative to the [Node2D] it is called on. e.g. Applying this method to the positions of child nodes will correctly transform their positions into the global coordinate space, but applying it to a node's own position will give an incorrect result, as it will incorporate the node's own transformation into its global position. */
        toGlobal(localPoint: Vector2): Vector2
        
        /** Returns the [Transform2D] relative to this node's parent. */
        getRelativeTransformToParent(parent: Node): Transform2D
        
        /** Position, relative to the node's parent. See also [member global_position]. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** Rotation in radians, relative to the node's parent. See also [member global_rotation].  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        get rotation(): float64
        set rotation(value: float64)
        
        /** Helper property to access [member rotation] in degrees instead of radians. See also [member global_rotation_degrees]. */
        get rotationDegrees(): float64
        set rotationDegrees(value: float64)
        
        /** The node's scale, relative to the node's parent. Unscaled value: `(1, 1)`. See also [member global_scale].  
         *      
         *  **Note:** Negative X scales in 2D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, negative scales on the X axis will be changed to negative scales on the Y axis and a rotation of 180 degrees when decomposed.  
         */
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** If set to a non-zero value, slants the node in one direction or another. This can be used for pseudo-3D effects. See also [member global_skew].  
         *      
         *  **Note:** Skew is performed on the X axis only, and  *between*  rotation and scaling.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use `skew = deg_to_rad(value_in_degrees)`.  
         */
        get skew(): float64
        set skew(value: float64)
        
        /** The node's [Transform2D], relative to the node's parent. See also [member global_transform]. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** Global position. See also [member position]. */
        get globalPosition(): Vector2
        set globalPosition(value: Vector2)
        
        /** Global rotation in radians. See also [member rotation]. */
        get globalRotation(): float64
        set globalRotation(value: float64)
        
        /** Helper property to access [member global_rotation] in degrees instead of radians. See also [member rotation_degrees]. */
        get globalRotationDegrees(): float64
        set globalRotationDegrees(value: float64)
        
        /** Global scale. See also [member scale]. */
        get globalScale(): Vector2
        set globalScale(value: Vector2)
        
        /** Global skew in radians. See also [member skew]. */
        get globalSkew(): float64
        set globalSkew(value: float64)
        
        /** Global [Transform2D]. See also [member transform]. */
        get globalTransform(): Transform2D
        set globalTransform(value: Transform2D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNode2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNode2D;
    }
    namespace Node3D {
        enum RotationEditMode {
            RotationEditModeEuler = 0,
            RotationEditModeQuaternion = 1,
            RotationEditModeBasis = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNode3D extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNode3D extends __NameMapNode {
        get_global_transform_interpolated: "getGlobalTransformInterpolated";
        get_parent_node_3d: "getParentNode3D";
        set_ignore_transform_notification: "setIgnoreTransformNotification";
        set_disable_scale: "setDisableScale";
        is_scale_disabled: "isScaleDisabled";
        get_world_3d: "getWorld3D";
        force_update_transform: "forceUpdateTransform";
        update_gizmos: "updateGizmos";
        add_gizmo: "addGizmo";
        get_gizmos: "getGizmos";
        clear_gizmos: "clearGizmos";
        set_subgizmo_selection: "setSubgizmoSelection";
        clear_subgizmo_selection: "clearSubgizmoSelection";
        is_visible_in_tree: "isVisibleInTree";
        set_notify_local_transform: "setNotifyLocalTransform";
        is_local_transform_notification_enabled: "isLocalTransformNotificationEnabled";
        set_notify_transform: "setNotifyTransform";
        is_transform_notification_enabled: "isTransformNotificationEnabled";
        global_rotate: "globalRotate";
        global_scale: "globalScale";
        global_translate: "globalTranslate";
        rotate_object_local: "rotateObjectLocal";
        scale_object_local: "scaleObjectLocal";
        translate_object_local: "translateObjectLocal";
        rotate_x: "rotateX";
        rotate_y: "rotateY";
        rotate_z: "rotateZ";
        set_identity: "setIdentity";
        look_at: "lookAt";
        look_at_from_position: "lookAtFromPosition";
        to_local: "toLocal";
        to_global: "toGlobal";
        global_transform: "globalTransform";
        rotation_degrees: "rotationDegrees";
        rotation_edit_mode: "rotationEditMode";
        rotation_order: "rotationOrder";
        top_level: "topLevel";
        global_position: "globalPosition";
        global_basis: "globalBasis";
        global_rotation: "globalRotation";
        global_rotation_degrees: "globalRotationDegrees";
        visibility_parent: "visibilityParent";
        visibility_changed: "visibilityChanged";
    }
    /** Base object in 3D space, inherited by all 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_node3d.html  
     */
    class Node3D<Map extends NodePathMap = any> extends Node<Map> {
        /** Notification received when this node's [member global_transform] changes, if [method is_transform_notification_enabled] is `true`. See also [method set_notify_transform].  
         *      
         *  **Note:** Most 3D nodes such as [VisualInstance3D] or [CollisionObject3D] automatically enable this to function correctly.  
         *      
         *  **Note:** In the editor, nodes will propagate this notification to their children if a gizmo is attached (see [method add_gizmo]).  
         */
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        
        /** Notification received when this node is registered to a new [World3D] (see [method get_world_3d]). */
        static readonly NOTIFICATION_ENTER_WORLD = 41
        
        /** Notification received when this node is unregistered from the current [World3D] (see [method get_world_3d]). */
        static readonly NOTIFICATION_EXIT_WORLD = 42
        
        /** Notification received when this node's visibility changes (see [member visible] and [method is_visible_in_tree]).  
         *  This notification is received  *before*  the related [signal visibility_changed] signal.  
         */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 43
        
        /** Notification received when this node's [member transform] changes, if [method is_local_transform_notification_enabled] is `true`. This is not received when a parent [Node3D]'s [member transform] changes. See also [method set_notify_local_transform].  
         *      
         *  **Note:** Some 3D nodes such as [CSGShape3D] or [CollisionShape3D] automatically enable this to function correctly.  
         */
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44
        constructor(identifier?: any)
        
        /** When using physics interpolation, there will be circumstances in which you want to know the interpolated (displayed) transform of a node rather than the standard transform (which may only be accurate to the most recent physics tick).  
         *  This is particularly important for frame-based operations that take place in [method Node._process], rather than [method Node._physics_process]. Examples include [Camera3D]s focusing on a node, or finding where to fire lasers from on a frame rather than physics tick.  
         *      
         *  **Note:** This function creates an interpolation pump on the [Node3D] the first time it is called, which can respond to physics interpolation resets. If you get problems with "streaking" when initially following a [Node3D], be sure to call [method get_global_transform_interpolated] at least once  *before*  resetting the [Node3D] physics interpolation.  
         */
        getGlobalTransformInterpolated(): Transform3D
        
        /** Returns the parent [Node3D] that directly affects this node's [member global_transform]. Returns `null` if no parent exists, the parent is not a [Node3D], or [member top_level] is `true`.  
         *      
         *  **Note:** This method is not always equivalent to [method Node.get_parent], which does not take [member top_level] into account.  
         */
        getParentNode3D(): null | Node3D
        
        /** If `true`, the node will not receive [constant NOTIFICATION_TRANSFORM_CHANGED] or [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED].  
         *  It may useful to call this method when handling these notifications to prevent infinite recursion.  
         */
        setIgnoreTransformNotification(enabled: boolean): void
        
        /** If `true`, this node's [member global_transform] is automatically orthonormalized. This results in this node not appearing distorted, as if its global scale were set to [constant Vector3.ONE] (or its negative counterpart). See also [method is_scale_disabled] and [method orthonormalize].  
         *      
         *  **Note:** [member transform] is not affected by this setting.  
         */
        setDisableScale(disable: boolean): void
        
        /** Returns `true` if this node's [member global_transform] is automatically orthonormalized. This results in this node not appearing distorted, as if its global scale were set to [constant Vector3.ONE] (or its negative counterpart). See also [method set_disable_scale] and [method orthonormalize].  
         *      
         *  **Note:** [member transform] is not affected by this setting.  
         */
        isScaleDisabled(): boolean
        
        /** Returns the [World3D] this node is registered to.  
         *  Usually, this is the same as the world used by this node's viewport (see [method Node.get_viewport] and [method Viewport.find_world_3d]).  
         */
        getWorld3D(): null | World3D
        
        /** Forces the node's [member global_transform] to update, by sending [constant NOTIFICATION_TRANSFORM_CHANGED]. Fails if the node is not inside the tree.  
         *      
         *  **Note:** For performance reasons, transform changes are usually accumulated and applied  *once*  at the end of the frame. The update propagates through [Node3D] children, as well. Therefore, use this method only when you need an up-to-date transform (such as during physics operations).  
         */
        forceUpdateTransform(): void
        
        /** Updates all the [EditorNode3DGizmo] objects attached to this node. Only works in the editor. */
        updateGizmos(): void
        
        /** Attaches the given [param gizmo] to this node. Only works in the editor.  
         *      
         *  **Note:** [param gizmo] should be an [EditorNode3DGizmo]. The argument type is [Node3DGizmo] to avoid depending on editor classes in [Node3D].  
         */
        addGizmo(gizmo: Node3DGizmo): void
        
        /** Returns all the [EditorNode3DGizmo] objects attached to this node. Only works in the editor. */
        getGizmos(): GArray<Node3DGizmo>
        
        /** Clears all [EditorNode3DGizmo] objects attached to this node. Only works in the editor. */
        clearGizmos(): void
        
        /** Selects the [param gizmo]'s subgizmo with the given [param id] and sets its transform. Only works in the editor.  
         *      
         *  **Note:** The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].  
         */
        setSubgizmoSelection(gizmo: Node3DGizmo, id: int64, transform: Transform3D): void
        
        /** Deselects all subgizmos for this node. Useful to call when the selected subgizmo may no longer exist after a property change. Only works in the editor. */
        clearSubgizmoSelection(): void
        
        /** Returns `true` if this node is inside the scene tree and the [member visible] property is `true` for this node and all of its [Node3D] ancestors  *in sequence* . An ancestor of any other type (such as [Node] or [Node2D]) breaks the sequence. See also [method Node.get_parent].  
         *      
         *  **Note:** This method cannot take [member VisualInstance3D.layers] into account, so even if this method returns `true`, the node may not be rendered.  
         */
        isVisibleInTree(): boolean
        
        /** Allows this node to be rendered. Equivalent to setting [member visible] to `true`. This is the opposite of [method hide]. */
        show(): void
        
        /** Prevents this node from being rendered. Equivalent to setting [member visible] to `false`. This is the opposite of [method show]. */
        hide(): void
        
        /** If `true`, the node will receive [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] whenever [member transform] changes.  
         *      
         *  **Note:** Some 3D nodes such as [CSGShape3D] or [CollisionShape3D] automatically enable this to function correctly.  
         */
        setNotifyLocalTransform(enable: boolean): void
        
        /** Returns `true` if the node receives [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] whenever [member transform] changes. This is enabled with [method set_notify_local_transform]. */
        isLocalTransformNotificationEnabled(): boolean
        
        /** If `true`, the node will receive [constant NOTIFICATION_TRANSFORM_CHANGED] whenever [member global_transform] changes.  
         *      
         *  **Note:** Most 3D nodes such as [VisualInstance3D] or [CollisionObject3D] automatically enable this to function correctly.  
         *      
         *  **Note:** In the editor, nodes will propagate this notification to their children if a gizmo is attached (see [method add_gizmo]).  
         */
        setNotifyTransform(enable: boolean): void
        
        /** Returns `true` if the node receives [constant NOTIFICATION_TRANSFORM_CHANGED] whenever [member global_transform] changes. This is enabled with [method set_notify_transform]. */
        isTransformNotificationEnabled(): boolean
        
        /** Rotates this node's [member basis] around the [param axis] by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotate(axis: Vector3, angle: float64): void
        
        /** Rotates this node's [member global_basis] around the global [param axis] by the given [param angle], in radians. This operation is calculated in global space (relative to the world) and preserves the [member global_position]. */
        globalRotate(axis: Vector3, angle: float64): void
        
        /** Scales this node's [member global_basis] by the given [param scale] factor. This operation is calculated in global space (relative to the world) and preserves the [member global_position].  
         *      
         *  **Note:** This method is not to be confused with the [member scale] property.  
         */
        globalScale(scale: Vector3): void
        
        /** Adds the given translation [param offset] to the node's [member global_position] in global space (relative to the world). */
        globalTranslate(offset: Vector3): void
        
        /** Rotates this node's [member basis] around the [param axis] by the given [param angle], in radians. This operation is calculated in local space (relative to this node) and preserves the [member position]. */
        rotateObjectLocal(axis: Vector3, angle: float64): void
        
        /** Scales this node's [member basis] by the given [param scale] factor. This operation is calculated in local space (relative to this node) and preserves the [member position]. */
        scaleObjectLocal(scale: Vector3): void
        
        /** Adds the given translation [param offset] to the node's position, in local space (relative to this node). */
        translateObjectLocal(offset: Vector3): void
        
        /** Rotates this node's [member basis] around the X axis by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotateX(angle: float64): void
        
        /** Rotates this node's [member basis] around the Y axis by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotateY(angle: float64): void
        
        /** Rotates this node's [member basis] around the Z axis by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotateZ(angle: float64): void
        
        /** Adds the given translation [param offset] to the node's position, in local space (relative to this node).  
         *      
         *  **Note:** Prefer using [method translate_object_local], instead, as this method may be changed in a future release.  
         *      
         *  **Note:** Despite the naming convention, this operation is **not** calculated in parent space for compatibility reasons. To translate in parent space, add [param offset] to the [member position] (`node_3d.position += offset`).  
         */
        translate(offset: Vector3): void
        
        /** Orthonormalizes this node's [member basis]. This method sets this node's [member scale] to [constant Vector3.ONE] (or its negative counterpart), but preserves the [member position] and [member rotation]. See also [method Transform3D.orthonormalized]. */
        orthonormalize(): void
        
        /** Sets this node's [member transform] to [constant Transform3D.IDENTITY], which resets all transformations in parent space ([member position], [member rotation], and [member scale]). */
        setIdentity(): void
        
        /** Rotates the node so that the local forward axis (-Z, [constant Vector3.FORWARD]) points toward the [param target] position. This operation is calculated in global space (relative to the world).  
         *  The local up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the local forward axis. The resulting transform is orthogonal, and the scale is preserved. Non-uniform scaling may not work correctly.  
         *  The [param target] position cannot be the same as the node's position, the [param up] vector cannot be [constant Vector3.ZERO]. Furthermore, the direction from the node's position to the [param target] position cannot be parallel to the [param up] vector, to avoid an unintended rotation around the local Z axis.  
         *  If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).  
         *      
         *  **Note:** This method fails if the node is not in the scene tree. If necessary, use [method look_at_from_position] instead.  
         */
        lookAt(target: Vector3, up?: Vector3 /* = Vector3.ZERO */, useModelFront?: boolean /* = false */): void
        
        /** Moves the node to the specified [param position], then rotates the node to point toward the [param target] position, similar to [method look_at]. This operation is calculated in global space (relative to the world). */
        lookAtFromPosition(position: Vector3, target: Vector3, up?: Vector3 /* = Vector3.ZERO */, useModelFront?: boolean /* = false */): void
        
        /** Returns the [param global_point] converted from global space to this node's local space. This is the opposite of [method to_global]. */
        toLocal(globalPoint: Vector3): Vector3
        
        /** Returns the [param local_point] converted from this node's local space to global space. This is the opposite of [method to_local]. */
        toGlobal(localPoint: Vector3): Vector3
        
        /** The local transformation of this node, in parent space (relative to the parent node). Contains and represents this node's [member position], [member rotation], and [member scale]. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        
        /** The transformation of this node, in global space (relative to the world). Contains and represents this node's [member global_position], [member global_rotation], and global scale.  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Transform3D.IDENTITY].  
         */
        get globalTransform(): Transform3D
        set globalTransform(value: Transform3D)
        
        /** Position (translation) of this node in parent space (relative to the parent node). This is equivalent to the [member transform]'s [member Transform3D.origin]. */
        get position(): Vector3
        set position(value: Vector3)
        
        /** Rotation of this node as [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians and in parent space (relative to the parent node). This value is obtained from [member basis]'s rotation.  
         *  - The [member Vector3.x] is the angle around the local X axis (pitch);  
         *  - The [member Vector3.y] is the angle around the local Y axis (yaw);  
         *  - The [member Vector3.z] is the angle around the local Z axis (roll).  
         *  The order of each consecutive rotation can be changed with [member rotation_order] (see [enum EulerOrder] constants). By default, the YXZ convention is used ([constant EULER_ORDER_YXZ]).  
         *      
         *  **Note:** This property is edited in degrees in the inspector. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        get rotation(): Vector3
        set rotation(value: Vector3)
        
        /** The [member rotation] of this node, in degrees instead of radians.  
         *      
         *  **Note:** This is **not** the property available in the Inspector dock.  
         */
        get rotationDegrees(): Vector3
        set rotationDegrees(value: Vector3)
        
        /** Rotation of this node represented as a [Quaternion] in parent space (relative to the parent node). This value is obtained from [member basis]'s rotation.  
         *      
         *  **Note:** Quaternions are much more suitable for 3D math but are less intuitive. Setting this property can be useful for interpolation (see [method Quaternion.slerp]).  
         */
        get quaternion(): Quaternion
        set quaternion(value: Quaternion)
        
        /** Basis of the [member transform] property. Represents the rotation, scale, and shear of this node in parent space (relative to the parent node). */
        get basis(): Basis
        set basis(value: Basis)
        
        /** Scale of this node in local space (relative to this node). This value is obtained from [member basis]'s scale.  
         *      
         *  **Note:** The behavior of some 3D node types is not affected by this property. These include [Light3D], [Camera3D], [AudioStreamPlayer3D], and more.  
         *  **Warning:** The scale's components must either be all positive or all negative, and **not** exactly `0.0`. Otherwise, it won't be possible to obtain the scale from the [member basis]. This may cause the intended scale to be lost when reloaded from disk, and potentially other unstable behavior.  
         */
        get scale(): Vector3
        set scale(value: Vector3)
        
        /** How this node's rotation and scale are displayed in the Inspector dock. */
        get rotationEditMode(): int64
        set rotationEditMode(value: int64)
        
        /** The axis rotation order of the [member rotation] property. The final orientation is calculated by rotating around the local X, Y, and Z axis in this order. */
        get rotationOrder(): int64
        set rotationOrder(value: int64)
        
        /** If `true`, the node does not inherit its transformations from its parent. As such, node transformations will only be in global space, which also means that [member global_transform] and [member transform] will be identical. */
        get topLevel(): boolean
        set topLevel(value: boolean)
        
        /** Global position (translation) of this node in global space (relative to the world). This is equivalent to the [member global_transform]'s [member Transform3D.origin].  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Vector3.ZERO].  
         */
        get globalPosition(): Vector3
        set globalPosition(value: Vector3)
        
        /** Basis of the [member global_transform] property. Represents the rotation, scale, and shear of this node in global space (relative to the world).  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Basis.IDENTITY].  
         */
        get globalBasis(): Basis
        set globalBasis(value: Basis)
        
        /** Global rotation of this node as [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians and in global space (relative to the world). This value is obtained from [member global_basis]'s rotation.  
         *  - The [member Vector3.x] is the angle around the global X axis (pitch);  
         *  - The [member Vector3.y] is the angle around the global Y axis (yaw);  
         *  - The [member Vector3.z] is the angle around the global Z axis (roll).  
         *      
         *  **Note:** Unlike [member rotation], this property always follows the YXZ convention ([constant EULER_ORDER_YXZ]).  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Vector3.ZERO].  
         */
        get globalRotation(): Vector3
        set globalRotation(value: Vector3)
        
        /** The [member global_rotation] of this node, in degrees instead of radians.  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Vector3.ZERO].  
         */
        get globalRotationDegrees(): Vector3
        set globalRotationDegrees(value: Vector3)
        
        /** If `true`, this node can be visible. The node is only rendered when all of its ancestors are visible, as well. That means [method is_visible_in_tree] must return `true`. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** Path to the visibility range parent for this node and its descendants. The visibility parent must be a [GeometryInstance3D].  
         *  Any visual instance will only be visible if the visibility parent (and all of its visibility ancestors) is hidden by being closer to the camera than its own [member GeometryInstance3D.visibility_range_begin]. Nodes hidden via the [member Node3D.visible] property are essentially removed from the visibility dependency tree, so dependent instances will not take the hidden node or its descendants into account.  
         */
        get visibilityParent(): NodePath
        set visibilityParent(value: NodePath | string)
        
        /** Emitted when this node's visibility changes (see [member visible] and [method is_visible_in_tree]).  
         *  This signal is emitted  *after*  the related [constant NOTIFICATION_VISIBILITY_CHANGED] notification.  
         */
        readonly visibilityChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNode3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNode3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNode3DGizmo extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNode3DGizmo extends __NameMapRefCounted {
    }
    /** Abstract class to expose editor gizmos for [Node3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_node3dgizmo.html  
     */
    class Node3DGizmo extends RefCounted {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNode3DGizmo;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNode3DGizmo;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNoise extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNoise extends __NameMapResource {
        get_noise_1d: "getNoise1D";
        get_noise_2d: "getNoise2D";
        get_noise_2dv: "getNoise2Dv";
        get_noise_3d: "getNoise3D";
        get_noise_3dv: "getNoise3Dv";
        get_image: "getImage";
        get_seamless_image: "getSeamlessImage";
        get_image_3d: "getImage3D";
        get_seamless_image_3d: "getSeamlessImage3D";
    }
    /** Abstract base class for noise generators.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_noise.html  
     */
    class Noise extends Resource {
        constructor(identifier?: any)
        /** Returns the 1D noise value at the given (x) coordinate. */
        getNoise1D(x: float64): float64
        
        /** Returns the 2D noise value at the given position. */
        getNoise2D(x: float64, y: float64): float64
        
        /** Returns the 2D noise value at the given position. */
        getNoise2Dv(v: Vector2): float64
        
        /** Returns the 3D noise value at the given position. */
        getNoise3D(x: float64, y: float64, z: float64): float64
        
        /** Returns the 3D noise value at the given position. */
        getNoise3Dv(v: Vector3): float64
        
        /** Returns an [Image] containing 2D noise values.  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getImage(width: int64, height: int64, invert?: boolean /* = false */, in3DSpace?: boolean /* = false */, normalize?: boolean /* = true */): null | Image
        
        /** Returns an [Image] containing seamless 2D noise values.  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getSeamlessImage(width: int64, height: int64, invert?: boolean /* = false */, in3DSpace?: boolean /* = false */, skirt?: float64 /* = 0.1 */, normalize?: boolean /* = true */): null | Image
        
        /** Returns an [Array] of [Image]s containing 3D noise values for use with [method ImageTexture3D.create].  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getImage3D(width: int64, height: int64, depth: int64, invert?: boolean /* = false */, normalize?: boolean /* = true */): GArray<Image>
        
        /** Returns an [Array] of [Image]s containing seamless 3D noise values for use with [method ImageTexture3D.create].  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getSeamlessImage3D(width: int64, height: int64, depth: int64, invert?: boolean /* = false */, skirt?: float64 /* = 0.1 */, normalize?: boolean /* = true */): GArray<Image>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNoise;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNoise;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNoiseTexture2D extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNoiseTexture2D extends __NameMapTexture2D {
        generate_mipmaps: "generateMipmaps";
        color_ramp: "colorRamp";
        in_3d_space: "in3DSpace";
        as_normal_map: "asNormalMap";
        seamless_blend_skirt: "seamlessBlendSkirt";
        bump_strength: "bumpStrength";
    }
    /** A 2D texture filled with noise generated by a [Noise] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_noisetexture2d.html  
     */
    class NoiseTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** Width of the generated texture (in pixels). */
        get width(): int64
        set width(value: int64)
        
        /** Height of the generated texture (in pixels). */
        get height(): int64
        set height(value: int64)
        
        /** Determines whether mipmaps are generated for this texture. Enabling this results in less texture aliasing in the distance, at the cost of increasing memory usage by roughly 33% and making the noise texture generation take longer.  
         *      
         *  **Note:** [member generate_mipmaps] requires mipmap filtering to be enabled on the material using the [NoiseTexture2D] to have an effect.  
         */
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        
        /** The instance of the [Noise] object. */
        get noise(): null | Noise
        set noise(value: null | Noise)
        
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        get colorRamp(): null | Gradient
        set colorRamp(value: null | Gradient)
        
        /** If `true`, a seamless texture is requested from the [Noise] resource.  
         *      
         *  **Note:** Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.  
         *      
         *  **Note:** The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamless(): boolean
        set seamless(value: boolean)
        
        /** If `true`, inverts the noise texture. White becomes black, black becomes white. */
        get invert(): boolean
        set invert(value: boolean)
        
        /** Determines whether the noise image is calculated in 3D space. May result in reduced contrast. */
        get in3DSpace(): boolean
        set in3DSpace(value: boolean)
        
        /** If `true`, the resulting texture contains a normal map created from the original noise interpreted as a bump map. */
        get asNormalMap(): boolean
        set asNormalMap(value: boolean)
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        get normalize(): boolean
        set normalize(value: boolean)
        
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.  
         *      
         *  **Note:** If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamlessBlendSkirt(): float64
        set seamlessBlendSkirt(value: float64)
        
        /** Strength of the bump maps used in this texture. A higher value will make the bump maps appear larger while a lower value will make them appear softer. */
        get bumpStrength(): float64
        set bumpStrength(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNoiseTexture2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNoiseTexture2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapNoiseTexture3D extends __RPCMapTexture3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapNoiseTexture3D extends __NameMapTexture3D {
        color_ramp: "colorRamp";
        seamless_blend_skirt: "seamlessBlendSkirt";
    }
    /** A 3D texture filled with noise generated by a [Noise] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_noisetexture3d.html  
     */
    class NoiseTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** Width of the generated texture (in pixels). */
        get width(): int64
        set width(value: int64)
        
        /** Height of the generated texture (in pixels). */
        get height(): int64
        set height(value: int64)
        
        /** Depth of the generated texture (in pixels). */
        get depth(): int64
        set depth(value: int64)
        
        /** The instance of the [Noise] object. */
        get noise(): null | Noise
        set noise(value: null | Noise)
        
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        get colorRamp(): null | Gradient
        set colorRamp(value: null | Gradient)
        
        /** If `true`, a seamless texture is requested from the [Noise] resource.  
         *      
         *  **Note:** Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.  
         *      
         *  **Note:** The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamless(): boolean
        set seamless(value: boolean)
        
        /** If `true`, inverts the noise texture. White becomes black, black becomes white. */
        get invert(): boolean
        set invert(value: boolean)
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        get normalize(): boolean
        set normalize(value: boolean)
        
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.  
         *      
         *  **Note:** If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamlessBlendSkirt(): float64
        set seamlessBlendSkirt(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapNoiseTexture3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapNoiseTexture3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOrmMaterial3D extends __RPCMapBaseMaterial3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOrmMaterial3D extends __NameMapBaseMaterial3D {
    }
    class OrmMaterial3D extends BaseMaterial3D {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOrmMaterial3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOrmMaterial3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOccluder3D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOccluder3D extends __NameMapResource {
        get_vertices: "getVertices";
        get_indices: "getIndices";
    }
    /** Occluder shape resource for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_occluder3d.html  
     */
    class Occluder3D extends Resource {
        constructor(identifier?: any)
        /** Returns the occluder shape's vertex positions. */
        getVertices(): PackedVector3Array
        
        /** Returns the occluder shape's vertex indices. */
        getIndices(): PackedInt32Array
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOccluder3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOccluder3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOccluderInstance3D extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOccluderInstance3D extends __NameMapVisualInstance3D {
        set_bake_mask_value: "setBakeMaskValue";
        get_bake_mask_value: "getBakeMaskValue";
        _is_editable_3d_polygon: "_isEditable3DPolygon";
        _get_editable_3d_polygon_resource: "_getEditable3DPolygonResource";
        bake_mask: "bakeMask";
        bake_simplification_distance: "bakeSimplificationDistance";
    }
    /** Provides occlusion culling for 3D nodes, which improves performance in closed areas.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_occluderinstance3d.html  
     */
    class OccluderInstance3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
        setBakeMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getBakeMaskValue(layerNumber: int64): boolean
        _isEditable3DPolygon(): boolean
        _getEditable3DPolygonResource(): null | Resource
        
        /** The occluder resource for this [OccluderInstance3D]. You can generate an occluder resource by selecting an [OccluderInstance3D] node then using the **Bake Occluders** button at the top of the editor.  
         *  You can also draw your own 2D occluder polygon by adding a new [PolygonOccluder3D] resource to the [member occluder] property in the Inspector.  
         *  Alternatively, you can select a primitive occluder to use: [QuadOccluder3D], [BoxOccluder3D] or [SphereOccluder3D].  
         */
        get occluder(): null | Occluder3D
        set occluder(value: null | Occluder3D)
        
        /** The visual layers to account for when baking for occluders. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated occluder mesh. By default, all objects with  *opaque*  materials are taken into account for the occluder baking.  
         *  To improve performance and avoid artifacts, it is recommended to exclude dynamic objects, small objects and fixtures from the baking process by moving them to a separate visual layer and excluding this layer in [member bake_mask].  
         */
        get bakeMask(): int64
        set bakeMask(value: int64)
        
        /** The simplification distance to use for simplifying the generated occluder polygon (in 3D units). Higher values result in a less detailed occluder mesh, which improves performance but reduces culling accuracy.  
         *  The occluder geometry is rendered on the CPU, so it is important to keep its geometry as simple as possible. Since the buffer is rendered at a low resolution, less detailed occluder meshes generally still work well. The default value is fairly aggressive, so you may have to decrease it if you run into false negatives (objects being occluded even though they are visible by the camera). A value of `0.01` will act conservatively, and will keep geometry  *perceptually*  unaffected in the occlusion culling buffer. Depending on the scene, a value of `0.01` may still simplify the mesh noticeably compared to disabling simplification entirely.  
         *  Setting this to `0.0` disables simplification entirely, but vertices in the exact same position will still be merged. The mesh will also be re-indexed to reduce both the number of vertices and indices.  
         *      
         *  **Note:** This uses the [url=https://meshoptimizer.org/]meshoptimizer[/url] library under the hood, similar to LOD generation.  
         */
        get bakeSimplificationDistance(): float64
        set bakeSimplificationDistance(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOccluderInstance3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOccluderInstance3D;
    }
    namespace OccluderPolygon2D {
        enum CullMode {
            CullDisabled = 0,
            CullClockwise = 1,
            CullCounterClockwise = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOccluderPolygon2D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOccluderPolygon2D extends __NameMapResource {
        cull_mode: "cullMode";
    }
    /** Defines a 2D polygon for LightOccluder2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_occluderpolygon2d.html  
     */
    class OccluderPolygon2D extends Resource {
        constructor(identifier?: any)
        /** If `true`, closes the polygon. A closed OccluderPolygon2D occludes the light coming from any direction. An opened OccluderPolygon2D occludes the light only at its outline's direction. */
        get closed(): boolean
        set closed(value: boolean)
        
        /** The culling mode to use. */
        get cullMode(): int64
        set cullMode(value: int64)
        
        /** A [Vector2] array with the index for polygon's vertices positions. */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOccluderPolygon2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOccluderPolygon2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOfflineMultiplayerPeer extends __RPCMapMultiplayerPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOfflineMultiplayerPeer extends __NameMapMultiplayerPeer {
    }
    /** A [MultiplayerPeer] which is always connected and acts as a server.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_offlinemultiplayerpeer.html  
     */
    class OfflineMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOfflineMultiplayerPeer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOfflineMultiplayerPeer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOggPacketSequence extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOggPacketSequence extends __NameMapResource {
        get_length: "getLength";
        packet_data: "packetData";
        granule_positions: "granulePositions";
        sampling_rate: "samplingRate";
    }
    /** A sequence of Ogg packets.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_oggpacketsequence.html  
     */
    class OggPacketSequence extends Resource {
        constructor(identifier?: any)
        /** The length of this stream, in seconds. */
        getLength(): float64
        
        /** Contains the raw packets that make up this OggPacketSequence. */
        get packetData(): GArray<PackedByteArray>
        set packetData(value: GArray<PackedByteArray>)
        
        /** Contains the granule positions for each page in this packet sequence. */
        get granulePositions(): PackedInt64Array
        set granulePositions(value: PackedInt64Array | int64[])
        
        /** Holds sample rate information about this sequence. Must be set by another class that actually understands the codec. */
        get samplingRate(): float64
        set samplingRate(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOggPacketSequence;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOggPacketSequence;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOggPacketSequencePlayback extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOggPacketSequencePlayback extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_oggpacketsequenceplayback.html */
    class OggPacketSequencePlayback extends RefCounted {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOggPacketSequencePlayback;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOggPacketSequencePlayback;
    }
    namespace OmniLight3D {
        enum ShadowMode {
            ShadowDualParaboloid = 0,
            ShadowCube = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOmniLight3D extends __RPCMapLight3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOmniLight3D extends __NameMapLight3D {
        omni_range: "omniRange";
        omni_attenuation: "omniAttenuation";
        omni_shadow_mode: "omniShadowMode";
    }
    /** Omnidirectional light, such as a light bulb or a candle.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_omnilight3d.html  
     */
    class OmniLight3D<Map extends NodePathMap = any> extends Light3D<Map> {
        constructor(identifier?: any)
        /** The light's radius. Note that the effectively lit area may appear to be smaller depending on the [member omni_attenuation] in use. No matter the [member omni_attenuation] in use, the light will never reach anything outside this radius.  
         *      
         *  **Note:** [member omni_range] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         */
        get omniRange(): float64
        set omniRange(value: float64)
        
        /** Controls the distance attenuation function for omnilights.  
         *  A value of `0.0` will maintain a constant brightness through most of the range, but smoothly attenuate the light at the edge of the range. Use a value of `2.0` for physically accurate lights as it results in the proper inverse square attenutation.  
         *      
         *  **Note:** Setting attenuation to `2.0` or higher may result in distant objects receiving minimal light, even within range. For example, with a range of `4096`, an object at `100` units is attenuated by a factor of `0.0001`. With a default brightness of `1`, the light would not be visible at that distance.  
         *      
         *  **Note:** Using negative or values higher than `10.0` may lead to unexpected results.  
         */
        get omniAttenuation(): float64
        set omniAttenuation(value: float64)
        get omniShadowMode(): int64
        set omniShadowMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOmniLight3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOmniLight3D;
    }
    namespace OpenXRApiExtension {
        enum OpenXRAlphaBlendModeSupport {
            OpenxrAlphaBlendModeSupportNone = 0,
            OpenxrAlphaBlendModeSupportReal = 1,
            OpenxrAlphaBlendModeSupportEmulating = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRApiExtension extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRApiExtension extends __NameMapRefCounted {
        get_instance: "getInstance";
        get_system_id: "getSystemId";
        get_session: "getSession";
        transform_from_pose: "transformFromPose";
        xr_result: "xRResult";
        openxr_is_enabled: "openxrIsEnabled";
        get_instance_proc_addr: "getInstanceProcAddr";
        get_error_string: "getErrorString";
        get_swapchain_format_name: "getSwapchainFormatName";
        set_object_name: "setObjectName";
        begin_debug_label_region: "beginDebugLabelRegion";
        end_debug_label_region: "endDebugLabelRegion";
        insert_debug_label: "insertDebugLabel";
        is_initialized: "isInitialized";
        is_running: "isRunning";
        set_custom_play_space: "setCustomPlaySpace";
        get_play_space: "getPlaySpace";
        get_predicted_display_time: "getPredictedDisplayTime";
        get_next_frame_time: "getNextFrameTime";
        can_render: "canRender";
        find_action: "findAction";
        action_get_handle: "actionGetHandle";
        get_hand_tracker: "getHandTracker";
        register_composition_layer_provider: "registerCompositionLayerProvider";
        unregister_composition_layer_provider: "unregisterCompositionLayerProvider";
        register_projection_views_extension: "registerProjectionViewsExtension";
        unregister_projection_views_extension: "unregisterProjectionViewsExtension";
        register_frame_info_extension: "registerFrameInfoExtension";
        unregister_frame_info_extension: "unregisterFrameInfoExtension";
        get_render_state_z_near: "getRenderStateZNear";
        get_render_state_z_far: "getRenderStateZFar";
        set_velocity_texture: "setVelocityTexture";
        set_velocity_depth_texture: "setVelocityDepthTexture";
        set_velocity_target_size: "setVelocityTargetSize";
        get_supported_swapchain_formats: "getSupportedSwapchainFormats";
        openxr_swapchain_create: "openxrSwapchainCreate";
        openxr_swapchain_free: "openxrSwapchainFree";
        openxr_swapchain_get_swapchain: "openxrSwapchainGetSwapchain";
        openxr_swapchain_acquire: "openxrSwapchainAcquire";
        openxr_swapchain_get_image: "openxrSwapchainGetImage";
        openxr_swapchain_release: "openxrSwapchainRelease";
        get_projection_layer: "getProjectionLayer";
        set_render_region: "setRenderRegion";
        set_emulate_environment_blend_mode_alpha_blend: "setEmulateEnvironmentBlendModeAlphaBlend";
        is_environment_blend_mode_alpha_supported: "isEnvironmentBlendModeAlphaSupported";
    }
    class OpenXRApiExtension extends RefCounted {
        constructor(identifier?: any)
        getInstance(): int64
        getSystemId(): int64
        getSession(): int64
        transformFromPose(pose: int64): Transform3D
        xRResult(result: int64, format: string, args: GArray): boolean
        static openxrIsEnabled(checkRunInEditor: boolean): boolean
        getInstanceProcAddr(name: string): int64
        getErrorString(result: int64): string
        getSwapchainFormatName(swapchainFormat: int64): string
        setObjectName(objectType: int64, objectHandle: int64, objectName: string): void
        beginDebugLabelRegion(labelName: string): void
        endDebugLabelRegion(): void
        insertDebugLabel(labelName: string): void
        isInitialized(): boolean
        isRunning(): boolean
        setCustomPlaySpace(space: int64): void
        getPlaySpace(): int64
        getPredictedDisplayTime(): int64
        getNextFrameTime(): int64
        canRender(): boolean
        findAction(name: string, actionSet: Rid): Rid
        actionGetHandle(action: Rid): int64
        getHandTracker(handIndex: int64): int64
        registerCompositionLayerProvider(extension: OpenXRExtensionWrapper): void
        unregisterCompositionLayerProvider(extension: OpenXRExtensionWrapper): void
        registerProjectionViewsExtension(extension: OpenXRExtensionWrapper): void
        unregisterProjectionViewsExtension(extension: OpenXRExtensionWrapper): void
        registerFrameInfoExtension(extension: OpenXRExtensionWrapper): void
        unregisterFrameInfoExtension(extension: OpenXRExtensionWrapper): void
        getRenderStateZNear(): float64
        getRenderStateZFar(): float64
        setVelocityTexture(renderTarget: Rid): void
        setVelocityDepthTexture(renderTarget: Rid): void
        setVelocityTargetSize(targetSize: Vector2I): void
        getSupportedSwapchainFormats(): PackedInt64Array
        openxrSwapchainCreate(createFlags: int64, usageFlags: int64, swapchainFormat: int64, width: int64, height: int64, sampleCount: int64, arraySize: int64): int64
        openxrSwapchainFree(swapchain: int64): void
        openxrSwapchainGetSwapchain(swapchain: int64): int64
        openxrSwapchainAcquire(swapchain: int64): void
        openxrSwapchainGetImage(swapchain: int64): Rid
        openxrSwapchainRelease(swapchain: int64): void
        getProjectionLayer(): int64
        setRenderRegion(renderRegion: Rect2I): void
        setEmulateEnvironmentBlendModeAlphaBlend(enabled: boolean): void
        isEnvironmentBlendModeAlphaSupported(): OpenXRApiExtension.OpenXRAlphaBlendModeSupport
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRApiExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRApiExtension;
    }
    namespace OpenXRAction {
        enum ActionType {
            OpenxrActionBool = 0,
            OpenxrActionFloat = 1,
            OpenxrActionVector2 = 2,
            OpenxrActionPose = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRAction extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRAction extends __NameMapResource {
        localized_name: "localizedName";
        action_type: "actionType";
        toplevel_paths: "toplevelPaths";
    }
    /** An OpenXR action.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxraction.html  
     */
    class OpenXRAction extends Resource {
        constructor(identifier?: any)
        /** The localized description of this action. */
        get localizedName(): string
        set localizedName(value: string)
        
        /** The type of action. */
        get actionType(): int64
        set actionType(value: int64)
        
        /** A collections of toplevel paths to which this action can be bound. */
        get toplevelPaths(): PackedStringArray
        set toplevelPaths(value: PackedStringArray | string[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRAction;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRAction;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRActionBindingModifier extends __RPCMapOpenXRBindingModifier {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRActionBindingModifier extends __NameMapOpenXRBindingModifier {
    }
    /** Binding modifier that applies on individual actions related to an interaction profile.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxractionbindingmodifier.html  
     */
    class OpenXRActionBindingModifier extends OpenXRBindingModifier {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRActionBindingModifier;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRActionBindingModifier;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRActionMap extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRActionMap extends __NameMapResource {
        get_action_set_count: "getActionSetCount";
        find_action_set: "findActionSet";
        get_action_set: "getActionSet";
        add_action_set: "addActionSet";
        remove_action_set: "removeActionSet";
        get_interaction_profile_count: "getInteractionProfileCount";
        find_interaction_profile: "findInteractionProfile";
        get_interaction_profile: "getInteractionProfile";
        add_interaction_profile: "addInteractionProfile";
        remove_interaction_profile: "removeInteractionProfile";
        create_default_action_sets: "createDefaultActionSets";
        action_sets: "actionSets";
        interaction_profiles: "interactionProfiles";
    }
    /** Collection of [OpenXRActionSet] and [OpenXRInteractionProfile] resources for the OpenXR module.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxractionmap.html  
     */
    class OpenXRActionMap extends Resource {
        constructor(identifier?: any)
        /** Retrieve the number of actions sets in our action map. */
        getActionSetCount(): int64
        
        /** Retrieve an action set by name. */
        findActionSet(name: string): null | OpenXRActionSet
        
        /** Retrieve the action set at this index. */
        getActionSet(idx: int64): null | OpenXRActionSet
        
        /** Add an action set. */
        addActionSet(actionSet: OpenXRActionSet): void
        
        /** Remove an action set. */
        removeActionSet(actionSet: OpenXRActionSet): void
        
        /** Retrieve the number of interaction profiles in our action map. */
        getInteractionProfileCount(): int64
        
        /** Find an interaction profile by its name (path). */
        findInteractionProfile(name: string): null | OpenXRInteractionProfile
        
        /** Get the interaction profile at this index. */
        getInteractionProfile(idx: int64): null | OpenXRInteractionProfile
        
        /** Add an interaction profile. */
        addInteractionProfile(interactionProfile: OpenXRInteractionProfile): void
        
        /** Remove an interaction profile. */
        removeInteractionProfile(interactionProfile: OpenXRInteractionProfile): void
        
        /** Setup this action set with our default actions. */
        createDefaultActionSets(): void
        
        /** Collection of [OpenXRActionSet]s that are part of this action map. */
        get actionSets(): OpenXRActionSet
        set actionSets(value: OpenXRActionSet)
        
        /** Collection of [OpenXRInteractionProfile]s that are part of this action map. */
        get interactionProfiles(): OpenXRInteractionProfile
        set interactionProfiles(value: OpenXRInteractionProfile)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRActionMap;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRActionMap;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRActionSet extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRActionSet extends __NameMapResource {
        get_action_count: "getActionCount";
        add_action: "addAction";
        remove_action: "removeAction";
        localized_name: "localizedName";
    }
    /** Collection of [OpenXRAction] resources that make up an action set.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxractionset.html  
     */
    class OpenXRActionSet extends Resource {
        constructor(identifier?: any)
        /** Retrieve the number of actions in our action set. */
        getActionCount(): int64
        
        /** Add an action to this action set. */
        addAction(action: OpenXRAction): void
        
        /** Remove an action from this action set. */
        removeAction(action: OpenXRAction): void
        
        /** The localized name of this action set. */
        get localizedName(): string
        set localizedName(value: string)
        
        /** The priority for this action set. */
        get priority(): int64
        set priority(value: int64)
        
        /** Collection of actions for this action set. */
        get actions(): OpenXRAction
        set actions(value: OpenXRAction)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRActionSet;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRActionSet;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRAnalogThresholdModifier extends __RPCMapOpenXRActionBindingModifier {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRAnalogThresholdModifier extends __NameMapOpenXRActionBindingModifier {
        on_threshold: "onThreshold";
        off_threshold: "offThreshold";
        on_haptic: "onHaptic";
        off_haptic: "offHaptic";
    }
    /** The analog threshold binding modifier can modify a float input to a boolean input with specified thresholds.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxranalogthresholdmodifier.html  
     */
    class OpenXRAnalogThresholdModifier extends OpenXRActionBindingModifier {
        constructor(identifier?: any)
        /** When our input value is equal or larger than this value, our output becomes `true`. It stays `true` until it falls under the [member off_threshold] value. */
        get onThreshold(): float64
        set onThreshold(value: float64)
        
        /** When our input value falls below this, our output becomes `false`. */
        get offThreshold(): float64
        set offThreshold(value: float64)
        
        /** Haptic pulse to emit when the user presses the input. */
        get onHaptic(): null | OpenXRHapticBase
        set onHaptic(value: null | OpenXRHapticBase)
        
        /** Haptic pulse to emit when the user releases the input. */
        get offHaptic(): null | OpenXRHapticBase
        set offHaptic(value: null | OpenXRHapticBase)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRAnalogThresholdModifier;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRAnalogThresholdModifier;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRBindingModifier extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRBindingModifier extends __NameMapResource {
        _get_description: "_getDescription";
        _get_ip_modification: "_getIPModification";
    }
    /** Binding modifier base class.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrbindingmodifier.html  
     */
    class OpenXRBindingModifier extends Resource {
        constructor(identifier?: any)
        /** Return the description of this class that is used for the title bar of the binding modifier editor. */
        /* gdvirtual */ _getDescription(): string
        
        /** Returns the data that is sent to OpenXR when submitting the suggested interacting bindings this modifier is a part of.  
         *      
         *  **Note:** This must be data compatible with an `XrBindingModificationBaseHeaderKHR` structure.  
         */
        /* gdvirtual */ _getIPModification(): PackedByteArray
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRBindingModifier;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRBindingModifier;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRBindingModifierEditor extends __RPCMapPanelContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRBindingModifierEditor extends __NameMapPanelContainer {
        get_binding_modifier: "getBindingModifier";
        binding_modifier_removed: "bindingModifierRemoved";
    }
    /** Binding modifier editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrbindingmodifiereditor.html  
     */
    class OpenXRBindingModifierEditor<Map extends NodePathMap = any> extends PanelContainer<Map> {
        constructor(identifier?: any)
        /** Returns the [OpenXRBindingModifier] currently being edited. */
        getBindingModifier(): null | OpenXRBindingModifier
        
        /** Setup this editor for the provided [param action_map] and [param binding_modifier]. */
        setup(actionMap: OpenXRActionMap, bindingModifier: OpenXRBindingModifier): void
        
        /** Signal emitted when the user presses the delete binding modifier button for this modifier. */
        readonly bindingModifierRemoved: Signal<(bindingModifierEditor: GObject) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRBindingModifierEditor;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRBindingModifierEditor;
    }
    namespace OpenXRCompositionLayer {
        enum Filter {
            FilterNearest = 0,
            FilterLinear = 1,
            FilterCubic = 2,
        }
        enum MipmapMode {
            MipmapModeDisabled = 0,
            MipmapModeNearest = 1,
            MipmapModeLinear = 2,
        }
        enum Wrap {
            WrapClampToBorder = 0,
            WrapClampToEdge = 1,
            WrapRepeat = 2,
            WrapMirroredRepeat = 3,
            WrapMirrorClampToEdge = 4,
        }
        enum Swizzle {
            SwizzleRed = 0,
            SwizzleGreen = 1,
            SwizzleBlue = 2,
            SwizzleAlpha = 3,
            SwizzleZero = 4,
            SwizzleOne = 5,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRCompositionLayer extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRCompositionLayer extends __NameMapNode3D {
        get_android_surface: "getAndroidSurface";
        is_natively_supported: "isNativelySupported";
        intersects_ray: "intersectsRay";
        layer_viewport: "layerViewport";
        use_android_surface: "useAndroidSurface";
        android_surface_size: "androidSurfaceSize";
        sort_order: "sortOrder";
        alpha_blend: "alphaBlend";
        enable_hole_punch: "enableHolePunch";
        swapchain_state_min_filter: "swapchainStateMinFilter";
        swapchain_state_mag_filter: "swapchainStateMagFilter";
        swapchain_state_mipmap_mode: "swapchainStateMipmapMode";
        swapchain_state_horizontal_wrap: "swapchainStateHorizontalWrap";
        swapchain_state_vertical_wrap: "swapchainStateVerticalWrap";
        swapchain_state_red_swizzle: "swapchainStateRedSwizzle";
        swapchain_state_green_swizzle: "swapchainStateGreenSwizzle";
        swapchain_state_blue_swizzle: "swapchainStateBlueSwizzle";
        swapchain_state_alpha_swizzle: "swapchainStateAlphaSwizzle";
        swapchain_state_max_anisotropy: "swapchainStateMaxAnisotropy";
        swapchain_state_border_color: "swapchainStateBorderColor";
    }
    /** The parent class of all OpenXR composition layer nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrcompositionlayer.html  
     */
    class OpenXRCompositionLayer<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns a [JavaObject] representing an `android.view.Surface` if [member use_android_surface] is enabled and OpenXR has created the surface. Otherwise, this will return `null`.  
         *      
         *  **Note:** The surface can only be created during an active OpenXR session. So, if [member use_android_surface] is enabled outside of an OpenXR session, it won't be created until a new session fully starts.  
         */
        getAndroidSurface(): null | JavaObject
        
        /** Returns `true` if the OpenXR runtime natively supports this composition layer type.  
         *      
         *  **Note:** This will only return an accurate result after the OpenXR session has started.  
         */
        isNativelySupported(): boolean
        
        /** Returns UV coordinates where the given ray intersects with the composition layer. [param origin] and [param direction] must be in global space.  
         *  Returns `Vector2(-1.0, -1.0)` if the ray doesn't intersect.  
         */
        intersectsRay(origin: Vector3, direction: Vector3): Vector2
        
        /** The [SubViewport] to render on the composition layer. */
        get layerViewport(): null | GObject
        set layerViewport(value: null | GObject)
        
        /** If enabled, an Android surface will be created (with the dimensions from [member android_surface_size]) which will provide the 2D content for the composition layer, rather than using [member layer_viewport].  
         *  See [method get_android_surface] for information about how to get the surface so that your application can draw to it.  
         *      
         *  **Note:** This will only work in Android builds.  
         */
        get useAndroidSurface(): boolean
        set useAndroidSurface(value: boolean)
        
        /** The size of the Android surface to create if [member use_android_surface] is enabled. */
        get androidSurfaceSize(): Vector2I
        set androidSurfaceSize(value: Vector2I)
        
        /** The sort order for this composition layer. Higher numbers will be shown in front of lower numbers.  
         *      
         *  **Note:** This will have no effect if a fallback mesh is being used.  
         */
        get sortOrder(): int64
        set sortOrder(value: int64)
        
        /** Enables the blending the layer using its alpha channel.  
         *  Can be combined with [member Viewport.transparent_bg] to give the layer a transparent background.  
         */
        get alphaBlend(): boolean
        set alphaBlend(value: boolean)
        
        /** Enables a technique called "hole punching", which allows putting the composition layer behind the main projection layer (i.e. setting [member sort_order] to a negative value) while "punching a hole" through everything rendered by Godot so that the layer is still visible.  
         *  This can be used to create the illusion that the composition layer exists in the same 3D space as everything rendered by Godot, allowing objects to appear to pass both behind or in front of the composition layer.  
         */
        get enableHolePunch(): boolean
        set enableHolePunch(value: boolean)
        
        /** The minification filter of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMinFilter(): int64
        set swapchainStateMinFilter(value: int64)
        
        /** The magnification filter of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMagFilter(): int64
        set swapchainStateMagFilter(value: int64)
        
        /** The mipmap mode of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMipmapMode(): int64
        set swapchainStateMipmapMode(value: int64)
        
        /** The horizontal wrap mode of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateHorizontalWrap(): int64
        set swapchainStateHorizontalWrap(value: int64)
        
        /** The vertical wrap mode of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateVerticalWrap(): int64
        set swapchainStateVerticalWrap(value: int64)
        
        /** The swizzle value for the red channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateRedSwizzle(): int64
        set swapchainStateRedSwizzle(value: int64)
        
        /** The swizzle value for the green channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateGreenSwizzle(): int64
        set swapchainStateGreenSwizzle(value: int64)
        
        /** The swizzle value for the blue channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateBlueSwizzle(): int64
        set swapchainStateBlueSwizzle(value: int64)
        
        /** The swizzle value for the alpha channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateAlphaSwizzle(): int64
        set swapchainStateAlphaSwizzle(value: int64)
        
        /** The max anisotropy of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMaxAnisotropy(): float64
        set swapchainStateMaxAnisotropy(value: float64)
        
        /** The border color of the swapchain state that is used when the wrap mode clamps to the border.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateBorderColor(): Color
        set swapchainStateBorderColor(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRCompositionLayer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRCompositionLayer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRCompositionLayerCylinder extends __RPCMapOpenXRCompositionLayer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRCompositionLayerCylinder extends __NameMapOpenXRCompositionLayer {
        aspect_ratio: "aspectRatio";
        central_angle: "centralAngle";
        fallback_segments: "fallbackSegments";
    }
    /** An OpenXR composition layer that is rendered as an internal slice of a cylinder.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrcompositionlayercylinder.html  
     */
    class OpenXRCompositionLayerCylinder<Map extends NodePathMap = any> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The radius of the cylinder. */
        get radius(): float64
        set radius(value: float64)
        
        /** The aspect ratio of the slice. Used to set the height relative to the width. */
        get aspectRatio(): float64
        set aspectRatio(value: float64)
        
        /** The central angle of the cylinder. Used to set the width. */
        get centralAngle(): float64
        set centralAngle(value: float64)
        
        /** The number of segments to use in the fallback mesh. */
        get fallbackSegments(): int64
        set fallbackSegments(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRCompositionLayerCylinder;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRCompositionLayerCylinder;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRCompositionLayerEquirect extends __RPCMapOpenXRCompositionLayer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRCompositionLayerEquirect extends __NameMapOpenXRCompositionLayer {
        central_horizontal_angle: "centralHorizontalAngle";
        upper_vertical_angle: "upperVerticalAngle";
        lower_vertical_angle: "lowerVerticalAngle";
        fallback_segments: "fallbackSegments";
    }
    /** An OpenXR composition layer that is rendered as an internal slice of a sphere.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrcompositionlayerequirect.html  
     */
    class OpenXRCompositionLayerEquirect<Map extends NodePathMap = any> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The radius of the sphere. */
        get radius(): float64
        set radius(value: float64)
        
        /** The central horizontal angle of the sphere. Used to set the width. */
        get centralHorizontalAngle(): float64
        set centralHorizontalAngle(value: float64)
        
        /** The upper vertical angle of the sphere. Used (together with [member lower_vertical_angle]) to set the height. */
        get upperVerticalAngle(): float64
        set upperVerticalAngle(value: float64)
        
        /** The lower vertical angle of the sphere. Used (together with [member upper_vertical_angle]) to set the height. */
        get lowerVerticalAngle(): float64
        set lowerVerticalAngle(value: float64)
        
        /** The number of segments to use in the fallback mesh. */
        get fallbackSegments(): int64
        set fallbackSegments(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRCompositionLayerEquirect;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRCompositionLayerEquirect;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRCompositionLayerQuad extends __RPCMapOpenXRCompositionLayer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRCompositionLayerQuad extends __NameMapOpenXRCompositionLayer {
        quad_size: "quadSize";
    }
    /** An OpenXR composition layer that is rendered as a quad.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrcompositionlayerquad.html  
     */
    class OpenXRCompositionLayerQuad<Map extends NodePathMap = any> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The dimensions of the quad. */
        get quadSize(): Vector2
        set quadSize(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRCompositionLayerQuad;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRCompositionLayerQuad;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRDpadBindingModifier extends __RPCMapOpenXRIPBindingModifier {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRDpadBindingModifier extends __NameMapOpenXRIPBindingModifier {
        action_set: "actionSet";
        input_path: "inputPath";
        threshold_released: "thresholdReleased";
        center_region: "centerRegion";
        wedge_angle: "wedgeAngle";
        is_sticky: "isSticky";
        on_haptic: "onHaptic";
        off_haptic: "offHaptic";
    }
    /** The DPad binding modifier converts an axis input to a dpad output.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrdpadbindingmodifier.html  
     */
    class OpenXRDpadBindingModifier extends OpenXRIPBindingModifier {
        constructor(identifier?: any)
        /** Action set for which this dpad binding modifier is active. */
        get actionSet(): null | OpenXRActionSet
        set actionSet(value: null | OpenXRActionSet)
        
        /** Input path for this dpad binding modifier. */
        get inputPath(): string
        set inputPath(value: string)
        
        /** When our input value is equal or larger than this value, our dpad in that direction becomes `true`. It stays `true` until it falls under the [member threshold_released] value. */
        get threshold(): float64
        set threshold(value: float64)
        
        /** When our input value falls below this, our output becomes `false`. */
        get thresholdReleased(): float64
        set thresholdReleased(value: float64)
        
        /** Center region in which our center position of our dpad return `true`. */
        get centerRegion(): float64
        set centerRegion(value: float64)
        
        /** The angle of each wedge that identifies the 4 directions of the emulated dpad. */
        get wedgeAngle(): float64
        set wedgeAngle(value: float64)
        
        /** If `false`, when the joystick enters a new dpad zone this becomes `true`.  
         *  If `true`, when the joystick remains in active dpad zone, this remains `true` even if we overlap with another zone.  
         */
        get isSticky(): boolean
        set isSticky(value: boolean)
        
        /** Haptic pulse to emit when the user presses the input. */
        get onHaptic(): null | OpenXRHapticBase
        set onHaptic(value: null | OpenXRHapticBase)
        
        /** Haptic pulse to emit when the user releases the input. */
        get offHaptic(): null | OpenXRHapticBase
        set offHaptic(value: null | OpenXRHapticBase)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRDpadBindingModifier;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRDpadBindingModifier;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRExtensionWrapper extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRExtensionWrapper extends __NameMapGObject {
        _get_requested_extensions: "_getRequestedExtensions";
        _set_system_properties_and_get_next_pointer: "_setSystemPropertiesAndGetNextPointer";
        _set_instance_create_info_and_get_next_pointer: "_setInstanceCreateInfoAndGetNextPointer";
        _set_session_create_and_get_next_pointer: "_setSessionCreateAndGetNextPointer";
        _set_swapchain_create_info_and_get_next_pointer: "_setSwapchainCreateInfoAndGetNextPointer";
        _set_hand_joint_locations_and_get_next_pointer: "_setHandJointLocationsAndGetNextPointer";
        _set_projection_views_and_get_next_pointer: "_setProjectionViewsAndGetNextPointer";
        _set_frame_wait_info_and_get_next_pointer: "_setFrameWaitInfoAndGetNextPointer";
        _set_frame_end_info_and_get_next_pointer: "_setFrameEndInfoAndGetNextPointer";
        _set_view_locate_info_and_get_next_pointer: "_setViewLocateInfoAndGetNextPointer";
        _set_reference_space_create_info_and_get_next_pointer: "_setReferenceSpaceCreateInfoAndGetNextPointer";
        _get_composition_layer_count: "_getCompositionLayerCount";
        _get_composition_layer: "_getCompositionLayer";
        _get_composition_layer_order: "_getCompositionLayerOrder";
        _get_suggested_tracker_names: "_getSuggestedTrackerNames";
        _on_register_metadata: "_onRegisterMetadata";
        _on_before_instance_created: "_onBeforeInstanceCreated";
        _on_instance_created: "_onInstanceCreated";
        _on_instance_destroyed: "_onInstanceDestroyed";
        _on_session_created: "_onSessionCreated";
        _on_process: "_onProcess";
        _on_sync_actions: "_onSyncActions";
        _on_pre_render: "_onPreRender";
        _on_main_swapchains_created: "_onMainSwapchainsCreated";
        _on_pre_draw_viewport: "_onPreDrawViewport";
        _on_post_draw_viewport: "_onPostDrawViewport";
        _on_session_destroyed: "_onSessionDestroyed";
        _on_state_idle: "_onStateIdle";
        _on_state_ready: "_onStateReady";
        _on_state_synchronized: "_onStateSynchronized";
        _on_state_visible: "_onStateVisible";
        _on_state_focused: "_onStateFocused";
        _on_state_stopping: "_onStateStopping";
        _on_state_loss_pending: "_onStateLossPending";
        _on_state_exiting: "_onStateExiting";
        _on_event_polled: "_onEventPolled";
        _set_viewport_composition_layer_and_get_next_pointer: "_setViewportCompositionLayerAndGetNextPointer";
        _get_viewport_composition_layer_extension_properties: "_getViewportCompositionLayerExtensionProperties";
        _get_viewport_composition_layer_extension_property_defaults: "_getViewportCompositionLayerExtensionPropertyDefaults";
        _on_viewport_composition_layer_destroyed: "_onViewportCompositionLayerDestroyed";
        _set_android_surface_swapchain_create_info_and_get_next_pointer: "_setAndroidSurfaceSwapchainCreateInfoAndGetNextPointer";
        get_openxr_api: "getOpenxrApi";
        register_extension_wrapper: "registerExtensionWrapper";
    }
    /** Allows implementing OpenXR extensions with GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrextensionwrapper.html  
     */
    class OpenXRExtensionWrapper extends GObject {
        constructor(identifier?: any)
        /** Returns a [Dictionary] of OpenXR extensions related to this extension. The [Dictionary] should contain the name of the extension, mapped to a `bool *` cast to an integer:  
         *  - If the `bool *` is a `nullptr` this extension is mandatory.  
         *  - If the `bool *` points to a boolean, the boolean will be updated to `true` if the extension is enabled.  
         */
        /* gdvirtual */ _getRequestedExtensions(): GDictionary
        
        /** Adds additional data structures when querying OpenXR system abilities. */
        /* gdvirtual */ _setSystemPropertiesAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when the OpenXR instance is created. */
        /* gdvirtual */ _setInstanceCreateInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when the OpenXR session is created. */
        /* gdvirtual */ _setSessionCreateAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when creating OpenXR swapchains. */
        /* gdvirtual */ _setSwapchainCreateInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when each hand tracker is created. */
        /* gdvirtual */ _setHandJointLocationsAndGetNextPointer(handIndex: int64, nextPointer: int64): int64
        
        /** Adds additional data structures to the projection view of the given [param view_index]. */
        /* gdvirtual */ _setProjectionViewsAndGetNextPointer(viewIndex: int64, nextPointer: int64): int64
        
        /** Adds additional data structures to `XrFrameWaitInfo`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_frame_info_extension].  
         */
        /* gdvirtual */ _setFrameWaitInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures to `XrFrameEndInfo`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_frame_info_extension].  
         */
        /* gdvirtual */ _setFrameEndInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures to `XrViewLocateInfo`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_frame_info_extension].  
         */
        /* gdvirtual */ _setViewLocateInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures to `XrReferenceSpaceCreateInfo`. */
        /* gdvirtual */ _setReferenceSpaceCreateInfoAndGetNextPointer(referenceSpaceType: int64, nextPointer: int64): int64
        
        /** Returns the number of composition layers this extension wrapper provides via [method _get_composition_layer].  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_composition_layer_provider].  
         */
        /* gdvirtual */ _getCompositionLayerCount(): int64
        
        /** Returns a pointer to an `XrCompositionLayerBaseHeader` struct to provide the given composition layer.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_composition_layer_provider].  
         */
        /* gdvirtual */ _getCompositionLayer(index: int64): int64
        
        /** Returns an integer that will be used to sort the given composition layer provided via [method _get_composition_layer]. Lower numbers will move the layer to the front of the list, and higher numbers to the end. The default projection layer has an order of `0`, so layers provided by this method should probably be above or below (but not exactly) `0`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_composition_layer_provider].  
         */
        /* gdvirtual */ _getCompositionLayerOrder(index: int64): int64
        
        /** Returns a [PackedStringArray] of positional tracker names that are used within the extension wrapper. */
        /* gdvirtual */ _getSuggestedTrackerNames(): PackedStringArray
        
        /** Allows extensions to register additional controller metadata. This function is called even when the OpenXR API is not constructed as the metadata needs to be available to the editor.  
         *  Extensions should also provide metadata regardless of whether they are supported on the host system. The controller data is used to setup action maps for users who may have access to the relevant hardware.  
         */
        /* gdvirtual */ _onRegisterMetadata(): void
        
        /** Called before the OpenXR instance is created. */
        /* gdvirtual */ _onBeforeInstanceCreated(): void
        
        /** Called right after the OpenXR instance is created. */
        /* gdvirtual */ _onInstanceCreated(instance: int64): void
        
        /** Called right before the OpenXR instance is destroyed. */
        /* gdvirtual */ _onInstanceDestroyed(): void
        
        /** Called right after the OpenXR session is created. */
        /* gdvirtual */ _onSessionCreated(session: int64): void
        
        /** Called as part of the OpenXR process handling. This happens right before general and physics processing steps of the main loop. During this step controller data is queried and made available to game logic. */
        /* gdvirtual */ _onProcess(): void
        
        /** Called when OpenXR has performed its action sync. */
        /* gdvirtual */ _onSyncActions(): void
        
        /** Called right before the XR viewports begin their rendering step. */
        /* gdvirtual */ _onPreRender(): void
        
        /** Called right after the main swapchains are (re)created. */
        /* gdvirtual */ _onMainSwapchainsCreated(): void
        
        /** Called right before the given viewport is rendered. */
        /* gdvirtual */ _onPreDrawViewport(viewport: Rid): void
        
        /** Called right after the given viewport is rendered.  
         *      
         *  **Note:** The draw commands might only be queued at this point, not executed.  
         */
        /* gdvirtual */ _onPostDrawViewport(viewport: Rid): void
        
        /** Called right before the OpenXR session is destroyed. */
        /* gdvirtual */ _onSessionDestroyed(): void
        
        /** Called when the OpenXR session state is changed to idle. */
        /* gdvirtual */ _onStateIdle(): void
        
        /** Called when the OpenXR session state is changed to ready. This means OpenXR is ready to set up the session. */
        /* gdvirtual */ _onStateReady(): void
        
        /** Called when the OpenXR session state is changed to synchronized. OpenXR also returns to this state when the application loses focus. */
        /* gdvirtual */ _onStateSynchronized(): void
        
        /** Called when the OpenXR session state is changed to visible. This means OpenXR is now ready to receive frames. */
        /* gdvirtual */ _onStateVisible(): void
        
        /** Called when the OpenXR session state is changed to focused. This state is the active state when the game runs. */
        /* gdvirtual */ _onStateFocused(): void
        
        /** Called when the OpenXR session state is changed to stopping. */
        /* gdvirtual */ _onStateStopping(): void
        
        /** Called when the OpenXR session state is changed to loss pending. */
        /* gdvirtual */ _onStateLossPending(): void
        
        /** Called when the OpenXR session state is changed to exiting. */
        /* gdvirtual */ _onStateExiting(): void
        
        /** Called when there is an OpenXR event to process. When implementing, return `true` if the event was handled, return `false` otherwise. */
        /* gdvirtual */ _onEventPolled(event: int64): boolean
        
        /** Adds additional data structures to composition layers created by [OpenXRCompositionLayer].  
         *  [param property_values] contains the values of the properties returned by [method _get_viewport_composition_layer_extension_properties].  
         *  [param layer] is a pointer to an `XrCompositionLayerBaseHeader` struct.  
         */
        /* gdvirtual */ _setViewportCompositionLayerAndGetNextPointer(layer: int64, propertyValues: GDictionary, nextPointer: int64): int64
        
        /** Gets an array of [Dictionary]s that represent properties, just like [method Object._get_property_list], that will be added to [OpenXRCompositionLayer] nodes. */
        /* gdvirtual */ _getViewportCompositionLayerExtensionProperties(): GArray<GDictionary>
        
        /** Gets a [Dictionary] containing the default values for the properties returned by [method _get_viewport_composition_layer_extension_properties]. */
        /* gdvirtual */ _getViewportCompositionLayerExtensionPropertyDefaults(): GDictionary
        
        /** Called when a composition layer created via [OpenXRCompositionLayer] is destroyed.  
         *  [param layer] is a pointer to an `XrCompositionLayerBaseHeader` struct.  
         */
        /* gdvirtual */ _onViewportCompositionLayerDestroyed(layer: int64): void
        
        /** Adds additional data structures to Android surface swapchains created by [OpenXRCompositionLayer].  
         *  [param property_values] contains the values of the properties returned by [method _get_viewport_composition_layer_extension_properties].  
         */
        /* gdvirtual */ _setAndroidSurfaceSwapchainCreateInfoAndGetNextPointer(propertyValues: GDictionary, nextPointer: int64): int64
        
        /** Returns the created [OpenXRAPIExtension], which can be used to access the OpenXR API. */
        getOpenxrApi(): null | OpenXRApiExtension
        
        /** Registers the extension. This should happen at core module initialization level. */
        registerExtensionWrapper(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRExtensionWrapper;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRExtensionWrapper;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRExtensionWrapperExtension extends __RPCMapOpenXRExtensionWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRExtensionWrapperExtension extends __NameMapOpenXRExtensionWrapper {
    }
    /** Allows implementing OpenXR extensions with GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrextensionwrapperextension.html  
     */
    class OpenXRExtensionWrapperExtension extends OpenXRExtensionWrapper {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRExtensionWrapperExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRExtensionWrapperExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRFutureExtension extends __RPCMapOpenXRExtensionWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRFutureExtension extends __NameMapOpenXRExtensionWrapper {
        is_active: "isActive";
        register_future: "registerFuture";
        cancel_future: "cancelFuture";
    }
    /** The OpenXR Future extension allows for asynchronous APIs to be used.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrfutureextension.html  
     */
    class OpenXRFutureExtension extends OpenXRExtensionWrapper {
        constructor(identifier?: any)
        /** Returns `true` if futures are available in the OpenXR runtime used. This function will only return a usable result after OpenXR has been initialized. */
        isActive(): boolean
        
        /** Register an OpenXR Future object so we monitor for completion. [param future] must be an `XrFutureEXT` value previously returned by an API that started an asynchronous function.  
         *  You can optionally specify [param on_success], it will be invoked on successful completion of the future.  
         *  Or you can use the returned [OpenXRFutureResult] object to `await` its [signal OpenXRFutureResult.completed] signal.  
         *    
         */
        registerFuture(future: int64, onSuccess?: Callable /* = new Callable() */): null | OpenXRFutureResult
        
        /** Cancels an in-progress future. [param future] must be an `XrFutureEXT` value previously returned by an API that started an asynchronous function. */
        cancelFuture(future: int64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRFutureExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRFutureExtension;
    }
    namespace OpenXRFutureResult {
        enum ResultStatus {
            ResultRunning = 0,
            ResultFinished = 1,
            ResultCancelled = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRFutureResult extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRFutureResult extends __NameMapRefCounted {
        get_status: "getStatus";
        get_future: "getFuture";
        cancel_future: "cancelFuture";
        set_result_value: "setResultValue";
        get_result_value: "getResultValue";
    }
    /** Result object tracking the asynchronous result of an OpenXR Future object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrfutureresult.html  
     */
    class OpenXRFutureResult extends RefCounted {
        constructor(identifier?: any)
        /** Returns the status of this result. */
        getStatus(): OpenXRFutureResult.ResultStatus
        
        /** Return the `XrFutureEXT` value this result relates to. */
        getFuture(): int64
        
        /** Cancel this future, this will interrupt and stop the asynchronous function. */
        cancelFuture(): void
        
        /** Stores the result value we expose to the user.  
         *      
         *  **Note:** This method should only be called by an OpenXR extension that implements an asynchronous function.  
         */
        setResultValue(resultValue: any): void
        
        /** Returns the result value of our asynchronous function (if set by the extension). The type of this result value depends on the function being called. Consult the documentation of the relevant function. */
        getResultValue(): any
        
        /** Emitted when the asynchronous function is finished or has been cancelled. */
        readonly completed: Signal<(result: OpenXRFutureResult) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRFutureResult;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRFutureResult;
    }
    namespace OpenXRHand {
        enum Hands {
            HandLeft = 0,
            HandRight = 1,
            HandMax = 2,
        }
        enum MotionRange {
            MotionRangeUnobstructed = 0,
            MotionRangeConformToController = 1,
            MotionRangeMax = 2,
        }
        enum SkeletonRig {
            SkeletonRigOpenxr = 0,
            SkeletonRigHumanoid = 1,
            SkeletonRigMax = 2,
        }
        enum BoneUpdate {
            BoneUpdateFull = 0,
            BoneUpdateRotationOnly = 1,
            BoneUpdateMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRHand extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRHand extends __NameMapNode3D {
        motion_range: "motionRange";
        hand_skeleton: "handSkeleton";
        skeleton_rig: "skeletonRig";
        bone_update: "boneUpdate";
    }
    /** Node supporting hand and finger tracking in OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrhand.html  
     */
    class OpenXRHand<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Specifies whether this node tracks the left or right hand of the player. */
        get hand(): int64
        set hand(value: int64)
        
        /** Set the motion range (if supported) limiting the hand motion. */
        get motionRange(): int64
        set motionRange(value: int64)
        
        /** Set a [Skeleton3D] node for which the pose positions will be updated. */
        get handSkeleton(): NodePath
        set handSkeleton(value: NodePath | string)
        
        /** Set the type of skeleton rig the [member hand_skeleton] is compliant with. */
        get skeletonRig(): int64
        set skeletonRig(value: int64)
        
        /** Specify the type of updates to perform on the bone. */
        get boneUpdate(): int64
        set boneUpdate(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRHand;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRHand;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRHapticBase extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRHapticBase extends __NameMapResource {
    }
    /** OpenXR Haptic feedback base class.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrhapticbase.html  
     */
    class OpenXRHapticBase extends Resource {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRHapticBase;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRHapticBase;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRHapticVibration extends __RPCMapOpenXRHapticBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRHapticVibration extends __NameMapOpenXRHapticBase {
    }
    /** Vibration haptic feedback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrhapticvibration.html  
     */
    class OpenXRHapticVibration extends OpenXRHapticBase {
        constructor(identifier?: any)
        /** The duration of the pulse in nanoseconds. Use `-1` for a minimum duration pulse for the current XR runtime. */
        get duration(): int64
        set duration(value: int64)
        
        /** The frequency of the pulse in Hz. `0.0` will let the XR runtime chose an optimal frequency for the device used. */
        get frequency(): float64
        set frequency(value: float64)
        
        /** The amplitude of the pulse between `0.0` and `1.0`. */
        get amplitude(): float64
        set amplitude(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRHapticVibration;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRHapticVibration;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRIPBinding extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRIPBinding extends __NameMapResource {
        get_binding_modifier_count: "getBindingModifierCount";
        get_binding_modifier: "getBindingModifier";
        get_path_count: "getPathCount";
        has_path: "hasPath";
        add_path: "addPath";
        remove_path: "removePath";
        binding_path: "bindingPath";
        binding_modifiers: "bindingModifiers";
    }
    /** Defines a binding between an [OpenXRAction] and an XR input or output.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxripbinding.html  
     */
    class OpenXRIPBinding extends Resource {
        constructor(identifier?: any)
        /** Get the number of binding modifiers for this binding. */
        getBindingModifierCount(): int64
        
        /** Get the [OpenXRBindingModifier] at this index. */
        getBindingModifier(index: int64): null | OpenXRActionBindingModifier
        
        /** Get the number of input/output paths in this binding. */
        getPathCount(): int64
        
        /** Returns `true` if this input/output path is part of this binding. */
        hasPath(path: string): boolean
        
        /** Add an input/output path to this binding. */
        addPath(path: string): void
        
        /** Removes this input/output path from this binding. */
        removePath(path: string): void
        
        /** [OpenXRAction] that is bound to [member binding_path]. */
        get action(): null | OpenXRAction
        set action(value: null | OpenXRAction)
        
        /** Binding path that defines the input or output bound to [member action].  
         *      
         *  **Note:** Binding paths are suggestions, an XR runtime may choose to bind the action to a different input or output emulating this input or output.  
         */
        get bindingPath(): string
        set bindingPath(value: string)
        
        /** Binding modifiers for this binding. */
        get bindingModifiers(): OpenXRActionBindingModifier
        set bindingModifiers(value: OpenXRActionBindingModifier)
        
        /** Paths that define the inputs or outputs bound on the device. */
        get paths(): PackedStringArray
        set paths(value: PackedStringArray | string[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRIPBinding;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRIPBinding;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRIPBindingModifier extends __RPCMapOpenXRBindingModifier {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRIPBindingModifier extends __NameMapOpenXRBindingModifier {
    }
    /** Binding modifier that applies directly on an interaction profile.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxripbindingmodifier.html  
     */
    class OpenXRIPBindingModifier extends OpenXRBindingModifier {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRIPBindingModifier;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRIPBindingModifier;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRInteractionProfile extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRInteractionProfile extends __NameMapResource {
        get_binding_count: "getBindingCount";
        get_binding: "getBinding";
        get_binding_modifier_count: "getBindingModifierCount";
        get_binding_modifier: "getBindingModifier";
        interaction_profile_path: "interactionProfilePath";
        binding_modifiers: "bindingModifiers";
    }
    /** Suggested bindings object for OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrinteractionprofile.html  
     */
    class OpenXRInteractionProfile extends Resource {
        constructor(identifier?: any)
        /** Get the number of bindings in this interaction profile. */
        getBindingCount(): int64
        
        /** Retrieve the binding at this index. */
        getBinding(index: int64): null | OpenXRIPBinding
        
        /** Get the number of binding modifiers in this interaction profile. */
        getBindingModifierCount(): int64
        
        /** Get the [OpenXRBindingModifier] at this index. */
        getBindingModifier(index: int64): null | OpenXRIPBindingModifier
        
        /** The interaction profile path identifying the XR device. */
        get interactionProfilePath(): string
        set interactionProfilePath(value: string)
        
        /** Action bindings for this interaction profile. */
        get bindings(): OpenXRIPBinding
        set bindings(value: OpenXRIPBinding)
        
        /** Binding modifiers for this interaction profile. */
        get bindingModifiers(): OpenXRIPBindingModifier
        set bindingModifiers(value: OpenXRIPBindingModifier)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRInteractionProfile;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRInteractionProfile;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRInteractionProfileEditor extends __RPCMapOpenXRInteractionProfileEditorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRInteractionProfileEditor extends __NameMapOpenXRInteractionProfileEditorBase {
    }
    /** Default OpenXR interaction profile editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrinteractionprofileeditor.html  
     */
    class OpenXRInteractionProfileEditor<Map extends NodePathMap = any> extends OpenXRInteractionProfileEditorBase<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRInteractionProfileEditor;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRInteractionProfileEditor;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRInteractionProfileEditorBase extends __RPCMapHBoxContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRInteractionProfileEditorBase extends __NameMapHBoxContainer {
        _add_binding: "_addBinding";
        _remove_binding: "_removeBinding";
    }
    /** Base class for editing interaction profiles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrinteractionprofileeditorbase.html  
     */
    class OpenXRInteractionProfileEditorBase<Map extends NodePathMap = any> extends HBoxContainer<Map> {
        constructor(identifier?: any)
        /** Setup this editor for the provided [param action_map] and [param interaction_profile]. */
        setup(actionMap: OpenXRActionMap, interactionProfile: OpenXRInteractionProfile): void
        _addBinding(action: string, path: string): void
        _removeBinding(action: string, path: string): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRInteractionProfileEditorBase;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRInteractionProfileEditorBase;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRInteractionProfileMetadata extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRInteractionProfileMetadata extends __NameMapGObject {
        register_profile_rename: "registerProfileRename";
        register_top_level_path: "registerTopLevelPath";
        register_interaction_profile: "registerInteractionProfile";
        register_io_path: "registerIOPath";
    }
    /** Meta class registering supported devices in OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrinteractionprofilemetadata.html  
     */
    class OpenXRInteractionProfileMetadata extends GObject {
        constructor(identifier?: any)
        /** Allows for renaming old interaction profile paths to new paths to maintain backwards compatibility with older action maps. */
        registerProfileRename(oldName: string, newName: string): void
        
        /** Registers a top level path to which profiles can be bound. For instance `/user/hand/left` refers to the bind point for the player's left hand. Extensions can register additional top level paths, for instance a haptic vest extension might register `/user/body/vest`.  
         *  [param display_name] is the name shown to the user. [param openxr_path] is the top level path being registered. [param openxr_extension_name] is optional and ensures the top level path is only used if the specified extension is available/enabled.  
         *  When a top level path ends up being bound by OpenXR, an [XRPositionalTracker] is instantiated to manage the state of the device.  
         */
        registerTopLevelPath(displayName: string, openxrPath: string, openxrExtensionName: string): void
        
        /** Registers an interaction profile using its OpenXR designation (e.g. `/interaction_profiles/khr/simple_controller` is the profile for OpenXR's simple controller profile).  
         *  [param display_name] is the description shown to the user. [param openxr_path] is the interaction profile path being registered. [param openxr_extension_name] optionally restricts this profile to the given extension being enabled/available. If the extension is not available, the profile and all related entries used in an action map are filtered out.  
         */
        registerInteractionProfile(displayName: string, openxrPath: string, openxrExtensionName: string): void
        
        /** Registers an input/output path for the given [param interaction_profile]. The profile should previously have been registered using [method register_interaction_profile]. [param display_name] is the description shown to the user. [param toplevel_path] specifies the bind path this input/output can be bound to (e.g. `/user/hand/left` or `/user/hand/right`). [param openxr_path] is the action input/output being registered (e.g. `/user/hand/left/input/aim/pose`). [param openxr_extension_name] restricts this input/output to an enabled/available extension, this doesn't need to repeat the extension on the profile but relates to overlapping extension (e.g. `XR_EXT_palm_pose` that introduces `…/input/palm_ext/pose` input paths). [param action_type] defines the type of input or output provided by OpenXR. */
        registerIOPath(interactionProfile: string, displayName: string, toplevelPath: string, openxrPath: string, openxrExtensionName: string, actionType: OpenXRAction.ActionType): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRInteractionProfileMetadata;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRInteractionProfileMetadata;
    }
    namespace OpenXRInterface {
        enum SessionState {
            SessionStateUnknown = 0,
            SessionStateIdle = 1,
            SessionStateReady = 2,
            SessionStateSynchronized = 3,
            SessionStateVisible = 4,
            SessionStateFocused = 5,
            SessionStateStopping = 6,
            SessionStateLossPending = 7,
            SessionStateExiting = 8,
        }
        enum Hand {
            HandLeft = 0,
            HandRight = 1,
            HandMax = 2,
        }
        enum HandMotionRange {
            HandMotionRangeUnobstructed = 0,
            HandMotionRangeConformToController = 1,
            HandMotionRangeMax = 2,
        }
        enum HandTrackedSource {
            HandTrackedSourceUnknown = 0,
            HandTrackedSourceUnobstructed = 1,
            HandTrackedSourceController = 2,
            HandTrackedSourceMax = 3,
        }
        enum HandJoints {
            HandJointPalm = 0,
            HandJointWrist = 1,
            HandJointThumbMetacarpal = 2,
            HandJointThumbProximal = 3,
            HandJointThumbDistal = 4,
            HandJointThumbTip = 5,
            HandJointIndexMetacarpal = 6,
            HandJointIndexProximal = 7,
            HandJointIndexIntermediate = 8,
            HandJointIndexDistal = 9,
            HandJointIndexTip = 10,
            HandJointMiddleMetacarpal = 11,
            HandJointMiddleProximal = 12,
            HandJointMiddleIntermediate = 13,
            HandJointMiddleDistal = 14,
            HandJointMiddleTip = 15,
            HandJointRingMetacarpal = 16,
            HandJointRingProximal = 17,
            HandJointRingIntermediate = 18,
            HandJointRingDistal = 19,
            HandJointRingTip = 20,
            HandJointLittleMetacarpal = 21,
            HandJointLittleProximal = 22,
            HandJointLittleIntermediate = 23,
            HandJointLittleDistal = 24,
            HandJointLittleTip = 25,
            HandJointMax = 26,
        }
        enum PerfSettingsLevel {
            PerfSettingsLevelPowerSavings = 0,
            PerfSettingsLevelSustainedLow = 1,
            PerfSettingsLevelSustainedHigh = 2,
            PerfSettingsLevelBoost = 3,
        }
        enum PerfSettingsSubDomain {
            PerfSettingsSubDomainCompositing = 0,
            PerfSettingsSubDomainRendering = 1,
            PerfSettingsSubDomainThermal = 2,
        }
        enum PerfSettingsNotificationLevel {
            PerfSettingsNotifLevelNormal = 0,
            PerfSettingsNotifLevelWarning = 1,
            PerfSettingsNotifLevelImpaired = 2,
        }
        enum HandJointFlags {
            HandJointNone = 0,
            HandJointOrientationValid = 1,
            HandJointOrientationTracked = 2,
            HandJointPositionValid = 4,
            HandJointPositionTracked = 8,
            HandJointLinearVelocityValid = 16,
            HandJointAngularVelocityValid = 32,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRInterface extends __RPCMapXRInterface {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRInterface extends __NameMapXRInterface {
        get_session_state: "getSessionState";
        is_foveation_supported: "isFoveationSupported";
        is_action_set_active: "isActionSetActive";
        set_action_set_active: "setActionSetActive";
        get_action_sets: "getActionSets";
        get_available_display_refresh_rates: "getAvailableDisplayRefreshRates";
        set_motion_range: "setMotionRange";
        get_motion_range: "getMotionRange";
        get_hand_tracking_source: "getHandTrackingSource";
        get_hand_joint_flags: "getHandJointFlags";
        get_hand_joint_rotation: "getHandJointRotation";
        get_hand_joint_position: "getHandJointPosition";
        get_hand_joint_radius: "getHandJointRadius";
        get_hand_joint_linear_velocity: "getHandJointLinearVelocity";
        get_hand_joint_angular_velocity: "getHandJointAngularVelocity";
        is_hand_tracking_supported: "isHandTrackingSupported";
        is_hand_interaction_supported: "isHandInteractionSupported";
        is_eye_gaze_interaction_supported: "isEyeGazeInteractionSupported";
        set_cpu_level: "setCpuLevel";
        set_gpu_level: "setGpuLevel";
        display_refresh_rate: "displayRefreshRate";
        render_target_size_multiplier: "renderTargetSizeMultiplier";
        foveation_level: "foveationLevel";
        foveation_dynamic: "foveationDynamic";
        vrs_min_radius: "vrsMinRadius";
        vrs_strength: "vrsStrength";
        session_begun: "sessionBegun";
        session_stopping: "sessionStopping";
        session_synchronized: "sessionSynchronized";
        session_focussed: "sessionFocussed";
        session_visible: "sessionVisible";
        session_loss_pending: "sessionLossPending";
        instance_exiting: "instanceExiting";
        pose_recentered: "poseRecentered";
        refresh_rate_changed: "refreshRateChanged";
        cpu_level_changed: "cpuLevelChanged";
        gpu_level_changed: "gpuLevelChanged";
    }
    /** Our OpenXR interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrinterface.html  
     */
    class OpenXRInterface extends XRInterface {
        constructor(identifier?: any)
        /** Returns the current state of our OpenXR session. */
        getSessionState(): OpenXRInterface.SessionState
        
        /** Returns `true` if OpenXR's foveation extension is supported, the interface must be initialized before this returns a valid value.  
         *      
         *  **Note:** This feature is only available on the Compatibility renderer and currently only available on some stand alone headsets. For Vulkan set [member Viewport.vrs_mode] to `VRS_XR` on desktop.  
         */
        isFoveationSupported(): boolean
        
        /** Returns `true` if the given action set is active. */
        isActionSetActive(name: string): boolean
        
        /** Sets the given action set as active or inactive. */
        setActionSetActive(name: string, active: boolean): void
        
        /** Returns a list of action sets registered with Godot (loaded from the action map at runtime). */
        getActionSets(): GArray
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        getAvailableDisplayRefreshRates(): GArray
        
        /** If handtracking is enabled and motion range is supported, sets the currently configured motion range for [param hand] to [param motion_range]. */
        setMotionRange(hand: OpenXRInterface.Hand, motionRange: OpenXRInterface.HandMotionRange): void
        
        /** If handtracking is enabled and motion range is supported, gets the currently configured motion range for [param hand]. */
        getMotionRange(hand: OpenXRInterface.Hand): OpenXRInterface.HandMotionRange
        
        /** If handtracking is enabled and hand tracking source is supported, gets the source of the hand tracking data for [param hand]. */
        getHandTrackingSource(hand: OpenXRInterface.Hand): OpenXRInterface.HandTrackedSource
        
        /** If handtracking is enabled, returns flags that inform us of the validity of the tracking data. */
        getHandJointFlags(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): OpenXRInterface.HandJointFlags
        
        /** If handtracking is enabled, returns the rotation of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. */
        getHandJointRotation(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Quaternion
        
        /** If handtracking is enabled, returns the position of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        getHandJointPosition(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the radius of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is without worldscale applied! */
        getHandJointRadius(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): float64
        
        /** If handtracking is enabled, returns the linear velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        getHandJointLinearVelocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the angular velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D]! */
        getHandJointAngularVelocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** Returns `true` if OpenXR's hand tracking is supported and enabled.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        isHandTrackingSupported(): boolean
        
        /** Returns `true` if OpenXR's hand interaction profile is supported and enabled.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        isHandInteractionSupported(): boolean
        
        /** Returns the capabilities of the eye gaze interaction extension.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        isEyeGazeInteractionSupported(): boolean
        
        /** Sets the CPU performance level of the OpenXR device. */
        setCpuLevel(level: OpenXRInterface.PerfSettingsLevel): void
        
        /** Sets the GPU performance level of the OpenXR device. */
        setGpuLevel(level: OpenXRInterface.PerfSettingsLevel): void
        
        /** The display refresh rate for the current HMD. Only functional if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        get displayRefreshRate(): float64
        set displayRefreshRate(value: float64)
        
        /** The render size multiplier for the current HMD. Must be set before the interface has been initialized. */
        get renderTargetSizeMultiplier(): float64
        set renderTargetSizeMultiplier(value: float64)
        
        /** Set foveation level from 0 (off) to 3 (high), the interface must be initialized before this is accessible.  
         *      
         *  **Note:** Only works on the Compatibility renderer.  
         */
        get foveationLevel(): int64
        set foveationLevel(value: int64)
        
        /** Enable dynamic foveation adjustment, the interface must be initialized before this is accessible. If enabled foveation will automatically adjusted between low and [member foveation_level].  
         *      
         *  **Note:** Only works on the Compatibility renderer.  
         */
        get foveationDynamic(): boolean
        set foveationDynamic(value: boolean)
        
        /** The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        
        /** The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is. This improves performance at the cost of quality.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsStrength(): float64
        set vrsStrength(value: float64)
        
        /** Informs our OpenXR session has been started. */
        readonly sessionBegun: Signal<() => void>
        
        /** Informs our OpenXR session is stopping. */
        readonly sessionStopping: Signal<() => void>
        
        /** Informs our OpenXR session has been synchronized. */
        readonly sessionSynchronized: Signal<() => void>
        
        /** Informs our OpenXR session now has focus, for example output is sent to the HMD and we're receiving XR input. */
        readonly sessionFocussed: Signal<() => void>
        
        /** Informs our OpenXR session is now visible, for example output is sent to the HMD but we don't receive XR input. */
        readonly sessionVisible: Signal<() => void>
        
        /** Informs our OpenXR session is in the process of being lost. */
        readonly sessionLossPending: Signal<() => void>
        
        /** Informs our OpenXR instance is exiting. */
        readonly instanceExiting: Signal<() => void>
        
        /** Informs the user queued a recenter of the player position. */
        readonly poseRecentered: Signal<() => void>
        
        /** Informs the user the HMD refresh rate has changed.  
         *      
         *  **Note:** Only emitted if XR runtime supports the refresh rate extension.  
         */
        readonly refreshRateChanged: Signal<(refreshRate: float64) => void>
        
        /** Informs the device CPU performance level has changed in the specified subdomain. */
        readonly cpuLevelChanged: Signal<(subDomain: int64, fromLevel: int64, toLevel: int64) => void>
        
        /** Informs the device GPU performance level has changed in the specified subdomain. */
        readonly gpuLevelChanged: Signal<(subDomain: int64, fromLevel: int64, toLevel: int64) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRInterface;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRInterface;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRRenderModel extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRRenderModel extends __NameMapNode3D {
        get_top_level_path: "getTopLevelPath";
        render_model: "renderModel";
        render_model_top_level_path_changed: "renderModelTopLevelPathChanged";
    }
    /** This node will display an OpenXR render model.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrrendermodel.html  
     */
    class OpenXRRenderModel<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the top level path related to this render model. */
        getTopLevelPath(): string
        
        /** The render model RID for the render model to load, as returned by [method OpenXRRenderModelExtension.render_model_create] or [method OpenXRRenderModelExtension.render_model_get_all]. */
        get renderModel(): Rid
        set renderModel(value: Rid)
        
        /** Emitted when the top level path of this render model has changed. */
        readonly renderModelTopLevelPathChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRRenderModel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRRenderModel;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRRenderModelExtension extends __RPCMapOpenXRExtensionWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRRenderModelExtension extends __NameMapOpenXRExtensionWrapper {
        is_active: "isActive";
        render_model_create: "renderModelCreate";
        render_model_destroy: "renderModelDestroy";
        render_model_get_all: "renderModelGetAll";
        render_model_new_scene_instance: "renderModelNewSceneInstance";
        render_model_get_subaction_paths: "renderModelGetSubactionPaths";
        render_model_get_top_level_path: "renderModelGetTopLevelPath";
        render_model_get_confidence: "renderModelGetConfidence";
        render_model_get_root_transform: "renderModelGetRootTransform";
        render_model_get_animatable_node_count: "renderModelGetAnimatableNodeCount";
        render_model_get_animatable_node_name: "renderModelGetAnimatableNodeName";
        render_model_is_animatable_node_visible: "renderModelIsAnimatableNodeVisible";
        render_model_get_animatable_node_transform: "renderModelGetAnimatableNodeTransform";
        render_model_added: "renderModelAdded";
        render_model_removed: "renderModelRemoved";
        render_model_top_level_path_changed: "renderModelTopLevelPathChanged";
    }
    /** This class implements the OpenXR Render Model Extension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrrendermodelextension.html  
     */
    class OpenXRRenderModelExtension extends OpenXRExtensionWrapper {
        constructor(identifier?: any)
        /** Returns `true` if OpenXR's render model extension is supported and enabled.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        isActive(): boolean
        
        /** Creates a render model object within OpenXR using a render model id.  
         *      
         *  **Note:** This function is exposed for dependent OpenXR extensions that provide render model ids to be used with the render model extension.  
         */
        renderModelCreate(renderModelId: int64): Rid
        
        /** Destroys a render model object within OpenXR that was previously created with [method render_model_create].  
         *      
         *  **Note:** This function is exposed for dependent OpenXR extensions that provide render model ids to be used with the render model extension.  
         */
        renderModelDestroy(renderModel: Rid): void
        
        /** Returns an array of all currently active render models registered with this extension. */
        renderModelGetAll(): GArray<Rid>
        
        /** Returns an instance of a subscene that contains all [MeshInstance3D] nodes that allow you to visualize the render model. */
        renderModelNewSceneInstance(renderModel: Rid): null | Node3D
        
        /** Returns a list of active subaction paths for this [param render_model].  
         *      
         *  **Note:** If different devices are bound to your actions than available in suggested interaction bindings, this information shows paths related to the interaction bindings being mimicked by that device.  
         */
        renderModelGetSubactionPaths(renderModel: Rid): PackedStringArray
        
        /** Returns the top level path associated with this [param render_model]. If provided this identifies whether the render model is associated with the player's hands or other body part. */
        renderModelGetTopLevelPath(renderModel: Rid): string
        
        /** Returns the tracking confidence of the tracking data for the render model. */
        renderModelGetConfidence(renderModel: Rid): XRPose.TrackingConfidence
        
        /** Returns the root transform of a render model. This is the tracked position relative to our [XROrigin3D] node. */
        renderModelGetRootTransform(renderModel: Rid): Transform3D
        
        /** Returns the number of animatable nodes this render model has. */
        renderModelGetAnimatableNodeCount(renderModel: Rid): int64
        
        /** Returns the name of the given animatable node. */
        renderModelGetAnimatableNodeName(renderModel: Rid, index: int64): string
        
        /** Returns `true` if this animatable node should be visible. */
        renderModelIsAnimatableNodeVisible(renderModel: Rid, index: int64): boolean
        
        /** Returns the current local transform for an animatable node. This is updated every frame. */
        renderModelGetAnimatableNodeTransform(renderModel: Rid, index: int64): Transform3D
        
        /** Emitted when a new render model is added. */
        readonly renderModelAdded: Signal<(renderModel: Rid) => void>
        
        /** Emitted when a render model is removed. */
        readonly renderModelRemoved: Signal<(renderModel: Rid) => void>
        
        /** Emitted when the top level path associated with a render model changed. */
        readonly renderModelTopLevelPathChanged: Signal<(renderModel: Rid) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRRenderModelExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRRenderModelExtension;
    }
    namespace OpenXRRenderModelManager {
        enum RenderModelTracker {
            RenderModelTrackerAny = 0,
            RenderModelTrackerNoneSet = 1,
            RenderModelTrackerLeftHand = 2,
            RenderModelTrackerRightHand = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRRenderModelManager extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRRenderModelManager extends __NameMapNode3D {
        make_local_to_pose: "makeLocalToPose";
        render_model_added: "renderModelAdded";
        render_model_removed: "renderModelRemoved";
    }
    /** Helper node that will automatically manage displaying render models.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrrendermodelmanager.html  
     */
    class OpenXRRenderModelManager<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Limits render models to the specified tracker. Include: 0 = All render models, 1 = Render models not related to a tracker, 2 = Render models related to the left hand tracker, 3 = Render models related to the right hand tracker. */
        get tracker(): int64
        set tracker(value: int64)
        
        /** Position render models local to this pose (this will adjust the position of the render models container node). */
        get makeLocalToPose(): string
        set makeLocalToPose(value: string)
        
        /** Emitted when a render model node is added as a child to this node. */
        readonly renderModelAdded: Signal<(renderModel: OpenXRRenderModel) => void>
        
        /** Emitted when a render model child node is about to be removed from this node. */
        readonly renderModelRemoved: Signal<(renderModel: OpenXRRenderModel) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRRenderModelManager;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRRenderModelManager;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOpenXRVisibilityMask extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOpenXRVisibilityMask extends __NameMapVisualInstance3D {
    }
    /** Draws a stereo correct visibility mask.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_openxrvisibilitymask.html  
     */
    class OpenXRVisibilityMask<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOpenXRVisibilityMask;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOpenXRVisibilityMask;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOptimizedTranslation extends __RPCMapTranslation {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOptimizedTranslation extends __NameMapTranslation {
    }
    /** An optimized translation, used by default for CSV Translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_optimizedtranslation.html  
     */
    class OptimizedTranslation extends Translation {
        constructor(identifier?: any)
        /** Generates and sets an optimized translation from the given [Translation] resource.  
         *      
         *  **Note:** This method is intended to be used in the editor. It does nothing when called from an exported project.  
         */
        generate(from: Translation): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOptimizedTranslation;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOptimizedTranslation;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapOptionButton extends __RPCMapButton {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapOptionButton extends __NameMapButton {
        add_item: "addItem";
        add_icon_item: "addIconItem";
        set_item_text: "setItemText";
        set_item_icon: "setItemIcon";
        set_item_disabled: "setItemDisabled";
        set_item_id: "setItemId";
        set_item_metadata: "setItemMetadata";
        set_item_tooltip: "setItemTooltip";
        set_item_auto_translate_mode: "setItemAutoTranslateMode";
        get_item_text: "getItemText";
        get_item_icon: "getItemIcon";
        get_item_id: "getItemId";
        get_item_index: "getItemIndex";
        get_item_metadata: "getItemMetadata";
        get_item_tooltip: "getItemTooltip";
        get_item_auto_translate_mode: "getItemAutoTranslateMode";
        is_item_disabled: "isItemDisabled";
        is_item_separator: "isItemSeparator";
        add_separator: "addSeparator";
        get_selected_id: "getSelectedId";
        get_selected_metadata: "getSelectedMetadata";
        remove_item: "removeItem";
        get_popup: "getPopup";
        show_popup: "showPopup";
        has_selectable_items: "hasSelectableItems";
        get_selectable_item: "getSelectableItem";
        set_disable_shortcuts: "setDisableShortcuts";
        fit_to_longest_item: "fitToLongestItem";
        allow_reselect: "allowReselect";
        item_count: "itemCount";
        item_selected: "itemSelected";
        item_focused: "itemFocused";
    }
    /** A button that brings up a dropdown with selectable options when pressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_optionbutton.html  
     */
    class OptionButton<Map extends NodePathMap = any> extends Button<Map> {
        constructor(identifier?: any)
        /** Adds an item, with text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end.  
         *      
         *  **Note:** The item will be selected if there are no other items.  
         */
        addItem(label: string, id?: int64 /* = -1 */): void
        
        /** Adds an item, with a [param texture] icon, text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end.  
         *      
         *  **Note:** The item will be selected if there are no other items.  
         */
        addIconItem(texture: Texture2D, label: string, id?: int64 /* = -1 */): void
        
        /** Sets the text of the item at index [param idx]. */
        setItemText(idx: int64, text: string): void
        
        /** Sets the icon of the item at index [param idx]. */
        setItemIcon(idx: int64, texture: Texture2D): void
        
        /** Sets whether the item at index [param idx] is disabled.  
         *  Disabled items are drawn differently in the dropdown and are not selectable by the user. If the current selected item is set as disabled, it will remain selected.  
         */
        setItemDisabled(idx: int64, disabled: boolean): void
        
        /** Sets the ID of the item at index [param idx]. */
        setItemId(idx: int64, id: int64): void
        
        /** Sets the metadata of an item. Metadata may be of any type and can be used to store extra information about an item, such as an external string ID. */
        setItemMetadata(idx: int64, metadata: any): void
        
        /** Sets the tooltip of the item at index [param idx]. */
        setItemTooltip(idx: int64, tooltip: string): void
        
        /** Sets the auto translate mode of the item at index [param idx].  
         *  Items use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [OptionButton] itself.  
         */
        setItemAutoTranslateMode(idx: int64, mode: Node.AutoTranslateMode): void
        
        /** Returns the text of the item at index [param idx]. */
        getItemText(idx: int64): string
        
        /** Returns the icon of the item at index [param idx]. */
        getItemIcon(idx: int64): null | Texture2D
        
        /** Returns the ID of the item at index [param idx]. */
        getItemId(idx: int64): int64
        
        /** Returns the index of the item with the given [param id]. */
        getItemIndex(id: int64): int64
        
        /** Retrieves the metadata of an item. Metadata may be any type and can be used to store extra information about an item, such as an external string ID. */
        getItemMetadata(idx: int64): any
        
        /** Returns the tooltip of the item at index [param idx]. */
        getItemTooltip(idx: int64): string
        
        /** Returns the auto translate mode of the item at index [param idx]. */
        getItemAutoTranslateMode(idx: int64): Node.AutoTranslateMode
        
        /** Returns `true` if the item at index [param idx] is disabled. */
        isItemDisabled(idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is marked as a separator. */
        isItemSeparator(idx: int64): boolean
        
        /** Adds a separator to the list of items. Separators help to group items, and can optionally be given a [param text] header. A separator also gets an index assigned, and is appended at the end of the item list. */
        addSeparator(text?: string /* = '' */): void
        
        /** Clears all the items in the [OptionButton]. */
        clear(): void
        
        /** Selects an item by index and makes it the current item. This will work even if the item is disabled.  
         *  Passing `-1` as the index deselects any currently selected item.  
         */
        select(idx: int64): void
        
        /** Returns the ID of the selected item, or `-1` if no item is selected. */
        getSelectedId(): int64
        
        /** Gets the metadata of the selected item. Metadata for items can be set using [method set_item_metadata]. */
        getSelectedMetadata(): any
        
        /** Removes the item at index [param idx]. */
        removeItem(idx: int64): void
        
        /** Returns the [PopupMenu] contained in this button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getPopup(): null | PopupMenu
        
        /** Adjusts popup position and sizing for the [OptionButton], then shows the [PopupMenu]. Prefer this over using `get_popup().popup()`. */
        showPopup(): void
        
        /** Returns `true` if this button contains at least one item which is not disabled, or marked as a separator. */
        hasSelectableItems(): boolean
        
        /** Returns the index of the first item which is not disabled, or marked as a separator. If [param from_last] is `true`, the items will be searched in reverse order.  
         *  Returns `-1` if no item is found.  
         */
        getSelectableItem(fromLast?: boolean /* = false */): int64
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        setDisableShortcuts(disabled: boolean): void
        
        /** The index of the currently selected item, or `-1` if no item is selected. */
        get selected(): int64
        set selected(value: int64)
        
        /** If `true`, minimum size will be determined by the longest item's text, instead of the currently selected one's.  
         *      
         *  **Note:** For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.  
         */
        get fitToLongestItem(): boolean
        set fitToLongestItem(value: boolean)
        
        /** If `true`, the currently selected item can be selected again. */
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        
        /** The number of items to select from. */
        get itemCount(): int64
        set itemCount(value: int64)
        
        /** Emitted when the current item has been changed by the user. The index of the item selected is passed as argument.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly itemSelected: Signal<(index: int64) => void>
        
        /** Emitted when the user navigates to an item using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input actions. The index of the item selected is passed as argument. */
        readonly itemFocused: Signal<(index: int64) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapOptionButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapOptionButton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPckPacker extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPckPacker extends __NameMapRefCounted {
        pck_start: "pckStart";
        add_file: "addFile";
        add_file_removal: "addFileRemoval";
    }
    class PckPacker extends RefCounted {
        constructor(identifier?: any)
        pckStart(pckPath: string, alignment?: int64 /* = 32 */, key?: string /* = '0000000000000000000000000000000000000000000000000000000000000000' */, encryptDirectory?: boolean /* = false */): GError
        addFile(targetPath: string, sourcePath: string, encrypt?: boolean /* = false */): GError
        addFileRemoval(targetPath: string): GError
        flush(verbose?: boolean /* = false */): GError
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPckPacker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPckPacker;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPackedDataContainer extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPackedDataContainer extends __NameMapResource {
        _iter_init: "_iterInit";
        _iter_get: "_iterGet";
        _iter_next: "_iterNext";
        __data__: "__Data___";
    }
    /** Efficiently packs and serializes [Array] or [Dictionary].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_packeddatacontainer.html  
     */
    class PackedDataContainer extends Resource {
        constructor(identifier?: any)
        _iterInit(_unnamedArg0: GArray): any
        _iterGet(_unnamedArg0: any): any
        _iterNext(_unnamedArg0: GArray): any
        
        /** Packs the given container into a binary representation. The [param value] must be either [Array] or [Dictionary], any other type will result in invalid data error.  
         *      
         *  **Note:** Subsequent calls to this method will overwrite the existing data.  
         */
        pack(value: any): GError
        
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): int64
        get __Data___(): PackedByteArray
        set __Data___(value: PackedByteArray | byte[] | ArrayBuffer)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPackedDataContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPackedDataContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPackedDataContainerRef extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPackedDataContainerRef extends __NameMapRefCounted {
        _iter_init: "_iterInit";
        _iter_get: "_iterGet";
        _iter_next: "_iterNext";
    }
    /** An internal class used by [PackedDataContainer] to pack nested arrays and dictionaries.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_packeddatacontainerref.html  
     */
    class PackedDataContainerRef extends RefCounted {
        constructor(identifier?: any)
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): int64
        _iterInit(_unnamedArg0: GArray): any
        _iterGet(_unnamedArg0: any): any
        _iterNext(_unnamedArg0: GArray): any
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPackedDataContainerRef;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPackedDataContainerRef;
    }
    namespace PackedScene {
        enum GenEditState {
            GenEditStateDisabled = 0,
            GenEditStateInstance = 1,
            GenEditStateMain = 2,
            GenEditStateMainInherited = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPackedScene extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPackedScene extends __NameMapResource {
        can_instantiate: "canInstantiate";
        get_state: "getState";
    }
    /** An abstraction of a serialized scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_packedscene.html  
     */
    class PackedScene<T extends Node = Node> extends Resource {
        constructor(identifier?: any)
        /** Packs the [param path] node, and all owned sub-nodes, into this [PackedScene]. Any existing data will be cleared. See [member Node.owner]. */
        pack(path: T): GError
        
        /** Instantiates the scene's node hierarchy. Triggers child scene instantiation(s). Triggers a [constant Node.NOTIFICATION_SCENE_INSTANTIATED] notification on the root node. */
        instantiate(editState?: PackedScene.GenEditState /* = 0 */): T
        
        /** Returns `true` if the scene file has nodes. */
        canInstantiate(): boolean
        
        /** Returns the [SceneState] representing the scene file contents. */
        getState(): null | SceneState
        get _bundled(): GDictionary
        set _bundled(value: GDictionary)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPackedScene;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPackedScene;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPacketPeer extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPacketPeer extends __NameMapRefCounted {
        get_var: "getVar";
        put_var: "putVar";
        get_packet: "getPacket";
        put_packet: "putPacket";
        get_packet_error: "getPacketError";
        get_available_packet_count: "getAvailablePacketCount";
        encode_buffer_max_size: "encodeBufferMaxSize";
    }
    /** Abstraction and base class for packet-based protocols.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_packetpeer.html  
     */
    class PacketPeer extends RefCounted {
        constructor(identifier?: any)
        /** Gets a Variant. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        getVar(allowObjects?: boolean /* = false */): any
        
        /** Sends a [Variant] as a packet. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        putVar(var_: any, fullObjects?: boolean /* = false */): GError
        
        /** Gets a raw packet. */
        getPacket(): PackedByteArray
        
        /** Sends a raw packet. */
        putPacket(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Returns the error state of the last packet received (via [method get_packet] and [method get_var]). */
        getPacketError(): GError
        
        /** Returns the number of packets currently available in the ring-buffer. */
        getAvailablePacketCount(): int64
        
        /** Maximum buffer size allowed when encoding [Variant]s. Raise this value to support heavier memory allocations.  
         *  The [method put_var] method allocates memory on the stack, and the buffer used will grow automatically to the closest power of two to match the size of the [Variant]. If the [Variant] is bigger than [member encode_buffer_max_size], the method will error out with [constant ERR_OUT_OF_MEMORY].  
         */
        get encodeBufferMaxSize(): int64
        set encodeBufferMaxSize(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPacketPeer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPacketPeer;
    }
    namespace PacketPeerDtls {
        enum Status {
            StatusDisconnected = 0,
            StatusHandshaking = 1,
            StatusConnected = 2,
            StatusError = 3,
            StatusErrorHostnameMismatch = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPacketPeerDtls extends __RPCMapPacketPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPacketPeerDtls extends __NameMapPacketPeer {
        connect_to_peer: "connectToPeer";
        get_status: "getStatus";
        disconnect_from_peer: "disconnectFromPeer";
    }
    class PacketPeerDtls extends PacketPeer {
        constructor(identifier?: any)
        poll(): void
        connectToPeer(packetPeer: PacketPeerUdp, hostname: string, clientOptions?: TlsOptions): GError
        getStatus(): PacketPeerDtls.Status
        disconnectFromPeer(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPacketPeerDtls;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPacketPeerDtls;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPacketPeerExtension extends __RPCMapPacketPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPacketPeerExtension extends __NameMapPacketPeer {
        _get_packet: "_getPacket";
        _put_packet: "_putPacket";
        _get_available_packet_count: "_getAvailablePacketCount";
        _get_max_packet_size: "_getMaxPacketSize";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_packetpeerextension.html */
    class PacketPeerExtension extends PacketPeer {
        constructor(identifier?: any)
        /* gdvirtual */ _getPacket(rBuffer: int64, rBufferSize: int64): GError
        /* gdvirtual */ _putPacket(pBuffer: int64, pBufferSize: int64): GError
        /* gdvirtual */ _getAvailablePacketCount(): int64
        /* gdvirtual */ _getMaxPacketSize(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPacketPeerExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPacketPeerExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPacketPeerStream extends __RPCMapPacketPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPacketPeerStream extends __NameMapPacketPeer {
        input_buffer_max_size: "inputBufferMaxSize";
        output_buffer_max_size: "outputBufferMaxSize";
        stream_peer: "streamPeer";
    }
    /** Wrapper to use a PacketPeer over a StreamPeer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_packetpeerstream.html  
     */
    class PacketPeerStream extends PacketPeer {
        constructor(identifier?: any)
        get inputBufferMaxSize(): int64
        set inputBufferMaxSize(value: int64)
        get outputBufferMaxSize(): int64
        set outputBufferMaxSize(value: int64)
        
        /** The wrapped [StreamPeer] object. */
        get streamPeer(): null | StreamPeer
        set streamPeer(value: null | StreamPeer)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPacketPeerStream;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPacketPeerStream;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPacketPeerUdp extends __RPCMapPacketPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPacketPeerUdp extends __NameMapPacketPeer {
        is_bound: "isBound";
        connect_to_host: "connectToHost";
        is_socket_connected: "isSocketConnected";
        get_packet_ip: "getPacketIP";
        get_packet_port: "getPacketPort";
        get_local_port: "getLocalPort";
        set_dest_address: "setDestAddress";
        set_broadcast_enabled: "setBroadcastEnabled";
        join_multicast_group: "joinMulticastGroup";
        leave_multicast_group: "leaveMulticastGroup";
    }
    class PacketPeerUdp extends PacketPeer {
        constructor(identifier?: any)
        bind(port: int64, bindAddress?: string /* = '*' */, recvBufSize?: int64 /* = 65536 */): GError
        close(): void
        wait(): GError
        isBound(): boolean
        connectToHost(host: string, port: int64): GError
        isSocketConnected(): boolean
        getPacketIP(): string
        getPacketPort(): int64
        getLocalPort(): int64
        setDestAddress(host: string, port: int64): GError
        setBroadcastEnabled(enabled: boolean): void
        joinMulticastGroup(multicastAddress: string, interfaceName: string): GError
        leaveMulticastGroup(multicastAddress: string, interfaceName: string): GError
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPacketPeerUdp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPacketPeerUdp;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPanel extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPanel extends __NameMapControl {
    }
    /** A GUI control that displays a [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_panel.html  
     */
    class Panel<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPanel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPanel;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPanelContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPanelContainer extends __NameMapContainer {
    }
    /** A container that keeps its child controls within the area of a [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_panelcontainer.html  
     */
    class PanelContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPanelContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPanelContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPanoramaSkyMaterial extends __RPCMapMaterial {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPanoramaSkyMaterial extends __NameMapMaterial {
        energy_multiplier: "energyMultiplier";
    }
    /** A material that provides a special texture to a [Sky], usually an HDR panorama.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_panoramaskymaterial.html  
     */
    class PanoramaSkyMaterial extends Material {
        constructor(identifier?: any)
        /** [Texture2D] to be applied to the [PanoramaSkyMaterial]. */
        get panorama(): null | Texture2D
        set panorama(value: null | Texture2D)
        
        /** A boolean value to determine if the background texture should be filtered or not. */
        get filter(): boolean
        set filter(value: boolean)
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPanoramaSkyMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPanoramaSkyMaterial;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapParallax2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapParallax2D extends __NameMapNode2D {
        _camera_moved: "_cameraMoved";
        scroll_scale: "scrollScale";
        scroll_offset: "scrollOffset";
        repeat_size: "repeatSize";
        repeat_times: "repeatTimes";
        limit_begin: "limitBegin";
        limit_end: "limitEnd";
        follow_viewport: "followViewport";
        ignore_camera_scroll: "ignoreCameraScroll";
        screen_offset: "screenOffset";
    }
    /** A node used to create a parallax scrolling background.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_parallax2d.html  
     */
    class Parallax2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        _cameraMoved(transform: Transform2D, screenOffset: Vector2, adjScreenOffset: Vector2): void
        
        /** Multiplier to the final [Parallax2D]'s offset. Can be used to simulate distance from the camera.  
         *  For example, a value of `1` scrolls at the same speed as the camera. A value greater than `1` scrolls faster, making objects appear closer. Less than `1` scrolls slower, making objects appear further, and a value of `0` stops the objects completely.  
         */
        get scrollScale(): Vector2
        set scrollScale(value: Vector2)
        
        /** The [Parallax2D]'s offset. Similar to [member screen_offset] and [member Node2D.position], but will not be overridden.  
         *      
         *  **Note:** Values will loop if [member repeat_size] is set higher than `0`.  
         */
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        
        /** Repeats the [Texture2D] of each of this node's children and offsets them by this value. When scrolling, the node's position loops, giving the illusion of an infinite scrolling background if the values are larger than the screen size. If an axis is set to `0`, the [Texture2D] will not be repeated. */
        get repeatSize(): Vector2
        set repeatSize(value: Vector2)
        
        /** Velocity at which the offset scrolls automatically, in pixels per second. */
        get autoscroll(): Vector2
        set autoscroll(value: Vector2)
        
        /** Overrides the amount of times the texture repeats. Each texture copy spreads evenly from the original by [member repeat_size]. Useful for when zooming out with a camera. */
        get repeatTimes(): int64
        set repeatTimes(value: int64)
        
        /** Top-left limits for scrolling to begin. If the camera is outside of this limit, the [Parallax2D] stops scrolling. Must be lower than [member limit_end] minus the viewport size to work. */
        get limitBegin(): Vector2
        set limitBegin(value: Vector2)
        
        /** Bottom-right limits for scrolling to end. If the camera is outside of this limit, the [Parallax2D] will stop scrolling. Must be higher than [member limit_begin] and the viewport size combined to work. */
        get limitEnd(): Vector2
        set limitEnd(value: Vector2)
        
        /** If `true`, this [Parallax2D] is offset by the current camera's position. If the [Parallax2D] is in a [CanvasLayer] separate from the current camera, it may be desired to match the value with [member CanvasLayer.follow_viewport_enabled]. */
        get followViewport(): boolean
        set followViewport(value: boolean)
        
        /** If `true`, [Parallax2D]'s position is not affected by the position of the camera. */
        get ignoreCameraScroll(): boolean
        set ignoreCameraScroll(value: boolean)
        
        /** Offset used to scroll this [Parallax2D]. This value is updated automatically unless [member ignore_camera_scroll] is `true`. */
        get screenOffset(): Vector2
        set screenOffset(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapParallax2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapParallax2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapParallaxBackground extends __RPCMapCanvasLayer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapParallaxBackground extends __NameMapCanvasLayer {
        _camera_moved: "_cameraMoved";
        scroll_offset: "scrollOffset";
        scroll_base_offset: "scrollBaseOffset";
        scroll_base_scale: "scrollBaseScale";
        scroll_limit_begin: "scrollLimitBegin";
        scroll_limit_end: "scrollLimitEnd";
        scroll_ignore_camera_zoom: "scrollIgnoreCameraZoom";
    }
    /** A node used to create a parallax scrolling background.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_parallaxbackground.html  
     */
    class ParallaxBackground<Map extends NodePathMap = any> extends CanvasLayer<Map> {
        constructor(identifier?: any)
        _cameraMoved(_unnamedArg0: Transform2D, _unnamedArg1: Vector2, _unnamedArg2: Vector2): void
        
        /** The ParallaxBackground's scroll value. Calculated automatically when using a [Camera2D], but can be used to manually manage scrolling when no camera is present. */
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        
        /** The base position offset for all [ParallaxLayer] children. */
        get scrollBaseOffset(): Vector2
        set scrollBaseOffset(value: Vector2)
        
        /** The base motion scale for all [ParallaxLayer] children. */
        get scrollBaseScale(): Vector2
        set scrollBaseScale(value: Vector2)
        
        /** Top-left limits for scrolling to begin. If the camera is outside of this limit, the background will stop scrolling. Must be lower than [member scroll_limit_end] to work. */
        get scrollLimitBegin(): Vector2
        set scrollLimitBegin(value: Vector2)
        
        /** Bottom-right limits for scrolling to end. If the camera is outside of this limit, the background will stop scrolling. Must be higher than [member scroll_limit_begin] to work. */
        get scrollLimitEnd(): Vector2
        set scrollLimitEnd(value: Vector2)
        
        /** If `true`, elements in [ParallaxLayer] child aren't affected by the zoom level of the camera. */
        get scrollIgnoreCameraZoom(): boolean
        set scrollIgnoreCameraZoom(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapParallaxBackground;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapParallaxBackground;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapParallaxLayer extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapParallaxLayer extends __NameMapNode2D {
        motion_scale: "motionScale";
        motion_offset: "motionOffset";
        motion_mirroring: "motionMirroring";
    }
    /** A parallax scrolling layer to be used with [ParallaxBackground].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_parallaxlayer.html  
     */
    class ParallaxLayer<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Multiplies the ParallaxLayer's motion. If an axis is set to `0`, it will not scroll. */
        get motionScale(): Vector2
        set motionScale(value: Vector2)
        
        /** The ParallaxLayer's offset relative to the parent ParallaxBackground's [member ParallaxBackground.scroll_offset]. */
        get motionOffset(): Vector2
        set motionOffset(value: Vector2)
        
        /** The interval, in pixels, at which the [ParallaxLayer] is drawn repeatedly. Useful for creating an infinitely scrolling background. If an axis is set to `0`, the [ParallaxLayer] will be drawn only once along that direction.  
         *      
         *  **Note:** If you want the repetition to pixel-perfect match a [Texture2D] displayed by a child node, you should account for any scale applied to the texture when defining this interval. For example, if you use a child [Sprite2D] scaled to `0.5` to display a 600x600 texture, and want this sprite to be repeated continuously horizontally, you should set the mirroring to `Vector2(300, 0)`.  
         *      
         *  **Note:** If the length of the viewport axis is bigger than twice the repeated axis size, it will not repeat infinitely, as the parallax layer only draws 2 instances of the layer at any given time. The visibility window is calculated from the parent [ParallaxBackground]'s position, not the layer's own position. So, if you use mirroring, **do not** change the [ParallaxLayer] position relative to its parent. Instead, if you need to adjust the background's position, set the [member CanvasLayer.offset] property in the parent [ParallaxBackground].  
         *      
         *  **Note:** Despite the name, the layer will not be mirrored, it will only be repeated.  
         */
        get motionMirroring(): Vector2
        set motionMirroring(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapParallaxLayer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapParallaxLayer;
    }
    namespace ParticleProcessMaterial {
        enum Parameter {
            ParamInitialLinearVelocity = 0,
            ParamAngularVelocity = 1,
            ParamOrbitVelocity = 2,
            ParamLinearAccel = 3,
            ParamRadialAccel = 4,
            ParamTangentialAccel = 5,
            ParamDamping = 6,
            ParamAngle = 7,
            ParamScale = 8,
            ParamHueVariation = 9,
            ParamAnimSpeed = 10,
            ParamAnimOffset = 11,
            ParamRadialVelocity = 15,
            ParamDirectionalVelocity = 16,
            ParamScaleOverVelocity = 17,
            ParamMax = 18,
            ParamTurbVelInfluence = 13,
            ParamTurbInitDisplacement = 14,
            ParamTurbInfluenceOverLife = 12,
        }
        enum ParticleFlags {
            ParticleFlagAlignYToVelocity = 0,
            ParticleFlagRotateY = 1,
            ParticleFlagDisableZ = 2,
            ParticleFlagDampingAsFriction = 3,
            ParticleFlagMax = 4,
        }
        enum EmissionShape {
            EmissionShapePoint = 0,
            EmissionShapeSphere = 1,
            EmissionShapeSphereSurface = 2,
            EmissionShapeBox = 3,
            EmissionShapePoints = 4,
            EmissionShapeDirectedPoints = 5,
            EmissionShapeRing = 6,
            EmissionShapeMax = 7,
        }
        enum SubEmitterMode {
            SubEmitterDisabled = 0,
            SubEmitterConstant = 1,
            SubEmitterAtEnd = 2,
            SubEmitterAtCollision = 3,
            SubEmitterAtStart = 4,
            SubEmitterMax = 5,
        }
        enum CollisionMode {
            CollisionDisabled = 0,
            CollisionRigid = 1,
            CollisionHideOnContact = 2,
            CollisionMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapParticleProcessMaterial extends __RPCMapMaterial {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapParticleProcessMaterial extends __NameMapMaterial {
        set_param: "setParam";
        get_param: "getParam";
        set_param_min: "setParamMin";
        get_param_min: "getParamMin";
        set_param_max: "setParamMax";
        get_param_max: "getParamMax";
        set_param_texture: "setParamTexture";
        get_param_texture: "getParamTexture";
        set_particle_flag: "setParticleFlag";
        get_particle_flag: "getParticleFlag";
        lifetime_randomness: "lifetimeRandomness";
        particle_flag_align_y: "particleFlagAlignY";
        particle_flag_rotate_y: "particleFlagRotateY";
        particle_flag_disable_z: "particleFlagDisableZ";
        particle_flag_damping_as_friction: "particleFlagDampingAsFriction";
        emission_shape_offset: "emissionShapeOffset";
        emission_shape_scale: "emissionShapeScale";
        emission_shape: "emissionShape";
        emission_sphere_radius: "emissionSphereRadius";
        emission_box_extents: "emissionBoxExtents";
        emission_point_texture: "emissionPointTexture";
        emission_normal_texture: "emissionNormalTexture";
        emission_color_texture: "emissionColorTexture";
        emission_point_count: "emissionPointCount";
        emission_ring_axis: "emissionRingAxis";
        emission_ring_height: "emissionRingHeight";
        emission_ring_radius: "emissionRingRadius";
        emission_ring_inner_radius: "emissionRingInnerRadius";
        emission_ring_cone_angle: "emissionRingConeAngle";
        angle_min: "angleMin";
        angle_max: "angleMax";
        angle_curve: "angleCurve";
        inherit_velocity_ratio: "inheritVelocityRatio";
        velocity_pivot: "velocityPivot";
        initial_velocity: "initialVelocity";
        initial_velocity_min: "initialVelocityMin";
        initial_velocity_max: "initialVelocityMax";
        angular_velocity: "angularVelocity";
        angular_velocity_min: "angularVelocityMin";
        angular_velocity_max: "angularVelocityMax";
        angular_velocity_curve: "angularVelocityCurve";
        directional_velocity: "directionalVelocity";
        directional_velocity_min: "directionalVelocityMin";
        directional_velocity_max: "directionalVelocityMax";
        directional_velocity_curve: "directionalVelocityCurve";
        orbit_velocity: "orbitVelocity";
        orbit_velocity_min: "orbitVelocityMin";
        orbit_velocity_max: "orbitVelocityMax";
        orbit_velocity_curve: "orbitVelocityCurve";
        radial_velocity: "radialVelocity";
        radial_velocity_min: "radialVelocityMin";
        radial_velocity_max: "radialVelocityMax";
        radial_velocity_curve: "radialVelocityCurve";
        velocity_limit_curve: "velocityLimitCurve";
        linear_accel: "linearAccel";
        linear_accel_min: "linearAccelMin";
        linear_accel_max: "linearAccelMax";
        linear_accel_curve: "linearAccelCurve";
        radial_accel: "radialAccel";
        radial_accel_min: "radialAccelMin";
        radial_accel_max: "radialAccelMax";
        radial_accel_curve: "radialAccelCurve";
        tangential_accel: "tangentialAccel";
        tangential_accel_min: "tangentialAccelMin";
        tangential_accel_max: "tangentialAccelMax";
        tangential_accel_curve: "tangentialAccelCurve";
        damping_min: "dampingMin";
        damping_max: "dampingMax";
        damping_curve: "dampingCurve";
        attractor_interaction_enabled: "attractorInteractionEnabled";
        scale_min: "scaleMin";
        scale_max: "scaleMax";
        scale_curve: "scaleCurve";
        scale_over_velocity: "scaleOverVelocity";
        scale_over_velocity_min: "scaleOverVelocityMin";
        scale_over_velocity_max: "scaleOverVelocityMax";
        scale_over_velocity_curve: "scaleOverVelocityCurve";
        color_ramp: "colorRamp";
        color_initial_ramp: "colorInitialRamp";
        alpha_curve: "alphaCurve";
        emission_curve: "emissionCurve";
        hue_variation: "hueVariation";
        hue_variation_min: "hueVariationMin";
        hue_variation_max: "hueVariationMax";
        hue_variation_curve: "hueVariationCurve";
        anim_speed: "animSpeed";
        anim_speed_min: "animSpeedMin";
        anim_speed_max: "animSpeedMax";
        anim_speed_curve: "animSpeedCurve";
        anim_offset: "animOffset";
        anim_offset_min: "animOffsetMin";
        anim_offset_max: "animOffsetMax";
        anim_offset_curve: "animOffsetCurve";
        turbulence_enabled: "turbulenceEnabled";
        turbulence_noise_strength: "turbulenceNoiseStrength";
        turbulence_noise_scale: "turbulenceNoiseScale";
        turbulence_noise_speed: "turbulenceNoiseSpeed";
        turbulence_noise_speed_random: "turbulenceNoiseSpeedRandom";
        turbulence_influence: "turbulenceInfluence";
        turbulence_influence_min: "turbulenceInfluenceMin";
        turbulence_influence_max: "turbulenceInfluenceMax";
        turbulence_initial_displacement: "turbulenceInitialDisplacement";
        turbulence_initial_displacement_min: "turbulenceInitialDisplacementMin";
        turbulence_initial_displacement_max: "turbulenceInitialDisplacementMax";
        turbulence_influence_over_life: "turbulenceInfluenceOverLife";
        collision_mode: "collisionMode";
        collision_friction: "collisionFriction";
        collision_bounce: "collisionBounce";
        collision_use_scale: "collisionUseScale";
        sub_emitter_mode: "subEmitterMode";
        sub_emitter_frequency: "subEmitterFrequency";
        sub_emitter_amount_at_end: "subEmitterAmountAtEnd";
        sub_emitter_amount_at_collision: "subEmitterAmountAtCollision";
        sub_emitter_amount_at_start: "subEmitterAmountAtStart";
        sub_emitter_keep_velocity: "subEmitterKeepVelocity";
        emission_shape_changed: "emissionShapeChanged";
    }
    /** Holds a particle configuration for [GPUParticles2D] or [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_particleprocessmaterial.html  
     */
    class ParticleProcessMaterial extends Material {
        constructor(identifier?: any)
        /** Sets the minimum and maximum values of the given [param param].  
         *  The `x` component of the argument vector corresponds to minimum and the `y` component corresponds to maximum.  
         */
        setParam(param: ParticleProcessMaterial.Parameter, value: Vector2): void
        
        /** Returns the minimum and maximum values of the given [param param] as a vector.  
         *  The `x` component of the returned vector corresponds to minimum and the `y` component corresponds to maximum.  
         */
        getParam(param: ParticleProcessMaterial.Parameter): Vector2
        
        /** Sets the minimum value range for the given parameter. */
        setParamMin(param: ParticleProcessMaterial.Parameter, value: float64): void
        
        /** Returns the minimum value range for the given parameter. */
        getParamMin(param: ParticleProcessMaterial.Parameter): float64
        
        /** Sets the maximum value range for the given parameter. */
        setParamMax(param: ParticleProcessMaterial.Parameter, value: float64): void
        
        /** Returns the maximum value range for the given parameter. */
        getParamMax(param: ParticleProcessMaterial.Parameter): float64
        
        /** Sets the [Texture2D] for the specified [enum Parameter]. */
        setParamTexture(param: ParticleProcessMaterial.Parameter, texture: Texture2D): void
        
        /** Returns the [Texture2D] used by the specified parameter. */
        getParamTexture(param: ParticleProcessMaterial.Parameter): null | Texture2D
        
        /** Sets the [param particle_flag] to [param enable]. */
        setParticleFlag(particleFlag: ParticleProcessMaterial.ParticleFlags, enable: boolean): void
        
        /** Returns `true` if the specified particle flag is enabled. */
        getParticleFlag(particleFlag: ParticleProcessMaterial.ParticleFlags): boolean
        
        /** Particle lifetime randomness ratio. The equation for the lifetime of a particle is `lifetime * (1.0 - randf() * lifetime_randomness)`. For example, a [member lifetime_randomness] of `0.4` scales the lifetime between `0.6` to `1.0` of its original value. */
        get lifetimeRandomness(): float64
        set lifetimeRandomness(value: float64)
        
        /** Align Y axis of particle with the direction of its velocity. */
        get particleFlagAlignY(): boolean
        set particleFlagAlignY(value: boolean)
        
        /** If `true`, particles rotate around Y axis by [member angle_min]. */
        get particleFlagRotateY(): boolean
        set particleFlagRotateY(value: boolean)
        
        /** If `true`, particles will not move on the z axis. */
        get particleFlagDisableZ(): boolean
        set particleFlagDisableZ(value: boolean)
        
        /** Changes the behavior of the damping properties from a linear deceleration to a deceleration based on speed percentage. */
        get particleFlagDampingAsFriction(): boolean
        set particleFlagDampingAsFriction(value: boolean)
        
        /** The offset for the [member emission_shape], in local space. */
        get emissionShapeOffset(): Vector3
        set emissionShapeOffset(value: Vector3)
        
        /** The scale of the [member emission_shape], in local space. */
        get emissionShapeScale(): Vector3
        set emissionShapeScale(value: Vector3)
        
        /** Particles will be emitted inside this region. */
        get emissionShape(): int64
        set emissionShape(value: int64)
        
        /** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        get emissionSphereRadius(): float64
        set emissionSphereRadius(value: float64)
        
        /** The box's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX].  
         *      
         *  **Note:** [member emission_box_extents] starts from the center point and applies the X, Y, and Z values in both directions. The size is twice the area of the extents.  
         */
        get emissionBoxExtents(): Vector3
        set emissionBoxExtents(value: Vector3)
        
        /** Particles will be emitted at positions determined by sampling this texture at a random position. Used with [constant EMISSION_SHAPE_POINTS] and [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        get emissionPointTexture(): null | Texture2D
        set emissionPointTexture(value: null | Texture2D)
        
        /** Particle velocity and rotation will be set by sampling this texture at the same point as the [member emission_point_texture]. Used only in [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        get emissionNormalTexture(): null | Texture2D
        set emissionNormalTexture(value: null | Texture2D)
        
        /** Particle color will be modulated by color determined by sampling this texture at the same point as the [member emission_point_texture].  
         *      
         *  **Note:** [member emission_color_texture] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_color_texture] will have no visible effect.  
         */
        get emissionColorTexture(): null | Texture2D
        set emissionColorTexture(value: null | Texture2D)
        
        /** The number of emission points if [member emission_shape] is set to [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        get emissionPointCount(): int64
        set emissionPointCount(value: int64)
        
        /** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingAxis(): Vector3
        set emissionRingAxis(value: Vector3)
        
        /** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingHeight(): float64
        set emissionRingHeight(value: float64)
        
        /** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingRadius(): float64
        set emissionRingRadius(value: float64)
        
        /** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingInnerRadius(): float64
        set emissionRingInnerRadius(value: float64)
        
        /** The angle of the cone when using the emitter [constant EMISSION_SHAPE_RING]. The default angle of 90 degrees results in a ring, while an angle of 0 degrees results in a cone. Intermediate values will result in a ring where one end is larger than the other.  
         *      
         *  **Note:** Depending on [member emission_ring_height], the angle may be clamped if the ring's end is reached to form a perfect cone.  
         */
        get emissionRingConeAngle(): float64
        set emissionRingConeAngle(value: float64)
        get angle(): Vector2
        set angle(value: Vector2)
        
        /** Minimum equivalent of [member angle_max]. */
        get angleMin(): float64
        set angleMin(value: float64)
        
        /** Maximum initial rotation applied to each particle, in degrees.  
         *  Only applied when [member particle_flag_disable_z] or [member particle_flag_rotate_y] are `true` or the [BaseMaterial3D] being used to draw the particle is using [constant BaseMaterial3D.BILLBOARD_PARTICLES].  
         */
        get angleMax(): float64
        set angleMax(value: float64)
        
        /** Each particle's rotation will be animated along this [CurveTexture]. */
        get angleCurve(): null | CurveTexture
        set angleCurve(value: null | CurveTexture)
        
        /** Percentage of the velocity of the respective [GPUParticles2D] or [GPUParticles3D] inherited by each particle when spawning. */
        get inheritVelocityRatio(): float64
        set inheritVelocityRatio(value: float64)
        
        /** A pivot point used to calculate radial and orbital velocity of particles. */
        get velocityPivot(): Vector3
        set velocityPivot(value: Vector3)
        
        /** Unit vector specifying the particles' emission direction. */
        get direction(): Vector3
        set direction(value: Vector3)
        
        /** Each particle's initial direction range from `+spread` to `-spread` degrees. */
        get spread(): float64
        set spread(value: float64)
        
        /** Amount of [member spread] along the Y axis. */
        get flatness(): float64
        set flatness(value: float64)
        get initialVelocity(): Vector2
        set initialVelocity(value: Vector2)
        
        /** Minimum equivalent of [member initial_velocity_max]. */
        get initialVelocityMin(): float64
        set initialVelocityMin(value: float64)
        
        /** Maximum initial velocity magnitude for each particle. Direction comes from [member direction] and [member spread]. */
        get initialVelocityMax(): float64
        set initialVelocityMax(value: float64)
        get angularVelocity(): Vector2
        set angularVelocity(value: Vector2)
        
        /** Minimum equivalent of [member angular_velocity_max]. */
        get angularVelocityMin(): float64
        set angularVelocityMin(value: float64)
        
        /** Maximum initial angular velocity (rotation speed) applied to each particle in  *degrees*  per second.  
         *  Only applied when [member particle_flag_disable_z] or [member particle_flag_rotate_y] are `true` or the [BaseMaterial3D] being used to draw the particle is using [constant BaseMaterial3D.BILLBOARD_PARTICLES].  
         */
        get angularVelocityMax(): float64
        set angularVelocityMax(value: float64)
        
        /** Each particle's angular velocity (rotation speed) will vary along this [CurveTexture] over its lifetime. */
        get angularVelocityCurve(): null | CurveTexture
        set angularVelocityCurve(value: null | CurveTexture)
        get directionalVelocity(): Vector2
        set directionalVelocity(value: Vector2)
        
        /** Minimum directional velocity value, which is multiplied by [member directional_velocity_curve].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get directionalVelocityMin(): float64
        set directionalVelocityMin(value: float64)
        
        /** Maximum directional velocity value, which is multiplied by [member directional_velocity_curve].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get directionalVelocityMax(): float64
        set directionalVelocityMax(value: float64)
        
        /** A curve that specifies the velocity along each of the axes of the particle system along its lifetime.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get directionalVelocityCurve(): null | CurveXyzTexture
        set directionalVelocityCurve(value: null | CurveXyzTexture)
        get orbitVelocity(): Vector2
        set orbitVelocity(value: Vector2)
        
        /** Minimum equivalent of [member orbit_velocity_max].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get orbitVelocityMin(): float64
        set orbitVelocityMin(value: float64)
        
        /** Maximum orbital velocity applied to each particle. Makes the particles circle around origin. Specified in number of full rotations around origin per second.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get orbitVelocityMax(): float64
        set orbitVelocityMax(value: float64)
        
        /** Each particle's orbital velocity will vary along this [CurveTexture].  
         *      
         *  **Note:** For 3D orbital velocity, use a [CurveXYZTexture].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get orbitVelocityCurve(): null | CurveTexture | CurveXyzTexture
        set orbitVelocityCurve(value: null | CurveTexture | CurveXyzTexture)
        get radialVelocity(): Vector2
        set radialVelocity(value: Vector2)
        
        /** Minimum radial velocity applied to each particle. Makes particles move away from the [member velocity_pivot], or toward it if negative.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get radialVelocityMin(): float64
        set radialVelocityMin(value: float64)
        
        /** Maximum radial velocity applied to each particle. Makes particles move away from the [member velocity_pivot], or toward it if negative.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get radialVelocityMax(): float64
        set radialVelocityMax(value: float64)
        
        /** A [CurveTexture] that defines the velocity over the particle's lifetime away (or toward) the [member velocity_pivot].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get radialVelocityCurve(): null | CurveTexture
        set radialVelocityCurve(value: null | CurveTexture)
        
        /** A [CurveTexture] that defines the maximum velocity of a particle during its lifetime. */
        get velocityLimitCurve(): null | CurveTexture
        set velocityLimitCurve(value: null | CurveTexture)
        
        /** Gravity applied to every particle. */
        get gravity(): Vector3
        set gravity(value: Vector3)
        get linearAccel(): Vector2
        set linearAccel(value: Vector2)
        
        /** Minimum equivalent of [member linear_accel_max]. */
        get linearAccelMin(): float64
        set linearAccelMin(value: float64)
        
        /** Maximum linear acceleration applied to each particle in the direction of motion. */
        get linearAccelMax(): float64
        set linearAccelMax(value: float64)
        
        /** Each particle's linear acceleration will vary along this [CurveTexture]. */
        get linearAccelCurve(): null | CurveTexture
        set linearAccelCurve(value: null | CurveTexture)
        get radialAccel(): Vector2
        set radialAccel(value: Vector2)
        
        /** Minimum equivalent of [member radial_accel_max]. */
        get radialAccelMin(): float64
        set radialAccelMin(value: float64)
        
        /** Maximum radial acceleration applied to each particle. Makes particle accelerate away from the origin or towards it if negative. */
        get radialAccelMax(): float64
        set radialAccelMax(value: float64)
        
        /** Each particle's radial acceleration will vary along this [CurveTexture]. */
        get radialAccelCurve(): null | CurveTexture
        set radialAccelCurve(value: null | CurveTexture)
        get tangentialAccel(): Vector2
        set tangentialAccel(value: Vector2)
        
        /** Minimum equivalent of [member tangential_accel_max]. */
        get tangentialAccelMin(): float64
        set tangentialAccelMin(value: float64)
        
        /** Maximum tangential acceleration applied to each particle. Tangential acceleration is perpendicular to the particle's velocity giving the particles a swirling motion. */
        get tangentialAccelMax(): float64
        set tangentialAccelMax(value: float64)
        
        /** Each particle's tangential acceleration will vary along this [CurveTexture]. */
        get tangentialAccelCurve(): null | CurveTexture
        set tangentialAccelCurve(value: null | CurveTexture)
        get damping(): Vector2
        set damping(value: Vector2)
        
        /** Minimum equivalent of [member damping_max]. */
        get dampingMin(): float64
        set dampingMin(value: float64)
        
        /** The maximum rate at which particles lose velocity. For example value of `100` means that the particle will go from `100` velocity to `0` in `1` second. */
        get dampingMax(): float64
        set dampingMax(value: float64)
        
        /** Damping will vary along this [CurveTexture]. */
        get dampingCurve(): null | CurveTexture
        set dampingCurve(value: null | CurveTexture)
        
        /** If `true`, interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb]. */
        get attractorInteractionEnabled(): boolean
        set attractorInteractionEnabled(value: boolean)
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** Minimum equivalent of [member scale_max]. */
        get scaleMin(): float64
        set scaleMin(value: float64)
        
        /** Maximum initial scale applied to each particle. */
        get scaleMax(): float64
        set scaleMax(value: float64)
        
        /** Each particle's scale will vary along this [CurveTexture] over its lifetime. If a [CurveXYZTexture] is supplied instead, the scale will be separated per-axis. */
        get scaleCurve(): null | CurveTexture | CurveXyzTexture
        set scaleCurve(value: null | CurveTexture | CurveXyzTexture)
        get scaleOverVelocity(): Vector2
        set scaleOverVelocity(value: Vector2)
        
        /** Minimum velocity value reference for [member scale_over_velocity_curve].  
         *  [member scale_over_velocity_curve] will be interpolated between [member scale_over_velocity_min] and [member scale_over_velocity_max].  
         */
        get scaleOverVelocityMin(): float64
        set scaleOverVelocityMin(value: float64)
        
        /** Maximum velocity value reference for [member scale_over_velocity_curve].  
         *  [member scale_over_velocity_curve] will be interpolated between [member scale_over_velocity_min] and [member scale_over_velocity_max].  
         */
        get scaleOverVelocityMax(): float64
        set scaleOverVelocityMax(value: float64)
        
        /** Either a [CurveTexture] or a [CurveXYZTexture] that scales each particle based on its velocity. */
        get scaleOverVelocityCurve(): null | CurveTexture | CurveXyzTexture
        set scaleOverVelocityCurve(value: null | CurveTexture | CurveXyzTexture)
        
        /** Each particle's initial color. If the [GPUParticles2D]'s `texture` is defined, it will be multiplied by this color.  
         *      
         *  **Note:** [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color] will have no visible effect.  
         */
        get color(): Color
        set color(value: Color)
        
        /** Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).  
         *      
         *  **Note:** [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_ramp] will have no visible effect.  
         */
        get colorRamp(): null | GradientTexture1D
        set colorRamp(value: null | GradientTexture1D)
        
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).  
         *      
         *  **Note:** [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_initial_ramp] will have no visible effect.  
         */
        get colorInitialRamp(): null | GradientTexture1D
        set colorInitialRamp(value: null | GradientTexture1D)
        
        /** The alpha value of each particle's color will be multiplied by this [CurveTexture] over its lifetime.  
         *      
         *  **Note:** [member alpha_curve] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member alpha_curve] will have no visible effect.  
         */
        get alphaCurve(): null | CurveTexture
        set alphaCurve(value: null | CurveTexture)
        
        /** Each particle's color will be multiplied by this [CurveTexture] over its lifetime.  
         *      
         *  **Note:** [member emission_curve] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_curve] will have no visible effect.  
         */
        get emissionCurve(): null | CurveTexture
        set emissionCurve(value: null | CurveTexture)
        get hueVariation(): Vector2
        set hueVariation(value: Vector2)
        
        /** Minimum equivalent of [member hue_variation_max]. */
        get hueVariationMin(): float64
        set hueVariationMin(value: float64)
        
        /** Maximum initial hue variation applied to each particle. It will shift the particle color's hue. */
        get hueVariationMax(): float64
        set hueVariationMax(value: float64)
        
        /** Each particle's hue will vary along this [CurveTexture]. */
        get hueVariationCurve(): null | CurveTexture
        set hueVariationCurve(value: null | CurveTexture)
        get animSpeed(): Vector2
        set animSpeed(value: Vector2)
        
        /** Minimum equivalent of [member anim_speed_max]. */
        get animSpeedMin(): float64
        set animSpeedMin(value: float64)
        
        /** Maximum particle animation speed. Animation speed of `1` means that the particles will make full `0` to `1` offset cycle during lifetime, `2` means `2` cycles etc.  
         *  With animation speed greater than `1`, remember to enable [member CanvasItemMaterial.particles_anim_loop] property if you want the animation to repeat.  
         */
        get animSpeedMax(): float64
        set animSpeedMax(value: float64)
        
        /** Each particle's animation speed will vary along this [CurveTexture]. */
        get animSpeedCurve(): null | CurveTexture
        set animSpeedCurve(value: null | CurveTexture)
        get animOffset(): Vector2
        set animOffset(value: Vector2)
        
        /** Minimum equivalent of [member anim_offset_max]. */
        get animOffsetMin(): float64
        set animOffsetMin(value: float64)
        
        /** Maximum animation offset that corresponds to frame index in the texture. `0` is the first frame, `1` is the last one. See [member CanvasItemMaterial.particles_animation]. */
        get animOffsetMax(): float64
        set animOffsetMax(value: float64)
        
        /** Each particle's animation offset will vary along this [CurveTexture]. */
        get animOffsetCurve(): null | CurveTexture
        set animOffsetCurve(value: null | CurveTexture)
        
        /** If `true`, enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, [GPUParticlesAttractorVectorField3D] with [NoiseTexture3D] can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.  
         *      
         *  **Note:** Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.  
         */
        get turbulenceEnabled(): boolean
        set turbulenceEnabled(value: boolean)
        
        /** The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern. */
        get turbulenceNoiseStrength(): float64
        set turbulenceNoiseStrength(value: float64)
        
        /** This value controls the overall scale/frequency of the turbulence noise pattern.  
         *  A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.  
         */
        get turbulenceNoiseScale(): float64
        set turbulenceNoiseScale(value: float64)
        
        /** A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.  
         *  The default value of `Vector3(0, 0, 0)` turns off the scrolling.  
         */
        get turbulenceNoiseSpeed(): Vector3
        set turbulenceNoiseSpeed(value: Vector3)
        
        /** The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.  
         *  A value of 0.0 will result in a fixed pattern.  
         */
        get turbulenceNoiseSpeedRandom(): float64
        set turbulenceNoiseSpeedRandom(value: float64)
        get turbulenceInfluence(): Vector2
        set turbulenceInfluence(value: Vector2)
        
        /** Minimum turbulence influence on each particle.  
         *  The actual amount of turbulence influence on each particle is calculated as a random value between [member turbulence_influence_min] and [member turbulence_influence_max] and multiplied by the amount of turbulence influence from [member turbulence_influence_over_life].  
         */
        get turbulenceInfluenceMin(): float64
        set turbulenceInfluenceMin(value: float64)
        
        /** Maximum turbulence influence on each particle.  
         *  The actual amount of turbulence influence on each particle is calculated as a random value between [member turbulence_influence_min] and [member turbulence_influence_max] and multiplied by the amount of turbulence influence from [member turbulence_influence_over_life].  
         */
        get turbulenceInfluenceMax(): float64
        set turbulenceInfluenceMax(value: float64)
        get turbulenceInitialDisplacement(): Vector2
        set turbulenceInitialDisplacement(value: Vector2)
        
        /** Minimum displacement of each particle's spawn position by the turbulence.  
         *  The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [member turbulence_initial_displacement_min] and [member turbulence_initial_displacement_max].  
         */
        get turbulenceInitialDisplacementMin(): float64
        set turbulenceInitialDisplacementMin(value: float64)
        
        /** Maximum displacement of each particle's spawn position by the turbulence.  
         *  The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [member turbulence_initial_displacement_min] and [member turbulence_initial_displacement_max].  
         */
        get turbulenceInitialDisplacementMax(): float64
        set turbulenceInitialDisplacementMax(value: float64)
        
        /** Each particle's amount of turbulence will be influenced along this [CurveTexture] over its life time. */
        get turbulenceInfluenceOverLife(): null | CurveTexture
        set turbulenceInfluenceOverLife(value: null | CurveTexture)
        
        /** The particles' collision mode.  
         *      
         *  **Note:** 3D Particles can only collide with [GPUParticlesCollision3D] nodes, not [PhysicsBody3D] nodes. To make particles collide with various objects, you can add [GPUParticlesCollision3D] nodes as children of [PhysicsBody3D] nodes. In 3D, collisions only occur within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb].  
         *      
         *  **Note:** 2D Particles can only collide with [LightOccluder2D] nodes, not [PhysicsBody2D] nodes.  
         */
        get collisionMode(): int64
        set collisionMode(value: int64)
        
        /** The particles' friction. Values range from `0` (frictionless) to `1` (maximum friction). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        get collisionFriction(): float64
        set collisionFriction(value: float64)
        
        /** The particles' bounciness. Values range from `0` (no bounce) to `1` (full bounciness). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        get collisionBounce(): float64
        set collisionBounce(value: float64)
        
        /** If `true`, [member GPUParticles3D.collision_base_size] is multiplied by the particle's effective scale (see [member scale_min], [member scale_max], [member scale_curve], and [member scale_over_velocity_curve]). */
        get collisionUseScale(): boolean
        set collisionUseScale(value: boolean)
        
        /** The particle subemitter mode (see [member GPUParticles2D.sub_emitter] and [member GPUParticles3D.sub_emitter]). */
        get subEmitterMode(): int64
        set subEmitterMode(value: int64)
        
        /** The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every [member sub_emitter_frequency] seconds.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterFrequency(): float64
        set subEmitterFrequency(value: float64)
        
        /** The amount of particles to spawn from the subemitter node when the particle expires.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterAmountAtEnd(): int64
        set subEmitterAmountAtEnd(value: int64)
        
        /** The amount of particles to spawn from the subemitter node when a collision occurs. When combined with [constant COLLISION_HIDE_ON_CONTACT] on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterAmountAtCollision(): int64
        set subEmitterAmountAtCollision(value: int64)
        
        /** The amount of particles to spawn from the subemitter node when the particle spawns.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterAmountAtStart(): int64
        set subEmitterAmountAtStart(value: int64)
        
        /** If `true`, the subemitter inherits the parent particle's velocity when it spawns. */
        get subEmitterKeepVelocity(): boolean
        set subEmitterKeepVelocity(value: boolean)
        
        /** Emitted when this material's emission shape is changed in any way. This includes changes to [member emission_shape], [member emission_shape_scale], or [member emission_sphere_radius], and any other property that affects the emission shape's offset, size, scale, or orientation.  
         *      
         *  **Note:** This signal is only emitted inside the editor for performance reasons.  
         */
        readonly emissionShapeChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapParticleProcessMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapParticleProcessMaterial;
    }
}
