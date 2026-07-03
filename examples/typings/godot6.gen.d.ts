// AUTO-GENERATED
declare module "godot" {
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPath2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPath2D extends __NameMapNode2D {
    }
    /** Contains a [Curve2D] path for [PathFollow2D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_path2d.html  
     */
    class Path2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** A [Curve2D] describing the path. */
        get curve(): null | Curve2D
        set curve(value: null | Curve2D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPath2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPath2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPath3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPath3D extends __NameMapNode3D {
        debug_custom_color: "debugCustomColor";
        curve_changed: "curveChanged";
        debug_color_changed: "debugColorChanged";
    }
    /** Contains a [Curve3D] path for [PathFollow3D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_path3d.html  
     */
    class Path3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** A [Curve3D] describing the path. */
        get curve(): null | Curve3D
        set curve(value: null | Curve3D)
        
        /** The custom color to use to draw the shape in the editor.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in EditorSettings is used.  
         */
        get debugCustomColor(): Color
        set debugCustomColor(value: Color)
        
        /** Emitted when the [member curve] changes. */
        readonly curveChanged: Signal<() => void>
        
        /** Emitted when the [member debug_custom_color] changes. */
        readonly debugColorChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPath3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPath3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPathFollow2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPathFollow2D extends __NameMapNode2D {
        progress_ratio: "progressRatio";
        h_offset: "hOffset";
        v_offset: "vOffset";
        cubic_interp: "cubicInterp";
    }
    /** Point sampler for a [Path2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_pathfollow2d.html  
     */
    class PathFollow2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The distance along the path, in pixels. Changing this value sets this node's position to a point within the path. */
        get progress(): float64
        set progress(value: float64)
        
        /** The distance along the path as a number in the range 0.0 (for the first vertex) to 1.0 (for the last). This is just another way of expressing the progress within the path, as the offset supplied is multiplied internally by the path's length.  
         *  It can be set or get only if the [PathFollow2D] is the child of a [Path2D] which is part of the scene tree, and that this [Path2D] has a [Curve2D] with a non-zero length. Otherwise, trying to set this field will print an error, and getting this field will return `0.0`.  
         */
        get progressRatio(): float64
        set progressRatio(value: float64)
        
        /** The node's offset along the curve. */
        get hOffset(): float64
        set hOffset(value: float64)
        
        /** The node's offset perpendicular to the curve. */
        get vOffset(): float64
        set vOffset(value: float64)
        
        /** If `true`, this node rotates to follow the path, with the +X direction facing forward on the path. */
        get rotates(): boolean
        set rotates(value: boolean)
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve2D] of the [Path2D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
        get cubicInterp(): boolean
        set cubicInterp(value: boolean)
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        get loop(): boolean
        set loop(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPathFollow2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPathFollow2D;
    }
    namespace PathFollow3D {
        enum RotationMode {
            RotationNone = 0,
            RotationY = 1,
            RotationXy = 2,
            RotationXyz = 3,
            RotationOriented = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPathFollow3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPathFollow3D extends __NameMapNode3D {
        correct_posture: "correctPosture";
        progress_ratio: "progressRatio";
        h_offset: "hOffset";
        v_offset: "vOffset";
        rotation_mode: "rotationMode";
        use_model_front: "useModelFront";
        cubic_interp: "cubicInterp";
        tilt_enabled: "tiltEnabled";
    }
    /** Point sampler for a [Path3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_pathfollow3d.html  
     */
    class PathFollow3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Correct the [param transform]. [param rotation_mode] implicitly specifies how posture (forward, up and sideway direction) is calculated. */
        static correctPosture(transform: Transform3D, rotationMode: PathFollow3D.RotationMode): Transform3D
        
        /** The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path. */
        get progress(): float64
        set progress(value: float64)
        
        /** The distance from the first vertex, considering 0.0 as the first vertex and 1.0 as the last. This is just another way of expressing the progress within the path, as the progress supplied is multiplied internally by the path's length.  
         *  It can be set or get only if the [PathFollow3D] is the child of a [Path3D] which is part of the scene tree, and that this [Path3D] has a [Curve3D] with a non-zero length. Otherwise, trying to set this field will print an error, and getting this field will return `0.0`.  
         */
        get progressRatio(): float64
        set progressRatio(value: float64)
        
        /** The node's offset along the curve. */
        get hOffset(): float64
        set hOffset(value: float64)
        
        /** The node's offset perpendicular to the curve. */
        get vOffset(): float64
        set vOffset(value: float64)
        
        /** Allows or forbids rotation on one or more axes, depending on the [enum RotationMode] constants being used. */
        get rotationMode(): int64
        set rotationMode(value: int64)
        
        /** If `true`, the node moves on the travel path with orienting the +Z axis as forward. See also [constant Vector3.FORWARD] and [constant Vector3.MODEL_FRONT]. */
        get useModelFront(): boolean
        set useModelFront(value: boolean)
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve3D] of the [Path3D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
        get cubicInterp(): boolean
        set cubicInterp(value: boolean)
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** If `true`, the tilt property of [Curve3D] takes effect. */
        get tiltEnabled(): boolean
        set tiltEnabled(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPathFollow3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPathFollow3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicalBone2D extends __RPCMapRigidBody2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicalBone2D extends __NameMapRigidBody2D {
        get_joint: "getJoint";
        is_simulating_physics: "isSimulatingPhysics";
        bone2d_nodepath: "bone2DNodePath";
        bone2d_index: "bone2DIndex";
        auto_configure_joint: "autoConfigureJoint";
        simulate_physics: "simulatePhysics";
        follow_bone_when_simulating: "followBoneWhenSimulating";
    }
    /** A [RigidBody2D]-derived node used to make [Bone2D]s in a [Skeleton2D] react to physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicalbone2d.html  
     */
    class PhysicalBone2D<Map extends NodePathMap = any> extends RigidBody2D<Map> {
        constructor(identifier?: any)
        /** Returns the first [Joint2D] child node, if one exists. This is mainly a helper function to make it easier to get the [Joint2D] that the [PhysicalBone2D] is autoconfiguring. */
        getJoint(): null | Joint2D
        
        /** Returns a boolean that indicates whether the [PhysicalBone2D] is running and simulating using the Godot 2D physics engine. When `true`, the PhysicalBone2D node is using physics. */
        isSimulatingPhysics(): boolean
        
        /** The [NodePath] to the [Bone2D] that this [PhysicalBone2D] should simulate. */
        get bone2DNodePath(): NodePath
        set bone2DNodePath(value: NodePath | string)
        
        /** The index of the [Bone2D] that this [PhysicalBone2D] should simulate. */
        get bone2DIndex(): int64
        set bone2DIndex(value: int64)
        
        /** If `true`, the [PhysicalBone2D] will automatically configure the first [Joint2D] child node. The automatic configuration is limited to setting up the node properties and positioning the [Joint2D]. */
        get autoConfigureJoint(): boolean
        set autoConfigureJoint(value: boolean)
        
        /** If `true`, the [PhysicalBone2D] will start simulating using physics. If `false`, the [PhysicalBone2D] will follow the transform of the [Bone2D] node.  
         *      
         *  **Note:** To have the [Bone2D]s visually follow the [PhysicalBone2D], use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] node with the [Bone2D] nodes.  
         */
        get simulatePhysics(): boolean
        set simulatePhysics(value: boolean)
        
        /** If `true`, the [PhysicalBone2D] will keep the transform of the bone it is bound to when simulating physics. */
        get followBoneWhenSimulating(): boolean
        set followBoneWhenSimulating(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicalBone2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicalBone2D;
    }
    namespace PhysicalBone3D {
        enum DampMode {
            DampModeCombine = 0,
            DampModeReplace = 1,
        }
        enum JointType {
            JointTypeNone = 0,
            JointTypePin = 1,
            JointTypeCone = 2,
            JointTypeHinge = 3,
            JointTypeSlider = 4,
            JointType6Dof = 5,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicalBone3D extends __RPCMapPhysicsBody3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicalBone3D extends __NameMapPhysicsBody3D {
        _integrate_forces: "_integrateForces";
        apply_central_impulse: "applyCentralImpulse";
        apply_impulse: "applyImpulse";
        get_simulate_physics: "getSimulatePhysics";
        is_simulating_physics: "isSimulatingPhysics";
        get_bone_id: "getBoneId";
        joint_type: "jointType";
        joint_offset: "jointOffset";
        joint_rotation: "jointRotation";
        body_offset: "bodyOffset";
        gravity_scale: "gravityScale";
        custom_integrator: "customIntegrator";
        linear_damp_mode: "linearDampMode";
        linear_damp: "linearDamp";
        angular_damp_mode: "angularDampMode";
        angular_damp: "angularDamp";
        linear_velocity: "linearVelocity";
        angular_velocity: "angularVelocity";
        can_sleep: "canSleep";
    }
    /** A physics body used to make bones in a [Skeleton3D] react to physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicalbone3d.html  
     */
    class PhysicalBone3D<Map extends NodePathMap = any> extends PhysicsBody3D<Map> {
        constructor(identifier?: any)
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [member custom_integrator] property allows you to disable the standard force integration and do fully custom force integration for a body. */
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState3D): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_integrate_forces" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse: Vector3): void
        
        /** Applies a positioned impulse to the PhysicsBone3D.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_integrate_forces" functions otherwise).  
         *  [param position] is the offset from the PhysicsBone3D origin in global coordinates.  
         */
        applyImpulse(impulse: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Returns `true` if the PhysicsBone3D is allowed to simulate physics. */
        getSimulatePhysics(): boolean
        
        /** Returns `true` if the PhysicsBone3D is currently simulating physics. */
        isSimulatingPhysics(): boolean
        
        /** Returns the unique identifier of the PhysicsBone3D. */
        getBoneId(): int64
        
        /** Sets the joint type. */
        get jointType(): int64
        set jointType(value: int64)
        
        /** Sets the joint's transform. */
        get jointOffset(): Transform3D
        set jointOffset(value: Transform3D)
        
        /** Sets the joint's rotation in radians. */
        get jointRotation(): Vector3
        set jointRotation(value: Vector3)
        
        /** Sets the body's transform. */
        get bodyOffset(): Transform3D
        set bodyOffset(value: Transform3D)
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The body's friction, from `0` (frictionless) to `1` (max friction). */
        get friction(): float64
        set friction(value: float64)
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a [PhysicalBone3D] that preserves all its energy over time, set [member bounce] to `1.0`, [member linear_damp_mode] to [constant DAMP_MODE_REPLACE], [member linear_damp] to `0.0`, [member angular_damp_mode] to [constant DAMP_MODE_REPLACE], and [member angular_damp] to `0.0`.  
         */
        get bounce(): float64
        set bounce(value: float64)
        
        /** This is multiplied by [member ProjectSettings.physics/3d/default_gravity] to produce this body's gravity. For example, a value of `1.0` will apply normal gravity, `2.0` will apply double the gravity, and `0.5` will apply half the gravity to this body. */
        get gravityScale(): float64
        set gravityScale(value: float64)
        
        /** If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] method, if that virtual method is overridden.  
         *  Setting this property will call the method [method PhysicsServer3D.body_set_omit_force_integration] internally.  
         */
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        
        /** Defines how [member linear_damp] is applied. */
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        
        /** Damps the body's movement. By default, the body will use [member ProjectSettings.physics/3d/default_linear_damp] or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], [member linear_damp] may be added to or replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** Defines how [member angular_damp] is applied. */
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the [member ProjectSettings.physics/3d/default_angular_damp] project setting or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        
        /** The PhysicalBone3D's rotational velocity in  *radians*  per second. */
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        
        /** If `true`, the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force. */
        get canSleep(): boolean
        set canSleep(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicalBone3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicalBone3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicalBoneSimulator3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicalBoneSimulator3D extends __NameMapSkeletonModifier3D {
        is_simulating_physics: "isSimulatingPhysics";
        physical_bones_stop_simulation: "physicalBonesStopSimulation";
        physical_bones_start_simulation: "physicalBonesStartSimulation";
        physical_bones_add_collision_exception: "physicalBonesAddCollisionException";
        physical_bones_remove_collision_exception: "physicalBonesRemoveCollisionException";
    }
    /** Node that can be the parent of [PhysicalBone3D] and can apply the simulation results to [Skeleton3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicalbonesimulator3d.html  
     */
    class PhysicalBoneSimulator3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** Returns a boolean that indicates whether the [PhysicalBoneSimulator3D] is running and simulating. */
        isSimulatingPhysics(): boolean
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to stop simulating. */
        physicalBonesStopSimulation(): void
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to start simulating and reacting to the physics world.  
         *  Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.  
         */
        physicalBonesStartSimulation(bones?: GArray<StringName>): void
        
        /** Adds a collision exception to the physical bone.  
         *  Works just like the [RigidBody3D] node.  
         */
        physicalBonesAddCollisionException(exception: Rid): void
        
        /** Removes a collision exception to the physical bone.  
         *  Works just like the [RigidBody3D] node.  
         */
        physicalBonesRemoveCollisionException(exception: Rid): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicalBoneSimulator3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicalBoneSimulator3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicalSkyMaterial extends __RPCMapMaterial {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicalSkyMaterial extends __NameMapMaterial {
        rayleigh_coefficient: "rayleighCoefficient";
        rayleigh_color: "rayleighColor";
        mie_coefficient: "mieCoefficient";
        mie_eccentricity: "mieEccentricity";
        mie_color: "mieColor";
        sun_disk_scale: "sunDiskScale";
        ground_color: "groundColor";
        energy_multiplier: "energyMultiplier";
        use_debanding: "useDebanding";
        night_sky: "nightSky";
    }
    /** A material that defines a sky for a [Sky] resource by a set of physical properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicalskymaterial.html  
     */
    class PhysicalSkyMaterial extends Material {
        constructor(identifier?: any)
        /** Controls the strength of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. Rayleigh scattering results from light colliding with small particles. It is responsible for the blue color of the sky. */
        get rayleighCoefficient(): float64
        set rayleighCoefficient(value: float64)
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. While not physically accurate, this allows for the creation of alien-looking planets. For example, setting this to a red [Color] results in a Mars-looking atmosphere with a corresponding blue sunset. */
        get rayleighColor(): Color
        set rayleighColor(value: Color)
        
        /** Controls the strength of [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] for the sky. Mie scattering results from light colliding with larger particles (like water). On earth, Mie scattering results in a whitish color around the sun and horizon. */
        get mieCoefficient(): float64
        set mieCoefficient(value: float64)
        
        /** Controls the direction of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url]. A value of `1` means that when light hits a particle it's passing through straight forward. A value of `-1` means that all light is scatter backwards. */
        get mieEccentricity(): float64
        set mieEccentricity(value: float64)
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] effect. While not physically accurate, this allows for the creation of alien-looking planets. */
        get mieColor(): Color
        set mieColor(value: Color)
        
        /** Sets the thickness of the atmosphere. High turbidity creates a foggy-looking atmosphere, while a low turbidity results in a clearer atmosphere. */
        get turbidity(): float64
        set turbidity(value: float64)
        
        /** Sets the size of the sun disk. Default value is based on Sol's perceived size from Earth. */
        get sunDiskScale(): float64
        set sunDiskScale(value: float64)
        
        /** Modulates the [Color] on the bottom half of the sky to represent the ground. */
        get groundColor(): Color
        set groundColor(value: Color)
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        
        /** [Texture2D] for the night sky. This is added to the sky, so if it is bright enough, it may be visible during the day. */
        get nightSky(): null | Texture2D
        set nightSky(value: null | Texture2D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicalSkyMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicalSkyMaterial;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsBody2D extends __RPCMapCollisionObject2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsBody2D extends __NameMapCollisionObject2D {
        move_and_collide: "moveAndCollide";
        test_move: "testMove";
        get_gravity: "getGravity";
        get_collision_exceptions: "getCollisionExceptions";
        add_collision_exception_with: "addCollisionExceptionWith";
        remove_collision_exception_with: "removeCollisionExceptionWith";
    }
    /** Abstract base class for 2D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsbody2d.html  
     */
    class PhysicsBody2D<Map extends NodePathMap = any> extends CollisionObject2D<Map> {
        constructor(identifier?: any)
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Returns a [KinematicCollision2D], which contains information about the collision when stopped, or when touching another body along the motion.  
         *  If [param test_only] is `true`, the body does not move but the would-be collision information is given.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         */
        moveAndCollide(motion: Vector2, testOnly?: boolean /* = false */, safeMargin?: float64 /* = 0.08 */, recoveryAsCollision?: boolean /* = false */): null | KinematicCollision2D
        
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform2D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.  
         *  [param collision] is an optional object of type [KinematicCollision2D], which contains additional information about the collision when stopped, or when touching another body along the motion.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would  *touch*  any other bodies.  
         */
        testMove(from: Transform2D, motion: Vector2, collision?: KinematicCollision2D, safeMargin?: float64 /* = 0.08 */, recoveryAsCollision?: boolean /* = false */): boolean
        
        /** Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from [Area2D] nodes and the global world gravity. */
        getGravity(): Vector2
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        getCollisionExceptions(): GArray<PhysicsBody2D>
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        addCollisionExceptionWith(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        removeCollisionExceptionWith(body: Node): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsBody2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsBody2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsBody3D extends __RPCMapCollisionObject3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsBody3D extends __NameMapCollisionObject3D {
        move_and_collide: "moveAndCollide";
        test_move: "testMove";
        get_gravity: "getGravity";
        set_axis_lock: "setAxisLock";
        get_axis_lock: "getAxisLock";
        get_collision_exceptions: "getCollisionExceptions";
        add_collision_exception_with: "addCollisionExceptionWith";
        remove_collision_exception_with: "removeCollisionExceptionWith";
        axis_lock_linear_x: "axisLockLinearX";
        axis_lock_linear_y: "axisLockLinearY";
        axis_lock_linear_z: "axisLockLinearZ";
        axis_lock_angular_x: "axisLockAngularX";
        axis_lock_angular_y: "axisLockAngularY";
        axis_lock_angular_z: "axisLockAngularZ";
    }
    /** Abstract base class for 3D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsbody3d.html  
     */
    class PhysicsBody3D<Map extends NodePathMap = any> extends CollisionObject3D<Map> {
        constructor(identifier?: any)
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  The body will stop if it collides. Returns a [KinematicCollision3D], which contains information about the collision when stopped, or when touching another body along the motion.  
         *  If [param test_only] is `true`, the body does not move but the would-be collision information is given.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.  
         *  [param max_collisions] allows to retrieve more than one collision result.  
         */
        moveAndCollide(motion: Vector3, testOnly?: boolean /* = false */, safeMargin?: float64 /* = 0.001 */, recoveryAsCollision?: boolean /* = false */, maxCollisions?: int64 /* = 1 */): null | KinematicCollision3D
        
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform3D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.  
         *  [param collision] is an optional object of type [KinematicCollision3D], which contains additional information about the collision when stopped, or when touching another body along the motion.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would  *touch*  any other bodies.  
         *  [param max_collisions] allows to retrieve more than one collision result.  
         */
        testMove(from: Transform3D, motion: Vector3, collision?: KinematicCollision3D, safeMargin?: float64 /* = 0.001 */, recoveryAsCollision?: boolean /* = false */, maxCollisions?: int64 /* = 1 */): boolean
        
        /** Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from [Area3D] nodes and the global world gravity. */
        getGravity(): Vector3
        
        /** Locks or unlocks the specified linear or rotational [param axis] depending on the value of [param lock]. */
        setAxisLock(axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        
        /** Returns `true` if the specified linear or rotational [param axis] is locked. */
        getAxisLock(axis: PhysicsServer3D.BodyAxis): boolean
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        getCollisionExceptions(): GArray<PhysicsBody3D>
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        addCollisionExceptionWith(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        removeCollisionExceptionWith(body: Node): void
        
        /** Lock the body's linear movement in the X axis. */
        get axisLockLinearX(): boolean
        set axisLockLinearX(value: boolean)
        
        /** Lock the body's linear movement in the Y axis. */
        get axisLockLinearY(): boolean
        set axisLockLinearY(value: boolean)
        
        /** Lock the body's linear movement in the Z axis. */
        get axisLockLinearZ(): boolean
        set axisLockLinearZ(value: boolean)
        
        /** Lock the body's rotation in the X axis. */
        get axisLockAngularX(): boolean
        set axisLockAngularX(value: boolean)
        
        /** Lock the body's rotation in the Y axis. */
        get axisLockAngularY(): boolean
        set axisLockAngularY(value: boolean)
        
        /** Lock the body's rotation in the Z axis. */
        get axisLockAngularZ(): boolean
        set axisLockAngularZ(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsBody3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsBody3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectBodyState2D extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectBodyState2D extends __NameMapGObject {
        get_velocity_at_local_position: "getVelocityAtLocalPosition";
        apply_central_impulse: "applyCentralImpulse";
        apply_torque_impulse: "applyTorqueImpulse";
        apply_impulse: "applyImpulse";
        apply_central_force: "applyCentralForce";
        apply_force: "applyForce";
        apply_torque: "applyTorque";
        add_constant_central_force: "addConstantCentralForce";
        add_constant_force: "addConstantForce";
        add_constant_torque: "addConstantTorque";
        set_constant_force: "setConstantForce";
        get_constant_force: "getConstantForce";
        set_constant_torque: "setConstantTorque";
        get_constant_torque: "getConstantTorque";
        get_contact_count: "getContactCount";
        get_contact_local_position: "getContactLocalPosition";
        get_contact_local_normal: "getContactLocalNormal";
        get_contact_local_shape: "getContactLocalShape";
        get_contact_local_velocity_at_position: "getContactLocalVelocityAtPosition";
        get_contact_collider: "getContactCollider";
        get_contact_collider_position: "getContactColliderPosition";
        get_contact_collider_id: "getContactColliderId";
        get_contact_collider_object: "getContactColliderObject";
        get_contact_collider_shape: "getContactColliderShape";
        get_contact_collider_velocity_at_position: "getContactColliderVelocityAtPosition";
        get_contact_impulse: "getContactImpulse";
        integrate_forces: "integrateForces";
        get_space_state: "getSpaceState";
        inverse_mass: "inverseMass";
        inverse_inertia: "inverseInertia";
        total_angular_damp: "totalAngularDamp";
        total_linear_damp: "totalLinearDamp";
        total_gravity: "totalGravity";
        center_of_mass: "centerOfMass";
        center_of_mass_local: "centerOfMassLocal";
        angular_velocity: "angularVelocity";
        linear_velocity: "linearVelocity";
        collision_layer: "collisionLayer";
        collision_mask: "collisionMask";
    }
    /** Provides direct access to a physics body in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectbodystate2d.html  
     */
    class PhysicsDirectBodyState2D extends GObject {
        constructor(identifier?: any)
        /** Returns the body's velocity at the given relative position, including both translation and rotation. */
        getVelocityAtLocalPosition(localPosition: Vector2): Vector2
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse: Vector2): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorqueImpulse(impulse: float64): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorque(torque: float64): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force?: Vector2 /* = Vector2.ZERO */): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = 0`. */
        addConstantTorque(torque: float64): void
        
        /** Sets the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        setConstantForce(force: Vector2): void
        
        /** Returns the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        getConstantForce(): Vector2
        
        /** Sets the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        setConstantTorque(torque: float64): void
        
        /** Returns the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        getConstantTorque(): float64
        
        /** Returns the number of contacts this body has with other bodies.  
         *      
         *  **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody2D.contact_monitor].  
         */
        getContactCount(): int64
        
        /** Returns the position of the contact point on the body in the global coordinate system. */
        getContactLocalPosition(contactIdx: int64): Vector2
        
        /** Returns the local normal at the contact point. */
        getContactLocalNormal(contactIdx: int64): Vector2
        
        /** Returns the local shape index of the collision. */
        getContactLocalShape(contactIdx: int64): int64
        
        /** Returns the velocity vector at the body's contact point. */
        getContactLocalVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Returns the collider's [RID]. */
        getContactCollider(contactIdx: int64): Rid
        
        /** Returns the position of the contact point on the collider in the global coordinate system. */
        getContactColliderPosition(contactIdx: int64): Vector2
        
        /** Returns the collider's object id. */
        getContactColliderId(contactIdx: int64): int64
        
        /** Returns the collider object. This depends on how it was created (will return a scene node if such was used to create it). */
        getContactColliderObject(contactIdx: int64): null | GObject
        
        /** Returns the collider's shape index. */
        getContactColliderShape(contactIdx: int64): int64
        
        /** Returns the velocity vector at the collider's contact point. */
        getContactColliderVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Returns the impulse created by the contact. */
        getContactImpulse(contactIdx: int64): Vector2
        
        /** Updates the body's linear and angular velocity by applying gravity and damping for the equivalent of one physics tick. */
        integrateForces(): void
        
        /** Returns the current state of the space, useful for queries. */
        getSpaceState(): null | PhysicsDirectSpaceState2D
        
        /** The timestep (delta) used for the simulation. */
        get step(): float64
        set step(value: float64)
        
        /** The inverse of the mass of the body. */
        get inverseMass(): float64
        set inverseMass(value: float64)
        
        /** The inverse of the inertia of the body. */
        get inverseInertia(): float64
        set inverseInertia(value: float64)
        
        /** The rate at which the body stops rotating, if there are not any other forces moving it. */
        get totalAngularDamp(): float64
        set totalAngularDamp(value: float64)
        
        /** The rate at which the body stops moving, if there are not any other forces moving it. */
        get totalLinearDamp(): float64
        set totalLinearDamp(value: float64)
        
        /** The total gravity vector being currently applied to this body. */
        get totalGravity(): Vector2
        set totalGravity(value: Vector2)
        
        /** The body's center of mass position relative to the body's center in the global coordinate system. */
        get centerOfMass(): Vector2
        set centerOfMass(value: Vector2)
        
        /** The body's center of mass position in the body's local coordinate system. */
        get centerOfMassLocal(): Vector2
        set centerOfMassLocal(value: Vector2)
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angularVelocity(): float64
        set angularVelocity(value: float64)
        
        /** The body's linear velocity in pixels per second. */
        get linearVelocity(): Vector2
        set linearVelocity(value: Vector2)
        
        /** If `true`, this body is currently sleeping (not active). */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** The body's collision layer. */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The body's collision mask. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The body's transformation matrix. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectBodyState2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectBodyState2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectBodyState2DExtension extends __RPCMapPhysicsDirectBodyState2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectBodyState2DExtension extends __NameMapPhysicsDirectBodyState2D {
        _get_total_gravity: "_getTotalGravity";
        _get_total_linear_damp: "_getTotalLinearDamp";
        _get_total_angular_damp: "_getTotalAngularDamp";
        _get_center_of_mass: "_getCenterOfMass";
        _get_center_of_mass_local: "_getCenterOfMassLocal";
        _get_inverse_mass: "_getInverseMass";
        _get_inverse_inertia: "_getInverseInertia";
        _set_linear_velocity: "_setLinearVelocity";
        _get_linear_velocity: "_getLinearVelocity";
        _set_angular_velocity: "_setAngularVelocity";
        _get_angular_velocity: "_getAngularVelocity";
        _set_transform: "_setTransform";
        _get_transform: "_getTransform";
        _get_velocity_at_local_position: "_getVelocityAtLocalPosition";
        _apply_central_impulse: "_applyCentralImpulse";
        _apply_impulse: "_applyImpulse";
        _apply_torque_impulse: "_applyTorqueImpulse";
        _apply_central_force: "_applyCentralForce";
        _apply_force: "_applyForce";
        _apply_torque: "_applyTorque";
        _add_constant_central_force: "_addConstantCentralForce";
        _add_constant_force: "_addConstantForce";
        _add_constant_torque: "_addConstantTorque";
        _set_constant_force: "_setConstantForce";
        _get_constant_force: "_getConstantForce";
        _set_constant_torque: "_setConstantTorque";
        _get_constant_torque: "_getConstantTorque";
        _set_sleep_state: "_setSleepState";
        _is_sleeping: "_isSleeping";
        _set_collision_layer: "_setCollisionLayer";
        _get_collision_layer: "_getCollisionLayer";
        _set_collision_mask: "_setCollisionMask";
        _get_collision_mask: "_getCollisionMask";
        _get_contact_count: "_getContactCount";
        _get_contact_local_position: "_getContactLocalPosition";
        _get_contact_local_normal: "_getContactLocalNormal";
        _get_contact_local_shape: "_getContactLocalShape";
        _get_contact_local_velocity_at_position: "_getContactLocalVelocityAtPosition";
        _get_contact_collider: "_getContactCollider";
        _get_contact_collider_position: "_getContactColliderPosition";
        _get_contact_collider_id: "_getContactColliderId";
        _get_contact_collider_object: "_getContactColliderObject";
        _get_contact_collider_shape: "_getContactColliderShape";
        _get_contact_collider_velocity_at_position: "_getContactColliderVelocityAtPosition";
        _get_contact_impulse: "_getContactImpulse";
        _get_step: "_getStep";
        _integrate_forces: "_integrateForces";
        _get_space_state: "_getSpaceState";
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectbodystate2dextension.html  
     */
    class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
        constructor(identifier?: any)
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_gravity] and its respective getter. */
        /* gdvirtual */ _getTotalGravity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_linear_damp] and its respective getter. */
        /* gdvirtual */ _getTotalLinearDamp(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_angular_damp] and its respective getter. */
        /* gdvirtual */ _getTotalAngularDamp(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass] and its respective getter. */
        /* gdvirtual */ _getCenterOfMass(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass_local] and its respective getter. */
        /* gdvirtual */ _getCenterOfMassLocal(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_mass] and its respective getter. */
        /* gdvirtual */ _getInverseMass(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_inertia] and its respective getter. */
        /* gdvirtual */ _getInverseInertia(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective setter. */
        /* gdvirtual */ _setLinearVelocity(velocity: Vector2): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective getter. */
        /* gdvirtual */ _getLinearVelocity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective setter. */
        /* gdvirtual */ _setAngularVelocity(velocity: float64): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective getter. */
        /* gdvirtual */ _getAngularVelocity(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.transform] and its respective setter. */
        /* gdvirtual */ _setTransform(transform: Transform2D): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.transform] and its respective getter. */
        /* gdvirtual */ _getTransform(): Transform2D
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_velocity_at_local_position]. */
        /* gdvirtual */ _getVelocityAtLocalPosition(localPosition: Vector2): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_central_impulse]. */
        /* gdvirtual */ _applyCentralImpulse(impulse: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_impulse]. */
        /* gdvirtual */ _applyImpulse(impulse: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_torque_impulse]. */
        /* gdvirtual */ _applyTorqueImpulse(impulse: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_central_force]. */
        /* gdvirtual */ _applyCentralForce(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_force]. */
        /* gdvirtual */ _applyForce(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_torque]. */
        /* gdvirtual */ _applyTorque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_central_force]. */
        /* gdvirtual */ _addConstantCentralForce(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_force]. */
        /* gdvirtual */ _addConstantForce(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_torque]. */
        /* gdvirtual */ _addConstantTorque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_force]. */
        /* gdvirtual */ _setConstantForce(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_force]. */
        /* gdvirtual */ _getConstantForce(): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_torque]. */
        /* gdvirtual */ _setConstantTorque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_torque]. */
        /* gdvirtual */ _getConstantTorque(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective setter. */
        /* gdvirtual */ _setSleepState(enabled: boolean): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective getter. */
        /* gdvirtual */ _isSleeping(): boolean
        /* gdvirtual */ _setCollisionLayer(layer: int64): void
        /* gdvirtual */ _getCollisionLayer(): int64
        /* gdvirtual */ _setCollisionMask(mask: int64): void
        /* gdvirtual */ _getCollisionMask(): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_count]. */
        /* gdvirtual */ _getContactCount(): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_position]. */
        /* gdvirtual */ _getContactLocalPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_normal]. */
        /* gdvirtual */ _getContactLocalNormal(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_shape]. */
        /* gdvirtual */ _getContactLocalShape(contactIdx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_velocity_at_position]. */
        /* gdvirtual */ _getContactLocalVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider]. */
        /* gdvirtual */ _getContactCollider(contactIdx: int64): Rid
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_position]. */
        /* gdvirtual */ _getContactColliderPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_id]. */
        /* gdvirtual */ _getContactColliderId(contactIdx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_object]. */
        /* gdvirtual */ _getContactColliderObject(contactIdx: int64): null | GObject
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_shape]. */
        /* gdvirtual */ _getContactColliderShape(contactIdx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_velocity_at_position]. */
        /* gdvirtual */ _getContactColliderVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_impulse]. */
        /* gdvirtual */ _getContactImpulse(contactIdx: int64): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.step] and its respective getter. */
        /* gdvirtual */ _getStep(): float64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.integrate_forces]. */
        /* gdvirtual */ _integrateForces(): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_space_state]. */
        /* gdvirtual */ _getSpaceState(): null | PhysicsDirectSpaceState2D
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectBodyState2DExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectBodyState2DExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectBodyState3D extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectBodyState3D extends __NameMapGObject {
        get_velocity_at_local_position: "getVelocityAtLocalPosition";
        apply_central_impulse: "applyCentralImpulse";
        apply_impulse: "applyImpulse";
        apply_torque_impulse: "applyTorqueImpulse";
        apply_central_force: "applyCentralForce";
        apply_force: "applyForce";
        apply_torque: "applyTorque";
        add_constant_central_force: "addConstantCentralForce";
        add_constant_force: "addConstantForce";
        add_constant_torque: "addConstantTorque";
        set_constant_force: "setConstantForce";
        get_constant_force: "getConstantForce";
        set_constant_torque: "setConstantTorque";
        get_constant_torque: "getConstantTorque";
        get_contact_count: "getContactCount";
        get_contact_local_position: "getContactLocalPosition";
        get_contact_local_normal: "getContactLocalNormal";
        get_contact_impulse: "getContactImpulse";
        get_contact_local_shape: "getContactLocalShape";
        get_contact_local_velocity_at_position: "getContactLocalVelocityAtPosition";
        get_contact_collider: "getContactCollider";
        get_contact_collider_position: "getContactColliderPosition";
        get_contact_collider_id: "getContactColliderId";
        get_contact_collider_object: "getContactColliderObject";
        get_contact_collider_shape: "getContactColliderShape";
        get_contact_collider_velocity_at_position: "getContactColliderVelocityAtPosition";
        integrate_forces: "integrateForces";
        get_space_state: "getSpaceState";
        inverse_mass: "inverseMass";
        total_angular_damp: "totalAngularDamp";
        total_linear_damp: "totalLinearDamp";
        inverse_inertia: "inverseInertia";
        inverse_inertia_tensor: "inverseInertiaTensor";
        total_gravity: "totalGravity";
        center_of_mass: "centerOfMass";
        center_of_mass_local: "centerOfMassLocal";
        principal_inertia_axes: "principalInertiaAxes";
        angular_velocity: "angularVelocity";
        linear_velocity: "linearVelocity";
        collision_layer: "collisionLayer";
        collision_mask: "collisionMask";
    }
    /** Provides direct access to a physics body in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectbodystate3d.html  
     */
    class PhysicsDirectBodyState3D extends GObject {
        constructor(identifier?: any)
        /** Returns the body's velocity at the given relative position, including both translation and rotation. */
        getVelocityAtLocalPosition(localPosition: Vector3): Vector3
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorqueImpulse(impulse: Vector3): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorque(torque: Vector3): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`. */
        addConstantTorque(torque: Vector3): void
        
        /** Sets the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        setConstantForce(force: Vector3): void
        
        /** Returns the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        getConstantForce(): Vector3
        
        /** Sets the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        setConstantTorque(torque: Vector3): void
        
        /** Returns the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        getConstantTorque(): Vector3
        
        /** Returns the number of contacts this body has with other bodies.  
         *      
         *  **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody3D.contact_monitor].  
         */
        getContactCount(): int64
        
        /** Returns the position of the contact point on the body in the global coordinate system. */
        getContactLocalPosition(contactIdx: int64): Vector3
        
        /** Returns the local normal at the contact point. */
        getContactLocalNormal(contactIdx: int64): Vector3
        
        /** Impulse created by the contact. */
        getContactImpulse(contactIdx: int64): Vector3
        
        /** Returns the local shape index of the collision. */
        getContactLocalShape(contactIdx: int64): int64
        
        /** Returns the linear velocity vector at the body's contact point. */
        getContactLocalVelocityAtPosition(contactIdx: int64): Vector3
        
        /** Returns the collider's [RID]. */
        getContactCollider(contactIdx: int64): Rid
        
        /** Returns the position of the contact point on the collider in the global coordinate system. */
        getContactColliderPosition(contactIdx: int64): Vector3
        
        /** Returns the collider's object id. */
        getContactColliderId(contactIdx: int64): int64
        
        /** Returns the collider object. */
        getContactColliderObject(contactIdx: int64): null | GObject
        
        /** Returns the collider's shape index. */
        getContactColliderShape(contactIdx: int64): int64
        
        /** Returns the linear velocity vector at the collider's contact point. */
        getContactColliderVelocityAtPosition(contactIdx: int64): Vector3
        
        /** Updates the body's linear and angular velocity by applying gravity and damping for the equivalent of one physics tick. */
        integrateForces(): void
        
        /** Returns the current state of the space, useful for queries. */
        getSpaceState(): null | PhysicsDirectSpaceState3D
        
        /** The timestep (delta) used for the simulation. */
        get step(): float64
        set step(value: float64)
        
        /** The inverse of the mass of the body. */
        get inverseMass(): float64
        set inverseMass(value: float64)
        
        /** The rate at which the body stops rotating, if there are not any other forces moving it. */
        get totalAngularDamp(): float64
        set totalAngularDamp(value: float64)
        
        /** The rate at which the body stops moving, if there are not any other forces moving it. */
        get totalLinearDamp(): float64
        set totalLinearDamp(value: float64)
        
        /** The inverse of the inertia of the body. */
        get inverseInertia(): Vector3
        set inverseInertia(value: Vector3)
        
        /** The inverse of the inertia tensor of the body. */
        get inverseInertiaTensor(): Basis
        set inverseInertiaTensor(value: Basis)
        
        /** The total gravity vector being currently applied to this body. */
        get totalGravity(): Vector3
        set totalGravity(value: Vector3)
        
        /** The body's center of mass position relative to the body's center in the global coordinate system. */
        get centerOfMass(): Vector3
        set centerOfMass(value: Vector3)
        
        /** The body's center of mass position in the body's local coordinate system. */
        get centerOfMassLocal(): Vector3
        set centerOfMassLocal(value: Vector3)
        get principalInertiaAxes(): Basis
        set principalInertiaAxes(value: Basis)
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        
        /** The body's linear velocity in units per second. */
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        
        /** If `true`, this body is currently sleeping (not active). */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** The body's collision layer. */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The body's collision mask. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The body's transformation matrix. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectBodyState3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectBodyState3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectBodyState3DExtension extends __RPCMapPhysicsDirectBodyState3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectBodyState3DExtension extends __NameMapPhysicsDirectBodyState3D {
        _get_total_gravity: "_getTotalGravity";
        _get_total_linear_damp: "_getTotalLinearDamp";
        _get_total_angular_damp: "_getTotalAngularDamp";
        _get_center_of_mass: "_getCenterOfMass";
        _get_center_of_mass_local: "_getCenterOfMassLocal";
        _get_principal_inertia_axes: "_getPrincipalInertiaAxes";
        _get_inverse_mass: "_getInverseMass";
        _get_inverse_inertia: "_getInverseInertia";
        _get_inverse_inertia_tensor: "_getInverseInertiaTensor";
        _set_linear_velocity: "_setLinearVelocity";
        _get_linear_velocity: "_getLinearVelocity";
        _set_angular_velocity: "_setAngularVelocity";
        _get_angular_velocity: "_getAngularVelocity";
        _set_transform: "_setTransform";
        _get_transform: "_getTransform";
        _get_velocity_at_local_position: "_getVelocityAtLocalPosition";
        _apply_central_impulse: "_applyCentralImpulse";
        _apply_impulse: "_applyImpulse";
        _apply_torque_impulse: "_applyTorqueImpulse";
        _apply_central_force: "_applyCentralForce";
        _apply_force: "_applyForce";
        _apply_torque: "_applyTorque";
        _add_constant_central_force: "_addConstantCentralForce";
        _add_constant_force: "_addConstantForce";
        _add_constant_torque: "_addConstantTorque";
        _set_constant_force: "_setConstantForce";
        _get_constant_force: "_getConstantForce";
        _set_constant_torque: "_setConstantTorque";
        _get_constant_torque: "_getConstantTorque";
        _set_sleep_state: "_setSleepState";
        _is_sleeping: "_isSleeping";
        _set_collision_layer: "_setCollisionLayer";
        _get_collision_layer: "_getCollisionLayer";
        _set_collision_mask: "_setCollisionMask";
        _get_collision_mask: "_getCollisionMask";
        _get_contact_count: "_getContactCount";
        _get_contact_local_position: "_getContactLocalPosition";
        _get_contact_local_normal: "_getContactLocalNormal";
        _get_contact_impulse: "_getContactImpulse";
        _get_contact_local_shape: "_getContactLocalShape";
        _get_contact_local_velocity_at_position: "_getContactLocalVelocityAtPosition";
        _get_contact_collider: "_getContactCollider";
        _get_contact_collider_position: "_getContactColliderPosition";
        _get_contact_collider_id: "_getContactColliderId";
        _get_contact_collider_object: "_getContactColliderObject";
        _get_contact_collider_shape: "_getContactColliderShape";
        _get_contact_collider_velocity_at_position: "_getContactColliderVelocityAtPosition";
        _get_step: "_getStep";
        _integrate_forces: "_integrateForces";
        _get_space_state: "_getSpaceState";
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectbodystate3dextension.html  
     */
    class PhysicsDirectBodyState3DExtension extends PhysicsDirectBodyState3D {
        constructor(identifier?: any)
        /* gdvirtual */ _getTotalGravity(): Vector3
        /* gdvirtual */ _getTotalLinearDamp(): float64
        /* gdvirtual */ _getTotalAngularDamp(): float64
        /* gdvirtual */ _getCenterOfMass(): Vector3
        /* gdvirtual */ _getCenterOfMassLocal(): Vector3
        /* gdvirtual */ _getPrincipalInertiaAxes(): Basis
        /* gdvirtual */ _getInverseMass(): float64
        /* gdvirtual */ _getInverseInertia(): Vector3
        /* gdvirtual */ _getInverseInertiaTensor(): Basis
        /* gdvirtual */ _setLinearVelocity(velocity: Vector3): void
        /* gdvirtual */ _getLinearVelocity(): Vector3
        /* gdvirtual */ _setAngularVelocity(velocity: Vector3): void
        /* gdvirtual */ _getAngularVelocity(): Vector3
        /* gdvirtual */ _setTransform(transform: Transform3D): void
        /* gdvirtual */ _getTransform(): Transform3D
        /* gdvirtual */ _getVelocityAtLocalPosition(localPosition: Vector3): Vector3
        /* gdvirtual */ _applyCentralImpulse(impulse: Vector3): void
        /* gdvirtual */ _applyImpulse(impulse: Vector3, position: Vector3): void
        /* gdvirtual */ _applyTorqueImpulse(impulse: Vector3): void
        /* gdvirtual */ _applyCentralForce(force: Vector3): void
        /* gdvirtual */ _applyForce(force: Vector3, position: Vector3): void
        /* gdvirtual */ _applyTorque(torque: Vector3): void
        /* gdvirtual */ _addConstantCentralForce(force: Vector3): void
        /* gdvirtual */ _addConstantForce(force: Vector3, position: Vector3): void
        /* gdvirtual */ _addConstantTorque(torque: Vector3): void
        /* gdvirtual */ _setConstantForce(force: Vector3): void
        /* gdvirtual */ _getConstantForce(): Vector3
        /* gdvirtual */ _setConstantTorque(torque: Vector3): void
        /* gdvirtual */ _getConstantTorque(): Vector3
        /* gdvirtual */ _setSleepState(enabled: boolean): void
        /* gdvirtual */ _isSleeping(): boolean
        /* gdvirtual */ _setCollisionLayer(layer: int64): void
        /* gdvirtual */ _getCollisionLayer(): int64
        /* gdvirtual */ _setCollisionMask(mask: int64): void
        /* gdvirtual */ _getCollisionMask(): int64
        /* gdvirtual */ _getContactCount(): int64
        /* gdvirtual */ _getContactLocalPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactLocalNormal(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactImpulse(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactLocalShape(contactIdx: int64): int64
        /* gdvirtual */ _getContactLocalVelocityAtPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactCollider(contactIdx: int64): Rid
        /* gdvirtual */ _getContactColliderPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactColliderId(contactIdx: int64): int64
        /* gdvirtual */ _getContactColliderObject(contactIdx: int64): null | GObject
        /* gdvirtual */ _getContactColliderShape(contactIdx: int64): int64
        /* gdvirtual */ _getContactColliderVelocityAtPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getStep(): float64
        /* gdvirtual */ _integrateForces(): void
        /* gdvirtual */ _getSpaceState(): null | PhysicsDirectSpaceState3D
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectBodyState3DExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectBodyState3DExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectSpaceState2D extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectSpaceState2D extends __NameMapGObject {
        intersect_point: "intersectPoint";
        intersect_ray: "intersectRay";
        intersect_shape: "intersectShape";
        cast_motion: "castMotion";
        collide_shape: "collideShape";
        get_rest_info: "getRestInfo";
    }
    /** Provides direct access to a physics space in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectspacestate2d.html  
     */
    class PhysicsDirectSpaceState2D extends GObject {
        constructor(identifier?: any)
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters2D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         *      
         *  **Note:** [ConcavePolygonShape2D]s and [CollisionPolygon2D]s in `Segments` build mode are not solid shapes. Therefore, they will not be detected.  
         */
        intersectPoint(parameters: PhysicsPointQueryParameters2D, maxResults?: int64 /* = 32 */): GArray<GDictionary>
        
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters2D]. The returned object is a dictionary with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `normal`: The object's surface normal at the intersection point, or `Vector2(0, 0)` if the ray starts inside the shape and [member PhysicsRayQueryParameters2D.hit_from_inside] is `true`.  
         *  `position`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.  
         */
        intersectRay(parameters: PhysicsRayQueryParameters2D): GDictionary
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         */
        intersectShape(parameters: PhysicsShapeQueryParameters2D, maxResults?: int64 /* = 32 */): GArray<GDictionary>
        
        /** Checks how far a [Shape2D] can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [PhysicsShapeQueryParameters2D] object.  
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.  
         *      
         *  **Note:** Any [Shape2D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape2D]s that the shape is already colliding with.  
         */
        castMotion(parameters: PhysicsShapeQueryParameters2D): PackedFloat32Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.  
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters2D] object, second one is in the collided shape from the physics space.  
         */
        collideShape(parameters: PhysicsShapeQueryParameters2D, maxResults?: int64 /* = 32 */): GArray<Vector2>
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. If it collides with more than one shape, the nearest one is selected. The returned object is a dictionary containing the following fields:  
         *  `collider_id`: The colliding object's ID.  
         *  `linear_velocity`: The colliding object's velocity [Vector2]. If the object is an [Area2D], the result is `(0, 0)`.  
         *  `normal`: The collision normal of the query shape at the intersection point, pointing away from the intersecting object.  
         *  `point`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the shape did not intersect anything, then an empty dictionary is returned instead.  
         */
        getRestInfo(parameters: PhysicsShapeQueryParameters2D): GDictionary
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectSpaceState2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectSpaceState2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectSpaceState2DExtension extends __RPCMapPhysicsDirectSpaceState2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectSpaceState2DExtension extends __NameMapPhysicsDirectSpaceState2D {
        _intersect_ray: "_intersectRay";
        _intersect_point: "_intersectPoint";
        _intersect_shape: "_intersectShape";
        _cast_motion: "_castMotion";
        _collide_shape: "_collideShape";
        _rest_info: "_restInfo";
        is_body_excluded_from_query: "isBodyExcludedFromQuery";
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectspacestate2dextension.html  
     */
    class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
        constructor(identifier?: any)
        /* gdvirtual */ _intersectRay(from: Vector2, to: Vector2, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, hitFromInside: boolean, result: int64): boolean
        /* gdvirtual */ _intersectPoint(position: Vector2, canvasInstanceId: int64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64): int64
        /* gdvirtual */ _intersectShape(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, result: int64, maxResults: int64): int64
        /* gdvirtual */ _castMotion(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, closestSafe: int64, closestUnsafe: int64): boolean
        /* gdvirtual */ _collideShape(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64, resultCount: int64): boolean
        /* gdvirtual */ _restInfo(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, restInfo: int64): boolean
        isBodyExcludedFromQuery(body: Rid): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectSpaceState2DExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectSpaceState2DExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectSpaceState3D extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectSpaceState3D extends __NameMapGObject {
        intersect_point: "intersectPoint";
        intersect_ray: "intersectRay";
        intersect_shape: "intersectShape";
        cast_motion: "castMotion";
        collide_shape: "collideShape";
        get_rest_info: "getRestInfo";
    }
    /** Provides direct access to a physics space in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectspacestate3d.html  
     */
    class PhysicsDirectSpaceState3D extends GObject {
        constructor(identifier?: any)
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters3D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         */
        intersectPoint(parameters: PhysicsPointQueryParameters3D, maxResults?: int64 /* = 32 */): GArray<GDictionary>
        
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters3D]. The returned object is a dictionary with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `normal`: The object's surface normal at the intersection point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member PhysicsRayQueryParameters3D.hit_from_inside] is `true`.  
         *  `position`: The intersection point.  
         *  `face_index`: The face index at the intersection point.  
         *      
         *  **Note:** Returns a valid number only if the intersected shape is a [ConcavePolygonShape3D]. Otherwise, `-1` is returned.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.  
         */
        intersectRay(parameters: PhysicsRayQueryParameters3D): GDictionary
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        intersectShape(parameters: PhysicsShapeQueryParameters3D, maxResults?: int64 /* = 32 */): GArray<GDictionary>
        
        /** Checks how far a [Shape3D] can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [PhysicsShapeQueryParameters3D] object.  
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.  
         *      
         *  **Note:** Any [Shape3D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape3D]s that the shape is already colliding with.  
         */
        castMotion(parameters: PhysicsShapeQueryParameters3D): PackedFloat32Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.  
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters3D] object, second one is in the collided shape from the physics space.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        collideShape(parameters: PhysicsShapeQueryParameters3D, maxResults?: int64 /* = 32 */): GArray<Vector3>
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. If it collides with more than one shape, the nearest one is selected. The returned object is a dictionary containing the following fields:  
         *  `collider_id`: The colliding object's ID.  
         *  `linear_velocity`: The colliding object's velocity [Vector3]. If the object is an [Area3D], the result is `(0, 0, 0)`.  
         *  `normal`: The collision normal of the query shape at the intersection point, pointing away from the intersecting object.  
         *  `point`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the shape did not intersect anything, then an empty dictionary is returned instead.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        getRestInfo(parameters: PhysicsShapeQueryParameters3D): GDictionary
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectSpaceState3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectSpaceState3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsDirectSpaceState3DExtension extends __RPCMapPhysicsDirectSpaceState3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsDirectSpaceState3DExtension extends __NameMapPhysicsDirectSpaceState3D {
        _intersect_ray: "_intersectRay";
        _intersect_point: "_intersectPoint";
        _intersect_shape: "_intersectShape";
        _cast_motion: "_castMotion";
        _collide_shape: "_collideShape";
        _rest_info: "_restInfo";
        _get_closest_point_to_object_volume: "_getClosestPointToObjectVolume";
        is_body_excluded_from_query: "isBodyExcludedFromQuery";
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsdirectspacestate3dextension.html  
     */
    class PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D {
        constructor(identifier?: any)
        /* gdvirtual */ _intersectRay(from: Vector3, to: Vector3, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, hitFromInside: boolean, hitBackFaces: boolean, pickRay: boolean, result: int64): boolean
        /* gdvirtual */ _intersectPoint(position: Vector3, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64): int64
        /* gdvirtual */ _intersectShape(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, resultCount: int64, maxResults: int64): int64
        /* gdvirtual */ _castMotion(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, closestSafe: int64, closestUnsafe: int64, info: int64): boolean
        /* gdvirtual */ _collideShape(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64, resultCount: int64): boolean
        /* gdvirtual */ _restInfo(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, restInfo: int64): boolean
        /* gdvirtual */ _getClosestPointToObjectVolume(object: Rid, point: Vector3): Vector3
        isBodyExcludedFromQuery(body: Rid): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsDirectSpaceState3DExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsDirectSpaceState3DExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsMaterial extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsMaterial extends __NameMapResource {
    }
    /** Holds physics-related properties of a surface, namely its roughness and bounciness.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsmaterial.html  
     */
    class PhysicsMaterial extends Resource {
        constructor(identifier?: any)
        /** The body's friction. Values range from `0` (frictionless) to `1` (maximum friction). */
        get friction(): float64
        set friction(value: float64)
        
        /** If `true`, the physics engine will use the friction of the object marked as "rough" when two objects collide. If `false`, the physics engine will use the lowest friction of all colliding objects instead. If `true` for both colliding objects, the physics engine will use the highest friction. */
        get rough(): boolean
        set rough(value: boolean)
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a physics body that preserves all its energy over time, set [member bounce] to `1.0`, the body's linear damp mode to **Replace** (if applicable), its linear damp to `0.0`, its angular damp mode to **Replace** (if applicable), and its angular damp to `0.0`.  
         */
        get bounce(): float64
        set bounce(value: float64)
        
        /** If `true`, subtracts the bounciness from the colliding object's bounciness instead of adding it. */
        get absorbent(): boolean
        set absorbent(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsMaterial;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsPointQueryParameters2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsPointQueryParameters2D extends __NameMapRefCounted {
        canvas_instance_id: "canvasInstanceId";
        collision_mask: "collisionMask";
        collide_with_bodies: "collideWithBodies";
        collide_with_areas: "collideWithAreas";
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicspointqueryparameters2d.html  
     */
    class PhysicsPointQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** The position being queried for, in global coordinates. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** If different from `0`, restricts the query to a specific canvas layer specified by its instance ID. See [method Object.get_instance_id].  
         *  If `0`, restricts the query to the Viewport's default canvas layer.  
         */
        get canvasInstanceId(): int64
        set canvasInstanceId(value: int64)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray<Rid>
        set exclude(value: GArray<Rid>)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsPointQueryParameters2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsPointQueryParameters2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsPointQueryParameters3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsPointQueryParameters3D extends __NameMapRefCounted {
        collision_mask: "collisionMask";
        collide_with_bodies: "collideWithBodies";
        collide_with_areas: "collideWithAreas";
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicspointqueryparameters3d.html  
     */
    class PhysicsPointQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** The position being queried for, in global coordinates. */
        get position(): Vector3
        set position(value: Vector3)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray<Rid>
        set exclude(value: GArray<Rid>)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsPointQueryParameters3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsPointQueryParameters3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsRayQueryParameters2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsRayQueryParameters2D extends __NameMapRefCounted {
        collision_mask: "collisionMask";
        collide_with_bodies: "collideWithBodies";
        collide_with_areas: "collideWithAreas";
        hit_from_inside: "hitFromInside";
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsrayqueryparameters2d.html  
     */
    class PhysicsRayQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns a new, pre-configured [PhysicsRayQueryParameters2D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector2, to: Vector2, collisionMask?: int64 /* = 4294967295 */, exclude?: GArray<Rid>): PhysicsRayQueryParameters2D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector2
        set from(value: Vector2)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector2
        set to(value: Vector2)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray<Rid>
        set exclude(value: GArray<Rid>)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsRayQueryParameters2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsRayQueryParameters2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsRayQueryParameters3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsRayQueryParameters3D extends __NameMapRefCounted {
        collision_mask: "collisionMask";
        collide_with_bodies: "collideWithBodies";
        collide_with_areas: "collideWithAreas";
        hit_from_inside: "hitFromInside";
        hit_back_faces: "hitBackFaces";
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsrayqueryparameters3d.html  
     */
    class PhysicsRayQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns a new, pre-configured [PhysicsRayQueryParameters3D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector3, to: Vector3, collisionMask?: int64 /* = 4294967295 */, exclude?: GArray<Rid>): PhysicsRayQueryParameters3D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector3
        set from(value: Vector3)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector3
        set to(value: Vector3)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray<Rid>
        set exclude(value: GArray<Rid>)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect concave polygon shapes or heightmap shapes. */
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        
        /** If `true`, the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        get hitBackFaces(): boolean
        set hitBackFaces(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsRayQueryParameters3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsRayQueryParameters3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsServer2DExtension extends __RPCMapPhysicsServer2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsServer2DExtension extends __NameMapPhysicsServer2D {
        _world_boundary_shape_create: "_worldBoundaryShapeCreate";
        _separation_ray_shape_create: "_separationRayShapeCreate";
        _segment_shape_create: "_segmentShapeCreate";
        _circle_shape_create: "_circleShapeCreate";
        _rectangle_shape_create: "_rectangleShapeCreate";
        _capsule_shape_create: "_capsuleShapeCreate";
        _convex_polygon_shape_create: "_convexPolygonShapeCreate";
        _concave_polygon_shape_create: "_concavePolygonShapeCreate";
        _shape_set_data: "_shapeSetData";
        _shape_set_custom_solver_bias: "_shapeSetCustomSolverBias";
        _shape_get_type: "_shapeGetType";
        _shape_get_data: "_shapeGetData";
        _shape_get_custom_solver_bias: "_shapeGetCustomSolverBias";
        _shape_collide: "_shapeCollide";
        _space_create: "_spaceCreate";
        _space_set_active: "_spaceSetActive";
        _space_is_active: "_spaceIsActive";
        _space_set_param: "_spaceSetParam";
        _space_get_param: "_spaceGetParam";
        _space_get_direct_state: "_spaceGetDirectState";
        _space_set_debug_contacts: "_spaceSetDebugContacts";
        _space_get_contacts: "_spaceGetContacts";
        _space_get_contact_count: "_spaceGetContactCount";
        _area_create: "_areaCreate";
        _area_set_space: "_areaSetSpace";
        _area_get_space: "_areaGetSpace";
        _area_add_shape: "_areaAddShape";
        _area_set_shape: "_areaSetShape";
        _area_set_shape_transform: "_areaSetShapeTransform";
        _area_set_shape_disabled: "_areaSetShapeDisabled";
        _area_get_shape_count: "_areaGetShapeCount";
        _area_get_shape: "_areaGetShape";
        _area_get_shape_transform: "_areaGetShapeTransform";
        _area_remove_shape: "_areaRemoveShape";
        _area_clear_shapes: "_areaClearShapes";
        _area_attach_object_instance_id: "_areaAttachObjectInstanceId";
        _area_get_object_instance_id: "_areaGetObjectInstanceId";
        _area_attach_canvas_instance_id: "_areaAttachCanvasInstanceId";
        _area_get_canvas_instance_id: "_areaGetCanvasInstanceId";
        _area_set_param: "_areaSetParam";
        _area_set_transform: "_areaSetTransform";
        _area_get_param: "_areaGetParam";
        _area_get_transform: "_areaGetTransform";
        _area_set_collision_layer: "_areaSetCollisionLayer";
        _area_get_collision_layer: "_areaGetCollisionLayer";
        _area_set_collision_mask: "_areaSetCollisionMask";
        _area_get_collision_mask: "_areaGetCollisionMask";
        _area_set_monitorable: "_areaSetMonitorable";
        _area_set_pickable: "_areaSetPickable";
        _area_set_monitor_callback: "_areaSetMonitorCallback";
        _area_set_area_monitor_callback: "_areaSetAreaMonitorCallback";
        _body_create: "_bodyCreate";
        _body_set_space: "_bodySetSpace";
        _body_get_space: "_bodyGetSpace";
        _body_set_mode: "_bodySetMode";
        _body_get_mode: "_bodyGetMode";
        _body_add_shape: "_bodyAddShape";
        _body_set_shape: "_bodySetShape";
        _body_set_shape_transform: "_bodySetShapeTransform";
        _body_get_shape_count: "_bodyGetShapeCount";
        _body_get_shape: "_bodyGetShape";
        _body_get_shape_transform: "_bodyGetShapeTransform";
        _body_set_shape_disabled: "_bodySetShapeDisabled";
        _body_set_shape_as_one_way_collision: "_bodySetShapeAsOneWayCollision";
        _body_remove_shape: "_bodyRemoveShape";
        _body_clear_shapes: "_bodyClearShapes";
        _body_attach_object_instance_id: "_bodyAttachObjectInstanceId";
        _body_get_object_instance_id: "_bodyGetObjectInstanceId";
        _body_attach_canvas_instance_id: "_bodyAttachCanvasInstanceId";
        _body_get_canvas_instance_id: "_bodyGetCanvasInstanceId";
        _body_set_continuous_collision_detection_mode: "_bodySetContinuousCollisionDetectionMode";
        _body_get_continuous_collision_detection_mode: "_bodyGetContinuousCollisionDetectionMode";
        _body_set_collision_layer: "_bodySetCollisionLayer";
        _body_get_collision_layer: "_bodyGetCollisionLayer";
        _body_set_collision_mask: "_bodySetCollisionMask";
        _body_get_collision_mask: "_bodyGetCollisionMask";
        _body_set_collision_priority: "_bodySetCollisionPriority";
        _body_get_collision_priority: "_bodyGetCollisionPriority";
        _body_set_param: "_bodySetParam";
        _body_get_param: "_bodyGetParam";
        _body_reset_mass_properties: "_bodyResetMassProperties";
        _body_set_state: "_bodySetState";
        _body_get_state: "_bodyGetState";
        _body_apply_central_impulse: "_bodyApplyCentralImpulse";
        _body_apply_torque_impulse: "_bodyApplyTorqueImpulse";
        _body_apply_impulse: "_bodyApplyImpulse";
        _body_apply_central_force: "_bodyApplyCentralForce";
        _body_apply_force: "_bodyApplyForce";
        _body_apply_torque: "_bodyApplyTorque";
        _body_add_constant_central_force: "_bodyAddConstantCentralForce";
        _body_add_constant_force: "_bodyAddConstantForce";
        _body_add_constant_torque: "_bodyAddConstantTorque";
        _body_set_constant_force: "_bodySetConstantForce";
        _body_get_constant_force: "_bodyGetConstantForce";
        _body_set_constant_torque: "_bodySetConstantTorque";
        _body_get_constant_torque: "_bodyGetConstantTorque";
        _body_set_axis_velocity: "_bodySetAxisVelocity";
        _body_add_collision_exception: "_bodyAddCollisionException";
        _body_remove_collision_exception: "_bodyRemoveCollisionException";
        _body_get_collision_exceptions: "_bodyGetCollisionExceptions";
        _body_set_max_contacts_reported: "_bodySetMaxContactsReported";
        _body_get_max_contacts_reported: "_bodyGetMaxContactsReported";
        _body_set_contacts_reported_depth_threshold: "_bodySetContactsReportedDepthThreshold";
        _body_get_contacts_reported_depth_threshold: "_bodyGetContactsReportedDepthThreshold";
        _body_set_omit_force_integration: "_bodySetOmitForceIntegration";
        _body_is_omitting_force_integration: "_bodyIsOmittingForceIntegration";
        _body_set_state_sync_callback: "_bodySetStateSyncCallback";
        _body_set_force_integration_callback: "_bodySetForceIntegrationCallback";
        _body_collide_shape: "_bodyCollideShape";
        _body_set_pickable: "_bodySetPickable";
        _body_get_direct_state: "_bodyGetDirectState";
        _body_test_motion: "_bodyTestMotion";
        _joint_create: "_jointCreate";
        _joint_clear: "_jointClear";
        _joint_set_param: "_jointSetParam";
        _joint_get_param: "_jointGetParam";
        _joint_disable_collisions_between_bodies: "_jointDisableCollisionsBetweenBodies";
        _joint_is_disabled_collisions_between_bodies: "_jointIsDisabledCollisionsBetweenBodies";
        _joint_make_pin: "_jointMakePin";
        _joint_make_groove: "_jointMakeGroove";
        _joint_make_damped_spring: "_jointMakeDampedSpring";
        _pin_joint_set_flag: "_pinJointSetFlag";
        _pin_joint_get_flag: "_pinJointGetFlag";
        _pin_joint_set_param: "_pinJointSetParam";
        _pin_joint_get_param: "_pinJointGetParam";
        _damped_spring_joint_set_param: "_dampedSpringJointSetParam";
        _damped_spring_joint_get_param: "_dampedSpringJointGetParam";
        _joint_get_type: "_jointGetType";
        _free_rid: "_freeRid";
        _set_active: "_setActive";
        _flush_queries: "_flushQueries";
        _end_sync: "_endSync";
        _is_flushing_queries: "_isFlushingQueries";
        _get_process_info: "_getProcessInfo";
        body_test_motion_is_excluding_body: "bodyTestMotionIsExcludingBody";
        body_test_motion_is_excluding_object: "bodyTestMotionIsExcludingObject";
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsServer2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsserver2dextension.html  
     */
    class PhysicsServer2DExtension extends PhysicsServer2D {
        constructor(identifier?: any)
        /** Overridable version of [method PhysicsServer2D.world_boundary_shape_create]. */
        /* gdvirtual */ _worldBoundaryShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.separation_ray_shape_create]. */
        /* gdvirtual */ _separationRayShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.segment_shape_create]. */
        /* gdvirtual */ _segmentShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.circle_shape_create]. */
        /* gdvirtual */ _circleShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.rectangle_shape_create]. */
        /* gdvirtual */ _rectangleShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.capsule_shape_create]. */
        /* gdvirtual */ _capsuleShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.convex_polygon_shape_create]. */
        /* gdvirtual */ _convexPolygonShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.concave_polygon_shape_create]. */
        /* gdvirtual */ _concavePolygonShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.shape_set_data]. */
        /* gdvirtual */ _shapeSetData(shape: Rid, data: any): void
        
        /** Should set the custom solver bias for the given [param shape]. It defines how much bodies are forced to separate on contact.  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].  
         */
        /* gdvirtual */ _shapeSetCustomSolverBias(shape: Rid, bias: float64): void
        
        /** Overridable version of [method PhysicsServer2D.shape_get_type]. */
        /* gdvirtual */ _shapeGetType(shape: Rid): PhysicsServer2D.ShapeType
        
        /** Overridable version of [method PhysicsServer2D.shape_get_data]. */
        /* gdvirtual */ _shapeGetData(shape: Rid): any
        
        /** Should return the custom solver bias of the given [param shape], which defines how much bodies are forced to separate on contact when this shape is involved.  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].  
         */
        /* gdvirtual */ _shapeGetCustomSolverBias(shape: Rid): float64
        
        /** Given two shapes and their parameters, should return `true` if a collision between the two would occur, with additional details passed in [param results].  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].  
         */
        /* gdvirtual */ _shapeCollide(shapeA: Rid, xformA: Transform2D, motionA: Vector2, shapeB: Rid, xformB: Transform2D, motionB: Vector2, results: int64, resultMax: int64, resultCount: int64): boolean
        
        /** Overridable version of [method PhysicsServer2D.space_create]. */
        /* gdvirtual */ _spaceCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.space_set_active]. */
        /* gdvirtual */ _spaceSetActive(space: Rid, active: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.space_is_active]. */
        /* gdvirtual */ _spaceIsActive(space: Rid): boolean
        
        /** Overridable version of [method PhysicsServer2D.space_set_param]. */
        /* gdvirtual */ _spaceSetParam(space: Rid, param: PhysicsServer2D.SpaceParameter, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.space_get_param]. */
        /* gdvirtual */ _spaceGetParam(space: Rid, param: PhysicsServer2D.SpaceParameter): float64
        
        /** Overridable version of [method PhysicsServer2D.space_get_direct_state]. */
        /* gdvirtual */ _spaceGetDirectState(space: Rid): null | PhysicsDirectSpaceState2D
        
        /** Used internally to allow the given [param space] to store contact points, up to [param max_contacts]. This is automatically set for the main [World2D]'s space when [member SceneTree.debug_collisions_hint] is `true`, or by checking "Visible Collision Shapes" in the editor. Only works in debug builds.  
         *  Overridable version of [PhysicsServer2D]'s internal `space_set_debug_contacts` method.  
         */
        /* gdvirtual */ _spaceSetDebugContacts(space: Rid, maxContacts: int64): void
        
        /** Should return the positions of all contacts that have occurred during the last physics step in the given [param space]. See also [method _space_get_contact_count] and [method _space_set_debug_contacts].  
         *  Overridable version of [PhysicsServer2D]'s internal `space_get_contacts` method.  
         */
        /* gdvirtual */ _spaceGetContacts(space: Rid): PackedVector2Array
        
        /** Should return how many contacts have occurred during the last physics step in the given [param space]. See also [method _space_get_contacts] and [method _space_set_debug_contacts].  
         *  Overridable version of [PhysicsServer2D]'s internal `space_get_contact_count` method.  
         */
        /* gdvirtual */ _spaceGetContactCount(space: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_create]. */
        /* gdvirtual */ _areaCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.area_set_space]. */
        /* gdvirtual */ _areaSetSpace(area: Rid, space: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_space]. */
        /* gdvirtual */ _areaGetSpace(area: Rid): Rid
        
        /** Overridable version of [method PhysicsServer2D.area_add_shape]. */
        /* gdvirtual */ _areaAddShape(area: Rid, shape: Rid, transform: Transform2D, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape]. */
        /* gdvirtual */ _areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape_transform]. */
        /* gdvirtual */ _areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape_disabled]. */
        /* gdvirtual */ _areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape_count]. */
        /* gdvirtual */ _areaGetShapeCount(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape]. */
        /* gdvirtual */ _areaGetShape(area: Rid, shapeIdx: int64): Rid
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape_transform]. */
        /* gdvirtual */ _areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.area_remove_shape]. */
        /* gdvirtual */ _areaRemoveShape(area: Rid, shapeIdx: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_clear_shapes]. */
        /* gdvirtual */ _areaClearShapes(area: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.area_attach_object_instance_id]. */
        /* gdvirtual */ _areaAttachObjectInstanceId(area: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_object_instance_id]. */
        /* gdvirtual */ _areaGetObjectInstanceId(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_attach_canvas_instance_id]. */
        /* gdvirtual */ _areaAttachCanvasInstanceId(area: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_canvas_instance_id]. */
        /* gdvirtual */ _areaGetCanvasInstanceId(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_param]. */
        /* gdvirtual */ _areaSetParam(area: Rid, param: PhysicsServer2D.AreaParameter, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_transform]. */
        /* gdvirtual */ _areaSetTransform(area: Rid, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_param]. */
        /* gdvirtual */ _areaGetParam(area: Rid, param: PhysicsServer2D.AreaParameter): any
        
        /** Overridable version of [method PhysicsServer2D.area_get_transform]. */
        /* gdvirtual */ _areaGetTransform(area: Rid): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.area_set_collision_layer]. */
        /* gdvirtual */ _areaSetCollisionLayer(area: Rid, layer: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_collision_layer]. */
        /* gdvirtual */ _areaGetCollisionLayer(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_collision_mask]. */
        /* gdvirtual */ _areaSetCollisionMask(area: Rid, mask: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_collision_mask]. */
        /* gdvirtual */ _areaGetCollisionMask(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_monitorable]. */
        /* gdvirtual */ _areaSetMonitorable(area: Rid, monitorable: boolean): void
        
        /** If set to `true`, allows the area with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.  
         *  Overridable version of [PhysicsServer2D]'s internal `area_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].  
         */
        /* gdvirtual */ _areaSetPickable(area: Rid, pickable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_monitor_callback]. */
        /* gdvirtual */ _areaSetMonitorCallback(area: Rid, callback: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_area_monitor_callback]. */
        /* gdvirtual */ _areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.body_create]. */
        /* gdvirtual */ _bodyCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.body_set_space]. */
        /* gdvirtual */ _bodySetSpace(body: Rid, space: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_space]. */
        /* gdvirtual */ _bodyGetSpace(body: Rid): Rid
        
        /** Overridable version of [method PhysicsServer2D.body_set_mode]. */
        /* gdvirtual */ _bodySetMode(body: Rid, mode: PhysicsServer2D.BodyMode): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_mode]. */
        /* gdvirtual */ _bodyGetMode(body: Rid): PhysicsServer2D.BodyMode
        
        /** Overridable version of [method PhysicsServer2D.body_add_shape]. */
        /* gdvirtual */ _bodyAddShape(body: Rid, shape: Rid, transform: Transform2D, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape]. */
        /* gdvirtual */ _bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_transform]. */
        /* gdvirtual */ _bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape_count]. */
        /* gdvirtual */ _bodyGetShapeCount(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape]. */
        /* gdvirtual */ _bodyGetShape(body: Rid, shapeIdx: int64): Rid
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape_transform]. */
        /* gdvirtual */ _bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_disabled]. */
        /* gdvirtual */ _bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_as_one_way_collision]. */
        /* gdvirtual */ _bodySetShapeAsOneWayCollision(body: Rid, shapeIdx: int64, enable: boolean, margin: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_remove_shape]. */
        /* gdvirtual */ _bodyRemoveShape(body: Rid, shapeIdx: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_clear_shapes]. */
        /* gdvirtual */ _bodyClearShapes(body: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_attach_object_instance_id]. */
        /* gdvirtual */ _bodyAttachObjectInstanceId(body: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_object_instance_id]. */
        /* gdvirtual */ _bodyGetObjectInstanceId(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_attach_canvas_instance_id]. */
        /* gdvirtual */ _bodyAttachCanvasInstanceId(body: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_canvas_instance_id]. */
        /* gdvirtual */ _bodyGetCanvasInstanceId(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_continuous_collision_detection_mode]. */
        /* gdvirtual */ _bodySetContinuousCollisionDetectionMode(body: Rid, mode: PhysicsServer2D.CcdMode): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_continuous_collision_detection_mode]. */
        /* gdvirtual */ _bodyGetContinuousCollisionDetectionMode(body: Rid): PhysicsServer2D.CcdMode
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_layer]. */
        /* gdvirtual */ _bodySetCollisionLayer(body: Rid, layer: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_layer]. */
        /* gdvirtual */ _bodyGetCollisionLayer(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_mask]. */
        /* gdvirtual */ _bodySetCollisionMask(body: Rid, mask: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_mask]. */
        /* gdvirtual */ _bodyGetCollisionMask(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_priority]. */
        /* gdvirtual */ _bodySetCollisionPriority(body: Rid, priority: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_priority]. */
        /* gdvirtual */ _bodyGetCollisionPriority(body: Rid): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_param]. */
        /* gdvirtual */ _bodySetParam(body: Rid, param: PhysicsServer2D.BodyParameter, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_param]. */
        /* gdvirtual */ _bodyGetParam(body: Rid, param: PhysicsServer2D.BodyParameter): any
        
        /** Overridable version of [method PhysicsServer2D.body_reset_mass_properties]. */
        /* gdvirtual */ _bodyResetMassProperties(body: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_state]. */
        /* gdvirtual */ _bodySetState(body: Rid, state: PhysicsServer2D.BodyState, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_state]. */
        /* gdvirtual */ _bodyGetState(body: Rid, state: PhysicsServer2D.BodyState): any
        
        /** Overridable version of [method PhysicsServer2D.body_apply_central_impulse]. */
        /* gdvirtual */ _bodyApplyCentralImpulse(body: Rid, impulse: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_torque_impulse]. */
        /* gdvirtual */ _bodyApplyTorqueImpulse(body: Rid, impulse: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_impulse]. */
        /* gdvirtual */ _bodyApplyImpulse(body: Rid, impulse: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_central_force]. */
        /* gdvirtual */ _bodyApplyCentralForce(body: Rid, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_force]. */
        /* gdvirtual */ _bodyApplyForce(body: Rid, force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_torque]. */
        /* gdvirtual */ _bodyApplyTorque(body: Rid, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_central_force]. */
        /* gdvirtual */ _bodyAddConstantCentralForce(body: Rid, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_force]. */
        /* gdvirtual */ _bodyAddConstantForce(body: Rid, force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_torque]. */
        /* gdvirtual */ _bodyAddConstantTorque(body: Rid, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_constant_force]. */
        /* gdvirtual */ _bodySetConstantForce(body: Rid, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_constant_force]. */
        /* gdvirtual */ _bodyGetConstantForce(body: Rid): Vector2
        
        /** Overridable version of [method PhysicsServer2D.body_set_constant_torque]. */
        /* gdvirtual */ _bodySetConstantTorque(body: Rid, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_constant_torque]. */
        /* gdvirtual */ _bodyGetConstantTorque(body: Rid): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_axis_velocity]. */
        /* gdvirtual */ _bodySetAxisVelocity(body: Rid, axisVelocity: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_collision_exception]. */
        /* gdvirtual */ _bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_remove_collision_exception]. */
        /* gdvirtual */ _bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Returns the [RID]s of all bodies added as collision exceptions for the given [param body]. See also [method _body_add_collision_exception] and [method _body_remove_collision_exception].  
         *  Overridable version of [PhysicsServer2D]'s internal `body_get_collision_exceptions` method. Corresponds to [method PhysicsBody2D.get_collision_exceptions].  
         */
        /* gdvirtual */ _bodyGetCollisionExceptions(body: Rid): GArray<Rid>
        
        /** Overridable version of [method PhysicsServer2D.body_set_max_contacts_reported]. */
        /* gdvirtual */ _bodySetMaxContactsReported(body: Rid, amount: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_max_contacts_reported]. */
        /* gdvirtual */ _bodyGetMaxContactsReported(body: Rid): int64
        
        /** Overridable version of [PhysicsServer2D]'s internal `body_set_contacts_reported_depth_threshold` method.  
         *      
         *  **Note:** This method is currently unused by Godot's default physics implementation.  
         */
        /* gdvirtual */ _bodySetContactsReportedDepthThreshold(body: Rid, threshold: float64): void
        
        /** Overridable version of [PhysicsServer2D]'s internal `body_get_contacts_reported_depth_threshold` method.  
         *      
         *  **Note:** This method is currently unused by Godot's default physics implementation.  
         */
        /* gdvirtual */ _bodyGetContactsReportedDepthThreshold(body: Rid): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_omit_force_integration]. */
        /* gdvirtual */ _bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_is_omitting_force_integration]. */
        /* gdvirtual */ _bodyIsOmittingForceIntegration(body: Rid): boolean
        
        /** Assigns the [param body] to call the given [param callable] during the synchronization phase of the loop, before [method _step] is called. See also [method _sync].  
         *  Overridable version of [method PhysicsServer2D.body_set_state_sync_callback].  
         */
        /* gdvirtual */ _bodySetStateSyncCallback(body: Rid, callable: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_force_integration_callback]. */
        /* gdvirtual */ _bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata: any): void
        
        /** Given a [param body], a [param shape], and their respective parameters, this method should return `true` if a collision between the two would occur, with additional details passed in [param results].  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].  
         */
        /* gdvirtual */ _bodyCollideShape(body: Rid, bodyShape: int64, shape: Rid, shapeXform: Transform2D, motion: Vector2, results: int64, resultMax: int64, resultCount: int64): boolean
        
        /** If set to `true`, allows the body with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.  
         *  Overridable version of [PhysicsServer2D]'s internal `body_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].  
         */
        /* gdvirtual */ _bodySetPickable(body: Rid, pickable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_direct_state]. */
        /* gdvirtual */ _bodyGetDirectState(body: Rid): null | PhysicsDirectBodyState2D
        
        /** Overridable version of [method PhysicsServer2D.body_test_motion]. Unlike the exposed implementation, this method does not receive all of the arguments inside a [PhysicsTestMotionParameters2D]. */
        /* gdvirtual */ _bodyTestMotion(body: Rid, from: Transform2D, motion: Vector2, margin: float64, collideSeparationRay: boolean, recoveryAsCollision: boolean, result: int64): boolean
        
        /** Overridable version of [method PhysicsServer2D.joint_create]. */
        /* gdvirtual */ _jointCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.joint_clear]. */
        /* gdvirtual */ _jointClear(joint: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.joint_set_param]. */
        /* gdvirtual */ _jointSetParam(joint: Rid, param: PhysicsServer2D.JointParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.joint_get_param]. */
        /* gdvirtual */ _jointGetParam(joint: Rid, param: PhysicsServer2D.JointParam): float64
        
        /** Overridable version of [method PhysicsServer2D.joint_disable_collisions_between_bodies]. */
        /* gdvirtual */ _jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.joint_is_disabled_collisions_between_bodies]. */
        /* gdvirtual */ _jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        
        /** Overridable version of [method PhysicsServer2D.joint_make_pin]. */
        /* gdvirtual */ _jointMakePin(joint: Rid, anchor: Vector2, bodyA: Rid, bodyB: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.joint_make_groove]. */
        /* gdvirtual */ _jointMakeGroove(joint: Rid, aGroove1: Vector2, aGroove2: Vector2, bAnchor: Vector2, bodyA: Rid, bodyB: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.joint_make_damped_spring]. */
        /* gdvirtual */ _jointMakeDampedSpring(joint: Rid, anchorA: Vector2, anchorB: Vector2, bodyA: Rid, bodyB: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_set_flag]. */
        /* gdvirtual */ _pinJointSetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_get_flag]. */
        /* gdvirtual */ _pinJointGetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag): boolean
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_set_param]. */
        /* gdvirtual */ _pinJointSetParam(joint: Rid, param: PhysicsServer2D.PinJointParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_get_param]. */
        /* gdvirtual */ _pinJointGetParam(joint: Rid, param: PhysicsServer2D.PinJointParam): float64
        
        /** Overridable version of [method PhysicsServer2D.damped_spring_joint_set_param]. */
        /* gdvirtual */ _dampedSpringJointSetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.damped_spring_joint_get_param]. */
        /* gdvirtual */ _dampedSpringJointGetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam): float64
        
        /** Overridable version of [method PhysicsServer2D.joint_get_type]. */
        /* gdvirtual */ _jointGetType(joint: Rid): PhysicsServer2D.JointType
        
        /** Overridable version of [method PhysicsServer2D.free_rid]. */
        /* gdvirtual */ _freeRid(rid: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.set_active]. */
        /* gdvirtual */ _setActive(active: boolean): void
        
        /** Called when the main loop is initialized and creates a new instance of this physics server. See also [method MainLoop._initialize] and [method _finish].  
         *  Overridable version of [PhysicsServer2D]'s internal `init` method.  
         */
        /* gdvirtual */ _init(): void
        
        /** Called every physics step to process the physics simulation. [param step] is the time elapsed since the last physics step, in seconds. It is usually the same as the value returned by [method Node.get_physics_process_delta_time].  
         *  Overridable version of [PhysicsServer2D]'s internal [code skip-lint]step` method.  
         */
        /* gdvirtual */ _step(step: float64): void
        
        /** Called to indicate that the physics server is synchronizing and cannot access physics states if running on a separate thread. See also [method _end_sync].  
         *  Overridable version of [PhysicsServer2D]'s internal `sync` method.  
         */
        /* gdvirtual */ _sync(): void
        
        /** Called every physics step before [method _step] to process all remaining queries.  
         *  Overridable version of [PhysicsServer2D]'s internal `flush_queries` method.  
         */
        /* gdvirtual */ _flushQueries(): void
        
        /** Called to indicate that the physics server has stopped synchronizing. It is in the loop's iteration/physics phase, and can access physics objects even if running on a separate thread. See also [method _sync].  
         *  Overridable version of [PhysicsServer2D]'s internal `end_sync` method.  
         */
        /* gdvirtual */ _endSync(): void
        
        /** Called when the main loop finalizes to shut down the physics server. See also [method MainLoop._finalize] and [method _init].  
         *  Overridable version of [PhysicsServer2D]'s internal `finish` method.  
         */
        /* gdvirtual */ _finish(): void
        
        /** Overridable method that should return `true` when the physics server is processing queries. See also [method _flush_queries].  
         *  Overridable version of [PhysicsServer2D]'s internal `is_flushing_queries` method.  
         */
        /* gdvirtual */ _isFlushingQueries(): boolean
        
        /** Overridable version of [method PhysicsServer2D.get_process_info]. */
        /* gdvirtual */ _getProcessInfo(processInfo: PhysicsServer2D.ProcessInfo): int64
        
        /** Returns `true` if the body with the given [RID] is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
        bodyTestMotionIsExcludingBody(body: Rid): boolean
        
        /** Returns `true` if the object with the given instance ID is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
        bodyTestMotionIsExcludingObject(object: int64): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsServer2DExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsServer2DExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsServer3DExtension extends __RPCMapPhysicsServer3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsServer3DExtension extends __NameMapPhysicsServer3D {
        _world_boundary_shape_create: "_worldBoundaryShapeCreate";
        _separation_ray_shape_create: "_separationRayShapeCreate";
        _sphere_shape_create: "_sphereShapeCreate";
        _box_shape_create: "_boxShapeCreate";
        _capsule_shape_create: "_capsuleShapeCreate";
        _cylinder_shape_create: "_cylinderShapeCreate";
        _convex_polygon_shape_create: "_convexPolygonShapeCreate";
        _concave_polygon_shape_create: "_concavePolygonShapeCreate";
        _heightmap_shape_create: "_heightmapShapeCreate";
        _custom_shape_create: "_customShapeCreate";
        _shape_set_data: "_shapeSetData";
        _shape_set_custom_solver_bias: "_shapeSetCustomSolverBias";
        _shape_set_margin: "_shapeSetMargin";
        _shape_get_margin: "_shapeGetMargin";
        _shape_get_type: "_shapeGetType";
        _shape_get_data: "_shapeGetData";
        _shape_get_custom_solver_bias: "_shapeGetCustomSolverBias";
        _space_create: "_spaceCreate";
        _space_set_active: "_spaceSetActive";
        _space_is_active: "_spaceIsActive";
        _space_set_param: "_spaceSetParam";
        _space_get_param: "_spaceGetParam";
        _space_get_direct_state: "_spaceGetDirectState";
        _space_set_debug_contacts: "_spaceSetDebugContacts";
        _space_get_contacts: "_spaceGetContacts";
        _space_get_contact_count: "_spaceGetContactCount";
        _area_create: "_areaCreate";
        _area_set_space: "_areaSetSpace";
        _area_get_space: "_areaGetSpace";
        _area_add_shape: "_areaAddShape";
        _area_set_shape: "_areaSetShape";
        _area_set_shape_transform: "_areaSetShapeTransform";
        _area_set_shape_disabled: "_areaSetShapeDisabled";
        _area_get_shape_count: "_areaGetShapeCount";
        _area_get_shape: "_areaGetShape";
        _area_get_shape_transform: "_areaGetShapeTransform";
        _area_remove_shape: "_areaRemoveShape";
        _area_clear_shapes: "_areaClearShapes";
        _area_attach_object_instance_id: "_areaAttachObjectInstanceId";
        _area_get_object_instance_id: "_areaGetObjectInstanceId";
        _area_set_param: "_areaSetParam";
        _area_set_transform: "_areaSetTransform";
        _area_get_param: "_areaGetParam";
        _area_get_transform: "_areaGetTransform";
        _area_set_collision_layer: "_areaSetCollisionLayer";
        _area_get_collision_layer: "_areaGetCollisionLayer";
        _area_set_collision_mask: "_areaSetCollisionMask";
        _area_get_collision_mask: "_areaGetCollisionMask";
        _area_set_monitorable: "_areaSetMonitorable";
        _area_set_ray_pickable: "_areaSetRayPickable";
        _area_set_monitor_callback: "_areaSetMonitorCallback";
        _area_set_area_monitor_callback: "_areaSetAreaMonitorCallback";
        _body_create: "_bodyCreate";
        _body_set_space: "_bodySetSpace";
        _body_get_space: "_bodyGetSpace";
        _body_set_mode: "_bodySetMode";
        _body_get_mode: "_bodyGetMode";
        _body_add_shape: "_bodyAddShape";
        _body_set_shape: "_bodySetShape";
        _body_set_shape_transform: "_bodySetShapeTransform";
        _body_set_shape_disabled: "_bodySetShapeDisabled";
        _body_get_shape_count: "_bodyGetShapeCount";
        _body_get_shape: "_bodyGetShape";
        _body_get_shape_transform: "_bodyGetShapeTransform";
        _body_remove_shape: "_bodyRemoveShape";
        _body_clear_shapes: "_bodyClearShapes";
        _body_attach_object_instance_id: "_bodyAttachObjectInstanceId";
        _body_get_object_instance_id: "_bodyGetObjectInstanceId";
        _body_set_enable_continuous_collision_detection: "_bodySetEnableContinuousCollisionDetection";
        _body_is_continuous_collision_detection_enabled: "_bodyIsContinuousCollisionDetectionEnabled";
        _body_set_collision_layer: "_bodySetCollisionLayer";
        _body_get_collision_layer: "_bodyGetCollisionLayer";
        _body_set_collision_mask: "_bodySetCollisionMask";
        _body_get_collision_mask: "_bodyGetCollisionMask";
        _body_set_collision_priority: "_bodySetCollisionPriority";
        _body_get_collision_priority: "_bodyGetCollisionPriority";
        _body_set_user_flags: "_bodySetUserFlags";
        _body_get_user_flags: "_bodyGetUserFlags";
        _body_set_param: "_bodySetParam";
        _body_get_param: "_bodyGetParam";
        _body_reset_mass_properties: "_bodyResetMassProperties";
        _body_set_state: "_bodySetState";
        _body_get_state: "_bodyGetState";
        _body_apply_central_impulse: "_bodyApplyCentralImpulse";
        _body_apply_impulse: "_bodyApplyImpulse";
        _body_apply_torque_impulse: "_bodyApplyTorqueImpulse";
        _body_apply_central_force: "_bodyApplyCentralForce";
        _body_apply_force: "_bodyApplyForce";
        _body_apply_torque: "_bodyApplyTorque";
        _body_add_constant_central_force: "_bodyAddConstantCentralForce";
        _body_add_constant_force: "_bodyAddConstantForce";
        _body_add_constant_torque: "_bodyAddConstantTorque";
        _body_set_constant_force: "_bodySetConstantForce";
        _body_get_constant_force: "_bodyGetConstantForce";
        _body_set_constant_torque: "_bodySetConstantTorque";
        _body_get_constant_torque: "_bodyGetConstantTorque";
        _body_set_axis_velocity: "_bodySetAxisVelocity";
        _body_set_axis_lock: "_bodySetAxisLock";
        _body_is_axis_locked: "_bodyIsAxisLocked";
        _body_add_collision_exception: "_bodyAddCollisionException";
        _body_remove_collision_exception: "_bodyRemoveCollisionException";
        _body_get_collision_exceptions: "_bodyGetCollisionExceptions";
        _body_set_max_contacts_reported: "_bodySetMaxContactsReported";
        _body_get_max_contacts_reported: "_bodyGetMaxContactsReported";
        _body_set_contacts_reported_depth_threshold: "_bodySetContactsReportedDepthThreshold";
        _body_get_contacts_reported_depth_threshold: "_bodyGetContactsReportedDepthThreshold";
        _body_set_omit_force_integration: "_bodySetOmitForceIntegration";
        _body_is_omitting_force_integration: "_bodyIsOmittingForceIntegration";
        _body_set_state_sync_callback: "_bodySetStateSyncCallback";
        _body_set_force_integration_callback: "_bodySetForceIntegrationCallback";
        _body_set_ray_pickable: "_bodySetRayPickable";
        _body_test_motion: "_bodyTestMotion";
        _body_get_direct_state: "_bodyGetDirectState";
        _soft_body_create: "_softBodyCreate";
        _soft_body_update_rendering_server: "_softBodyUpdateRenderingServer";
        _soft_body_set_space: "_softBodySetSpace";
        _soft_body_get_space: "_softBodyGetSpace";
        _soft_body_set_ray_pickable: "_softBodySetRayPickable";
        _soft_body_set_collision_layer: "_softBodySetCollisionLayer";
        _soft_body_get_collision_layer: "_softBodyGetCollisionLayer";
        _soft_body_set_collision_mask: "_softBodySetCollisionMask";
        _soft_body_get_collision_mask: "_softBodyGetCollisionMask";
        _soft_body_add_collision_exception: "_softBodyAddCollisionException";
        _soft_body_remove_collision_exception: "_softBodyRemoveCollisionException";
        _soft_body_get_collision_exceptions: "_softBodyGetCollisionExceptions";
        _soft_body_set_state: "_softBodySetState";
        _soft_body_get_state: "_softBodyGetState";
        _soft_body_set_transform: "_softBodySetTransform";
        _soft_body_set_simulation_precision: "_softBodySetSimulationPrecision";
        _soft_body_get_simulation_precision: "_softBodyGetSimulationPrecision";
        _soft_body_set_total_mass: "_softBodySetTotalMass";
        _soft_body_get_total_mass: "_softBodyGetTotalMass";
        _soft_body_set_linear_stiffness: "_softBodySetLinearStiffness";
        _soft_body_get_linear_stiffness: "_softBodyGetLinearStiffness";
        _soft_body_set_shrinking_factor: "_softBodySetShrinkingFactor";
        _soft_body_get_shrinking_factor: "_softBodyGetShrinkingFactor";
        _soft_body_set_pressure_coefficient: "_softBodySetPressureCoefficient";
        _soft_body_get_pressure_coefficient: "_softBodyGetPressureCoefficient";
        _soft_body_set_damping_coefficient: "_softBodySetDampingCoefficient";
        _soft_body_get_damping_coefficient: "_softBodyGetDampingCoefficient";
        _soft_body_set_drag_coefficient: "_softBodySetDragCoefficient";
        _soft_body_get_drag_coefficient: "_softBodyGetDragCoefficient";
        _soft_body_set_mesh: "_softBodySetMesh";
        _soft_body_get_bounds: "_softBodyGetBounds";
        _soft_body_move_point: "_softBodyMovePoint";
        _soft_body_get_point_global_position: "_softBodyGetPointGlobalPosition";
        _soft_body_remove_all_pinned_points: "_softBodyRemoveAllPinnedPoints";
        _soft_body_pin_point: "_softBodyPinPoint";
        _soft_body_is_point_pinned: "_softBodyIsPointPinned";
        _soft_body_apply_point_impulse: "_softBodyApplyPointImpulse";
        _soft_body_apply_point_force: "_softBodyApplyPointForce";
        _soft_body_apply_central_impulse: "_softBodyApplyCentralImpulse";
        _soft_body_apply_central_force: "_softBodyApplyCentralForce";
        _joint_create: "_jointCreate";
        _joint_clear: "_jointClear";
        _joint_make_pin: "_jointMakePin";
        _pin_joint_set_param: "_pinJointSetParam";
        _pin_joint_get_param: "_pinJointGetParam";
        _pin_joint_set_local_a: "_pinJointSetLocalA";
        _pin_joint_get_local_a: "_pinJointGetLocalA";
        _pin_joint_set_local_b: "_pinJointSetLocalB";
        _pin_joint_get_local_b: "_pinJointGetLocalB";
        _joint_make_hinge: "_jointMakeHinge";
        _joint_make_hinge_simple: "_jointMakeHingeSimple";
        _hinge_joint_set_param: "_hingeJointSetParam";
        _hinge_joint_get_param: "_hingeJointGetParam";
        _hinge_joint_set_flag: "_hingeJointSetFlag";
        _hinge_joint_get_flag: "_hingeJointGetFlag";
        _joint_make_slider: "_jointMakeSlider";
        _slider_joint_set_param: "_sliderJointSetParam";
        _slider_joint_get_param: "_sliderJointGetParam";
        _joint_make_cone_twist: "_jointMakeConeTwist";
        _cone_twist_joint_set_param: "_coneTwistJointSetParam";
        _cone_twist_joint_get_param: "_coneTwistJointGetParam";
        _joint_make_generic_6dof: "_jointMakeGeneric6Dof";
        _generic_6dof_joint_set_param: "_generic6DofJointSetParam";
        _generic_6dof_joint_get_param: "_generic6DofJointGetParam";
        _generic_6dof_joint_set_flag: "_generic6DofJointSetFlag";
        _generic_6dof_joint_get_flag: "_generic6DofJointGetFlag";
        _joint_get_type: "_jointGetType";
        _joint_set_solver_priority: "_jointSetSolverPriority";
        _joint_get_solver_priority: "_jointGetSolverPriority";
        _joint_disable_collisions_between_bodies: "_jointDisableCollisionsBetweenBodies";
        _joint_is_disabled_collisions_between_bodies: "_jointIsDisabledCollisionsBetweenBodies";
        _free_rid: "_freeRid";
        _set_active: "_setActive";
        _flush_queries: "_flushQueries";
        _end_sync: "_endSync";
        _is_flushing_queries: "_isFlushingQueries";
        _get_process_info: "_getProcessInfo";
        body_test_motion_is_excluding_body: "bodyTestMotionIsExcludingBody";
        body_test_motion_is_excluding_object: "bodyTestMotionIsExcludingObject";
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsServer3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsserver3dextension.html  
     */
    class PhysicsServer3DExtension extends PhysicsServer3D {
        constructor(identifier?: any)
        /* gdvirtual */ _worldBoundaryShapeCreate(): Rid
        /* gdvirtual */ _separationRayShapeCreate(): Rid
        /* gdvirtual */ _sphereShapeCreate(): Rid
        /* gdvirtual */ _boxShapeCreate(): Rid
        /* gdvirtual */ _capsuleShapeCreate(): Rid
        /* gdvirtual */ _cylinderShapeCreate(): Rid
        /* gdvirtual */ _convexPolygonShapeCreate(): Rid
        /* gdvirtual */ _concavePolygonShapeCreate(): Rid
        /* gdvirtual */ _heightmapShapeCreate(): Rid
        /* gdvirtual */ _customShapeCreate(): Rid
        /* gdvirtual */ _shapeSetData(shape: Rid, data: any): void
        /* gdvirtual */ _shapeSetCustomSolverBias(shape: Rid, bias: float64): void
        /* gdvirtual */ _shapeSetMargin(shape: Rid, margin: float64): void
        /* gdvirtual */ _shapeGetMargin(shape: Rid): float64
        /* gdvirtual */ _shapeGetType(shape: Rid): PhysicsServer3D.ShapeType
        /* gdvirtual */ _shapeGetData(shape: Rid): any
        /* gdvirtual */ _shapeGetCustomSolverBias(shape: Rid): float64
        /* gdvirtual */ _spaceCreate(): Rid
        /* gdvirtual */ _spaceSetActive(space: Rid, active: boolean): void
        /* gdvirtual */ _spaceIsActive(space: Rid): boolean
        /* gdvirtual */ _spaceSetParam(space: Rid, param: PhysicsServer3D.SpaceParameter, value: float64): void
        /* gdvirtual */ _spaceGetParam(space: Rid, param: PhysicsServer3D.SpaceParameter): float64
        /* gdvirtual */ _spaceGetDirectState(space: Rid): null | PhysicsDirectSpaceState3D
        /* gdvirtual */ _spaceSetDebugContacts(space: Rid, maxContacts: int64): void
        /* gdvirtual */ _spaceGetContacts(space: Rid): PackedVector3Array
        /* gdvirtual */ _spaceGetContactCount(space: Rid): int64
        /* gdvirtual */ _areaCreate(): Rid
        /* gdvirtual */ _areaSetSpace(area: Rid, space: Rid): void
        /* gdvirtual */ _areaGetSpace(area: Rid): Rid
        /* gdvirtual */ _areaAddShape(area: Rid, shape: Rid, transform: Transform3D, disabled: boolean): void
        /* gdvirtual */ _areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        /* gdvirtual */ _areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform3D): void
        /* gdvirtual */ _areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        /* gdvirtual */ _areaGetShapeCount(area: Rid): int64
        /* gdvirtual */ _areaGetShape(area: Rid, shapeIdx: int64): Rid
        /* gdvirtual */ _areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform3D
        /* gdvirtual */ _areaRemoveShape(area: Rid, shapeIdx: int64): void
        /* gdvirtual */ _areaClearShapes(area: Rid): void
        /* gdvirtual */ _areaAttachObjectInstanceId(area: Rid, id: int64): void
        /* gdvirtual */ _areaGetObjectInstanceId(area: Rid): int64
        /* gdvirtual */ _areaSetParam(area: Rid, param: PhysicsServer3D.AreaParameter, value: any): void
        /* gdvirtual */ _areaSetTransform(area: Rid, transform: Transform3D): void
        /* gdvirtual */ _areaGetParam(area: Rid, param: PhysicsServer3D.AreaParameter): any
        /* gdvirtual */ _areaGetTransform(area: Rid): Transform3D
        /* gdvirtual */ _areaSetCollisionLayer(area: Rid, layer: int64): void
        /* gdvirtual */ _areaGetCollisionLayer(area: Rid): int64
        /* gdvirtual */ _areaSetCollisionMask(area: Rid, mask: int64): void
        /* gdvirtual */ _areaGetCollisionMask(area: Rid): int64
        /* gdvirtual */ _areaSetMonitorable(area: Rid, monitorable: boolean): void
        /* gdvirtual */ _areaSetRayPickable(area: Rid, enable: boolean): void
        /* gdvirtual */ _areaSetMonitorCallback(area: Rid, callback: Callable): void
        /* gdvirtual */ _areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        /* gdvirtual */ _bodyCreate(): Rid
        /* gdvirtual */ _bodySetSpace(body: Rid, space: Rid): void
        /* gdvirtual */ _bodyGetSpace(body: Rid): Rid
        /* gdvirtual */ _bodySetMode(body: Rid, mode: PhysicsServer3D.BodyMode): void
        /* gdvirtual */ _bodyGetMode(body: Rid): PhysicsServer3D.BodyMode
        /* gdvirtual */ _bodyAddShape(body: Rid, shape: Rid, transform: Transform3D, disabled: boolean): void
        /* gdvirtual */ _bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        /* gdvirtual */ _bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform3D): void
        /* gdvirtual */ _bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        /* gdvirtual */ _bodyGetShapeCount(body: Rid): int64
        /* gdvirtual */ _bodyGetShape(body: Rid, shapeIdx: int64): Rid
        /* gdvirtual */ _bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform3D
        /* gdvirtual */ _bodyRemoveShape(body: Rid, shapeIdx: int64): void
        /* gdvirtual */ _bodyClearShapes(body: Rid): void
        /* gdvirtual */ _bodyAttachObjectInstanceId(body: Rid, id: int64): void
        /* gdvirtual */ _bodyGetObjectInstanceId(body: Rid): int64
        /* gdvirtual */ _bodySetEnableContinuousCollisionDetection(body: Rid, enable: boolean): void
        /* gdvirtual */ _bodyIsContinuousCollisionDetectionEnabled(body: Rid): boolean
        /* gdvirtual */ _bodySetCollisionLayer(body: Rid, layer: int64): void
        /* gdvirtual */ _bodyGetCollisionLayer(body: Rid): int64
        /* gdvirtual */ _bodySetCollisionMask(body: Rid, mask: int64): void
        /* gdvirtual */ _bodyGetCollisionMask(body: Rid): int64
        /* gdvirtual */ _bodySetCollisionPriority(body: Rid, priority: float64): void
        /* gdvirtual */ _bodyGetCollisionPriority(body: Rid): float64
        /* gdvirtual */ _bodySetUserFlags(body: Rid, flags: int64): void
        /* gdvirtual */ _bodyGetUserFlags(body: Rid): int64
        /* gdvirtual */ _bodySetParam(body: Rid, param: PhysicsServer3D.BodyParameter, value: any): void
        /* gdvirtual */ _bodyGetParam(body: Rid, param: PhysicsServer3D.BodyParameter): any
        /* gdvirtual */ _bodyResetMassProperties(body: Rid): void
        /* gdvirtual */ _bodySetState(body: Rid, state: PhysicsServer3D.BodyState, value: any): void
        /* gdvirtual */ _bodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        /* gdvirtual */ _bodyApplyCentralImpulse(body: Rid, impulse: Vector3): void
        /* gdvirtual */ _bodyApplyImpulse(body: Rid, impulse: Vector3, position: Vector3): void
        /* gdvirtual */ _bodyApplyTorqueImpulse(body: Rid, impulse: Vector3): void
        /* gdvirtual */ _bodyApplyCentralForce(body: Rid, force: Vector3): void
        /* gdvirtual */ _bodyApplyForce(body: Rid, force: Vector3, position: Vector3): void
        /* gdvirtual */ _bodyApplyTorque(body: Rid, torque: Vector3): void
        /* gdvirtual */ _bodyAddConstantCentralForce(body: Rid, force: Vector3): void
        /* gdvirtual */ _bodyAddConstantForce(body: Rid, force: Vector3, position: Vector3): void
        /* gdvirtual */ _bodyAddConstantTorque(body: Rid, torque: Vector3): void
        /* gdvirtual */ _bodySetConstantForce(body: Rid, force: Vector3): void
        /* gdvirtual */ _bodyGetConstantForce(body: Rid): Vector3
        /* gdvirtual */ _bodySetConstantTorque(body: Rid, torque: Vector3): void
        /* gdvirtual */ _bodyGetConstantTorque(body: Rid): Vector3
        /* gdvirtual */ _bodySetAxisVelocity(body: Rid, axisVelocity: Vector3): void
        /* gdvirtual */ _bodySetAxisLock(body: Rid, axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        /* gdvirtual */ _bodyIsAxisLocked(body: Rid, axis: PhysicsServer3D.BodyAxis): boolean
        /* gdvirtual */ _bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        /* gdvirtual */ _bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        /* gdvirtual */ _bodyGetCollisionExceptions(body: Rid): GArray<Rid>
        /* gdvirtual */ _bodySetMaxContactsReported(body: Rid, amount: int64): void
        /* gdvirtual */ _bodyGetMaxContactsReported(body: Rid): int64
        /* gdvirtual */ _bodySetContactsReportedDepthThreshold(body: Rid, threshold: float64): void
        /* gdvirtual */ _bodyGetContactsReportedDepthThreshold(body: Rid): float64
        /* gdvirtual */ _bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        /* gdvirtual */ _bodyIsOmittingForceIntegration(body: Rid): boolean
        /* gdvirtual */ _bodySetStateSyncCallback(body: Rid, callable: Callable): void
        /* gdvirtual */ _bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata: any): void
        /* gdvirtual */ _bodySetRayPickable(body: Rid, enable: boolean): void
        /* gdvirtual */ _bodyTestMotion(body: Rid, from: Transform3D, motion: Vector3, margin: float64, maxCollisions: int64, collideSeparationRay: boolean, recoveryAsCollision: boolean, result: int64): boolean
        /* gdvirtual */ _bodyGetDirectState(body: Rid): null | PhysicsDirectBodyState3D
        /* gdvirtual */ _softBodyCreate(): Rid
        /* gdvirtual */ _softBodyUpdateRenderingServer(body: Rid, renderingServerHandler: PhysicsServer3DRenderingServerHandler): void
        /* gdvirtual */ _softBodySetSpace(body: Rid, space: Rid): void
        /* gdvirtual */ _softBodyGetSpace(body: Rid): Rid
        /* gdvirtual */ _softBodySetRayPickable(body: Rid, enable: boolean): void
        /* gdvirtual */ _softBodySetCollisionLayer(body: Rid, layer: int64): void
        /* gdvirtual */ _softBodyGetCollisionLayer(body: Rid): int64
        /* gdvirtual */ _softBodySetCollisionMask(body: Rid, mask: int64): void
        /* gdvirtual */ _softBodyGetCollisionMask(body: Rid): int64
        /* gdvirtual */ _softBodyAddCollisionException(body: Rid, bodyB: Rid): void
        /* gdvirtual */ _softBodyRemoveCollisionException(body: Rid, bodyB: Rid): void
        /* gdvirtual */ _softBodyGetCollisionExceptions(body: Rid): GArray<Rid>
        /* gdvirtual */ _softBodySetState(body: Rid, state: PhysicsServer3D.BodyState, variant: any): void
        /* gdvirtual */ _softBodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        /* gdvirtual */ _softBodySetTransform(body: Rid, transform: Transform3D): void
        /* gdvirtual */ _softBodySetSimulationPrecision(body: Rid, simulationPrecision: int64): void
        /* gdvirtual */ _softBodyGetSimulationPrecision(body: Rid): int64
        /* gdvirtual */ _softBodySetTotalMass(body: Rid, totalMass: float64): void
        /* gdvirtual */ _softBodyGetTotalMass(body: Rid): float64
        /* gdvirtual */ _softBodySetLinearStiffness(body: Rid, linearStiffness: float64): void
        /* gdvirtual */ _softBodyGetLinearStiffness(body: Rid): float64
        /* gdvirtual */ _softBodySetShrinkingFactor(body: Rid, shrinkingFactor: float64): void
        /* gdvirtual */ _softBodyGetShrinkingFactor(body: Rid): float64
        /* gdvirtual */ _softBodySetPressureCoefficient(body: Rid, pressureCoefficient: float64): void
        /* gdvirtual */ _softBodyGetPressureCoefficient(body: Rid): float64
        /* gdvirtual */ _softBodySetDampingCoefficient(body: Rid, dampingCoefficient: float64): void
        /* gdvirtual */ _softBodyGetDampingCoefficient(body: Rid): float64
        /* gdvirtual */ _softBodySetDragCoefficient(body: Rid, dragCoefficient: float64): void
        /* gdvirtual */ _softBodyGetDragCoefficient(body: Rid): float64
        /* gdvirtual */ _softBodySetMesh(body: Rid, mesh: Rid): void
        /* gdvirtual */ _softBodyGetBounds(body: Rid): Aabb
        /* gdvirtual */ _softBodyMovePoint(body: Rid, pointIndex: int64, globalPosition: Vector3): void
        /* gdvirtual */ _softBodyGetPointGlobalPosition(body: Rid, pointIndex: int64): Vector3
        /* gdvirtual */ _softBodyRemoveAllPinnedPoints(body: Rid): void
        /* gdvirtual */ _softBodyPinPoint(body: Rid, pointIndex: int64, pin: boolean): void
        /* gdvirtual */ _softBodyIsPointPinned(body: Rid, pointIndex: int64): boolean
        /* gdvirtual */ _softBodyApplyPointImpulse(body: Rid, pointIndex: int64, impulse: Vector3): void
        /* gdvirtual */ _softBodyApplyPointForce(body: Rid, pointIndex: int64, force: Vector3): void
        /* gdvirtual */ _softBodyApplyCentralImpulse(body: Rid, impulse: Vector3): void
        /* gdvirtual */ _softBodyApplyCentralForce(body: Rid, force: Vector3): void
        /* gdvirtual */ _jointCreate(): Rid
        /* gdvirtual */ _jointClear(joint: Rid): void
        /* gdvirtual */ _jointMakePin(joint: Rid, bodyA: Rid, localA: Vector3, bodyB: Rid, localB: Vector3): void
        /* gdvirtual */ _pinJointSetParam(joint: Rid, param: PhysicsServer3D.PinJointParam, value: float64): void
        /* gdvirtual */ _pinJointGetParam(joint: Rid, param: PhysicsServer3D.PinJointParam): float64
        /* gdvirtual */ _pinJointSetLocalA(joint: Rid, localA: Vector3): void
        /* gdvirtual */ _pinJointGetLocalA(joint: Rid): Vector3
        /* gdvirtual */ _pinJointSetLocalB(joint: Rid, localB: Vector3): void
        /* gdvirtual */ _pinJointGetLocalB(joint: Rid): Vector3
        /* gdvirtual */ _jointMakeHinge(joint: Rid, bodyA: Rid, hingeA: Transform3D, bodyB: Rid, hingeB: Transform3D): void
        /* gdvirtual */ _jointMakeHingeSimple(joint: Rid, bodyA: Rid, pivotA: Vector3, axisA: Vector3, bodyB: Rid, pivotB: Vector3, axisB: Vector3): void
        /* gdvirtual */ _hingeJointSetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam, value: float64): void
        /* gdvirtual */ _hingeJointGetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam): float64
        /* gdvirtual */ _hingeJointSetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag, enabled: boolean): void
        /* gdvirtual */ _hingeJointGetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag): boolean
        /* gdvirtual */ _jointMakeSlider(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        /* gdvirtual */ _sliderJointSetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam, value: float64): void
        /* gdvirtual */ _sliderJointGetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam): float64
        /* gdvirtual */ _jointMakeConeTwist(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        /* gdvirtual */ _coneTwistJointSetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam, value: float64): void
        /* gdvirtual */ _coneTwistJointGetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam): float64
        /* gdvirtual */ _jointMakeGeneric6Dof(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        /* gdvirtual */ _generic6DofJointSetParam(joint: Rid, axis: Vector3.Axis, param: PhysicsServer3D.G6DofJointAxisParam, value: float64): void
        /* gdvirtual */ _generic6DofJointGetParam(joint: Rid, axis: Vector3.Axis, param: PhysicsServer3D.G6DofJointAxisParam): float64
        /* gdvirtual */ _generic6DofJointSetFlag(joint: Rid, axis: Vector3.Axis, flag: PhysicsServer3D.G6DofJointAxisFlag, enable: boolean): void
        /* gdvirtual */ _generic6DofJointGetFlag(joint: Rid, axis: Vector3.Axis, flag: PhysicsServer3D.G6DofJointAxisFlag): boolean
        /* gdvirtual */ _jointGetType(joint: Rid): PhysicsServer3D.JointType
        /* gdvirtual */ _jointSetSolverPriority(joint: Rid, priority: int64): void
        /* gdvirtual */ _jointGetSolverPriority(joint: Rid): int64
        /* gdvirtual */ _jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        /* gdvirtual */ _jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        /* gdvirtual */ _freeRid(rid: Rid): void
        /* gdvirtual */ _setActive(active: boolean): void
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _step(step: float64): void
        /* gdvirtual */ _sync(): void
        /* gdvirtual */ _flushQueries(): void
        /* gdvirtual */ _endSync(): void
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _isFlushingQueries(): boolean
        /* gdvirtual */ _getProcessInfo(processInfo: PhysicsServer3D.ProcessInfo): int64
        bodyTestMotionIsExcludingBody(body: Rid): boolean
        bodyTestMotionIsExcludingObject(object: int64): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsServer3DExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsServer3DExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsServer3DRenderingServerHandler extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsServer3DRenderingServerHandler extends __NameMapGObject {
        _set_vertex: "_setVertex";
        _set_normal: "_setNormal";
        _set_aabb: "_setAabb";
        set_vertex: "setVertex";
        set_normal: "setNormal";
        set_aabb: "setAabb";
    }
    /** A class used to provide [method PhysicsServer3DExtension._soft_body_update_rendering_server] with a rendering handler for soft bodies.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsserver3drenderingserverhandler.html  
     */
    class PhysicsServer3DRenderingServerHandler extends GObject {
        constructor(identifier?: any)
        /** Called by the [PhysicsServer3D] to set the position for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param vertex] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _setVertex(vertexId: int64, vertex: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param normal] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _setNormal(vertexId: int64, normal: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the bounding box for the [SoftBody3D]. */
        /* gdvirtual */ _setAabb(aabb: Aabb): void
        
        /** Sets the position for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        setVertex(vertexId: int64, vertex: Vector3): void
        
        /** Sets the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        setNormal(vertexId: int64, normal: Vector3): void
        
        /** Sets the bounding box for the [SoftBody3D]. */
        setAabb(aabb: Aabb): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsServer3DRenderingServerHandler;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsServer3DRenderingServerHandler;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsShapeQueryParameters2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsShapeQueryParameters2D extends __NameMapRefCounted {
        collision_mask: "collisionMask";
        shape_rid: "shapeRid";
        collide_with_bodies: "collideWithBodies";
        collide_with_areas: "collideWithAreas";
    }
    /** Provides parameters for [PhysicsDirectSpaceState2D]'s methods.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsshapequeryparameters2d.html  
     */
    class PhysicsShapeQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray<Rid>
        set exclude(value: GArray<Rid>)
        
        /** The collision margin for the shape. */
        get margin(): float64
        set margin(value: float64)
        
        /** The motion of the shape being queried for. */
        get motion(): Vector2
        set motion(value: Vector2)
        
        /** The [Shape2D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *    
         */
        get shapeRid(): Rid
        set shapeRid(value: Rid)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsShapeQueryParameters2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsShapeQueryParameters2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsShapeQueryParameters3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsShapeQueryParameters3D extends __NameMapRefCounted {
        collision_mask: "collisionMask";
        shape_rid: "shapeRid";
        collide_with_bodies: "collideWithBodies";
        collide_with_areas: "collideWithAreas";
    }
    /** Provides parameters for [PhysicsDirectSpaceState3D]'s methods.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicsshapequeryparameters3d.html  
     */
    class PhysicsShapeQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray<Rid>
        set exclude(value: GArray<Rid>)
        
        /** The collision margin for the shape. */
        get margin(): float64
        set margin(value: float64)
        
        /** The motion of the shape being queried for. */
        get motion(): Vector3
        set motion(value: Vector3)
        
        /** The [Shape3D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        get shape(): null | Shape3D
        set shape(value: null | Shape3D)
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *    
         */
        get shapeRid(): Rid
        set shapeRid(value: Rid)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsShapeQueryParameters3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsShapeQueryParameters3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsTestMotionParameters2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsTestMotionParameters2D extends __NameMapRefCounted {
        collide_separation_ray: "collideSeparationRay";
        exclude_bodies: "excludeBodies";
        exclude_objects: "excludeObjects";
        recovery_as_collision: "recoveryAsCollision";
    }
    /** Provides parameters for [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicstestmotionparameters2d.html  
     */
    class PhysicsTestMotionParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** Transform in global space where the motion should start. Usually set to [member Node2D.global_transform] for the current body's transform. */
        get from(): Transform2D
        set from(value: Transform2D)
        
        /** Motion vector to define the length and direction of the motion to test. */
        get motion(): Vector2
        set motion(value: Vector2)
        
        /** Increases the size of the shapes involved in the collision detection. */
        get margin(): float64
        set margin(value: float64)
        
        /** If set to `true`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        get collideSeparationRay(): boolean
        set collideSeparationRay(value: boolean)
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        get excludeBodies(): GArray<Rid>
        set excludeBodies(value: GArray<Rid>)
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        get excludeObjects(): GArray
        set excludeObjects(value: GArray)
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
        get recoveryAsCollision(): boolean
        set recoveryAsCollision(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsTestMotionParameters2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsTestMotionParameters2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsTestMotionParameters3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsTestMotionParameters3D extends __NameMapRefCounted {
        max_collisions: "maxCollisions";
        collide_separation_ray: "collideSeparationRay";
        exclude_bodies: "excludeBodies";
        exclude_objects: "excludeObjects";
        recovery_as_collision: "recoveryAsCollision";
    }
    /** Provides parameters for [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicstestmotionparameters3d.html  
     */
    class PhysicsTestMotionParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** Transform in global space where the motion should start. Usually set to [member Node3D.global_transform] for the current body's transform. */
        get from(): Transform3D
        set from(value: Transform3D)
        
        /** Motion vector to define the length and direction of the motion to test. */
        get motion(): Vector3
        set motion(value: Vector3)
        
        /** Increases the size of the shapes involved in the collision detection. */
        get margin(): float64
        set margin(value: float64)
        
        /** Maximum number of returned collisions, between `1` and `32`. Always returns the deepest detected collisions. */
        get maxCollisions(): int64
        set maxCollisions(value: int64)
        
        /** If set to `true`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        get collideSeparationRay(): boolean
        set collideSeparationRay(value: boolean)
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        get excludeBodies(): GArray<Rid>
        set excludeBodies(value: GArray<Rid>)
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        get excludeObjects(): GArray
        set excludeObjects(value: GArray)
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
        get recoveryAsCollision(): boolean
        set recoveryAsCollision(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsTestMotionParameters3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsTestMotionParameters3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsTestMotionResult2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsTestMotionResult2D extends __NameMapRefCounted {
        get_travel: "getTravel";
        get_remainder: "getRemainder";
        get_collision_point: "getCollisionPoint";
        get_collision_normal: "getCollisionNormal";
        get_collider_velocity: "getColliderVelocity";
        get_collider_id: "getColliderId";
        get_collider_rid: "getColliderRid";
        get_collider: "getCollider";
        get_collider_shape: "getColliderShape";
        get_collision_local_shape: "getCollisionLocalShape";
        get_collision_depth: "getCollisionDepth";
        get_collision_safe_fraction: "getCollisionSafeFraction";
        get_collision_unsafe_fraction: "getCollisionUnsafeFraction";
    }
    /** Describes the motion and collision result from [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicstestmotionresult2d.html  
     */
    class PhysicsTestMotionResult2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector2
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector2
        
        /** Returns the point of collision in global coordinates, if a collision occurred. */
        getCollisionPoint(): Vector2
        
        /** Returns the colliding body's shape's normal at the point of collision, if a collision occurred. */
        getCollisionNormal(): Vector2
        
        /** Returns the colliding body's velocity, if a collision occurred. */
        getColliderVelocity(): Vector2
        
        /** Returns the unique instance ID of the colliding body's attached [Object], if a collision occurred. See [method Object.get_instance_id]. */
        getColliderId(): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D], if a collision occurred. */
        getColliderRid(): Rid
        
        /** Returns the colliding body's attached [Object], if a collision occurred. */
        getCollider(): null | GObject
        
        /** Returns the colliding body's shape index, if a collision occurred. See [CollisionObject2D]. */
        getColliderShape(): int64
        
        /** Returns the moving object's colliding shape, if a collision occurred. */
        getCollisionLocalShape(): int64
        
        /** Returns the length of overlap along the collision normal, if a collision occurred. */
        getCollisionDepth(): float64
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        getCollisionSafeFraction(): float64
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        getCollisionUnsafeFraction(): float64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsTestMotionResult2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsTestMotionResult2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPhysicsTestMotionResult3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPhysicsTestMotionResult3D extends __NameMapRefCounted {
        get_travel: "getTravel";
        get_remainder: "getRemainder";
        get_collision_safe_fraction: "getCollisionSafeFraction";
        get_collision_unsafe_fraction: "getCollisionUnsafeFraction";
        get_collision_count: "getCollisionCount";
        get_collision_point: "getCollisionPoint";
        get_collision_normal: "getCollisionNormal";
        get_collider_velocity: "getColliderVelocity";
        get_collider_id: "getColliderId";
        get_collider_rid: "getColliderRid";
        get_collider: "getCollider";
        get_collider_shape: "getColliderShape";
        get_collision_local_shape: "getCollisionLocalShape";
        get_collision_depth: "getCollisionDepth";
    }
    /** Describes the motion and collision result from [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_physicstestmotionresult3d.html  
     */
    class PhysicsTestMotionResult3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector3
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        getCollisionSafeFraction(): float64
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        getCollisionUnsafeFraction(): float64
        
        /** Returns the number of detected collisions. */
        getCollisionCount(): int64
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionPoint(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionNormal(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default), if a collision occurred. */
        getColliderVelocity(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. See [method Object.get_instance_id]. */
        getColliderId(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default), if a collision occurred. */
        getColliderRid(collisionIndex?: int64 /* = 0 */): Rid
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. */
        getCollider(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default), if a collision occurred. See [CollisionObject3D]. */
        getColliderShape(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionLocalShape(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the length of overlap along the collision normal given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionDepth(collisionIndex?: int64 /* = 0 */): float64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPhysicsTestMotionResult3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPhysicsTestMotionResult3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPinJoint2D extends __RPCMapJoint2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPinJoint2D extends __NameMapJoint2D {
        angular_limit_enabled: "angularLimitEnabled";
        angular_limit_lower: "angularLimitLower";
        angular_limit_upper: "angularLimitUpper";
        motor_enabled: "motorEnabled";
        motor_target_velocity: "motorTargetVelocity";
    }
    /** A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_pinjoint2d.html  
     */
    class PinJoint2D<Map extends NodePathMap = any> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The higher this value, the more the bond to the pinned partner can flex. */
        get softness(): float64
        set softness(value: float64)
        
        /** If `true`, the pin maximum and minimum rotation, defined by [member angular_limit_lower] and [member angular_limit_upper] are applied. */
        get angularLimitEnabled(): boolean
        set angularLimitEnabled(value: boolean)
        
        /** The minimum rotation. Only active if [member angular_limit_enabled] is `true`. */
        get angularLimitLower(): float64
        set angularLimitLower(value: float64)
        
        /** The maximum rotation. Only active if [member angular_limit_enabled] is `true`. */
        get angularLimitUpper(): float64
        set angularLimitUpper(value: float64)
        
        /** When activated, a motor turns the pin. */
        get motorEnabled(): boolean
        set motorEnabled(value: boolean)
        
        /** Target speed for the motor. In radians per second. */
        get motorTargetVelocity(): float64
        set motorTargetVelocity(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPinJoint2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPinJoint2D;
    }
    namespace PinJoint3D {
        enum Param {
            ParamBias = 0,
            ParamDamping = 1,
            ParamImpulseClamp = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPinJoint3D extends __RPCMapJoint3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPinJoint3D extends __NameMapJoint3D {
        set_param: "setParam";
        get_param: "getParam";
        "params/impulse_clamp": "params/impulseClamp";
    }
    /** A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_pinjoint3d.html  
     */
    class PinJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        constructor(identifier?: any)
        /** Sets the value of the specified parameter. */
        setParam(param: PinJoint3D.Param, value: float64): void
        
        /** Returns the value of the specified parameter. */
        getParam(param: PinJoint3D.Param): float64
        
        /** The force with which the pinned objects stay in positional relation to each other. The higher, the stronger. */
        get "params/bias"(): float64
        set "params/bias"(value: float64)
        
        /** The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger. */
        get "params/damping"(): float64
        set "params/damping"(value: float64)
        
        /** If above 0, this value is the maximum value for an impulse that this Joint3D produces. */
        get "params/impulseClamp"(): float64
        set "params/impulseClamp"(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPinJoint3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPinJoint3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderCubemap extends __RPCMapPlaceholderTextureLayered {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderCubemap extends __NameMapPlaceholderTextureLayered {
    }
    /** A [Cubemap] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdercubemap.html  
     */
    class PlaceholderCubemap extends PlaceholderTextureLayered {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderCubemap;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderCubemap;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderCubemapArray extends __RPCMapPlaceholderTextureLayered {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderCubemapArray extends __NameMapPlaceholderTextureLayered {
    }
    /** A [CubemapArray] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdercubemaparray.html  
     */
    class PlaceholderCubemapArray extends PlaceholderTextureLayered {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderCubemapArray;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderCubemapArray;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderMaterial extends __RPCMapMaterial {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderMaterial extends __NameMapMaterial {
    }
    /** Placeholder class for a material.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdermaterial.html  
     */
    class PlaceholderMaterial extends Material {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderMaterial;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderMesh extends __RPCMapMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderMesh extends __NameMapMesh {
    }
    /** Placeholder class for a mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdermesh.html  
     */
    class PlaceholderMesh extends Mesh {
        constructor(identifier?: any)
        /** The smallest [AABB] enclosing this mesh in local space. */
        get aabb(): Aabb
        set aabb(value: Aabb)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderTexture2D extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderTexture2D extends __NameMapTexture2D {
    }
    /** Placeholder class for a 2-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdertexture2d.html  
     */
    class PlaceholderTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** The texture's size (in pixels). */
        get size(): Vector2
        set size(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderTexture2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderTexture2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderTexture2DArray extends __RPCMapPlaceholderTextureLayered {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderTexture2DArray extends __NameMapPlaceholderTextureLayered {
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdertexture2darray.html  
     */
    class PlaceholderTexture2DArray extends PlaceholderTextureLayered {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderTexture2DArray;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderTexture2DArray;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderTexture3D extends __RPCMapTexture3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderTexture3D extends __NameMapTexture3D {
    }
    /** Placeholder class for a 3-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdertexture3d.html  
     */
    class PlaceholderTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** The texture's size (in pixels). */
        get size(): Vector3I
        set size(value: Vector3I)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderTexture3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderTexture3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaceholderTextureLayered extends __RPCMapTextureLayered {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaceholderTextureLayered extends __NameMapTextureLayered {
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_placeholdertexturelayered.html  
     */
    class PlaceholderTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        /** The size of each texture layer (in pixels). */
        get size(): Vector2I
        set size(value: Vector2I)
        
        /** The number of layers in the texture array. */
        get layers(): int64
        set layers(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaceholderTextureLayered;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaceholderTextureLayered;
    }
    namespace PlaneMesh {
        enum Orientation {
            FaceX = 0,
            FaceY = 1,
            FaceZ = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPlaneMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPlaneMesh extends __NameMapPrimitiveMesh {
        subdivide_width: "subdivideWidth";
        subdivide_depth: "subdivideDepth";
        center_offset: "centerOffset";
    }
    /** Class representing a planar [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_planemesh.html  
     */
    class PlaneMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Size of the generated plane. */
        get size(): Vector2
        set size(value: Vector2)
        
        /** Number of subdivision along the X axis. */
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        
        /** Number of subdivision along the Z axis. */
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
        
        /** Offset of the generated plane. Useful for particles. */
        get centerOffset(): Vector3
        set centerOffset(value: Vector3)
        
        /** Direction that the [PlaneMesh] is facing. */
        get orientation(): int64
        set orientation(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPlaneMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPlaneMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPointLight2D extends __RPCMapLight2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPointLight2D extends __NameMapLight2D {
        texture_scale: "textureScale";
    }
    /** Positional 2D light source.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_pointlight2d.html  
     */
    class PointLight2D<Map extends NodePathMap = any> extends Light2D<Map> {
        constructor(identifier?: any)
        /** [Texture2D] used for the light's appearance. */
        get texture(): null | Texture2D | AnimatedTexture | AtlasTexture | CameraTexture | CanvasTexture | MeshTexture | Texture2Drd | ViewportTexture
        set texture(value: null | Texture2D | AnimatedTexture | AtlasTexture | CameraTexture | CanvasTexture | MeshTexture | Texture2Drd | ViewportTexture)
        
        /** The offset of the light's [member texture]. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The [member texture]'s scale factor. */
        get textureScale(): float64
        set textureScale(value: float64)
        
        /** The height of the light. Used with 2D normal mapping. The units are in pixels, e.g. if the height is 100, then it will illuminate an object 100 pixels away at a 45° angle to the plane. */
        get height(): float64
        set height(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPointLight2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPointLight2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPointMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPointMesh extends __NameMapPrimitiveMesh {
    }
    /** Mesh with a single point primitive.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_pointmesh.html  
     */
    class PointMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPointMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPointMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPolygon2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPolygon2D extends __NameMapNode2D {
        add_bone: "addBone";
        get_bone_count: "getBoneCount";
        get_bone_path: "getBonePath";
        get_bone_weights: "getBoneWeights";
        erase_bone: "eraseBone";
        clear_bones: "clearBones";
        set_bone_path: "setBonePath";
        set_bone_weights: "setBoneWeights";
        texture_offset: "textureOffset";
        texture_scale: "textureScale";
        texture_rotation: "textureRotation";
        invert_enabled: "invertEnabled";
        invert_border: "invertBorder";
        uv: "uV";
        vertex_colors: "vertexColors";
        internal_vertex_count: "internalVertexCount";
    }
    /** A 2D polygon.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_polygon2d.html  
     */
    class Polygon2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Adds a bone with the specified [param path] and [param weights]. */
        addBone(path: NodePath | string, weights: PackedFloat32Array | float32[]): void
        
        /** Returns the number of bones in this [Polygon2D]. */
        getBoneCount(): int64
        
        /** Returns the path to the node associated with the specified bone. */
        getBonePath(index: int64): NodePath
        
        /** Returns the weight values of the specified bone. */
        getBoneWeights(index: int64): PackedFloat32Array
        
        /** Removes the specified bone from this [Polygon2D]. */
        eraseBone(index: int64): void
        
        /** Removes all bones from this [Polygon2D]. */
        clearBones(): void
        
        /** Sets the path to the node associated with the specified bone. */
        setBonePath(index: int64, path: NodePath | string): void
        
        /** Sets the weight values for the specified bone. */
        setBoneWeights(index: int64, weights: PackedFloat32Array | float32[]): void
        
        /** The polygon's fill color. If [member texture] is set, it will be multiplied by this color. It will also be the default color for vertices not set in [member vertex_colors]. */
        get color(): Color
        set color(value: Color)
        
        /** The offset applied to each vertex. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, polygon edges will be anti-aliased. */
        get antialiased(): boolean
        set antialiased(value: boolean)
        
        /** The polygon's fill texture. Use [member uv] to set texture coordinates. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Amount to offset the polygon's [member texture]. If set to `Vector2(0, 0)`, the texture's origin (its top-left corner) will be placed at the polygon's position. */
        get textureOffset(): Vector2
        set textureOffset(value: Vector2)
        
        /** Amount to multiply the [member uv] coordinates when using [member texture]. Larger values make the texture smaller, and vice versa. */
        get textureScale(): Vector2
        set textureScale(value: Vector2)
        
        /** The texture's rotation in radians. */
        get textureRotation(): float64
        set textureRotation(value: float64)
        
        /** Path to a [Skeleton2D] node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used. */
        get skeleton(): NodePath
        set skeleton(value: NodePath | string)
        
        /** If `true`, the polygon will be inverted, containing the area outside the defined points and extending to the [member invert_border]. */
        get invertEnabled(): boolean
        set invertEnabled(value: boolean)
        
        /** Added padding applied to the bounding box when [member invert_enabled] is set to `true`. Setting this value too small may result in a "Bad Polygon" error. */
        get invertBorder(): float64
        set invertBorder(value: float64)
        
        /** The polygon's list of vertices. The final point will be connected to the first. */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        
        /** Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use `Vector2(0, 0)`. */
        get uV(): PackedVector2Array
        set uV(value: PackedVector2Array | Vector2[])
        
        /** Color for each vertex. Colors are interpolated between vertices, resulting in smooth gradients. There should be one per polygon vertex. If there are fewer, undefined vertices will use [member color]. */
        get vertexColors(): PackedColorArray
        set vertexColors(value: PackedColorArray | Color[])
        
        /** The list of polygons, in case more than one is being represented. Every individual polygon is stored as a [PackedInt32Array] where each [int] is an index to a point in [member polygon]. If empty, this property will be ignored, and the resulting single polygon will be composed of all points in [member polygon], using the order they are stored in. */
        get polygons(): GArray
        set polygons(value: GArray)
        get bones(): GArray
        set bones(value: GArray)
        
        /** Number of internal vertices, used for UV mapping. */
        get internalVertexCount(): int64
        set internalVertexCount(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPolygon2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPolygon2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPolygonOccluder3D extends __RPCMapOccluder3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPolygonOccluder3D extends __NameMapOccluder3D {
        _has_editable_3d_polygon_no_depth: "_hasEditable3DPolygonNoDepth";
    }
    /** Flat 2D polygon shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_polygonoccluder3d.html  
     */
    class PolygonOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        _hasEditable3DPolygonNoDepth(): boolean
        
        /** The polygon to use for occlusion culling. The polygon can be convex or concave, but it should have as few points as possible to maximize performance.  
         *  The polygon must  *not*  have intersecting lines. Otherwise, triangulation will fail (with an error message printed).  
         */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPolygonOccluder3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPolygonOccluder3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPolygonPathFinder extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPolygonPathFinder extends __NameMapResource {
        find_path: "findPath";
        get_intersections: "getIntersections";
        get_closest_point: "getClosestPoint";
        is_point_inside: "isPointInside";
        set_point_penalty: "setPointPenalty";
        get_point_penalty: "getPointPenalty";
        get_bounds: "getBounds";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_polygonpathfinder.html */
    class PolygonPathFinder extends Resource {
        constructor(identifier?: any)
        /** Sets up [PolygonPathFinder] with an array of points that define the vertices of the polygon, and an array of indices that determine the edges of the polygon.  
         *  The length of [param connections] must be even, returns an error if odd.  
         *    
         */
        setup(points: PackedVector2Array | Vector2[], connections: PackedInt32Array | int32[]): void
        findPath(from: Vector2, to: Vector2): PackedVector2Array
        getIntersections(from: Vector2, to: Vector2): PackedVector2Array
        getClosestPoint(point: Vector2): Vector2
        
        /** Returns `true` if [param point] falls inside the polygon area.  
         *    
         */
        isPointInside(point: Vector2): boolean
        setPointPenalty(idx: int64, penalty: float64): void
        getPointPenalty(idx: int64): float64
        getBounds(): Rect2
        get data(): GDictionary
        set data(value: GDictionary)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPolygonPathFinder;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPolygonPathFinder;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPopup extends __RPCMapWindow {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPopup extends __NameMapWindow {
        popup_hide: "popupHide";
    }
    /** Base class for contextual windows and panels with fixed position.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_popup.html  
     */
    class Popup<Map extends NodePathMap = any> extends Window<Map> {
        constructor(identifier?: any)
        /** Emitted when the popup is hidden. */
        readonly popupHide: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPopup;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPopup;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPopupMenu extends __RPCMapPopup {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPopupMenu extends __NameMapPopup {
        activate_item_by_event: "activateItemByEvent";
        is_native_menu: "isNativeMenu";
        add_item: "addItem";
        add_icon_item: "addIconItem";
        add_check_item: "addCheckItem";
        add_icon_check_item: "addIconCheckItem";
        add_radio_check_item: "addRadioCheckItem";
        add_icon_radio_check_item: "addIconRadioCheckItem";
        add_multistate_item: "addMultistateItem";
        add_shortcut: "addShortcut";
        add_icon_shortcut: "addIconShortcut";
        add_check_shortcut: "addCheckShortcut";
        add_icon_check_shortcut: "addIconCheckShortcut";
        add_radio_check_shortcut: "addRadioCheckShortcut";
        add_icon_radio_check_shortcut: "addIconRadioCheckShortcut";
        add_submenu_item: "addSubmenuItem";
        add_submenu_node_item: "addSubmenuNodeItem";
        set_item_text: "setItemText";
        set_item_text_direction: "setItemTextDirection";
        set_item_language: "setItemLanguage";
        set_item_auto_translate_mode: "setItemAutoTranslateMode";
        set_item_icon: "setItemIcon";
        set_item_icon_max_width: "setItemIconMaxWidth";
        set_item_icon_modulate: "setItemIconModulate";
        set_item_checked: "setItemChecked";
        set_item_id: "setItemId";
        set_item_accelerator: "setItemAccelerator";
        set_item_metadata: "setItemMetadata";
        set_item_disabled: "setItemDisabled";
        set_item_submenu: "setItemSubmenu";
        set_item_submenu_node: "setItemSubmenuNode";
        set_item_as_separator: "setItemAsSeparator";
        set_item_as_checkable: "setItemAsCheckable";
        set_item_as_radio_checkable: "setItemAsRadioCheckable";
        set_item_tooltip: "setItemTooltip";
        set_item_shortcut: "setItemShortcut";
        set_item_indent: "setItemIndent";
        set_item_multistate: "setItemMultistate";
        set_item_multistate_max: "setItemMultistateMax";
        set_item_shortcut_disabled: "setItemShortcutDisabled";
        toggle_item_checked: "toggleItemChecked";
        toggle_item_multistate: "toggleItemMultistate";
        get_item_text: "getItemText";
        get_item_text_direction: "getItemTextDirection";
        get_item_language: "getItemLanguage";
        get_item_auto_translate_mode: "getItemAutoTranslateMode";
        get_item_icon: "getItemIcon";
        get_item_icon_max_width: "getItemIconMaxWidth";
        get_item_icon_modulate: "getItemIconModulate";
        is_item_checked: "isItemChecked";
        get_item_id: "getItemId";
        get_item_index: "getItemIndex";
        get_item_accelerator: "getItemAccelerator";
        get_item_metadata: "getItemMetadata";
        is_item_disabled: "isItemDisabled";
        get_item_submenu: "getItemSubmenu";
        get_item_submenu_node: "getItemSubmenuNode";
        is_item_separator: "isItemSeparator";
        is_item_checkable: "isItemCheckable";
        is_item_radio_checkable: "isItemRadioCheckable";
        is_item_shortcut_disabled: "isItemShortcutDisabled";
        get_item_tooltip: "getItemTooltip";
        get_item_shortcut: "getItemShortcut";
        get_item_indent: "getItemIndent";
        get_item_multistate_max: "getItemMultistateMax";
        get_item_multistate: "getItemMultistate";
        set_focused_item: "setFocusedItem";
        get_focused_item: "getFocusedItem";
        scroll_to_item: "scrollToItem";
        remove_item: "removeItem";
        add_separator: "addSeparator";
        is_system_menu: "isSystemMenu";
        hide_on_item_selection: "hideOnItemSelection";
        hide_on_checkable_item_selection: "hideOnCheckableItemSelection";
        hide_on_state_item_selection: "hideOnStateItemSelection";
        submenu_popup_delay: "submenuPopupDelay";
        allow_search: "allowSearch";
        system_menu_id: "systemMenuId";
        prefer_native_menu: "preferNativeMenu";
        item_count: "itemCount";
        id_pressed: "idPressed";
        id_focused: "idFocused";
        index_pressed: "indexPressed";
        menu_changed: "menuChanged";
    }
    /** A modal window used to display a list of options.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_popupmenu.html  
     */
    class PopupMenu<Map extends NodePathMap = any> extends Popup<Map> {
        constructor(identifier?: any)
        /** Checks the provided [param event] against the [PopupMenu]'s shortcuts and accelerators, and activates the first item with matching events. If [param for_global_only] is `true`, only shortcuts and accelerators with `global` set to `true` will be called.  
         *  Returns `true` if an item was successfully activated.  
         *      
         *  **Note:** Certain [Control]s, such as [MenuButton], will call this method automatically.  
         */
        activateItemByEvent(event: InputEvent, forGlobalOnly?: boolean /* = false */): boolean
        
        /** Returns `true` if the system native menu is supported and currently used by this [PopupMenu]. */
        isNativeMenu(): boolean
        
        /** Adds a new item with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** The provided [param id] is used only in [signal id_pressed] and [signal id_focused] signals. It's not related to the `index` arguments in e.g. [method set_item_checked].  
         */
        addItem(label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         */
        addIconItem(texture: Texture2D, label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new checkable item with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addCheckItem(label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new checkable item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addIconCheckItem(texture: Texture2D, label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new radio check button with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addRadioCheckItem(label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Same as [method add_icon_check_item], but uses a radio check button. */
        addIconRadioCheckItem(texture: Texture2D, label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new multistate item with text [param label].  
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. The default value is defined by [param default_state].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *    
         *      
         *  **Note:** Multistate items don't update their state automatically and must be done manually. See [method toggle_item_multistate], [method set_item_multistate] and [method get_item_multistate] for more info on how to control it.  
         */
        addMultistateItem(label: string, maxStates: int64, defaultState?: int64 /* = 0 */, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a [Shortcut].  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        addShortcut(shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */, allowEcho?: boolean /* = false */): void
        
        /** Adds a new item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        addIconShortcut(texture: Texture2D, shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */, allowEcho?: boolean /* = false */): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addCheckShortcut(shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addIconCheckShortcut(texture: Texture2D, shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Adds a new radio check button and assigns a [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addRadioCheckShortcut(shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Same as [method add_icon_check_shortcut], but uses a radio check button. */
        addIconRadioCheckShortcut(texture: Texture2D, shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. The [param submenu] argument must be the name of an existing [PopupMenu] that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         */
        addSubmenuItem(label: string, submenu: string, id?: int64 /* = -1 */): void
        
        /** Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.  
         *  [param submenu] must be either child of this [PopupMenu] or has no parent node (in which case it will be automatically added as a child). If the [param submenu] popup has another parent, this method will fail.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         */
        addSubmenuNodeItem(label: string, submenu: PopupMenu, id?: int64 /* = -1 */): void
        
        /** Sets the text of the item at the given [param index]. */
        setItemText(index: int64, text: string): void
        
        /** Sets item's text base writing direction. */
        setItemTextDirection(index: int64, direction: Control.TextDirection): void
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setItemLanguage(index: int64, language: string): void
        
        /** Sets the auto translate mode of the item at the given [param index].  
         *  Items use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [PopupMenu] itself.  
         */
        setItemAutoTranslateMode(index: int64, mode: Node.AutoTranslateMode): void
        
        /** Replaces the [Texture2D] icon of the item at the given [param index]. */
        setItemIcon(index: int64, icon: Texture2D): void
        
        /** Sets the maximum allowed width of the icon for the item at the given [param index]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        setItemIconMaxWidth(index: int64, width: int64): void
        
        /** Sets a modulating [Color] of the item's icon at the given [param index]. */
        setItemIconModulate(index: int64, modulate: Color): void
        
        /** Sets the checkstate status of the item at the given [param index]. */
        setItemChecked(index: int64, checked: boolean): void
        
        /** Sets the [param id] of the item at the given [param index].  
         *  The [param id] is used in [signal id_pressed] and [signal id_focused] signals.  
         */
        setItemId(index: int64, id: int64): void
        
        /** Sets the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. [param accel] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). */
        setItemAccelerator(index: int64, accel: Key): void
        
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_metadata], which provides a simple way of assigning context data to items. */
        setItemMetadata(index: int64, metadata: any): void
        
        /** Enables/disables the item at the given [param index]. When it is disabled, it can't be selected and its action can't be invoked. */
        setItemDisabled(index: int64, disabled: boolean): void
        
        /** Sets the submenu of the item at the given [param index]. The submenu is the name of a child [PopupMenu] node that would be shown when the item is clicked. */
        setItemSubmenu(index: int64, submenu: string): void
        
        /** Sets the submenu of the item at the given [param index]. The submenu is a [PopupMenu] node that would be shown when the item is clicked. It must either be a child of this [PopupMenu] or has no parent (in which case it will be automatically added as a child). If the [param submenu] popup has another parent, this method will fail. */
        setItemSubmenuNode(index: int64, submenu: PopupMenu): void
        
        /** Mark the item at the given [param index] as a separator, which means that it would be displayed as a line. If `false`, sets the type of the item to plain text. */
        setItemAsSeparator(index: int64, enable: boolean): void
        
        /** Sets whether the item at the given [param index] has a checkbox. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        setItemAsCheckable(index: int64, enable: boolean): void
        
        /** Sets the type of the item at the given [param index] to radio button. If `false`, sets the type of the item to plain text. */
        setItemAsRadioCheckable(index: int64, enable: boolean): void
        
        /** Sets the [String] tooltip of the item at the given [param index]. */
        setItemTooltip(index: int64, tooltip: string): void
        
        /** Sets a [Shortcut] for the item at the given [param index]. */
        setItemShortcut(index: int64, shortcut: Shortcut, global?: boolean /* = false */): void
        
        /** Sets the horizontal offset of the item at the given [param index]. */
        setItemIndent(index: int64, indent: int64): void
        
        /** Sets the state of a multistate item. See [method add_multistate_item] for details. */
        setItemMultistate(index: int64, state: int64): void
        
        /** Sets the max states of a multistate item. See [method add_multistate_item] for details. */
        setItemMultistateMax(index: int64, maxStates: int64): void
        
        /** Disables the [Shortcut] of the item at the given [param index]. */
        setItemShortcutDisabled(index: int64, disabled: boolean): void
        
        /** Toggles the check state of the item at the given [param index]. */
        toggleItemChecked(index: int64): void
        
        /** Cycle to the next state of a multistate item. See [method add_multistate_item] for details. */
        toggleItemMultistate(index: int64): void
        
        /** Returns the text of the item at the given [param index]. */
        getItemText(index: int64): string
        
        /** Returns item's text base writing direction. */
        getItemTextDirection(index: int64): Control.TextDirection
        
        /** Returns item's text language code. */
        getItemLanguage(index: int64): string
        
        /** Returns the auto translate mode of the item at the given [param index]. */
        getItemAutoTranslateMode(index: int64): Node.AutoTranslateMode
        
        /** Returns the icon of the item at the given [param index]. */
        getItemIcon(index: int64): null | Texture2D
        
        /** Returns the maximum allowed width of the icon for the item at the given [param index]. */
        getItemIconMaxWidth(index: int64): int64
        
        /** Returns a [Color] modulating the item's icon at the given [param index]. */
        getItemIconModulate(index: int64): Color
        
        /** Returns `true` if the item at the given [param index] is checked. */
        isItemChecked(index: int64): boolean
        
        /** Returns the ID of the item at the given [param index]. `id` can be manually assigned, while index can not. */
        getItemId(index: int64): int64
        
        /** Returns the index of the item containing the specified [param id]. Index is automatically assigned to each item by the engine and can not be set manually. */
        getItemIndex(id: int64): int64
        
        /** Returns the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). If no accelerator is defined for the specified [param index], [method get_item_accelerator] returns `0` (corresponding to [constant @GlobalScope.KEY_NONE]). */
        getItemAccelerator(index: int64): Key
        
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_metadata], which provides a simple way of assigning context data to items. */
        getItemMetadata(index: int64): any
        
        /** Returns `true` if the item at the given [param index] is disabled. When it is disabled it can't be selected, or its action invoked.  
         *  See [method set_item_disabled] for more info on how to disable an item.  
         */
        isItemDisabled(index: int64): boolean
        
        /** Returns the submenu name of the item at the given [param index]. See [method add_submenu_item] for more info on how to add a submenu. */
        getItemSubmenu(index: int64): string
        
        /** Returns the submenu of the item at the given [param index], or `null` if no submenu was added. See [method add_submenu_node_item] for more info on how to add a submenu. */
        getItemSubmenuNode(index: int64): null | PopupMenu
        
        /** Returns `true` if the item is a separator. If it is, it will be displayed as a line. See [method add_separator] for more info on how to add a separator. */
        isItemSeparator(index: int64): boolean
        
        /** Returns `true` if the item at the given [param index] is checkable in some way, i.e. if it has a checkbox or radio button.  
         *      
         *  **Note:** Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        isItemCheckable(index: int64): boolean
        
        /** Returns `true` if the item at the given [param index] has radio button-style checkability.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         */
        isItemRadioCheckable(index: int64): boolean
        
        /** Returns `true` if the specified item's shortcut is disabled. */
        isItemShortcutDisabled(index: int64): boolean
        
        /** Returns the tooltip associated with the item at the given [param index]. */
        getItemTooltip(index: int64): string
        
        /** Returns the [Shortcut] associated with the item at the given [param index]. */
        getItemShortcut(index: int64): null | Shortcut
        
        /** Returns the horizontal offset of the item at the given [param index]. */
        getItemIndent(index: int64): int64
        
        /** Returns the max states of the item at the given [param index]. */
        getItemMultistateMax(index: int64): int64
        
        /** Returns the state of the item at the given [param index]. */
        getItemMultistate(index: int64): int64
        
        /** Sets the currently focused item as the given [param index].  
         *  Passing `-1` as the index makes so that no item is focused.  
         */
        setFocusedItem(index: int64): void
        
        /** Returns the index of the currently focused item. Returns `-1` if no item is focused. */
        getFocusedItem(): int64
        
        /** Moves the scroll view to make the item at the given [param index] visible. */
        scrollToItem(index: int64): void
        
        /** Removes the item at the given [param index] from the menu.  
         *      
         *  **Note:** The indices of items after the removed item will be shifted by one.  
         */
        removeItem(index: int64): void
        
        /** Adds a separator between items. Separators also occupy an index, which you can set by using the [param id] parameter.  
         *  A [param label] can optionally be provided, which will appear at the center of the separator.  
         */
        addSeparator(label?: string /* = '' */, id?: int64 /* = -1 */): void
        
        /** Removes all items from the [PopupMenu]. If [param free_submenus] is `true`, the submenu nodes are automatically freed. */
        clear(freeSubmenus?: boolean /* = false */): void
        
        /** Returns `true` if the menu is bound to the special system menu. */
        isSystemMenu(): boolean
        
        /** If `true`, hides the [PopupMenu] when an item is selected. */
        get hideOnItemSelection(): boolean
        set hideOnItemSelection(value: boolean)
        
        /** If `true`, hides the [PopupMenu] when a checkbox or radio button is selected. */
        get hideOnCheckableItemSelection(): boolean
        set hideOnCheckableItemSelection(value: boolean)
        
        /** If `true`, hides the [PopupMenu] when a state item is selected. */
        get hideOnStateItemSelection(): boolean
        set hideOnStateItemSelection(value: boolean)
        
        /** Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item. */
        get submenuPopupDelay(): float64
        set submenuPopupDelay(value: float64)
        
        /** If `true`, allows navigating [PopupMenu] with letter keys. */
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        
        /** If set to one of the values of [enum NativeMenu.SystemMenus], this [PopupMenu] is bound to the special system menu. Only one [PopupMenu] can be bound to each special menu at a time. */
        get systemMenuId(): int64
        set systemMenuId(value: int64)
        
        /** If `true`, [MenuBar] will use native menu when supported.  
         *      
         *  **Note:** If [PopupMenu] is linked to [StatusIndicator], [MenuBar], or another [PopupMenu] item it can use native menu regardless of this property, use [method is_native_menu] to check it.  
         */
        get preferNativeMenu(): boolean
        set preferNativeMenu(value: boolean)
        
        /** The number of items currently in the list. */
        get itemCount(): int64
        set itemCount(value: int64)
        
        /** Emitted when an item of some [param id] is pressed or its accelerator is activated.  
         *      
         *  **Note:** If [param id] is negative (either explicitly or due to overflow), this will return the corresponding index instead.  
         */
        readonly idPressed: Signal<(id: int64) => void>
        
        /** Emitted when the user navigated to an item of some [param id] using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input action. */
        readonly idFocused: Signal<(id: int64) => void>
        
        /** Emitted when an item of some [param index] is pressed or its accelerator is activated. */
        readonly indexPressed: Signal<(index: int64) => void>
        
        /** Emitted when any item is added, modified or removed. */
        readonly menuChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPopupMenu;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPopupMenu;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPopupPanel extends __RPCMapPopup {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPopupPanel extends __NameMapPopup {
    }
    /** A popup with a panel background.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_popuppanel.html  
     */
    class PopupPanel<Map extends NodePathMap = any> extends Popup<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPopupPanel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPopupPanel;
    }
    namespace PortableCompressedTexture2D {
        enum CompressionMode {
            CompressionModeLossless = 0,
            CompressionModeLossy = 1,
            CompressionModeBasisUniversal = 2,
            CompressionModeS3Tc = 3,
            CompressionModeEtc2 = 4,
            CompressionModeBptc = 5,
            CompressionModeAstc = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPortableCompressedTexture2D extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPortableCompressedTexture2D extends __NameMapTexture2D {
        create_from_image: "createFromImage";
        get_format: "getFormat";
        get_compression_mode: "getCompressionMode";
        set_basisu_compressor_params: "setBasisuCompressorParams";
        set_keep_all_compressed_buffers: "setKeepAllCompressedBuffers";
        is_keeping_all_compressed_buffers: "isKeepingAllCompressedBuffers";
        size_override: "sizeOverride";
        keep_compressed_buffer: "keepCompressedBuffer";
    }
    /** Provides a compressed texture for disk and/or VRAM in a way that is portable.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_portablecompressedtexture2d.html  
     */
    class PortableCompressedTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** Initializes the compressed texture from a base image. The compression mode must be provided.  
         *  [param normal_map] is recommended to ensure optimum quality if this image will be used as a normal map.  
         *  If lossy compression is requested, the quality setting can optionally be provided. This maps to Lossy WebP compression quality.  
         */
        createFromImage(image: Image, compressionMode: PortableCompressedTexture2D.CompressionMode, normalMap?: boolean /* = false */, lossyQuality?: float64 /* = 0.8 */): void
        
        /** Return the image format used (valid after initialized). */
        getFormat(): Image.Format
        
        /** Return the compression mode used (valid after initialized). */
        getCompressionMode(): PortableCompressedTexture2D.CompressionMode
        
        /** Sets the compressor parameters for Basis Universal compression. See also the settings in [ResourceImporterTexture].  
         *      
         *  **Note:** This must be set before [method create_from_image] to take effect.  
         */
        setBasisuCompressorParams(uastcLevel: int64, rdoQualityLoss: float64): void
        
        /** Overrides the flag globally for all textures of this type. This is used primarily by the editor. */
        static setKeepAllCompressedBuffers(keep: boolean): void
        
        /** Return whether the flag is overridden for all textures of this type. */
        static isKeepingAllCompressedBuffers(): boolean
        get _data(): PackedByteArray
        set _data(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** Allow overriding the texture size (for 2D only). */
        get sizeOverride(): Vector2
        set sizeOverride(value: Vector2)
        
        /** When running on the editor, this class will keep the source compressed data in memory. Otherwise, the source compressed data is lost after loading and the resource can't be re saved.  
         *  This flag allows to keep the compressed data in memory if you intend it to persist after loading.  
         *      
         *  **Note:** This must be set before [method create_from_image] to take effect.  
         */
        get keepCompressedBuffer(): boolean
        set keepCompressedBuffer(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPortableCompressedTexture2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPortableCompressedTexture2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPrimitiveMesh extends __RPCMapMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPrimitiveMesh extends __NameMapMesh {
        _create_mesh_array: "_createMeshArray";
        get_mesh_arrays: "getMeshArrays";
        request_update: "requestUpdate";
        custom_aabb: "customAabb";
        flip_faces: "flipFaces";
        add_uv2: "addUV2";
        uv2_padding: "uV2Padding";
    }
    /** Base class for all primitive meshes. Handles applying a [Material] to a primitive mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_primitivemesh.html  
     */
    class PrimitiveMesh extends Mesh {
        constructor(identifier?: any)
        /** Override this method to customize how this primitive mesh should be generated. Should return an [Array] where each element is another Array of values required for the mesh (see the [enum Mesh.ArrayType] constants). */
        /* gdvirtual */ _createMeshArray(): GArray
        
        /** Returns the mesh arrays used to make up the surface of this primitive mesh.  
         *  **Example:** Pass the result to [method ArrayMesh.add_surface_from_arrays] to create a new surface:  
         *    
         */
        getMeshArrays(): GArray
        
        /** Request an update of this primitive mesh based on its properties. */
        requestUpdate(): void
        
        /** The current [Material] of the primitive mesh. */
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
        
        /** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        
        /** If `true`, the order of the vertices in each triangle is reversed, resulting in the backside of the mesh being drawn.  
         *  This gives the same result as using [constant BaseMaterial3D.CULL_FRONT] in [member BaseMaterial3D.cull_mode].  
         */
        get flipFaces(): boolean
        set flipFaces(value: boolean)
        
        /** If set, generates UV2 UV coordinates applying a padding using the [member uv2_padding] setting. UV2 is needed for lightmapping. */
        get addUV2(): boolean
        set addUV2(value: boolean)
        
        /** If [member add_uv2] is set, specifies the padding in pixels applied along seams of the mesh. Lower padding values allow making better use of the lightmap texture (resulting in higher texel density), but may introduce visible lightmap bleeding along edges.  
         *  If the size of the lightmap texture can't be determined when generating the mesh, UV2 is calculated assuming a texture size of 1024x1024.  
         */
        get uV2Padding(): float64
        set uV2Padding(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPrimitiveMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPrimitiveMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPrismMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPrismMesh extends __NameMapPrimitiveMesh {
        left_to_right: "leftToRight";
        subdivide_width: "subdivideWidth";
        subdivide_height: "subdivideHeight";
        subdivide_depth: "subdivideDepth";
    }
    /** Class representing a prism-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_prismmesh.html  
     */
    class PrismMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Displacement of the upper edge along the X axis. 0.0 positions edge straight above the bottom-left edge. */
        get leftToRight(): float64
        set leftToRight(value: float64)
        
        /** Size of the prism. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Number of added edge loops along the X axis. */
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        
        /** Number of added edge loops along the Y axis. */
        get subdivideHeight(): int64
        set subdivideHeight(value: int64)
        
        /** Number of added edge loops along the Z axis. */
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPrismMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPrismMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapProceduralSkyMaterial extends __RPCMapMaterial {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapProceduralSkyMaterial extends __NameMapMaterial {
        sky_top_color: "skyTopColor";
        sky_horizon_color: "skyHorizonColor";
        sky_curve: "skyCurve";
        sky_energy_multiplier: "skyEnergyMultiplier";
        sky_cover: "skyCover";
        sky_cover_modulate: "skyCoverModulate";
        ground_bottom_color: "groundBottomColor";
        ground_horizon_color: "groundHorizonColor";
        ground_curve: "groundCurve";
        ground_energy_multiplier: "groundEnergyMultiplier";
        sun_angle_max: "sunAngleMax";
        sun_curve: "sunCurve";
        use_debanding: "useDebanding";
        energy_multiplier: "energyMultiplier";
    }
    /** A material that defines a simple sky for a [Sky] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_proceduralskymaterial.html  
     */
    class ProceduralSkyMaterial extends Material {
        constructor(identifier?: any)
        /** Color of the sky at the top. Blends with [member sky_horizon_color]. */
        get skyTopColor(): Color
        set skyTopColor(value: Color)
        
        /** Color of the sky at the horizon. Blends with [member sky_top_color]. */
        get skyHorizonColor(): Color
        set skyHorizonColor(value: Color)
        
        /** How quickly the [member sky_horizon_color] fades into the [member sky_top_color]. */
        get skyCurve(): float64
        set skyCurve(value: float64)
        
        /** Multiplier for sky color. A higher value will make the sky brighter. */
        get skyEnergyMultiplier(): float64
        set skyEnergyMultiplier(value: float64)
        
        /** The sky cover texture to use. This texture must use an equirectangular projection (similar to [PanoramaSkyMaterial]). The texture's colors will be  *added*  to the existing sky color, and will be multiplied by [member sky_energy_multiplier] and [member sky_cover_modulate]. This is mainly suited to displaying stars at night, but it can also be used to display clouds at day or night (with a non-physically-accurate look). */
        get skyCover(): null | Texture2D
        set skyCover(value: null | Texture2D)
        
        /** The tint to apply to the [member sky_cover] texture. This can be used to change the sky cover's colors or opacity independently of the sky energy, which is useful for day/night or weather transitions. Only effective if a texture is defined in [member sky_cover]. */
        get skyCoverModulate(): Color
        set skyCoverModulate(value: Color)
        
        /** Color of the ground at the bottom. Blends with [member ground_horizon_color]. */
        get groundBottomColor(): Color
        set groundBottomColor(value: Color)
        
        /** Color of the ground at the horizon. Blends with [member ground_bottom_color]. */
        get groundHorizonColor(): Color
        set groundHorizonColor(value: Color)
        
        /** How quickly the [member ground_horizon_color] fades into the [member ground_bottom_color]. */
        get groundCurve(): float64
        set groundCurve(value: float64)
        
        /** Multiplier for ground color. A higher value will make the ground brighter. */
        get groundEnergyMultiplier(): float64
        set groundEnergyMultiplier(value: float64)
        
        /** Distance from center of sun where it fades out completely. */
        get sunAngleMax(): float64
        set sunAngleMax(value: float64)
        
        /** How quickly the sun fades away between the edge of the sun disk and [member sun_angle_max]. */
        get sunCurve(): float64
        set sunCurve(value: float64)
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapProceduralSkyMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapProceduralSkyMaterial;
    }
    namespace ProgressBar {
        enum FillMode {
            FillBeginToEnd = 0,
            FillEndToBegin = 1,
            FillTopToBottom = 2,
            FillBottomToTop = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapProgressBar extends __RPCMapRange {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapProgressBar extends __NameMapRange {
        fill_mode: "fillMode";
        show_percentage: "showPercentage";
        editor_preview_indeterminate: "editorPreviewIndeterminate";
    }
    /** A control used for visual representation of a percentage.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_progressbar.html  
     */
    class ProgressBar<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** The fill direction. See [enum FillMode] for possible values. */
        get fillMode(): int64
        set fillMode(value: int64)
        
        /** If `true`, the fill percentage is displayed on the bar. */
        get showPercentage(): boolean
        set showPercentage(value: boolean)
        
        /** When set to `true`, the progress bar indicates that something is happening with an animation, but does not show the fill percentage or value. */
        get indeterminate(): boolean
        set indeterminate(value: boolean)
        
        /** If `false`, the [member indeterminate] animation will be paused in the editor. */
        get editorPreviewIndeterminate(): boolean
        set editorPreviewIndeterminate(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapProgressBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapProgressBar;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapPropertyTweener extends __RPCMapTweener {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapPropertyTweener extends __NameMapTweener {
        from_current: "fromCurrent";
        as_relative: "asRelative";
        set_trans: "setTrans";
        set_ease: "setEase";
        set_custom_interpolator: "setCustomInterpolator";
        set_delay: "setDelay";
    }
    /** Interpolates an [Object]'s property over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_propertytweener.html  
     */
    class PropertyTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets a custom initial value to the [PropertyTweener].  
         *  **Example:** Move the node from position `(100, 100)` to `(200, 100)`.  
         *    
         */
        from(value: any): null | PropertyTweener
        
        /** Makes the [PropertyTweener] use the current property value (i.e. at the time of creating this [PropertyTweener]) as a starting point. This is equivalent of using [method from] with the current value. These two calls will do the same:  
         *    
         */
        fromCurrent(): null | PropertyTweener
        
        /** When called, the final value will be used as a relative value instead.  
         *  **Example:** Move the node by `100` pixels to the right.  
         *    
         */
        asRelative(): null | PropertyTweener
        
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        setTrans(trans: Tween.TransitionType): null | PropertyTweener
        
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        setEase(ease: Tween.EaseType): null | PropertyTweener
        
        /** Allows interpolating the value with a custom easing function. The provided [param interpolator_method] will be called with a value ranging from `0.0` to `1.0` and is expected to return a value within the same range (values outside the range can be used for overshoot). The return value of the method is then used for interpolation between initial and final value. Note that the parameter passed to the method is still subject to the tweener's own easing.  
         *    
         */
        setCustomInterpolator(interpolatorMethod: Callable): null | PropertyTweener
        
        /** Sets the time in seconds after which the [PropertyTweener] will start interpolating. By default there's no delay. */
        setDelay(delay: float64): null | PropertyTweener
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapPropertyTweener;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapPropertyTweener;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapQuadMesh extends __RPCMapPlaneMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapQuadMesh extends __NameMapPlaneMesh {
    }
    /** Class representing a square mesh facing the camera.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_quadmesh.html  
     */
    class QuadMesh extends PlaneMesh {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapQuadMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapQuadMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapQuadOccluder3D extends __RPCMapOccluder3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapQuadOccluder3D extends __NameMapOccluder3D {
    }
    /** Flat plane shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_quadoccluder3d.html  
     */
    class QuadOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** The quad's size in 3D units. */
        get size(): Vector2
        set size(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapQuadOccluder3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapQuadOccluder3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDAttachmentFormat extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDAttachmentFormat extends __NameMapRefCounted {
        usage_flags: "usageFlags";
    }
    /** Attachment format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdattachmentformat.html  
     */
    class RDAttachmentFormat extends RefCounted {
        constructor(identifier?: any)
        /** The attachment's data format. */
        get format(): int64
        set format(value: int64)
        
        /** The number of samples used when sampling the attachment. */
        get samples(): int64
        set samples(value: int64)
        
        /** The attachment's usage flags, which determine what can be done with it. */
        get usageFlags(): int64
        set usageFlags(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDAttachmentFormat;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDAttachmentFormat;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDFramebufferPass extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDFramebufferPass extends __NameMapRefCounted {
        color_attachments: "colorAttachments";
        input_attachments: "inputAttachments";
        resolve_attachments: "resolveAttachments";
        preserve_attachments: "preserveAttachments";
        depth_attachment: "depthAttachment";
    }
    /** Framebuffer pass attachment description (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdframebufferpass.html  
     */
    class RDFramebufferPass extends RefCounted {
        /** Attachment is unused. */
        static readonly ATTACHMENT_UNUSED = -1
        constructor(identifier?: any)
        
        /** Color attachments in order starting from 0. If this attachment is not used by the shader, pass ATTACHMENT_UNUSED to skip. */
        get colorAttachments(): PackedInt32Array
        set colorAttachments(value: PackedInt32Array | int32[])
        
        /** Used for multipass framebuffers (more than one render pass). Converts an attachment to an input. Make sure to also supply it properly in the [RDUniform] for the uniform set. */
        get inputAttachments(): PackedInt32Array
        set inputAttachments(value: PackedInt32Array | int32[])
        
        /** If the color attachments are multisampled, non-multisampled resolve attachments can be provided. */
        get resolveAttachments(): PackedInt32Array
        set resolveAttachments(value: PackedInt32Array | int32[])
        
        /** Attachments to preserve in this pass (otherwise they are erased). */
        get preserveAttachments(): PackedInt32Array
        set preserveAttachments(value: PackedInt32Array | int32[])
        
        /** Depth attachment. ATTACHMENT_UNUSED should be used if no depth buffer is required for this pass. */
        get depthAttachment(): int64
        set depthAttachment(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDFramebufferPass;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDFramebufferPass;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDPipelineColorBlendState extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDPipelineColorBlendState extends __NameMapRefCounted {
        enable_logic_op: "enableLogicOp";
        logic_op: "logicOp";
        blend_constant: "blendConstant";
    }
    /** Pipeline color blend state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdpipelinecolorblendstate.html  
     */
    class RDPipelineColorBlendState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, performs the logic operation defined in [member logic_op]. */
        get enableLogicOp(): boolean
        set enableLogicOp(value: boolean)
        
        /** The logic operation to perform for blending. Only effective if [member enable_logic_op] is `true`. */
        get logicOp(): int64
        set logicOp(value: int64)
        
        /** The constant color to blend with. See also [method RenderingDevice.draw_list_set_blend_constants]. */
        get blendConstant(): Color
        set blendConstant(value: Color)
        
        /** The attachments that are blended together. */
        get attachments(): GArray<RDPipelineColorBlendStateAttachment>
        set attachments(value: GArray<RDPipelineColorBlendStateAttachment>)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDPipelineColorBlendState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDPipelineColorBlendState;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDPipelineColorBlendStateAttachment extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDPipelineColorBlendStateAttachment extends __NameMapRefCounted {
        set_as_mix: "setAsMix";
        enable_blend: "enableBlend";
        src_color_blend_factor: "srcColorBlendFactor";
        dst_color_blend_factor: "dstColorBlendFactor";
        color_blend_op: "colorBlendOp";
        src_alpha_blend_factor: "srcAlphaBlendFactor";
        dst_alpha_blend_factor: "dstAlphaBlendFactor";
        alpha_blend_op: "alphaBlendOp";
        write_r: "writeR";
        write_g: "writeG";
        write_b: "writeB";
        write_a: "writeA";
    }
    /** Pipeline color blend state attachment (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdpipelinecolorblendstateattachment.html  
     */
    class RDPipelineColorBlendStateAttachment extends RefCounted {
        constructor(identifier?: any)
        /** Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets [member enable_blend] to `true`, [member src_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA], [member dst_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA], [member src_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA] and [member dst_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA]. */
        setAsMix(): void
        
        /** If `true`, performs blending between the source and destination according to the factors defined in [member src_color_blend_factor], [member dst_color_blend_factor], [member src_alpha_blend_factor] and [member dst_alpha_blend_factor]. The blend modes [member color_blend_op] and [member alpha_blend_op] are also taken into account, with [member write_r], [member write_g], [member write_b] and [member write_a] controlling the output. */
        get enableBlend(): boolean
        set enableBlend(value: boolean)
        
        /** Controls how the blend factor for the color channels is determined based on the source's fragments. */
        get srcColorBlendFactor(): int64
        set srcColorBlendFactor(value: int64)
        
        /** Controls how the blend factor for the color channels is determined based on the destination's fragments. */
        get dstColorBlendFactor(): int64
        set dstColorBlendFactor(value: int64)
        
        /** The blend mode to use for the red/green/blue color channels. */
        get colorBlendOp(): int64
        set colorBlendOp(value: int64)
        
        /** Controls how the blend factor for the alpha channel is determined based on the source's fragments. */
        get srcAlphaBlendFactor(): int64
        set srcAlphaBlendFactor(value: int64)
        
        /** Controls how the blend factor for the alpha channel is determined based on the destination's fragments. */
        get dstAlphaBlendFactor(): int64
        set dstAlphaBlendFactor(value: int64)
        
        /** The blend mode to use for the alpha channel. */
        get alphaBlendOp(): int64
        set alphaBlendOp(value: int64)
        
        /** If `true`, writes the new red color channel to the final result. */
        get writeR(): boolean
        set writeR(value: boolean)
        
        /** If `true`, writes the new green color channel to the final result. */
        get writeG(): boolean
        set writeG(value: boolean)
        
        /** If `true`, writes the new blue color channel to the final result. */
        get writeB(): boolean
        set writeB(value: boolean)
        
        /** If `true`, writes the new alpha channel to the final result. */
        get writeA(): boolean
        set writeA(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDPipelineColorBlendStateAttachment;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDPipelineColorBlendStateAttachment;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDPipelineDepthStencilState extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDPipelineDepthStencilState extends __NameMapRefCounted {
        enable_depth_test: "enableDepthTest";
        enable_depth_write: "enableDepthWrite";
        depth_compare_operator: "depthCompareOperator";
        enable_depth_range: "enableDepthRange";
        depth_range_min: "depthRangeMin";
        depth_range_max: "depthRangeMax";
        enable_stencil: "enableStencil";
        front_op_fail: "frontOpFail";
        front_op_pass: "frontOpPass";
        front_op_depth_fail: "frontOpDepthFail";
        front_op_compare: "frontOpCompare";
        front_op_compare_mask: "frontOpCompareMask";
        front_op_write_mask: "frontOpWriteMask";
        front_op_reference: "frontOpReference";
        back_op_fail: "backOpFail";
        back_op_pass: "backOpPass";
        back_op_depth_fail: "backOpDepthFail";
        back_op_compare: "backOpCompare";
        back_op_compare_mask: "backOpCompareMask";
        back_op_write_mask: "backOpWriteMask";
        back_op_reference: "backOpReference";
    }
    /** Pipeline depth/stencil state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdpipelinedepthstencilstate.html  
     */
    class RDPipelineDepthStencilState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If `false`, objects will appear in the order they were drawn (like in Godot's 2D renderer). */
        get enableDepthTest(): boolean
        set enableDepthTest(value: boolean)
        
        /** If `true`, writes to the depth buffer whenever the depth test returns `true`. Only works when enable_depth_test is also `true`. */
        get enableDepthWrite(): boolean
        set enableDepthWrite(value: boolean)
        
        /** The method used for comparing the previous and current depth values. */
        get depthCompareOperator(): int64
        set depthCompareOperator(value: int64)
        
        /** If `true`, each depth value will be tested to see if it is between [member depth_range_min] and [member depth_range_max]. If it is outside of these values, it is discarded. */
        get enableDepthRange(): boolean
        set enableDepthRange(value: boolean)
        
        /** The minimum depth that returns `true` for [member enable_depth_range]. */
        get depthRangeMin(): float64
        set depthRangeMin(value: float64)
        
        /** The maximum depth that returns `true` for [member enable_depth_range]. */
        get depthRangeMax(): float64
        set depthRangeMax(value: float64)
        
        /** If `true`, enables stencil testing. There are separate stencil buffers for front-facing triangles and back-facing triangles. See properties that begin with "front_op" and properties with "back_op" for each. */
        get enableStencil(): boolean
        set enableStencil(value: boolean)
        
        /** The operation to perform on the stencil buffer for front pixels that fail the stencil test. */
        get frontOpFail(): int64
        set frontOpFail(value: int64)
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test. */
        get frontOpPass(): int64
        set frontOpPass(value: int64)
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test but fail the depth test. */
        get frontOpDepthFail(): int64
        set frontOpDepthFail(value: int64)
        
        /** The method used for comparing the previous front stencil value and [member front_op_reference]. */
        get frontOpCompare(): int64
        set frontOpCompare(value: int64)
        
        /** Selects which bits from the front stencil value will be compared. */
        get frontOpCompareMask(): int64
        set frontOpCompareMask(value: int64)
        
        /** Selects which bits from the front stencil value will be changed. */
        get frontOpWriteMask(): int64
        set frontOpWriteMask(value: int64)
        
        /** The value the previous front stencil value will be compared to. */
        get frontOpReference(): int64
        set frontOpReference(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that fail the stencil test. */
        get backOpFail(): int64
        set backOpFail(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test. */
        get backOpPass(): int64
        set backOpPass(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test but fail the depth test. */
        get backOpDepthFail(): int64
        set backOpDepthFail(value: int64)
        
        /** The method used for comparing the previous back stencil value and [member back_op_reference]. */
        get backOpCompare(): int64
        set backOpCompare(value: int64)
        
        /** Selects which bits from the back stencil value will be compared. */
        get backOpCompareMask(): int64
        set backOpCompareMask(value: int64)
        
        /** Selects which bits from the back stencil value will be changed. */
        get backOpWriteMask(): int64
        set backOpWriteMask(value: int64)
        
        /** The value the previous back stencil value will be compared to. */
        get backOpReference(): int64
        set backOpReference(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDPipelineDepthStencilState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDPipelineDepthStencilState;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDPipelineMultisampleState extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDPipelineMultisampleState extends __NameMapRefCounted {
        sample_count: "sampleCount";
        enable_sample_shading: "enableSampleShading";
        min_sample_shading: "minSampleShading";
        enable_alpha_to_coverage: "enableAlphaToCoverage";
        enable_alpha_to_one: "enableAlphaToOne";
        sample_masks: "sampleMasks";
    }
    /** Pipeline multisample state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdpipelinemultisamplestate.html  
     */
    class RDPipelineMultisampleState extends RefCounted {
        constructor(identifier?: any)
        /** The number of MSAA samples (or SSAA samples if [member enable_sample_shading] is `true`) to perform. Higher values result in better antialiasing, at the cost of performance. */
        get sampleCount(): int64
        set sampleCount(value: int64)
        
        /** If `true`, enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also [member min_sample_shading]. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading]per-sample shading Vulkan documentation[/url] for more details. */
        get enableSampleShading(): boolean
        set enableSampleShading(value: boolean)
        
        /** The multiplier of [member sample_count] that determines how many samples are performed for each fragment. Must be between `0.0` and `1.0` (inclusive). Only effective if [member enable_sample_shading] is `true`. If [member min_sample_shading] is `1.0`, fragment invocation must only read from the coverage index sample. Tile image access must not be used if [member enable_sample_shading] is  *not*  `1.0`. */
        get minSampleShading(): float64
        set minSampleShading(value: float64)
        
        /** If `true`, alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing. */
        get enableAlphaToCoverage(): boolean
        set enableAlphaToCoverage(value: boolean)
        
        /** If `true`, alpha is forced to either `0.0` or `1.0`. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [member enable_alpha_to_coverage] is `true`. */
        get enableAlphaToOne(): boolean
        set enableAlphaToOne(value: boolean)
        
        /** The sample mask array. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask]sample mask Vulkan documentation[/url] for more details. */
        get sampleMasks(): GArray<int64>
        set sampleMasks(value: GArray<int64>)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDPipelineMultisampleState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDPipelineMultisampleState;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDPipelineRasterizationState extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDPipelineRasterizationState extends __NameMapRefCounted {
        enable_depth_clamp: "enableDepthClamp";
        discard_primitives: "discardPrimitives";
        cull_mode: "cullMode";
        front_face: "frontFace";
        depth_bias_enabled: "depthBiasEnabled";
        depth_bias_constant_factor: "depthBiasConstantFactor";
        depth_bias_clamp: "depthBiasClamp";
        depth_bias_slope_factor: "depthBiasSlopeFactor";
        line_width: "lineWidth";
        patch_control_points: "patchControlPoints";
    }
    /** Pipeline rasterization state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdpipelinerasterizationstate.html  
     */
    class RDPipelineRasterizationState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, clamps depth values according to the minimum and maximum depth of the associated viewport. */
        get enableDepthClamp(): boolean
        set enableDepthClamp(value: boolean)
        
        /** If `true`, primitives are discarded immediately before the rasterization stage. */
        get discardPrimitives(): boolean
        set discardPrimitives(value: boolean)
        
        /** If `true`, performs wireframe rendering for triangles instead of flat or textured rendering. */
        get wireframe(): boolean
        set wireframe(value: boolean)
        
        /** The cull mode to use when drawing polygons, which determines whether front faces or backfaces are hidden. */
        get cullMode(): int64
        set cullMode(value: int64)
        
        /** The winding order to use to determine which face of a triangle is considered its front face. */
        get frontFace(): int64
        set frontFace(value: int64)
        
        /** If `true`, each generated depth value will by offset by some amount. The specific amount is generated per polygon based on the values of [member depth_bias_slope_factor] and [member depth_bias_constant_factor]. */
        get depthBiasEnabled(): boolean
        set depthBiasEnabled(value: boolean)
        
        /** A constant offset added to each depth value. Applied after [member depth_bias_slope_factor]. */
        get depthBiasConstantFactor(): float64
        set depthBiasConstantFactor(value: float64)
        
        /** A limit for how much each depth value can be offset. If negative, it serves as a minimum value, but if positive, it serves as a maximum value. */
        get depthBiasClamp(): float64
        set depthBiasClamp(value: float64)
        
        /** A constant scale applied to the slope of each polygons' depth. Applied before [member depth_bias_constant_factor]. */
        get depthBiasSlopeFactor(): float64
        set depthBiasSlopeFactor(value: float64)
        
        /** The line width to use when drawing lines (in pixels). Thick lines may not be supported on all hardware. */
        get lineWidth(): float64
        set lineWidth(value: float64)
        
        /** The number of control points to use when drawing a patch with tessellation enabled. Higher values result in higher quality at the cost of performance. */
        get patchControlPoints(): int64
        set patchControlPoints(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDPipelineRasterizationState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDPipelineRasterizationState;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDPipelineSpecializationConstant extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDPipelineSpecializationConstant extends __NameMapRefCounted {
        constant_id: "constantId";
    }
    /** Pipeline specialization constant (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdpipelinespecializationconstant.html  
     */
    class RDPipelineSpecializationConstant extends RefCounted {
        constructor(identifier?: any)
        /** The specialization constant's value. Only [bool], [int] and [float] types are valid for specialization constants. */
        get value(): any
        set value(value: any)
        
        /** The identifier of the specialization constant. This is a value starting from `0` and that increments for every different specialization constant for a given shader. */
        get constantId(): int64
        set constantId(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDPipelineSpecializationConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDPipelineSpecializationConstant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDSamplerState extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDSamplerState extends __NameMapRefCounted {
        mag_filter: "magFilter";
        min_filter: "minFilter";
        mip_filter: "mipFilter";
        repeat_u: "repeatU";
        repeat_v: "repeatV";
        repeat_w: "repeatW";
        lod_bias: "lodBias";
        use_anisotropy: "useAnisotropy";
        anisotropy_max: "anisotropyMax";
        enable_compare: "enableCompare";
        compare_op: "compareOp";
        min_lod: "minLod";
        max_lod: "maxLod";
        border_color: "borderColor";
        unnormalized_uvw: "unnormalizedUvw";
    }
    /** Sampler state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdsamplerstate.html  
     */
    class RDSamplerState extends RefCounted {
        constructor(identifier?: any)
        /** The sampler's magnification filter. It is the filtering method used when sampling texels that appear bigger than on-screen pixels. */
        get magFilter(): int64
        set magFilter(value: int64)
        
        /** The sampler's minification filter. It is the filtering method used when sampling texels that appear smaller than on-screen pixels. */
        get minFilter(): int64
        set minFilter(value: int64)
        
        /** The filtering method to use for mipmaps. */
        get mipFilter(): int64
        set mipFilter(value: int64)
        
        /** The repeat mode to use along the U axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        get repeatU(): int64
        set repeatU(value: int64)
        
        /** The repeat mode to use along the V axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        get repeatV(): int64
        set repeatV(value: int64)
        
        /** The repeat mode to use along the W axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. Only effective for 3D samplers. */
        get repeatW(): int64
        set repeatW(value: int64)
        
        /** The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between `-0.5` and `0.0`. Only effective if the sampler has mipmaps available. */
        get lodBias(): float64
        set lodBias(value: float64)
        
        /** If `true`, perform anisotropic sampling. See [member anisotropy_max]. */
        get useAnisotropy(): boolean
        set useAnisotropy(value: boolean)
        
        /** Maximum anisotropy that can be used when sampling. Only effective if [member use_anisotropy] is `true`. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to `16.0`.  
         *  If [member anisotropy_max] is `1.0`, forcibly disables anisotropy even if [member use_anisotropy] is `true`.  
         */
        get anisotropyMax(): float64
        set anisotropyMax(value: float64)
        
        /** If `true`, returned values will be based on the comparison operation defined in [member compare_op]. This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler. */
        get enableCompare(): boolean
        set enableCompare(value: boolean)
        
        /** The compare operation to use. Only effective if [member enable_compare] is `true`. */
        get compareOp(): int64
        set compareOp(value: int64)
        
        /** The minimum mipmap LOD bias to display (highest resolution). Only effective if the sampler has mipmaps available. */
        get minLod(): float64
        set minLod(value: float64)
        
        /** The maximum mipmap LOD bias to display (lowest resolution). Only effective if the sampler has mipmaps available. */
        get maxLod(): float64
        set maxLod(value: float64)
        
        /** The border color that will be returned when sampling outside the sampler's bounds and the [member repeat_u], [member repeat_v] or [member repeat_w] modes have repeating disabled. */
        get borderColor(): int64
        set borderColor(value: int64)
        
        /** If `true`, the texture will be sampled with coordinates ranging from 0 to the texture's resolution. Otherwise, the coordinates will be normalized and range from 0 to 1. */
        get unnormalizedUvw(): boolean
        set unnormalizedUvw(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDSamplerState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDSamplerState;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDShaderFile extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDShaderFile extends __NameMapResource {
        set_bytecode: "setBytecode";
        get_spirv: "getSpirV";
        get_version_list: "getVersionList";
        base_error: "baseError";
    }
    /** Compiled shader file in SPIR-V form (used by [RenderingDevice]). Not to be confused with Godot's own [Shader].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdshaderfile.html  
     */
    class RDShaderFile extends Resource {
        constructor(identifier?: any)
        /** Sets the SPIR-V [param bytecode] that will be compiled for the specified [param version]. */
        setBytecode(bytecode: RDShaderSpirV, version?: StringName /* = '' */): void
        
        /** Returns the SPIR-V intermediate representation for the specified shader [param version]. */
        getSpirV(version?: StringName /* = '' */): null | RDShaderSpirV
        
        /** Returns the list of compiled versions for this shader. */
        getVersionList(): GArray<StringName>
        get _versions(): GDictionary
        set _versions(value: GDictionary)
        
        /** The base compilation error message, which indicates errors not related to a specific shader stage if non-empty. If empty, shader compilation is not necessarily successful (check [RDShaderSPIRV]'s error message members). */
        get baseError(): string
        set baseError(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDShaderFile;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDShaderFile;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDShaderSpirV extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDShaderSpirV extends __NameMapResource {
        set_stage_bytecode: "setStageBytecode";
        get_stage_bytecode: "getStageBytecode";
        set_stage_compile_error: "setStageCompileError";
        get_stage_compile_error: "getStageCompileError";
        bytecode_vertex: "bytecodeVertex";
        bytecode_fragment: "bytecodeFragment";
        bytecode_tesselation_control: "bytecodeTesselationControl";
        bytecode_tesselation_evaluation: "bytecodeTesselationEvaluation";
        bytecode_compute: "bytecodeCompute";
        compile_error_vertex: "compileErrorVertex";
        compile_error_fragment: "compileErrorFragment";
        compile_error_tesselation_control: "compileErrorTesselationControl";
        compile_error_tesselation_evaluation: "compileErrorTesselationEvaluation";
        compile_error_compute: "compileErrorCompute";
    }
    class RDShaderSpirV extends Resource {
        constructor(identifier?: any)
        setStageBytecode(stage: RenderingDevice.ShaderStage, bytecode: PackedByteArray | byte[] | ArrayBuffer): void
        getStageBytecode(stage: RenderingDevice.ShaderStage): PackedByteArray
        setStageCompileError(stage: RenderingDevice.ShaderStage, compileError: string): void
        getStageCompileError(stage: RenderingDevice.ShaderStage): string
        get bytecodeVertex(): PackedByteArray
        set bytecodeVertex(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeFragment(): PackedByteArray
        set bytecodeFragment(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeTesselationControl(): PackedByteArray
        set bytecodeTesselationControl(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeTesselationEvaluation(): PackedByteArray
        set bytecodeTesselationEvaluation(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeCompute(): PackedByteArray
        set bytecodeCompute(value: PackedByteArray | byte[] | ArrayBuffer)
        get compileErrorVertex(): string
        set compileErrorVertex(value: string)
        get compileErrorFragment(): string
        set compileErrorFragment(value: string)
        get compileErrorTesselationControl(): string
        set compileErrorTesselationControl(value: string)
        get compileErrorTesselationEvaluation(): string
        set compileErrorTesselationEvaluation(value: string)
        get compileErrorCompute(): string
        set compileErrorCompute(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDShaderSpirV;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDShaderSpirV;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDShaderSource extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDShaderSource extends __NameMapRefCounted {
        set_stage_source: "setStageSource";
        get_stage_source: "getStageSource";
        source_vertex: "sourceVertex";
        source_fragment: "sourceFragment";
        source_tesselation_control: "sourceTesselationControl";
        source_tesselation_evaluation: "sourceTesselationEvaluation";
        source_compute: "sourceCompute";
    }
    /** Shader source code (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdshadersource.html  
     */
    class RDShaderSource extends RefCounted {
        constructor(identifier?: any)
        /** Sets [param source] code for the specified shader [param stage]. Equivalent to setting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex].  
         *      
         *  **Note:** If you set the compute shader source code using this method directly, remember to remove the Godot-specific hint `#[compute]`.  
         */
        setStageSource(stage: RenderingDevice.ShaderStage, source: string): void
        
        /** Returns source code for the specified shader [param stage]. Equivalent to getting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex]. */
        getStageSource(stage: RenderingDevice.ShaderStage): string
        
        /** Source code for the shader's vertex stage. */
        get sourceVertex(): string
        set sourceVertex(value: string)
        
        /** Source code for the shader's fragment stage. */
        get sourceFragment(): string
        set sourceFragment(value: string)
        
        /** Source code for the shader's tessellation control stage. */
        get sourceTesselationControl(): string
        set sourceTesselationControl(value: string)
        
        /** Source code for the shader's tessellation evaluation stage. */
        get sourceTesselationEvaluation(): string
        set sourceTesselationEvaluation(value: string)
        
        /** Source code for the shader's compute stage. */
        get sourceCompute(): string
        set sourceCompute(value: string)
        
        /** The language the shader is written in. */
        get language(): int64
        set language(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDShaderSource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDShaderSource;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDTextureFormat extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDTextureFormat extends __NameMapRefCounted {
        add_shareable_format: "addShareableFormat";
        remove_shareable_format: "removeShareableFormat";
        array_layers: "arrayLayers";
        texture_type: "textureType";
        usage_bits: "usageBits";
        is_resolve_buffer: "isResolveBuffer";
        is_discardable: "isDiscardable";
    }
    /** Texture format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdtextureformat.html  
     */
    class RDTextureFormat extends RefCounted {
        constructor(identifier?: any)
        /** Adds [param format] as a valid format for the corresponding [RDTextureView]'s [member RDTextureView.format_override] property. If any format is added as shareable, then the main [member format] must also be added. */
        addShareableFormat(format: RenderingDevice.DataFormat): void
        
        /** Removes [param format] from the list of valid formats that the corresponding [RDTextureView]'s [member RDTextureView.format_override] property can be set to. */
        removeShareableFormat(format: RenderingDevice.DataFormat): void
        
        /** The texture's pixel data format. */
        get format(): int64
        set format(value: int64)
        
        /** The texture's width (in pixels). */
        get width(): int64
        set width(value: int64)
        
        /** The texture's height (in pixels). */
        get height(): int64
        set height(value: int64)
        
        /** The texture's depth (in pixels). This is always `1` for 2D textures. */
        get depth(): int64
        set depth(value: int64)
        
        /** The number of layers in the texture. Only relevant for 2D texture arrays. */
        get arrayLayers(): int64
        set arrayLayers(value: int64)
        
        /** The number of mipmaps available in the texture. */
        get mipmaps(): int64
        set mipmaps(value: int64)
        
        /** The texture type. */
        get textureType(): int64
        set textureType(value: int64)
        
        /** The number of samples used when sampling the texture. */
        get samples(): int64
        set samples(value: int64)
        
        /** The texture's usage bits, which determine what can be done using the texture. */
        get usageBits(): int64
        set usageBits(value: int64)
        
        /** The texture will be used as the destination of a resolve operation. */
        get isResolveBuffer(): boolean
        set isResolveBuffer(value: boolean)
        
        /** If a texture is discardable, its contents do not need to be preserved between frames. This flag is only relevant when the texture is used as target in a draw list.  
         *  This information is used by [RenderingDevice] to figure out if a texture's contents can be discarded, eliminating unnecessary writes to memory and boosting performance.  
         */
        get isDiscardable(): boolean
        set isDiscardable(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDTextureFormat;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDTextureFormat;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDTextureView extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDTextureView extends __NameMapRefCounted {
        format_override: "formatOverride";
        swizzle_r: "swizzleR";
        swizzle_g: "swizzleG";
        swizzle_b: "swizzleB";
        swizzle_a: "swizzleA";
    }
    /** Texture view (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdtextureview.html  
     */
    class RDTextureView extends RefCounted {
        constructor(identifier?: any)
        /** Optional override for the data format to return sampled values in. The corresponding [RDTextureFormat] must have had this added as a shareable format. The default value of [constant RenderingDevice.DATA_FORMAT_MAX] does not override the format. */
        get formatOverride(): int64
        set formatOverride(value: int64)
        
        /** The channel to sample when sampling the red color channel. */
        get swizzleR(): int64
        set swizzleR(value: int64)
        
        /** The channel to sample when sampling the green color channel. */
        get swizzleG(): int64
        set swizzleG(value: int64)
        
        /** The channel to sample when sampling the blue color channel. */
        get swizzleB(): int64
        set swizzleB(value: int64)
        
        /** The channel to sample when sampling the alpha channel. */
        get swizzleA(): int64
        set swizzleA(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDTextureView;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDTextureView;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDUniform extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDUniform extends __NameMapRefCounted {
        add_id: "addId";
        clear_ids: "clearIds";
        uniform_type: "uniformType";
    }
    /** Shader uniform (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rduniform.html  
     */
    class RDUniform extends RefCounted {
        constructor(identifier?: any)
        /** Binds the given id to the uniform. The data associated with the id is then used when the uniform is passed to a shader. */
        addId(id: Rid): void
        
        /** Unbinds all ids currently bound to the uniform. */
        clearIds(): void
        
        /** The uniform's data type. */
        get uniformType(): int64
        set uniformType(value: int64)
        
        /** The uniform's binding. */
        get binding(): int64
        set binding(value: int64)
        get _ids(): GArray
        set _ids(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDUniform;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDUniform;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRDVertexAttribute extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRDVertexAttribute extends __NameMapRefCounted {
    }
    /** Vertex attribute (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rdvertexattribute.html  
     */
    class RDVertexAttribute extends RefCounted {
        constructor(identifier?: any)
        /** The location in the shader that this attribute is bound to. */
        get location(): int64
        set location(value: int64)
        
        /** The number of bytes between the start of the vertex buffer and the first instance of this attribute. */
        get offset(): int64
        set offset(value: int64)
        
        /** The way that this attribute's data is interpreted when sent to a shader. */
        get format(): int64
        set format(value: int64)
        
        /** The number of bytes between the starts of consecutive instances of this attribute. */
        get stride(): int64
        set stride(value: int64)
        
        /** The rate at which this attribute is pulled from its vertex buffer. */
        get frequency(): int64
        set frequency(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRDVertexAttribute;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRDVertexAttribute;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRandomNumberGenerator extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRandomNumberGenerator extends __NameMapRefCounted {
        randf_range: "randfRange";
        randi_range: "randiRange";
        rand_weighted: "randWeighted";
    }
    /** Provides methods for generating pseudo-random numbers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_randomnumbergenerator.html  
     */
    class RandomNumberGenerator extends RefCounted {
        constructor(identifier?: any)
        /** Returns a pseudo-random 32-bit unsigned integer between `0` and `4294967295` (inclusive). */
        randi(): int64
        
        /** Returns a pseudo-random float between `0.0` and `1.0` (inclusive). */
        randf(): float64
        
        /** Returns a [url=https://en.wikipedia.org/wiki/Normal_distribution]normally-distributed[/url], pseudo-random floating-point number from the specified [param mean] and a standard [param deviation]. This is also known as a Gaussian distribution.  
         *      
         *  **Note:** This method uses the [url=https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform]Box-Muller transform[/url] algorithm.  
         */
        randfn(mean?: float64 /* = 0 */, deviation?: float64 /* = 1 */): float64
        
        /** Returns a pseudo-random float between [param from] and [param to] (inclusive). */
        randfRange(from: float64, to: float64): float64
        
        /** Returns a pseudo-random 32-bit signed integer between [param from] and [param to] (inclusive). */
        randiRange(from: int64, to: int64): int64
        
        /** Returns a random index with non-uniform weights. Prints an error and returns `-1` if the array is empty.  
         *    
         */
        randWeighted(weights: PackedFloat32Array | float32[]): int64
        
        /** Sets up a time-based seed for this [RandomNumberGenerator] instance. Unlike the [@GlobalScope] random number generation functions, different [RandomNumberGenerator] instances can use different seeds. */
        randomize(): void
        
        /** Initializes the random number generator state based on the given seed value. A given seed will give a reproducible sequence of pseudo-random numbers.  
         *      
         *  **Note:** The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.  
         *      
         *  **Note:** Setting this property produces a side effect of changing the internal [member state], so make sure to initialize the seed  *before*  modifying the [member state]:  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.  
         *    
         */
        get seed(): int64
        set seed(value: int64)
        
        /** The current state of the random number generator. Save and restore this property to restore the generator to a previous state:  
         *    
         *      
         *  **Note:** Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use [member seed] instead.  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default state.  
         */
        get state(): int64
        set state(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRandomNumberGenerator;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRandomNumberGenerator;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRange extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRange extends __NameMapControl {
        _value_changed: "_valueChanged";
        set_value_no_signal: "setValueNoSignal";
        min_value: "minValue";
        max_value: "maxValue";
        exp_edit: "expEdit";
        allow_greater: "allowGreater";
        allow_lesser: "allowLesser";
        value_changed: "valueChanged";
    }
    /** Abstract base class for controls that represent a number within a range.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_range.html  
     */
    class Range<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Called when the [Range]'s value is changed (following the same conditions as [signal value_changed]). */
        /* gdvirtual */ _valueChanged(newValue: float64): void
        
        /** Sets the [Range]'s current value to the specified [param value], without emitting the [signal value_changed] signal. */
        setValueNoSignal(value: float64): void
        
        /** Binds two [Range]s together along with any ranges previously grouped with either of them. When any of range's member variables change, it will share the new value with all other ranges in its group. */
        share(with_: Node): void
        
        /** Stops the [Range] from sharing its member variables with any other. */
        unshare(): void
        
        /** Minimum value. Range is clamped if [member value] is less than [member min_value]. */
        get minValue(): float64
        set minValue(value: float64)
        
        /** Maximum value. Range is clamped if [member value] is greater than [member max_value]. */
        get maxValue(): float64
        set maxValue(value: float64)
        
        /** If greater than 0, [member value] will always be rounded to a multiple of this property's value above [member min_value]. For example, if [member min_value] is `0.1` and step is 0.2, then [member value] is limited to `0.1`, `0.3`, `0.5`, and so on. If [member rounded] is also `true`, [member value] will first be rounded to a multiple of this property's value, then rounded to the nearest integer. */
        get step(): float64
        set step(value: float64)
        
        /** Page size. Used mainly for [ScrollBar]. A [ScrollBar]'s grabber length is the [ScrollBar]'s size multiplied by [member page] over the difference between [member min_value] and [member max_value]. */
        get page(): float64
        set page(value: float64)
        
        /** Range's current value. Changing this property (even via code) will trigger [signal value_changed] signal. Use [method set_value_no_signal] if you want to avoid it. */
        get value(): float64
        set value(value: float64)
        
        /** The value mapped between 0 and 1. */
        get ratio(): float64
        set ratio(value: float64)
        
        /** If `true`, and [member min_value] is greater or equal to `0`, [member value] will be represented exponentially rather than linearly. */
        get expEdit(): boolean
        set expEdit(value: boolean)
        
        /** If `true`, [member value] will always be rounded to the nearest integer. */
        get rounded(): boolean
        set rounded(value: boolean)
        
        /** If `true`, [member value] may be greater than [member max_value]. */
        get allowGreater(): boolean
        set allowGreater(value: boolean)
        
        /** If `true`, [member value] may be less than [member min_value]. */
        get allowLesser(): boolean
        set allowLesser(value: boolean)
        
        /** Emitted when [member value] changes. When used on a [Slider], this is called continuously while dragging (potentially every frame). If you are performing an expensive operation in a function connected to [signal value_changed], consider using a  *debouncing*  [Timer] to call the function less often.  
         *      
         *  **Note:** Unlike signals such as [signal LineEdit.text_changed], [signal value_changed] is also emitted when [param value] is set directly via code.  
         */
        readonly valueChanged: Signal<(value: float64) => void>
        
        /** Emitted when [member min_value], [member max_value], [member page], or [member step] change. */
        readonly changed: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRange;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRange;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRayCast2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRayCast2D extends __NameMapNode2D {
        is_colliding: "isColliding";
        force_raycast_update: "forceRaycastUpdate";
        get_collider: "getCollider";
        get_collider_rid: "getColliderRid";
        get_collider_shape: "getColliderShape";
        get_collision_point: "getCollisionPoint";
        get_collision_normal: "getCollisionNormal";
        add_exception_rid: "addExceptionRid";
        add_exception: "addException";
        remove_exception_rid: "removeExceptionRid";
        remove_exception: "removeException";
        clear_exceptions: "clearExceptions";
        set_collision_mask_value: "setCollisionMaskValue";
        get_collision_mask_value: "getCollisionMaskValue";
        exclude_parent: "excludeParent";
        target_position: "targetPosition";
        collision_mask: "collisionMask";
        hit_from_inside: "hitFromInside";
        collide_with_areas: "collideWithAreas";
        collide_with_bodies: "collideWithBodies";
    }
    /** A ray in 2D space, used to find the first collision object it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_raycast2d.html  
     */
    class RayCast2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
        isColliding(): boolean
        
        /** Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.  
         *      
         *  **Note:** [member enabled] does not need to be `true` for this to work.  
         */
        forceRaycastUpdate(): void
        
        /** Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *      
         *  **Note:** This object is not guaranteed to be a [CollisionObject2D]. For example, if the ray intersects a [TileMapLayer], the method will return a [TileMapLayer] instance.  
         */
        getCollider(): null | GObject
        
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        getColliderRid(): Rid
        
        /** Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *  To get the intersected shape node, for a [CollisionObject2D] target, use:  
         *    
         */
        getColliderShape(): int64
        
        /** Returns the collision point at which the ray intersects the closest object, in the global coordinate system. If [member hit_from_inside] is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned point is valid and up-to-date.  
         */
        getCollisionPoint(): Vector2
        
        /** Returns the normal of the intersecting object's shape at the collision point, or `Vector2(0, 0)` if the ray starts inside the shape and [member hit_from_inside] is `true`.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned normal is valid and up-to-date.  
         */
        getCollisionNormal(): Vector2
        
        /** Adds a collision exception so the ray does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the ray does not report collisions with the specified [param node]. */
        addException(node: CollisionObject2D): void
        
        /** Removes a collision exception so the ray can report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the ray can report collisions with the specified specified [param node]. */
        removeException(node: CollisionObject2D): void
        
        /** Removes all collision exceptions for this ray. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, this raycast will not report collisions with its parent node. This property only has an effect if the parent node is a [CollisionObject2D]. See also [method Node.get_parent] and [method add_exception]. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The ray's destination point, relative to this raycast's [member Node2D.position]. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRayCast2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRayCast2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRayCast3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRayCast3D extends __NameMapNode3D {
        is_colliding: "isColliding";
        force_raycast_update: "forceRaycastUpdate";
        get_collider: "getCollider";
        get_collider_rid: "getColliderRid";
        get_collider_shape: "getColliderShape";
        get_collision_point: "getCollisionPoint";
        get_collision_normal: "getCollisionNormal";
        get_collision_face_index: "getCollisionFaceIndex";
        add_exception_rid: "addExceptionRid";
        add_exception: "addException";
        remove_exception_rid: "removeExceptionRid";
        remove_exception: "removeException";
        clear_exceptions: "clearExceptions";
        set_collision_mask_value: "setCollisionMaskValue";
        get_collision_mask_value: "getCollisionMaskValue";
        exclude_parent: "excludeParent";
        target_position: "targetPosition";
        collision_mask: "collisionMask";
        hit_from_inside: "hitFromInside";
        hit_back_faces: "hitBackFaces";
        collide_with_areas: "collideWithAreas";
        collide_with_bodies: "collideWithBodies";
        debug_shape_custom_color: "debugShapeCustomColor";
        debug_shape_thickness: "debugShapeThickness";
    }
    /** A ray in 3D space, used to find the first collision object it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_raycast3d.html  
     */
    class RayCast3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
        isColliding(): boolean
        
        /** Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.  
         *      
         *  **Note:** [member enabled] does not need to be `true` for this to work.  
         */
        forceRaycastUpdate(): void
        
        /** Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *      
         *  **Note:** This object is not guaranteed to be a [CollisionObject3D]. For example, if the ray intersects a [CSGShape3D] or a [GridMap], the method will return a [CSGShape3D] or [GridMap] instance.  
         */
        getCollider(): null | GObject
        
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        getColliderRid(): Rid
        
        /** Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *  To get the intersected shape node, for a [CollisionObject3D] target, use:  
         *    
         */
        getColliderShape(): int64
        
        /** Returns the collision point at which the ray intersects the closest object, in the global coordinate system. If [member hit_from_inside] is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned point is valid and up-to-date.  
         */
        getCollisionPoint(): Vector3
        
        /** Returns the normal of the intersecting object's shape at the collision point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member hit_from_inside] is `true`.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned normal is valid and up-to-date.  
         */
        getCollisionNormal(): Vector3
        
        /** Returns the collision object's face index at the collision point, or `-1` if the shape intersecting the ray is not a [ConcavePolygonShape3D]. */
        getCollisionFaceIndex(): int64
        
        /** Adds a collision exception so the ray does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the ray does not report collisions with the specified [param node]. */
        addException(node: CollisionObject3D): void
        
        /** Removes a collision exception so the ray can report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the ray can report collisions with the specified [param node]. */
        removeException(node: CollisionObject3D): void
        
        /** Removes all collision exceptions for this ray. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, this raycast will not report collisions with its parent node. This property only has an effect if the parent node is a [CollisionObject3D]. See also [method Node.get_parent] and [method add_exception]. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The ray's destination point, relative to this raycast's [member Node3D.position]. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect shapes with no volume like concave polygon or heightmap. */
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        
        /** If `true`, the ray will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        get hitBackFaces(): boolean
        set hitBackFaces(value: boolean)
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [RayCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        get debugShapeCustomColor(): Color
        set debugShapeCustomColor(value: Color)
        
        /** If set to `1`, a line is used as the debug shape. Otherwise, a truncated pyramid is drawn to represent the [RayCast3D]. Requires **Visible Collision Shapes** to be enabled in the **Debug** menu for the debug shape to be visible at run-time. */
        get debugShapeThickness(): int64
        set debugShapeThickness(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRayCast3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRayCast3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRectangleShape2D extends __RPCMapShape2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRectangleShape2D extends __NameMapShape2D {
    }
    /** A 2D rectangle shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rectangleshape2d.html  
     */
    class RectangleShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The rectangle's width and height. */
        get size(): Vector2
        set size(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRectangleShape2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRectangleShape2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRefCounted extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRefCounted extends __NameMapGObject {
        init_ref: "initRef";
        get_reference_count: "getReferenceCount";
    }
    /** Base class for reference-counted objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_refcounted.html  
     */
    class RefCounted extends GObject {
        constructor(identifier?: any)
        /** Initializes the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns whether the initialization was successful.  
         */
        initRef(): boolean
        
        /** Increments the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the increment was successful, `false` otherwise.  
         */
        reference(): boolean
        
        /** Decrements the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the object should be freed after the decrement, `false` otherwise.  
         */
        unreference(): boolean
        
        /** Returns the current reference count. */
        getReferenceCount(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRefCounted;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRefCounted;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapReferenceRect extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapReferenceRect extends __NameMapControl {
        border_color: "borderColor";
        border_width: "borderWidth";
        editor_only: "editorOnly";
    }
    /** A rectangular box for designing UIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_referencerect.html  
     */
    class ReferenceRect<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Sets the border color of the [ReferenceRect]. */
        get borderColor(): Color
        set borderColor(value: Color)
        
        /** Sets the border width of the [ReferenceRect]. The border grows both inwards and outwards with respect to the rectangle box. */
        get borderWidth(): float64
        set borderWidth(value: float64)
        
        /** If `true`, the [ReferenceRect] will only be visible while in editor. Otherwise, [ReferenceRect] will be visible in the running project. */
        get editorOnly(): boolean
        set editorOnly(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapReferenceRect;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapReferenceRect;
    }
    namespace ReflectionProbe {
        enum UpdateMode {
            UpdateOnce = 0,
            UpdateAlways = 1,
        }
        enum AmbientMode {
            AmbientDisabled = 0,
            AmbientEnvironment = 1,
            AmbientColor = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapReflectionProbe extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapReflectionProbe extends __NameMapVisualInstance3D {
        update_mode: "updateMode";
        blend_distance: "blendDistance";
        max_distance: "maxDistance";
        origin_offset: "originOffset";
        box_projection: "boxProjection";
        enable_shadows: "enableShadows";
        cull_mask: "cullMask";
        reflection_mask: "reflectionMask";
        mesh_lod_threshold: "meshLodThreshold";
        ambient_mode: "ambientMode";
        ambient_color: "ambientColor";
        ambient_color_energy: "ambientColorEnergy";
    }
    /** Captures its surroundings to create fast, accurate reflections from a given point.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_reflectionprobe.html  
     */
    class ReflectionProbe<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Sets how frequently the [ReflectionProbe] is updated. Can be [constant UPDATE_ONCE] or [constant UPDATE_ALWAYS]. */
        get updateMode(): int64
        set updateMode(value: int64)
        
        /** Defines the reflection intensity. Intensity modulates the strength of the reflection. */
        get intensity(): float64
        set intensity(value: float64)
        
        /** Defines the distance in meters over which a probe blends into the scene. */
        get blendDistance(): float64
        set blendDistance(value: float64)
        
        /** The maximum distance away from the [ReflectionProbe] an object can be before it is culled. Decrease this to improve performance, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** The maximum reflection distance is always at least equal to the probe's extents. This means that decreasing [member max_distance] will not always cull objects from reflections, especially if the reflection probe's box defined by its [member size] is already large.  
         */
        get maxDistance(): float64
        set maxDistance(value: float64)
        
        /** The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.  
         *      
         *  **Note:** To better fit areas that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Sets the origin offset to be used when this [ReflectionProbe] is in [member box_projection] mode. This can be set to a non-zero value to ensure a reflection fits a rectangle-shaped room, while reducing the number of objects that "get in the way" of the reflection. */
        get originOffset(): Vector3
        set originOffset(value: Vector3)
        
        /** If `true`, enables box projection. This makes reflections look more correct in rectangle-shaped rooms by offsetting the reflection center depending on the camera's location.  
         *      
         *  **Note:** To better fit rectangle-shaped rooms that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        get boxProjection(): boolean
        set boxProjection(value: boolean)
        
        /** If `true`, reflections will ignore sky contribution. */
        get interior(): boolean
        set interior(value: boolean)
        
        /** If `true`, computes shadows in the reflection probe. This makes the reflection probe slower to render; you may want to disable this if using the [constant UPDATE_ALWAYS] [member update_mode]. */
        get enableShadows(): boolean
        set enableShadows(value: boolean)
        
        /** Sets the cull mask which determines what objects are drawn by this probe. Every [VisualInstance3D] with a layer included in this cull mask will be rendered by the probe. It is best to only include large objects which are likely to take up a lot of space in the reflection in order to save on rendering cost.  
         *  This can also be used to prevent an object from reflecting upon itself (for instance, a [ReflectionProbe] centered on a vehicle).  
         */
        get cullMask(): int64
        set cullMask(value: int64)
        
        /** Sets the reflection mask which determines what objects have reflections applied from this probe. Every [VisualInstance3D] with a layer included in this reflection mask will have reflections applied from this probe. See also [member cull_mask], which can be used to exclude objects from appearing in the reflection while still making them affected by the [ReflectionProbe]. */
        get reflectionMask(): int64
        set reflectionMask(value: int64)
        
        /** The automatic LOD bias to use for meshes rendered within the [ReflectionProbe] (this is analog to [member Viewport.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        get meshLodThreshold(): float64
        set meshLodThreshold(value: float64)
        
        /** The ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. The ambient color will smoothly blend with other [ReflectionProbe]s and the rest of the scene (outside the [ReflectionProbe]'s box defined by its [member size]). */
        get ambientMode(): int64
        set ambientMode(value: int64)
        
        /** The custom ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        get ambientColor(): Color
        set ambientColor(value: Color)
        
        /** The custom ambient color energy to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        get ambientColorEnergy(): float64
        set ambientColorEnergy(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapReflectionProbe;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapReflectionProbe;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRegEx extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRegEx extends __NameMapRefCounted {
        create_from_string: "createFromString";
        search_all: "searchAll";
        is_valid: "isValid";
        get_pattern: "getPattern";
        get_group_count: "getGroupCount";
        get_names: "getNames";
    }
    /** Class for searching text for patterns using regular expressions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_regex.html  
     */
    class RegEx extends RefCounted {
        constructor(identifier?: any)
        /** Creates and compiles a new [RegEx] object. See also [method compile]. */
        static createFromString(pattern: string, showError?: boolean /* = true */): RegEx
        
        /** This method resets the state of the object, as if it was freshly created. Namely, it unassigns the regular expression of this object. */
        clear(): void
        
        /** Compiles and assign the search pattern to use. Returns [constant OK] if the compilation is successful. If compilation fails, returns [constant FAILED] and when [param show_error] is `true`, details are printed to standard output. */
        compile(pattern: string, showError?: boolean /* = true */): GError
        
        /** Searches the text for the compiled pattern. Returns a [RegExMatch] container of the first matching result if found, otherwise `null`.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        search(subject: string, offset?: int64 /* = 0 */, end?: int64 /* = -1 */): null | RegExMatch
        
        /** Searches the text for the compiled pattern. Returns an array of [RegExMatch] containers for each non-overlapping result. If no results were found, an empty array is returned instead.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        searchAll(subject: string, offset?: int64 /* = 0 */, end?: int64 /* = -1 */): GArray<RegExMatch>
        
        /** Searches the text for the compiled pattern and replaces it with the specified string. Escapes and backreferences such as `$1` and `$name` are expanded and resolved. By default, only the first instance is replaced, but it can be changed for all instances (global replacement).  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        sub(subject: string, replacement: string, all?: boolean /* = false */, offset?: int64 /* = 0 */, end?: int64 /* = -1 */): string
        
        /** Returns whether this object has a valid search pattern assigned. */
        isValid(): boolean
        
        /** Returns the original search pattern that was compiled. */
        getPattern(): string
        
        /** Returns the number of capturing groups in compiled pattern. */
        getGroupCount(): int64
        
        /** Returns an array of names of named capturing groups in the compiled pattern. They are ordered by appearance. */
        getNames(): PackedStringArray
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRegEx;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRegEx;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRegExMatch extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRegExMatch extends __NameMapRefCounted {
        get_group_count: "getGroupCount";
        get_string: "getString";
        get_start: "getStart";
        get_end: "getEnd";
    }
    /** Contains the results of a [RegEx] search.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_regexmatch.html  
     */
    class RegExMatch extends RefCounted {
        constructor(identifier?: any)
        /** Returns the number of capturing groups. */
        getGroupCount(): int64
        
        /** Returns the substring of the match from the source string. Capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns an empty string if the group did not match or doesn't exist.  
         */
        getString(name?: any /* = {} */): string
        
        /** Returns the starting position of the match within the source string. The starting position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        getStart(name?: any /* = {} */): int64
        
        /** Returns the end position of the match within the source string. The end position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        getEnd(name?: any /* = {} */): int64
        
        /** The source string used with the search pattern to find this matching result. */
        get subject(): string
        set subject(value: string)
        
        /** A dictionary of named groups and its corresponding group number. Only groups that were matched are included. If multiple groups have the same name, that name would refer to the first matching one. */
        get names(): GDictionary
        set names(value: GDictionary)
        
        /** An [Array] of the match and its capturing groups. */
        get strings(): GArray
        set strings(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRegExMatch;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRegExMatch;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRemoteTransform2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRemoteTransform2D extends __NameMapNode2D {
        force_update_cache: "forceUpdateCache";
        remote_path: "remotePath";
        use_global_coordinates: "useGlobalCoordinates";
        update_position: "updatePosition";
        update_rotation: "updateRotation";
        update_scale: "updateScale";
    }
    /** RemoteTransform2D pushes its own [Transform2D] to another [Node2D] derived node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_remotetransform2d.html  
     */
    class RemoteTransform2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** [RemoteTransform2D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        forceUpdateCache(): void
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform2D's position in the scene. */
        get remotePath(): NodePath
        set remotePath(value: NodePath | string)
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        get useGlobalCoordinates(): boolean
        set useGlobalCoordinates(value: boolean)
        
        /** If `true`, the remote node's position is updated. */
        get updatePosition(): boolean
        set updatePosition(value: boolean)
        
        /** If `true`, the remote node's rotation is updated. */
        get updateRotation(): boolean
        set updateRotation(value: boolean)
        
        /** If `true`, the remote node's scale is updated. */
        get updateScale(): boolean
        set updateScale(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRemoteTransform2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRemoteTransform2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRemoteTransform3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRemoteTransform3D extends __NameMapNode3D {
        force_update_cache: "forceUpdateCache";
        remote_path: "remotePath";
        use_global_coordinates: "useGlobalCoordinates";
        update_position: "updatePosition";
        update_rotation: "updateRotation";
        update_scale: "updateScale";
    }
    /** RemoteTransform3D pushes its own [Transform3D] to another [Node3D] derived Node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_remotetransform3d.html  
     */
    class RemoteTransform3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** [RemoteTransform3D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        forceUpdateCache(): void
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform3D's position in the scene. */
        get remotePath(): NodePath
        set remotePath(value: NodePath | string)
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        get useGlobalCoordinates(): boolean
        set useGlobalCoordinates(value: boolean)
        
        /** If `true`, the remote node's position is updated. */
        get updatePosition(): boolean
        set updatePosition(value: boolean)
        
        /** If `true`, the remote node's rotation is updated. */
        get updateRotation(): boolean
        set updateRotation(value: boolean)
        
        /** If `true`, the remote node's scale is updated. */
        get updateScale(): boolean
        set updateScale(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRemoteTransform3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRemoteTransform3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderData extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderData extends __NameMapGObject {
        get_render_scene_buffers: "getRenderSceneBuffers";
        get_render_scene_data: "getRenderSceneData";
        get_environment: "getEnvironment";
        get_camera_attributes: "getCameraAttributes";
    }
    /** Abstract render data object, holds frame data related to rendering a single frame of a viewport.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderdata.html  
     */
    class RenderData extends GObject {
        constructor(identifier?: any)
        /** Returns the [RenderSceneBuffers] object managing the scene buffers for rendering this viewport. */
        getRenderSceneBuffers(): null | RenderSceneBuffers
        
        /** Returns the [RenderSceneData] object managing this frames scene data. */
        getRenderSceneData(): null | RenderSceneData
        
        /** Returns the [RID] of the environment object in the [RenderingServer] being used to render this viewport. */
        getEnvironment(): Rid
        
        /** Returns the [RID] of the camera attributes object in the [RenderingServer] being used to render this viewport. */
        getCameraAttributes(): Rid
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderDataExtension extends __RPCMapRenderData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderDataExtension extends __NameMapRenderData {
        _get_render_scene_buffers: "_getRenderSceneBuffers";
        _get_render_scene_data: "_getRenderSceneData";
        _get_environment: "_getEnvironment";
        _get_camera_attributes: "_getCameraAttributes";
    }
    /** This class allows for a RenderData implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderdataextension.html  
     */
    class RenderDataExtension extends RenderData {
        constructor(identifier?: any)
        /** Implement this in GDExtension to return the implementation's [RenderSceneBuffers] object. */
        /* gdvirtual */ _getRenderSceneBuffers(): null | RenderSceneBuffers
        
        /** Implement this in GDExtension to return the implementation's [RenderSceneDataExtension] object. */
        /* gdvirtual */ _getRenderSceneData(): null | RenderSceneData
        
        /** Implement this in GDExtension to return the [RID] of the implementation's environment object. */
        /* gdvirtual */ _getEnvironment(): Rid
        
        /** Implement this in GDExtension to return the [RID] for the implementation's camera attributes object. */
        /* gdvirtual */ _getCameraAttributes(): Rid
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderDataExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderDataExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderDataRD extends __RPCMapRenderData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderDataRD extends __NameMapRenderData {
    }
    /** Render data implementation for the RenderingDevice based renderers.  
     *      
     *  **Note:** This is an internal rendering server object, do not instantiate this from script.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderdatard.html  
     */
    class RenderDataRD extends RenderData {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderDataRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderDataRD;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderSceneBuffers extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderSceneBuffers extends __NameMapRefCounted {
    }
    /** Abstract scene buffers object, created for each viewport for which 3D rendering is done.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderscenebuffers.html  
     */
    class RenderSceneBuffers extends RefCounted {
        constructor(identifier?: any)
        /** This method is called by the rendering server when the associated viewport's configuration is changed. It will discard the old buffers and recreate the internal buffers used. */
        configure(config: RenderSceneBuffersConfiguration): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderSceneBuffers;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderSceneBuffers;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderSceneBuffersConfiguration extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderSceneBuffersConfiguration extends __NameMapRefCounted {
        render_target: "renderTarget";
        internal_size: "internalSize";
        target_size: "targetSize";
        view_count: "viewCount";
        scaling_3d_mode: "scaling3DMode";
        msaa_3d: "msaa3D";
        screen_space_aa: "screenSpaceAA";
        fsr_sharpness: "fsrSharpness";
        texture_mipmap_bias: "textureMipmapBias";
        anisotropic_filtering_level: "anisotropicFilteringLevel";
    }
    /** Configuration object used to setup a [RenderSceneBuffers] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderscenebuffersconfiguration.html  
     */
    class RenderSceneBuffersConfiguration extends RefCounted {
        constructor(identifier?: any)
        /** The render target associated with these buffer. */
        get renderTarget(): Rid
        set renderTarget(value: Rid)
        
        /** The size of the 3D render buffer used for rendering. */
        get internalSize(): Vector2I
        set internalSize(value: Vector2I)
        
        /** The target (upscale) size if scaling is used. */
        get targetSize(): Vector2I
        set targetSize(value: Vector2I)
        
        /** The number of views we're rendering. */
        get viewCount(): int64
        set viewCount(value: int64)
        
        /** The requested scaling mode with which we upscale/downscale if [member internal_size] and [member target_size] are not equal. */
        get scaling3DMode(): int64
        set scaling3DMode(value: int64)
        
        /** The MSAA mode we're using for 3D rendering. */
        get msaa3D(): int64
        set msaa3D(value: int64)
        
        /** The requested screen space AA applied in post processing. */
        get screenSpaceAA(): int64
        set screenSpaceAA(value: int64)
        
        /** FSR Sharpness applicable if FSR upscaling is used. */
        get fsrSharpness(): boolean
        set fsrSharpness(value: boolean)
        
        /** Bias applied to mipmaps. */
        get textureMipmapBias(): boolean
        set textureMipmapBias(value: boolean)
        
        /** Level of the anisotropic filter. */
        get anisotropicFilteringLevel(): int64
        set anisotropicFilteringLevel(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderSceneBuffersConfiguration;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderSceneBuffersConfiguration;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderSceneBuffersExtension extends __RPCMapRenderSceneBuffers {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderSceneBuffersExtension extends __NameMapRenderSceneBuffers {
        _set_fsr_sharpness: "_setFsrSharpness";
        _set_texture_mipmap_bias: "_setTextureMipmapBias";
        _set_anisotropic_filtering_level: "_setAnisotropicFilteringLevel";
        _set_use_debanding: "_setUseDebanding";
    }
    /** This class allows for a RenderSceneBuffer implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderscenebuffersextension.html  
     */
    class RenderSceneBuffersExtension extends RenderSceneBuffers {
        constructor(identifier?: any)
        /** Implement this in GDExtension to handle the (re)sizing of a viewport. */
        /* gdvirtual */ _configure(config: RenderSceneBuffersConfiguration): void
        
        /** Implement this in GDExtension to record a new FSR sharpness value. */
        /* gdvirtual */ _setFsrSharpness(fsrSharpness: float64): void
        
        /** Implement this in GDExtension to change the texture mipmap bias. */
        /* gdvirtual */ _setTextureMipmapBias(textureMipmapBias: float64): void
        
        /** Implement this in GDExtension to change the anisotropic filtering level. */
        /* gdvirtual */ _setAnisotropicFilteringLevel(anisotropicFilteringLevel: int64): void
        
        /** Implement this in GDExtension to react to the debanding flag changing. */
        /* gdvirtual */ _setUseDebanding(useDebanding: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderSceneBuffersExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderSceneBuffersExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderSceneBuffersRD extends __RPCMapRenderSceneBuffers {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderSceneBuffersRD extends __NameMapRenderSceneBuffers {
        has_texture: "hasTexture";
        create_texture: "createTexture";
        create_texture_from_format: "createTextureFromFormat";
        create_texture_view: "createTextureView";
        get_texture: "getTexture";
        get_texture_format: "getTextureFormat";
        get_texture_slice: "getTextureSlice";
        get_texture_slice_view: "getTextureSliceView";
        get_texture_slice_size: "getTextureSliceSize";
        clear_context: "clearContext";
        get_color_texture: "getColorTexture";
        get_color_layer: "getColorLayer";
        get_depth_texture: "getDepthTexture";
        get_depth_layer: "getDepthLayer";
        get_velocity_texture: "getVelocityTexture";
        get_velocity_layer: "getVelocityLayer";
        get_render_target: "getRenderTarget";
        get_view_count: "getViewCount";
        get_internal_size: "getInternalSize";
        get_target_size: "getTargetSize";
        get_scaling_3d_mode: "getScaling3DMode";
        get_fsr_sharpness: "getFsrSharpness";
        get_msaa_3d: "getMsaa3D";
        get_texture_samples: "getTextureSamples";
        get_screen_space_aa: "getScreenSpaceAA";
        get_use_taa: "getUseTaa";
        get_use_debanding: "getUseDebanding";
    }
    /** Render scene buffer implementation for the RenderingDevice based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderscenebuffersrd.html  
     */
    class RenderSceneBuffersRD extends RenderSceneBuffers {
        constructor(identifier?: any)
        /** Returns `true` if a cached texture exists for this name. */
        hasTexture(context: StringName, name: StringName): boolean
        
        /** Create a new texture with the given definition and cache this under the given name. Will return the existing texture if it already exists. */
        createTexture(context: StringName, name: StringName, dataFormat: RenderingDevice.DataFormat, usageBits: int64, textureSamples: RenderingDevice.TextureSamples, size: Vector2I, layers: int64, mipmaps: int64, unique: boolean, discardable: boolean): Rid
        
        /** Create a new texture using the given format and view and cache this under the given name. Will return the existing texture if it already exists. */
        createTextureFromFormat(context: StringName, name: StringName, format: RDTextureFormat, view: RDTextureView, unique: boolean): Rid
        
        /** Create a new texture view for an existing texture and cache this under the given [param view_name]. Will return the existing texture view if it already exists. Will error if the source texture doesn't exist. */
        createTextureView(context: StringName, name: StringName, viewName: StringName, view: RDTextureView): Rid
        
        /** Returns a cached texture with this name. */
        getTexture(context: StringName, name: StringName): Rid
        
        /** Returns the texture format information with which a cached texture was created. */
        getTextureFormat(context: StringName, name: StringName): null | RDTextureFormat
        
        /** Returns a specific slice (layer or mipmap) for a cached texture. */
        getTextureSlice(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64): Rid
        
        /** Returns a specific view of a slice (layer or mipmap) for a cached texture. */
        getTextureSliceView(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64, view: RDTextureView): Rid
        
        /** Returns the texture size of a given slice of a cached texture. */
        getTextureSliceSize(context: StringName, name: StringName, mipmap: int64): Vector2I
        
        /** Frees all buffers related to this context. */
        clearContext(context: StringName): void
        
        /** Returns the color texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getColorTexture(msaa?: boolean /* = false */): Rid
        
        /** Returns the specified layer from the color texture we are rendering 3D content to.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getColorLayer(layer: int64, msaa?: boolean /* = false */): Rid
        
        /** Returns the depth texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getDepthTexture(msaa?: boolean /* = false */): Rid
        
        /** Returns the specified layer from the depth texture we are rendering 3D content to.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getDepthLayer(layer: int64, msaa?: boolean /* = false */): Rid
        
        /** Returns the velocity texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.  
         *  If [param msaa] is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getVelocityTexture(msaa?: boolean /* = false */): Rid
        
        /** Returns the specified layer from the velocity texture we are rendering 3D content to. */
        getVelocityLayer(layer: int64, msaa?: boolean /* = false */): Rid
        
        /** Returns the render target associated with this buffers object. */
        getRenderTarget(): Rid
        
        /** Returns the view count for the associated viewport. */
        getViewCount(): int64
        
        /** Returns the internal size of the render buffer (size before upscaling) with which textures are created by default. */
        getInternalSize(): Vector2I
        
        /** Returns the target size of the render buffer (size after upscaling). */
        getTargetSize(): Vector2I
        
        /** Returns the scaling mode used for upscaling. */
        getScaling3DMode(): RenderingServer.ViewportScaling3DMode
        
        /** Returns the FSR sharpness value used while rendering the 3D content (if [method get_scaling_3d_mode] is an FSR mode). */
        getFsrSharpness(): float64
        
        /** Returns the applied 3D MSAA mode for this viewport. */
        getMsaa3D(): RenderingServer.ViewportMsaa
        
        /** Returns the number of MSAA samples used. */
        getTextureSamples(): RenderingDevice.TextureSamples
        
        /** Returns the screen-space antialiasing method applied. */
        getScreenSpaceAA(): RenderingServer.ViewportScreenSpaceAA
        
        /** Returns `true` if TAA is enabled. */
        getUseTaa(): boolean
        
        /** Returns `true` if debanding is enabled. */
        getUseDebanding(): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderSceneBuffersRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderSceneBuffersRD;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderSceneData extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderSceneData extends __NameMapGObject {
        get_cam_transform: "getCamTransform";
        get_cam_projection: "getCamProjection";
        get_view_count: "getViewCount";
        get_view_eye_offset: "getViewEyeOffset";
        get_view_projection: "getViewProjection";
        get_uniform_buffer: "getUniformBuffer";
    }
    /** Abstract render data object, holds scene data related to rendering a single frame of a viewport.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderscenedata.html  
     */
    class RenderSceneData extends GObject {
        constructor(identifier?: any)
        /** Returns the camera transform used to render this frame.  
         *      
         *  **Note:** If more than one view is rendered, this will return a centered transform.  
         */
        getCamTransform(): Transform3D
        
        /** Returns the camera projection used to render this frame.  
         *      
         *  **Note:** If more than one view is rendered, this will return a combined projection.  
         */
        getCamProjection(): Projection
        
        /** Returns the number of views being rendered. */
        getViewCount(): int64
        
        /** Returns the eye offset per view used to render this frame. This is the offset between our camera transform and the eye transform. */
        getViewEyeOffset(view: int64): Vector3
        
        /** Returns the view projection per view used to render this frame.  
         *      
         *  **Note:** If a single view is rendered, this returns the camera projection. If more than one view is rendered, this will return a projection for the given view including the eye offset.  
         */
        getViewProjection(view: int64): Projection
        
        /** Return the [RID] of the uniform buffer containing the scene data as a UBO. */
        getUniformBuffer(): Rid
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderSceneData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderSceneData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderSceneDataExtension extends __RPCMapRenderSceneData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderSceneDataExtension extends __NameMapRenderSceneData {
        _get_cam_transform: "_getCamTransform";
        _get_cam_projection: "_getCamProjection";
        _get_view_count: "_getViewCount";
        _get_view_eye_offset: "_getViewEyeOffset";
        _get_view_projection: "_getViewProjection";
        _get_uniform_buffer: "_getUniformBuffer";
    }
    /** This class allows for a RenderSceneData implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderscenedataextension.html  
     */
    class RenderSceneDataExtension extends RenderSceneData {
        constructor(identifier?: any)
        /** Implement this in GDExtension to return the camera [Transform3D]. */
        /* gdvirtual */ _getCamTransform(): Transform3D
        
        /** Implement this in GDExtension to return the camera [Projection]. */
        /* gdvirtual */ _getCamProjection(): Projection
        
        /** Implement this in GDExtension to return the view count. */
        /* gdvirtual */ _getViewCount(): int64
        
        /** Implement this in GDExtension to return the eye offset for the given [param view]. */
        /* gdvirtual */ _getViewEyeOffset(view: int64): Vector3
        
        /** Implement this in GDExtension to return the view [Projection] for the given [param view]. */
        /* gdvirtual */ _getViewProjection(view: int64): Projection
        
        /** Implement this in GDExtension to return the [RID] of the uniform buffer containing the scene data as a UBO. */
        /* gdvirtual */ _getUniformBuffer(): Rid
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderSceneDataExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderSceneDataExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderSceneDataRD extends __RPCMapRenderSceneData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderSceneDataRD extends __NameMapRenderSceneData {
    }
    /** Render scene data implementation for the RenderingDevice based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderscenedatard.html  
     */
    class RenderSceneDataRD extends RenderSceneData {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderSceneDataRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderSceneDataRD;
    }
    namespace RenderingDevice {
        enum DeviceType {
            DeviceTypeOther = 0,
            DeviceTypeIntegratedGpu = 1,
            DeviceTypeDiscreteGpu = 2,
            DeviceTypeVirtualGpu = 3,
            DeviceTypeCpu = 4,
            DeviceTypeMax = 5,
        }
        enum DriverResource {
            DriverResourceLogicalDevice = 0,
            DriverResourcePhysicalDevice = 1,
            DriverResourceTopmostObject = 2,
            DriverResourceCommandQueue = 3,
            DriverResourceQueueFamily = 4,
            DriverResourceTexture = 5,
            DriverResourceTextureView = 6,
            DriverResourceTextureDataFormat = 7,
            DriverResourceSampler = 8,
            DriverResourceUniformSet = 9,
            DriverResourceBuffer = 10,
            DriverResourceComputePipeline = 11,
            DriverResourceRenderPipeline = 12,
            DriverResourceVulkanDevice = 0,
            DriverResourceVulkanPhysicalDevice = 1,
            DriverResourceVulkanInstance = 2,
            DriverResourceVulkanQueue = 3,
            DriverResourceVulkanQueueFamilyIndex = 4,
            DriverResourceVulkanImage = 5,
            DriverResourceVulkanImageView = 6,
            DriverResourceVulkanImageNativeTextureFormat = 7,
            DriverResourceVulkanSampler = 8,
            DriverResourceVulkanDescriptorSet = 9,
            DriverResourceVulkanBuffer = 10,
            DriverResourceVulkanComputePipeline = 11,
            DriverResourceVulkanRenderPipeline = 12,
        }
        enum DataFormat {
            DataFormatR4G4UnormPack8 = 0,
            DataFormatR4G4B4A4UnormPack16 = 1,
            DataFormatB4G4R4A4UnormPack16 = 2,
            DataFormatR5G6B5UnormPack16 = 3,
            DataFormatB5G6R5UnormPack16 = 4,
            DataFormatR5G5B5A1UnormPack16 = 5,
            DataFormatB5G5R5A1UnormPack16 = 6,
            DataFormatA1R5G5B5UnormPack16 = 7,
            DataFormatR8Unorm = 8,
            DataFormatR8Snorm = 9,
            DataFormatR8Uscaled = 10,
            DataFormatR8Sscaled = 11,
            DataFormatR8Uint = 12,
            DataFormatR8Sint = 13,
            DataFormatR8Srgb = 14,
            DataFormatR8G8Unorm = 15,
            DataFormatR8G8Snorm = 16,
            DataFormatR8G8Uscaled = 17,
            DataFormatR8G8Sscaled = 18,
            DataFormatR8G8Uint = 19,
            DataFormatR8G8Sint = 20,
            DataFormatR8G8Srgb = 21,
            DataFormatR8G8B8Unorm = 22,
            DataFormatR8G8B8Snorm = 23,
            DataFormatR8G8B8Uscaled = 24,
            DataFormatR8G8B8Sscaled = 25,
            DataFormatR8G8B8Uint = 26,
            DataFormatR8G8B8Sint = 27,
            DataFormatR8G8B8Srgb = 28,
            DataFormatB8G8R8Unorm = 29,
            DataFormatB8G8R8Snorm = 30,
            DataFormatB8G8R8Uscaled = 31,
            DataFormatB8G8R8Sscaled = 32,
            DataFormatB8G8R8Uint = 33,
            DataFormatB8G8R8Sint = 34,
            DataFormatB8G8R8Srgb = 35,
            DataFormatR8G8B8A8Unorm = 36,
            DataFormatR8G8B8A8Snorm = 37,
            DataFormatR8G8B8A8Uscaled = 38,
            DataFormatR8G8B8A8Sscaled = 39,
            DataFormatR8G8B8A8Uint = 40,
            DataFormatR8G8B8A8Sint = 41,
            DataFormatR8G8B8A8Srgb = 42,
            DataFormatB8G8R8A8Unorm = 43,
            DataFormatB8G8R8A8Snorm = 44,
            DataFormatB8G8R8A8Uscaled = 45,
            DataFormatB8G8R8A8Sscaled = 46,
            DataFormatB8G8R8A8Uint = 47,
            DataFormatB8G8R8A8Sint = 48,
            DataFormatB8G8R8A8Srgb = 49,
            DataFormatA8B8G8R8UnormPack32 = 50,
            DataFormatA8B8G8R8SnormPack32 = 51,
            DataFormatA8B8G8R8UscaledPack32 = 52,
            DataFormatA8B8G8R8SscaledPack32 = 53,
            DataFormatA8B8G8R8UintPack32 = 54,
            DataFormatA8B8G8R8SintPack32 = 55,
            DataFormatA8B8G8R8SrgbPack32 = 56,
            DataFormatA2R10G10B10UnormPack32 = 57,
            DataFormatA2R10G10B10SnormPack32 = 58,
            DataFormatA2R10G10B10UscaledPack32 = 59,
            DataFormatA2R10G10B10SscaledPack32 = 60,
            DataFormatA2R10G10B10UintPack32 = 61,
            DataFormatA2R10G10B10SintPack32 = 62,
            DataFormatA2B10G10R10UnormPack32 = 63,
            DataFormatA2B10G10R10SnormPack32 = 64,
            DataFormatA2B10G10R10UscaledPack32 = 65,
            DataFormatA2B10G10R10SscaledPack32 = 66,
            DataFormatA2B10G10R10UintPack32 = 67,
            DataFormatA2B10G10R10SintPack32 = 68,
            DataFormatR16Unorm = 69,
            DataFormatR16Snorm = 70,
            DataFormatR16Uscaled = 71,
            DataFormatR16Sscaled = 72,
            DataFormatR16Uint = 73,
            DataFormatR16Sint = 74,
            DataFormatR16Sfloat = 75,
            DataFormatR16G16Unorm = 76,
            DataFormatR16G16Snorm = 77,
            DataFormatR16G16Uscaled = 78,
            DataFormatR16G16Sscaled = 79,
            DataFormatR16G16Uint = 80,
            DataFormatR16G16Sint = 81,
            DataFormatR16G16Sfloat = 82,
            DataFormatR16G16B16Unorm = 83,
            DataFormatR16G16B16Snorm = 84,
            DataFormatR16G16B16Uscaled = 85,
            DataFormatR16G16B16Sscaled = 86,
            DataFormatR16G16B16Uint = 87,
            DataFormatR16G16B16Sint = 88,
            DataFormatR16G16B16Sfloat = 89,
            DataFormatR16G16B16A16Unorm = 90,
            DataFormatR16G16B16A16Snorm = 91,
            DataFormatR16G16B16A16Uscaled = 92,
            DataFormatR16G16B16A16Sscaled = 93,
            DataFormatR16G16B16A16Uint = 94,
            DataFormatR16G16B16A16Sint = 95,
            DataFormatR16G16B16A16Sfloat = 96,
            DataFormatR32Uint = 97,
            DataFormatR32Sint = 98,
            DataFormatR32Sfloat = 99,
            DataFormatR32G32Uint = 100,
            DataFormatR32G32Sint = 101,
            DataFormatR32G32Sfloat = 102,
            DataFormatR32G32B32Uint = 103,
            DataFormatR32G32B32Sint = 104,
            DataFormatR32G32B32Sfloat = 105,
            DataFormatR32G32B32A32Uint = 106,
            DataFormatR32G32B32A32Sint = 107,
            DataFormatR32G32B32A32Sfloat = 108,
            DataFormatR64Uint = 109,
            DataFormatR64Sint = 110,
            DataFormatR64Sfloat = 111,
            DataFormatR64G64Uint = 112,
            DataFormatR64G64Sint = 113,
            DataFormatR64G64Sfloat = 114,
            DataFormatR64G64B64Uint = 115,
            DataFormatR64G64B64Sint = 116,
            DataFormatR64G64B64Sfloat = 117,
            DataFormatR64G64B64A64Uint = 118,
            DataFormatR64G64B64A64Sint = 119,
            DataFormatR64G64B64A64Sfloat = 120,
            DataFormatB10G11R11UfloatPack32 = 121,
            DataFormatE5B9G9R9UfloatPack32 = 122,
            DataFormatD16Unorm = 123,
            DataFormatX8D24UnormPack32 = 124,
            DataFormatD32Sfloat = 125,
            DataFormatS8Uint = 126,
            DataFormatD16UnormS8Uint = 127,
            DataFormatD24UnormS8Uint = 128,
            DataFormatD32SfloatS8Uint = 129,
            DataFormatBc1RgbUnormBlock = 130,
            DataFormatBc1RgbSrgbBlock = 131,
            DataFormatBc1RgbaUnormBlock = 132,
            DataFormatBc1RgbaSrgbBlock = 133,
            DataFormatBc2UnormBlock = 134,
            DataFormatBc2SrgbBlock = 135,
            DataFormatBc3UnormBlock = 136,
            DataFormatBc3SrgbBlock = 137,
            DataFormatBc4UnormBlock = 138,
            DataFormatBc4SnormBlock = 139,
            DataFormatBc5UnormBlock = 140,
            DataFormatBc5SnormBlock = 141,
            DataFormatBc6HUfloatBlock = 142,
            DataFormatBc6HSfloatBlock = 143,
            DataFormatBc7UnormBlock = 144,
            DataFormatBc7SrgbBlock = 145,
            DataFormatEtc2R8G8B8UnormBlock = 146,
            DataFormatEtc2R8G8B8SrgbBlock = 147,
            DataFormatEtc2R8G8B8A1UnormBlock = 148,
            DataFormatEtc2R8G8B8A1SrgbBlock = 149,
            DataFormatEtc2R8G8B8A8UnormBlock = 150,
            DataFormatEtc2R8G8B8A8SrgbBlock = 151,
            DataFormatEacR11UnormBlock = 152,
            DataFormatEacR11SnormBlock = 153,
            DataFormatEacR11G11UnormBlock = 154,
            DataFormatEacR11G11SnormBlock = 155,
            DataFormatAstc4X4UnormBlock = 156,
            DataFormatAstc4X4SrgbBlock = 157,
            DataFormatAstc5X4UnormBlock = 158,
            DataFormatAstc5X4SrgbBlock = 159,
            DataFormatAstc5X5UnormBlock = 160,
            DataFormatAstc5X5SrgbBlock = 161,
            DataFormatAstc6X5UnormBlock = 162,
            DataFormatAstc6X5SrgbBlock = 163,
            DataFormatAstc6X6UnormBlock = 164,
            DataFormatAstc6X6SrgbBlock = 165,
            DataFormatAstc8X5UnormBlock = 166,
            DataFormatAstc8X5SrgbBlock = 167,
            DataFormatAstc8X6UnormBlock = 168,
            DataFormatAstc8X6SrgbBlock = 169,
            DataFormatAstc8X8UnormBlock = 170,
            DataFormatAstc8X8SrgbBlock = 171,
            DataFormatAstc10X5UnormBlock = 172,
            DataFormatAstc10X5SrgbBlock = 173,
            DataFormatAstc10X6UnormBlock = 174,
            DataFormatAstc10X6SrgbBlock = 175,
            DataFormatAstc10X8UnormBlock = 176,
            DataFormatAstc10X8SrgbBlock = 177,
            DataFormatAstc10X10UnormBlock = 178,
            DataFormatAstc10X10SrgbBlock = 179,
            DataFormatAstc12X10UnormBlock = 180,
            DataFormatAstc12X10SrgbBlock = 181,
            DataFormatAstc12X12UnormBlock = 182,
            DataFormatAstc12X12SrgbBlock = 183,
            DataFormatG8B8G8R8422Unorm = 184,
            DataFormatB8G8R8G8422Unorm = 185,
            DataFormatG8B8R83Plane420Unorm = 186,
            DataFormatG8B8R82Plane420Unorm = 187,
            DataFormatG8B8R83Plane422Unorm = 188,
            DataFormatG8B8R82Plane422Unorm = 189,
            DataFormatG8B8R83Plane444Unorm = 190,
            DataFormatR10X6UnormPack16 = 191,
            DataFormatR10X6G10X6Unorm2Pack16 = 192,
            DataFormatR10X6G10X6B10X6A10X6Unorm4Pack16 = 193,
            DataFormatG10X6B10X6G10X6R10X6422Unorm4Pack16 = 194,
            DataFormatB10X6G10X6R10X6G10X6422Unorm4Pack16 = 195,
            DataFormatG10X6B10X6R10X63Plane420Unorm3Pack16 = 196,
            DataFormatG10X6B10X6R10X62Plane420Unorm3Pack16 = 197,
            DataFormatG10X6B10X6R10X63Plane422Unorm3Pack16 = 198,
            DataFormatG10X6B10X6R10X62Plane422Unorm3Pack16 = 199,
            DataFormatG10X6B10X6R10X63Plane444Unorm3Pack16 = 200,
            DataFormatR12X4UnormPack16 = 201,
            DataFormatR12X4G12X4Unorm2Pack16 = 202,
            DataFormatR12X4G12X4B12X4A12X4Unorm4Pack16 = 203,
            DataFormatG12X4B12X4G12X4R12X4422Unorm4Pack16 = 204,
            DataFormatB12X4G12X4R12X4G12X4422Unorm4Pack16 = 205,
            DataFormatG12X4B12X4R12X43Plane420Unorm3Pack16 = 206,
            DataFormatG12X4B12X4R12X42Plane420Unorm3Pack16 = 207,
            DataFormatG12X4B12X4R12X43Plane422Unorm3Pack16 = 208,
            DataFormatG12X4B12X4R12X42Plane422Unorm3Pack16 = 209,
            DataFormatG12X4B12X4R12X43Plane444Unorm3Pack16 = 210,
            DataFormatG16B16G16R16422Unorm = 211,
            DataFormatB16G16R16G16422Unorm = 212,
            DataFormatG16B16R163Plane420Unorm = 213,
            DataFormatG16B16R162Plane420Unorm = 214,
            DataFormatG16B16R163Plane422Unorm = 215,
            DataFormatG16B16R162Plane422Unorm = 216,
            DataFormatG16B16R163Plane444Unorm = 217,
            DataFormatAstc4X4SfloatBlock = 218,
            DataFormatAstc5X4SfloatBlock = 219,
            DataFormatAstc5X5SfloatBlock = 220,
            DataFormatAstc6X5SfloatBlock = 221,
            DataFormatAstc6X6SfloatBlock = 222,
            DataFormatAstc8X5SfloatBlock = 223,
            DataFormatAstc8X6SfloatBlock = 224,
            DataFormatAstc8X8SfloatBlock = 225,
            DataFormatAstc10X5SfloatBlock = 226,
            DataFormatAstc10X6SfloatBlock = 227,
            DataFormatAstc10X8SfloatBlock = 228,
            DataFormatAstc10X10SfloatBlock = 229,
            DataFormatAstc12X10SfloatBlock = 230,
            DataFormatAstc12X12SfloatBlock = 231,
            DataFormatMax = 232,
        }
        enum BarrierMask {
            BarrierMaskVertex = 1,
            BarrierMaskFragment = 8,
            BarrierMaskCompute = 2,
            BarrierMaskTransfer = 4,
            BarrierMaskRaster = 9,
            BarrierMaskAllBarriers = 32767,
            BarrierMaskNoBarrier = 32768,
        }
        enum TextureType {
            TextureType1D = 0,
            TextureType2D = 1,
            TextureType3D = 2,
            TextureTypeCube = 3,
            TextureType1DArray = 4,
            TextureType2DArray = 5,
            TextureTypeCubeArray = 6,
            TextureTypeMax = 7,
        }
        enum TextureSamples {
            TextureSamples1 = 0,
            TextureSamples2 = 1,
            TextureSamples4 = 2,
            TextureSamples8 = 3,
            TextureSamples16 = 4,
            TextureSamples32 = 5,
            TextureSamples64 = 6,
            TextureSamplesMax = 7,
        }
        enum TextureUsageBits {
            TextureUsageSamplingBit = 1,
            TextureUsageColorAttachmentBit = 2,
            TextureUsageDepthStencilAttachmentBit = 4,
            TextureUsageStorageBit = 8,
            TextureUsageStorageAtomicBit = 16,
            TextureUsageCpuReadBit = 32,
            TextureUsageCanUpdateBit = 64,
            TextureUsageCanCopyFromBit = 128,
            TextureUsageCanCopyToBit = 256,
            TextureUsageInputAttachmentBit = 512,
        }
        enum TextureSwizzle {
            TextureSwizzleIdentity = 0,
            TextureSwizzleZero = 1,
            TextureSwizzleOne = 2,
            TextureSwizzleR = 3,
            TextureSwizzleG = 4,
            TextureSwizzleB = 5,
            TextureSwizzleA = 6,
            TextureSwizzleMax = 7,
        }
        enum TextureSliceType {
            TextureSlice2D = 0,
            TextureSliceCubemap = 1,
            TextureSlice3D = 2,
        }
        enum SamplerFilter {
            SamplerFilterNearest = 0,
            SamplerFilterLinear = 1,
        }
        enum SamplerRepeatMode {
            SamplerRepeatModeRepeat = 0,
            SamplerRepeatModeMirroredRepeat = 1,
            SamplerRepeatModeClampToEdge = 2,
            SamplerRepeatModeClampToBorder = 3,
            SamplerRepeatModeMirrorClampToEdge = 4,
            SamplerRepeatModeMax = 5,
        }
        enum SamplerBorderColor {
            SamplerBorderColorFloatTransparentBlack = 0,
            SamplerBorderColorIntTransparentBlack = 1,
            SamplerBorderColorFloatOpaqueBlack = 2,
            SamplerBorderColorIntOpaqueBlack = 3,
            SamplerBorderColorFloatOpaqueWhite = 4,
            SamplerBorderColorIntOpaqueWhite = 5,
            SamplerBorderColorMax = 6,
        }
        enum VertexFrequency {
            VertexFrequencyVertex = 0,
            VertexFrequencyInstance = 1,
        }
        enum IndexBufferFormat {
            IndexBufferFormatUint16 = 0,
            IndexBufferFormatUint32 = 1,
        }
        enum StorageBufferUsage {
            StorageBufferUsageDispatchIndirect = 1,
        }
        enum BufferCreationBits {
            BufferCreationDeviceAddressBit = 1,
            BufferCreationAsStorageBit = 2,
        }
        enum UniformType {
            UniformTypeSampler = 0,
            UniformTypeSamplerWithTexture = 1,
            UniformTypeTexture = 2,
            UniformTypeImage = 3,
            UniformTypeTextureBuffer = 4,
            UniformTypeSamplerWithTextureBuffer = 5,
            UniformTypeImageBuffer = 6,
            UniformTypeUniformBuffer = 7,
            UniformTypeStorageBuffer = 8,
            UniformTypeInputAttachment = 9,
            UniformTypeMax = 10,
        }
        enum RenderPrimitive {
            RenderPrimitivePoints = 0,
            RenderPrimitiveLines = 1,
            RenderPrimitiveLinesWithAdjacency = 2,
            RenderPrimitiveLinestrips = 3,
            RenderPrimitiveLinestripsWithAdjacency = 4,
            RenderPrimitiveTriangles = 5,
            RenderPrimitiveTrianglesWithAdjacency = 6,
            RenderPrimitiveTriangleStrips = 7,
            RenderPrimitiveTriangleStripsWithAjacency = 8,
            RenderPrimitiveTriangleStripsWithRestartIndex = 9,
            RenderPrimitiveTesselationPatch = 10,
            RenderPrimitiveMax = 11,
        }
        enum PolygonCullMode {
            PolygonCullDisabled = 0,
            PolygonCullFront = 1,
            PolygonCullBack = 2,
        }
        enum PolygonFrontFace {
            PolygonFrontFaceClockwise = 0,
            PolygonFrontFaceCounterClockwise = 1,
        }
        enum StencilOperation {
            StencilOpKeep = 0,
            StencilOpZero = 1,
            StencilOpReplace = 2,
            StencilOpIncrementAndClamp = 3,
            StencilOpDecrementAndClamp = 4,
            StencilOpInvert = 5,
            StencilOpIncrementAndWrap = 6,
            StencilOpDecrementAndWrap = 7,
            StencilOpMax = 8,
        }
        enum CompareOperator {
            CompareOpNever = 0,
            CompareOpLess = 1,
            CompareOpEqual = 2,
            CompareOpLessOrEqual = 3,
            CompareOpGreater = 4,
            CompareOpNotEqual = 5,
            CompareOpGreaterOrEqual = 6,
            CompareOpAlways = 7,
            CompareOpMax = 8,
        }
        enum LogicOperation {
            LogicOpClear = 0,
            LogicOpAnd = 1,
            LogicOpAndReverse = 2,
            LogicOpCopy = 3,
            LogicOpAndInverted = 4,
            LogicOpNoOp = 5,
            LogicOpXor = 6,
            LogicOpOr = 7,
            LogicOpNor = 8,
            LogicOpEquivalent = 9,
            LogicOpInvert = 10,
            LogicOpOrReverse = 11,
            LogicOpCopyInverted = 12,
            LogicOpOrInverted = 13,
            LogicOpNand = 14,
            LogicOpSet = 15,
            LogicOpMax = 16,
        }
        enum BlendFactor {
            BlendFactorZero = 0,
            BlendFactorOne = 1,
            BlendFactorSrcColor = 2,
            BlendFactorOneMinusSrcColor = 3,
            BlendFactorDstColor = 4,
            BlendFactorOneMinusDstColor = 5,
            BlendFactorSrcAlpha = 6,
            BlendFactorOneMinusSrcAlpha = 7,
            BlendFactorDstAlpha = 8,
            BlendFactorOneMinusDstAlpha = 9,
            BlendFactorConstantColor = 10,
            BlendFactorOneMinusConstantColor = 11,
            BlendFactorConstantAlpha = 12,
            BlendFactorOneMinusConstantAlpha = 13,
            BlendFactorSrcAlphaSaturate = 14,
            BlendFactorSrc1Color = 15,
            BlendFactorOneMinusSrc1Color = 16,
            BlendFactorSrc1Alpha = 17,
            BlendFactorOneMinusSrc1Alpha = 18,
            BlendFactorMax = 19,
        }
        enum BlendOperation {
            BlendOpAdd = 0,
            BlendOpSubtract = 1,
            BlendOpReverseSubtract = 2,
            BlendOpMinimum = 3,
            BlendOpMaximum = 4,
            BlendOpMax = 5,
        }
        enum PipelineDynamicStateFlags {
            DynamicStateLineWidth = 1,
            DynamicStateDepthBias = 2,
            DynamicStateBlendConstants = 4,
            DynamicStateDepthBounds = 8,
            DynamicStateStencilCompareMask = 16,
            DynamicStateStencilWriteMask = 32,
            DynamicStateStencilReference = 64,
        }
        enum InitialAction {
            InitialActionLoad = 0,
            InitialActionClear = 1,
            InitialActionDiscard = 2,
            InitialActionMax = 3,
            InitialActionClearRegion = 1,
            InitialActionClearRegionContinue = 1,
            InitialActionKeep = 0,
            InitialActionDrop = 2,
            InitialActionContinue = 0,
        }
        enum FinalAction {
            FinalActionStore = 0,
            FinalActionDiscard = 1,
            FinalActionMax = 2,
            FinalActionRead = 0,
            FinalActionContinue = 0,
        }
        enum ShaderStage {
            ShaderStageVertex = 0,
            ShaderStageFragment = 1,
            ShaderStageTesselationControl = 2,
            ShaderStageTesselationEvaluation = 3,
            ShaderStageCompute = 4,
            ShaderStageMax = 5,
            ShaderStageVertexBit = 1,
            ShaderStageFragmentBit = 2,
            ShaderStageTesselationControlBit = 4,
            ShaderStageTesselationEvaluationBit = 8,
            ShaderStageComputeBit = 16,
        }
        enum ShaderLanguage {
            ShaderLanguageGlsl = 0,
            ShaderLanguageHlsl = 1,
        }
        enum PipelineSpecializationConstantType {
            PipelineSpecializationConstantTypeBool = 0,
            PipelineSpecializationConstantTypeInt = 1,
            PipelineSpecializationConstantTypeFloat = 2,
        }
        enum Features {
            SupportsMetalfxSpatial = 3,
            SupportsMetalfxTemporal = 4,
            SupportsBufferDeviceAddress = 6,
            SupportsImageAtomic32Bit = 7,
        }
        enum Limit {
            LimitMaxBoundUniformSets = 0,
            LimitMaxFramebufferColorAttachments = 1,
            LimitMaxTexturesPerUniformSet = 2,
            LimitMaxSamplersPerUniformSet = 3,
            LimitMaxStorageBuffersPerUniformSet = 4,
            LimitMaxStorageImagesPerUniformSet = 5,
            LimitMaxUniformBuffersPerUniformSet = 6,
            LimitMaxDrawIndexedIndex = 7,
            LimitMaxFramebufferHeight = 8,
            LimitMaxFramebufferWidth = 9,
            LimitMaxTextureArrayLayers = 10,
            LimitMaxTextureSize1D = 11,
            LimitMaxTextureSize2D = 12,
            LimitMaxTextureSize3D = 13,
            LimitMaxTextureSizeCube = 14,
            LimitMaxTexturesPerShaderStage = 15,
            LimitMaxSamplersPerShaderStage = 16,
            LimitMaxStorageBuffersPerShaderStage = 17,
            LimitMaxStorageImagesPerShaderStage = 18,
            LimitMaxUniformBuffersPerShaderStage = 19,
            LimitMaxPushConstantSize = 20,
            LimitMaxUniformBufferSize = 21,
            LimitMaxVertexInputAttributeOffset = 22,
            LimitMaxVertexInputAttributes = 23,
            LimitMaxVertexInputBindings = 24,
            LimitMaxVertexInputBindingStride = 25,
            LimitMinUniformBufferOffsetAlignment = 26,
            LimitMaxComputeSharedMemorySize = 27,
            LimitMaxComputeWorkgroupCountX = 28,
            LimitMaxComputeWorkgroupCountY = 29,
            LimitMaxComputeWorkgroupCountZ = 30,
            LimitMaxComputeWorkgroupInvocations = 31,
            LimitMaxComputeWorkgroupSizeX = 32,
            LimitMaxComputeWorkgroupSizeY = 33,
            LimitMaxComputeWorkgroupSizeZ = 34,
            LimitMaxViewportDimensionsX = 35,
            LimitMaxViewportDimensionsY = 36,
            LimitMetalfxTemporalScalerMinScale = 46,
            LimitMetalfxTemporalScalerMaxScale = 47,
        }
        enum MemoryType {
            MemoryTextures = 0,
            MemoryBuffers = 1,
            MemoryTotal = 2,
        }
        enum BreadcrumbMarker {
            None = 0,
            ReflectionProbes = 65536,
            SkyPass = 131072,
            LightmapperPass = 196608,
            ShadowPassDirectional = 262144,
            ShadowPassCube = 327680,
            OpaquePass = 393216,
            AlphaPass = 458752,
            TransparentPass = 524288,
            PostProcessingPass = 589824,
            BlitPass = 655360,
            UiPass = 720896,
            DebugPass = 786432,
        }
        enum DrawFlags {
            DrawDefaultAll = 0,
            DrawClearColor0 = 1,
            DrawClearColor1 = 2,
            DrawClearColor2 = 4,
            DrawClearColor3 = 8,
            DrawClearColor4 = 16,
            DrawClearColor5 = 32,
            DrawClearColor6 = 64,
            DrawClearColor7 = 128,
            DrawClearColorMask = 255,
            DrawClearColorAll = 255,
            DrawIgnoreColor0 = 256,
            DrawIgnoreColor1 = 512,
            DrawIgnoreColor2 = 1024,
            DrawIgnoreColor3 = 2048,
            DrawIgnoreColor4 = 4096,
            DrawIgnoreColor5 = 8192,
            DrawIgnoreColor6 = 16384,
            DrawIgnoreColor7 = 32768,
            DrawIgnoreColorMask = 65280,
            DrawIgnoreColorAll = 65280,
            DrawClearDepth = 65536,
            DrawIgnoreDepth = 131072,
            DrawClearStencil = 262144,
            DrawIgnoreStencil = 524288,
            DrawClearAll = 327935,
            DrawIgnoreAll = 720640,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRenderingDevice extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRenderingDevice extends __NameMapGObject {
        texture_create: "textureCreate";
        texture_create_shared: "textureCreateShared";
        texture_create_shared_from_slice: "textureCreateSharedFromSlice";
        texture_create_from_extension: "textureCreateFromExtension";
        texture_update: "textureUpdate";
        texture_get_data: "textureGetData";
        texture_get_data_async: "textureGetDataAsync";
        texture_is_format_supported_for_usage: "textureIsFormatSupportedForUsage";
        texture_is_shared: "textureIsShared";
        texture_is_valid: "textureIsValid";
        texture_set_discardable: "textureSetDiscardable";
        texture_is_discardable: "textureIsDiscardable";
        texture_copy: "textureCopy";
        texture_clear: "textureClear";
        texture_resolve_multisample: "textureResolveMultisample";
        texture_get_format: "textureGetFormat";
        texture_get_native_handle: "textureGetNativeHandle";
        framebuffer_format_create: "framebufferFormatCreate";
        framebuffer_format_create_multipass: "framebufferFormatCreateMultipass";
        framebuffer_format_create_empty: "framebufferFormatCreateEmpty";
        framebuffer_format_get_texture_samples: "framebufferFormatGetTextureSamples";
        framebuffer_create: "framebufferCreate";
        framebuffer_create_multipass: "framebufferCreateMultipass";
        framebuffer_create_empty: "framebufferCreateEmpty";
        framebuffer_get_format: "framebufferGetFormat";
        framebuffer_is_valid: "framebufferIsValid";
        sampler_create: "samplerCreate";
        sampler_is_format_supported_for_filter: "samplerIsFormatSupportedForFilter";
        vertex_buffer_create: "vertexBufferCreate";
        vertex_format_create: "vertexFormatCreate";
        vertex_array_create: "vertexArrayCreate";
        index_buffer_create: "indexBufferCreate";
        index_array_create: "indexArrayCreate";
        shader_compile_spirv_from_source: "shaderCompileSpirVFromSource";
        shader_compile_binary_from_spirv: "shaderCompileBinaryFromSpirV";
        shader_create_from_spirv: "shaderCreateFromSpirV";
        shader_create_from_bytecode: "shaderCreateFromBytecode";
        shader_create_placeholder: "shaderCreatePlaceholder";
        shader_get_vertex_input_attribute_mask: "shaderGetVertexInputAttributeMask";
        uniform_buffer_create: "uniformBufferCreate";
        storage_buffer_create: "storageBufferCreate";
        texture_buffer_create: "textureBufferCreate";
        uniform_set_create: "uniformSetCreate";
        uniform_set_is_valid: "uniformSetIsValid";
        buffer_copy: "bufferCopy";
        buffer_update: "bufferUpdate";
        buffer_clear: "bufferClear";
        buffer_get_data: "bufferGetData";
        buffer_get_data_async: "bufferGetDataAsync";
        buffer_get_device_address: "bufferGetDeviceAddress";
        render_pipeline_create: "renderPipelineCreate";
        render_pipeline_is_valid: "renderPipelineIsValid";
        compute_pipeline_create: "computePipelineCreate";
        compute_pipeline_is_valid: "computePipelineIsValid";
        screen_get_width: "screenGetWidth";
        screen_get_height: "screenGetHeight";
        screen_get_framebuffer_format: "screenGetFramebufferFormat";
        draw_list_begin_for_screen: "drawListBeginForScreen";
        draw_list_begin: "drawListBegin";
        draw_list_begin_split: "drawListBeginSplit";
        draw_list_set_blend_constants: "drawListSetBlendConstants";
        draw_list_bind_render_pipeline: "drawListBindRenderPipeline";
        draw_list_bind_uniform_set: "drawListBindUniformSet";
        draw_list_bind_vertex_array: "drawListBindVertexArray";
        draw_list_bind_index_array: "drawListBindIndexArray";
        draw_list_set_push_constant: "drawListSetPushConstant";
        draw_list_draw: "drawListDraw";
        draw_list_draw_indirect: "drawListDrawIndirect";
        draw_list_enable_scissor: "drawListEnableScissor";
        draw_list_disable_scissor: "drawListDisableScissor";
        draw_list_switch_to_next_pass: "drawListSwitchToNextPass";
        draw_list_switch_to_next_pass_split: "drawListSwitchToNextPassSplit";
        draw_list_end: "drawListEnd";
        compute_list_begin: "computeListBegin";
        compute_list_bind_compute_pipeline: "computeListBindComputePipeline";
        compute_list_set_push_constant: "computeListSetPushConstant";
        compute_list_bind_uniform_set: "computeListBindUniformSet";
        compute_list_dispatch: "computeListDispatch";
        compute_list_dispatch_indirect: "computeListDispatchIndirect";
        compute_list_add_barrier: "computeListAddBarrier";
        compute_list_end: "computeListEnd";
        free_rid: "freeRid";
        capture_timestamp: "captureTimestamp";
        get_captured_timestamps_count: "getCapturedTimestampsCount";
        get_captured_timestamps_frame: "getCapturedTimestampsFrame";
        get_captured_timestamp_gpu_time: "getCapturedTimestampGpuTime";
        get_captured_timestamp_cpu_time: "getCapturedTimestampCpuTime";
        get_captured_timestamp_name: "getCapturedTimestampName";
        has_feature: "hasFeature";
        limit_get: "limitGet";
        get_frame_delay: "getFrameDelay";
        full_barrier: "fullBarrier";
        create_local_device: "createLocalDevice";
        set_resource_name: "setResourceName";
        draw_command_begin_label: "drawCommandBeginLabel";
        draw_command_insert_label: "drawCommandInsertLabel";
        draw_command_end_label: "drawCommandEndLabel";
        get_device_vendor_name: "getDeviceVendorName";
        get_device_name: "getDeviceName";
        get_device_pipeline_cache_uuid: "getDevicePipelineCacheUuid";
        get_memory_usage: "getMemoryUsage";
        get_driver_resource: "getDriverResource";
        get_perf_report: "getPerfReport";
        get_driver_and_device_memory_report: "getDriverAndDeviceMemoryReport";
        get_tracked_object_name: "getTrackedObjectName";
        get_tracked_object_type_count: "getTrackedObjectTypeCount";
        get_driver_total_memory: "getDriverTotalMemory";
        get_driver_allocation_count: "getDriverAllocationCount";
        get_driver_memory_by_object_type: "getDriverMemoryByObjectType";
        get_driver_allocs_by_object_type: "getDriverAllocsByObjectType";
        get_device_total_memory: "getDeviceTotalMemory";
        get_device_allocation_count: "getDeviceAllocationCount";
        get_device_memory_by_object_type: "getDeviceMemoryByObjectType";
        get_device_allocs_by_object_type: "getDeviceAllocsByObjectType";
    }
    /** Abstraction for working with modern low-level graphics APIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_renderingdevice.html  
     */
    class RenderingDevice extends GObject {
        /** Returned by functions that return an ID if a value is invalid. */
        static readonly INVALID_ID = -1
        
        /** Returned by functions that return a format ID if a value is invalid. */
        static readonly INVALID_FORMAT_ID = -1
        constructor(identifier?: any)
        
        /** Creates a new texture. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         *      
         *  **Note:** [param data] takes an [Array] of [PackedByteArray]s. For [constant TEXTURE_TYPE_1D], [constant TEXTURE_TYPE_2D], and [constant TEXTURE_TYPE_3D] types, this array should only have one element, a [PackedByteArray] containing all the data for the texture. For `_ARRAY` and `_CUBE` types, the length should be the same as the number of [member RDTextureFormat.array_layers] in [param format].  
         *      
         *  **Note:** Not to be confused with [method RenderingServer.texture_2d_create], which creates the Godot-specific [Texture2D] resource as opposed to the graphics API's own texture type.  
         */
        textureCreate(format: RDTextureFormat, view: RDTextureView, data?: GArray<PackedByteArray>): Rid
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]. */
        textureCreateShared(view: RDTextureView, withTexture: Rid): Rid
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]'s [param layer] and [param mipmap]. The number of included mipmaps from the original texture can be controlled using the [param mipmaps] parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use [method texture_create_shared].  
         *  For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.  
         */
        textureCreateSharedFromSlice(view: RDTextureView, withTexture: Rid, layer: int64, mipmap: int64, mipmaps?: int64 /* = 1 */, sliceType?: RenderingDevice.TextureSliceType /* = 0 */): Rid
        
        /** Returns an RID for an existing [param image] (`VkImage`) with the given [param type], [param format], [param samples], [param usage_flags], [param width], [param height], [param depth], [param layers], and [param mipmaps]. This can be used to allow Godot to render onto foreign images. */
        textureCreateFromExtension(type: RenderingDevice.TextureType, format: RenderingDevice.DataFormat, samples: RenderingDevice.TextureSamples, usageFlags: RenderingDevice.TextureUsageBits, image: int64, width: int64, height: int64, depth: int64, layers: int64, mipmaps?: int64 /* = 1 */): Rid
        
        /** Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), [param layer] must be `0`. Returns [constant @GlobalScope.OK] if the update was successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** Updating textures is forbidden during creation of a draw or compute list.  
         *      
         *  **Note:** The existing [param texture] can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to update this texture.  
         *      
         *  **Note:** The existing [param texture] requires the [constant TEXTURE_USAGE_CAN_UPDATE_BIT] to be updatable.  
         */
        textureUpdate(texture: Rid, layer: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Returns the [param texture] data for the specified [param layer] as raw binary data. For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** [param texture] can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to retrieve this texture. Otherwise, an error is printed and an empty [PackedByteArray] is returned.  
         *      
         *  **Note:** [param texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved. Otherwise, an error is printed and an empty [PackedByteArray] is returned.  
         *      
         *  **Note:** This method will block the GPU from working until the data is retrieved. Refer to [method texture_get_data_async] for an alternative that returns the data in more performant way.  
         */
        textureGetData(texture: Rid, layer: int64): PackedByteArray
        
        /** Asynchronous version of [method texture_get_data]. RenderingDevice will call [param callback] in a certain amount of frames with the data the texture had at the time of the request.  
         *      
         *  **Note:** At the moment, the delay corresponds to the amount of frames specified by [member ProjectSettings.rendering/rendering_device/vsync/frame_queue_size].  
         *      
         *  **Note:** Downloading large textures can have a prohibitive cost for real-time even when using the asynchronous method due to hardware bandwidth limitations. When dealing with large resources, you can adjust settings such as [member ProjectSettings.rendering/rendering_device/staging_buffer/texture_download_region_size_px] and [member ProjectSettings.rendering/rendering_device/staging_buffer/block_size_kb] to improve the transfer speed at the cost of extra memory.  
         *    
         */
        textureGetDataAsync(texture: Rid, layer: int64, callback: Callable): GError
        
        /** Returns `true` if the specified [param format] is supported for the given [param usage_flags], `false` otherwise. */
        textureIsFormatSupportedForUsage(format: RenderingDevice.DataFormat, usageFlags: RenderingDevice.TextureUsageBits): boolean
        
        /** Returns `true` if the [param texture] is shared, `false` otherwise. See [RDTextureView]. */
        textureIsShared(texture: Rid): boolean
        
        /** Returns `true` if the [param texture] is valid, `false` otherwise. */
        textureIsValid(texture: Rid): boolean
        
        /** Updates the discardable property of [param texture].  
         *  If a texture is discardable, its contents do not need to be preserved between frames. This flag is only relevant when the texture is used as target in a draw list.  
         *  This information is used by [RenderingDevice] to figure out if a texture's contents can be discarded, eliminating unnecessary writes to memory and boosting performance.  
         */
        textureSetDiscardable(texture: Rid, discardable: boolean): void
        
        /** Returns `true` if the [param texture] is discardable, `false` otherwise. See [RDTextureFormat] or [method texture_set_discardable]. */
        textureIsDiscardable(texture: Rid): boolean
        
        /** Copies the [param from_texture] to [param to_texture] with the specified [param from_pos], [param to_pos] and [param size] coordinates. The Z axis of the [param from_pos], [param to_pos] and [param size] must be `0` for 2-dimensional textures. Source and destination mipmaps/layers must also be specified, with these parameters being `0` for textures without mipmaps or single-layer textures. Returns [constant @GlobalScope.OK] if the texture copy was successful or [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** [param from_texture] texture can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.  
         *      
         *  **Note:** [param from_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.  
         *      
         *  **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.  
         *      
         *  **Note:** [param to_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.  
         *      
         *  **Note:** [param from_texture] and [param to_texture] must be of the same type (color or depth).  
         */
        textureCopy(fromTexture: Rid, toTexture: Rid, fromPos: Vector3, toPos: Vector3, size: Vector3, srcMipmap: int64, dstMipmap: int64, srcLayer: int64, dstLayer: int64): GError
        
        /** Clears the specified [param texture] by replacing all of its pixels with the specified [param color]. [param base_mipmap] and [param mipmap_count] determine which mipmaps of the texture are affected by this clear operation, while [param base_layer] and [param layer_count] determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), [param base_layer] must be `0` and [param layer_count] must be `1`.  
         *      
         *  **Note:** [param texture] can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to clear this texture.  
         */
        textureClear(texture: Rid, color: Color, baseMipmap: int64, mipmapCount: int64, baseLayer: int64, layerCount: int64): GError
        
        /** Resolves the [param from_texture] texture onto [param to_texture] with multisample antialiasing enabled. This must be used when rendering a framebuffer for MSAA to work. Returns [constant @GlobalScope.OK] if successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** [param from_texture] and [param to_texture] textures must have the same dimension, format and type (color or depth).  
         *      
         *  **Note:** [param from_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.  
         *      
         *  **Note:** [param from_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.  
         *      
         *  **Note:** [param from_texture] must be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).  
         *      
         *  **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.  
         *      
         *  **Note:** [param to_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.  
         *      
         *  **Note:** [param to_texture] texture must **not** be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).  
         */
        textureResolveMultisample(fromTexture: Rid, toTexture: Rid): GError
        
        /** Returns the data format used to create this texture. */
        textureGetFormat(texture: Rid): null | RDTextureFormat
        
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.  
         *      
         *  **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).  
         */
        textureGetNativeHandle(texture: Rid): int64
        
        /** Creates a new framebuffer format with the specified [param attachments] and [param view_count]. Returns the new framebuffer's unique framebuffer format ID.  
         *  If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.  
         */
        framebufferFormatCreate(attachments: GArray<RDAttachmentFormat>, viewCount?: int64 /* = 1 */): int64
        
        /** Creates a multipass framebuffer format with the specified [param attachments], [param passes] and [param view_count] and returns its ID. If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension. */
        framebufferFormatCreateMultipass(attachments: GArray<RDAttachmentFormat>, passes: GArray<RDFramebufferPass>, viewCount?: int64 /* = 1 */): int64
        
        /** Creates a new empty framebuffer format with the specified number of [param samples] and returns its ID. */
        framebufferFormatCreateEmpty(samples?: RenderingDevice.TextureSamples /* = 0 */): int64
        
        /** Returns the number of texture samples used for the given framebuffer [param format] ID (returned by [method framebuffer_get_format]). */
        framebufferFormatGetTextureSamples(format: int64, renderPass?: int64 /* = 0 */): RenderingDevice.TextureSamples
        
        /** Creates a new framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebufferCreate(textures: GArray<Rid>, validateWithFormat?: int64 /* = -1 */, viewCount?: int64 /* = 1 */): Rid
        
        /** Creates a new multipass framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebufferCreateMultipass(textures: GArray<Rid>, passes: GArray<RDFramebufferPass>, validateWithFormat?: int64 /* = -1 */, viewCount?: int64 /* = 1 */): Rid
        
        /** Creates a new empty framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebufferCreateEmpty(size: Vector2I, samples?: RenderingDevice.TextureSamples /* = 0 */, validateWithFormat?: int64 /* = -1 */): Rid
        
        /** Returns the format ID of the framebuffer specified by the [param framebuffer] RID. This ID is guaranteed to be unique for the same formats and does not need to be freed. */
        framebufferGetFormat(framebuffer: Rid): int64
        
        /** Returns `true` if the framebuffer specified by the [param framebuffer] RID is valid, `false` otherwise. */
        framebufferIsValid(framebuffer: Rid): boolean
        
        /** Creates a new sampler. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        samplerCreate(state: RDSamplerState): Rid
        
        /** Returns `true` if implementation supports using a texture of [param format] with the given [param sampler_filter]. */
        samplerIsFormatSupportedForFilter(format: RenderingDevice.DataFormat, samplerFilter: RenderingDevice.SamplerFilter): boolean
        
        /** Creates a new vertex buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        vertexBufferCreate(sizeBytes: int64, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a new vertex format with the specified [param vertex_descriptions]. Returns a unique vertex format ID corresponding to the newly created vertex format. */
        vertexFormatCreate(vertexDescriptions: GArray<RDVertexAttribute>): int64
        
        /** Creates a vertex array based on the specified buffers. Optionally, [param offsets] (in bytes) may be defined for each buffer. */
        vertexArrayCreate(vertexCount: int64, vertexFormat: int64, srcBuffers: GArray<Rid>, offsets?: PackedInt64Array | int64[] /* = [] */): Rid
        
        /** Creates a new index buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        indexBufferCreate(sizeIndices: int64, format: RenderingDevice.IndexBufferFormat, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, useRestartIndices?: boolean /* = false */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a new index array. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        indexArrayCreate(indexBuffer: Rid, indexOffset: int64, indexCount: int64): Rid
        
        /** Compiles a SPIR-V from the shader source code in [param shader_source] and returns the SPIR-V as an [RDShaderSPIRV]. This intermediate language shader is portable across different GPU models and driver versions, but cannot be run directly by GPUs until compiled into a binary shader using [method shader_compile_binary_from_spirv].  
         *  If [param allow_cache] is `true`, make use of the shader cache generated by Godot. This avoids a potentially lengthy shader compilation step if the shader is already in cache. If [param allow_cache] is `false`, Godot's shader cache is ignored and the shader will always be recompiled.  
         */
        shaderCompileSpirVFromSource(shaderSource: RDShaderSource, allowCache?: boolean /* = true */): null | RDShaderSpirV
        
        /** Compiles a binary shader from [param spirv_data] and returns the compiled binary data as a [PackedByteArray]. This compiled shader is specific to the GPU model and driver version used; it will not work on different GPU models or even different driver versions. See also [method shader_compile_spirv_from_source].  
         *  [param name] is an optional human-readable name that can be given to the compiled shader for organizational purposes.  
         */
        shaderCompileBinaryFromSpirV(spirVData: RDShaderSpirV, name?: string /* = '' */): PackedByteArray
        
        /** Creates a new shader instance from SPIR-V intermediate code. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_spirv_from_source] and [method shader_create_from_bytecode].  
         */
        shaderCreateFromSpirV(spirVData: RDShaderSpirV, name?: string /* = '' */): Rid
        
        /** Creates a new shader instance from a binary compiled shader. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_binary_from_spirv] and [method shader_create_from_spirv].  
         */
        shaderCreateFromBytecode(binaryData: PackedByteArray | byte[] | ArrayBuffer, placeholderRid?: Rid /* = new Rid() */): Rid
        
        /** Create a placeholder RID by allocating an RID without initializing it for use in [method shader_create_from_bytecode]. This allows you to create an RID for a shader and pass it around, but defer compiling the shader to a later time. */
        shaderCreatePlaceholder(): Rid
        
        /** Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. `layout(location = ...)`) of the input variables (specified in GLSL by the `in` keyword). */
        shaderGetVertexInputAttributeMask(shader: Rid): int64
        
        /** Creates a new uniform buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniformBufferCreate(sizeBytes: int64, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffer[/url] with the specified [param data] and [param usage]. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        storageBufferCreate(sizeBytes: int64, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, usage?: RenderingDevice.StorageBufferUsage /* = 0 */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a new texture buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        textureBufferCreate(sizeBytes: int64, format: RenderingDevice.DataFormat, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */): Rid
        
        /** Creates a new uniform set. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniformSetCreate(uniforms: GArray<RDUniform>, shader: Rid, shaderSet: int64): Rid
        
        /** Checks if the [param uniform_set] is valid, i.e. is owned. */
        uniformSetIsValid(uniformSet: Rid): boolean
        
        /** Copies [param size] bytes from the [param src_buffer] at [param src_offset] into [param dst_buffer] at [param dst_offset].  
         *  Prints an error if:  
         *  - [param size] exceeds the size of either [param src_buffer] or [param dst_buffer] at their corresponding offsets  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        bufferCopy(srcBuffer: Rid, dstBuffer: Rid, srcOffset: int64, dstOffset: int64, size: int64): GError
        
        /** Updates a region of [param size_bytes] bytes, starting at [param offset], in the buffer, with the specified [param data].  
         *  Prints an error if:  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        bufferUpdate(buffer: Rid, offset: int64, sizeBytes: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Clears the contents of the [param buffer], clearing [param size_bytes] bytes, starting at [param offset].  
         *  Prints an error if:  
         *  - the size isn't a multiple of four  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        bufferClear(buffer: Rid, offset: int64, sizeBytes: int64): GError
        
        /** Returns a copy of the data of the specified [param buffer], optionally [param offset_bytes] and [param size_bytes] can be set to copy only a portion of the buffer.  
         *      
         *  **Note:** This method will block the GPU from working until the data is retrieved. Refer to [method buffer_get_data_async] for an alternative that returns the data in more performant way.  
         */
        bufferGetData(buffer: Rid, offsetBytes?: int64 /* = 0 */, sizeBytes?: int64 /* = 0 */): PackedByteArray
        
        /** Asynchronous version of [method buffer_get_data]. RenderingDevice will call [param callback] in a certain amount of frames with the data the buffer had at the time of the request.  
         *      
         *  **Note:** At the moment, the delay corresponds to the amount of frames specified by [member ProjectSettings.rendering/rendering_device/vsync/frame_queue_size].  
         *      
         *  **Note:** Downloading large buffers can have a prohibitive cost for real-time even when using the asynchronous method due to hardware bandwidth limitations. When dealing with large resources, you can adjust settings such as [member ProjectSettings.rendering/rendering_device/staging_buffer/block_size_kb] to improve the transfer speed at the cost of extra memory.  
         *    
         */
        bufferGetDataAsync(buffer: Rid, callback: Callable, offsetBytes?: int64 /* = 0 */, sizeBytes?: int64 /* = 0 */): GError
        
        /** Returns the address of the given [param buffer] which can be passed to shaders in any way to access underlying data. Buffer must have been created with this feature enabled.  
         *      
         *  **Note:** You must check that the GPU supports this functionality by calling [method has_feature] with [constant SUPPORTS_BUFFER_DEVICE_ADDRESS] as a parameter.  
         */
        bufferGetDeviceAddress(buffer: Rid): int64
        
        /** Creates a new render pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        renderPipelineCreate(shader: Rid, framebufferFormat: int64, vertexFormat: int64, primitive: RenderingDevice.RenderPrimitive, rasterizationState: RDPipelineRasterizationState, multisampleState: RDPipelineMultisampleState, stencilState: RDPipelineDepthStencilState, colorBlendState: RDPipelineColorBlendState, dynamicStateFlags?: RenderingDevice.PipelineDynamicStateFlags /* = 0 */, forRenderPass?: int64 /* = 0 */, specializationConstants?: GArray<RDPipelineSpecializationConstant>): Rid
        
        /** Returns `true` if the render pipeline specified by the [param render_pipeline] RID is valid, `false` otherwise. */
        renderPipelineIsValid(renderPipeline: Rid): boolean
        
        /** Creates a new compute pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        computePipelineCreate(shader: Rid, specializationConstants?: GArray<RDPipelineSpecializationConstant>): Rid
        
        /** Returns `true` if the compute pipeline specified by the [param compute_pipeline] RID is valid, `false` otherwise. */
        computePipelineIsValid(computePipeline: Rid): boolean
        
        /** Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_height].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a width. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screenGetWidth(screen?: int64 /* = 0 */): int64
        
        /** Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_width].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a height. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screenGetHeight(screen?: int64 /* = 0 */): int64
        
        /** Returns the framebuffer format of the given screen.  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a format. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screenGetFramebufferFormat(screen?: int64 /* = 0 */): int64
        
        /** High-level variant of [method draw_list_begin], with the parameters automatically being adjusted for drawing onto the window specified by the [param screen] ID.  
         *      
         *  **Note:** Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, [method draw_list_begin_for_screen] returns [constant INVALID_ID].  
         */
        drawListBeginForScreen(screen?: int64 /* = 0 */, clearColor?: Color /* = new Color(0, 0, 0, 1) */): int64
        
        /** Starts a list of raster drawing commands created with the `draw_*` methods. The returned value should be passed to other `draw_list_*` functions.  
         *  Multiple draw lists cannot be created at the same time; you must finish the previous draw list first using [method draw_list_end].  
         *  A simple drawing operation might look like this (code is not a complete example):  
         *    
         *  The [param draw_flags] indicates if the texture attachments of the framebuffer should be cleared or ignored. Only one of the two flags can be used for each individual attachment. Ignoring an attachment means that any contents that existed before the draw list will be completely discarded, reducing the memory bandwidth used by the render pass but producing garbage results if the pixels aren't replaced. The default behavior allows the engine to figure out the right operation to use if the texture is discardable, which can result in increased performance. See [RDTextureFormat] or [method texture_set_discardable].  
         *  The [param breadcrumb] parameter can be an arbitrary 32-bit integer that is useful to diagnose GPU crashes. If Godot is built in dev or debug mode; when the GPU crashes Godot will dump all shaders that were being executed at the time of the crash and the breadcrumb is useful to diagnose what passes did those shaders belong to.  
         *  It does not affect rendering behavior and can be set to 0. It is recommended to use [enum BreadcrumbMarker] enumerations for consistency but it's not required. It is also possible to use bitwise operations to add extra data. e.g.  
         *    
         */
        drawListBegin(framebuffer: Rid, drawFlags?: RenderingDevice.DrawFlags /* = 0 */, clearColorValues?: PackedColorArray | Color[] /* = [] */, clearDepthValue?: float64 /* = 1 */, clearStencilValue?: int64 /* = 0 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, breadcrumb?: int64 /* = 0 */): int64
        
        /** This method does nothing and always returns an empty [PackedInt64Array]. */
        drawListBeginSplit(framebuffer: Rid, splits: int64, initialColorAction: RenderingDevice.InitialAction, finalColorAction: RenderingDevice.FinalAction, initialDepthAction: RenderingDevice.InitialAction, finalDepthAction: RenderingDevice.FinalAction, clearColorValues?: PackedColorArray | Color[] /* = [] */, clearDepth?: float64 /* = 1 */, clearStencil?: int64 /* = 0 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, storageTextures?: GArray<Rid>): PackedInt64Array
        
        /** Sets blend constants for the specified [param draw_list] to [param color]. Blend constants are used only if the graphics pipeline is created with [constant DYNAMIC_STATE_BLEND_CONSTANTS] flag set. */
        drawListSetBlendConstants(drawList: int64, color: Color): void
        
        /** Binds [param render_pipeline] to the specified [param draw_list]. */
        drawListBindRenderPipeline(drawList: int64, renderPipeline: Rid): void
        
        /** Binds [param uniform_set] to the specified [param draw_list]. A [param set_index] must also be specified, which is an identifier starting from `0` that must match the one expected by the draw list. */
        drawListBindUniformSet(drawList: int64, uniformSet: Rid, setIndex: int64): void
        
        /** Binds [param vertex_array] to the specified [param draw_list]. */
        drawListBindVertexArray(drawList: int64, vertexArray: Rid): void
        
        /** Binds [param index_array] to the specified [param draw_list]. */
        drawListBindIndexArray(drawList: int64, indexArray: Rid): void
        
        /** Sets the push constant data to [param buffer] for the specified [param draw_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        drawListSetPushConstant(drawList: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, sizeBytes: int64): void
        
        /** Submits [param draw_list] for rendering on the GPU. This is the raster equivalent to [method compute_list_dispatch]. */
        drawListDraw(drawList: int64, useIndices: boolean, instances: int64, proceduralVertexCount?: int64 /* = 0 */): void
        
        /** Submits [param draw_list] for rendering on the GPU with the given parameters stored in the [param buffer] at [param offset]. Parameters being integers: vertex count, instance count, first vertex, first instance. And when using indices: index count, instance count, first index, vertex offset, first instance. Buffer must have been created with [constant STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT] flag. */
        drawListDrawIndirect(drawList: int64, useIndices: boolean, buffer: Rid, offset?: int64 /* = 0 */, drawCount?: int64 /* = 1 */, stride?: int64 /* = 0 */): void
        
        /** Creates a scissor rectangle and enables it for the specified [param draw_list]. Scissor rectangles are used for clipping by discarding fragments that fall outside a specified rectangular portion of the screen. See also [method draw_list_disable_scissor].  
         *      
         *  **Note:** The specified [param rect] is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.  
         */
        drawListEnableScissor(drawList: int64, rect?: Rect2 /* = new Rect2(0, 0, 0, 0) */): void
        
        /** Removes and disables the scissor rectangle for the specified [param draw_list]. See also [method draw_list_enable_scissor]. */
        drawListDisableScissor(drawList: int64): void
        
        /** Switches to the next draw pass. */
        drawListSwitchToNextPass(): int64
        
        /** This method does nothing and always returns an empty [PackedInt64Array]. */
        drawListSwitchToNextPassSplit(splits: int64): PackedInt64Array
        
        /** Finishes a list of raster drawing commands created with the `draw_*` methods. */
        drawListEnd(): void
        
        /** Starts a list of compute commands created with the `compute_*` methods. The returned value should be passed to other `compute_list_*` functions.  
         *  Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using [method compute_list_end].  
         *  A simple compute operation might look like this (code is not a complete example):  
         *    
         */
        computeListBegin(): int64
        
        /** Tells the GPU what compute pipeline to use when processing the compute list. If the shader has changed since the last time this function was called, Godot will unbind all descriptor sets and will re-bind them inside [method compute_list_dispatch]. */
        computeListBindComputePipeline(computeList: int64, computePipeline: Rid): void
        
        /** Sets the push constant data to [param buffer] for the specified [param compute_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        computeListSetPushConstant(computeList: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, sizeBytes: int64): void
        
        /** Binds the [param uniform_set] to this [param compute_list]. Godot ensures that all textures in the uniform set have the correct Vulkan access masks. If Godot had to change access masks of textures, it will raise a Vulkan image memory barrier. */
        computeListBindUniformSet(computeList: int64, uniformSet: Rid, setIndex: int64): void
        
        /** Submits the compute list for processing on the GPU. This is the compute equivalent to [method draw_list_draw]. */
        computeListDispatch(computeList: int64, xGroups: int64, yGroups: int64, zGroups: int64): void
        
        /** Submits the compute list for processing on the GPU with the given group counts stored in the [param buffer] at [param offset]. Buffer must have been created with [constant STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT] flag. */
        computeListDispatchIndirect(computeList: int64, buffer: Rid, offset: int64): void
        
        /** Raises a Vulkan compute barrier in the specified [param compute_list]. */
        computeListAddBarrier(computeList: int64): void
        
        /** Finishes a list of compute commands created with the `compute_*` methods. */
        computeListEnd(): void
        
        /** Tries to free an object in the RenderingDevice. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingDevice directly. */
        freeRid(rid: Rid): void
        
        /** Creates a timestamp marker with the specified [param name]. This is used for performance reporting with the [method get_captured_timestamp_cpu_time], [method get_captured_timestamp_gpu_time] and [method get_captured_timestamp_name] methods. */
        captureTimestamp(name: string): void
        
        /** Returns the total number of timestamps (rendering steps) available for profiling. */
        getCapturedTimestampsCount(): int64
        
        /** Returns the index of the last frame rendered that has rendering timestamps available for querying. */
        getCapturedTimestampsFrame(): int64
        
        /** Returns the timestamp in GPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_cpu_time] and [method capture_timestamp]. */
        getCapturedTimestampGpuTime(index: int64): int64
        
        /** Returns the timestamp in CPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_gpu_time] and [method capture_timestamp]. */
        getCapturedTimestampCpuTime(index: int64): int64
        
        /** Returns the timestamp's name for the rendering step specified by [param index]. See also [method capture_timestamp]. */
        getCapturedTimestampName(index: int64): string
        
        /** Returns `true` if the [param feature] is supported by the GPU. */
        hasFeature(feature: RenderingDevice.Features): boolean
        
        /** Returns the value of the specified [param limit]. This limit varies depending on the current graphics hardware (and sometimes the driver version). If the given limit is exceeded, rendering errors will occur.  
         *  Limits for various graphics hardware can be found in the [url=https://vulkan.gpuinfo.org/]Vulkan Hardware Database[/url].  
         */
        limitGet(limit: RenderingDevice.Limit): int64
        
        /** Returns the frame count kept by the graphics API. Higher values result in higher input lag, but with more consistent throughput. For the main [RenderingDevice], frames are cycled (usually 3 with triple-buffered V-Sync enabled). However, local [RenderingDevice]s only have 1 frame. */
        getFrameDelay(): int64
        
        /** Pushes the frame setup and draw command buffers then marks the local device as currently processing (which allows calling [method sync]).  
         *      
         *  **Note:** Only available in local RenderingDevices.  
         */
        submit(): void
        
        /** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.  
         *      
         *  **Note:** Only available in local RenderingDevices.  
         *      
         *  **Note:** [method sync] can only be called after a [method submit].  
         */
        sync(): void
        
        /** This method does nothing. */
        barrier(from?: RenderingDevice.BarrierMask /* = 32767 */, to?: RenderingDevice.BarrierMask /* = 32767 */): void
        
        /** This method does nothing. */
        fullBarrier(): void
        
        /** Create a new local [RenderingDevice]. This is most useful for performing compute operations on the GPU independently from the rest of the engine. */
        createLocalDevice(): RenderingDevice
        
        /** Sets the resource name for [param id] to [param name]. This is used for debugging with third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url].  
         *  The following types of resources can be named: texture, sampler, vertex buffer, index buffer, uniform buffer, texture buffer, storage buffer, uniform set buffer, shader, render pipeline and compute pipeline. Framebuffers cannot be named. Attempting to name an incompatible resource type will print an error.  
         *      
         *  **Note:** Resource names are only set when the engine runs in verbose mode ([method OS.is_stdout_verbose] = `true`), or when using an engine build compiled with the `dev_mode=yes` SCons option. The graphics driver must also support the `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension for named resources to work.  
         */
        setResourceName(id: Rid, name: string): void
        
        /** Create a command buffer debug label region that can be displayed in third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url]. All regions must be ended with a [method draw_command_end_label] call. When viewed from the linear series of submissions to a single queue, calls to [method draw_command_begin_label] and [method draw_command_end_label] must be matched and balanced.  
         *  The `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension must be available and enabled for command buffer debug label region to work. See also [method draw_command_end_label].  
         */
        drawCommandBeginLabel(name: string, color: Color): void
        
        /** This method does nothing. */
        drawCommandInsertLabel(name: string, color: Color): void
        
        /** Ends the command buffer debug label region started by a [method draw_command_begin_label] call. */
        drawCommandEndLabel(): void
        
        /** Returns the vendor of the video adapter (e.g. "NVIDIA Corporation"). Equivalent to [method RenderingServer.get_video_adapter_vendor]. See also [method get_device_name]. */
        getDeviceVendorName(): string
        
        /** Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2"). Equivalent to [method RenderingServer.get_video_adapter_name]. See also [method get_device_vendor_name]. */
        getDeviceName(): string
        
        /** Returns the universally unique identifier for the pipeline cache. This is used to cache shader files on disk, which avoids shader recompilations on subsequent engine runs. This UUID varies depending on the graphics card model, but also the driver version. Therefore, updating graphics drivers will invalidate the shader cache. */
        getDevicePipelineCacheUuid(): string
        
        /** Returns the memory usage in bytes corresponding to the given [param type]. When using Vulkan, these statistics are calculated by [url=https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator]Vulkan Memory Allocator[/url]. */
        getMemoryUsage(type: RenderingDevice.MemoryType): int64
        
        /** Returns the unique identifier of the driver [param resource] for the specified [param rid]. Some driver resource types ignore the specified [param rid]. [param index] is always ignored but must be specified anyway. */
        getDriverResource(resource: RenderingDevice.DriverResource, rid: Rid, index: int64): int64
        
        /** Returns a string with a performance report from the past frame. Updates every frame. */
        getPerfReport(): string
        
        /** Returns string report in CSV format using the following methods:  
         *  - [method get_tracked_object_name]  
         *  - [method get_tracked_object_type_count]  
         *  - [method get_driver_total_memory]  
         *  - [method get_driver_allocation_count]  
         *  - [method get_driver_memory_by_object_type]  
         *  - [method get_driver_allocs_by_object_type]  
         *  - [method get_device_total_memory]  
         *  - [method get_device_allocation_count]  
         *  - [method get_device_memory_by_object_type]  
         *  - [method get_device_allocs_by_object_type]  
         *  This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` [url=https://docs.godotengine.org/en/4.5/tutorials/editor/command_line_tutorial.html]command line argument[/url].  
         */
        getDriverAndDeviceMemoryReport(): string
        
        /** Returns the name of the type of object for the given [param type_index]. This value must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns the same string.  
         *  The return value is important because it gives meaning to the types passed to [method get_driver_memory_by_object_type], [method get_driver_allocs_by_object_type], [method get_device_memory_by_object_type], and [method get_device_allocs_by_object_type]. Examples of strings it can return (not exhaustive):  
         *  - DEVICE_MEMORY  
         *  - PIPELINE_CACHE  
         *  - SWAPCHAIN_KHR  
         *  - COMMAND_POOL  
         *  Thus if e.g. `get_tracked_object_name(5)` returns "COMMAND_POOL", then `get_device_memory_by_object_type(5)` returns the bytes used by the GPU for command pools.  
         *  This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` [url=https://docs.godotengine.org/en/4.5/tutorials/editor/command_line_tutorial.html]command line argument[/url].  
         */
        getTrackedObjectName(typeIndex: int64): string
        
        /** Returns how many types of trackable objects there are.  
         *  This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` [url=https://docs.godotengine.org/en/4.5/tutorials/editor/command_line_tutorial.html]command line argument[/url].  
         */
        getTrackedObjectTypeCount(): int64
        
        /** Returns how much bytes the GPU driver is using for internal driver structures.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverTotalMemory(): int64
        
        /** Returns how many allocations the GPU driver has performed for internal driver structures.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverAllocationCount(): int64
        
        /** Same as [method get_driver_total_memory] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverMemoryByObjectType(type: int64): int64
        
        /** Same as [method get_driver_allocation_count] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverAllocsByObjectType(type: int64): int64
        
        /** Returns how much bytes the GPU is using.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceTotalMemory(): int64
        
        /** Returns how many allocations the GPU has performed for internal driver structures.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceAllocationCount(): int64
        
        /** Same as [method get_device_total_memory] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceMemoryByObjectType(type: int64): int64
        
        /** Same as [method get_device_allocation_count] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceAllocsByObjectType(type: int64): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRenderingDevice;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRenderingDevice;
    }
    namespace Resource {
        enum DeepDuplicateMode {
            DeepDuplicateNone = 0,
            DeepDuplicateInternal = 1,
            DeepDuplicateAll = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResource extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResource extends __NameMapRefCounted {
        _setup_local_to_scene: "_setupLocalToScene";
        _get_rid: "_getRid";
        _reset_state: "_resetState";
        _set_path_cache: "_setPathCache";
        take_over_path: "takeOverPath";
        set_path_cache: "setPathCache";
        get_rid: "getRid";
        get_local_scene: "getLocalScene";
        setup_local_to_scene: "setupLocalToScene";
        reset_state: "resetState";
        set_id_for_path: "setIdForPath";
        get_id_for_path: "getIdForPath";
        is_built_in: "isBuiltIn";
        generate_scene_unique_id: "generateSceneUniqueId";
        emit_changed: "emitChanged";
        duplicate_deep: "duplicateDeep";
        resource_local_to_scene: "resourceLocalToScene";
        resource_path: "resourcePath";
        resource_name: "resourceName";
        resource_scene_unique_id: "resourceSceneUniqueId";
        setup_local_to_scene_requested: "setupLocalToSceneRequested";
    }
    /** Base class for serializable objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resource.html  
     */
    class Resource extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to customize the newly duplicated resource created from [method PackedScene.instantiate], if the original's [member resource_local_to_scene] is set to `true`.  
         *  **Example:** Set a random `damage` value to every local resource from an instantiated scene:  
         *    
         */
        /* gdvirtual */ _setupLocalToScene(): void
        
        /** Override this method to return a custom [RID] when [method get_rid] is called. */
        /* gdvirtual */ _getRid(): Rid
        
        /** For resources that store state in non-exported properties, such as via [method Object._validate_property] or [method Object._get_property_list], this method must be implemented to clear them. */
        /* gdvirtual */ _resetState(): void
        
        /** Override this method to execute additional logic after [method set_path_cache] is called on this object. */
        /* gdvirtual */ _setPathCache(path: string): void
        
        /** Sets the [member resource_path] to [param path], potentially overriding an existing cache entry for this path. Further attempts to load an overridden resource by path will instead return this resource. */
        takeOverPath(path: string): void
        
        /** Sets the resource's path to [param path] without involving the resource cache. Useful for handling [enum ResourceFormatLoader.CacheMode] values when implementing a custom resource format by extending [ResourceFormatLoader] and [ResourceFormatSaver]. */
        setPathCache(path: string): void
        
        /** Returns the [RID] of this resource (or an empty RID). Many resources (such as [Texture2D], [Mesh], and so on) are high-level abstractions of resources stored in a specialized server ([DisplayServer], [RenderingServer], etc.), so this function will return the original [RID]. */
        getRid(): Rid
        
        /** If [member resource_local_to_scene] is set to `true` and the resource has been loaded from a [PackedScene] instantiation, returns the root [Node] of the scene where this resource is used. Otherwise, returns `null`. */
        getLocalScene(): null | Node
        
        /** Calls [method _setup_local_to_scene]. If [member resource_local_to_scene] is set to `true`, this method is automatically called from [method PackedScene.instantiate] by the newly duplicated resource within the scene instance. */
        setupLocalToScene(): void
        
        /** Makes the resource clear its non-exported properties. See also [method _reset_state]. Useful when implementing a custom resource format by extending [ResourceFormatLoader] and [ResourceFormatSaver]. */
        resetState(): void
        
        /** In the internal cache for scene-unique IDs, sets the ID of this resource to [param id] for the scene at [param path]. If [param id] is empty, the cache entry for [param path] is cleared. Useful to keep scene-unique IDs the same when implementing a VCS-friendly custom resource format by extending [ResourceFormatLoader] and [ResourceFormatSaver].  
         *      
         *  **Note:** This method is only implemented when running in an editor context.  
         */
        setIdForPath(path: string, id: string): void
        
        /** From the internal cache for scene-unique IDs, returns the ID of this resource for the scene at [param path]. If there is no entry, an empty string is returned. Useful to keep scene-unique IDs the same when implementing a VCS-friendly custom resource format by extending [ResourceFormatLoader] and [ResourceFormatSaver].  
         *      
         *  **Note:** This method is only implemented when running in an editor context. At runtime, it returns an empty string.  
         */
        getIdForPath(path: string): string
        
        /** Returns `true` if the resource is saved on disk as a part of another resource's file. */
        isBuiltIn(): boolean
        
        /** Generates a unique identifier for a resource to be contained inside a [PackedScene], based on the current date, time, and a random value. The returned string is only composed of letters (`a` to `y`) and numbers (`0` to `8`). See also [member resource_scene_unique_id]. */
        static generateSceneUniqueId(): string
        
        /** Emits the [signal changed] signal. This method is called automatically for some built-in resources.  
         *      
         *  **Note:** For custom resources, it's recommended to call this method whenever a meaningful change occurs, such as a modified property. This ensures that custom [Object]s depending on the resource are properly updated.  
         *    
         */
        emitChanged(): void
        
        /** Duplicates this resource, returning a new resource with its `export`ed or [constant PROPERTY_USAGE_STORAGE] properties copied from the original.  
         *  If [param deep] is `false`, a **shallow** copy is returned: nested [Array], [Dictionary], and [Resource] properties are not duplicated and are shared with the original resource.  
         *  If [param deep] is `true`, a **deep** copy is returned: all nested arrays, dictionaries, and packed arrays are also duplicated (recursively). Any [Resource] found inside will only be duplicated if it's local, like [constant DEEP_DUPLICATE_INTERNAL] used with [method duplicate_deep].  
         *  The following exceptions apply:  
         *  - Subresource properties with the [constant PROPERTY_USAGE_ALWAYS_DUPLICATE] flag are always duplicated (recursively or not, depending on [param deep]).  
         *  - Subresource properties with the [constant PROPERTY_USAGE_NEVER_DUPLICATE] flag are never duplicated.  
         *      
         *  **Note:** For custom resources, this method will fail if [method Object._init] has been defined with required parameters.  
         *      
         *  **Note:** When duplicating with [param deep] set to `true`, each resource found, including the one on which this method is called, will be only duplicated once and referenced as many times as needed in the duplicate. For instance, if you are duplicating resource A that happens to have resource B referenced twice, you'll get a new resource A' referencing a new resource B' twice.  
         */
        duplicate(deep?: boolean /* = false */): this
        
        /** Duplicates this resource, deeply, like [method duplicate]`(true)`, with extra control over how subresources are handled.  
         *  [param deep_subresources_mode] must be one of the values from [enum DeepDuplicateMode].  
         */
        duplicateDeep(deepSubresourcesMode?: Resource.DeepDuplicateMode /* = 1 */): null | Resource
        
        /** If `true`, the resource is duplicated for each instance of all scenes using it. At run-time, the resource can be modified in one scene without affecting other instances (see [method PackedScene.instantiate]).  
         *      
         *  **Note:** Changing this property at run-time has no effect on already created duplicate resources.  
         */
        get resourceLocalToScene(): boolean
        set resourceLocalToScene(value: boolean)
        
        /** The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the [PackedScene]'s filepath, followed by a unique identifier.  
         *      
         *  **Note:** Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use [method take_over_path].  
         */
        get resourcePath(): string
        set resourcePath(value: string)
        
        /** An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.  
         *      
         *  **Note:** Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.  
         */
        get resourceName(): string
        set resourceName(value: string)
        
        /** A unique identifier relative to the this resource's scene. If left empty, the ID is automatically generated when this resource is saved inside a [PackedScene]. If the resource is not inside a scene, this property is empty by default.  
         *      
         *  **Note:** When the [PackedScene] is saved, if multiple resources in the same scene use the same ID, only the earliest resource in the scene hierarchy keeps the original ID. The other resources are assigned new IDs from [method generate_scene_unique_id].  
         *      
         *  **Note:** Setting this property does not emit the [signal changed] signal.  
         *  **Warning:** When setting, the ID must only consist of letters, numbers, and underscores. Otherwise, it will fail and default to a randomly generated ID.  
         */
        get resourceSceneUniqueId(): string
        set resourceSceneUniqueId(value: string)
        
        /** Emitted when the resource changes, usually when one of its properties is modified. See also [method emit_changed].  
         *      
         *  **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.  
         */
        readonly changed: Signal<() => void>
        
        /** Emitted by a newly duplicated resource with [member resource_local_to_scene] set to `true`. */
        readonly setupLocalToSceneRequested: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResource;
    }
    namespace ResourceFormatLoader {
        enum CacheMode {
            CacheModeIgnore = 0,
            CacheModeReuse = 1,
            CacheModeReplace = 2,
            CacheModeIgnoreDeep = 3,
            CacheModeReplaceDeep = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceFormatLoader extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceFormatLoader extends __NameMapRefCounted {
        _get_recognized_extensions: "_getRecognizedExtensions";
        _recognize_path: "_recognizePath";
        _handles_type: "_handlesType";
        _get_resource_type: "_getResourceType";
        _get_resource_script_class: "_getResourceScriptClass";
        _get_resource_uid: "_getResourceUid";
        _get_dependencies: "_getDependencies";
        _rename_dependencies: "_renameDependencies";
        _get_classes_used: "_getClassesUsed";
    }
    /** Loads a specific resource type from a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceformatloader.html  
     */
    class ResourceFormatLoader extends RefCounted {
        constructor(identifier?: any)
        /** Gets the list of extensions for files this loader is able to read. */
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        
        /** Tells whether or not this loader should load a resource from its resource path for a given type.  
         *  If it is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions], and if the type is within the ones provided by [method _get_resource_type].  
         */
        /* gdvirtual */ _recognizePath(path: string, type: StringName): boolean
        
        /** Tells which resource class this loader can load.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just handle `"Resource"` for them.  
         */
        /* gdvirtual */ _handlesType(type: StringName): boolean
        
        /** Gets the class name of the resource associated with the given path. If the loader cannot handle it, it should return `""`.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.  
         */
        /* gdvirtual */ _getResourceType(path: string): string
        
        /** Returns the script class name associated with the [Resource] under the given [param path]. If the resource has no script or the script isn't a named class, it should return `""`. */
        /* gdvirtual */ _getResourceScriptClass(path: string): string
        
        /** Should return the unique ID for the resource associated with the given path. If this method is not overridden, a `.uid` file is generated along with the resource file, containing the unique ID. */
        /* gdvirtual */ _getResourceUid(path: string): int64
        
        /** Should return the dependencies for the resource at the given [param path]. Each dependency is a string composed of one to three sections separated by `::`, with trailing empty sections omitted:  
         *  - The first section should contain the UID if the resource has one. Otherwise, it should contain the file path.  
         *  - The second section should contain the class name of the dependency if [param add_types] is `true`. Otherwise, it should be empty.  
         *  - The third section should contain the fallback path if the resource has a UID. Otherwise, it should be empty.  
         *    
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so `"Resource"` can be used for the class name.  
         */
        /* gdvirtual */ _getDependencies(path: string, addTypes: boolean): PackedStringArray
        
        /** If implemented, renames dependencies within the given resource and saves it. [param renames] is a dictionary `{ String => String }` mapping old dependency paths to new paths.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
        /* gdvirtual */ _renameDependencies(path: string, renames: GDictionary): GError
        /* gdvirtual */ _exists(path: string): boolean
        /* gdvirtual */ _getClassesUsed(path: string): PackedStringArray
        
        /** Loads a resource when the engine finds this loader to be compatible. If the loaded resource is the result of an import, [param original_path] will target the source file. Returns a [Resource] object on success, or an [enum Error] constant in case of failure.  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         */
        /* gdvirtual */ _load(path: string, originalPath: string, useSubThreads: boolean, cacheMode: int64): any
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceFormatLoader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceFormatLoader;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceFormatSaver extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceFormatSaver extends __NameMapRefCounted {
        _set_uid: "_setUid";
        _get_recognized_extensions: "_getRecognizedExtensions";
        _recognize_path: "_recognizePath";
    }
    /** Saves a specific resource type to a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceformatsaver.html  
     */
    class ResourceFormatSaver extends RefCounted {
        constructor(identifier?: any)
        /** Saves the given resource object to a file at the target [param path]. [param flags] is a bitmask composed with [enum ResourceSaver.SaverFlags] constants.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
        /* gdvirtual */ _save(resource: Resource, path: string, flags: int64): GError
        
        /** Sets a new UID for the resource at the given [param path]. Returns [constant OK] on success, or an [enum Error] constant in case of failure. */
        /* gdvirtual */ _setUid(path: string, uid: int64): GError
        
        /** Returns whether the given resource object can be saved by this saver. */
        /* gdvirtual */ _recognize(resource: Resource): boolean
        
        /** Returns the list of extensions available for saving the resource object, provided it is recognized (see [method _recognize]). */
        /* gdvirtual */ _getRecognizedExtensions(resource: Resource): PackedStringArray
        
        /** Returns `true` if this saver handles a given save path and `false` otherwise.  
         *  If this method is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions].  
         */
        /* gdvirtual */ _recognizePath(resource: Resource, path: string): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceFormatSaver;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceFormatSaver;
    }
    namespace ResourceImporter {
        enum ImportOrder {
            ImportOrderDefault = 0,
            ImportOrderScene = 100,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporter extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporter extends __NameMapRefCounted {
        _get_build_dependencies: "_getBuildDependencies";
    }
    /** Base class for resource importers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporter.html  
     */
    class ResourceImporter extends RefCounted {
        constructor(identifier?: any)
        /** Called when the engine compilation profile editor wants to check what build options an imported resource needs. For example, [ResourceImporterDynamicFont] has a property called [member ResourceImporterDynamicFont.multichannel_signed_distance_field], that depends on the engine to be build with the "msdfgen" module. If that resource happened to be a custom one, it would be handled like this:  
         *    
         */
        /* gdvirtual */ _getBuildDependencies(path: string): PackedStringArray
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterBMFont extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterBMFont extends __NameMapResourceImporter {
    }
    /** Imports a bitmap font in the BMFont (`.fnt`) format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporterbmfont.html  
     */
    class ResourceImporterBMFont extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterBMFont;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterBMFont;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterBitMap extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterBitMap extends __NameMapResourceImporter {
    }
    /** Imports a [BitMap] resource (2D array of boolean values).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporterbitmap.html  
     */
    class ResourceImporterBitMap extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterBitMap;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterBitMap;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterCsvTranslation extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterCsvTranslation extends __NameMapResourceImporter {
    }
    class ResourceImporterCsvTranslation extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterCsvTranslation;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterCsvTranslation;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterDynamicFont extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterDynamicFont extends __NameMapResourceImporter {
    }
    /** Imports a TTF, TTC, OTF, OTC, WOFF or WOFF2 font file for font rendering that adapts to any size.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporterdynamicfont.html  
     */
    class ResourceImporterDynamicFont extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterDynamicFont;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterDynamicFont;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterImage extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterImage extends __NameMapResourceImporter {
    }
    /** Imports an image for use in scripting, with no rendering capabilities.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporterimage.html  
     */
    class ResourceImporterImage extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterImage;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterImage;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterImageFont extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterImageFont extends __NameMapResourceImporter {
    }
    /** Imports a bitmap font where all glyphs have the same width and height.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporterimagefont.html  
     */
    class ResourceImporterImageFont extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterImageFont;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterImageFont;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterLayeredTexture extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterLayeredTexture extends __NameMapResourceImporter {
    }
    /** Imports a 3-dimensional texture ([Texture3D]), a [Texture2DArray], a [Cubemap] or a [CubemapArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporterlayeredtexture.html  
     */
    class ResourceImporterLayeredTexture extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterLayeredTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterLayeredTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterMP3 extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterMP3 extends __NameMapResourceImporter {
    }
    /** Imports an MP3 audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimportermp3.html  
     */
    class ResourceImporterMP3 extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterMP3;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterMP3;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterObj extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterObj extends __NameMapResourceImporter {
    }
    class ResourceImporterObj extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterObj;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterObj;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterOggVorbis extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterOggVorbis extends __NameMapResourceImporter {
        load_from_buffer: "loadFromBuffer";
        load_from_file: "loadFromFile";
    }
    /** Imports an Ogg Vorbis audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporteroggvorbis.html  
     */
    class ResourceImporterOggVorbis extends ResourceImporter {
        constructor(identifier?: any)
        /** Creates a new [AudioStreamOggVorbis] instance from the given buffer. The buffer must contain Ogg Vorbis data. */
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer): null | AudioStreamOggVorbis
        
        /** Creates a new [AudioStreamOggVorbis] instance from the given file path. The file must be in Ogg Vorbis format. */
        static loadFromFile(path: string): null | AudioStreamOggVorbis
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterOggVorbis;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterOggVorbis;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterSvg extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterSvg extends __NameMapResourceImporter {
    }
    class ResourceImporterSvg extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterSvg;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterSvg;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterScene extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterScene extends __NameMapResourceImporter {
    }
    /** Imports a glTF, FBX, COLLADA, or Blender 3D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimporterscene.html  
     */
    class ResourceImporterScene extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterScene;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterScene;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterShaderFile extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterShaderFile extends __NameMapResourceImporter {
    }
    /** Imports native GLSL shaders (not Godot shaders) as an [RDShaderFile].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimportershaderfile.html  
     */
    class ResourceImporterShaderFile extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterShaderFile;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterShaderFile;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterTexture extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterTexture extends __NameMapResourceImporter {
    }
    /** Imports an image for use in 2D or 3D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimportertexture.html  
     */
    class ResourceImporterTexture extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterTextureAtlas extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterTextureAtlas extends __NameMapResourceImporter {
    }
    /** Imports a collection of textures from a PNG image into an optimized [AtlasTexture] for 2D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourceimportertextureatlas.html  
     */
    class ResourceImporterTextureAtlas extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterTextureAtlas;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterTextureAtlas;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourceImporterWav extends __RPCMapResourceImporter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourceImporterWav extends __NameMapResourceImporter {
    }
    class ResourceImporterWav extends ResourceImporter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourceImporterWav;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourceImporterWav;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapResourcePreloader extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapResourcePreloader extends __NameMapNode {
        add_resource: "addResource";
        remove_resource: "removeResource";
        rename_resource: "renameResource";
        has_resource: "hasResource";
        get_resource: "getResource";
        get_resource_list: "getResourceList";
    }
    /** A node used to preload sub-resources inside a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_resourcepreloader.html  
     */
    class ResourcePreloader<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Adds a resource to the preloader with the given [param name]. If a resource with the given [param name] already exists, the new resource will be renamed to "[param name] N" where N is an incrementing number starting from 2. */
        addResource(name: StringName, resource: Resource): void
        
        /** Removes the resource associated to [param name] from the preloader. */
        removeResource(name: StringName): void
        
        /** Renames a resource inside the preloader from [param name] to [param newname]. */
        renameResource(name: StringName, newname: StringName): void
        
        /** Returns `true` if the preloader contains a resource associated to [param name]. */
        hasResource(name: StringName): boolean
        
        /** Returns the resource associated to [param name]. */
        getResource(name: StringName): null | Resource
        
        /** Returns the list of resources inside the preloader. */
        getResourceList(): PackedStringArray
        get resources(): GArray
        set resources(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapResourcePreloader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapResourcePreloader;
    }
    namespace RetargetModifier3D {
        enum TransformFlag {
            TransformFlagPosition = 1,
            TransformFlagRotation = 2,
            TransformFlagScale = 4,
            TransformFlagAll = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRetargetModifier3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRetargetModifier3D extends __NameMapSkeletonModifier3D {
        set_position_enabled: "setPositionEnabled";
        is_position_enabled: "isPositionEnabled";
        set_rotation_enabled: "setRotationEnabled";
        is_rotation_enabled: "isRotationEnabled";
        set_scale_enabled: "setScaleEnabled";
        is_scale_enabled: "isScaleEnabled";
        use_global_pose: "useGlobalPose";
    }
    /** A modifier to transfer parent skeleton poses (or global poses) to child skeletons in model space with different rests.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_retargetmodifier3d.html  
     */
    class RetargetModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** Sets [constant TRANSFORM_FLAG_POSITION] into [member enable]. */
        setPositionEnabled(enabled: boolean): void
        
        /** Returns `true` if [member enable] has [constant TRANSFORM_FLAG_POSITION]. */
        isPositionEnabled(): boolean
        
        /** Sets [constant TRANSFORM_FLAG_ROTATION] into [member enable]. */
        setRotationEnabled(enabled: boolean): void
        
        /** Returns `true` if [member enable] has [constant TRANSFORM_FLAG_ROTATION]. */
        isRotationEnabled(): boolean
        
        /** Sets [constant TRANSFORM_FLAG_SCALE] into [member enable]. */
        setScaleEnabled(enabled: boolean): void
        
        /** Returns `true` if [member enable] has [constant TRANSFORM_FLAG_SCALE]. */
        isScaleEnabled(): boolean
        
        /** [SkeletonProfile] for retargeting bones with names matching the bone list. */
        get profile(): null | SkeletonProfile
        set profile(value: null | SkeletonProfile)
        
        /** If `false`, in case the target skeleton has fewer bones than the source skeleton, the source bone parent's transform will be ignored.  
         *  Instead, it is possible to retarget between models with different body shapes, and position, rotation, and scale can be retargeted separately.  
         *  If `true`, retargeting is performed taking into account global pose.  
         *  In case the target skeleton has fewer bones than the source skeleton, the source bone parent's transform is taken into account. However, bone length between skeletons must match exactly, if not, the bones will be forced to expand or shrink.  
         *  This is useful for using dummy bone with length `0` to match postures when retargeting between models with different number of bones.  
         */
        get useGlobalPose(): boolean
        set useGlobalPose(value: boolean)
        
        /** Flags to control the process of the transform elements individually when [member use_global_pose] is disabled. */
        get enable(): int64
        set enable(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRetargetModifier3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRetargetModifier3D;
    }
    namespace RibbonTrailMesh {
        enum Shape {
            ShapeFlat = 0,
            ShapeCross = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRibbonTrailMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRibbonTrailMesh extends __NameMapPrimitiveMesh {
        section_length: "sectionLength";
        section_segments: "sectionSegments";
    }
    /** Represents a straight ribbon-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_ribbontrailmesh.html  
     */
    class RibbonTrailMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Determines the shape of the ribbon. */
        get shape(): int64
        set shape(value: int64)
        
        /** The baseline size of the ribbon. The size of a particular section segment is obtained by multiplying this size by the value of the [member curve] at the given distance. */
        get size(): float64
        set size(value: float64)
        
        /** The total number of sections on the ribbon. */
        get sections(): int64
        set sections(value: int64)
        
        /** The length of a section of the ribbon. */
        get sectionLength(): float64
        set sectionLength(value: float64)
        
        /** The number of segments in a section. The [member curve] is sampled on each segment to determine its size. Higher values result in a more detailed ribbon at the cost of performance. */
        get sectionSegments(): int64
        set sectionSegments(value: int64)
        
        /** Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [member size] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit [Curve]. */
        get curve(): null | Curve
        set curve(value: null | Curve)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRibbonTrailMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRibbonTrailMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRichTextEffect extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRichTextEffect extends __NameMapResource {
        _process_custom_fx: "_processCustomFX";
    }
    /** A custom effect for a [RichTextLabel].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_richtexteffect.html  
     */
    class RichTextEffect extends Resource {
        constructor(identifier?: any)
        /** Override this method to modify properties in [param char_fx]. The method must return `true` if the character could be transformed successfully. If the method returns `false`, it will skip transformation to avoid displaying broken text. */
        /* gdvirtual */ _processCustomFX(charFX: CharFXTransform): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRichTextEffect;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRichTextEffect;
    }
    namespace RichTextLabel {
        enum ListType {
            ListNumbers = 0,
            ListLetters = 1,
            ListRoman = 2,
            ListDots = 3,
        }
        enum MenuItems {
            MenuCopy = 0,
            MenuSelectAll = 1,
            MenuMax = 2,
        }
        enum MetaUnderline {
            MetaUnderlineNever = 0,
            MetaUnderlineAlways = 1,
            MetaUnderlineOnHover = 2,
        }
        enum ImageUpdateMask {
            UpdateTexture = 1,
            UpdateSize = 2,
            UpdateColor = 4,
            UpdateAlignment = 8,
            UpdateRegion = 16,
            UpdatePad = 32,
            UpdateTooltip = 64,
            UpdateWidthInPercent = 128,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRichTextLabel extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRichTextLabel extends __NameMapControl {
        get_parsed_text: "getParsedText";
        add_text: "addText";
        add_hr: "addHr";
        add_image: "addImage";
        update_image: "updateImage";
        remove_paragraph: "removeParagraph";
        invalidate_paragraph: "invalidateParagraph";
        push_font: "pushFont";
        push_font_size: "pushFontSize";
        push_normal: "pushNormal";
        push_bold: "pushBold";
        push_bold_italics: "pushBoldItalics";
        push_italics: "pushItalics";
        push_mono: "pushMono";
        push_color: "pushColor";
        push_outline_size: "pushOutlineSize";
        push_outline_color: "pushOutlineColor";
        push_paragraph: "pushParagraph";
        push_indent: "pushIndent";
        push_list: "pushList";
        push_meta: "pushMeta";
        push_hint: "pushHint";
        push_language: "pushLanguage";
        push_underline: "pushUnderline";
        push_strikethrough: "pushStrikethrough";
        push_table: "pushTable";
        push_dropcap: "pushDropcap";
        set_table_column_expand: "setTableColumnExpand";
        set_table_column_name: "setTableColumnName";
        set_cell_row_background_color: "setCellRowBackgroundColor";
        set_cell_border_color: "setCellBorderColor";
        set_cell_size_override: "setCellSizeOverride";
        set_cell_padding: "setCellPadding";
        push_cell: "pushCell";
        push_fgcolor: "pushFgcolor";
        push_bgcolor: "pushBgcolor";
        push_customfx: "pushCustomfx";
        push_context: "pushContext";
        pop_context: "popContext";
        pop_all: "popAll";
        get_v_scroll_bar: "getVScrollBar";
        scroll_to_line: "scrollToLine";
        scroll_to_paragraph: "scrollToParagraph";
        scroll_to_selection: "scrollToSelection";
        get_selection_from: "getSelectionFrom";
        get_selection_to: "getSelectionTo";
        get_selection_line_offset: "getSelectionLineOffset";
        select_all: "selectAll";
        get_selected_text: "getSelectedText";
        parse_bbcode: "parseBbcode";
        append_text: "appendText";
        is_ready: "isReady";
        is_finished: "isFinished";
        get_character_line: "getCharacterLine";
        get_character_paragraph: "getCharacterParagraph";
        get_total_character_count: "getTotalCharacterCount";
        get_line_count: "getLineCount";
        get_line_range: "getLineRange";
        get_visible_line_count: "getVisibleLineCount";
        get_paragraph_count: "getParagraphCount";
        get_visible_paragraph_count: "getVisibleParagraphCount";
        get_content_height: "getContentHeight";
        get_content_width: "getContentWidth";
        get_line_height: "getLineHeight";
        get_line_width: "getLineWidth";
        get_visible_content_rect: "getVisibleContentRect";
        get_line_offset: "getLineOffset";
        get_paragraph_offset: "getParagraphOffset";
        parse_expressions_for_values: "parseExpressionsForValues";
        install_effect: "installEffect";
        reload_effects: "reloadEffects";
        get_menu: "getMenu";
        is_menu_visible: "isMenuVisible";
        menu_option: "menuOption";
        bbcode_enabled: "bbcodeEnabled";
        fit_content: "fitContent";
        scroll_active: "scrollActive";
        scroll_following: "scrollFollowing";
        scroll_following_visible_characters: "scrollFollowingVisibleCharacters";
        autowrap_mode: "autowrapMode";
        autowrap_trim_flags: "autowrapTrimFlags";
        tab_size: "tabSize";
        context_menu_enabled: "contextMenuEnabled";
        shortcut_keys_enabled: "shortcutKeysEnabled";
        horizontal_alignment: "horizontalAlignment";
        vertical_alignment: "verticalAlignment";
        justification_flags: "justificationFlags";
        tab_stops: "tabStops";
        custom_effects: "customEffects";
        meta_underlined: "metaUnderlined";
        hint_underlined: "hintUnderlined";
        progress_bar_delay: "progressBarDelay";
        selection_enabled: "selectionEnabled";
        deselect_on_focus_loss_enabled: "deselectOnFocusLossEnabled";
        drag_and_drop_selection_enabled: "dragAndDropSelectionEnabled";
        visible_characters: "visibleCharacters";
        visible_characters_behavior: "visibleCharactersBehavior";
        visible_ratio: "visibleRatio";
        text_direction: "textDirection";
        structured_text_bidi_override: "structuredTextBidiOverride";
        structured_text_bidi_override_options: "structuredTextBidiOverrideOptions";
        meta_clicked: "metaClicked";
        meta_hover_started: "metaHoverStarted";
        meta_hover_ended: "metaHoverEnded";
    }
    /** A control for displaying text that can contain different font styles, images, and basic formatting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_richtextlabel.html  
     */
    class RichTextLabel<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Returns the text without BBCode mark-up. */
        getParsedText(): string
        
        /** Adds raw non-BBCode-parsed text to the tag stack. */
        addText(text: string): void
        
        /** Adds a horizontal rule that can be used to separate content.  
         *  If [param width_in_percent] is set, [param width] values are percentages of the control width instead of pixels.  
         *  If [param height_in_percent] is set, [param height] values are percentages of the control width instead of pixels.  
         */
        addHr(width?: int64 /* = 90 */, height?: int64 /* = 2 */, color?: Color /* = new Color(1, 1, 1, 1) */, alignment?: HorizontalAlignment /* = 1 */, widthInPercent?: boolean /* = true */, heightInPercent?: boolean /* = false */): void
        
        /** Adds an image's opening and closing tags to the tag stack, optionally providing a [param width] and [param height] to resize the image, a [param color] to tint the image and a [param region] to only use parts of the image.  
         *  If [param width] or [param height] is set to 0, the image size will be adjusted in order to keep the original aspect ratio.  
         *  If [param width] and [param height] are not set, but [param region] is, the region's rect will be used.  
         *  [param key] is an optional identifier, that can be used to modify the image via [method update_image].  
         *  If [param pad] is set, and the image is smaller than the size specified by [param width] and [param height], the image padding is added to match the size instead of upscaling.  
         *  If [param width_in_percent] is set, [param width] values are percentages of the control width instead of pixels.  
         *  If [param height_in_percent] is set, [param height] values are percentages of the control width instead of pixels.  
         *  [param alt_text] is used as the image description for assistive apps.  
         */
        addImage(image: Texture2D, width?: int64 /* = 0 */, height?: int64 /* = 0 */, color?: Color /* = new Color(1, 1, 1, 1) */, inlineAlign?: InlineAlignment /* = 5 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, key?: any /* = {} */, pad?: boolean /* = false */, tooltip?: string /* = '' */, widthInPercent?: boolean /* = false */, heightInPercent?: boolean /* = false */, altText?: string /* = '' */): void
        
        /** Updates the existing images with the key [param key]. Only properties specified by [param mask] bits are updated. See [method add_image]. */
        updateImage(key: any, mask: RichTextLabel.ImageUpdateMask, image: Texture2D, width?: int64 /* = 0 */, height?: int64 /* = 0 */, color?: Color /* = new Color(1, 1, 1, 1) */, inlineAlign?: InlineAlignment /* = 5 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, pad?: boolean /* = false */, tooltip?: string /* = '' */, widthInPercent?: boolean /* = false */, heightInPercent?: boolean /* = false */): void
        
        /** Adds a newline tag to the tag stack. */
        newline(): void
        
        /** Removes a paragraph of content from the label. Returns `true` if the paragraph exists.  
         *  The [param paragraph] argument is the index of the paragraph to remove, it can take values in the interval `[0, get_paragraph_count() - 1]`.  
         *  If [param no_invalidate] is set to `true`, cache for the subsequent paragraphs is not invalidated. Use it for faster updates if deleted paragraph is fully self-contained (have no unclosed tags), or this call is part of the complex edit operation and [method invalidate_paragraph] will be called at the end of operation.  
         */
        removeParagraph(paragraph: int64, noInvalidate?: boolean /* = false */): boolean
        
        /** Invalidates [param paragraph] and all subsequent paragraphs cache. */
        invalidateParagraph(paragraph: int64): boolean
        
        /** Adds a [code skip-lint][font]` tag to the tag stack. Overrides default fonts for its duration.  
         *  Passing `0` to [param font_size] will use the existing default font size.  
         */
        pushFont(font: Font, fontSize?: int64 /* = 0 */): void
        
        /** Adds a [code skip-lint][font_size]` tag to the tag stack. Overrides default font size for its duration. */
        pushFontSize(fontSize: int64): void
        
        /** Adds a [code skip-lint][font]` tag with a normal font to the tag stack. */
        pushNormal(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold font to the tag stack. This is the same as adding a [code skip-lint]**` tag if not currently in a [code skip-lint] *` tag. */
        pushBold(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold italics font to the tag stack. */
        pushBoldItalics(): void
        
        /** Adds a [code skip-lint][font]` tag with an italics font to the tag stack. This is the same as adding an [code skip-lint] *` tag if not currently in a [code skip-lint]**` tag. */
        pushItalics(): void
        
        /** Adds a [code skip-lint][font]` tag with a monospace font to the tag stack. */
        pushMono(): void
        
        /** Adds a [code skip-lint][color]` tag to the tag stack. */
        pushColor(color: Color): void
        
        /** Adds a [code skip-lint][outline_size]` tag to the tag stack. Overrides default text outline size for its duration. */
        pushOutlineSize(outlineSize: int64): void
        
        /** Adds a [code skip-lint][outline_color]` tag to the tag stack. Adds text outline for its duration. */
        pushOutlineColor(color: Color): void
        
        /** Adds a [code skip-lint][p]` tag to the tag stack. */
        pushParagraph(alignment: HorizontalAlignment, baseDirection?: Control.TextDirection /* = 0 */, language?: string /* = '' */, stParser?: TextServer.StructuredTextParser /* = 0 */, justificationFlags?: TextServer.JustificationFlag /* = 163 */, tabStops?: PackedFloat32Array | float32[] /* = [] */): void
        
        /** Adds an [code skip-lint][indent]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        pushIndent(level: int64): void
        
        /** Adds [code skip-lint][ol]` or [code skip-lint][ul]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        pushList(level: int64, type: RichTextLabel.ListType, capitalize: boolean, bullet?: string /* = '•' */): void
        
        /** Adds a meta tag to the tag stack. Similar to the BBCode [code skip-lint][url=something]{text}[/url]`, but supports non-[String] metadata types.  
         *  If [member meta_underlined] is `true`, meta tags display an underline. This behavior can be customized with [param underline_mode].  
         *      
         *  **Note:** Meta tags do nothing by default when clicked. To assign behavior when clicked, connect [signal meta_clicked] to a function that is called when the meta tag is clicked.  
         */
        pushMeta(data: any, underlineMode?: RichTextLabel.MetaUnderline /* = 1 */, tooltip?: string /* = '' */): void
        
        /** Adds a [code skip-lint][hint]` tag to the tag stack. Same as BBCode [code skip-lint][hint=something]{text}[/hint]`. */
        pushHint(description: string): void
        
        /** Adds language code used for text shaping algorithm and Open-Type font features. */
        pushLanguage(language: string): void
        
        /** Adds a [code skip-lint][u]` tag to the tag stack. If [param color] alpha value is zero, current font color with alpha multiplied by [theme_item underline_alpha] is used. */
        pushUnderline(color?: Color /* = new Color(0, 0, 0, 0) */): void
        
        /** Adds a [code skip-lint][s]` tag to the tag stack. If [param color] alpha value is zero, current font color with alpha multiplied by [theme_item strikethrough_alpha] is used. */
        pushStrikethrough(color?: Color /* = new Color(0, 0, 0, 0) */): void
        
        /** Adds a [code skip-lint][table=columns,inline_align]` tag to the tag stack. Use [method set_table_column_expand] to set column expansion ratio. Use [method push_cell] to add cells. [param name] is used as the table name for assistive apps. */
        pushTable(columns: int64, inlineAlign?: InlineAlignment /* = 0 */, alignToRow?: int64 /* = -1 */, name?: string /* = '' */): void
        
        /** Adds a [code skip-lint][dropcap]` tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        pushDropcap(string_: string, font: Font, size: int64, dropcapMargins?: Rect2 /* = new Rect2(0, 0, 0, 0) */, color?: Color /* = new Color(1, 1, 1, 1) */, outlineSize?: int64 /* = 0 */, outlineColor?: Color /* = new Color(0, 0, 0, 0) */): void
        
        /** Edits the selected column's expansion options. If [param expand] is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.  
         *  For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.  
         *  If [param expand] is `false`, the column will not contribute to the total ratio.  
         */
        setTableColumnExpand(column: int64, expand: boolean, ratio?: int64 /* = 1 */, shrink?: boolean /* = true */): void
        
        /** Sets table column name for assistive apps. */
        setTableColumnName(column: int64, name: string): void
        
        /** Sets color of a table cell. Separate colors for alternating rows can be specified. */
        setCellRowBackgroundColor(oddRowBg: Color, evenRowBg: Color): void
        
        /** Sets color of a table cell border. */
        setCellBorderColor(color: Color): void
        
        /** Sets minimum and maximum size overrides for a table cell. */
        setCellSizeOverride(minSize: Vector2, maxSize: Vector2): void
        
        /** Sets inner padding of a table cell. */
        setCellPadding(padding: Rect2): void
        
        /** Adds a [code skip-lint][cell]` tag to the tag stack. Must be inside a [code skip-lint][table]` tag. See [method push_table] for details. Use [method set_table_column_expand] to set column expansion ratio, [method set_cell_border_color] to set cell border, [method set_cell_row_background_color] to set cell background, [method set_cell_size_override] to override cell size, and [method set_cell_padding] to set padding. */
        pushCell(): void
        
        /** Adds a [code skip-lint][fgcolor]` tag to the tag stack.  
         *      
         *  **Note:** The foreground color has padding applied by default, which is controlled using [theme_item text_highlight_h_padding] and [theme_item text_highlight_v_padding]. This can lead to overlapping highlights if foreground colors are placed on neighboring lines/columns, so consider setting those theme items to `0` if you want to avoid this.  
         */
        pushFgcolor(fgcolor: Color): void
        
        /** Adds a [code skip-lint][bgcolor]` tag to the tag stack.  
         *      
         *  **Note:** The background color has padding applied by default, which is controlled using [theme_item text_highlight_h_padding] and [theme_item text_highlight_v_padding]. This can lead to overlapping highlights if background colors are placed on neighboring lines/columns, so consider setting those theme items to `0` if you want to avoid this.  
         */
        pushBgcolor(bgcolor: Color): void
        
        /** Adds a custom effect tag to the tag stack. The effect does not need to be in [member custom_effects]. The environment is directly passed to the effect. */
        pushCustomfx(effect: RichTextEffect, env: GDictionary): void
        
        /** Adds a context marker to the tag stack. See [method pop_context]. */
        pushContext(): void
        
        /** Terminates tags opened after the last [method push_context] call (including context marker), or all tags if there's no context marker on the stack. */
        popContext(): void
        
        /** Terminates the current tag. Use after `push_*` methods to close BBCodes manually. Does not need to follow `add_*` methods. */
        pop(): void
        
        /** Terminates all tags opened by `push_*` methods. */
        popAll(): void
        
        /** Clears the tag stack, causing the label to display nothing.  
         *      
         *  **Note:** This method does not affect [member text], and its contents will show again if the label is redrawn. However, setting [member text] to an empty [String] also clears the stack.  
         */
        clear(): void
        
        /** Returns the vertical scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getVScrollBar(): null | VScrollBar
        
        /** Scrolls the window's top line to match [param line]. */
        scrollToLine(line: int64): void
        
        /** Scrolls the window's top line to match first line of the [param paragraph]. */
        scrollToParagraph(paragraph: int64): void
        
        /** Scrolls to the beginning of the current selection. */
        scrollToSelection(): void
        
        /** Returns the current selection first character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        getSelectionFrom(): int64
        
        /** Returns the current selection last character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        getSelectionTo(): int64
        
        /** Returns the current selection vertical line offset if a selection is active, `-1.0` otherwise. */
        getSelectionLineOffset(): float64
        
        /** Select all the text.  
         *  If [member selection_enabled] is `false`, no selection will occur.  
         */
        selectAll(): void
        
        /** Returns the current selection text. Does not include BBCodes. */
        getSelectedText(): string
        
        /** Clears the current selection. */
        deselect(): void
        
        /** The assignment version of [method append_text]. Clears the tag stack and inserts the new content. */
        parseBbcode(bbcode: string): void
        
        /** Parses [param bbcode] and adds tags to the tag stack as needed.  
         *      
         *  **Note:** Using this method, you can't close a tag that was opened in a previous [method append_text] call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the [member text] instead of using [method append_text].  
         */
        appendText(bbcode: string): void
        
        /** If [member threaded] is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`. */
        isReady(): boolean
        
        /** If [member threaded] is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`. */
        isFinished(): boolean
        
        /** Returns the line number of the character position provided. Line and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getCharacterLine(character: int64): int64
        
        /** Returns the paragraph number of the character position provided. Paragraph and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getCharacterParagraph(character: int64): int64
        
        /** Returns the total number of characters from text tags. Does not include BBCodes. */
        getTotalCharacterCount(): int64
        
        /** Returns the total number of lines in the text. Wrapped text is counted as multiple lines.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getLineCount(): int64
        
        /** Returns the indexes of the first and last visible characters for the given [param line], as a [Vector2i].  
         *      
         *  **Note:** If [member visible_characters_behavior] is set to [constant TextServer.VC_CHARS_BEFORE_SHAPING] only visible wrapped lines are counted.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getLineRange(line: int64): Vector2I
        
        /** Returns the number of visible lines.  
         *      
         *  **Note:** This method returns a correct value only after the label has been drawn.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getVisibleLineCount(): int64
        
        /** Returns the total number of paragraphs (newlines or `p` tags in the tag stack's text tags). Considers wrapped text as one paragraph. */
        getParagraphCount(): int64
        
        /** Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.  
         *      
         *  **Note:** This method returns a correct value only after the label has been drawn.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getVisibleParagraphCount(): int64
        
        /** Returns the height of the content.  
         *      
         *  **Note:** This method always returns the full content size, and is not affected by [member visible_ratio] and [member visible_characters]. To get the visible content size, use [method get_visible_content_rect].  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getContentHeight(): int64
        
        /** Returns the width of the content.  
         *      
         *  **Note:** This method always returns the full content size, and is not affected by [member visible_ratio] and [member visible_characters]. To get the visible content size, use [method get_visible_content_rect].  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getContentWidth(): int64
        
        /** Returns the height of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether the document is fully loaded.  
         */
        getLineHeight(line: int64): int64
        
        /** Returns the width of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether the document is fully loaded.  
         */
        getLineWidth(line: int64): int64
        
        /** Returns the bounding rectangle of the visible content.  
         *      
         *  **Note:** This method returns a correct value only after the label has been drawn.  
         *    
         */
        getVisibleContentRect(): Rect2I
        
        /** Returns the vertical offset of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getLineOffset(line: int64): float64
        
        /** Returns the vertical offset of the paragraph found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getParagraphOffset(paragraph: int64): float64
        
        /** Parses BBCode parameter [param expressions] into a dictionary. */
        parseExpressionsForValues(expressions: PackedStringArray | string[]): GDictionary
        
        /** Installs a custom effect. This can also be done in the Inspector through the [member custom_effects] property. [param effect] should be a valid [RichTextEffect].  
         *  **Example:** With the following script extending from [RichTextEffect]:  
         *    
         *  The above effect can be installed in [RichTextLabel] from a script:  
         *    
         */
        installEffect(effect: any): void
        
        /** Reloads custom effects. Useful when [member custom_effects] is modified manually. */
        reloadEffects(): void
        
        /** Returns the [PopupMenu] of this [RichTextLabel]. By default, this menu is displayed when right-clicking on the [RichTextLabel].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getMenu(): null | PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        isMenuVisible(): boolean
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menuOption(option: int64): void
        
        /** If `true`, the label uses BBCode formatting.  
         *      
         *  **Note:** This only affects the contents of [member text], not the tag stack.  
         */
        get bbcodeEnabled(): boolean
        set bbcodeEnabled(value: boolean)
        
        /** The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.  
         *      
         *  **Note:** If [member bbcode_enabled] is `true`, it is unadvised to use the `+=` operator with [member text] (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use [method append_text] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.  
         */
        get text(): string
        set text(value: string)
        
        /** If `true`, the label's minimum size will be automatically updated to fit its content, matching the behavior of [Label]. */
        get fitContent(): boolean
        set fitContent(value: boolean)
        
        /** If `true`, the scrollbar is visible. Setting this to `false` does not block scrolling completely. See [method scroll_to_line]. */
        get scrollActive(): boolean
        set scrollActive(value: boolean)
        
        /** If `true`, the window scrolls down to display new content automatically. */
        get scrollFollowing(): boolean
        set scrollFollowing(value: boolean)
        
        /** If `true`, the window scrolls to display the last visible line when [member visible_characters] or [member visible_ratio] is changed. */
        get scrollFollowingVisibleCharacters(): boolean
        set scrollFollowingVisibleCharacters(value: boolean)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** Autowrap space trimming flags. See [constant TextServer.BREAK_TRIM_START_EDGE_SPACES] and [constant TextServer.BREAK_TRIM_END_EDGE_SPACES] for more info. */
        get autowrapTrimFlags(): int64
        set autowrapTrimFlags(value: int64)
        
        /** The number of spaces associated with a single tab length. Does not affect `\t` in text tags, only indent tags. */
        get tabSize(): int64
        set tabSize(value: int64)
        
        /** If `true`, a right-click displays the context menu. */
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. */
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, bottom, and fill. */
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        
        /** Line fill alignment rules. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** Aligns text to the given tab-stops. */
        get tabStops(): PackedFloat32Array
        set tabStops(value: PackedFloat32Array | float32[])
        
        /** The currently installed custom effects. This is an array of [RichTextEffect]s.  
         *  To add a custom effect, it's more convenient to use [method install_effect].  
         */
        get customEffects(): GArray<RichTextEffect>
        set customEffects(value: GArray<RichTextEffect>)
        
        /** If `true`, the label underlines meta tags such as [code skip-lint][url]{text}[/url]`. These tags can call a function when clicked if [signal meta_clicked] is connected to a function. */
        get metaUnderlined(): boolean
        set metaUnderlined(value: boolean)
        
        /** If `true`, the label underlines hint tags such as [code skip-lint][hint=description]{text}[/hint]`. */
        get hintUnderlined(): boolean
        set hintUnderlined(value: boolean)
        
        /** If `true`, text processing is done in a background thread. */
        get threaded(): boolean
        set threaded(value: boolean)
        
        /** The delay after which the loading progress bar is displayed, in milliseconds. Set to `-1` to disable progress bar entirely.  
         *      
         *  **Note:** Progress bar is displayed only if [member threaded] is enabled.  
         */
        get progressBarDelay(): int64
        set progressBarDelay(value: int64)
        
        /** If `true`, the label allows text selection. */
        get selectionEnabled(): boolean
        set selectionEnabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. */
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        
        /** The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_ratio] accordingly.  
         *      
         *  **Note:** Characters are counted as Unicode codepoints. A single visible grapheme may contain multiple codepoints (e.g. certain emoji use three codepoints). A single codepoint may contain two UTF-16 characters, which are used in C# strings.  
         */
        get visibleCharacters(): int64
        set visibleCharacters(value: int64)
        
        /** The clipping behavior when [member visible_characters] or [member visible_ratio] is set. */
        get visibleCharactersBehavior(): int64
        set visibleCharactersBehavior(value: int64)
        
        /** The fraction of characters to display, relative to the total number of characters (see [method get_total_character_count]). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_characters] accordingly.  
         */
        get visibleRatio(): float64
        set visibleRatio(value: float64)
        
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
        
        /** Triggered when the user clicks on content between meta (URL) tags. If the meta is defined in BBCode, e.g. [code skip-lint][url={"key": "value"}]Text[/url]`, then the parameter for this signal will always be a [String] type. If a particular type or an object is desired, the [method push_meta] method must be used to manually insert the data into the tag stack. Alternatively, you can convert the [String] input to the desired type based on its contents (such as calling [method JSON.parse] on it).  
         *  For example, the following method can be connected to [signal meta_clicked] to open clicked URLs using the user's default web browser:  
         *    
         */
        readonly metaClicked: Signal<(meta: any) => void>
        
        /** Triggers when the mouse enters a meta tag. */
        readonly metaHoverStarted: Signal<(meta: any) => void>
        
        /** Triggers when the mouse exits a meta tag. */
        readonly metaHoverEnded: Signal<(meta: any) => void>
        
        /** Triggered when the document is fully loaded.  
         *      
         *  **Note:** This can happen before the text is processed for drawing. Scrolling values may not be valid until the document is drawn for the first time after this signal.  
         */
        readonly finished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRichTextLabel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRichTextLabel;
    }
}
