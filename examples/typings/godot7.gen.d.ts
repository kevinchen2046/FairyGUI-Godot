// AUTO-GENERATED
declare module "godot" {
    namespace RigidBody2D {
        enum FreezeMode {
            FreezeModeStatic = 0,
            FreezeModeKinematic = 1,
        }
        enum CenterOfMassMode {
            CenterOfMassModeAuto = 0,
            CenterOfMassModeCustom = 1,
        }
        enum DampMode {
            DampModeCombine = 0,
            DampModeReplace = 1,
        }
        enum CcdMode {
            CcdModeDisabled = 0,
            CcdModeCastRay = 1,
            CcdModeCastShape = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRigidBody2D extends __RPCMapPhysicsBody2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRigidBody2D extends __NameMapPhysicsBody2D {
        _integrate_forces: "_integrateForces";
        get_contact_count: "getContactCount";
        set_axis_velocity: "setAxisVelocity";
        apply_central_impulse: "applyCentralImpulse";
        apply_impulse: "applyImpulse";
        apply_torque_impulse: "applyTorqueImpulse";
        apply_central_force: "applyCentralForce";
        apply_force: "applyForce";
        apply_torque: "applyTorque";
        add_constant_central_force: "addConstantCentralForce";
        add_constant_force: "addConstantForce";
        add_constant_torque: "addConstantTorque";
        get_colliding_bodies: "getCollidingBodies";
        physics_material_override: "physicsMaterialOverride";
        gravity_scale: "gravityScale";
        center_of_mass_mode: "centerOfMassMode";
        center_of_mass: "centerOfMass";
        can_sleep: "canSleep";
        lock_rotation: "lockRotation";
        freeze_mode: "freezeMode";
        custom_integrator: "customIntegrator";
        continuous_cd: "continuousCd";
        contact_monitor: "contactMonitor";
        max_contacts_reported: "maxContactsReported";
        linear_velocity: "linearVelocity";
        linear_damp_mode: "linearDampMode";
        linear_damp: "linearDamp";
        angular_velocity: "angularVelocity";
        angular_damp_mode: "angularDampMode";
        angular_damp: "angularDamp";
        constant_force: "constantForce";
        constant_torque: "constantTorque";
        body_shape_entered: "bodyShapeEntered";
        body_shape_exited: "bodyShapeExited";
        body_entered: "bodyEntered";
        body_exited: "bodyExited";
        sleeping_state_changed: "sleepingStateChanged";
    }
    /** A 2D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rigidbody2d.html  
     */
    class RigidBody2D<Map extends NodePathMap = any> extends PhysicsBody2D<Map> {
        constructor(identifier?: any)
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [member custom_integrator] property allows you to disable the standard force integration and do fully custom force integration for a body. */
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState2D): void
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        getContactCount(): int64
        
        /** Sets the body's velocity on the given axis. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        setAxisVelocity(axisVelocity: Vector2): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorqueImpulse(torque: float64): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force: Vector2): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorque(torque: float64): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force: Vector2): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = 0`. */
        addConstantTorque(torque: float64): void
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        getCollidingBodies(): GArray<Node2D>
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** Multiplies the gravity applied to the body. The body's gravity is calculated from the [member ProjectSettings.physics/2d/default_gravity] project setting and/or any additional gravity vector applied by [Area2D]s. */
        get gravityScale(): float64
        set gravityScale(value: float64)
        
        /** Defines the way the body's center of mass is set. */
        get centerOfMassMode(): int64
        set centerOfMassMode(value: int64)
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically determined, but this does not update the value of [member center_of_mass].  
         */
        get centerOfMass(): Vector2
        set centerOfMass(value: Vector2)
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to `0`, inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer2D] to get the computed inertia.  
         *    
         */
        get inertia(): float64
        set inertia(value: float64)
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        get canSleep(): boolean
        set canSleep(value: boolean)
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        get lockRotation(): boolean
        set lockRotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        get freezeMode(): int64
        set freezeMode(value: int64)
        
        /** If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] method, if that virtual method is overridden.  
         *  Setting this property will call the method [method PhysicsServer2D.body_set_omit_force_integration] internally.  
         */
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        
        /** Continuous collision detection mode.  
         *  Continuous collision detection tries to predict where a moving body will collide instead of moving it and correcting its movement after collision. Continuous collision detection is slower, but more precise and misses fewer collisions with small, fast-moving objects. Raycasting and shapecasting methods are available.  
         */
        get continuousCd(): int64
        set continuousCd(value: int64)
        
        /** If `true`, the RigidBody2D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        get contactMonitor(): boolean
        set contactMonitor(value: boolean)
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        get maxContactsReported(): int64
        set maxContactsReported(value: int64)
        
        /** The body's linear velocity in pixels per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linearVelocity(): Vector2
        set linearVelocity(value: Vector2)
        
        /** Defines how [member linear_damp] is applied. */
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        
        /** Damps the body's movement. By default, the body will use the [member ProjectSettings.physics/2d/default_linear_damp] setting or any value override set by an [Area2D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angularVelocity(): float64
        set angularVelocity(value: float64)
        
        /** Defines how [member angular_damp] is applied. */
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the [member ProjectSettings.physics/2d/default_angular_damp] setting or any value override set by an [Area2D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get constantForce(): Vector2
        set constantForce(value: Vector2)
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get constantTorque(): float64
        set constantTorque(value: float64)
        
        /** Emitted when one of this RigidBody2D's [Shape2D]s collides with another [PhysicsBody2D] or [TileMap]'s [Shape2D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the collision between one of this RigidBody2D's [Shape2D]s and another [PhysicsBody2D] or [TileMap]'s [Shape2D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a collision with another [PhysicsBody2D] or [TileMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly bodyEntered: Signal<(body: Node) => void>
        
        /** Emitted when the collision with another [PhysicsBody2D] or [TileMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly bodyExited: Signal<(body: Node) => void>
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
        readonly sleepingStateChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRigidBody2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRigidBody2D;
    }
    namespace RigidBody3D {
        enum FreezeMode {
            FreezeModeStatic = 0,
            FreezeModeKinematic = 1,
        }
        enum CenterOfMassMode {
            CenterOfMassModeAuto = 0,
            CenterOfMassModeCustom = 1,
        }
        enum DampMode {
            DampModeCombine = 0,
            DampModeReplace = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRigidBody3D extends __RPCMapPhysicsBody3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRigidBody3D extends __NameMapPhysicsBody3D {
        _integrate_forces: "_integrateForces";
        get_inverse_inertia_tensor: "getInverseInertiaTensor";
        get_contact_count: "getContactCount";
        set_axis_velocity: "setAxisVelocity";
        apply_central_impulse: "applyCentralImpulse";
        apply_impulse: "applyImpulse";
        apply_torque_impulse: "applyTorqueImpulse";
        apply_central_force: "applyCentralForce";
        apply_force: "applyForce";
        apply_torque: "applyTorque";
        add_constant_central_force: "addConstantCentralForce";
        add_constant_force: "addConstantForce";
        add_constant_torque: "addConstantTorque";
        get_colliding_bodies: "getCollidingBodies";
        physics_material_override: "physicsMaterialOverride";
        gravity_scale: "gravityScale";
        center_of_mass_mode: "centerOfMassMode";
        center_of_mass: "centerOfMass";
        can_sleep: "canSleep";
        lock_rotation: "lockRotation";
        freeze_mode: "freezeMode";
        custom_integrator: "customIntegrator";
        continuous_cd: "continuousCd";
        contact_monitor: "contactMonitor";
        max_contacts_reported: "maxContactsReported";
        linear_velocity: "linearVelocity";
        linear_damp_mode: "linearDampMode";
        linear_damp: "linearDamp";
        angular_velocity: "angularVelocity";
        angular_damp_mode: "angularDampMode";
        angular_damp: "angularDamp";
        constant_force: "constantForce";
        constant_torque: "constantTorque";
        body_shape_entered: "bodyShapeEntered";
        body_shape_exited: "bodyShapeExited";
        body_entered: "bodyEntered";
        body_exited: "bodyExited";
        sleeping_state_changed: "sleepingStateChanged";
    }
    /** A 3D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rigidbody3d.html  
     */
    class RigidBody3D<Map extends NodePathMap = any> extends PhysicsBody3D<Map> {
        constructor(identifier?: any)
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [member custom_integrator] property allows you to disable the standard force integration and do fully custom force integration for a body. */
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState3D): void
        
        /** Returns the inverse inertia tensor basis. This is used to calculate the angular acceleration resulting from a torque applied to the [RigidBody3D]. */
        getInverseInertiaTensor(): Basis
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        getContactCount(): int64
        
        /** Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        setAxisVelocity(axisVelocity: Vector3): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse: Vector3): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorqueImpulse(impulse: Vector3): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force: Vector3): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorque(torque: Vector3): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force: Vector3): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`. */
        addConstantTorque(torque: Vector3): void
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        getCollidingBodies(): GArray<Node3D>
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** This is multiplied by [member ProjectSettings.physics/3d/default_gravity] to produce this body's gravity. For example, a value of `1.0` will apply normal gravity, `2.0` will apply double the gravity, and `0.5` will apply half the gravity to this body. */
        get gravityScale(): float64
        set gravityScale(value: float64)
        
        /** Defines the way the body's center of mass is set. */
        get centerOfMassMode(): int64
        set centerOfMassMode(value: int64)
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically determined, but this does not update the value of [member center_of_mass].  
         */
        get centerOfMass(): Vector3
        set centerOfMass(value: Vector3)
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body on each axis. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to [constant Vector3.ZERO], inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer3D] to get the computed inertia.  
         *    
         */
        get inertia(): Vector3
        set inertia(value: Vector3)
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        get canSleep(): boolean
        set canSleep(value: boolean)
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        get lockRotation(): boolean
        set lockRotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        get freezeMode(): int64
        set freezeMode(value: int64)
        
        /** If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] method, if that virtual method is overridden.  
         *  Setting this property will call the method [method PhysicsServer3D.body_set_omit_force_integration] internally.  
         */
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        
        /** If `true`, continuous collision detection is used.  
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided. Continuous collision detection is more precise, and misses fewer impacts by small, fast-moving objects. Not using continuous collision detection is faster to compute, but can miss small, fast-moving objects.  
         */
        get continuousCd(): boolean
        set continuousCd(value: boolean)
        
        /** If `true`, the RigidBody3D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        get contactMonitor(): boolean
        set contactMonitor(value: boolean)
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        get maxContactsReported(): int64
        set maxContactsReported(value: int64)
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        
        /** Defines how [member linear_damp] is applied. */
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        
        /** Damps the body's movement. By default, the body will use the [member ProjectSettings.physics/3d/default_linear_damp] project setting or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** The RigidBody3D's rotational velocity in  *radians*  per second. */
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        
        /** Defines how [member angular_damp] is applied. */
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the [member ProjectSettings.physics/3d/default_angular_damp] project setting or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get constantForce(): Vector3
        set constantForce(value: Vector3)
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get constantTorque(): Vector3
        set constantTorque(value: Vector3)
        
        /** Emitted when one of this RigidBody3D's [Shape3D]s collides with another [PhysicsBody3D] or [GridMap]'s [Shape3D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the collision between one of this RigidBody3D's [Shape3D]s and another [PhysicsBody3D] or [GridMap]'s [Shape3D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D]. [GridMap]s are detected if the Meshes have [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a collision with another [PhysicsBody3D] or [GridMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly bodyEntered: Signal<(body: Node) => void>
        
        /** Emitted when the collision with another [PhysicsBody3D] or [GridMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly bodyExited: Signal<(body: Node) => void>
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
        readonly sleepingStateChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRigidBody3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRigidBody3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapRootMotionView extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapRootMotionView extends __NameMapVisualInstance3D {
        animation_path: "animationPath";
        cell_size: "cellSize";
        zero_y: "zeroY";
    }
    /** Editor-only helper for setting up root motion in [AnimationMixer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rootmotionview.html  
     */
    class RootMotionView<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Path to an [AnimationMixer] node to use as a basis for root motion. */
        get animationPath(): NodePath
        set animationPath(value: NodePath | string)
        
        /** The grid's color. */
        get color(): Color
        set color(value: Color)
        
        /** The grid's cell size in 3D units. */
        get cellSize(): float64
        set cellSize(value: float64)
        
        /** The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this [member radius] is reached. */
        get radius(): float64
        set radius(value: float64)
        
        /** If `true`, the grid's points will all be on the same Y coordinate ( *local*  Y = 0). If `false`, the points' original Y coordinate is preserved. */
        get zeroY(): boolean
        set zeroY(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapRootMotionView;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapRootMotionView;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSceneMultiplayer extends __RPCMapMultiplayerApi {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSceneMultiplayer extends __NameMapMultiplayerApi {
        disconnect_peer: "disconnectPeer";
        get_authenticating_peers: "getAuthenticatingPeers";
        send_auth: "sendAuth";
        complete_auth: "completeAuth";
        send_bytes: "sendBytes";
        root_path: "rootPath";
        auth_callback: "authCallback";
        auth_timeout: "authTimeout";
        allow_object_decoding: "allowObjectDecoding";
        refuse_new_connections: "refuseNewConnections";
        server_relay: "serverRelay";
        max_sync_packet_size: "maxSyncPacketSize";
        max_delta_packet_size: "maxDeltaPacketSize";
        peer_authenticating: "peerAuthenticating";
        peer_authentication_failed: "peerAuthenticationFailed";
        peer_packet: "peerPacket";
    }
    /** High-level multiplayer API implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scenemultiplayer.html  
     */
    class SceneMultiplayer extends MultiplayerApi {
        constructor(identifier?: any)
        /** Clears the current SceneMultiplayer network state (you shouldn't call this unless you know what you are doing). */
        clear(): void
        
        /** Disconnects the peer identified by [param id], removing it from the list of connected peers, and closing the underlying connection with it. */
        disconnectPeer(id: int64): void
        
        /** Returns the IDs of the peers currently trying to authenticate with this [MultiplayerAPI]. */
        getAuthenticatingPeers(): PackedInt32Array
        
        /** Sends the specified [param data] to the remote peer identified by [param id] as part of an authentication message. This can be used to authenticate peers, and control when [signal MultiplayerAPI.peer_connected] is emitted (and the remote peer accepted as one of the connected peers). */
        sendAuth(id: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Mark the authentication step as completed for the remote peer identified by [param id]. The [signal MultiplayerAPI.peer_connected] signal will be emitted for this peer once the remote side also completes the authentication. No further authentication messages are expected to be received from this peer.  
         *  If a peer disconnects before completing authentication, either due to a network issue, the [member auth_timeout] expiring, or manually calling [method disconnect_peer], the [signal peer_authentication_failed] signal will be emitted instead of [signal MultiplayerAPI.peer_disconnected].  
         */
        completeAuth(id: int64): GError
        
        /** Sends the given raw [param bytes] to a specific peer identified by [param id] (see [method MultiplayerPeer.set_target_peer]). Default ID is `0`, i.e. broadcast to all peers. */
        sendBytes(bytes: PackedByteArray | byte[] | ArrayBuffer, id?: int64 /* = 0 */, mode?: MultiplayerPeer.TransferMode /* = 2 */, channel?: int64 /* = 0 */): GError
        
        /** The root path to use for RPCs and replication. Instead of an absolute path, a relative path will be used to find the node upon which the RPC should be executed.  
         *  This effectively allows to have different branches of the scene tree to be managed by different MultiplayerAPI, allowing for example to run both client and server in the same scene.  
         */
        get rootPath(): NodePath
        set rootPath(value: NodePath | string)
        
        /** The callback to execute when receiving authentication data sent via [method send_auth]. If the [Callable] is empty (default), peers will be automatically accepted as soon as they connect. */
        get authCallback(): Callable
        set authCallback(value: Callable)
        
        /** If set to a value greater than `0.0`, the maximum duration in seconds peers can stay in the authenticating state, after which the authentication will automatically fail. See the [signal peer_authenticating] and [signal peer_authentication_failed] signals. */
        get authTimeout(): float64
        set authTimeout(value: float64)
        
        /** If `true`, the MultiplayerAPI will allow encoding and decoding of object during RPCs.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threat such as remote code execution.  
         */
        get allowObjectDecoding(): boolean
        set allowObjectDecoding(value: boolean)
        
        /** If `true`, the MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] refuses new incoming connections. */
        get refuseNewConnections(): boolean
        set refuseNewConnections(value: boolean)
        
        /** Enable or disable the server feature that notifies clients of other peers' connection/disconnection, and relays messages between them. When this option is `false`, clients won't be automatically notified of other peers and won't be able to send them packets through the server.  
         *      
         *  **Note:** Changing this option while other peers are connected may lead to unexpected behaviors.  
         *      
         *  **Note:** Support for this feature may depend on the current [MultiplayerPeer] configuration. See [method MultiplayerPeer.is_server_relay_supported].  
         */
        get serverRelay(): boolean
        set serverRelay(value: boolean)
        
        /** Maximum size of each synchronization packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of packet loss. See [MultiplayerSynchronizer]. */
        get maxSyncPacketSize(): int64
        set maxSyncPacketSize(value: int64)
        
        /** Maximum size of each delta packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of causing networking congestion (higher latency, disconnections). See [MultiplayerSynchronizer]. */
        get maxDeltaPacketSize(): int64
        set maxDeltaPacketSize(value: int64)
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] connects to a new peer and a valid [member auth_callback] is set. In this case, the [signal MultiplayerAPI.peer_connected] will not be emitted until [method complete_auth] is called with given peer [param id]. While in this state, the peer will not be included in the list returned by [method MultiplayerAPI.get_peers] (but in the one returned by [method get_authenticating_peers]), and only authentication data will be sent or received. See [method send_auth] for sending authentication data. */
        readonly peerAuthenticating: Signal<(id: int64) => void>
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] disconnects from a peer for which authentication had not yet completed. See [signal peer_authenticating]. */
        readonly peerAuthenticationFailed: Signal<(id: int64) => void>
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] receives a [param packet] with custom data (see [method send_bytes]). ID is the peer ID of the peer that sent the packet. */
        readonly peerPacket: Signal<(id: int64, packet: PackedByteArray) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSceneMultiplayer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSceneMultiplayer;
    }
    namespace SceneReplicationConfig {
        enum ReplicationMode {
            ReplicationModeNever = 0,
            ReplicationModeAlways = 1,
            ReplicationModeOnChange = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSceneReplicationConfig extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSceneReplicationConfig extends __NameMapResource {
        get_properties: "getProperties";
        add_property: "addProperty";
        has_property: "hasProperty";
        remove_property: "removeProperty";
        property_get_index: "propertyGetIndex";
        property_get_spawn: "propertyGetSpawn";
        property_set_spawn: "propertySetSpawn";
        property_get_replication_mode: "propertyGetReplicationMode";
        property_set_replication_mode: "propertySetReplicationMode";
        property_get_sync: "propertyGetSync";
        property_set_sync: "propertySetSync";
        property_get_watch: "propertyGetWatch";
        property_set_watch: "propertySetWatch";
    }
    /** Configuration for properties to synchronize with a [MultiplayerSynchronizer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scenereplicationconfig.html  
     */
    class SceneReplicationConfig extends Resource {
        constructor(identifier?: any)
        /** Returns a list of synchronized property [NodePath]s. */
        getProperties(): GArray<NodePath>
        
        /** Adds the property identified by the given [param path] to the list of the properties being synchronized, optionally passing an [param index].  
         *      
         *  **Note:** For details on restrictions and limitations on property synchronization, see [MultiplayerSynchronizer].  
         */
        addProperty(path: NodePath | string, index?: int64 /* = -1 */): void
        
        /** Returns `true` if the given [param path] is configured for synchronization. */
        hasProperty(path: NodePath | string): boolean
        
        /** Removes the property identified by the given [param path] from the configuration. */
        removeProperty(path: NodePath | string): void
        
        /** Finds the index of the given [param path]. */
        propertyGetIndex(path: NodePath | string): int64
        
        /** Returns `true` if the property identified by the given [param path] is configured to be synchronized on spawn. */
        propertyGetSpawn(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on spawn. */
        propertySetSpawn(path: NodePath | string, enabled: boolean): void
        
        /** Returns the replication mode for the property identified by the given [param path]. */
        propertyGetReplicationMode(path: NodePath | string): SceneReplicationConfig.ReplicationMode
        
        /** Sets the synchronization mode for the property identified by the given [param path]. */
        propertySetReplicationMode(path: NodePath | string, mode: SceneReplicationConfig.ReplicationMode): void
        
        /** Returns `true` if the property identified by the given [param path] is configured to be synchronized on process. */
        propertyGetSync(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on process. */
        propertySetSync(path: NodePath | string, enabled: boolean): void
        
        /** Returns `true` if the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process. */
        propertyGetWatch(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process. */
        propertySetWatch(path: NodePath | string, enabled: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSceneReplicationConfig;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSceneReplicationConfig;
    }
    namespace SceneState {
        enum GenEditState {
            GenEditStateDisabled = 0,
            GenEditStateInstance = 1,
            GenEditStateMain = 2,
            GenEditStateMainInherited = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSceneState extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSceneState extends __NameMapRefCounted {
        get_path: "getPath";
        get_base_scene_state: "getBaseSceneState";
        get_node_count: "getNodeCount";
        get_node_type: "getNodeType";
        get_node_name: "getNodeName";
        get_node_path: "getNodePath";
        get_node_owner_path: "getNodeOwnerPath";
        is_node_instance_placeholder: "isNodeInstancePlaceholder";
        get_node_instance_placeholder: "getNodeInstancePlaceholder";
        get_node_instance: "getNodeInstance";
        get_node_groups: "getNodeGroups";
        get_node_index: "getNodeIndex";
        get_node_property_count: "getNodePropertyCount";
        get_node_property_name: "getNodePropertyName";
        get_node_property_value: "getNodePropertyValue";
        get_connection_count: "getConnectionCount";
        get_connection_source: "getConnectionSource";
        get_connection_signal: "getConnectionSignal";
        get_connection_target: "getConnectionTarget";
        get_connection_method: "getConnectionMethod";
        get_connection_flags: "getConnectionFlags";
        get_connection_binds: "getConnectionBinds";
        get_connection_unbinds: "getConnectionUnbinds";
    }
    /** Provides access to a scene file's information.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scenestate.html  
     */
    class SceneState extends RefCounted {
        constructor(identifier?: any)
        /** Returns the resource path to the represented [PackedScene]. */
        getPath(): string
        
        /** Returns the [SceneState] of the scene that this scene inherits from, or `null` if it doesn't inherit from any scene. */
        getBaseSceneState(): null | SceneState
        
        /** Returns the number of nodes in the scene.  
         *  The `idx` argument used to query node data in other `get_node_*` methods in the interval `[0, get_node_count() - 1]`.  
         */
        getNodeCount(): int64
        
        /** Returns the type of the node at [param idx]. */
        getNodeType(idx: int64): StringName
        
        /** Returns the name of the node at [param idx]. */
        getNodeName(idx: int64): StringName
        
        /** Returns the path to the node at [param idx].  
         *  If [param for_parent] is `true`, returns the path of the [param idx] node's parent instead.  
         */
        getNodePath(idx: int64, forParent?: boolean /* = false */): NodePath
        
        /** Returns the path to the owner of the node at [param idx], relative to the root node. */
        getNodeOwnerPath(idx: int64): NodePath
        
        /** Returns `true` if the node at [param idx] is an [InstancePlaceholder]. */
        isNodeInstancePlaceholder(idx: int64): boolean
        
        /** Returns the path to the represented scene file if the node at [param idx] is an [InstancePlaceholder]. */
        getNodeInstancePlaceholder(idx: int64): string
        
        /** Returns a [PackedScene] for the node at [param idx] (i.e. the whole branch starting at this node, with its child nodes and resources), or `null` if the node is not an instance. */
        getNodeInstance(idx: int64): null | PackedScene
        
        /** Returns the list of group names associated with the node at [param idx]. */
        getNodeGroups(idx: int64): PackedStringArray
        
        /** Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the [param idx] argument used here and in other methods. */
        getNodeIndex(idx: int64): int64
        
        /** Returns the number of exported or overridden properties for the node at [param idx].  
         *  The `prop_idx` argument used to query node property data in other `get_node_property_*` methods in the interval `[0, get_node_property_count() - 1]`.  
         */
        getNodePropertyCount(idx: int64): int64
        
        /** Returns the name of the property at [param prop_idx] for the node at [param idx]. */
        getNodePropertyName(idx: int64, propIdx: int64): StringName
        
        /** Returns the value of the property at [param prop_idx] for the node at [param idx]. */
        getNodePropertyValue(idx: int64, propIdx: int64): any
        
        /** Returns the number of signal connections in the scene.  
         *  The `idx` argument used to query connection metadata in other `get_connection_*` methods in the interval `[0, get_connection_count() - 1]`.  
         */
        getConnectionCount(): int64
        
        /** Returns the path to the node that owns the signal at [param idx], relative to the root node. */
        getConnectionSource(idx: int64): NodePath
        
        /** Returns the name of the signal at [param idx]. */
        getConnectionSignal(idx: int64): StringName
        
        /** Returns the path to the node that owns the method connected to the signal at [param idx], relative to the root node. */
        getConnectionTarget(idx: int64): NodePath
        
        /** Returns the method connected to the signal at [param idx]. */
        getConnectionMethod(idx: int64): StringName
        
        /** Returns the connection flags for the signal at [param idx]. See [enum Object.ConnectFlags] constants. */
        getConnectionFlags(idx: int64): int64
        
        /** Returns the list of bound parameters for the signal at [param idx]. */
        getConnectionBinds(idx: int64): GArray
        
        /** Returns the number of unbound parameters for the signal at [param idx]. */
        getConnectionUnbinds(idx: int64): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSceneState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSceneState;
    }
    namespace SceneTree {
        enum GroupCallFlags {
            GroupCallDefault = 0,
            GroupCallReverse = 1,
            GroupCallDeferred = 2,
            GroupCallUnique = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSceneTree extends __RPCMapMainLoop {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSceneTree extends __NameMapMainLoop {
        has_group: "hasGroup";
        is_accessibility_enabled: "isAccessibilityEnabled";
        is_accessibility_supported: "isAccessibilitySupported";
        create_timer: "createTimer";
        create_tween: "createTween";
        get_processed_tweens: "getProcessedTweens";
        get_node_count: "getNodeCount";
        get_frame: "getFrame";
        queue_delete: "queueDelete";
        call_group_flags: "callGroupFlags";
        notify_group_flags: "notifyGroupFlags";
        set_group_flags: "setGroupFlags";
        call_group: "callGroup";
        notify_group: "notifyGroup";
        set_group: "setGroup";
        get_nodes_in_group: "getNodesInGroup";
        get_first_node_in_group: "getFirstNodeInGroup";
        get_node_count_in_group: "getNodeCountInGroup";
        change_scene_to_file: "changeSceneToFile";
        change_scene_to_packed: "changeSceneToPacked";
        reload_current_scene: "reloadCurrentScene";
        unload_current_scene: "unloadCurrentScene";
        set_multiplayer: "setMultiplayer";
        get_multiplayer: "getMultiplayer";
        auto_accept_quit: "autoAcceptQuit";
        quit_on_go_back: "quitOnGoBack";
        debug_collisions_hint: "debugCollisionsHint";
        debug_paths_hint: "debugPathsHint";
        debug_navigation_hint: "debugNavigationHint";
        edited_scene_root: "editedSceneRoot";
        current_scene: "currentScene";
        multiplayer_poll: "multiplayerPoll";
        physics_interpolation: "physicsInterpolation";
        tree_changed: "treeChanged";
        scene_changed: "sceneChanged";
        tree_process_mode_changed: "treeProcessModeChanged";
        node_added: "nodeAdded";
        node_removed: "nodeRemoved";
        node_renamed: "nodeRenamed";
        node_configuration_warning_changed: "nodeConfigurationWarningChanged";
        process_frame: "processFrame";
        physics_frame: "physicsFrame";
    }
    /** Manages the game loop via a hierarchy of nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scenetree.html  
     */
    class SceneTree extends MainLoop {
        constructor(identifier?: any)
        /** Returns `true` if a node added to the given group [param name] exists in the tree. */
        hasGroup(name: StringName): boolean
        
        /** Returns `true` if accessibility features are enabled, and accessibility information updates are actively processed. */
        isAccessibilityEnabled(): boolean
        
        /** Returns `true` if accessibility features are supported by the OS and enabled in project settings. */
        isAccessibilitySupported(): boolean
        
        /** Returns a new [SceneTreeTimer]. After [param time_sec] in seconds have passed, the timer will emit [signal SceneTreeTimer.timeout] and will be automatically freed.  
         *  If [param process_always] is `false`, the timer will be paused when setting [member SceneTree.paused] to `true`.  
         *  If [param process_in_physics] is `true`, the timer will update at the end of the physics frame, instead of the process frame.  
         *  If [param ignore_time_scale] is `true`, the timer will ignore [member Engine.time_scale] and update with the real, elapsed time.  
         *  This method is commonly used to create a one-shot delay timer, as in the following example:  
         *    
         *      
         *  **Note:** The timer is always updated  *after*  all of the nodes in the tree. A node's [method Node._process] method would be called before the timer updates (or [method Node._physics_process] if [param process_in_physics] is set to `true`).  
         */
        createTimer(timeSec: float64, processAlways?: boolean /* = true */, processInPhysics?: boolean /* = false */, ignoreTimeScale?: boolean /* = false */): SceneTreeTimer
        
        /** Creates and returns a new [Tween] processed in this tree. The Tween will start automatically on the next process frame or physics frame (depending on its [enum Tween.TweenProcessMode]).  
         *      
         *  **Note:** A [Tween] created using this method is not bound to any [Node]. It may keep working until there is nothing left to animate. If you want the [Tween] to be automatically killed when the [Node] is freed, use [method Node.create_tween] or [method Tween.bind_node].  
         */
        createTween(): Tween
        
        /** Returns an [Array] of currently existing [Tween]s in the tree, including paused tweens. */
        getProcessedTweens(): GArray<Tween>
        
        /** Returns the number of nodes inside this tree. */
        getNodeCount(): int64
        
        /** Returns how many physics process steps have been processed, since the application started. This is  *not*  a measurement of elapsed time. See also [signal physics_frame]. For the number of frames rendered, see [method Engine.get_process_frames]. */
        getFrame(): int64
        
        /** Quits the application at the end of the current iteration, with the given [param exit_code].  
         *  By convention, an exit code of `0` indicates success, whereas any other exit code indicates an error. For portability reasons, it should be between `0` and `125` (inclusive).  
         *      
         *  **Note:** On iOS this method doesn't work. Instead, as recommended by the [url=https://developer.apple.com/library/archive/qa/qa1561/_index.html]iOS Human Interface Guidelines[/url], the user is expected to close apps via the Home button.  
         */
        quit(exitCode?: int64 /* = 0 */): void
        
        /** Queues the given [param obj] to be deleted, calling its [method Object.free] at the end of the current frame. This method is similar to [method Node.queue_free]. */
        queueDelete(obj: GObject): void
        
        /** Calls the given [param method] on each node inside this tree added to the given [param group]. Use [param flags] to customize this method's behavior (see [enum GroupCallFlags]). Additional arguments for [param method] can be passed at the end of this method. Nodes that cannot call [param method] (either because the method doesn't exist or the arguments do not match) are ignored.  
         *    
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         */
        callGroupFlags(flags: int64, group: StringName, method: StringName, ...varargs: any[]): void
        
        /** Calls [method Object.notification] with the given [param notification] to all nodes inside this tree added to the [param group]. Use [param call_flags] to customize this method's behavior (see [enum GroupCallFlags]). */
        notifyGroupFlags(callFlags: int64, group: StringName, notification: int64): void
        
        /** Sets the given [param property] to [param value] on all nodes inside this tree added to the given [param group]. Nodes that do not have the [param property] are ignored. Use [param call_flags] to customize this method's behavior (see [enum GroupCallFlags]).  
         *      
         *  **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        setGroupFlags(callFlags: int64, group: StringName, property: string, value: any): void
        
        /** Calls [param method] on each node inside this tree added to the given [param group]. You can pass arguments to [param method] by specifying them at the end of this method call. Nodes that cannot call [param method] (either because the method doesn't exist or the arguments do not match) are ignored. See also [method set_group] and [method notify_group].  
         *      
         *  **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.  
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         */
        callGroup(group: StringName, method: StringName, ...varargs: any[]): void
        
        /** Calls [method Object.notification] with the given [param notification] to all nodes inside this tree added to the [param group]. See also [url=https://docs.godotengine.org/en/4.5/tutorials/best_practices/godot_notifications.html]Godot notifications[/url] and [method call_group] and [method set_group].  
         *      
         *  **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.  
         */
        notifyGroup(group: StringName, notification: int64): void
        
        /** Sets the given [param property] to [param value] on all nodes inside this tree added to the given [param group]. Nodes that do not have the [param property] are ignored. See also [method call_group] and [method notify_group].  
         *      
         *  **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.  
         *      
         *  **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        setGroup(group: StringName, property: string, value: any): void
        
        /** Returns an [Array] containing all nodes inside this tree, that have been added to the given [param group], in scene hierarchy order. */
        getNodesInGroup(group: StringName): GArray<Node>
        
        /** Returns the first [Node] found inside the tree, that has been added to the given [param group], in scene hierarchy order. Returns `null` if no match is found. See also [method get_nodes_in_group]. */
        getFirstNodeInGroup(group: StringName): null | Node
        
        /** Returns the number of nodes assigned to the given group. */
        getNodeCountInGroup(group: StringName): int64
        
        /** Changes the running scene to the one at the given [param path], after loading it into a [PackedScene] and creating a new instance.  
         *  Returns [constant OK] on success, [constant ERR_CANT_OPEN] if the [param path] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if that scene cannot be instantiated.  
         *      
         *  **Note:** See [method change_scene_to_packed] for details on the order of operations.  
         */
        changeSceneToFile(path: string): GError
        
        /** Changes the running scene to a new instance of the given [PackedScene] (which must be valid).  
         *  Returns [constant OK] on success, [constant ERR_CANT_CREATE] if the scene cannot be instantiated, or [constant ERR_INVALID_PARAMETER] if the scene is invalid.  
         *      
         *  **Note:** Operations happen in the following order when [method change_scene_to_packed] is called:  
         *  1. The current scene node is immediately removed from the tree. From that point, [method Node.get_tree] called on the current (outgoing) scene will return `null`. [member current_scene] will be `null`, too, because the new scene is not available yet.  
         *  2. At the end of the frame, the formerly current scene, already removed from the tree, will be deleted (freed from memory) and then the new scene will be instantiated and added to the tree. [method Node.get_tree] and [member current_scene] will be back to working as usual.  
         *  This ensures that both scenes aren't running at the same time, while still freeing the previous scene in a safe way similar to [method Node.queue_free].  
         *  If you want to reliably access the new scene, await the [signal scene_changed] signal.  
         */
        changeSceneToPacked(packedScene: PackedScene): GError
        
        /** Reloads the currently active scene, replacing [member current_scene] with a new instance of its original [PackedScene].  
         *  Returns [constant OK] on success, [constant ERR_UNCONFIGURED] if no [member current_scene] is defined, [constant ERR_CANT_OPEN] if [member current_scene] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if the scene cannot be instantiated.  
         */
        reloadCurrentScene(): GError
        
        /** If a current scene is loaded, calling this method will unload it. */
        unloadCurrentScene(): void
        
        /** Sets a custom [MultiplayerAPI] with the given [param root_path] (controlling also the relative subpaths), or override the default one if [param root_path] is empty.  
         *      
         *  **Note:** No [MultiplayerAPI] must be configured for the subpath containing [param root_path], nested custom multiplayers are not allowed. I.e. if one is configured for `"/root/Foo"` setting one for `"/root/Foo/Bar"` will cause an error.  
         *      
         *  **Note:** [method set_multiplayer] should be called  *before*  the child nodes are ready at the given [param root_path]. If multiplayer nodes like [MultiplayerSpawner] or [MultiplayerSynchronizer] are added to the tree before the custom multiplayer API is set, they will not work.  
         */
        setMultiplayer(multiplayer: MultiplayerApi, rootPath?: NodePath | string /* = '' */): void
        
        /** Searches for the [MultiplayerAPI] configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See [method set_multiplayer]. */
        getMultiplayer(forPath?: NodePath | string /* = '' */): null | MultiplayerApi
        
        /** If `true`, the application automatically accepts quitting requests.  
         *  For mobile platforms, see [member quit_on_go_back].  
         */
        get autoAcceptQuit(): boolean
        set autoAcceptQuit(value: boolean)
        
        /** If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).  
         *  To handle 'Go Back' button when this option is disabled, use [constant DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST].  
         */
        get quitOnGoBack(): boolean
        set quitOnGoBack(value: boolean)
        
        /** If `true`, collision shapes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_collisions_hint] while the project is running will not have the desired effect.  
         */
        get debugCollisionsHint(): boolean
        set debugCollisionsHint(value: boolean)
        
        /** If `true`, curves from [Path2D] and [Path3D] nodes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_paths_hint] while the project is running will not have the desired effect.  
         */
        get debugPathsHint(): boolean
        set debugPathsHint(value: boolean)
        
        /** If `true`, navigation polygons will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_navigation_hint] while the project is running will not have the desired effect.  
         */
        get debugNavigationHint(): boolean
        set debugNavigationHint(value: boolean)
        
        /** If `true`, the scene tree is considered paused. This causes the following behavior:  
         *  - 2D and 3D physics will be stopped, as well as collision detection and related signals.  
         *  - Depending on each node's [member Node.process_mode], their [method Node._process], [method Node._physics_process] and [method Node._input] callback methods may not called anymore.  
         */
        get paused(): boolean
        set paused(value: boolean)
        
        /** The root of the scene currently being edited in the editor. This is usually a direct child of [member root].  
         *      
         *  **Note:** This property does nothing in release builds.  
         */
        get editedSceneRoot(): null | Node
        set editedSceneRoot(value: null | Node)
        
        /** The root node of the currently loaded main scene, usually as a direct child of [member root]. See also [method change_scene_to_file], [method change_scene_to_packed], and [method reload_current_scene].  
         *  **Warning:** Setting this property directly may not work as expected, as it does  *not*  add or remove any nodes from this tree.  
         */
        get currentScene(): null | Node
        set currentScene(value: null | Node)
        
        /** The tree's root [Window]. This is top-most [Node] of the scene tree, and is always present. An absolute [NodePath] always starts from this node. Children of the root node may include the loaded [member current_scene], as well as any [url=https://docs.godotengine.org/en/4.5/tutorials/scripting/singletons_autoload.html]AutoLoad[/url] configured in the Project Settings.  
         *  **Warning:** Do not delete this node. This will result in unstable behavior, followed by a crash.  
         */
        get root(): null | Node
        set root(value: null | Node)
        
        /** If `true` (default value), enables automatic polling of the [MultiplayerAPI] for this SceneTree during [signal process_frame].  
         *  If `false`, you need to manually call [method MultiplayerAPI.poll] to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual [Mutex] protection when accessing the [MultiplayerAPI] from threads.  
         */
        get multiplayerPoll(): boolean
        set multiplayerPoll(value: boolean)
        
        /** If `true`, the renderer will interpolate the transforms of objects (both physics and non-physics) between the last two transforms, so that smooth motion is seen even when physics ticks do not coincide with rendered frames.  
         *  The default value of this property is controlled by [member ProjectSettings.physics/common/physics_interpolation].  
         *      
         *  **Note:** Although this is a global setting, finer control of individual branches of the [SceneTree] is possible using [member Node.physics_interpolation_mode].  
         */
        get physicsInterpolation(): boolean
        set physicsInterpolation(value: boolean)
        
        /** Emitted any time the tree's hierarchy changes (nodes being moved, renamed, etc.). */
        readonly treeChanged: Signal<() => void>
        
        /** Emitted after the new scene is added to scene tree and initialized. Can be used to reliably access [member current_scene] when changing scenes.  
         *    
         */
        readonly sceneChanged: Signal<() => void>
        
        /** Emitted when the [member Node.process_mode] of any node inside the tree is changed. Only emitted in the editor, to update the visibility of disabled nodes. */
        readonly treeProcessModeChanged: Signal<() => void>
        
        /** Emitted when the [param node] enters this tree. */
        readonly nodeAdded: Signal<(node: Node) => void>
        
        /** Emitted when the [param node] exits this tree. */
        readonly nodeRemoved: Signal<(node: Node) => void>
        
        /** Emitted when the [param node]'s [member Node.name] is changed. */
        readonly nodeRenamed: Signal<(node: Node) => void>
        
        /** Emitted when the [param node]'s [method Node.update_configuration_warnings] is called. Only emitted in the editor. */
        readonly nodeConfigurationWarningChanged: Signal<(node: Node) => void>
        
        /** Emitted immediately before [method Node._process] is called on every node in this tree. */
        readonly processFrame: Signal<() => void>
        
        /** Emitted immediately before [method Node._physics_process] is called on every node in this tree. */
        readonly physicsFrame: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSceneTree;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSceneTree;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSceneTreeTimer extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSceneTreeTimer extends __NameMapRefCounted {
        time_left: "timeLeft";
    }
    /** One-shot timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scenetreetimer.html  
     */
    class SceneTreeTimer extends RefCounted {
        constructor(identifier?: any)
        /** The time remaining (in seconds). */
        get timeLeft(): float64
        set timeLeft(value: float64)
        
        /** Emitted when the timer reaches 0. */
        readonly timeout: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSceneTreeTimer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSceneTreeTimer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScript extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScript extends __NameMapResource {
        can_instantiate: "canInstantiate";
        instance_has: "instanceHas";
        has_source_code: "hasSourceCode";
        get_base_script: "getBaseScript";
        get_instance_base_type: "getInstanceBaseType";
        get_global_name: "getGlobalName";
        has_script_signal: "hasScriptSignal";
        get_script_property_list: "getScriptPropertyList";
        get_script_method_list: "getScriptMethodList";
        get_script_signal_list: "getScriptSignalList";
        get_script_constant_map: "getScriptConstantMap";
        get_property_default_value: "getPropertyDefaultValue";
        is_tool: "isTool";
        is_abstract: "isAbstract";
        get_rpc_config: "getRpcConfig";
        source_code: "sourceCode";
    }
    /** A class stored as a resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_script.html  
     */
    class Script extends Resource {
        constructor(identifier?: any)
        /** Returns `true` if the script can be instantiated. */
        canInstantiate(): boolean
        
        /** Returns `true` if [param base_object] is an instance of this script. */
        instanceHas(baseObject: GObject): boolean
        
        /** Returns `true` if the script contains non-empty source code.  
         *      
         *  **Note:** If a script does not have source code, this does not mean that it is invalid or unusable. For example, a [GDScript] that was exported with binary tokenization has no source code, but still behaves as expected and could be instantiated. This can be checked with [method can_instantiate].  
         */
        hasSourceCode(): boolean
        
        /** Reloads the script's class implementation. Returns an error code. */
        reload(keepState?: boolean /* = false */): GError
        
        /** Returns the script directly inherited by this script. */
        getBaseScript(): null | Script
        
        /** Returns the script's base type. */
        getInstanceBaseType(): StringName
        
        /** Returns the class name associated with the script, if there is one. Returns an empty string otherwise.  
         *  To give the script a global name, you can use the `class_name` keyword in GDScript and the `[GlobalClass]` attribute in C#.  
         *    
         */
        getGlobalName(): StringName
        
        /** Returns `true` if the script, or a base class, defines a signal with the given name. */
        hasScriptSignal(signalName: StringName): boolean
        
        /** Returns the list of properties in this [Script].  
         *      
         *  **Note:** The dictionaries returned by this method are formatted identically to those returned by [method Object.get_property_list].  
         */
        getScriptPropertyList(): GArray<GDictionary>
        
        /** Returns the list of methods in this [Script].  
         *      
         *  **Note:** The dictionaries returned by this method are formatted identically to those returned by [method Object.get_method_list].  
         */
        getScriptMethodList(): GArray<GDictionary>
        
        /** Returns the list of user signals defined in this [Script].  
         *      
         *  **Note:** The dictionaries returned by this method are formatted identically to those returned by [method Object.get_signal_list].  
         */
        getScriptSignalList(): GArray<GDictionary>
        
        /** Returns a dictionary containing constant names and their values. */
        getScriptConstantMap(): GDictionary
        
        /** Returns the default value of the specified property. */
        getPropertyDefaultValue(property: StringName): any
        
        /** Returns `true` if the script is a tool script. A tool script can run in the editor. */
        isTool(): boolean
        
        /** Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated. */
        isAbstract(): boolean
        
        /** Returns a [Dictionary] mapping method names to their RPC configuration defined by this script. */
        getRpcConfig(): any
        
        /** The script source code or an empty string if source code is not available. When set, does not reload the class implementation automatically. */
        get sourceCode(): string
        set sourceCode(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScript;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScript;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScriptBacktrace extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScriptBacktrace extends __NameMapRefCounted {
        get_language_name: "getLanguageName";
        is_empty: "isEmpty";
        get_frame_count: "getFrameCount";
        get_frame_function: "getFrameFunction";
        get_frame_file: "getFrameFile";
        get_frame_line: "getFrameLine";
        get_global_variable_count: "getGlobalVariableCount";
        get_global_variable_name: "getGlobalVariableName";
        get_global_variable_value: "getGlobalVariableValue";
        get_local_variable_count: "getLocalVariableCount";
        get_local_variable_name: "getLocalVariableName";
        get_local_variable_value: "getLocalVariableValue";
        get_member_variable_count: "getMemberVariableCount";
        get_member_variable_name: "getMemberVariableName";
        get_member_variable_value: "getMemberVariableValue";
    }
    /** A captured backtrace of a specific script language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scriptbacktrace.html  
     */
    class ScriptBacktrace extends RefCounted {
        constructor(identifier?: any)
        /** Returns the name of the script language that this backtrace was captured from. */
        getLanguageName(): string
        
        /** Returns `true` if the backtrace has no stack frames. */
        isEmpty(): boolean
        
        /** Returns the number of stack frames in the backtrace. */
        getFrameCount(): int64
        
        /** Returns the name of the function called at the stack frame at the specified index. */
        getFrameFunction(index: int64): string
        
        /** Returns the file name of the call site represented by the stack frame at the specified index. */
        getFrameFile(index: int64): string
        
        /** Returns the line number of the call site represented by the stack frame at the specified index. */
        getFrameLine(index: int64): int64
        
        /** Returns the number of global variables (e.g. autoload singletons) in the backtrace.  
         *      
         *  **Note:** This will be non-zero only if the `include_variables` parameter was `true` when capturing the backtrace with [method Engine.capture_script_backtraces].  
         */
        getGlobalVariableCount(): int64
        
        /** Returns the name of the global variable at the specified index. */
        getGlobalVariableName(variableIndex: int64): string
        
        /** Returns the value of the global variable at the specified index.  
         *  **Warning:** With GDScript backtraces, the returned [Variant] will be the variable's actual value, including any object references. This means that storing the returned [Variant] will prevent any such object from being deallocated, so it's generally recommended not to do so.  
         */
        getGlobalVariableValue(variableIndex: int64): any
        
        /** Returns the number of local variables in the stack frame at the specified index.  
         *      
         *  **Note:** This will be non-zero only if the `include_variables` parameter was `true` when capturing the backtrace with [method Engine.capture_script_backtraces].  
         */
        getLocalVariableCount(frameIndex: int64): int64
        
        /** Returns the name of the local variable at the specified [param variable_index] in the stack frame at the specified [param frame_index]. */
        getLocalVariableName(frameIndex: int64, variableIndex: int64): string
        
        /** Returns the value of the local variable at the specified [param variable_index] in the stack frame at the specified [param frame_index].  
         *  **Warning:** With GDScript backtraces, the returned [Variant] will be the variable's actual value, including any object references. This means that storing the returned [Variant] will prevent any such object from being deallocated, so it's generally recommended not to do so.  
         */
        getLocalVariableValue(frameIndex: int64, variableIndex: int64): any
        
        /** Returns the number of member variables in the stack frame at the specified index.  
         *      
         *  **Note:** This will be non-zero only if the `include_variables` parameter was `true` when capturing the backtrace with [method Engine.capture_script_backtraces].  
         */
        getMemberVariableCount(frameIndex: int64): int64
        
        /** Returns the name of the member variable at the specified [param variable_index] in the stack frame at the specified [param frame_index]. */
        getMemberVariableName(frameIndex: int64, variableIndex: int64): string
        
        /** Returns the value of the member variable at the specified [param variable_index] in the stack frame at the specified [param frame_index].  
         *  **Warning:** With GDScript backtraces, the returned [Variant] will be the variable's actual value, including any object references. This means that storing the returned [Variant] will prevent any such object from being deallocated, so it's generally recommended not to do so.  
         */
        getMemberVariableValue(frameIndex: int64, variableIndex: int64): any
        
        /** Converts the backtrace to a [String], where the entire string will be indented by [param indent_all] number of spaces, and the individual stack frames will be additionally indented by [param indent_frames] number of spaces.  
         *      
         *  **Note:** Calling [method Object.to_string] on a [ScriptBacktrace] will produce the same output as calling [method format] with all parameters left at their default values.  
         */
        format(indentAll?: int64 /* = 0 */, indentFrames?: int64 /* = 4 */): string
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScriptBacktrace;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScriptBacktrace;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScriptCreateDialog extends __RPCMapConfirmationDialog {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScriptCreateDialog extends __NameMapConfirmationDialog {
        script_created: "scriptCreated";
    }
    /** Godot editor's popup dialog for creating new [Script] files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scriptcreatedialog.html  
     */
    class ScriptCreateDialog<Map extends NodePathMap = any> extends ConfirmationDialog<Map> {
        constructor(identifier?: any)
        /** Prefills required fields to configure the ScriptCreateDialog for use. */
        config(inherits: string, path: string, builtInEnabled?: boolean /* = true */, loadEnabled?: boolean /* = true */): void
        
        /** Emitted when the user clicks the OK button. */
        readonly scriptCreated: Signal<(script: Script) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScriptCreateDialog;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScriptCreateDialog;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScriptEditor extends __RPCMapPanelContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScriptEditor extends __NameMapPanelContainer {
        _help_tab_goto: "_helpTabGoto";
        get_current_editor: "getCurrentEditor";
        get_open_script_editors: "getOpenScriptEditors";
        get_breakpoints: "getBreakpoints";
        register_syntax_highlighter: "registerSyntaxHighlighter";
        unregister_syntax_highlighter: "unregisterSyntaxHighlighter";
        goto_line: "gotoLine";
        get_current_script: "getCurrentScript";
        get_open_scripts: "getOpenScripts";
        open_script_create_dialog: "openScriptCreateDialog";
        goto_help: "gotoHelp";
        update_docs_from_script: "updateDocsFromScript";
        clear_docs_from_script: "clearDocsFromScript";
        editor_script_changed: "editorScriptChanged";
        script_close: "scriptClose";
    }
    /** Godot editor's script editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scripteditor.html  
     */
    class ScriptEditor<Map extends NodePathMap = any> extends PanelContainer<Map> {
        constructor(identifier?: any)
        _helpTabGoto(_unnamedArg0: string, _unnamedArg1: string): boolean
        
        /** Returns the [ScriptEditorBase] object that the user is currently editing. */
        getCurrentEditor(): null | ScriptEditorBase
        
        /** Returns an array with all [ScriptEditorBase] objects which are currently open in editor. */
        getOpenScriptEditors(): GArray<ScriptEditorBase>
        
        /** Returns array of breakpoints. */
        getBreakpoints(): PackedStringArray
        
        /** Registers the [EditorSyntaxHighlighter] to the editor, the [EditorSyntaxHighlighter] will be available on all open scripts.  
         *      
         *  **Note:** Does not apply to scripts that are already opened.  
         */
        registerSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void
        
        /** Unregisters the [EditorSyntaxHighlighter] from the editor.  
         *      
         *  **Note:** The [EditorSyntaxHighlighter] will still be applied to scripts that are already opened.  
         */
        unregisterSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void
        
        /** Goes to the specified line in the current script. */
        gotoLine(lineNumber: int64): void
        
        /** Returns a [Script] that is currently active in editor. */
        getCurrentScript(): null | Script
        
        /** Returns an array with all [Script] objects which are currently open in editor. */
        getOpenScripts(): GArray<Script>
        
        /** Opens the script create dialog. The script will extend [param base_name]. The file extension can be omitted from [param base_path]. It will be added based on the selected scripting language. */
        openScriptCreateDialog(baseName: string, basePath: string): void
        
        /** Opens help for the given topic. The [param topic] is an encoded string that controls which class, method, constant, signal, annotation, property, or theme item should be focused.  
         *  The supported [param topic] formats include `class_name:class`, `class_method:class:method`, `class_constant:class:constant`, `class_signal:class:signal`, `class_annotation:class:@annotation`, `class_property:class:property`, and `class_theme_item:class:item`, where `class` is the class name, `method` is the method name, `constant` is the constant name, `signal` is the signal name, `annotation` is the annotation name, `property` is the property name, and `item` is the theme item.  
         *    
         */
        gotoHelp(topic: string): void
        
        /** Updates the documentation for the given [param script].  
         *      
         *  **Note:** This should be called whenever the script is changed to keep the open documentation state up to date.  
         */
        updateDocsFromScript(script: Script): void
        
        /** Removes the documentation for the given [param script].  
         *      
         *  **Note:** This should be called whenever the script is changed to keep the open documentation state up to date.  
         */
        clearDocsFromScript(script: Script): void
        
        /** Emitted when user changed active script. Argument is a freshly activated [Script]. */
        readonly editorScriptChanged: Signal<(script: Script) => void>
        
        /** Emitted when editor is about to close the active script. Argument is a [Script] that is going to be closed. */
        readonly scriptClose: Signal<(script: Script) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScriptEditor;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScriptEditor;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScriptEditorBase extends __RPCMapVBoxContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScriptEditorBase extends __NameMapVBoxContainer {
        get_base_editor: "getBaseEditor";
        add_syntax_highlighter: "addSyntaxHighlighter";
        name_changed: "nameChanged";
        edited_script_changed: "editedScriptChanged";
        request_help: "requestHelp";
        request_open_script_at_line: "requestOpenScriptAtLine";
        request_save_history: "requestSaveHistory";
        request_save_previous_state: "requestSavePreviousState";
        go_to_help: "goToHelp";
        search_in_files_requested: "searchInFilesRequested";
        replace_in_files_requested: "replaceInFilesRequested";
        go_to_method: "goToMethod";
    }
    /** Base editor for editing scripts in the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scripteditorbase.html  
     */
    class ScriptEditorBase<Map extends NodePathMap = any> extends VBoxContainer<Map> {
        constructor(identifier?: any)
        /** Returns the underlying [Control] used for editing scripts. For text scripts, this is a [CodeEdit]. */
        getBaseEditor(): null | Control
        
        /** Adds an [EditorSyntaxHighlighter] to the open script. */
        addSyntaxHighlighter(highlighter: EditorSyntaxHighlighter): void
        
        /** Emitted after script validation or when the edited resource has changed. */
        readonly nameChanged: Signal<() => void>
        
        /** Emitted after script validation. */
        readonly editedScriptChanged: Signal<() => void>
        
        /** Emitted when the user requests contextual help. */
        readonly requestHelp: Signal<(topic: string) => void>
        
        /** Emitted when the user requests to view a specific line of a script, similar to [signal go_to_method]. */
        readonly requestOpenScriptAtLine: Signal<(script: GObject, line: int64) => void>
        
        /** Emitted when the user contextual goto and the item is in the same script. */
        readonly requestSaveHistory: Signal<() => void>
        
        /** Emitted when the user changes current script or moves caret by 10 or more columns within the same script. */
        readonly requestSavePreviousState: Signal<(state: GDictionary) => void>
        
        /** Emitted when the user requests a specific documentation page. */
        readonly goToHelp: Signal<(what: string) => void>
        
        /** Emitted when the user request to search text in the file system. */
        readonly searchInFilesRequested: Signal<(text: string) => void>
        
        /** Emitted when the user request to find and replace text in the file system. */
        readonly replaceInFilesRequested: Signal<(text: string) => void>
        
        /** Emitted when the user requests to view a specific method of a script, similar to [signal request_open_script_at_line]. */
        readonly goToMethod: Signal<(script: GObject, method: string) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScriptEditorBase;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScriptEditorBase;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScriptExtension extends __RPCMapScript {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScriptExtension extends __NameMapScript {
        _editor_can_reload_from_file: "_editorCanReloadFromFile";
        _placeholder_erased: "_placeholderErased";
        _can_instantiate: "_canInstantiate";
        _get_base_script: "_getBaseScript";
        _get_global_name: "_getGlobalName";
        _inherits_script: "_inheritsScript";
        _get_instance_base_type: "_getInstanceBaseType";
        _instance_create: "_instanceCreate";
        _placeholder_instance_create: "_placeholderInstanceCreate";
        _instance_has: "_instanceHas";
        _has_source_code: "_hasSourceCode";
        _get_source_code: "_getSourceCode";
        _set_source_code: "_setSourceCode";
        _get_doc_class_name: "_getDocClassName";
        _get_documentation: "_getDocumentation";
        _get_class_icon_path: "_getClassIconPath";
        _has_method: "_hasMethod";
        _has_static_method: "_hasStaticMethod";
        _get_script_method_argument_count: "_getScriptMethodArgumentCount";
        _get_method_info: "_getMethodInfo";
        _is_tool: "_isTool";
        _is_valid: "_isValid";
        _is_abstract: "_isAbstract";
        _get_language: "_getLanguage";
        _has_script_signal: "_hasScriptSignal";
        _get_script_signal_list: "_getScriptSignalList";
        _has_property_default_value: "_hasPropertyDefaultValue";
        _get_property_default_value: "_getPropertyDefaultValue";
        _update_exports: "_updateExports";
        _get_script_method_list: "_getScriptMethodList";
        _get_script_property_list: "_getScriptPropertyList";
        _get_member_line: "_getMemberLine";
        _get_constants: "_getConstants";
        _get_members: "_getMembers";
        _is_placeholder_fallback_enabled: "_isPlaceholderFallbackEnabled";
        _get_rpc_config: "_getRpcConfig";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_scriptextension.html */
    class ScriptExtension extends Script {
        constructor(identifier?: any)
        /* gdvirtual */ _editorCanReloadFromFile(): boolean
        /* gdvirtual */ _placeholderErased(placeholder: int64): void
        /* gdvirtual */ _canInstantiate(): boolean
        /* gdvirtual */ _getBaseScript(): null | Script
        /* gdvirtual */ _getGlobalName(): StringName
        /* gdvirtual */ _inheritsScript(script: Script): boolean
        /* gdvirtual */ _getInstanceBaseType(): StringName
        /* gdvirtual */ _instanceCreate(forObject: GObject): int64
        /* gdvirtual */ _placeholderInstanceCreate(forObject: GObject): int64
        /* gdvirtual */ _instanceHas(object: GObject): boolean
        /* gdvirtual */ _hasSourceCode(): boolean
        /* gdvirtual */ _getSourceCode(): string
        /* gdvirtual */ _setSourceCode(code: string): void
        /* gdvirtual */ _reload(keepState: boolean): GError
        /* gdvirtual */ _getDocClassName(): StringName
        /* gdvirtual */ _getDocumentation(): GArray<GDictionary>
        /* gdvirtual */ _getClassIconPath(): string
        /* gdvirtual */ _hasMethod(method: StringName): boolean
        /* gdvirtual */ _hasStaticMethod(method: StringName): boolean
        
        /** Return the expected argument count for the given [param method], or `null` if it can't be determined (which will then fall back to the default behavior). */
        /* gdvirtual */ _getScriptMethodArgumentCount(method: StringName): any
        /* gdvirtual */ _getMethodInfo(method: StringName): GDictionary
        /* gdvirtual */ _isTool(): boolean
        /* gdvirtual */ _isValid(): boolean
        
        /** Returns `true` if the script is an abstract script. Abstract scripts cannot be instantiated directly, instead other scripts should inherit them. Abstract scripts will be either unselectable or hidden in the Create New Node dialog (unselectable if there are non-abstract classes inheriting it, otherwise hidden). */
        /* gdvirtual */ _isAbstract(): boolean
        /* gdvirtual */ _getLanguage(): null | ScriptLanguage
        /* gdvirtual */ _hasScriptSignal(signal: StringName): boolean
        /* gdvirtual */ _getScriptSignalList(): GArray<GDictionary>
        /* gdvirtual */ _hasPropertyDefaultValue(property: StringName): boolean
        /* gdvirtual */ _getPropertyDefaultValue(property: StringName): any
        /* gdvirtual */ _updateExports(): void
        /* gdvirtual */ _getScriptMethodList(): GArray<GDictionary>
        /* gdvirtual */ _getScriptPropertyList(): GArray<GDictionary>
        /* gdvirtual */ _getMemberLine(member: StringName): int64
        /* gdvirtual */ _getConstants(): GDictionary
        /* gdvirtual */ _getMembers(): GArray<StringName>
        /* gdvirtual */ _isPlaceholderFallbackEnabled(): boolean
        /* gdvirtual */ _getRpcConfig(): any
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScriptExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScriptExtension;
    }
    namespace ScriptLanguage {
        enum ScriptNameCasing {
            ScriptNameCasingAuto = 0,
            ScriptNameCasingPascalCase = 1,
            ScriptNameCasingSnakeCase = 2,
            ScriptNameCasingKebabCase = 3,
            ScriptNameCasingCamelCase = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScriptLanguage extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScriptLanguage extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_scriptlanguage.html */
    class ScriptLanguage extends GObject {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScriptLanguage;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScriptLanguage;
    }
    namespace ScriptLanguageExtension {
        enum LookupResultType {
            LookupResultScriptLocation = 0,
            LookupResultClass = 1,
            LookupResultClassConstant = 2,
            LookupResultClassProperty = 3,
            LookupResultClassMethod = 4,
            LookupResultClassSignal = 5,
            LookupResultClassEnum = 6,
            LookupResultClassTbdGlobalscope = 7,
            LookupResultClassAnnotation = 8,
            LookupResultLocalConstant = 9,
            LookupResultLocalVariable = 10,
            LookupResultMax = 11,
        }
        enum CodeCompletionLocation {
            LocationLocal = 0,
            LocationParentMask = 256,
            LocationOtherUserCode = 512,
            LocationOther = 1024,
        }
        enum CodeCompletionKind {
            CodeCompletionKindClass = 0,
            CodeCompletionKindFunction = 1,
            CodeCompletionKindSignal = 2,
            CodeCompletionKindVariable = 3,
            CodeCompletionKindMember = 4,
            CodeCompletionKindEnum = 5,
            CodeCompletionKindConstant = 6,
            CodeCompletionKindNodePath = 7,
            CodeCompletionKindFilePath = 8,
            CodeCompletionKindPlainText = 9,
            CodeCompletionKindMax = 10,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScriptLanguageExtension extends __RPCMapScriptLanguage {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScriptLanguageExtension extends __NameMapScriptLanguage {
        _get_name: "_getName";
        _get_type: "_getType";
        _get_extension: "_getExtension";
        _get_reserved_words: "_getReservedWords";
        _is_control_flow_keyword: "_isControlFlowKeyword";
        _get_comment_delimiters: "_getCommentDelimiters";
        _get_doc_comment_delimiters: "_getDocCommentDelimiters";
        _get_string_delimiters: "_getStringDelimiters";
        _make_template: "_makeTemplate";
        _get_built_in_templates: "_getBuiltInTemplates";
        _is_using_templates: "_isUsingTemplates";
        _validate_path: "_validatePath";
        _create_script: "_createScript";
        _has_named_classes: "_hasNamedClasses";
        _supports_builtin_mode: "_supportsBuiltinMode";
        _supports_documentation: "_supportsDocumentation";
        _can_inherit_from_file: "_canInheritFromFile";
        _find_function: "_findFunction";
        _make_function: "_makeFunction";
        _can_make_function: "_canMakeFunction";
        _open_in_external_editor: "_openInExternalEditor";
        _overrides_external_editor: "_overridesExternalEditor";
        _preferred_file_name_casing: "_preferredFileNameCasing";
        _complete_code: "_completeCode";
        _lookup_code: "_lookupCode";
        _auto_indent_code: "_autoIndentCode";
        _add_global_constant: "_addGlobalConstant";
        _add_named_global_constant: "_addNamedGlobalConstant";
        _remove_named_global_constant: "_removeNamedGlobalConstant";
        _thread_enter: "_threadEnter";
        _thread_exit: "_threadExit";
        _debug_get_error: "_debugGetError";
        _debug_get_stack_level_count: "_debugGetStackLevelCount";
        _debug_get_stack_level_line: "_debugGetStackLevelLine";
        _debug_get_stack_level_function: "_debugGetStackLevelFunction";
        _debug_get_stack_level_source: "_debugGetStackLevelSource";
        _debug_get_stack_level_locals: "_debugGetStackLevelLocals";
        _debug_get_stack_level_members: "_debugGetStackLevelMembers";
        _debug_get_stack_level_instance: "_debugGetStackLevelInstance";
        _debug_get_globals: "_debugGetGlobals";
        _debug_parse_stack_level_expression: "_debugParseStackLevelExpression";
        _debug_get_current_stack_info: "_debugGetCurrentStackInfo";
        _reload_all_scripts: "_reloadAllScripts";
        _reload_scripts: "_reloadScripts";
        _reload_tool_script: "_reloadToolScript";
        _get_recognized_extensions: "_getRecognizedExtensions";
        _get_public_functions: "_getPublicFunctions";
        _get_public_constants: "_getPublicConstants";
        _get_public_annotations: "_getPublicAnnotations";
        _profiling_start: "_profilingStart";
        _profiling_stop: "_profilingStop";
        _profiling_set_save_native_calls: "_profilingSetSaveNativeCalls";
        _profiling_get_accumulated_data: "_profilingGetAccumulatedData";
        _profiling_get_frame_data: "_profilingGetFrameData";
        _handles_global_class_type: "_handlesGlobalClassType";
        _get_global_class_name: "_getGlobalClassName";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_scriptlanguageextension.html */
    class ScriptLanguageExtension extends ScriptLanguage {
        constructor(identifier?: any)
        /* gdvirtual */ _getName(): string
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _getType(): string
        /* gdvirtual */ _getExtension(): string
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _getReservedWords(): PackedStringArray
        /* gdvirtual */ _isControlFlowKeyword(keyword: string): boolean
        /* gdvirtual */ _getCommentDelimiters(): PackedStringArray
        /* gdvirtual */ _getDocCommentDelimiters(): PackedStringArray
        /* gdvirtual */ _getStringDelimiters(): PackedStringArray
        /* gdvirtual */ _makeTemplate(template: string, className: string, baseClassName: string): null | Script
        /* gdvirtual */ _getBuiltInTemplates(object: StringName): GArray<GDictionary>
        /* gdvirtual */ _isUsingTemplates(): boolean
        /* gdvirtual */ _validate(script: string, path: string, validateFunctions: boolean, validateErrors: boolean, validateWarnings: boolean, validateSafeLines: boolean): GDictionary
        /* gdvirtual */ _validatePath(path: string): string
        /* gdvirtual */ _createScript(): null | GObject
        /* gdvirtual */ _hasNamedClasses(): boolean
        /* gdvirtual */ _supportsBuiltinMode(): boolean
        /* gdvirtual */ _supportsDocumentation(): boolean
        /* gdvirtual */ _canInheritFromFile(): boolean
        
        /** Returns the line where the function is defined in the code, or `-1` if the function is not present. */
        /* gdvirtual */ _findFunction(function_: string, code: string): int64
        /* gdvirtual */ _makeFunction(className: string, functionName: string, functionArgs: PackedStringArray | string[]): string
        /* gdvirtual */ _canMakeFunction(): boolean
        /* gdvirtual */ _openInExternalEditor(script: Script, line: int64, column: int64): GError
        /* gdvirtual */ _overridesExternalEditor(): boolean
        /* gdvirtual */ _preferredFileNameCasing(): ScriptLanguage.ScriptNameCasing
        /* gdvirtual */ _completeCode(code: string, path: string, owner: GObject): GDictionary
        /* gdvirtual */ _lookupCode(code: string, symbol: string, path: string, owner: GObject): GDictionary
        /* gdvirtual */ _autoIndentCode(code: string, fromLine: int64, toLine: int64): string
        /* gdvirtual */ _addGlobalConstant(name: StringName, value: any): void
        /* gdvirtual */ _addNamedGlobalConstant(name: StringName, value: any): void
        /* gdvirtual */ _removeNamedGlobalConstant(name: StringName): void
        /* gdvirtual */ _threadEnter(): void
        /* gdvirtual */ _threadExit(): void
        /* gdvirtual */ _debugGetError(): string
        /* gdvirtual */ _debugGetStackLevelCount(): int64
        /* gdvirtual */ _debugGetStackLevelLine(level: int64): int64
        /* gdvirtual */ _debugGetStackLevelFunction(level: int64): string
        
        /** Returns the source associated with a given debug stack position. */
        /* gdvirtual */ _debugGetStackLevelSource(level: int64): string
        /* gdvirtual */ _debugGetStackLevelLocals(level: int64, maxSubitems: int64, maxDepth: int64): GDictionary
        /* gdvirtual */ _debugGetStackLevelMembers(level: int64, maxSubitems: int64, maxDepth: int64): GDictionary
        /* gdvirtual */ _debugGetStackLevelInstance(level: int64): int64
        /* gdvirtual */ _debugGetGlobals(maxSubitems: int64, maxDepth: int64): GDictionary
        /* gdvirtual */ _debugParseStackLevelExpression(level: int64, expression: string, maxSubitems: int64, maxDepth: int64): string
        /* gdvirtual */ _debugGetCurrentStackInfo(): GArray<GDictionary>
        /* gdvirtual */ _reloadAllScripts(): void
        /* gdvirtual */ _reloadScripts(scripts: GArray, softReload: boolean): void
        /* gdvirtual */ _reloadToolScript(script: Script, softReload: boolean): void
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        /* gdvirtual */ _getPublicFunctions(): GArray<GDictionary>
        /* gdvirtual */ _getPublicConstants(): GDictionary
        /* gdvirtual */ _getPublicAnnotations(): GArray<GDictionary>
        /* gdvirtual */ _profilingStart(): void
        /* gdvirtual */ _profilingStop(): void
        /* gdvirtual */ _profilingSetSaveNativeCalls(enable: boolean): void
        /* gdvirtual */ _profilingGetAccumulatedData(infoArray: int64, infoMax: int64): int64
        /* gdvirtual */ _profilingGetFrameData(infoArray: int64, infoMax: int64): int64
        /* gdvirtual */ _frame(): void
        /* gdvirtual */ _handlesGlobalClassType(type: string): boolean
        /* gdvirtual */ _getGlobalClassName(path: string): GDictionary
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScriptLanguageExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScriptLanguageExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScrollBar extends __RPCMapRange {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScrollBar extends __NameMapRange {
        custom_step: "customStep";
    }
    /** Abstract base class for scrollbars.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scrollbar.html  
     */
    class ScrollBar<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** Overrides the step used when clicking increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get customStep(): float64
        set customStep(value: float64)
        
        /** Emitted when the scrollbar is being scrolled. */
        readonly scrolling: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScrollBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScrollBar;
    }
    namespace ScrollContainer {
        enum ScrollMode {
            ScrollModeDisabled = 0,
            ScrollModeAuto = 1,
            ScrollModeShowAlways = 2,
            ScrollModeShowNever = 3,
            ScrollModeReserve = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScrollContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScrollContainer extends __NameMapContainer {
        get_h_scroll_bar: "getHScrollBar";
        get_v_scroll_bar: "getVScrollBar";
        ensure_control_visible: "ensureControlVisible";
        follow_focus: "followFocus";
        draw_focus_border: "drawFocusBorder";
        scroll_horizontal: "scrollHorizontal";
        scroll_vertical: "scrollVertical";
        scroll_horizontal_custom_step: "scrollHorizontalCustomStep";
        scroll_vertical_custom_step: "scrollVerticalCustomStep";
        horizontal_scroll_mode: "horizontalScrollMode";
        vertical_scroll_mode: "verticalScrollMode";
        scroll_deadzone: "scrollDeadzone";
        scroll_started: "scrollStarted";
        scroll_ended: "scrollEnded";
    }
    /** A container used to provide scrollbars to a child control when needed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_scrollcontainer.html  
     */
    class ScrollContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** Returns the horizontal scrollbar [HScrollBar] of this [ScrollContainer].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member horizontal_scroll_mode].  
         */
        getHScrollBar(): null | HScrollBar
        
        /** Returns the vertical scrollbar [VScrollBar] of this [ScrollContainer].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member vertical_scroll_mode].  
         */
        getVScrollBar(): null | VScrollBar
        
        /** Ensures the given [param control] is visible (must be a direct or indirect child of the ScrollContainer). Used by [member follow_focus].  
         *      
         *  **Note:** This will not work on a node that was just added during the same frame. If you want to scroll to a newly added child, you must wait until the next frame using [signal SceneTree.process_frame]:  
         *    
         */
        ensureControlVisible(control: Control): void
        
        /** If `true`, the ScrollContainer will automatically scroll to focused children (including indirect children) to make sure they are fully visible. */
        get followFocus(): boolean
        set followFocus(value: boolean)
        
        /** If `true`, [theme_item focus] is drawn when the ScrollContainer or one of its descendant nodes is focused. */
        get drawFocusBorder(): boolean
        set drawFocusBorder(value: boolean)
        
        /** The current horizontal scroll value.  
         *      
         *  **Note:** If you are setting this value in the [method Node._ready] function or earlier, it needs to be wrapped with [method Object.set_deferred], since scroll bar's [member Range.max_value] is not initialized yet.  
         *    
         */
        get scrollHorizontal(): int64
        set scrollHorizontal(value: int64)
        
        /** The current vertical scroll value.  
         *      
         *  **Note:** Setting it early needs to be deferred, just like in [member scroll_horizontal].  
         *    
         */
        get scrollVertical(): int64
        set scrollVertical(value: int64)
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's horizontal increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get scrollHorizontalCustomStep(): float64
        set scrollHorizontalCustomStep(value: float64)
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's vertical increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get scrollVerticalCustomStep(): float64
        set scrollVerticalCustomStep(value: float64)
        
        /** Controls whether horizontal scrollbar can be used and when it should be visible. */
        get horizontalScrollMode(): int64
        set horizontalScrollMode(value: int64)
        
        /** Controls whether vertical scrollbar can be used and when it should be visible. */
        get verticalScrollMode(): int64
        set verticalScrollMode(value: int64)
        
        /** Deadzone for touch scrolling. Lower deadzone makes the scrolling more sensitive. */
        get scrollDeadzone(): int64
        set scrollDeadzone(value: int64)
        
        /** Emitted when scrolling starts when dragging the scrollable area w *ith a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scrollStarted: Signal<() => void>
        
        /** Emitted when scrolling stops when dragging the scrollable area  *with a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scrollEnded: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScrollContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScrollContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapScrollPane extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapScrollPane extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_scrollpane.html */
    class ScrollPane extends RefCounted {
        constructor(identifier?: any)
        getPosX(): float64
        setPosX(value: float64, ani?: boolean /* = false */): void
        getPosY(): float64
        setPosY(value: float64, ani?: boolean /* = false */): void
        scrollTop(ani?: boolean /* = false */): void
        scrollBottom(ani?: boolean /* = false */): void
        isBottomMost(): boolean
        getHeader(): null | GComponent
        getFooter(): null | GComponent
        lockHeader(size: int64): void
        lockFooter(size: int64): void
        cancelDragging(): void
        refresh(): void
        refreshScrollBars(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapScrollPane;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapScrollPane;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSegmentShape2D extends __RPCMapShape2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSegmentShape2D extends __NameMapShape2D {
    }
    /** A 2D line segment shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_segmentshape2d.html  
     */
    class SegmentShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The segment's first point position. */
        get a(): Vector2
        set a(value: Vector2)
        
        /** The segment's second point position. */
        get b(): Vector2
        set b(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSegmentShape2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSegmentShape2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSeparationRayShape2D extends __RPCMapShape2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSeparationRayShape2D extends __NameMapShape2D {
        slide_on_slope: "slideOnSlope";
    }
    /** A 2D ray shape used for physics collision that tries to separate itself from any collider.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_separationrayshape2d.html  
     */
    class SeparationRayShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The ray's length. */
        get length(): float64
        set length(value: float64)
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
        get slideOnSlope(): boolean
        set slideOnSlope(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSeparationRayShape2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSeparationRayShape2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSeparationRayShape3D extends __RPCMapShape3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSeparationRayShape3D extends __NameMapShape3D {
        slide_on_slope: "slideOnSlope";
    }
    /** A 3D ray shape used for physics collision that tries to separate itself from any collider.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_separationrayshape3d.html  
     */
    class SeparationRayShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The ray's length. */
        get length(): float64
        set length(value: float64)
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
        get slideOnSlope(): boolean
        set slideOnSlope(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSeparationRayShape3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSeparationRayShape3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSeparator extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSeparator extends __NameMapControl {
    }
    /** Abstract base class for separators.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_separator.html  
     */
    class Separator<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSeparator;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSeparator;
    }
    namespace Shader {
        enum Mode {
            ModeSpatial = 0,
            ModeCanvasItem = 1,
            ModeParticles = 2,
            ModeSky = 3,
            ModeFog = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShader extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShader extends __NameMapResource {
        get_mode: "getMode";
        set_default_texture_parameter: "setDefaultTextureParameter";
        get_default_texture_parameter: "getDefaultTextureParameter";
        get_shader_uniform_list: "getShaderUniformList";
        inspect_native_shader_code: "inspectNativeShaderCode";
    }
    /** A shader implemented in the Godot shading language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shader.html  
     */
    class Shader extends Resource {
        constructor(identifier?: any)
        /** Returns the shader mode for the shader. */
        getMode(): Shader.Mode
        
        /** Sets the default texture to be used with a texture uniform. The default is used if a texture is not set in the [ShaderMaterial].  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        setDefaultTextureParameter(name: StringName, texture: Texture, index?: int64 /* = 0 */): void
        
        /** Returns the texture that is set as default for the specified parameter.  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        getDefaultTextureParameter(name: StringName, index?: int64 /* = 0 */): null | Texture
        
        /** Returns the list of shader uniforms that can be assigned to a [ShaderMaterial], for use with [method ShaderMaterial.set_shader_parameter] and [method ShaderMaterial.get_shader_parameter]. The parameters returned are contained in dictionaries in a similar format to the ones returned by [method Object.get_property_list].  
         *  If argument [param get_groups] is `true`, parameter grouping hints are also included in the list.  
         */
        getShaderUniformList(getGroups?: boolean /* = false */): GArray
        
        /** Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. See also [method Material.inspect_native_shader_code]. */
        inspectNativeShaderCode(): void
        
        /** Returns the shader's code as the user has written it, not the full generated code used internally. */
        get code(): string
        set code(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShader;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShaderGlobalsOverride extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShaderGlobalsOverride extends __NameMapNode {
    }
    /** A node used to override global shader parameters' values in a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shaderglobalsoverride.html  
     */
    class ShaderGlobalsOverride<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        _activate(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShaderGlobalsOverride;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShaderGlobalsOverride;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShaderInclude extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShaderInclude extends __NameMapResource {
    }
    /** A snippet of shader code to be included in a [Shader] with `#include`.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shaderinclude.html  
     */
    class ShaderInclude extends Resource {
        constructor(identifier?: any)
        /** Returns the code of the shader include file. The returned text is what the user has written, not the full generated code used internally. */
        get code(): string
        set code(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShaderInclude;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShaderInclude;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShaderIncludeDB extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShaderIncludeDB extends __NameMapGObject {
        list_built_in_include_files: "listBuiltInIncludeFiles";
        has_built_in_include_file: "hasBuiltInIncludeFile";
        get_built_in_include_file: "getBuiltInIncludeFile";
    }
    /** Internal database of built in shader include files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shaderincludedb.html  
     */
    class ShaderIncludeDB extends GObject {
        constructor(identifier?: any)
        /** Returns a list of built-in include files that are currently registered. */
        static listBuiltInIncludeFiles(): PackedStringArray
        
        /** Returns `true` if an include file with this name exists. */
        static hasBuiltInIncludeFile(fileName: string): boolean
        
        /** Returns the code for the built-in shader fragment. You can also access this in your shader code through `#include "filename"`. */
        static getBuiltInIncludeFile(fileName: string): string
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShaderIncludeDB;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShaderIncludeDB;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShaderMaterial extends __RPCMapMaterial {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShaderMaterial extends __NameMapMaterial {
        set_shader_parameter: "setShaderParameter";
        get_shader_parameter: "getShaderParameter";
    }
    /** A material defined by a custom [Shader] program and the values of its shader parameters.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shadermaterial.html  
     */
    class ShaderMaterial extends Material {
        constructor(identifier?: any)
        /** Changes the value set for this material of a uniform in the shader.  
         *      
         *  **Note:** [param param] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Changes to the shader uniform will be effective on all instances using this [ShaderMaterial]. To prevent this, use per-instance uniforms with [method GeometryInstance3D.set_instance_shader_parameter] or duplicate the [ShaderMaterial] resource using [method Resource.duplicate]. Per-instance uniforms allow for better shader reuse and are therefore faster, so they should be preferred over duplicating the [ShaderMaterial] when possible.  
         */
        setShaderParameter(param: StringName, value: any): void
        
        /** Returns the current value set for this material of a uniform in the shader. */
        getShaderParameter(param: StringName): any
        
        /** The [Shader] program used to render this material. */
        get shader(): null | Shader
        set shader(value: null | Shader)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShaderMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShaderMaterial;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShape2D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShape2D extends __NameMapResource {
        collide_with_motion: "collideWithMotion";
        collide_and_get_contacts: "collideAndGetContacts";
        collide_with_motion_and_get_contacts: "collideWithMotionAndGetContacts";
        get_rect: "getRect";
        custom_solver_bias: "customSolverBias";
    }
    /** Abstract base class for 2D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shape2d.html  
     */
    class Shape2D extends Resource {
        constructor(identifier?: any)
        /** Returns `true` if this shape is colliding with another.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).  
         */
        collide(localXform: Transform2D, withShape: Shape2D, shapeXform: Transform2D): boolean
        
        /** Returns whether this shape would collide with another, if a given movement was applied.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).  
         */
        collideWithMotion(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): boolean
        
        /** Returns a list of contact point pairs where this shape touches another.  
         *  If there are no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].  
         *  A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).  
         */
        collideAndGetContacts(localXform: Transform2D, withShape: Shape2D, shapeXform: Transform2D): PackedVector2Array
        
        /** Returns a list of contact point pairs where this shape would touch another, if a given movement was applied.  
         *  If there would be no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].  
         *  A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).  
         */
        collideWithMotionAndGetContacts(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): PackedVector2Array
        
        /** Draws a solid shape onto a [CanvasItem] with the [RenderingServer] API filled with the specified [param color]. The exact drawing method is specific for each shape and cannot be configured. */
        draw(canvasItem: Rid, color: Color): void
        
        /** Returns a [Rect2] representing the shapes boundary. */
        getRect(): Rect2
        
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_contact_bias] is used.  
         */
        get customSolverBias(): float64
        set customSolverBias(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShape2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShape2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShape3D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShape3D extends __NameMapResource {
        get_debug_mesh: "getDebugMesh";
        custom_solver_bias: "customSolverBias";
    }
    /** Abstract base class for 3D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shape3d.html  
     */
    class Shape3D extends Resource {
        constructor(identifier?: any)
        /** Returns the [ArrayMesh] used to draw the debug collision for this [Shape3D]. */
        getDebugMesh(): null | ArrayMesh
        
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/3d/solver/default_contact_bias] is used.  
         */
        get customSolverBias(): float64
        set customSolverBias(value: float64)
        
        /** The collision margin for the shape. This is not used in Godot Physics.  
         *  Collision margins allow collision detection to be more efficient by adding an extra shell around shapes. Collision algorithms are more expensive when objects overlap by more than their margin, so a higher value for margins is better for performance, at the cost of accuracy around edges as it makes them less sharp.  
         */
        get margin(): float64
        set margin(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShape3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShape3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShapeCast2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShapeCast2D extends __NameMapNode2D {
        is_colliding: "isColliding";
        get_collision_count: "getCollisionCount";
        force_shapecast_update: "forceShapecastUpdate";
        get_collider: "getCollider";
        get_collider_rid: "getColliderRid";
        get_collider_shape: "getColliderShape";
        get_collision_point: "getCollisionPoint";
        get_collision_normal: "getCollisionNormal";
        get_closest_collision_safe_fraction: "getClosestCollisionSafeFraction";
        get_closest_collision_unsafe_fraction: "getClosestCollisionUnsafeFraction";
        add_exception_rid: "addExceptionRid";
        add_exception: "addException";
        remove_exception_rid: "removeExceptionRid";
        remove_exception: "removeException";
        clear_exceptions: "clearExceptions";
        set_collision_mask_value: "setCollisionMaskValue";
        get_collision_mask_value: "getCollisionMaskValue";
        exclude_parent: "excludeParent";
        target_position: "targetPosition";
        max_results: "maxResults";
        collision_mask: "collisionMask";
        collision_result: "collisionResult";
        collide_with_areas: "collideWithAreas";
        collide_with_bodies: "collideWithBodies";
    }
    /** A 2D shape that sweeps a region of space to detect [CollisionObject2D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shapecast2d.html  
     */
    class ShapeCast2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        isColliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        getCollisionCount(): int64
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** Setting [member enabled] to `true` is not required for this to work.  
         */
        forceShapecastUpdate(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getCollider(index: int64): null | GObject
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        getColliderRid(index: int64): Rid
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getColliderShape(index: int64): int64
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** This point is in the **global** coordinate system.  
         */
        getCollisionPoint(index: int64): Vector2
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        getCollisionNormal(index: int64): Vector2
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape can move without triggering a collision, as a value between `0.0` and `1.0`. */
        getClosestCollisionSafeFraction(): float64
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape must move to trigger a collision, as a value between `0.0` and `1.0`.  
         *  In ideal conditions this would be the same as [method get_closest_collision_safe_fraction], however shape casting is calculated in discrete steps, so the precise point of collision can occur between two calculated positions.  
         */
        getClosestCollisionUnsafeFraction(): float64
        
        /** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the shape does not report collisions with the specified node. */
        addException(node: CollisionObject2D): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the shape does report collisions with the specified node. */
        removeException(node: CollisionObject2D): void
        
        /** Removes all collision exceptions for this shape. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The shape to be used for collision queries. */
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The shape's destination point, relative to this node's [member Node2D.position]. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        get maxResults(): int64
        set maxResults(value: int64)
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState2D.get_rest_info] method. */
        get collisionResult(): GArray
        set collisionResult(value: GArray)
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShapeCast2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShapeCast2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShapeCast3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShapeCast3D extends __NameMapNode3D {
        resource_changed: "resourceChanged";
        is_colliding: "isColliding";
        get_collision_count: "getCollisionCount";
        force_shapecast_update: "forceShapecastUpdate";
        get_collider: "getCollider";
        get_collider_rid: "getColliderRid";
        get_collider_shape: "getColliderShape";
        get_collision_point: "getCollisionPoint";
        get_collision_normal: "getCollisionNormal";
        get_closest_collision_safe_fraction: "getClosestCollisionSafeFraction";
        get_closest_collision_unsafe_fraction: "getClosestCollisionUnsafeFraction";
        add_exception_rid: "addExceptionRid";
        add_exception: "addException";
        remove_exception_rid: "removeExceptionRid";
        remove_exception: "removeException";
        clear_exceptions: "clearExceptions";
        set_collision_mask_value: "setCollisionMaskValue";
        get_collision_mask_value: "getCollisionMaskValue";
        exclude_parent: "excludeParent";
        target_position: "targetPosition";
        max_results: "maxResults";
        collision_mask: "collisionMask";
        collision_result: "collisionResult";
        collide_with_areas: "collideWithAreas";
        collide_with_bodies: "collideWithBodies";
        debug_shape_custom_color: "debugShapeCustomColor";
    }
    /** A 3D shape that sweeps a region of space to detect [CollisionObject3D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shapecast3d.html  
     */
    class ShapeCast3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** This method does nothing. */
        resourceChanged(resource: Resource): void
        
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        isColliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        getCollisionCount(): int64
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** Setting [member enabled] to `true` is not required for this to work.  
         */
        forceShapecastUpdate(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getCollider(index: int64): null | GObject
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        getColliderRid(index: int64): Rid
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getColliderShape(index: int64): int64
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** This point is in the **global** coordinate system.  
         */
        getCollisionPoint(index: int64): Vector3
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        getCollisionNormal(index: int64): Vector3
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape can move without triggering a collision, as a value between `0.0` and `1.0`. */
        getClosestCollisionSafeFraction(): float64
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape must move to trigger a collision, as a value between `0.0` and `1.0`.  
         *  In ideal conditions this would be the same as [method get_closest_collision_safe_fraction], however shape casting is calculated in discrete steps, so the precise point of collision can occur between two calculated positions.  
         */
        getClosestCollisionUnsafeFraction(): float64
        
        /** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the shape does not report collisions with the specified node. */
        addException(node: CollisionObject3D): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the shape does report collisions with the specified node. */
        removeException(node: CollisionObject3D): void
        
        /** Removes all collision exceptions for this shape. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The shape to be used for collision queries. */
        get shape(): null | Shape3D
        set shape(value: null | Shape3D)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The shape's destination point, relative to this node's [member Node3D.position]. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        get maxResults(): int64
        set maxResults(value: int64)
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState3D.get_rest_info] method. */
        get collisionResult(): GArray
        set collisionResult(value: GArray)
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [ShapeCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        get debugShapeCustomColor(): Color
        set debugShapeCustomColor(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShapeCast3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShapeCast3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapShortcut extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapShortcut extends __NameMapResource {
        has_valid_event: "hasValidEvent";
        matches_event: "matchesEvent";
        get_as_text: "getAsText";
    }
    /** A shortcut for binding input.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_shortcut.html  
     */
    class Shortcut extends Resource {
        constructor(identifier?: any)
        /** Returns whether [member events] contains an [InputEvent] which is valid. */
        hasValidEvent(): boolean
        
        /** Returns whether any [InputEvent] in [member events] equals [param event]. This uses [method InputEvent.is_match] to compare events. */
        matchesEvent(event: InputEvent): boolean
        
        /** Returns the shortcut's first valid [InputEvent] as a [String]. */
        getAsText(): string
        
        /** The shortcut's [InputEvent] array.  
         *  Generally the [InputEvent] used is an [InputEventKey], though it can be any [InputEvent], including an [InputEventAction].  
         */
        get events(): GArray<InputEvent>
        set events(value: GArray<InputEvent>)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapShortcut;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapShortcut;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeleton2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeleton2D extends __NameMapNode2D {
        get_bone_count: "getBoneCount";
        get_bone: "getBone";
        get_skeleton: "getSkeleton";
        set_modification_stack: "setModificationStack";
        get_modification_stack: "getModificationStack";
        execute_modifications: "executeModifications";
        set_bone_local_pose_override: "setBoneLocalPoseOverride";
        get_bone_local_pose_override: "getBoneLocalPoseOverride";
        bone_setup_changed: "boneSetupChanged";
    }
    /** The parent of a hierarchy of [Bone2D]s, used to create a 2D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeleton2d.html  
     */
    class Skeleton2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the number of [Bone2D] nodes in the node hierarchy parented by Skeleton2D. */
        getBoneCount(): int64
        
        /** Returns a [Bone2D] from the node hierarchy parented by Skeleton2D. The object to return is identified by the parameter [param idx]. Bones are indexed by descending the node hierarchy from top to bottom, adding the children of each branch before moving to the next sibling. */
        getBone(idx: int64): null | Bone2D
        
        /** Returns the [RID] of a Skeleton2D instance. */
        getSkeleton(): Rid
        
        /** Sets the [SkeletonModificationStack2D] attached to this skeleton. */
        setModificationStack(modificationStack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] attached to this skeleton, if one exists. */
        getModificationStack(): null | SkeletonModificationStack2D
        
        /** Executes all the modifications on the [SkeletonModificationStack2D], if the Skeleton2D has one assigned. */
        executeModifications(delta: float64, executionMode: int64): void
        
        /** Sets the local pose transform, [param override_pose], for the bone at [param bone_idx].  
         *  [param strength] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a local transform relative to the [Bone2D] node at [param bone_idx]!  
         */
        setBoneLocalPoseOverride(boneIdx: int64, overridePose: Transform2D, strength: float64, persistent: boolean): void
        
        /** Returns the local pose override transform for [param bone_idx]. */
        getBoneLocalPoseOverride(boneIdx: int64): Transform2D
        
        /** Emitted when the [Bone2D] setup attached to this skeletons changes. This is primarily used internally within the skeleton. */
        readonly boneSetupChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeleton2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeleton2D;
    }
    namespace Skeleton3D {
        enum ModifierCallbackModeProcess {
            ModifierCallbackModeProcessPhysics = 0,
            ModifierCallbackModeProcessIdle = 1,
            ModifierCallbackModeProcessManual = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeleton3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeleton3D extends __NameMapNode3D {
        add_bone: "addBone";
        find_bone: "findBone";
        get_bone_name: "getBoneName";
        set_bone_name: "setBoneName";
        get_bone_meta: "getBoneMeta";
        get_bone_meta_list: "getBoneMetaList";
        has_bone_meta: "hasBoneMeta";
        set_bone_meta: "setBoneMeta";
        get_concatenated_bone_names: "getConcatenatedBoneNames";
        get_bone_parent: "getBoneParent";
        set_bone_parent: "setBoneParent";
        get_bone_count: "getBoneCount";
        get_version: "getVersion";
        unparent_bone_and_rest: "unparentBoneAndRest";
        get_bone_children: "getBoneChildren";
        get_parentless_bones: "getParentlessBones";
        get_bone_rest: "getBoneRest";
        set_bone_rest: "setBoneRest";
        get_bone_global_rest: "getBoneGlobalRest";
        create_skin_from_rest_transforms: "createSkinFromRestTransforms";
        register_skin: "registerSkin";
        localize_rests: "localizeRests";
        clear_bones: "clearBones";
        get_bone_pose: "getBonePose";
        set_bone_pose: "setBonePose";
        set_bone_pose_position: "setBonePosePosition";
        set_bone_pose_rotation: "setBonePoseRotation";
        set_bone_pose_scale: "setBonePoseScale";
        get_bone_pose_position: "getBonePosePosition";
        get_bone_pose_rotation: "getBonePoseRotation";
        get_bone_pose_scale: "getBonePoseScale";
        reset_bone_pose: "resetBonePose";
        reset_bone_poses: "resetBonePoses";
        is_bone_enabled: "isBoneEnabled";
        set_bone_enabled: "setBoneEnabled";
        get_bone_global_pose: "getBoneGlobalPose";
        set_bone_global_pose: "setBoneGlobalPose";
        force_update_all_bone_transforms: "forceUpdateAllBoneTransforms";
        force_update_bone_child_transform: "forceUpdateBoneChildTransform";
        clear_bones_global_pose_override: "clearBonesGlobalPoseOverride";
        set_bone_global_pose_override: "setBoneGlobalPoseOverride";
        get_bone_global_pose_override: "getBoneGlobalPoseOverride";
        get_bone_global_pose_no_override: "getBoneGlobalPoseNoOverride";
        physical_bones_stop_simulation: "physicalBonesStopSimulation";
        physical_bones_start_simulation: "physicalBonesStartSimulation";
        physical_bones_add_collision_exception: "physicalBonesAddCollisionException";
        physical_bones_remove_collision_exception: "physicalBonesRemoveCollisionException";
        motion_scale: "motionScale";
        show_rest_only: "showRestOnly";
        modifier_callback_mode_process: "modifierCallbackModeProcess";
        animate_physical_bones: "animatePhysicalBones";
        rest_updated: "restUpdated";
        pose_updated: "poseUpdated";
        skeleton_updated: "skeletonUpdated";
        bone_enabled_changed: "boneEnabledChanged";
        bone_list_changed: "boneListChanged";
        show_rest_only_changed: "showRestOnlyChanged";
    }
    /** A node containing a bone hierarchy, used to create a 3D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeleton3d.html  
     */
    class Skeleton3D<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Notification received when this skeleton's pose needs to be updated. In that case, this is called only once per frame in a deferred process. */
        static readonly NOTIFICATION_UPDATE_SKELETON = 50
        constructor(identifier?: any)
        
        /** Adds a new bone with the given name. Returns the new bone's index, or `-1` if this method fails.  
         *      
         *  **Note:** Bone names should be unique, non empty, and cannot include the `:` and `/` characters.  
         */
        addBone(name: string): int64
        
        /** Returns the bone index that matches [param name] as its name. Returns `-1` if no bone with this name exists. */
        findBone(name: string): int64
        
        /** Returns the name of the bone at index [param bone_idx]. */
        getBoneName(boneIdx: int64): string
        
        /** Sets the bone name, [param name], for the bone at [param bone_idx]. */
        setBoneName(boneIdx: int64, name: string): void
        
        /** Returns the metadata for the bone at index [param bone_idx] with [param key]. */
        getBoneMeta(boneIdx: int64, key: StringName): any
        
        /** Returns the list of all metadata keys for the bone at index [param bone_idx]. */
        getBoneMetaList(boneIdx: int64): GArray<StringName>
        
        /** Returns `true` if the bone at index [param bone_idx] has metadata with the key [param key]. */
        hasBoneMeta(boneIdx: int64, key: StringName): boolean
        
        /** Sets the metadata for the bone at index [param bone_idx], setting the [param key] meta to [param value]. */
        setBoneMeta(boneIdx: int64, key: StringName, value: any): void
        
        /** Returns all bone names concatenated with commas (`,`) as a single [StringName].  
         *  It is useful to set it as a hint for the enum property.  
         */
        getConcatenatedBoneNames(): StringName
        
        /** Returns the bone index which is the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** The parent bone returned will always be less than [param bone_idx].  
         */
        getBoneParent(boneIdx: int64): int64
        
        /** Sets the bone index [param parent_idx] as the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** [param parent_idx] must be less than [param bone_idx].  
         */
        setBoneParent(boneIdx: int64, parentIdx: int64): void
        
        /** Returns the number of bones in the skeleton. */
        getBoneCount(): int64
        
        /** Returns the number of times the bone hierarchy has changed within this skeleton, including renames.  
         *  The Skeleton version is not serialized: only use within a single instance of Skeleton3D.  
         *  Use for invalidating caches in IK solvers and other nodes which process bones.  
         */
        getVersion(): int64
        
        /** Unparents the bone at [param bone_idx] and sets its rest position to that of its parent prior to being reset. */
        unparentBoneAndRest(boneIdx: int64): void
        
        /** Returns an array containing the bone indexes of all the child node of the passed in bone, [param bone_idx]. */
        getBoneChildren(boneIdx: int64): PackedInt32Array
        
        /** Returns an array with all of the bones that are parentless. Another way to look at this is that it returns the indexes of all the bones that are not dependent or modified by other bones in the Skeleton. */
        getParentlessBones(): PackedInt32Array
        
        /** Returns the rest transform for a bone [param bone_idx]. */
        getBoneRest(boneIdx: int64): Transform3D
        
        /** Sets the rest transform for bone [param bone_idx]. */
        setBoneRest(boneIdx: int64, rest: Transform3D): void
        
        /** Returns the global rest transform for [param bone_idx]. */
        getBoneGlobalRest(boneIdx: int64): Transform3D
        createSkinFromRestTransforms(): Skin
        
        /** Binds the given Skin to the Skeleton. */
        registerSkin(skin: Skin): null | SkinReference
        
        /** Returns all bones in the skeleton to their rest poses. */
        localizeRests(): void
        
        /** Clear all the bones in this skeleton. */
        clearBones(): void
        
        /** Returns the pose transform of the specified bone.  
         *      
         *  **Note:** This is the pose you set to the skeleton in the process, the final pose can get overridden by modifiers in the deferred process, if you want to access the final pose, use [signal SkeletonModifier3D.modification_processed].  
         */
        getBonePose(boneIdx: int64): Transform3D
        
        /** Sets the pose transform, [param pose], for the bone at [param bone_idx]. */
        setBonePose(boneIdx: int64, pose: Transform3D): void
        
        /** Sets the pose position of the bone at [param bone_idx] to [param position]. [param position] is a [Vector3] describing a position local to the [Skeleton3D] node. */
        setBonePosePosition(boneIdx: int64, position: Vector3): void
        
        /** Sets the pose rotation of the bone at [param bone_idx] to [param rotation]. [param rotation] is a [Quaternion] describing a rotation in the bone's local coordinate space with respect to the rotation of any parent bones. */
        setBonePoseRotation(boneIdx: int64, rotation: Quaternion): void
        
        /** Sets the pose scale of the bone at [param bone_idx] to [param scale]. */
        setBonePoseScale(boneIdx: int64, scale: Vector3): void
        
        /** Returns the pose position of the bone at [param bone_idx]. The returned [Vector3] is in the local coordinate space of the [Skeleton3D] node. */
        getBonePosePosition(boneIdx: int64): Vector3
        
        /** Returns the pose rotation of the bone at [param bone_idx]. The returned [Quaternion] is local to the bone with respect to the rotation of any parent bones. */
        getBonePoseRotation(boneIdx: int64): Quaternion
        
        /** Returns the pose scale of the bone at [param bone_idx]. */
        getBonePoseScale(boneIdx: int64): Vector3
        
        /** Sets the bone pose to rest for [param bone_idx]. */
        resetBonePose(boneIdx: int64): void
        
        /** Sets all bone poses to rests. */
        resetBonePoses(): void
        
        /** Returns whether the bone pose for the bone at [param bone_idx] is enabled. */
        isBoneEnabled(boneIdx: int64): boolean
        
        /** Disables the pose for the bone at [param bone_idx] if `false`, enables the bone pose if `true`. */
        setBoneEnabled(boneIdx: int64, enabled?: boolean /* = true */): void
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton. Being relative to the skeleton frame, this is not the actual "global" transform of the bone.  
         *      
         *  **Note:** This is the global pose you set to the skeleton in the process, the final global pose can get overridden by modifiers in the deferred process, if you want to access the final global pose, use [signal SkeletonModifier3D.modification_processed].  
         */
        getBoneGlobalPose(boneIdx: int64): Transform3D
        
        /** Sets the global pose transform, [param pose], for the bone at [param bone_idx].  
         *      
         *  **Note:** If other bone poses have been changed, this method executes a dirty poses recalculation and will cause performance to deteriorate. If you know that multiple global poses will be applied, consider using [method set_bone_pose] with precalculation.  
         */
        setBoneGlobalPose(boneIdx: int64, pose: Transform3D): void
        
        /** Force updates the bone transforms/poses for all bones in the skeleton. */
        forceUpdateAllBoneTransforms(): void
        
        /** Force updates the bone transform for the bone at [param bone_idx] and all of its children. */
        forceUpdateBoneChildTransform(boneIdx: int64): void
        
        /** Manually advance the child [SkeletonModifier3D]s by the specified time (in seconds).  
         *      
         *  **Note:** The [param delta] is temporarily accumulated in the [Skeleton3D], and the deferred process uses the accumulated value to process the modification.  
         */
        advance(delta: float64): void
        
        /** Removes the global pose override on all bones in the skeleton. */
        clearBonesGlobalPoseOverride(): void
        
        /** Sets the global pose transform, [param pose], for the bone at [param bone_idx].  
         *  [param amount] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a global pose! To convert a world transform from a [Node3D] to a global bone pose, multiply the [method Transform3D.affine_inverse] of the node's [member Node3D.global_transform] by the desired world transform.  
         */
        setBoneGlobalPoseOverride(boneIdx: int64, pose: Transform3D, amount: float64, persistent?: boolean /* = false */): void
        
        /** Returns the global pose override transform for [param bone_idx]. */
        getBoneGlobalPoseOverride(boneIdx: int64): Transform3D
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton, but without any global pose overrides. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
        getBoneGlobalPoseNoOverride(boneIdx: int64): Transform3D
        
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
        
        /** Multiplies the 3D position track animation.  
         *      
         *  **Note:** Unless this value is `1.0`, the key value in animation will not match the actual position value.  
         */
        get motionScale(): float64
        set motionScale(value: float64)
        
        /** If `true`, forces the bones in their default rest pose, regardless of their values. In the editor, this also prevents the bones from being edited. */
        get showRestOnly(): boolean
        set showRestOnly(value: boolean)
        
        /** Sets the processing timing for the Modifier. */
        get modifierCallbackModeProcess(): int64
        set modifierCallbackModeProcess(value: int64)
        
        /** If you follow the recommended workflow and explicitly have [PhysicalBoneSimulator3D] as a child of [Skeleton3D], you can control whether it is affected by raycasting without running [method physical_bones_start_simulation], by its [member SkeletonModifier3D.active].  
         *  However, for old (deprecated) configurations, [Skeleton3D] has an internal virtual [PhysicalBoneSimulator3D] for compatibility. This property controls the internal virtual [PhysicalBoneSimulator3D]'s [member SkeletonModifier3D.active].  
         */
        get animatePhysicalBones(): boolean
        set animatePhysicalBones(value: boolean)
        
        /** Emitted when the rest is updated. */
        readonly restUpdated: Signal<() => void>
        
        /** Emitted when the pose is updated.  
         *      
         *  **Note:** During the update process, this signal is not fired, so modification by [SkeletonModifier3D] is not detected.  
         */
        readonly poseUpdated: Signal<() => void>
        
        /** Emitted when the final pose has been calculated will be applied to the skin in the update process.  
         *  This means that all [SkeletonModifier3D] processing is complete. In order to detect the completion of the processing of each [SkeletonModifier3D], use [signal SkeletonModifier3D.modification_processed].  
         */
        readonly skeletonUpdated: Signal<() => void>
        
        /** Emitted when the bone at [param bone_idx] is toggled with [method set_bone_enabled]. Use [method is_bone_enabled] to check the new value. */
        readonly boneEnabledChanged: Signal<(boneIdx: int64) => void>
        
        /** Emitted when the list of bones changes, such as when calling [method add_bone], [method set_bone_parent], [method unparent_bone_and_rest], or [method clear_bones]. */
        readonly boneListChanged: Signal<() => void>
        
        /** Emitted when the value of [member show_rest_only] changes. */
        readonly showRestOnlyChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeleton3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeleton3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonIK3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonIK3D extends __NameMapSkeletonModifier3D {
        get_parent_skeleton: "getParentSkeleton";
        is_running: "isRunning";
        root_bone: "rootBone";
        tip_bone: "tipBone";
        override_tip_basis: "overrideTipBasis";
        use_magnet: "useMagnet";
        target_node: "targetNode";
        min_distance: "minDistance";
        max_iterations: "maxIterations";
    }
    /** A node used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonik3d.html  
     */
    class SkeletonIK3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** Returns the parent [Skeleton3D] node that was present when SkeletonIK entered the scene tree. Returns `null` if the parent node was not a [Skeleton3D] node when SkeletonIK3D entered the scene tree. */
        getParentSkeleton(): null | Skeleton3D
        
        /** Returns `true` if SkeletonIK is applying IK effects on continues frames to the [Skeleton3D] bones. Returns `false` if SkeletonIK is stopped or [method start] was used with the `one_time` parameter set to `true`. */
        isRunning(): boolean
        
        /** Starts applying IK effects on each frame to the [Skeleton3D] bones but will only take effect starting on the next frame. If [param one_time] is `true`, this will take effect immediately but also reset on the next frame. */
        start(oneTime?: boolean /* = false */): void
        
        /** Stops applying IK effects on each frame to the [Skeleton3D] bones and also calls [method Skeleton3D.clear_bones_global_pose_override] to remove existing overrides on all bones. */
        stop(): void
        
        /** The name of the current root bone, the first bone in the IK chain. */
        get rootBone(): StringName
        set rootBone(value: StringName)
        
        /** The name of the current tip bone, the last bone in the IK chain placed at the [member target] transform (or [member target_node] if defined). */
        get tipBone(): StringName
        set tipBone(value: StringName)
        
        /** First target of the IK chain where the tip bone is placed and, if [member override_tip_basis] is `true`, how the tip bone is rotated. If a [member target_node] path is available the nodes transform is used instead and this property is ignored. */
        get target(): Transform3D
        set target(value: Transform3D)
        
        /** If `true` overwrites the rotation of the tip bone with the rotation of the [member target] (or [member target_node] if defined). */
        get overrideTipBasis(): boolean
        set overrideTipBasis(value: boolean)
        
        /** If `true`, instructs the IK solver to consider the secondary magnet target (pole target) when calculating the bone chain. Use the magnet position (pole target) to control the bending of the IK chain. */
        get useMagnet(): boolean
        set useMagnet(value: boolean)
        
        /** Secondary target position (first is [member target] property or [member target_node]) for the IK chain. Use magnet position (pole target) to control the bending of the IK chain. Only works if the bone chain has more than 2 bones. The middle chain bone position will be linearly interpolated with the magnet position. */
        get magnet(): Vector3
        set magnet(value: Vector3)
        
        /** Target node [NodePath] for the IK chain. If available, the node's current [Transform3D] is used instead of the [member target] property. */
        get targetNode(): NodePath
        set targetNode(value: NodePath | string)
        
        /** The minimum distance between bone and goal target. If the distance is below this value, the IK solver stops further iterations. */
        get minDistance(): float64
        set minDistance(value: float64)
        
        /** Number of iteration loops used by the IK solver to produce more accurate (and elegant) bone chain results. */
        get maxIterations(): int64
        set maxIterations(value: int64)
        
        /** Interpolation value for how much the IK results are applied to the current skeleton bone chain. A value of `1.0` will overwrite all skeleton bone transforms completely while a value of `0.0` will visually disable the SkeletonIK. */
        get interpolation(): float64
        set interpolation(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonIK3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonIK3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2D extends __NameMapResource {
        _setup_modification: "_setupModification";
        _draw_editor_gizmo: "_drawEditorGizmo";
        get_modification_stack: "getModificationStack";
        set_is_setup: "setIsSetup";
        get_is_setup: "getIsSetup";
        clamp_angle: "clampAngle";
        set_editor_draw_gizmo: "setEditorDrawGizmo";
        get_editor_draw_gizmo: "getEditorDrawGizmo";
        execution_mode: "executionMode";
    }
    /** Base class for resources that operate on [Bone2D]s in a [Skeleton2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodification2d.html  
     */
    class SkeletonModification2D extends Resource {
        constructor(identifier?: any)
        /** Executes the given modification. This is where the modification performs whatever function it is designed to do. */
        /* gdvirtual */ _execute(delta: float64): void
        
        /** Called when the modification is setup. This is where the modification performs initialization. */
        /* gdvirtual */ _setupModification(modificationStack: SkeletonModificationStack2D): void
        
        /** Used for drawing **editor-only** modification gizmos. This function will only be called in the Godot editor and can be overridden to draw custom gizmos.  
         *      
         *  **Note:** You will need to use the Skeleton2D from [method SkeletonModificationStack2D.get_skeleton] and it's draw functions, as the [SkeletonModification2D] resource cannot draw on its own.  
         */
        /* gdvirtual */ _drawEditorGizmo(): void
        
        /** Returns the [SkeletonModificationStack2D] that this modification is bound to. Through the modification stack, you can access the Skeleton2D the modification is operating on. */
        getModificationStack(): null | SkeletonModificationStack2D
        
        /** Manually allows you to set the setup state of the modification. This function should only rarely be used, as the [SkeletonModificationStack2D] the modification is bound to should handle setting the modification up. */
        setIsSetup(isSetup: boolean): void
        
        /** Returns whether this modification has been successfully setup or not. */
        getIsSetup(): boolean
        
        /** Takes an angle and clamps it so it is within the passed-in [param min] and [param max] range. [param invert] will inversely clamp the angle, clamping it to the range outside of the given bounds. */
        clampAngle(angle: float64, min: float64, max: float64, invert: boolean): float64
        
        /** Sets whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        setEditorDrawGizmo(drawGizmo: boolean): void
        
        /** Returns whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        getEditorDrawGizmo(): boolean
        
        /** If `true`, the modification's [method _execute] function will be called by the [SkeletonModificationStack2D]. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The execution mode for the modification. This tells the modification stack when to execute the modification. Some modifications have settings that are only available in certain execution modes. */
        get executionMode(): int64
        set executionMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2DCcdik extends __RPCMapSkeletonModification2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2DCcdik extends __NameMapSkeletonModification2D {
        set_ccdik_joint_bone2d_node: "setCcdikJointBone2DNode";
        get_ccdik_joint_bone2d_node: "getCcdikJointBone2DNode";
        set_ccdik_joint_bone_index: "setCcdikJointBoneIndex";
        get_ccdik_joint_bone_index: "getCcdikJointBoneIndex";
        set_ccdik_joint_rotate_from_joint: "setCcdikJointRotateFromJoint";
        get_ccdik_joint_rotate_from_joint: "getCcdikJointRotateFromJoint";
        set_ccdik_joint_enable_constraint: "setCcdikJointEnableConstraint";
        get_ccdik_joint_enable_constraint: "getCcdikJointEnableConstraint";
        set_ccdik_joint_constraint_angle_min: "setCcdikJointConstraintAngleMin";
        get_ccdik_joint_constraint_angle_min: "getCcdikJointConstraintAngleMin";
        set_ccdik_joint_constraint_angle_max: "setCcdikJointConstraintAngleMax";
        get_ccdik_joint_constraint_angle_max: "getCcdikJointConstraintAngleMax";
        set_ccdik_joint_constraint_angle_invert: "setCcdikJointConstraintAngleInvert";
        get_ccdik_joint_constraint_angle_invert: "getCcdikJointConstraintAngleInvert";
        target_nodepath: "targetNodePath";
        tip_nodepath: "tipNodePath";
        ccdik_data_chain_length: "ccdikDataChainLength";
    }
    class SkeletonModification2DCcdik extends SkeletonModification2D {
        constructor(identifier?: any)
        setCcdikJointBone2DNode(jointIdx: int64, bone2DNodePath: NodePath | string): void
        getCcdikJointBone2DNode(jointIdx: int64): NodePath
        setCcdikJointBoneIndex(jointIdx: int64, boneIdx: int64): void
        getCcdikJointBoneIndex(jointIdx: int64): int64
        setCcdikJointRotateFromJoint(jointIdx: int64, rotateFromJoint: boolean): void
        getCcdikJointRotateFromJoint(jointIdx: int64): boolean
        setCcdikJointEnableConstraint(jointIdx: int64, enableConstraint: boolean): void
        getCcdikJointEnableConstraint(jointIdx: int64): boolean
        setCcdikJointConstraintAngleMin(jointIdx: int64, angleMin: float64): void
        getCcdikJointConstraintAngleMin(jointIdx: int64): float64
        setCcdikJointConstraintAngleMax(jointIdx: int64, angleMax: float64): void
        getCcdikJointConstraintAngleMax(jointIdx: int64): float64
        setCcdikJointConstraintAngleInvert(jointIdx: int64, invert: boolean): void
        getCcdikJointConstraintAngleInvert(jointIdx: int64): boolean
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        get tipNodePath(): NodePath
        set tipNodePath(value: NodePath | string)
        get ccdikDataChainLength(): int64
        set ccdikDataChainLength(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2DCcdik;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2DCcdik;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2DFabrik extends __RPCMapSkeletonModification2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2DFabrik extends __NameMapSkeletonModification2D {
        set_fabrik_joint_bone2d_node: "setFabrikJointBone2DNode";
        get_fabrik_joint_bone2d_node: "getFabrikJointBone2DNode";
        set_fabrik_joint_bone_index: "setFabrikJointBoneIndex";
        get_fabrik_joint_bone_index: "getFabrikJointBoneIndex";
        set_fabrik_joint_magnet_position: "setFabrikJointMagnetPosition";
        get_fabrik_joint_magnet_position: "getFabrikJointMagnetPosition";
        set_fabrik_joint_use_target_rotation: "setFabrikJointUseTargetRotation";
        get_fabrik_joint_use_target_rotation: "getFabrikJointUseTargetRotation";
        target_nodepath: "targetNodePath";
        fabrik_data_chain_length: "fabrikDataChainLength";
    }
    class SkeletonModification2DFabrik extends SkeletonModification2D {
        constructor(identifier?: any)
        setFabrikJointBone2DNode(jointIdx: int64, bone2DNodePath: NodePath | string): void
        getFabrikJointBone2DNode(jointIdx: int64): NodePath
        setFabrikJointBoneIndex(jointIdx: int64, boneIdx: int64): void
        getFabrikJointBoneIndex(jointIdx: int64): int64
        setFabrikJointMagnetPosition(jointIdx: int64, magnetPosition: Vector2): void
        getFabrikJointMagnetPosition(jointIdx: int64): Vector2
        setFabrikJointUseTargetRotation(jointIdx: int64, useTargetRotation: boolean): void
        getFabrikJointUseTargetRotation(jointIdx: int64): boolean
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        get fabrikDataChainLength(): int64
        set fabrikDataChainLength(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2DFabrik;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2DFabrik;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2DJiggle extends __RPCMapSkeletonModification2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2DJiggle extends __NameMapSkeletonModification2D {
        set_use_colliders: "setUseColliders";
        get_use_colliders: "getUseColliders";
        set_collision_mask: "setCollisionMask";
        get_collision_mask: "getCollisionMask";
        set_jiggle_joint_bone2d_node: "setJiggleJointBone2DNode";
        get_jiggle_joint_bone2d_node: "getJiggleJointBone2DNode";
        set_jiggle_joint_bone_index: "setJiggleJointBoneIndex";
        get_jiggle_joint_bone_index: "getJiggleJointBoneIndex";
        set_jiggle_joint_override: "setJiggleJointOverride";
        get_jiggle_joint_override: "getJiggleJointOverride";
        set_jiggle_joint_stiffness: "setJiggleJointStiffness";
        get_jiggle_joint_stiffness: "getJiggleJointStiffness";
        set_jiggle_joint_mass: "setJiggleJointMass";
        get_jiggle_joint_mass: "getJiggleJointMass";
        set_jiggle_joint_damping: "setJiggleJointDamping";
        get_jiggle_joint_damping: "getJiggleJointDamping";
        set_jiggle_joint_use_gravity: "setJiggleJointUseGravity";
        get_jiggle_joint_use_gravity: "getJiggleJointUseGravity";
        set_jiggle_joint_gravity: "setJiggleJointGravity";
        get_jiggle_joint_gravity: "getJiggleJointGravity";
        target_nodepath: "targetNodePath";
        jiggle_data_chain_length: "jiggleDataChainLength";
        use_gravity: "useGravity";
    }
    /** A modification that jiggles [Bone2D] nodes as they move towards a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodification2djiggle.html  
     */
    class SkeletonModification2DJiggle extends SkeletonModification2D {
        constructor(identifier?: any)
        /** If `true`, the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects. */
        setUseColliders(useColliders: boolean): void
        
        /** Returns whether the jiggle modifier is taking physics colliders into account when solving. */
        getUseColliders(): boolean
        
        /** Sets the collision mask that the Jiggle modifier will use when reacting to colliders, if the Jiggle modifier is set to take colliders into account. */
        setCollisionMask(collisionMask: int64): void
        
        /** Returns the collision mask used by the Jiggle modifier when collisions are enabled. */
        getCollisionMask(): int64
        
        /** Sets the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        setJiggleJointBone2DNode(jointIdx: int64, bone2DNode: NodePath | string): void
        
        /** Returns the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        getJiggleJointBone2DNode(jointIdx: int64): NodePath
        
        /** Sets the bone index, [param bone_idx], of the Jiggle joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the Jiggle joint based on data provided by the linked skeleton. */
        setJiggleJointBoneIndex(jointIdx: int64, boneIdx: int64): void
        
        /** Returns the index of the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        getJiggleJointBoneIndex(jointIdx: int64): int64
        
        /** Sets whether the Jiggle joint at [param joint_idx] should override the default Jiggle joint settings. Setting this to `true` will make the joint use its own settings rather than the default ones attached to the modification. */
        setJiggleJointOverride(jointIdx: int64, override: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is overriding the default Jiggle joint data defined in the modification. */
        getJiggleJointOverride(jointIdx: int64): boolean
        
        /** Sets the of stiffness of the Jiggle joint at [param joint_idx]. */
        setJiggleJointStiffness(jointIdx: int64, stiffness: float64): void
        
        /** Returns the stiffness of the Jiggle joint at [param joint_idx]. */
        getJiggleJointStiffness(jointIdx: int64): float64
        
        /** Sets the of mass of the Jiggle joint at [param joint_idx]. */
        setJiggleJointMass(jointIdx: int64, mass: float64): void
        
        /** Returns the amount of mass of the jiggle joint at [param joint_idx]. */
        getJiggleJointMass(jointIdx: int64): float64
        
        /** Sets the amount of damping of the Jiggle joint at [param joint_idx]. */
        setJiggleJointDamping(jointIdx: int64, damping: float64): void
        
        /** Returns the amount of damping of the Jiggle joint at [param joint_idx]. */
        getJiggleJointDamping(jointIdx: int64): float64
        
        /** Sets whether the Jiggle joint at [param joint_idx] should use gravity. */
        setJiggleJointUseGravity(jointIdx: int64, useGravity: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is using gravity or not. */
        getJiggleJointUseGravity(jointIdx: int64): boolean
        
        /** Sets the gravity vector of the Jiggle joint at [param joint_idx]. */
        setJiggleJointGravity(jointIdx: int64, gravity: Vector2): void
        
        /** Returns a [Vector2] representing the amount of gravity the Jiggle joint at [param joint_idx] is influenced by. */
        getJiggleJointGravity(jointIdx: int64): Vector2
        
        /** The NodePath to the node that is the target for the Jiggle modification. This node is what the Jiggle chain will attempt to rotate the bone chain to. */
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        
        /** The amount of Jiggle joints in the Jiggle modification. */
        get jiggleDataChainLength(): int64
        set jiggleDataChainLength(value: int64)
        
        /** The default amount of stiffness assigned to the Jiggle joints, if they are not overridden. Higher values act more like springs, quickly moving into the correct position. */
        get stiffness(): float64
        set stiffness(value: float64)
        
        /** The default amount of mass assigned to the Jiggle joints, if they are not overridden. Higher values lead to faster movements and more overshooting. */
        get mass(): float64
        set mass(value: float64)
        
        /** The default amount of damping applied to the Jiggle joints, if they are not overridden. Higher values lead to more of the calculated velocity being applied. */
        get damping(): float64
        set damping(value: float64)
        
        /** Whether the gravity vector, [member gravity], should be applied to the Jiggle joints, assuming they are not overriding the default settings. */
        get useGravity(): boolean
        set useGravity(value: boolean)
        
        /** The default amount of gravity applied to the Jiggle joints, if they are not overridden. */
        get gravity(): Vector2
        set gravity(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2DJiggle;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2DJiggle;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2DLookAt extends __RPCMapSkeletonModification2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2DLookAt extends __NameMapSkeletonModification2D {
        set_additional_rotation: "setAdditionalRotation";
        get_additional_rotation: "getAdditionalRotation";
        set_enable_constraint: "setEnableConstraint";
        get_enable_constraint: "getEnableConstraint";
        set_constraint_angle_min: "setConstraintAngleMin";
        get_constraint_angle_min: "getConstraintAngleMin";
        set_constraint_angle_max: "setConstraintAngleMax";
        get_constraint_angle_max: "getConstraintAngleMax";
        set_constraint_angle_invert: "setConstraintAngleInvert";
        get_constraint_angle_invert: "getConstraintAngleInvert";
        bone_index: "boneIndex";
        bone2d_node: "bone2DNode";
        target_nodepath: "targetNodePath";
    }
    /** A modification that rotates a [Bone2D] node to look at a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodification2dlookat.html  
     */
    class SkeletonModification2DLookAt extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the amount of additional rotation that is to be applied after executing the modification. This allows for offsetting the results by the inputted rotation amount. */
        setAdditionalRotation(rotation: float64): void
        
        /** Returns the amount of additional rotation that is applied after the LookAt modification executes. */
        getAdditionalRotation(): float64
        
        /** Sets whether this modification will use constraints or not. When `true`, constraints will be applied when solving the LookAt modification. */
        setEnableConstraint(enableConstraint: boolean): void
        
        /** Returns `true` if the LookAt modification is using constraints. */
        getEnableConstraint(): boolean
        
        /** Sets the constraint's minimum allowed angle. */
        setConstraintAngleMin(angleMin: float64): void
        
        /** Returns the constraint's minimum allowed angle. */
        getConstraintAngleMin(): float64
        
        /** Sets the constraint's maximum allowed angle. */
        setConstraintAngleMax(angleMax: float64): void
        
        /** Returns the constraint's maximum allowed angle. */
        getConstraintAngleMax(): float64
        
        /** When `true`, the modification will use an inverted joint constraint.  
         *  An inverted joint constraint only constraints the [Bone2D] to the angles  *outside of*  the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
         */
        setConstraintAngleInvert(invert: boolean): void
        
        /** Returns whether the constraints to this modification are inverted or not. */
        getConstraintAngleInvert(): boolean
        
        /** The index of the [Bone2D] node that the modification will operate on. */
        get boneIndex(): int64
        set boneIndex(value: int64)
        
        /** The [Bone2D] node that the modification will operate on. */
        get bone2DNode(): NodePath
        set bone2DNode(value: NodePath | string)
        
        /** The NodePath to the node that is the target for the LookAt modification. This node is what the modification will rotate the [Bone2D] to. */
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2DLookAt;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2DLookAt;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2DPhysicalBones extends __RPCMapSkeletonModification2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2DPhysicalBones extends __NameMapSkeletonModification2D {
        set_physical_bone_node: "setPhysicalBoneNode";
        get_physical_bone_node: "getPhysicalBoneNode";
        fetch_physical_bones: "fetchPhysicalBones";
        start_simulation: "startSimulation";
        stop_simulation: "stopSimulation";
        physical_bone_chain_length: "physicalBoneChainLength";
    }
    /** A modification that applies the transforms of [PhysicalBone2D] nodes to [Bone2D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodification2dphysicalbones.html  
     */
    class SkeletonModification2DPhysicalBones extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [PhysicalBone2D] node at [param joint_idx].  
         *      
         *  **Note:** This is just the index used for this modification, not the bone index used in the [Skeleton2D].  
         */
        setPhysicalBoneNode(jointIdx: int64, physicalbone2DNode: NodePath | string): void
        
        /** Returns the [PhysicalBone2D] node at [param joint_idx]. */
        getPhysicalBoneNode(jointIdx: int64): NodePath
        
        /** Empties the list of [PhysicalBone2D] nodes and populates it with all [PhysicalBone2D] nodes that are children of the [Skeleton2D]. */
        fetchPhysicalBones(): void
        
        /** Tell the [PhysicalBone2D] nodes to start simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to start simulating.  
         */
        startSimulation(bones?: GArray<StringName>): void
        
        /** Tell the [PhysicalBone2D] nodes to stop simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to stop simulating.  
         */
        stopSimulation(bones?: GArray<StringName>): void
        
        /** The number of [PhysicalBone2D] nodes linked in this modification. */
        get physicalBoneChainLength(): int64
        set physicalBoneChainLength(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2DPhysicalBones;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2DPhysicalBones;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2DStackHolder extends __RPCMapSkeletonModification2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2DStackHolder extends __NameMapSkeletonModification2D {
        set_held_modification_stack: "setHeldModificationStack";
        get_held_modification_stack: "getHeldModificationStack";
    }
    /** A modification that holds and executes a [SkeletonModificationStack2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodification2dstackholder.html  
     */
    class SkeletonModification2DStackHolder extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [SkeletonModificationStack2D] that this modification is holding. This modification stack will then be executed when this modification is executed. */
        setHeldModificationStack(heldModificationStack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] that this modification is holding. */
        getHeldModificationStack(): null | SkeletonModificationStack2D
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2DStackHolder;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2DStackHolder;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModification2DTwoBoneIK extends __RPCMapSkeletonModification2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModification2DTwoBoneIK extends __NameMapSkeletonModification2D {
        set_joint_one_bone2d_node: "setJointOneBone2DNode";
        get_joint_one_bone2d_node: "getJointOneBone2DNode";
        set_joint_one_bone_idx: "setJointOneBoneIdx";
        get_joint_one_bone_idx: "getJointOneBoneIdx";
        set_joint_two_bone2d_node: "setJointTwoBone2DNode";
        get_joint_two_bone2d_node: "getJointTwoBone2DNode";
        set_joint_two_bone_idx: "setJointTwoBoneIdx";
        get_joint_two_bone_idx: "getJointTwoBoneIdx";
        target_nodepath: "targetNodePath";
        target_minimum_distance: "targetMinimumDistance";
        target_maximum_distance: "targetMaximumDistance";
        flip_bend_direction: "flipBendDirection";
    }
    /** A modification that rotates two bones using the law of cosines to reach the target.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodification2dtwoboneik.html  
     */
    class SkeletonModification2DTwoBoneIK extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        setJointOneBone2DNode(bone2DNode: NodePath | string): void
        
        /** Returns the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        getJointOneBone2DNode(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        setJointOneBoneIdx(boneIdx: int64): void
        
        /** Returns the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        getJointOneBoneIdx(): int64
        
        /** Sets the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        setJointTwoBone2DNode(bone2DNode: NodePath | string): void
        
        /** Returns the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        getJointTwoBone2DNode(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        setJointTwoBoneIdx(boneIdx: int64): void
        
        /** Returns the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        getJointTwoBoneIdx(): int64
        
        /** The NodePath to the node that is the target for the TwoBoneIK modification. This node is what the modification will use when bending the [Bone2D] nodes. */
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        
        /** The minimum distance the target can be at. If the target is closer than this distance, the modification will solve as if it's at this minimum distance. When set to `0`, the modification will solve without distance constraints. */
        get targetMinimumDistance(): float64
        set targetMinimumDistance(value: float64)
        
        /** The maximum distance the target can be at. If the target is farther than this distance, the modification will solve as if it's at this maximum distance. When set to `0`, the modification will solve without distance constraints. */
        get targetMaximumDistance(): float64
        set targetMaximumDistance(value: float64)
        
        /** If `true`, the bones in the modification will bend outward as opposed to inwards when contracting. If `false`, the bones will bend inwards when contracting. */
        get flipBendDirection(): boolean
        set flipBendDirection(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModification2DTwoBoneIK;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModification2DTwoBoneIK;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModificationStack2D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModificationStack2D extends __NameMapResource {
        enable_all_modifications: "enableAllModifications";
        get_modification: "getModification";
        add_modification: "addModification";
        delete_modification: "deleteModification";
        set_modification: "setModification";
        get_is_setup: "getIsSetup";
        get_skeleton: "getSkeleton";
        modification_count: "modificationCount";
    }
    /** A resource that holds a stack of [SkeletonModification2D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodificationstack2d.html  
     */
    class SkeletonModificationStack2D extends Resource {
        constructor(identifier?: any)
        /** Sets up the modification stack so it can execute. This function should be called by [Skeleton2D] and shouldn't be manually called unless you know what you are doing. */
        setup(): void
        
        /** Executes all of the [SkeletonModification2D]s in the stack that use the same execution mode as the passed-in [param execution_mode], starting from index `0` to [member modification_count].  
         *      
         *  **Note:** The order of the modifications can matter depending on the modifications. For example, modifications on a spine should operate before modifications on the arms in order to get proper results.  
         */
        execute(delta: float64, executionMode: int64): void
        
        /** Enables all [SkeletonModification2D]s in the stack. */
        enableAllModifications(enabled: boolean): void
        
        /** Returns the [SkeletonModification2D] at the passed-in index, [param mod_idx]. */
        getModification(modIdx: int64): null | SkeletonModification2D
        
        /** Adds the passed-in [SkeletonModification2D] to the stack. */
        addModification(modification: SkeletonModification2D): void
        
        /** Deletes the [SkeletonModification2D] at the index position [param mod_idx], if it exists. */
        deleteModification(modIdx: int64): void
        
        /** Sets the modification at [param mod_idx] to the passed-in modification, [param modification]. */
        setModification(modIdx: int64, modification: SkeletonModification2D): void
        
        /** Returns a boolean that indicates whether the modification stack is setup and can execute. */
        getIsSetup(): boolean
        
        /** Returns the [Skeleton2D] node that the SkeletonModificationStack2D is bound to. */
        getSkeleton(): null | Skeleton2D
        
        /** If `true`, the modification's in the stack will be called. This is handled automatically through the [Skeleton2D] node. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The interpolation strength of the modifications in stack. A value of `0` will make it where the modifications are not applied, a strength of `0.5` will be half applied, and a strength of `1` will allow the modifications to be fully applied and override the [Skeleton2D] [Bone2D] poses. */
        get strength(): float64
        set strength(value: float64)
        
        /** The number of modifications in the stack. */
        get modificationCount(): int64
        set modificationCount(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModificationStack2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModificationStack2D;
    }
    namespace SkeletonModifier3D {
        enum BoneAxis {
            BoneAxisPlusX = 0,
            BoneAxisMinusX = 1,
            BoneAxisPlusY = 2,
            BoneAxisMinusY = 3,
            BoneAxisPlusZ = 4,
            BoneAxisMinusZ = 5,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonModifier3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonModifier3D extends __NameMapNode3D {
        _process_modification_with_delta: "_processModificationWithDelta";
        _process_modification: "_processModification";
        _skeleton_changed: "_skeletonChanged";
        _validate_bone_names: "_validateBoneNames";
        get_skeleton: "getSkeleton";
        modification_processed: "modificationProcessed";
    }
    /** A node that may modify a Skeleton3D's bones.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonmodifier3d.html  
     */
    class SkeletonModifier3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Override this virtual method to implement a custom skeleton modifier. You should do things like get the [Skeleton3D]'s current pose and apply the pose here.  
         *  [method _process_modification_with_delta] must not apply [member influence] to bone poses because the [Skeleton3D] automatically applies influence to all bone poses set by the modifier.  
         *  [param delta] is passed from parent [Skeleton3D]. See also [method Skeleton3D.advance].  
         */
        /* gdvirtual */ _processModificationWithDelta(delta: float64): void
        
        /** Override this virtual method to implement a custom skeleton modifier. You should do things like get the [Skeleton3D]'s current pose and apply the pose here.  
         *  [method _process_modification] must not apply [member influence] to bone poses because the [Skeleton3D] automatically applies influence to all bone poses set by the modifier.  
         */
        /* gdvirtual */ _processModification(): void
        
        /** Called when the skeleton is changed. */
        /* gdvirtual */ _skeletonChanged(oldSkeleton: Skeleton3D, newSkeleton: Skeleton3D): void
        
        /** Called when bone name and index need to be validated such as the timing of the entering tree or changing skeleton. */
        /* gdvirtual */ _validateBoneNames(): void
        
        /** Get parent [Skeleton3D] node if found. */
        getSkeleton(): null | Skeleton3D
        
        /** If `true`, the [SkeletonModifier3D] will be processing. */
        get active(): boolean
        set active(value: boolean)
        
        /** Sets the influence of the modification.  
         *      
         *  **Note:** This value is used by [Skeleton3D] to blend, so the [SkeletonModifier3D] should always apply only 100% of the result without interpolation.  
         */
        get influence(): float64
        set influence(value: float64)
        
        /** Notifies when the modification have been finished.  
         *      
         *  **Note:** If you want to get the modified bone pose by the modifier, you must use [method Skeleton3D.get_bone_pose] or [method Skeleton3D.get_bone_global_pose] at the moment this signal is fired.  
         */
        readonly modificationProcessed: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonModifier3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonModifier3D;
    }
    namespace SkeletonProfile {
        enum TailDirection {
            TailDirectionAverageChildren = 0,
            TailDirectionSpecificChild = 1,
            TailDirectionEnd = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonProfile extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonProfile extends __NameMapResource {
        get_group_name: "getGroupName";
        set_group_name: "setGroupName";
        get_texture: "getTexture";
        set_texture: "setTexture";
        find_bone: "findBone";
        get_bone_name: "getBoneName";
        set_bone_name: "setBoneName";
        get_bone_parent: "getBoneParent";
        set_bone_parent: "setBoneParent";
        get_tail_direction: "getTailDirection";
        set_tail_direction: "setTailDirection";
        get_bone_tail: "getBoneTail";
        set_bone_tail: "setBoneTail";
        get_reference_pose: "getReferencePose";
        set_reference_pose: "setReferencePose";
        get_handle_offset: "getHandleOffset";
        set_handle_offset: "setHandleOffset";
        get_group: "getGroup";
        set_group: "setGroup";
        is_required: "isRequired";
        set_required: "setRequired";
        root_bone: "rootBone";
        scale_base_bone: "scaleBaseBone";
        group_size: "groupSize";
        bone_size: "boneSize";
        profile_updated: "profileUpdated";
    }
    /** Base class for a profile of a virtual skeleton used as a target for retargeting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonprofile.html  
     */
    class SkeletonProfile extends Resource {
        constructor(identifier?: any)
        /** Returns the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
        getGroupName(groupIdx: int64): StringName
        
        /** Sets the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
        setGroupName(groupIdx: int64, groupName: StringName): void
        
        /** Returns the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
        getTexture(groupIdx: int64): null | Texture2D
        
        /** Sets the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
        setTexture(groupIdx: int64, texture: Texture2D): void
        
        /** Returns the bone index that matches [param bone_name] as its name. */
        findBone(boneName: StringName): int64
        
        /** Returns the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].  
         *  In the retargeting process, the returned bone name is the bone name of the target skeleton.  
         */
        getBoneName(boneIdx: int64): StringName
        
        /** Sets the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].  
         *  In the retargeting process, the setting bone name is the bone name of the target skeleton.  
         */
        setBoneName(boneIdx: int64, boneName: StringName): void
        
        /** Returns the name of the bone which is the parent to the bone at [param bone_idx]. The result is empty if the bone has no parent. */
        getBoneParent(boneIdx: int64): StringName
        
        /** Sets the bone with name [param bone_parent] as the parent of the bone at [param bone_idx]. If an empty string is passed, then the bone has no parent. */
        setBoneParent(boneIdx: int64, boneParent: StringName): void
        
        /** Returns the tail direction of the bone at [param bone_idx]. */
        getTailDirection(boneIdx: int64): SkeletonProfile.TailDirection
        
        /** Sets the tail direction of the bone at [param bone_idx].  
         *      
         *  **Note:** This only specifies the method of calculation. The actual coordinates required should be stored in an external skeleton, so the calculation itself needs to be done externally.  
         */
        setTailDirection(boneIdx: int64, tailDirection: SkeletonProfile.TailDirection): void
        
        /** Returns the name of the bone which is the tail of the bone at [param bone_idx]. */
        getBoneTail(boneIdx: int64): StringName
        
        /** Sets the bone with name [param bone_tail] as the tail of the bone at [param bone_idx]. */
        setBoneTail(boneIdx: int64, boneTail: StringName): void
        
        /** Returns the reference pose transform for bone [param bone_idx]. */
        getReferencePose(boneIdx: int64): Transform3D
        
        /** Sets the reference pose transform for bone [param bone_idx]. */
        setReferencePose(boneIdx: int64, boneName: Transform3D): void
        
        /** Returns the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.  
         *  This is the offset with origin at the top left corner of the square.  
         */
        getHandleOffset(boneIdx: int64): Vector2
        
        /** Sets the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.  
         *  This is the offset with origin at the top left corner of the square.  
         */
        setHandleOffset(boneIdx: int64, handleOffset: Vector2): void
        
        /** Returns the group of the bone at [param bone_idx]. */
        getGroup(boneIdx: int64): StringName
        
        /** Sets the group of the bone at [param bone_idx]. */
        setGroup(boneIdx: int64, group: StringName): void
        
        /** Returns whether the bone at [param bone_idx] is required for retargeting.  
         *  This value is used by the bone map editor. If this method returns `true`, and no bone is assigned, the handle color will be red on the bone map editor.  
         */
        isRequired(boneIdx: int64): boolean
        
        /** Sets the required status for bone [param bone_idx] to [param required]. */
        setRequired(boneIdx: int64, required: boolean): void
        
        /** A bone name that will be used as the root bone in [AnimationTree]. This should be the bone of the parent of hips that exists at the world origin. */
        get rootBone(): StringName
        set rootBone(value: StringName)
        
        /** A bone name which will use model's height as the coefficient for normalization. For example, [SkeletonProfileHumanoid] defines it as `Hips`. */
        get scaleBaseBone(): StringName
        set scaleBaseBone(value: StringName)
        
        /** The amount of groups of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 4 groups.  
         *  This property exists to separate the bone list into several sections in the editor.  
         */
        get groupSize(): int64
        set groupSize(value: int64)
        
        /** The amount of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 56 bones.  
         *  The size of elements in [BoneMap] updates when changing this property in it's assigned [SkeletonProfile].  
         */
        get boneSize(): int64
        set boneSize(value: int64)
        
        /** This signal is emitted when change the value in profile. This is used to update key name in the [BoneMap] and to redraw the [BoneMap] editor.  
         *      
         *  **Note:** This signal is not connected directly to editor to simplify the reference, instead it is passed on to editor through the [BoneMap].  
         */
        readonly profileUpdated: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonProfile;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonProfile;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkeletonProfileHumanoid extends __RPCMapSkeletonProfile {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkeletonProfileHumanoid extends __NameMapSkeletonProfile {
    }
    /** A humanoid [SkeletonProfile] preset.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skeletonprofilehumanoid.html  
     */
    class SkeletonProfileHumanoid extends SkeletonProfile {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkeletonProfileHumanoid;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkeletonProfileHumanoid;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkin extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkin extends __NameMapResource {
        set_bind_count: "setBindCount";
        get_bind_count: "getBindCount";
        add_bind: "addBind";
        add_named_bind: "addNamedBind";
        set_bind_pose: "setBindPose";
        get_bind_pose: "getBindPose";
        set_bind_name: "setBindName";
        get_bind_name: "getBindName";
        set_bind_bone: "setBindBone";
        get_bind_bone: "getBindBone";
        clear_binds: "clearBinds";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_skin.html */
    class Skin extends Resource {
        constructor(identifier?: any)
        setBindCount(bindCount: int64): void
        getBindCount(): int64
        addBind(bone: int64, pose: Transform3D): void
        addNamedBind(name: string, pose: Transform3D): void
        setBindPose(bindIndex: int64, pose: Transform3D): void
        getBindPose(bindIndex: int64): Transform3D
        setBindName(bindIndex: int64, name: StringName): void
        getBindName(bindIndex: int64): StringName
        setBindBone(bindIndex: int64, bone: int64): void
        getBindBone(bindIndex: int64): int64
        clearBinds(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkin;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkin;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSkinReference extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSkinReference extends __NameMapRefCounted {
        get_skeleton: "getSkeleton";
        get_skin: "getSkin";
    }
    /** A reference-counted holder object for a skeleton RID used in the [RenderingServer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_skinreference.html  
     */
    class SkinReference extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [RID] owned by this SkinReference, as returned by [method RenderingServer.skeleton_create]. */
        getSkeleton(): Rid
        
        /** Returns the [Skin] connected to this SkinReference. In the case of [MeshInstance3D] with no [member MeshInstance3D.skin] assigned, this will reference an internal default [Skin] owned by that [MeshInstance3D].  
         *  Note that a single [Skin] may have more than one [SkinReference] in the case that it is shared by meshes across multiple [Skeleton3D] nodes.  
         */
        getSkin(): null | Skin
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSkinReference;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSkinReference;
    }
    namespace Sky {
        enum RadianceSize {
            RadianceSize32 = 0,
            RadianceSize64 = 1,
            RadianceSize128 = 2,
            RadianceSize256 = 3,
            RadianceSize512 = 4,
            RadianceSize1024 = 5,
            RadianceSize2048 = 6,
            RadianceSizeMax = 7,
        }
        enum ProcessMode {
            ProcessModeAutomatic = 0,
            ProcessModeQuality = 1,
            ProcessModeIncremental = 2,
            ProcessModeRealtime = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSky extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSky extends __NameMapResource {
        sky_material: "skyMaterial";
        process_mode: "processMode";
        radiance_size: "radianceSize";
    }
    /** Defines a 3D environment's background by using a [Material].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_sky.html  
     */
    class Sky extends Resource {
        constructor(identifier?: any)
        /** [Material] used to draw the background. Can be [PanoramaSkyMaterial], [ProceduralSkyMaterial], [PhysicalSkyMaterial], or even a [ShaderMaterial] if you want to use your own custom shader. */
        get skyMaterial(): null | PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial | ShaderMaterial
        set skyMaterial(value: null | PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial | ShaderMaterial)
        
        /** The method for generating the radiance map from the sky. The radiance map is a cubemap with increasingly blurry versions of the sky corresponding to different levels of roughness. Radiance maps can be expensive to calculate. */
        get processMode(): int64
        set processMode(value: int64)
        
        /** The [Sky]'s radiance map size. The higher the radiance map size, the more detailed the lighting from the [Sky] will be.  
         *      
         *  **Note:** Some hardware will have trouble with higher radiance sizes, especially [constant RADIANCE_SIZE_512] and above. Only use such high values on high-end hardware.  
         */
        get radianceSize(): int64
        set radianceSize(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSky;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSky;
    }
    namespace Slider {
        enum TickPosition {
            TickPositionBottomRight = 0,
            TickPositionTopLeft = 1,
            TickPositionBoth = 2,
            TickPositionCenter = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSlider extends __RPCMapRange {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSlider extends __NameMapRange {
        tick_count: "tickCount";
        ticks_on_borders: "ticksOnBorders";
        ticks_position: "ticksPosition";
        drag_started: "dragStarted";
        drag_ended: "dragEnded";
    }
    /** Abstract base class for sliders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_slider.html  
     */
    class Slider<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** If `true`, the slider can be interacted with. If `false`, the value can be changed only by code. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, the value can be changed using the mouse wheel. */
        get scrollable(): boolean
        set scrollable(value: boolean)
        
        /** Number of ticks displayed on the slider, including border ticks. Ticks are uniformly-distributed value markers. */
        get tickCount(): int64
        set tickCount(value: int64)
        
        /** If `true`, the slider will display ticks for minimum and maximum values. */
        get ticksOnBorders(): boolean
        set ticksOnBorders(value: boolean)
        
        /** Sets the position of the ticks. See [enum TickPosition] for details. */
        get ticksPosition(): int64
        set ticksPosition(value: int64)
        
        /** Emitted when the grabber starts being dragged. This is emitted before the corresponding [signal Range.value_changed] signal. */
        readonly dragStarted: Signal<() => void>
        
        /** Emitted when the grabber stops being dragged. If [param value_changed] is `true`, [member Range.value] is different from the value when the dragging was started. */
        readonly dragEnded: Signal<(valueChanged: boolean) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSlider;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSlider;
    }
    namespace SliderJoint3D {
        enum Param {
            ParamLinearLimitUpper = 0,
            ParamLinearLimitLower = 1,
            ParamLinearLimitSoftness = 2,
            ParamLinearLimitRestitution = 3,
            ParamLinearLimitDamping = 4,
            ParamLinearMotionSoftness = 5,
            ParamLinearMotionRestitution = 6,
            ParamLinearMotionDamping = 7,
            ParamLinearOrthogonalSoftness = 8,
            ParamLinearOrthogonalRestitution = 9,
            ParamLinearOrthogonalDamping = 10,
            ParamAngularLimitUpper = 11,
            ParamAngularLimitLower = 12,
            ParamAngularLimitSoftness = 13,
            ParamAngularLimitRestitution = 14,
            ParamAngularLimitDamping = 15,
            ParamAngularMotionSoftness = 16,
            ParamAngularMotionRestitution = 17,
            ParamAngularMotionDamping = 18,
            ParamAngularOrthogonalSoftness = 19,
            ParamAngularOrthogonalRestitution = 20,
            ParamAngularOrthogonalDamping = 21,
            ParamMax = 22,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSliderJoint3D extends __RPCMapJoint3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSliderJoint3D extends __NameMapJoint3D {
        set_param: "setParam";
        get_param: "getParam";
        "linear_limit/upper_distance": "linearLimit/upperDistance";
        "linear_limit/lower_distance": "linearLimit/lowerDistance";
        "linear_limit/softness": "linearLimit/softness";
        "linear_limit/restitution": "linearLimit/restitution";
        "linear_limit/damping": "linearLimit/damping";
        "linear_motion/softness": "linearMotion/softness";
        "linear_motion/restitution": "linearMotion/restitution";
        "linear_motion/damping": "linearMotion/damping";
        "linear_ortho/softness": "linearOrtho/softness";
        "linear_ortho/restitution": "linearOrtho/restitution";
        "linear_ortho/damping": "linearOrtho/damping";
        "angular_limit/upper_angle": "angularLimit/upperAngle";
        "angular_limit/lower_angle": "angularLimit/lowerAngle";
        "angular_limit/softness": "angularLimit/softness";
        "angular_limit/restitution": "angularLimit/restitution";
        "angular_limit/damping": "angularLimit/damping";
        "angular_motion/softness": "angularMotion/softness";
        "angular_motion/restitution": "angularMotion/restitution";
        "angular_motion/damping": "angularMotion/damping";
        "angular_ortho/softness": "angularOrtho/softness";
        "angular_ortho/restitution": "angularOrtho/restitution";
        "angular_ortho/damping": "angularOrtho/damping";
    }
    /** A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_sliderjoint3d.html  
     */
    class SliderJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        constructor(identifier?: any)
        /** Assigns [param value] to the given parameter. */
        setParam(param: SliderJoint3D.Param, value: float64): void
        
        /** Returns the value of the given parameter. */
        getParam(param: SliderJoint3D.Param): float64
        
        /** The maximum difference between the pivot points on their X axis before damping happens. */
        get "linearLimit/upperDistance"(): float64
        set "linearLimit/upperDistance"(value: float64)
        
        /** The minimum difference between the pivot points on their X axis before damping happens. */
        get "linearLimit/lowerDistance"(): float64
        set "linearLimit/lowerDistance"(value: float64)
        
        /** A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement. */
        get "linearLimit/softness"(): float64
        set "linearLimit/softness"(value: float64)
        
        /** The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost. */
        get "linearLimit/restitution"(): float64
        set "linearLimit/restitution"(value: float64)
        
        /** The amount of damping that happens once the limit defined by [member linear_limit/lower_distance] and [member linear_limit/upper_distance] is surpassed. */
        get "linearLimit/damping"(): float64
        set "linearLimit/damping"(value: float64)
        
        /** A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement. */
        get "linearMotion/softness"(): float64
        set "linearMotion/softness"(value: float64)
        
        /** The amount of restitution inside the slider limits. */
        get "linearMotion/restitution"(): float64
        set "linearMotion/restitution"(value: float64)
        
        /** The amount of damping inside the slider limits. */
        get "linearMotion/damping"(): float64
        set "linearMotion/damping"(value: float64)
        
        /** A factor applied to the movement across axes orthogonal to the slider. */
        get "linearOrtho/softness"(): float64
        set "linearOrtho/softness"(value: float64)
        
        /** The amount of restitution when movement is across axes orthogonal to the slider. */
        get "linearOrtho/restitution"(): float64
        set "linearOrtho/restitution"(value: float64)
        
        /** The amount of damping when movement is across axes orthogonal to the slider. */
        get "linearOrtho/damping"(): float64
        set "linearOrtho/damping"(value: float64)
        
        /** The upper limit of rotation in the slider. */
        get "angularLimit/upperAngle"(): float64
        set "angularLimit/upperAngle"(value: float64)
        
        /** The lower limit of rotation in the slider. */
        get "angularLimit/lowerAngle"(): float64
        set "angularLimit/lowerAngle"(value: float64)
        
        /** A factor applied to the all rotation once the limit is surpassed.  
         *  Makes all rotation slower when between 0 and 1.  
         */
        get "angularLimit/softness"(): float64
        set "angularLimit/softness"(value: float64)
        
        /** The amount of restitution of the rotation when the limit is surpassed.  
         *  Does not affect damping.  
         */
        get "angularLimit/restitution"(): float64
        set "angularLimit/restitution"(value: float64)
        
        /** The amount of damping of the rotation when the limit is surpassed.  
         *  A lower damping value allows a rotation initiated by body A to travel to body B slower.  
         */
        get "angularLimit/damping"(): float64
        set "angularLimit/damping"(value: float64)
        
        /** A factor applied to the all rotation in the limits. */
        get "angularMotion/softness"(): float64
        set "angularMotion/softness"(value: float64)
        
        /** The amount of restitution of the rotation in the limits. */
        get "angularMotion/restitution"(): float64
        set "angularMotion/restitution"(value: float64)
        
        /** The amount of damping of the rotation in the limits. */
        get "angularMotion/damping"(): float64
        set "angularMotion/damping"(value: float64)
        
        /** A factor applied to the all rotation across axes orthogonal to the slider. */
        get "angularOrtho/softness"(): float64
        set "angularOrtho/softness"(value: float64)
        
        /** The amount of restitution of the rotation across axes orthogonal to the slider. */
        get "angularOrtho/restitution"(): float64
        set "angularOrtho/restitution"(value: float64)
        
        /** The amount of damping of the rotation across axes orthogonal to the slider. */
        get "angularOrtho/damping"(): float64
        set "angularOrtho/damping"(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSliderJoint3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSliderJoint3D;
    }
    namespace SoftBody3D {
        enum DisableMode {
            DisableModeRemove = 0,
            DisableModeKeepActive = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSoftBody3D extends __RPCMapMeshInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSoftBody3D extends __NameMapMeshInstance3D {
        get_physics_rid: "getPhysicsRid";
        set_collision_mask_value: "setCollisionMaskValue";
        get_collision_mask_value: "getCollisionMaskValue";
        set_collision_layer_value: "setCollisionLayerValue";
        get_collision_layer_value: "getCollisionLayerValue";
        get_collision_exceptions: "getCollisionExceptions";
        add_collision_exception_with: "addCollisionExceptionWith";
        remove_collision_exception_with: "removeCollisionExceptionWith";
        get_point_transform: "getPointTransform";
        apply_impulse: "applyImpulse";
        apply_force: "applyForce";
        apply_central_impulse: "applyCentralImpulse";
        apply_central_force: "applyCentralForce";
        set_point_pinned: "setPointPinned";
        is_point_pinned: "isPointPinned";
        collision_layer: "collisionLayer";
        collision_mask: "collisionMask";
        parent_collision_ignore: "parentCollisionIgnore";
        simulation_precision: "simulationPrecision";
        total_mass: "totalMass";
        linear_stiffness: "linearStiffness";
        shrinking_factor: "shrinkingFactor";
        pressure_coefficient: "pressureCoefficient";
        damping_coefficient: "dampingCoefficient";
        drag_coefficient: "dragCoefficient";
        ray_pickable: "rayPickable";
        disable_mode: "disableMode";
    }
    /** A deformable 3D physics mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_softbody3d.html  
     */
    class SoftBody3D<Map extends NodePathMap = any> extends MeshInstance3D<Map> {
        constructor(identifier?: any)
        /** Returns the internal [RID] used by the [PhysicsServer3D] for this body. */
        getPhysicsRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionLayerValue(layerNumber: int64): boolean
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        getCollisionExceptions(): GArray<PhysicsBody3D>
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        addCollisionExceptionWith(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        removeCollisionExceptionWith(body: Node): void
        
        /** Returns local translation of a vertex in the surface array. */
        getPointTransform(pointIndex: int64): Vector3
        
        /** Applies an impulse to a point.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         */
        applyImpulse(pointIndex: int64, impulse: Vector3): void
        
        /** Applies a force to a point. A force is time dependent and meant to be applied every physics update. */
        applyForce(pointIndex: int64, force: Vector3): void
        
        /** Distributes and applies an impulse to all points.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         */
        applyCentralImpulse(impulse: Vector3): void
        
        /** Distributes and applies a force to all points. A force is time dependent and meant to be applied every physics update. */
        applyCentralForce(force: Vector3): void
        
        /** Sets the pinned state of a surface vertex. When set to `true`, the optional [param attachment_path] can define a [Node3D] the pinned vertex will be attached to. */
        setPointPinned(pointIndex: int64, pinned: boolean, attachmentPath?: NodePath | string /* = '' */, insertAt?: int64 /* = -1 */): void
        
        /** Returns `true` if vertex is set to pinned. */
        isPointPinned(pointIndex: int64): boolean
        
        /** The physics layers this SoftBody3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The physics layers this SoftBody3D **scans**. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** [NodePath] to a [CollisionObject3D] this SoftBody3D should avoid clipping. */
        get parentCollisionIgnore(): NodePath
        set parentCollisionIgnore(value: NodePath | string)
        
        /** Increasing this value will improve the resulting simulation, but can affect performance. Use with care. */
        get simulationPrecision(): int64
        set simulationPrecision(value: int64)
        
        /** The SoftBody3D's mass. */
        get totalMass(): float64
        set totalMass(value: float64)
        
        /** Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive). */
        get linearStiffness(): float64
        set linearStiffness(value: float64)
        
        /** Scales the rest lengths of [SoftBody3D]'s edge constraints. Positive values shrink the mesh, while negative values expand it. For example, a value of `0.1` shortens the edges of the mesh by 10%, while `-0.1` expands the edges by 10%.  
         *      
         *  **Note:** [member shrinking_factor] is best used on surface meshes with pinned points.  
         */
        get shrinkingFactor(): float64
        set shrinkingFactor(value: float64)
        
        /** The pressure coefficient of this soft body. Simulate pressure build-up from inside this body. Higher values increase the strength of this effect. */
        get pressureCoefficient(): float64
        set pressureCoefficient(value: float64)
        
        /** The body's damping coefficient. Higher values will slow down the body more noticeably when forces are applied. */
        get dampingCoefficient(): float64
        set dampingCoefficient(value: float64)
        
        /** The body's drag coefficient. Higher values increase this body's air resistance.  
         *      
         *  **Note:** This value is currently unused by Godot's default physics implementation.  
         */
        get dragCoefficient(): float64
        set dragCoefficient(value: float64)
        
        /** If `true`, the [SoftBody3D] will respond to [RayCast3D]s. */
        get rayPickable(): boolean
        set rayPickable(value: boolean)
        
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. */
        get disableMode(): int64
        set disableMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSoftBody3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSoftBody3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSphereMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSphereMesh extends __NameMapPrimitiveMesh {
        radial_segments: "radialSegments";
        is_hemisphere: "isHemisphere";
    }
    /** Class representing a spherical [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spheremesh.html  
     */
    class SphereMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Radius of sphere. */
        get radius(): float64
        set radius(value: float64)
        
        /** Full height of the sphere. */
        get height(): float64
        set height(value: float64)
        
        /** Number of radial segments on the sphere. */
        get radialSegments(): int64
        set radialSegments(value: int64)
        
        /** Number of segments along the height of the sphere. */
        get rings(): int64
        set rings(value: int64)
        
        /** If `true`, a hemisphere is created rather than a full sphere.  
         *      
         *  **Note:** To get a regular hemisphere, the height and radius of the sphere must be equal.  
         */
        get isHemisphere(): boolean
        set isHemisphere(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSphereMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSphereMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSphereOccluder3D extends __RPCMapOccluder3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSphereOccluder3D extends __NameMapOccluder3D {
    }
    /** Spherical shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_sphereoccluder3d.html  
     */
    class SphereOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** The sphere's radius in 3D units. */
        get radius(): float64
        set radius(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSphereOccluder3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSphereOccluder3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSphereShape3D extends __RPCMapShape3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSphereShape3D extends __NameMapShape3D {
    }
    /** A 3D sphere shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_sphereshape3d.html  
     */
    class SphereShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The sphere's radius. The shape's diameter is double the radius. */
        get radius(): float64
        set radius(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSphereShape3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSphereShape3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpinBox extends __RPCMapRange {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpinBox extends __NameMapRange {
        get_line_edit: "getLineEdit";
        update_on_text_changed: "updateOnTextChanged";
        custom_arrow_step: "customArrowStep";
        select_all_on_focus: "selectAllOnFocus";
    }
    /** An input field for numbers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinbox.html  
     */
    class SpinBox<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** Applies the current value of this [SpinBox]. This is equivalent to pressing [kbd]Enter[/kbd] while editing the [LineEdit] used by the [SpinBox]. This will cause [signal LineEdit.text_submitted] to be emitted and its currently contained expression to be evaluated. */
        apply(): void
        
        /** Returns the [LineEdit] instance from this [SpinBox]. You can use it to access properties and methods of [LineEdit].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getLineEdit(): null | LineEdit
        
        /** Changes the alignment of the underlying [LineEdit]. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** If `true`, the [SpinBox] will be editable. Otherwise, it will be read only. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** Sets the value of the [Range] for this [SpinBox] when the [LineEdit] text is  *changed*  instead of  *submitted* . See [signal LineEdit.text_changed] and [signal LineEdit.text_submitted].  
         *      
         *  **Note:** If set to `true`, this will interfere with entering mathematical expressions in the [SpinBox]. The [SpinBox] will try to evaluate the expression as you type, which means symbols like a trailing `+` are removed immediately by the expression being evaluated.  
         */
        get updateOnTextChanged(): boolean
        set updateOnTextChanged(value: boolean)
        
        /** Adds the specified prefix string before the numerical value of the [SpinBox]. */
        get prefix(): string
        set prefix(value: string)
        
        /** Adds the specified suffix string after the numerical value of the [SpinBox]. */
        get suffix(): string
        set suffix(value: string)
        
        /** If not `0`, sets the step when interacting with the arrow buttons of the [SpinBox].  
         *      
         *  **Note:** [member Range.value] will still be rounded to a multiple of [member Range.step].  
         */
        get customArrowStep(): float64
        set customArrowStep(value: float64)
        
        /** If `true`, the [SpinBox] will select the whole text when the [LineEdit] gains focus. Clicking the up and down arrows won't trigger this behavior. */
        get selectAllOnFocus(): boolean
        set selectAllOnFocus(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpinBox;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpinBox;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAnimation extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAnimation extends __NameMapSpineObjectWrapper {
        get_name: "getName";
        get_duration: "getDuration";
        set_duration: "setDuration";
        get_timelines: "getTimelines";
        has_timeline: "hasTimeline";
    }
    /** Stores a list of timelines to animate a skeleton's pose over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineanimation.html  
     */
    class SpineAnimation extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** The animation's name, which is unique across all animations in the skeleton. */
        getName(): string
        
        /** The duration of the animation in seconds, which is usually the highest time of all frames in the timeline. The duration is used to know when it has completed and when it should loop back to the start. */
        getDuration(): float64
        
        /** Sets the `duration` of the timeline in seconds. */
        setDuration(duration: float64): void
        
        /** Applies the animation's timelines to the specified skeleton. */
        apply(skeleton: SpineSkeleton, lastTime: float64, time: float64, loop: boolean, events: GArray, alpha: float64, fromSetup: boolean, add: boolean, out_: boolean, appliedPose: boolean): void
        
        /** Returns the timlines making up this animation. Modifying the returned array has no effect on the animation. */
        getTimelines(): GArray
        
        /** Returns whether the animation has the timeline with the given `ids`. */
        hasTimeline(ids: GArray): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAnimation;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAnimation;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAnimationMix extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAnimationMix extends __NameMapResource {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineanimationmix.html */
    class SpineAnimationMix extends Resource {
        constructor(identifier?: any)
        get from(): string
        set from(value: string)
        get to(): string
        set to(value: string)
        get mix(): float64
        set mix(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAnimationMix;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAnimationMix;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAnimationState extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAnimationState extends __NameMapRefCounted {
        clear_tracks: "clearTracks";
        clear_track: "clearTrack";
        get_num_tracks: "getNumTracks";
        set_animation: "setAnimation";
        add_animation: "addAnimation";
        set_empty_animation: "setEmptyAnimation";
        add_empty_animation: "addEmptyAnimation";
        set_empty_animations: "setEmptyAnimations";
        get_track: "getTrack";
        get_time_scale: "getTimeScale";
        set_time_scale: "setTimeScale";
        disable_queue: "disableQueue";
        enable_queue: "enableQueue";
    }
    /** Applies animations over time, queues animations for later playback, mixes (crossfading) between animations, and applies multiple animations on top of each other (layering).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineanimationstate.html  
     */
    class SpineAnimationState extends RefCounted {
        constructor(identifier?: any)
        /** Increments each track entry track time, setting queued animations as current if needed. */
        update(delta?: float64 /* = 0 */): void
        
        /** Poses the skeleton using the track entry animations. The animation state is not changed, so can be applied to multiple skeletons to pose them identically.  
         *  Returns true if any animations were applied.  
         */
        apply(skeleton: SpineSkeleton): boolean
        
        /** Removes all animations from all tracks, leaving skeletons in their current pose.  
         *  It may be desired to use `set_empty_animations()` to mix the skeletons back to the setup pose, rather than leaving them in their current pose.  
         */
        clearTracks(): void
        
        /** Removes all animations from the track, leaving skeletons in their current pose.  
         *  It may be desired to use `set_empty_animation()` to mix the skeletons back to the setup pose, rather than leaving them in their current pose.  
         */
        clearTrack(_unnamedArg0: int64): void
        
        /** Returns the number of tracks (or the highest track index) on which an animation has been set previously. */
        getNumTracks(): int64
        
        /** Sets the current animation for a track, discarding any queued animations. If the formerly current track entry was never applied to a skeleton, it is replaced (not mixed from).  
         *  If [loop] is true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its duration. In either case `TrackEntry.trackEnd` determines when the track is cleared.  
         *  Returns track entry to allow further customization of animation playback. References to the track entry must not be kept after the dispose event occurs.  
         */
        setAnimation(animationName: string, loop?: boolean /* = true */, trackId?: int64 /* = 0 */): null | SpineTrackEntry
        
        /** Adds an animation to be played after the current or last queued animation for a track. If the track is empty, it is equivalent to calling `set_animation`.  
         *  If `delay` > 0, sets `TrackEntry.delay`. If `delay` <= 0, the delay set is the duration of the previous track entry minus any mix duration (from the `AnimationStateData`) plus the specified `delay` (ie the mix ends at (`delay` >= 0) or before (`delay` < 0) the previous track entry duration). If the previous entry is looping, its next loop completion is used instead of its duration.  
         */
        addAnimation(animationName: string, delay?: float64 /* = 0 */, loop?: boolean /* = true */, trackId?: int64 /* = 0 */): null | SpineTrackEntry
        
        /** Sets an empty animation for a track, discarding any queued animations, and sets the track entry's mix duration. An empty animation has no timelines and serves as a placeholder for mixing in or out.  
         *  Mixing out is done by setting an empty animation with a mix duration using either `set_empty_animation()`, `set_empty_animations()`, or `add_empty_animation()`. Mixing to an empty animation causes the previous animation to be applied less and less over the mix duration. Properties keyed in the previous animation transition to the value from lower tracks or to the setup pose value if no lower tracks key the property. A mix duration of 0 still mixes out over one frame.  
         *  Mixing in is done by first setting an empty animation, then adding an animation using `add_animation()`with the desired delay (an empty animation has a duration of 0) and on the returned track entry, set the mix duration. Mixing from an empty animation causes the new animation to be applied more and more over the mix duration. Properties keyed in the new animation transition from the value from lower tracks or from the setup pose value if no lower tracks key the property to the value keyed in the new animation.  
         */
        setEmptyAnimation(trackId: int64, mixDuration: float64): null | SpineTrackEntry
        
        /** Adds an empty animation to be played after the current or last queued animation for a track, and sets the track entry's mix duration. If the track is empty, it is equivalent to calling `set_empty_animation()`. See `set_empty_animation()`.  
         *  If `delay`> 0, sets the track entry's delay. If <= 0, the delay set is the duration of the previous track entry minus any mix duration plus the specified `delay` (ie the mix ends at (`delay` = 0) or before (`delay` < 0) the previous track entry duration). If the previous entry is looping, its next loop completion is used instead of its duration.  
         *  Returns a track entry to allow further customization of animation playback. References to the track entry must not be kept  
         *  after the dispose event occurs.  
         */
        addEmptyAnimation(trackId: int64, mixDuration: float64, delay: float64): null | SpineTrackEntry
        
        /** Sets an empty animation for every track, discarding any queued animations, and mixes to it over the specified mix duration. */
        setEmptyAnimations(mixDuration: float64): void
        getTrack(trackId: int64): null | SpineTrackEntry
        
        /** Multiplier for the delta time when the animation state is updated, causing time for all animations and mixes to play slower or faster. Defaults to 1. */
        getTimeScale(): float64
        
        /** Sets the multiplier for the delta time when the animation state is updated, causing time for all animations and mixes to play slower or faster. Defaults to 1. */
        setTimeScale(timeScale: float64): void
        
        /** Halts the emission of any animation state events. */
        disableQueue(): void
        
        /** Resumes the emission of any animation state events. */
        enableQueue(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAnimationState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAnimationState;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAnimationTrack extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAnimationTrack extends __NameMapNode {
        update_animation_state: "updateAnimationState";
        animation_name: "animationName";
        track_index: "trackIndex";
        mix_duration: "mixDuration";
        shortest_rotation: "shortestRotation";
        time_scale: "timeScale";
        attachment_threshold: "attachmentThreshold";
        draw_order_threshold: "drawOrderThreshold";
        blend_tree_mode: "blendTreeMode";
    }
    /** Internal class to allow composing animations on `SpineSprite` instances via Godot's animation player and animation editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineanimationtrack.html  
     */
    class SpineAnimationTrack<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        updateAnimationState(spineSprite: any): void
        get animationName(): string
        set animationName(value: string)
        get loop(): boolean
        set loop(value: boolean)
        get trackIndex(): int64
        set trackIndex(value: int64)
        get mixDuration(): float64
        set mixDuration(value: float64)
        get additive(): boolean
        set additive(value: boolean)
        get reverse(): boolean
        set reverse(value: boolean)
        get shortestRotation(): boolean
        set shortestRotation(value: boolean)
        get timeScale(): float64
        set timeScale(value: float64)
        get alpha(): float64
        set alpha(value: float64)
        get attachmentThreshold(): float64
        set attachmentThreshold(value: float64)
        get drawOrderThreshold(): float64
        set drawOrderThreshold(value: float64)
        get blendTreeMode(): boolean
        set blendTreeMode(value: boolean)
        get debug(): boolean
        set debug(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAnimationTrack;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAnimationTrack;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAtlasResource extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAtlasResource extends __NameMapResource {
        load_from_atlas_file: "loadFromAtlasFile";
        source_path: "sourcePath";
        normal_maps: "normalMaps";
        specular_maps: "specularMaps";
    }
    /** A Godot resource encapsulating a Spine atlas and its atlas page images.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineatlasresource.html  
     */
    class SpineAtlasResource extends Resource {
        constructor(identifier?: any)
        loadFromAtlasFile(path: string): GError
        get sourcePath(): string
        set sourcePath(value: string)
        get textures(): GArray
        set textures(value: GArray)
        get normalMaps(): GArray
        set normalMaps(value: GArray)
        get specularMaps(): GArray
        set specularMaps(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAtlasResource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAtlasResource;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAtlasResourceFormatLoader extends __RPCMapResourceFormatLoader {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAtlasResourceFormatLoader extends __NameMapResourceFormatLoader {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineatlasresourceformatloader.html */
    class SpineAtlasResourceFormatLoader extends ResourceFormatLoader {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAtlasResourceFormatLoader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAtlasResourceFormatLoader;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAtlasResourceFormatSaver extends __RPCMapResourceFormatSaver {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAtlasResourceFormatSaver extends __NameMapResourceFormatSaver {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineatlasresourceformatsaver.html */
    class SpineAtlasResourceFormatSaver extends ResourceFormatSaver {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAtlasResourceFormatSaver;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAtlasResourceFormatSaver;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineAttachment extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineAttachment extends __NameMapSpineObjectWrapper {
        get_attachment_name: "getAttachmentName";
    }
    /** The base class for attachments.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineattachment.html  
     */
    class SpineAttachment extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the attachment's name. */
        getAttachmentName(): string
        
        /** Returns a copy of this attachment. */
        copy(): null | SpineAttachment
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineAttachment;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineAttachment;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineBone extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineBone extends __NameMapSpineObjectWrapper {
        world_to_local: "worldToLocal";
        world_to_parent: "worldToParent";
        local_to_world: "localToWorld";
        parent_to_world: "parentToWorld";
        world_to_local_rotation: "worldToLocalRotation";
        local_to_world_rotation: "localToWorldRotation";
        rotate_world: "rotateWorld";
        get_data: "getData";
        get_parent: "getParent";
        get_children: "getChildren";
        get_pose: "getPose";
        get_applied_pose: "getAppliedPose";
        is_active: "isActive";
        set_active: "setActive";
        get_transform: "getTransform";
        set_transform: "setTransform";
        get_global_transform: "getGlobalTransform";
        set_global_transform: "setGlobalTransform";
    }
    /** The current pose for a bone, before constraints are applied.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinebone.html  
     */
    class SpineBone extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Transforms a point from world coordinates to the bone's local coordinates. The world coordinate space is equal to the SpineSprite coordinate space. */
        worldToLocal(worldPosition: Vector2): Vector2
        
        /** Transforms a point from world coordinates to the parent bone's local coordinates. */
        worldToParent(worldPosition: Vector2): Vector2
        
        /** Transforms a point from the bone's local coordinates to world coordinates. The world coordinate space equals the coordinate space of the SpineSprite. */
        localToWorld(localPosition: Vector2): Vector2
        
        /** Transforms a point from the parent bone's coordinates to world coordinates. */
        parentToWorld(localPosition: Vector2): Vector2
        
        /** Transforms a world rotation to a local rotation. The world coordinate space is equal to the SpineSprite coordinate space. */
        worldToLocalRotation(worldRotation: float64): float64
        
        /** Transforms a local rotation to a world rotation. The world coordinate space equals the coordinate space of the SpineSprite. */
        localToWorldRotation(localRotation: float64): float64
        
        /** Rotates the world transform the specified amount in degrees.  
         *    
         *  After changes are made to the world transform, update_local_transform should be called on the applied pose and update_world_transform will need to be called on any child bones, recursively.  
         */
        rotateWorld(_unnamedArg0: float64): void
        
        /** Returns the bone's setup pose data. */
        getData(): null | SpineBoneData
        
        /** Returns the parent bone, or null if this is the root bone. */
        getParent(): null | SpineBone
        
        /** Returns the immediate children of this bone. Modifications of the array have no effect. */
        getChildren(): GArray
        
        /** Returns the unconstrained local pose for this bone. The pose contains the local transform (position, rotation, scale, shear). */
        getPose(): null | SpineBonePose
        
        /** Returns the applied pose for this bone. The applied pose contains both the local transform and the world transform. The applied transform may differ from the pose if a constraint or application code modifies the world transform after it was computed from the local transform. */
        getAppliedPose(): null | SpineBonePose
        
        /** Returns false when the bone has not been computed because BoneData.skin_required is true and the active skin does not contain this bone. */
        isActive(): boolean
        
        /** Sets whether this bone is active. Inactive bones are not computed until they are active again. */
        setActive(v: boolean): void
        
        /** Updates this bone. This is called internally when the skeleton's world transform is computed and should typically not be called directly. The physics parameter determines how physics are applied. See [enum SpineConstant.Physics]. */
        update(skeleton: SpineSkeleton, physics: SpineConstant.Physics): void
        
        /** Returns the bone transform as a Transform2D relative to the SpineSprite node representing the skeleton. Shear is not encoded in the transform. */
        getTransform(): Transform2D
        
        /** Sets the bone transform to the Godot Transform2D relative to the SpineSprite. */
        setTransform(localTransform: Transform2D): void
        
        /** Returns the bone transform as a Transform2D relative to Godot's global canvas coordinate space. Shear is not encoded in the transform. */
        getGlobalTransform(): Transform2D
        
        /** Sets the bone's transform to the global Godot Transform2D. */
        setGlobalTransform(globalTransform: Transform2D): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineBone;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineBone;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineBoneData extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineBoneData extends __NameMapSpineObjectWrapper {
        get_index: "getIndex";
        get_bone_name: "getBoneName";
        get_parent: "getParent";
        get_length: "getLength";
        set_length: "setLength";
        get_setup_pose: "getSetupPose";
        is_skin_required: "isSkinRequired";
        set_skin_required: "setSkinRequired";
        get_color: "getColor";
        set_color: "setColor";
        get_icon: "getIcon";
        set_visible: "setVisible";
        is_visible: "isVisible";
    }
    /** Stores the setup pose for a bone.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinebonedata.html  
     */
    class SpineBoneData extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the index of the bone in Skeleton.bones. */
        getIndex(): int64
        
        /** Returns the name of the bone, which is unique across all bones in the skeleton. */
        getBoneName(): string
        
        /** Returns the parent bone data. May be null for the root bone. */
        getParent(): null | SpineBoneData
        
        /** Returns the bone's length. */
        getLength(): float64
        
        /** Sets the bone's length. */
        setLength(v: float64): void
        
        /** Returns the setup pose for this bone, containing position, rotation, scale, and shear. */
        getSetupPose(): null | SpineBonePose
        
        /** Returns whether the bone is only active when a skin containing it is active. */
        isSkinRequired(): boolean
        
        /** Sets whether the bone is only active when a skin containing it is active. */
        setSkinRequired(v: boolean): void
        
        /** Returns the color of the bone as it was in Spine, or a default color if nonessential data was not exported. Bones are not usually rendered at runtime. */
        getColor(): Color
        
        /** Sets the color of the bone. */
        setColor(v: Color): void
        
        /** Returns the icon name for this bone, if any. */
        getIcon(): string
        
        /** Sets whether the bone is visible. */
        setVisible(v: boolean): void
        
        /** Returns whether the bone is visible. */
        isVisible(): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineBoneData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineBoneData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineBoneLocal extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineBoneLocal extends __NameMapSpineObjectWrapper {
        get_x: "getX";
        set_x: "setX";
        get_y: "getY";
        set_y: "setY";
        get_rotation: "getRotation";
        set_rotation: "setRotation";
        get_scale_x: "getScaleX";
        set_scale_x: "setScaleX";
        get_scale_y: "getScaleY";
        set_scale_y: "setScaleY";
        get_shear_x: "getShearX";
        set_shear_x: "setShearX";
        get_shear_y: "getShearY";
        set_shear_y: "setShearY";
        get_inherit: "getInherit";
        set_inherit: "setInherit";
        set_position: "setPosition";
        set_scale: "setScale";
        set_scale_uniform: "setScaleUniform";
    }
    /** Stores a bone's local pose.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinebonelocal.html  
     */
    class SpineBoneLocal extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the local x translation. */
        getX(): float64
        
        /** Sets the local x translation. */
        setX(v: float64): void
        
        /** Returns the local y translation. */
        getY(): float64
        
        /** Sets the local y translation. */
        setY(v: float64): void
        
        /** Returns the local rotation in degrees, counter clockwise. */
        getRotation(): float64
        
        /** Sets the local rotation in degrees, counter clockwise. */
        setRotation(v: float64): void
        
        /** Returns the local scaleX. */
        getScaleX(): float64
        
        /** Sets the local scaleX. */
        setScaleX(v: float64): void
        
        /** Returns the local scaleY. */
        getScaleY(): float64
        
        /** Sets the local scaleY. */
        setScaleY(v: float64): void
        
        /** Returns the local shearX. */
        getShearX(): float64
        
        /** Sets the local shearX. */
        setShearX(v: float64): void
        
        /** Returns the local shearY. */
        getShearY(): float64
        
        /** Sets the local shearY. */
        setShearY(v: float64): void
        
        /** Returns how parent world transforms affect this bone. See [enum SpineConstant.Inherit]. */
        getInherit(): SpineConstant.Inherit
        
        /** Sets how parent world transforms affect this bone. See [enum SpineConstant.Inherit]. */
        setInherit(v: SpineConstant.Inherit): void
        
        /** Sets both the local x and y translation at once. */
        setPosition(x: float64, y: float64): void
        
        /** Sets both the local scaleX and scaleY at once. */
        setScale(scaleX: float64, scaleY: float64): void
        
        /** Sets both the local scaleX and scaleY to the same value. */
        setScaleUniform(scale: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineBoneLocal;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineBoneLocal;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineBoneNode extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineBoneNode extends __NameMapNode2D {
        _on_before_world_transforms_change: "_onBeforeWorldTransformsChange";
        _on_world_transforms_changed: "_onWorldTransformsChanged";
        find_bone: "findBone";
        find_sprite: "findSprite";
        bone_mode: "boneMode";
    }
    /** Node2D that either follows or drives a bone in a `SpineSprite`.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinebonenode.html  
     */
    class SpineBoneNode<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        _onBeforeWorldTransformsChange(spineSprite: any): void
        _onWorldTransformsChanged(spineSprite: any): void
        findBone(): null | SpineBone
        findSprite(): null | SpineSprite
        get boneMode(): int64
        set boneMode(value: int64)
        get enabled(): boolean
        set enabled(value: boolean)
        get thickness(): float64
        set thickness(value: float64)
        get color(): Color
        set color(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineBoneNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineBoneNode;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineBonePose extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineBonePose extends __NameMapSpineObjectWrapper {
        get_x: "getX";
        set_x: "setX";
        get_y: "getY";
        set_y: "setY";
        get_rotation: "getRotation";
        set_rotation: "setRotation";
        get_scale_x: "getScaleX";
        set_scale_x: "setScaleX";
        get_scale_y: "getScaleY";
        set_scale_y: "setScaleY";
        get_shear_x: "getShearX";
        set_shear_x: "setShearX";
        get_shear_y: "getShearY";
        set_shear_y: "setShearY";
        get_inherit: "getInherit";
        set_inherit: "setInherit";
        get_a: "getA";
        set_a: "setA";
        get_b: "getB";
        set_b: "setB";
        get_c: "getC";
        set_c: "setC";
        get_d: "getD";
        set_d: "setD";
        get_world_x: "getWorldX";
        set_world_x: "setWorldX";
        get_world_y: "getWorldY";
        set_world_y: "setWorldY";
        get_world_rotation_x: "getWorldRotationX";
        get_world_rotation_y: "getWorldRotationY";
        get_world_scale_x: "getWorldScaleX";
        get_world_scale_y: "getWorldScaleY";
        world_to_local: "worldToLocal";
        local_to_world: "localToWorld";
        world_to_parent: "worldToParent";
        parent_to_world: "parentToWorld";
        world_to_local_rotation: "worldToLocalRotation";
        local_to_world_rotation: "localToWorldRotation";
        rotate_world: "rotateWorld";
        update_world_transform: "updateWorldTransform";
        update_local_transform: "updateLocalTransform";
    }
    /** The applied pose for a bone with constraints applied and world transform computed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinebonepose.html  
     */
    class SpineBonePose extends SpineObjectWrapper {
        constructor(identifier?: any)
        getX(): float64
        setX(v: float64): void
        getY(): float64
        setY(v: float64): void
        getRotation(): float64
        setRotation(v: float64): void
        getScaleX(): float64
        setScaleX(v: float64): void
        getScaleY(): float64
        setScaleY(v: float64): void
        getShearX(): float64
        setShearX(v: float64): void
        getShearY(): float64
        setShearY(v: float64): void
        getInherit(): SpineConstant.Inherit
        setInherit(v: SpineConstant.Inherit): void
        
        /** Returns part of the world transform matrix for the X axis. If changed, update_local_transform should be called. */
        getA(): float64
        
        /** Sets part of the world transform matrix for the X axis. If changed, update_local_transform should be called. */
        setA(v: float64): void
        
        /** Returns part of the world transform matrix for the Y axis. If changed, update_local_transform should be called. */
        getB(): float64
        
        /** Sets part of the world transform matrix for the Y axis. If changed, update_local_transform should be called. */
        setB(v: float64): void
        
        /** Returns part of the world transform matrix for the X axis. If changed, update_local_transform should be called. */
        getC(): float64
        
        /** Sets part of the world transform matrix for the X axis. If changed, update_local_transform should be called. */
        setC(v: float64): void
        
        /** Returns part of the world transform matrix for the Y axis. If changed, update_local_transform should be called. */
        getD(): float64
        
        /** Sets part of the world transform matrix for the Y axis. If changed, update_local_transform should be called. */
        setD(v: float64): void
        
        /** Returns the world X position. If changed, update_local_transform should be called. */
        getWorldX(): float64
        
        /** Sets the world X position. If changed, update_local_transform should be called. */
        setWorldX(v: float64): void
        
        /** Returns the world Y position. If changed, update_local_transform should be called. */
        getWorldY(): float64
        
        /** Sets the world Y position. If changed, update_local_transform should be called. */
        setWorldY(v: float64): void
        
        /** Returns the world rotation for the X axis, calculated using a and c. */
        getWorldRotationX(): float64
        
        /** Returns the world rotation for the Y axis, calculated using b and d. */
        getWorldRotationY(): float64
        
        /** Returns the magnitude (always positive) of the world scale X, calculated using a and c. */
        getWorldScaleX(): float64
        
        /** Returns the magnitude (always positive) of the world scale Y, calculated using b and d. */
        getWorldScaleY(): float64
        
        /** Transforms a point from world coordinates to the bone's local coordinates. */
        worldToLocal(worldPosition: Vector2): Vector2
        
        /** Transforms a point from the bone's local coordinates to world coordinates. */
        localToWorld(localPosition: Vector2): Vector2
        
        /** Transforms a point from world coordinates to the parent bone's local coordinates. */
        worldToParent(worldPosition: Vector2): Vector2
        
        /** Transforms a point from the parent bone's coordinates to world coordinates. */
        parentToWorld(parentPosition: Vector2): Vector2
        
        /** Transforms a world rotation to a local rotation. */
        worldToLocalRotation(worldRotation: float64): float64
        
        /** Transforms a local rotation to a world rotation. */
        localToWorldRotation(localRotation: float64): float64
        
        /** Rotates the world transform the specified amount in degrees.  
         *    
         *  After changes are made to the world transform, update_local_transform should be called on this bone and any child bones, recursively.  
         */
        rotateWorld(degrees: float64): void
        
        /** Computes the world transform using the parent bone's applied pose and this pose. Child bones are not updated.  
         *    
         *  See [url=https://esotericsoftware.com/spine-runtime-skeletons#World-transforms]World transforms[/url] in the Spine Runtimes Guide.  
         */
        updateWorldTransform(skeleton: SpineSkeleton): void
        
        /** Computes the local transform values from the world transform.  
         *    
         *  If the world transform is modified (by a constraint, rotate_world, etc) then this method should be called so the local transform matches the world transform. The local transform may be needed by other code (eg to apply another constraint).  
         *    
         *  Some information is ambiguous in the world transform, such as -1,-1 scale versus 180 rotation. The local transform after calling this method is equivalent to the local transform used to compute the world transform, but may not be identical.  
         */
        updateLocalTransform(skeleton: SpineSkeleton): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineBonePose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineBonePose;
    }
    namespace SpineConstant {
        enum PropertyId {
            PropertyRotate = 1,
            PropertyX = 2,
            PropertyY = 4,
            PropertyScalex = 8,
            PropertyScaley = 16,
            PropertyShearx = 32,
            PropertySheary = 64,
            PropertyRgb = 128,
            PropertyAlpha = 256,
            PropertyRgb2 = 512,
            PropertyAttachment = 1024,
            PropertyDeform = 2048,
            PropertyEvent = 4096,
            PropertyDraworder = 8192,
            PropertyIkconstraint = 16384,
            PropertyTransformconstraint = 32768,
            PropertyPathconstraintposition = 65536,
            PropertyPathconstraintspacing = 131072,
            PropertyPathconstraintmix = 262144,
            PropertySequence = 524288,
        }
        enum Inherit {
            InheritNormal = 0,
            InheritOnlytranslation = 1,
            InheritNorotationorreflection = 2,
            InheritNoscale = 3,
            InheritNoscaleorreflection = 4,
        }
        enum PositionMode {
            PositionmodeFixed = 0,
            PositionmodePercent = 1,
        }
        enum SpacingMode {
            SpacingmodeLength = 0,
            SpacingmodeFixed = 1,
            SpacingmodePercent = 2,
        }
        enum RotateMode {
            RotatemodeTangent = 0,
            RotatemodeChain = 1,
            RotatemodeChainscale = 2,
        }
        enum BlendMode {
            BlendmodeNormal = 0,
            BlendmodeAdditive = 1,
            BlendmodeMultiply = 2,
            BlendmodeScreen = 3,
        }
        enum ScaleYMode {
            ScaleymodeNone = 0,
            ScaleymodeUniform = 1,
            ScaleymodeVolume = 2,
        }
        enum UpdateMode {
            UpdatemodeProcess = 0,
            UpdatemodePhysics = 1,
            UpdatemodeManual = 2,
        }
        enum BoneMode {
            BonemodeFollow = 0,
            BonemodeDrive = 1,
        }
        enum Physics {
            PhysicsNone = 0,
            PhysicsReset = 1,
            PhysicsUpdate = 2,
            PhysicsPose = 3,
        }
        enum MixInterpolation {
            MixinterpolationLinear = 0,
            MixinterpolationSmooth = 1,
            MixinterpolationSlowfast = 2,
            MixinterpolationFastslow = 3,
            MixinterpolationCircle = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineConstant extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineConstant extends __NameMapGObject {
    }
    /** Contains constant values and enumerations used throughout the Spine runtime.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineconstant.html  
     */
    class SpineConstant extends GObject {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineConstant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineConstraintData extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineConstraintData extends __NameMapSpineObjectWrapper {
        get_constraint_name: "getConstraintName";
        is_skin_required: "isSkinRequired";
    }
    /** The base class for all constraint datas.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineconstraintdata.html  
     */
    class SpineConstraintData extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** The constraint's name, which is unique across all constraints in the skeleton of the same type. */
        getConstraintName(): string
        
        /** When true, `Skeleton.update_world_transform` only updates this constraint if the active skin contains this constraint. */
        isSkinRequired(): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineConstraintData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineConstraintData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineEditorPropertyAnimationMixes extends __RPCMapEditorProperty {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineEditorPropertyAnimationMixes extends __NameMapEditorProperty {
        add_mix: "addMix";
        delete_mix: "deleteMix";
        update_mix_property: "updateMixProperty";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineeditorpropertyanimationmixes.html */
    class SpineEditorPropertyAnimationMixes<Map extends NodePathMap = any> extends EditorProperty<Map> {
        constructor(identifier?: any)
        addMix(): void
        deleteMix(_unnamedArg0: int64): void
        updateMixProperty(_unnamedArg0: int64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineEditorPropertyAnimationMixes;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineEditorPropertyAnimationMixes;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineEvent extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineEvent extends __NameMapSpineObjectWrapper {
        get_data: "getData";
        get_time: "getTime";
        get_int_value: "getIntValue";
        set_int_value: "setIntValue";
        get_float_value: "getFloatValue";
        set_float_value: "setFloatValue";
        get_string_value: "getStringValue";
        set_string_value: "setStringValue";
        get_volume: "getVolume";
        set_volume: "setVolume";
        get_balance: "getBalance";
        set_balance: "setBalance";
    }
    /** Stores the current pose values for an event. See [url]http://esotericsoftware.com/spine-events[/url] in the Spine User Guide.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineevent.html  
     */
    class SpineEvent extends SpineObjectWrapper {
        constructor(identifier?: any)
        getData(): null | SpineEventData
        getTime(): float64
        getIntValue(): int64
        setIntValue(v: int64): void
        getFloatValue(): float64
        setFloatValue(v: float64): void
        getStringValue(): string
        setStringValue(v: string): void
        getVolume(): float64
        setVolume(v: float64): void
        getBalance(): float64
        setBalance(v: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineEvent;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineEvent;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineEventData extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineEventData extends __NameMapSpineObjectWrapper {
        get_event_name: "getEventName";
        get_int_value: "getIntValue";
        set_int_value: "setIntValue";
        get_float_value: "getFloatValue";
        set_float_value: "setFloatValue";
        get_string_value: "getStringValue";
        set_string_value: "setStringValue";
        get_audio_path: "getAudioPath";
        set_audio_path: "setAudioPath";
        get_volume: "getVolume";
        set_volume: "setVolume";
        get_balance: "getBalance";
        set_balance: "setBalance";
    }
    /** Stores the setup pose values for an Event.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineeventdata.html  
     */
    class SpineEventData extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the name of the event, which is unique within the skeleton. */
        getEventName(): string
        
        /** Returns the integer value for this event. */
        getIntValue(): int64
        
        /** Sets the integer value for this event. */
        setIntValue(v: int64): void
        
        /** Returns the float value for this event. */
        getFloatValue(): float64
        
        /** Sets the float value for this event. */
        setFloatValue(v: float64): void
        
        /** Returns the string value for this event. */
        getStringValue(): string
        
        /** Sets the string value for this event. */
        setStringValue(v: string): void
        
        /** Returns the audio path for this event. */
        getAudioPath(): string
        
        /** Sets the audio path for this event. */
        setAudioPath(v: string): void
        
        /** Returns the volume for the audio of this event. */
        getVolume(): float64
        
        /** Sets the volume for the audio of this event. */
        setVolume(v: float64): void
        
        /** Returns the balance for the audio of this event. */
        getBalance(): float64
        
        /** Sets the balance for the audio of this event. */
        setBalance(v: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineEventData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineEventData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineIkConstraint extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineIkConstraint extends __NameMapSpineObjectWrapper {
        get_data: "getData";
        get_bones: "getBones";
        get_target: "getTarget";
        set_target: "setTarget";
        get_pose: "getPose";
        get_applied_pose: "getAppliedPose";
        is_active: "isActive";
        set_active: "setActive";
    }
    /** Stores the current pose for an IK constraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineikconstraint.html  
     */
    class SpineIkConstraint extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Updates the constraint. The IK constraint is solved by adjusting the rotation of the bones so the tip of the last bone is as close to the target as possible. */
        update(skeleton: SpineSkeleton): void
        
        /** Returns the IK constraint's setup pose data. */
        getData(): null | SpineIkConstraintData
        
        /** Returns the bones that will be modified by this IK constraint. Modifying the array has no effect. */
        getBones(): GArray
        
        /** Returns the bone that is the target for the IK constraint. The bones will be rotated so the tip of the last bone is as close to the target as possible. */
        getTarget(): null | SpineBone
        
        /** Sets the bone that is the target for the IK constraint. The bones will be rotated so the tip of the last bone is as close to the target as possible. */
        setTarget(v: SpineBone): void
        
        /** Returns the current pose for this IK constraint, containing mix, softness, bend direction, compress, and stretch values. */
        getPose(): null | SpineIkConstraintPose
        
        /** Returns the applied pose for this IK constraint. */
        getAppliedPose(): null | SpineIkConstraintPose
        
        /** Returns whether this IK constraint is active. When inactive, the constraint is not applied. */
        isActive(): boolean
        
        /** Sets whether this IK constraint is active. When inactive, the constraint is not applied. */
        setActive(v: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineIkConstraint;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineIkConstraint;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineIkConstraintData extends __RPCMapSpineConstraintData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineIkConstraintData extends __NameMapSpineConstraintData {
        get_bones: "getBones";
        get_target: "getTarget";
        set_target: "setTarget";
        get_scale_y_mode: "getScaleYMode";
        set_scale_y_mode: "setScaleYMode";
        get_setup_pose: "getSetupPose";
    }
    /** Stores the setup pose for an `SpineIkConstraint`.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineikconstraintdata.html  
     */
    class SpineIkConstraintData extends SpineConstraintData {
        constructor(identifier?: any)
        /** The bones that are constrained by this IK constraint. */
        getBones(): GArray
        
        /** The bone that is the IK target. */
        getTarget(): null | SpineBoneData
        setTarget(v: SpineBoneData): void
        
        /** Determines how scaleY changes when compress or stretch changes scaleX: none, uniform, or volume. */
        getScaleYMode(): SpineConstant.ScaleYMode
        setScaleYMode(v: SpineConstant.ScaleYMode): void
        getSetupPose(): null | SpineIkConstraintPose
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineIkConstraintData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineIkConstraintData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineIkConstraintPose extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineIkConstraintPose extends __NameMapSpineObjectWrapper {
        get_mix: "getMix";
        set_mix: "setMix";
        get_softness: "getSoftness";
        set_softness: "setSoftness";
        get_bend_direction: "getBendDirection";
        set_bend_direction: "setBendDirection";
        get_compress: "getCompress";
        set_compress: "setCompress";
        get_stretch: "getStretch";
        set_stretch: "setStretch";
    }
    /** Stores the current pose for an IK constraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineikconstraintpose.html  
     */
    class SpineIkConstraintPose extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained rotation.  
         *    
         *  For two bone IK: if the parent bone has local nonuniform scale, the child bone's local Y translation is set to 0.  
         */
        getMix(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained rotation.  
         *    
         *  For two bone IK: if the parent bone has local nonuniform scale, the child bone's local Y translation is set to 0.  
         */
        setMix(value: float64): void
        
        /** For two bone IK, returns the target bone's distance from the maximum reach of the bones where rotation begins to slow. The bones will not straighten completely until the target is this far out of range. */
        getSoftness(): float64
        
        /** For two bone IK, sets the target bone's distance from the maximum reach of the bones where rotation begins to slow. The bones will not straighten completely until the target is this far out of range. */
        setSoftness(value: float64): void
        
        /** For two bone IK, returns the bend direction of the IK bones, either 1 or -1. */
        getBendDirection(): int64
        
        /** For two bone IK, sets the bend direction of the IK bones, either 1 or -1. */
        setBendDirection(value: int64): void
        
        /** For one bone IK, returns whether the bone is scaled to reach the target when the target is too close. */
        getCompress(): boolean
        
        /** For one bone IK, sets whether the bone is scaled to reach the target when the target is too close. */
        setCompress(value: boolean): void
        
        /** Returns whether the parent bone is scaled to reach the target when the target is out of range.  
         *    
         *  For two bone IK: 1) the child bone's local Y translation is set to 0, 2) stretch is not applied if softness is > 0, and 3) if the parent bone has local nonuniform scale, stretch is not applied.  
         */
        getStretch(): boolean
        
        /** Sets whether the parent bone is scaled to reach the target when the target is out of range.  
         *    
         *  For two bone IK: 1) the child bone's local Y translation is set to 0, 2) stretch is not applied if softness is > 0, and 3) if the parent bone has local nonuniform scale, stretch is not applied.  
         */
        setStretch(value: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineIkConstraintPose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineIkConstraintPose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineMesh2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineMesh2D extends __NameMapNode2D {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spinemesh2d.html */
    class SpineMesh2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineMesh2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineMesh2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineObjectWrapper extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineObjectWrapper extends __NameMapRefCounted {
        _internal_spine_objects_invalidated: "_internalSpineObjectsInvalidated";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineobjectwrapper.html */
    class SpineObjectWrapper extends RefCounted {
        constructor(identifier?: any)
        _internalSpineObjectsInvalidated(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineObjectWrapper;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineObjectWrapper;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpinePathConstraint extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpinePathConstraint extends __NameMapSpineObjectWrapper {
        get_pose: "getPose";
        get_applied_pose: "getAppliedPose";
        get_bones: "getBones";
        get_slot: "getSlot";
        set_slot: "setSlot";
        get_data: "getData";
        is_active: "isActive";
        set_active: "setActive";
    }
    /** Stores the current pose for a path constraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinepathconstraint.html  
     */
    class SpinePathConstraint extends SpineObjectWrapper {
        constructor(identifier?: any)
        update(skeleton: SpineSkeleton): void
        getPose(): null | SpinePathConstraintPose
        getAppliedPose(): null | SpinePathConstraintPose
        
        /** The bones that will be modified by this path constraint. Modifying the array has no effect. */
        getBones(): GArray
        getSlot(): null | SpineSlot
        setSlot(v: SpineSlot): void
        
        /** The path constraint's setup pose data. */
        getData(): null | SpinePathConstraintData
        isActive(): boolean
        setActive(v: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpinePathConstraint;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpinePathConstraint;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpinePathConstraintData extends __RPCMapSpineConstraintData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpinePathConstraintData extends __NameMapSpineConstraintData {
        get_bones: "getBones";
        get_slot: "getSlot";
        set_slot: "setSlot";
        get_position_mode: "getPositionMode";
        set_position_mode: "setPositionMode";
        get_spacing_mode: "getSpacingMode";
        set_spacing_mode: "setSpacingMode";
        get_rotate_mode: "getRotateMode";
        set_rotate_mode: "setRotateMode";
        get_offset_rotation: "getOffsetRotation";
        set_offset_rotation: "setOffsetRotation";
        get_setup_pose: "getSetupPose";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spinepathconstraintdata.html */
    class SpinePathConstraintData extends SpineConstraintData {
        constructor(identifier?: any)
        /** The bones that will be modified by this path constraint. Modifying the array has no effect. */
        getBones(): GArray
        getSlot(): null | SpineSlotData
        setSlot(v: SpineSlotData): void
        
        /** The mode for positioning the first bone on the path. */
        getPositionMode(): SpineConstant.PositionMode
        setPositionMode(v: SpineConstant.PositionMode): void
        
        /** The mode for positioning the bones after the first bone on the path. */
        getSpacingMode(): SpineConstant.SpacingMode
        setSpacingMode(v: SpineConstant.SpacingMode): void
        
        /** The mode for adjusting the rotation of the bones. */
        getRotateMode(): SpineConstant.RotateMode
        setRotateMode(v: SpineConstant.RotateMode): void
        
        /** An offset added to the constrained bone rotation. */
        getOffsetRotation(): float64
        setOffsetRotation(v: float64): void
        getSetupPose(): null | SpinePathConstraintPose
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpinePathConstraintData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpinePathConstraintData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpinePathConstraintPose extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpinePathConstraintPose extends __NameMapSpineObjectWrapper {
        get_position: "getPosition";
        set_position: "setPosition";
        get_spacing: "getSpacing";
        set_spacing: "setSpacing";
        get_mix_rotate: "getMixRotate";
        set_mix_rotate: "setMixRotate";
        get_mix_x: "getMixX";
        set_mix_x: "setMixX";
        get_mix_y: "getMixY";
        set_mix_y: "setMixY";
    }
    /** Stores a pose for a path constraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinepathconstraintpose.html  
     */
    class SpinePathConstraintPose extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the position along the path. */
        getPosition(): float64
        
        /** Sets the position along the path. */
        setPosition(value: float64): void
        
        /** Returns the spacing between bones. */
        getSpacing(): float64
        
        /** Sets the spacing between bones. */
        setSpacing(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained rotation. */
        getMixRotate(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained rotation. */
        setMixRotate(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained translation X. */
        getMixX(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained translation X. */
        setMixX(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained translation Y. */
        getMixY(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained translation Y. */
        setMixY(value: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpinePathConstraintPose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpinePathConstraintPose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpinePhysicsConstraint extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpinePhysicsConstraint extends __NameMapSpineObjectWrapper {
        get_data: "getData";
        get_bone: "getBone";
        set_bone: "setBone";
        get_pose: "getPose";
        get_applied_pose: "getAppliedPose";
    }
    /** Stores the current pose for a physics constraint that applies physics to bones.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinephysicsconstraint.html  
     */
    class SpinePhysicsConstraint extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Updates the physics constraint. The physics parameter determines how physics are applied. See [enum SpineConstant.Physics]. */
        update(skeleton: SpineSkeleton, physics: SpineConstant.Physics): void
        
        /** Returns the data for this physics constraint. */
        getData(): null | SpinePhysicsConstraintData
        
        /** Returns the bone constrained by this physics constraint. */
        getBone(): null | SpineBonePose
        
        /** Sets the bone constrained by this physics constraint. */
        setBone(v: SpineBonePose): void
        
        /** Returns the current pose for this physics constraint. */
        getPose(): null | SpinePhysicsConstraintPose
        
        /** Returns the applied pose for this physics constraint. */
        getAppliedPose(): null | SpinePhysicsConstraintPose
        
        /** Resets the physics constraint. */
        reset(skeleton: SpineSkeleton): void
        
        /** Translates the physics constraint so next update forces are applied as if the bone moved an additional amount in world space. */
        translate(x: float64, y: float64): void
        
        /** Rotates the physics constraint so next update forces are applied as if the bone rotated around the specified point in world space. */
        rotate(x: float64, y: float64, degrees: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpinePhysicsConstraint;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpinePhysicsConstraint;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpinePhysicsConstraintData extends __RPCMapSpineConstraintData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpinePhysicsConstraintData extends __NameMapSpineConstraintData {
        get_bone: "getBone";
        get_x: "getX";
        get_y: "getY";
        get_rotate: "getRotate";
        get_scale_x: "getScaleX";
        get_shear_x: "getShearX";
        get_limit: "getLimit";
        get_step: "getStep";
        get_scale_y_mode: "getScaleYMode";
        set_scale_y_mode: "setScaleYMode";
        is_inertia_global: "isInertiaGlobal";
        is_strength_global: "isStrengthGlobal";
        is_damping_global: "isDampingGlobal";
        is_mass_global: "isMassGlobal";
        is_wind_global: "isWindGlobal";
        is_gravity_global: "isGravityGlobal";
        is_mix_global: "isMixGlobal";
        get_setup_pose: "getSetupPose";
    }
    /** Stores the setup pose for a PhysicsConstraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinephysicsconstraintdata.html  
     */
    class SpinePhysicsConstraintData extends SpineConstraintData {
        constructor(identifier?: any)
        /** Returns the bone constrained by this physics constraint. */
        getBone(): null | SpineBoneData
        
        /** Returns the X offset for the physics constraint. */
        getX(): float64
        
        /** Returns the Y offset for the physics constraint. */
        getY(): float64
        
        /** Returns the rotation offset for the physics constraint. */
        getRotate(): float64
        
        /** Returns the X scale for the physics constraint. */
        getScaleX(): float64
        
        /** Returns the X shear for the physics constraint. */
        getShearX(): float64
        
        /** Returns the limit for the physics constraint. */
        getLimit(): float64
        
        /** Returns the step value for the physics simulation. */
        getStep(): float64
        
        /** Returns how scaleY changes when the physics constraint changes scaleX. */
        getScaleYMode(): SpineConstant.ScaleYMode
        
        /** Sets how scaleY changes when the physics constraint changes scaleX. */
        setScaleYMode(v: SpineConstant.ScaleYMode): void
        
        /** Returns whether inertia is applied globally. */
        isInertiaGlobal(): boolean
        
        /** Returns whether strength is applied globally. */
        isStrengthGlobal(): boolean
        
        /** Returns whether damping is applied globally. */
        isDampingGlobal(): boolean
        
        /** Returns whether mass is applied globally. */
        isMassGlobal(): boolean
        
        /** Returns whether wind is applied globally. */
        isWindGlobal(): boolean
        
        /** Returns whether gravity is applied globally. */
        isGravityGlobal(): boolean
        
        /** Returns whether mix is applied globally. */
        isMixGlobal(): boolean
        
        /** Returns the setup pose for this physics constraint data. */
        getSetupPose(): null | SpinePhysicsConstraintPose
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpinePhysicsConstraintData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpinePhysicsConstraintData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpinePhysicsConstraintPose extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpinePhysicsConstraintPose extends __NameMapSpineObjectWrapper {
        get_inertia: "getInertia";
        set_inertia: "setInertia";
        get_strength: "getStrength";
        set_strength: "setStrength";
        get_damping: "getDamping";
        set_damping: "setDamping";
        get_mass_inverse: "getMassInverse";
        set_mass_inverse: "setMassInverse";
        get_wind: "getWind";
        set_wind: "setWind";
        get_gravity: "getGravity";
        set_gravity: "setGravity";
        get_mix: "getMix";
        set_mix: "setMix";
    }
    /** Stores a pose for a physics constraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinephysicsconstraintpose.html  
     */
    class SpinePhysicsConstraintPose extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the inertia value for the physics constraint. */
        getInertia(): float64
        
        /** Sets the inertia value for the physics constraint. */
        setInertia(value: float64): void
        
        /** Returns the strength value for the physics constraint. */
        getStrength(): float64
        
        /** Sets the strength value for the physics constraint. */
        setStrength(value: float64): void
        
        /** Returns the damping value for the physics constraint. */
        getDamping(): float64
        
        /** Sets the damping value for the physics constraint. */
        setDamping(value: float64): void
        
        /** Returns the inverse mass value for the physics constraint. */
        getMassInverse(): float64
        
        /** Sets the inverse mass value for the physics constraint. */
        setMassInverse(value: float64): void
        
        /** Returns the wind value for the physics constraint. */
        getWind(): float64
        
        /** Sets the wind value for the physics constraint. */
        setWind(value: float64): void
        
        /** Returns the gravity value for the physics constraint. */
        getGravity(): float64
        
        /** Sets the gravity value for the physics constraint. */
        setGravity(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained poses. */
        getMix(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained poses. */
        setMix(value: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpinePhysicsConstraintPose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpinePhysicsConstraintPose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSkeleton extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSkeleton extends __NameMapRefCounted {
        update_world_transform: "updateWorldTransform";
        set_to_setup_pose: "setToSetupPose";
        set_bones_to_setup_pose: "setBonesToSetupPose";
        set_slots_to_setup_pose: "setSlotsToSetupPose";
        find_bone: "findBone";
        find_slot: "findSlot";
        set_skin_by_name: "setSkinByName";
        set_skin: "setSkin";
        get_attachment_by_slot_name: "getAttachmentBySlotName";
        get_attachment_by_slot_index: "getAttachmentBySlotIndex";
        set_attachment: "setAttachment";
        find_ik_constraint: "findIkConstraint";
        find_transform_constraint: "findTransformConstraint";
        find_path_constraint: "findPathConstraint";
        find_physics_constraint: "findPhysicsConstraint";
        find_slider: "findSlider";
        get_bounds: "getBounds";
        get_root_bone: "getRootBone";
        get_data: "getData";
        get_bones: "getBones";
        get_slots: "getSlots";
        get_draw_order: "getDrawOrder";
        get_ik_constraints: "getIkConstraints";
        get_path_constraints: "getPathConstraints";
        get_transform_constraints: "getTransformConstraints";
        get_sliders: "getSliders";
        get_skin: "getSkin";
        get_color: "getColor";
        set_color: "setColor";
        set_position: "setPosition";
        get_x: "getX";
        set_x: "setX";
        get_y: "getY";
        set_y: "setY";
        get_scale_x: "getScaleX";
        set_scale_x: "setScaleX";
        get_scale_y: "getScaleY";
        set_scale_y: "setScaleY";
        get_time: "getTime";
        set_time: "setTime";
        physics_translate: "physicsTranslate";
        physics_rotate: "physicsRotate";
    }
    /** Stores the current pose for a skeleton.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineskeleton.html  
     */
    class SpineSkeleton extends RefCounted {
        constructor(identifier?: any)
        /** Updates the world transform for each bone and applies all constraints.  
         *  See [url]http://esotericsoftware.com/spine-runtime-skeletons#World-transforms[/url] in the Spine Runtimes Guide.  
         */
        updateWorldTransform(physics: SpineConstant.Physics): void
        
        /** Sets the bones, constraints, slots, and draw order to their setup pose values. */
        setToSetupPose(): void
        
        /** Sets the bones and constraints to their setup pose values. */
        setBonesToSetupPose(): void
        
        /** Sets the slots and draw order to their setup pose values. */
        setSlotsToSetupPose(): void
        
        /** Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it repeatedly. */
        findBone(boneName: string): null | SpineBone
        
        /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it repeatedly. */
        findSlot(slotName: string): null | SpineSlot
        
        /** Sets the skin by name used to look up attachments before looking in the default skin. If the skin is changed, `update_cache()` is called.  
         *  Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was no old skin, each slot's setup mode attachment is attached from the new skin.  
         *  After changing the skin, the visible attachments can be reset to those attached in the setup pose by calling `set_slots_to_setup_pose()`. Also, often `AnimationState.apply()` is called before the next time the skeleton is rendered to allow any attachment keys in the current animation(s) to hide or show attachments from the new skin.  
         */
        setSkinByName(skinName: string): void
        
        /** Sets the skin used to look up attachments before looking in the default skin. If the skin is changed, `update_cache()` is called.  
         *  Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was no old skin, each slot's setup mode attachment is attached from the new skin.  
         *  After changing the skin, the visible attachments can be reset to those attached in the setup pose by calling `set_slots_to_setup_pose()`. Also, often `AnimationState.apply()` is called before the next time the skeleton is rendered to allow any attachment keys in the current animation(s) to hide or show attachments from the new skin.  
         */
        setSkin(newSkin: SpineSkin): void
        
        /** Finds an attachment by looking in the active skin and default skin using the slot index and attachment name. First the skin is checked and if the attachment was not found, the default skin is checked.  
         *  See [url]http://esotericsoftware.com/spine-runtime-skins[/url] in the Spine Runtimes Guide.  
         */
        getAttachmentBySlotName(slotName: string, attachmentName: string): null | SpineAttachment
        
        /** Finds an attachment by looking in the active skin and default skin using the slot index and attachment name. First the skin is checked and if the attachment was not found, the default skin is checked.  
         *  See [url]http://esotericsoftware.com/spine-runtime-skins[/url] in the Spine Runtimes Guide.  
         */
        getAttachmentBySlotIndex(slotIndex: int64, attachmentName: string): null | SpineAttachment
        
        /** A convenience method to set an attachment by finding the slot with `find_slot()`, finding the attachment with `get_attachment()`, then setting the slot's attachment.  
         *  `attachmentName` may be null to clear the slot's attachment.  
         */
        setAttachment(slotName: string, attachmentName: string): void
        
        /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method than to call it repeatedly. */
        findIkConstraint(constraintName: string): null | SpineIkConstraint
        
        /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of this method than to call it repeatedly. */
        findTransformConstraint(constraintName: string): null | SpineTransformConstraint
        
        /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method than to call it repeatedly. */
        findPathConstraint(constraintName: string): null | SpinePathConstraint
        findPhysicsConstraint(constraintName: string): null | SpinePhysicsConstraint
        findSlider(sliderName: string): null | SpineSlider
        
        /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose. The bounds are relative to the `SpineSprite` that stores the skeleton. */
        getBounds(): Rect2
        
        /** Returns the root bone, or null if the skeleton has no bones. */
        getRootBone(): null | SpineBone
        
        /** The skeleton's setup pose data. */
        getData(): null | SpineSkeletonDataResource
        
        /** The skeleton's bones, sorted parent first. The root bone is always the first bone. Modifying the array has no effect. */
        getBones(): GArray
        
        /** The skeleton's slots. Modifying the array has no effect. */
        getSlots(): GArray
        
        /** The skeleton's slots in the order they should be drawn. The returned array may be modified to change the draw order. Modifying the array has no effect. */
        getDrawOrder(): GArray
        
        /** The skeleton's IK constraints. Modifying the array has no effect. */
        getIkConstraints(): GArray
        
        /** The skeleton's path constraints. Modifying the array has no effect. */
        getPathConstraints(): GArray
        
        /** The skeleton's transform constraints. Modifying the array has no effect. */
        getTransformConstraints(): GArray
        getSliders(): GArray
        
        /** The skeleton's current skin. */
        getSkin(): null | SpineSkin
        
        /** The color to tint all the skeleton's attachments. */
        getColor(): Color
        
        /** Sets the skeleton color. */
        setColor(v: Color): void
        
        /** Sets the skeleton position relative to the `SpineSprite`. */
        setPosition(position: Vector2): void
        
        /** Sets the skeleton X position, which is added to the root bone worldX position. Relative to the `SpineSprite`.  
         *  Bones that do not inherit translation are still affected by this property.  
         */
        getX(): float64
        
        /** Sets the skeleton X position, which is added to the root bone worldX position.  
         *  Bones that do not inherit translation are still affected by this property.  
         */
        setX(v: float64): void
        
        /** Sets the skeleton Y position, which is added to the root bone worldX position. Relative to the `SpineSprite`.  
         *  Bones that do not inherit translation are still affected by this property.  
         */
        getY(): float64
        
        /** Sets the skeleton Y position, which is added to the root bone worldX position.  
         *  Bones that do not inherit translation are still affected by this property.  
         */
        setY(v: float64): void
        
        /** Scales the entire skeleton on the X axis.  
         *  Bones that do not inherit scale are still affected by this property.  
         */
        getScaleX(): float64
        
        /** Scales the skeleton on the X axis. */
        setScaleX(v: float64): void
        
        /** Scales the entire skeleton on the Y axis.  
         *  Bones that do not inherit scale are still affected by this property.  
         */
        getScaleY(): float64
        
        /** Scales the skeleton on the Y axis. */
        setScaleY(v: float64): void
        getTime(): float64
        setTime(time: float64): void
        update(delta: float64): void
        physicsTranslate(x: float64, y: float64): void
        physicsRotate(x: float64, y: float64, degrees: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSkeleton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSkeleton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSkeletonDataResource extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSkeletonDataResource extends __NameMapResource {
        is_skeleton_data_loaded: "isSkeletonDataLoaded";
        find_bone: "findBone";
        find_slot: "findSlot";
        find_skin: "findSkin";
        find_event: "findEvent";
        find_animation: "findAnimation";
        find_ik_constraint_data: "findIkConstraintData";
        find_transform_constraint_data: "findTransformConstraintData";
        find_path_constraint_data: "findPathConstraintData";
        find_physics_constraint_data: "findPhysicsConstraintData";
        get_skeleton_name: "getSkeletonName";
        get_bones: "getBones";
        get_slots: "getSlots";
        get_skins: "getSkins";
        get_default_skin: "getDefaultSkin";
        set_default_skin: "setDefaultSkin";
        get_events: "getEvents";
        get_animations: "getAnimations";
        get_ik_constraints: "getIkConstraints";
        get_transform_constraints: "getTransformConstraints";
        get_path_constraints: "getPathConstraints";
        get_physics_constraints: "getPhysicsConstraints";
        get_x: "getX";
        get_y: "getY";
        get_width: "getWidth";
        get_height: "getHeight";
        get_version: "getVersion";
        get_hash: "getHash";
        get_images_path: "getImagesPath";
        get_audio_path: "getAudioPath";
        get_fps: "getFps";
        get_reference_scale: "getReferenceScale";
        set_reference_scale: "setReferenceScale";
        update_skeleton_data: "updateSkeletonData";
        _on_resources_reimported: "_onResourcesReimported";
        atlas_res: "atlasRes";
        skeleton_file_res: "skeletonFileRes";
        default_mix: "defaultMix";
        animation_mixes: "animationMixes";
        skeleton_data_changed: "skeletonDataChanged";
        _internal_spine_objects_invalidated: "_internalSpineObjectsInvalidated";
    }
    /** Resource used to spawn new `SpineSkeleton` instances.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineskeletondataresource.html  
     */
    class SpineSkeletonDataResource extends Resource {
        constructor(identifier?: any)
        /** Whether the skeleton data file and atlas have been successfully loaded. */
        isSkeletonDataLoaded(): boolean
        
        /** Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findBone(boneName: string): null | SpineBoneData
        
        /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findSlot(slotName: string): null | SpineSlotData
        
        /** Finds a skin by comparing each skin's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findSkin(skinName: string): null | SpineSkin
        
        /** Finds an event by comparing each events's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findEvent(eventDataName: string): null | SpineEventData
        
        /** Finds an animation by comparing each animation's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findAnimation(animationName: string): null | SpineAnimation
        
        /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findIkConstraintData(constraintName: string): null | SpineIkConstraintData
        
        /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findTransformConstraintData(constraintName: string): null | SpineTransformConstraintData
        
        /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method than to call it multiple times. */
        findPathConstraintData(constraintName: string): null | SpinePathConstraintData
        findPhysicsConstraintData(constraintName: string): null | SpinePhysicsConstraintData
        
        /** The skeleton's name, which by default is the name of the skeleton data file when possible, or null when a name hasn't been set. */
        getSkeletonName(): string
        
        /** The skeleton's bones, sorted parent first. The root bone is always the first bone. Modifying the array has no effect. */
        getBones(): GArray
        
        /** The skeleton's slots. Modifying the array has no effect. */
        getSlots(): GArray
        
        /** All skins, including the default skin. Modifying the array has no effect. */
        getSkins(): GArray
        
        /** The skeleton's default skin. By default this skin contains all attachments that were not in a skin in Spine.  
         *  See `Skeleton.get_attachment()`.  
         */
        getDefaultSkin(): null | SpineSkin
        
        /** Sets the skeleton's default skin. */
        setDefaultSkin(skin: SpineSkin): void
        
        /** The skeleton's events. Modifying the array has no effect. */
        getEvents(): GArray
        
        /** The skeleton's animations. Modifying the array has no effect. */
        getAnimations(): GArray
        
        /** The skeleton's IK constraints. Modifying the array has no effect. */
        getIkConstraints(): GArray
        
        /** The skeleton's transform constraints. Modifying the array has no effect. */
        getTransformConstraints(): GArray
        
        /** The skeleton's path constraints. Modifying the array has no effect. */
        getPathConstraints(): GArray
        getPhysicsConstraints(): GArray
        
        /** The X coordinate of the skeleton's axis aligned bounding box in the setup pose. */
        getX(): float64
        
        /** The Y coordinate of the skeleton's axis aligned bounding box in the setup pose. */
        getY(): float64
        
        /** The width of the skeleton's axis aligned bounding box in the setup pose. */
        getWidth(): float64
        
        /** The height of the skeleton's axis aligned bounding box in the setup pose. */
        getHeight(): float64
        
        /** The Spine version used to export the skeleton data, or null. */
        getVersion(): string
        
        /** The skeleton data hash. This value will change if any of the skeleton data has changed. */
        getHash(): string
        
        /** The path to the images directory as defined in Spine, or null if nonessential data was not exported. */
        getImagesPath(): string
        
        /** The path to the audio directory as defined in Spine, or null if nonessential data was not exported. */
        getAudioPath(): string
        
        /** The dopesheet FPS in Spine, or zero if nonessential data was not exported. */
        getFps(): float64
        getReferenceScale(): float64
        setReferenceScale(referenceScale: float64): void
        updateSkeletonData(): void
        _onResourcesReimported(resources: PackedStringArray | string[]): void
        get atlasRes(): null | SpineAtlasResource
        set atlasRes(value: null | SpineAtlasResource)
        get skeletonFileRes(): null | SpineSkeletonFileResource
        set skeletonFileRes(value: null | SpineSkeletonFileResource)
        get defaultMix(): float64
        set defaultMix(value: float64)
        get animationMixes(): GArray
        set animationMixes(value: GArray)
        readonly skeletonDataChanged: Signal<() => void>
        readonly _internalSpineObjectsInvalidated: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSkeletonDataResource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSkeletonDataResource;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSkeletonFileResource extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSkeletonFileResource extends __NameMapResource {
        load_from_file: "loadFromFile";
    }
    /** Resource wrapping a Spine skeleton .spine-json or .skel file. Used by `SpineSkeletonDataResource`.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineskeletonfileresource.html  
     */
    class SpineSkeletonFileResource extends Resource {
        constructor(identifier?: any)
        loadFromFile(path: string): GError
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSkeletonFileResource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSkeletonFileResource;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSkeletonFileResourceFormatLoader extends __RPCMapResourceFormatLoader {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSkeletonFileResourceFormatLoader extends __NameMapResourceFormatLoader {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineskeletonfileresourceformatloader.html */
    class SpineSkeletonFileResourceFormatLoader extends ResourceFormatLoader {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSkeletonFileResourceFormatLoader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSkeletonFileResourceFormatLoader;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSkeletonFileResourceFormatSaver extends __RPCMapResourceFormatSaver {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSkeletonFileResourceFormatSaver extends __NameMapResourceFormatSaver {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineskeletonfileresourceformatsaver.html */
    class SpineSkeletonFileResourceFormatSaver extends ResourceFormatSaver {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSkeletonFileResourceFormatSaver;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSkeletonFileResourceFormatSaver;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSkin extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSkin extends __NameMapSpineObjectWrapper {
        set_attachment: "setAttachment";
        get_attachment: "getAttachment";
        remove_attachment: "removeAttachment";
        find_names_for_slot: "findNamesForSlot";
        find_attachments_for_slot: "findAttachmentsForSlot";
        get_name: "getName";
        add_skin: "addSkin";
        copy_skin: "copySkin";
        get_attachments: "getAttachments";
        get_bones: "getBones";
        get_constraints: "getConstraints";
    }
    /** Stores attachments by slot index and placeholder name.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineskin.html  
     */
    class SpineSkin extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Adds an attachment to the skin for the specified slot index and placeholder. */
        setAttachment(slotIndex: int64, placeholder: string, attachment: SpineAttachment): void
        
        /** Returns the attachment for the specified slot index and placeholder, or null. */
        getAttachment(slotIndex: int64, placeholder: string): null | SpineAttachment
        
        /** Removes the attachment in the skin for the specified slot index and placeholder, if any. */
        removeAttachment(slotIndex: int64, placeholder: string): void
        
        /** Finds the skin keys for a given slot. The results are added to the passed array of names. Modifying the array has no effect. */
        findNamesForSlot(slotIndex: int64): GArray
        
        /** Returns all attachments for a slot index. Modifying the array has no effect. */
        findAttachmentsForSlot(slotIndex: int64): GArray
        
        /** The name of the skin. */
        getName(): string
        
        /** Adds all attachments, bones, and constraints from the specified skin to this skin. */
        addSkin(other: SpineSkin): void
        
        /** Adds all bones and constraints and copies of all attachments from the specified skin to this skin. Mesh attachments are not copied, instead a new linked mesh is created. The attachment copies can be modified without affecting the originals. */
        copySkin(other: SpineSkin): void
        
        /** Returns all attachments in this skin. Modifying the array has no effect. */
        getAttachments(): GArray
        
        /** Returns the bones associated with this skin. Modifying the array has no effect. */
        getBones(): GArray
        
        /** Returns the constraints associated with this skin. Modifying the array has no effect. */
        getConstraints(): GArray
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSkin;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSkin;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSkinEntry extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSkinEntry extends __NameMapRefCounted {
        get_slot_index: "getSlotIndex";
        get_name: "getName";
        get_attachment: "getAttachment";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spineskinentry.html */
    class SpineSkinEntry extends RefCounted {
        constructor(identifier?: any)
        getSlotIndex(): int64
        getName(): string
        getAttachment(): null | SpineAttachment
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSkinEntry;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSkinEntry;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSlider extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSlider extends __NameMapSpineObjectWrapper {
        get_data: "getData";
        get_bone: "getBone";
        set_bone: "setBone";
        get_pose: "getPose";
        get_applied_pose: "getAppliedPose";
        is_active: "isActive";
        set_active: "setActive";
    }
    /** A slider constraint for animating properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineslider.html  
     */
    class SpineSlider extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Updates the slider constraint. The physics parameter determines how physics are applied. See [enum SpineConstant.Physics]. */
        update(skeleton: SpineSkeleton, physics: SpineConstant.Physics): void
        
        /** Returns the data for this slider constraint. */
        getData(): null | SpineSliderData
        
        /** Returns the bone affected by this slider. */
        getBone(): null | SpineBone
        
        /** Sets the bone affected by this slider. */
        setBone(v: SpineBone): void
        
        /** Returns the current pose for this slider. */
        getPose(): null | SpineSliderPose
        
        /** Returns the applied pose for this slider. */
        getAppliedPose(): null | SpineSliderPose
        
        /** Returns whether this slider is active. */
        isActive(): boolean
        
        /** Sets whether this slider is active. */
        setActive(v: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSlider;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSlider;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSliderData extends __RPCMapSpineConstraintData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSliderData extends __NameMapSpineConstraintData {
        get_animation: "getAnimation";
        get_additive: "getAdditive";
        set_additive: "setAdditive";
        get_loop: "getLoop";
        set_loop: "setLoop";
        get_bone: "getBone";
        set_bone: "setBone";
        get_scale: "getScale";
        set_scale: "setScale";
        get_offset: "getOffset";
        set_offset: "setOffset";
        get_max: "getMax";
        set_max: "setMax";
        get_local: "getLocal";
        set_local: "setLocal";
        get_setup_pose: "getSetupPose";
    }
    /** Stores the setup pose for a Slider.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinesliderdata.html  
     */
    class SpineSliderData extends SpineConstraintData {
        constructor(identifier?: any)
        /** Returns the animation referenced by this slider. */
        getAnimation(): null | SpineAnimation
        
        /** Returns whether this slider uses additive blending. */
        getAdditive(): boolean
        
        /** Sets whether this slider uses additive blending. */
        setAdditive(value: boolean): void
        
        /** Returns whether this slider loops. */
        getLoop(): boolean
        
        /** Sets whether this slider loops. */
        setLoop(value: boolean): void
        
        /** Returns the bone data for this slider. */
        getBone(): null | SpineBoneData
        
        /** Sets the bone data for this slider. */
        setBone(value: SpineBoneData): void
        
        /** Returns the scale value for this slider. */
        getScale(): float64
        
        /** Sets the scale value for this slider. */
        setScale(value: float64): void
        
        /** Returns the offset value for this slider. */
        getOffset(): float64
        
        /** Sets the offset value for this slider. */
        setOffset(value: float64): void
        getMax(): float64
        setMax(value: float64): void
        getLocal(): boolean
        setLocal(value: boolean): void
        
        /** Returns the setup pose for this slider data. */
        getSetupPose(): null | SpineSliderPose
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSliderData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSliderData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSliderPose extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSliderPose extends __NameMapSpineObjectWrapper {
        get_time: "getTime";
        set_time: "setTime";
        get_mix: "getMix";
        set_mix: "setMix";
    }
    /** Stores a pose for a slider.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinesliderpose.html  
     */
    class SpineSliderPose extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the time position for this slider. */
        getTime(): float64
        
        /** Sets the time position for this slider. */
        setTime(value: float64): void
        
        /** Returns the mix value for this slider. */
        getMix(): float64
        
        /** Sets the mix value for this slider. */
        setMix(value: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSliderPose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSliderPose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSlot extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSlot extends __NameMapSpineObjectWrapper {
        set_to_setup_pose: "setToSetupPose";
        get_data: "getData";
        get_bone: "getBone";
        get_pose: "getPose";
        get_applied_pose: "getAppliedPose";
    }
    /** Stores a slot's current pose.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineslot.html  
     */
    class SpineSlot extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Sets this slot to the setup pose. */
        setToSetupPose(): void
        
        /** Returns the slot's setup pose data. */
        getData(): null | SpineSlotData
        
        /** Returns the bone this slot belongs to. */
        getBone(): null | SpineBone
        
        /** Returns the current pose for this slot, containing color, attachment, and deform data. */
        getPose(): null | SpineSlotPose
        getAppliedPose(): null | SpineSlotPose
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSlot;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSlot;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSlotData extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSlotData extends __NameMapSpineObjectWrapper {
        get_index: "getIndex";
        get_name: "getName";
        get_bone_data: "getBoneData";
        get_color: "getColor";
        set_color: "setColor";
        get_dark_color: "getDarkColor";
        set_dark_color: "setDarkColor";
        has_dark_color: "hasDarkColor";
        set_has_dark_color: "setHasDarkColor";
        get_attachment_name: "getAttachmentName";
        set_attachment_name: "setAttachmentName";
        get_blend_mode: "getBlendMode";
        set_blend_mode: "setBlendMode";
    }
    /** Stores the setup pose for a slot.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineslotdata.html  
     */
    class SpineSlotData extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the index of the slot in Skeleton.slots. */
        getIndex(): int64
        
        /** The name of the slot, which is unique across all slots in the skeleton. */
        getName(): string
        
        /** The bone this slot belongs to. */
        getBoneData(): null | SpineBoneData
        
        /** The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two color tinting. Modifying the color has no effect. */
        getColor(): Color
        setColor(v: Color): void
        
        /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark color's alpha is not used. Modifying the color has no effect. */
        getDarkColor(): Color
        setDarkColor(v: Color): void
        
        /** Whether the slot has a dark color. */
        hasDarkColor(): boolean
        setHasDarkColor(v: boolean): void
        
        /** The name of the attachment that is visible for this slot in the setup pose, or null if no attachment is visible. */
        getAttachmentName(): string
        setAttachmentName(v: string): void
        
        /** The blend mode for drawing the slot's attachment. */
        getBlendMode(): SpineConstant.BlendMode
        setBlendMode(v: SpineConstant.BlendMode): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSlotData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSlotData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSlotNode extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSlotNode extends __NameMapNode2D {
        _on_world_transforms_changed: "_onWorldTransformsChanged";
        normal_material: "normalMaterial";
        additive_material: "additiveMaterial";
        multiply_material: "multiplyMaterial";
        screen_material: "screenMaterial";
    }
    /** A node to insert other Node2D instances into the skeleton drawing order and override materials for a specific slot.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineslotnode.html  
     */
    class SpineSlotNode<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        _onWorldTransformsChanged(spineSprite: any): void
        get normalMaterial(): null | Material
        set normalMaterial(value: null | Material)
        get additiveMaterial(): null | Material
        set additiveMaterial(value: null | Material)
        get multiplyMaterial(): null | Material
        set multiplyMaterial(value: null | Material)
        get screenMaterial(): null | Material
        set screenMaterial(value: null | Material)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSlotNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSlotNode;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSlotPose extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSlotPose extends __NameMapSpineObjectWrapper {
        get_color: "getColor";
        set_color: "setColor";
        get_dark_color: "getDarkColor";
        set_dark_color: "setDarkColor";
        has_dark_color: "hasDarkColor";
        set_has_dark_color: "setHasDarkColor";
        get_attachment: "getAttachment";
        set_attachment: "setAttachment";
        get_sequence_index: "getSequenceIndex";
        set_sequence_index: "setSequenceIndex";
        get_deform: "getDeform";
        set_deform: "setDeform";
    }
    /** Stores a pose for a slot.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spineslotpose.html  
     */
    class SpineSlotPose extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns the color used to tint the slot's attachment. If dark color is set, this is used as the light color for two color tinting. */
        getColor(): Color
        
        /** Sets the color used to tint the slot's attachment. If dark color is set, this is used as the light color for two color tinting. */
        setColor(v: Color): void
        
        /** Returns the dark color used to tint the slot's attachment for two color tinting. The dark color's alpha is not used. */
        getDarkColor(): Color
        
        /** Sets the dark color used to tint the slot's attachment for two color tinting. The dark color's alpha is not used. */
        setDarkColor(v: Color): void
        
        /** Returns true if this slot has a dark color. */
        hasDarkColor(): boolean
        
        /** Sets whether this slot has a dark color. */
        setHasDarkColor(v: boolean): void
        
        /** Returns the current attachment for the slot, or null if the slot has no attachment. */
        getAttachment(): null | SpineAttachment
        
        /** Sets the slot's attachment and, if the attachment changed, resets sequence_index and clears the deform. The deform is not cleared if the old attachment has the same timeline attachment as the specified attachment. */
        setAttachment(v: SpineAttachment): void
        
        /** Returns the index of the texture region to display when the slot's attachment has a Sequence. -1 represents the setup index. */
        getSequenceIndex(): int64
        
        /** Sets the index of the texture region to display when the slot's attachment has a Sequence. -1 represents the setup index. */
        setSequenceIndex(v: int64): void
        
        /** Returns values to deform the slot's attachment. For an unweighted mesh, the entries are local positions for each vertex. For a weighted mesh, the entries are an offset for each vertex which will be added to the mesh's local vertex positions. */
        getDeform(): GArray
        
        /** Sets values to deform the slot's attachment. For an unweighted mesh, the entries are local positions for each vertex. For a weighted mesh, the entries are an offset for each vertex which will be added to the mesh's local vertex positions. */
        setDeform(v: GArray): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSlotPose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSlotPose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineSprite extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineSprite extends __NameMapNode2D {
        get_skeleton: "getSkeleton";
        get_animation_state: "getAnimationState";
        on_skeleton_data_changed: "onSkeletonDataChanged";
        get_global_bone_transform: "getGlobalBoneTransform";
        set_global_bone_transform: "setGlobalBoneTransform";
        get_time_scale: "getTimeScale";
        set_time_scale: "setTimeScale";
        update_skeleton: "updateSkeleton";
        new_skin: "newSkin";
        skeleton_data_res: "skeletonDataRes";
        update_mode: "updateMode";
        normal_material: "normalMaterial";
        additive_material: "additiveMaterial";
        multiply_material: "multiplyMaterial";
        screen_material: "screenMaterial";
        root_color: "rootColor";
        bones_color: "bonesColor";
        bones_thickness: "bonesThickness";
        regions_color: "regionsColor";
        meshes_color: "meshesColor";
        bounding_boxes: "boundingBoxes";
        bounding_boxes_color: "boundingBoxesColor";
        paths_color: "pathsColor";
        paths_clipping: "pathsClipping";
        animation_started: "animationStarted";
        animation_interrupted: "animationInterrupted";
        animation_ended: "animationEnded";
        animation_completed: "animationCompleted";
        animation_disposed: "animationDisposed";
        animation_event: "animationEvent";
        before_animation_state_update: "beforeAnimationStateUpdate";
        before_animation_state_apply: "beforeAnimationStateApply";
        before_world_transforms_change: "beforeWorldTransformsChange";
        world_transforms_changed: "worldTransformsChanged";
        _internal_spine_objects_invalidated: "_internalSpineObjectsInvalidated";
    }
    /** A node for animating and rendering a Spine skeleton to a 2D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinesprite.html  
     */
    class SpineSprite<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the skeleton. */
        getSkeleton(): null | SpineSkeleton
        
        /** Returns the animation state for animating the skeleton. */
        getAnimationState(): null | SpineAnimationState
        onSkeletonDataChanged(): void
        
        /** Returns the bone's global transform. */
        getGlobalBoneTransform(boneName: string): Transform2D
        
        /** Sets a bone's global transform. This must be done before the skeleton world transforms are computed. */
        setGlobalBoneTransform(boneName: string, globalTransform: Transform2D): void
        getTimeScale(): float64
        setTimeScale(v: float64): void
        
        /** Updates and applies the animation state, then updates the world transforms. Only needed for the manual processing mode. */
        updateSkeleton(delta: float64): void
        
        /** Creates a new skin. */
        newSkin(name: string): null | SpineSkin
        get skeletonDataRes(): null | SpineSkeletonDataResource
        set skeletonDataRes(value: null | SpineSkeletonDataResource)
        get updateMode(): int64
        set updateMode(value: int64)
        get normalMaterial(): null | Material
        set normalMaterial(value: null | Material)
        get additiveMaterial(): null | Material
        set additiveMaterial(value: null | Material)
        get multiplyMaterial(): null | Material
        set multiplyMaterial(value: null | Material)
        get screenMaterial(): null | Material
        set screenMaterial(value: null | Material)
        get root(): boolean
        set root(value: boolean)
        get rootColor(): Color
        set rootColor(value: Color)
        get bones(): boolean
        set bones(value: boolean)
        get bonesColor(): Color
        set bonesColor(value: Color)
        get bonesThickness(): float64
        set bonesThickness(value: float64)
        get regions(): boolean
        set regions(value: boolean)
        get regionsColor(): Color
        set regionsColor(value: Color)
        get meshes(): boolean
        set meshes(value: boolean)
        get meshesColor(): Color
        set meshesColor(value: Color)
        get boundingBoxes(): boolean
        set boundingBoxes(value: boolean)
        get boundingBoxesColor(): Color
        set boundingBoxesColor(value: Color)
        get paths(): boolean
        set paths(value: boolean)
        get pathsColor(): Color
        set pathsColor(value: Color)
        get clipping(): boolean
        set clipping(value: boolean)
        get pathsClipping(): Color
        set pathsClipping(value: Color)
        
        /** Invoked when this entry has been set as the current entry. {@link #end(TrackEntry)} will occur when this entry will no longer be applied. */
        readonly animationStarted: Signal<(spineSprite: GObject, animationState: GObject, trackEntry: GObject) => void>
        
        /** Invoked when another entry has replaced this entry as the current entry. This entry may continue being applied for mixing. */
        readonly animationInterrupted: Signal<(spineSprite: GObject, animationState: GObject, trackEntry: GObject) => void>
        
        /** Invoked when this entry will never be applied again. This only occurs if this entry has previously been set as the current entry (start was invoked). */
        readonly animationEnded: Signal<(spineSprite: GObject, animationState: GObject, trackEntry: GObject) => void>
        
        /** Invoked every time this entry's animation completes a loop. This may occur during mixing (after interrupt).  
         *  If this entry's `get_mixing_to()` is not null, this entry is mixing out (it is not the current entry).  
         *  Because this event is triggered at the end of `AnimationState.apply`, any animations set in response to the event won't be applied until the next time the AnimationState is applied.  
         */
        readonly animationCompleted: Signal<(spineSprite: GObject, animationState: GObject, trackEntry: GObject) => void>
        
        /** Invoked when this entry will be disposed. This may occur without the entry ever being set as the current entry.  
         *  References to the entry should not be kept after `dispose` is called, as it may be destroyed or reused.  
         */
        readonly animationDisposed: Signal<(spineSprite: GObject, animationState: GObject, trackEntry: GObject) => void>
        
        /** Invoked when this entry's animation triggers an event. This may occur during mixing (after interrupt), see `TrackEntry.get_event_threshold()`.  
         *  Because this event is triggered at the end of {@link AnimationState#apply(Skeleton)}, any animations set in response to the event won't be applied until the next time the AnimationState is applied.  
         */
        readonly animationEvent: Signal<(spineSprite: GObject, animationState: GObject, trackEntry: GObject, event: GObject) => void>
        
        /** Invoked before the animation state is updated. */
        readonly beforeAnimationStateUpdate: Signal<(spineSprite: GObject) => void>
        
        /** Invoked before the animation state is applied to the skeleton. */
        readonly beforeAnimationStateApply: Signal<(spineSprite: GObject) => void>
        
        /** Invoked before the world transforms are computed. */
        readonly beforeWorldTransformsChange: Signal<(spineSprite: GObject) => void>
        
        /** Invoked after the world transforms have been computed. */
        readonly worldTransformsChanged: Signal<(spineSprite: GObject) => void>
        readonly _internalSpineObjectsInvalidated: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineSprite;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineSprite;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineTimeline extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineTimeline extends __NameMapSpineObjectWrapper {
        get_frame_entries: "getFrameEntries";
        get_frame_count: "getFrameCount";
        get_frames: "getFrames";
        get_duration: "getDuration";
        get_property_ids: "getPropertyIds";
        get_type: "getType";
    }
    /** The base class for all timelines.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinetimeline.html  
     */
    class SpineTimeline extends SpineObjectWrapper {
        constructor(identifier?: any)
        apply(skeleton: SpineSkeleton, lastTime: float64, time: float64, events: GArray, alpha: float64, fromSetup: boolean, add: boolean, out_: boolean, appliedPose: boolean): void
        
        /** The number of entries stored per frame. */
        getFrameEntries(): int64
        
        /** The number of frames for this timeline. */
        getFrameCount(): int64
        
        /** The time in seconds and any other values for each frame. Modifying the array has no effect. */
        getFrames(): GArray
        
        /** The duration in seconds. */
        getDuration(): float64
        
        /** Uniquely encodes both the type of this timeline and the skeleton properties that it affects. Modifying the array has no effect. */
        getPropertyIds(): GArray
        
        /** The timeline's type encoded as a string. */
        getType(): string
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineTimeline;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineTimeline;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineTrackEntry extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineTrackEntry extends __NameMapSpineObjectWrapper {
        get_track_index: "getTrackIndex";
        get_animation: "getAnimation";
        get_previous: "getPrevious";
        get_loop: "getLoop";
        set_loop: "setLoop";
        get_additive: "getAdditive";
        set_additive: "setAdditive";
        get_reverse: "getReverse";
        set_reverse: "setReverse";
        get_shortest_rotation: "getShortestRotation";
        set_shortest_rotation: "setShortestRotation";
        get_delay: "getDelay";
        set_delay: "setDelay";
        get_track_time: "getTrackTime";
        set_track_time: "setTrackTime";
        get_track_end: "getTrackEnd";
        set_track_end: "setTrackEnd";
        get_animation_start: "getAnimationStart";
        set_animation_start: "setAnimationStart";
        get_animation_end: "getAnimationEnd";
        set_animation_end: "setAnimationEnd";
        get_animation_last: "getAnimationLast";
        set_animation_last: "setAnimationLast";
        get_animation_time: "getAnimationTime";
        get_time_scale: "getTimeScale";
        set_time_scale: "setTimeScale";
        get_alpha: "getAlpha";
        set_alpha: "setAlpha";
        get_event_threshold: "getEventThreshold";
        set_event_threshold: "setEventThreshold";
        get_mix_attachment_threshold: "getMixAttachmentThreshold";
        set_mix_attachment_threshold: "setMixAttachmentThreshold";
        get_mix_draw_order_threshold: "getMixDrawOrderThreshold";
        set_mix_draw_order_threshold: "setMixDrawOrderThreshold";
        get_alpha_attachment_threshold: "getAlphaAttachmentThreshold";
        set_alpha_attachment_threshold: "setAlphaAttachmentThreshold";
        get_next: "getNext";
        is_complete: "isComplete";
        get_mix_time: "getMixTime";
        set_mix_time: "setMixTime";
        get_mix_duration: "getMixDuration";
        set_mix_duration: "setMixDuration";
        set_mix_duration_and_delay: "setMixDurationAndDelay";
        get_mix_interpolation: "getMixInterpolation";
        set_mix_interpolation: "setMixInterpolation";
        get_mixing_from: "getMixingFrom";
        get_mixing_to: "getMixingTo";
        reset_rotation_directions: "resetRotationDirections";
        get_track_complete: "getTrackComplete";
        was_applied: "wasApplied";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spinetrackentry.html */
    class SpineTrackEntry extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** The index of the track where this track entry is either current or queued. */
        getTrackIndex(): int64
        
        /** The animation to apply for this track entry. */
        getAnimation(): null | SpineAnimation
        
        /** The animation queued to play before this animation, or null. previous makes up a doubly linked list. */
        getPrevious(): null | SpineTrackEntry
        
        /** If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its duration. */
        getLoop(): boolean
        setLoop(v: boolean): void
        getAdditive(): boolean
        setAdditive(v: boolean): void
        
        /** If true, the animation will be applied in reverse. Events are not fired when an animation is applied in reverse. */
        getReverse(): boolean
        setReverse(v: boolean): void
        
        /** If true, mixing rotation between tracks always uses the shortest rotation direction. If the rotation is animated, the shortest rotation direction may change during the mix.  
         *  If false, the shortest rotation direction is remembered when the mix starts and the same direction is used for the rest of the mix. Defaults to false.  
         */
        getShortestRotation(): boolean
        setShortestRotation(v: boolean): void
        
        /** Seconds to postpone playing the animation. When this track entry is the current track entry, delay postpones incrementing the `get_track_time()`. When this track entry is queued, delay is the time from the start of the previous animation to when this track entry will become the current track entry (ie when the previous track entry `get_track_time()` >= this track entry's delay).  
         *  `get_time_scale()` affects the delay.  
         *  When using `AnimationState.add_animation()` with a delay <= 0, the delay is set using the mix duration from the skeleton data resource. If mix duration is set afterward, the delay may need to be adjusted.  
         */
        getDelay(): float64
        setDelay(v: float64): void
        
        /** Current time in seconds this track entry has been the current track entry. The track time determines `get_animation_time()`. The track time can be set to start the animation at a time other than 0, without affecting looping. */
        getTrackTime(): float64
        setTrackTime(v: float64): void
        
        /** The track time in seconds when this animation will be removed from the track. Defaults to the highest possible float value, meaning the animation will be applied until a new animation is set or the track is cleared. If the track end time is reached, no other animations are queued for playback, and mixing from any previous animations is complete, then the properties keyed by the animation are set to the setup pose and the track is cleared.  
         *  It may be desired to use {@link AnimationState#addEmptyAnimation(int, float, float)} rather than have the animation abruptly cease being applied.  
         */
        getTrackEnd(): float64
        setTrackEnd(v: float64): void
        
        /** Seconds when this animation starts, both initially and after looping. Defaults to 0.  
         *  When changing the animation start time, it often makes sense to set animation last to the same value to prevent timeline keys before the start time from triggering.  
         */
        getAnimationStart(): float64
        setAnimationStart(v: float64): void
        
        /** Seconds for the last frame of this animation. Non-looping animations won't play past this time. Looping animations will loop back to animation start at this time. Defaults to the animation duration. */
        getAnimationEnd(): float64
        setAnimationEnd(v: float64): void
        
        /** The time in seconds this animation was last applied. Some timelines use this for one-time triggers. Eg, when this animation is applied, event timelines will fire all events between the `animationLast` time (exclusive) and `animationTime`(inclusive). Defaults to -1 to ensure triggers on frame 0 happen the first time this animation is applied. */
        getAnimationLast(): float64
        setAnimationLast(v: float64): void
        
        /** Uses `get_track_time()` to compute the animation time. When the track time is 0, the animation time is equal to the animation start time.  
         *  The animation time is between `get_animation_start()` and `get_animation_end()`, except if this track entry is non-looping and `get_animation_end()` is >= to the animation duration, then animation time continues to increase past `get_animation_end()`.  
         */
        getAnimationTime(): float64
        
        /** Multiplier for the delta time when this track entry is updated, causing time for this animation to pass slower or faster. Defaults to 1.  
         *  Values < 0 are not supported. To play an animation in reverse, use {@link #getReverse()}.  
         *  `get_mix_time()` is not affected by track entry time scale, so `get_mix_duration()` may need to be adjusted to match the animation speed.  
         *  When using `AnimationState.add_animation()`with a delay <= 0, the delay is set using the mix duration from the skeleton data resource, assuming time scale to be 1. If the time scale is not 1, the delay may need to be adjusted.  
         *  See `AnimationState.get_time_scale()` for affecting all animations.  
         */
        getTimeScale(): float64
        setTimeScale(v: float64): void
        
        /** Values < 1 mix this animation with the skeleton's current pose (usually the pose resulting from lower tracks). Defaults to 1, which overwrites the skeleton's current pose with this animation.  
         *  Typically track 0 is used to completely pose the skeleton, then alpha is used on higher tracks. It doesn't make sense to use alpha on track 0 if the skeleton pose is from the last frame render.  
         */
        getAlpha(): float64
        setAlpha(v: float64): void
        
        /** When the mix percentage (`get_mix_time()` / `get_mix_duration()`) is less than the event threshold, event timelines are applied while this animation is being mixed out. Defaults to 0, so event timelines are not applied while this animation is being mixed out. */
        getEventThreshold(): float64
        setEventThreshold(v: float64): void
        getMixAttachmentThreshold(): float64
        setMixAttachmentThreshold(v: float64): void
        getMixDrawOrderThreshold(): float64
        setMixDrawOrderThreshold(v: float64): void
        getAlphaAttachmentThreshold(): float64
        setAlphaAttachmentThreshold(v: float64): void
        
        /** The animation queued to start after this animation, or null if there is none. Next makes up a doubly linked list.  
         *  See `AnimationState.clear_next()` to truncate the list.  
         */
        getNext(): null | SpineTrackEntry
        
        /** Returns true if at least one loop has been completed. */
        isComplete(): boolean
        
        /** Seconds from 0 to the mix duration when mixing from the previous animation to this animation. May be slightly more than mix duration when the mix is complete. */
        getMixTime(): float64
        setMixTime(v: float64): void
        
        /** Seconds for mixing from the previous animation to this animation. Defaults to the value provided by the skeleton data resource based on the animation before this animation (if any).  
         *  A mix duration of 0 still mixes out over one frame to provide the track entry being mixed out a chance to revert the properties it was animating. The mix duration can be set manually rather than use the value from the skeleton data resource. In that case, themix duration can be set for a new track entry only before `AnimationState#update()` is first called.  
         *  When using `AnimationState.add_animation()` with a delay <= 0, the delay is set using the mix duration from the skeleton data resource. If mix duration is set afterward, the delay may need to be adjusted.  
         */
        getMixDuration(): float64
        setMixDuration(v: float64): void
        setMixDurationAndDelay(v: float64, delay: float64): void
        getMixInterpolation(): SpineConstant.MixInterpolation
        setMixInterpolation(mixInterpolation: SpineConstant.MixInterpolation): void
        
        /** The track entry for the previous animation when mixing from the previous animation to this animation, or null if no mixing is currently occuring. When mixing from multiple animations, mixing from makes up a linked list. */
        getMixingFrom(): null | SpineTrackEntry
        
        /** The track entry for the next animation when mixing from this animation to the next animation, or null if no mixing is currently occuring. When mixing to multiple animations, mixing to makes up a linked list. */
        getMixingTo(): null | SpineTrackEntry
        
        /** Resets the rotation directions for mixing this entry's rotate timelines. This can be useful to avoid bones rotating the long way around when using {@link #alpha} and starting animations on other tracks.  
         *  Mixing with `MixBlend.replace` involves finding a rotation between two others, which has two possible solutions: the short way or the long way around. The two rotations likely change over time, so which direction is the short or long way also changes. If the short way was always chosen, bones would flip to the other side when that direction became the long way. TrackEntry chooses the short way the first time it is applied and remembers that direction.  
         */
        resetRotationDirections(): void
        
        /** If this track entry is non-looping, the track time in seconds when `get_animation_end()` is reached, or the current `get_track_time()` if it has already been reached. If this track entry is looping, the track time when this animation will reach its next `get_animation_end()` (the next loop completion). */
        getTrackComplete(): float64
        wasApplied(): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineTrackEntry;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineTrackEntry;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineTransformConstraint extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineTransformConstraint extends __NameMapSpineObjectWrapper {
        get_data: "getData";
        get_bones: "getBones";
        get_source: "getSource";
        set_source: "setSource";
        get_pose: "getPose";
        get_applied_pose: "getAppliedPose";
        is_active: "isActive";
        set_active: "setActive";
    }
    /** Stores the current pose for a transform constraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinetransformconstraint.html  
     */
    class SpineTransformConstraint extends SpineObjectWrapper {
        constructor(identifier?: any)
        update(skeleton: SpineSkeleton): void
        
        /** The transform constraint's setup pose data. */
        getData(): null | SpineTransformConstraintData
        
        /** The bones that will be modified by this transform constraint. Modifying the array has no effect. */
        getBones(): GArray
        getSource(): null | SpineBone
        setSource(v: SpineBone): void
        getPose(): null | SpineTransformConstraintPose
        getAppliedPose(): null | SpineTransformConstraintPose
        isActive(): boolean
        setActive(v: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineTransformConstraint;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineTransformConstraint;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineTransformConstraintData extends __RPCMapSpineConstraintData {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineTransformConstraintData extends __NameMapSpineConstraintData {
        get_bones: "getBones";
        get_source: "getSource";
        get_offset_rotation: "getOffsetRotation";
        get_offset_x: "getOffsetX";
        get_offset_y: "getOffsetY";
        get_offset_scale_x: "getOffsetScaleX";
        get_offset_scale_y: "getOffsetScaleY";
        get_offset_shear_y: "getOffsetShearY";
        is_local_source: "isLocalSource";
        is_local_target: "isLocalTarget";
        get_setup_pose: "getSetupPose";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_spinetransformconstraintdata.html */
    class SpineTransformConstraintData extends SpineConstraintData {
        constructor(identifier?: any)
        /** The bones that will be modified by this transform constraint. Modifying the array has no effect. */
        getBones(): GArray
        getSource(): null | SpineBoneData
        
        /** An offset added to the constrained bone rotation. */
        getOffsetRotation(): float64
        
        /** An offset added to the constrained bone X translation. */
        getOffsetX(): float64
        
        /** An offset added to the constrained bone Y translation. */
        getOffsetY(): float64
        
        /** An offset added to the constrained bone scaleX. */
        getOffsetScaleX(): float64
        
        /** An offset added to the constrained bone scaleY. */
        getOffsetScaleY(): float64
        
        /** An offset added to the constrained bone shearY. */
        getOffsetShearY(): float64
        isLocalSource(): boolean
        isLocalTarget(): boolean
        getSetupPose(): null | SpineTransformConstraintPose
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineTransformConstraintData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineTransformConstraintData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpineTransformConstraintPose extends __RPCMapSpineObjectWrapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpineTransformConstraintPose extends __NameMapSpineObjectWrapper {
        get_mix_rotate: "getMixRotate";
        set_mix_rotate: "setMixRotate";
        get_mix_x: "getMixX";
        set_mix_x: "setMixX";
        get_mix_y: "getMixY";
        set_mix_y: "setMixY";
        get_mix_scale_x: "getMixScaleX";
        set_mix_scale_x: "setMixScaleX";
        get_mix_scale_y: "getMixScaleY";
        set_mix_scale_y: "setMixScaleY";
        get_mix_shear_y: "getMixShearY";
        set_mix_shear_y: "setMixShearY";
    }
    /** Stores a pose for a transform constraint.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spinetransformconstraintpose.html  
     */
    class SpineTransformConstraintPose extends SpineObjectWrapper {
        constructor(identifier?: any)
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained rotation. */
        getMixRotate(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained rotation. */
        setMixRotate(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained translation X. */
        getMixX(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained translation X. */
        setMixX(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained translation Y. */
        getMixY(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained translation Y. */
        setMixY(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained scale X. */
        getMixScaleX(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained scale X. */
        setMixScaleX(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained scale Y. */
        getMixScaleY(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained scale Y. */
        setMixScaleY(value: float64): void
        
        /** Returns a percentage (0-1) that controls the mix between the constrained and unconstrained shear Y. */
        getMixShearY(): float64
        
        /** Sets a percentage (0-1) that controls the mix between the constrained and unconstrained shear Y. */
        setMixShearY(value: float64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpineTransformConstraintPose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpineTransformConstraintPose;
    }
    namespace SplitContainer {
        enum DraggerVisibility {
            DraggerVisible = 0,
            DraggerHidden = 1,
            DraggerHiddenCollapsed = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSplitContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSplitContainer extends __NameMapContainer {
        clamp_split_offset: "clampSplitOffset";
        get_drag_area_control: "getDragAreaControl";
        split_offset: "splitOffset";
        dragging_enabled: "draggingEnabled";
        dragger_visibility: "draggerVisibility";
        touch_dragger_enabled: "touchDraggerEnabled";
        drag_area_margin_begin: "dragAreaMarginBegin";
        drag_area_margin_end: "dragAreaMarginEnd";
        drag_area_offset: "dragAreaOffset";
        drag_area_highlight_in_editor: "dragAreaHighlightInEditor";
        drag_started: "dragStarted";
        drag_ended: "dragEnded";
    }
    /** A container that splits two child controls horizontally or vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_splitcontainer.html  
     */
    class SplitContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** Clamps the [member split_offset] value to not go outside the currently possible minimal and maximum values. */
        clampSplitOffset(): void
        
        /** Returns the drag area [Control]. For example, you can move a pre-configured button into the drag area [Control] so that it rides along with the split bar. Try setting the [Button] anchors to `center` prior to the `reparent()` call.  
         *    
         *      
         *  **Note:** The drag area [Control] is drawn over the [SplitContainer]'s children, so [CanvasItem] draw objects called from the [Control] and children added to the [Control] will also appear over the [SplitContainer]'s children. Try setting [member Control.mouse_filter] of custom children to [constant Control.MOUSE_FILTER_IGNORE] to prevent blocking the mouse from dragging if desired.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash.  
         */
        getDragAreaControl(): null | Control
        
        /** The initial offset of the splitting between the two [Control]s, with `0` being at the end of the first [Control]. */
        get splitOffset(): int64
        set splitOffset(value: int64)
        
        /** If `true`, the dragger will be disabled and the children will be sized as if the [member split_offset] was `0`. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        
        /** Enables or disables split dragging. */
        get draggingEnabled(): boolean
        set draggingEnabled(value: boolean)
        
        /** Determines the dragger's visibility. This property does not determine whether dragging is enabled or not. Use [member dragging_enabled] for that. */
        get draggerVisibility(): int64
        set draggerVisibility(value: int64)
        
        /** If `true`, the [SplitContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HSplitContainer] and [VSplitContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
        
        /** If `true`, a touch-friendly drag handle will be enabled for better usability on smaller screens. Unlike the standard grabber, this drag handle overlaps the [SplitContainer]'s children and does not affect their minimum separation. The standard grabber will no longer be drawn when this option is enabled. */
        get touchDraggerEnabled(): boolean
        set touchDraggerEnabled(value: boolean)
        
        /** Reduces the size of the drag area and split bar [theme_item split_bar_background] at the beginning of the container. */
        get dragAreaMarginBegin(): int64
        set dragAreaMarginBegin(value: int64)
        
        /** Reduces the size of the drag area and split bar [theme_item split_bar_background] at the end of the container. */
        get dragAreaMarginEnd(): int64
        set dragAreaMarginEnd(value: int64)
        
        /** Shifts the drag area in the axis of the container to prevent the drag area from overlapping the [ScrollBar] or other selectable [Control] of a child node. */
        get dragAreaOffset(): int64
        set dragAreaOffset(value: int64)
        
        /** Highlights the drag area [Rect2] so you can see where it is during development. The drag area is gold if [member dragging_enabled] is `true`, and red if `false`. */
        get dragAreaHighlightInEditor(): boolean
        set dragAreaHighlightInEditor(value: boolean)
        
        /** Emitted when the dragger is dragged by user. */
        readonly dragged: Signal<(offset: int64) => void>
        
        /** Emitted when the user starts dragging. */
        readonly dragStarted: Signal<() => void>
        
        /** Emitted when the user ends dragging. */
        readonly dragEnded: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSplitContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSplitContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpotLight3D extends __RPCMapLight3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpotLight3D extends __NameMapLight3D {
        spot_range: "spotRange";
        spot_attenuation: "spotAttenuation";
        spot_angle: "spotAngle";
        spot_angle_attenuation: "spotAngleAttenuation";
    }
    /** A spotlight, such as a reflector spotlight or a lantern.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spotlight3d.html  
     */
    class SpotLight3D<Map extends NodePathMap = any> extends Light3D<Map> {
        constructor(identifier?: any)
        /** The maximal range that can be reached by the spotlight. Note that the effectively lit area may appear to be smaller depending on the [member spot_attenuation] in use. No matter the [member spot_attenuation] in use, the light will never reach anything outside this range.  
         *      
         *  **Note:** [member spot_range] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         */
        get spotRange(): float64
        set spotRange(value: float64)
        
        /** Controls the distance attenuation function for spotlights.  
         *  A value of `0.0` will maintain a constant brightness through most of the range, but smoothly attenuate the light at the edge of the range. Use a value of `2.0` for physically accurate lights as it results in the proper inverse square attenutation.  
         *      
         *  **Note:** Setting attenuation to `2.0` or higher may result in distant objects receiving minimal light, even within range. For example, with a range of `4096`, an object at `100` units is attenuated by a factor of `0.0001`. With a default brightness of `1`, the light would not be visible at that distance.  
         *      
         *  **Note:** Using negative or values higher than `10.0` may lead to unexpected results.  
         */
        get spotAttenuation(): float64
        set spotAttenuation(value: float64)
        
        /** The spotlight's angle in degrees. This is the angular radius, meaning the angle from the -Z axis, the cone's center, to the edge of the cone. The default angular radius of 45 degrees corresponds to a cone with an angular diameter of 90 degrees.  
         *      
         *  **Note:** [member spot_angle] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         */
        get spotAngle(): float64
        set spotAngle(value: float64)
        
        /** The spotlight's  *angular*  attenuation curve. See also [member spot_attenuation]. */
        get spotAngleAttenuation(): float64
        set spotAngleAttenuation(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpotLight3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpotLight3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpringArm3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpringArm3D extends __NameMapNode3D {
        get_hit_length: "getHitLength";
        add_excluded_object: "addExcludedObject";
        remove_excluded_object: "removeExcludedObject";
        clear_excluded_objects: "clearExcludedObjects";
        collision_mask: "collisionMask";
        spring_length: "springLength";
    }
    /** A 3D raycast that dynamically moves its children near the collision point.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_springarm3d.html  
     */
    class SpringArm3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the spring arm's current length. */
        getHitLength(): float64
        
        /** Adds the [PhysicsBody3D] object with the given [RID] to the list of [PhysicsBody3D] objects excluded from the collision check. */
        addExcludedObject(rID: Rid): void
        
        /** Removes the given [RID] from the list of [PhysicsBody3D] objects excluded from the collision check. */
        removeExcludedObject(rID: Rid): boolean
        
        /** Clears the list of [PhysicsBody3D] objects excluded from the collision check. */
        clearExcludedObjects(): void
        
        /** The layers against which the collision check shall be done. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The [Shape3D] to use for the SpringArm3D.  
         *  When the shape is set, the SpringArm3D will cast the [Shape3D] on its z axis instead of performing a ray cast.  
         */
        get shape(): null | Shape3D
        set shape(value: null | Shape3D)
        
        /** The maximum extent of the SpringArm3D. This is used as a length for both the ray and the shape cast used internally to calculate the desired position of the SpringArm3D's child nodes.  
         *  To know more about how to perform a shape cast or a ray cast, please consult the [PhysicsDirectSpaceState3D] documentation.  
         */
        get springLength(): float64
        set springLength(value: float64)
        
        /** When the collision check is made, a candidate length for the SpringArm3D is given.  
         *  The margin is then subtracted to this length and the translation is applied to the child objects of the SpringArm3D.  
         *  This margin is useful for when the SpringArm3D has a [Camera3D] as a child node: without the margin, the [Camera3D] would be placed on the exact point of collision, while with the margin the [Camera3D] would be placed close to the point of collision.  
         */
        get margin(): float64
        set margin(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpringArm3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpringArm3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpringBoneCollision3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpringBoneCollision3D extends __NameMapNode3D {
        get_skeleton: "getSkeleton";
        bone_name: "boneName";
        position_offset: "positionOffset";
        rotation_offset: "rotationOffset";
    }
    /** A base class of the collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_springbonecollision3d.html  
     */
    class SpringBoneCollision3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Get parent [Skeleton3D] node of the parent [SpringBoneSimulator3D] if found. */
        getSkeleton(): null | Skeleton3D
        
        /** The name of the attached bone. */
        get boneName(): StringName
        set boneName(value: StringName)
        
        /** The index of the attached bone. */
        get bone(): int64
        set bone(value: int64)
        
        /** The offset of the position from [Skeleton3D]'s [member bone] pose position. */
        get positionOffset(): Vector3
        set positionOffset(value: Vector3)
        
        /** The offset of the rotation from [Skeleton3D]'s [member bone] pose rotation. */
        get rotationOffset(): Quaternion
        set rotationOffset(value: Quaternion)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpringBoneCollision3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpringBoneCollision3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpringBoneCollisionCapsule3D extends __RPCMapSpringBoneCollision3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpringBoneCollisionCapsule3D extends __NameMapSpringBoneCollision3D {
        mid_height: "midHeight";
    }
    /** A capsule shape collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_springbonecollisioncapsule3d.html  
     */
    class SpringBoneCollisionCapsule3D<Map extends NodePathMap = any> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
        /** The capsule's radius.  
         *      
         *  **Note:** The [member radius] of a capsule cannot be greater than half of its [member height]. Otherwise, the capsule becomes a sphere. If the [member radius] is greater than half of the [member height], the properties adjust to a valid value.  
         */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's full height, including the hemispheres.  
         *      
         *  **Note:** The [member height] of a capsule must be at least twice its [member radius]. Otherwise, the capsule becomes a sphere. If the [member height] is less than twice the [member radius], the properties adjust to a valid value.  
         */
        get height(): float64
        set height(value: float64)
        
        /** The capsule's height, excluding the hemispheres. This is the height of the central cylindrical part in the middle of the capsule, and is the distance between the centers of the two hemispheres. This is a wrapper for [member height]. */
        get midHeight(): float64
        set midHeight(value: float64)
        
        /** If `true`, the collision acts to trap the joint within the collision. */
        get inside(): boolean
        set inside(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpringBoneCollisionCapsule3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpringBoneCollisionCapsule3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpringBoneCollisionPlane3D extends __RPCMapSpringBoneCollision3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpringBoneCollisionPlane3D extends __NameMapSpringBoneCollision3D {
    }
    /** An infinite plane collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_springbonecollisionplane3d.html  
     */
    class SpringBoneCollisionPlane3D<Map extends NodePathMap = any> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpringBoneCollisionPlane3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpringBoneCollisionPlane3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpringBoneCollisionSphere3D extends __RPCMapSpringBoneCollision3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpringBoneCollisionSphere3D extends __NameMapSpringBoneCollision3D {
    }
    /** A sphere shape collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_springbonecollisionsphere3d.html  
     */
    class SpringBoneCollisionSphere3D<Map extends NodePathMap = any> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
        /** The sphere's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** If `true`, the collision acts to trap the joint within the collision. */
        get inside(): boolean
        set inside(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpringBoneCollisionSphere3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpringBoneCollisionSphere3D;
    }
    namespace SpringBoneSimulator3D {
        enum BoneDirection {
            BoneDirectionPlusX = 0,
            BoneDirectionMinusX = 1,
            BoneDirectionPlusY = 2,
            BoneDirectionMinusY = 3,
            BoneDirectionPlusZ = 4,
            BoneDirectionMinusZ = 5,
            BoneDirectionFromParent = 6,
        }
        enum CenterFrom {
            CenterFromWorldOrigin = 0,
            CenterFromNode = 1,
            CenterFromBone = 2,
        }
        enum RotationAxis {
            RotationAxisX = 0,
            RotationAxisY = 1,
            RotationAxisZ = 2,
            RotationAxisAll = 3,
            RotationAxisCustom = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpringBoneSimulator3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpringBoneSimulator3D extends __NameMapSkeletonModifier3D {
        set_root_bone_name: "setRootBoneName";
        get_root_bone_name: "getRootBoneName";
        set_root_bone: "setRootBone";
        get_root_bone: "getRootBone";
        set_end_bone_name: "setEndBoneName";
        get_end_bone_name: "getEndBoneName";
        set_end_bone: "setEndBone";
        get_end_bone: "getEndBone";
        set_extend_end_bone: "setExtendEndBone";
        is_end_bone_extended: "isEndBoneExtended";
        set_end_bone_direction: "setEndBoneDirection";
        get_end_bone_direction: "getEndBoneDirection";
        set_end_bone_length: "setEndBoneLength";
        get_end_bone_length: "getEndBoneLength";
        set_center_from: "setCenterFrom";
        get_center_from: "getCenterFrom";
        set_center_node: "setCenterNode";
        get_center_node: "getCenterNode";
        set_center_bone_name: "setCenterBoneName";
        get_center_bone_name: "getCenterBoneName";
        set_center_bone: "setCenterBone";
        get_center_bone: "getCenterBone";
        set_radius: "setRadius";
        get_radius: "getRadius";
        set_rotation_axis: "setRotationAxis";
        get_rotation_axis: "getRotationAxis";
        set_rotation_axis_vector: "setRotationAxisVector";
        get_rotation_axis_vector: "getRotationAxisVector";
        set_radius_damping_curve: "setRadiusDampingCurve";
        get_radius_damping_curve: "getRadiusDampingCurve";
        set_stiffness: "setStiffness";
        get_stiffness: "getStiffness";
        set_stiffness_damping_curve: "setStiffnessDampingCurve";
        get_stiffness_damping_curve: "getStiffnessDampingCurve";
        set_drag: "setDrag";
        get_drag: "getDrag";
        set_drag_damping_curve: "setDragDampingCurve";
        get_drag_damping_curve: "getDragDampingCurve";
        set_gravity: "setGravity";
        get_gravity: "getGravity";
        set_gravity_damping_curve: "setGravityDampingCurve";
        get_gravity_damping_curve: "getGravityDampingCurve";
        set_gravity_direction: "setGravityDirection";
        get_gravity_direction: "getGravityDirection";
        clear_settings: "clearSettings";
        set_individual_config: "setIndividualConfig";
        is_config_individual: "isConfigIndividual";
        get_joint_bone_name: "getJointBoneName";
        get_joint_bone: "getJointBone";
        set_joint_rotation_axis: "setJointRotationAxis";
        get_joint_rotation_axis: "getJointRotationAxis";
        set_joint_rotation_axis_vector: "setJointRotationAxisVector";
        get_joint_rotation_axis_vector: "getJointRotationAxisVector";
        set_joint_radius: "setJointRadius";
        get_joint_radius: "getJointRadius";
        set_joint_stiffness: "setJointStiffness";
        get_joint_stiffness: "getJointStiffness";
        set_joint_drag: "setJointDrag";
        get_joint_drag: "getJointDrag";
        set_joint_gravity: "setJointGravity";
        get_joint_gravity: "getJointGravity";
        set_joint_gravity_direction: "setJointGravityDirection";
        get_joint_gravity_direction: "getJointGravityDirection";
        get_joint_count: "getJointCount";
        set_enable_all_child_collisions: "setEnableAllChildCollisions";
        are_all_child_collisions_enabled: "areAllChildCollisionsEnabled";
        set_exclude_collision_path: "setExcludeCollisionPath";
        get_exclude_collision_path: "getExcludeCollisionPath";
        set_exclude_collision_count: "setExcludeCollisionCount";
        get_exclude_collision_count: "getExcludeCollisionCount";
        clear_exclude_collisions: "clearExcludeCollisions";
        set_collision_path: "setCollisionPath";
        get_collision_path: "getCollisionPath";
        set_collision_count: "setCollisionCount";
        get_collision_count: "getCollisionCount";
        clear_collisions: "clearCollisions";
        external_force: "externalForce";
        setting_count: "settingCount";
    }
    /** A [SkeletonModifier3D] to apply inertial wavering to bone chains.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_springbonesimulator3d.html  
     */
    class SpringBoneSimulator3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** Sets the root bone name of the bone chain. */
        setRootBoneName(index: int64, boneName: string): void
        
        /** Returns the root bone name of the bone chain. */
        getRootBoneName(index: int64): string
        
        /** Sets the root bone index of the bone chain. */
        setRootBone(index: int64, bone: int64): void
        
        /** Returns the root bone index of the bone chain. */
        getRootBone(index: int64): int64
        
        /** Sets the end bone name of the bone chain.  
         *      
         *  **Note:** End bone must be the root bone or a child of the root bone. If they are the same, the tail must be extended by [method set_extend_end_bone] to jiggle the bone.  
         */
        setEndBoneName(index: int64, boneName: string): void
        
        /** Returns the end bone name of the bone chain. */
        getEndBoneName(index: int64): string
        
        /** Sets the end bone index of the bone chain. */
        setEndBone(index: int64, bone: int64): void
        
        /** Returns the end bone index of the bone chain. */
        getEndBone(index: int64): int64
        
        /** If [param enabled] is `true`, the end bone is extended to have the tail.  
         *  The extended tail config is allocated to the last element in the joint list.  
         *  In other words, if you set [param enabled] is `false`, the config of last element in the joint list has no effect in the simulated result.  
         */
        setExtendEndBone(index: int64, enabled: boolean): void
        
        /** Returns `true` if the end bone is extended to have the tail. */
        isEndBoneExtended(index: int64): boolean
        
        /** Sets the end bone tail direction of the bone chain when [method is_end_bone_extended] is `true`. */
        setEndBoneDirection(index: int64, boneDirection: SpringBoneSimulator3D.BoneDirection): void
        
        /** Returns the end bone's tail direction of the bone chain when [method is_end_bone_extended] is `true`. */
        getEndBoneDirection(index: int64): SpringBoneSimulator3D.BoneDirection
        
        /** Sets the end bone tail length of the bone chain when [method is_end_bone_extended] is `true`. */
        setEndBoneLength(index: int64, length: float64): void
        
        /** Returns the end bone's tail length of the bone chain when [method is_end_bone_extended] is `true`. */
        getEndBoneLength(index: int64): float64
        
        /** Sets what the center originates from in the bone chain.  
         *  Bone movement is calculated based on the difference in relative distance between center and bone in the previous and next frames.  
         *  For example, if the parent [Skeleton3D] is used as the center, the bones are considered to have not moved if the [Skeleton3D] moves in the world.  
         *  In this case, only a change in the bone pose is considered to be a bone movement.  
         */
        setCenterFrom(index: int64, centerFrom: SpringBoneSimulator3D.CenterFrom): void
        
        /** Returns what the center originates from in the bone chain. */
        getCenterFrom(index: int64): SpringBoneSimulator3D.CenterFrom
        
        /** Sets the center node path of the bone chain. */
        setCenterNode(index: int64, nodePath: NodePath | string): void
        
        /** Returns the center node path of the bone chain. */
        getCenterNode(index: int64): NodePath
        
        /** Sets the center bone name of the bone chain. */
        setCenterBoneName(index: int64, boneName: string): void
        
        /** Returns the center bone name of the bone chain. */
        getCenterBoneName(index: int64): string
        
        /** Sets the center bone index of the bone chain. */
        setCenterBone(index: int64, bone: int64): void
        
        /** Returns the center bone index of the bone chain. */
        getCenterBone(index: int64): int64
        
        /** Sets the joint radius of the bone chain. It is used to move and slide with the [SpringBoneCollision3D] in the collision list.  
         *  The value is scaled by [method set_radius_damping_curve] and cached in each joint setting in the joint list.  
         */
        setRadius(index: int64, radius: float64): void
        
        /** Returns the joint radius of the bone chain. */
        getRadius(index: int64): float64
        
        /** Sets the rotation axis of the bone chain. If set to a specific axis, it acts like a hinge joint. The value is cached in each joint setting in the joint list.  
         *  The axes are based on the [method Skeleton3D.get_bone_rest]'s space, if [param axis] is [constant ROTATION_AXIS_CUSTOM], you can specify any axis.  
         *      
         *  **Note:** The rotation axis vector and the forward vector shouldn't be colinear to avoid unintended rotation since [SpringBoneSimulator3D] does not factor in twisting forces.  
         */
        setRotationAxis(index: int64, axis: SpringBoneSimulator3D.RotationAxis): void
        
        /** Returns the rotation axis of the bone chain. */
        getRotationAxis(index: int64): SpringBoneSimulator3D.RotationAxis
        
        /** Sets the rotation axis vector of the bone chain. The value is cached in each joint setting in the joint list.  
         *  This vector is normalized by an internal process and represents the axis around which the bone chain can rotate.  
         *  If the vector length is `0`, it is considered synonymous with [constant ROTATION_AXIS_ALL].  
         */
        setRotationAxisVector(index: int64, vector: Vector3): void
        
        /** Returns the rotation axis vector of the bone chain. This vector represents the axis around which the bone chain can rotate. It is determined based on the rotation axis set for the bone chain.  
         *  If [method get_rotation_axis] is [constant ROTATION_AXIS_ALL], this method returns `Vector3(0, 0, 0)`.  
         */
        getRotationAxisVector(index: int64): Vector3
        
        /** Sets the joint radius damping curve of the bone chain. */
        setRadiusDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the joint radius damping curve of the bone chain. */
        getRadiusDampingCurve(index: int64): null | Curve
        
        /** Sets the stiffness force of the bone chain. The greater the value, the faster it recovers to its initial pose.  
         *  If [param stiffness] is `0`, the modified pose will not return to the original pose.  
         *  The value is scaled by [method set_stiffness_damping_curve] and cached in each joint setting in the joint list.  
         */
        setStiffness(index: int64, stiffness: float64): void
        
        /** Returns the stiffness force of the bone chain. */
        getStiffness(index: int64): float64
        
        /** Sets the stiffness force damping curve of the bone chain. */
        setStiffnessDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the stiffness force damping curve of the bone chain. */
        getStiffnessDampingCurve(index: int64): null | Curve
        
        /** Sets the drag force of the bone chain. The greater the value, the more suppressed the wiggling.  
         *  The value is scaled by [method set_drag_damping_curve] and cached in each joint setting in the joint list.  
         */
        setDrag(index: int64, drag: float64): void
        
        /** Returns the drag force damping curve of the bone chain. */
        getDrag(index: int64): float64
        
        /** Sets the drag force damping curve of the bone chain. */
        setDragDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the drag force damping curve of the bone chain. */
        getDragDampingCurve(index: int64): null | Curve
        
        /** Sets the gravity amount of the bone chain. This value is not an acceleration, but a constant velocity of movement in [method set_gravity_direction].  
         *  If [param gravity] is not `0`, the modified pose will not return to the original pose since it is always affected by gravity.  
         *  The value is scaled by [method set_gravity_damping_curve] and cached in each joint setting in the joint list.  
         */
        setGravity(index: int64, gravity: float64): void
        
        /** Returns the gravity amount of the bone chain. */
        getGravity(index: int64): float64
        
        /** Sets the gravity amount damping curve of the bone chain. */
        setGravityDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the gravity amount damping curve of the bone chain. */
        getGravityDampingCurve(index: int64): null | Curve
        
        /** Sets the gravity direction of the bone chain. This value is internally normalized and then multiplied by [method set_gravity].  
         *  The value is cached in each joint setting in the joint list.  
         */
        setGravityDirection(index: int64, gravityDirection: Vector3): void
        
        /** Returns the gravity direction of the bone chain. */
        getGravityDirection(index: int64): Vector3
        
        /** Clears all settings. */
        clearSettings(): void
        
        /** If [param enabled] is `true`, the config can be edited individually for each joint. */
        setIndividualConfig(index: int64, enabled: boolean): void
        
        /** Returns `true` if the config can be edited individually for each joint. */
        isConfigIndividual(index: int64): boolean
        
        /** Returns the bone name at [param joint] in the bone chain's joint list. */
        getJointBoneName(index: int64, joint: int64): string
        
        /** Returns the bone index at [param joint] in the bone chain's joint list. */
        getJointBone(index: int64, joint: int64): int64
        
        /** Sets the rotation axis at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`.  
         *  The axes are based on the [method Skeleton3D.get_bone_rest]'s space, if [param axis] is [constant ROTATION_AXIS_CUSTOM], you can specify any axis.  
         *      
         *  **Note:** The rotation axis and the forward vector shouldn't be colinear to avoid unintended rotation since [SpringBoneSimulator3D] does not factor in twisting forces.  
         */
        setJointRotationAxis(index: int64, joint: int64, axis: SpringBoneSimulator3D.RotationAxis): void
        
        /** Returns the rotation axis at [param joint] in the bone chain's joint list. */
        getJointRotationAxis(index: int64, joint: int64): SpringBoneSimulator3D.RotationAxis
        
        /** Sets the rotation axis vector for the specified joint in the bone chain.  
         *  This vector is normalized by an internal process and represents the axis around which the bone chain can rotate.  
         *  If the vector length is `0`, it is considered synonymous with [constant ROTATION_AXIS_ALL].  
         */
        setJointRotationAxisVector(index: int64, joint: int64, vector: Vector3): void
        
        /** Returns the rotation axis vector for the specified joint in the bone chain. This vector represents the axis around which the joint can rotate. It is determined based on the rotation axis set for the joint.  
         *  If [method get_joint_rotation_axis] is [constant ROTATION_AXIS_ALL], this method returns `Vector3(0, 0, 0)`.  
         */
        getJointRotationAxisVector(index: int64, joint: int64): Vector3
        
        /** Sets the joint radius at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointRadius(index: int64, joint: int64, radius: float64): void
        
        /** Returns the radius at [param joint] in the bone chain's joint list. */
        getJointRadius(index: int64, joint: int64): float64
        
        /** Sets the stiffness force at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointStiffness(index: int64, joint: int64, stiffness: float64): void
        
        /** Returns the stiffness force at [param joint] in the bone chain's joint list. */
        getJointStiffness(index: int64, joint: int64): float64
        
        /** Sets the drag force at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointDrag(index: int64, joint: int64, drag: float64): void
        
        /** Returns the drag force at [param joint] in the bone chain's joint list. */
        getJointDrag(index: int64, joint: int64): float64
        
        /** Sets the gravity amount at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointGravity(index: int64, joint: int64, gravity: float64): void
        
        /** Returns the gravity amount at [param joint] in the bone chain's joint list. */
        getJointGravity(index: int64, joint: int64): float64
        
        /** Sets the gravity direction at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointGravityDirection(index: int64, joint: int64, gravityDirection: Vector3): void
        
        /** Returns the gravity direction at [param joint] in the bone chain's joint list. */
        getJointGravityDirection(index: int64, joint: int64): Vector3
        
        /** Returns the joint count of the bone chain's joint list. */
        getJointCount(index: int64): int64
        
        /** If [param enabled] is `true`, all child [SpringBoneCollision3D]s are colliding and [method set_exclude_collision_path] is enabled as an exclusion list at [param index] in the settings.  
         *  If [param enabled] is `false`, you need to manually register all valid collisions with [method set_collision_path].  
         */
        setEnableAllChildCollisions(index: int64, enabled: boolean): void
        
        /** Returns `true` if all child [SpringBoneCollision3D]s are contained in the collision list at [param index] in the settings. */
        areAllChildCollisionsEnabled(index: int64): boolean
        
        /** Sets the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's exclude collision list when [method are_all_child_collisions_enabled] is `true`. */
        setExcludeCollisionPath(index: int64, collision: int64, nodePath: NodePath | string): void
        
        /** Returns the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's exclude collision list when [method are_all_child_collisions_enabled] is `true`. */
        getExcludeCollisionPath(index: int64, collision: int64): NodePath
        
        /** Sets the number of exclude collisions in the exclude collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `true`. */
        setExcludeCollisionCount(index: int64, count: int64): void
        
        /** Returns the exclude collision count of the bone chain's exclude collision list when [method are_all_child_collisions_enabled] is `true`. */
        getExcludeCollisionCount(index: int64): int64
        
        /** Clears all exclude collisions from the collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `true`. */
        clearExcludeCollisions(index: int64): void
        
        /** Sets the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's collision list when [method are_all_child_collisions_enabled] is `false`. */
        setCollisionPath(index: int64, collision: int64, nodePath: NodePath | string): void
        
        /** Returns the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's collision list when [method are_all_child_collisions_enabled] is `false`. */
        getCollisionPath(index: int64, collision: int64): NodePath
        
        /** Sets the number of collisions in the collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `false`. */
        setCollisionCount(index: int64, count: int64): void
        
        /** Returns the collision count of the bone chain's collision list when [method are_all_child_collisions_enabled] is `false`. */
        getCollisionCount(index: int64): int64
        
        /** Clears all collisions from the collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `false`. */
        clearCollisions(index: int64): void
        
        /** Resets a simulating state with respect to the current bone pose.  
         *  It is useful to prevent the simulation result getting violent. For example, calling this immediately after a call to [method AnimationPlayer.play] without a fading, or within the previous [signal SkeletonModifier3D.modification_processed] signal if it's condition changes significantly.  
         */
        reset(): void
        
        /** The constant force that always affected bones. It is equal to the result when the parent [Skeleton3D] moves at this speed in the opposite direction.  
         *  This is useful for effects such as wind and anti-gravity.  
         */
        get externalForce(): Vector3
        set externalForce(value: Vector3)
        
        /** The number of settings. */
        get settingCount(): int64
        set settingCount(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpringBoneSimulator3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpringBoneSimulator3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSprite2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSprite2D extends __NameMapNode2D {
        is_pixel_opaque: "isPixelOpaque";
        get_rect: "getRect";
        flip_h: "flipH";
        flip_v: "flipV";
        frame_coords: "frameCoords";
        region_enabled: "regionEnabled";
        region_rect: "regionRect";
        region_filter_clip_enabled: "regionFilterClipEnabled";
        frame_changed: "frameChanged";
        texture_changed: "textureChanged";
    }
    /** General-purpose sprite node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_sprite2d.html  
     */
    class Sprite2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns `true`, if the pixel at the given position is opaque and `false` in other case. The position is in local coordinates.  
         *      
         *  **Note:** It also returns `false`, if the sprite's texture is `null` or if the given position is invalid.  
         */
        isPixelOpaque(pos: Vector2): boolean
        
        /** Returns a [Rect2] representing the Sprite2D's boundary in local coordinates.  
         *  **Example:** Detect if the Sprite2D was clicked:  
         *    
         */
        getRect(): Rect2
        
        /** [Texture2D] object to draw. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** If `true`, texture is centered.  
         *      
         *  **Note:** For games with a pixel art aesthetic, textures may appear deformed when centered. This is caused by their position being between pixels. To prevent this, set this property to `false`, or consider enabling [member ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel] and [member ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel].  
         */
        get centered(): boolean
        set centered(value: boolean)
        
        /** The texture's drawing offset.  
         *      
         *  **Note:** When you increase [member offset].y in Sprite2D, the sprite moves downward on screen (i.e., +Y is down).  
         */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get hframes(): int64
        set hframes(value: int64)
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get vframes(): int64
        set vframes(value: int64)
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        get frame(): int64
        set frame(value: int64)
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        get frameCoords(): Vector2I
        set frameCoords(value: Vector2I)
        
        /** If `true`, texture is cut from a larger atlas texture. See [member region_rect].  
         *      
         *  **Note:** When using a custom [Shader] on a [Sprite2D], the `UV` shader built-in will refer to the entire texture space. Use the `REGION_RECT` built-in to get the currently visible region defined in [member region_rect] instead. See [url=https://docs.godotengine.org/en/4.5/tutorials/shaders/shader_reference/canvas_item_shader.html]CanvasItem shaders[/url] for details.  
         */
        get regionEnabled(): boolean
        set regionEnabled(value: boolean)
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** If `true`, the area outside of the [member region_rect] is clipped to avoid bleeding of the surrounding texture pixels. [member region_enabled] must be `true`. */
        get regionFilterClipEnabled(): boolean
        set regionFilterClipEnabled(value: boolean)
        
        /** Emitted when the [member frame] changes. */
        readonly frameChanged: Signal<() => void>
        
        /** Emitted when the [member texture] changes. */
        readonly textureChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSprite2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSprite2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSprite3D extends __RPCMapSpriteBase3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSprite3D extends __NameMapSpriteBase3D {
        frame_coords: "frameCoords";
        region_enabled: "regionEnabled";
        region_rect: "regionRect";
        frame_changed: "frameChanged";
        texture_changed: "textureChanged";
    }
    /** 2D sprite node in a 3D world.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_sprite3d.html  
     */
    class Sprite3D<Map extends NodePathMap = any> extends SpriteBase3D<Map> {
        constructor(identifier?: any)
        /** [Texture2D] object to draw. If [member GeometryInstance3D.material_override] is used, this will be overridden. The size information is still used. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get hframes(): int64
        set hframes(value: int64)
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get vframes(): int64
        set vframes(value: int64)
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        get frame(): int64
        set frame(value: int64)
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        get frameCoords(): Vector2I
        set frameCoords(value: Vector2I)
        
        /** If `true`, the sprite will use [member region_rect] and display only the specified part of its texture. */
        get regionEnabled(): boolean
        set regionEnabled(value: boolean)
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** Emitted when the [member frame] changes. */
        readonly frameChanged: Signal<() => void>
        
        /** Emitted when the [member texture] changes. */
        readonly textureChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSprite3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSprite3D;
    }
    namespace SpriteBase3D {
        enum DrawFlags {
            FlagTransparent = 0,
            FlagShaded = 1,
            FlagDoubleSided = 2,
            FlagDisableDepthTest = 3,
            FlagFixedSize = 4,
            FlagMax = 5,
        }
        enum AlphaCutMode {
            AlphaCutDisabled = 0,
            AlphaCutDiscard = 1,
            AlphaCutOpaquePrepass = 2,
            AlphaCutHash = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpriteBase3D extends __RPCMapGeometryInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpriteBase3D extends __NameMapGeometryInstance3D {
        set_draw_flag: "setDrawFlag";
        get_draw_flag: "getDrawFlag";
        get_item_rect: "getItemRect";
        generate_triangle_mesh: "generateTriangleMesh";
        flip_h: "flipH";
        flip_v: "flipV";
        pixel_size: "pixelSize";
        double_sided: "doubleSided";
        no_depth_test: "noDepthTest";
        fixed_size: "fixedSize";
        alpha_cut: "alphaCut";
        alpha_scissor_threshold: "alphaScissorThreshold";
        alpha_hash_scale: "alphaHashScale";
        alpha_antialiasing_mode: "alphaAntialiasingMode";
        alpha_antialiasing_edge: "alphaAntialiasingEdge";
        texture_filter: "textureFilter";
        render_priority: "renderPriority";
    }
    /** 2D sprite node in 3D environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spritebase3d.html  
     */
    class SpriteBase3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        /** If `true`, the specified flag will be enabled. */
        setDrawFlag(flag: SpriteBase3D.DrawFlags, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        getDrawFlag(flag: SpriteBase3D.DrawFlags): boolean
        
        /** Returns the rectangle representing this sprite. */
        getItemRect(): Rect2
        
        /** Returns a [TriangleMesh] with the sprite's vertices following its current configuration (such as its [member axis] and [member pixel_size]). */
        generateTriangleMesh(): null | TriangleMesh
        
        /** If `true`, texture will be centered. */
        get centered(): boolean
        set centered(value: boolean)
        
        /** The texture's drawing offset.  
         *      
         *  **Note:** When you increase [member offset].y in Sprite3D, the sprite moves upward in world space (i.e., +Y is up).  
         */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
        
        /** A color value used to  *multiply*  the texture's colors. Can be used for mood-coloring or to simulate the color of ambient light.  
         *      
         *  **Note:** Unlike [member CanvasItem.modulate] for 2D, colors with values above `1.0` (overbright) are not supported.  
         *      
         *  **Note:** If a [member GeometryInstance3D.material_override] is defined on the [SpriteBase3D], the material override must be configured to take vertex colors into account for albedo. Otherwise, the color defined in [member modulate] will be ignored. For a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] must be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function.  
         */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The size of one pixel's width on the sprite to scale it in 3D. */
        get pixelSize(): float64
        set pixelSize(value: float64)
        
        /** The direction in which the front of the texture faces. */
        get axis(): int64
        set axis(value: int64)
        
        /** The billboard mode to use for the sprite.  
         *      
         *  **Note:** When billboarding is enabled and the material also casts shadows, billboards will face **the** camera in the scene when rendering shadows. In scenes with multiple cameras, the intended shadow cannot be determined and this will result in undefined behavior. See [url=https://github.com/godotengine/godot/pull/72638]GitHub Pull Request #72638[/url] for details.  
         */
        get billboard(): int64
        set billboard(value: int64)
        
        /** If `true`, the texture's transparency and the opacity are used to make those parts of the sprite invisible. */
        get transparent(): boolean
        set transparent(value: boolean)
        
        /** If `true`, the [Light3D] in the [Environment] has effects on the sprite. */
        get shaded(): boolean
        set shaded(value: boolean)
        
        /** If `true`, texture can be seen from the back as well, if `false`, it is invisible when looking at it from behind. */
        get doubleSided(): boolean
        set doubleSided(value: boolean)
        
        /** If `true`, depth testing is disabled and the object will be drawn in render order. */
        get noDepthTest(): boolean
        set noDepthTest(value: boolean)
        
        /** If `true`, the texture is rendered at the same size regardless of distance. The texture's size on screen is the same as if the camera was `1.0` units away from the texture's origin, regardless of the actual distance from the camera. The [Camera3D]'s field of view (or [member Camera3D.size] when in orthogonal/frustum mode) still affects the size the sprite is drawn at. */
        get fixedSize(): boolean
        set fixedSize(value: boolean)
        
        /** The alpha cutting mode to use for the sprite. */
        get alphaCut(): int64
        set alphaCut(value: int64)
        
        /** Threshold at which the alpha scissor will discard values. */
        get alphaScissorThreshold(): float64
        set alphaScissorThreshold(value: float64)
        
        /** The hashing scale for Alpha Hash. Recommended values between `0` and `2`. */
        get alphaHashScale(): float64
        set alphaHashScale(value: float64)
        
        /** The type of alpha antialiasing to apply. */
        get alphaAntialiasingMode(): int64
        set alphaAntialiasingMode(value: int64)
        
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        get alphaAntialiasingEdge(): float64
        set alphaAntialiasingEdge(value: float64)
        
        /** Filter flags for the texture.  
         *      
         *  **Note:** Linear filtering may cause artifacts around the edges, which are especially noticeable on opaque textures. To prevent this, use textures with transparent or identical colors around the edges.  
         */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** Sets the render priority for the sprite. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get renderPriority(): int64
        set renderPriority(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpriteBase3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpriteBase3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSpriteFrames extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSpriteFrames extends __NameMapResource {
        add_animation: "addAnimation";
        has_animation: "hasAnimation";
        duplicate_animation: "duplicateAnimation";
        remove_animation: "removeAnimation";
        rename_animation: "renameAnimation";
        get_animation_names: "getAnimationNames";
        set_animation_speed: "setAnimationSpeed";
        get_animation_speed: "getAnimationSpeed";
        set_animation_loop: "setAnimationLoop";
        get_animation_loop: "getAnimationLoop";
        add_frame: "addFrame";
        set_frame: "setFrame";
        remove_frame: "removeFrame";
        get_frame_count: "getFrameCount";
        get_frame_texture: "getFrameTexture";
        get_frame_duration: "getFrameDuration";
        clear_all: "clearAll";
    }
    /** Sprite frame library for AnimatedSprite2D and AnimatedSprite3D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_spriteframes.html  
     */
    class SpriteFrames extends Resource {
        constructor(identifier?: any)
        /** Adds a new [param anim] animation to the library. */
        addAnimation(anim: StringName): void
        
        /** Returns `true` if the [param anim] animation exists. */
        hasAnimation(anim: StringName): boolean
        
        /** Duplicates the animation [param anim_from] to a new animation named [param anim_to]. Fails if [param anim_to] already exists, or if [param anim_from] does not exist. */
        duplicateAnimation(animFrom: StringName, animTo: StringName): void
        
        /** Removes the [param anim] animation. */
        removeAnimation(anim: StringName): void
        
        /** Changes the [param anim] animation's name to [param newname]. */
        renameAnimation(anim: StringName, newname: StringName): void
        
        /** Returns an array containing the names associated to each animation. Values are placed in alphabetical order. */
        getAnimationNames(): PackedStringArray
        
        /** Sets the speed for the [param anim] animation in frames per second. */
        setAnimationSpeed(anim: StringName, fps: float64): void
        
        /** Returns the speed in frames per second for the [param anim] animation. */
        getAnimationSpeed(anim: StringName): float64
        
        /** If [param loop] is `true`, the [param anim] animation will loop when it reaches the end, or the start if it is played in reverse. */
        setAnimationLoop(anim: StringName, loop: boolean): void
        
        /** Returns `true` if the given animation is configured to loop when it finishes playing. Otherwise, returns `false`. */
        getAnimationLoop(anim: StringName): boolean
        
        /** Adds a frame to the [param anim] animation. If [param at_position] is `-1`, the frame will be added to the end of the animation. [param duration] specifies the relative duration, see [method get_frame_duration] for details. */
        addFrame(anim: StringName, texture: Texture2D, duration?: float64 /* = 1 */, atPosition?: int64 /* = -1 */): void
        
        /** Sets the [param texture] and the [param duration] of the frame [param idx] in the [param anim] animation. [param duration] specifies the relative duration, see [method get_frame_duration] for details. */
        setFrame(anim: StringName, idx: int64, texture: Texture2D, duration?: float64 /* = 1 */): void
        
        /** Removes the [param anim] animation's frame [param idx]. */
        removeFrame(anim: StringName, idx: int64): void
        
        /** Returns the number of frames for the [param anim] animation. */
        getFrameCount(anim: StringName): int64
        
        /** Returns the texture of the frame [param idx] in the [param anim] animation. */
        getFrameTexture(anim: StringName, idx: int64): null | Texture2D
        
        /** Returns a relative duration of the frame [param idx] in the [param anim] animation (defaults to `1.0`). For example, a frame with a duration of `2.0` is displayed twice as long as a frame with a duration of `1.0`. You can calculate the absolute duration (in seconds) of a frame using the following formula:  
         *    
         *  In this example, `playing_speed` refers to either [method AnimatedSprite2D.get_playing_speed] or [method AnimatedSprite3D.get_playing_speed].  
         */
        getFrameDuration(anim: StringName, idx: int64): float64
        
        /** Removes all frames from the [param anim] animation. */
        clear(anim: StringName): void
        
        /** Removes all animations. An empty `default` animation will be created. */
        clearAll(): void
        get animations(): GArray
        set animations(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSpriteFrames;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSpriteFrames;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStandardMaterial3D extends __RPCMapBaseMaterial3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStandardMaterial3D extends __NameMapBaseMaterial3D {
    }
    /** A PBR (Physically Based Rendering) material to be used on 3D objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_standardmaterial3d.html  
     */
    class StandardMaterial3D extends BaseMaterial3D {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStandardMaterial3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStandardMaterial3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStaticBody2D extends __RPCMapPhysicsBody2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStaticBody2D extends __NameMapPhysicsBody2D {
        physics_material_override: "physicsMaterialOverride";
        constant_linear_velocity: "constantLinearVelocity";
        constant_angular_velocity: "constantAngularVelocity";
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_staticbody2d.html  
     */
    class StaticBody2D<Map extends NodePathMap = any> extends PhysicsBody2D<Map> {
        constructor(identifier?: any)
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        get constantLinearVelocity(): Vector2
        set constantLinearVelocity(value: Vector2)
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        get constantAngularVelocity(): float64
        set constantAngularVelocity(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStaticBody2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStaticBody2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStaticBody3D extends __RPCMapPhysicsBody3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStaticBody3D extends __NameMapPhysicsBody3D {
        physics_material_override: "physicsMaterialOverride";
        constant_linear_velocity: "constantLinearVelocity";
        constant_angular_velocity: "constantAngularVelocity";
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_staticbody3d.html  
     */
    class StaticBody3D<Map extends NodePathMap = any> extends PhysicsBody3D<Map> {
        constructor(identifier?: any)
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        get constantLinearVelocity(): Vector3
        set constantLinearVelocity(value: Vector3)
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        get constantAngularVelocity(): Vector3
        set constantAngularVelocity(value: Vector3)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStaticBody3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStaticBody3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStatusIndicator extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStatusIndicator extends __NameMapNode {
        get_rect: "getRect";
    }
    /** Application status indicator (aka notification area icon).  
     *      
     *  **Note:** Status indicator is implemented on macOS and Windows.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_statusindicator.html  
     */
    class StatusIndicator<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the status indicator rectangle in screen coordinates. If this status indicator is not visible, returns an empty [Rect2]. */
        getRect(): Rect2
        
        /** Status indicator tooltip. */
        get tooltip(): string
        set tooltip(value: string)
        
        /** Status indicator icon. */
        get icon(): null | Texture2D
        set icon(value: null | Texture2D)
        
        /** Status indicator native popup menu. If this is set, the [signal pressed] signal is not emitted.  
         *      
         *  **Note:** Native popup is only supported if [NativeMenu] supports [constant NativeMenu.FEATURE_POPUP_MENU] feature.  
         */
        get menu(): NodePath
        set menu(value: NodePath | string)
        
        /** If `true`, the status indicator is visible. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** Emitted when the status indicator is pressed. */
        readonly pressed: Signal<(mouseButton: int64, mousePosition: Vector2I) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStatusIndicator;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStatusIndicator;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStreamPeer extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStreamPeer extends __NameMapRefCounted {
        put_data: "putData";
        put_partial_data: "putPartialData";
        get_data: "getData";
        get_partial_data: "getPartialData";
        get_available_bytes: "getAvailableBytes";
        put_8: "put8";
        put_u8: "putU8";
        put_16: "put16";
        put_u16: "putU16";
        put_32: "put32";
        put_u32: "putU32";
        put_64: "put64";
        put_u64: "putU64";
        put_half: "putHalf";
        put_float: "putFloat";
        put_double: "putDouble";
        put_string: "putString";
        put_utf8_string: "putUtf8String";
        put_var: "putVar";
        get_8: "get8";
        get_u8: "getU8";
        get_16: "get16";
        get_u16: "getU16";
        get_32: "get32";
        get_u32: "getU32";
        get_64: "get64";
        get_u64: "getU64";
        get_half: "getHalf";
        get_float: "getFloat";
        get_double: "getDouble";
        get_string: "getString";
        get_utf8_string: "getUtf8String";
        get_var: "getVar";
        big_endian: "bigEndian";
    }
    /** Abstract base class for interacting with streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_streampeer.html  
     */
    class StreamPeer extends RefCounted {
        constructor(identifier?: any)
        /** Sends a chunk of data through the connection, blocking if necessary until the data is done sending. This function returns an [enum Error] code. */
        putData(data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Sends a chunk of data through the connection. If all the data could not be sent at once, only part of it will. This function returns two values, an [enum Error] code and an integer, describing how much data was actually sent. */
        putPartialData(data: PackedByteArray | byte[] | ArrayBuffer): GArray
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the [param bytes] argument. If not enough bytes are available, the function will block until the desired amount is received. This function returns two values, an [enum Error] code and a data array. */
        getData(bytes: int64): GArray
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the [param bytes] argument. If not enough bytes are available, the function will return how many were actually received. This function returns two values: an [enum Error] code and a data array. */
        getPartialData(bytes: int64): GArray
        
        /** Returns the number of bytes this [StreamPeer] has available. */
        getAvailableBytes(): int64
        
        /** Puts a signed byte into the stream. */
        put8(value: int64): void
        
        /** Puts an unsigned byte into the stream. */
        putU8(value: int64): void
        
        /** Puts a signed 16-bit value into the stream. */
        put16(value: int64): void
        
        /** Puts an unsigned 16-bit value into the stream. */
        putU16(value: int64): void
        
        /** Puts a signed 32-bit value into the stream. */
        put32(value: int64): void
        
        /** Puts an unsigned 32-bit value into the stream. */
        putU32(value: int64): void
        
        /** Puts a signed 64-bit value into the stream. */
        put64(value: int64): void
        
        /** Puts an unsigned 64-bit value into the stream. */
        putU64(value: int64): void
        
        /** Puts a half-precision float into the stream. */
        putHalf(value: float64): void
        
        /** Puts a single-precision float into the stream. */
        putFloat(value: float64): void
        
        /** Puts a double-precision float into the stream. */
        putDouble(value: float64): void
        
        /** Puts a zero-terminated ASCII string into the stream prepended by a 32-bit unsigned integer representing its size.  
         *      
         *  **Note:** To put an ASCII string without prepending its size, you can use [method put_data]:  
         *    
         */
        putString(value: string): void
        
        /** Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.  
         *      
         *  **Note:** To put a UTF-8 string without prepending its size, you can use [method put_data]:  
         *    
         */
        putUtf8String(value: string): void
        
        /** Puts a Variant into the stream. If [param full_objects] is `true` encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        putVar(value: any, fullObjects?: boolean /* = false */): void
        
        /** Gets a signed byte from the stream. */
        get8(): int64
        
        /** Gets an unsigned byte from the stream. */
        getU8(): int64
        
        /** Gets a signed 16-bit value from the stream. */
        get16(): int64
        
        /** Gets an unsigned 16-bit value from the stream. */
        getU16(): int64
        
        /** Gets a signed 32-bit value from the stream. */
        get32(): int64
        
        /** Gets an unsigned 32-bit value from the stream. */
        getU32(): int64
        
        /** Gets a signed 64-bit value from the stream. */
        get64(): int64
        
        /** Gets an unsigned 64-bit value from the stream. */
        getU64(): int64
        
        /** Gets a half-precision float from the stream. */
        getHalf(): float64
        
        /** Gets a single-precision float from the stream. */
        getFloat(): float64
        
        /** Gets a double-precision float from the stream. */
        getDouble(): float64
        
        /** Gets an ASCII string with byte-length [param bytes] from the stream. If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_string]. */
        getString(bytes?: int64 /* = -1 */): string
        
        /** Gets a UTF-8 string with byte-length [param bytes] from the stream (this decodes the string sent as UTF-8). If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_utf8_string]. */
        getUtf8String(bytes?: int64 /* = -1 */): string
        
        /** Gets a Variant from the stream. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        getVar(allowObjects?: boolean /* = false */): any
        
        /** If `true`, this [StreamPeer] will using big-endian format for encoding and decoding. */
        get bigEndian(): boolean
        set bigEndian(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStreamPeer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStreamPeer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStreamPeerBuffer extends __RPCMapStreamPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStreamPeerBuffer extends __NameMapStreamPeer {
        get_size: "getSize";
        get_position: "getPosition";
        data_array: "dataArray";
    }
    /** A stream peer used to handle binary data streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_streampeerbuffer.html  
     */
    class StreamPeerBuffer extends StreamPeer {
        constructor(identifier?: any)
        /** Moves the cursor to the specified position. [param position] must be a valid index of [member data_array]. */
        seek(position: int64): void
        
        /** Returns the size of [member data_array]. */
        getSize(): int64
        
        /** Returns the current cursor position. */
        getPosition(): int64
        
        /** Resizes the [member data_array]. This  *doesn't*  update the cursor. */
        resize(size: int64): void
        
        /** Clears the [member data_array] and resets the cursor. */
        clear(): void
        
        /** Returns a new [StreamPeerBuffer] with the same [member data_array] content. */
        duplicate(): null | StreamPeerBuffer
        
        /** The underlying data buffer. Setting this value resets the cursor. */
        get dataArray(): PackedByteArray
        set dataArray(value: PackedByteArray | byte[] | ArrayBuffer)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStreamPeerBuffer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStreamPeerBuffer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStreamPeerExtension extends __RPCMapStreamPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStreamPeerExtension extends __NameMapStreamPeer {
        _get_data: "_getData";
        _get_partial_data: "_getPartialData";
        _put_data: "_putData";
        _put_partial_data: "_putPartialData";
        _get_available_bytes: "_getAvailableBytes";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_streampeerextension.html */
    class StreamPeerExtension extends StreamPeer {
        constructor(identifier?: any)
        /* gdvirtual */ _getData(rBuffer: int64, rBytes: int64, rReceived: int64): GError
        /* gdvirtual */ _getPartialData(rBuffer: int64, rBytes: int64, rReceived: int64): GError
        /* gdvirtual */ _putData(pData: int64, pBytes: int64, rSent: int64): GError
        /* gdvirtual */ _putPartialData(pData: int64, pBytes: int64, rSent: int64): GError
        /* gdvirtual */ _getAvailableBytes(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStreamPeerExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStreamPeerExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStreamPeerGZip extends __RPCMapStreamPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStreamPeerGZip extends __NameMapStreamPeer {
        start_compression: "startCompression";
        start_decompression: "startDecompression";
    }
    class StreamPeerGZip extends StreamPeer {
        constructor(identifier?: any)
        startCompression(useDeflate?: boolean /* = false */, bufferSize?: int64 /* = 65535 */): GError
        startDecompression(useDeflate?: boolean /* = false */, bufferSize?: int64 /* = 65535 */): GError
        finish(): GError
        clear(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStreamPeerGZip;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStreamPeerGZip;
    }
    namespace StreamPeerTcp {
        enum Status {
            StatusNone = 0,
            StatusConnecting = 1,
            StatusConnected = 2,
            StatusError = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStreamPeerTcp extends __RPCMapStreamPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStreamPeerTcp extends __NameMapStreamPeer {
        connect_to_host: "connectToHost";
        get_status: "getStatus";
        get_connected_host: "getConnectedHost";
        get_connected_port: "getConnectedPort";
        get_local_port: "getLocalPort";
        disconnect_from_host: "disconnectFromHost";
        set_no_delay: "setNoDelay";
    }
    class StreamPeerTcp extends StreamPeer {
        constructor(identifier?: any)
        bind(port: int64, host?: string /* = '*' */): GError
        connectToHost(host: string, port: int64): GError
        poll(): GError
        getStatus(): StreamPeerTcp.Status
        getConnectedHost(): string
        getConnectedPort(): int64
        getLocalPort(): int64
        disconnectFromHost(): void
        setNoDelay(enabled: boolean): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStreamPeerTcp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStreamPeerTcp;
    }
    namespace StreamPeerTls {
        enum Status {
            StatusDisconnected = 0,
            StatusHandshaking = 1,
            StatusConnected = 2,
            StatusError = 3,
            StatusErrorHostnameMismatch = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStreamPeerTls extends __RPCMapStreamPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStreamPeerTls extends __NameMapStreamPeer {
        accept_stream: "acceptStream";
        connect_to_stream: "connectToStream";
        get_status: "getStatus";
        get_stream: "getStream";
        disconnect_from_stream: "disconnectFromStream";
    }
    class StreamPeerTls extends StreamPeer {
        constructor(identifier?: any)
        poll(): void
        acceptStream(stream: StreamPeer, serverOptions: TlsOptions): GError
        connectToStream(stream: StreamPeer, commonName: string, clientOptions?: TlsOptions): GError
        getStatus(): StreamPeerTls.Status
        getStream(): null | StreamPeer
        disconnectFromStream(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStreamPeerTls;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStreamPeerTls;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStyleBox extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStyleBox extends __NameMapResource {
        _get_draw_rect: "_getDrawRect";
        _get_minimum_size: "_getMinimumSize";
        _test_mask: "_testMask";
        get_minimum_size: "getMinimumSize";
        set_content_margin: "setContentMargin";
        set_content_margin_all: "setContentMarginAll";
        get_content_margin: "getContentMargin";
        get_margin: "getMargin";
        get_offset: "getOffset";
        get_current_item_drawn: "getCurrentItemDrawn";
        test_mask: "testMask";
        content_margin_left: "contentMarginLeft";
        content_margin_top: "contentMarginTop";
        content_margin_right: "contentMarginRight";
        content_margin_bottom: "contentMarginBottom";
    }
    /** Abstract base class for defining stylized boxes for UI elements.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_stylebox.html  
     */
    class StyleBox extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _draw(toCanvasItem: Rid, rect: Rect2): void
        /* gdvirtual */ _getDrawRect(rect: Rect2): Rect2
        
        /** Virtual method to be implemented by the user. Returns a custom minimum size that the stylebox must respect when drawing. By default [method get_minimum_size] only takes content margins into account. This method can be overridden to add another size restriction. A combination of the default behavior and the output of this method will be used, to account for both sizes. */
        /* gdvirtual */ _getMinimumSize(): Vector2
        /* gdvirtual */ _testMask(point: Vector2, rect: Rect2): boolean
        
        /** Returns the minimum size that this stylebox can be shrunk to. */
        getMinimumSize(): Vector2
        
        /** Sets the default value of the specified [enum Side] to [param offset] pixels. */
        setContentMargin(margin: Side, offset: float64): void
        
        /** Sets the default margin to [param offset] pixels for all sides. */
        setContentMarginAll(offset: float64): void
        
        /** Returns the default margin of the specified [enum Side]. */
        getContentMargin(margin: Side): float64
        
        /** Returns the content margin offset for the specified [enum Side].  
         *  Positive values reduce size inwards, unlike [Control]'s margin values.  
         */
        getMargin(margin: Side): float64
        
        /** Returns the "offset" of a stylebox. This helper function returns a value equivalent to `Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))`. */
        getOffset(): Vector2
        
        /** Draws this stylebox using a canvas item identified by the given [RID].  
         *  The [RID] value can either be the result of [method CanvasItem.get_canvas_item] called on an existing [CanvasItem]-derived node, or directly from creating a canvas item in the [RenderingServer] with [method RenderingServer.canvas_item_create].  
         */
        draw(canvasItem: Rid, rect: Rect2): void
        
        /** Returns the [CanvasItem] that handles its [constant CanvasItem.NOTIFICATION_DRAW] or [method CanvasItem._draw] callback at this moment. */
        getCurrentItemDrawn(): null | CanvasItem
        
        /** Test a position in a rectangle, return whether it passes the mask test. */
        testMask(point: Vector2, rect: Rect2): boolean
        
        /** The left margin for the contents of this style box. Increasing this value reduces the space available to the contents from the left.  
         *  Refer to [member content_margin_bottom] for extra considerations.  
         */
        get contentMarginLeft(): float64
        set contentMarginLeft(value: float64)
        
        /** The top margin for the contents of this style box. Increasing this value reduces the space available to the contents from the top.  
         *  Refer to [member content_margin_bottom] for extra considerations.  
         */
        get contentMarginTop(): float64
        set contentMarginTop(value: float64)
        
        /** The right margin for the contents of this style box. Increasing this value reduces the space available to the contents from the right.  
         *  Refer to [member content_margin_bottom] for extra considerations.  
         */
        get contentMarginRight(): float64
        set contentMarginRight(value: float64)
        
        /** The bottom margin for the contents of this style box. Increasing this value reduces the space available to the contents from the bottom.  
         *  If this value is negative, it is ignored and a child-specific margin is used instead. For example, for [StyleBoxFlat], the border thickness (if any) is used instead.  
         *  It is up to the code using this style box to decide what these contents are: for example, a [Button] respects this content margin for the textual contents of the button.  
         *  [method get_margin] should be used to fetch this value as consumer instead of reading these properties directly. This is because it correctly respects negative values and the fallback mentioned above.  
         */
        get contentMarginBottom(): float64
        set contentMarginBottom(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStyleBox;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStyleBox;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStyleBoxEmpty extends __RPCMapStyleBox {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStyleBoxEmpty extends __NameMapStyleBox {
    }
    /** An empty [StyleBox] (does not display anything).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_styleboxempty.html  
     */
    class StyleBoxEmpty extends StyleBox {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStyleBoxEmpty;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStyleBoxEmpty;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStyleBoxFlat extends __RPCMapStyleBox {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStyleBoxFlat extends __NameMapStyleBox {
        set_border_width_all: "setBorderWidthAll";
        get_border_width_min: "getBorderWidthMin";
        set_border_width: "setBorderWidth";
        get_border_width: "getBorderWidth";
        set_corner_radius_all: "setCornerRadiusAll";
        set_corner_radius: "setCornerRadius";
        get_corner_radius: "getCornerRadius";
        set_expand_margin: "setExpandMargin";
        set_expand_margin_all: "setExpandMarginAll";
        get_expand_margin: "getExpandMargin";
        bg_color: "bgColor";
        draw_center: "drawCenter";
        border_width_left: "borderWidthLeft";
        border_width_top: "borderWidthTop";
        border_width_right: "borderWidthRight";
        border_width_bottom: "borderWidthBottom";
        border_color: "borderColor";
        border_blend: "borderBlend";
        corner_radius_top_left: "cornerRadiusTopLeft";
        corner_radius_top_right: "cornerRadiusTopRight";
        corner_radius_bottom_right: "cornerRadiusBottomRight";
        corner_radius_bottom_left: "cornerRadiusBottomLeft";
        corner_detail: "cornerDetail";
        expand_margin_left: "expandMarginLeft";
        expand_margin_top: "expandMarginTop";
        expand_margin_right: "expandMarginRight";
        expand_margin_bottom: "expandMarginBottom";
        shadow_color: "shadowColor";
        shadow_size: "shadowSize";
        shadow_offset: "shadowOffset";
        anti_aliasing: "antiAliasing";
        anti_aliasing_size: "antiAliasingSize";
    }
    /** A customizable [StyleBox] that doesn't use a texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_styleboxflat.html  
     */
    class StyleBoxFlat extends StyleBox {
        constructor(identifier?: any)
        /** Sets the border width to [param width] pixels for all sides. */
        setBorderWidthAll(width: int64): void
        
        /** Returns the smallest border width out of all four borders. */
        getBorderWidthMin(): int64
        
        /** Sets the specified [enum Side]'s border width to [param width] pixels. */
        setBorderWidth(margin: Side, width: int64): void
        
        /** Returns the specified [enum Side]'s border width. */
        getBorderWidth(margin: Side): int64
        
        /** Sets the corner radius to [param radius] pixels for all corners. */
        setCornerRadiusAll(radius: int64): void
        
        /** Sets the corner radius to [param radius] pixels for the given [param corner]. */
        setCornerRadius(corner: Corner, radius: int64): void
        
        /** Returns the given [param corner]'s radius. */
        getCornerRadius(corner: Corner): int64
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        setExpandMargin(margin: Side, size: float64): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        setExpandMarginAll(size: float64): void
        
        /** Returns the size of the specified [enum Side]'s expand margin. */
        getExpandMargin(margin: Side): float64
        
        /** The background color of the stylebox. */
        get bgColor(): Color
        set bgColor(value: Color)
        
        /** Toggles drawing of the inner part of the stylebox. */
        get drawCenter(): boolean
        set drawCenter(value: boolean)
        
        /** If set to a non-zero value on either axis, [member skew] distorts the StyleBox horizontally and/or vertically. This can be used for "futuristic"-style UIs. Positive values skew the StyleBox towards the right (X axis) and upwards (Y axis), while negative values skew the StyleBox towards the left (X axis) and downwards (Y axis).  
         *      
         *  **Note:** To ensure text does not touch the StyleBox's edges, consider increasing the [StyleBox]'s content margin (see [member StyleBox.content_margin_bottom]). It is preferable to increase the content margin instead of the expand margin (see [member expand_margin_bottom]), as increasing the expand margin does not increase the size of the clickable area for [Control]s.  
         */
        get skew(): Vector2
        set skew(value: Vector2)
        
        /** Border width for the left border. */
        get borderWidthLeft(): int64
        set borderWidthLeft(value: int64)
        
        /** Border width for the top border. */
        get borderWidthTop(): int64
        set borderWidthTop(value: int64)
        
        /** Border width for the right border. */
        get borderWidthRight(): int64
        set borderWidthRight(value: int64)
        
        /** Border width for the bottom border. */
        get borderWidthBottom(): int64
        set borderWidthBottom(value: int64)
        
        /** Sets the color of the border. */
        get borderColor(): Color
        set borderColor(value: Color)
        
        /** If `true`, the border will fade into the background color. */
        get borderBlend(): boolean
        set borderBlend(value: boolean)
        
        /** The top-left corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusTopLeft(): int64
        set cornerRadiusTopLeft(value: int64)
        
        /** The top-right corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusTopRight(): int64
        set cornerRadiusTopRight(value: int64)
        
        /** The bottom-right corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusBottomRight(): int64
        set cornerRadiusBottomRight(value: int64)
        
        /** The bottom-left corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusBottomLeft(): int64
        set cornerRadiusBottomLeft(value: int64)
        
        /** This sets the number of vertices used for each corner. Higher values result in rounder corners but take more processing power to compute. When choosing a value, you should take the corner radius ([method set_corner_radius_all]) into account.  
         *  For corner radii less than 10, `4` or `5` should be enough. For corner radii less than 30, values between `8` and `12` should be enough.  
         *  A corner detail of `1` will result in chamfered corners instead of rounded corners, which is useful for some artistic effects.  
         */
        get cornerDetail(): int64
        set cornerDetail(value: int64)
        
        /** Expands the stylebox outside of the control rect on the left edge. Useful in combination with [member border_width_left] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_left], [member expand_margin_left] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginLeft(): float64
        set expandMarginLeft(value: float64)
        
        /** Expands the stylebox outside of the control rect on the top edge. Useful in combination with [member border_width_top] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_top], [member expand_margin_top] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginTop(): float64
        set expandMarginTop(value: float64)
        
        /** Expands the stylebox outside of the control rect on the right edge. Useful in combination with [member border_width_right] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_right], [member expand_margin_right] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginRight(): float64
        set expandMarginRight(value: float64)
        
        /** Expands the stylebox outside of the control rect on the bottom edge. Useful in combination with [member border_width_bottom] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_bottom], [member expand_margin_bottom] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginBottom(): float64
        set expandMarginBottom(value: float64)
        
        /** The color of the shadow. This has no effect if [member shadow_size] is lower than 1. */
        get shadowColor(): Color
        set shadowColor(value: Color)
        
        /** The shadow size in pixels. */
        get shadowSize(): int64
        set shadowSize(value: int64)
        
        /** The shadow offset in pixels. Adjusts the position of the shadow relatively to the stylebox. */
        get shadowOffset(): Vector2
        set shadowOffset(value: Vector2)
        
        /** Antialiasing draws a small ring around the edges, which fades to transparency. As a result, edges look much smoother. This is only noticeable when using rounded corners or [member skew].  
         *      
         *  **Note:** When using beveled corners with 45-degree angles ([member corner_detail] = 1), it is recommended to set [member anti_aliasing] to `false` to ensure crisp visuals and avoid possible visual glitches.  
         */
        get antiAliasing(): boolean
        set antiAliasing(value: boolean)
        
        /** This changes the size of the antialiasing effect. `1.0` is recommended for an optimal result at 100% scale, identical to how rounded rectangles are rendered in web browsers and most vector drawing software.  
         *      
         *  **Note:** Higher values may produce a blur effect but can also create undesired artifacts on small boxes with large-radius corners.  
         */
        get antiAliasingSize(): float64
        set antiAliasingSize(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStyleBoxFlat;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStyleBoxFlat;
    }
}
