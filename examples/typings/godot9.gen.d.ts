// AUTO-GENERATED
declare module "godot" {
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUdpServer extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUdpServer extends __NameMapRefCounted {
        is_connection_available: "isConnectionAvailable";
        get_local_port: "getLocalPort";
        is_listening: "isListening";
        take_connection: "takeConnection";
        max_pending_connections: "maxPendingConnections";
    }
    class UdpServer extends RefCounted {
        constructor(identifier?: any)
        listen(port: int64, bindAddress?: string /* = '*' */): GError
        poll(): GError
        isConnectionAvailable(): boolean
        getLocalPort(): int64
        isListening(): boolean
        takeConnection(): null | PacketPeerUdp
        stop(): void
        get maxPendingConnections(): int64
        set maxPendingConnections(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUdpServer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUdpServer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUIConfigHelper extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUIConfigHelper extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_uiconfighelper.html */
    class UIConfigHelper extends RefCounted {
        constructor(identifier?: any)
        static getInstance(): null | UIConfigHelper
        registerFont(aliasName: string, realName: string): void
        getRealFontName(aliasName: string): string
        get defaultFont(): string
        set defaultFont(value: string)
        get buttonSound(): string
        set buttonSound(value: string)
        get buttonSoundVolumeScale(): float64
        set buttonSoundVolumeScale(value: float64)
        get defaultScrollStep(): int64
        set defaultScrollStep(value: int64)
        get defaultScrollDecelerationRate(): float64
        set defaultScrollDecelerationRate(value: float64)
        get defaultScrollTouchEffect(): boolean
        set defaultScrollTouchEffect(value: boolean)
        get defaultScrollBounceEffect(): boolean
        set defaultScrollBounceEffect(value: boolean)
        get defaultScrollBarDisplay(): int64
        set defaultScrollBarDisplay(value: int64)
        get verticalScrollBar(): string
        set verticalScrollBar(value: string)
        get horizontalScrollBar(): string
        set horizontalScrollBar(value: string)
        get touchDragSensitivity(): int64
        set touchDragSensitivity(value: int64)
        get clickDragSensitivity(): int64
        set clickDragSensitivity(value: int64)
        get touchScrollSensitivity(): int64
        set touchScrollSensitivity(value: int64)
        get defaultComboBoxVisibleItemCount(): int64
        set defaultComboBoxVisibleItemCount(value: int64)
        get globalModalWaiting(): string
        set globalModalWaiting(value: string)
        get modalLayerColor(): Color
        set modalLayerColor(value: Color)
        get tooltipsWin(): string
        set tooltipsWin(value: string)
        get bringWindowToFrontOnClick(): boolean
        set bringWindowToFrontOnClick(value: boolean)
        get windowModalWaiting(): string
        set windowModalWaiting(value: string)
        get popupMenu(): string
        set popupMenu(value: string)
        get popupMenuSeperator(): string
        set popupMenuSeperator(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUIConfigHelper;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUIConfigHelper;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUIEventDispatcher extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUIEventDispatcher extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_uieventdispatcher.html */
    class UIEventDispatcher extends RefCounted {
        static readonly ENTER = 0
        static readonly EXIT = 1
        static readonly CHANGED = 2
        static readonly SUBMIT = 3
        static readonly CLICK = 13
        static readonly TOUCHBEGIN = 10
        static readonly TOUCHMOVE = 11
        static readonly TOUCHEND = 12
        static readonly ROLLOVER = 14
        static readonly ROLLOUT = 15
        static readonly MOUSEWHEEL = 16
        static readonly RIGHTCLICK = 17
        static readonly MIDDLECLICK = 18
        static readonly KEYDOWN = 30
        static readonly KEYUP = 31
        static readonly SCROLL = 40
        static readonly SCROLLEND = 41
        static readonly PULLDOWNRELEASE = 42
        static readonly PULLUPRELEASE = 43
        static readonly POSITIONCHANGE = 20
        static readonly SIZECHANGE = 21
        static readonly CLICKITEM = 50
        static readonly CLICKLINK = 51
        static readonly CLICKMENU = 52
        static readonly RIGHTCLICKITEM = 53
        static readonly DRAGSTART = 60
        static readonly DRAGMOVE = 61
        static readonly DRAGEND = 62
        static readonly DROP = 63
        static readonly GEARSTOP = 70
        constructor(identifier?: any)
        addEventListener(type: int64, callable: Callable): void
        removeEventListener(type: int64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUIEventDispatcher;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUIEventDispatcher;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUIObjectFactoryHelper extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUIObjectFactoryHelper extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_uiobjectfactoryhelper.html */
    class UIObjectFactoryHelper extends RefCounted {
        constructor(identifier?: any)
        static getInstance(): null | UIObjectFactoryHelper
        setPackageItemExtension(url: string, creator: Callable): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUIObjectFactoryHelper;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUIObjectFactoryHelper;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUIPackage extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUIPackage extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_uipackage.html */
    class UIPackage extends RefCounted {
        constructor(identifier?: any)
        getId(): string
        getName(): string
        static getById(id: string): null | UIPackage
        static getByName(name: string): null | UIPackage
        static addPackage(assetPath: string): null | UIPackage
        static removePackage(packageIdOrName: string): void
        static removeAllPackages(): void
        static createObject(pkgName: string, resName: string): GObject
        static createObjectFromURL(url: string): GObject
        static getItemURL(pkgName: string, resName: string): string
        static registerFont(aliasName: string, realName: string): void
        static setDefaultFont(fontName: string): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUIPackage;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUIPackage;
    }
    namespace Upnp {
        enum UpnpResult {
            UpnpResultSuccess = 0,
            UpnpResultNotAuthorized = 1,
            UpnpResultPortMappingNotFound = 2,
            UpnpResultInconsistentParameters = 3,
            UpnpResultNoSuchEntryInArray = 4,
            UpnpResultActionFailed = 5,
            UpnpResultSrcIPWildcardNotPermitted = 6,
            UpnpResultExtPortWildcardNotPermitted = 7,
            UpnpResultIntPortWildcardNotPermitted = 8,
            UpnpResultRemoteHostMustBeWildcard = 9,
            UpnpResultExtPortMustBeWildcard = 10,
            UpnpResultNoPortMapsAvailable = 11,
            UpnpResultConflictWithOtherMechanism = 12,
            UpnpResultConflictWithOtherMapping = 13,
            UpnpResultSamePortValuesRequired = 14,
            UpnpResultOnlyPermanentLeaseSupported = 15,
            UpnpResultInvalidGateway = 16,
            UpnpResultInvalidPort = 17,
            UpnpResultInvalidProtocol = 18,
            UpnpResultInvalidDuration = 19,
            UpnpResultInvalidArgs = 20,
            UpnpResultInvalidResponse = 21,
            UpnpResultInvalidParam = 22,
            UpnpResultHttpError = 23,
            UpnpResultSocketError = 24,
            UpnpResultMemAllocError = 25,
            UpnpResultNoGateway = 26,
            UpnpResultNoDevices = 27,
            UpnpResultUnknownError = 28,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUpnp extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUpnp extends __NameMapRefCounted {
        get_device_count: "getDeviceCount";
        get_device: "getDevice";
        add_device: "addDevice";
        set_device: "setDevice";
        remove_device: "removeDevice";
        clear_devices: "clearDevices";
        get_gateway: "getGateway";
        query_external_address: "queryExternalAddress";
        add_port_mapping: "addPortMapping";
        delete_port_mapping: "deletePortMapping";
        discover_multicast_if: "discoverMulticastIf";
        discover_local_port: "discoverLocalPort";
        discover_ipv6: "discoverIpv6";
    }
    class Upnp extends RefCounted {
        constructor(identifier?: any)
        getDeviceCount(): int64
        getDevice(index: int64): null | UpnpDevice
        addDevice(device: UpnpDevice): void
        setDevice(index: int64, device: UpnpDevice): void
        removeDevice(index: int64): void
        clearDevices(): void
        getGateway(): null | UpnpDevice
        discover(timeout?: int64 /* = 2000 */, ttl?: int64 /* = 2 */, deviceFilter?: string /* = 'InternetGatewayDevice' */): int64
        queryExternalAddress(): string
        addPortMapping(port: int64, portInternal?: int64 /* = 0 */, desc?: string /* = '' */, proto?: string /* = 'UDP' */, duration?: int64 /* = 0 */): int64
        deletePortMapping(port: int64, proto?: string /* = 'UDP' */): int64
        get discoverMulticastIf(): string
        set discoverMulticastIf(value: string)
        get discoverLocalPort(): int64
        set discoverLocalPort(value: int64)
        get discoverIpv6(): boolean
        set discoverIpv6(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUpnp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUpnp;
    }
    namespace UpnpDevice {
        enum IgdStatus {
            IgdStatusOk = 0,
            IgdStatusHttpError = 1,
            IgdStatusHttpEmpty = 2,
            IgdStatusNoUrls = 3,
            IgdStatusNoIgd = 4,
            IgdStatusDisconnected = 5,
            IgdStatusUnknownDevice = 6,
            IgdStatusInvalidControl = 7,
            IgdStatusMallocError = 8,
            IgdStatusUnknownError = 9,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUpnpDevice extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUpnpDevice extends __NameMapRefCounted {
        is_valid_gateway: "isValidGateway";
        query_external_address: "queryExternalAddress";
        add_port_mapping: "addPortMapping";
        delete_port_mapping: "deletePortMapping";
        description_url: "descriptionUrl";
        service_type: "serviceType";
        igd_control_url: "igdControlUrl";
        igd_service_type: "igdServiceType";
        igd_our_addr: "igdOurAddr";
        igd_status: "igdStatus";
    }
    class UpnpDevice extends RefCounted {
        constructor(identifier?: any)
        isValidGateway(): boolean
        queryExternalAddress(): string
        addPortMapping(port: int64, portInternal?: int64 /* = 0 */, desc?: string /* = '' */, proto?: string /* = 'UDP' */, duration?: int64 /* = 0 */): int64
        deletePortMapping(port: int64, proto?: string /* = 'UDP' */): int64
        get descriptionUrl(): string
        set descriptionUrl(value: string)
        get serviceType(): string
        set serviceType(value: string)
        get igdControlUrl(): string
        set igdControlUrl(value: string)
        get igdServiceType(): string
        set igdServiceType(value: string)
        get igdOurAddr(): string
        set igdOurAddr(value: string)
        get igdStatus(): int64
        set igdStatus(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUpnpDevice;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUpnpDevice;
    }
    namespace UndoRedo {
        enum MergeMode {
            MergeDisable = 0,
            MergeEnds = 1,
            MergeAll = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUndoRedo extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUndoRedo extends __NameMapGObject {
        create_action: "createAction";
        commit_action: "commitAction";
        is_committing_action: "isCommittingAction";
        add_do_method: "addDoMethod";
        add_undo_method: "addUndoMethod";
        add_do_property: "addDoProperty";
        add_undo_property: "addUndoProperty";
        add_do_reference: "addDoReference";
        add_undo_reference: "addUndoReference";
        start_force_keep_in_merge_ends: "startForceKeepInMergeEnds";
        end_force_keep_in_merge_ends: "endForceKeepInMergeEnds";
        get_history_count: "getHistoryCount";
        get_current_action: "getCurrentAction";
        get_action_name: "getActionName";
        clear_history: "clearHistory";
        get_current_action_name: "getCurrentActionName";
        has_undo: "hasUndo";
        has_redo: "hasRedo";
        get_version: "getVersion";
        max_steps: "maxSteps";
        version_changed: "versionChanged";
    }
    /** Provides a high-level interface for implementing undo and redo operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_undoredo.html  
     */
    class UndoRedo extends GObject {
        constructor(identifier?: any)
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by [param merge_mode].  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         */
        createAction(name: string, mergeMode?: UndoRedo.MergeMode /* = 0 */, backwardUndoOps?: boolean /* = false */): void
        
        /** Commit the action. If [param execute] is `true` (which it is by default), all "do" methods/properties are called/set when this function is called. */
        commitAction(execute?: boolean /* = true */): void
        
        /** Returns `true` if the [UndoRedo] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        isCommittingAction(): boolean
        
        /** Register a [Callable] that will be called when the action is committed. */
        addDoMethod(callable: Callable): void
        
        /** Register a [Callable] that will be called when the action is undone. */
        addUndoMethod(callable: Callable): void
        
        /** Register a [param property] that would change its value to [param value] when the action is committed. */
        addDoProperty<T extends GObject, P extends GodotNames<T>>(object: T, property: P, value: ResolveGodotNameValue<T, P>): void
        
        /** Register a [param property] that would change its value to [param value] when the action is undone. */
        addUndoProperty<T extends GObject, P extends GodotNames<T>>(object: T, property: P, value: ResolveGodotNameValue<T, P>): void
        
        /** Register a reference to an object that will be erased if the "do" history is deleted. This is useful for objects added by the "do" action and removed by the "undo" action.  
         *  When the "do" history is deleted, if the object is a [RefCounted], it will be unreferenced. Otherwise, it will be freed. Do not use for resources.  
         *    
         */
        addDoReference(object: GObject): void
        
        /** Register a reference to an object that will be erased if the "undo" history is deleted. This is useful for objects added by the "undo" action and removed by the "do" action.  
         *  When the "undo" history is deleted, if the object is a [RefCounted], it will be unreferenced. Otherwise, it will be freed. Do not use for resources.  
         *    
         */
        addUndoReference(object: GObject): void
        
        /** Marks the next "do" and "undo" operations to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. Return to normal operation using [method end_force_keep_in_merge_ends]. */
        startForceKeepInMergeEnds(): void
        
        /** Stops marking operations as to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. See [method start_force_keep_in_merge_ends]. */
        endForceKeepInMergeEnds(): void
        
        /** Returns how many elements are in the history. */
        getHistoryCount(): int64
        
        /** Gets the index of the current action. */
        getCurrentAction(): int64
        
        /** Gets the action name from its index. */
        getActionName(id: int64): string
        
        /** Clear the undo/redo history and associated references.  
         *  Passing `false` to [param increase_version] will prevent the version number from increasing when the history is cleared.  
         */
        clearHistory(increaseVersion?: boolean /* = true */): void
        
        /** Gets the name of the current action, equivalent to `get_action_name(get_current_action())`. */
        getCurrentActionName(): string
        
        /** Returns `true` if an "undo" action is available. */
        hasUndo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        hasRedo(): boolean
        
        /** Gets the version. Every time a new action is committed, the [UndoRedo]'s version number is increased automatically.  
         *  This is useful mostly to check if something changed from a saved version.  
         */
        getVersion(): int64
        
        /** Redo the last action. */
        redo(): boolean
        
        /** Undo the last action. */
        undo(): boolean
        
        /** The maximum number of steps that can be stored in the undo/redo history. If the number of stored steps exceeds this limit, older steps are removed from history and can no longer be reached by calling [method undo]. A value of `0` or lower means no limit. */
        get maxSteps(): int64
        set maxSteps(value: int64)
        
        /** Called when [method undo] or [method redo] was called. */
        readonly versionChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUndoRedo;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUndoRedo;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapUniformSetCacheRD extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapUniformSetCacheRD extends __NameMapGObject {
        get_cache: "getCache";
    }
    /** Uniform set cache manager for Rendering Device based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_uniformsetcacherd.html  
     */
    class UniformSetCacheRD extends GObject {
        constructor(identifier?: any)
        /** Creates/returns a cached uniform set based on the provided uniforms for a given shader. */
        static getCache(shader: Rid, set: int64, uniforms: GArray<RDUniform>): Rid
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapUniformSetCacheRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapUniformSetCacheRD;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVBoxContainer extends __RPCMapBoxContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVBoxContainer extends __NameMapBoxContainer {
    }
    /** A container that arranges its child controls vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vboxcontainer.html  
     */
    class VBoxContainer<Map extends NodePathMap = any> extends BoxContainer<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVBoxContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVBoxContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVFlowContainer extends __RPCMapFlowContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVFlowContainer extends __NameMapFlowContainer {
    }
    /** A container that arranges its child controls vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vflowcontainer.html  
     */
    class VFlowContainer<Map extends NodePathMap = any> extends FlowContainer<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVFlowContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVFlowContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVScrollBar extends __RPCMapScrollBar {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVScrollBar extends __NameMapScrollBar {
    }
    /** A vertical scrollbar that goes from top (min) to bottom (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vscrollbar.html  
     */
    class VScrollBar<Map extends NodePathMap = any> extends ScrollBar<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVScrollBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVScrollBar;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVSeparator extends __RPCMapSeparator {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVSeparator extends __NameMapSeparator {
    }
    /** A vertical line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vseparator.html  
     */
    class VSeparator<Map extends NodePathMap = any> extends Separator<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVSeparator;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVSeparator;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVSlider extends __RPCMapSlider {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVSlider extends __NameMapSlider {
    }
    /** A vertical slider that goes from bottom (min) to top (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vslider.html  
     */
    class VSlider<Map extends NodePathMap = any> extends Slider<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVSlider;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVSlider;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVSplitContainer extends __RPCMapSplitContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVSplitContainer extends __NameMapSplitContainer {
    }
    /** A container that splits two child controls vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vsplitcontainer.html  
     */
    class VSplitContainer<Map extends NodePathMap = any> extends SplitContainer<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVSplitContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVSplitContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVehicleBody3D extends __RPCMapRigidBody3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVehicleBody3D extends __NameMapRigidBody3D {
        engine_force: "engineForce";
    }
    /** A 3D physics body that simulates the behavior of a car.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vehiclebody3d.html  
     */
    class VehicleBody3D<Map extends NodePathMap = any> extends RigidBody3D<Map> {
        constructor(identifier?: any)
        /** Accelerates the vehicle by applying an engine force. The vehicle is only sped up if the wheels that have [member VehicleWheel3D.use_as_traction] set to `true` and are in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the vehicle reversing.  
         */
        get engineForce(): float64
        set engineForce(value: float64)
        
        /** Slows down the vehicle by applying a braking force. The vehicle is only slowed down if the wheels are in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): float64
        set brake(value: float64)
        
        /** The steering angle for the vehicle. Setting this to a non-zero value will result in the vehicle turning when it's moving. Wheels that have [member VehicleWheel3D.use_as_steering] set to `true` will automatically be rotated.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. In code the property is set in radians.  
         */
        get steering(): float64
        set steering(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVehicleBody3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVehicleBody3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVehicleWheel3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVehicleWheel3D extends __NameMapNode3D {
        is_in_contact: "isInContact";
        get_contact_body: "getContactBody";
        get_contact_point: "getContactPoint";
        get_contact_normal: "getContactNormal";
        get_skidinfo: "getSkidinfo";
        get_rpm: "getRpm";
        engine_force: "engineForce";
        use_as_traction: "useAsTraction";
        use_as_steering: "useAsSteering";
        wheel_roll_influence: "wheelRollInfluence";
        wheel_radius: "wheelRadius";
        wheel_rest_length: "wheelRestLength";
        wheel_friction_slip: "wheelFrictionSlip";
        suspension_travel: "suspensionTravel";
        suspension_stiffness: "suspensionStiffness";
        suspension_max_force: "suspensionMaxForce";
        damping_compression: "dampingCompression";
        damping_relaxation: "dampingRelaxation";
    }
    /** A 3D physics body for a [VehicleBody3D] that simulates the behavior of a wheel.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vehiclewheel3d.html  
     */
    class VehicleWheel3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if this wheel is in contact with a surface. */
        isInContact(): boolean
        
        /** Returns the contacting body node if valid in the tree, as [Node3D]. At the moment, [GridMap] is not supported so the node will be always of type [PhysicsBody3D].  
         *  Returns `null` if the wheel is not in contact with a surface, or the contact body is not a [PhysicsBody3D].  
         */
        getContactBody(): null | Node3D
        
        /** Returns the point of the suspension's collision in world space if the wheel is in contact. If the wheel isn't in contact with anything, returns the maximum point of the wheel's ray cast in world space, which is defined by `wheel_rest_length + wheel_radius`. */
        getContactPoint(): Vector3
        
        /** Returns the normal of the suspension's collision in world space if the wheel is in contact. If the wheel isn't in contact with anything, returns a vector pointing directly along the suspension axis toward the vehicle in world space. */
        getContactNormal(): Vector3
        
        /** Returns a value between 0.0 and 1.0 that indicates whether this wheel is skidding. 0.0 is skidding (the wheel has lost grip, e.g. icy terrain), 1.0 means not skidding (the wheel has full grip, e.g. dry asphalt road). */
        getSkidinfo(): float64
        
        /** Returns the rotational speed of the wheel in revolutions per minute. */
        getRpm(): float64
        
        /** Accelerates the wheel by applying an engine force. The wheel is only sped up if it is in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the wheel reversing.  
         */
        get engineForce(): float64
        set engineForce(value: float64)
        
        /** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): float64
        set brake(value: float64)
        
        /** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
        get steering(): float64
        set steering(value: float64)
        
        /** If `true`, this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [member VehicleBody3D.engine_force] and ignored if you are using the per-wheel [member engine_force] value instead. */
        get useAsTraction(): boolean
        set useAsTraction(value: boolean)
        
        /** If `true`, this wheel will be turned when the car steers. This value is used in conjunction with [member VehicleBody3D.steering] and ignored if you are using the per-wheel [member steering] value instead. */
        get useAsSteering(): boolean
        set useAsSteering(value: boolean)
        
        /** This value affects the roll of your vehicle. If set to 1.0 for all wheels, your vehicle will resist body roll, while a value of 0.0 will be prone to rolling over. */
        get wheelRollInfluence(): float64
        set wheelRollInfluence(value: float64)
        
        /** The radius of the wheel in meters. */
        get wheelRadius(): float64
        set wheelRadius(value: float64)
        
        /** This is the distance in meters the wheel is lowered from its origin point. Don't set this to 0.0 and move the wheel into position, instead move the origin point of your wheel (the gizmo in Godot) to the position the wheel will take when bottoming out, then use the rest length to move the wheel down to the position it should be in when the car is in rest. */
        get wheelRestLength(): float64
        set wheelRestLength(value: float64)
        
        /** This determines how much grip this wheel has. It is combined with the friction setting of the surface the wheel is in contact with. 0.0 means no grip, 1.0 is normal grip. For a drift car setup, try setting the grip of the rear wheels slightly lower than the front wheels, or use a lower value to simulate tire wear.  
         *  It's best to set this to 1.0 when starting out.  
         */
        get wheelFrictionSlip(): float64
        set wheelFrictionSlip(value: float64)
        
        /** This is the distance the suspension can travel. As Godot units are equivalent to meters, keep this setting relatively low. Try a value between 0.1 and 0.3 depending on the type of car. */
        get suspensionTravel(): float64
        set suspensionTravel(value: float64)
        
        /** The stiffness of the suspension, measured in Newtons per millimeter (N/mm), or megagrams per second squared (Mg/s²). Use a value lower than 50 for an off-road car, a value between 50 and 100 for a race car and try something around 200 for something like a Formula 1 car. */
        get suspensionStiffness(): float64
        set suspensionStiffness(value: float64)
        
        /** The maximum force the spring can resist. This value should be higher than a quarter of the [member RigidBody3D.mass] of the [VehicleBody3D] or the spring will not carry the weight of the vehicle. Good results are often obtained by a value that is about 3× to 4× this number. */
        get suspensionMaxForce(): float64
        set suspensionMaxForce(value: float64)
        
        /** The damping applied to the suspension spring when being compressed, meaning when the wheel is moving up relative to the vehicle. It is measured in Newton-seconds per millimeter (N⋅s/mm), or megagrams per second (Mg/s). This value should be between 0.0 (no damping) and 1.0, but may be more. A value of 0.0 means the car will keep bouncing as the spring keeps its energy. A good value for this is around 0.3 for a normal car, 0.5 for a race car. */
        get dampingCompression(): float64
        set dampingCompression(value: float64)
        
        /** The damping applied to the suspension spring when rebounding or extending, meaning when the wheel is moving down relative to the vehicle. It is measured in Newton-seconds per millimeter (N⋅s/mm), or megagrams per second (Mg/s). This value should be between 0.0 (no damping) and 1.0, but may be more. This value should always be slightly higher than the [member damping_compression] property. For a [member damping_compression] value of 0.3, try a relaxation value of 0.5. */
        get dampingRelaxation(): float64
        set dampingRelaxation(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVehicleWheel3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVehicleWheel3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVideoStream extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVideoStream extends __NameMapResource {
        _instantiate_playback: "_instantiatePlayback";
    }
    /** Base resource for video streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_videostream.html  
     */
    class VideoStream extends Resource {
        constructor(identifier?: any)
        /** Called when the video starts playing, to initialize and return a subclass of [VideoStreamPlayback]. */
        /* gdvirtual */ _instantiatePlayback(): null | VideoStreamPlayback
        
        /** The video file path or URI that this [VideoStream] resource handles.  
         *  For [VideoStreamTheora], this filename should be an Ogg Theora video file with the `.ogv` extension.  
         */
        get file(): string
        set file(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVideoStream;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVideoStream;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVideoStreamPlayback extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVideoStreamPlayback extends __NameMapResource {
        _is_playing: "_isPlaying";
        _set_paused: "_setPaused";
        _is_paused: "_isPaused";
        _get_length: "_getLength";
        _get_playback_position: "_getPlaybackPosition";
        _set_audio_track: "_setAudioTrack";
        _get_texture: "_getTexture";
        _get_channels: "_getChannels";
        _get_mix_rate: "_getMixRate";
        mix_audio: "mixAudio";
    }
    /** Internal class used by [VideoStream] to manage playback state when played from a [VideoStreamPlayer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_videostreamplayback.html  
     */
    class VideoStreamPlayback extends Resource {
        constructor(identifier?: any)
        /** Stops playback. May be called multiple times before [method _play], or in response to [method VideoStreamPlayer.stop]. [method _is_playing] should return `false` once stopped. */
        /* gdvirtual */ _stop(): void
        
        /** Called in response to [member VideoStreamPlayer.autoplay] or [method VideoStreamPlayer.play]. Note that manual playback may also invoke [method _stop] multiple times before this method is called. [method _is_playing] should return `true` once playing. */
        /* gdvirtual */ _play(): void
        
        /** Returns the playback state, as determined by calls to [method _play] and [method _stop]. */
        /* gdvirtual */ _isPlaying(): boolean
        
        /** Set the paused status of video playback. [method _is_paused] must return [param paused]. Called in response to the [member VideoStreamPlayer.paused] setter. */
        /* gdvirtual */ _setPaused(paused: boolean): void
        
        /** Returns the paused status, as set by [method _set_paused]. */
        /* gdvirtual */ _isPaused(): boolean
        
        /** Returns the video duration in seconds, if known, or 0 if unknown. */
        /* gdvirtual */ _getLength(): float64
        
        /** Return the current playback timestamp. Called in response to the [member VideoStreamPlayer.stream_position] getter. */
        /* gdvirtual */ _getPlaybackPosition(): float64
        
        /** Seeks to [param time] seconds. Called in response to the [member VideoStreamPlayer.stream_position] setter. */
        /* gdvirtual */ _seek(time: float64): void
        
        /** Select the audio track [param idx]. Called when playback starts, and in response to the [member VideoStreamPlayer.audio_track] setter. */
        /* gdvirtual */ _setAudioTrack(idx: int64): void
        
        /** Allocates a [Texture2D] in which decoded video frames will be drawn. */
        /* gdvirtual */ _getTexture(): null | Texture2D
        
        /** Ticks video playback for [param delta] seconds. Called every frame as long as both [method _is_paused] and [method _is_playing] return `true`. */
        /* gdvirtual */ _update(delta: float64): void
        
        /** Returns the number of audio channels. */
        /* gdvirtual */ _getChannels(): int64
        
        /** Returns the audio sample rate used for mixing. */
        /* gdvirtual */ _getMixRate(): int64
        
        /** Render [param num_frames] audio frames (of [method _get_channels] floats each) from [param buffer], starting from index [param offset] in the array. Returns the number of audio frames rendered, or -1 on error. */
        mixAudio(numFrames: int64, buffer?: PackedFloat32Array | float32[] /* = [] */, offset?: int64 /* = 0 */): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVideoStreamPlayback;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVideoStreamPlayback;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVideoStreamPlayer extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVideoStreamPlayer extends __NameMapControl {
        is_playing: "isPlaying";
        get_stream_name: "getStreamName";
        get_stream_length: "getStreamLength";
        get_video_texture: "getVideoTexture";
        audio_track: "audioTrack";
        volume_db: "volumeDb";
        speed_scale: "speedScale";
        buffering_msec: "bufferingMsec";
        stream_position: "streamPosition";
    }
    /** A control used for video playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_videostreamplayer.html  
     */
    class VideoStreamPlayer<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Starts the video playback from the beginning. If the video is paused, this will not unpause the video. */
        play(): void
        
        /** Stops the video playback and sets the stream position to 0.  
         *      
         *  **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.  
         */
        stop(): void
        
        /** Returns `true` if the video is playing.  
         *      
         *  **Note:** The video is still considered playing if paused during playback.  
         */
        isPlaying(): boolean
        
        /** Returns the video stream's name, or `"<No Stream>"` if no video stream is assigned. */
        getStreamName(): string
        
        /** The length of the current stream, in seconds. */
        getStreamLength(): float64
        
        /** Returns the current frame as a [Texture2D]. */
        getVideoTexture(): null | Texture2D
        
        /** The embedded audio track to play. */
        get audioTrack(): int64
        set audioTrack(value: int64)
        
        /** The assigned video stream. See description for supported formats. */
        get stream(): null | VideoStream
        set stream(value: null | VideoStream)
        
        /** Audio volume in dB. */
        get volumeDb(): float64
        set volumeDb(value: float64)
        
        /** Audio volume as a linear value. */
        get volume(): float64
        set volume(value: float64)
        
        /** The stream's current speed scale. `1.0` is the normal speed, while `2.0` is double speed and `0.5` is half speed. A speed scale of `0.0` pauses the video, similar to setting [member paused] to `true`. */
        get speedScale(): float64
        set speedScale(value: float64)
        
        /** If `true`, playback starts when the scene loads. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the video is paused. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** If `true`, the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions. */
        get expand(): boolean
        set expand(value: boolean)
        
        /** If `true`, the video restarts when it reaches its end. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Amount of time in milliseconds to store in buffer while playing. */
        get bufferingMsec(): int64
        set bufferingMsec(value: int64)
        
        /** The current position of the stream, in seconds. */
        get streamPosition(): float64
        set streamPosition(value: float64)
        
        /** Audio bus to use for sound playback. */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Emitted when playback is finished. */
        readonly finished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVideoStreamPlayer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVideoStreamPlayer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVideoStreamTheora extends __RPCMapVideoStream {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVideoStreamTheora extends __NameMapVideoStream {
    }
    /** [VideoStream] resource for Ogg Theora videos.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_videostreamtheora.html  
     */
    class VideoStreamTheora extends VideoStream {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVideoStreamTheora;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVideoStreamTheora;
    }
    namespace Viewport {
        enum PositionalShadowAtlasQuadrantSubdiv {
            ShadowAtlasQuadrantSubdivDisabled = 0,
            ShadowAtlasQuadrantSubdiv1 = 1,
            ShadowAtlasQuadrantSubdiv4 = 2,
            ShadowAtlasQuadrantSubdiv16 = 3,
            ShadowAtlasQuadrantSubdiv64 = 4,
            ShadowAtlasQuadrantSubdiv256 = 5,
            ShadowAtlasQuadrantSubdiv1024 = 6,
            ShadowAtlasQuadrantSubdivMax = 7,
        }
        enum Scaling3DMode {
            Scaling3DModeBilinear = 0,
            Scaling3DModeFsr = 1,
            Scaling3DModeFsr2 = 2,
            Scaling3DModeMetalfxSpatial = 3,
            Scaling3DModeMetalfxTemporal = 4,
            Scaling3DModeMax = 5,
        }
        enum Msaa {
            MsaaDisabled = 0,
            Msaa2X = 1,
            Msaa4X = 2,
            Msaa8X = 3,
            MsaaMax = 4,
        }
        enum AnisotropicFiltering {
            AnisotropyDisabled = 0,
            Anisotropy2X = 1,
            Anisotropy4X = 2,
            Anisotropy8X = 3,
            Anisotropy16X = 4,
            AnisotropyMax = 5,
        }
        enum ScreenSpaceAA {
            ScreenSpaceAADisabled = 0,
            ScreenSpaceAAFxaa = 1,
            ScreenSpaceAASmaa = 2,
            ScreenSpaceAAMax = 3,
        }
        enum RenderInfo {
            RenderInfoObjectsInFrame = 0,
            RenderInfoPrimitivesInFrame = 1,
            RenderInfoDrawCallsInFrame = 2,
            RenderInfoMax = 3,
        }
        enum RenderInfoType {
            RenderInfoTypeVisible = 0,
            RenderInfoTypeShadow = 1,
            RenderInfoTypeCanvas = 2,
            RenderInfoTypeMax = 3,
        }
        enum DebugDraw {
            DebugDrawDisabled = 0,
            DebugDrawUnshaded = 1,
            DebugDrawLighting = 2,
            DebugDrawOverdraw = 3,
            DebugDrawWireframe = 4,
            DebugDrawNormalBuffer = 5,
            DebugDrawVoxelGIAlbedo = 6,
            DebugDrawVoxelGILighting = 7,
            DebugDrawVoxelGIEmission = 8,
            DebugDrawShadowAtlas = 9,
            DebugDrawDirectionalShadowAtlas = 10,
            DebugDrawSceneLuminance = 11,
            DebugDrawSsao = 12,
            DebugDrawSsil = 13,
            DebugDrawPssmSplits = 14,
            DebugDrawDecalAtlas = 15,
            DebugDrawSdfgi = 16,
            DebugDrawSdfgiProbes = 17,
            DebugDrawGIBuffer = 18,
            DebugDrawDisableLod = 19,
            DebugDrawClusterOmniLights = 20,
            DebugDrawClusterSpotLights = 21,
            DebugDrawClusterDecals = 22,
            DebugDrawClusterReflectionProbes = 23,
            DebugDrawOccluders = 24,
            DebugDrawMotionVectors = 25,
            DebugDrawInternalBuffer = 26,
        }
        enum DefaultCanvasItemTextureFilter {
            DefaultCanvasItemTextureFilterNearest = 0,
            DefaultCanvasItemTextureFilterLinear = 1,
            DefaultCanvasItemTextureFilterLinearWithMipmaps = 2,
            DefaultCanvasItemTextureFilterNearestWithMipmaps = 3,
            DefaultCanvasItemTextureFilterMax = 4,
        }
        enum DefaultCanvasItemTextureRepeat {
            DefaultCanvasItemTextureRepeatDisabled = 0,
            DefaultCanvasItemTextureRepeatEnabled = 1,
            DefaultCanvasItemTextureRepeatMirror = 2,
            DefaultCanvasItemTextureRepeatMax = 3,
        }
        enum SdfOversize {
            SdfOversize100Percent = 0,
            SdfOversize120Percent = 1,
            SdfOversize150Percent = 2,
            SdfOversize200Percent = 3,
            SdfOversizeMax = 4,
        }
        enum SdfScale {
            SdfScale100Percent = 0,
            SdfScale50Percent = 1,
            SdfScale25Percent = 2,
            SdfScaleMax = 3,
        }
        enum VrsMode {
            VrsDisabled = 0,
            VrsTexture = 1,
            VrsXR = 2,
            VrsMax = 3,
        }
        enum VrsUpdateMode {
            VrsUpdateDisabled = 0,
            VrsUpdateOnce = 1,
            VrsUpdateAlways = 2,
            VrsUpdateMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapViewport extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapViewport extends __NameMapNode {
        find_world_2d: "findWorld2D";
        get_stretch_transform: "getStretchTransform";
        get_final_transform: "getFinalTransform";
        get_screen_transform: "getScreenTransform";
        get_visible_rect: "getVisibleRect";
        get_oversampling: "getOversampling";
        get_render_info: "getRenderInfo";
        get_texture: "getTexture";
        get_viewport_rid: "getViewportRid";
        push_text_input: "pushTextInput";
        push_input: "pushInput";
        push_unhandled_input: "pushUnhandledInput";
        notify_mouse_entered: "notifyMouseEntered";
        notify_mouse_exited: "notifyMouseExited";
        get_mouse_position: "getMousePosition";
        warp_mouse: "warpMouse";
        update_mouse_cursor_state: "updateMouseCursorState";
        gui_cancel_drag: "guiCancelDrag";
        gui_get_drag_data: "guiGetDragData";
        gui_get_drag_description: "guiGetDragDescription";
        gui_set_drag_description: "guiSetDragDescription";
        gui_is_dragging: "guiIsDragging";
        gui_is_drag_successful: "guiIsDragSuccessful";
        gui_release_focus: "guiReleaseFocus";
        gui_get_focus_owner: "guiGetFocusOwner";
        gui_get_hovered_control: "guiGetHoveredControl";
        _gui_remove_focus_for_window: "_guiRemoveFocusForWindow";
        set_positional_shadow_atlas_quadrant_subdiv: "setPositionalShadowAtlasQuadrantSubdiv";
        get_positional_shadow_atlas_quadrant_subdiv: "getPositionalShadowAtlasQuadrantSubdiv";
        set_input_as_handled: "setInputAsHandled";
        is_input_handled: "isInputHandled";
        get_embedded_subwindows: "getEmbeddedSubwindows";
        set_canvas_cull_mask_bit: "setCanvasCullMaskBit";
        get_canvas_cull_mask_bit: "getCanvasCullMaskBit";
        _process_picking: "_processPicking";
        get_audio_listener_2d: "getAudioListener2D";
        get_camera_2d: "getCamera2D";
        find_world_3d: "findWorld3D";
        get_audio_listener_3d: "getAudioListener3D";
        get_camera_3d: "getCamera3D";
        disable_3d: "disable3D";
        use_xr: "useXR";
        own_world_3d: "ownWorld3D";
        world_3d: "world3D";
        world_2d: "world2D";
        transparent_bg: "transparentBg";
        handle_input_locally: "handleInputLocally";
        snap_2d_transforms_to_pixel: "snap2DTransformsToPixel";
        snap_2d_vertices_to_pixel: "snap2DVerticesToPixel";
        msaa_2d: "msaa2D";
        msaa_3d: "msaa3D";
        screen_space_aa: "screenSpaceAA";
        use_taa: "useTaa";
        use_debanding: "useDebanding";
        use_occlusion_culling: "useOcclusionCulling";
        mesh_lod_threshold: "meshLodThreshold";
        debug_draw: "debugDraw";
        use_hdr_2d: "useHdr2D";
        scaling_3d_mode: "scaling3DMode";
        scaling_3d_scale: "scaling3DScale";
        texture_mipmap_bias: "textureMipmapBias";
        anisotropic_filtering_level: "anisotropicFilteringLevel";
        fsr_sharpness: "fsrSharpness";
        vrs_mode: "vrsMode";
        vrs_update_mode: "vrsUpdateMode";
        vrs_texture: "vrsTexture";
        canvas_item_default_texture_filter: "canvasItemDefaultTextureFilter";
        canvas_item_default_texture_repeat: "canvasItemDefaultTextureRepeat";
        audio_listener_enable_2d: "audioListenerEnable2D";
        audio_listener_enable_3d: "audioListenerEnable3D";
        physics_object_picking: "physicsObjectPicking";
        physics_object_picking_sort: "physicsObjectPickingSort";
        physics_object_picking_first_only: "physicsObjectPickingFirstOnly";
        gui_disable_input: "guiDisableInput";
        gui_snap_controls_to_pixels: "guiSnapControlsToPixels";
        gui_embed_subwindows: "guiEmbedSubwindows";
        sdf_oversize: "sdfOversize";
        sdf_scale: "sdfScale";
        positional_shadow_atlas_size: "positionalShadowAtlasSize";
        positional_shadow_atlas_16_bits: "positionalShadowAtlas16Bits";
        positional_shadow_atlas_quad_0: "positionalShadowAtlasQuad0";
        positional_shadow_atlas_quad_1: "positionalShadowAtlasQuad1";
        positional_shadow_atlas_quad_2: "positionalShadowAtlasQuad2";
        positional_shadow_atlas_quad_3: "positionalShadowAtlasQuad3";
        canvas_transform: "canvasTransform";
        global_canvas_transform: "globalCanvasTransform";
        canvas_cull_mask: "canvasCullMask";
        oversampling_override: "oversamplingOverride";
        size_changed: "sizeChanged";
        gui_focus_changed: "guiFocusChanged";
    }
    /** Abstract base class for viewports. Encapsulates drawing and interaction with a game world.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_viewport.html  
     */
    class Viewport<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the first valid [World2D] for this viewport, searching the [member world_2d] property of itself and any Viewport ancestor. */
        findWorld2D(): null | World2D
        
        /** Returns the automatically computed 2D stretch transform, taking the [Viewport]'s stretch settings into account. The final value is multiplied by [member Window.content_scale_factor], but only for the root viewport. If this method is called on a [SubViewport] (e.g., in a scene tree with [SubViewportContainer] and [SubViewport]), the scale factor of the root window will not be applied. Using [method Transform2D.get_scale] on the returned value, this can be used to compensate for scaling when zooming a [Camera2D] node, or to scale down a [TextureRect] to be pixel-perfect regardless of the automatically computed scale factor.  
         *      
         *  **Note:** Due to how pixel scaling works, the returned transform's X and Y scale may differ slightly, even when [member Window.content_scale_aspect] is set to a mode that preserves the pixels' aspect ratio. If [member Window.content_scale_aspect] is [constant Window.CONTENT_SCALE_ASPECT_IGNORE], the X and Y scale may differ  *significantly* .  
         */
        getStretchTransform(): Transform2D
        
        /** Returns the transform from the viewport's coordinate system to the embedder's coordinate system. */
        getFinalTransform(): Transform2D
        
        /** Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window. */
        getScreenTransform(): Transform2D
        
        /** Returns the visible rectangle in global screen coordinates. */
        getVisibleRect(): Rect2
        
        /** Returns viewport oversampling factor. */
        getOversampling(): float64
        
        /** Returns rendering statistics of the given type. */
        getRenderInfo(type: Viewport.RenderInfoType, info: Viewport.RenderInfo): int64
        
        /** Returns the viewport's texture.  
         *      
         *  **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [method Node._ready]. To make sure the texture you get is correct, you can await [signal RenderingServer.frame_post_draw] signal.  
         *    
         *      
         *  **Note:** When [member use_hdr_2d] is `true` the returned texture will be an HDR image encoded in linear space.  
         */
        getTexture(): null | ViewportTexture
        
        /** Returns the viewport's RID from the [RenderingServer]. */
        getViewportRid(): Rid
        
        /** Helper method which calls the `set_text()` method on the currently focused [Control], provided that it is defined (e.g. if the focused Control is [Button] or [LineEdit]). */
        pushTextInput(text: string): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._input]  
         *  - [method Control._gui_input] for [Control] nodes  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         */
        pushInput(event: InputEvent, inLocalCoords?: boolean /* = false */): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         *      
         *  **Note:** This method doesn't propagate input events to embedded [Window]s or [SubViewport]s.  
         */
        pushUnhandledInput(event: InputEvent, inLocalCoords?: boolean /* = false */): void
        
        /** Inform the Viewport that the mouse has entered its area. Use this function before sending an [InputEventMouseButton] or [InputEventMouseMotion] to the [Viewport] with [method Viewport.push_input]. See also [method notify_mouse_exited].  
         *      
         *  **Note:** In most cases, it is not necessary to call this function because [SubViewport] nodes that are children of [SubViewportContainer] are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in [TextureRect] or with an [Area3D] that forwards input events.  
         */
        notifyMouseEntered(): void
        
        /** Inform the Viewport that the mouse has left its area. Use this function when the node that displays the viewport notices the mouse has left the area of the displayed viewport. See also [method notify_mouse_entered].  
         *      
         *  **Note:** In most cases, it is not necessary to call this function because [SubViewport] nodes that are children of [SubViewportContainer] are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in [TextureRect] or with an [Area3D] that forwards input events.  
         */
        notifyMouseExited(): void
        
        /** Returns the mouse's position in this [Viewport] using the coordinate system of this [Viewport]. */
        getMousePosition(): Vector2
        
        /** Moves the mouse pointer to the specified position in this [Viewport] using the coordinate system of this [Viewport].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        warpMouse(position: Vector2): void
        
        /** Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [signal Control.mouse_entered], [signal CollisionObject2D.mouse_entered], [signal CollisionObject3D.mouse_entered] and [signal Window.mouse_entered] signals and their respective `mouse_exited` counterparts. */
        updateMouseCursorState(): void
        
        /** Cancels the drag operation that was previously started through [method Control._get_drag_data] or forced with [method Control.force_drag]. */
        guiCancelDrag(): void
        
        /** Returns the drag data from the GUI, that was previously returned by [method Control._get_drag_data]. */
        guiGetDragData(): any
        
        /** Returns the drag data human-readable description. */
        guiGetDragDescription(): string
        
        /** Sets the drag data human-readable description. */
        guiSetDragDescription(description: string): void
        
        /** Returns `true` if a drag operation is currently ongoing and where the drop action could happen in this viewport.  
         *  Alternative to [constant Node.NOTIFICATION_DRAG_BEGIN] and [constant Node.NOTIFICATION_DRAG_END] when you prefer polling the value.  
         */
        guiIsDragging(): boolean
        
        /** Returns `true` if the drag operation is successful. */
        guiIsDragSuccessful(): boolean
        
        /** Removes the focus from the currently focused [Control] within this viewport. If no [Control] has the focus, does nothing. */
        guiReleaseFocus(): void
        
        /** Returns the currently focused [Control] within this viewport. If no [Control] is focused, returns `null`. */
        guiGetFocusOwner(): null | Control
        
        /** Returns the [Control] that the mouse is currently hovering over in this viewport. If no [Control] has the cursor, returns `null`.  
         *  Typically the leaf [Control] node or deepest level of the subtree which claims hover. This is very useful when used together with [method Node.is_ancestor_of] to find if the mouse is within a control tree.  
         */
        guiGetHoveredControl(): null | Control
        _guiRemoveFocusForWindow(_unnamedArg0: Node): void
        
        /** Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible. */
        setPositionalShadowAtlasQuadrantSubdiv(quadrant: int64, subdiv: Viewport.PositionalShadowAtlasQuadrantSubdiv): void
        
        /** Returns the positional shadow atlas quadrant subdivision of the specified quadrant. */
        getPositionalShadowAtlasQuadrantSubdiv(quadrant: int64): Viewport.PositionalShadowAtlasQuadrantSubdiv
        
        /** Stops the input from propagating further down the [SceneTree].  
         *      
         *  **Note:** This does not affect the methods in [Input], only the way events are propagated.  
         */
        setInputAsHandled(): void
        
        /** Returns whether the current [InputEvent] has been handled. Input events are not handled until [method set_input_as_handled] has been called during the lifetime of an [InputEvent].  
         *  This is usually done as part of input handling methods like [method Node._input], [method Control._gui_input] or others, as well as in corresponding signal handlers.  
         *  If [member handle_input_locally] is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for [method is_input_handled] instead.  
         */
        isInputHandled(): boolean
        
        /** Returns a list of the visible embedded [Window]s inside the viewport.  
         *      
         *  **Note:** [Window]s inside other viewports will not be listed.  
         */
        getEmbeddedSubwindows(): GArray<Window>
        
        /** Set/clear individual bits on the rendering layer mask. This simplifies editing this [Viewport]'s layers. */
        setCanvasCullMaskBit(layer: int64, enable: boolean): void
        
        /** Returns an individual bit on the rendering layer mask. */
        getCanvasCullMaskBit(layer: int64): boolean
        _processPicking(): void
        
        /** Returns the currently active 2D audio listener. Returns `null` if there are no active 2D audio listeners, in which case the active 2D camera will be treated as listener. */
        getAudioListener2D(): null | AudioListener2D
        
        /** Returns the currently active 2D camera. Returns `null` if there are no active cameras. */
        getCamera2D(): null | Camera2D
        
        /** Returns the first valid [World3D] for this viewport, searching the [member world_3d] property of itself and any Viewport ancestor. */
        findWorld3D(): null | World3D
        
        /** Returns the currently active 3D audio listener. Returns `null` if there are no active 3D audio listeners, in which case the active 3D camera will be treated as listener. */
        getAudioListener3D(): null | AudioListener3D
        
        /** Returns the currently active 3D camera. */
        getCamera3D(): null | Camera3D
        
        /** Disable 3D rendering (but keep 2D rendering). */
        get disable3D(): boolean
        set disable3D(value: boolean)
        
        /** If `true`, the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset. */
        get useXR(): boolean
        set useXR(value: boolean)
        
        /** If `true`, the viewport will use a unique copy of the [World3D] defined in [member world_3d]. */
        get ownWorld3D(): boolean
        set ownWorld3D(value: boolean)
        
        /** The custom [World3D] which can be used as 3D environment source. */
        get world3D(): null | World3D
        set world3D(value: null | World3D)
        
        /** The custom [World2D] which can be used as 2D environment source. */
        get world2D(): null | World2D
        set world2D(value: null | World2D)
        
        /** If `true`, the viewport should render its background as transparent.  
         *      
         *  **Note:** Due to technical limitations, certain rendering features are disabled when a viewport has a transparent background. This currently applies to screen-space reflections, subsurface scattering, and depth of field.  
         */
        get transparentBg(): boolean
        set transparentBg(value: boolean)
        
        /** If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.  
         *  A [SubViewportContainer] will automatically set this property to `false` for the [Viewport] contained inside of it.  
         *  See also [method set_input_as_handled] and [method is_input_handled].  
         */
        get handleInputLocally(): boolean
        set handleInputLocally(value: boolean)
        
        /** If `true`, [CanvasItem] nodes will internally snap to full pixels. Their position can still be sub-pixel, but the decimals will not have effect. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. */
        get snap2DTransformsToPixel(): boolean
        set snap2DTransformsToPixel(value: boolean)
        
        /** If `true`, vertices of [CanvasItem] nodes will snap to full pixels. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. */
        get snap2DVerticesToPixel(): boolean
        set snap2DVerticesToPixel(value: boolean)
        
        /** The multisample antialiasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [constant Viewport.MSAA_2X] or [constant Viewport.MSAA_4X] is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_2d] and [method RenderingServer.viewport_set_msaa_2d].  
         */
        get msaa2D(): int64
        set msaa2D(value: int64)
        
        /** The multisample antialiasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [constant Viewport.MSAA_2X] or [constant Viewport.MSAA_4X] is best unless targeting very high-end systems. See also bilinear scaling 3D [member scaling_3d_mode] for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] and [method RenderingServer.viewport_set_msaa_3d].  
         */
        get msaa3D(): int64
        set msaa3D(value: int64)
        
        /** Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa] and [method RenderingServer.viewport_set_screen_space_aa].  
         */
        get screenSpaceAA(): int64
        set screenSpaceAA(value: int64)
        
        /** Enables temporal antialiasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.  
         *      
         *  **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/use_taa] and [method RenderingServer.viewport_set_use_taa].  
         */
        get useTaa(): boolean
        set useTaa(value: boolean)
        
        /** If `true`, uses a fast post-processing filter to make banding significantly less visible. If [member use_hdr_2d] is `false`, 2D rendering is  *not*  affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS]. If [member use_hdr_2d] is `true`, debanding will only be applied if this is the root [Viewport] and will affect all 2D and 3D rendering, including canvas items.  
         *  In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding] and [method RenderingServer.viewport_set_use_debanding].  
         */
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        
        /** If `true`, [OccluderInstance3D] nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] must be set to `true` instead.  
         *      
         *  **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.  
         *      
         *  **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.  
         */
        get useOcclusionCulling(): boolean
        set useOcclusionCulling(value: boolean)
        
        /** The automatic LOD bias to use for meshes rendered within the [Viewport] (this is analogous to [member ReflectionProbe.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels] project setting.  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        get meshLodThreshold(): float64
        set meshLodThreshold(value: float64)
        
        /** The overlay mode for test rendered geometry in debug purposes. */
        get debugDraw(): int64
        set debugDraw(value: int64)
        
        /** If `true`, 2D rendering will use a high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ or Compatibility renderer, this will be an `RGBA16` framebuffer. When using the Mobile renderer, it will be an `RGB10_A2` framebuffer.  
         *  Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen).  
         *  Practically speaking, this means that the end result of the Viewport will not be clamped to the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.  
         */
        get useHdr2D(): boolean
        set useHdr2D(value: boolean)
        
        /** Sets scaling 3D mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/mode] project setting.  
         */
        get scaling3DMode(): int64
        set scaling3DMode(value: int64)
        
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [member ProjectSettings.rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.  
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/scale] project setting.  
         */
        get scaling3DScale(): float64
        set scaling3DScale(value: float64)
        
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).  
         *  Enabling temporal antialiasing ([member use_taa]) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([member screen_space_aa]) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.  
         *      
         *  **Note:** If [member scaling_3d_scale] is lower than `1.0` (exclusive), [member texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias] project setting.  
         */
        get textureMipmapBias(): float64
        set textureMipmapBias(value: float64)
        
        /** Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.  
         *  The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See [member ProjectSettings.rendering/textures/decals/filter] and [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** In 3D, for this setting to have an effect, set [member BaseMaterial3D.texture_filter] to [constant BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on materials.  
         *      
         *  **Note:** In 2D, for this setting to have an effect, set [member CanvasItem.texture_filter] to [constant CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on the [CanvasItem] node displaying the texture (or in [CanvasTexture]). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.  
         */
        get anisotropicFilteringLevel(): int64
        set anisotropicFilteringLevel(value: int64)
        
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/fsr_sharpness] project setting.  
         */
        get fsrSharpness(): float64
        set fsrSharpness(value: float64)
        
        /** The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored. */
        get vrsMode(): int64
        set vrsMode(value: int64)
        
        /** Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored. */
        get vrsUpdateMode(): int64
        set vrsUpdateMode(value: int64)
        
        /** Texture to use when [member vrs_mode] is set to [constant Viewport.VRS_TEXTURE].  
         *  The texture  *must*  use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:  
         *  [codeblock lang=text]  
         *  - 1×1 = rgb(0, 0, 0)     - #000000  
         *  - 1×2 = rgb(0, 85, 0)    - #005500  
         *  - 2×1 = rgb(85, 0, 0)    - #550000  
         *  - 2×2 = rgb(85, 85, 0)   - #555500  
         *  - 2×4 = rgb(85, 170, 0)  - #55aa00  
         *  - 4×2 = rgb(170, 85, 0)  - #aa5500  
         *  - 4×4 = rgb(170, 170, 0) - #aaaa00  
         *  - 4×8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware  
         *  - 8×4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware  
         *  - 8×8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware  
         *  [/codeblock]  
         */
        get vrsTexture(): null | Texture2D
        set vrsTexture(value: null | Texture2D)
        
        /** Sets the default filter mode used by [CanvasItem]s in this Viewport. */
        get canvasItemDefaultTextureFilter(): int64
        set canvasItemDefaultTextureFilter(value: int64)
        
        /** Sets the default repeat mode used by [CanvasItem]s in this Viewport. */
        get canvasItemDefaultTextureRepeat(): int64
        set canvasItemDefaultTextureRepeat(value: int64)
        
        /** If `true`, the viewport will process 2D audio streams. */
        get audioListenerEnable2D(): boolean
        set audioListenerEnable2D(value: boolean)
        
        /** If `true`, the viewport will process 3D audio streams. */
        get audioListenerEnable3D(): boolean
        set audioListenerEnable3D(value: boolean)
        
        /** If `true`, the objects rendered by viewport become subjects of mouse picking process.  
         *      
         *  **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.  
         */
        get physicsObjectPicking(): boolean
        set physicsObjectPicking(value: boolean)
        
        /** If `true`, objects receive mouse picking events sorted primarily by their [member CanvasItem.z_index] and secondarily by their position in the scene tree. If `false`, the order is undetermined.  
         *      
         *  **Note:** This setting is disabled by default because of its potential expensive computational cost.  
         *      
         *  **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [member CanvasItem.z_index] receives the picking event.  
         */
        get physicsObjectPickingSort(): boolean
        set physicsObjectPickingSort(value: boolean)
        
        /** If `true`, the input_event signal will only be sent to one physics object in the mouse picking process. If you want to get the top object only, you must also enable [member physics_object_picking_sort].  
         *  If `false`, an input_event signal will be sent to all physics objects in the mouse picking process.  
         *  This applies to 2D CanvasItem object picking only.  
         */
        get physicsObjectPickingFirstOnly(): boolean
        set physicsObjectPickingFirstOnly(value: boolean)
        
        /** If `true`, the viewport will not receive input events. */
        get guiDisableInput(): boolean
        set guiDisableInput(value: boolean)
        
        /** If `true`, the GUI controls on the viewport will lay pixel perfectly. */
        get guiSnapControlsToPixels(): boolean
        set guiSnapControlsToPixels(value: boolean)
        
        /** If `true`, sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If `false`, they will appear as separate windows handled by the operating system. */
        get guiEmbedSubwindows(): boolean
        set guiEmbedSubwindows(value: boolean)
        
        /** Controls how much of the original viewport's size should be covered by the 2D signed distance field. This SDF can be sampled in [CanvasItem] shaders and is also used for [GPUParticles2D] collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through [LightOccluder2D]s as the occluders leave the viewport, increase this setting.  
         *  The percentage is added on each axis and on both sides. For example, with the default [constant SDF_OVERSIZE_120_PERCENT], the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).  
         */
        get sdfOversize(): int64
        set sdfOversize(value: int64)
        
        /** The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance. */
        get sdfScale(): int64
        set sdfScale(value: int64)
        
        /** The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.  
         *      
         *  **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).  
         */
        get positionalShadowAtlasSize(): int64
        set positionalShadowAtlasSize(value: int64)
        
        /** Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
        get positionalShadowAtlas16Bits(): boolean
        set positionalShadowAtlas16Bits(value: boolean)
        
        /** The subdivision amount of the first quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad0(): int64
        set positionalShadowAtlasQuad0(value: int64)
        
        /** The subdivision amount of the second quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad1(): int64
        set positionalShadowAtlasQuad1(value: int64)
        
        /** The subdivision amount of the third quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad2(): int64
        set positionalShadowAtlasQuad2(value: int64)
        
        /** The subdivision amount of the fourth quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad3(): int64
        set positionalShadowAtlasQuad3(value: int64)
        
        /** The canvas transform of the viewport, useful for changing the on-screen positions of all child [CanvasItem]s. This is relative to the global canvas transform of the viewport. */
        get canvasTransform(): Transform2D
        set canvasTransform(value: Transform2D)
        
        /** The global canvas transform of the viewport. The canvas transform is relative to this. */
        get globalCanvasTransform(): Transform2D
        set globalCanvasTransform(value: Transform2D)
        
        /** The rendering layers in which this [Viewport] renders [CanvasItem] nodes. */
        get canvasCullMask(): int64
        set canvasCullMask(value: int64)
        
        /** If `true` and one of the following conditions are true: [member SubViewport.size_2d_override_stretch] and [member SubViewport.size_2d_override] are set, [member Window.content_scale_factor] is set and scaling is enabled, [member oversampling_override] is set, font and [DPITexture] oversampling are enabled. */
        get oversampling(): boolean
        set oversampling(value: boolean)
        
        /** If greater than zero, this value is used as the font oversampling factor, otherwise oversampling is equal to viewport scale. */
        get oversamplingOverride(): float64
        set oversamplingOverride(value: float64)
        
        /** Emitted when the size of the viewport is changed, whether by resizing of window, or some other means. */
        readonly sizeChanged: Signal<() => void>
        
        /** Emitted when a Control node grabs keyboard focus.  
         *      
         *  **Note:** A Control node losing focus doesn't cause this signal to be emitted.  
         */
        readonly guiFocusChanged: Signal<(node: Control) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapViewport;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapViewport;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapViewportTexture extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapViewportTexture extends __NameMapTexture2D {
        viewport_path: "viewportPath";
    }
    /** Provides the content of a [Viewport] as a dynamic texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_viewporttexture.html  
     */
    class ViewportTexture extends Texture2D {
        constructor(identifier?: any)
        /** The path to the [Viewport] node to display. This is relative to the local scene root (see [method Resource.get_local_scene]), **not** to the nodes that use this texture.  
         *      
         *  **Note:** In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, this path may not automatically update if the scene root cannot be found.  
         */
        get viewportPath(): NodePath
        set viewportPath(value: NodePath | string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapViewportTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapViewportTexture;
    }
    namespace VisibleOnScreenEnabler2D {
        enum EnableMode {
            EnableModeInherit = 0,
            EnableModeAlways = 1,
            EnableModeWhenPaused = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisibleOnScreenEnabler2D extends __RPCMapVisibleOnScreenNotifier2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisibleOnScreenEnabler2D extends __NameMapVisibleOnScreenNotifier2D {
        enable_mode: "enableMode";
        enable_node_path: "enableNodePath";
    }
    /** A rectangular region of 2D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visibleonscreenenabler2d.html  
     */
    class VisibleOnScreenEnabler2D<Map extends NodePathMap = any> extends VisibleOnScreenNotifier2D<Map> {
        constructor(identifier?: any)
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enableMode(): int64
        set enableMode(value: int64)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler2D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler2D] is inside the scene tree) and every time the [VisibleOnScreenEnabler2D] enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated. */
        get enableNodePath(): NodePath
        set enableNodePath(value: NodePath | string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisibleOnScreenEnabler2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisibleOnScreenEnabler2D;
    }
    namespace VisibleOnScreenEnabler3D {
        enum EnableMode {
            EnableModeInherit = 0,
            EnableModeAlways = 1,
            EnableModeWhenPaused = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisibleOnScreenEnabler3D extends __RPCMapVisibleOnScreenNotifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisibleOnScreenEnabler3D extends __NameMapVisibleOnScreenNotifier3D {
        enable_mode: "enableMode";
        enable_node_path: "enableNodePath";
    }
    /** A box-shaped region of 3D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visibleonscreenenabler3d.html  
     */
    class VisibleOnScreenEnabler3D<Map extends NodePathMap = any> extends VisibleOnScreenNotifier3D<Map> {
        constructor(identifier?: any)
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enableMode(): int64
        set enableMode(value: int64)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler3D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler3D] is inside the scene tree) and every time the [VisibleOnScreenEnabler3D] enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated. */
        get enableNodePath(): NodePath
        set enableNodePath(value: NodePath | string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisibleOnScreenEnabler3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisibleOnScreenEnabler3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisibleOnScreenNotifier2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisibleOnScreenNotifier2D extends __NameMapNode2D {
        is_on_screen: "isOnScreen";
        show_rect: "showRect";
        screen_entered: "screenEntered";
        screen_exited: "screenExited";
    }
    /** A rectangular region of 2D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visibleonscreennotifier2d.html  
     */
    class VisibleOnScreenNotifier2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** If `true`, the bounding rectangle is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier2D]'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.  
         */
        isOnScreen(): boolean
        
        /** The VisibleOnScreenNotifier2D's bounding rectangle. */
        get rect(): Rect2
        set rect(value: Rect2)
        
        /** If `true`, shows the rectangle area of [member rect] in the editor with a translucent magenta fill. Unlike changing the visibility of the VisibleOnScreenNotifier2D, this does not affect the screen culling detection. */
        get showRect(): boolean
        set showRect(value: boolean)
        
        /** Emitted when the VisibleOnScreenNotifier2D enters the screen. */
        readonly screenEntered: Signal<() => void>
        
        /** Emitted when the VisibleOnScreenNotifier2D exits the screen. */
        readonly screenExited: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisibleOnScreenNotifier2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisibleOnScreenNotifier2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisibleOnScreenNotifier3D extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisibleOnScreenNotifier3D extends __NameMapVisualInstance3D {
        is_on_screen: "isOnScreen";
        screen_entered: "screenEntered";
        screen_exited: "screenExited";
    }
    /** A box-shaped region of 3D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visibleonscreennotifier3d.html  
     */
    class VisibleOnScreenNotifier3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the bounding box is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier3D]'s visibility to be assessed once added to the scene tree, so this method will always return `false` right after it is instantiated.  
         */
        isOnScreen(): boolean
        
        /** The [VisibleOnScreenNotifier3D]'s bounding box. */
        get aabb(): Aabb
        set aabb(value: Aabb)
        
        /** Emitted when the [VisibleOnScreenNotifier3D] enters the screen. */
        readonly screenEntered: Signal<() => void>
        
        /** Emitted when the [VisibleOnScreenNotifier3D] exits the screen. */
        readonly screenExited: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisibleOnScreenNotifier3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisibleOnScreenNotifier3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualInstance3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualInstance3D extends __NameMapNode3D {
        _get_aabb: "_getAabb";
        set_base: "setBase";
        get_base: "getBase";
        get_instance: "getInstance";
        set_layer_mask_value: "setLayerMaskValue";
        get_layer_mask_value: "getLayerMaskValue";
        get_aabb: "getAabb";
        sorting_offset: "sortingOffset";
        sorting_use_aabb_center: "sortingUseAabbCenter";
    }
    /** Parent of all visual 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualinstance3d.html  
     */
    class VisualInstance3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _getAabb(): Aabb
        
        /** Sets the resource that is instantiated by this [VisualInstance3D], which changes how the engine handles the [VisualInstance3D] under the hood. Equivalent to [method RenderingServer.instance_set_base]. */
        setBase(base: Rid): void
        
        /** Returns the RID of the resource associated with this [VisualInstance3D]. For example, if the Node is a [MeshInstance3D], this will return the RID of the associated [Mesh]. */
        getBase(): Rid
        
        /** Returns the RID of this instance. This RID is the same as the RID returned by [method RenderingServer.instance_create]. This RID is needed if you want to call [RenderingServer] functions directly on this [VisualInstance3D]. */
        getInstance(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member layers], given a [param layer_number] between 1 and 20. */
        setLayerMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member layers] is enabled, given a [param layer_number] between 1 and 20. */
        getLayerMaskValue(layerNumber: int64): boolean
        
        /** Returns the [AABB] (also known as the bounding box) for this [VisualInstance3D]. */
        getAabb(): Aabb
        
        /** The render layer(s) this [VisualInstance3D] is drawn on.  
         *  This object will only be visible for [Camera3D]s whose cull mask includes any of the render layers this [VisualInstance3D] is set to.  
         *  For [Light3D]s, this can be used to control which [VisualInstance3D]s are affected by a specific light. For [GPUParticles3D], this can be used to control which particles are effected by a specific attractor. For [Decal]s, this can be used to control which [VisualInstance3D]s are affected by a specific decal.  
         *  To adjust [member layers] more easily using a script, use [method get_layer_mask_value] and [method set_layer_mask_value].  
         *      
         *  **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.  
         */
        get layers(): int64
        set layers(value: int64)
        
        /** The amount by which the depth of this [VisualInstance3D] will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the [VisualInstance3D] reliably draw on top of other [VisualInstance3D]s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this [VisualInstance3D] and the other nearby [VisualInstance3D]s. */
        get sortingOffset(): float64
        set sortingOffset(value: float64)
        
        /** If `true`, the object is sorted based on the [AABB] center. The object will be sorted based on the global position otherwise.  
         *  The [AABB] center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with [GPUParticles3D] and [CPUParticles3D].  
         */
        get sortingUseAabbCenter(): boolean
        set sortingUseAabbCenter(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualInstance3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualInstance3D;
    }
    namespace VisualShader {
        enum Type {
            TypeVertex = 0,
            TypeFragment = 1,
            TypeLight = 2,
            TypeStart = 3,
            TypeProcess = 4,
            TypeCollide = 5,
            TypeStartCustom = 6,
            TypeProcessCustom = 7,
            TypeSky = 8,
            TypeFog = 9,
            TypeMax = 10,
        }
        enum VaryingMode {
            VaryingModeVertexToFragLight = 0,
            VaryingModeFragToLight = 1,
            VaryingModeMax = 2,
        }
        enum VaryingType {
            VaryingTypeFloat = 0,
            VaryingTypeInt = 1,
            VaryingTypeUint = 2,
            VaryingTypeVector2D = 3,
            VaryingTypeVector3D = 4,
            VaryingTypeVector4D = 5,
            VaryingTypeBoolean = 6,
            VaryingTypeTransform = 7,
            VaryingTypeMax = 8,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShader extends __RPCMapShader {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShader extends __NameMapShader {
        set_mode: "setMode";
        add_node: "addNode";
        get_node: "getNode";
        set_node_position: "setNodePosition";
        get_node_position: "getNodePosition";
        get_node_list: "getNodeList";
        get_valid_node_id: "getValidNodeId";
        remove_node: "removeNode";
        replace_node: "replaceNode";
        is_node_connection: "isNodeConnection";
        can_connect_nodes: "canConnectNodes";
        connect_nodes: "connectNodes";
        disconnect_nodes: "disconnectNodes";
        connect_nodes_forced: "connectNodesForced";
        get_node_connections: "getNodeConnections";
        attach_node_to_frame: "attachNodeToFrame";
        detach_node_from_frame: "detachNodeFromFrame";
        add_varying: "addVarying";
        remove_varying: "removeVarying";
        has_varying: "hasVarying";
        _set_preview_shader_parameter: "_setPreviewShaderParameter";
        _get_preview_shader_parameter: "_getPreviewShaderParameter";
        _has_preview_shader_parameter: "_hasPreviewShaderParameter";
        _update_shader: "_updateShader";
        graph_offset: "graphOffset";
    }
    /** A custom shader program with a visual editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshader.html  
     */
    class VisualShader extends Shader {
        /** Indicates an invalid [VisualShader] node. */
        static readonly NODE_ID_INVALID = -1
        
        /** Indicates an output node of [VisualShader]. */
        static readonly NODE_ID_OUTPUT = 0
        constructor(identifier?: any)
        
        /** Sets the mode of this shader. */
        setMode(mode: Shader.Mode): void
        
        /** Adds the specified [param node] to the shader. */
        addNode(type: VisualShader.Type, node: VisualShaderNode, position: Vector2, id: int64): void
        
        /** Returns the shader node instance with specified [param type] and [param id]. */
        getNode(type: VisualShader.Type, id: int64): null | VisualShaderNode
        
        /** Sets the position of the specified node. */
        setNodePosition(type: VisualShader.Type, id: int64, position: Vector2): void
        
        /** Returns the position of the specified node within the shader graph. */
        getNodePosition(type: VisualShader.Type, id: int64): Vector2
        
        /** Returns the list of all nodes in the shader with the specified type. */
        getNodeList(type: VisualShader.Type): PackedInt32Array
        
        /** Returns next valid node ID that can be added to the shader graph. */
        getValidNodeId(type: VisualShader.Type): int64
        
        /** Removes the specified node from the shader. */
        removeNode(type: VisualShader.Type, id: int64): void
        
        /** Replaces the specified node with a node of new class type. */
        replaceNode(type: VisualShader.Type, id: int64, newClass: StringName): void
        
        /** Returns `true` if the specified node and port connection exist. */
        isNodeConnection(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): boolean
        
        /** Returns `true` if the specified nodes and ports can be connected together. */
        canConnectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): boolean
        
        /** Connects the specified nodes and ports. */
        connectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): GError
        
        /** Connects the specified nodes and ports. */
        disconnectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): void
        
        /** Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly. */
        connectNodesForced(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): void
        
        /** Returns the list of connected nodes with the specified type. */
        getNodeConnections(type: VisualShader.Type): GArray<GDictionary>
        
        /** Attaches the given node to the given frame. */
        attachNodeToFrame(type: VisualShader.Type, id: int64, frame: int64): void
        
        /** Detaches the given node from the frame it is attached to. */
        detachNodeFromFrame(type: VisualShader.Type, id: int64): void
        
        /** Adds a new varying value node to the shader. */
        addVarying(name: string, mode: VisualShader.VaryingMode, type: VisualShader.VaryingType): void
        
        /** Removes a varying value node with the given [param name]. Prints an error if a node with this name is not found. */
        removeVarying(name: string): void
        
        /** Returns `true` if the shader has a varying with the given [param name]. */
        hasVarying(name: string): boolean
        _setPreviewShaderParameter(name: string, value: any): void
        _getPreviewShaderParameter(name: string): any
        _hasPreviewShaderParameter(name: string): boolean
        _updateShader(): void
        
        /** Deprecated. */
        get graphOffset(): Vector2
        set graphOffset(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShader;
    }
    namespace VisualShaderNode {
        enum PortType {
            PortTypeScalar = 0,
            PortTypeScalarInt = 1,
            PortTypeScalarUint = 2,
            PortTypeVector2D = 3,
            PortTypeVector3D = 4,
            PortTypeVector4D = 5,
            PortTypeBoolean = 6,
            PortTypeTransform = 7,
            PortTypeSampler = 8,
            PortTypeMax = 9,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNode extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNode extends __NameMapResource {
        get_default_input_port: "getDefaultInputPort";
        _set_output_port_expanded: "_setOutputPortExpanded";
        _is_output_port_expanded: "_isOutputPortExpanded";
        set_input_port_default_value: "setInputPortDefaultValue";
        get_input_port_default_value: "getInputPortDefaultValue";
        remove_input_port_default_value: "removeInputPortDefaultValue";
        clear_default_input_values: "clearDefaultInputValues";
        output_port_for_preview: "outputPortForPreview";
        default_input_values: "defaultInputValues";
        expanded_output_ports: "expandedOutputPorts";
        linked_parent_graph_frame: "linkedParentGraphFrame";
    }
    /** Base class for [VisualShader] nodes. Not related to scene nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernode.html  
     */
    class VisualShaderNode extends Resource {
        constructor(identifier?: any)
        /** Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph. */
        getDefaultInputPort(type: VisualShaderNode.PortType): int64
        _setOutputPortExpanded(port: int64, _unnamedArg1: boolean): void
        _isOutputPortExpanded(_unnamedArg0: int64): boolean
        
        /** Sets the default [param value] for the selected input [param port]. */
        setInputPortDefaultValue(port: int64, value: any, prevValue?: any /* = {} */): void
        
        /** Returns the default value of the input [param port]. */
        getInputPortDefaultValue(port: int64): any
        
        /** Removes the default value of the input [param port]. */
        removeInputPortDefaultValue(port: int64): void
        
        /** Clears the default input ports value. */
        clearDefaultInputValues(): void
        
        /** Sets the output port index which will be showed for preview. If set to `-1` no port will be open for preview. */
        get outputPortForPreview(): int64
        set outputPortForPreview(value: int64)
        get defaultInputValues(): GArray
        set defaultInputValues(value: GArray)
        get expandedOutputPorts(): GArray
        set expandedOutputPorts(value: GArray)
        
        /** Represents the index of the frame this node is linked to. If set to `-1` the node is not linked to any frame. */
        get linkedParentGraphFrame(): int64
        set linkedParentGraphFrame(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNode;
    }
    namespace VisualShaderNodeBillboard {
        enum BillboardType {
            BillboardTypeDisabled = 0,
            BillboardTypeEnabled = 1,
            BillboardTypeFixedY = 2,
            BillboardTypeParticles = 3,
            BillboardTypeMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeBillboard extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeBillboard extends __NameMapVisualShaderNode {
        billboard_type: "billboardType";
        keep_scale: "keepScale";
    }
    /** A node that controls how the object faces the camera to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodebillboard.html  
     */
    class VisualShaderNodeBillboard extends VisualShaderNode {
        constructor(identifier?: any)
        /** Controls how the object faces the camera. */
        get billboardType(): int64
        set billboardType(value: int64)
        
        /** If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. */
        get keepScale(): boolean
        set keepScale(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeBillboard;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeBillboard;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeBooleanConstant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeBooleanConstant extends __NameMapVisualShaderNodeConstant {
    }
    /** A boolean constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodebooleanconstant.html  
     */
    class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A boolean constant which represents a state of this node. */
        get constant(): boolean
        set constant(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeBooleanConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeBooleanConstant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeBooleanParameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeBooleanParameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A boolean parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodebooleanparameter.html  
     */
    class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): boolean
        set defaultValue(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeBooleanParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeBooleanParameter;
    }
    namespace VisualShaderNodeClamp {
        enum OpType {
            OpTypeFloat = 0,
            OpTypeInt = 1,
            OpTypeUint = 2,
            OpTypeVector2D = 3,
            OpTypeVector3D = 4,
            OpTypeVector4D = 5,
            OpTypeMax = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeClamp extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeClamp extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** Clamps a value within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeclamp.html  
     */
    class VisualShaderNodeClamp extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeClamp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeClamp;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeColorConstant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeColorConstant extends __NameMapVisualShaderNodeConstant {
    }
    /** A [Color] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecolorconstant.html  
     */
    class VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Color] constant which represents a state of this node. */
        get constant(): Color
        set constant(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeColorConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeColorConstant;
    }
    namespace VisualShaderNodeColorFunc {
        enum Function {
            FuncGrayscale = 0,
            FuncHsv2Rgb = 1,
            FuncRgb2Hsv = 2,
            FuncSepia = 3,
            FuncLinearToSrgb = 4,
            FuncSrgbToLinear = 5,
            FuncMax = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeColorFunc extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeColorFunc extends __NameMapVisualShaderNode {
    }
    /** A [Color] function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecolorfunc.html  
     */
    class VisualShaderNodeColorFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the input color. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeColorFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeColorFunc;
    }
    namespace VisualShaderNodeColorOp {
        enum Operator {
            OpScreen = 0,
            OpDifference = 1,
            OpDarken = 2,
            OpLighten = 3,
            OpOverlay = 4,
            OpDodge = 5,
            OpBurn = 6,
            OpSoftLight = 7,
            OpHardLight = 8,
            OpMax = 9,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeColorOp extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeColorOp extends __NameMapVisualShaderNode {
    }
    /** A [Color] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecolorop.html  
     */
    class VisualShaderNodeColorOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. */
        get operator(): int64
        set operator(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeColorOp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeColorOp;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeColorParameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeColorParameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A [Color] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecolorparameter.html  
     */
    class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Color
        set defaultValue(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeColorParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeColorParameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeComment extends __RPCMapVisualShaderNodeFrame {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeComment extends __NameMapVisualShaderNodeFrame {
    }
    /** Only exists for compatibility. Use [VisualShaderNodeFrame] as a replacement.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecomment.html  
     */
    class VisualShaderNodeComment extends VisualShaderNodeFrame {
        constructor(identifier?: any)
        /** This property only exists to preserve data authored in earlier versions of Godot. It has currently no function. */
        get description(): string
        set description(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeComment;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeComment;
    }
    namespace VisualShaderNodeCompare {
        enum ComparisonType {
            CtypeScalar = 0,
            CtypeScalarInt = 1,
            CtypeScalarUint = 2,
            CtypeVector2D = 3,
            CtypeVector3D = 4,
            CtypeVector4D = 5,
            CtypeBoolean = 6,
            CtypeTransform = 7,
            CtypeMax = 8,
        }
        enum Function {
            FuncEqual = 0,
            FuncNotEqual = 1,
            FuncGreaterThan = 2,
            FuncGreaterThanEqual = 3,
            FuncLessThan = 4,
            FuncLessThanEqual = 5,
            FuncMax = 6,
        }
        enum Condition {
            CondAll = 0,
            CondAny = 1,
            CondMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeCompare extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeCompare extends __NameMapVisualShaderNode {
    }
    /** A comparison function for common types within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecompare.html  
     */
    class VisualShaderNodeCompare extends VisualShaderNode {
        constructor(identifier?: any)
        /** The type to be used in the comparison. */
        get type(): int64
        set type(value: int64)
        
        /** A comparison function. */
        get "function"(): int64
        set "function"(value: int64)
        
        /** Extra condition which is applied if [member type] is set to [constant CTYPE_VECTOR_3D]. */
        get condition(): int64
        set condition(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeCompare;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeCompare;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeConstant extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeConstant extends __NameMapVisualShaderNode {
    }
    /** A base type for the constants within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeconstant.html  
     */
    class VisualShaderNodeConstant extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeConstant;
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            SourceTexture = 0,
            SourcePort = 1,
            SourceMax = 2,
        }
        enum TextureType {
            TypeData = 0,
            TypeColor = 1,
            TypeNormalMap = 2,
            TypeMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeCubemap extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeCubemap extends __NameMapVisualShaderNode {
        cube_map: "cubeMap";
        texture_type: "textureType";
    }
    /** A [Cubemap] sampling node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecubemap.html  
     */
    class VisualShaderNodeCubemap extends VisualShaderNode {
        constructor(identifier?: any)
        /** Defines which source should be used for the sampling. */
        get source(): int64
        set source(value: int64)
        
        /** The [Cubemap] texture to sample when using [constant SOURCE_TEXTURE] as [member source]. */
        get cubeMap(): null | Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD
        set cubeMap(value: null | Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD)
        
        /** Defines the type of data provided by the source texture. */
        get textureType(): int64
        set textureType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeCubemap;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeCubemap;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeCubemapParameter extends __RPCMapVisualShaderNodeTextureParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeCubemapParameter extends __NameMapVisualShaderNodeTextureParameter {
    }
    /** A [Cubemap] parameter node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecubemapparameter.html  
     */
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeCubemapParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeCubemapParameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeCurveTexture extends __RPCMapVisualShaderNodeResizableBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeCurveTexture extends __NameMapVisualShaderNodeResizableBase {
    }
    /** Performs a [CurveTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecurvetexture.html  
     */
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** The source texture. */
        get texture(): null | CurveTexture
        set texture(value: null | CurveTexture)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeCurveTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeCurveTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeCurveXyzTexture extends __RPCMapVisualShaderNodeResizableBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeCurveXyzTexture extends __NameMapVisualShaderNodeResizableBase {
    }
    class VisualShaderNodeCurveXyzTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        get texture(): null | CurveXyzTexture
        set texture(value: null | CurveXyzTexture)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeCurveXyzTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeCurveXyzTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeCustom extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeCustom extends __NameMapVisualShaderNode {
        _get_name: "_getName";
        _get_description: "_getDescription";
        _get_category: "_getCategory";
        _get_return_icon_type: "_getReturnIconType";
        _get_input_port_count: "_getInputPortCount";
        _get_input_port_type: "_getInputPortType";
        _get_input_port_name: "_getInputPortName";
        _get_input_port_default_value: "_getInputPortDefaultValue";
        _get_default_input_port: "_getDefaultInputPort";
        _get_output_port_count: "_getOutputPortCount";
        _get_output_port_type: "_getOutputPortType";
        _get_output_port_name: "_getOutputPortName";
        _get_property_count: "_getPropertyCount";
        _get_property_name: "_getPropertyName";
        _get_property_default_index: "_getPropertyDefaultIndex";
        _get_property_options: "_getPropertyOptions";
        _get_code: "_getCode";
        _get_func_code: "_getFuncCode";
        _get_global_code: "_getGlobalCode";
        _is_highend: "_isHighend";
        _is_available: "_isAvailable";
        _set_input_port_default_value: "_setInputPortDefaultValue";
        _set_option_index: "_setOptionIndex";
        get_option_index: "getOptionIndex";
    }
    /** Virtual class to define custom [VisualShaderNode]s for use in the Visual Shader Editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodecustom.html  
     */
    class VisualShaderNodeCustom extends VisualShaderNode {
        constructor(identifier?: any)
        /** Override this method to define the name of the associated custom node in the Visual Shader Editor's members dialog and graph.  
         *  Defining this method is **optional**, but recommended. If not overridden, the node will be named as "Unnamed".  
         */
        /* gdvirtual */ _getName(): string
        
        /** Override this method to define the description of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getDescription(): string
        
        /** Override this method to define the path to the associated custom node in the Visual Shader Editor's members dialog. The path may look like `"MyGame/MyFunctions/Noise"`.  
         *  Defining this method is **optional**. If not overridden, the node will be filed under the "Addons" category.  
         */
        /* gdvirtual */ _getCategory(): string
        
        /** Override this method to define the return icon of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, no return icon is shown.  
         */
        /* gdvirtual */ _getReturnIconType(): VisualShaderNode.PortType
        
        /** Override this method to define the number of input ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no input ports.  
         */
        /* gdvirtual */ _getInputPortCount(): int64
        
        /** Override this method to define the returned type of each input port of the associated custom node.  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _getInputPortType(port: int64): VisualShaderNode.PortType
        
        /** Override this method to define the names of input ports of the associated custom node. The names are used both for the input slots in the editor and as identifiers in the shader code, and are passed in the `input_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports are named as `"in" + str(port)`.  
         */
        /* gdvirtual */ _getInputPortName(port: int64): string
        
        /** Override this method to define the default value for the specified input port. Prefer use this over [method VisualShaderNode.set_input_port_default_value].  
         *  Defining this method is **required**. If not overridden, the node has no default values for their input ports.  
         */
        /* gdvirtual */ _getInputPortDefaultValue(port: int64): any
        
        /** Override this method to define the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.  
         *  Defining this method is **optional**. If not overridden, the connection will be created to the first valid port.  
         */
        /* gdvirtual */ _getDefaultInputPort(type: VisualShaderNode.PortType): int64
        
        /** Override this method to define the number of output ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no output ports.  
         */
        /* gdvirtual */ _getOutputPortCount(): int64
        
        /** Override this method to define the returned type of each output port of the associated custom node.  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _getOutputPortType(port: int64): VisualShaderNode.PortType
        
        /** Override this method to define the names of output ports of the associated custom node. The names are used both for the output slots in the editor and as identifiers in the shader code, and are passed in the `output_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports are named as `"out" + str(port)`.  
         */
        /* gdvirtual */ _getOutputPortName(port: int64): string
        
        /** Override this method to define the number of the properties.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyCount(): int64
        
        /** Override this method to define the names of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyName(index: int64): string
        
        /** Override this method to define the default index of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyDefaultIndex(index: int64): int64
        
        /** Override this method to define the options inside the drop-down list property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyOptions(index: int64): PackedStringArray
        
        /** Override this method to define the actual shader code of the associated custom node. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  The [param input_vars] and [param output_vars] arrays contain the string names of the various input and output variables, as defined by `_get_input_*` and `_get_output_*` virtual methods in this class.  
         *  The output ports can be assigned values in the shader code. For example, `return output_vars[0] + " = " + input_vars[0] + ";"`.  
         *  You can customize the generated code based on the shader [param mode] and/or [param type].  
         *  Defining this method is **required**.  
         */
        /* gdvirtual */ _getCode(inputVars: GArray<string>, outputVars: GArray<string>, mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add a shader code to the beginning of each shader function (once). The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  If there are multiple custom nodes of different types which use this feature the order of each insertion is undefined.  
         *  You can customize the generated code based on the shader [param mode] and/or [param type].  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getFuncCode(mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add shader code on top of the global shader, to define your own standard library of reusable methods, varyings, constants, uniforms, etc. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  Be careful with this functionality as it can cause name conflicts with other custom nodes, so be sure to give the defined entities unique names.  
         *  You can customize the generated code based on the shader [param mode].  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getGlobalCode(mode: Shader.Mode): string
        
        /** Override this method to enable high-end mark in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, it's `false`.  
         */
        /* gdvirtual */ _isHighend(): boolean
        
        /** Override this method to prevent the node to be visible in the member dialog for the certain [param mode] and/or [param type].  
         *  Defining this method is **optional**. If not overridden, it's `true`.  
         */
        /* gdvirtual */ _isAvailable(mode: Shader.Mode, type: VisualShader.Type): boolean
        _setInputPortDefaultValue(port: int64, value: any): void
        _setOptionIndex(option: int64, value: int64): void
        
        /** Returns the selected index of the drop-down list option within a graph. You may use this function to define the specific behavior in the [method _get_code] or [method _get_global_code]. */
        getOptionIndex(option: int64): int64
        get initialized(): boolean
        set initialized(value: boolean)
        get properties(): string
        set properties(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeCustom;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeCustom;
    }
    namespace VisualShaderNodeDerivativeFunc {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector3D = 2,
            OpTypeVector4D = 3,
            OpTypeMax = 4,
        }
        enum Function {
            FuncSum = 0,
            FuncX = 1,
            FuncY = 2,
            FuncMax = 3,
        }
        enum Precision {
            PrecisionNone = 0,
            PrecisionCoarse = 1,
            PrecisionFine = 2,
            PrecisionMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeDerivativeFunc extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeDerivativeFunc extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** Calculates a derivative within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodederivativefunc.html  
     */
    class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        
        /** A derivative function type. */
        get "function"(): int64
        set "function"(value: int64)
        
        /** Sets the level of precision to use for the derivative function. When using the Compatibility renderer, this setting has no effect. */
        get precision(): int64
        set precision(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeDerivativeFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeDerivativeFunc;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeDeterminant extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeDeterminant extends __NameMapVisualShaderNode {
    }
    /** Calculates the determinant of a [Transform3D] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodedeterminant.html  
     */
    class VisualShaderNodeDeterminant extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeDeterminant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeDeterminant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeDistanceFade extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeDistanceFade extends __NameMapVisualShaderNode {
    }
    /** A visual shader node representing distance fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodedistancefade.html  
     */
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeDistanceFade;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeDistanceFade;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeDotProduct extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeDotProduct extends __NameMapVisualShaderNode {
    }
    /** Calculates a dot product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodedotproduct.html  
     */
    class VisualShaderNodeDotProduct extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeDotProduct;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeDotProduct;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeExpression extends __RPCMapVisualShaderNodeGroupBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeExpression extends __NameMapVisualShaderNodeGroupBase {
    }
    /** A custom visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeexpression.html  
     */
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        constructor(identifier?: any)
        /** An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function (`vertex`, `fragment`, or `light`), and thus cannot be used to declare functions, varyings, uniforms, or global constants. */
        get expression(): string
        set expression(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeExpression;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeExpression;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeFaceForward extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeFaceForward extends __NameMapVisualShaderNodeVectorBase {
    }
    /** Returns the vector that points in the same direction as a reference vector within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodefaceforward.html  
     */
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeFaceForward;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeFaceForward;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeFloatConstant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeFloatConstant extends __NameMapVisualShaderNodeConstant {
    }
    /** A scalar floating-point constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodefloatconstant.html  
     */
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A floating-point constant which represents a state of this node. */
        get constant(): float64
        set constant(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeFloatConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeFloatConstant;
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            FuncSin = 0,
            FuncCos = 1,
            FuncTan = 2,
            FuncAsin = 3,
            FuncAcos = 4,
            FuncAtan = 5,
            FuncSinh = 6,
            FuncCosh = 7,
            FuncTanh = 8,
            FuncLog = 9,
            FuncExp = 10,
            FuncSqrt = 11,
            FuncAbs = 12,
            FuncSign = 13,
            FuncFloor = 14,
            FuncRound = 15,
            FuncCeil = 16,
            FuncFract = 17,
            FuncSaturate = 18,
            FuncNegate = 19,
            FuncAcosh = 20,
            FuncAsinh = 21,
            FuncAtanh = 22,
            FuncDegrees = 23,
            FuncExp2 = 24,
            FuncInverseSqrt = 25,
            FuncLog2 = 26,
            FuncRadians = 27,
            FuncReciprocal = 28,
            FuncRoundeven = 29,
            FuncTrunc = 30,
            FuncOneminus = 31,
            FuncMax = 32,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeFloatFunc extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeFloatFunc extends __NameMapVisualShaderNode {
    }
    /** A scalar floating-point function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodefloatfunc.html  
     */
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the scalar. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeFloatFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeFloatFunc;
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpPow = 5,
            OpMax = 6,
            OpMin = 7,
            OpAtan2 = 8,
            OpStep = 9,
            OpEnumSize = 10,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeFloatOp extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeFloatOp extends __NameMapVisualShaderNode {
    }
    /** A floating-point scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodefloatop.html  
     */
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. */
        get operator(): int64
        set operator(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeFloatOp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeFloatOp;
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            HintNone = 0,
            HintRange = 1,
            HintRangeStep = 2,
            HintMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeFloatParameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeFloatParameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A scalar float parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodefloatparameter.html  
     */
    class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** A hint applied to the uniform, which controls the values it can take when set through the Inspector. */
        get hint(): int64
        set hint(value: int64)
        
        /** Maximum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get min(): float64
        set min(value: float64)
        
        /** Minimum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get max(): float64
        set max(value: float64)
        
        /** Step (increment) value for the range hint with step. Used if [member hint] is set to [constant HINT_RANGE_STEP]. */
        get step(): float64
        set step(value: float64)
        
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): float64
        set defaultValue(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeFloatParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeFloatParameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeFrame extends __RPCMapVisualShaderNodeResizableBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeFrame extends __NameMapVisualShaderNodeResizableBase {
        add_attached_node: "addAttachedNode";
        remove_attached_node: "removeAttachedNode";
        tint_color_enabled: "tintColorEnabled";
        tint_color: "tintColor";
        attached_nodes: "attachedNodes";
    }
    /** A frame other visual shader nodes can be attached to for better organization.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeframe.html  
     */
    class VisualShaderNodeFrame extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** Adds a node to the list of nodes attached to the frame. Should not be called directly, use the [method VisualShader.attach_node_to_frame] method instead. */
        addAttachedNode(node: int64): void
        
        /** Removes a node from the list of nodes attached to the frame. Should not be called directly, use the [method VisualShader.detach_node_from_frame] method instead. */
        removeAttachedNode(node: int64): void
        
        /** The title of the node. */
        get title(): string
        set title(value: string)
        
        /** If `true`, the frame will be tinted with the color specified in [member tint_color]. */
        get tintColorEnabled(): boolean
        set tintColorEnabled(value: boolean)
        
        /** The color of the frame when [member tint_color_enabled] is `true`. */
        get tintColor(): Color
        set tintColor(value: Color)
        
        /** If `true`, the frame will automatically resize to enclose all attached nodes. */
        get autoshrink(): boolean
        set autoshrink(value: boolean)
        
        /** The list of nodes attached to the frame. */
        get attachedNodes(): PackedInt32Array
        set attachedNodes(value: PackedInt32Array | int32[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeFrame;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeFrame;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeFresnel extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeFresnel extends __NameMapVisualShaderNode {
    }
    /** A Fresnel effect to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodefresnel.html  
     */
    class VisualShaderNodeFresnel extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeFresnel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeFresnel;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeGlobalExpression extends __RPCMapVisualShaderNodeExpression {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeGlobalExpression extends __NameMapVisualShaderNodeExpression {
    }
    /** A custom global visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeglobalexpression.html  
     */
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeGlobalExpression;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeGlobalExpression;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeGroupBase extends __RPCMapVisualShaderNodeResizableBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeGroupBase extends __NameMapVisualShaderNodeResizableBase {
        set_inputs: "setInputs";
        get_inputs: "getInputs";
        set_outputs: "setOutputs";
        get_outputs: "getOutputs";
        is_valid_port_name: "isValidPortName";
        add_input_port: "addInputPort";
        remove_input_port: "removeInputPort";
        get_input_port_count: "getInputPortCount";
        has_input_port: "hasInputPort";
        clear_input_ports: "clearInputPorts";
        add_output_port: "addOutputPort";
        remove_output_port: "removeOutputPort";
        get_output_port_count: "getOutputPortCount";
        has_output_port: "hasOutputPort";
        clear_output_ports: "clearOutputPorts";
        set_input_port_name: "setInputPortName";
        set_input_port_type: "setInputPortType";
        set_output_port_name: "setOutputPortName";
        set_output_port_type: "setOutputPortType";
        get_free_input_port_id: "getFreeInputPortId";
        get_free_output_port_id: "getFreeOutputPortId";
    }
    /** Base class for a family of nodes with variable number of input and output ports within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodegroupbase.html  
     */
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** Defines all input ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_input_port]). */
        setInputs(inputs: string): void
        
        /** Returns a [String] description of the input ports as a colon-separated list using the format `id,type,name;` (see [method add_input_port]). */
        getInputs(): string
        
        /** Defines all output ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_output_port]). */
        setOutputs(outputs: string): void
        
        /** Returns a [String] description of the output ports as a colon-separated list using the format `id,type,name;` (see [method add_output_port]). */
        getOutputs(): string
        
        /** Returns `true` if the specified port name does not override an existed port name and is valid within the shader. */
        isValidPortName(name: string): boolean
        
        /** Adds an input port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        addInputPort(id: int64, type: int64, name: string): void
        
        /** Removes the specified input port. */
        removeInputPort(id: int64): void
        
        /** Returns the number of input ports in use. Alternative for [method get_free_input_port_id]. */
        getInputPortCount(): int64
        
        /** Returns `true` if the specified input port exists. */
        hasInputPort(id: int64): boolean
        
        /** Removes all previously specified input ports. */
        clearInputPorts(): void
        
        /** Adds an output port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        addOutputPort(id: int64, type: int64, name: string): void
        
        /** Removes the specified output port. */
        removeOutputPort(id: int64): void
        
        /** Returns the number of output ports in use. Alternative for [method get_free_output_port_id]. */
        getOutputPortCount(): int64
        
        /** Returns `true` if the specified output port exists. */
        hasOutputPort(id: int64): boolean
        
        /** Removes all previously specified output ports. */
        clearOutputPorts(): void
        
        /** Renames the specified input port. */
        setInputPortName(id: int64, name: string): void
        
        /** Sets the specified input port's type (see [enum VisualShaderNode.PortType]). */
        setInputPortType(id: int64, type: int64): void
        
        /** Renames the specified output port. */
        setOutputPortName(id: int64, name: string): void
        
        /** Sets the specified output port's type (see [enum VisualShaderNode.PortType]). */
        setOutputPortType(id: int64, type: int64): void
        
        /** Returns a free input port ID which can be used in [method add_input_port]. */
        getFreeInputPortId(): int64
        
        /** Returns a free output port ID which can be used in [method add_output_port]. */
        getFreeOutputPortId(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeGroupBase;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeGroupBase;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeIf extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeIf extends __NameMapVisualShaderNode {
    }
    /** Outputs a 3D vector based on the result of a floating-point comparison within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeif.html  
     */
    class VisualShaderNodeIf extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeIf;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeIf;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeInput extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeInput extends __NameMapVisualShaderNode {
        get_input_real_name: "getInputRealName";
        input_name: "inputName";
        input_type_changed: "inputTypeChanged";
    }
    /** Represents the input shader parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeinput.html  
     */
    class VisualShaderNodeInput extends VisualShaderNode {
        constructor(identifier?: any)
        /** Returns a translated name of the current constant in the Godot Shader Language. E.g. `"ALBEDO"` if the [member input_name] equal to `"albedo"`. */
        getInputRealName(): string
        
        /** One of the several input constants in lower-case style like: "vertex" (`VERTEX`) or "point_size" (`POINT_SIZE`). */
        get inputName(): StringName
        set inputName(value: StringName)
        
        /** Emitted when input is changed via [member input_name]. */
        readonly inputTypeChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeInput;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeInput;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeIntConstant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeIntConstant extends __NameMapVisualShaderNodeConstant {
    }
    /** A scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeintconstant.html  
     */
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** An integer constant which represents a state of this node. */
        get constant(): int64
        set constant(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeIntConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeIntConstant;
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            FuncAbs = 0,
            FuncNegate = 1,
            FuncSign = 2,
            FuncBitwiseNot = 3,
            FuncMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeIntFunc extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeIntFunc extends __NameMapVisualShaderNode {
    }
    /** A scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeintfunc.html  
     */
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the scalar. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeIntFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeIntFunc;
    }
    namespace VisualShaderNodeIntOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpMax = 5,
            OpMin = 6,
            OpBitwiseAnd = 7,
            OpBitwiseOr = 8,
            OpBitwiseXor = 9,
            OpBitwiseLeftShift = 10,
            OpBitwiseRightShift = 11,
            OpEnumSize = 12,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeIntOp extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeIntOp extends __NameMapVisualShaderNode {
    }
    /** An integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeintop.html  
     */
    class VisualShaderNodeIntOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. */
        get operator(): int64
        set operator(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeIntOp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeIntOp;
    }
    namespace VisualShaderNodeIntParameter {
        enum Hint {
            HintNone = 0,
            HintRange = 1,
            HintRangeStep = 2,
            HintEnum = 3,
            HintMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeIntParameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeIntParameter extends __NameMapVisualShaderNodeParameter {
        enum_names: "enumNames";
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A visual shader node for shader parameter (uniform) of type [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeintparameter.html  
     */
    class VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Range hint of this node. Use it to customize valid parameter range. */
        get hint(): int64
        set hint(value: int64)
        
        /** The minimum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get min(): int64
        set min(value: int64)
        
        /** The maximum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get max(): int64
        set max(value: int64)
        
        /** The step between parameter's values. Forces the parameter to be a multiple of the given value. [member hint] must be [constant HINT_RANGE_STEP] for this to take effect. */
        get step(): int64
        set step(value: int64)
        
        /** The names used for the enum select in the editor. [member hint] must be [constant HINT_ENUM] for this to take effect. */
        get enumNames(): PackedStringArray
        set enumNames(value: PackedStringArray | string[])
        
        /** If `true`, the node will have a custom default value. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get defaultValue(): int64
        set defaultValue(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeIntParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeIntParameter;
    }
    namespace VisualShaderNodeIs {
        enum Function {
            FuncIsInf = 0,
            FuncIsNan = 1,
            FuncMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeIs extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeIs extends __NameMapVisualShaderNode {
    }
    /** A boolean comparison operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeis.html  
     */
    class VisualShaderNodeIs extends VisualShaderNode {
        constructor(identifier?: any)
        /** The comparison function. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeIs;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeIs;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeLinearSceneDepth extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeLinearSceneDepth extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that returns the depth value of the DEPTH_TEXTURE node in a linear space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodelinearscenedepth.html  
     */
    class VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeLinearSceneDepth;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeLinearSceneDepth;
    }
    namespace VisualShaderNodeMix {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeMix extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeMix extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** Linearly interpolates between two values within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodemix.html  
     */
    class VisualShaderNodeMix extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeMix;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeMix;
    }
    namespace VisualShaderNodeMultiplyAdd {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector3D = 2,
            OpTypeVector4D = 3,
            OpTypeMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeMultiplyAdd extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeMultiplyAdd extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** Performs a fused multiply-add operation within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodemultiplyadd.html  
     */
    class VisualShaderNodeMultiplyAdd extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeMultiplyAdd;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeMultiplyAdd;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeOuterProduct extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeOuterProduct extends __NameMapVisualShaderNode {
    }
    /** Calculates an outer product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeouterproduct.html  
     */
    class VisualShaderNodeOuterProduct extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeOuterProduct;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeOuterProduct;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeOutput extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeOutput extends __NameMapVisualShaderNode {
    }
    /** Represents the output shader parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeoutput.html  
     */
    class VisualShaderNodeOutput extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeOutput;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeOutput;
    }
    namespace VisualShaderNodeParameter {
        enum Qualifier {
            QualNone = 0,
            QualGlobal = 1,
            QualInstance = 2,
            QualMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParameter extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParameter extends __NameMapVisualShaderNode {
        parameter_name: "parameterName";
    }
    /** A base type for the parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparameter.html  
     */
    class VisualShaderNodeParameter extends VisualShaderNode {
        constructor(identifier?: any)
        /** Name of the parameter, by which it can be accessed through the [ShaderMaterial] properties. */
        get parameterName(): StringName
        set parameterName(value: StringName)
        
        /** Defines the scope of the parameter. */
        get qualifier(): int64
        set qualifier(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParameterRef extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParameterRef extends __NameMapVisualShaderNode {
        parameter_name: "parameterName";
        param_type: "paramType";
    }
    /** A reference to an existing [VisualShaderNodeParameter].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparameterref.html  
     */
    class VisualShaderNodeParameterRef extends VisualShaderNode {
        constructor(identifier?: any)
        /** The name of the parameter which this reference points to. */
        get parameterName(): StringName
        set parameterName(value: StringName)
        get paramType(): int64
        set paramType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParameterRef;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParameterRef;
    }
    namespace VisualShaderNodeParticleAccelerator {
        enum Mode {
            ModeLinear = 0,
            ModeRadial = 1,
            ModeTangential = 2,
            ModeMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleAccelerator extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleAccelerator extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that accelerates particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticleaccelerator.html  
     */
    class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
        constructor(identifier?: any)
        /** Defines in what manner the particles will be accelerated. */
        get mode(): int64
        set mode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleAccelerator;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleAccelerator;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleBoxEmitter extends __RPCMapVisualShaderNodeParticleEmitter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleBoxEmitter extends __NameMapVisualShaderNodeParticleEmitter {
    }
    /** A visual shader node that makes particles emitted in a box shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticleboxemitter.html  
     */
    class VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleBoxEmitter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleBoxEmitter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleConeVelocity extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleConeVelocity extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that makes particles move in a cone shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticleconevelocity.html  
     */
    class VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleConeVelocity;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleConeVelocity;
    }
    namespace VisualShaderNodeParticleEmit {
        enum EmitFlags {
            EmitFlagPosition = 1,
            EmitFlagRotScale = 2,
            EmitFlagVelocity = 4,
            EmitFlagColor = 8,
            EmitFlagCustom = 16,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleEmit extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleEmit extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that forces to emit a particle from a sub-emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticleemit.html  
     */
    class VisualShaderNodeParticleEmit extends VisualShaderNode {
        constructor(identifier?: any)
        /** Flags used to override the properties defined in the sub-emitter's process material. */
        get flags(): int64
        set flags(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleEmit;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleEmit;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleEmitter extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleEmitter extends __NameMapVisualShaderNode {
        mode_2d: "mode2D";
    }
    /** A base class for particle emitters.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticleemitter.html  
     */
    class VisualShaderNodeParticleEmitter extends VisualShaderNode {
        constructor(identifier?: any)
        /** If `true`, the result of this emitter is projected to 2D space. By default it is `false` and meant for use in 3D space. */
        get mode2D(): boolean
        set mode2D(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleEmitter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleEmitter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleMeshEmitter extends __RPCMapVisualShaderNodeParticleEmitter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleMeshEmitter extends __NameMapVisualShaderNodeParticleEmitter {
        use_all_surfaces: "useAllSurfaces";
        surface_index: "surfaceIndex";
    }
    /** A visual shader node that makes particles emitted in a shape defined by a [Mesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticlemeshemitter.html  
     */
    class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
        /** The [Mesh] that defines emission shape. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** If `true`, the particles will emit from all surfaces of the mesh. */
        get useAllSurfaces(): boolean
        set useAllSurfaces(value: boolean)
        
        /** Index of the surface that emits particles. [member use_all_surfaces] must be `false` for this to take effect. */
        get surfaceIndex(): int64
        set surfaceIndex(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleMeshEmitter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleMeshEmitter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleMultiplyByAxisAngle extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleMultiplyByAxisAngle extends __NameMapVisualShaderNode {
        degrees_mode: "degreesMode";
    }
    /** A visual shader helper node for multiplying position and rotation of particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticlemultiplybyaxisangle.html  
     */
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        constructor(identifier?: any)
        /** If `true`, the angle will be interpreted in degrees instead of radians. */
        get degreesMode(): boolean
        set degreesMode(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleMultiplyByAxisAngle;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleMultiplyByAxisAngle;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleOutput extends __RPCMapVisualShaderNodeOutput {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleOutput extends __NameMapVisualShaderNodeOutput {
    }
    /** Visual shader node that defines output values for particle emitting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticleoutput.html  
     */
    class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleOutput;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleOutput;
    }
    namespace VisualShaderNodeParticleRandomness {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector3D = 2,
            OpTypeVector4D = 3,
            OpTypeMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleRandomness extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleRandomness extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** Visual shader node for randomizing particle values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticlerandomness.html  
     */
    class VisualShaderNodeParticleRandomness extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleRandomness;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleRandomness;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleRingEmitter extends __RPCMapVisualShaderNodeParticleEmitter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleRingEmitter extends __NameMapVisualShaderNodeParticleEmitter {
    }
    /** A visual shader node that makes particles emitted in a ring shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticleringemitter.html  
     */
    class VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleRingEmitter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleRingEmitter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeParticleSphereEmitter extends __RPCMapVisualShaderNodeParticleEmitter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeParticleSphereEmitter extends __NameMapVisualShaderNodeParticleEmitter {
    }
    /** A visual shader node that makes particles emitted in a sphere shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeparticlesphereemitter.html  
     */
    class VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeParticleSphereEmitter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeParticleSphereEmitter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeProximityFade extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeProximityFade extends __NameMapVisualShaderNode {
    }
    /** A visual shader node representing proximity fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeproximityfade.html  
     */
    class VisualShaderNodeProximityFade extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeProximityFade;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeProximityFade;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeRandomRange extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeRandomRange extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that generates a pseudo-random scalar.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernoderandomrange.html  
     */
    class VisualShaderNodeRandomRange extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeRandomRange;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeRandomRange;
    }
    namespace VisualShaderNodeRemap {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeRemap extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeRemap extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** A visual shader node for remap function.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernoderemap.html  
     */
    class VisualShaderNodeRemap extends VisualShaderNode {
        constructor(identifier?: any)
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeRemap;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeRemap;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeReroute extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeReroute extends __NameMapVisualShaderNode {
        port_type: "portType";
    }
    /** A node that allows rerouting a connection within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodereroute.html  
     */
    class VisualShaderNodeReroute extends VisualShaderNode {
        constructor(identifier?: any)
        get portType(): int64
        set portType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeReroute;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeReroute;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeResizableBase extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeResizableBase extends __NameMapVisualShaderNode {
    }
    /** Base class for resizable nodes in a visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernoderesizablebase.html  
     */
    class VisualShaderNodeResizableBase extends VisualShaderNode {
        constructor(identifier?: any)
        /** The size of the node in the visual shader graph. */
        get size(): Vector2
        set size(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeResizableBase;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeResizableBase;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeRotationByAxis extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeRotationByAxis extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that modifies the rotation of the object using a rotation matrix.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernoderotationbyaxis.html  
     */
    class VisualShaderNodeRotationByAxis extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeRotationByAxis;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeRotationByAxis;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeSdfRaymarch extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeSdfRaymarch extends __NameMapVisualShaderNode {
    }
    class VisualShaderNodeSdfRaymarch extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeSdfRaymarch;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeSdfRaymarch;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeSdfToScreenUV extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeSdfToScreenUV extends __NameMapVisualShaderNode {
    }
    class VisualShaderNodeSdfToScreenUV extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeSdfToScreenUV;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeSdfToScreenUV;
    }
    namespace VisualShaderNodeSample3D {
        enum Source {
            SourceTexture = 0,
            SourcePort = 1,
            SourceMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeSample3D extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeSample3D extends __NameMapVisualShaderNode {
    }
    /** A base node for nodes which samples 3D textures in the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodesample3d.html  
     */
    class VisualShaderNodeSample3D extends VisualShaderNode {
        constructor(identifier?: any)
        /** An input source type. */
        get source(): int64
        set source(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeSample3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeSample3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeScreenNormalWorldSpace extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeScreenNormalWorldSpace extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that unpacks the screen normal texture in World Space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodescreennormalworldspace.html  
     */
    class VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeScreenNormalWorldSpace;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeScreenNormalWorldSpace;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeScreenUVToSdf extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeScreenUVToSdf extends __NameMapVisualShaderNode {
    }
    class VisualShaderNodeScreenUVToSdf extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeScreenUVToSdf;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeScreenUVToSdf;
    }
    namespace VisualShaderNodeSmoothStep {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeSmoothStep extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeSmoothStep extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** Calculates a SmoothStep function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodesmoothstep.html  
     */
    class VisualShaderNodeSmoothStep extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeSmoothStep;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeSmoothStep;
    }
    namespace VisualShaderNodeStep {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeStep extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeStep extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** Calculates a Step function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodestep.html  
     */
    class VisualShaderNodeStep extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeStep;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeStep;
    }
    namespace VisualShaderNodeSwitch {
        enum OpType {
            OpTypeFloat = 0,
            OpTypeInt = 1,
            OpTypeUint = 2,
            OpTypeVector2D = 3,
            OpTypeVector3D = 4,
            OpTypeVector4D = 5,
            OpTypeBoolean = 6,
            OpTypeTransform = 7,
            OpTypeMax = 8,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeSwitch extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeSwitch extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** A selector function for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeswitch.html  
     */
    class VisualShaderNodeSwitch extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeSwitch;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeSwitch;
    }
    namespace VisualShaderNodeTexture {
        enum Source {
            SourceTexture = 0,
            SourceScreen = 1,
            Source2DTexture = 2,
            Source2DNormal = 3,
            SourceDepth = 4,
            SourcePort = 5,
            Source3DNormal = 6,
            SourceRoughness = 7,
            SourceMax = 8,
        }
        enum TextureType {
            TypeData = 0,
            TypeColor = 1,
            TypeNormalMap = 2,
            TypeMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTexture extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTexture extends __NameMapVisualShaderNode {
        texture_type: "textureType";
    }
    /** Performs a 2D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetexture.html  
     */
    class VisualShaderNodeTexture extends VisualShaderNode {
        constructor(identifier?: any)
        /** Determines the source for the lookup. */
        get source(): int64
        set source(value: int64)
        
        /** The source texture, if needed for the selected [member source]. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Specifies the type of the texture if [member source] is set to [constant SOURCE_TEXTURE]. */
        get textureType(): int64
        set textureType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTexture2DArray extends __RPCMapVisualShaderNodeSample3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTexture2DArray extends __NameMapVisualShaderNodeSample3D {
        texture_array: "textureArray";
    }
    /** A 2D texture uniform array to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetexture2darray.html  
     */
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        /** A source texture array. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get textureArray(): null | Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD
        set textureArray(value: null | Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTexture2DArray;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTexture2DArray;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTexture2DArrayParameter extends __RPCMapVisualShaderNodeTextureParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTexture2DArrayParameter extends __NameMapVisualShaderNodeTextureParameter {
    }
    /** A visual shader node for shader parameter (uniform) of type [Texture2DArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetexture2darrayparameter.html  
     */
    class VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTexture2DArrayParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTexture2DArrayParameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTexture2DParameter extends __RPCMapVisualShaderNodeTextureParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTexture2DParameter extends __NameMapVisualShaderNodeTextureParameter {
    }
    /** Provides a 2D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetexture2dparameter.html  
     */
    class VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTexture2DParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTexture2DParameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTexture3D extends __RPCMapVisualShaderNodeSample3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTexture3D extends __NameMapVisualShaderNodeSample3D {
    }
    /** Performs a 3D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetexture3d.html  
     */
    class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        /** A source texture. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get texture(): null | Texture3D
        set texture(value: null | Texture3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTexture3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTexture3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTexture3DParameter extends __RPCMapVisualShaderNodeTextureParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTexture3DParameter extends __NameMapVisualShaderNodeTextureParameter {
    }
    /** Provides a 3D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetexture3dparameter.html  
     */
    class VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTexture3DParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTexture3DParameter;
    }
    namespace VisualShaderNodeTextureParameter {
        enum TextureType {
            TypeData = 0,
            TypeColor = 1,
            TypeNormalMap = 2,
            TypeAnisotropy = 3,
            TypeMax = 4,
        }
        enum ColorDefault {
            ColorDefaultWhite = 0,
            ColorDefaultBlack = 1,
            ColorDefaultTransparent = 2,
            ColorDefaultMax = 3,
        }
        enum TextureFilter {
            FilterDefault = 0,
            FilterNearest = 1,
            FilterLinear = 2,
            FilterNearestMipmap = 3,
            FilterLinearMipmap = 4,
            FilterNearestMipmapAnisotropic = 5,
            FilterLinearMipmapAnisotropic = 6,
            FilterMax = 7,
        }
        enum TextureRepeat {
            RepeatDefault = 0,
            RepeatEnabled = 1,
            RepeatDisabled = 2,
            RepeatMax = 3,
        }
        enum TextureSource {
            SourceNone = 0,
            SourceScreen = 1,
            SourceDepth = 2,
            SourceNormalRoughness = 3,
            SourceMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTextureParameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTextureParameter extends __NameMapVisualShaderNodeParameter {
        texture_type: "textureType";
        color_default: "colorDefault";
        texture_filter: "textureFilter";
        texture_repeat: "textureRepeat";
        texture_source: "textureSource";
    }
    /** Performs a uniform texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetextureparameter.html  
     */
    class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Defines the type of data provided by the source texture. */
        get textureType(): int64
        set textureType(value: int64)
        
        /** Sets the default color if no texture is assigned to the uniform. */
        get colorDefault(): int64
        set colorDefault(value: int64)
        
        /** Sets the texture filtering mode. */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** Sets the texture repeating mode. */
        get textureRepeat(): int64
        set textureRepeat(value: int64)
        
        /** Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. */
        get textureSource(): int64
        set textureSource(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTextureParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTextureParameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTextureParameterTriplanar extends __RPCMapVisualShaderNodeTextureParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTextureParameterTriplanar extends __NameMapVisualShaderNodeTextureParameter {
    }
    /** Performs a uniform texture lookup with triplanar within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetextureparametertriplanar.html  
     */
    class VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTextureParameterTriplanar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTextureParameterTriplanar;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTextureSdf extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTextureSdf extends __NameMapVisualShaderNode {
    }
    class VisualShaderNodeTextureSdf extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTextureSdf;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTextureSdf;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTextureSdfNormal extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTextureSdfNormal extends __NameMapVisualShaderNode {
    }
    class VisualShaderNodeTextureSdfNormal extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTextureSdfNormal;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTextureSdfNormal;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTransformCompose extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTransformCompose extends __NameMapVisualShaderNode {
    }
    /** Composes a [Transform3D] from four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetransformcompose.html  
     */
    class VisualShaderNodeTransformCompose extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTransformCompose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTransformCompose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTransformConstant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTransformConstant extends __NameMapVisualShaderNodeConstant {
    }
    /** A [Transform3D] constant for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetransformconstant.html  
     */
    class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Transform3D] constant which represents the state of this node. */
        get constant(): Transform3D
        set constant(value: Transform3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTransformConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTransformConstant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTransformDecompose extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTransformDecompose extends __NameMapVisualShaderNode {
    }
    /** Decomposes a [Transform3D] into four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetransformdecompose.html  
     */
    class VisualShaderNodeTransformDecompose extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTransformDecompose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTransformDecompose;
    }
    namespace VisualShaderNodeTransformFunc {
        enum Function {
            FuncInverse = 0,
            FuncTranspose = 1,
            FuncMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTransformFunc extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTransformFunc extends __NameMapVisualShaderNode {
    }
    /** Computes a [Transform3D] function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetransformfunc.html  
     */
    class VisualShaderNodeTransformFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** The function to be computed. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTransformFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTransformFunc;
    }
    namespace VisualShaderNodeTransformOp {
        enum Operator {
            OpAxb = 0,
            OpBxa = 1,
            OpAxbComp = 2,
            OpBxaComp = 3,
            OpAdd = 4,
            OpAMinusB = 5,
            OpBMinusA = 6,
            OpADivB = 7,
            OpBDivA = 8,
            OpMax = 9,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTransformOp extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTransformOp extends __NameMapVisualShaderNode {
    }
    /** A [Transform3D] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetransformop.html  
     */
    class VisualShaderNodeTransformOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** The type of the operation to be performed on the transforms. */
        get operator(): int64
        set operator(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTransformOp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTransformOp;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTransformParameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTransformParameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A [Transform3D] parameter for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetransformparameter.html  
     */
    class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Transform3D
        set defaultValue(value: Transform3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTransformParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTransformParameter;
    }
    namespace VisualShaderNodeTransformVecMult {
        enum Operator {
            OpAxb = 0,
            OpBxa = 1,
            Op3X3Axb = 2,
            Op3X3Bxa = 3,
            OpMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeTransformVecMult extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeTransformVecMult extends __NameMapVisualShaderNode {
    }
    /** Multiplies a [Transform3D] and a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodetransformvecmult.html  
     */
    class VisualShaderNodeTransformVecMult extends VisualShaderNode {
        constructor(identifier?: any)
        /** The multiplication type to be performed. */
        get operator(): int64
        set operator(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeTransformVecMult;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeTransformVecMult;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeUIntConstant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeUIntConstant extends __NameMapVisualShaderNodeConstant {
    }
    /** An unsigned scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeuintconstant.html  
     */
    class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** An unsigned integer constant which represents a state of this node. */
        get constant(): int64
        set constant(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeUIntConstant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeUIntConstant;
    }
    namespace VisualShaderNodeUIntFunc {
        enum Function {
            FuncNegate = 0,
            FuncBitwiseNot = 1,
            FuncMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeUIntFunc extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeUIntFunc extends __NameMapVisualShaderNode {
    }
    /** An unsigned scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeuintfunc.html  
     */
    class VisualShaderNodeUIntFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the scalar. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeUIntFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeUIntFunc;
    }
    namespace VisualShaderNodeUIntOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpMax = 5,
            OpMin = 6,
            OpBitwiseAnd = 7,
            OpBitwiseOr = 8,
            OpBitwiseXor = 9,
            OpBitwiseLeftShift = 10,
            OpBitwiseRightShift = 11,
            OpEnumSize = 12,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeUIntOp extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeUIntOp extends __NameMapVisualShaderNode {
    }
    /** An unsigned integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeuintop.html  
     */
    class VisualShaderNodeUIntOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. */
        get operator(): int64
        set operator(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeUIntOp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeUIntOp;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeUIntParameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeUIntParameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A visual shader node for shader parameter (uniform) of type unsigned [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeuintparameter.html  
     */
    class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** If `true`, the node will have a custom default value. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get defaultValue(): int64
        set defaultValue(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeUIntParameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeUIntParameter;
    }
    namespace VisualShaderNodeUVFunc {
        enum Function {
            FuncPanning = 0,
            FuncScaling = 1,
            FuncMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeUVFunc extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeUVFunc extends __NameMapVisualShaderNode {
    }
    /** Contains functions to modify texture coordinates (`uv`) to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeuvfunc.html  
     */
    class VisualShaderNodeUVFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the texture coordinates. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeUVFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeUVFunc;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeUVPolarCoord extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeUVPolarCoord extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that modifies the texture UV using polar coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeuvpolarcoord.html  
     */
    class VisualShaderNodeUVPolarCoord extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeUVPolarCoord;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeUVPolarCoord;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVarying extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVarying extends __NameMapVisualShaderNode {
        varying_name: "varyingName";
        varying_type: "varyingType";
    }
    /** A visual shader node that represents a "varying" shader value.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevarying.html  
     */
    class VisualShaderNodeVarying extends VisualShaderNode {
        constructor(identifier?: any)
        /** Name of the variable. Must be unique. */
        get varyingName(): StringName
        set varyingName(value: StringName)
        
        /** Type of the variable. Determines where the variable can be accessed. */
        get varyingType(): int64
        set varyingType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVarying;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVarying;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVaryingGetter extends __RPCMapVisualShaderNodeVarying {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVaryingGetter extends __NameMapVisualShaderNodeVarying {
    }
    /** A visual shader node that gets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevaryinggetter.html  
     */
    class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVaryingGetter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVaryingGetter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVaryingSetter extends __RPCMapVisualShaderNodeVarying {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVaryingSetter extends __NameMapVisualShaderNodeVarying {
    }
    /** A visual shader node that sets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevaryingsetter.html  
     */
    class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVaryingSetter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVaryingSetter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVec2Constant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVec2Constant extends __NameMapVisualShaderNodeConstant {
    }
    /** A [Vector2] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevec2constant.html  
     */
    class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Vector2] constant which represents the state of this node. */
        get constant(): Vector2
        set constant(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVec2Constant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVec2Constant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVec2Parameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVec2Parameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A [Vector2] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevec2parameter.html  
     */
    class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Vector2
        set defaultValue(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVec2Parameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVec2Parameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVec3Constant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVec3Constant extends __NameMapVisualShaderNodeConstant {
    }
    /** A [Vector3] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevec3constant.html  
     */
    class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Vector3] constant which represents the state of this node. */
        get constant(): Vector3
        set constant(value: Vector3)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVec3Constant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVec3Constant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVec3Parameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVec3Parameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A [Vector3] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevec3parameter.html  
     */
    class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Vector3
        set defaultValue(value: Vector3)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVec3Parameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVec3Parameter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVec4Constant extends __RPCMapVisualShaderNodeConstant {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVec4Constant extends __NameMapVisualShaderNodeConstant {
        constant_v4: "constantV4";
    }
    /** A 4D vector constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevec4constant.html  
     */
    class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A 4D vector (represented as a [Quaternion]) constant which represents the state of this node. */
        get constant(): Quaternion
        set constant(value: Quaternion)
        get constantV4(): Vector4
        set constantV4(value: Vector4)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVec4Constant;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVec4Constant;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVec4Parameter extends __RPCMapVisualShaderNodeParameter {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVec4Parameter extends __NameMapVisualShaderNodeParameter {
        default_value_enabled: "defaultValueEnabled";
        default_value: "defaultValue";
    }
    /** A 4D vector parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevec4parameter.html  
     */
    class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Vector4
        set defaultValue(value: Vector4)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVec4Parameter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVec4Parameter;
    }
    namespace VisualShaderNodeVectorBase {
        enum OpType {
            OpTypeVector2D = 0,
            OpTypeVector3D = 1,
            OpTypeVector4D = 2,
            OpTypeMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorBase extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorBase extends __NameMapVisualShaderNode {
        op_type: "opType";
    }
    /** A base type for the nodes that perform vector operations within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectorbase.html  
     */
    class VisualShaderNodeVectorBase extends VisualShaderNode {
        constructor(identifier?: any)
        /** A vector type that this operation is performed on. */
        get opType(): int64
        set opType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorBase;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorBase;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorCompose extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorCompose extends __NameMapVisualShaderNodeVectorBase {
    }
    /** Composes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) from scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectorcompose.html  
     */
    class VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorCompose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorCompose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorDecompose extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorDecompose extends __NameMapVisualShaderNodeVectorBase {
    }
    /** Decomposes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) into scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectordecompose.html  
     */
    class VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorDecompose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorDecompose;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorDistance extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorDistance extends __NameMapVisualShaderNodeVectorBase {
    }
    /** Returns the distance between two points. To be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectordistance.html  
     */
    class VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorDistance;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorDistance;
    }
    namespace VisualShaderNodeVectorFunc {
        enum Function {
            FuncNormalize = 0,
            FuncSaturate = 1,
            FuncNegate = 2,
            FuncReciprocal = 3,
            FuncAbs = 4,
            FuncAcos = 5,
            FuncAcosh = 6,
            FuncAsin = 7,
            FuncAsinh = 8,
            FuncAtan = 9,
            FuncAtanh = 10,
            FuncCeil = 11,
            FuncCos = 12,
            FuncCosh = 13,
            FuncDegrees = 14,
            FuncExp = 15,
            FuncExp2 = 16,
            FuncFloor = 17,
            FuncFract = 18,
            FuncInverseSqrt = 19,
            FuncLog = 20,
            FuncLog2 = 21,
            FuncRadians = 22,
            FuncRound = 23,
            FuncRoundeven = 24,
            FuncSign = 25,
            FuncSin = 26,
            FuncSinh = 27,
            FuncSqrt = 28,
            FuncTan = 29,
            FuncTanh = 30,
            FuncTrunc = 31,
            FuncOneminus = 32,
            FuncMax = 33,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorFunc extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorFunc extends __NameMapVisualShaderNodeVectorBase {
    }
    /** A vector function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectorfunc.html  
     */
    class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** The function to be performed. */
        get "function"(): int64
        set "function"(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorFunc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorFunc;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorLen extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorLen extends __NameMapVisualShaderNodeVectorBase {
    }
    /** Returns the length of a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectorlen.html  
     */
    class VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorLen;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorLen;
    }
    namespace VisualShaderNodeVectorOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpPow = 5,
            OpMax = 6,
            OpMin = 7,
            OpCross = 8,
            OpAtan2 = 9,
            OpReflect = 10,
            OpStep = 11,
            OpEnumSize = 12,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorOp extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorOp extends __NameMapVisualShaderNodeVectorBase {
    }
    /** A vector operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectorop.html  
     */
    class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** The operator to be used. */
        get operator(): int64
        set operator(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorOp;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorOp;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeVectorRefract extends __RPCMapVisualShaderNodeVectorBase {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeVectorRefract extends __NameMapVisualShaderNodeVectorBase {
    }
    /** Returns the vector that points in the direction of refraction. For use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodevectorrefract.html  
     */
    class VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeVectorRefract;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeVectorRefract;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVisualShaderNodeWorldPositionFromDepth extends __RPCMapVisualShaderNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVisualShaderNodeWorldPositionFromDepth extends __NameMapVisualShaderNode {
    }
    /** A visual shader node that calculates the position of the pixel in world space using the depth texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_visualshadernodeworldpositionfromdepth.html  
     */
    class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVisualShaderNodeWorldPositionFromDepth;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVisualShaderNodeWorldPositionFromDepth;
    }
    namespace VoxelGI {
        enum Subdiv {
            Subdiv64 = 0,
            Subdiv128 = 1,
            Subdiv256 = 2,
            Subdiv512 = 3,
            SubdivMax = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVoxelGI extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVoxelGI extends __NameMapVisualInstance3D {
        debug_bake: "debugBake";
        camera_attributes: "cameraAttributes";
    }
    /** Real-time global illumination (GI) probe.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_voxelgi.html  
     */
    class VoxelGI<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Bakes the effect from all [GeometryInstance3D]s marked with [constant GeometryInstance3D.GI_MODE_STATIC] and [Light3D]s marked with either [constant Light3D.BAKE_STATIC] or [constant Light3D.BAKE_DYNAMIC]. If [param create_visual_debug] is `true`, after baking the light, this will generate a [MultiMesh] that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the [VoxelGI]'s data and debug any issues that may be occurring.  
         *      
         *  **Note:** [method bake] works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a [VoxelGI] node generally takes from 5 to 20 seconds in most scenes. Reducing [member subdiv] can speed up baking.  
         *      
         *  **Note:** [GeometryInstance3D]s and [Light3D]s must be fully ready before [method bake] is called. If you are procedurally creating those and some meshes or lights are missing from your baked [VoxelGI], use `call_deferred("bake")` instead of calling [method bake] directly.  
         */
        bake(fromNode?: Node, createVisualDebug?: boolean /* = false */): void
        
        /** Calls [method bake] with `create_visual_debug` enabled. */
        debugBake(): void
        
        /** Number of times to subdivide the grid that the [VoxelGI] operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance. */
        get subdiv(): int64
        set subdiv(value: int64)
        
        /** The size of the area covered by the [VoxelGI]. If you make the size larger without increasing the subdivisions with [member subdiv], the size of each cell will increase and result in lower detailed lighting.  
         *      
         *  **Note:** Size is clamped to 1.0 unit or more on each axis.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [VoxelGI] will have banding artifacts or may have over-exposure artifacts. */
        get cameraAttributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The [VoxelGIData] resource that holds the data for this [VoxelGI]. */
        get data(): null | VoxelGIData
        set data(value: null | VoxelGIData)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVoxelGI;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVoxelGI;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapVoxelGIData extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapVoxelGIData extends __NameMapResource {
        get_bounds: "getBounds";
        get_octree_size: "getOctreeSize";
        get_to_cell_xform: "getToCellXform";
        get_octree_cells: "getOctreeCells";
        get_data_cells: "getDataCells";
        get_level_counts: "getLevelCounts";
        dynamic_range: "dynamicRange";
        normal_bias: "normalBias";
        use_two_bounces: "useTwoBounces";
    }
    /** Contains baked voxel global illumination data for use in a [VoxelGI] node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_voxelgidata.html  
     */
    class VoxelGIData extends Resource {
        constructor(identifier?: any)
        allocate(toCellXform: Transform3D, aabb: Aabb, octreeSize: Vector3, octreeCells: PackedByteArray | byte[] | ArrayBuffer, dataCells: PackedByteArray | byte[] | ArrayBuffer, distanceField: PackedByteArray | byte[] | ArrayBuffer, levelCounts: PackedInt32Array | int32[]): void
        
        /** Returns the bounds of the baked voxel data as an [AABB], which should match [member VoxelGI.size] after being baked (which only contains the size as a [Vector3]).  
         *      
         *  **Note:** If the size was modified without baking the VoxelGI data, then the value of [method get_bounds] and [member VoxelGI.size] will not match.  
         */
        getBounds(): Aabb
        getOctreeSize(): Vector3
        getToCellXform(): Transform3D
        getOctreeCells(): PackedByteArray
        getDataCells(): PackedByteArray
        getLevelCounts(): PackedInt32Array
        get _data(): GDictionary
        set _data(value: GDictionary)
        
        /** The dynamic range to use (`1.0` represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping. */
        get dynamicRange(): float64
        set dynamicRange(value: float64)
        
        /** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get energy(): float64
        set energy(value: float64)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get bias(): float64
        set bias(value: float64)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also [member bias]. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get normalBias(): float64
        set normalBias(value: float64)
        
        /** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get propagation(): float64
        set propagation(value: float64)
        
        /** If `true`, performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling [member use_two_bounces], adjust [member propagation] and [member energy]. */
        get useTwoBounces(): boolean
        set useTwoBounces(value: boolean)
        
        /** If `true`, [Environment] lighting is ignored by the [VoxelGI] node. If `false`, [Environment] lighting is taken into account by the [VoxelGI] node. [Environment] lighting updates in real-time, which means it can be changed without having to bake the [VoxelGI] node again. */
        get interior(): boolean
        set interior(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapVoxelGIData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapVoxelGIData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWeakRef extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWeakRef extends __NameMapRefCounted {
        get_ref: "getRef";
    }
    /** Holds an [Object]. If the object is [RefCounted], it doesn't update the reference count.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_weakref.html  
     */
    class WeakRef extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [Object] this weakref is referring to. Returns `null` if that object no longer exists. */
        getRef(): any
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWeakRef;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWeakRef;
    }
    namespace WebRtcDataChannel {
        enum WriteMode {
            WriteModeText = 0,
            WriteModeBinary = 1,
        }
        enum ChannelState {
            StateConnecting = 0,
            StateOpen = 1,
            StateClosing = 2,
            StateClosed = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebRtcDataChannel extends __RPCMapPacketPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebRtcDataChannel extends __NameMapPacketPeer {
        was_string_packet: "wasStringPacket";
        get_ready_state: "getReadyState";
        get_label: "getLabel";
        is_ordered: "isOrdered";
        get_id: "getId";
        get_max_packet_life_time: "getMaxPacketLifeTime";
        get_max_retransmits: "getMaxRetransmits";
        get_protocol: "getProtocol";
        is_negotiated: "isNegotiated";
        get_buffered_amount: "getBufferedAmount";
        write_mode: "writeMode";
    }
    class WebRtcDataChannel extends PacketPeer {
        constructor(identifier?: any)
        poll(): GError
        close(): void
        wasStringPacket(): boolean
        getReadyState(): WebRtcDataChannel.ChannelState
        getLabel(): string
        isOrdered(): boolean
        getId(): int64
        getMaxPacketLifeTime(): int64
        getMaxRetransmits(): int64
        getProtocol(): string
        isNegotiated(): boolean
        getBufferedAmount(): int64
        get writeMode(): int64
        set writeMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebRtcDataChannel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebRtcDataChannel;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebRtcDataChannelExtension extends __RPCMapWebRtcDataChannel {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebRtcDataChannelExtension extends __NameMapWebRtcDataChannel {
        _get_packet: "_getPacket";
        _put_packet: "_putPacket";
        _get_available_packet_count: "_getAvailablePacketCount";
        _get_max_packet_size: "_getMaxPacketSize";
        _set_write_mode: "_setWriteMode";
        _get_write_mode: "_getWriteMode";
        _was_string_packet: "_wasStringPacket";
        _get_ready_state: "_getReadyState";
        _get_label: "_getLabel";
        _is_ordered: "_isOrdered";
        _get_id: "_getId";
        _get_max_packet_life_time: "_getMaxPacketLifeTime";
        _get_max_retransmits: "_getMaxRetransmits";
        _get_protocol: "_getProtocol";
        _is_negotiated: "_isNegotiated";
        _get_buffered_amount: "_getBufferedAmount";
    }
    class WebRtcDataChannelExtension extends WebRtcDataChannel {
        constructor(identifier?: any)
        /* gdvirtual */ _getPacket(rBuffer: int64, rBufferSize: int64): GError
        /* gdvirtual */ _putPacket(pBuffer: int64, pBufferSize: int64): GError
        /* gdvirtual */ _getAvailablePacketCount(): int64
        /* gdvirtual */ _getMaxPacketSize(): int64
        /* gdvirtual */ _poll(): GError
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _setWriteMode(pWriteMode: WebRtcDataChannel.WriteMode): void
        /* gdvirtual */ _getWriteMode(): WebRtcDataChannel.WriteMode
        /* gdvirtual */ _wasStringPacket(): boolean
        /* gdvirtual */ _getReadyState(): WebRtcDataChannel.ChannelState
        /* gdvirtual */ _getLabel(): string
        /* gdvirtual */ _isOrdered(): boolean
        /* gdvirtual */ _getId(): int64
        /* gdvirtual */ _getMaxPacketLifeTime(): int64
        /* gdvirtual */ _getMaxRetransmits(): int64
        /* gdvirtual */ _getProtocol(): string
        /* gdvirtual */ _isNegotiated(): boolean
        /* gdvirtual */ _getBufferedAmount(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebRtcDataChannelExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebRtcDataChannelExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebRtcMultiplayerPeer extends __RPCMapMultiplayerPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebRtcMultiplayerPeer extends __NameMapMultiplayerPeer {
        create_server: "createServer";
        create_client: "createClient";
        create_mesh: "createMesh";
        add_peer: "addPeer";
        remove_peer: "removePeer";
        has_peer: "hasPeer";
        get_peer: "getPeer";
        get_peers: "getPeers";
    }
    class WebRtcMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        createServer(channelsConfig?: GArray): GError
        createClient(peerId: int64, channelsConfig?: GArray): GError
        createMesh(peerId: int64, channelsConfig?: GArray): GError
        addPeer(peer: WebRtcPeerConnection, peerId: int64, unreliableLifetime?: int64 /* = 1 */): GError
        removePeer(peerId: int64): void
        hasPeer(peerId: int64): boolean
        getPeer(peerId: int64): GDictionary
        getPeers(): GDictionary
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebRtcMultiplayerPeer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebRtcMultiplayerPeer;
    }
    namespace WebRtcPeerConnection {
        enum ConnectionState {
            StateNew = 0,
            StateConnecting = 1,
            StateConnected = 2,
            StateDisconnected = 3,
            StateFailed = 4,
            StateClosed = 5,
        }
        enum GatheringState {
            GatheringStateNew = 0,
            GatheringStateGathering = 1,
            GatheringStateComplete = 2,
        }
        enum SignalingState {
            SignalingStateStable = 0,
            SignalingStateHaveLocalOffer = 1,
            SignalingStateHaveRemoteOffer = 2,
            SignalingStateHaveLocalPranswer = 3,
            SignalingStateHaveRemotePranswer = 4,
            SignalingStateClosed = 5,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebRtcPeerConnection extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebRtcPeerConnection extends __NameMapRefCounted {
        set_default_extension: "setDefaultExtension";
        create_data_channel: "createDataChannel";
        create_offer: "createOffer";
        set_local_description: "setLocalDescription";
        set_remote_description: "setRemoteDescription";
        add_ice_candidate: "addIceCandidate";
        get_connection_state: "getConnectionState";
        get_gathering_state: "getGatheringState";
        get_signaling_state: "getSignalingState";
        session_description_created: "sessionDescriptionCreated";
        ice_candidate_created: "iceCandidateCreated";
        data_channel_received: "dataChannelReceived";
    }
    class WebRtcPeerConnection extends RefCounted {
        constructor(identifier?: any)
        static setDefaultExtension(extensionClass: StringName): void
        initialize(configuration?: GDictionary /* = new GDictionary() */): GError
        createDataChannel(label: string, options?: GDictionary /* = new GDictionary() */): WebRtcDataChannel
        createOffer(): GError
        setLocalDescription(type: string, sdp: string): GError
        setRemoteDescription(type: string, sdp: string): GError
        addIceCandidate(media: string, index: int64, name: string): GError
        poll(): GError
        close(): void
        getConnectionState(): WebRtcPeerConnection.ConnectionState
        getGatheringState(): WebRtcPeerConnection.GatheringState
        getSignalingState(): WebRtcPeerConnection.SignalingState
        readonly sessionDescriptionCreated: Signal<(type: string, sdp: string) => void>
        readonly iceCandidateCreated: Signal<(media: string, index: int64, name: string) => void>
        readonly dataChannelReceived: Signal<(channel: WebRtcDataChannel) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebRtcPeerConnection;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebRtcPeerConnection;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebRtcPeerConnectionExtension extends __RPCMapWebRtcPeerConnection {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebRtcPeerConnectionExtension extends __NameMapWebRtcPeerConnection {
        _get_connection_state: "_getConnectionState";
        _get_gathering_state: "_getGatheringState";
        _get_signaling_state: "_getSignalingState";
        _create_data_channel: "_createDataChannel";
        _create_offer: "_createOffer";
        _set_remote_description: "_setRemoteDescription";
        _set_local_description: "_setLocalDescription";
        _add_ice_candidate: "_addIceCandidate";
    }
    class WebRtcPeerConnectionExtension extends WebRtcPeerConnection {
        constructor(identifier?: any)
        /* gdvirtual */ _getConnectionState(): WebRtcPeerConnection.ConnectionState
        /* gdvirtual */ _getGatheringState(): WebRtcPeerConnection.GatheringState
        /* gdvirtual */ _getSignalingState(): WebRtcPeerConnection.SignalingState
        /* gdvirtual */ _initialize(pConfig: GDictionary): GError
        /* gdvirtual */ _createDataChannel(pLabel: string, pConfig: GDictionary): null | WebRtcDataChannel
        /* gdvirtual */ _createOffer(): GError
        /* gdvirtual */ _setRemoteDescription(pType: string, pSdp: string): GError
        /* gdvirtual */ _setLocalDescription(pType: string, pSdp: string): GError
        /* gdvirtual */ _addIceCandidate(pSdpMidName: string, pSdpMlineIndex: int64, pSdpName: string): GError
        /* gdvirtual */ _poll(): GError
        /* gdvirtual */ _close(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebRtcPeerConnectionExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebRtcPeerConnectionExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebSocketMultiplayerPeer extends __RPCMapMultiplayerPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebSocketMultiplayerPeer extends __NameMapMultiplayerPeer {
        create_client: "createClient";
        create_server: "createServer";
        get_peer: "getPeer";
        get_peer_address: "getPeerAddress";
        get_peer_port: "getPeerPort";
        supported_protocols: "supportedProtocols";
        handshake_headers: "handshakeHeaders";
        inbound_buffer_size: "inboundBufferSize";
        outbound_buffer_size: "outboundBufferSize";
        handshake_timeout: "handshakeTimeout";
        max_queued_packets: "maxQueuedPackets";
    }
    /** Base class for WebSocket server and client.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_websocketmultiplayerpeer.html  
     */
    class WebSocketMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Starts a new multiplayer client connecting to the given [param url]. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         *      
         *  **Note:** It is recommended to specify the scheme part of the URL, i.e. the [param url] should start with either `ws://` or `wss://`.  
         */
        createClient(url: string, tlsClientOptions?: TlsOptions): GError
        
        /** Starts a new multiplayer server listening on the given [param port]. You can optionally specify a [param bind_address], and provide valid [param tls_server_options] to use TLS. See [method TLSOptions.server]. */
        createServer(port: int64, bindAddress?: string /* = '*' */, tlsServerOptions?: TlsOptions): GError
        
        /** Returns the [WebSocketPeer] associated to the given [param peer_id]. */
        getPeer(peerId: int64): null | WebSocketPeer
        
        /** Returns the IP address of the given peer. */
        getPeerAddress(id: int64): string
        
        /** Returns the remote port of the given peer. */
        getPeerPort(id: int64): int64
        
        /** The supported WebSocket sub-protocols. See [member WebSocketPeer.supported_protocols] for more details. */
        get supportedProtocols(): PackedStringArray
        set supportedProtocols(value: PackedStringArray | string[])
        
        /** The extra headers to use during handshake. See [member WebSocketPeer.handshake_headers] for more details. */
        get handshakeHeaders(): PackedStringArray
        set handshakeHeaders(value: PackedStringArray | string[])
        
        /** The inbound buffer size for connected peers. See [member WebSocketPeer.inbound_buffer_size] for more details. */
        get inboundBufferSize(): int64
        set inboundBufferSize(value: int64)
        
        /** The outbound buffer size for connected peers. See [member WebSocketPeer.outbound_buffer_size] for more details. */
        get outboundBufferSize(): int64
        set outboundBufferSize(value: int64)
        
        /** The maximum time each peer can stay in a connecting state before being dropped. */
        get handshakeTimeout(): float64
        set handshakeTimeout(value: float64)
        
        /** The maximum number of queued packets for connected peers. See [member WebSocketPeer.max_queued_packets] for more details. */
        get maxQueuedPackets(): int64
        set maxQueuedPackets(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebSocketMultiplayerPeer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebSocketMultiplayerPeer;
    }
    namespace WebSocketPeer {
        enum WriteMode {
            WriteModeText = 0,
            WriteModeBinary = 1,
        }
        enum State {
            StateConnecting = 0,
            StateOpen = 1,
            StateClosing = 2,
            StateClosed = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebSocketPeer extends __RPCMapPacketPeer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebSocketPeer extends __NameMapPacketPeer {
        connect_to_url: "connectToUrl";
        accept_stream: "acceptStream";
        send_text: "sendText";
        was_string_packet: "wasStringPacket";
        get_connected_host: "getConnectedHost";
        get_connected_port: "getConnectedPort";
        get_selected_protocol: "getSelectedProtocol";
        get_requested_url: "getRequestedUrl";
        set_no_delay: "setNoDelay";
        get_current_outbound_buffered_amount: "getCurrentOutboundBufferedAmount";
        get_ready_state: "getReadyState";
        get_close_code: "getCloseCode";
        get_close_reason: "getCloseReason";
        supported_protocols: "supportedProtocols";
        handshake_headers: "handshakeHeaders";
        inbound_buffer_size: "inboundBufferSize";
        outbound_buffer_size: "outboundBufferSize";
        max_queued_packets: "maxQueuedPackets";
        heartbeat_interval: "heartbeatInterval";
    }
    /** A WebSocket connection.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_websocketpeer.html  
     */
    class WebSocketPeer extends PacketPeer {
        constructor(identifier?: any)
        /** Connects to the given URL. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         *      
         *  **Note:** This method is non-blocking, and will return [constant OK] before the connection is established as long as the provided parameters are valid and the peer is not in an invalid state (e.g. already connected). Regularly call [method poll] (e.g. during [Node] process) and check the result of [method get_ready_state] to know whether the connection succeeds or fails.  
         *      
         *  **Note:** To avoid mixed content warnings or errors in Web, you may have to use a [param url] that starts with `wss://` (secure) instead of `ws://`. When doing so, make sure to use the fully qualified domain name that matches the one defined in the server's TLS certificate. Do not connect directly via the IP address for `wss://` connections, as it won't match with the TLS certificate.  
         */
        connectToUrl(url: string, tlsClientOptions?: TlsOptions): GError
        
        /** Accepts a peer connection performing the HTTP handshake as a WebSocket server. The [param stream] must be a valid TCP stream retrieved via [method TCPServer.take_connection], or a TLS stream accepted via [method StreamPeerTLS.accept_stream].  
         *      
         *  **Note:** Not supported in Web exports due to browsers' restrictions.  
         */
        acceptStream(stream: StreamPeer): GError
        
        /** Sends the given [param message] using the desired [param write_mode]. When sending a [String], prefer using [method send_text]. */
        send(message: PackedByteArray | byte[] | ArrayBuffer, writeMode?: WebSocketPeer.WriteMode /* = 1 */): GError
        
        /** Sends the given [param message] using WebSocket text mode. Prefer this method over [method PacketPeer.put_packet] when interacting with third-party text-based API (e.g. when using [JSON] formatted messages). */
        sendText(message: string): GError
        
        /** Returns `true` if the last received packet was sent as a text payload. See [enum WriteMode]. */
        wasStringPacket(): boolean
        
        /** Updates the connection state and receive incoming packets. Call this function regularly to keep it in a clean state. */
        poll(): void
        
        /** Closes this WebSocket connection. [param code] is the status code for the closure (see RFC 6455 section 7.4 for a list of valid status codes). [param reason] is the human readable reason for closing the connection (can be any UTF-8 string that's smaller than 123 bytes). If [param code] is negative, the connection will be closed immediately without notifying the remote peer.  
         *      
         *  **Note:** To achieve a clean close, you will need to keep polling until [constant STATE_CLOSED] is reached.  
         *      
         *  **Note:** The Web export might not support all status codes. Please refer to browser-specific documentation for more details.  
         */
        close(code?: int64 /* = 1000 */, reason?: string /* = '' */): void
        
        /** Returns the IP address of the connected peer.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        getConnectedHost(): string
        
        /** Returns the remote port of the connected peer.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        getConnectedPort(): int64
        
        /** Returns the selected WebSocket sub-protocol for this connection or an empty string if the sub-protocol has not been selected yet. */
        getSelectedProtocol(): string
        
        /** Returns the URL requested by this peer. The URL is derived from the `url` passed to [method connect_to_url] or from the HTTP headers when acting as server (i.e. when using [method accept_stream]). */
        getRequestedUrl(): string
        
        /** Disable Nagle's algorithm on the underlying TCP socket (default). See [method StreamPeerTCP.set_no_delay] for more information.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        setNoDelay(enabled: boolean): void
        
        /** Returns the current amount of data in the outbound websocket buffer.     
         *  **Note:** Web exports use WebSocket.bufferedAmount, while other platforms use an internal buffer.  
         */
        getCurrentOutboundBufferedAmount(): int64
        
        /** Returns the ready state of the connection. */
        getReadyState(): WebSocketPeer.State
        
        /** Returns the received WebSocket close frame status code, or `-1` when the connection was not cleanly closed. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
        getCloseCode(): int64
        
        /** Returns the received WebSocket close frame status reason string. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
        getCloseReason(): string
        
        /** The WebSocket sub-protocols allowed during the WebSocket handshake. */
        get supportedProtocols(): PackedStringArray
        set supportedProtocols(value: PackedStringArray | string[])
        
        /** The extra HTTP headers to be sent during the WebSocket handshake.  
         *      
         *  **Note:** Not supported in Web exports due to browsers' restrictions.  
         */
        get handshakeHeaders(): PackedStringArray
        set handshakeHeaders(value: PackedStringArray | string[])
        
        /** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the inbound packets). */
        get inboundBufferSize(): int64
        set inboundBufferSize(value: int64)
        
        /** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the outbound packets). */
        get outboundBufferSize(): int64
        set outboundBufferSize(value: int64)
        
        /** The maximum amount of packets that will be allowed in the queues (both inbound and outbound). */
        get maxQueuedPackets(): int64
        set maxQueuedPackets(value: int64)
        
        /** The interval (in seconds) at which the peer will automatically send WebSocket "ping" control frames. When set to `0`, no "ping" control frames will be sent.  
         *      
         *  **Note:** Has no effect in Web exports due to browser restrictions.  
         */
        get heartbeatInterval(): int64
        set heartbeatInterval(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebSocketPeer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebSocketPeer;
    }
    namespace WebXRInterface {
        enum TargetRayMode {
            TargetRayModeUnknown = 0,
            TargetRayModeGaze = 1,
            TargetRayModeTrackedPointer = 2,
            TargetRayModeScreen = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWebXRInterface extends __RPCMapXRInterface {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWebXRInterface extends __NameMapXRInterface {
        is_session_supported: "isSessionSupported";
        is_input_source_active: "isInputSourceActive";
        get_input_source_tracker: "getInputSourceTracker";
        get_input_source_target_ray_mode: "getInputSourceTargetRayMode";
        get_display_refresh_rate: "getDisplayRefreshRate";
        set_display_refresh_rate: "setDisplayRefreshRate";
        get_available_display_refresh_rates: "getAvailableDisplayRefreshRates";
        session_mode: "sessionMode";
        required_features: "requiredFeatures";
        optional_features: "optionalFeatures";
        requested_reference_space_types: "requestedReferenceSpaceTypes";
        reference_space_type: "referenceSpaceType";
        enabled_features: "enabledFeatures";
        visibility_state: "visibilityState";
        session_supported: "sessionSupported";
        session_started: "sessionStarted";
        session_ended: "sessionEnded";
        session_failed: "sessionFailed";
        visibility_state_changed: "visibilityStateChanged";
        reference_space_reset: "referenceSpaceReset";
        display_refresh_rate_changed: "displayRefreshRateChanged";
    }
    /** XR interface using WebXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_webxrinterface.html  
     */
    class WebXRInterface extends XRInterface {
        constructor(identifier?: any)
        /** Checks if the given [param session_mode] is supported by the user's browser.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         *  This method returns nothing, instead it emits the [signal session_supported] signal with the result.  
         */
        isSessionSupported(sessionMode: string): void
        
        /** Returns `true` if there is an active input source with the given [param input_source_id]. */
        isInputSourceActive(inputSourceId: int64): boolean
        
        /** Gets an [XRControllerTracker] for the given [param input_source_id].  
         *  In the context of WebXR, an input source can be an advanced VR controller like the Oculus Touch or Index controllers, or even a tap on the screen, a spoken voice command or a button press on the device itself. When a non-traditional input source is used, interpret the position and orientation of the [XRPositionalTracker] as a ray pointing at the object the user wishes to interact with.  
         *  Use this method to get information about the input source that triggered one of these signals:  
         *  - [signal selectstart]  
         *  - [signal select]  
         *  - [signal selectend]  
         *  - [signal squeezestart]  
         *  - [signal squeeze]  
         *  - [signal squeezestart]  
         */
        getInputSourceTracker(inputSourceId: int64): null | XRControllerTracker
        
        /** Returns the target ray mode for the given [param input_source_id].  
         *  This can help interpret the input coming from that input source. See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/targetRayMode]XRInputSource.targetRayMode[/url] for more information.  
         */
        getInputSourceTargetRayMode(inputSourceId: int64): WebXRInterface.TargetRayMode
        
        /** Returns the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It may not report an accurate value until after using [method set_display_refresh_rate]. */
        getDisplayRefreshRate(): float64
        
        /** Sets the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It won't take effect right away until after [signal display_refresh_rate_changed] is emitted. */
        setDisplayRefreshRate(refreshRate: float64): void
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the web browser and after the interface has been initialized. */
        getAvailableDisplayRefreshRates(): GArray
        
        /** The session mode used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         */
        get sessionMode(): string
        set sessionMode(value: string)
        
        /** A comma-seperated list of required features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will fail and [signal session_failed] will be emitted.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  See the MDN documentation on [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSystem/requestSession#session_features]WebXR's session features[/url] for a list of possible values.  
         */
        get requiredFeatures(): string
        set requiredFeatures(value: string)
        
        /** A comma-seperated list of optional features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will continue, but you won't be able to use the requested feature.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  See the MDN documentation on [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSystem/requestSession#session_features]WebXR's session features[/url] for a list of possible values.  
         */
        get optionalFeatures(): string
        set optionalFeatures(value: string)
        
        /** A comma-seperated list of reference space types used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  The reference space types are requested in order, and the first one supported by the user's device or browser will be used. The [member reference_space_type] property contains the reference space type that was ultimately selected.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get requestedReferenceSpaceTypes(): string
        set requestedReferenceSpaceTypes(value: string)
        
        /** The reference space type (from the list of requested types set in the [member requested_reference_space_types] property), that was ultimately used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get referenceSpaceType(): string
        set referenceSpaceType(value: string)
        
        /** A comma-separated list of features that were successfully enabled by [method XRInterface.initialize] when setting up the WebXR session.  
         *  This may include features requested by setting [member required_features] and [member optional_features], and will only be available after [signal session_started] has been emitted.  
         *      
         *  **Note:** This may not be support by all web browsers, in which case it will be an empty string.  
         */
        get enabledFeatures(): string
        set enabledFeatures(value: string)
        
        /** Indicates if the WebXR session's imagery is visible to the user.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRVisibilityState]WebXR's XRVisibilityState[/url], including `"hidden"`, `"visible"`, and `"visible-blurred"`.  
         */
        get visibilityState(): string
        set visibilityState(value: string)
        
        /** Emitted by [method is_session_supported] to indicate if the given [param session_mode] is supported or not. */
        readonly sessionSupported: Signal<(sessionMode: string, supported: boolean) => void>
        
        /** Emitted by [method XRInterface.initialize] if the session is successfully started.  
         *  At this point, it's safe to do `get_viewport().use_xr = true` to instruct Godot to start rendering to the XR device.  
         */
        readonly sessionStarted: Signal<() => void>
        
        /** Emitted when the user ends the WebXR session (which can be done using UI from the browser or device).  
         *  At this point, you should do `get_viewport().use_xr = false` to instruct Godot to resume rendering to the screen.  
         */
        readonly sessionEnded: Signal<() => void>
        
        /** Emitted by [method XRInterface.initialize] if the session fails to start.  
         *  [param message] may optionally contain an error message from WebXR, or an empty string if no message is available.  
         */
        readonly sessionFailed: Signal<(message: string) => void>
        
        /** Emitted when one of the input source has started its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectstart: Signal<(inputSourceId: int64) => void>
        
        /** Emitted after one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly select: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectend: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when one of the input sources has started its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezestart: Signal<(inputSourceId: int64) => void>
        
        /** Emitted after one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeeze: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezeend: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when [member visibility_state] has changed. */
        readonly visibilityStateChanged: Signal<() => void>
        
        /** Emitted to indicate that the reference space has been reset or reconfigured.  
         *  When (or whether) this is emitted depends on the user's browser or device, but may include when the user has changed the dimensions of their play space (which you may be able to access via [method XRInterface.get_play_area]) or pressed/held a button to recenter their position.  
         *  See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace/reset_event]WebXR's XRReferenceSpace reset event[/url] for more information.  
         */
        readonly referenceSpaceReset: Signal<() => void>
        
        /** Emitted after the display's refresh rate has changed. */
        readonly displayRefreshRateChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWebXRInterface;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWebXRInterface;
    }
    namespace Window {
        enum Mode {
            ModeWindowed = 0,
            ModeMinimized = 1,
            ModeMaximized = 2,
            ModeFullscreen = 3,
            ModeExclusiveFullscreen = 4,
        }
        enum Flags {
            FlagResizeDisabled = 0,
            FlagBorderless = 1,
            FlagAlwaysOnTop = 2,
            FlagTransparent = 3,
            FlagNoFocus = 4,
            FlagPopup = 5,
            FlagExtendToTitle = 6,
            FlagMousePassthrough = 7,
            FlagSharpCorners = 8,
            FlagExcludeFromCapture = 9,
            FlagPopupWMHint = 10,
            FlagMinimizeDisabled = 11,
            FlagMaximizeDisabled = 12,
            FlagMax = 13,
        }
        enum ContentScaleMode {
            ContentScaleModeDisabled = 0,
            ContentScaleModeCanvasItems = 1,
            ContentScaleModeViewport = 2,
        }
        enum ContentScaleAspect {
            ContentScaleAspectIgnore = 0,
            ContentScaleAspectKeep = 1,
            ContentScaleAspectKeepWidth = 2,
            ContentScaleAspectKeepHeight = 3,
            ContentScaleAspectExpand = 4,
        }
        enum ContentScaleStretch {
            ContentScaleStretchFractional = 0,
            ContentScaleStretchInteger = 1,
        }
        enum LayoutDirection {
            LayoutDirectionInherited = 0,
            LayoutDirectionApplicationLocale = 1,
            LayoutDirectionLtr = 2,
            LayoutDirectionRtl = 3,
            LayoutDirectionSystemLocale = 4,
            LayoutDirectionMax = 5,
            LayoutDirectionLocale = 1,
        }
        enum WindowInitialPosition {
            WindowInitialPositionAbsolute = 0,
            WindowInitialPositionCenterPrimaryScreen = 1,
            WindowInitialPositionCenterMainWindowScreen = 2,
            WindowInitialPositionCenterOtherScreen = 3,
            WindowInitialPositionCenterScreenWithMouseFocus = 4,
            WindowInitialPositionCenterScreenWithKeyboardFocus = 5,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWindow extends __RPCMapViewport {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWindow extends __NameMapViewport {
        _get_contents_minimum_size: "_getContentsMinimumSize";
        move_to_center: "moveToCenter";
        reset_size: "resetSize";
        get_position_with_decorations: "getPositionWithDecorations";
        get_size_with_decorations: "getSizeWithDecorations";
        set_flag: "setFlag";
        get_flag: "getFlag";
        is_maximize_allowed: "isMaximizeAllowed";
        request_attention: "requestAttention";
        move_to_foreground: "moveToForeground";
        set_unparent_when_invisible: "setUnparentWhenInvisible";
        can_draw: "canDraw";
        has_focus: "hasFocus";
        grab_focus: "grabFocus";
        start_drag: "startDrag";
        start_resize: "startResize";
        set_ime_active: "setImeActive";
        set_ime_position: "setImePosition";
        is_embedded: "isEmbedded";
        get_contents_minimum_size: "getContentsMinimumSize";
        child_controls_changed: "childControlsChanged";
        begin_bulk_theme_override: "beginBulkThemeOverride";
        end_bulk_theme_override: "endBulkThemeOverride";
        add_theme_icon_override: "addThemeIconOverride";
        add_theme_stylebox_override: "addThemeStyleboxOverride";
        add_theme_font_override: "addThemeFontOverride";
        add_theme_font_size_override: "addThemeFontSizeOverride";
        add_theme_color_override: "addThemeColorOverride";
        add_theme_constant_override: "addThemeConstantOverride";
        remove_theme_icon_override: "removeThemeIconOverride";
        remove_theme_stylebox_override: "removeThemeStyleboxOverride";
        remove_theme_font_override: "removeThemeFontOverride";
        remove_theme_font_size_override: "removeThemeFontSizeOverride";
        remove_theme_color_override: "removeThemeColorOverride";
        remove_theme_constant_override: "removeThemeConstantOverride";
        get_theme_icon: "getThemeIcon";
        get_theme_stylebox: "getThemeStylebox";
        get_theme_font: "getThemeFont";
        get_theme_font_size: "getThemeFontSize";
        get_theme_color: "getThemeColor";
        get_theme_constant: "getThemeConstant";
        has_theme_icon_override: "hasThemeIconOverride";
        has_theme_stylebox_override: "hasThemeStyleboxOverride";
        has_theme_font_override: "hasThemeFontOverride";
        has_theme_font_size_override: "hasThemeFontSizeOverride";
        has_theme_color_override: "hasThemeColorOverride";
        has_theme_constant_override: "hasThemeConstantOverride";
        has_theme_icon: "hasThemeIcon";
        has_theme_stylebox: "hasThemeStylebox";
        has_theme_font: "hasThemeFont";
        has_theme_font_size: "hasThemeFontSize";
        has_theme_color: "hasThemeColor";
        has_theme_constant: "hasThemeConstant";
        get_theme_default_base_scale: "getThemeDefaultBaseScale";
        get_theme_default_font: "getThemeDefaultFont";
        get_theme_default_font_size: "getThemeDefaultFontSize";
        get_window_id: "getWindowId";
        get_focused_window: "getFocusedWindow";
        set_layout_direction: "setLayoutDirection";
        get_layout_direction: "getLayoutDirection";
        is_layout_rtl: "isLayoutRtl";
        set_use_font_oversampling: "setUseFontOversampling";
        is_using_font_oversampling: "isUsingFontOversampling";
        popup_on_parent: "popupOnParent";
        popup_centered: "popupCentered";
        popup_centered_ratio: "popupCenteredRatio";
        popup_centered_clamped: "popupCenteredClamped";
        popup_exclusive: "popupExclusive";
        popup_exclusive_on_parent: "popupExclusiveOnParent";
        popup_exclusive_centered: "popupExclusiveCentered";
        popup_exclusive_centered_ratio: "popupExclusiveCenteredRatio";
        popup_exclusive_centered_clamped: "popupExclusiveCenteredClamped";
        initial_position: "initialPosition";
        current_screen: "currentScreen";
        mouse_passthrough_polygon: "mousePassthroughPolygon";
        wrap_controls: "wrapControls";
        transient_to_focused: "transientToFocused";
        always_on_top: "alwaysOnTop";
        popup_window: "popupWindow";
        extend_to_title: "extendToTitle";
        mouse_passthrough: "mousePassthrough";
        sharp_corners: "sharpCorners";
        exclude_from_capture: "excludeFromCapture";
        popup_wm_hint: "popupWMHint";
        minimize_disabled: "minimizeDisabled";
        maximize_disabled: "maximizeDisabled";
        force_native: "forceNative";
        min_size: "minSize";
        max_size: "maxSize";
        keep_title_visible: "keepTitleVisible";
        content_scale_size: "contentScaleSize";
        content_scale_mode: "contentScaleMode";
        content_scale_aspect: "contentScaleAspect";
        content_scale_stretch: "contentScaleStretch";
        content_scale_factor: "contentScaleFactor";
        auto_translate: "autoTranslate";
        accessibility_name: "accessibilityName";
        accessibility_description: "accessibilityDescription";
        theme_type_variation: "themeTypeVariation";
        window_input: "windowInput";
        files_dropped: "filesDropped";
        mouse_entered: "mouseEntered";
        mouse_exited: "mouseExited";
        focus_entered: "focusEntered";
        focus_exited: "focusExited";
        close_requested: "closeRequested";
        go_back_requested: "goBackRequested";
        visibility_changed: "visibilityChanged";
        about_to_popup: "aboutToPopup";
        theme_changed: "themeChanged";
        dpi_changed: "dpiChanged";
        titlebar_changed: "titlebarChanged";
        title_changed: "titleChanged";
    }
    /** Base class for all windows, dialogs, and popups.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_window.html  
     */
    class Window<Map extends NodePathMap = any> extends Viewport<Map> {
        /** Emitted when [Window]'s visibility changes, right before [signal visibility_changed]. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 30
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         */
        static readonly NOTIFICATION_THEME_CHANGED = 32
        constructor(identifier?: any)
        
        /** Virtual method to be implemented by the user. Overrides the value returned by [method get_contents_minimum_size]. */
        /* gdvirtual */ _getContentsMinimumSize(): Vector2
        
        /** Centers a native window on the current screen and an embedded window on its embedder [Viewport]. */
        moveToCenter(): void
        
        /** Resets the size to the minimum size, which is the max of [member min_size] and (if [member wrap_controls] is enabled) [method get_contents_minimum_size]. This is equivalent to calling `set_size(Vector2i())` (or any size below the minimum). */
        resetSize(): void
        
        /** Returns the window's position including its border.  
         *      
         *  **Note:** If [member visible] is `false`, this method returns the same value as [member position].  
         */
        getPositionWithDecorations(): Vector2I
        
        /** Returns the window's size including its border.  
         *      
         *  **Note:** If [member visible] is `false`, this method returns the same value as [member size].  
         */
        getSizeWithDecorations(): Vector2I
        
        /** Sets a specified window flag. */
        setFlag(flag: Window.Flags, enabled: boolean): void
        
        /** Returns `true` if the [param flag] is set. */
        getFlag(flag: Window.Flags): boolean
        
        /** Returns `true` if the window can be maximized (the maximize button is enabled). */
        isMaximizeAllowed(): boolean
        
        /** Tells the OS that the [Window] needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar. */
        requestAttention(): void
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        moveToForeground(): void
        
        /** Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [method show]. */
        hide(): void
        
        /** Makes the [Window] appear. This enables interactions with the [Window] and doesn't change any of its property other than visibility (unlike e.g. [method popup]). */
        show(): void
        
        /** If [param unparent] is `true`, the window is automatically unparented when going invisible.  
         *      
         *  **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [method Node.queue_free] to free the window if it's not parented.  
         */
        setUnparentWhenInvisible(unparent: boolean): void
        
        /** Returns whether the window is being drawn to the screen. */
        canDraw(): boolean
        
        /** Returns `true` if the window is focused. */
        hasFocus(): boolean
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        grabFocus(): void
        
        /** Starts an interactive drag operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's title bar. Using this method allows the window to participate in space switching, tiling, and other system features. */
        startDrag(): void
        
        /** Starts an interactive resize operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's edge. */
        startResize(edge: DisplayServer.WindowResizeEdge): void
        
        /** If [param active] is `true`, enables system's native IME (Input Method Editor). */
        setImeActive(active: boolean): void
        
        /** Moves IME to the given position. */
        setImePosition(position: Vector2I): void
        
        /** Returns `true` if the window is currently embedded in another window. */
        isEmbedded(): boolean
        
        /** Returns the combined minimum size from the child [Control] nodes of the window. Use [method child_controls_changed] to update it when child nodes have changed.  
         *  The value returned by this method can be overridden with [method _get_contents_minimum_size].  
         */
        getContentsMinimumSize(): Vector2
        
        /** Requests an update of the [Window] size to fit underlying [Control] nodes. */
        childControlsChanged(): void
        
        /** Prevents `*_theme_*_override` methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
        beginBulkThemeOverride(): void
        
        /** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
        endBulkThemeOverride(): void
        
        /** Creates a local override for a theme icon with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_icon_override].  
         *  See also [method get_theme_icon].  
         */
        addThemeIconOverride(name: StringName, texture: Texture2D): void
        
        /** Creates a local override for a theme [StyleBox] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_stylebox_override].  
         *  See also [method get_theme_stylebox] and [method Control.add_theme_stylebox_override] for more details.  
         */
        addThemeStyleboxOverride(name: StringName, stylebox: StyleBox): void
        
        /** Creates a local override for a theme [Font] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_override].  
         *  See also [method get_theme_font].  
         */
        addThemeFontOverride(name: StringName, font: Font): void
        
        /** Creates a local override for a theme font size with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_size_override].  
         *  See also [method get_theme_font_size].  
         */
        addThemeFontSizeOverride(name: StringName, fontSize: int64): void
        
        /** Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].  
         *  See also [method get_theme_color] and [method Control.add_theme_color_override] for more details.  
         */
        addThemeColorOverride(name: StringName, color: Color): void
        
        /** Creates a local override for a theme constant with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_constant_override].  
         *  See also [method get_theme_constant].  
         */
        addThemeConstantOverride(name: StringName, constant: int64): void
        
        /** Removes a local override for a theme icon with the specified [param name] previously added by [method add_theme_icon_override] or via the Inspector dock. */
        removeThemeIconOverride(name: StringName): void
        
        /** Removes a local override for a theme [StyleBox] with the specified [param name] previously added by [method add_theme_stylebox_override] or via the Inspector dock. */
        removeThemeStyleboxOverride(name: StringName): void
        
        /** Removes a local override for a theme [Font] with the specified [param name] previously added by [method add_theme_font_override] or via the Inspector dock. */
        removeThemeFontOverride(name: StringName): void
        
        /** Removes a local override for a theme font size with the specified [param name] previously added by [method add_theme_font_size_override] or via the Inspector dock. */
        removeThemeFontSizeOverride(name: StringName): void
        
        /** Removes a local override for a theme [Color] with the specified [param name] previously added by [method add_theme_color_override] or via the Inspector dock. */
        removeThemeColorOverride(name: StringName): void
        
        /** Removes a local override for a theme constant with the specified [param name] previously added by [method add_theme_constant_override] or via the Inspector dock. */
        removeThemeConstantOverride(name: StringName): void
        
        /** Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeIcon(name: StringName, themeType?: StringName /* = '' */): null | Texture2D
        
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeStylebox(name: StringName, themeType?: StringName /* = '' */): null | StyleBox
        
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeFont(name: StringName, themeType?: StringName /* = '' */): null | Font
        
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeFontSize(name: StringName, themeType?: StringName /* = '' */): int64
        
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        getThemeColor(name: StringName, themeType?: StringName /* = '' */): Color
        
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        getThemeConstant(name: StringName, themeType?: StringName /* = '' */): int64
        
        /** Returns `true` if there is a local override for a theme icon with the specified [param name] in this [Control] node.  
         *  See [method add_theme_icon_override].  
         */
        hasThemeIconOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_stylebox_override].  
         */
        hasThemeStyleboxOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_override].  
         */
        hasThemeFontOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme font size with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_size_override].  
         */
        hasThemeFontSizeOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_color_override].  
         */
        hasThemeColorOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme constant with the specified [param name] in this [Control] node.  
         *  See [method add_theme_constant_override].  
         */
        hasThemeConstantOverride(name: StringName): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeIcon(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeStylebox(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeFont(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeFontSize(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeColor(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeConstant(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeDefaultBaseScale(): float64
        
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeDefaultFont(): null | Font
        
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeDefaultFontSize(): int64
        
        /** Returns the ID of the window. */
        getWindowId(): int64
        
        /** Returns the focused window. */
        static getFocusedWindow(): null | Window
        
        /** Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
        setLayoutDirection(direction: Window.LayoutDirection): void
        
        /** Returns layout direction and text writing direction. */
        getLayoutDirection(): Window.LayoutDirection
        
        /** Returns `true` if the layout is right-to-left. */
        isLayoutRtl(): boolean
        
        /** Enables font oversampling. This makes fonts look better when they are scaled up. */
        setUseFontOversampling(enable: boolean): void
        
        /** Returns `true` if font oversampling is enabled. See [method set_use_font_oversampling]. */
        isUsingFontOversampling(): boolean
        
        /** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `true` (single-window mode), [param rect]'s coordinates are global and relative to the main window's top-left corner (excluding window decorations). If [param rect]'s position coordinates are negative, the window will be located outside the main window and may not be visible as a result.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false` (multi-window mode), [param rect]'s coordinates are global and relative to the top-left corner of the leftmost screen. If [param rect]'s position coordinates are negative, the window will be placed at the top-left corner of the screen.  
         *      
         *  **Note:** [param rect] must be in global coordinates if specified.  
         */
        popup(rect?: Rect2I /* = new Rect2I(0, 0, 0, 0) */): void
        
        /** Popups the [Window] with a position shifted by parent [Window]'s position. If the [Window] is embedded, has the same effect as [method popup]. */
        popupOnParent(parentRect: Rect2I): void
        
        /** Popups the [Window] at the center of the current screen, with optionally given minimum size. If the [Window] is embedded, it will be centered in the parent [Viewport] instead.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popupCentered(minsize?: Vector2I /* = Vector2I.ZERO */): void
        
        /** If [Window] is embedded, popups the [Window] centered inside its embedder and sets its size as a [param ratio] of embedder's size.  
         *  If [Window] is a native window, popups the [Window] centered inside the screen of its parent [Window] and sets its size as a [param ratio] of the screen size.  
         */
        popupCenteredRatio(ratio?: float64 /* = 0.8 */): void
        
        /** Popups the [Window] centered inside its parent [Window]. [param fallback_ratio] determines the maximum size of the [Window], in relation to its parent.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popupCenteredClamped(minsize?: Vector2I /* = Vector2I.ZERO */, fallbackRatio?: float64 /* = 0.75 */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusive(fromNode: Node, rect?: Rect2I /* = new Rect2I(0, 0, 0, 0) */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_on_parent] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveOnParent(fromNode: Node, parentRect: Rect2I): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveCentered(fromNode: Node, minsize?: Vector2I /* = Vector2I.ZERO */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_ratio] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveCenteredRatio(fromNode: Node, ratio?: float64 /* = 0.8 */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_clamped] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveCenteredClamped(fromNode: Node, minsize?: Vector2I /* = Vector2I.ZERO */, fallbackRatio?: float64 /* = 0.75 */): void
        
        /** Set's the window's current mode.  
         *      
         *  **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.  
         *      
         *  **Note:** This method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        get mode(): int64
        set mode(value: int64)
        
        /** The window's title. If the [Window] is native, title styles set in [Theme] will have no effect. */
        get title(): string
        set title(value: string)
        
        /** Specifies the initial type of position for the [Window]. */
        get initialPosition(): int64
        set initialPosition(value: int64)
        
        /** The window's position in pixels.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent [Viewport].  
         *      
         *  **Note:** This property only works if [member initial_position] is set to [constant WINDOW_INITIAL_POSITION_ABSOLUTE].  
         */
        get position(): Vector2I
        set position(value: Vector2I)
        
        /** The window's size in pixels. */
        get size(): Vector2I
        set size(value: Vector2I)
        
        /** The screen the window is currently on. */
        get currentScreen(): int64
        set currentScreen(value: int64)
        
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.  
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).  
         *    
         *      
         *  **Note:** This property is ignored if [member mouse_passthrough] is set to `true`.  
         *      
         *  **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         */
        get mousePassthroughPolygon(): PackedVector2Array
        set mousePassthroughPolygon(value: PackedVector2Array | Vector2[])
        
        /** If `true`, the window is visible. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, the window's size will automatically update when a child node is added or removed, ignoring [member min_size] if the new size is bigger.  
         *  If `false`, you need to call [method child_controls_changed] manually.  
         */
        get wrapControls(): boolean
        set wrapControls(value: boolean)
        
        /** If `true`, the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *  Note that behavior might be different depending on the platform.  
         */
        get transient(): boolean
        set transient(value: boolean)
        
        /** If `true`, and the [Window] is [member transient], this window will (at the time of becoming visible) become transient to the currently focused window instead of the immediate parent window in the hierarchy. Note that the transient parent is assigned at the time this window becomes visible, so changing it afterwards has no effect until re-shown. */
        get transientToFocused(): boolean
        set transientToFocused(value: boolean)
        
        /** If `true`, the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].  
         *  Needs [member transient] enabled to work.  
         */
        get exclusive(): boolean
        set exclusive(value: boolean)
        
        /** If `true`, the window can't be resized. */
        get unresizable(): boolean
        set unresizable(value: boolean)
        
        /** If `true`, the window will have no borders. */
        get borderless(): boolean
        set borderless(value: boolean)
        
        /** If `true`, the window will be on top of all other windows. Does not work if [member transient] is enabled. */
        get alwaysOnTop(): boolean
        set alwaysOnTop(value: boolean)
        
        /** If `true`, the [Window]'s background can be transparent. This is best used with embedded windows.  
         *      
         *  **Note:** Transparency support is implemented on Linux, macOS and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.  
         *      
         *  **Note:** This property has no effect if [member ProjectSettings.display/window/per_pixel_transparency/allowed] is set to `false`.  
         */
        get transparent(): boolean
        set transparent(value: boolean)
        
        /** If `true`, the [Window] can't be focused nor interacted with. It can still be visible. */
        get unfocusable(): boolean
        set unfocusable(value: boolean)
        
        /** If `true`, the [Window] will be considered a popup. Popups are sub-windows that don't show as separate windows in system's window manager's window list and will send close request when anything is clicked outside of them (unless [member exclusive] is enabled). */
        get popupWindow(): boolean
        set popupWindow(value: boolean)
        
        /** If `true`, the [Window] contents is expanded to the full size of the window, window title bar is transparent.  
         *      
         *  **Note:** This property is implemented only on macOS.  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get extendToTitle(): boolean
        set extendToTitle(value: boolean)
        
        /** If `true`, all mouse events will be passed to the underlying window of the same application. See also [member mouse_passthrough_polygon].  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get mousePassthrough(): boolean
        set mousePassthrough(value: boolean)
        
        /** If `true`, the [Window] will override the OS window style to display sharp corners.  
         *      
         *  **Note:** This property is implemented only on Windows (11).  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get sharpCorners(): boolean
        set sharpCorners(value: boolean)
        
        /** If `true`, the [Window] is excluded from screenshots taken by [method DisplayServer.screen_get_image], [method DisplayServer.screen_get_image_rect], and [method DisplayServer.screen_get_pixel].  
         *      
         *  **Note:** This property is implemented on macOS and Windows.  
         *      
         *  **Note:** Enabling this setting will prevent standard screenshot methods from capturing a window image, but does **NOT** guarantee that other apps won't be able to capture an image. It should not be used as a DRM or security measure.  
         */
        get excludeFromCapture(): boolean
        set excludeFromCapture(value: boolean)
        
        /** If `true`, the [Window] will signal to the window manager that it is supposed to be an implementation-defined "popup" (usually a floating, borderless, untileable and immovable child window). */
        get popupWMHint(): boolean
        set popupWMHint(value: boolean)
        
        /** If `true`, the [Window]'s minimize button is disabled.  
         *      
         *  **Note:** If both minimize and maximize buttons are disabled, buttons are fully hidden, and only close button is visible.  
         *      
         *  **Note:** This property is implemented only on macOS and Windows.  
         */
        get minimizeDisabled(): boolean
        set minimizeDisabled(value: boolean)
        
        /** If `true`, the [Window]'s maximize button is disabled.  
         *      
         *  **Note:** If both minimize and maximize buttons are disabled, buttons are fully hidden, and only close button is visible.  
         *      
         *  **Note:** This property is implemented only on macOS and Windows.  
         */
        get maximizeDisabled(): boolean
        set maximizeDisabled(value: boolean)
        
        /** If `true`, native window will be used regardless of parent viewport and project settings. */
        get forceNative(): boolean
        set forceNative(value: boolean)
        
        /** If non-zero, the [Window] can't be resized to be smaller than this size.  
         *      
         *  **Note:** This property will be ignored in favor of [method get_contents_minimum_size] if [member wrap_controls] is enabled and if its size is bigger.  
         */
        get minSize(): Vector2I
        set minSize(value: Vector2I)
        
        /** If non-zero, the [Window] can't be resized to be bigger than this size.  
         *      
         *  **Note:** This property will be ignored if the value is lower than [member min_size].  
         */
        get maxSize(): Vector2I
        set maxSize(value: Vector2I)
        
        /** If `true`, the [Window] width is expanded to keep the title bar text fully visible. */
        get keepTitleVisible(): boolean
        set keepTitleVisible(value: boolean)
        
        /** Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, [Window]'s content will be scaled when the window is resized to a different size. */
        get contentScaleSize(): Vector2I
        set contentScaleSize(value: Vector2I)
        
        /** Specifies how the content is scaled when the [Window] is resized. */
        get contentScaleMode(): int64
        set contentScaleMode(value: int64)
        
        /** Specifies how the content's aspect behaves when the [Window] is resized. The base aspect is determined by [member content_scale_size]. */
        get contentScaleAspect(): int64
        set contentScaleAspect(value: int64)
        
        /** The policy to use to determine the final scale factor for 2D elements. This affects how [member content_scale_factor] is applied, in addition to the automatic scale factor determined by [member content_scale_size]. */
        get contentScaleStretch(): int64
        set contentScaleStretch(value: int64)
        
        /** Specifies the base scale of [Window]'s content when its [member size] is equal to [member content_scale_size]. See also [method Viewport.get_stretch_transform]. */
        get contentScaleFactor(): float64
        set contentScaleFactor(value: float64)
        
        /** Toggles if any text should automatically change to its translated version depending on the current locale. */
        get autoTranslate(): boolean
        set autoTranslate(value: boolean)
        
        /** The human-readable node name that is reported to assistive apps. */
        get accessibilityName(): string
        set accessibilityName(value: string)
        
        /** The human-readable node description that is reported to assistive apps. */
        get accessibilityDescription(): string
        set accessibilityDescription(value: string)
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        get theme(): null | Theme
        set theme(value: null | Theme)
        
        /** The name of a theme type variation used by this [Window] to look up its own theme items. See [member Control.theme_type_variation] for more details. */
        get themeTypeVariation(): string
        set themeTypeVariation(value: string)
        
        /** Emitted when the [Window] is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system. */
        readonly windowInput: Signal<(event: InputEvent) => void>
        
        /** Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.  
         *    
         *      
         *  **Note:** This signal only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        readonly filesDropped: Signal<(files: PackedStringArray) => void>
        
        /** Emitted when the mouse cursor enters the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouseEntered: Signal<() => void>
        
        /** Emitted when the mouse cursor leaves the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouseExited: Signal<() => void>
        
        /** Emitted when the [Window] gains focus. */
        readonly focusEntered: Signal<() => void>
        
        /** Emitted when the [Window] loses its focus. */
        readonly focusExited: Signal<() => void>
        
        /** Emitted when the [Window]'s close button is pressed or when [member popup_window] is enabled and user clicks outside the window.  
         *  This signal can be used to handle window closing, e.g. by connecting it to [method hide].  
         */
        readonly closeRequested: Signal<() => void>
        
        /** Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after [constant Node.NOTIFICATION_WM_GO_BACK_REQUEST]. */
        readonly goBackRequested: Signal<() => void>
        
        /** Emitted when [Window] is made visible or disappears. */
        readonly visibilityChanged: Signal<() => void>
        
        /** Emitted right after [method popup] call, before the [Window] appears or does anything. */
        readonly aboutToPopup: Signal<() => void>
        
        /** Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent. */
        readonly themeChanged: Signal<() => void>
        
        /** Emitted when the [Window]'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).  
         *      
         *  **Note:** Only implemented on macOS and Linux (Wayland).  
         */
        readonly dpiChanged: Signal<() => void>
        
        /** Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed. */
        readonly titlebarChanged: Signal<() => void>
        
        /** Emitted when window title bar text is changed. */
        readonly titleChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWindow;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWindow;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWorld2D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWorld2D extends __NameMapResource {
        navigation_map: "navigationMap";
        direct_space_state: "directSpaceState";
    }
    /** A resource that holds all components of a 2D world, such as a canvas and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_world2d.html  
     */
    class World2D extends Resource {
        constructor(identifier?: any)
        /** The [RID] of this world's canvas resource. Used by the [RenderingServer] for 2D drawing. */
        get canvas(): Rid
        set canvas(value: Rid)
        
        /** The [RID] of this world's navigation map. Used by the [NavigationServer2D]. */
        get navigationMap(): Rid
        set navigationMap(value: Rid)
        
        /** The [RID] of this world's physics space resource. Used by the [PhysicsServer2D] for 2D physics, treating it as both a space and an area. */
        get space(): Rid
        set space(value: Rid)
        
        /** Direct access to the world's physics 2D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        get directSpaceState(): null | PhysicsDirectSpaceState2D
        set directSpaceState(value: null | PhysicsDirectSpaceState2D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWorld2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWorld2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWorld3D extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWorld3D extends __NameMapResource {
        fallback_environment: "fallbackEnvironment";
        camera_attributes: "cameraAttributes";
        navigation_map: "navigationMap";
        direct_space_state: "directSpaceState";
    }
    /** A resource that holds all components of a 3D world, such as a visual scenario and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_world3d.html  
     */
    class World3D extends Resource {
        constructor(identifier?: any)
        /** The World3D's [Environment]. */
        get environment(): null | Environment
        set environment(value: null | Environment)
        
        /** The World3D's fallback environment will be used if [member environment] fails or is missing. */
        get fallbackEnvironment(): null | Environment
        set fallbackEnvironment(value: null | Environment)
        
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        get cameraAttributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The World3D's physics space. */
        get space(): Rid
        set space(value: Rid)
        
        /** The [RID] of this world's navigation map. Used by the [NavigationServer3D]. */
        get navigationMap(): Rid
        set navigationMap(value: Rid)
        
        /** The World3D's visual scenario. */
        get scenario(): Rid
        set scenario(value: Rid)
        
        /** Direct access to the world's physics 3D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        get directSpaceState(): null | PhysicsDirectSpaceState3D
        set directSpaceState(value: null | PhysicsDirectSpaceState3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWorld3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWorld3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWorldBoundaryShape2D extends __RPCMapShape2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWorldBoundaryShape2D extends __NameMapShape2D {
    }
    /** A 2D world boundary (half-plane) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_worldboundaryshape2d.html  
     */
    class WorldBoundaryShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [constant Vector2.UP]. */
        get normal(): Vector2
        set normal(value: Vector2)
        
        /** The distance from the origin to the line, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.  
         *  In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the [member normal] property.  
         */
        get distance(): float64
        set distance(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWorldBoundaryShape2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWorldBoundaryShape2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWorldBoundaryShape3D extends __RPCMapShape3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWorldBoundaryShape3D extends __NameMapShape3D {
    }
    /** A 3D world boundary (half-space) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_worldboundaryshape3d.html  
     */
    class WorldBoundaryShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The [Plane] used by the [WorldBoundaryShape3D] for collision. */
        get plane(): Plane
        set plane(value: Plane)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWorldBoundaryShape3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWorldBoundaryShape3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapWorldEnvironment extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapWorldEnvironment extends __NameMapNode {
        camera_attributes: "cameraAttributes";
    }
    /** Default environment properties for the entire scene (post-processing effects, lighting and background settings).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_worldenvironment.html  
     */
    class WorldEnvironment<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** The [Environment] resource used by this [WorldEnvironment], defining the default properties. */
        get environment(): null | Environment
        set environment(value: null | Environment)
        
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        get cameraAttributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The default [Compositor] resource to use if none set on the [Camera3D]. */
        get compositor(): null | Compositor
        set compositor(value: null | Compositor)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapWorldEnvironment;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapWorldEnvironment;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapX509Certificate extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapX509Certificate extends __NameMapResource {
        save_to_string: "saveToString";
        load_from_string: "loadFromString";
    }
    /** An X509 certificate (e.g. for TLS).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_x509certificate.html  
     */
    class X509Certificate extends Resource {
        constructor(identifier?: any)
        /** Saves a certificate to the given [param path] (should be a "*.crt" file). */
        save(path: string): GError
        
        /** Loads a certificate from [param path] ("*.crt" file). */
        load(path: string): GError
        
        /** Returns a string representation of the certificate, or an empty string if the certificate is invalid. */
        saveToString(): string
        
        /** Loads a certificate from the given [param string]. */
        loadFromString(string_: string): GError
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapX509Certificate;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapX509Certificate;
    }
    namespace XmlParser {
        enum NodeType {
            NodeNone = 0,
            NodeElement = 1,
            NodeElementEnd = 2,
            NodeText = 3,
            NodeComment = 4,
            NodeCdata = 5,
            NodeUnknown = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXmlParser extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXmlParser extends __NameMapRefCounted {
        get_node_type: "getNodeType";
        get_node_name: "getNodeName";
        get_node_data: "getNodeData";
        get_node_offset: "getNodeOffset";
        get_attribute_count: "getAttributeCount";
        get_attribute_name: "getAttributeName";
        get_attribute_value: "getAttributeValue";
        has_attribute: "hasAttribute";
        get_named_attribute_value: "getNamedAttributeValue";
        get_named_attribute_value_safe: "getNamedAttributeValueSafe";
        is_empty: "isEmpty";
        get_current_line: "getCurrentLine";
        skip_section: "skipSection";
        open_buffer: "openBuffer";
    }
    class XmlParser extends RefCounted {
        constructor(identifier?: any)
        read(): GError
        getNodeType(): XmlParser.NodeType
        getNodeName(): string
        getNodeData(): string
        getNodeOffset(): int64
        getAttributeCount(): int64
        getAttributeName(idx: int64): string
        getAttributeValue(idx: int64): string
        hasAttribute(name: string): boolean
        getNamedAttributeValue(name: string): string
        getNamedAttributeValueSafe(name: string): string
        isEmpty(): boolean
        getCurrentLine(): int64
        skipSection(): void
        seek(position: int64): GError
        open(file: string): GError
        openBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXmlParser;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXmlParser;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRAnchor3D extends __RPCMapXRNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRAnchor3D extends __NameMapXRNode3D {
        get_size: "getSize";
        get_plane: "getPlane";
    }
    /** An anchor point in AR space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xranchor3d.html  
     */
    class XRAnchor3D<Map extends NodePathMap = any> extends XRNode3D<Map> {
        constructor(identifier?: any)
        /** Returns the estimated size of the plane that was detected. Say when the anchor relates to a table in the real world, this is the estimated size of the surface of that table. */
        getSize(): Vector3
        
        /** Returns a plane aligned with our anchor; handy for intersection testing. */
        getPlane(): Plane
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRAnchor3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRAnchor3D;
    }
    namespace XRBodyModifier3D {
        enum BodyUpdate {
            BodyUpdateUpperBody = 1,
            BodyUpdateLowerBody = 2,
            BodyUpdateHands = 4,
        }
        enum BoneUpdate {
            BoneUpdateFull = 0,
            BoneUpdateRotationOnly = 1,
            BoneUpdateMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRBodyModifier3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRBodyModifier3D extends __NameMapSkeletonModifier3D {
        body_tracker: "bodyTracker";
        body_update: "bodyUpdate";
        bone_update: "boneUpdate";
    }
    /** A node for driving body meshes from [XRBodyTracker] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrbodymodifier3d.html  
     */
    class XRBodyModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** The name of the [XRBodyTracker] registered with [XRServer] to obtain the body tracking data from. */
        get bodyTracker(): string
        set bodyTracker(value: string)
        
        /** Specifies the body parts to update. */
        get bodyUpdate(): int64
        set bodyUpdate(value: int64)
        
        /** Specifies the type of updates to perform on the bones. */
        get boneUpdate(): int64
        set boneUpdate(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRBodyModifier3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRBodyModifier3D;
    }
    namespace XRBodyTracker {
        enum BodyFlags {
            BodyFlagUpperBodySupported = 1,
            BodyFlagLowerBodySupported = 2,
            BodyFlagHandsSupported = 4,
        }
        enum Joint {
            JointRoot = 0,
            JointHips = 1,
            JointSpine = 2,
            JointChest = 3,
            JointUpperChest = 4,
            JointNeck = 5,
            JointHead = 6,
            JointHeadTip = 7,
            JointLeftShoulder = 8,
            JointLeftUpperArm = 9,
            JointLeftLowerArm = 10,
            JointRightShoulder = 11,
            JointRightUpperArm = 12,
            JointRightLowerArm = 13,
            JointLeftUpperLeg = 14,
            JointLeftLowerLeg = 15,
            JointLeftFoot = 16,
            JointLeftToes = 17,
            JointRightUpperLeg = 18,
            JointRightLowerLeg = 19,
            JointRightFoot = 20,
            JointRightToes = 21,
            JointLeftHand = 22,
            JointLeftPalm = 23,
            JointLeftWrist = 24,
            JointLeftThumbMetacarpal = 25,
            JointLeftThumbPhalanxProximal = 26,
            JointLeftThumbPhalanxDistal = 27,
            JointLeftThumbTip = 28,
            JointLeftIndexFingerMetacarpal = 29,
            JointLeftIndexFingerPhalanxProximal = 30,
            JointLeftIndexFingerPhalanxIntermediate = 31,
            JointLeftIndexFingerPhalanxDistal = 32,
            JointLeftIndexFingerTip = 33,
            JointLeftMiddleFingerMetacarpal = 34,
            JointLeftMiddleFingerPhalanxProximal = 35,
            JointLeftMiddleFingerPhalanxIntermediate = 36,
            JointLeftMiddleFingerPhalanxDistal = 37,
            JointLeftMiddleFingerTip = 38,
            JointLeftRingFingerMetacarpal = 39,
            JointLeftRingFingerPhalanxProximal = 40,
            JointLeftRingFingerPhalanxIntermediate = 41,
            JointLeftRingFingerPhalanxDistal = 42,
            JointLeftRingFingerTip = 43,
            JointLeftPinkyFingerMetacarpal = 44,
            JointLeftPinkyFingerPhalanxProximal = 45,
            JointLeftPinkyFingerPhalanxIntermediate = 46,
            JointLeftPinkyFingerPhalanxDistal = 47,
            JointLeftPinkyFingerTip = 48,
            JointRightHand = 49,
            JointRightPalm = 50,
            JointRightWrist = 51,
            JointRightThumbMetacarpal = 52,
            JointRightThumbPhalanxProximal = 53,
            JointRightThumbPhalanxDistal = 54,
            JointRightThumbTip = 55,
            JointRightIndexFingerMetacarpal = 56,
            JointRightIndexFingerPhalanxProximal = 57,
            JointRightIndexFingerPhalanxIntermediate = 58,
            JointRightIndexFingerPhalanxDistal = 59,
            JointRightIndexFingerTip = 60,
            JointRightMiddleFingerMetacarpal = 61,
            JointRightMiddleFingerPhalanxProximal = 62,
            JointRightMiddleFingerPhalanxIntermediate = 63,
            JointRightMiddleFingerPhalanxDistal = 64,
            JointRightMiddleFingerTip = 65,
            JointRightRingFingerMetacarpal = 66,
            JointRightRingFingerPhalanxProximal = 67,
            JointRightRingFingerPhalanxIntermediate = 68,
            JointRightRingFingerPhalanxDistal = 69,
            JointRightRingFingerTip = 70,
            JointRightPinkyFingerMetacarpal = 71,
            JointRightPinkyFingerPhalanxProximal = 72,
            JointRightPinkyFingerPhalanxIntermediate = 73,
            JointRightPinkyFingerPhalanxDistal = 74,
            JointRightPinkyFingerTip = 75,
            JointLowerChest = 76,
            JointLeftScapula = 77,
            JointLeftWristTwist = 78,
            JointRightScapula = 79,
            JointRightWristTwist = 80,
            JointLeftFootTwist = 81,
            JointLeftHeel = 82,
            JointLeftMiddleFoot = 83,
            JointRightFootTwist = 84,
            JointRightHeel = 85,
            JointRightMiddleFoot = 86,
            JointMax = 87,
        }
        enum JointFlags {
            JointFlagOrientationValid = 1,
            JointFlagOrientationTracked = 2,
            JointFlagPositionValid = 4,
            JointFlagPositionTracked = 8,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRBodyTracker extends __RPCMapXRPositionalTracker {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRBodyTracker extends __NameMapXRPositionalTracker {
        set_joint_flags: "setJointFlags";
        get_joint_flags: "getJointFlags";
        set_joint_transform: "setJointTransform";
        get_joint_transform: "getJointTransform";
        has_tracking_data: "hasTrackingData";
        body_flags: "bodyFlags";
    }
    /** A tracked body in XR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrbodytracker.html  
     */
    class XRBodyTracker extends XRPositionalTracker {
        constructor(identifier?: any)
        /** Sets flags about the validity of the tracking data for the given body joint. */
        setJointFlags(joint: XRBodyTracker.Joint, flags: XRBodyTracker.JointFlags): void
        
        /** Returns flags about the validity of the tracking data for the given body joint. */
        getJointFlags(joint: XRBodyTracker.Joint): XRBodyTracker.JointFlags
        
        /** Sets the transform for the given body joint. */
        setJointTransform(joint: XRBodyTracker.Joint, transform: Transform3D): void
        
        /** Returns the transform for the given body joint. */
        getJointTransform(joint: XRBodyTracker.Joint): Transform3D
        
        /** If `true`, the body tracking data is valid. */
        get hasTrackingData(): boolean
        set hasTrackingData(value: boolean)
        
        /** The type of body tracking data captured. */
        get bodyFlags(): int64
        set bodyFlags(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRBodyTracker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRBodyTracker;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRCamera3D extends __RPCMapCamera3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRCamera3D extends __NameMapCamera3D {
    }
    /** A camera node with a few overrules for AR/VR applied, such as location tracking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrcamera3d.html  
     */
    class XRCamera3D<Map extends NodePathMap = any> extends Camera3D<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRCamera3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRCamera3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRController3D extends __RPCMapXRNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRController3D extends __NameMapXRNode3D {
        is_button_pressed: "isButtonPressed";
        get_input: "getInput";
        get_float: "getFloat";
        get_vector2: "getVector2";
        get_tracker_hand: "getTrackerHand";
        button_pressed: "buttonPressed";
        button_released: "buttonReleased";
        input_float_changed: "inputFloatChanged";
        input_vector2_changed: "inputVector2Changed";
        profile_changed: "profileChanged";
    }
    /** A 3D node representing a spatially-tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrcontroller3d.html  
     */
    class XRController3D<Map extends NodePathMap = any> extends XRNode3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the button with the given [param name] is pressed.  
         *      
         *  **Note:** The current [XRInterface] defines the [param name] for each input. In the case of OpenXR, these are the names of actions in the current action set.  
         */
        isButtonPressed(name: StringName): boolean
        
        /** Returns a [Variant] for the input with the given [param name]. This works for any input type, the variant will be typed according to the actions configuration.  
         *      
         *  **Note:** The current [XRInterface] defines the [param name] for each input. In the case of OpenXR, these are the names of actions in the current action set.  
         */
        getInput(name: StringName): any
        
        /** Returns a numeric value for the input with the given [param name]. This is used for triggers and grip sensors.  
         *      
         *  **Note:** The current [XRInterface] defines the [param name] for each input. In the case of OpenXR, these are the names of actions in the current action set.  
         */
        getFloat(name: StringName): float64
        
        /** Returns a [Vector2] for the input with the given [param name]. This is used for thumbsticks and thumbpads found on many controllers.  
         *      
         *  **Note:** The current [XRInterface] defines the [param name] for each input. In the case of OpenXR, these are the names of actions in the current action set.  
         */
        getVector2(name: StringName): Vector2
        
        /** Returns the hand holding this controller, if known. */
        getTrackerHand(): XRPositionalTracker.TrackerHand
        
        /** Emitted when a button on this controller is pressed. */
        readonly buttonPressed: Signal<(name: string) => void>
        
        /** Emitted when a button on this controller is released. */
        readonly buttonReleased: Signal<(name: string) => void>
        
        /** Emitted when a trigger or similar input on this controller changes value. */
        readonly inputFloatChanged: Signal<(name: string, value: float64) => void>
        
        /** Emitted when a thumbstick or thumbpad on this controller is moved. */
        readonly inputVector2Changed: Signal<(name: string, value: Vector2) => void>
        
        /** Emitted when the interaction profile on this controller is changed. */
        readonly profileChanged: Signal<(role: string) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRController3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRController3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRControllerTracker extends __RPCMapXRPositionalTracker {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRControllerTracker extends __NameMapXRPositionalTracker {
    }
    /** A tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrcontrollertracker.html  
     */
    class XRControllerTracker extends XRPositionalTracker {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRControllerTracker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRControllerTracker;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRFaceModifier3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRFaceModifier3D extends __NameMapNode3D {
        face_tracker: "faceTracker";
    }
    /** A node for driving standard face meshes from [XRFaceTracker] weights.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrfacemodifier3d.html  
     */
    class XRFaceModifier3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** The [XRFaceTracker] path. */
        get faceTracker(): string
        set faceTracker(value: string)
        
        /** The [NodePath] of the face [MeshInstance3D]. */
        get target(): NodePath
        set target(value: NodePath | string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRFaceModifier3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRFaceModifier3D;
    }
    namespace XRFaceTracker {
        enum BlendShapeEntry {
            FtEyeLookOutRight = 0,
            FtEyeLookInRight = 1,
            FtEyeLookUpRight = 2,
            FtEyeLookDownRight = 3,
            FtEyeLookOutLeft = 4,
            FtEyeLookInLeft = 5,
            FtEyeLookUpLeft = 6,
            FtEyeLookDownLeft = 7,
            FtEyeClosedRight = 8,
            FtEyeClosedLeft = 9,
            FtEyeSquintRight = 10,
            FtEyeSquintLeft = 11,
            FtEyeWideRight = 12,
            FtEyeWideLeft = 13,
            FtEyeDilationRight = 14,
            FtEyeDilationLeft = 15,
            FtEyeConstrictRight = 16,
            FtEyeConstrictLeft = 17,
            FtBrowPinchRight = 18,
            FtBrowPinchLeft = 19,
            FtBrowLowererRight = 20,
            FtBrowLowererLeft = 21,
            FtBrowInnerUpRight = 22,
            FtBrowInnerUpLeft = 23,
            FtBrowOuterUpRight = 24,
            FtBrowOuterUpLeft = 25,
            FtNoseSneerRight = 26,
            FtNoseSneerLeft = 27,
            FtNasalDilationRight = 28,
            FtNasalDilationLeft = 29,
            FtNasalConstrictRight = 30,
            FtNasalConstrictLeft = 31,
            FtCheekSquintRight = 32,
            FtCheekSquintLeft = 33,
            FtCheekPuffRight = 34,
            FtCheekPuffLeft = 35,
            FtCheekSuckRight = 36,
            FtCheekSuckLeft = 37,
            FtJawOpen = 38,
            FtMouthClosed = 39,
            FtJawRight = 40,
            FtJawLeft = 41,
            FtJawForward = 42,
            FtJawBackward = 43,
            FtJawClench = 44,
            FtJawMandibleRaise = 45,
            FtLipSuckUpperRight = 46,
            FtLipSuckUpperLeft = 47,
            FtLipSuckLowerRight = 48,
            FtLipSuckLowerLeft = 49,
            FtLipSuckCornerRight = 50,
            FtLipSuckCornerLeft = 51,
            FtLipFunnelUpperRight = 52,
            FtLipFunnelUpperLeft = 53,
            FtLipFunnelLowerRight = 54,
            FtLipFunnelLowerLeft = 55,
            FtLipPuckerUpperRight = 56,
            FtLipPuckerUpperLeft = 57,
            FtLipPuckerLowerRight = 58,
            FtLipPuckerLowerLeft = 59,
            FtMouthUpperUpRight = 60,
            FtMouthUpperUpLeft = 61,
            FtMouthLowerDownRight = 62,
            FtMouthLowerDownLeft = 63,
            FtMouthUpperDeepenRight = 64,
            FtMouthUpperDeepenLeft = 65,
            FtMouthUpperRight = 66,
            FtMouthUpperLeft = 67,
            FtMouthLowerRight = 68,
            FtMouthLowerLeft = 69,
            FtMouthCornerPullRight = 70,
            FtMouthCornerPullLeft = 71,
            FtMouthCornerSlantRight = 72,
            FtMouthCornerSlantLeft = 73,
            FtMouthFrownRight = 74,
            FtMouthFrownLeft = 75,
            FtMouthStretchRight = 76,
            FtMouthStretchLeft = 77,
            FtMouthDimpleRight = 78,
            FtMouthDimpleLeft = 79,
            FtMouthRaiserUpper = 80,
            FtMouthRaiserLower = 81,
            FtMouthPressRight = 82,
            FtMouthPressLeft = 83,
            FtMouthTightenerRight = 84,
            FtMouthTightenerLeft = 85,
            FtTongueOut = 86,
            FtTongueUp = 87,
            FtTongueDown = 88,
            FtTongueRight = 89,
            FtTongueLeft = 90,
            FtTongueRoll = 91,
            FtTongueBlendDown = 92,
            FtTongueCurlUp = 93,
            FtTongueSquish = 94,
            FtTongueFlat = 95,
            FtTongueTwistRight = 96,
            FtTongueTwistLeft = 97,
            FtSoftPalateClose = 98,
            FtThroatSwallow = 99,
            FtNeckFlexRight = 100,
            FtNeckFlexLeft = 101,
            FtEyeClosed = 102,
            FtEyeWide = 103,
            FtEyeSquint = 104,
            FtEyeDilation = 105,
            FtEyeConstrict = 106,
            FtBrowDownRight = 107,
            FtBrowDownLeft = 108,
            FtBrowDown = 109,
            FtBrowUpRight = 110,
            FtBrowUpLeft = 111,
            FtBrowUp = 112,
            FtNoseSneer = 113,
            FtNasalDilation = 114,
            FtNasalConstrict = 115,
            FtCheekPuff = 116,
            FtCheekSuck = 117,
            FtCheekSquint = 118,
            FtLipSuckUpper = 119,
            FtLipSuckLower = 120,
            FtLipSuck = 121,
            FtLipFunnelUpper = 122,
            FtLipFunnelLower = 123,
            FtLipFunnel = 124,
            FtLipPuckerUpper = 125,
            FtLipPuckerLower = 126,
            FtLipPucker = 127,
            FtMouthUpperUp = 128,
            FtMouthLowerDown = 129,
            FtMouthOpen = 130,
            FtMouthRight = 131,
            FtMouthLeft = 132,
            FtMouthSmileRight = 133,
            FtMouthSmileLeft = 134,
            FtMouthSmile = 135,
            FtMouthSadRight = 136,
            FtMouthSadLeft = 137,
            FtMouthSad = 138,
            FtMouthStretch = 139,
            FtMouthDimple = 140,
            FtMouthTightener = 141,
            FtMouthPress = 142,
            FtMax = 143,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRFaceTracker extends __RPCMapXRTracker {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRFaceTracker extends __NameMapXRTracker {
        get_blend_shape: "getBlendShape";
        set_blend_shape: "setBlendShape";
        blend_shapes: "blendShapes";
    }
    /** A tracked face.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrfacetracker.html  
     */
    class XRFaceTracker extends XRTracker {
        constructor(identifier?: any)
        /** Returns the requested face blend shape weight. */
        getBlendShape(blendShape: XRFaceTracker.BlendShapeEntry): float64
        
        /** Sets a face blend shape weight. */
        setBlendShape(blendShape: XRFaceTracker.BlendShapeEntry, weight: float64): void
        
        /** The array of face blend shape weights with indices corresponding to the [enum BlendShapeEntry] enum. */
        get blendShapes(): PackedFloat32Array
        set blendShapes(value: PackedFloat32Array | float32[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRFaceTracker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRFaceTracker;
    }
    namespace XRHandModifier3D {
        enum BoneUpdate {
            BoneUpdateFull = 0,
            BoneUpdateRotationOnly = 1,
            BoneUpdateMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRHandModifier3D extends __RPCMapSkeletonModifier3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRHandModifier3D extends __NameMapSkeletonModifier3D {
        hand_tracker: "handTracker";
        bone_update: "boneUpdate";
    }
    /** A node for driving hand meshes from [XRHandTracker] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrhandmodifier3d.html  
     */
    class XRHandModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** The name of the [XRHandTracker] registered with [XRServer] to obtain the hand tracking data from. */
        get handTracker(): string
        set handTracker(value: string)
        
        /** Specifies the type of updates to perform on the bones. */
        get boneUpdate(): int64
        set boneUpdate(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRHandModifier3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRHandModifier3D;
    }
    namespace XRHandTracker {
        enum HandTrackingSource {
            HandTrackingSourceUnknown = 0,
            HandTrackingSourceUnobstructed = 1,
            HandTrackingSourceController = 2,
            HandTrackingSourceNotTracked = 3,
            HandTrackingSourceMax = 4,
        }
        enum HandJoint {
            HandJointPalm = 0,
            HandJointWrist = 1,
            HandJointThumbMetacarpal = 2,
            HandJointThumbPhalanxProximal = 3,
            HandJointThumbPhalanxDistal = 4,
            HandJointThumbTip = 5,
            HandJointIndexFingerMetacarpal = 6,
            HandJointIndexFingerPhalanxProximal = 7,
            HandJointIndexFingerPhalanxIntermediate = 8,
            HandJointIndexFingerPhalanxDistal = 9,
            HandJointIndexFingerTip = 10,
            HandJointMiddleFingerMetacarpal = 11,
            HandJointMiddleFingerPhalanxProximal = 12,
            HandJointMiddleFingerPhalanxIntermediate = 13,
            HandJointMiddleFingerPhalanxDistal = 14,
            HandJointMiddleFingerTip = 15,
            HandJointRingFingerMetacarpal = 16,
            HandJointRingFingerPhalanxProximal = 17,
            HandJointRingFingerPhalanxIntermediate = 18,
            HandJointRingFingerPhalanxDistal = 19,
            HandJointRingFingerTip = 20,
            HandJointPinkyFingerMetacarpal = 21,
            HandJointPinkyFingerPhalanxProximal = 22,
            HandJointPinkyFingerPhalanxIntermediate = 23,
            HandJointPinkyFingerPhalanxDistal = 24,
            HandJointPinkyFingerTip = 25,
            HandJointMax = 26,
        }
        enum HandJointFlags {
            HandJointFlagOrientationValid = 1,
            HandJointFlagOrientationTracked = 2,
            HandJointFlagPositionValid = 4,
            HandJointFlagPositionTracked = 8,
            HandJointFlagLinearVelocityValid = 16,
            HandJointFlagAngularVelocityValid = 32,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRHandTracker extends __RPCMapXRPositionalTracker {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRHandTracker extends __NameMapXRPositionalTracker {
        set_hand_joint_flags: "setHandJointFlags";
        get_hand_joint_flags: "getHandJointFlags";
        set_hand_joint_transform: "setHandJointTransform";
        get_hand_joint_transform: "getHandJointTransform";
        set_hand_joint_radius: "setHandJointRadius";
        get_hand_joint_radius: "getHandJointRadius";
        set_hand_joint_linear_velocity: "setHandJointLinearVelocity";
        get_hand_joint_linear_velocity: "getHandJointLinearVelocity";
        set_hand_joint_angular_velocity: "setHandJointAngularVelocity";
        get_hand_joint_angular_velocity: "getHandJointAngularVelocity";
        has_tracking_data: "hasTrackingData";
        hand_tracking_source: "handTrackingSource";
    }
    /** A tracked hand in XR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrhandtracker.html  
     */
    class XRHandTracker extends XRPositionalTracker {
        constructor(identifier?: any)
        /** Sets flags about the validity of the tracking data for the given hand joint. */
        setHandJointFlags(joint: XRHandTracker.HandJoint, flags: XRHandTracker.HandJointFlags): void
        
        /** Returns flags about the validity of the tracking data for the given hand joint. */
        getHandJointFlags(joint: XRHandTracker.HandJoint): XRHandTracker.HandJointFlags
        
        /** Sets the transform for the given hand joint. */
        setHandJointTransform(joint: XRHandTracker.HandJoint, transform: Transform3D): void
        
        /** Returns the transform for the given hand joint. */
        getHandJointTransform(joint: XRHandTracker.HandJoint): Transform3D
        
        /** Sets the radius of the given hand joint. */
        setHandJointRadius(joint: XRHandTracker.HandJoint, radius: float64): void
        
        /** Returns the radius of the given hand joint. */
        getHandJointRadius(joint: XRHandTracker.HandJoint): float64
        
        /** Sets the linear velocity for the given hand joint. */
        setHandJointLinearVelocity(joint: XRHandTracker.HandJoint, linearVelocity: Vector3): void
        
        /** Returns the linear velocity for the given hand joint. */
        getHandJointLinearVelocity(joint: XRHandTracker.HandJoint): Vector3
        
        /** Sets the angular velocity for the given hand joint. */
        setHandJointAngularVelocity(joint: XRHandTracker.HandJoint, angularVelocity: Vector3): void
        
        /** Returns the angular velocity for the given hand joint. */
        getHandJointAngularVelocity(joint: XRHandTracker.HandJoint): Vector3
        
        /** If `true`, the hand tracking data is valid. */
        get hasTrackingData(): boolean
        set hasTrackingData(value: boolean)
        
        /** The source of the hand tracking data. */
        get handTrackingSource(): int64
        set handTrackingSource(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRHandTracker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRHandTracker;
    }
    namespace XRInterface {
        enum Capabilities {
            XRNone = 0,
            XRMono = 1,
            XRStereo = 2,
            XRQuad = 4,
            XRVr = 8,
            XRAr = 16,
            XRExternal = 32,
        }
        enum TrackingStatus {
            XRNormalTracking = 0,
            XRExcessiveMotion = 1,
            XRInsufficientFeatures = 2,
            XRUnknownTracking = 3,
            XRNotTracking = 4,
        }
        enum PlayAreaMode {
            XRPlayAreaUnknown = 0,
            XRPlayArea3Dof = 1,
            XRPlayAreaSitting = 2,
            XRPlayAreaRoomscale = 3,
            XRPlayAreaStage = 4,
            XRPlayAreaCustom = 2147483647,
        }
        enum EnvironmentBlendMode {
            XREnvBlendModeOpaque = 0,
            XREnvBlendModeAdditive = 1,
            XREnvBlendModeAlphaBlend = 2,
        }
        enum VrsTextureFormat {
            XRVrsTextureFormatUnified = 0,
            XRVrsTextureFormatFragmentShadingRate = 1,
            XRVrsTextureFormatFragmentDensityMap = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRInterface extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRInterface extends __NameMapRefCounted {
        get_name: "getName";
        get_capabilities: "getCapabilities";
        is_initialized: "isInitialized";
        get_system_info: "getSystemInfo";
        get_tracking_status: "getTrackingStatus";
        get_render_target_size: "getRenderTargetSize";
        get_view_count: "getViewCount";
        trigger_haptic_pulse: "triggerHapticPulse";
        supports_play_area_mode: "supportsPlayAreaMode";
        get_play_area: "getPlayArea";
        get_camera_feed_id: "getCameraFeedId";
        is_passthrough_supported: "isPassthroughSupported";
        is_passthrough_enabled: "isPassthroughEnabled";
        start_passthrough: "startPassthrough";
        stop_passthrough: "stopPassthrough";
        get_transform_for_view: "getTransformForView";
        get_projection_for_view: "getProjectionForView";
        get_supported_environment_blend_modes: "getSupportedEnvironmentBlendModes";
        interface_is_primary: "interfaceIsPrimary";
        xr_play_area_mode: "xRPlayAreaMode";
        environment_blend_mode: "environmentBlendMode";
        ar_is_anchor_detection_enabled: "arIsAnchorDetectionEnabled";
        play_area_changed: "playAreaChanged";
    }
    /** Base class for an XR interface implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrinterface.html  
     */
    class XRInterface extends RefCounted {
        constructor(identifier?: any)
        /** Returns the name of this interface (`"OpenXR"`, `"OpenVR"`, `"OpenHMD"`, `"ARKit"`, etc.). */
        getName(): StringName
        
        /** Returns a combination of [enum Capabilities] flags providing information about the capabilities of this interface. */
        getCapabilities(): int64
        
        /** Returns `true` if this interface has been initialized. */
        isInitialized(): boolean
        
        /** Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.  
         *  After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.  
         *      
         *  **Note:** You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.  
         *  If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.  
         *  While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.  
         */
        initialize(): boolean
        
        /** Turns the interface off. */
        uninitialize(): void
        
        /** Returns a [Dictionary] with extra system info. Interfaces are expected to return `XRRuntimeName` and `XRRuntimeVersion` providing info about the used XR runtime. Additional entries may be provided specific to an interface.  
         *      
         *  **Note:**This information may only be available after [method initialize] was successfully called.  
         */
        getSystemInfo(): GDictionary
        
        /** If supported, returns the status of our tracking. This will allow you to provide feedback to the user whether there are issues with positional tracking. */
        getTrackingStatus(): XRInterface.TrackingStatus
        
        /** Returns the resolution at which we should render our intermediate results before things like lens distortion are applied by the VR platform. */
        getRenderTargetSize(): Vector2
        
        /** Returns the number of views that need to be rendered for this device. 1 for Monoscopic, 2 for Stereoscopic. */
        getViewCount(): int64
        
        /** Triggers a haptic pulse on a device associated with this interface.  
         *  [param action_name] is the name of the action for this pulse.  
         *  [param tracker_name] is optional and can be used to direct the pulse to a specific device provided that device is bound to this haptic.  
         *  [param frequency] is the frequency of the pulse, set to `0.0` to have the system use a default frequency.  
         *  [param amplitude] is the amplitude of the pulse between `0.0` and `1.0`.  
         *  [param duration_sec] is the duration of the pulse in seconds.  
         *  [param delay_sec] is a delay in seconds before the pulse is given.  
         */
        triggerHapticPulse(actionName: string, trackerName: StringName, frequency: float64, amplitude: float64, durationSec: float64, delaySec: float64): void
        
        /** Call this to find out if a given play area mode is supported by this interface. */
        supportsPlayAreaMode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns an array of vectors that represent the physical play area mapped to the virtual space around the [XROrigin3D] point. The points form a convex polygon that can be used to react to or visualize the play area. This returns an empty array if this feature is not supported or if the information is not yet available. */
        getPlayArea(): PackedVector3Array
        
        /** If this is an AR interface that requires displaying a camera feed as the background, this method returns the feed ID in the [CameraServer] for this interface. */
        getCameraFeedId(): int64
        
        /** Returns `true` if this interface supports passthrough. */
        isPassthroughSupported(): boolean
        
        /** Returns `true` if passthrough is enabled. */
        isPassthroughEnabled(): boolean
        
        /** Starts passthrough, will return `false` if passthrough couldn't be started.  
         *      
         *  **Note:** The viewport used for XR must have a transparent background, otherwise passthrough may not properly render.  
         */
        startPassthrough(): boolean
        
        /** Stops passthrough. */
        stopPassthrough(): void
        
        /** Returns the transform for a view/eye.  
         *  [param view] is the view/eye index.  
         *  [param cam_transform] is the transform that maps device coordinates to scene coordinates, typically the [member Node3D.global_transform] of the current XROrigin3D.  
         */
        getTransformForView(view: int64, camTransform: Transform3D): Transform3D
        
        /** Returns the projection matrix for a view/eye. */
        getProjectionForView(view: int64, aspect: float64, near: float64, far: float64): Projection
        
        /** Returns the an array of supported environment blend modes, see [enum XRInterface.EnvironmentBlendMode]. */
        getSupportedEnvironmentBlendModes(): GArray
        
        /** `true` if this is the primary interface. */
        get interfaceIsPrimary(): boolean
        set interfaceIsPrimary(value: boolean)
        
        /** The play area mode for this interface. */
        get xRPlayAreaMode(): int64
        set xRPlayAreaMode(value: int64)
        
        /** Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor. */
        get environmentBlendMode(): int64
        set environmentBlendMode(value: int64)
        
        /** On an AR interface, `true` if anchor detection is enabled. */
        get arIsAnchorDetectionEnabled(): boolean
        set arIsAnchorDetectionEnabled(value: boolean)
        
        /** Emitted when the play area is changed. This can be a result of the player resetting the boundary or entering a new play area, the player changing the play area mode, the world scale changing or the player resetting their headset orientation. */
        readonly playAreaChanged: Signal<(mode: int64) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRInterface;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRInterface;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRInterfaceExtension extends __RPCMapXRInterface {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRInterfaceExtension extends __NameMapXRInterface {
        _get_name: "_getName";
        _get_capabilities: "_getCapabilities";
        _is_initialized: "_isInitialized";
        _get_system_info: "_getSystemInfo";
        _supports_play_area_mode: "_supportsPlayAreaMode";
        _get_play_area_mode: "_getPlayAreaMode";
        _set_play_area_mode: "_setPlayAreaMode";
        _get_play_area: "_getPlayArea";
        _get_render_target_size: "_getRenderTargetSize";
        _get_view_count: "_getViewCount";
        _get_camera_transform: "_getCameraTransform";
        _get_transform_for_view: "_getTransformForView";
        _get_projection_for_view: "_getProjectionForView";
        _get_vrs_texture: "_getVrsTexture";
        _get_vrs_texture_format: "_getVrsTextureFormat";
        _pre_render: "_preRender";
        _pre_draw_viewport: "_preDrawViewport";
        _post_draw_viewport: "_postDrawViewport";
        _end_frame: "_endFrame";
        _get_suggested_tracker_names: "_getSuggestedTrackerNames";
        _get_suggested_pose_names: "_getSuggestedPoseNames";
        _get_tracking_status: "_getTrackingStatus";
        _trigger_haptic_pulse: "_triggerHapticPulse";
        _get_anchor_detection_is_enabled: "_getAnchorDetectionIsEnabled";
        _set_anchor_detection_is_enabled: "_setAnchorDetectionIsEnabled";
        _get_camera_feed_id: "_getCameraFeedId";
        _get_color_texture: "_getColorTexture";
        _get_depth_texture: "_getDepthTexture";
        _get_velocity_texture: "_getVelocityTexture";
        get_color_texture: "getColorTexture";
        get_depth_texture: "getDepthTexture";
        get_velocity_texture: "getVelocityTexture";
        add_blit: "addBlit";
        get_render_target_texture: "getRenderTargetTexture";
    }
    /** Base class for XR interface extensions (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrinterfaceextension.html  
     */
    class XRInterfaceExtension extends XRInterface {
        constructor(identifier?: any)
        /** Returns the name of this interface. */
        /* gdvirtual */ _getName(): StringName
        
        /** Returns the capabilities of this interface. */
        /* gdvirtual */ _getCapabilities(): int64
        
        /** Returns `true` if this interface has been initialized. */
        /* gdvirtual */ _isInitialized(): boolean
        
        /** Initializes the interface, returns `true` on success. */
        /* gdvirtual */ _initialize(): boolean
        
        /** Uninitialize the interface. */
        /* gdvirtual */ _uninitialize(): void
        
        /** Returns a [Dictionary] with system information related to this interface. */
        /* gdvirtual */ _getSystemInfo(): GDictionary
        
        /** Returns `true` if this interface supports this play area mode. */
        /* gdvirtual */ _supportsPlayAreaMode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns the play area mode that sets up our play area. */
        /* gdvirtual */ _getPlayAreaMode(): XRInterface.PlayAreaMode
        
        /** Set the play area mode for this interface. */
        /* gdvirtual */ _setPlayAreaMode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns a [PackedVector3Array] that represents the play areas boundaries (if applicable). */
        /* gdvirtual */ _getPlayArea(): PackedVector3Array
        
        /** Returns the size of our render target for this interface, this overrides the size of the [Viewport] marked as the xr viewport. */
        /* gdvirtual */ _getRenderTargetSize(): Vector2
        
        /** Returns the number of views this interface requires, 1 for mono, 2 for stereoscopic. */
        /* gdvirtual */ _getViewCount(): int64
        
        /** Returns the [Transform3D] that positions the [XRCamera3D] in the world. */
        /* gdvirtual */ _getCameraTransform(): Transform3D
        
        /** Returns a [Transform3D] for a given view. */
        /* gdvirtual */ _getTransformForView(view: int64, camTransform: Transform3D): Transform3D
        
        /** Returns the projection matrix for the given view as a [PackedFloat64Array]. */
        /* gdvirtual */ _getProjectionForView(view: int64, aspect: float64, zNear: float64, zFar: float64): PackedFloat64Array
        /* gdvirtual */ _getVrsTexture(): Rid
        
        /** Returns the format of the texture returned by [method _get_vrs_texture]. */
        /* gdvirtual */ _getVrsTextureFormat(): XRInterface.VrsTextureFormat
        
        /** Called if this [XRInterfaceExtension] is active before our physics and game process is called. Most XR interfaces will update its [XRPositionalTracker]s at this point in time. */
        /* gdvirtual */ _process(): void
        
        /** Called if this [XRInterfaceExtension] is active before rendering starts. Most XR interfaces will sync tracking at this point in time. */
        /* gdvirtual */ _preRender(): void
        
        /** Called if this is our primary [XRInterfaceExtension] before we start processing a [Viewport] for every active XR [Viewport], returns `true` if that viewport should be rendered. An XR interface may return `false` if the user has taken off their headset and we can pause rendering. */
        /* gdvirtual */ _preDrawViewport(renderTarget: Rid): boolean
        
        /** Called after the XR [Viewport] draw logic has completed. */
        /* gdvirtual */ _postDrawViewport(renderTarget: Rid, screenRect: Rect2): void
        
        /** Called if interface is active and queues have been submitted. */
        /* gdvirtual */ _endFrame(): void
        
        /** Returns a [PackedStringArray] with tracker names configured by this interface. Note that user configuration can override this list. */
        /* gdvirtual */ _getSuggestedTrackerNames(): PackedStringArray
        
        /** Returns a [PackedStringArray] with pose names configured by this interface. Note that user configuration can override this list. */
        /* gdvirtual */ _getSuggestedPoseNames(trackerName: StringName): PackedStringArray
        
        /** Returns an [enum XRInterface.TrackingStatus] specifying the current status of our tracking. */
        /* gdvirtual */ _getTrackingStatus(): XRInterface.TrackingStatus
        
        /** Triggers a haptic pulse to be emitted on the specified tracker. */
        /* gdvirtual */ _triggerHapticPulse(actionName: string, trackerName: StringName, frequency: float64, amplitude: float64, durationSec: float64, delaySec: float64): void
        
        /** Return `true` if anchor detection is enabled for this interface. */
        /* gdvirtual */ _getAnchorDetectionIsEnabled(): boolean
        
        /** Enables anchor detection on this interface if supported. */
        /* gdvirtual */ _setAnchorDetectionIsEnabled(enabled: boolean): void
        
        /** Returns the camera feed ID for the [CameraFeed] registered with the [CameraServer] that should be presented as the background on an AR capable device (if applicable). */
        /* gdvirtual */ _getCameraFeedId(): int64
        
        /** Return color texture into which to render (if applicable). */
        /* gdvirtual */ _getColorTexture(): Rid
        
        /** Return depth texture into which to render (if applicable). */
        /* gdvirtual */ _getDepthTexture(): Rid
        
        /** Return velocity texture into which to render (if applicable). */
        /* gdvirtual */ _getVelocityTexture(): Rid
        getColorTexture(): Rid
        getDepthTexture(): Rid
        getVelocityTexture(): Rid
        
        /** Blits our render results to screen optionally applying lens distortion. This can only be called while processing `_commit_views`. */
        addBlit(renderTarget: Rid, srcRect: Rect2, dstRect: Rect2I, useLayer: boolean, layer: int64, applyLensDistortion: boolean, eyeCenter: Vector2, k1: float64, k2: float64, upscale: float64, aspectRatio: float64): void
        
        /** Returns a valid [RID] for a texture to which we should render the current frame if supported by the interface. */
        getRenderTargetTexture(renderTarget: Rid): Rid
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRInterfaceExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRInterfaceExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRNode3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRNode3D extends __NameMapNode3D {
        get_is_active: "getIsActive";
        get_has_tracking_data: "getHasTrackingData";
        get_pose: "getPose";
        trigger_haptic_pulse: "triggerHapticPulse";
        show_when_tracked: "showWhenTracked";
        tracking_changed: "trackingChanged";
    }
    /** A 3D node that has its position automatically updated by the [XRServer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrnode3d.html  
     */
    class XRNode3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the [member tracker] has been registered and the [member pose] is being tracked. */
        getIsActive(): boolean
        
        /** Returns `true` if the [member tracker] has current tracking data for the [member pose] being tracked. */
        getHasTrackingData(): boolean
        
        /** Returns the [XRPose] containing the current state of the pose being tracked. This gives access to additional properties of this pose. */
        getPose(): null | XRPose
        
        /** Triggers a haptic pulse on a device associated with this interface.  
         *  [param action_name] is the name of the action for this pulse.  
         *  [param frequency] is the frequency of the pulse, set to `0.0` to have the system use a default frequency.  
         *  [param amplitude] is the amplitude of the pulse between `0.0` and `1.0`.  
         *  [param duration_sec] is the duration of the pulse in seconds.  
         *  [param delay_sec] is a delay in seconds before the pulse is given.  
         */
        triggerHapticPulse(actionName: string, frequency: float64, amplitude: float64, durationSec: float64, delaySec: float64): void
        
        /** The name of the tracker we're bound to. Which trackers are available is not known during design time.  
         *  Godot defines a number of standard trackers such as `left_hand` and `right_hand` but others may be configured within a given [XRInterface].  
         */
        get tracker(): string
        set tracker(value: string)
        
        /** The name of the pose we're bound to. Which poses a tracker supports is not known during design time.  
         *  Godot defines number of standard pose names such as `aim` and `grip` but other may be configured within a given [XRInterface].  
         */
        get pose(): string
        set pose(value: string)
        
        /** Enables showing the node when tracking starts, and hiding the node when tracking is lost. */
        get showWhenTracked(): boolean
        set showWhenTracked(value: boolean)
        
        /** Emitted when the [member tracker] starts or stops receiving updated tracking data for the [member pose] being tracked. The [param tracking] argument indicates whether the tracker is getting updated tracking data. */
        readonly trackingChanged: Signal<(tracking: boolean) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRNode3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRNode3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXROrigin3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXROrigin3D extends __NameMapNode3D {
        world_scale: "worldScale";
    }
    /** The origin point in AR/VR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrorigin3d.html  
     */
    class XROrigin3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** The scale of the game world compared to the real world. This is the same as [member XRServer.world_scale]. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter. */
        get worldScale(): float64
        set worldScale(value: float64)
        
        /** If `true`, this origin node is currently being used by the [XRServer]. Only one origin point can be used at a time. */
        get current(): boolean
        set current(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXROrigin3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXROrigin3D;
    }
    namespace XRPose {
        enum TrackingConfidence {
            XRTrackingConfidenceNone = 0,
            XRTrackingConfidenceLow = 1,
            XRTrackingConfidenceHigh = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRPose extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRPose extends __NameMapRefCounted {
        set_name: "setName";
        get_name: "getName";
        get_adjusted_transform: "getAdjustedTransform";
        has_tracking_data: "hasTrackingData";
        linear_velocity: "linearVelocity";
        angular_velocity: "angularVelocity";
        tracking_confidence: "trackingConfidence";
    }
    /** This object contains all data related to a pose on a tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrpose.html  
     */
    class XRPose extends RefCounted {
        constructor(identifier?: any)
        setName(name: StringName): void
        getName(): StringName
        
        /** Returns the [member transform] with world scale and our reference frame applied. This is the transform used to position [XRNode3D] objects. */
        getAdjustedTransform(): Transform3D
        
        /** If `true` our tracking data is up to date. If `false` we're no longer receiving new tracking data and our state is whatever that last valid state was. */
        get hasTrackingData(): boolean
        set hasTrackingData(value: boolean)
        
        /** The transform containing the original and transform as reported by the XR runtime. */
        get transform(): string
        set transform(value: string)
        
        /** The linear velocity of this pose. */
        get linearVelocity(): string
        set linearVelocity(value: string)
        
        /** The angular velocity for this pose. */
        get angularVelocity(): string
        set angularVelocity(value: string)
        
        /** The tracking confidence for this pose, provides insight on how accurate the spatial positioning of this record is. */
        get trackingConfidence(): int64
        set trackingConfidence(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRPose;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRPose;
    }
    namespace XRPositionalTracker {
        enum TrackerHand {
            TrackerHandUnknown = 0,
            TrackerHandLeft = 1,
            TrackerHandRight = 2,
            TrackerHandMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRPositionalTracker extends __RPCMapXRTracker {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRPositionalTracker extends __NameMapXRTracker {
        has_pose: "hasPose";
        get_pose: "getPose";
        invalidate_pose: "invalidatePose";
        set_pose: "setPose";
        get_input: "getInput";
        set_input: "setInput";
        pose_changed: "poseChanged";
        pose_lost_tracking: "poseLostTracking";
        button_pressed: "buttonPressed";
        button_released: "buttonReleased";
        input_float_changed: "inputFloatChanged";
        input_vector2_changed: "inputVector2Changed";
        profile_changed: "profileChanged";
    }
    /** A tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrpositionaltracker.html  
     */
    class XRPositionalTracker extends XRTracker {
        constructor(identifier?: any)
        /** Returns `true` if the tracker is available and is currently tracking the bound [param name] pose. */
        hasPose(name: StringName): boolean
        
        /** Returns the current [XRPose] state object for the bound [param name] pose. */
        getPose(name: StringName): null | XRPose
        
        /** Marks this pose as invalid, we don't clear the last reported state but it allows users to decide if trackers need to be hidden if we lose tracking or just remain at their last known position. */
        invalidatePose(name: StringName): void
        
        /** Sets the transform, linear velocity, angular velocity and tracking confidence for the given pose. This method is called by an [XRInterface] implementation and should not be used directly. */
        setPose(name: StringName, transform: Transform3D, linearVelocity: Vector3, angularVelocity: Vector3, trackingConfidence: XRPose.TrackingConfidence): void
        
        /** Returns an input for this tracker. It can return a boolean, float or [Vector2] value depending on whether the input is a button, trigger or thumbstick/thumbpad. */
        getInput(name: StringName): any
        
        /** Changes the value for the given input. This method is called by an [XRInterface] implementation and should not be used directly. */
        setInput(name: StringName, value: any): void
        
        /** The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked. */
        get profile(): string
        set profile(value: string)
        
        /** Defines which hand this tracker relates to. */
        get hand(): int64
        set hand(value: int64)
        
        /** Emitted when the state of a pose tracked by this tracker changes. */
        readonly poseChanged: Signal<(pose: XRPose) => void>
        
        /** Emitted when a pose tracked by this tracker stops getting updated tracking data. */
        readonly poseLostTracking: Signal<(pose: XRPose) => void>
        
        /** Emitted when a button on this tracker is pressed. Note that many XR runtimes allow other inputs to be mapped to buttons. */
        readonly buttonPressed: Signal<(name: string) => void>
        
        /** Emitted when a button on this tracker is released. */
        readonly buttonReleased: Signal<(name: string) => void>
        
        /** Emitted when a trigger or similar input on this tracker changes value. */
        readonly inputFloatChanged: Signal<(name: string, value: float64) => void>
        
        /** Emitted when a thumbstick or thumbpad on this tracker moves. */
        readonly inputVector2Changed: Signal<(name: string, vector: Vector2) => void>
        
        /** Emitted when the profile of our tracker changes. */
        readonly profileChanged: Signal<(role: string) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRPositionalTracker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRPositionalTracker;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXRTracker extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXRTracker extends __NameMapRefCounted {
        get_tracker_name: "getTrackerName";
        set_tracker_name: "setTrackerName";
    }
    /** A tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_xrtracker.html  
     */
    class XRTracker extends RefCounted {
        constructor(identifier?: any)
        getTrackerName(): StringName
        setTrackerName(name: StringName): void
        
        /** The type of tracker. */
        get type(): int64
        set type(value: int64)
        
        /** The description of this tracker. */
        get description(): string
        set description(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXRTracker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXRTracker;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapXrvrs extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapXrvrs extends __NameMapGObject {
        make_vrs_texture: "makeVrsTexture";
        vrs_min_radius: "vrsMinRadius";
        vrs_strength: "vrsStrength";
        vrs_render_region: "vrsRenderRegion";
    }
    class Xrvrs extends GObject {
        constructor(identifier?: any)
        makeVrsTexture(targetSize: Vector2, eyeFoci: PackedVector2Array | Vector2[]): Rid
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        get vrsStrength(): float64
        set vrsStrength(value: float64)
        get vrsRenderRegion(): Rect2I
        set vrsRenderRegion(value: Rect2I)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapXrvrs;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapXrvrs;
    }
    namespace ZipPacker {
        enum ZipAppend {
            AppendCreate = 0,
            AppendCreateafter = 1,
            AppendAddinzip = 2,
        }
        enum CompressionLevel {
            CompressionDefault = -1,
            CompressionNone = 0,
            CompressionFast = 1,
            CompressionBest = 9,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapZipPacker extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapZipPacker extends __NameMapRefCounted {
        start_file: "startFile";
        write_file: "writeFile";
        close_file: "closeFile";
        compression_level: "compressionLevel";
    }
    class ZipPacker extends RefCounted {
        constructor(identifier?: any)
        open(path: string, append?: ZipPacker.ZipAppend /* = 0 */): GError
        startFile(path: string): GError
        writeFile(data: PackedByteArray | byte[] | ArrayBuffer): GError
        closeFile(): GError
        close(): GError
        get compressionLevel(): int64
        set compressionLevel(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapZipPacker;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapZipPacker;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapZipReader extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapZipReader extends __NameMapRefCounted {
        get_files: "getFiles";
        read_file: "readFile";
        file_exists: "fileExists";
        get_compression_level: "getCompressionLevel";
    }
    class ZipReader extends RefCounted {
        constructor(identifier?: any)
        open(path: string): GError
        close(): GError
        getFiles(): PackedStringArray
        readFile(path: string, caseSensitive?: boolean /* = true */): PackedByteArray
        fileExists(path: string, caseSensitive?: boolean /* = true */): boolean
        getCompressionLevel(path: string, caseSensitive?: boolean /* = true */): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapZipReader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapZipReader;
    }
    namespace Vector2 {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
        }
    }
    /** A 2D vector using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vector2.html  
     */
    class Vector2 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Readonly<Vector2>
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Readonly<Vector2>
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Readonly<Vector2>
        
        /** Left unit vector. Represents the direction of left. */
        static readonly LEFT: Readonly<Vector2>
        
        /** Right unit vector. Represents the direction of right. */
        static readonly RIGHT: Readonly<Vector2>
        
        /** Up unit vector. Y is down in 2D, so this vector points -Y. */
        static readonly UP: Readonly<Vector2>
        
        /** Down unit vector. Y is down in 2D, so this vector points +Y. */
        static readonly DOWN: Readonly<Vector2>
        constructor()
        constructor(from: Vector2)
        constructor(from: Vector2I)
        constructor(x: float64, y: float64)
        
        /** Returns this vector's angle with respect to the positive X axis, or `(1, 0)` vector, in radians.  
         *  For example, `Vector2.RIGHT.angle()` will return zero, `Vector2.DOWN.angle()` will return `PI / 2` (a quarter turn, or 90 degrees), and `Vector2(1, -1).angle()` will return `-PI / 4` (a negative eighth turn, or -45 degrees).  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle.png]Illustration of the returned angle.[/url]  
         *  Equivalent to the result of [method @GlobalScope.atan2] when called with the vector's [member y] and [member x] as parameters: `atan2(y, x)`.  
         */
        angle(): float64
        
        /** Returns the signed angle to the given vector, in radians.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to.png]Illustration of the returned angle.[/url]  
         */
        angleTo(to: Vector2): float64
        
        /** Returns the angle between the line connecting the two points and the X axis, in radians.  
         *  `a.angle_to_point(b)` is equivalent of doing `(b - a).angle()`.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to_point.png]Illustration of the returned angle.[/url]  
         */
        angleToPoint(to: Vector2): float64
        
        /** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using `(b - a).normalized()`. */
        directionTo(to: Vector2): Vector2
        
        /** Returns the distance between this vector and [param to]. */
        distanceTo(to: Vector2): float64
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distanceSquaredTo(to: Vector2): float64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        lengthSquared(): float64
        
        /** Returns the vector with a maximum length by limiting its length to [param length]. If the vector is non-finite, the result is undefined. */
        limitLength(length?: float64 /* = 1 */): Vector2
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0)` if `v.length() == 0`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector2
        
        /** Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1. */
        isNormalized(): boolean
        
        /** Returns `true` if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        isEqualApprox(to: Vector2): boolean
        
        /** Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.  
         *  This method is faster than using [method is_equal_approx] with one value as a zero vector.  
         */
        isZeroApprox(): boolean
        
        /** Returns `true` if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
        isFinite(): boolean
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: float64): Vector2
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector2): Vector2
        
        /** Returns a new vector resulting from projecting this vector onto the given vector [param b]. The resulting new vector is parallel to [param b]. See also [method slide].  
         *      
         *  **Note:** If the vector [param b] is a zero vector, the components of the resulting new vector will be [constant @GDScript.NAN].  
         */
        project(b: Vector2): Vector2
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector2, weight: float64): Vector2
        
        /** Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].  
         */
        slerp(to: Vector2, weight: float64): Vector2
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
        cubicInterpolate(b: Vector2, preA: Vector2, postB: Vector2, weight: float64): Vector2
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
         */
        cubicInterpolateInTime(b: Vector2, preA: Vector2, postB: Vector2, weight: float64, bT: float64, preAT: float64, postBT: float64): Vector2
        
        /** Returns the point at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezierInterpolate(control1: Vector2, control2: Vector2, end: Vector2, t: float64): Vector2
        
        /** Returns the derivative at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezierDerivative(control1: Vector2, control2: Vector2, end: Vector2, t: float64): Vector2
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        maxAxisIndex(): int64
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Y]. */
        minAxisIndex(): int64
        
        /** Returns a new vector moved toward [param to] by the fixed [param delta] amount. Will not go past the final value. */
        moveToward(to: Vector2, delta: float64): Vector2
        
        /** Returns the result of rotating this vector by [param angle] (in radians). See also [method @GlobalScope.deg_to_rad]. */
        rotated(angle: float64): Vector2
        
        /** Returns a perpendicular vector rotated 90 degrees counter-clockwise compared to the original, with the same length. */
        orthogonal(): Vector2
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector2
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector2
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector2
        
        /** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
        aspect(): float64
        
        /** Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.  
         *  The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.  
         *  When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.  
         *      
         *  **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.  
         */
        dot(with_: Vector2): float64
        
        /** Returns a new vector resulting from sliding this vector along a line with normal [param n]. The resulting new vector is perpendicular to [param n], and is equivalent to this vector minus its projection on [param n]. See also [method project].  
         *      
         *  **Note:** The vector [param n] must be normalized. See also [method normalized].  
         */
        slide(n: Vector2): Vector2
        
        /** Returns the vector "bounced off" from a line defined by the given normal [param n] perpendicular to the line.  
         *      
         *  **Note:** [method bounce] performs the operation that most engines and frameworks call [code skip-lint]reflect()`.  
         */
        bounce(n: Vector2): Vector2
        
        /** Returns the result of reflecting the vector from a line defined by the given direction vector [param line].  
         *      
         *  **Note:** [method reflect] differs from what other engines and frameworks call [code skip-lint]reflect()`. In other engines, [code skip-lint]reflect()` takes a normal direction which is a direction perpendicular to the line. In Godot, you specify the direction of the line directly. See also [method bounce] which does what most engines call [code skip-lint]reflect()`.  
         */
        reflect(line: Vector2): Vector2
        
        /** Returns the 2D analog of the cross product for this vector and [param with].  
         *  This is the signed area of the parallelogram formed by the two vectors. If the second vector is clockwise from the first vector, then the cross product is the positive area. If counter-clockwise, the cross product is the negative area. If the two vectors are parallel this returns zero, making it useful for testing if two vectors are parallel.  
         *      
         *  **Note:** Cross product is not defined in 2D mathematically. This method embeds the 2D vectors in the XY plane of 3D space and uses their cross product's Z component as the analog.  
         */
        cross(with_: Vector2): float64
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector2
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector2
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector2, max: Vector2): Vector2
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampf(min: float64, max: float64): Vector2
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector2): Vector2
        
        /** Returns a new vector with each component snapped to the nearest multiple of [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snappedf(step: float64): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2(minf(x, with.x), minf(y, with.y))`. */
        min(with_: Vector2): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2(minf(x, with), minf(y, with))`. */
        minf(with_: float64): Vector2
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2(maxf(x, with.x), maxf(y, with.y))`. */
        max(with_: Vector2): Vector2
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2(maxf(x, with), maxf(y, with))`. */
        maxf(with_: float64): Vector2
        
        /** Creates a [Vector2] rotated to the given [param angle] in radians. This is equivalent to doing `Vector2(cos(angle), sin(angle))` or `Vector2.RIGHT.rotated(angle)`.  
         *    
         *      
         *  **Note:** The length of the returned [Vector2] is  *approximately*  `1.0`, but is is not guaranteed to be exactly `1.0` due to floating-point precision issues. Call [method normalized] on the returned [Vector2] if you require a unit vector.  
         */
        static fromAngle(angle: float64): Vector2
        static ADD(left: Vector2, right: Vector2): Vector2
        static SUBTRACT(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: float64, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: float64): Vector2
        static DIVIDE(left: Vector2, right: Vector2): Vector2
        static DIVIDE(left: Vector2, right: float64): Vector2
        static NEGATE(left: Vector2): Vector2
        static EQUAL(left: Vector2, right: Vector2): boolean
        static NOT_EQUAL(left: Vector2, right: Vector2): boolean
        static LESS(left: Vector2, right: Vector2): boolean
        static LESS_EQUAL(left: Vector2, right: Vector2): boolean
        static GREATER(left: Vector2, right: Vector2): boolean
        static GREATER_EQUAL(left: Vector2, right: Vector2): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
    }
    namespace Vector2I {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
        }
    }
    class Vector2I {
        static readonly ZERO: Readonly<Vector2I>
        static readonly ONE: Readonly<Vector2I>
        static readonly MIN: Readonly<Vector2I>
        static readonly MAX: Readonly<Vector2I>
        static readonly LEFT: Readonly<Vector2I>
        static readonly RIGHT: Readonly<Vector2I>
        static readonly UP: Readonly<Vector2I>
        static readonly DOWN: Readonly<Vector2I>
        constructor()
        constructor(from: Vector2I)
        constructor(from: Vector2)
        constructor(x: int64, y: int64)
        aspect(): float64
        maxAxisIndex(): int64
        minAxisIndex(): int64
        distanceTo(to: Vector2I): float64
        distanceSquaredTo(to: Vector2I): int64
        length(): float64
        lengthSquared(): int64
        sign(): Vector2I
        abs(): Vector2I
        clamp(min: Vector2I, max: Vector2I): Vector2I
        clampi(min: int64, max: int64): Vector2I
        snapped(step: Vector2I): Vector2I
        snappedi(step: int64): Vector2I
        min(with_: Vector2I): Vector2I
        mini(with_: int64): Vector2I
        max(with_: Vector2I): Vector2I
        maxi(with_: int64): Vector2I
        static ADD(left: Vector2I, right: Vector2I): Vector2I
        static SUBTRACT(left: Vector2I, right: Vector2I): Vector2I
        static MULTIPLY(left: float64, right: Vector2I): Vector2I
        static MULTIPLY(left: Vector2I, right: Vector2I): Vector2I
        static MULTIPLY(left: Vector2I, right: float64): Vector2I
        static DIVIDE(left: Vector2I, right: Vector2I): Vector2I
        static DIVIDE(left: Vector2I, right: float64): Vector2I
        static NEGATE(left: Vector2I): Vector2I
        static EQUAL(left: Vector2I, right: Vector2I): boolean
        static NOT_EQUAL(left: Vector2I, right: Vector2I): boolean
        static LESS(left: Vector2I, right: Vector2I): boolean
        static LESS_EQUAL(left: Vector2I, right: Vector2I): boolean
        static GREATER(left: Vector2I, right: Vector2I): boolean
        static GREATER_EQUAL(left: Vector2I, right: Vector2I): boolean
        get x(): int64
        set x(value: int64)
        get y(): int64
        set y(value: int64)
    }
    /** A 2D axis-aligned bounding box using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_rect2.html  
     */
    class Rect2 {
        constructor()
        constructor(from: Rect2)
        constructor(from: Rect2I)
        constructor(position: Vector2, size: Vector2)
        constructor(x: float64, y: float64, width: float64, height: float64)
        
        /** Returns the center point of the rectangle. This is the same as `position + (size / 2.0)`. */
        getCenter(): Vector2
        
        /** Returns the rectangle's area. This is equivalent to `size.x * size.y`. See also [method has_area]. */
        getArea(): float64
        
        /** Returns `true` if this rectangle has positive width and height. See also [method get_area]. */
        hasArea(): boolean
        
        /** Returns `true` if the rectangle contains the given [param point]. By convention, points on the right and bottom edges are **not** included.  
         *      
         *  **Note:** This method is not reliable for [Rect2] with a  *negative*  [member size]. Use [method abs] first to get a valid rectangle.  
         */
        hasPoint(point: Vector2): boolean
        
        /** Returns `true` if this rectangle and [param rect] are approximately equal, by calling [method Vector2.is_equal_approx] on the [member position] and the [member size]. */
        isEqualApprox(rect: Rect2): boolean
        
        /** Returns `true` if this rectangle's values are finite, by calling [method Vector2.is_finite] on the [member position] and the [member size]. */
        isFinite(): boolean
        
        /** Returns `true` if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded, unless [param include_borders] is `true`. */
        intersects(b: Rect2, includeBorders?: boolean /* = false */): boolean
        
        /** Returns `true` if this rectangle  *completely*  encloses the [param b] rectangle. */
        encloses(b: Rect2): boolean
        
        /** Returns the intersection between this rectangle and [param b]. If the rectangles do not intersect, returns an empty [Rect2].  
         *    
         *      
         *  **Note:** If you only need to know whether two rectangles are overlapping, use [method intersects], instead.  
         */
        intersection(b: Rect2): Rect2
        
        /** Returns a [Rect2] that encloses both this rectangle and [param b] around the edges. See also [method encloses]. */
        merge(b: Rect2): Rect2
        
        /** Returns a copy of this rectangle expanded to align the edges with the given [param to] point, if necessary.  
         *    
         */
        expand(to: Vector2): Rect2
        
        /** Returns the vertex's position of this rect that's the farthest in the given direction. This point is commonly known as the support point in collision detection algorithms. */
        getSupport(direction: Vector2): Vector2
        
        /** Returns a copy of this rectangle extended on all sides by the given [param amount]. A negative [param amount] shrinks the rectangle instead. See also [method grow_individual] and [method grow_side].  
         *    
         */
        grow(amount: float64): Rect2
        
        /** Returns a copy of this rectangle with its [param side] extended by the given [param amount] (see [enum Side] constants). A negative [param amount] shrinks the rectangle, instead. See also [method grow] and [method grow_individual]. */
        growSide(side: int64, amount: float64): Rect2
        
        /** Returns a copy of this rectangle with its [param left], [param top], [param right], and [param bottom] sides extended by the given amounts. Negative values shrink the sides, instead. See also [method grow] and [method grow_side]. */
        growIndividual(left: float64, top: float64, right: float64, bottom: float64): Rect2
        
        /** Returns a [Rect2] equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [member position] being the top-left corner of the rectangle.  
         *    
         *      
         *  **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner.  
         */
        abs(): Rect2
        get position(): Vector2
        set position(value: Vector2)
        get size(): Vector2
        set size(value: Vector2)
        get end(): Vector2
        set end(value: Vector2)
    }
    class Rect2I {
        constructor()
        constructor(from: Rect2I)
        constructor(from: Rect2)
        constructor(position: Vector2I, size: Vector2I)
        constructor(x: int64, y: int64, width: int64, height: int64)
        getCenter(): Vector2I
        getArea(): int64
        hasArea(): boolean
        hasPoint(point: Vector2I): boolean
        intersects(b: Rect2I): boolean
        encloses(b: Rect2I): boolean
        intersection(b: Rect2I): Rect2I
        merge(b: Rect2I): Rect2I
        expand(to: Vector2I): Rect2I
        grow(amount: int64): Rect2I
        growSide(side: int64, amount: int64): Rect2I
        growIndividual(left: int64, top: int64, right: int64, bottom: int64): Rect2I
        abs(): Rect2I
        get position(): Vector2I
        set position(value: Vector2I)
        get size(): Vector2I
        set size(value: Vector2I)
        get end(): Vector2I
        set end(value: Vector2I)
    }
    namespace Vector3 {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
            AxisZ = 2,
        }
    }
    /** A 3D vector using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vector3.html  
     */
    class Vector3 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Readonly<Vector3>
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Readonly<Vector3>
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Readonly<Vector3>
        
        /** Left unit vector. Represents the local direction of left, and the global direction of west. */
        static readonly LEFT: Readonly<Vector3>
        
        /** Right unit vector. Represents the local direction of right, and the global direction of east. */
        static readonly RIGHT: Readonly<Vector3>
        
        /** Up unit vector. */
        static readonly UP: Readonly<Vector3>
        
        /** Down unit vector. */
        static readonly DOWN: Readonly<Vector3>
        
        /** Forward unit vector. Represents the local direction of forward, and the global direction of north. Keep in mind that the forward direction for lights, cameras, etc is different from 3D assets like characters, which face towards the camera by convention. Use [constant Vector3.MODEL_FRONT] and similar constants when working in 3D asset space. */
        static readonly FORWARD: Readonly<Vector3>
        
        /** Back unit vector. Represents the local direction of back, and the global direction of south. */
        static readonly BACK: Readonly<Vector3>
        
        /** Unit vector pointing towards the left side of imported 3D assets. */
        static readonly MODEL_LEFT: Readonly<Vector3>
        
        /** Unit vector pointing towards the right side of imported 3D assets. */
        static readonly MODEL_RIGHT: Readonly<Vector3>
        
        /** Unit vector pointing towards the top side (up) of imported 3D assets. */
        static readonly MODEL_TOP: Readonly<Vector3>
        
        /** Unit vector pointing towards the bottom side (down) of imported 3D assets. */
        static readonly MODEL_BOTTOM: Readonly<Vector3>
        
        /** Unit vector pointing towards the front side (facing forward) of imported 3D assets. */
        static readonly MODEL_FRONT: Readonly<Vector3>
        
        /** Unit vector pointing towards the rear side (back) of imported 3D assets. */
        static readonly MODEL_REAR: Readonly<Vector3>
        constructor()
        constructor(from: Vector3)
        constructor(from: Vector3I)
        constructor(x: float64, y: float64, z: float64)
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Z]. */
        minAxisIndex(): int64
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        maxAxisIndex(): int64
        
        /** Returns the unsigned minimum angle to the given vector, in radians. */
        angleTo(to: Vector3): float64
        
        /** Returns the signed angle to the given vector, in radians. The sign of the angle is positive in a counter-clockwise direction and negative in a clockwise direction when viewed from the side specified by the [param axis]. */
        signedAngleTo(to: Vector3, axis: Vector3): float64
        
        /** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using `(b - a).normalized()`. */
        directionTo(to: Vector3): Vector3
        
        /** Returns the distance between this vector and [param to]. */
        distanceTo(to: Vector3): float64
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distanceSquaredTo(to: Vector3): float64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        lengthSquared(): float64
        
        /** Returns the vector with a maximum length by limiting its length to [param length]. If the vector is non-finite, the result is undefined. */
        limitLength(length?: float64 /* = 1 */): Vector3
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0, 0)` if `v.length() == 0`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector3
        
        /** Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1. */
        isNormalized(): boolean
        
        /** Returns `true` if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        isEqualApprox(to: Vector3): boolean
        
        /** Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.  
         *  This method is faster than using [method is_equal_approx] with one value as a zero vector.  
         */
        isZeroApprox(): boolean
        
        /** Returns `true` if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
        isFinite(): boolean
        
        /** Returns the inverse of the vector. This is the same as `Vector3(1.0 / v.x, 1.0 / v.y, 1.0 / v.z)`. */
        inverse(): Vector3
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector3, max: Vector3): Vector3
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampf(min: float64, max: float64): Vector3
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector3): Vector3
        
        /** Returns a new vector with each component snapped to the nearest multiple of [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snappedf(step: float64): Vector3
        
        /** Returns the result of rotating this vector around a given axis by [param angle] (in radians). The axis must be a normalized vector. See also [method @GlobalScope.deg_to_rad]. */
        rotated(axis: Vector3, angle: float64): Vector3
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector3, weight: float64): Vector3
        
        /** Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].  
         */
        slerp(to: Vector3, weight: float64): Vector3
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
        cubicInterpolate(b: Vector3, preA: Vector3, postB: Vector3, weight: float64): Vector3
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
         */
        cubicInterpolateInTime(b: Vector3, preA: Vector3, postB: Vector3, weight: float64, bT: float64, preAT: float64, postBT: float64): Vector3
        
        /** Returns the point at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezierInterpolate(control1: Vector3, control2: Vector3, end: Vector3, t: float64): Vector3
        
        /** Returns the derivative at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezierDerivative(control1: Vector3, control2: Vector3, end: Vector3, t: float64): Vector3
        
        /** Returns a new vector moved toward [param to] by the fixed [param delta] amount. Will not go past the final value. */
        moveToward(to: Vector3, delta: float64): Vector3
        
        /** Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.  
         *  The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.  
         *  When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.  
         *      
         *  **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.  
         */
        dot(with_: Vector3): float64
        
        /** Returns the cross product of this vector and [param with].  
         *  This returns a vector perpendicular to both this and [param with], which would be the normal vector of the plane defined by the two vectors. As there are two such vectors, in opposite directions, this method returns the vector defined by a right-handed coordinate system. If the two vectors are parallel this returns an empty vector, making it useful for testing if two vectors are parallel.  
         */
        cross(with_: Vector3): Vector3
        
        /** Returns the outer product with [param with]. */
        outer(with_: Vector3): Basis
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector3
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector3
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector3
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector3
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: float64): Vector3
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector3): Vector3
        
        /** Returns a new vector resulting from projecting this vector onto the given vector [param b]. The resulting new vector is parallel to [param b]. See also [method slide].  
         *      
         *  **Note:** If the vector [param b] is a zero vector, the components of the resulting new vector will be [constant @GDScript.NAN].  
         */
        project(b: Vector3): Vector3
        
        /** Returns a new vector resulting from sliding this vector along a plane with normal [param n]. The resulting new vector is perpendicular to [param n], and is equivalent to this vector minus its projection on [param n]. See also [method project].  
         *      
         *  **Note:** The vector [param n] must be normalized. See also [method normalized].  
         */
        slide(n: Vector3): Vector3
        
        /** Returns the vector "bounced off" from a plane defined by the given normal [param n].  
         *      
         *  **Note:** [method bounce] performs the operation that most engines and frameworks call [code skip-lint]reflect()`.  
         */
        bounce(n: Vector3): Vector3
        
        /** Returns the result of reflecting the vector through a plane defined by the given normal vector [param n].  
         *      
         *  **Note:** [method reflect] differs from what other engines and frameworks call [code skip-lint]reflect()`. In other engines, [code skip-lint]reflect()` returns the result of the vector reflected by the given plane. The reflection thus passes through the given normal. While in Godot the reflection passes through the plane and can be thought of as bouncing off the normal. See also [method bounce] which does what most engines call [code skip-lint]reflect()`.  
         */
        reflect(n: Vector3): Vector3
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector3
        
        /** Returns the octahedral-encoded (oct32) form of this [Vector3] as a [Vector2]. Since a [Vector2] occupies 1/3 less memory compared to [Vector3], this form of compression can be used to pass greater amounts of [method normalized] [Vector3]s without increasing storage or memory requirements. See also [method octahedron_decode].  
         *      
         *  **Note:** [method octahedron_encode] can only be used for [method normalized] vectors. [method octahedron_encode] does  *not*  check whether this [Vector3] is normalized, and will return a value that does not decompress to the original value if the [Vector3] is not normalized.  
         *      
         *  **Note:** Octahedral compression is  *lossy* , although visual differences are rarely perceptible in real world scenarios.  
         */
        octahedronEncode(): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector3(minf(x, with.x), minf(y, with.y), minf(z, with.z))`. */
        min(with_: Vector3): Vector3
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector3(minf(x, with), minf(y, with), minf(z, with))`. */
        minf(with_: float64): Vector3
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector3(maxf(x, with.x), maxf(y, with.y), maxf(z, with.z))`. */
        max(with_: Vector3): Vector3
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector3(maxf(x, with), maxf(y, with), maxf(z, with))`. */
        maxf(with_: float64): Vector3
        
        /** Returns the [Vector3] from an octahedral-compressed form created using [method octahedron_encode] (stored as a [Vector2]). */
        static octahedronDecode(uV: Vector2): Vector3
        static ADD(left: Vector3, right: Vector3): Vector3
        static SUBTRACT(left: Vector3, right: Vector3): Vector3
        static MULTIPLY(left: float64, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: float64): Vector3
        static DIVIDE(left: Vector3, right: Vector3): Vector3
        static DIVIDE(left: Vector3, right: float64): Vector3
        static NEGATE(left: Vector3): Vector3
        static EQUAL(left: Vector3, right: Vector3): boolean
        static NOT_EQUAL(left: Vector3, right: Vector3): boolean
        static LESS(left: Vector3, right: Vector3): boolean
        static LESS_EQUAL(left: Vector3, right: Vector3): boolean
        static GREATER(left: Vector3, right: Vector3): boolean
        static GREATER_EQUAL(left: Vector3, right: Vector3): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
        get z(): float64
        set z(value: float64)
    }
    namespace Vector3I {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
            AxisZ = 2,
        }
    }
    class Vector3I {
        static readonly ZERO: Readonly<Vector3I>
        static readonly ONE: Readonly<Vector3I>
        static readonly MIN: Readonly<Vector3I>
        static readonly MAX: Readonly<Vector3I>
        static readonly LEFT: Readonly<Vector3I>
        static readonly RIGHT: Readonly<Vector3I>
        static readonly UP: Readonly<Vector3I>
        static readonly DOWN: Readonly<Vector3I>
        static readonly FORWARD: Readonly<Vector3I>
        static readonly BACK: Readonly<Vector3I>
        constructor()
        constructor(from: Vector3I)
        constructor(from: Vector3)
        constructor(x: int64, y: int64, z: int64)
        minAxisIndex(): int64
        maxAxisIndex(): int64
        distanceTo(to: Vector3I): float64
        distanceSquaredTo(to: Vector3I): int64
        length(): float64
        lengthSquared(): int64
        sign(): Vector3I
        abs(): Vector3I
        clamp(min: Vector3I, max: Vector3I): Vector3I
        clampi(min: int64, max: int64): Vector3I
        snapped(step: Vector3I): Vector3I
        snappedi(step: int64): Vector3I
        min(with_: Vector3I): Vector3I
        mini(with_: int64): Vector3I
        max(with_: Vector3I): Vector3I
        maxi(with_: int64): Vector3I
        static ADD(left: Vector3I, right: Vector3I): Vector3I
        static SUBTRACT(left: Vector3I, right: Vector3I): Vector3I
        static MULTIPLY(left: float64, right: Vector3I): Vector3I
        static MULTIPLY(left: Vector3I, right: Vector3I): Vector3I
        static MULTIPLY(left: Vector3I, right: float64): Vector3I
        static DIVIDE(left: Vector3I, right: Vector3I): Vector3I
        static DIVIDE(left: Vector3I, right: float64): Vector3I
        static NEGATE(left: Vector3I): Vector3I
        static EQUAL(left: Vector3I, right: Vector3I): boolean
        static NOT_EQUAL(left: Vector3I, right: Vector3I): boolean
        static LESS(left: Vector3I, right: Vector3I): boolean
        static LESS_EQUAL(left: Vector3I, right: Vector3I): boolean
        static GREATER(left: Vector3I, right: Vector3I): boolean
        static GREATER_EQUAL(left: Vector3I, right: Vector3I): boolean
        get x(): int64
        set x(value: int64)
        get y(): int64
        set y(value: int64)
        get z(): int64
        set z(value: int64)
    }
    /** A 2×3 matrix representing a 2D transformation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_transform2d.html  
     */
    class Transform2D {
        /** The identity [Transform2D]. This is a transform with no translation, no rotation, and a scale of [constant Vector2.ONE]. This also means that:  
         *  - The [member x] points right ([constant Vector2.RIGHT]);  
         *  - The [member y] points down ([constant Vector2.DOWN]).  
         *    
         *  If a [Vector2], a [Rect2], a [PackedVector2Array], or another [Transform2D] is transformed (multiplied) by this constant, no transformation occurs.  
         *      
         *  **Note:** In GDScript, this constant is equivalent to creating a [constructor Transform2D] without any arguments. It can be used to make your code clearer, and for consistency with C#.  
         */
        static readonly IDENTITY: Readonly<Transform2D>
        
        /** When any transform is multiplied by [constant FLIP_X], it negates all components of the [member x] axis (the X column).  
         *  When [constant FLIP_X] is multiplied by any transform, it negates the [member Vector2.x] component of all axes (the X row).  
         */
        static readonly FLIP_X: Readonly<Transform2D>
        
        /** When any transform is multiplied by [constant FLIP_Y], it negates all components of the [member y] axis (the Y column).  
         *  When [constant FLIP_Y] is multiplied by any transform, it negates the [member Vector2.y] component of all axes (the Y row).  
         */
        static readonly FLIP_Y: Readonly<Transform2D>
        constructor()
        constructor(from: Transform2D)
        constructor(rotation: float64, position: Vector2)
        constructor(rotation: float64, scale: Vector2, skew: float64, position: Vector2)
        constructor(xAxis: Vector2, yAxis: Vector2, origin: Vector2)
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Invertible_matrix]inverted version of this transform[/url].  
         *      
         *  **Note:** For this method to return correctly, the transform's basis needs to be  *orthonormal*  (see [method orthonormalized]). That means the basis should only represent a rotation. If it does not, use [method affine_inverse] instead.  
         */
        inverse(): Transform2D
        
        /** Returns the inverted version of this transform. Unlike [method inverse], this method works with almost any basis, including non-uniform ones, but is slower.  
         *      
         *  **Note:** For this method to return correctly, the transform's basis needs to have a determinant that is not exactly `0.0` (see [method determinant]).  
         */
        affineInverse(): Transform2D
        
        /** Returns this transform's rotation (in radians). This is equivalent to [member x]'s angle (see [method Vector2.angle]). */
        getRotation(): float64
        
        /** Returns this transform's translation. Equivalent to [member origin]. */
        getOrigin(): Vector2
        
        /** Returns the length of both [member x] and [member y], as a [Vector2]. If this transform's basis is not skewed, this value is the scaling factor. It is not affected by rotation.  
         *    
         *      
         *  **Note:** If the value returned by [method determinant] is negative, the scale is also negative.  
         */
        getScale(): Vector2
        
        /** Returns this transform's skew (in radians). */
        getSkew(): float64
        
        /** Returns a copy of this transform with its basis orthonormalized. An orthonormal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *normalized*  (the axes have a length of `1.0`), which also means it can only represent a rotation. */
        orthonormalized(): Transform2D
        
        /** Returns a copy of this transform rotated by the given [param angle] (in radians).  
         *  If [param angle] is positive, the transform is rotated clockwise.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        rotated(angle: float64): Transform2D
        
        /** Returns a copy of the transform rotated by the given [param angle] (in radians).  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        rotatedLocal(angle: float64): Transform2D
        
        /** Returns a copy of the transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        scaled(scale: Vector2): Transform2D
        
        /** Returns a copy of the transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        scaledLocal(scale: Vector2): Transform2D
        
        /** Returns a copy of the transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        translated(offset: Vector2): Transform2D
        
        /** Returns a copy of the transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.  
         *  This can be seen as transforming with respect to the local frame.  
         */
        translatedLocal(offset: Vector2): Transform2D
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Determinant]determinant[/url] of this transform basis's matrix. For advanced math, this number can be used to determine a few attributes:  
         *  - If the determinant is exactly `0.0`, the basis is not invertible (see [method inverse]).  
         *  - If the determinant is a negative number, the basis represents a negative scale.  
         *      
         *  **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.  
         */
        determinant(): float64
        
        /** Returns a copy of the [param v] vector, transformed (multiplied) by the transform basis's matrix. Unlike the multiplication operator (`*`), this method ignores the [member origin]. */
        basisXform(v: Vector2): Vector2
        
        /** Returns a copy of the [param v] vector, transformed (multiplied) by the inverse transform basis's matrix (see [method inverse]). This method ignores the [member origin].  
         *      
         *  **Note:** This method assumes that this transform's basis is  *orthonormal*  (see [method orthonormalized]). If the basis is not orthonormal, `transform.affine_inverse().basis_xform(vector)` should be used instead (see [method affine_inverse]).  
         */
        basisXformInv(v: Vector2): Vector2
        
        /** Returns the result of the linear interpolation between this transform and [param xform] by the given [param weight].  
         *  The [param weight] should be between `0.0` and `1.0` (inclusive). Values outside this range are allowed and can be used to perform  *extrapolation*  instead.  
         */
        interpolateWith(xform: Transform2D, weight: float64): Transform2D
        
        /** Returns `true` if this transform's basis is conformal. A conformal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *uniform*  (the axes share the same length). This method can be especially useful during physics calculations. */
        isConformal(): boolean
        
        /** Returns `true` if this transform and [param xform] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        isEqualApprox(xform: Transform2D): boolean
        
        /** Returns `true` if this transform is finite, by calling [method @GlobalScope.is_finite] on each component. */
        isFinite(): boolean
        
        /** Returns a copy of the transform rotated such that the rotated X-axis points towards the [param target] position, in global space. */
        lookingAt(target?: Vector2 /* = Vector2.ZERO */): Transform2D
        static MULTIPLY(left: Transform2D, right: Transform2D): Transform2D
        static MULTIPLY(left: Transform2D, right: float64): Transform2D
        static MULTIPLY(left: Transform2D, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: Transform2D): Vector2
        static MULTIPLY(left: Transform2D, right: Rect2): Rect2
        static MULTIPLY(left: Rect2, right: Transform2D): Rect2
        static MULTIPLY(left: Transform2D, right: PackedVector2Array | Vector2[]): PackedVector2Array
        static MULTIPLY(left: PackedVector2Array | Vector2[], right: Transform2D): PackedVector2Array
        static EQUAL(left: Transform2D, right: Transform2D): boolean
        static NOT_EQUAL(left: Transform2D, right: Transform2D): boolean
        get x(): Vector2
        set x(value: Vector2)
        get y(): Vector2
        set y(value: Vector2)
        get origin(): Vector2
        set origin(value: Vector2)
    }
    namespace Vector4 {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
            AxisZ = 2,
            AxisW = 3,
        }
    }
    /** A 4D vector using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_vector4.html  
     */
    class Vector4 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Readonly<Vector4>
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Readonly<Vector4>
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Readonly<Vector4>
        constructor()
        constructor(from: Vector4)
        constructor(from: Vector4I)
        constructor(x: float64, y: float64, z: float64, w: float64)
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_W]. */
        minAxisIndex(): int64
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        maxAxisIndex(): int64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        lengthSquared(): float64
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector4
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector4
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector4
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector4
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector4
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector4, weight: float64): Vector4
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
        cubicInterpolate(b: Vector4, preA: Vector4, postB: Vector4, weight: float64): Vector4
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
         */
        cubicInterpolateInTime(b: Vector4, preA: Vector4, postB: Vector4, weight: float64, bT: float64, preAT: float64, postBT: float64): Vector4
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: float64): Vector4
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector4): Vector4
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector4): Vector4
        
        /** Returns a new vector with each component snapped to the nearest multiple of [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snappedf(step: float64): Vector4
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector4, max: Vector4): Vector4
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampf(min: float64, max: float64): Vector4
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0, 0, 0)` if `v.length() == 0`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector4
        
        /** Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1. */
        isNormalized(): boolean
        
        /** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using `(b - a).normalized()`. */
        directionTo(to: Vector4): Vector4
        
        /** Returns the distance between this vector and [param to]. */
        distanceTo(to: Vector4): float64
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distanceSquaredTo(to: Vector4): float64
        
        /** Returns the dot product of this vector and [param with]. */
        dot(with_: Vector4): float64
        
        /** Returns the inverse of the vector. This is the same as `Vector4(1.0 / v.x, 1.0 / v.y, 1.0 / v.z, 1.0 / v.w)`. */
        inverse(): Vector4
        
        /** Returns `true` if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        isEqualApprox(to: Vector4): boolean
        
        /** Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.  
         *  This method is faster than using [method is_equal_approx] with one value as a zero vector.  
         */
        isZeroApprox(): boolean
        
        /** Returns `true` if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
        isFinite(): boolean
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector4(minf(x, with.x), minf(y, with.y), minf(z, with.z), minf(w, with.w))`. */
        min(with_: Vector4): Vector4
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector4(minf(x, with), minf(y, with), minf(z, with), minf(w, with))`. */
        minf(with_: float64): Vector4
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector4(maxf(x, with.x), maxf(y, with.y), maxf(z, with.z), maxf(w, with.w))`. */
        max(with_: Vector4): Vector4
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector4(maxf(x, with), maxf(y, with), maxf(z, with), maxf(w, with))`. */
        maxf(with_: float64): Vector4
        static ADD(left: Vector4, right: Vector4): Vector4
        static SUBTRACT(left: Vector4, right: Vector4): Vector4
        static MULTIPLY(left: float64, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: float64): Vector4
        static DIVIDE(left: Vector4, right: Vector4): Vector4
        static DIVIDE(left: Vector4, right: float64): Vector4
        static NEGATE(left: Vector4): Vector4
        static EQUAL(left: Vector4, right: Vector4): boolean
        static NOT_EQUAL(left: Vector4, right: Vector4): boolean
        static LESS(left: Vector4, right: Vector4): boolean
        static LESS_EQUAL(left: Vector4, right: Vector4): boolean
        static GREATER(left: Vector4, right: Vector4): boolean
        static GREATER_EQUAL(left: Vector4, right: Vector4): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
        get z(): float64
        set z(value: float64)
        get w(): float64
        set w(value: float64)
    }
}
