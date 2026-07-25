// AUTO-GENERATED
declare module "godot" {
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFileSystemDock extends __RPCMapVBoxContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFileSystemDock extends __NameMapVBoxContainer {
        _file_list_thumbnail_done: "_fileListThumbnailDone";
        _tree_thumbnail_done: "_treeThumbnailDone";
        navigate_to_path: "navigateToPath";
        add_resource_tooltip_plugin: "addResourceTooltipPlugin";
        remove_resource_tooltip_plugin: "removeResourceTooltipPlugin";
        _set_dock_horizontal: "_setDockHorizontal";
        _can_dock_horizontal: "_canDockHorizontal";
        _save_layout_to_config: "_saveLayoutToConfig";
        _load_layout_from_config: "_loadLayoutFromConfig";
        resource_removed: "resourceRemoved";
        file_removed: "fileRemoved";
        folder_removed: "folderRemoved";
        files_moved: "filesMoved";
        folder_moved: "folderMoved";
        folder_color_changed: "folderColorChanged";
        display_mode_changed: "displayModeChanged";
    }
    /** Godot editor's dock for managing files in the project.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_filesystemdock.html  
     */
    class FileSystemDock<Map extends NodePathMap = any> extends VBoxContainer<Map> {
        constructor(identifier?: any)
        _fileListThumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        _treeThumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        
        /** Sets the given [param path] as currently selected, ensuring that the selected file/directory is visible. */
        navigateToPath(path: string): void
        
        /** Registers a new [EditorResourceTooltipPlugin]. */
        addResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void
        
        /** Removes an [EditorResourceTooltipPlugin]. Fails if the plugin wasn't previously added. */
        removeResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void
        _setDockHorizontal(enable: boolean): void
        _canDockHorizontal(): boolean
        _saveLayoutToConfig(_unnamedArg0: ConfigFile, _unnamedArg1: string): void
        _loadLayoutFromConfig(_unnamedArg0: ConfigFile, _unnamedArg1: string): void
        
        /** Emitted when a new scene is created that inherits the scene at [param file] path. */
        readonly inherit: Signal<(file: string) => void>
        
        /** Emitted when the given scenes are being instantiated in the editor. */
        readonly instantiate: Signal<(files: PackedStringArray) => void>
        
        /** Emitted when an external [param resource] had its file removed. */
        readonly resourceRemoved: Signal<(resource: Resource) => void>
        
        /** Emitted when the given [param file] was removed. */
        readonly fileRemoved: Signal<(file: string) => void>
        
        /** Emitted when the given [param folder] was removed. */
        readonly folderRemoved: Signal<(folder: string) => void>
        
        /** Emitted when a file is moved from [param old_file] path to [param new_file] path. */
        readonly filesMoved: Signal<(oldFile: string, newFile: string) => void>
        
        /** Emitted when a folder is moved from [param old_folder] path to [param new_folder] path. */
        readonly folderMoved: Signal<(oldFolder: string, newFolder: string) => void>
        
        /** Emitted when folders change color. */
        readonly folderColorChanged: Signal<() => void>
        
        /** Emitted when the user switches file display mode or split mode. */
        readonly displayModeChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFileSystemDock;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFileSystemDock;
    }
    namespace FlowContainer {
        enum AlignmentMode {
            AlignmentBegin = 0,
            AlignmentCenter = 1,
            AlignmentEnd = 2,
        }
        enum LastWrapAlignmentMode {
            LastWrapAlignmentInherit = 0,
            LastWrapAlignmentBegin = 1,
            LastWrapAlignmentCenter = 2,
            LastWrapAlignmentEnd = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFlowContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFlowContainer extends __NameMapContainer {
        get_line_count: "getLineCount";
        last_wrap_alignment: "lastWrapAlignment";
        reverse_fill: "reverseFill";
    }
    /** A container that arranges its child controls horizontally or vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_flowcontainer.html  
     */
    class FlowContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** Returns the current line count. */
        getLineCount(): int64
        
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        get alignment(): int64
        set alignment(value: int64)
        
        /** The wrap behavior of the last, partially filled row or column (must be one of [constant LAST_WRAP_ALIGNMENT_INHERIT], [constant LAST_WRAP_ALIGNMENT_BEGIN], [constant LAST_WRAP_ALIGNMENT_CENTER], or [constant LAST_WRAP_ALIGNMENT_END]). */
        get lastWrapAlignment(): int64
        set lastWrapAlignment(value: int64)
        
        /** If `true`, the [FlowContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HFlowContainer] and [VFlowContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
        
        /** If `true`, reverses fill direction. Horizontal [FlowContainer]s will fill rows bottom to top, vertical [FlowContainer]s will fill columns right to left.  
         *  When using a vertical [FlowContainer] with a right to left [member Control.layout_direction], columns will fill left to right instead.  
         */
        get reverseFill(): boolean
        set reverseFill(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFlowContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFlowContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFogMaterial extends __RPCMapMaterial {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFogMaterial extends __NameMapMaterial {
        height_falloff: "heightFalloff";
        edge_fade: "edgeFade";
        density_texture: "densityTexture";
    }
    /** A material that controls how volumetric fog is rendered, to be assigned to a [FogVolume].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_fogmaterial.html  
     */
    class FogMaterial extends Material {
        constructor(identifier?: any)
        /** The density of the [FogVolume]. Denser objects are more opaque, but may suffer from under-sampling artifacts that look like stripes. Negative values can be used to subtract fog from other [FogVolume]s or global volumetric fog.  
         *      
         *  **Note:** Due to limited precision, [member density] values between `-0.001` and `0.001` (exclusive) act like `0.0`. This does not apply to [member Environment.volumetric_fog_density].  
         */
        get density(): float64
        set density(value: float64)
        
        /** The single-scattering [Color] of the [FogVolume]. Internally, [member albedo] is converted into single-scattering, which is additively blended with other [FogVolume]s and the [member Environment.volumetric_fog_albedo]. */
        get albedo(): Color
        set albedo(value: Color)
        
        /** The [Color] of the light emitted by the [FogVolume]. Emitted light will not cast light or shadows on other objects, but can be useful for modulating the [Color] of the [FogVolume] independently from light sources. */
        get emission(): Color
        set emission(value: Color)
        
        /** The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of `0.0` results in uniform-density fog. The height threshold is determined by the height of the associated [FogVolume]. */
        get heightFalloff(): float64
        set heightFalloff(value: float64)
        
        /** The hardness of the edges of the [FogVolume]. A higher value will result in softer edges, while a lower value will result in harder edges. */
        get edgeFade(): float64
        set edgeFade(value: float64)
        
        /** The 3D texture that is used to scale the [member density] of the [FogVolume]. This can be used to vary fog density within the [FogVolume] with any kind of static pattern. For animated effects, consider using a custom [url=https://docs.godotengine.org/en/4.5/tutorials/shaders/shader_reference/fog_shader.html]fog shader[/url]. */
        get densityTexture(): null | Texture3D
        set densityTexture(value: null | Texture3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFogMaterial;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFogMaterial;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFogVolume extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFogVolume extends __NameMapVisualInstance3D {
    }
    /** A region that contributes to the default volumetric fog from the world environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_fogvolume.html  
     */
    class FogVolume<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** The size of the [FogVolume] when [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX].  
         *      
         *  **Note:** Thin fog volumes may appear to flicker when the camera moves or rotates. This can be alleviated by increasing [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth] (at a performance cost) or by decreasing [member Environment.volumetric_fog_length] (at no performance cost, but at the cost of lower fog range). Alternatively, the [FogVolume] can be made thicker and use a lower density in the [member material].  
         *      
         *  **Note:** If [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_CONE] or [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], the cone/cylinder will be adjusted to fit within the size. Non-uniform scaling of cone/cylinder shapes via the [member size] property is not supported, but you can scale the [FogVolume] node instead.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The shape of the [FogVolume]. This can be set to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
        get shape(): int64
        set shape(value: int64)
        
        /** The [Material] used by the [FogVolume]. Can be either a built-in [FogMaterial] or a custom [ShaderMaterial]. */
        get material(): null | FogMaterial | ShaderMaterial
        set material(value: null | FogMaterial | ShaderMaterial)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFogVolume;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFogVolume;
    }
    namespace FoldableContainer {
        enum TitlePosition {
            PositionTop = 0,
            PositionBottom = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFoldableContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFoldableContainer extends __NameMapContainer {
        add_title_bar_control: "addTitleBarControl";
        remove_title_bar_control: "removeTitleBarControl";
        title_alignment: "titleAlignment";
        title_position: "titlePosition";
        title_text_overrun_behavior: "titleTextOverrunBehavior";
        foldable_group: "foldableGroup";
        title_text_direction: "titleTextDirection";
        folding_changed: "foldingChanged";
    }
    /** A container that can be expanded/collapsed.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_foldablecontainer.html  
     */
    class FoldableContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** Folds the container and emits [signal folding_changed]. */
        fold(): void
        
        /** Expands the container and emits [signal folding_changed]. */
        expand(): void
        
        /** Adds a [Control] that will be placed next to the container's title, obscuring the clickable area. Prime usage is adding [Button] nodes, but it can be any [Control].  
         *  The control will be added as a child of this container and removed from previous parent if necessary. The controls will be placed aligned to the right, with the first added control being the leftmost one.  
         */
        addTitleBarControl(control: Control): void
        
        /** Removes a [Control] added with [method add_title_bar_control]. The node is not freed automatically, you need to use [method Node.queue_free]. */
        removeTitleBarControl(control: Control): void
        
        /** If `true`, the container will becomes folded and will hide all its children. */
        get folded(): boolean
        set folded(value: boolean)
        
        /** The container's title text. */
        get title(): string
        set title(value: string)
        
        /** Title's horizontal text alignment. */
        get titleAlignment(): int64
        set titleAlignment(value: int64)
        
        /** Title's position. */
        get titlePosition(): int64
        set titlePosition(value: int64)
        
        /** Defines the behavior of the title when the text is longer than the available space. */
        get titleTextOverrunBehavior(): int64
        set titleTextOverrunBehavior(value: int64)
        
        /** The [FoldableGroup] associated with the container. When multiple [FoldableContainer] nodes share the same group, only one of them is allowed to be unfolded. */
        get foldableGroup(): null | FoldableGroup
        set foldableGroup(value: null | FoldableGroup)
        
        /** Title text writing direction. */
        get titleTextDirection(): int64
        set titleTextDirection(value: int64)
        
        /** Language code used for text shaping algorithms. If left empty, current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Emitted when the container is folded/expanded. */
        readonly foldingChanged: Signal<(isFolded: boolean) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFoldableContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFoldableContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFoldableGroup extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFoldableGroup extends __NameMapResource {
        get_expanded_container: "getExpandedContainer";
        get_containers: "getContainers";
        allow_folding_all: "allowFoldingAll";
    }
    /** A group of foldable containers that doesn't allow more than one container to be expanded at a time.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_foldablegroup.html  
     */
    class FoldableGroup extends Resource {
        constructor(identifier?: any)
        /** Returns the current expanded container. */
        getExpandedContainer(): null | FoldableContainer
        
        /** Returns an [Array] of [FoldableContainer]s that have this as their FoldableGroup (see [member FoldableContainer.foldable_group]). This is equivalent to [ButtonGroup] but for FoldableContainers. */
        getContainers(): GArray<FoldableContainer>
        
        /** If `true`, it is possible to fold all containers in this FoldableGroup. */
        get allowFoldingAll(): boolean
        set allowFoldingAll(value: boolean)
        
        /** Emitted when one of the containers of the group is expanded. */
        readonly expanded: Signal<(container: FoldableContainer) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFoldableGroup;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFoldableGroup;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFont extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFont extends __NameMapResource {
        find_variation: "findVariation";
        get_rids: "getRids";
        get_height: "getHeight";
        get_ascent: "getAscent";
        get_descent: "getDescent";
        get_underline_position: "getUnderlinePosition";
        get_underline_thickness: "getUnderlineThickness";
        get_font_name: "getFontName";
        get_font_style_name: "getFontStyleName";
        get_ot_name_strings: "getOtNameStrings";
        get_font_style: "getFontStyle";
        get_font_weight: "getFontWeight";
        get_font_stretch: "getFontStretch";
        get_spacing: "getSpacing";
        get_opentype_features: "getOpentypeFeatures";
        set_cache_capacity: "setCacheCapacity";
        get_string_size: "getStringSize";
        get_multiline_string_size: "getMultilineStringSize";
        draw_string: "drawString";
        draw_multiline_string: "drawMultilineString";
        draw_string_outline: "drawStringOutline";
        draw_multiline_string_outline: "drawMultilineStringOutline";
        get_char_size: "getCharSize";
        draw_char: "drawChar";
        draw_char_outline: "drawCharOutline";
        has_char: "hasChar";
        get_supported_chars: "getSupportedChars";
        is_language_supported: "isLanguageSupported";
        is_script_supported: "isScriptSupported";
        get_supported_feature_list: "getSupportedFeatureList";
        get_supported_variation_list: "getSupportedVariationList";
        get_face_count: "getFaceCount";
    }
    /** Abstract base class for fonts and font variations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_font.html  
     */
    class Font extends Resource {
        constructor(identifier?: any)
        /** Returns [TextServer] RID of the font cache for specific variation. */
        findVariation(variationCoordinates: GDictionary, faceIndex?: int64 /* = 0 */, strength?: float64 /* = 0 */, transform?: Transform2D /* = new Transform2D() */, spacingTop?: int64 /* = 0 */, spacingBottom?: int64 /* = 0 */, spacingSpace?: int64 /* = 0 */, spacingGlyph?: int64 /* = 0 */, baselineOffset?: float64 /* = 0 */): Rid
        
        /** Returns [Array] of valid [Font] [RID]s, which can be passed to the [TextServer] methods. */
        getRids(): GArray<Rid>
        
        /** Returns the total average font height (ascent plus descent) in pixels.  
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).  
         */
        getHeight(fontSize?: int64 /* = 16 */): float64
        
        /** Returns the average font ascent (number of pixels above the baseline).  
         *      
         *  **Note:** Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).  
         */
        getAscent(fontSize?: int64 /* = 16 */): float64
        
        /** Returns the average font descent (number of pixels below the baseline).  
         *      
         *  **Note:** Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).  
         */
        getDescent(fontSize?: int64 /* = 16 */): float64
        
        /** Returns average pixel offset of the underline below the baseline.  
         *      
         *  **Note:** Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
         */
        getUnderlinePosition(fontSize?: int64 /* = 16 */): float64
        
        /** Returns average thickness of the underline.  
         *      
         *  **Note:** Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
         */
        getUnderlineThickness(fontSize?: int64 /* = 16 */): float64
        
        /** Returns font family name. */
        getFontName(): string
        
        /** Returns font style name. */
        getFontStyleName(): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        getOtNameStrings(): GDictionary
        
        /** Returns font style flags. */
        getFontStyle(): TextServer.FontStyle
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        getFontWeight(): int64
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        getFontStretch(): int64
        
        /** Returns the amount of spacing for the given [param spacing] type. */
        getSpacing(spacing: TextServer.SpacingType): int64
        
        /** Returns a set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        getOpentypeFeatures(): GDictionary
        
        /** Sets LRU cache capacity for `draw_*` methods. */
        setCacheCapacity(singleLine: int64, multiLine: int64): void
        
        /** Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also [method get_multiline_string_size] and [method draw_string].  
         *  For example, to get the string size as displayed by a single-line Label, use:  
         *    
         *      
         *  **Note:** Since kerning, advance and subpixel positioning are taken into account by [method get_string_size], using separate [method get_string_size] calls on substrings of a string then adding the results together will return a different result compared to using a single [method get_string_size] call on the full string.  
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by [method get_height].  
         */
        getStringSize(text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */): Vector2
        
        /** Returns the size of a bounding box of a string broken into the lines, taking kerning and advance into account.  
         *  See also [method draw_multiline_string].  
         */
        getMultilineStringSize(text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */): Vector2
        
        /** Draw [param text] into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_string].  
         */
        drawString(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Breaks [param text] into lines using rules specified by [param brk_flags] and draws it into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_multiline_string].  
         */
        drawMultilineString(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Draw [param text] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_string_outline].  
         */
        drawStringOutline(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, size?: int64 /* = 1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Breaks [param text] to the lines using rules specified by [param brk_flags] and draws text outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_multiline_string_outline].  
         */
        drawMultilineStringOutline(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, size?: int64 /* = 1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Returns the size of a character. Does not take kerning into account.  
         *      
         *  **Note:** Do not use this function to calculate width of the string character by character, use [method get_string_size] or [TextLine] instead. The height returned is the font height (see also [method get_height]) and has no relation to the glyph height.  
         */
        getCharSize(char: int64, fontSize: int64): Vector2
        
        /** Draw a single Unicode character [param char] into a canvas item using the font, at a given position, with [param modulate] color. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        drawChar(canvasItem: Rid, pos: Vector2, char: int64, fontSize: int64, modulate?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): float64
        
        /** Draw a single Unicode character [param char] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        drawCharOutline(canvasItem: Rid, pos: Vector2, char: int64, fontSize: int64, size?: int64 /* = -1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): float64
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        hasChar(char: int64): boolean
        
        /** Returns a string containing all the characters available in the font.  
         *  If a given character is included in more than one font data source, it appears only once in the returned string.  
         */
        getSupportedChars(): string
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        isLanguageSupported(language: string): boolean
        
        /** Returns `true`, if font supports given script ([url=https://en.wikipedia.org/wiki/ISO_15924]ISO 15924[/url] code). */
        isScriptSupported(script: string): boolean
        
        /** Returns list of OpenType features supported by font. */
        getSupportedFeatureList(): GDictionary
        
        /** Returns list of supported [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]variation coordinates[/url], each coordinate is returned as `tag: Vector3i(min_value,max_value,default_value)`.  
         *  Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.  
         *  To print available variation axes of a variable font:  
         *    
         *      
         *  **Note:** To set and get variation coordinates of a [FontVariation], use [member FontVariation.variation_opentype].  
         */
        getSupportedVariationList(): GDictionary
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        getFaceCount(): int64
        
        /** Array of fallback [Font]s to use as a substitute if a glyph is not found in this current [Font].  
         *  If this array is empty in a [FontVariation], the [member FontVariation.base_font]'s fallbacks are used instead.  
         */
        get fallbacks(): GArray<Font>
        set fallbacks(value: GArray<Font>)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFont;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFont;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFontFile extends __RPCMapFont {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFontFile extends __NameMapFont {
        load_bitmap_font: "loadBitmapFont";
        load_dynamic_font: "loadDynamicFont";
        get_cache_count: "getCacheCount";
        clear_cache: "clearCache";
        remove_cache: "removeCache";
        get_size_cache_list: "getSizeCacheList";
        clear_size_cache: "clearSizeCache";
        remove_size_cache: "removeSizeCache";
        set_variation_coordinates: "setVariationCoordinates";
        get_variation_coordinates: "getVariationCoordinates";
        set_embolden: "setEmbolden";
        get_embolden: "getEmbolden";
        set_transform: "setTransform";
        get_transform: "getTransform";
        set_extra_spacing: "setExtraSpacing";
        get_extra_spacing: "getExtraSpacing";
        set_extra_baseline_offset: "setExtraBaselineOffset";
        get_extra_baseline_offset: "getExtraBaselineOffset";
        set_face_index: "setFaceIndex";
        get_face_index: "getFaceIndex";
        set_cache_ascent: "setCacheAscent";
        get_cache_ascent: "getCacheAscent";
        set_cache_descent: "setCacheDescent";
        get_cache_descent: "getCacheDescent";
        set_cache_underline_position: "setCacheUnderlinePosition";
        get_cache_underline_position: "getCacheUnderlinePosition";
        set_cache_underline_thickness: "setCacheUnderlineThickness";
        get_cache_underline_thickness: "getCacheUnderlineThickness";
        set_cache_scale: "setCacheScale";
        get_cache_scale: "getCacheScale";
        get_texture_count: "getTextureCount";
        clear_textures: "clearTextures";
        remove_texture: "removeTexture";
        set_texture_image: "setTextureImage";
        get_texture_image: "getTextureImage";
        set_texture_offsets: "setTextureOffsets";
        get_texture_offsets: "getTextureOffsets";
        get_glyph_list: "getGlyphList";
        clear_glyphs: "clearGlyphs";
        remove_glyph: "removeGlyph";
        set_glyph_advance: "setGlyphAdvance";
        get_glyph_advance: "getGlyphAdvance";
        set_glyph_offset: "setGlyphOffset";
        get_glyph_offset: "getGlyphOffset";
        set_glyph_size: "setGlyphSize";
        get_glyph_size: "getGlyphSize";
        set_glyph_uv_rect: "setGlyphUVRect";
        get_glyph_uv_rect: "getGlyphUVRect";
        set_glyph_texture_idx: "setGlyphTextureIdx";
        get_glyph_texture_idx: "getGlyphTextureIdx";
        get_kerning_list: "getKerningList";
        clear_kerning_map: "clearKerningMap";
        remove_kerning: "removeKerning";
        set_kerning: "setKerning";
        get_kerning: "getKerning";
        render_range: "renderRange";
        render_glyph: "renderGlyph";
        set_language_support_override: "setLanguageSupportOverride";
        get_language_support_override: "getLanguageSupportOverride";
        remove_language_support_override: "removeLanguageSupportOverride";
        get_language_support_overrides: "getLanguageSupportOverrides";
        set_script_support_override: "setScriptSupportOverride";
        get_script_support_override: "getScriptSupportOverride";
        remove_script_support_override: "removeScriptSupportOverride";
        get_script_support_overrides: "getScriptSupportOverrides";
        get_glyph_index: "getGlyphIndex";
        get_char_from_glyph_index: "getCharFromGlyphIndex";
        generate_mipmaps: "generateMipmaps";
        disable_embedded_bitmaps: "disableEmbeddedBitmaps";
        font_name: "fontName";
        style_name: "styleName";
        font_style: "fontStyle";
        font_weight: "fontWeight";
        font_stretch: "fontStretch";
        subpixel_positioning: "subpixelPositioning";
        keep_rounding_remainders: "keepRoundingRemainders";
        multichannel_signed_distance_field: "multichannelSignedDistanceField";
        msdf_pixel_range: "msdfPixelRange";
        msdf_size: "msdfSize";
        allow_system_fallback: "allowSystemFallback";
        force_autohinter: "forceAutohinter";
        modulate_color_glyphs: "modulateColorGlyphs";
        fixed_size: "fixedSize";
        fixed_size_scale_mode: "fixedSizeScaleMode";
        opentype_feature_overrides: "opentypeFeatureOverrides";
    }
    /** Holds font source data and prerendered glyph cache, imported from a dynamic or a bitmap font.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_fontfile.html  
     */
    class FontFile extends Font {
        constructor(identifier?: any)
        /** Loads an AngelCode BMFont (.fnt, .font) bitmap font from file [param path].  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
         */
        loadBitmapFont(path: string): GError
        
        /** Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file [param path].  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
         */
        loadDynamicFont(path: string): GError
        
        /** Returns number of the font cache entries. */
        getCacheCount(): int64
        
        /** Removes all font cache entries. */
        clearCache(): void
        
        /** Removes specified font cache entry. */
        removeCache(cacheIndex: int64): void
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        getSizeCacheList(cacheIndex: int64): GArray<Vector2I>
        
        /** Removes all font sizes from the cache entry. */
        clearSizeCache(cacheIndex: int64): void
        
        /** Removes specified font size from the cache entry. */
        removeSizeCache(cacheIndex: int64, size: Vector2I): void
        
        /** Sets variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        setVariationCoordinates(cacheIndex: int64, variationCoordinates: GDictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        getVariationCoordinates(cacheIndex: int64): GDictionary
        
        /** Sets embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        setEmbolden(cacheIndex: int64, strength: float64): void
        
        /** Returns embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        getEmbolden(cacheIndex: int64): float64
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs. */
        setTransform(cacheIndex: int64, transform: Transform2D): void
        
        /** Returns 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
        getTransform(cacheIndex: int64): Transform2D
        
        /** Sets the spacing for [param spacing] to [param value] in pixels (not relative to the font size). */
        setExtraSpacing(cacheIndex: int64, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns spacing for [param spacing] in pixels (not relative to the font size). */
        getExtraSpacing(cacheIndex: int64, spacing: TextServer.SpacingType): int64
        
        /** Sets extra baseline offset (as a fraction of font height). */
        setExtraBaselineOffset(cacheIndex: int64, baselineOffset: float64): void
        
        /** Returns extra baseline offset (as a fraction of font height). */
        getExtraBaselineOffset(cacheIndex: int64): float64
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        setFaceIndex(cacheIndex: int64, faceIndex: int64): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        getFaceIndex(cacheIndex: int64): int64
        
        /** Sets the font ascent (number of pixels above the baseline). */
        setCacheAscent(cacheIndex: int64, size: int64, ascent: float64): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        getCacheAscent(cacheIndex: int64, size: int64): float64
        
        /** Sets the font descent (number of pixels below the baseline). */
        setCacheDescent(cacheIndex: int64, size: int64, descent: float64): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        getCacheDescent(cacheIndex: int64, size: int64): float64
        
        /** Sets pixel offset of the underline below the baseline. */
        setCacheUnderlinePosition(cacheIndex: int64, size: int64, underlinePosition: float64): void
        
        /** Returns pixel offset of the underline below the baseline. */
        getCacheUnderlinePosition(cacheIndex: int64, size: int64): float64
        
        /** Sets thickness of the underline in pixels. */
        setCacheUnderlineThickness(cacheIndex: int64, size: int64, underlineThickness: float64): void
        
        /** Returns thickness of the underline in pixels. */
        getCacheUnderlineThickness(cacheIndex: int64, size: int64): float64
        
        /** Sets scaling factor of the color bitmap font. */
        setCacheScale(cacheIndex: int64, size: int64, scale: float64): void
        
        /** Returns scaling factor of the color bitmap font. */
        getCacheScale(cacheIndex: int64, size: int64): float64
        
        /** Returns number of textures used by font cache entry. */
        getTextureCount(cacheIndex: int64, size: Vector2I): int64
        
        /** Removes all textures from font cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method remove_glyph] to remove them manually.  
         */
        clearTextures(cacheIndex: int64, size: Vector2I): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture. Remove them manually using [method remove_glyph].  
         */
        removeTexture(cacheIndex: int64, size: Vector2I, textureIndex: int64): void
        
        /** Sets font cache texture image. */
        setTextureImage(cacheIndex: int64, size: Vector2I, textureIndex: int64, image: Image): void
        
        /** Returns a copy of the font cache texture image. */
        getTextureImage(cacheIndex: int64, size: Vector2I, textureIndex: int64): null | Image
        
        /** Sets array containing glyph packing data. */
        setTextureOffsets(cacheIndex: int64, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        
        /** Returns a copy of the array containing glyph packing data. */
        getTextureOffsets(cacheIndex: int64, size: Vector2I, textureIndex: int64): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        getGlyphList(cacheIndex: int64, size: Vector2I): PackedInt32Array
        
        /** Removes all rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        clearGlyphs(cacheIndex: int64, size: Vector2I): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        removeGlyph(cacheIndex: int64, size: Vector2I, glyph: int64): void
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        setGlyphAdvance(cacheIndex: int64, size: int64, glyph: int64, advance: Vector2): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        getGlyphAdvance(cacheIndex: int64, size: int64, glyph: int64): Vector2
        
        /** Sets glyph offset from the baseline. */
        setGlyphOffset(cacheIndex: int64, size: Vector2I, glyph: int64, offset: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        getGlyphOffset(cacheIndex: int64, size: Vector2I, glyph: int64): Vector2
        
        /** Sets glyph size. */
        setGlyphSize(cacheIndex: int64, size: Vector2I, glyph: int64, glSize: Vector2): void
        
        /** Returns glyph size. */
        getGlyphSize(cacheIndex: int64, size: Vector2I, glyph: int64): Vector2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        setGlyphUVRect(cacheIndex: int64, size: Vector2I, glyph: int64, uVRect: Rect2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        getGlyphUVRect(cacheIndex: int64, size: Vector2I, glyph: int64): Rect2
        
        /** Sets index of the cache texture containing the glyph. */
        setGlyphTextureIdx(cacheIndex: int64, size: Vector2I, glyph: int64, textureIdx: int64): void
        
        /** Returns index of the cache texture containing the glyph. */
        getGlyphTextureIdx(cacheIndex: int64, size: Vector2I, glyph: int64): int64
        
        /** Returns list of the kerning overrides. */
        getKerningList(cacheIndex: int64, size: int64): GArray<Vector2I>
        
        /** Removes all kerning overrides. */
        clearKerningMap(cacheIndex: int64, size: int64): void
        
        /** Removes kerning override for the pair of glyphs. */
        removeKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I): void
        
        /** Sets kerning for the pair of glyphs. */
        setKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        getKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I): Vector2
        
        /** Renders the range of characters to the font cache texture. */
        renderRange(cacheIndex: int64, size: Vector2I, start: int64, end: int64): void
        
        /** Renders specified glyph to the font cache texture. */
        renderGlyph(cacheIndex: int64, size: Vector2I, index: int64): void
        
        /** Adds override for [method Font.is_language_supported]. */
        setLanguageSupportOverride(language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        getLanguageSupportOverride(language: string): boolean
        
        /** Remove language support override. */
        removeLanguageSupportOverride(language: string): void
        
        /** Returns list of language support overrides. */
        getLanguageSupportOverrides(): PackedStringArray
        
        /** Adds override for [method Font.is_script_supported]. */
        setScriptSupportOverride(script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        getScriptSupportOverride(script: string): boolean
        
        /** Removes script support override. */
        removeScriptSupportOverride(script: string): void
        
        /** Returns list of script support overrides. */
        getScriptSupportOverrides(): PackedStringArray
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
        getGlyphIndex(size: int64, char: int64, variationSelector: int64): int64
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method get_glyph_index]. */
        getCharFromGlyphIndex(size: int64, glyphIndex: int64): int64
        
        /** Contents of the dynamic font source file. */
        get data(): PackedByteArray
        set data(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** If set to `true`, generate mipmaps for the font textures. */
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        
        /** If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property). */
        get disableEmbeddedBitmaps(): boolean
        set disableEmbeddedBitmaps(value: boolean)
        
        /** Font anti-aliasing mode. */
        get antialiasing(): int64
        set antialiasing(value: int64)
        
        /** Font family name. */
        get fontName(): string
        set fontName(value: string)
        
        /** Font style name. */
        get styleName(): string
        set styleName(value: string)
        
        /** Font style flags. */
        get fontStyle(): int64
        set fontStyle(value: int64)
        
        /** Weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        get fontWeight(): int64
        set fontWeight(value: int64)
        
        /** Font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        get fontStretch(): int64
        set fontStretch(value: int64)
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        get subpixelPositioning(): int64
        set subpixelPositioning(value: int64)
        
        /** If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        get keepRoundingRemainders(): boolean
        set keepRoundingRemainders(value: boolean)
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        get multichannelSignedDistanceField(): boolean
        set multichannelSignedDistanceField(value: boolean)
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        get msdfPixelRange(): int64
        set msdfPixelRange(value: int64)
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        get msdfSize(): int64
        set msdfSize(value: int64)
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        get allowSystemFallback(): boolean
        set allowSystemFallback(value: boolean)
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting). */
        get forceAutohinter(): boolean
        set forceAutohinter(value: boolean)
        
        /** If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
        get modulateColorGlyphs(): boolean
        set modulateColorGlyphs(value: boolean)
        
        /** Font hinting mode. Used by dynamic fonts only. */
        get hinting(): int64
        set hinting(value: int64)
        
        /** Font size, used only for the bitmap fonts. */
        get fixedSize(): int64
        set fixedSize(value: int64)
        
        /** Scaling mode, used only for the bitmap fonts with [member fixed_size] greater than zero. */
        get fixedSizeScaleMode(): int64
        set fixedSizeScaleMode(value: int64)
        
        /** Font OpenType feature set override. */
        get opentypeFeatureOverrides(): GDictionary
        set opentypeFeatureOverrides(value: GDictionary)
        
        /** If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling` parameter of [code skip-lint]draw_*` methods. */
        get oversampling(): float64
        set oversampling(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFontFile;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFontFile;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFontVariation extends __RPCMapFont {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFontVariation extends __NameMapFont {
        set_spacing: "setSpacing";
        base_font: "baseFont";
        variation_opentype: "variationOpentype";
        variation_face_index: "variationFaceIndex";
        variation_embolden: "variationEmbolden";
        variation_transform: "variationTransform";
        opentype_features: "opentypeFeatures";
        spacing_glyph: "spacingGlyph";
        spacing_space: "spacingSpace";
        spacing_top: "spacingTop";
        spacing_bottom: "spacingBottom";
        baseline_offset: "baselineOffset";
    }
    /** A variation of a font with additional settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_fontvariation.html  
     */
    class FontVariation extends Font {
        constructor(identifier?: any)
        /** Sets the spacing for [param spacing] to [param value] in pixels (not relative to the font size). */
        setSpacing(spacing: TextServer.SpacingType, value: int64): void
        
        /** Base font used to create a variation. If not set, default [Theme] font is used. */
        get baseFont(): null | Font
        set baseFont(value: null | Font)
        
        /** Font OpenType variation coordinates. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]OpenType variation tags[/url].  
         *      
         *  **Note:** This [Dictionary] uses OpenType tags as keys. Variation axes can be identified both by tags ([int], e.g. `0x77678674`) and names ([String], e.g. `wght`). Some axes might be accessible by multiple names. For example, `wght` refers to the same axis as `weight`. Tags on the other hand are unique. To convert between names and tags, use [method TextServer.name_to_tag] and [method TextServer.tag_to_name].  
         *      
         *  **Note:** To get available variation axes of a font, use [method Font.get_supported_variation_list].  
         */
        get variationOpentype(): GDictionary
        set variationOpentype(value: GDictionary)
        
        /** Active face index in the TrueType / OpenType collection file. */
        get variationFaceIndex(): int64
        set variationFaceIndex(value: int64)
        
        /** If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.  
         *      
         *  **Note:** Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and [TextMesh] from working correctly.  
         */
        get variationEmbolden(): float64
        set variationEmbolden(value: float64)
        
        /** 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
         */
        get variationTransform(): Transform2D
        set variationTransform(value: Transform2D)
        
        /** A set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        get opentypeFeatures(): GDictionary
        set opentypeFeatures(value: GDictionary)
        
        /** Extra spacing between graphical glyphs. */
        get spacingGlyph(): int64
        set spacingGlyph(value: int64)
        
        /** Extra width of the space glyphs. */
        get spacingSpace(): int64
        set spacingSpace(value: int64)
        
        /** Extra spacing at the top of the line in pixels. */
        get spacingTop(): int64
        set spacingTop(value: int64)
        
        /** Extra spacing at the bottom of the line in pixels. */
        get spacingBottom(): int64
        set spacingBottom(value: int64)
        
        /** Extra baseline offset (as a fraction of font height). */
        get baselineOffset(): float64
        set baselineOffset(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFontVariation;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFontVariation;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapFramebufferCacheRD extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapFramebufferCacheRD extends __NameMapGObject {
        get_cache_multipass: "getCacheMultipass";
    }
    /** Framebuffer cache manager for Rendering Device based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_framebuffercacherd.html  
     */
    class FramebufferCacheRD extends GObject {
        constructor(identifier?: any)
        /** Creates, or obtains a cached, framebuffer. [param textures] lists textures accessed. [param passes] defines the subpasses and texture allocation, if left empty a single pass is created and textures are allocated depending on their usage flags. [param views] defines the number of views used when rendering. */
        static getCacheMultipass(textures: GArray<Rid>, passes: GArray<RDFramebufferPass>, views: int64): Rid
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapFramebufferCacheRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapFramebufferCacheRD;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGBasicTextField extends __RPCMapGTextField {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGBasicTextField extends __NameMapGTextField {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gbasictextfield.html */
    class GBasicTextField extends GTextField {
        constructor(identifier?: any)
        get color(): Color
        set color(value: Color)
        get fontSize(): int64
        set fontSize(value: int64)
        get singleLine(): boolean
        set singleLine(value: boolean)
        get autoSize(): int64
        set autoSize(value: int64)
        get ubbEnabled(): boolean
        set ubbEnabled(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGBasicTextField;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGBasicTextField;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGButton extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGButton extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gbutton.html */
    class GButton extends GComponent {
        constructor(identifier?: any)
        setTitle(title: string): void
        getTitle(): string
        setSelectedTitle(title: string): void
        getSelectedTitle(): string
        setSelectedIcon(icon: string): void
        getSelectedIcon(): string
        getRelatedController(): null | GController
        setRelatedController(controller: GController): void
        get titleColor(): Color
        set titleColor(value: Color)
        get titleFontSize(): int64
        set titleFontSize(value: int64)
        get selected(): boolean
        set selected(value: boolean)
        get changeStateOnClick(): boolean
        set changeStateOnClick(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGButton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGComboBox extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGComboBox extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gcombobox.html */
    class GComboBox extends GComponent {
        constructor(identifier?: any)
        setTitle(title: string): void
        getTitle(): string
        setValue(value: string): void
        getValue(): string
        getDropdown(): null | GComponent
        refresh(): void
        get titleColor(): Color
        set titleColor(value: Color)
        get titleFontSize(): int64
        set titleFontSize(value: int64)
        get selectedIndex(): int64
        set selectedIndex(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGComboBox;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGComboBox;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGComponent extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGComponent extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gcomponent.html */
    class GComponent extends GObject {
        constructor(identifier?: any)
        getChild(name: string): null | GObject
        getChildByPath(path: string): null | GObject
        getChildById(id: string): null | GObject
        getChildIndex(child: GObject): int64
        setChildIndex(child: GObject, index: int64): void
        swapChildren(child1: GObject, child2: GObject): void
        swapChildrenAt(index1: int64, index2: int64): void
        numChildren(): int64
        addController(controller: GController): void
        getControllerAt(index: int64): null | GController
        getController(name: string): null | GController
        removeController(controller: GController): void
        applyController(controller: GController): void
        applyAllControllers(): void
        addChildAt(child: GObject, index: int64): void
        removeChildAt(index: int64): void
        removeChildren(beginIndex?: int64 /* = 0 */, endIndex?: int64 /* = -1 */): void
        getChildAt(index: int64): null | GObject
        getTransition(name: string): null | Transition
        getScrollPane(): null | ScrollPane
        ensureBoundsCorrect(): void
        doUpdateBounds(): void
        buildNativeDisplayList(): void
        isChildInView(child: GObject): boolean
        isAncestorOf(obj: GObject): boolean
        get opaque(): boolean
        set opaque(value: boolean)
        get viewWidth(): float64
        set viewWidth(value: float64)
        get viewHeight(): float64
        set viewHeight(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGComponent;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGComponent;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGController extends __RPCMapUIEventDispatcher {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGController extends __NameMapUIEventDispatcher {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gcontroller.html */
    class GController extends UIEventDispatcher {
        constructor(identifier?: any)
        getPageCount(): int64
        getPreviousPage(): string
        getPreviousPageId(): string
        setSelectedPage(value: string): void
        getSelectedPage(): string
        setSelectedPageId(value: string): void
        getSelectedPageId(): string
        getParent(): null | GComponent
        setParent(parent: GComponent): void
        get selectedIndex(): int64
        set selectedIndex(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGController;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGController;
    }
    namespace GDExtension {
        enum InitializationLevel {
            InitializationLevelCore = 0,
            InitializationLevelServers = 1,
            InitializationLevelScene = 2,
            InitializationLevelEditor = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGDExtension extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGDExtension extends __NameMapResource {
        is_library_open: "isLibraryOpen";
        get_minimum_library_initialization_level: "getMinimumLibraryInitializationLevel";
    }
    /** A native library for GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_gdextension.html  
     */
    class GDExtension extends Resource {
        constructor(identifier?: any)
        /** Returns `true` if this extension's library has been opened. */
        isLibraryOpen(): boolean
        
        /** Returns the lowest level required for this extension to be properly initialized (see the [enum InitializationLevel] enum). */
        getMinimumLibraryInitializationLevel(): GDExtension.InitializationLevel
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGDExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGDExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGGraph extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGGraph extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_ggraph.html */
    class GGraph extends GObject {
        constructor(identifier?: any)
        drawRect(width: float64, height: float64, lineSize: int64, lineColor: Color, fillColor: Color): void
        drawEllipse(width: float64, height: float64, lineSize: int64, lineColor: Color, fillColor: Color): void
        isEmpty(): boolean
        get color(): Color
        set color(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGGraph;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGGraph;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGGroup extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGGroup extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_ggroup.html */
    class GGroup extends GObject {
        constructor(identifier?: any)
        ensureBoundsCorrect(): void
        setColumnGap(value: int64): void
        getColumnGap(): int64
        setLineGap(value: int64): void
        getLineGap(): int64
        setExcludeInvisibles(value: boolean): void
        isExcludeInvisibles(): boolean
        setAutoSizeDisabled(value: boolean): void
        isAutoSizeDisabled(): boolean
        setMainGridIndex(value: int64): void
        getMainGridIndex(): int64
        setMainGridMinSize(value: int64): void
        getMainGridMinSize(): int64
        get layout(): int64
        set layout(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGGroup;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGGroup;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGImage extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGImage extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gimage.html */
    class GImage extends GObject {
        constructor(identifier?: any)
        get flip(): int64
        set flip(value: int64)
        get imageColor(): Color
        set imageColor(value: Color)
        get fillMethod(): int64
        set fillMethod(value: int64)
        get fillOrigin(): int64
        set fillOrigin(value: int64)
        get fillClockwise(): boolean
        set fillClockwise(value: boolean)
        get fillAmount(): float64
        set fillAmount(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGImage;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGImage;
    }
    namespace GltfAccessor {
        enum GltfAccessorType {
            TypeScalar = 0,
            TypeVec2 = 1,
            TypeVec3 = 2,
            TypeVec4 = 3,
            TypeMat2 = 4,
            TypeMat3 = 5,
            TypeMat4 = 6,
        }
        enum GltfComponentType {
            ComponentTypeNone = 0,
            ComponentTypeSignedByte = 5120,
            ComponentTypeUnsignedByte = 5121,
            ComponentTypeSignedShort = 5122,
            ComponentTypeUnsignedShort = 5123,
            ComponentTypeSignedInt = 5124,
            ComponentTypeUnsignedInt = 5125,
            ComponentTypeSingleFloat = 5126,
            ComponentTypeDoubleFloat = 5130,
            ComponentTypeHalfFloat = 5131,
            ComponentTypeSignedLong = 5134,
            ComponentTypeUnsignedLong = 5135,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfAccessor extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfAccessor extends __NameMapResource {
        buffer_view: "bufferView";
        byte_offset: "byteOffset";
        component_type: "componentType";
        accessor_type: "accessorType";
        sparse_count: "sparseCount";
        sparse_indices_buffer_view: "sparseIndicesBufferView";
        sparse_indices_byte_offset: "sparseIndicesByteOffset";
        sparse_indices_component_type: "sparseIndicesComponentType";
        sparse_values_buffer_view: "sparseValuesBufferView";
        sparse_values_byte_offset: "sparseValuesByteOffset";
    }
    class GltfAccessor extends Resource {
        constructor(identifier?: any)
        get bufferView(): int64
        set bufferView(value: int64)
        get byteOffset(): int64
        set byteOffset(value: int64)
        get componentType(): int64
        set componentType(value: int64)
        get normalized(): boolean
        set normalized(value: boolean)
        get count(): int64
        set count(value: int64)
        get accessorType(): int64
        set accessorType(value: int64)
        get type(): int64
        set type(value: int64)
        get min(): PackedFloat64Array
        set min(value: PackedFloat64Array | float64[])
        get max(): PackedFloat64Array
        set max(value: PackedFloat64Array | float64[])
        get sparseCount(): int64
        set sparseCount(value: int64)
        get sparseIndicesBufferView(): int64
        set sparseIndicesBufferView(value: int64)
        get sparseIndicesByteOffset(): int64
        set sparseIndicesByteOffset(value: int64)
        get sparseIndicesComponentType(): int64
        set sparseIndicesComponentType(value: int64)
        get sparseValuesBufferView(): int64
        set sparseValuesBufferView(value: int64)
        get sparseValuesByteOffset(): int64
        set sparseValuesByteOffset(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfAccessor;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfAccessor;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfAnimation extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfAnimation extends __NameMapResource {
        get_additional_data: "getAdditionalData";
        set_additional_data: "setAdditionalData";
        original_name: "originalName";
    }
    class GltfAnimation extends Resource {
        constructor(identifier?: any)
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get originalName(): string
        set originalName(value: string)
        get loop(): boolean
        set loop(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfAnimation;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfAnimation;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfBufferView extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfBufferView extends __NameMapResource {
        load_buffer_view_data: "loadBufferViewData";
        byte_offset: "byteOffset";
        byte_length: "byteLength";
        byte_stride: "byteStride";
        vertex_attributes: "vertexAttributes";
    }
    class GltfBufferView extends Resource {
        constructor(identifier?: any)
        loadBufferViewData(state: GltfState): PackedByteArray
        get buffer(): int64
        set buffer(value: int64)
        get byteOffset(): int64
        set byteOffset(value: int64)
        get byteLength(): int64
        set byteLength(value: int64)
        get byteStride(): int64
        set byteStride(value: int64)
        get indices(): boolean
        set indices(value: boolean)
        get vertexAttributes(): boolean
        set vertexAttributes(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfBufferView;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfBufferView;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfCamera extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfCamera extends __NameMapResource {
        from_node: "fromNode";
        to_node: "toNode";
        from_dictionary: "fromDictionary";
        to_dictionary: "toDictionary";
        size_mag: "sizeMag";
        depth_far: "depthFar";
        depth_near: "depthNear";
    }
    class GltfCamera extends Resource {
        constructor(identifier?: any)
        static fromNode(cameraNode: Camera3D): null | GltfCamera
        toNode(): null | Camera3D
        static fromDictionary(dictionary: GDictionary): null | GltfCamera
        toDictionary(): GDictionary
        get perspective(): boolean
        set perspective(value: boolean)
        get fov(): float64
        set fov(value: float64)
        get sizeMag(): float64
        set sizeMag(value: float64)
        get depthFar(): float64
        set depthFar(value: float64)
        get depthNear(): float64
        set depthNear(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfCamera;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfCamera;
    }
    namespace GltfDocument {
        enum RootNodeMode {
            RootNodeModeSingleRoot = 0,
            RootNodeModeKeepRoot = 1,
            RootNodeModeMultiRoot = 2,
        }
        enum VisibilityMode {
            VisibilityModeIncludeRequired = 0,
            VisibilityModeIncludeOptional = 1,
            VisibilityModeExclude = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfDocument extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfDocument extends __NameMapResource {
        append_from_file: "appendFromFile";
        append_from_buffer: "appendFromBuffer";
        append_from_scene: "appendFromScene";
        generate_scene: "generateScene";
        generate_buffer: "generateBuffer";
        write_to_filesystem: "writeToFilesystem";
        import_object_model_property: "importObjectModelProperty";
        export_object_model_property: "exportObjectModelProperty";
        register_gltf_document_extension: "registerGltfDocumentExtension";
        unregister_gltf_document_extension: "unregisterGltfDocumentExtension";
        get_supported_gltf_extensions: "getSupportedGltfExtensions";
        image_format: "imageFormat";
        lossy_quality: "lossyQuality";
        fallback_image_format: "fallbackImageFormat";
        fallback_image_quality: "fallbackImageQuality";
        root_node_mode: "rootNodeMode";
        visibility_mode: "visibilityMode";
    }
    class GltfDocument extends Resource {
        constructor(identifier?: any)
        appendFromFile(path: string, state: GltfState, flags?: int64 /* = 0 */, basePath?: string /* = '' */): GError
        appendFromBuffer(bytes: PackedByteArray | byte[] | ArrayBuffer, basePath: string, state: GltfState, flags?: int64 /* = 0 */): GError
        appendFromScene(node: Node, state: GltfState, flags?: int64 /* = 0 */): GError
        generateScene(state: GltfState, bakeFps?: float64 /* = 30 */, trimming?: boolean /* = false */, removeImmutableTracks?: boolean /* = true */): null | Node
        generateBuffer(state: GltfState): PackedByteArray
        writeToFilesystem(state: GltfState, path: string): GError
        static importObjectModelProperty(state: GltfState, jsonPointer: string): null | GltfObjectModelProperty
        static exportObjectModelProperty(state: GltfState, nodePath: NodePath | string, godotNode: Node, gltfNodeIndex: int64): null | GltfObjectModelProperty
        static registerGltfDocumentExtension(extension: GltfDocumentExtension, firstPriority?: boolean /* = false */): void
        static unregisterGltfDocumentExtension(extension: GltfDocumentExtension): void
        static getSupportedGltfExtensions(): PackedStringArray
        get imageFormat(): string
        set imageFormat(value: string)
        get lossyQuality(): float64
        set lossyQuality(value: float64)
        get fallbackImageFormat(): string
        set fallbackImageFormat(value: string)
        get fallbackImageQuality(): float64
        set fallbackImageQuality(value: float64)
        get rootNodeMode(): int64
        set rootNodeMode(value: int64)
        get visibilityMode(): int64
        set visibilityMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfDocument;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfDocument;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfDocumentExtension extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfDocumentExtension extends __NameMapResource {
        _import_preflight: "_importPreflight";
        _get_supported_extensions: "_getSupportedExtensions";
        _parse_node_extensions: "_parseNodeExtensions";
        _parse_image_data: "_parseImageData";
        _get_image_file_extension: "_getImageFileExtension";
        _parse_texture_json: "_parseTextureJson";
        _import_object_model_property: "_importObjectModelProperty";
        _import_post_parse: "_importPostParse";
        _import_pre_generate: "_importPreGenerate";
        _generate_scene_node: "_generateSceneNode";
        _import_node: "_importNode";
        _import_post: "_importPost";
        _export_preflight: "_exportPreflight";
        _convert_scene_node: "_convertSceneNode";
        _export_post_convert: "_exportPostConvert";
        _export_preserialize: "_exportPreserialize";
        _export_object_model_property: "_exportObjectModelProperty";
        _get_saveable_image_formats: "_getSaveableImageFormats";
        _serialize_image_to_bytes: "_serializeImageToBytes";
        _save_image_at_path: "_saveImageAtPath";
        _serialize_texture_json: "_serializeTextureJson";
        _export_node: "_exportNode";
        _export_post: "_exportPost";
    }
    class GltfDocumentExtension extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _importPreflight(state: GltfState, extensions: PackedStringArray | string[]): GError
        /* gdvirtual */ _getSupportedExtensions(): PackedStringArray
        /* gdvirtual */ _parseNodeExtensions(state: GltfState, gltfNode: GltfNode, extensions: GDictionary): GError
        /* gdvirtual */ _parseImageData(state: GltfState, imageData: PackedByteArray | byte[] | ArrayBuffer, mimeType: string, retImage: Image): GError
        /* gdvirtual */ _getImageFileExtension(): string
        /* gdvirtual */ _parseTextureJson(state: GltfState, textureJson: GDictionary, retGltfTexture: GltfTexture): GError
        /* gdvirtual */ _importObjectModelProperty(state: GltfState, splitJsonPointer: PackedStringArray | string[], partialPaths: GArray<NodePath>): null | GltfObjectModelProperty
        /* gdvirtual */ _importPostParse(state: GltfState): GError
        /* gdvirtual */ _importPreGenerate(state: GltfState): GError
        /* gdvirtual */ _generateSceneNode(state: GltfState, gltfNode: GltfNode, sceneParent: Node): null | Node3D
        /* gdvirtual */ _importNode(state: GltfState, gltfNode: GltfNode, json: GDictionary, node: Node): GError
        /* gdvirtual */ _importPost(state: GltfState, root: Node): GError
        /* gdvirtual */ _exportPreflight(state: GltfState, root: Node): GError
        /* gdvirtual */ _convertSceneNode(state: GltfState, gltfNode: GltfNode, sceneNode: Node): void
        /* gdvirtual */ _exportPostConvert(state: GltfState, root: Node): GError
        /* gdvirtual */ _exportPreserialize(state: GltfState): GError
        /* gdvirtual */ _exportObjectModelProperty(state: GltfState, nodePath: NodePath | string, godotNode: Node, gltfNodeIndex: int64, targetObject: GObject, targetDepth: int64): null | GltfObjectModelProperty
        /* gdvirtual */ _getSaveableImageFormats(): PackedStringArray
        /* gdvirtual */ _serializeImageToBytes(state: GltfState, image: Image, imageDict: GDictionary, imageFormat: string, lossyQuality: float64): PackedByteArray
        /* gdvirtual */ _saveImageAtPath(state: GltfState, image: Image, filePath: string, imageFormat: string, lossyQuality: float64): GError
        /* gdvirtual */ _serializeTextureJson(state: GltfState, textureJson: GDictionary, gltfTexture: GltfTexture, imageFormat: string): GError
        /* gdvirtual */ _exportNode(state: GltfState, gltfNode: GltfNode, json: GDictionary, node: Node): GError
        /* gdvirtual */ _exportPost(state: GltfState): GError
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfDocumentExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfDocumentExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfDocumentExtensionConvertImporterMesh extends __RPCMapGltfDocumentExtension {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfDocumentExtensionConvertImporterMesh extends __NameMapGltfDocumentExtension {
    }
    class GltfDocumentExtensionConvertImporterMesh extends GltfDocumentExtension {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfDocumentExtensionConvertImporterMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfDocumentExtensionConvertImporterMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfLight extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfLight extends __NameMapResource {
        from_node: "fromNode";
        to_node: "toNode";
        from_dictionary: "fromDictionary";
        to_dictionary: "toDictionary";
        get_additional_data: "getAdditionalData";
        set_additional_data: "setAdditionalData";
        light_type: "lightType";
        inner_cone_angle: "innerConeAngle";
        outer_cone_angle: "outerConeAngle";
    }
    class GltfLight extends Resource {
        constructor(identifier?: any)
        static fromNode(lightNode: Light3D): null | GltfLight
        toNode(): null | Light3D
        static fromDictionary(dictionary: GDictionary): null | GltfLight
        toDictionary(): GDictionary
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get color(): Color
        set color(value: Color)
        get intensity(): float64
        set intensity(value: float64)
        get lightType(): string
        set lightType(value: string)
        get range(): float64
        set range(value: float64)
        get innerConeAngle(): float64
        set innerConeAngle(value: float64)
        get outerConeAngle(): float64
        set outerConeAngle(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfLight;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfLight;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfMesh extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfMesh extends __NameMapResource {
        get_additional_data: "getAdditionalData";
        set_additional_data: "setAdditionalData";
        original_name: "originalName";
        blend_weights: "blendWeights";
        instance_materials: "instanceMaterials";
    }
    class GltfMesh extends Resource {
        constructor(identifier?: any)
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get originalName(): string
        set originalName(value: string)
        get mesh(): null | GObject
        set mesh(value: null | GObject)
        get blendWeights(): PackedFloat32Array
        set blendWeights(value: PackedFloat32Array | float32[])
        get instanceMaterials(): GArray
        set instanceMaterials(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfNode extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfNode extends __NameMapResource {
        append_child_index: "appendChildIndex";
        get_additional_data: "getAdditionalData";
        set_additional_data: "setAdditionalData";
        get_scene_node_path: "getSceneNodePath";
        original_name: "originalName";
    }
    class GltfNode extends Resource {
        constructor(identifier?: any)
        appendChildIndex(childIndex: int64): void
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        getSceneNodePath(gltfState: GltfState, handleSkeletons?: boolean /* = true */): NodePath
        get originalName(): string
        set originalName(value: string)
        get parent(): int64
        set parent(value: int64)
        get height(): int64
        set height(value: int64)
        get xform(): Transform3D
        set xform(value: Transform3D)
        get mesh(): int64
        set mesh(value: int64)
        get camera(): int64
        set camera(value: int64)
        get skin(): int64
        set skin(value: int64)
        get skeleton(): int64
        set skeleton(value: int64)
        get position(): Vector3
        set position(value: Vector3)
        get rotation(): Quaternion
        set rotation(value: Quaternion)
        get scale(): Vector3
        set scale(value: Vector3)
        get children(): PackedInt32Array
        set children(value: PackedInt32Array | int32[])
        get light(): int64
        set light(value: int64)
        get visible(): boolean
        set visible(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfNode;
    }
    namespace GltfObjectModelProperty {
        enum GltfObjectModelType {
            GltfObjectModelTypeUnknown = 0,
            GltfObjectModelTypeBool = 1,
            GltfObjectModelTypeFloat = 2,
            GltfObjectModelTypeFloatArray = 3,
            GltfObjectModelTypeFloat2 = 4,
            GltfObjectModelTypeFloat3 = 5,
            GltfObjectModelTypeFloat4 = 6,
            GltfObjectModelTypeFloat2X2 = 7,
            GltfObjectModelTypeFloat3X3 = 8,
            GltfObjectModelTypeFloat4X4 = 9,
            GltfObjectModelTypeInt = 10,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfObjectModelProperty extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfObjectModelProperty extends __NameMapRefCounted {
        append_node_path: "appendNodePath";
        append_path_to_property: "appendPathToProperty";
        get_accessor_type: "getAccessorType";
        has_node_paths: "hasNodePaths";
        has_json_pointers: "hasJsonPointers";
        set_types: "setTypes";
        gltf_to_godot_expression: "gltfToGodotExpression";
        godot_to_gltf_expression: "godotToGltfExpression";
        node_paths: "nodePaths";
        object_model_type: "objectModelType";
        json_pointers: "jsonPointers";
        variant_type: "variantType";
    }
    class GltfObjectModelProperty extends RefCounted {
        constructor(identifier?: any)
        appendNodePath(nodePath: NodePath | string): void
        appendPathToProperty(nodePath: NodePath | string, propName: StringName): void
        getAccessorType(): GltfAccessor.GltfAccessorType
        hasNodePaths(): boolean
        hasJsonPointers(): boolean
        setTypes(variantType: Variant.Type, objModelType: GltfObjectModelProperty.GltfObjectModelType): void
        get gltfToGodotExpression(): null | Expression
        set gltfToGodotExpression(value: null | Expression)
        get godotToGltfExpression(): null | Expression
        set godotToGltfExpression(value: null | Expression)
        get nodePaths(): GArray
        set nodePaths(value: GArray)
        get objectModelType(): int64
        set objectModelType(value: int64)
        get jsonPointers(): PackedStringArray
        set jsonPointers(value: PackedStringArray | string[])
        get variantType(): int64
        set variantType(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfObjectModelProperty;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfObjectModelProperty;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfPhysicsBody extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfPhysicsBody extends __NameMapResource {
        from_node: "fromNode";
        to_node: "toNode";
        from_dictionary: "fromDictionary";
        to_dictionary: "toDictionary";
        body_type: "bodyType";
        linear_velocity: "linearVelocity";
        angular_velocity: "angularVelocity";
        center_of_mass: "centerOfMass";
        inertia_diagonal: "inertiaDiagonal";
        inertia_orientation: "inertiaOrientation";
        inertia_tensor: "inertiaTensor";
    }
    class GltfPhysicsBody extends Resource {
        constructor(identifier?: any)
        static fromNode(bodyNode: CollisionObject3D): null | GltfPhysicsBody
        toNode(): null | CollisionObject3D
        static fromDictionary(dictionary: GDictionary): null | GltfPhysicsBody
        toDictionary(): GDictionary
        get bodyType(): string
        set bodyType(value: string)
        get mass(): float64
        set mass(value: float64)
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        get centerOfMass(): Vector3
        set centerOfMass(value: Vector3)
        get inertiaDiagonal(): Vector3
        set inertiaDiagonal(value: Vector3)
        get inertiaOrientation(): Quaternion
        set inertiaOrientation(value: Quaternion)
        get inertiaTensor(): Basis
        set inertiaTensor(value: Basis)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfPhysicsBody;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfPhysicsBody;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfPhysicsShape extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfPhysicsShape extends __NameMapResource {
        from_node: "fromNode";
        to_node: "toNode";
        from_resource: "fromResource";
        to_resource: "toResource";
        from_dictionary: "fromDictionary";
        to_dictionary: "toDictionary";
        shape_type: "shapeType";
        is_trigger: "isTrigger";
        mesh_index: "meshIndex";
        importer_mesh: "importerMesh";
    }
    class GltfPhysicsShape extends Resource {
        constructor(identifier?: any)
        static fromNode(shapeNode: CollisionShape3D): null | GltfPhysicsShape
        toNode(cacheShapes?: boolean /* = false */): null | CollisionShape3D
        static fromResource(shapeResource: Shape3D): null | GltfPhysicsShape
        toResource(cacheShapes?: boolean /* = false */): null | Shape3D
        static fromDictionary(dictionary: GDictionary): null | GltfPhysicsShape
        toDictionary(): GDictionary
        get shapeType(): string
        set shapeType(value: string)
        get size(): Vector3
        set size(value: Vector3)
        get radius(): float64
        set radius(value: float64)
        get height(): float64
        set height(value: float64)
        get isTrigger(): boolean
        set isTrigger(value: boolean)
        get meshIndex(): int64
        set meshIndex(value: int64)
        get importerMesh(): null | ImporterMesh
        set importerMesh(value: null | ImporterMesh)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfPhysicsShape;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfPhysicsShape;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfSkeleton extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfSkeleton extends __NameMapResource {
        get_godot_skeleton: "getGodotSkeleton";
        get_bone_attachment_count: "getBoneAttachmentCount";
        get_bone_attachment: "getBoneAttachment";
        unique_names: "uniqueNames";
        godot_bone_node: "godotBoneNode";
    }
    class GltfSkeleton extends Resource {
        constructor(identifier?: any)
        getGodotSkeleton(): null | Skeleton3D
        getBoneAttachmentCount(): int64
        getBoneAttachment(idx: int64): null | BoneAttachment3D
        get joints(): PackedInt32Array
        set joints(value: PackedInt32Array | int32[])
        get roots(): PackedInt32Array
        set roots(value: PackedInt32Array | int32[])
        get uniqueNames(): GArray
        set uniqueNames(value: GArray)
        get godotBoneNode(): GDictionary
        set godotBoneNode(value: GDictionary)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfSkeleton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfSkeleton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfSkin extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfSkin extends __NameMapResource {
        skin_root: "skinRoot";
        joints_original: "jointsOriginal";
        inverse_binds: "inverseBinds";
        non_joints: "nonJoints";
        joint_i_to_bone_i: "jointIToBoneI";
        joint_i_to_name: "jointIToName";
        godot_skin: "godotSkin";
    }
    class GltfSkin extends Resource {
        constructor(identifier?: any)
        get skinRoot(): int64
        set skinRoot(value: int64)
        get jointsOriginal(): PackedInt32Array
        set jointsOriginal(value: PackedInt32Array | int32[])
        get inverseBinds(): GArray
        set inverseBinds(value: GArray)
        get joints(): PackedInt32Array
        set joints(value: PackedInt32Array | int32[])
        get nonJoints(): PackedInt32Array
        set nonJoints(value: PackedInt32Array | int32[])
        get roots(): PackedInt32Array
        set roots(value: PackedInt32Array | int32[])
        get skeleton(): int64
        set skeleton(value: int64)
        get jointIToBoneI(): GDictionary
        set jointIToBoneI(value: GDictionary)
        get jointIToName(): GDictionary
        set jointIToName(value: GDictionary)
        get godotSkin(): null | Skin
        set godotSkin(value: null | Skin)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfSkin;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfSkin;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfSpecGloss extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfSpecGloss extends __NameMapResource {
        diffuse_img: "diffuseImg";
        diffuse_factor: "diffuseFactor";
        gloss_factor: "glossFactor";
        specular_factor: "specularFactor";
        spec_gloss_img: "specGlossImg";
    }
    class GltfSpecGloss extends Resource {
        constructor(identifier?: any)
        get diffuseImg(): null | GObject
        set diffuseImg(value: null | GObject)
        get diffuseFactor(): Color
        set diffuseFactor(value: Color)
        get glossFactor(): float64
        set glossFactor(value: float64)
        get specularFactor(): Color
        set specularFactor(value: Color)
        get specGlossImg(): null | GObject
        set specGlossImg(value: null | GObject)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfSpecGloss;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfSpecGloss;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfState extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfState extends __NameMapResource {
        add_used_extension: "addUsedExtension";
        append_data_to_buffers: "appendDataToBuffers";
        append_gltf_node: "appendGltfNode";
        get_animation_players_count: "getAnimationPlayersCount";
        get_animation_player: "getAnimationPlayer";
        get_scene_node: "getSceneNode";
        get_node_index: "getNodeIndex";
        get_additional_data: "getAdditionalData";
        set_additional_data: "setAdditionalData";
        major_version: "majorVersion";
        minor_version: "minorVersion";
        glb_data: "glbData";
        use_named_skin_binds: "useNamedSkinBinds";
        buffer_views: "bufferViews";
        scene_name: "sceneName";
        base_path: "basePath";
        filename: "fileName";
        root_nodes: "rootNodes";
        texture_samplers: "textureSamplers";
        unique_names: "uniqueNames";
        unique_animation_names: "uniqueAnimationNames";
        create_animations: "createAnimations";
        import_as_skeleton_bones: "importAsSkeletonBones";
        handle_binary_image: "handleBinaryImage";
        bake_fps: "bakeFps";
    }
    class GltfState extends Resource {
        static readonly HANDLE_BINARY_DISCARD_TEXTURES = 0
        static readonly HANDLE_BINARY_EXTRACT_TEXTURES = 1
        static readonly HANDLE_BINARY_EMBED_AS_BASISU = 2
        static readonly HANDLE_BINARY_EMBED_AS_UNCOMPRESSED = 3
        constructor(identifier?: any)
        addUsedExtension(extensionName: string, required: boolean): void
        appendDataToBuffers(data: PackedByteArray | byte[] | ArrayBuffer, deduplication: boolean): int64
        appendGltfNode(gltfNode: GltfNode, godotSceneNode: Node, parentNodeIndex: int64): int64
        getAnimationPlayersCount(idx: int64): int64
        getAnimationPlayer(idx: int64): null | AnimationPlayer
        getSceneNode(idx: int64): null | Node
        getNodeIndex(sceneNode: Node): int64
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get json(): GDictionary
        set json(value: GDictionary)
        get majorVersion(): int64
        set majorVersion(value: int64)
        get minorVersion(): int64
        set minorVersion(value: int64)
        get copyright(): string
        set copyright(value: string)
        get glbData(): PackedByteArray
        set glbData(value: PackedByteArray | byte[] | ArrayBuffer)
        get useNamedSkinBinds(): boolean
        set useNamedSkinBinds(value: boolean)
        get nodes(): GArray
        set nodes(value: GArray)
        get buffers(): GArray
        set buffers(value: GArray)
        get bufferViews(): GArray
        set bufferViews(value: GArray)
        get accessors(): GArray
        set accessors(value: GArray)
        get meshes(): GArray
        set meshes(value: GArray)
        get materials(): GArray
        set materials(value: GArray)
        get sceneName(): string
        set sceneName(value: string)
        get basePath(): string
        set basePath(value: string)
        get fileName(): string
        set fileName(value: string)
        get rootNodes(): PackedInt32Array
        set rootNodes(value: PackedInt32Array | int32[])
        get textures(): GArray
        set textures(value: GArray)
        get textureSamplers(): GArray
        set textureSamplers(value: GArray)
        get images(): GArray
        set images(value: GArray)
        get skins(): GArray
        set skins(value: GArray)
        get cameras(): GArray
        set cameras(value: GArray)
        get lights(): GArray
        set lights(value: GArray)
        get uniqueNames(): GArray
        set uniqueNames(value: GArray)
        get uniqueAnimationNames(): GArray
        set uniqueAnimationNames(value: GArray)
        get skeletons(): GArray
        set skeletons(value: GArray)
        get createAnimations(): boolean
        set createAnimations(value: boolean)
        get importAsSkeletonBones(): boolean
        set importAsSkeletonBones(value: boolean)
        get animations(): GArray
        set animations(value: GArray)
        get handleBinaryImage(): int64
        set handleBinaryImage(value: int64)
        get bakeFps(): float64
        set bakeFps(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfState;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfState;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfTexture extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfTexture extends __NameMapResource {
        src_image: "srcImage";
    }
    class GltfTexture extends Resource {
        constructor(identifier?: any)
        get srcImage(): int64
        set srcImage(value: int64)
        get sampler(): int64
        set sampler(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGltfTextureSampler extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGltfTextureSampler extends __NameMapResource {
        mag_filter: "magFilter";
        min_filter: "minFilter";
        wrap_s: "wrapS";
        wrap_t: "wrapT";
    }
    class GltfTextureSampler extends Resource {
        constructor(identifier?: any)
        get magFilter(): int64
        set magFilter(value: int64)
        get minFilter(): int64
        set minFilter(value: int64)
        get wrapS(): int64
        set wrapS(value: int64)
        get wrapT(): int64
        set wrapT(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGltfTextureSampler;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGltfTextureSampler;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGLabel extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGLabel extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_glabel.html */
    class GLabel extends GComponent {
        constructor(identifier?: any)
        setTitle(title: string): void
        getTitle(): string
        setTitleColor(color: Color): void
        getTitleColor(): Color
        setTitleFontSize(size: int64): void
        getTitleFontSize(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGLabel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGLabel;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGList extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGList extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_glist.html */
    class GList extends GComponent {
        constructor(identifier?: any)
        doRefreshVirtualListDeferred(): void
        setDefaultItem(url: string): void
        getDefaultItem(): string
        removeChildrenToPool(beginIndex?: int64 /* = 0 */, endIndex?: int64 /* = -1 */): void
        scrollToView(index: int64, ani?: boolean /* = false */, setFirst?: boolean /* = false */): void
        setSelectionController(controller: GController): void
        getSelectionController(): null | GController
        clearSelection(_unnamedArg0?: boolean /* = true */): void
        setItemRenderer(callable: Callable): void
        setItemProvider(callable: Callable): void
        addItemFromPool(): null | GObject
        setVirtual(): void
        setVirtualAndLoop(): void
        setNumItems(value: int64): void
        getNumItems(): int64
        getFirstChildInView(): int64
        addSelection(index: int64, scrollToView?: boolean /* = false */): void
        get columnCount(): int64
        set columnCount(value: int64)
        get lineCount(): int64
        set lineCount(value: int64)
        get columnGap(): int64
        set columnGap(value: int64)
        get lineGap(): int64
        set lineGap(value: int64)
        get autoResizeItem(): boolean
        set autoResizeItem(value: boolean)
        get layout(): int64
        set layout(value: int64)
        get selectedIndex(): int64
        set selectedIndex(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGList;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGList;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGLoader extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGLoader extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gloader.html */
    class GLoader extends GObject {
        constructor(identifier?: any)
        setURL(url: string): void
        getURL(): string
        getComponent(): null | GComponent
        get align(): int64
        set align(value: int64)
        get verticalAlign(): int64
        set verticalAlign(value: int64)
        get autoSize(): boolean
        set autoSize(value: boolean)
        get fill(): int64
        set fill(value: int64)
        get shrinkOnly(): boolean
        set shrinkOnly(value: boolean)
        get playing(): boolean
        set playing(value: boolean)
        get frame(): int64
        set frame(value: int64)
        get fillMethod(): int64
        set fillMethod(value: int64)
        get fillOrigin(): int64
        set fillOrigin(value: int64)
        get fillAmount(): float64
        set fillAmount(value: float64)
        get imageColor(): Color
        set imageColor(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGLoader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGLoader;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGLoader3D extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGLoader3D extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gloader3d.html */
    class GLoader3D extends GObject {
        constructor(identifier?: any)
        setURL(url: string): void
        getURL(): string
        setAnimationName(name: string): void
        getPlayingAnimationName(): string
        setSkinName(name: string): void
        getSkinName(): string
        isPlaying(): boolean
        setPlaying(value: boolean): void
        setFrame(frame: int64): void
        getFrame(): int64
        play(name: string): void
        stop(): void
        dispose(): void
        getContent(): null | Node
        setContent(node: Node): void
        get align(): int64
        set align(value: int64)
        get verticalAlign(): int64
        set verticalAlign(value: int64)
        get autoSize(): boolean
        set autoSize(value: boolean)
        get fill(): int64
        set fill(value: int64)
        get shrinkOnly(): boolean
        set shrinkOnly(value: boolean)
        get loop(): boolean
        set loop(value: boolean)
        get color(): Color
        set color(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGLoader3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGLoader3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGMovieClip extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGMovieClip extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gmovieclip.html */
    class GMovieClip extends GObject {
        constructor(identifier?: any)
        setPlaying(value: boolean): void
        isPlaying(): boolean
        setFrame(frame: int64): void
        getFrame(): int64
        setTimeScale(scale: float64): void
        getTimeScale(): float64
        advance(time: float64): void
        setFlip(flip: int64): void
        getFlip(): int64
        setColor(color: Color): void
        getColor(): Color
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGMovieClip;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGMovieClip;
    }
    namespace GObject {
        enum ConnectFlags {
            ConnectDeferred = 1,
            ConnectPersist = 2,
            ConnectOneShot = 4,
            ConnectReferenceCounted = 8,
            ConnectAppendSourceObject = 16,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGObject {
        _to_string: "_toString";
        _get_property_list: "_getPropertyList";
        _validate_property: "_validateProperty";
        _property_can_revert: "_propertyCanRevert";
        _property_get_revert: "_propertyGetRevert";
        _iter_init: "_iterInit";
        _iter_next: "_iterNext";
        _iter_get: "_iterGet";
        get_class: "getClass";
        is_class: "isClass";
        set_indexed: "setIndexed";
        get_indexed: "getIndexed";
        get_property_list: "getPropertyList";
        get_method_list: "getMethodList";
        property_can_revert: "propertyCanRevert";
        property_get_revert: "propertyGetRevert";
        to_string: "toString";
        get_instance_id: "getInstanceId";
        set_script: "setScript";
        get_script: "getScript";
        set_meta: "setMeta";
        remove_meta: "removeMeta";
        get_meta: "getMeta";
        has_meta: "hasMeta";
        get_meta_list: "getMetaList";
        add_user_signal: "addUserSignal";
        has_user_signal: "hasUserSignal";
        remove_user_signal: "removeUserSignal";
        emit_signal: "emitSignal";
        call_deferred: "callDeferred";
        set_deferred: "setDeferred";
        has_method: "hasMethod";
        get_method_argument_count: "getMethodArgumentCount";
        has_signal: "hasSignal";
        get_signal_list: "getSignalList";
        get_signal_connection_list: "getSignalConnectionList";
        get_incoming_connections: "getIncomingConnections";
        is_connected: "isConnected";
        has_connections: "hasConnections";
        set_block_signals: "setBlockSignals";
        is_blocking_signals: "isBlockingSignals";
        notify_property_list_changed: "notifyPropertyListChanged";
        set_message_translation: "setMessageTranslation";
        can_translate_messages: "canTranslateMessages";
        tr_n: "trN";
        get_translation_domain: "getTranslationDomain";
        set_translation_domain: "setTranslationDomain";
        is_queued_for_deletion: "isQueuedForDeletion";
        cancel_free: "cancelFree";
        script_changed: "scriptChanged";
        property_list_changed: "propertyListChanged";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gobject.html */
    class GObject {
        static readonly NOTIFICATION_POSTINITIALIZE = 0
        static readonly NOTIFICATION_PREDELETE = 1
        static readonly NOTIFICATION_EXTENSION_RELOADED = 2
        constructor(identifier?: any)
        /* gdvirtual */ free(): void
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _toString(): string
        /* gdvirtual */ _notification(what: int64): void
        /* gdvirtual */ _set(property: StringName, value: any): boolean
        /* gdvirtual */ _get(property: StringName): any
        /* gdvirtual */ _getPropertyList(): GArray<GDictionary>
        /* gdvirtual */ _validateProperty(property: GDictionary): void
        /* gdvirtual */ _propertyCanRevert(property: StringName): boolean
        /* gdvirtual */ _propertyGetRevert(property: StringName): any
        /* gdvirtual */ _iterInit(iter: GArray): boolean
        /* gdvirtual */ _iterNext(iter: GArray): boolean
        /* gdvirtual */ _iterGet(iter: any): any
        getClass(): string
        isClass(class_: string): boolean
        set(property: StringName, value: any): void
        get(property: StringName): any
        setIndexed(propertyPath: NodePath | string, value: any): void
        getIndexed(propertyPath: NodePath | string): any
        getPropertyList(): GArray<GDictionary<PropertyInfo>>
        getMethodList(): GArray<GDictionary>
        propertyCanRevert(property: StringName): boolean
        propertyGetRevert(property: StringName): any
        notification(what: int64, reversed?: boolean /* = false */): void
        ["toString"]: () => string
        getInstanceId(): int64
        setScript(script: null | Script): void
        getScript(): null | Script
        setMeta(name: StringName, value: any): void
        removeMeta(name: StringName): void
        getMeta(name: StringName, default_?: any /* = {} */): any
        hasMeta(name: StringName): boolean
        getMetaList(): GArray<StringName>
        addUserSignal(signal: string, arguments_?: GArray): void
        hasUserSignal(signal: StringName): boolean
        removeUserSignal(signal: StringName): void
        emitSignal(signal: StringName, ...varargs: any[]): GError
        call<M extends GodotNames<this>>(method: M, ...args: ResolveGodotNameParameters<this, NoInfer<M>>): ResolveGodotReturnType<this, NoInfer<M>>
        callDeferred<M extends GodotNames<this>>(method: M, ...args: ResolveGodotNameParameters<this, NoInfer<M>>): void
        setDeferred<P extends GodotNames<this>>(property: P, value: ResolveGodotNameValue<this,  NoInfer<P>>): void
        callv<M extends GodotNames<this>>(method: M, argArray: GArray<ResolveGodotNameParameters<this, NoInfer<M>>>): ResolveGodotReturnType<this, NoInfer<M>>
        hasMethod(method: StringName): boolean
        getMethodArgumentCount(method: StringName): int64
        hasSignal(signal: StringName): boolean
        getSignalList(): GArray<GDictionary>
        getSignalConnectionList(signal: StringName): GArray<GDictionary>
        getIncomingConnections(): GArray<GDictionary>
        connect(signal: StringName, callable: Callable, flags?: int64 /* = 0 */): GError
        disconnect(signal: StringName, callable: Callable): void
        isConnected(signal: StringName, callable: Callable): boolean
        hasConnections(signal: StringName): boolean
        setBlockSignals(enable: boolean): void
        isBlockingSignals(): boolean
        notifyPropertyListChanged(): void
        setMessageTranslation(enable: boolean): void
        canTranslateMessages(): boolean
        tr(message: StringName, context?: StringName /* = '' */): string
        trN(message: StringName, pluralMessage: StringName, n: int64, context?: StringName /* = '' */): string
        getTranslationDomain(): StringName
        setTranslationDomain(domain: StringName): void
        isQueuedForDeletion(): boolean
        cancelFree(): void
        readonly scriptChanged: Signal<() => void>
        readonly propertyListChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGObject;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGObject;
    }
    namespace GpuParticles2D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
            DrawOrderReverseLifetime = 2,
        }
        enum EmitFlags {
            EmitFlagPosition = 1,
            EmitFlagRotationScale = 2,
            EmitFlagVelocity = 4,
            EmitFlagColor = 8,
            EmitFlagCustom = 16,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticles2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticles2D extends __NameMapNode2D {
        request_particles_process: "requestParticlesProcess";
        capture_rect: "captureRect";
        emit_particle: "emitParticle";
        convert_from_particles: "convertFromParticles";
        amount_ratio: "amountRatio";
        sub_emitter: "subEmitter";
        interp_to_end: "interpToEnd";
        one_shot: "oneShot";
        speed_scale: "speedScale";
        use_fixed_seed: "useFixedSeed";
        fixed_fps: "fixedFps";
        fract_delta: "fractDelta";
        collision_base_size: "collisionBaseSize";
        visibility_rect: "visibilityRect";
        local_coords: "localCoords";
        draw_order: "drawOrder";
        trail_enabled: "trailEnabled";
        trail_lifetime: "trailLifetime";
        trail_sections: "trailSections";
        trail_section_subdivisions: "trailSectionSubdivisions";
        process_material: "processMaterial";
    }
    class GpuParticles2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        requestParticlesProcess(processTime: float64): void
        captureRect(): Rect2
        restart(keepSeed?: boolean /* = false */): void
        emitParticle(xform: Transform2D, velocity: Vector2, color: Color, custom: Color, flags: int64): void
        convertFromParticles(particles: Node): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get amountRatio(): float64
        set amountRatio(value: float64)
        get subEmitter(): NodePath
        set subEmitter(value: NodePath | string)
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        get lifetime(): float64
        set lifetime(value: float64)
        get interpToEnd(): float64
        set interpToEnd(value: float64)
        get oneShot(): boolean
        set oneShot(value: boolean)
        get preprocess(): float64
        set preprocess(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        get explosiveness(): float64
        set explosiveness(value: float64)
        get randomness(): float64
        set randomness(value: float64)
        get useFixedSeed(): boolean
        set useFixedSeed(value: boolean)
        get seed(): int64
        set seed(value: int64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get interpolate(): boolean
        set interpolate(value: boolean)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get collisionBaseSize(): float64
        set collisionBaseSize(value: float64)
        get visibilityRect(): Rect2
        set visibilityRect(value: Rect2)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get trailEnabled(): boolean
        set trailEnabled(value: boolean)
        get trailLifetime(): float64
        set trailLifetime(value: float64)
        get trailSections(): int64
        set trailSections(value: int64)
        get trailSectionSubdivisions(): int64
        set trailSectionSubdivisions(value: int64)
        get processMaterial(): null | ParticleProcessMaterial | ShaderMaterial
        set processMaterial(value: null | ParticleProcessMaterial | ShaderMaterial)
        readonly finished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticles2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticles2D;
    }
    namespace GpuParticles3D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
            DrawOrderReverseLifetime = 2,
            DrawOrderViewDepth = 3,
        }
        enum EmitFlags {
            EmitFlagPosition = 1,
            EmitFlagRotationScale = 2,
            EmitFlagVelocity = 4,
            EmitFlagColor = 8,
            EmitFlagCustom = 16,
        }
        enum TransformAlign {
            TransformAlignDisabled = 0,
            TransformAlignZBillboard = 1,
            TransformAlignYToVelocity = 2,
            TransformAlignZBillboardYToVelocity = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticles3D extends __RPCMapGeometryInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticles3D extends __NameMapGeometryInstance3D {
        set_draw_pass_mesh: "setDrawPassMesh";
        get_draw_pass_mesh: "getDrawPassMesh";
        capture_aabb: "captureAabb";
        emit_particle: "emitParticle";
        convert_from_particles: "convertFromParticles";
        request_particles_process: "requestParticlesProcess";
        amount_ratio: "amountRatio";
        sub_emitter: "subEmitter";
        interp_to_end: "interpToEnd";
        one_shot: "oneShot";
        speed_scale: "speedScale";
        use_fixed_seed: "useFixedSeed";
        fixed_fps: "fixedFps";
        fract_delta: "fractDelta";
        collision_base_size: "collisionBaseSize";
        visibility_aabb: "visibilityAabb";
        local_coords: "localCoords";
        draw_order: "drawOrder";
        transform_align: "transformAlign";
        trail_enabled: "trailEnabled";
        trail_lifetime: "trailLifetime";
        process_material: "processMaterial";
        draw_passes: "drawPasses";
        draw_pass_1: "drawPass1";
        draw_pass_2: "drawPass2";
        draw_pass_3: "drawPass3";
        draw_pass_4: "drawPass4";
        draw_skin: "drawSkin";
    }
    class GpuParticles3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        static readonly MAX_DRAW_PASSES = 4
        constructor(identifier?: any)
        setDrawPassMesh(pass: int64, mesh: Mesh): void
        getDrawPassMesh(pass: int64): null | Mesh
        restart(keepSeed?: boolean /* = false */): void
        captureAabb(): Aabb
        emitParticle(xform: Transform3D, velocity: Vector3, color: Color, custom: Color, flags: int64): void
        convertFromParticles(particles: Node): void
        requestParticlesProcess(processTime: float64): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get amountRatio(): float64
        set amountRatio(value: float64)
        get subEmitter(): NodePath
        set subEmitter(value: NodePath | string)
        get lifetime(): float64
        set lifetime(value: float64)
        get interpToEnd(): float64
        set interpToEnd(value: float64)
        get oneShot(): boolean
        set oneShot(value: boolean)
        get preprocess(): float64
        set preprocess(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        get explosiveness(): float64
        set explosiveness(value: float64)
        get randomness(): float64
        set randomness(value: float64)
        get useFixedSeed(): boolean
        set useFixedSeed(value: boolean)
        get seed(): int64
        set seed(value: int64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get interpolate(): boolean
        set interpolate(value: boolean)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get collisionBaseSize(): float64
        set collisionBaseSize(value: float64)
        get visibilityAabb(): Aabb
        set visibilityAabb(value: Aabb)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get transformAlign(): int64
        set transformAlign(value: int64)
        get trailEnabled(): boolean
        set trailEnabled(value: boolean)
        get trailLifetime(): float64
        set trailLifetime(value: float64)
        get processMaterial(): null | ParticleProcessMaterial | ShaderMaterial
        set processMaterial(value: null | ParticleProcessMaterial | ShaderMaterial)
        get drawPasses(): int64
        set drawPasses(value: int64)
        get drawPass1(): null | Mesh
        set drawPass1(value: null | Mesh)
        get drawPass2(): null | Mesh
        set drawPass2(value: null | Mesh)
        get drawPass3(): null | Mesh
        set drawPass3(value: null | Mesh)
        get drawPass4(): null | Mesh
        set drawPass4(value: null | Mesh)
        get drawSkin(): null | Skin
        set drawSkin(value: null | Skin)
        readonly finished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticles3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticles3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesAttractor3D extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesAttractor3D extends __NameMapVisualInstance3D {
        cull_mask: "cullMask";
    }
    class GpuParticlesAttractor3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        get strength(): float64
        set strength(value: float64)
        get attenuation(): float64
        set attenuation(value: float64)
        get directionality(): float64
        set directionality(value: float64)
        get cullMask(): int64
        set cullMask(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesAttractor3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesAttractor3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesAttractorBox3D extends __RPCMapGpuParticlesAttractor3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesAttractorBox3D extends __NameMapGpuParticlesAttractor3D {
    }
    class GpuParticlesAttractorBox3D<Map extends NodePathMap = any> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesAttractorBox3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesAttractorBox3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesAttractorSphere3D extends __RPCMapGpuParticlesAttractor3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesAttractorSphere3D extends __NameMapGpuParticlesAttractor3D {
    }
    class GpuParticlesAttractorSphere3D<Map extends NodePathMap = any> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesAttractorSphere3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesAttractorSphere3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesAttractorVectorField3D extends __RPCMapGpuParticlesAttractor3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesAttractorVectorField3D extends __NameMapGpuParticlesAttractor3D {
    }
    class GpuParticlesAttractorVectorField3D<Map extends NodePathMap = any> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
        get texture(): null | Texture3D
        set texture(value: null | Texture3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesAttractorVectorField3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesAttractorVectorField3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesCollision3D extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesCollision3D extends __NameMapVisualInstance3D {
        cull_mask: "cullMask";
    }
    class GpuParticlesCollision3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        get cullMask(): int64
        set cullMask(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesCollision3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesCollision3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesCollisionBox3D extends __RPCMapGpuParticlesCollision3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesCollisionBox3D extends __NameMapGpuParticlesCollision3D {
    }
    class GpuParticlesCollisionBox3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesCollisionBox3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesCollisionBox3D;
    }
    namespace GpuParticlesCollisionHeightField3D {
        enum Resolution {
            Resolution256 = 0,
            Resolution512 = 1,
            Resolution1024 = 2,
            Resolution2048 = 3,
            Resolution4096 = 4,
            Resolution8192 = 5,
            ResolutionMax = 6,
        }
        enum UpdateMode {
            UpdateModeWhenMoved = 0,
            UpdateModeAlways = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesCollisionHeightField3D extends __RPCMapGpuParticlesCollision3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesCollisionHeightField3D extends __NameMapGpuParticlesCollision3D {
        set_heightfield_mask_value: "setHeightfieldMaskValue";
        get_heightfield_mask_value: "getHeightfieldMaskValue";
        update_mode: "updateMode";
        follow_camera_enabled: "followCameraEnabled";
        heightfield_mask: "heightfieldMask";
    }
    class GpuParticlesCollisionHeightField3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        constructor(identifier?: any)
        setHeightfieldMaskValue(layerNumber: int64, value: boolean): void
        getHeightfieldMaskValue(layerNumber: int64): boolean
        get size(): Vector3
        set size(value: Vector3)
        get resolution(): int64
        set resolution(value: int64)
        get updateMode(): int64
        set updateMode(value: int64)
        get followCameraEnabled(): boolean
        set followCameraEnabled(value: boolean)
        get heightfieldMask(): int64
        set heightfieldMask(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesCollisionHeightField3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesCollisionHeightField3D;
    }
    namespace GpuParticlesCollisionSdf3D {
        enum Resolution {
            Resolution16 = 0,
            Resolution32 = 1,
            Resolution64 = 2,
            Resolution128 = 3,
            Resolution256 = 4,
            Resolution512 = 5,
            ResolutionMax = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesCollisionSdf3D extends __RPCMapGpuParticlesCollision3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesCollisionSdf3D extends __NameMapGpuParticlesCollision3D {
        set_bake_mask_value: "setBakeMaskValue";
        get_bake_mask_value: "getBakeMaskValue";
        bake_mask: "bakeMask";
    }
    class GpuParticlesCollisionSdf3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        constructor(identifier?: any)
        setBakeMaskValue(layerNumber: int64, value: boolean): void
        getBakeMaskValue(layerNumber: int64): boolean
        get size(): Vector3
        set size(value: Vector3)
        get resolution(): int64
        set resolution(value: int64)
        get thickness(): float64
        set thickness(value: float64)
        get bakeMask(): int64
        set bakeMask(value: int64)
        get texture(): null | Texture3D
        set texture(value: null | Texture3D)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesCollisionSdf3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesCollisionSdf3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGpuParticlesCollisionSphere3D extends __RPCMapGpuParticlesCollision3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGpuParticlesCollisionSphere3D extends __NameMapGpuParticlesCollision3D {
    }
    class GpuParticlesCollisionSphere3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGpuParticlesCollisionSphere3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGpuParticlesCollisionSphere3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGPopupMenu extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGPopupMenu extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gpopupmenu.html */
    class GPopupMenu extends RefCounted {
        constructor(identifier?: any)
        static create(): GPopupMenu
        addItem(caption: string): null | GButton
        addSeperator(): void
        clearItems(): void
        getItemCount(): int64
        getList(): null | GList
        getContentPane(): null | GComponent
        getItemName(index: int64): string
        setItemText(name: string, caption: string): void
        setItemVisible(name: string, visible: boolean): void
        removeItem(name: string): boolean
        setItemGrayed(name: string, grayed: boolean): void
        setItemCheckable(name: string, checkable: boolean): void
        setItemChecked(name: string, check: boolean): void
        isItemChecked(name: string): boolean
        show(): void
        showMenuAt(target: GObject, dir: int64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGPopupMenu;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGPopupMenu;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGProgressBar extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGProgressBar extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gprogressbar.html */
    class GProgressBar extends GComponent {
        constructor(identifier?: any)
        tweenValue(value: float64, duration: float64): void
        get min(): float64
        set min(value: float64)
        get max(): float64
        set max(value: float64)
        get value(): float64
        set value(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGProgressBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGProgressBar;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGRichTextField extends __RPCMapGTextField {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGRichTextField extends __NameMapGTextField {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_grichtextfield.html */
    class GRichTextField extends GTextField {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGRichTextField;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGRichTextField;
    }
    namespace GRoot {
        enum ScreenMatchMode {
            MatchWidthOrHeight = 0,
            MatchWidth = 1,
            MatchHeight = 2,
            MatchFill = 3,
        }
        enum PopupDirection {
            Auto = 0,
            Up = 1,
            Down = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGRoot extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGRoot extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_groot.html */
    class GRoot extends GComponent {
        constructor(identifier?: any)
        static create(parent: Node, zOrder?: int64 /* = 1000 */): GRoot
        static createDeferred(parent: Node, zOrder?: int64 /* = 1000 */): GRoot
        static getInstance(): null | GRoot
        showWindow(win: GWindow): void
        hideWindow(win: GWindow): void
        hideWindowImmediately(win: GWindow): void
        bringToFront(win: GWindow): void
        getTopWindow(): null | GWindow
        showModalWait(): void
        closeModalWait(): void
        closeAllExceptModals(): void
        closeAllWindows(): void
        getModalWaitingPane(): null | GObject
        getModalLayer(): null | GGraph
        hasModalWindow(): boolean
        isModalWaiting(): boolean
        getTouchPosition(touchId?: int64 /* = 0 */): Vector2
        getTouchTarget(): null | GObject
        worldToRoot(pt: Vector2): Vector2
        rootToWorld(pt: Vector2): Vector2
        hasAnyPopup(): boolean
        hidePopup(): void
        showTooltips(msg: string): void
        showTooltipsWin(tooltipWin: GObject): void
        hideTooltips(): void
        playSound(url: string, volumeScale?: float64 /* = 1 */): void
        setContentScaleFactor(designWidth: int64, designHeight: int64, matchMode: int64): void
        onWindowSizeChanged(): void
        getDisplayObject(): null | Node
        showPopup(popup: GObject, target: GObject, dir: int64): void
        showPopupSimple(popup: GObject): void
        get soundEnabled(): boolean
        set soundEnabled(value: boolean)
        get soundVolumeScale(): float64
        set soundVolumeScale(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGRoot;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGRoot;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGScrollBar extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGScrollBar extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gscrollbar.html */
    class GScrollBar extends GComponent {
        constructor(identifier?: any)
        setDisplayPerc(value: float64): void
        setScrollPerc(value: float64): void
        getMinSize(): float64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGScrollBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGScrollBar;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGSlider extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGSlider extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gslider.html */
    class GSlider extends GComponent {
        constructor(identifier?: any)
        get min(): float64
        set min(value: float64)
        get max(): float64
        set max(value: float64)
        get value(): float64
        set value(value: float64)
        get wholeNumbers(): boolean
        set wholeNumbers(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGSlider;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGSlider;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGTextField extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGTextField extends __NameMapGObject {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gtextfield.html */
    class GTextField extends GObject {
        constructor(identifier?: any)
        setColor(color: Color): void
        getColor(): Color
        setFontSize(size: float64): void
        getFontSize(): float64
        setSingleLine(value: boolean): void
        isSingleLine(): boolean
        setAutoSize(value: int64): void
        getAutoSize(): int64
        setUBBEnabled(value: boolean): void
        isUBBEnabled(): boolean
        setTemplateVars(vars: GDictionary): void
        getTextSize(): Vector2
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGTextField;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGTextField;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGTextInput extends __RPCMapGTextField {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGTextInput extends __NameMapGTextField {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gtextinput.html */
    class GTextInput extends GTextField {
        constructor(identifier?: any)
        setPrompt(value: string): void
        setPassword(value: boolean): void
        setKeyboardType(value: int64): void
        setMaxLength(value: int64): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGTextInput;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGTextInput;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGTree extends __RPCMapGList {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGTree extends __NameMapGList {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gtree.html */
    class GTree extends GList {
        constructor(identifier?: any)
        getRootNode(): null | GTreeNode
        getSelectedNode(): null | GTreeNode
        selectNode(node: GTreeNode, scrollToView?: boolean /* = false */): void
        unselectNode(node: GTreeNode): void
        expandAll(folderNode: GTreeNode): void
        collapseAll(folderNode: GTreeNode): void
        setTreeNodeRender(callable: Callable): void
        get indent(): int64
        set indent(value: int64)
        get clickToExpand(): int64
        set clickToExpand(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGTree;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGTree;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGTreeNode extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGTreeNode extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gtreenode.html */
    class GTreeNode extends RefCounted {
        constructor(identifier?: any)
        setText(text: string): void
        getText(): string
        setIcon(icon: string): void
        getIcon(): string
        isFolder(): boolean
        isExpanded(): boolean
        setExpanded(value: boolean): void
        getParent(): null | GTreeNode
        getTree(): null | GTree
        getCell(): null | GComponent
        getData(): any
        setData(value: any): void
        getChildAt(index: int64): null | GTreeNode
        numChildren(): int64
        addChild(child: GTreeNode): null | GTreeNode
        init(isFolder: boolean, resUrl?: string /* = '' */): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGTreeNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGTreeNode;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGTweenHelper extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGTweenHelper extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gtweenhelper.html */
    class GTweenHelper extends RefCounted {
        constructor(identifier?: any)
        static getInstance(): null | GTweenHelper
        toFloat(start: float64, end: float64, duration: float64): null | GTweener
        toVec2(start: Vector2, end: Vector2, duration: float64): null | GTweener
        toVec3(start: Vector3, end: Vector3, duration: float64): null | GTweener
        toVec4(start: Vector4, end: Vector4, duration: float64): null | GTweener
        toColor(start: Color, end: Color, duration: float64): null | GTweener
        toDouble(start: float64, end: float64, duration: float64): null | GTweener
        delayedCall(delay: float64): null | GTweener
        shake(start: Vector2, amplitude: float64, duration: float64): null | GTweener
        isTweening(target: RefCounted): boolean
        kill(target: RefCounted, complete?: boolean /* = false */): void
        clean(): void
        killAll(complete?: boolean /* = false */): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGTweenHelper;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGTweenHelper;
    }
    namespace GTweener {
        enum TweenPropType {
            None = 0,
            X = 1,
            Y = 2,
            Position = 3,
            Width = 4,
            Height = 5,
            Size = 6,
            ScaleX = 7,
            ScaleY = 8,
            Scale = 9,
            Rotation = 10,
            Alpha = 11,
            Progress = 12,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGTweener extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGTweener extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gtweener.html */
    class GTweener extends RefCounted {
        constructor(identifier?: any)
        setEase(value: int64): null | GTweener
        setRepeat(repeat: int64, yoyo?: boolean /* = false */): null | GTweener
        getRepeat(): int64
        setTimeScale(value: float64): null | GTweener
        setSnapping(value: boolean): null | GTweener
        setTarget(target: GObject, propType?: int64 /* = 0 */): null | GTweener
        setPaused(value: boolean): null | GTweener
        seek(time: float64): void
        kill(complete?: boolean /* = false */): void
        getNormalizedTime(): float64
        isCompleted(): boolean
        allCompleted(): boolean
        onUpdate(callable: Callable): null | GTweener
        onStart(callable: Callable): null | GTweener
        onComplete(callable: Callable): null | GTweener
        get delay(): float64
        set delay(value: float64)
        get duration(): float64
        set duration(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGTweener;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGTweener;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGWindow extends __RPCMapGComponent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGWindow extends __NameMapGComponent {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_gwindow.html */
    class GWindow extends GComponent {
        constructor(identifier?: any)
        static create(): GWindow
        show(): void
        hide(): void
        hideImmediately(): void
        toggleStatus(): void
        bringToFront(): void
        isShowing(): boolean
        isTop(): boolean
        showModalWait(requestingCmd?: int64 /* = 0 */): void
        closeModalWait(requestingCmd?: int64 /* = 0 */): boolean
        initWindow(): void
        getFrame(): null | GComponent
        getModalWaitingPane(): null | GObject
        get modal(): boolean
        set modal(value: boolean)
        get bringToFrontOnClick(): boolean
        set bringToFrontOnClick(value: boolean)
        get contentPane(): null | GObject
        set contentPane(value: null | GObject)
        get closeButton(): null | GObject
        set closeButton(value: null | GObject)
        get dragArea(): null | GObject
        set dragArea(value: null | GObject)
        get contentArea(): null | GObject
        set contentArea(value: null | GObject)
        get onInitCallback(): Callable
        set onInitCallback(value: Callable)
        get onShownCallback(): Callable
        set onShownCallback(value: Callable)
        get onHideCallback(): Callable
        set onHideCallback(value: Callable)
        get doShowAnimationCallback(): Callable
        set doShowAnimationCallback(value: Callable)
        get doHideAnimationCallback(): Callable
        set doHideAnimationCallback(value: Callable)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGWindow;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGWindow;
    }
    namespace Generic6DofJoint3D {
        enum Param {
            ParamLinearLowerLimit = 0,
            ParamLinearUpperLimit = 1,
            ParamLinearLimitSoftness = 2,
            ParamLinearRestitution = 3,
            ParamLinearDamping = 4,
            ParamLinearMotorTargetVelocity = 5,
            ParamLinearMotorForceLimit = 6,
            ParamLinearSpringStiffness = 7,
            ParamLinearSpringDamping = 8,
            ParamLinearSpringEquilibriumPoint = 9,
            ParamAngularLowerLimit = 10,
            ParamAngularUpperLimit = 11,
            ParamAngularLimitSoftness = 12,
            ParamAngularDamping = 13,
            ParamAngularRestitution = 14,
            ParamAngularForceLimit = 15,
            ParamAngularErp = 16,
            ParamAngularMotorTargetVelocity = 17,
            ParamAngularMotorForceLimit = 18,
            ParamAngularSpringStiffness = 19,
            ParamAngularSpringDamping = 20,
            ParamAngularSpringEquilibriumPoint = 21,
            ParamMax = 22,
        }
        enum Flag {
            FlagEnableLinearLimit = 0,
            FlagEnableAngularLimit = 1,
            FlagEnableLinearSpring = 3,
            FlagEnableAngularSpring = 2,
            FlagEnableMotor = 4,
            FlagEnableLinearMotor = 5,
            FlagMax = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGeneric6DofJoint3D extends __RPCMapJoint3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGeneric6DofJoint3D extends __NameMapJoint3D {
        set_param_x: "setParamX";
        get_param_x: "getParamX";
        set_param_y: "setParamY";
        get_param_y: "getParamY";
        set_param_z: "setParamZ";
        get_param_z: "getParamZ";
        set_flag_x: "setFlagX";
        get_flag_x: "getFlagX";
        set_flag_y: "setFlagY";
        get_flag_y: "getFlagY";
        set_flag_z: "setFlagZ";
        get_flag_z: "getFlagZ";
        "linear_limit_x/enabled": "linearLimitX/enabled";
        "linear_limit_x/upper_distance": "linearLimitX/upperDistance";
        "linear_limit_x/lower_distance": "linearLimitX/lowerDistance";
        "linear_limit_x/softness": "linearLimitX/softness";
        "linear_limit_x/restitution": "linearLimitX/restitution";
        "linear_limit_x/damping": "linearLimitX/damping";
        "linear_limit_y/enabled": "linearLimitY/enabled";
        "linear_limit_y/upper_distance": "linearLimitY/upperDistance";
        "linear_limit_y/lower_distance": "linearLimitY/lowerDistance";
        "linear_limit_y/softness": "linearLimitY/softness";
        "linear_limit_y/restitution": "linearLimitY/restitution";
        "linear_limit_y/damping": "linearLimitY/damping";
        "linear_limit_z/enabled": "linearLimitZ/enabled";
        "linear_limit_z/upper_distance": "linearLimitZ/upperDistance";
        "linear_limit_z/lower_distance": "linearLimitZ/lowerDistance";
        "linear_limit_z/softness": "linearLimitZ/softness";
        "linear_limit_z/restitution": "linearLimitZ/restitution";
        "linear_limit_z/damping": "linearLimitZ/damping";
        "linear_motor_x/enabled": "linearMotorX/enabled";
        "linear_motor_x/target_velocity": "linearMotorX/targetVelocity";
        "linear_motor_x/force_limit": "linearMotorX/forceLimit";
        "linear_motor_y/enabled": "linearMotorY/enabled";
        "linear_motor_y/target_velocity": "linearMotorY/targetVelocity";
        "linear_motor_y/force_limit": "linearMotorY/forceLimit";
        "linear_motor_z/enabled": "linearMotorZ/enabled";
        "linear_motor_z/target_velocity": "linearMotorZ/targetVelocity";
        "linear_motor_z/force_limit": "linearMotorZ/forceLimit";
        "linear_spring_x/enabled": "linearSpringX/enabled";
        "linear_spring_x/stiffness": "linearSpringX/stiffness";
        "linear_spring_x/damping": "linearSpringX/damping";
        "linear_spring_x/equilibrium_point": "linearSpringX/equilibriumPoint";
        "linear_spring_y/enabled": "linearSpringY/enabled";
        "linear_spring_y/stiffness": "linearSpringY/stiffness";
        "linear_spring_y/damping": "linearSpringY/damping";
        "linear_spring_y/equilibrium_point": "linearSpringY/equilibriumPoint";
        "linear_spring_z/enabled": "linearSpringZ/enabled";
        "linear_spring_z/stiffness": "linearSpringZ/stiffness";
        "linear_spring_z/damping": "linearSpringZ/damping";
        "linear_spring_z/equilibrium_point": "linearSpringZ/equilibriumPoint";
        "angular_limit_x/enabled": "angularLimitX/enabled";
        "angular_limit_x/upper_angle": "angularLimitX/upperAngle";
        "angular_limit_x/lower_angle": "angularLimitX/lowerAngle";
        "angular_limit_x/softness": "angularLimitX/softness";
        "angular_limit_x/restitution": "angularLimitX/restitution";
        "angular_limit_x/damping": "angularLimitX/damping";
        "angular_limit_x/force_limit": "angularLimitX/forceLimit";
        "angular_limit_x/erp": "angularLimitX/erp";
        "angular_limit_y/enabled": "angularLimitY/enabled";
        "angular_limit_y/upper_angle": "angularLimitY/upperAngle";
        "angular_limit_y/lower_angle": "angularLimitY/lowerAngle";
        "angular_limit_y/softness": "angularLimitY/softness";
        "angular_limit_y/restitution": "angularLimitY/restitution";
        "angular_limit_y/damping": "angularLimitY/damping";
        "angular_limit_y/force_limit": "angularLimitY/forceLimit";
        "angular_limit_y/erp": "angularLimitY/erp";
        "angular_limit_z/enabled": "angularLimitZ/enabled";
        "angular_limit_z/upper_angle": "angularLimitZ/upperAngle";
        "angular_limit_z/lower_angle": "angularLimitZ/lowerAngle";
        "angular_limit_z/softness": "angularLimitZ/softness";
        "angular_limit_z/restitution": "angularLimitZ/restitution";
        "angular_limit_z/damping": "angularLimitZ/damping";
        "angular_limit_z/force_limit": "angularLimitZ/forceLimit";
        "angular_limit_z/erp": "angularLimitZ/erp";
        "angular_motor_x/enabled": "angularMotorX/enabled";
        "angular_motor_x/target_velocity": "angularMotorX/targetVelocity";
        "angular_motor_x/force_limit": "angularMotorX/forceLimit";
        "angular_motor_y/enabled": "angularMotorY/enabled";
        "angular_motor_y/target_velocity": "angularMotorY/targetVelocity";
        "angular_motor_y/force_limit": "angularMotorY/forceLimit";
        "angular_motor_z/enabled": "angularMotorZ/enabled";
        "angular_motor_z/target_velocity": "angularMotorZ/targetVelocity";
        "angular_motor_z/force_limit": "angularMotorZ/forceLimit";
        "angular_spring_x/enabled": "angularSpringX/enabled";
        "angular_spring_x/stiffness": "angularSpringX/stiffness";
        "angular_spring_x/damping": "angularSpringX/damping";
        "angular_spring_x/equilibrium_point": "angularSpringX/equilibriumPoint";
        "angular_spring_y/enabled": "angularSpringY/enabled";
        "angular_spring_y/stiffness": "angularSpringY/stiffness";
        "angular_spring_y/damping": "angularSpringY/damping";
        "angular_spring_y/equilibrium_point": "angularSpringY/equilibriumPoint";
        "angular_spring_z/enabled": "angularSpringZ/enabled";
        "angular_spring_z/stiffness": "angularSpringZ/stiffness";
        "angular_spring_z/damping": "angularSpringZ/damping";
        "angular_spring_z/equilibrium_point": "angularSpringZ/equilibriumPoint";
    }
    class Generic6DofJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        constructor(identifier?: any)
        setParamX(param: Generic6DofJoint3D.Param, value: float64): void
        getParamX(param: Generic6DofJoint3D.Param): float64
        setParamY(param: Generic6DofJoint3D.Param, value: float64): void
        getParamY(param: Generic6DofJoint3D.Param): float64
        setParamZ(param: Generic6DofJoint3D.Param, value: float64): void
        getParamZ(param: Generic6DofJoint3D.Param): float64
        setFlagX(flag: Generic6DofJoint3D.Flag, value: boolean): void
        getFlagX(flag: Generic6DofJoint3D.Flag): boolean
        setFlagY(flag: Generic6DofJoint3D.Flag, value: boolean): void
        getFlagY(flag: Generic6DofJoint3D.Flag): boolean
        setFlagZ(flag: Generic6DofJoint3D.Flag, value: boolean): void
        getFlagZ(flag: Generic6DofJoint3D.Flag): boolean
        get "linearLimitX/enabled"(): boolean
        set "linearLimitX/enabled"(value: boolean)
        get "linearLimitX/upperDistance"(): float64
        set "linearLimitX/upperDistance"(value: float64)
        get "linearLimitX/lowerDistance"(): float64
        set "linearLimitX/lowerDistance"(value: float64)
        get "linearLimitX/softness"(): float64
        set "linearLimitX/softness"(value: float64)
        get "linearLimitX/restitution"(): float64
        set "linearLimitX/restitution"(value: float64)
        get "linearLimitX/damping"(): float64
        set "linearLimitX/damping"(value: float64)
        get "linearLimitY/enabled"(): boolean
        set "linearLimitY/enabled"(value: boolean)
        get "linearLimitY/upperDistance"(): float64
        set "linearLimitY/upperDistance"(value: float64)
        get "linearLimitY/lowerDistance"(): float64
        set "linearLimitY/lowerDistance"(value: float64)
        get "linearLimitY/softness"(): float64
        set "linearLimitY/softness"(value: float64)
        get "linearLimitY/restitution"(): float64
        set "linearLimitY/restitution"(value: float64)
        get "linearLimitY/damping"(): float64
        set "linearLimitY/damping"(value: float64)
        get "linearLimitZ/enabled"(): boolean
        set "linearLimitZ/enabled"(value: boolean)
        get "linearLimitZ/upperDistance"(): float64
        set "linearLimitZ/upperDistance"(value: float64)
        get "linearLimitZ/lowerDistance"(): float64
        set "linearLimitZ/lowerDistance"(value: float64)
        get "linearLimitZ/softness"(): float64
        set "linearLimitZ/softness"(value: float64)
        get "linearLimitZ/restitution"(): float64
        set "linearLimitZ/restitution"(value: float64)
        get "linearLimitZ/damping"(): float64
        set "linearLimitZ/damping"(value: float64)
        get "linearMotorX/enabled"(): boolean
        set "linearMotorX/enabled"(value: boolean)
        get "linearMotorX/targetVelocity"(): float64
        set "linearMotorX/targetVelocity"(value: float64)
        get "linearMotorX/forceLimit"(): float64
        set "linearMotorX/forceLimit"(value: float64)
        get "linearMotorY/enabled"(): boolean
        set "linearMotorY/enabled"(value: boolean)
        get "linearMotorY/targetVelocity"(): float64
        set "linearMotorY/targetVelocity"(value: float64)
        get "linearMotorY/forceLimit"(): float64
        set "linearMotorY/forceLimit"(value: float64)
        get "linearMotorZ/enabled"(): boolean
        set "linearMotorZ/enabled"(value: boolean)
        get "linearMotorZ/targetVelocity"(): float64
        set "linearMotorZ/targetVelocity"(value: float64)
        get "linearMotorZ/forceLimit"(): float64
        set "linearMotorZ/forceLimit"(value: float64)
        get "linearSpringX/enabled"(): boolean
        set "linearSpringX/enabled"(value: boolean)
        get "linearSpringX/stiffness"(): float64
        set "linearSpringX/stiffness"(value: float64)
        get "linearSpringX/damping"(): float64
        set "linearSpringX/damping"(value: float64)
        get "linearSpringX/equilibriumPoint"(): float64
        set "linearSpringX/equilibriumPoint"(value: float64)
        get "linearSpringY/enabled"(): boolean
        set "linearSpringY/enabled"(value: boolean)
        get "linearSpringY/stiffness"(): float64
        set "linearSpringY/stiffness"(value: float64)
        get "linearSpringY/damping"(): float64
        set "linearSpringY/damping"(value: float64)
        get "linearSpringY/equilibriumPoint"(): float64
        set "linearSpringY/equilibriumPoint"(value: float64)
        get "linearSpringZ/enabled"(): boolean
        set "linearSpringZ/enabled"(value: boolean)
        get "linearSpringZ/stiffness"(): float64
        set "linearSpringZ/stiffness"(value: float64)
        get "linearSpringZ/damping"(): float64
        set "linearSpringZ/damping"(value: float64)
        get "linearSpringZ/equilibriumPoint"(): float64
        set "linearSpringZ/equilibriumPoint"(value: float64)
        get "angularLimitX/enabled"(): boolean
        set "angularLimitX/enabled"(value: boolean)
        get "angularLimitX/upperAngle"(): float64
        set "angularLimitX/upperAngle"(value: float64)
        get "angularLimitX/lowerAngle"(): float64
        set "angularLimitX/lowerAngle"(value: float64)
        get "angularLimitX/softness"(): float64
        set "angularLimitX/softness"(value: float64)
        get "angularLimitX/restitution"(): float64
        set "angularLimitX/restitution"(value: float64)
        get "angularLimitX/damping"(): float64
        set "angularLimitX/damping"(value: float64)
        get "angularLimitX/forceLimit"(): float64
        set "angularLimitX/forceLimit"(value: float64)
        get "angularLimitX/erp"(): float64
        set "angularLimitX/erp"(value: float64)
        get "angularLimitY/enabled"(): boolean
        set "angularLimitY/enabled"(value: boolean)
        get "angularLimitY/upperAngle"(): float64
        set "angularLimitY/upperAngle"(value: float64)
        get "angularLimitY/lowerAngle"(): float64
        set "angularLimitY/lowerAngle"(value: float64)
        get "angularLimitY/softness"(): float64
        set "angularLimitY/softness"(value: float64)
        get "angularLimitY/restitution"(): float64
        set "angularLimitY/restitution"(value: float64)
        get "angularLimitY/damping"(): float64
        set "angularLimitY/damping"(value: float64)
        get "angularLimitY/forceLimit"(): float64
        set "angularLimitY/forceLimit"(value: float64)
        get "angularLimitY/erp"(): float64
        set "angularLimitY/erp"(value: float64)
        get "angularLimitZ/enabled"(): boolean
        set "angularLimitZ/enabled"(value: boolean)
        get "angularLimitZ/upperAngle"(): float64
        set "angularLimitZ/upperAngle"(value: float64)
        get "angularLimitZ/lowerAngle"(): float64
        set "angularLimitZ/lowerAngle"(value: float64)
        get "angularLimitZ/softness"(): float64
        set "angularLimitZ/softness"(value: float64)
        get "angularLimitZ/restitution"(): float64
        set "angularLimitZ/restitution"(value: float64)
        get "angularLimitZ/damping"(): float64
        set "angularLimitZ/damping"(value: float64)
        get "angularLimitZ/forceLimit"(): float64
        set "angularLimitZ/forceLimit"(value: float64)
        get "angularLimitZ/erp"(): float64
        set "angularLimitZ/erp"(value: float64)
        get "angularMotorX/enabled"(): boolean
        set "angularMotorX/enabled"(value: boolean)
        get "angularMotorX/targetVelocity"(): float64
        set "angularMotorX/targetVelocity"(value: float64)
        get "angularMotorX/forceLimit"(): float64
        set "angularMotorX/forceLimit"(value: float64)
        get "angularMotorY/enabled"(): boolean
        set "angularMotorY/enabled"(value: boolean)
        get "angularMotorY/targetVelocity"(): float64
        set "angularMotorY/targetVelocity"(value: float64)
        get "angularMotorY/forceLimit"(): float64
        set "angularMotorY/forceLimit"(value: float64)
        get "angularMotorZ/enabled"(): boolean
        set "angularMotorZ/enabled"(value: boolean)
        get "angularMotorZ/targetVelocity"(): float64
        set "angularMotorZ/targetVelocity"(value: float64)
        get "angularMotorZ/forceLimit"(): float64
        set "angularMotorZ/forceLimit"(value: float64)
        get "angularSpringX/enabled"(): boolean
        set "angularSpringX/enabled"(value: boolean)
        get "angularSpringX/stiffness"(): float64
        set "angularSpringX/stiffness"(value: float64)
        get "angularSpringX/damping"(): float64
        set "angularSpringX/damping"(value: float64)
        get "angularSpringX/equilibriumPoint"(): float64
        set "angularSpringX/equilibriumPoint"(value: float64)
        get "angularSpringY/enabled"(): boolean
        set "angularSpringY/enabled"(value: boolean)
        get "angularSpringY/stiffness"(): float64
        set "angularSpringY/stiffness"(value: float64)
        get "angularSpringY/damping"(): float64
        set "angularSpringY/damping"(value: float64)
        get "angularSpringY/equilibriumPoint"(): float64
        set "angularSpringY/equilibriumPoint"(value: float64)
        get "angularSpringZ/enabled"(): boolean
        set "angularSpringZ/enabled"(value: boolean)
        get "angularSpringZ/stiffness"(): float64
        set "angularSpringZ/stiffness"(value: float64)
        get "angularSpringZ/damping"(): float64
        set "angularSpringZ/damping"(value: float64)
        get "angularSpringZ/equilibriumPoint"(): float64
        set "angularSpringZ/equilibriumPoint"(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGeneric6DofJoint3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGeneric6DofJoint3D;
    }
    namespace GeometryInstance3D {
        enum ShadowCastingSetting {
            ShadowCastingSettingOff = 0,
            ShadowCastingSettingOn = 1,
            ShadowCastingSettingDoubleSided = 2,
            ShadowCastingSettingShadowsOnly = 3,
        }
        enum GIMode {
            GIModeDisabled = 0,
            GIModeStatic = 1,
            GIModeDynamic = 2,
        }
        enum LightmapScale {
            LightmapScale1X = 0,
            LightmapScale2X = 1,
            LightmapScale4X = 2,
            LightmapScale8X = 3,
            LightmapScaleMax = 4,
        }
        enum VisibilityRangeFadeMode {
            VisibilityRangeFadeDisabled = 0,
            VisibilityRangeFadeSelf = 1,
            VisibilityRangeFadeDependencies = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGeometryInstance3D extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGeometryInstance3D extends __NameMapVisualInstance3D {
        set_instance_shader_parameter: "setInstanceShaderParameter";
        get_instance_shader_parameter: "getInstanceShaderParameter";
        material_override: "materialOverride";
        material_overlay: "materialOverlay";
        cast_shadow: "castShadow";
        extra_cull_margin: "extraCullMargin";
        custom_aabb: "customAabb";
        lod_bias: "lodBias";
        ignore_occlusion_culling: "ignoreOcclusionCulling";
        gi_mode: "gIMode";
        gi_lightmap_texel_scale: "gILightmapTexelScale";
        gi_lightmap_scale: "gILightmapScale";
        visibility_range_begin: "visibilityRangeBegin";
        visibility_range_begin_margin: "visibilityRangeBeginMargin";
        visibility_range_end: "visibilityRangeEnd";
        visibility_range_end_margin: "visibilityRangeEndMargin";
        visibility_range_fade_mode: "visibilityRangeFadeMode";
    }
    /** Base node for geometry-based visual instances.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_geometryinstance3d.html  
     */
    class GeometryInstance3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Set the value of a shader uniform for this instance only ([url=https://docs.godotengine.org/en/4.5/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms]per-instance uniform[/url]). See also [method ShaderMaterial.set_shader_parameter] to assign a uniform on all instances using the same [ShaderMaterial].  
         *      
         *  **Note:** For a shader uniform to be assignable on a per-instance basis, it  *must*  be defined with `instance uniform ...` rather than `uniform ...` in the shader code.  
         *      
         *  **Note:** [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Per-instance shader uniforms are only available in Spatial and CanvasItem shaders, but not for Fog, Sky, or Particles shaders.  
         */
        setInstanceShaderParameter(name: StringName, value: any): void
        
        /** Get the value of a shader parameter as set on this instance. */
        getInstanceShaderParameter(name: StringName): any
        
        /** The material override for the whole geometry.  
         *  If a material is assigned to this property, it will be used instead of any material set in any material slot of the mesh.  
         */
        get materialOverride(): null | BaseMaterial3D | ShaderMaterial
        set materialOverride(value: null | BaseMaterial3D | ShaderMaterial)
        
        /** The material overlay for the whole geometry.  
         *  If a material is assigned to this property, it will be rendered on top of any other active material for all the surfaces.  
         */
        get materialOverlay(): null | BaseMaterial3D | ShaderMaterial
        set materialOverlay(value: null | BaseMaterial3D | ShaderMaterial)
        
        /** The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than `0.0` (exclusive) will  *not*  disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [member transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, [member transparency] is ignored and is considered as always being `0.0`.  
         */
        get transparency(): float64
        set transparency(value: float64)
        
        /** The selected shadow casting flag. */
        get castShadow(): int64
        set castShadow(value: int64)
        
        /** The extra distance added to the GeometryInstance3D's bounding box ([AABB]) to increase its cull box. */
        get extraCullMargin(): float64
        set extraCullMargin(value: float64)
        
        /** Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [AABB] recalculation that happens when a skeleton is used with a [MeshInstance3D] or to have precise control over the [MeshInstance3D]'s bounding box. To use the default AABB, set value to an [AABB] with all fields set to `0.0`. To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`. To disable all forms of culling (including occlusion culling), call [method RenderingServer.instance_set_ignore_culling] on the [GeometryInstance3D]'s [RID]. */
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        
        /** Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.  
         *  Useful for testing level of detail transitions in the editor.  
         */
        get lodBias(): float64
        set lodBias(value: float64)
        
        /** If `true`, disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.  
         *      
         *  **Note:** [member ignore_occlusion_culling] does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`.  
         */
        get ignoreOcclusionCulling(): boolean
        set ignoreOcclusionCulling(value: boolean)
        
        /** The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).  
         *      
         *  **Note:** Lights' bake mode will also affect the global illumination rendering. See [member Light3D.light_bake_mode].  
         */
        get gIMode(): int64
        set gIMode(value: int64)
        
        /** The texel density to use for lightmapping in [LightmapGI]. Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes.  
         *  For example, doubling [member gi_lightmap_texel_scale] doubles the lightmap texture resolution for this object  *on each axis* , so it will  *quadruple*  the texel count.  
         */
        get gILightmapTexelScale(): float64
        set gILightmapTexelScale(value: float64)
        
        /** The texel density to use for lightmapping in [LightmapGI]. */
        get gILightmapScale(): int64
        set gILightmapScale(value: int64)
        
        /** Starting distance from which the GeometryInstance3D will be visible, taking [member visibility_range_begin_margin] into account as well. The default value of 0 is used to disable the range check. */
        get visibilityRangeBegin(): float64
        set visibilityRangeBegin(value: float64)
        
        /** Margin for the [member visibility_range_begin] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_begin] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        get visibilityRangeBeginMargin(): float64
        set visibilityRangeBeginMargin(value: float64)
        
        /** Distance from which the GeometryInstance3D will be hidden, taking [member visibility_range_end_margin] into account as well. The default value of 0 is used to disable the range check. */
        get visibilityRangeEnd(): float64
        set visibilityRangeEnd(value: float64)
        
        /** Margin for the [member visibility_range_end] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_end] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        get visibilityRangeEndMargin(): float64
        set visibilityRangeEndMargin(value: float64)
        
        /** Controls which instances will be faded when approaching the limits of the visibility range. */
        get visibilityRangeFadeMode(): int64
        set visibilityRangeFadeMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGeometryInstance3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGeometryInstance3D;
    }
    namespace Gradient {
        enum InterpolationMode {
            GradientInterpolateLinear = 0,
            GradientInterpolateConstant = 1,
            GradientInterpolateCubic = 2,
        }
        enum ColorSpace {
            GradientColorSpaceSrgb = 0,
            GradientColorSpaceLinearSrgb = 1,
            GradientColorSpaceOklab = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGradient extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGradient extends __NameMapResource {
        add_point: "addPoint";
        remove_point: "removePoint";
        set_offset: "setOffset";
        get_offset: "getOffset";
        set_color: "setColor";
        get_color: "getColor";
        get_point_count: "getPointCount";
        interpolation_mode: "interpolationMode";
        interpolation_color_space: "interpolationColorSpace";
    }
    /** A color transition.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_gradient.html  
     */
    class Gradient extends Resource {
        constructor(identifier?: any)
        /** Adds the specified color to the gradient, with the specified offset. */
        addPoint(offset: float64, color: Color): void
        
        /** Removes the color at index [param point]. */
        removePoint(point: int64): void
        
        /** Sets the offset for the gradient color at index [param point]. */
        setOffset(point: int64, offset: float64): void
        
        /** Returns the offset of the gradient color at index [param point]. */
        getOffset(point: int64): float64
        
        /** Reverses/mirrors the gradient.  
         *      
         *  **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        reverse(): void
        
        /** Sets the color of the gradient color at index [param point]. */
        setColor(point: int64, color: Color): void
        
        /** Returns the color of the gradient color at index [param point]. */
        getColor(point: int64): Color
        
        /** Returns the interpolated color specified by [param offset]. [param offset] should be between `0.0` and `1.0` (inclusive). Using a value lower than `0.0` will return the same color as `0.0`, and using a value higher than `1.0` will return the same color as `1.0`. If your input value is not within this range, consider using [method @GlobalScope.remap] on the input value with output values set to `0.0` and `1.0`. */
        sample(offset: float64): Color
        
        /** Returns the number of colors in the gradient. */
        getPointCount(): int64
        
        /** The algorithm used to interpolate between points of the gradient. */
        get interpolationMode(): int64
        set interpolationMode(value: int64)
        
        /** The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space.  
         *      
         *  **Note:** This setting has no effect when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        get interpolationColorSpace(): int64
        set interpolationColorSpace(value: int64)
        
        /** Gradient's offsets as a [PackedFloat32Array].  
         *      
         *  **Note:** Setting this property updates all offsets at once. To update any offset individually use [method set_offset].  
         */
        get offsets(): PackedFloat32Array
        set offsets(value: PackedFloat32Array | float32[])
        
        /** Gradient's colors as a [PackedColorArray].  
         *      
         *  **Note:** Setting this property updates all colors at once. To update any color individually use [method set_color].  
         */
        get colors(): PackedColorArray
        set colors(value: PackedColorArray | Color[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGradient;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGradient;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGradientTexture1D extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGradientTexture1D extends __NameMapTexture2D {
        use_hdr: "useHdr";
    }
    /** A 1D texture that uses colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_gradienttexture1d.html  
     */
    class GradientTexture1D extends Texture2D {
        constructor(identifier?: any)
        /** The [Gradient] used to fill the texture. */
        get gradient(): null | Gradient
        set gradient(value: null | Gradient)
        
        /** The number of color samples that will be obtained from the [Gradient]. */
        get width(): int64
        set width(value: int64)
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        get useHdr(): boolean
        set useHdr(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGradientTexture1D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGradientTexture1D;
    }
    namespace GradientTexture2D {
        enum Fill {
            FillLinear = 0,
            FillRadial = 1,
            FillSquare = 2,
        }
        enum Repeat {
            RepeatNone = 0,
            Repeat = 1,
            RepeatMirror = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGradientTexture2D extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGradientTexture2D extends __NameMapTexture2D {
        use_hdr: "useHdr";
        fill_from: "fillFrom";
        fill_to: "fillTo";
    }
    /** A 2D texture that creates a pattern with colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_gradienttexture2d.html  
     */
    class GradientTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** The [Gradient] used to fill the texture. */
        get gradient(): null | Gradient
        set gradient(value: null | Gradient)
        
        /** The number of horizontal color samples that will be obtained from the [Gradient], which also represents the texture's width. */
        get width(): int64
        set width(value: int64)
        
        /** The number of vertical color samples that will be obtained from the [Gradient], which also represents the texture's height. */
        get height(): int64
        set height(value: int64)
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        get useHdr(): boolean
        set useHdr(value: boolean)
        
        /** The gradient's fill type. */
        get fill(): int64
        set fill(value: int64)
        
        /** The initial offset used to fill the texture specified in UV coordinates. */
        get fillFrom(): Vector2
        set fillFrom(value: Vector2)
        
        /** The final offset used to fill the texture specified in UV coordinates. */
        get fillTo(): Vector2
        set fillTo(value: Vector2)
        
        /** The gradient's repeat type. */
        get repeat(): int64
        set repeat(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGradientTexture2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGradientTexture2D;
    }
    namespace GraphEdit {
        enum PanningScheme {
            ScrollZooms = 0,
            ScrollPans = 1,
        }
        enum GridPattern {
            GridPatternLines = 0,
            GridPatternDots = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGraphEdit extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGraphEdit extends __NameMapControl {
        _is_in_input_hotzone: "_isInInputHotzone";
        _is_in_output_hotzone: "_isInOutputHotzone";
        _get_connection_line: "_getConnectionLine";
        _is_node_hover_valid: "_isNodeHoverValid";
        connect_node: "connectNode";
        is_node_connected: "isNodeConnected";
        disconnect_node: "disconnectNode";
        set_connection_activity: "setConnectionActivity";
        get_connection_count: "getConnectionCount";
        get_closest_connection_at_point: "getClosestConnectionAtPoint";
        get_connection_list_from_node: "getConnectionListFromNode";
        get_connections_intersecting_with_rect: "getConnectionsIntersectingWithRect";
        clear_connections: "clearConnections";
        force_connection_drag_end: "forceConnectionDragEnd";
        add_valid_right_disconnect_type: "addValidRightDisconnectType";
        remove_valid_right_disconnect_type: "removeValidRightDisconnectType";
        add_valid_left_disconnect_type: "addValidLeftDisconnectType";
        remove_valid_left_disconnect_type: "removeValidLeftDisconnectType";
        add_valid_connection_type: "addValidConnectionType";
        remove_valid_connection_type: "removeValidConnectionType";
        is_valid_connection_type: "isValidConnectionType";
        get_connection_line: "getConnectionLine";
        attach_graph_element_to_frame: "attachGraphElementToFrame";
        detach_graph_element_from_frame: "detachGraphElementFromFrame";
        get_element_frame: "getElementFrame";
        get_attached_nodes_of_frame: "getAttachedNodesOfFrame";
        get_menu_hbox: "getMenuHBox";
        arrange_nodes: "arrangeNodes";
        set_selected: "setSelected";
        scroll_offset: "scrollOffset";
        show_grid: "showGrid";
        grid_pattern: "gridPattern";
        snapping_enabled: "snappingEnabled";
        snapping_distance: "snappingDistance";
        panning_scheme: "panningScheme";
        right_disconnects: "rightDisconnects";
        type_names: "typeNames";
        connection_lines_curvature: "connectionLinesCurvature";
        connection_lines_thickness: "connectionLinesThickness";
        connection_lines_antialiased: "connectionLinesAntialiased";
        zoom_min: "zoomMin";
        zoom_max: "zoomMax";
        zoom_step: "zoomStep";
        minimap_enabled: "minimapEnabled";
        minimap_size: "minimapSize";
        minimap_opacity: "minimapOpacity";
        show_menu: "showMenu";
        show_zoom_label: "showZoomLabel";
        show_zoom_buttons: "showZoomButtons";
        show_grid_buttons: "showGridButtons";
        show_minimap_button: "showMinimapButton";
        show_arrange_button: "showArrangeButton";
        connection_request: "connectionRequest";
        disconnection_request: "disconnectionRequest";
        connection_to_empty: "connectionToEmpty";
        connection_from_empty: "connectionFromEmpty";
        connection_drag_started: "connectionDragStarted";
        connection_drag_ended: "connectionDragEnded";
        copy_nodes_request: "copyNodesRequest";
        cut_nodes_request: "cutNodesRequest";
        paste_nodes_request: "pasteNodesRequest";
        duplicate_nodes_request: "duplicateNodesRequest";
        delete_nodes_request: "deleteNodesRequest";
        node_selected: "nodeSelected";
        node_deselected: "nodeDeselected";
        frame_rect_changed: "frameRectChanged";
        popup_request: "popupRequest";
        begin_node_move: "beginNodeMove";
        end_node_move: "endNodeMove";
        graph_elements_linked_to_frame_request: "graphElementsLinkedToFrameRequest";
        scroll_offset_changed: "scrollOffsetChanged";
    }
    /** An editor for graph-like structures, using [GraphNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_graphedit.html  
     */
    class GraphEdit<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Returns whether the [param mouse_position] is in the input hot zone.  
         *  By default, a hot zone is a [Rect2] positioned such that its center is at [param in_node].[method GraphNode.get_input_port_position]([param in_port]) (For output's case, call [method GraphNode.get_output_port_position] instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _isInInputHotzone(inNode: GObject, inPort: int64, mousePosition: Vector2): boolean
        
        /** Returns whether the [param mouse_position] is in the output hot zone. For more information on hot zones, see [method _is_in_input_hotzone].  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _isInOutputHotzone(inNode: GObject, inPort: int64, mousePosition: Vector2): boolean
        
        /** Virtual method which can be overridden to customize how connections are drawn. */
        /* gdvirtual */ _getConnectionLine(fromPosition: Vector2, toPosition: Vector2): PackedVector2Array
        
        /** This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.  
         *  Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.  
         *  In this example a connection to same node is suppressed:  
         *    
         */
        /* gdvirtual */ _isNodeHoverValid(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): boolean
        
        /** Create a connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection already exists, no connection is created.  
         *  Connections with [param keep_alive] set to `false` may be deleted automatically if invalid during a redraw.  
         */
        connectNode(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64, keepAlive?: boolean /* = false */): GError
        
        /** Returns `true` if the [param from_port] of the [param from_node] [GraphNode] is connected to the [param to_port] of the [param to_node] [GraphNode]. */
        isNodeConnected(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): boolean
        
        /** Removes the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection does not exist, no connection is removed. */
        disconnectNode(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): void
        
        /** Sets the coloration of the connection between [param from_node]'s [param from_port] and [param to_node]'s [param to_port] with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using [param amount] as weight. */
        setConnectionActivity(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64, amount: float64): void
        
        /** Returns the number of connections from [param from_port] of [param from_node]. */
        getConnectionCount(fromNode: StringName, fromPort: int64): int64
        
        /** Returns the closest connection to the given point in screen space. If no connection is found within [param max_distance] pixels, an empty [Dictionary] is returned.  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         *  For example, getting a connection at a given mouse position can be achieved like this:  
         *    
         */
        getClosestConnectionAtPoint(point: Vector2, maxDistance?: float64 /* = 4 */): GDictionary
        
        /** Returns an [Array] containing a list of all connections for [param node].  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         *  **Example:** Get all connections on a specific port:  
         *    
         */
        getConnectionListFromNode(node: StringName): GArray<GDictionary>
        
        /** Returns an [Array] containing the list of connections that intersect with the given [Rect2].  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         */
        getConnectionsIntersectingWithRect(rect: Rect2): GArray<GDictionary>
        
        /** Removes all connections between nodes. */
        clearConnections(): void
        
        /** Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.  
         *  This is best used together with [signal connection_drag_started] and [signal connection_drag_ended] to add custom behavior like node addition through shortcuts.  
         *      
         *  **Note:** This method suppresses any other connection request signals apart from [signal connection_drag_ended].  
         */
        forceConnectionDragEnd(): void
        
        /** Allows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_right_disconnect_type]. */
        addValidRightDisconnectType(type: int64): void
        
        /** Disallows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_right_disconnect_type]. */
        removeValidRightDisconnectType(type: int64): void
        
        /** Allows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_left_disconnect_type]. */
        addValidLeftDisconnectType(type: int64): void
        
        /** Disallows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_left_disconnect_type]. */
        removeValidLeftDisconnectType(type: int64): void
        
        /** Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type] and [method remove_valid_connection_type].  
         */
        addValidConnectionType(fromType: int64, toType: int64): void
        
        /** Disallows the connection between two different port types previously allowed by [method add_valid_connection_type]. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type].  
         */
        removeValidConnectionType(fromType: int64, toType: int64): void
        
        /** Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method add_valid_connection_type] and [method remove_valid_connection_type].  
         */
        isValidConnectionType(fromType: int64, toType: int64): boolean
        
        /** Returns the points which would make up a connection between [param from_node] and [param to_node]. */
        getConnectionLine(fromNode: Vector2, toNode: Vector2): PackedVector2Array
        
        /** Attaches the [param element] [GraphElement] to the [param frame] [GraphFrame]. */
        attachGraphElementToFrame(element: StringName, frame: StringName): void
        
        /** Detaches the [param element] [GraphElement] from the [GraphFrame] it is currently attached to. */
        detachGraphElementFromFrame(element: StringName): void
        
        /** Returns the [GraphFrame] that contains the [GraphElement] with the given name. */
        getElementFrame(element: StringName): null | GraphFrame
        
        /** Returns an array of node names that are attached to the [GraphFrame] with the given name. */
        getAttachedNodesOfFrame(frame: StringName): GArray<StringName>
        
        /** Gets the [HBoxContainer] that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getMenuHBox(): null | HBoxContainer
        
        /** Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes. */
        arrangeNodes(): void
        
        /** Sets the specified [param node] as the one selected. */
        setSelected(node: Node): void
        
        /** The scroll offset. */
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        
        /** If `true`, the grid is visible. */
        get showGrid(): boolean
        set showGrid(value: boolean)
        
        /** The pattern used for drawing the grid. */
        get gridPattern(): int64
        set gridPattern(value: int64)
        
        /** If `true`, enables snapping. */
        get snappingEnabled(): boolean
        set snappingEnabled(value: boolean)
        
        /** The snapping distance in pixels, also determines the grid line distance. */
        get snappingDistance(): int64
        set snappingDistance(value: int64)
        
        /** Defines the control scheme for panning with mouse wheel. */
        get panningScheme(): int64
        set panningScheme(value: int64)
        
        /** If `true`, enables disconnection of existing connections in the GraphEdit by dragging the right end. */
        get rightDisconnects(): boolean
        set rightDisconnects(value: boolean)
        
        /** [Dictionary] of human readable port type names. */
        get typeNames(): GDictionary<Record<int64, int64>>
        set typeNames(value: GDictionary<Record<int64, int64>>)
        
        /** The curvature of the lines between the nodes. 0 results in straight lines. */
        get connectionLinesCurvature(): float64
        set connectionLinesCurvature(value: float64)
        
        /** The thickness of the lines between the nodes. */
        get connectionLinesThickness(): float64
        set connectionLinesThickness(value: float64)
        
        /** If `true`, the lines between nodes will use antialiasing. */
        get connectionLinesAntialiased(): boolean
        set connectionLinesAntialiased(value: boolean)
        
        /** The connections between [GraphNode]s.  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         *  Connections with `keep_alive` set to `false` may be deleted automatically if invalid during a redraw.  
         */
        get connections(): GArray<any>
        set connections(value: GArray<any>)
        
        /** The current zoom value. */
        get zoom(): float64
        set zoom(value: float64)
        
        /** The lower zoom limit. */
        get zoomMin(): float64
        set zoomMin(value: float64)
        
        /** The upper zoom limit. */
        get zoomMax(): float64
        set zoomMax(value: float64)
        
        /** The step of each zoom level. */
        get zoomStep(): float64
        set zoomStep(value: float64)
        
        /** If `true`, the minimap is visible. */
        get minimapEnabled(): boolean
        set minimapEnabled(value: boolean)
        
        /** The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle. */
        get minimapSize(): Vector2
        set minimapSize(value: Vector2)
        
        /** The opacity of the minimap rectangle. */
        get minimapOpacity(): float64
        set minimapOpacity(value: float64)
        
        /** If `true`, the menu toolbar is visible. */
        get showMenu(): boolean
        set showMenu(value: boolean)
        
        /** If `true`, the label with the current zoom level is visible. The zoom level is displayed in percents. */
        get showZoomLabel(): boolean
        set showZoomLabel(value: boolean)
        
        /** If `true`, buttons that allow to change and reset the zoom level are visible. */
        get showZoomButtons(): boolean
        set showZoomButtons(value: boolean)
        
        /** If `true`, buttons that allow to configure grid and snapping options are visible. */
        get showGridButtons(): boolean
        set showGridButtons(value: boolean)
        
        /** If `true`, the button to toggle the minimap is visible. */
        get showMinimapButton(): boolean
        set showMinimapButton(value: boolean)
        
        /** If `true`, the button to automatically arrange graph nodes is visible. */
        get showArrangeButton(): boolean
        set showArrangeButton(value: boolean)
        
        /** Emitted to the GraphEdit when the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode] is attempted to be created. */
        readonly connectionRequest: Signal<(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64) => void>
        
        /** Emitted to the GraphEdit when the connection between [param from_port] of [param from_node] [GraphNode] and [param to_port] of [param to_node] [GraphNode] is attempted to be removed. */
        readonly disconnectionRequest: Signal<(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64) => void>
        
        /** Emitted when user drags a connection from an output port into the empty space of the graph. */
        readonly connectionToEmpty: Signal<(fromNode: StringName, fromPort: int64, releasePosition: Vector2) => void>
        
        /** Emitted when user drags a connection from an input port into the empty space of the graph. */
        readonly connectionFromEmpty: Signal<(toNode: StringName, toPort: int64, releasePosition: Vector2) => void>
        
        /** Emitted at the beginning of a connection drag. */
        readonly connectionDragStarted: Signal<(fromNode: StringName, fromPort: int64, isOutput: boolean) => void>
        
        /** Emitted at the end of a connection drag. */
        readonly connectionDragEnded: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_copy` action ([kbd]Ctrl + C[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be copied. */
        readonly copyNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_cut` action ([kbd]Ctrl + X[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be cut. */
        readonly cutNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_paste` action ([kbd]Ctrl + V[/kbd] by default). In general, this signal indicates that previously copied [GraphElement]s should be pasted. */
        readonly pasteNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_duplicate` action ([kbd]Ctrl + D[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be duplicated. */
        readonly duplicateNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_delete` action ([kbd]Delete[/kbd] by default).  
         *  [param nodes] is an array of node names that should be removed. These usually include all selected nodes.  
         */
        readonly deleteNodesRequest: Signal<(nodes: GArray<StringName>) => void>
        
        /** Emitted when the given [GraphElement] node is selected. */
        readonly nodeSelected: Signal<(node: Node) => void>
        
        /** Emitted when the given [GraphElement] node is deselected. */
        readonly nodeDeselected: Signal<(node: Node) => void>
        
        /** Emitted when the [GraphFrame] [param frame] is resized to [param new_rect]. */
        readonly frameRectChanged: Signal<(frame: GraphFrame, newRect: Rect2) => void>
        
        /** Emitted when a popup is requested. Happens on right-clicking in the GraphEdit. [param at_position] is the position of the mouse pointer when the signal is sent. */
        readonly popupRequest: Signal<(atPosition: Vector2) => void>
        
        /** Emitted at the beginning of a [GraphElement]'s movement. */
        readonly beginNodeMove: Signal<() => void>
        
        /** Emitted at the end of a [GraphElement]'s movement. */
        readonly endNodeMove: Signal<() => void>
        
        /** Emitted when one or more [GraphElement]s are dropped onto the [GraphFrame] named [param frame], when they were not previously attached to any other one.  
         *  [param elements] is an array of [GraphElement]s to be attached.  
         */
        readonly graphElementsLinkedToFrameRequest: Signal<(elements: GArray, frame: StringName) => void>
        
        /** Emitted when the scroll offset is changed by the user. It will not be emitted when changed in code. */
        readonly scrollOffsetChanged: Signal<(offset: Vector2) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGraphEdit;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGraphEdit;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGraphElement extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGraphElement extends __NameMapContainer {
        position_offset: "positionOffset";
        node_selected: "nodeSelected";
        node_deselected: "nodeDeselected";
        raise_request: "raiseRequest";
        delete_request: "deleteRequest";
        resize_request: "resizeRequest";
        resize_end: "resizeEnd";
        position_offset_changed: "positionOffsetChanged";
    }
    /** A container that represents a basic element that can be placed inside a [GraphEdit] control.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_graphelement.html  
     */
    class GraphElement<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** The offset of the GraphElement, relative to the scroll offset of the [GraphEdit]. */
        get positionOffset(): Vector2
        set positionOffset(value: Vector2)
        
        /** If `true`, the user can resize the GraphElement.  
         *      
         *  **Note:** Dragging the handle will only emit the [signal resize_request] and [signal resize_end] signals, the GraphElement needs to be resized manually.  
         */
        get resizable(): boolean
        set resizable(value: boolean)
        
        /** If `true`, the user can drag the GraphElement. */
        get draggable(): boolean
        set draggable(value: boolean)
        
        /** If `true`, the user can select the GraphElement. */
        get selectable(): boolean
        set selectable(value: boolean)
        
        /** If `true`, the GraphElement is selected. */
        get selected(): boolean
        set selected(value: boolean)
        
        /** Emitted when the GraphElement is selected. */
        readonly nodeSelected: Signal<() => void>
        
        /** Emitted when the GraphElement is deselected. */
        readonly nodeDeselected: Signal<() => void>
        
        /** Emitted when displaying the GraphElement over other ones is requested. Happens on focusing (clicking into) the GraphElement. */
        readonly raiseRequest: Signal<() => void>
        
        /** Emitted when removing the GraphElement is requested. */
        readonly deleteRequest: Signal<() => void>
        
        /** Emitted when resizing the GraphElement is requested. Happens on dragging the resizer handle (see [member resizable]). */
        readonly resizeRequest: Signal<(newSize: Vector2) => void>
        
        /** Emitted when releasing the mouse button after dragging the resizer handle (see [member resizable]). */
        readonly resizeEnd: Signal<(newSize: Vector2) => void>
        
        /** Emitted when the GraphElement is dragged. */
        readonly dragged: Signal<(from: Vector2, to: Vector2) => void>
        
        /** Emitted when the GraphElement is moved. */
        readonly positionOffsetChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGraphElement;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGraphElement;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGraphFrame extends __RPCMapGraphElement {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGraphFrame extends __NameMapGraphElement {
        get_titlebar_hbox: "getTitlebarHBox";
        autoshrink_enabled: "autoshrinkEnabled";
        autoshrink_margin: "autoshrinkMargin";
        drag_margin: "dragMargin";
        tint_color_enabled: "tintColorEnabled";
        tint_color: "tintColor";
        autoshrink_changed: "autoshrinkChanged";
    }
    /** GraphFrame is a special [GraphElement] that can be used to organize other [GraphElement]s inside a [GraphEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_graphframe.html  
     */
    class GraphFrame<Map extends NodePathMap = any> extends GraphElement<Map> {
        constructor(identifier?: any)
        /** Returns the [HBoxContainer] used for the title bar, only containing a [Label] for displaying the title by default.  
         *  This can be used to add custom controls to the title bar such as option or close buttons.  
         */
        getTitlebarHBox(): null | HBoxContainer
        
        /** Title of the frame. */
        get title(): string
        set title(value: string)
        
        /** If `true`, the frame's rect will be adjusted automatically to enclose all attached [GraphElement]s. */
        get autoshrinkEnabled(): boolean
        set autoshrinkEnabled(value: boolean)
        
        /** The margin around the attached nodes that is used to calculate the size of the frame when [member autoshrink_enabled] is `true`. */
        get autoshrinkMargin(): int64
        set autoshrinkMargin(value: int64)
        
        /** The margin inside the frame that can be used to drag the frame. */
        get dragMargin(): int64
        set dragMargin(value: int64)
        
        /** If `true`, the tint color will be used to tint the frame. */
        get tintColorEnabled(): boolean
        set tintColorEnabled(value: boolean)
        
        /** The color of the frame when [member tint_color_enabled] is `true`. */
        get tintColor(): Color
        set tintColor(value: Color)
        
        /** Emitted when [member autoshrink_enabled] or [member autoshrink_margin] changes. */
        readonly autoshrinkChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGraphFrame;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGraphFrame;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGraphNode extends __RPCMapGraphElement {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGraphNode extends __NameMapGraphElement {
        _draw_port: "_drawPort";
        get_titlebar_hbox: "getTitlebarHBox";
        set_slot: "setSlot";
        clear_slot: "clearSlot";
        clear_all_slots: "clearAllSlots";
        is_slot_enabled_left: "isSlotEnabledLeft";
        set_slot_enabled_left: "setSlotEnabledLeft";
        set_slot_type_left: "setSlotTypeLeft";
        get_slot_type_left: "getSlotTypeLeft";
        set_slot_color_left: "setSlotColorLeft";
        get_slot_color_left: "getSlotColorLeft";
        set_slot_custom_icon_left: "setSlotCustomIconLeft";
        get_slot_custom_icon_left: "getSlotCustomIconLeft";
        is_slot_enabled_right: "isSlotEnabledRight";
        set_slot_enabled_right: "setSlotEnabledRight";
        set_slot_type_right: "setSlotTypeRight";
        get_slot_type_right: "getSlotTypeRight";
        set_slot_color_right: "setSlotColorRight";
        get_slot_color_right: "getSlotColorRight";
        set_slot_custom_icon_right: "setSlotCustomIconRight";
        get_slot_custom_icon_right: "getSlotCustomIconRight";
        is_slot_draw_stylebox: "isSlotDrawStylebox";
        set_slot_draw_stylebox: "setSlotDrawStylebox";
        get_input_port_count: "getInputPortCount";
        get_input_port_position: "getInputPortPosition";
        get_input_port_type: "getInputPortType";
        get_input_port_color: "getInputPortColor";
        get_input_port_slot: "getInputPortSlot";
        get_output_port_count: "getOutputPortCount";
        get_output_port_position: "getOutputPortPosition";
        get_output_port_type: "getOutputPortType";
        get_output_port_color: "getOutputPortColor";
        get_output_port_slot: "getOutputPortSlot";
        ignore_invalid_connection_type: "ignoreInvalidConnectionType";
        slots_focus_mode: "slotsFocusMode";
        slot_updated: "slotUpdated";
        slot_sizes_changed: "slotSizesChanged";
    }
    /** A container with connection ports, representing a node in a [GraphEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_graphnode.html  
     */
    class GraphNode<Map extends NodePathMap = any> extends GraphElement<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _drawPort(slotIndex: int64, position: Vector2I, left: boolean, color: Color): void
        
        /** Returns the [HBoxContainer] used for the title bar, only containing a [Label] for displaying the title by default. This can be used to add custom controls to the title bar such as option or close buttons. */
        getTitlebarHBox(): null | HBoxContainer
        
        /** Sets properties of the slot with the given [param slot_index].  
         *  If [param enable_left_port]/[param enable_right_port] is `true`, a port will appear and the slot will be able to be connected from this side.  
         *  With [param type_left]/[param type_right] an arbitrary type can be assigned to each port. Two ports can be connected if they share the same type, or if the connection between their types is allowed in the parent [GraphEdit] (see [method GraphEdit.add_valid_connection_type]). Keep in mind that the [GraphEdit] has the final say in accepting the connection. Type compatibility simply allows the [signal GraphEdit.connection_request] signal to be emitted.  
         *  Ports can be further customized using [param color_left]/[param color_right] and [param custom_icon_left]/[param custom_icon_right]. The color parameter adds a tint to the icon. The custom icon can be used to override the default port dot.  
         *  Additionally, [param draw_stylebox] can be used to enable or disable drawing of the background stylebox for each slot. See [theme_item slot].  
         *  Individual properties can also be set using one of the `set_slot_*` methods.  
         *      
         *  **Note:** This method only sets properties of the slot. To create the slot itself, add a [Control]-derived child to the GraphNode.  
         */
        setSlot(slotIndex: int64, enableLeftPort: boolean, typeLeft: int64, colorLeft: Color, enableRightPort: boolean, typeRight: int64, colorRight: Color, customIconLeft?: Texture2D, customIconRight?: Texture2D, drawStylebox?: boolean /* = true */): void
        
        /** Disables the slot with the given [param slot_index]. This will remove the corresponding input and output port from the GraphNode. */
        clearSlot(slotIndex: int64): void
        
        /** Disables all slots of the GraphNode. This will remove all input/output ports from the GraphNode. */
        clearAllSlots(): void
        
        /** Returns `true` if left (input) side of the slot with the given [param slot_index] is enabled. */
        isSlotEnabledLeft(slotIndex: int64): boolean
        
        /** Toggles the left (input) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the left side and the slot will be able to be connected from this side. */
        setSlotEnabledLeft(slotIndex: int64, enable: boolean): void
        
        /** Sets the left (input) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        setSlotTypeLeft(slotIndex: int64, type: int64): void
        
        /** Returns the left (input) type of the slot with the given [param slot_index]. */
        getSlotTypeLeft(slotIndex: int64): int64
        
        /** Sets the [Color] of the left (input) side of the slot with the given [param slot_index] to [param color]. */
        setSlotColorLeft(slotIndex: int64, color: Color): void
        
        /** Returns the left (input) [Color] of the slot with the given [param slot_index]. */
        getSlotColorLeft(slotIndex: int64): Color
        
        /** Sets the custom [Texture2D] of the left (input) side of the slot with the given [param slot_index] to [param custom_icon]. */
        setSlotCustomIconLeft(slotIndex: int64, customIcon: Texture2D): void
        
        /** Returns the left (input) custom [Texture2D] of the slot with the given [param slot_index]. */
        getSlotCustomIconLeft(slotIndex: int64): null | Texture2D
        
        /** Returns `true` if right (output) side of the slot with the given [param slot_index] is enabled. */
        isSlotEnabledRight(slotIndex: int64): boolean
        
        /** Toggles the right (output) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the right side and the slot will be able to be connected from this side. */
        setSlotEnabledRight(slotIndex: int64, enable: boolean): void
        
        /** Sets the right (output) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        setSlotTypeRight(slotIndex: int64, type: int64): void
        
        /** Returns the right (output) type of the slot with the given [param slot_index]. */
        getSlotTypeRight(slotIndex: int64): int64
        
        /** Sets the [Color] of the right (output) side of the slot with the given [param slot_index] to [param color]. */
        setSlotColorRight(slotIndex: int64, color: Color): void
        
        /** Returns the right (output) [Color] of the slot with the given [param slot_index]. */
        getSlotColorRight(slotIndex: int64): Color
        
        /** Sets the custom [Texture2D] of the right (output) side of the slot with the given [param slot_index] to [param custom_icon]. */
        setSlotCustomIconRight(slotIndex: int64, customIcon: Texture2D): void
        
        /** Returns the right (output) custom [Texture2D] of the slot with the given [param slot_index]. */
        getSlotCustomIconRight(slotIndex: int64): null | Texture2D
        
        /** Returns `true` if the background [StyleBox] of the slot with the given [param slot_index] is drawn. */
        isSlotDrawStylebox(slotIndex: int64): boolean
        
        /** Toggles the background [StyleBox] of the slot with the given [param slot_index]. */
        setSlotDrawStylebox(slotIndex: int64, enable: boolean): void
        
        /** Returns the number of slots with an enabled input port. */
        getInputPortCount(): int64
        
        /** Returns the position of the input port with the given [param port_idx]. */
        getInputPortPosition(portIdx: int64): Vector2
        
        /** Returns the type of the input port with the given [param port_idx]. */
        getInputPortType(portIdx: int64): int64
        
        /** Returns the [Color] of the input port with the given [param port_idx]. */
        getInputPortColor(portIdx: int64): Color
        
        /** Returns the corresponding slot index of the input port with the given [param port_idx]. */
        getInputPortSlot(portIdx: int64): int64
        
        /** Returns the number of slots with an enabled output port. */
        getOutputPortCount(): int64
        
        /** Returns the position of the output port with the given [param port_idx]. */
        getOutputPortPosition(portIdx: int64): Vector2
        
        /** Returns the type of the output port with the given [param port_idx]. */
        getOutputPortType(portIdx: int64): int64
        
        /** Returns the [Color] of the output port with the given [param port_idx]. */
        getOutputPortColor(portIdx: int64): Color
        
        /** Returns the corresponding slot index of the output port with the given [param port_idx]. */
        getOutputPortSlot(portIdx: int64): int64
        
        /** The text displayed in the GraphNode's title bar. */
        get title(): string
        set title(value: string)
        
        /** If `true`, you can connect ports with different types, even if the connection was not explicitly allowed in the parent [GraphEdit]. */
        get ignoreInvalidConnectionType(): boolean
        set ignoreInvalidConnectionType(value: boolean)
        
        /** Determines how connection slots can be focused.  
         *  - If set to [constant Control.FOCUS_CLICK], connections can only be made with the mouse.  
         *  - If set to [constant Control.FOCUS_ALL], slots can also be focused using the [member ProjectSettings.input/ui_up] and [member ProjectSettings.input/ui_down] and connected using [member ProjectSettings.input/ui_left] and [member ProjectSettings.input/ui_right] input actions.  
         *  - If set to [constant Control.FOCUS_ACCESSIBILITY], slot input actions are only enabled when the screen reader is active.  
         */
        get slotsFocusMode(): int64
        set slotsFocusMode(value: int64)
        
        /** Emitted when any GraphNode's slot is updated. */
        readonly slotUpdated: Signal<(slotIndex: int64) => void>
        
        /** Emitted when any slot's size might have changed. */
        readonly slotSizesChanged: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGraphNode;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGraphNode;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGridContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGridContainer extends __NameMapContainer {
    }
    /** A container that arranges its child controls in a grid layout.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_gridcontainer.html  
     */
    class GridContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** The number of columns in the [GridContainer]. If modified, [GridContainer] reorders its Control-derived children to accommodate the new layout. */
        get columns(): int64
        set columns(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGridContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGridContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGridMap extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGridMap extends __NameMapNode3D {
        set_collision_mask_value: "setCollisionMaskValue";
        get_collision_mask_value: "getCollisionMaskValue";
        set_collision_layer_value: "setCollisionLayerValue";
        get_collision_layer_value: "getCollisionLayerValue";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        set_cell_item: "setCellItem";
        get_cell_item: "getCellItem";
        get_cell_item_orientation: "getCellItemOrientation";
        get_cell_item_basis: "getCellItemBasis";
        get_basis_with_orthogonal_index: "getBasisWithOrthogonalIndex";
        get_orthogonal_index_from_basis: "getOrthogonalIndexFromBasis";
        local_to_map: "localToMap";
        map_to_local: "mapToLocal";
        resource_changed: "resourceChanged";
        get_used_cells: "getUsedCells";
        get_used_cells_by_item: "getUsedCellsByItem";
        get_meshes: "getMeshes";
        get_bake_meshes: "getBakeMeshes";
        get_bake_mesh_instance: "getBakeMeshInstance";
        clear_baked_meshes: "clearBakedMeshes";
        make_baked_meshes: "makeBakedMeshes";
        mesh_library: "meshLibrary";
        physics_material: "physicsMaterial";
        cell_size: "cellSize";
        cell_octant_size: "cellOctantSize";
        cell_center_x: "cellCenterX";
        cell_center_y: "cellCenterY";
        cell_center_z: "cellCenterZ";
        cell_scale: "cellScale";
        collision_layer: "collisionLayer";
        collision_mask: "collisionMask";
        collision_priority: "collisionPriority";
        bake_navigation: "bakeNavigation";
        cell_size_changed: "cellSizeChanged";
    }
    /** Node for 3D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_gridmap.html  
     */
    class GridMap<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Invalid cell item that can be used in [method set_cell_item] to clear cells (or represent an empty cell in [method get_cell_item]). */
        static readonly INVALID_CELL_ITEM = -1
        constructor(identifier?: any)
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionLayerValue(layerNumber: int64): boolean
        
        /** Sets the [RID] of the navigation map this GridMap node should use for its cell baked navigation meshes. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map this GridMap node uses for its cell baked navigation meshes.  
         *  This function returns always the map set on the GridMap node and not the map on the NavigationServer. If the map is changed directly with the NavigationServer API the GridMap node will not be aware of the map change.  
         */
        getNavigationMap(): Rid
        
        /** Sets the mesh index for the cell referenced by its grid coordinates.  
         *  A negative item index such as [constant INVALID_CELL_ITEM] will clear the cell.  
         *  Optionally, the item's orientation can be passed. For valid orientation values, see [method get_orthogonal_index_from_basis].  
         */
        setCellItem(position: Vector3I, item: int64, orientation?: int64 /* = 0 */): void
        
        /** The [MeshLibrary] item index located at the given grid coordinates. If the cell is empty, [constant INVALID_CELL_ITEM] will be returned. */
        getCellItem(position: Vector3I): int64
        
        /** The orientation of the cell at the given grid coordinates. `-1` is returned if the cell is empty. */
        getCellItemOrientation(position: Vector3I): int64
        
        /** Returns the basis that gives the specified cell its orientation. */
        getCellItemBasis(position: Vector3I): Basis
        
        /** Returns one of 24 possible rotations that lie along the vectors (x,y,z) with each component being either -1, 0, or 1. For further details, refer to the Godot source code. */
        getBasisWithOrthogonalIndex(index: int64): Basis
        
        /** This function considers a discretization of rotations into 24 points on unit sphere, lying along the vectors (x,y,z) with each component being either -1, 0, or 1, and returns the index (in the range from 0 to 23) of the point best representing the orientation of the object. For further details, refer to the Godot source code. */
        getOrthogonalIndexFromBasis(basis: Basis): int64
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node3D.to_local] before passing it to this method. See also [method map_to_local]. */
        localToMap(localPosition: Vector3): Vector3I
        
        /** Returns the position of a grid cell in the GridMap's local coordinate space. To convert the returned value into global coordinates, use [method Node3D.to_global]. See also [method local_to_map]. */
        mapToLocal(mapPosition: Vector3I): Vector3
        
        /** This method does nothing. */
        resourceChanged(resource: Resource): void
        
        /** Clear all cells. */
        clear(): void
        
        /** Returns an array of [Vector3] with the non-empty cell coordinates in the grid map. */
        getUsedCells(): GArray<Vector3I>
        
        /** Returns an array of all cells with the given item index specified in [param item]. */
        getUsedCellsByItem(item: int64): GArray<Vector3I>
        
        /** Returns an array of [Transform3D] and [Mesh] references corresponding to the non-empty cells in the grid. The transforms are specified in local space. Even indices contain [Transform3D]s, while odd indices contain [Mesh]es related to the [Transform3D] in the index preceding it. */
        getMeshes(): GArray
        
        /** Returns an array of [ArrayMesh]es and [Transform3D] references of all bake meshes that exist within the current GridMap. Even indices contain [ArrayMesh]es, while odd indices contain [Transform3D]s that are always equal to [constant Transform3D.IDENTITY].  
         *  This method relies on the output of [method make_baked_meshes], which will be called with `gen_lightmap_uv` set to `true` and `lightmap_uv_texel_size` set to `0.1` if it hasn't been called yet.  
         */
        getBakeMeshes(): GArray
        
        /** Returns [RID] of a baked mesh with the given [param idx]. */
        getBakeMeshInstance(idx: int64): Rid
        
        /** Clears all baked meshes. See [method make_baked_meshes]. */
        clearBakedMeshes(): void
        
        /** Generates a baked mesh that represents all meshes in the assigned [MeshLibrary] for use with [LightmapGI]. If [param gen_lightmap_uv] is `true`, UV2 data will be generated for each mesh currently used in the [GridMap]. Otherwise, only meshes that already have UV2 data present will be able to use baked lightmaps. When generating UV2, [param lightmap_uv_texel_size] controls the texel density for lightmaps, with lower values resulting in more detailed lightmaps. [param lightmap_uv_texel_size] is ignored if [param gen_lightmap_uv] is `false`. See also [method get_bake_meshes], which relies on the output of this method.  
         *      
         *  **Note:** Calling this method will not actually bake lightmaps, as lightmap baking is performed using the [LightmapGI] node.  
         */
        makeBakedMeshes(genLightmapUV?: boolean /* = false */, lightmapUVTexelSize?: float64 /* = 0.1 */): void
        
        /** The assigned [MeshLibrary]. */
        get meshLibrary(): null | MeshLibrary
        set meshLibrary(value: null | MeshLibrary)
        
        /** Overrides the default friction and bounce physics properties for the whole [GridMap]. */
        get physicsMaterial(): null | PhysicsMaterial
        set physicsMaterial(value: null | PhysicsMaterial)
        
        /** The dimensions of the grid's cells.  
         *  This does not affect the size of the meshes. See [member cell_scale].  
         */
        get cellSize(): Vector3
        set cellSize(value: Vector3)
        
        /** The size of each octant measured in number of cells. This applies to all three axis. */
        get cellOctantSize(): int64
        set cellOctantSize(value: int64)
        
        /** If `true`, grid items are centered on the X axis. */
        get cellCenterX(): boolean
        set cellCenterX(value: boolean)
        
        /** If `true`, grid items are centered on the Y axis. */
        get cellCenterY(): boolean
        set cellCenterY(value: boolean)
        
        /** If `true`, grid items are centered on the Z axis. */
        get cellCenterZ(): boolean
        set cellCenterZ(value: boolean)
        
        /** The scale of the cell items.  
         *  This does not affect the size of the grid cells themselves, only the items in them. This can be used to make cell items overlap their neighbors.  
         */
        get cellScale(): float64
        set cellScale(value: float64)
        
        /** The physics layers this GridMap is in.  
         *  GridMaps act as static bodies, meaning they aren't affected by gravity or other forces. They only affect other physics bodies that collide with them.  
         */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The physics layers this GridMap detects collisions in. See [url=https://docs.godotengine.org/en/4.5/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        get collisionPriority(): float64
        set collisionPriority(value: float64)
        
        /** If `true`, this GridMap creates a navigation region for each cell that uses a [member mesh_library] item with a navigation mesh. The created navigation region will use the navigation layers bitmask assigned to the [MeshLibrary]'s item. */
        get bakeNavigation(): boolean
        set bakeNavigation(value: boolean)
        
        /** Emitted when [member cell_size] changes. */
        readonly cellSizeChanged: Signal<(cellSize: Vector3) => void>
        
        /** Emitted when the [MeshLibrary] of this GridMap changes. */
        readonly changed: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGridMap;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGridMap;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGridMapEditorPlugin extends __RPCMapEditorPlugin {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGridMapEditorPlugin extends __NameMapEditorPlugin {
        get_current_grid_map: "getCurrentGridMap";
        set_selection: "setSelection";
        clear_selection: "clearSelection";
        get_selection: "getSelection";
        has_selection: "hasSelection";
        get_selected_cells: "getSelectedCells";
        set_selected_palette_item: "setSelectedPaletteItem";
        get_selected_palette_item: "getSelectedPaletteItem";
    }
    /** Editor for [GridMap] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_gridmapeditorplugin.html  
     */
    class GridMapEditorPlugin<Map extends NodePathMap = any> extends EditorPlugin<Map> {
        constructor(identifier?: any)
        /** Returns the [GridMap] node currently edited by the grid map editor. */
        getCurrentGridMap(): null | GridMap
        
        /** Selects the cells inside the given bounds from [param begin] to [param end]. */
        setSelection(begin: Vector3I, end: Vector3I): void
        
        /** Deselects any currently selected cells. */
        clearSelection(): void
        
        /** Returns the cell coordinate bounds of the current selection. Use [method has_selection] to check if there is an active selection. */
        getSelection(): Aabb
        
        /** Returns `true` if there are selected cells. */
        hasSelection(): boolean
        
        /** Returns an array of [Vector3i]s with the selected cells' coordinates. */
        getSelectedCells(): GArray
        
        /** Selects the [MeshLibrary] item with the given index in the grid map editor's palette. If a negative index is given, no item will be selected. If a value greater than the last index is given, the last item will be selected.  
         *      
         *  **Note:** The indices might not be in the same order as they appear in the editor's interface.  
         */
        setSelectedPaletteItem(item: int64): void
        
        /** Returns the index of the selected [MeshLibrary] item in the grid map editor's palette or `-1` if no item is selected.  
         *      
         *  **Note:** The indices might not be in the same order as they appear in the editor's interface.  
         */
        getSelectedPaletteItem(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGridMapEditorPlugin;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGridMapEditorPlugin;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapGrooveJoint2D extends __RPCMapJoint2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapGrooveJoint2D extends __NameMapJoint2D {
        initial_offset: "initialOffset";
    }
    /** A physics joint that restricts the movement of two 2D physics bodies to a fixed axis.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_groovejoint2d.html  
     */
    class GrooveJoint2D<Map extends NodePathMap = any> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The groove's length. The groove is from the joint's origin towards [member length] along the joint's local Y axis. */
        get length(): float64
        set length(value: float64)
        
        /** The body B's initial anchor position defined by the joint's origin and a local offset [member initial_offset] along the joint's Y axis (along the groove). */
        get initialOffset(): float64
        set initialOffset(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapGrooveJoint2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapGrooveJoint2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHBoxContainer extends __RPCMapBoxContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHBoxContainer extends __NameMapBoxContainer {
    }
    /** A container that arranges its child controls horizontally.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hboxcontainer.html  
     */
    class HBoxContainer<Map extends NodePathMap = any> extends BoxContainer<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHBoxContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHBoxContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHFlowContainer extends __RPCMapFlowContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHFlowContainer extends __NameMapFlowContainer {
    }
    /** A container that arranges its child controls horizontally and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hflowcontainer.html  
     */
    class HFlowContainer<Map extends NodePathMap = any> extends FlowContainer<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHFlowContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHFlowContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHmacContext extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHmacContext extends __NameMapRefCounted {
    }
    class HmacContext extends RefCounted {
        constructor(identifier?: any)
        start(hashType: HashingContext.HashType, key: PackedByteArray | byte[] | ArrayBuffer): GError
        update(data: PackedByteArray | byte[] | ArrayBuffer): GError
        finish(): PackedByteArray
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHmacContext;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHmacContext;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHScrollBar extends __RPCMapScrollBar {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHScrollBar extends __NameMapScrollBar {
    }
    /** A horizontal scrollbar that goes from left (min) to right (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hscrollbar.html  
     */
    class HScrollBar<Map extends NodePathMap = any> extends ScrollBar<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHScrollBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHScrollBar;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHSeparator extends __RPCMapSeparator {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHSeparator extends __NameMapSeparator {
    }
    /** A horizontal line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hseparator.html  
     */
    class HSeparator<Map extends NodePathMap = any> extends Separator<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHSeparator;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHSeparator;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHSlider extends __RPCMapSlider {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHSlider extends __NameMapSlider {
    }
    /** A horizontal slider that goes from left (min) to right (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hslider.html  
     */
    class HSlider<Map extends NodePathMap = any> extends Slider<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHSlider;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHSlider;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHSplitContainer extends __RPCMapSplitContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHSplitContainer extends __NameMapSplitContainer {
    }
    /** A container that splits two child controls horizontally and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hsplitcontainer.html  
     */
    class HSplitContainer<Map extends NodePathMap = any> extends SplitContainer<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHSplitContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHSplitContainer;
    }
    namespace HttpClient {
        enum Method {
            MethodGet = 0,
            MethodHead = 1,
            MethodPost = 2,
            MethodPut = 3,
            MethodDelete = 4,
            MethodOptions = 5,
            MethodTrace = 6,
            MethodConnect = 7,
            MethodPatch = 8,
            MethodMax = 9,
        }
        enum Status {
            StatusDisconnected = 0,
            StatusResolving = 1,
            StatusCantResolve = 2,
            StatusConnecting = 3,
            StatusCantConnect = 4,
            StatusConnected = 5,
            StatusRequesting = 6,
            StatusBody = 7,
            StatusConnectionError = 8,
            StatusTlsHandshakeError = 9,
        }
        enum ResponseCode {
            ResponseContinue = 100,
            ResponseSwitchingProtocols = 101,
            ResponseProcessing = 102,
            ResponseOk = 200,
            ResponseCreated = 201,
            ResponseAccepted = 202,
            ResponseNonAuthoritativeInformation = 203,
            ResponseNoContent = 204,
            ResponseResetContent = 205,
            ResponsePartialContent = 206,
            ResponseMultiStatus = 207,
            ResponseAlreadyReported = 208,
            ResponseImUsed = 226,
            ResponseMultipleChoices = 300,
            ResponseMovedPermanently = 301,
            ResponseFound = 302,
            ResponseSeeOther = 303,
            ResponseNotModified = 304,
            ResponseUseProxy = 305,
            ResponseSwitchProxy = 306,
            ResponseTemporaryRedirect = 307,
            ResponsePermanentRedirect = 308,
            ResponseBadRequest = 400,
            ResponseUnauthorized = 401,
            ResponsePaymentRequired = 402,
            ResponseForbidden = 403,
            ResponseNotFound = 404,
            ResponseMethodNotAllowed = 405,
            ResponseNotAcceptable = 406,
            ResponseProxyAuthenticationRequired = 407,
            ResponseRequestTimeout = 408,
            ResponseConflict = 409,
            ResponseGone = 410,
            ResponseLengthRequired = 411,
            ResponsePreconditionFailed = 412,
            ResponseRequestEntityTooLarge = 413,
            ResponseRequestUriTooLong = 414,
            ResponseUnsupportedMediaType = 415,
            ResponseRequestedRangeNotSatisfiable = 416,
            ResponseExpectationFailed = 417,
            ResponseImATeapot = 418,
            ResponseMisdirectedRequest = 421,
            ResponseUnprocessableEntity = 422,
            ResponseLocked = 423,
            ResponseFailedDependency = 424,
            ResponseUpgradeRequired = 426,
            ResponsePreconditionRequired = 428,
            ResponseTooManyRequests = 429,
            ResponseRequestHeaderFieldsTooLarge = 431,
            ResponseUnavailableForLegalReasons = 451,
            ResponseInternalServerError = 500,
            ResponseNotImplemented = 501,
            ResponseBadGateway = 502,
            ResponseServiceUnavailable = 503,
            ResponseGatewayTimeout = 504,
            ResponseHttpVersionNotSupported = 505,
            ResponseVariantAlsoNegotiates = 506,
            ResponseInsufficientStorage = 507,
            ResponseLoopDetected = 508,
            ResponseNotExtended = 510,
            ResponseNetworkAuthRequired = 511,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHttpClient extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHttpClient extends __NameMapRefCounted {
        connect_to_host: "connectToHost";
        request_raw: "requestRaw";
        has_response: "hasResponse";
        is_response_chunked: "isResponseChunked";
        get_response_code: "getResponseCode";
        get_response_headers: "getResponseHeaders";
        get_response_headers_as_dictionary: "getResponseHeadersAsDictionary";
        get_response_body_length: "getResponseBodyLength";
        read_response_body_chunk: "readResponseBodyChunk";
        get_status: "getStatus";
        set_http_proxy: "setHttpProxy";
        set_https_proxy: "setHttpsProxy";
        query_string_from_dict: "queryStringFromDict";
        blocking_mode_enabled: "blockingModeEnabled";
        read_chunk_size: "readChunkSize";
    }
    class HttpClient extends RefCounted {
        constructor(identifier?: any)
        connectToHost(host: string, port?: int64 /* = -1 */, tlsOptions?: TlsOptions): GError
        requestRaw(method: HttpClient.Method, url: string, headers: PackedStringArray | string[], body: PackedByteArray | byte[] | ArrayBuffer): GError
        request(method: HttpClient.Method, url: string, headers: PackedStringArray | string[], body?: string /* = '' */): GError
        close(): void
        hasResponse(): boolean
        isResponseChunked(): boolean
        getResponseCode(): int64
        getResponseHeaders(): PackedStringArray
        getResponseHeadersAsDictionary(): GDictionary
        getResponseBodyLength(): int64
        readResponseBodyChunk(): PackedByteArray
        getStatus(): HttpClient.Status
        poll(): GError
        setHttpProxy(host: string, port: int64): void
        setHttpsProxy(host: string, port: int64): void
        queryStringFromDict(fields: GDictionary): string
        get blockingModeEnabled(): boolean
        set blockingModeEnabled(value: boolean)
        get connection(): null | StreamPeer
        set connection(value: null | StreamPeer)
        get readChunkSize(): int64
        set readChunkSize(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHttpClient;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHttpClient;
    }
    namespace HttpRequest {
        enum Result {
            ResultSuccess = 0,
            ResultChunkedBodySizeMismatch = 1,
            ResultCantConnect = 2,
            ResultCantResolve = 3,
            ResultConnectionError = 4,
            ResultTlsHandshakeError = 5,
            ResultNoResponse = 6,
            ResultBodySizeLimitExceeded = 7,
            ResultBodyDecompressFailed = 8,
            ResultRequestFailed = 9,
            ResultDownloadFileCantOpen = 10,
            ResultDownloadFileWriteError = 11,
            ResultRedirectLimitReached = 12,
            ResultTimeout = 13,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHttpRequest extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHttpRequest extends __NameMapNode {
        request_raw: "requestRaw";
        cancel_request: "cancelRequest";
        set_tls_options: "setTlsOptions";
        get_http_client_status: "getHttpClientStatus";
        get_downloaded_bytes: "getDownloadedBytes";
        get_body_size: "getBodySize";
        set_http_proxy: "setHttpProxy";
        set_https_proxy: "setHttpsProxy";
        download_file: "downloadFile";
        download_chunk_size: "downloadChunkSize";
        use_threads: "useThreads";
        accept_gzip: "acceptGZip";
        body_size_limit: "bodySizeLimit";
        max_redirects: "maxRedirects";
        request_completed: "requestCompleted";
    }
    class HttpRequest<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        request(url: string, customHeaders?: PackedStringArray | string[] /* = [] */, method?: HttpClient.Method /* = 0 */, requestData?: string /* = '' */): GError
        requestRaw(url: string, customHeaders?: PackedStringArray | string[] /* = [] */, method?: HttpClient.Method /* = 0 */, requestDataRaw?: PackedByteArray | byte[] | ArrayBuffer /* = [] */): GError
        cancelRequest(): void
        setTlsOptions(clientOptions: TlsOptions): void
        getHttpClientStatus(): HttpClient.Status
        getDownloadedBytes(): int64
        getBodySize(): int64
        setHttpProxy(host: string, port: int64): void
        setHttpsProxy(host: string, port: int64): void
        get downloadFile(): string
        set downloadFile(value: string)
        get downloadChunkSize(): int64
        set downloadChunkSize(value: int64)
        get useThreads(): boolean
        set useThreads(value: boolean)
        get acceptGZip(): boolean
        set acceptGZip(value: boolean)
        get bodySizeLimit(): int64
        set bodySizeLimit(value: int64)
        get maxRedirects(): int64
        set maxRedirects(value: int64)
        get timeout(): float64
        set timeout(value: float64)
        readonly requestCompleted: Signal<(result: int64, responseCode: int64, headers: PackedStringArray, body: PackedByteArray) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHttpRequest;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHttpRequest;
    }
    namespace HashingContext {
        enum HashType {
            HashMd5 = 0,
            HashSha1 = 1,
            HashSha256 = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHashingContext extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHashingContext extends __NameMapRefCounted {
    }
    /** Provides functionality for computing cryptographic hashes chunk by chunk.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hashingcontext.html  
     */
    class HashingContext extends RefCounted {
        constructor(identifier?: any)
        /** Starts a new hash computation of the given [param type] (e.g. [constant HASH_SHA256] to start computation of an SHA-256). */
        start(type: HashingContext.HashType): GError
        
        /** Updates the computation with the given [param chunk] of data. */
        update(chunk: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Closes the current context, and return the computed hash. */
        finish(): PackedByteArray
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHashingContext;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHashingContext;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHeightMapShape3D extends __RPCMapShape3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHeightMapShape3D extends __NameMapShape3D {
        get_min_height: "getMinHeight";
        get_max_height: "getMaxHeight";
        update_map_data_from_image: "updateMapDataFromImage";
        map_width: "mapWidth";
        map_depth: "mapDepth";
        map_data: "mapData";
    }
    /** A 3D height map shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_heightmapshape3d.html  
     */
    class HeightMapShape3D extends Shape3D {
        constructor(identifier?: any)
        /** Returns the smallest height value found in [member map_data]. Recalculates only when [member map_data] changes. */
        getMinHeight(): float64
        
        /** Returns the largest height value found in [member map_data]. Recalculates only when [member map_data] changes. */
        getMaxHeight(): float64
        
        /** Updates [member map_data] with data read from an [Image] reference. Automatically resizes heightmap [member map_width] and [member map_depth] to fit the full image width and height.  
         *  The image needs to be in either [constant Image.FORMAT_RF] (32 bit), [constant Image.FORMAT_RH] (16 bit), or [constant Image.FORMAT_R8] (8 bit).  
         *  Each image pixel is read in as a float on the range from `0.0` (black pixel) to `1.0` (white pixel). This range value gets remapped to [param height_min] and [param height_max] to form the final height value.  
         *      
         *  **Note:** Using a heightmap with 16-bit or 32-bit data, stored in EXR or HDR format is recommended. Using 8-bit height data, or a format like PNG that Godot imports as 8-bit, will result in a terraced terrain.  
         */
        updateMapDataFromImage(image: Image, heightMin: float64, heightMax: float64): void
        
        /** Number of vertices in the width of the height map. Changing this will resize the [member map_data]. */
        get mapWidth(): int64
        set mapWidth(value: int64)
        
        /** Number of vertices in the depth of the height map. Changing this will resize the [member map_data]. */
        get mapDepth(): int64
        set mapDepth(value: int64)
        
        /** Height map data. The array's size must be equal to [member map_width] multiplied by [member map_depth]. */
        get mapData(): PackedFloat32Array
        set mapData(value: PackedFloat32Array | float32[])
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHeightMapShape3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHeightMapShape3D;
    }
    namespace HingeJoint3D {
        enum Param {
            ParamBias = 0,
            ParamLimitUpper = 1,
            ParamLimitLower = 2,
            ParamLimitBias = 3,
            ParamLimitSoftness = 4,
            ParamLimitRelaxation = 5,
            ParamMotorTargetVelocity = 6,
            ParamMotorMaxImpulse = 7,
            ParamMax = 8,
        }
        enum Flag {
            FlagUseLimit = 0,
            FlagEnableMotor = 1,
            FlagMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapHingeJoint3D extends __RPCMapJoint3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapHingeJoint3D extends __NameMapJoint3D {
        set_param: "setParam";
        get_param: "getParam";
        set_flag: "setFlag";
        get_flag: "getFlag";
        "angular_limit/enable": "angularLimit/enable";
        "angular_limit/upper": "angularLimit/upper";
        "angular_limit/lower": "angularLimit/lower";
        "angular_limit/bias": "angularLimit/bias";
        "angular_limit/softness": "angularLimit/softness";
        "angular_limit/relaxation": "angularLimit/relaxation";
        "motor/target_velocity": "motor/targetVelocity";
        "motor/max_impulse": "motor/maxImpulse";
    }
    /** A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_hingejoint3d.html  
     */
    class HingeJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        constructor(identifier?: any)
        /** Sets the value of the specified parameter. */
        setParam(param: HingeJoint3D.Param, value: float64): void
        
        /** Returns the value of the specified parameter. */
        getParam(param: HingeJoint3D.Param): float64
        
        /** If `true`, enables the specified flag. */
        setFlag(flag: HingeJoint3D.Flag, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        getFlag(flag: HingeJoint3D.Flag): boolean
        
        /** The speed with which the two bodies get pulled together when they move in different directions. */
        get "params/bias"(): float64
        set "params/bias"(value: float64)
        
        /** If `true`, the hinges maximum and minimum rotation, defined by [member angular_limit/lower] and [member angular_limit/upper] has effects. */
        get "angularLimit/enable"(): boolean
        set "angularLimit/enable"(value: boolean)
        
        /** The maximum rotation. Only active if [member angular_limit/enable] is `true`. */
        get "angularLimit/upper"(): float64
        set "angularLimit/upper"(value: float64)
        
        /** The minimum rotation. Only active if [member angular_limit/enable] is `true`. */
        get "angularLimit/lower"(): float64
        set "angularLimit/lower"(value: float64)
        
        /** The speed with which the rotation across the axis perpendicular to the hinge gets corrected. */
        get "angularLimit/bias"(): float64
        set "angularLimit/bias"(value: float64)
        get "angularLimit/softness"(): float64
        set "angularLimit/softness"(value: float64)
        
        /** The lower this value, the more the rotation gets slowed down. */
        get "angularLimit/relaxation"(): float64
        set "angularLimit/relaxation"(value: float64)
        
        /** When activated, a motor turns the hinge. */
        get "motor/enable"(): boolean
        set "motor/enable"(value: boolean)
        
        /** Target speed for the motor. */
        get "motor/targetVelocity"(): float64
        set "motor/targetVelocity"(value: float64)
        
        /** Maximum acceleration for the motor. */
        get "motor/maxImpulse"(): float64
        set "motor/maxImpulse"(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapHingeJoint3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapHingeJoint3D;
    }
    namespace Image {
        enum Format {
            FormatL8 = 0,
            FormatLa8 = 1,
            FormatR8 = 2,
            FormatRg8 = 3,
            FormatRgb8 = 4,
            FormatRgba8 = 5,
            FormatRgba4444 = 6,
            FormatRgb565 = 7,
            FormatRf = 8,
            FormatRgf = 9,
            FormatRgbf = 10,
            FormatRgbaf = 11,
            FormatRh = 12,
            FormatRgh = 13,
            FormatRgbh = 14,
            FormatRgbah = 15,
            FormatRgbe9995 = 16,
            FormatDxt1 = 17,
            FormatDxt3 = 18,
            FormatDxt5 = 19,
            FormatRgtcR = 20,
            FormatRgtcRg = 21,
            FormatBptcRgba = 22,
            FormatBptcRgbf = 23,
            FormatBptcRgbfu = 24,
            FormatEtc = 25,
            FormatEtc2R11 = 26,
            FormatEtc2R11S = 27,
            FormatEtc2Rg11 = 28,
            FormatEtc2Rg11S = 29,
            FormatEtc2Rgb8 = 30,
            FormatEtc2Rgba8 = 31,
            FormatEtc2Rgb8A1 = 32,
            FormatEtc2RaAsRg = 33,
            FormatDxt5RaAsRg = 34,
            FormatAstc4X4 = 35,
            FormatAstc4X4Hdr = 36,
            FormatAstc8X8 = 37,
            FormatAstc8X8Hdr = 38,
            FormatMax = 39,
        }
        enum Interpolation {
            InterpolateNearest = 0,
            InterpolateBilinear = 1,
            InterpolateCubic = 2,
            InterpolateTrilinear = 3,
            InterpolateLanczos = 4,
        }
        enum AlphaMode {
            AlphaNone = 0,
            AlphaBit = 1,
            AlphaBlend = 2,
        }
        enum CompressMode {
            CompressS3Tc = 0,
            CompressEtc = 1,
            CompressEtc2 = 2,
            CompressBptc = 3,
            CompressAstc = 4,
            CompressMax = 5,
        }
        enum UsedChannels {
            UsedChannelsL = 0,
            UsedChannelsLa = 1,
            UsedChannelsR = 2,
            UsedChannelsRg = 3,
            UsedChannelsRgb = 4,
            UsedChannelsRgba = 5,
        }
        enum CompressSource {
            CompressSourceGeneric = 0,
            CompressSourceSrgb = 1,
            CompressSourceNormal = 2,
        }
        enum AstcFormat {
            AstcFormat4X4 = 0,
            AstcFormat8X8 = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImage extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImage extends __NameMapResource {
        get_width: "getWidth";
        get_height: "getHeight";
        get_size: "getSize";
        has_mipmaps: "hasMipmaps";
        get_format: "getFormat";
        get_data: "getData";
        get_data_size: "getDataSize";
        get_mipmap_count: "getMipmapCount";
        get_mipmap_offset: "getMipmapOffset";
        resize_to_po2: "resizeToPo2";
        shrink_x2: "shrinkX2";
        flip_x: "flipX";
        flip_y: "flipY";
        generate_mipmaps: "generateMipmaps";
        clear_mipmaps: "clearMipmaps";
        create_empty: "createEmpty";
        create_from_data: "createFromData";
        set_data: "setData";
        is_empty: "isEmpty";
        load_from_file: "loadFromFile";
        save_png: "savePng";
        save_png_to_buffer: "savePngToBuffer";
        save_jpg: "saveJpg";
        save_jpg_to_buffer: "saveJpgToBuffer";
        save_exr: "saveExr";
        save_exr_to_buffer: "saveExrToBuffer";
        save_dds: "saveDds";
        save_dds_to_buffer: "saveDdsToBuffer";
        save_webp: "saveWebp";
        save_webp_to_buffer: "saveWebpToBuffer";
        detect_alpha: "detectAlpha";
        is_invisible: "isInvisible";
        detect_used_channels: "detectUsedChannels";
        compress_from_channels: "compressFromChannels";
        is_compressed: "isCompressed";
        rotate_90: "rotate90";
        rotate_180: "rotate180";
        fix_alpha_edges: "fixAlphaEdges";
        premultiply_alpha: "premultiplyAlpha";
        srgb_to_linear: "srgbToLinear";
        linear_to_srgb: "linearToSrgb";
        normal_map_to_xy: "normalMapToXy";
        rgbe_to_srgb: "rgbeToSrgb";
        bump_map_to_normal_map: "bumpMapToNormalMap";
        compute_image_metrics: "computeImageMetrics";
        blit_rect: "blitRect";
        blit_rect_mask: "blitRectMask";
        blend_rect: "blendRect";
        blend_rect_mask: "blendRectMask";
        fill_rect: "fillRect";
        get_used_rect: "getUsedRect";
        get_region: "getRegion";
        copy_from: "copyFrom";
        get_pixelv: "getPixelv";
        get_pixel: "getPixel";
        set_pixelv: "setPixelv";
        set_pixel: "setPixel";
        adjust_bcs: "adjustBcs";
        load_png_from_buffer: "loadPngFromBuffer";
        load_jpg_from_buffer: "loadJpgFromBuffer";
        load_webp_from_buffer: "loadWebpFromBuffer";
        load_tga_from_buffer: "loadTgaFromBuffer";
        load_bmp_from_buffer: "loadBmpFromBuffer";
        load_ktx_from_buffer: "loadKtxFromBuffer";
        load_dds_from_buffer: "loadDdsFromBuffer";
        load_svg_from_buffer: "loadSvgFromBuffer";
        load_svg_from_string: "loadSvgFromString";
    }
    /** Image datatype.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_image.html  
     */
    class Image extends Resource {
        /** The maximal width allowed for [Image] resources. */
        static readonly MAX_WIDTH = 16777216
        
        /** The maximal height allowed for [Image] resources. */
        static readonly MAX_HEIGHT = 16777216
        constructor(identifier?: any)
        
        /** Returns the image's width. */
        getWidth(): int64
        
        /** Returns the image's height. */
        getHeight(): int64
        
        /** Returns the image's size (width and height). */
        getSize(): Vector2I
        
        /** Returns `true` if the image has generated mipmaps. */
        hasMipmaps(): boolean
        
        /** Returns this image's format. */
        getFormat(): Image.Format
        
        /** Returns a copy of the image's raw data. */
        getData(): PackedByteArray
        
        /** Returns size (in bytes) of the image's raw data. */
        getDataSize(): int64
        
        /** Converts this image's format to the given [param format]. */
        convert(format: Image.Format): void
        
        /** Returns the number of mipmap levels or 0 if the image has no mipmaps. The largest main level image is not counted as a mipmap level by this method, so if you want to include it you can add 1 to this count. */
        getMipmapCount(): int64
        
        /** Returns the offset where the image's mipmap with index [param mipmap] is stored in the [member data] dictionary. */
        getMipmapOffset(mipmap: int64): int64
        
        /** Resizes the image to the nearest power of 2 for the width and height. If [param square] is `true`, sets width and height to be the same. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resizeToPo2(square?: boolean /* = false */, interpolation?: Image.Interpolation /* = 1 */): void
        
        /** Resizes the image to the given [param width] and [param height]. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resize(width: int64, height: int64, interpolation?: Image.Interpolation /* = 1 */): void
        
        /** Shrinks the image by a factor of 2 on each axis (this divides the pixel count by 4). */
        shrinkX2(): void
        
        /** Crops the image to the given [param width] and [param height]. If the specified size is larger than the current size, the extra area is filled with black pixels. */
        crop(width: int64, height: int64): void
        
        /** Flips the image horizontally. */
        flipX(): void
        
        /** Flips the image vertically. */
        flipY(): void
        
        /** Generates mipmaps for the image. Mipmaps are precalculated lower-resolution copies of the image that are automatically used if the image needs to be scaled down when rendered. They help improve image quality and performance when rendering. This method returns an error if the image is compressed, in a custom format, or if the image's width/height is `0`. Enabling [param renormalize] when generating mipmaps for normal map textures will make sure all resulting vector values are normalized.  
         *  It is possible to check if the image has mipmaps by calling [method has_mipmaps] or [method get_mipmap_count]. Calling [method generate_mipmaps] on an image that already has mipmaps will replace existing mipmaps in the image.  
         */
        generateMipmaps(renormalize?: boolean /* = false */): GError
        
        /** Removes the image's mipmaps. */
        clearMipmaps(): void
        
        /** Creates an empty image of the given size and format. If [param use_mipmaps] is `true`, generates mipmaps for this image. See the [method generate_mipmaps]. */
        static create(width: int64, height: int64, useMipmaps: boolean, format: Image.Format): Image
        
        /** Creates an empty image of the given size and format. If [param use_mipmaps] is `true`, generates mipmaps for this image. See the [method generate_mipmaps]. */
        static createEmpty(width: int64, height: int64, useMipmaps: boolean, format: Image.Format): Image
        
        /** Creates a new image of the given size and format. Fills the image with the given raw data. If [param use_mipmaps] is `true`, loads the mipmaps for this image from [param data]. See [method generate_mipmaps]. */
        static createFromData(width: int64, height: int64, useMipmaps: boolean, format: Image.Format, data: PackedByteArray | byte[] | ArrayBuffer): Image
        
        /** Overwrites data of an existing [Image]. Non-static equivalent of [method create_from_data]. */
        setData(width: int64, height: int64, useMipmaps: boolean, format: Image.Format, data: PackedByteArray | byte[] | ArrayBuffer): void
        
        /** Returns `true` if the image has no data. */
        isEmpty(): boolean
        
        /** Loads an image from file [param path]. See [url=https://docs.godotengine.org/en/4.5/tutorials/assets_pipeline/importing_images.html#supported-image-formats]Supported image formats[/url] for a list of supported image formats and limitations.  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the `user://` directory, and may not work in exported projects.  
         *  See also [ImageTexture] description for usage examples.  
         */
        load(path: string): GError
        
        /** Creates a new [Image] and loads data from the specified file. */
        static loadFromFile(path: string): null | Image
        
        /** Saves the image as a PNG file to the file at [param path]. */
        savePng(path: string): GError
        
        /** Saves the image as a PNG file to a byte array. */
        savePngToBuffer(): PackedByteArray
        
        /** Saves the image as a JPEG file to [param path] with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger file sizes. Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting JPEG file won't contain the alpha channel.  
         */
        saveJpg(path: string, quality?: float64 /* = 0.75 */): GError
        
        /** Saves the image as a JPEG file to a byte array with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger byte array sizes (and therefore memory usage). Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting byte array won't contain the alpha channel.  
         */
        saveJpgToBuffer(quality?: float64 /* = 0.75 */): PackedByteArray
        
        /** Saves the image as an EXR file to [param path]. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.  
         */
        saveExr(path: string, grayscale?: boolean /* = false */): GError
        
        /** Saves the image as an EXR file to a byte array. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return an empty byte array if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr_to_buffer] will return an empty byte array when it is called from an exported project.  
         */
        saveExrToBuffer(grayscale?: boolean /* = false */): PackedByteArray
        
        /** Saves the image as a DDS (DirectDraw Surface) file to [param path]. DDS is a container format that can store textures in various compression formats, such as DXT1, DXT5, or BC7. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the DDS module.  
         *      
         *  **Note:** The DDS module may be disabled in certain builds, which means [method save_dds] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.  
         */
        saveDds(path: string): GError
        
        /** Saves the image as a DDS (DirectDraw Surface) file to a byte array. DDS is a container format that can store textures in various compression formats, such as DXT1, DXT5, or BC7. This function will return an empty byte array if Godot was compiled without the DDS module.  
         *      
         *  **Note:** The DDS module may be disabled in certain builds, which means [method save_dds_to_buffer] will return an empty byte array when it is called from an exported project.  
         */
        saveDdsToBuffer(): PackedByteArray
        
        /** Saves the image as a WebP (Web Picture) file to the file at [param path]. By default it will save lossless. If [param lossy] is `true`, the image will be saved lossy, using the [param quality] setting between `0.0` and `1.0` (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        saveWebp(path: string, lossy?: boolean /* = false */, quality?: float64 /* = 0.75 */): GError
        
        /** Saves the image as a WebP (Web Picture) file to a byte array. By default it will save lossless. If [param lossy] is `true`, the image will be saved lossy, using the [param quality] setting between `0.0` and `1.0` (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        saveWebpToBuffer(lossy?: boolean /* = false */, quality?: float64 /* = 0.75 */): PackedByteArray
        
        /** Returns [constant ALPHA_BLEND] if the image has data for alpha values. Returns [constant ALPHA_BIT] if all the alpha values are stored in a single bit. Returns [constant ALPHA_NONE] if no data for alpha values is found. */
        detectAlpha(): Image.AlphaMode
        
        /** Returns `true` if all the image's pixels have an alpha value of 0. Returns `false` if any pixel has an alpha value higher than 0. */
        isInvisible(): boolean
        
        /** Returns the color channels used by this image. If the image is compressed, the original [param source] must be specified. */
        detectUsedChannels(source?: Image.CompressSource /* = 0 */): Image.UsedChannels
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  The [param source] parameter helps to pick the best compression method for DXT and ETC2 formats. It is ignored for ASTC compression.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compress(mode: Image.CompressMode, source?: Image.CompressSource /* = 0 */, astcFormat?: Image.AstcFormat /* = 0 */): GError
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  This is an alternative to [method compress] that lets the user supply the channels used in order for the compressor to pick the best DXT and ETC2 formats. For other formats (non DXT or ETC2), this argument is ignored.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compressFromChannels(mode: Image.CompressMode, channels: Image.UsedChannels, astcFormat?: Image.AstcFormat /* = 0 */): GError
        
        /** Decompresses the image if it is VRAM compressed in a supported format. Returns [constant OK] if the format is supported, otherwise [constant ERR_UNAVAILABLE].  
         *      
         *  **Note:** The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.  
         */
        decompress(): GError
        
        /** Returns `true` if the image is compressed. */
        isCompressed(): boolean
        
        /** Rotates the image in the specified [param direction] by `90` degrees. The width and height of the image must be greater than `1`. If the width and height are not equal, the image will be resized. */
        rotate90(direction: ClockDirection): void
        
        /** Rotates the image by `180` degrees. The width and height of the image must be greater than `1`. */
        rotate180(): void
        
        /** Blends low-alpha pixels with nearby pixels. */
        fixAlphaEdges(): void
        
        /** Multiplies color values with alpha values. Resulting color values for a pixel are `(color * alpha)/256`. See also [member CanvasItemMaterial.blend_mode]. */
        premultiplyAlpha(): void
        
        /** Converts the raw data from the sRGB colorspace to a linear scale. Only works on images with [constant FORMAT_RGB8] or [constant FORMAT_RGBA8] formats. */
        srgbToLinear(): void
        
        /** Converts the entire image from the linear colorspace to the sRGB colorspace. Only works on images with [constant FORMAT_RGB8] or [constant FORMAT_RGBA8] formats. */
        linearToSrgb(): void
        
        /** Converts the image's data to represent coordinates on a 3D plane. This is used when the image represents a normal map. A normal map can add lots of detail to a 3D surface without increasing the polygon count. */
        normalMapToXy(): void
        
        /** Converts a standard RGBE (Red Green Blue Exponent) image to an sRGB image. */
        rgbeToSrgb(): null | Image
        
        /** Converts a bump map to a normal map. A bump map provides a height offset per-pixel, while a normal map provides a normal direction per pixel. */
        bumpMapToNormalMap(bumpScale?: float64 /* = 1 */): void
        
        /** Compute image metrics on the current image and the compared image.  
         *  The dictionary contains `max`, `mean`, `mean_squared`, `root_mean_squared` and `peak_snr`.  
         */
        computeImageMetrics(comparedImage: Image, useLuma: boolean): GDictionary
        
        /** Copies [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image **must** have the same format. [param src_rect] with non-positive size is treated as empty.  
         *      
         *  **Note:** The alpha channel data in [param src] will overwrite the corresponding data in this image at the target position. To blend alpha channels, use [method blend_rect] instead.  
         */
        blitRect(src: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Blits [param src_rect] area from [param src] image to this image at the coordinates given by [param dst], clipped accordingly to both image bounds. [param src] pixel is copied onto [param dst] if the corresponding [param mask] pixel's alpha value is not 0. This image and [param src] image **must** have the same format. [param src] image and [param mask] image **must** have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
        blitRectMask(src: Image, mask: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Alpha-blends [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image **must** have the same format. [param src_rect] with non-positive size is treated as empty. */
        blendRect(src: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Alpha-blends [param src_rect] from [param src] image to this image using [param mask] image at coordinates [param dst], clipped accordingly to both image bounds. Alpha channels are required for both [param src] and [param mask]. [param dst] pixels and [param src] pixels will blend if the corresponding mask pixel's alpha value is not 0. This image and [param src] image **must** have the same format. [param src] image and [param mask] image **must** have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
        blendRectMask(src: Image, mask: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Fills the image with [param color]. */
        fill(color: Color): void
        
        /** Fills [param rect] with [param color]. */
        fillRect(rect: Rect2I, color: Color): void
        
        /** Returns a [Rect2i] enclosing the visible portion of the image, considering each pixel with a non-zero alpha channel as visible. */
        getUsedRect(): Rect2I
        
        /** Returns a new [Image] that is a copy of this [Image]'s area specified with [param region]. */
        getRegion(region: Rect2I): null | Image
        
        /** Copies [param src] image to this image. */
        copyFrom(src: Image): void
        
        /** Returns the color of the pixel at [param point].  
         *  This is the same as [method get_pixel], but with a [Vector2i] argument instead of two integer arguments.  
         */
        getPixelv(point: Vector2I): Color
        
        /** Returns the color of the pixel at `(x, y)`.  
         *  This is the same as [method get_pixelv], but with two integer arguments instead of a [Vector2i] argument.  
         */
        getPixel(x: int64, y: int64): Color
        
        /** Sets the [Color] of the pixel at [param point] to [param color].  
         *    
         *  This is the same as [method set_pixel], but with a [Vector2i] argument instead of two integer arguments.  
         */
        setPixelv(point: Vector2I, color: Color): void
        
        /** Sets the [Color] of the pixel at `(x, y)` to [param color].  
         *    
         *  This is the same as [method set_pixelv], but with a two integer arguments instead of a [Vector2i] argument.  
         */
        setPixel(x: int64, y: int64, color: Color): void
        
        /** Adjusts this image's [param brightness], [param contrast], and [param saturation] by the given values. Does not work if the image is compressed (see [method is_compressed]). */
        adjustBcs(brightness: float64, contrast: float64, saturation: float64): void
        
        /** Loads an image from the binary contents of a PNG file. */
        loadPngFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a JPEG file. */
        loadJpgFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a WebP file. */
        loadWebpFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a TGA file.  
         *      
         *  **Note:** This method is only available in engine builds with the TGA module enabled. By default, the TGA module is enabled, but it can be disabled at build-time using the `module_tga_enabled=no` SCons option.  
         */
        loadTgaFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a BMP file.  
         *      
         *  **Note:** Godot's BMP module doesn't support 16-bit per pixel images. Only 1-bit, 4-bit, 8-bit, 24-bit, and 32-bit per pixel images are supported.  
         *      
         *  **Note:** This method is only available in engine builds with the BMP module enabled. By default, the BMP module is enabled, but it can be disabled at build-time using the `module_bmp_enabled=no` SCons option.  
         */
        loadBmpFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a [url=https://github.com/KhronosGroup/KTX-Software]KTX[/url] file. Unlike most image formats, KTX can store VRAM-compressed data and embed mipmaps.  
         *      
         *  **Note:** Godot's libktx implementation only supports 2D images. Cubemaps, texture arrays, and de-padding are not supported.  
         *      
         *  **Note:** This method is only available in engine builds with the KTX module enabled. By default, the KTX module is enabled, but it can be disabled at build-time using the `module_ktx_enabled=no` SCons option.  
         */
        loadKtxFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a DDS file.  
         *      
         *  **Note:** This method is only available in engine builds with the DDS module enabled. By default, the DDS module is enabled, but it can be disabled at build-time using the `module_dds_enabled=no` SCons option.  
         */
        loadDdsFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the UTF-8 binary contents of an **uncompressed** SVG file (**.svg**).  
         *      
         *  **Note:** Beware when using compressed SVG files (like **.svgz**), they need to be `decompressed` before loading.  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
         */
        loadSvgFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer, scale?: float64 /* = 1 */): GError
        
        /** Loads an image from the string contents of an SVG file (**.svg**).  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
         */
        loadSvgFromString(svgStr: string, scale?: float64 /* = 1 */): GError
        
        /** Holds all the image's color data in a given format. See [enum Format] constants. */
        get data(): GDictionary
        set data(value: GDictionary)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImage;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImage;
    }
    namespace ImageFormatLoader {
        enum LoaderFlags {
            FlagNone = 0,
            FlagForceLinear = 1,
            FlagConvertColors = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImageFormatLoader extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImageFormatLoader extends __NameMapRefCounted {
    }
    /** Base class to add support for specific image formats.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_imageformatloader.html  
     */
    class ImageFormatLoader extends RefCounted {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImageFormatLoader;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImageFormatLoader;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImageFormatLoaderExtension extends __RPCMapImageFormatLoader {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImageFormatLoaderExtension extends __NameMapImageFormatLoader {
        _get_recognized_extensions: "_getRecognizedExtensions";
        _load_image: "_loadImage";
        add_format_loader: "addFormatLoader";
        remove_format_loader: "removeFormatLoader";
    }
    /** Base class for creating [ImageFormatLoader] extensions (adding support for extra image formats).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_imageformatloaderextension.html  
     */
    class ImageFormatLoaderExtension extends ImageFormatLoader {
        constructor(identifier?: any)
        /** Returns the list of file extensions for this image format. Files with the given extensions will be treated as image file and loaded using this class. */
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        
        /** Loads the content of [param fileaccess] into the provided [param image]. */
        /* gdvirtual */ _loadImage(image: Image, fileaccess: FileAccess, flags: ImageFormatLoader.LoaderFlags, scale: float64): GError
        
        /** Add this format loader to the engine, allowing it to recognize the file extensions returned by [method _get_recognized_extensions]. */
        addFormatLoader(): void
        
        /** Remove this format loader from the engine. */
        removeFormatLoader(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImageFormatLoaderExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImageFormatLoaderExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImageTexture extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImageTexture extends __NameMapTexture2D {
        create_from_image: "createFromImage";
        get_format: "getFormat";
        set_image: "setImage";
        set_size_override: "setSizeOverride";
    }
    /** A [Texture2D] based on an [Image].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_imagetexture.html  
     */
    class ImageTexture extends Texture2D {
        constructor(identifier?: any)
        /** Creates a new [ImageTexture] and initializes it by allocating and setting the data from an [Image]. */
        static createFromImage(image: Image): ImageTexture
        
        /** Returns the format of the texture. */
        getFormat(): Image.Format
        
        /** Replaces the texture's data with a new [Image]. This will re-allocate new memory for the texture.  
         *  If you want to update the image, but don't need to change its parameters (format, size), use [method update] instead for better performance.  
         */
        setImage(image: Image): void
        
        /** Replaces the texture's data with a new [Image].  
         *      
         *  **Note:** The texture has to be created using [method create_from_image] or initialized first with the [method set_image] method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.  
         *  Use this method over [method set_image] if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.  
         */
        update(image: Image): void
        
        /** Resizes the texture to the specified dimensions. */
        setSizeOverride(size: Vector2I): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImageTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImageTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImageTexture3D extends __RPCMapTexture3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImageTexture3D extends __NameMapTexture3D {
    }
    /** Texture with 3 dimensions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_imagetexture3d.html  
     */
    class ImageTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** Creates the [ImageTexture3D] with specified [param format], [param width], [param height], and [param depth]. If [param use_mipmaps] is `true`, generates mipmaps for the [ImageTexture3D]. */
        create(format: Image.Format, width: int64, height: int64, depth: int64, useMipmaps: boolean, data: GArray<Image>): GError
        
        /** Replaces the texture's existing data with the layers specified in [param data]. The size of [param data] must match the parameters that were used for [method create]. In other words, the texture cannot be resized or have its format changed by calling [method update]. */
        update(data: GArray<Image>): void
        get _images(): GArray<Image>
        set _images(value: GArray<Image>)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImageTexture3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImageTexture3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImageTextureLayered extends __RPCMapTextureLayered {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImageTextureLayered extends __NameMapTextureLayered {
        create_from_images: "createFromImages";
        update_layer: "updateLayer";
    }
    /** Base class for texture types which contain the data of multiple [ImageTexture]s. Each image is of the same size and format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_imagetexturelayered.html  
     */
    class ImageTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        /** Creates an [ImageTextureLayered] from an array of [Image]s. See [method Image.create] for the expected data format. The first image decides the width, height, image format and mipmapping setting. The other images  *must*  have the same width, height, image format and mipmapping setting.  
         *  Each [Image] represents one `layer`.  
         *    
         */
        createFromImages(images: GArray<Image>): GError
        
        /** Replaces the existing [Image] data at the given [param layer] with this new image.  
         *  The given [Image] must have the same width, height, image format, and mipmapping flag as the rest of the referenced images.  
         *  If the image format is unsupported, it will be decompressed and converted to a similar and supported [enum Image.Format].  
         *  The update is immediate: it's synchronized with drawing.  
         */
        updateLayer(image: Image, layer: int64): void
        get _images(): GArray<Image>
        set _images(value: GArray<Image>)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImageTextureLayered;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImageTextureLayered;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImmediateMesh extends __RPCMapMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImmediateMesh extends __NameMapMesh {
        surface_begin: "surfaceBegin";
        surface_set_color: "surfaceSetColor";
        surface_set_normal: "surfaceSetNormal";
        surface_set_tangent: "surfaceSetTangent";
        surface_set_uv: "surfaceSetUV";
        surface_set_uv2: "surfaceSetUV2";
        surface_add_vertex: "surfaceAddVertex";
        surface_add_vertex_2d: "surfaceAddVertex2D";
        surface_end: "surfaceEnd";
        clear_surfaces: "clearSurfaces";
    }
    /** Mesh optimized for creating geometry manually.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_immediatemesh.html  
     */
    class ImmediateMesh extends Mesh {
        constructor(identifier?: any)
        /** Begin a new surface. */
        surfaceBegin(primitive: Mesh.PrimitiveType, material?: Material): void
        
        /** Set the color attribute that will be pushed with the next vertex. */
        surfaceSetColor(color: Color): void
        
        /** Set the normal attribute that will be pushed with the next vertex. */
        surfaceSetNormal(normal: Vector3): void
        
        /** Set the tangent attribute that will be pushed with the next vertex. */
        surfaceSetTangent(tangent: Plane): void
        
        /** Set the UV attribute that will be pushed with the next vertex. */
        surfaceSetUV(uV: Vector2): void
        
        /** Set the UV2 attribute that will be pushed with the next vertex. */
        surfaceSetUV2(uV2: Vector2): void
        
        /** Add a 3D vertex using the current attributes previously set. */
        surfaceAddVertex(vertex: Vector3): void
        
        /** Add a 2D vertex using the current attributes previously set. */
        surfaceAddVertex2D(vertex: Vector2): void
        
        /** End and commit current surface. Note that surface being created will not be visible until this function is called. */
        surfaceEnd(): void
        
        /** Clear all surfaces. */
        clearSurfaces(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImmediateMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImmediateMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImporterMesh extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImporterMesh extends __NameMapResource {
        add_blend_shape: "addBlendShape";
        get_blend_shape_count: "getBlendShapeCount";
        get_blend_shape_name: "getBlendShapeName";
        set_blend_shape_mode: "setBlendShapeMode";
        get_blend_shape_mode: "getBlendShapeMode";
        add_surface: "addSurface";
        get_surface_count: "getSurfaceCount";
        get_surface_primitive_type: "getSurfacePrimitiveType";
        get_surface_name: "getSurfaceName";
        get_surface_arrays: "getSurfaceArrays";
        get_surface_blend_shape_arrays: "getSurfaceBlendShapeArrays";
        get_surface_lod_count: "getSurfaceLodCount";
        get_surface_lod_size: "getSurfaceLodSize";
        get_surface_lod_indices: "getSurfaceLodIndices";
        get_surface_material: "getSurfaceMaterial";
        get_surface_format: "getSurfaceFormat";
        set_surface_name: "setSurfaceName";
        set_surface_material: "setSurfaceMaterial";
        generate_lods: "generateLods";
        get_mesh: "getMesh";
        set_lightmap_size_hint: "setLightmapSizeHint";
        get_lightmap_size_hint: "getLightmapSizeHint";
    }
    /** A [Resource] that contains vertex array-based geometry during the import process.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_importermesh.html  
     */
    class ImporterMesh extends Resource {
        constructor(identifier?: any)
        /** Adds name for a blend shape that will be added with [method add_surface]. Must be called before surface is added. */
        addBlendShape(name: string): void
        
        /** Returns the number of blend shapes that the mesh holds. */
        getBlendShapeCount(): int64
        
        /** Returns the name of the blend shape at this index. */
        getBlendShapeName(blendShapeIdx: int64): string
        
        /** Sets the blend shape mode. */
        setBlendShapeMode(mode: Mesh.BlendShapeMode): void
        
        /** Returns the blend shape mode for this Mesh. */
        getBlendShapeMode(): Mesh.BlendShapeMode
        
        /** Creates a new surface. [method Mesh.get_surface_count] will become the `surf_idx` for this new surface.  
         *  Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].  
         *  The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.  
         *  The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are `null`.  
         *  The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents an LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of an LOD also increases the distance that the objects has to be from the camera before the LOD is used.  
         *  The [param flags] argument is the bitwise OR of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         *      
         *  **Note:** When using indices, it is recommended to only use points, lines, or triangles.  
         */
        addSurface(primitive: Mesh.PrimitiveType, arrays: GArray, blendShapes?: GArray<GArray>, lods?: GDictionary /* = new GDictionary() */, material?: Material, name?: string /* = '' */, flags?: int64 /* = 0 */): void
        
        /** Returns the number of surfaces that the mesh holds. */
        getSurfaceCount(): int64
        
        /** Returns the primitive type of the requested surface (see [method add_surface]). */
        getSurfacePrimitiveType(surfaceIdx: int64): Mesh.PrimitiveType
        
        /** Gets the name assigned to this surface. */
        getSurfaceName(surfaceIdx: int64): string
        
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface. See [method add_surface]. */
        getSurfaceArrays(surfaceIdx: int64): GArray
        
        /** Returns a single set of blend shape arrays for the requested blend shape index for a surface. */
        getSurfaceBlendShapeArrays(surfaceIdx: int64, blendShapeIdx: int64): GArray
        
        /** Returns the number of lods that the mesh holds on a given surface. */
        getSurfaceLodCount(surfaceIdx: int64): int64
        
        /** Returns the screen ratio which activates a lod for a surface. */
        getSurfaceLodSize(surfaceIdx: int64, lodIdx: int64): float64
        
        /** Returns the index buffer of a lod for a surface. */
        getSurfaceLodIndices(surfaceIdx: int64, lodIdx: int64): PackedInt32Array
        
        /** Returns a [Material] in a given surface. Surface is rendered using this material. */
        getSurfaceMaterial(surfaceIdx: int64): null | Material
        
        /** Returns the format of the surface that the mesh holds. */
        getSurfaceFormat(surfaceIdx: int64): int64
        
        /** Sets a name for a given surface. */
        setSurfaceName(surfaceIdx: int64, name: string): void
        
        /** Sets a [Material] for a given surface. Surface will be rendered using this material. */
        setSurfaceMaterial(surfaceIdx: int64, material: Material): void
        
        /** Generates all lods for this ImporterMesh.  
         *  [param normal_merge_angle] is in degrees and used in the same way as the importer settings in `lods`.  
         *  [param normal_split_angle] is not used and only remains for compatibility with older versions of the API.  
         *  The number of generated lods can be accessed using [method get_surface_lod_count], and each LOD is available in [method get_surface_lod_size] and [method get_surface_lod_indices].  
         *  [param bone_transform_array] is an [Array] which can be either empty or contain [Transform3D]s which, for each of the mesh's bone IDs, will apply mesh skinning when generating the LOD mesh variations. This is usually used to account for discrepancies in scale between the mesh itself and its skinning data.  
         */
        generateLods(normalMergeAngle: float64, normalSplitAngle: float64, boneTransformArray: GArray): void
        
        /** Returns the mesh data represented by this [ImporterMesh] as a usable [ArrayMesh].  
         *  This method caches the returned mesh, and subsequent calls will return the cached data until [method clear] is called.  
         *  If not yet cached and [param base_mesh] is provided, [param base_mesh] will be used and mutated.  
         */
        getMesh(baseMesh?: ArrayMesh): null | ArrayMesh
        
        /** Removes all surfaces and blend shapes from this [ImporterMesh]. */
        clear(): void
        
        /** Sets the size hint of this mesh for lightmap-unwrapping in UV-space. */
        setLightmapSizeHint(size: Vector2I): void
        
        /** Returns the size hint of this mesh for lightmap-unwrapping in UV-space. */
        getLightmapSizeHint(): Vector2I
        get _data(): GDictionary
        set _data(value: GDictionary)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImporterMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImporterMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapImporterMeshInstance3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapImporterMeshInstance3D extends __NameMapNode3D {
        skeleton_path: "skeletonPath";
        layer_mask: "layerMask";
        cast_shadow: "castShadow";
        visibility_range_begin: "visibilityRangeBegin";
        visibility_range_begin_margin: "visibilityRangeBeginMargin";
        visibility_range_end: "visibilityRangeEnd";
        visibility_range_end_margin: "visibilityRangeEndMargin";
        visibility_range_fade_mode: "visibilityRangeFadeMode";
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_importermeshinstance3d.html */
    class ImporterMeshInstance3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        get mesh(): null | ImporterMesh
        set mesh(value: null | ImporterMesh)
        get skin(): null | Skin
        set skin(value: null | Skin)
        get skeletonPath(): NodePath
        set skeletonPath(value: NodePath | string)
        get layerMask(): int64
        set layerMask(value: int64)
        get castShadow(): int64
        set castShadow(value: int64)
        get visibilityRangeBegin(): float64
        set visibilityRangeBegin(value: float64)
        get visibilityRangeBeginMargin(): float64
        set visibilityRangeBeginMargin(value: float64)
        get visibilityRangeEnd(): float64
        set visibilityRangeEnd(value: float64)
        get visibilityRangeEndMargin(): float64
        set visibilityRangeEndMargin(value: float64)
        get visibilityRangeFadeMode(): int64
        set visibilityRangeFadeMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapImporterMeshInstance3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapImporterMeshInstance3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEvent extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEvent extends __NameMapResource {
        is_action: "isAction";
        is_action_pressed: "isActionPressed";
        is_action_released: "isActionReleased";
        get_action_strength: "getActionStrength";
        is_canceled: "isCanceled";
        is_pressed: "isPressed";
        is_released: "isReleased";
        is_echo: "isEcho";
        as_text: "asText";
        is_match: "isMatch";
        is_action_type: "isActionType";
        xformed_by: "xformedBy";
    }
    /** Abstract base class for input events.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputevent.html  
     */
    class InputEvent extends Resource {
        /** Device ID used for emulated mouse input from a touchscreen, or for emulated touch input from a mouse. This can be used to distinguish emulated mouse input from physical mouse input, or emulated touch input from physical touch input. */
        static readonly DEVICE_ID_EMULATION = -1
        constructor(identifier?: any)
        
        /** Returns `true` if this input event matches a pre-defined action of any type.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        isAction(action: InputActionName, exactMatch?: boolean /* = false */): boolean
        
        /** Returns `true` if the given action matches this event and is being pressed (and is not an echo event for [InputEventKey] events, unless [param allow_echo] is `true`). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_action_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/4.5/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        isActionPressed(action: InputActionName, allowEcho?: boolean /* = false */, exactMatch?: boolean /* = false */): boolean
        
        /** Returns `true` if the given action matches this event and is released (i.e. not pressed). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        isActionReleased(action: InputActionName, exactMatch?: boolean /* = false */): boolean
        
        /** Returns a value between 0.0 and 1.0 depending on the given actions' state. Useful for getting the value of events of type [InputEventJoypadMotion].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        getActionStrength(action: InputActionName, exactMatch?: boolean /* = false */): float64
        
        /** Returns `true` if this input event has been canceled. */
        isCanceled(): boolean
        
        /** Returns `true` if this input event is pressed. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/4.5/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        isPressed(): boolean
        
        /** Returns `true` if this input event is released. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag]. */
        isReleased(): boolean
        
        /** Returns `true` if this input event is an echo event (only for events of type [InputEventKey]). An echo event is a repeated key event sent when the user is holding down the key. Any other event type returns `false`.  
         *      
         *  **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.  
         */
        isEcho(): boolean
        
        /** Returns a [String] representation of the event. */
        asText(): string
        
        /** Returns `true` if the specified [param event] matches this event. Only valid for action events, which include key ([InputEventKey]), button ([InputEventMouseButton] or [InputEventJoypadButton]), axis [InputEventJoypadMotion], and action ([InputEventAction]) events.  
         *  If [param exact_match] is `false`, the check ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** This method only considers the event configuration (such as the keyboard key or the joypad axis), not state information like [method is_pressed], [method is_released], [method is_echo], or [method is_canceled].  
         */
        isMatch(event: InputEvent, exactMatch?: boolean /* = true */): boolean
        
        /** Returns `true` if this input event's type is one that can be assigned to an input action: [InputEventKey], [InputEventMouseButton], [InputEventJoypadButton], [InputEventJoypadMotion], [InputEventAction]. Returns `false` for all other input event types. */
        isActionType(): boolean
        
        /** Returns `true` if the given input event and this input event can be added together (only for events of type [InputEventMouseMotion]).  
         *  The given input event's position, global position and speed will be copied. The resulting `relative` is a sum of both events. Both events' modifiers have to be identical.  
         */
        accumulate(withEvent: InputEvent): boolean
        
        /** Returns a copy of the given input event which has been offset by [param local_ofs] and transformed by [param xform]. Relevant for events of type [InputEventMouseButton], [InputEventMouseMotion], [InputEventScreenTouch], [InputEventScreenDrag], [InputEventMagnifyGesture] and [InputEventPanGesture]. */
        xformedBy(xform: Transform2D, localOfs?: Vector2 /* = Vector2.ZERO */): null | InputEvent
        
        /** The event's device ID.  
         *      
         *  **Note:** [member device] can be negative for special use cases that don't refer to devices physically present on the system. See [constant DEVICE_ID_EMULATION].  
         */
        get device(): int64
        set device(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEvent;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEvent;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventAction extends __RPCMapInputEvent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventAction extends __NameMapInputEvent {
        event_index: "eventIndex";
    }
    /** An input event type for actions.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventaction.html  
     */
    class InputEventAction extends InputEvent {
        constructor(identifier?: any)
        /** The action's name. This is usually the name of an existing action in the [InputMap] which you want this custom event to match. */
        get action(): StringName
        set action(value: StringName)
        
        /** If `true`, the action's state is pressed. If `false`, the action's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is `false`. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed. */
        get strength(): float64
        set strength(value: float64)
        
        /** The real event index in action this event corresponds to (from events defined for this action in the [InputMap]). If `-1`, a unique ID will be used and actions pressed with this ID will need to be released with another [InputEventAction]. */
        get eventIndex(): int64
        set eventIndex(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventAction;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventAction;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventFromWindow extends __RPCMapInputEvent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventFromWindow extends __NameMapInputEvent {
        window_id: "windowId";
    }
    /** Abstract base class for [Viewport]-based input events.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventfromwindow.html  
     */
    class InputEventFromWindow extends InputEvent {
        constructor(identifier?: any)
        /** The ID of a [Window] that received this event. */
        get windowId(): int64
        set windowId(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventFromWindow;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventFromWindow;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventGesture extends __RPCMapInputEventWithModifiers {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventGesture extends __NameMapInputEventWithModifiers {
    }
    /** Abstract base class for touch gestures.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventgesture.html  
     */
    class InputEventGesture extends InputEventWithModifiers {
        constructor(identifier?: any)
        /** The local gesture position relative to the [Viewport]. If used in [method Control._gui_input], the position is relative to the current [Control] that received this gesture. */
        get position(): Vector2
        set position(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventGesture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventGesture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventJoypadButton extends __RPCMapInputEvent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventJoypadButton extends __NameMapInputEvent {
        button_index: "buttonIndex";
    }
    /** Represents a gamepad button being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventjoypadbutton.html  
     */
    class InputEventJoypadButton extends InputEvent {
        constructor(identifier?: any)
        /** Button identifier. One of the [enum JoyButton] button constants. */
        get buttonIndex(): int64
        set buttonIndex(value: int64)
        get pressure(): float64
        set pressure(value: float64)
        
        /** If `true`, the button's state is pressed. If `false`, the button's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventJoypadButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventJoypadButton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventJoypadMotion extends __RPCMapInputEvent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventJoypadMotion extends __NameMapInputEvent {
        axis_value: "axisValue";
    }
    /** Represents axis motions (such as joystick or analog triggers) from a gamepad.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventjoypadmotion.html  
     */
    class InputEventJoypadMotion extends InputEvent {
        constructor(identifier?: any)
        /** Axis identifier. */
        get axis(): int64
        set axis(value: int64)
        
        /** Current position of the joystick on the given axis. The value ranges from `-1.0` to `1.0`. A value of `0` means the axis is in its resting position. */
        get axisValue(): float64
        set axisValue(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventJoypadMotion;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventJoypadMotion;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventKey extends __RPCMapInputEventWithModifiers {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventKey extends __NameMapInputEventWithModifiers {
        get_keycode_with_modifiers: "getKeycodeWithModifiers";
        get_physical_keycode_with_modifiers: "getPhysicalKeycodeWithModifiers";
        get_key_label_with_modifiers: "getKeyLabelWithModifiers";
        as_text_keycode: "asTextKeycode";
        as_text_physical_keycode: "asTextPhysicalKeycode";
        as_text_key_label: "asTextKeyLabel";
        as_text_location: "asTextLocation";
        physical_keycode: "physicalKeycode";
        key_label: "keyLabel";
    }
    /** Represents a key on a keyboard being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventkey.html  
     */
    class InputEventKey extends InputEventWithModifiers {
        constructor(identifier?: any)
        /** Returns the Latin keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_keycode_with_modifiers())` where `event` is the [InputEventKey].  
         */
        getKeycodeWithModifiers(): Key
        
        /** Returns the physical keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_physical_keycode_with_modifiers())` where `event` is the [InputEventKey].  
         */
        getPhysicalKeycodeWithModifiers(): Key
        
        /** Returns the localized key label combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_key_label_with_modifiers())` where `event` is the [InputEventKey].  
         */
        getKeyLabelWithModifiers(): Key
        
        /** Returns a [String] representation of the event's [member keycode] and modifiers. */
        asTextKeycode(): string
        
        /** Returns a [String] representation of the event's [member physical_keycode] and modifiers. */
        asTextPhysicalKeycode(): string
        
        /** Returns a [String] representation of the event's [member key_label] and modifiers. */
        asTextKeyLabel(): string
        
        /** Returns a [String] representation of the event's [member location]. This will be a blank string if the event is not specific to a location. */
        asTextLocation(): string
        
        /** If `true`, the key's state is pressed. If `false`, the key's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** Latin label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.keycode)` where `event` is the [InputEventKey].  
         *  [codeblock lang=text]  
         *  +-----+ +-----+  
         *  | Q   | | Q   | - "Q" - keycode  
         *  |   Й | |  ض | - "Й" and "ض" - key_label  
         *  +-----+ +-----+  
         *  [/codeblock]  
         */
        get keycode(): int64
        set keycode(value: int64)
        
        /** Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use [method OS.get_keycode_string] in combination with [method DisplayServer.keyboard_get_keycode_from_physical]:  
         *    
         */
        get physicalKeycode(): int64
        set physicalKeycode(value: int64)
        
        /** Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants or any valid Unicode character.  
         *  For keyboard layouts with a single label on the key, it is equivalent to [member keycode].  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.key_label)` where `event` is the [InputEventKey].  
         *  [codeblock lang=text]  
         *  +-----+ +-----+  
         *  | Q   | | Q   | - "Q" - keycode  
         *  |   Й | |  ض | - "Й" and "ض" - key_label  
         *  +-----+ +-----+  
         *  [/codeblock]  
         */
        get keyLabel(): int64
        set keyLabel(value: int64)
        
        /** The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See [method Window.set_ime_active] for more information. */
        get unicode(): int64
        set unicode(value: int64)
        
        /** Represents the location of a key which has both left and right versions, such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. */
        get location(): int64
        set location(value: int64)
        
        /** If `true`, the key was already pressed before this event. An echo event is a repeated key event sent when the user is holding down the key.  
         *      
         *  **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.  
         */
        get echo(): boolean
        set echo(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventKey;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventKey;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventMidi extends __RPCMapInputEvent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventMidi extends __NameMapInputEvent {
        controller_number: "controllerNumber";
        controller_value: "controllerValue";
    }
    class InputEventMidi extends InputEvent {
        constructor(identifier?: any)
        get channel(): int64
        set channel(value: int64)
        get message(): int64
        set message(value: int64)
        get pitch(): int64
        set pitch(value: int64)
        get velocity(): int64
        set velocity(value: int64)
        get instrument(): int64
        set instrument(value: int64)
        get pressure(): int64
        set pressure(value: int64)
        get controllerNumber(): int64
        set controllerNumber(value: int64)
        get controllerValue(): int64
        set controllerValue(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventMidi;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventMidi;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventMagnifyGesture extends __RPCMapInputEventGesture {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventMagnifyGesture extends __NameMapInputEventGesture {
    }
    /** Represents a magnifying touch gesture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventmagnifygesture.html  
     */
    class InputEventMagnifyGesture extends InputEventGesture {
        constructor(identifier?: any)
        /** The amount (or delta) of the event. This value is closer to `1.0` the slower the gesture is performed. */
        get factor(): float64
        set factor(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventMagnifyGesture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventMagnifyGesture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventMouse extends __RPCMapInputEventWithModifiers {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventMouse extends __NameMapInputEventWithModifiers {
        button_mask: "buttonMask";
        global_position: "globalPosition";
    }
    /** Base input event type for mouse events.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventmouse.html  
     */
    class InputEventMouse extends InputEventWithModifiers {
        constructor(identifier?: any)
        /** The mouse button mask identifier, one of or a bitwise combination of the [enum MouseButton] button masks. */
        get buttonMask(): int64
        set buttonMask(value: int64)
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the [Viewport] this [Node] is in using the coordinate system of this [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [Control] using the local coordinate system of the [Control].  
         */
        get position(): Vector2
        set position(value: Vector2)
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the root [Viewport] using the coordinate system of the root [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [CanvasLayer] that the [Control] is in using the coordinate system of the [CanvasLayer].  
         */
        get globalPosition(): Vector2
        set globalPosition(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventMouse;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventMouse;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventMouseButton extends __RPCMapInputEventMouse {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventMouseButton extends __NameMapInputEventMouse {
        button_index: "buttonIndex";
        double_click: "doubleClick";
    }
    /** Represents a mouse button being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventmousebutton.html  
     */
    class InputEventMouseButton extends InputEventMouse {
        constructor(identifier?: any)
        /** The amount (or delta) of the event. When used for high-precision scroll events, this indicates the scroll amount (vertical or horizontal). This is only supported on some platforms; the reported sensitivity varies depending on the platform. May be `0` if not supported. */
        get factor(): float64
        set factor(value: float64)
        
        /** The mouse button identifier, one of the [enum MouseButton] button or button wheel constants. */
        get buttonIndex(): int64
        set buttonIndex(value: int64)
        
        /** If `true`, the mouse button event has been canceled. */
        get canceled(): boolean
        set canceled(value: boolean)
        
        /** If `true`, the mouse button's state is pressed. If `false`, the mouse button's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** If `true`, the mouse button's state is a double-click. */
        get doubleClick(): boolean
        set doubleClick(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventMouseButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventMouseButton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventMouseMotion extends __RPCMapInputEventMouse {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventMouseMotion extends __NameMapInputEventMouse {
        pen_inverted: "penInverted";
        screen_relative: "screenRelative";
        screen_velocity: "screenVelocity";
    }
    /** Represents a mouse or a pen movement.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventmousemotion.html  
     */
    class InputEventMouseMotion extends InputEventMouse {
        constructor(identifier?: any)
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        get tilt(): Vector2
        set tilt(value: Vector2)
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        get pressure(): float64
        set pressure(value: float64)
        
        /** Returns `true` when using the eraser end of a stylus pen.  
         *      
         *  **Note:** This property is implemented on Linux, macOS and Windows.  
         */
        get penInverted(): boolean
        set penInverted(value: boolean)
        
        /** The mouse position relative to the previous position (position at the last frame).  
         *      
         *  **Note:** Since [InputEventMouseMotion] may only be emitted when the mouse moves, it is not possible to reliably detect when the mouse has stopped moving by checking this property. A separate, short timer may be necessary.  
         *      
         *  **Note:** [member relative] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means mouse sensitivity will appear different depending on resolution when using [member relative] in a script that handles mouse aiming with the [constant Input.MOUSE_MODE_CAPTURED] mouse mode. To avoid this, use [member screen_relative] instead.  
         */
        get relative(): Vector2
        set relative(value: Vector2)
        
        /** The unscaled mouse position relative to the previous position in the coordinate system of the screen (position at the last frame).  
         *      
         *  **Note:** Since [InputEventMouseMotion] may only be emitted when the mouse moves, it is not possible to reliably detect when the mouse has stopped moving by checking this property. A separate, short timer may be necessary.  
         *      
         *  **Note:** This coordinate is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by]. This should be preferred over [member relative] for mouse aiming when using the [constant Input.MOUSE_MODE_CAPTURED] mouse mode, regardless of the project's stretch mode.  
         */
        get screenRelative(): Vector2
        set screenRelative(value: Vector2)
        
        /** The mouse velocity in pixels per second.  
         *      
         *  **Note:** [member velocity] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. That means mouse sensitivity may appear different depending on resolution.  
         *      
         *  **Note:** Use [member screen_relative] for mouse aiming using the [constant Input.MOUSE_MODE_CAPTURED] mouse mode.  
         */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The unscaled mouse velocity in pixels per second in screen coordinates. This velocity is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by].  
         *      
         *  **Note:** Use [member screen_relative] for mouse aiming using the [constant Input.MOUSE_MODE_CAPTURED] mouse mode.  
         */
        get screenVelocity(): Vector2
        set screenVelocity(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventMouseMotion;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventMouseMotion;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventPanGesture extends __RPCMapInputEventGesture {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventPanGesture extends __NameMapInputEventGesture {
    }
    /** Represents a panning touch gesture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventpangesture.html  
     */
    class InputEventPanGesture extends InputEventGesture {
        constructor(identifier?: any)
        /** Panning amount since last pan event. */
        get delta(): Vector2
        set delta(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventPanGesture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventPanGesture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventScreenDrag extends __RPCMapInputEventFromWindow {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventScreenDrag extends __NameMapInputEventFromWindow {
        pen_inverted: "penInverted";
        screen_relative: "screenRelative";
        screen_velocity: "screenVelocity";
    }
    /** Represents a screen drag event.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventscreendrag.html  
     */
    class InputEventScreenDrag extends InputEventFromWindow {
        constructor(identifier?: any)
        /** The drag event index in the case of a multi-drag event. */
        get index(): int64
        set index(value: int64)
        
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        get tilt(): Vector2
        set tilt(value: Vector2)
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        get pressure(): float64
        set pressure(value: float64)
        
        /** Returns `true` when using the eraser end of a stylus pen. */
        get penInverted(): boolean
        set penInverted(value: boolean)
        
        /** The drag position in the viewport the node is in, using the coordinate system of this viewport. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** The drag position relative to the previous position (position at the last frame).  
         *      
         *  **Note:** [member relative] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means touch sensitivity will appear different depending on resolution when using [member relative] in a script that handles touch aiming. To avoid this, use [member screen_relative] instead.  
         */
        get relative(): Vector2
        set relative(value: Vector2)
        
        /** The unscaled drag position relative to the previous position in screen coordinates (position at the last frame). This position is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by]. This should be preferred over [member relative] for touch aiming regardless of the project's stretch mode. */
        get screenRelative(): Vector2
        set screenRelative(value: Vector2)
        
        /** The drag velocity.  
         *      
         *  **Note:** [member velocity] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means touch sensitivity will appear different depending on resolution when using [member velocity] in a script that handles touch aiming. To avoid this, use [member screen_velocity] instead.  
         */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The unscaled drag velocity in pixels per second in screen coordinates. This velocity is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by]. This should be preferred over [member velocity] for touch aiming regardless of the project's stretch mode. */
        get screenVelocity(): Vector2
        set screenVelocity(value: Vector2)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventScreenDrag;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventScreenDrag;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventScreenTouch extends __RPCMapInputEventFromWindow {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventScreenTouch extends __NameMapInputEventFromWindow {
        double_tap: "doubleTap";
    }
    /** Represents a screen touch event.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventscreentouch.html  
     */
    class InputEventScreenTouch extends InputEventFromWindow {
        constructor(identifier?: any)
        /** The touch index in the case of a multi-touch event. One index = one finger. */
        get index(): int64
        set index(value: int64)
        
        /** The touch position in the viewport the node is in, using the coordinate system of this viewport. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** If `true`, the touch event has been canceled. */
        get canceled(): boolean
        set canceled(value: boolean)
        
        /** If `true`, the touch's state is pressed. If `false`, the touch's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** If `true`, the touch's state is a double tap. */
        get doubleTap(): boolean
        set doubleTap(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventScreenTouch;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventScreenTouch;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventShortcut extends __RPCMapInputEvent {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventShortcut extends __NameMapInputEvent {
    }
    /** Represents a triggered keyboard [Shortcut].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventshortcut.html  
     */
    class InputEventShortcut extends InputEvent {
        constructor(identifier?: any)
        /** The [Shortcut] represented by this event. Its [method Shortcut.matches_event] method will always return `true` for this event. */
        get shortcut(): null | Shortcut
        set shortcut(value: null | Shortcut)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventShortcut;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventShortcut;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInputEventWithModifiers extends __RPCMapInputEventFromWindow {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInputEventWithModifiers extends __NameMapInputEventFromWindow {
        is_command_or_control_pressed: "isCommandOrControlPressed";
        get_modifiers_mask: "getModifiersMask";
        command_or_control_autoremap: "commandOrControlAutoremap";
        alt_pressed: "altPressed";
        shift_pressed: "shiftPressed";
        ctrl_pressed: "ctrlPressed";
        meta_pressed: "metaPressed";
    }
    /** Abstract base class for input events affected by modifier keys like [kbd]Shift[/kbd] and [kbd]Alt[/kbd].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_inputeventwithmodifiers.html  
     */
    class InputEventWithModifiers extends InputEventFromWindow {
        constructor(identifier?: any)
        /** On macOS, returns `true` if [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) is pressed.  
         *  On other platforms, returns `true` if [kbd]Ctrl[/kbd] is pressed.  
         */
        isCommandOrControlPressed(): boolean
        
        /** Returns the keycode combination of modifier keys. */
        getModifiersMask(): KeyModifierMask
        
        /** Automatically use [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) on macOS and [kbd]Ctrl[/kbd] on other platforms. If `true`, [member ctrl_pressed] and [member meta_pressed] cannot be set. */
        get commandOrControlAutoremap(): boolean
        set commandOrControlAutoremap(value: boolean)
        
        /** State of the [kbd]Alt[/kbd] modifier. */
        get altPressed(): boolean
        set altPressed(value: boolean)
        
        /** State of the [kbd]Shift[/kbd] modifier. */
        get shiftPressed(): boolean
        set shiftPressed(value: boolean)
        
        /** State of the [kbd]Ctrl[/kbd] modifier. */
        get ctrlPressed(): boolean
        set ctrlPressed(value: boolean)
        
        /** State of the [kbd]Meta[/kbd] modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key. */
        get metaPressed(): boolean
        set metaPressed(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInputEventWithModifiers;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInputEventWithModifiers;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapInstancePlaceholder extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapInstancePlaceholder extends __NameMapNode {
        get_stored_values: "getStoredValues";
        create_instance: "createInstance";
        get_instance_path: "getInstancePath";
    }
    /** Placeholder for the root [Node] of a [PackedScene].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_instanceplaceholder.html  
     */
    class InstancePlaceholder<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the list of properties that will be applied to the node when [method create_instance] is called.  
         *  If [param with_order] is `true`, a key named `.order` (note the leading period) is added to the dictionary. This `.order` key is an [Array] of [String] property names specifying the order in which properties will be applied (with index 0 being the first).  
         */
        getStoredValues(withOrder?: boolean /* = false */): GDictionary
        
        /** Call this method to actually load in the node. The created node will be placed as a sibling  *above*  the [InstancePlaceholder] in the scene tree. The [Node]'s reference is also returned for convenience.  
         *      
         *  **Note:** [method create_instance] is not thread-safe. Use [method Object.call_deferred] if calling from a thread.  
         */
        createInstance(replace?: boolean /* = false */, customScene?: PackedScene): Node
        
        /** Gets the path to the [PackedScene] resource file that is loaded by default when calling [method create_instance]. Not thread-safe. Use [method Object.call_deferred] if calling from a thread. */
        getInstancePath(): string
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapInstancePlaceholder;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapInstancePlaceholder;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapIntervalTweener extends __RPCMapTweener {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapIntervalTweener extends __NameMapTweener {
    }
    /** Creates an idle interval in a [Tween] animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_intervaltweener.html  
     */
    class IntervalTweener extends Tweener {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapIntervalTweener;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapIntervalTweener;
    }
    namespace ItemList {
        enum IconMode {
            IconModeTop = 0,
            IconModeLeft = 1,
        }
        enum SelectMode {
            SelectSingle = 0,
            SelectMulti = 1,
            SelectToggle = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapItemList extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapItemList extends __NameMapControl {
        add_item: "addItem";
        add_icon_item: "addIconItem";
        set_item_text: "setItemText";
        get_item_text: "getItemText";
        set_item_icon: "setItemIcon";
        get_item_icon: "getItemIcon";
        set_item_text_direction: "setItemTextDirection";
        get_item_text_direction: "getItemTextDirection";
        set_item_language: "setItemLanguage";
        get_item_language: "getItemLanguage";
        set_item_auto_translate_mode: "setItemAutoTranslateMode";
        get_item_auto_translate_mode: "getItemAutoTranslateMode";
        set_item_icon_transposed: "setItemIconTransposed";
        is_item_icon_transposed: "isItemIconTransposed";
        set_item_icon_region: "setItemIconRegion";
        get_item_icon_region: "getItemIconRegion";
        set_item_icon_modulate: "setItemIconModulate";
        get_item_icon_modulate: "getItemIconModulate";
        set_item_selectable: "setItemSelectable";
        is_item_selectable: "isItemSelectable";
        set_item_disabled: "setItemDisabled";
        is_item_disabled: "isItemDisabled";
        set_item_metadata: "setItemMetadata";
        get_item_metadata: "getItemMetadata";
        set_item_custom_bg_color: "setItemCustomBgColor";
        get_item_custom_bg_color: "getItemCustomBgColor";
        set_item_custom_fg_color: "setItemCustomFgColor";
        get_item_custom_fg_color: "getItemCustomFgColor";
        get_item_rect: "getItemRect";
        set_item_tooltip_enabled: "setItemTooltipEnabled";
        is_item_tooltip_enabled: "isItemTooltipEnabled";
        set_item_tooltip: "setItemTooltip";
        get_item_tooltip: "getItemTooltip";
        deselect_all: "deselectAll";
        is_selected: "isSelected";
        get_selected_items: "getSelectedItems";
        move_item: "moveItem";
        remove_item: "removeItem";
        sort_items_by_text: "sortItemsByText";
        is_anything_selected: "isAnythingSelected";
        get_item_at_position: "getItemAtPosition";
        ensure_current_is_visible: "ensureCurrentIsVisible";
        get_v_scroll_bar: "getVScrollBar";
        get_h_scroll_bar: "getHScrollBar";
        force_update_list_size: "forceUpdateListSize";
        select_mode: "selectMode";
        allow_reselect: "allowReselect";
        allow_rmb_select: "allowRmbSelect";
        allow_search: "allowSearch";
        max_text_lines: "maxTextLines";
        auto_width: "autoWidth";
        auto_height: "autoHeight";
        text_overrun_behavior: "textOverrunBehavior";
        wraparound_items: "wraparoundItems";
        item_count: "itemCount";
        max_columns: "maxColumns";
        same_column_width: "sameColumnWidth";
        fixed_column_width: "fixedColumnWidth";
        icon_mode: "iconMode";
        icon_scale: "iconScale";
        fixed_icon_size: "fixedIconSize";
        item_selected: "itemSelected";
        empty_clicked: "emptyClicked";
        item_clicked: "itemClicked";
        multi_selected: "multiSelected";
        item_activated: "itemActivated";
    }
    /** A vertical list of selectable items with one or multiple columns.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_itemlist.html  
     */
    class ItemList<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Adds an item to the item list with specified text. Returns the index of an added item.  
         *  Specify an [param icon], or use `null` as the [param icon] for a list item with no icon.  
         *  If [param selectable] is `true`, the list item will be selectable.  
         */
        addItem(text: string, icon?: Texture2D, selectable?: boolean /* = true */): int64
        
        /** Adds an item to the item list with no text, only an icon. Returns the index of an added item. */
        addIconItem(icon: Texture2D, selectable?: boolean /* = true */): int64
        
        /** Sets text of the item associated with the specified index. */
        setItemText(idx: int64, text: string): void
        
        /** Returns the text associated with the specified index. */
        getItemText(idx: int64): string
        
        /** Sets (or replaces) the icon's [Texture2D] associated with the specified index. */
        setItemIcon(idx: int64, icon: Texture2D): void
        
        /** Returns the icon associated with the specified index. */
        getItemIcon(idx: int64): null | Texture2D
        
        /** Sets item's text base writing direction. */
        setItemTextDirection(idx: int64, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        getItemTextDirection(idx: int64): Control.TextDirection
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setItemLanguage(idx: int64, language: string): void
        
        /** Returns item's text language code. */
        getItemLanguage(idx: int64): string
        
        /** Sets the auto translate mode of the item associated with the specified index.  
         *  Items use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [ItemList] itself.  
         */
        setItemAutoTranslateMode(idx: int64, mode: Node.AutoTranslateMode): void
        
        /** Returns item's auto translate mode. */
        getItemAutoTranslateMode(idx: int64): Node.AutoTranslateMode
        
        /** Sets whether the item icon will be drawn transposed. */
        setItemIconTransposed(idx: int64, transposed: boolean): void
        
        /** Returns `true` if the item icon will be drawn transposed, i.e. the X and Y axes are swapped. */
        isItemIconTransposed(idx: int64): boolean
        
        /** Sets the region of item's icon used. The whole icon will be used if the region has no area. */
        setItemIconRegion(idx: int64, rect: Rect2): void
        
        /** Returns the region of item's icon used. The whole icon will be used if the region has no area. */
        getItemIconRegion(idx: int64): Rect2
        
        /** Sets a modulating [Color] of the item associated with the specified index. */
        setItemIconModulate(idx: int64, modulate: Color): void
        
        /** Returns a [Color] modulating item's icon at the specified index. */
        getItemIconModulate(idx: int64): Color
        
        /** Allows or disallows selection of the item associated with the specified index. */
        setItemSelectable(idx: int64, selectable: boolean): void
        
        /** Returns `true` if the item at the specified index is selectable. */
        isItemSelectable(idx: int64): boolean
        
        /** Disables (or enables) the item at the specified index.  
         *  Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing [kbd]Enter[/kbd]).  
         */
        setItemDisabled(idx: int64, disabled: boolean): void
        
        /** Returns `true` if the item at the specified index is disabled. */
        isItemDisabled(idx: int64): boolean
        
        /** Sets a value (of any type) to be stored with the item associated with the specified index. */
        setItemMetadata(idx: int64, metadata: any): void
        
        /** Returns the metadata value of the specified index. */
        getItemMetadata(idx: int64): any
        
        /** Sets the background color of the item specified by [param idx] index to the specified [Color]. */
        setItemCustomBgColor(idx: int64, customBgColor: Color): void
        
        /** Returns the custom background color of the item specified by [param idx] index. */
        getItemCustomBgColor(idx: int64): Color
        
        /** Sets the foreground color of the item specified by [param idx] index to the specified [Color]. */
        setItemCustomFgColor(idx: int64, customFgColor: Color): void
        
        /** Returns the custom foreground color of the item specified by [param idx] index. */
        getItemCustomFgColor(idx: int64): Color
        
        /** Returns the position and size of the item with the specified index, in the coordinate system of the [ItemList] node. If [param expand] is `true` the last column expands to fill the rest of the row.  
         *      
         *  **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.  
         */
        getItemRect(idx: int64, expand?: boolean /* = true */): Rect2
        
        /** Sets whether the tooltip hint is enabled for specified item index. */
        setItemTooltipEnabled(idx: int64, enable: boolean): void
        
        /** Returns `true` if the tooltip is enabled for specified item index. */
        isItemTooltipEnabled(idx: int64): boolean
        
        /** Sets the tooltip hint for the item associated with the specified index. */
        setItemTooltip(idx: int64, tooltip: string): void
        
        /** Returns the tooltip hint associated with the specified index. */
        getItemTooltip(idx: int64): string
        
        /** Select the item at the specified index.  
         *      
         *  **Note:** This method does not trigger the item selection signal.  
         */
        select(idx: int64, single?: boolean /* = true */): void
        
        /** Ensures the item associated with the specified index is not selected. */
        deselect(idx: int64): void
        
        /** Ensures there are no items selected. */
        deselectAll(): void
        
        /** Returns `true` if the item at the specified index is currently selected. */
        isSelected(idx: int64): boolean
        
        /** Returns an array with the indexes of the selected items. */
        getSelectedItems(): PackedInt32Array
        
        /** Moves item from index [param from_idx] to [param to_idx]. */
        moveItem(fromIdx: int64, toIdx: int64): void
        
        /** Removes the item specified by [param idx] index from the list. */
        removeItem(idx: int64): void
        
        /** Removes all items from the list. */
        clear(): void
        
        /** Sorts items in the list by their text. */
        sortItemsByText(): void
        
        /** Returns `true` if one or more items are selected. */
        isAnythingSelected(): boolean
        
        /** Returns the item index at the given [param position].  
         *  When there is no item at that point, -1 will be returned if [param exact] is `true`, and the closest item index will be returned otherwise.  
         *      
         *  **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.  
         */
        getItemAtPosition(position: Vector2, exact?: boolean /* = false */): int64
        
        /** Ensure current selection is visible, adjusting the scroll position as necessary. */
        ensureCurrentIsVisible(): void
        
        /** Returns the vertical scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getVScrollBar(): null | VScrollBar
        
        /** Returns the horizontal scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getHScrollBar(): null | HScrollBar
        
        /** Forces an update to the list size based on its items. This happens automatically whenever size of the items, or other relevant settings like [member auto_height], change. The method can be used to trigger the update ahead of next drawing pass. */
        forceUpdateListSize(): void
        
        /** Allows single or multiple item selection. See the [enum SelectMode] constants. */
        get selectMode(): int64
        set selectMode(value: int64)
        
        /** If `true`, the currently selected item can be selected again. */
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        
        /** If `true`, right mouse button click can select items. */
        get allowRmbSelect(): boolean
        set allowRmbSelect(value: boolean)
        
        /** If `true`, allows navigating the [ItemList] with letter keys through incremental search. */
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        
        /** Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.  
         *      
         *  **Note:** This property takes effect only when [member icon_mode] is [constant ICON_MODE_TOP]. To make the text wrap, [member fixed_column_width] should be greater than zero.  
         */
        get maxTextLines(): int64
        set maxTextLines(value: int64)
        
        /** If `true`, the control will automatically resize the width to fit its content. */
        get autoWidth(): boolean
        set autoWidth(value: boolean)
        
        /** If `true`, the control will automatically resize the height to fit its content. */
        get autoHeight(): boolean
        set autoHeight(value: boolean)
        
        /** The clipping behavior when the text exceeds an item's bounding rectangle. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** If `true`, the control will automatically move items into a new row to fit its content. See also [HFlowContainer] for this behavior.  
         *  If `false`, the control will add a horizontal scrollbar to make all items visible.  
         */
        get wraparoundItems(): boolean
        set wraparoundItems(value: boolean)
        
        /** The number of items currently in the list. */
        get itemCount(): int64
        set itemCount(value: int64)
        
        /** Maximum columns the list will have.  
         *  If greater than zero, the content will be split among the specified columns.  
         *  A value of zero means unlimited columns, i.e. all items will be put in the same row.  
         */
        get maxColumns(): int64
        set maxColumns(value: int64)
        
        /** Whether all columns will have the same width.  
         *  If `true`, the width is equal to the largest column width of all columns.  
         */
        get sameColumnWidth(): boolean
        set sameColumnWidth(value: boolean)
        
        /** The width all columns will be adjusted to.  
         *  A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.  
         */
        get fixedColumnWidth(): int64
        set fixedColumnWidth(value: int64)
        
        /** The icon position, whether above or to the left of the text. See the [enum IconMode] constants. */
        get iconMode(): int64
        set iconMode(value: int64)
        
        /** The scale of icon applied after [member fixed_icon_size] and transposing takes effect. */
        get iconScale(): float64
        set iconScale(value: float64)
        
        /** The size all icons will be adjusted to.  
         *  If either X or Y component is not greater than zero, icon size won't be affected.  
         */
        get fixedIconSize(): Vector2I
        set fixedIconSize(value: Vector2I)
        
        /** Emitted when specified item has been selected. Only applicable in single selection mode.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly itemSelected: Signal<(index: int64) => void>
        
        /** Emitted when any mouse click is issued within the rect of the list but on empty space.  
         *  [param at_position] is the click position in this control's local coordinate system.  
         */
        readonly emptyClicked: Signal<(atPosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when specified list item has been clicked with any mouse button.  
         *  [param at_position] is the click position in this control's local coordinate system.  
         */
        readonly itemClicked: Signal<(index: int64, atPosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when a multiple selection is altered on a list allowing multiple selection. */
        readonly multiSelected: Signal<(index: int64, selected: boolean) => void>
        
        /** Emitted when specified list item is activated via double-clicking or by pressing [kbd]Enter[/kbd]. */
        readonly itemActivated: Signal<(index: int64) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapItemList;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapItemList;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJniSingleton extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJniSingleton extends __NameMapGObject {
    }
    class JniSingleton extends GObject {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJniSingleton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJniSingleton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJson extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJson extends __NameMapResource {
        parse_string: "parseString";
        get_parsed_text: "getParsedText";
        get_error_line: "getErrorLine";
        get_error_message: "getErrorMessage";
        from_native: "fromNative";
        to_native: "toNative";
    }
    class Json extends Resource {
        constructor(identifier?: any)
        static stringify(data: any, indent?: string /* = '' */, sortKeys?: boolean /* = true */, fullPrecision?: boolean /* = false */): string
        static parseString(jsonString: string): any
        parse(jsonText: string, keepText?: boolean /* = false */): GError
        getParsedText(): string
        getErrorLine(): int64
        getErrorMessage(): string
        static fromNative(variant: any, fullObjects?: boolean /* = false */): any
        static toNative(json: any, allowObjects?: boolean /* = false */): any
        get data(): any
        set data(value: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJson;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJson;
    }
    namespace JsonRpc {
        enum ErrorCode {
            ParseError = -32700,
            InvalidRequest = -32600,
            MethodNotFound = -32601,
            InvalidParams = -32602,
            InternalError = -32603,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJsonRpc extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJsonRpc extends __NameMapGObject {
        set_method: "setMethod";
        process_action: "processAction";
        process_string: "processString";
        make_request: "makeRequest";
        make_response: "makeResponse";
        make_notification: "makeNotification";
        make_response_error: "makeResponseError";
    }
    class JsonRpc extends GObject {
        constructor(identifier?: any)
        setMethod(name: string, callback: Callable): void
        processAction(action: any, recurse?: boolean /* = false */): any
        processString(action: string): string
        makeRequest(method: string, params: any, id: any): GDictionary
        makeResponse(result: any, id: any): GDictionary
        makeNotification(method: string, params: any): GDictionary
        makeResponseError(code: int64, message: string, id?: any /* = {} */): GDictionary
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJsonRpc;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJsonRpc;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJavaClass extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJavaClass extends __NameMapRefCounted {
        get_java_class_name: "getJavaClassName";
        get_java_method_list: "getJavaMethodList";
        get_java_parent_class: "getJavaParentClass";
    }
    /** Represents a class from the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_javaclass.html  
     */
    class JavaClass extends RefCounted {
        constructor(identifier?: any)
        /** Returns the Java class name. */
        getJavaClassName(): string
        
        /** Returns the object's Java methods and their signatures as an [Array] of dictionaries, in the same format as [method Object.get_method_list]. */
        getJavaMethodList(): GArray<GDictionary>
        
        /** Returns a [JavaClass] representing the Java parent class of this class. */
        getJavaParentClass(): null | JavaClass
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJavaClass;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJavaClass;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJavaObject extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJavaObject extends __NameMapRefCounted {
        get_java_class: "getJavaClass";
    }
    /** Represents an object from the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_javaobject.html  
     */
    class JavaObject extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [JavaClass] that this object is an instance of. */
        getJavaClass(): null | JavaClass
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJavaObject;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJavaObject;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJavaScriptObject extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJavaScriptObject extends __NameMapRefCounted {
    }
    /** A wrapper class for web native JavaScript objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_javascriptobject.html  
     */
    class JavaScriptObject extends RefCounted {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJavaScriptObject;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJavaScriptObject;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJoint2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJoint2D extends __NameMapNode2D {
        get_rid: "getRid";
        node_a: "nodeA";
        node_b: "nodeB";
        disable_collision: "disableCollision";
    }
    /** Abstract base class for all 2D physics joints.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_joint2d.html  
     */
    class Joint2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the joint's internal [RID] from the [PhysicsServer2D]. */
        getRid(): Rid
        
        /** Path to the first body (A) attached to the joint. The node must inherit [PhysicsBody2D]. */
        get nodeA(): NodePath
        set nodeA(value: NodePath | string)
        
        /** Path to the second body (B) attached to the joint. The node must inherit [PhysicsBody2D]. */
        get nodeB(): NodePath
        set nodeB(value: NodePath | string)
        
        /** When [member node_a] and [member node_b] move in different directions the [member bias] controls how fast the joint pulls them back to their original position. The lower the [member bias] the more the two bodies can pull on the joint.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_constraint_bias] is used.  
         */
        get bias(): float64
        set bias(value: float64)
        
        /** If `true`, the two bodies bound together do not collide with each other. */
        get disableCollision(): boolean
        set disableCollision(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJoint2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJoint2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapJoint3D extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapJoint3D extends __NameMapNode3D {
        get_rid: "getRid";
        node_a: "nodeA";
        node_b: "nodeB";
        solver_priority: "solverPriority";
        exclude_nodes_from_collision: "excludeNodesFromCollision";
    }
    /** Abstract base class for all 3D physics joints.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_joint3d.html  
     */
    class Joint3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the joint's internal [RID] from the [PhysicsServer3D]. */
        getRid(): Rid
        
        /** Path to the first node (A) attached to the joint. The node must inherit [PhysicsBody3D].  
         *  If left empty and [member node_b] is set, the body is attached to a fixed [StaticBody3D] without collision shapes.  
         */
        get nodeA(): NodePath
        set nodeA(value: NodePath | string)
        
        /** Path to the second node (B) attached to the joint. The node must inherit [PhysicsBody3D].  
         *  If left empty and [member node_a] is set, the body is attached to a fixed [StaticBody3D] without collision shapes.  
         */
        get nodeB(): NodePath
        set nodeB(value: NodePath | string)
        
        /** The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority. */
        get solverPriority(): int64
        set solverPriority(value: int64)
        
        /** If `true`, the two bodies bound together do not collide with each other. */
        get excludeNodesFromCollision(): boolean
        set excludeNodesFromCollision(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapJoint3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapJoint3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapKinematicCollision2D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapKinematicCollision2D extends __NameMapRefCounted {
        get_position: "getPosition";
        get_normal: "getNormal";
        get_travel: "getTravel";
        get_remainder: "getRemainder";
        get_angle: "getAngle";
        get_depth: "getDepth";
        get_local_shape: "getLocalShape";
        get_collider: "getCollider";
        get_collider_id: "getColliderId";
        get_collider_rid: "getColliderRid";
        get_collider_shape: "getColliderShape";
        get_collider_shape_index: "getColliderShapeIndex";
        get_collider_velocity: "getColliderVelocity";
    }
    /** Holds collision data from the movement of a [PhysicsBody2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_kinematiccollision2d.html  
     */
    class KinematicCollision2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the point of collision in global coordinates. */
        getPosition(): Vector2
        
        /** Returns the colliding body's shape's normal at the point of collision. */
        getNormal(): Vector2
        
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector2
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector2
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive. */
        getAngle(upDirection?: Vector2 /* = new Vector2(0, -1) */): float64
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        getDepth(): float64
        
        /** Returns the moving object's colliding shape. */
        getLocalShape(): null | GObject
        
        /** Returns the colliding body's attached [Object]. */
        getCollider(): null | GObject
        
        /** Returns the unique instance ID of the colliding body's attached [Object]. See [method Object.get_instance_id]. */
        getColliderId(): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D]. */
        getColliderRid(): Rid
        
        /** Returns the colliding body's shape. */
        getColliderShape(): null | GObject
        
        /** Returns the colliding body's shape index. See [CollisionObject2D]. */
        getColliderShapeIndex(): int64
        
        /** Returns the colliding body's velocity. */
        getColliderVelocity(): Vector2
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapKinematicCollision2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapKinematicCollision2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapKinematicCollision3D extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapKinematicCollision3D extends __NameMapRefCounted {
        get_travel: "getTravel";
        get_remainder: "getRemainder";
        get_depth: "getDepth";
        get_collision_count: "getCollisionCount";
        get_position: "getPosition";
        get_normal: "getNormal";
        get_angle: "getAngle";
        get_local_shape: "getLocalShape";
        get_collider: "getCollider";
        get_collider_id: "getColliderId";
        get_collider_rid: "getColliderRid";
        get_collider_shape: "getColliderShape";
        get_collider_shape_index: "getColliderShapeIndex";
        get_collider_velocity: "getColliderVelocity";
    }
    /** Holds collision data from the movement of a [PhysicsBody3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_kinematiccollision3d.html  
     */
    class KinematicCollision3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector3
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        getDepth(): float64
        
        /** Returns the number of detected collisions. */
        getCollisionCount(): int64
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default). */
        getPosition(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default). */
        getNormal(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive. */
        getAngle(collisionIndex?: int64 /* = 0 */, upDirection?: Vector3 /* = Vector3.ZERO */): float64
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default). */
        getLocalShape(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default). */
        getCollider(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default). See [method Object.get_instance_id]. */
        getColliderId(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default). */
        getColliderRid(collisionIndex?: int64 /* = 0 */): Rid
        
        /** Returns the colliding body's shape given a collision index (the deepest collision by default). */
        getColliderShape(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default). See [CollisionObject3D]. */
        getColliderShapeIndex(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default). */
        getColliderVelocity(collisionIndex?: int64 /* = 0 */): Vector3
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapKinematicCollision3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapKinematicCollision3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLabel extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLabel extends __NameMapControl {
        get_line_height: "getLineHeight";
        get_line_count: "getLineCount";
        get_visible_line_count: "getVisibleLineCount";
        get_total_character_count: "getTotalCharacterCount";
        get_character_bounds: "getCharacterBounds";
        label_settings: "labelSettings";
        horizontal_alignment: "horizontalAlignment";
        vertical_alignment: "verticalAlignment";
        autowrap_mode: "autowrapMode";
        autowrap_trim_flags: "autowrapTrimFlags";
        justification_flags: "justificationFlags";
        paragraph_separator: "paragraphSeparator";
        clip_text: "clipText";
        text_overrun_behavior: "textOverrunBehavior";
        ellipsis_char: "ellipsisChar";
        tab_stops: "tabStops";
        lines_skipped: "linesSkipped";
        max_lines_visible: "maxLinesVisible";
        visible_characters: "visibleCharacters";
        visible_characters_behavior: "visibleCharactersBehavior";
        visible_ratio: "visibleRatio";
        text_direction: "textDirection";
        structured_text_bidi_override: "structuredTextBidiOverride";
        structured_text_bidi_override_options: "structuredTextBidiOverrideOptions";
    }
    /** A control for displaying plain text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_label.html  
     */
    class Label<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Returns the height of the line [param line].  
         *  If [param line] is set to `-1`, returns the biggest line height.  
         *  If there are no lines, returns font size in pixels.  
         */
        getLineHeight(line?: int64 /* = -1 */): int64
        
        /** Returns the number of lines of text the Label has. */
        getLineCount(): int64
        
        /** Returns the number of lines shown. Useful if the [Label]'s height cannot currently display all lines. */
        getVisibleLineCount(): int64
        
        /** Returns the total number of printable characters in the text (excluding spaces and newlines). */
        getTotalCharacterCount(): int64
        
        /** Returns the bounding rectangle of the character at position [param pos] in the label's local coordinate system. If the character is a non-visual character or [param pos] is outside the valid range, an empty [Rect2] is returned. If the character is a part of a composite grapheme, the bounding rectangle of the whole grapheme is returned. */
        getCharacterBounds(pos: int64): Rect2
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        
        /** A [LabelSettings] resource that can be shared between multiple [Label] nodes. Takes priority over theme properties. */
        get labelSettings(): null | LabelSettings
        set labelSettings(value: null | LabelSettings)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill (also known as justify). */
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, bottom, and fill. */
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** Autowrap space trimming flags. See [constant TextServer.BREAK_TRIM_START_EDGE_SPACES] and [constant TextServer.BREAK_TRIM_END_EDGE_SPACES] for more info. */
        get autowrapTrimFlags(): int64
        set autowrapTrimFlags(value: int64)
        
        /** Line fill alignment rules. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** String used as a paragraph separator. Each paragraph is processed independently, in its own BiDi context. */
        get paragraphSeparator(): string
        set paragraphSeparator(value: string)
        
        /** If `true`, the Label only shows the text that fits inside its bounding rectangle and will clip text horizontally. */
        get clipText(): boolean
        set clipText(value: boolean)
        
        /** The clipping behavior when the text exceeds the node's bounding rectangle. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** Ellipsis character used for text clipping. */
        get ellipsisChar(): string
        set ellipsisChar(value: string)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        
        /** Aligns text to the given tab-stops. */
        get tabStops(): PackedFloat32Array
        set tabStops(value: PackedFloat32Array | float32[])
        
        /** The number of the lines ignored and not displayed from the start of the [member text] value. */
        get linesSkipped(): int64
        set linesSkipped(value: int64)
        
        /** Limits the lines of text the node shows on screen. */
        get maxLinesVisible(): int64
        set maxLinesVisible(value: int64)
        
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
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLabel;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLabel;
    }
    namespace Label3D {
        enum DrawFlags {
            FlagShaded = 0,
            FlagDoubleSided = 1,
            FlagDisableDepthTest = 2,
            FlagFixedSize = 3,
            FlagMax = 4,
        }
        enum AlphaCutMode {
            AlphaCutDisabled = 0,
            AlphaCutDiscard = 1,
            AlphaCutOpaquePrepass = 2,
            AlphaCutHash = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLabel3D extends __RPCMapGeometryInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLabel3D extends __NameMapGeometryInstance3D {
        set_draw_flag: "setDrawFlag";
        get_draw_flag: "getDrawFlag";
        generate_triangle_mesh: "generateTriangleMesh";
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
        outline_render_priority: "outlineRenderPriority";
        outline_modulate: "outlineModulate";
        font_size: "fontSize";
        outline_size: "outlineSize";
        horizontal_alignment: "horizontalAlignment";
        vertical_alignment: "verticalAlignment";
        line_spacing: "lineSpacing";
        autowrap_mode: "autowrapMode";
        autowrap_trim_flags: "autowrapTrimFlags";
        justification_flags: "justificationFlags";
        text_direction: "textDirection";
        structured_text_bidi_override: "structuredTextBidiOverride";
        structured_text_bidi_override_options: "structuredTextBidiOverrideOptions";
    }
    /** A node for displaying plain text in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_label3d.html  
     */
    class Label3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        /** If `true`, the specified [param flag] will be enabled. */
        setDrawFlag(flag: Label3D.DrawFlags, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        getDrawFlag(flag: Label3D.DrawFlags): boolean
        
        /** Returns a [TriangleMesh] with the label's vertices following its current configuration (such as its [member pixel_size]). */
        generateTriangleMesh(): null | TriangleMesh
        
        /** The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time. */
        get pixelSize(): float64
        set pixelSize(value: float64)
        
        /** The text drawing offset (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The billboard mode to use for the label. */
        get billboard(): int64
        set billboard(value: int64)
        
        /** If `true`, the [Light3D] in the [Environment] has effects on the label. */
        get shaded(): boolean
        set shaded(value: boolean)
        
        /** If `true`, text can be seen from the back as well, if `false`, it is invisible when looking at it from behind. */
        get doubleSided(): boolean
        set doubleSided(value: boolean)
        
        /** If `true`, depth testing is disabled and the object will be drawn in render order. */
        get noDepthTest(): boolean
        set noDepthTest(value: boolean)
        
        /** If `true`, the label is rendered at the same size regardless of distance. The label's size on screen is the same as if the camera was `1.0` units away from the label's origin, regardless of the actual distance from the camera. The [Camera3D]'s field of view (or [member Camera3D.size] when in orthogonal/frustum mode) still affects the size the label is drawn at. */
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
        
        /** Filter flags for the texture. */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get renderPriority(): int64
        set renderPriority(value: int64)
        
        /** Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get outlineRenderPriority(): int64
        set outlineRenderPriority(value: int64)
        
        /** Text [Color] of the [Label3D]. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The tint of text outline. */
        get outlineModulate(): Color
        set outlineModulate(value: Color)
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        
        /** Font configuration used to display text. */
        get font(): null | Font
        set font(value: null | Font)
        
        /** Font size of the [Label3D]'s text. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time.  
         *  Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.  
         */
        get fontSize(): int64
        set fontSize(value: int64)
        
        /** Text outline size. */
        get outlineSize(): int64
        set outlineSize(value: int64)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill (also known as justify). */
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, and bottom. */
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        
        /** Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative. */
        get lineSpacing(): float64
        set lineSpacing(value: float64)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** Autowrap space trimming flags. See [constant TextServer.BREAK_TRIM_START_EDGE_SPACES] and [constant TextServer.BREAK_TRIM_END_EDGE_SPACES] for more info. */
        get autowrapTrimFlags(): int64
        set autowrapTrimFlags(value: int64)
        
        /** Line fill alignment rules. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** Text width (in pixels), used for autowrap and fill alignment. */
        get width(): float64
        set width(value: float64)
        
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
        __godotRPCMap: __RPCMapLabel3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLabel3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLabelSettings extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLabelSettings extends __NameMapResource {
        add_stacked_outline: "addStackedOutline";
        move_stacked_outline: "moveStackedOutline";
        remove_stacked_outline: "removeStackedOutline";
        set_stacked_outline_size: "setStackedOutlineSize";
        get_stacked_outline_size: "getStackedOutlineSize";
        set_stacked_outline_color: "setStackedOutlineColor";
        get_stacked_outline_color: "getStackedOutlineColor";
        add_stacked_shadow: "addStackedShadow";
        move_stacked_shadow: "moveStackedShadow";
        remove_stacked_shadow: "removeStackedShadow";
        set_stacked_shadow_offset: "setStackedShadowOffset";
        get_stacked_shadow_offset: "getStackedShadowOffset";
        set_stacked_shadow_color: "setStackedShadowColor";
        get_stacked_shadow_color: "getStackedShadowColor";
        set_stacked_shadow_outline_size: "setStackedShadowOutlineSize";
        get_stacked_shadow_outline_size: "getStackedShadowOutlineSize";
        line_spacing: "lineSpacing";
        paragraph_spacing: "paragraphSpacing";
        font_size: "fontSize";
        font_color: "fontColor";
        outline_size: "outlineSize";
        outline_color: "outlineColor";
        shadow_size: "shadowSize";
        shadow_color: "shadowColor";
        shadow_offset: "shadowOffset";
        stacked_outline_count: "stackedOutlineCount";
        stacked_shadow_count: "stackedShadowCount";
    }
    /** Provides common settings to customize the text in a [Label].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_labelsettings.html  
     */
    class LabelSettings extends Resource {
        constructor(identifier?: any)
        /** Adds a new stacked outline to the label at the given [param index]. If [param index] is `-1`, the new stacked outline will be added at the end of the list. */
        addStackedOutline(index?: int64 /* = -1 */): void
        
        /** Moves the stacked outline at index [param from_index] to the given position [param to_position] in the array. */
        moveStackedOutline(fromIndex: int64, toPosition: int64): void
        
        /** Removes the stacked outline at index [param index]. */
        removeStackedOutline(index: int64): void
        
        /** Sets the size of the stacked outline identified by the given [param index] to [param size]. */
        setStackedOutlineSize(index: int64, size: int64): void
        
        /** Returns the size of the stacked outline at [param index]. */
        getStackedOutlineSize(index: int64): int64
        
        /** Sets the color of the stacked outline identified by the given [param index] to [param color]. */
        setStackedOutlineColor(index: int64, color: Color): void
        
        /** Returns the color of the stacked outline at [param index]. */
        getStackedOutlineColor(index: int64): Color
        
        /** Adds a new stacked shadow to the label at the given [param index]. If [param index] is `-1`, the new stacked shadow will be added at the end of the list. */
        addStackedShadow(index?: int64 /* = -1 */): void
        
        /** Moves the stacked shadow at index [param from_index] to the given position [param to_position] in the array. */
        moveStackedShadow(fromIndex: int64, toPosition: int64): void
        
        /** Removes the stacked shadow at index [param index]. */
        removeStackedShadow(index: int64): void
        
        /** Sets the offset of the stacked shadow identified by the given [param index] to [param offset]. */
        setStackedShadowOffset(index: int64, offset: Vector2): void
        
        /** Returns the offset of the stacked shadow at [param index]. */
        getStackedShadowOffset(index: int64): Vector2
        
        /** Sets the color of the stacked shadow identified by the given [param index] to [param color]. */
        setStackedShadowColor(index: int64, color: Color): void
        
        /** Returns the color of the stacked shadow at [param index]. */
        getStackedShadowColor(index: int64): Color
        
        /** Sets the outline size of the stacked shadow identified by the given [param index] to [param size]. */
        setStackedShadowOutlineSize(index: int64, size: int64): void
        
        /** Returns the outline size of the stacked shadow at [param index]. */
        getStackedShadowOutlineSize(index: int64): int64
        
        /** Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative. */
        get lineSpacing(): float64
        set lineSpacing(value: float64)
        
        /** Vertical space between paragraphs. Added on top of [member line_spacing]. */
        get paragraphSpacing(): float64
        set paragraphSpacing(value: float64)
        
        /** [Font] used for the text. */
        get font(): null | Font
        set font(value: null | Font)
        
        /** Size of the text. */
        get fontSize(): int64
        set fontSize(value: int64)
        
        /** Color of the text. */
        get fontColor(): Color
        set fontColor(value: Color)
        
        /** Text outline size. */
        get outlineSize(): int64
        set outlineSize(value: int64)
        
        /** The color of the outline. */
        get outlineColor(): Color
        set outlineColor(value: Color)
        
        /** Size of the shadow effect. */
        get shadowSize(): int64
        set shadowSize(value: int64)
        
        /** Color of the shadow effect. If alpha is `0`, no shadow will be drawn. */
        get shadowColor(): Color
        set shadowColor(value: Color)
        
        /** Offset of the shadow effect, in pixels. */
        get shadowOffset(): Vector2
        set shadowOffset(value: Vector2)
        
        /** The number of stacked outlines. */
        get stackedOutlineCount(): int64
        set stackedOutlineCount(value: int64)
        
        /** The number of stacked shadows. */
        get stackedShadowCount(): int64
        set stackedShadowCount(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLabelSettings;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLabelSettings;
    }
    namespace Light2D {
        enum ShadowFilter {
            ShadowFilterNone = 0,
            ShadowFilterPcf5 = 1,
            ShadowFilterPcf13 = 2,
        }
        enum BlendMode {
            BlendModeAdd = 0,
            BlendModeSub = 1,
            BlendModeMix = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLight2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLight2D extends __NameMapNode2D {
        set_height: "setHeight";
        get_height: "getHeight";
        editor_only: "editorOnly";
        blend_mode: "blendMode";
        range_z_min: "rangeZMin";
        range_z_max: "rangeZMax";
        range_layer_min: "rangeLayerMin";
        range_layer_max: "rangeLayerMax";
        range_item_cull_mask: "rangeItemCullMask";
        shadow_enabled: "shadowEnabled";
        shadow_color: "shadowColor";
        shadow_filter: "shadowFilter";
        shadow_filter_smooth: "shadowFilterSmooth";
        shadow_item_cull_mask: "shadowItemCullMask";
    }
    /** Casts light in a 2D environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_light2d.html  
     */
    class Light2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Sets the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        setHeight(height: float64): void
        
        /** Returns the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        getHeight(): float64
        
        /** If `true`, Light2D will emit light. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, Light2D will only appear when editing the scene. */
        get editorOnly(): boolean
        set editorOnly(value: boolean)
        
        /** The Light2D's [Color]. */
        get color(): Color
        set color(value: Color)
        
        /** The Light2D's energy value. The larger the value, the stronger the light. */
        get energy(): float64
        set energy(value: float64)
        
        /** The Light2D's blend mode. */
        get blendMode(): int64
        set blendMode(value: int64)
        
        /** Minimum `z` value of objects that are affected by the Light2D. */
        get rangeZMin(): int64
        set rangeZMin(value: int64)
        
        /** Maximum `z` value of objects that are affected by the Light2D. */
        get rangeZMax(): int64
        set rangeZMax(value: int64)
        
        /** Minimum layer value of objects that are affected by the Light2D. */
        get rangeLayerMin(): int64
        set rangeLayerMin(value: int64)
        
        /** Maximum layer value of objects that are affected by the Light2D. */
        get rangeLayerMax(): int64
        set rangeLayerMax(value: int64)
        
        /** The layer mask. Only objects with a matching [member CanvasItem.light_mask] will be affected by the Light2D. See also [member shadow_item_cull_mask], which affects which objects can cast shadows.  
         *      
         *  **Note:** [member range_item_cull_mask] is ignored by [DirectionalLight2D], which will always light a 2D node regardless of the 2D node's [member CanvasItem.light_mask].  
         */
        get rangeItemCullMask(): int64
        set rangeItemCullMask(value: int64)
        
        /** If `true`, the Light2D will cast shadows. */
        get shadowEnabled(): boolean
        set shadowEnabled(value: boolean)
        
        /** [Color] of shadows cast by the Light2D. */
        get shadowColor(): Color
        set shadowColor(value: Color)
        
        /** Shadow filter type. */
        get shadowFilter(): int64
        set shadowFilter(value: int64)
        
        /** Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. [member shadow_filter_smooth] only has an effect if [member shadow_filter] is [constant SHADOW_FILTER_PCF5] or [constant SHADOW_FILTER_PCF13]. */
        get shadowFilterSmooth(): float64
        set shadowFilterSmooth(value: float64)
        
        /** The shadow mask. Used with [LightOccluder2D] to cast shadows. Only occluders with a matching [member CanvasItem.light_mask] will cast shadows. See also [member range_item_cull_mask], which affects which objects can  *receive*  the light. */
        get shadowItemCullMask(): int64
        set shadowItemCullMask(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLight2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLight2D;
    }
    namespace Light3D {
        enum Param {
            ParamEnergy = 0,
            ParamIndirectEnergy = 1,
            ParamVolumetricFogEnergy = 2,
            ParamSpecular = 3,
            ParamRange = 4,
            ParamSize = 5,
            ParamAttenuation = 6,
            ParamSpotAngle = 7,
            ParamSpotAttenuation = 8,
            ParamShadowMaxDistance = 9,
            ParamShadowSplit1Offset = 10,
            ParamShadowSplit2Offset = 11,
            ParamShadowSplit3Offset = 12,
            ParamShadowFadeStart = 13,
            ParamShadowNormalBias = 14,
            ParamShadowBias = 15,
            ParamShadowPancakeSize = 16,
            ParamShadowOpacity = 17,
            ParamShadowBlur = 18,
            ParamTransmittanceBias = 19,
            ParamIntensity = 20,
            ParamMax = 21,
        }
        enum BakeMode {
            BakeDisabled = 0,
            BakeStatic = 1,
            BakeDynamic = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLight3D extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLight3D extends __NameMapVisualInstance3D {
        set_param: "setParam";
        get_param: "getParam";
        get_correlated_color: "getCorrelatedColor";
        light_intensity_lumens: "lightIntensityLumens";
        light_intensity_lux: "lightIntensityLux";
        light_temperature: "lightTemperature";
        light_color: "lightColor";
        light_energy: "lightEnergy";
        light_indirect_energy: "lightIndirectEnergy";
        light_volumetric_fog_energy: "lightVolumetricFogEnergy";
        light_projector: "lightProjector";
        light_size: "lightSize";
        light_angular_distance: "lightAngularDistance";
        light_negative: "lightNegative";
        light_specular: "lightSpecular";
        light_bake_mode: "lightBakeMode";
        light_cull_mask: "lightCullMask";
        shadow_enabled: "shadowEnabled";
        shadow_bias: "shadowBias";
        shadow_normal_bias: "shadowNormalBias";
        shadow_reverse_cull_face: "shadowReverseCullFace";
        shadow_transmittance_bias: "shadowTransmittanceBias";
        shadow_opacity: "shadowOpacity";
        shadow_blur: "shadowBlur";
        shadow_caster_mask: "shadowCasterMask";
        distance_fade_enabled: "distanceFadeEnabled";
        distance_fade_begin: "distanceFadeBegin";
        distance_fade_shadow: "distanceFadeShadow";
        distance_fade_length: "distanceFadeLength";
        editor_only: "editorOnly";
    }
    /** Provides a base class for different kinds of light nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_light3d.html  
     */
    class Light3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Sets the value of the specified [enum Light3D.Param] parameter. */
        setParam(param: Light3D.Param, value: float64): void
        
        /** Returns the value of the specified [enum Light3D.Param] parameter. */
        getParam(param: Light3D.Param): float64
        
        /** Returns the [Color] of an idealized blackbody at the given [member light_temperature]. This value is calculated internally based on the [member light_temperature]. This [Color] is multiplied by [member light_color] before being sent to the [RenderingServer]. */
        getCorrelatedColor(): Color
        
        /** Used by positional lights ([OmniLight3D] and [SpotLight3D]) when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. Sets the intensity of the light source measured in Lumens. Lumens are a measure of luminous flux, which is the total amount of visible light emitted by a light source per unit of time.  
         *  For [SpotLight3D]s, we assume that the area outside the visible cone is surrounded by a perfect light absorbing material. Accordingly, the apparent brightness of the cone area does not change as the cone increases and decreases in size.  
         *  A typical household lightbulb can range from around 600 lumens to 1,200 lumens, a candle is about 13 lumens, while a streetlight can be approximately 60,000 lumens.  
         */
        get lightIntensityLumens(): float64
        set lightIntensityLumens(value: float64)
        
        /** Used by [DirectionalLight3D]s when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. Sets the intensity of the light source measured in Lux. Lux is a measure of luminous flux per unit area, it is equal to one lumen per square meter. Lux is the measure of how much light hits a surface at a given time.  
         *  On a clear sunny day a surface in direct sunlight may be approximately 100,000 lux, a typical room in a home may be approximately 50 lux, while the moonlit ground may be approximately 0.1 lux.  
         */
        get lightIntensityLux(): float64
        set lightIntensityLux(value: float64)
        
        /** Sets the color temperature of the light source, measured in Kelvin. This is used to calculate a correlated color temperature which tints the [member light_color].  
         *  The sun on a cloudy day is approximately 6500 Kelvin, on a clear day it is between 5500 to 6000 Kelvin, and on a clear day at sunrise or sunset it ranges to around 1850 Kelvin.  
         */
        get lightTemperature(): float64
        set lightTemperature(value: float64)
        
        /** The light's color in the nonlinear sRGB color space. An  *overbright*  color can be used to achieve a result equivalent to increasing the light's [member light_energy]. */
        get lightColor(): Color
        set lightColor(value: Color)
        
        /** The light's strength multiplier (this is not a physical unit). For [OmniLight3D] and [SpotLight3D], changing this value will only change the light color's intensity, not the light's radius. */
        get lightEnergy(): float64
        set lightEnergy(value: float64)
        
        /** Secondary multiplier used with indirect light (light bounces). Used with [VoxelGI] and SDFGI (see [member Environment.sdfgi_enabled]).  
         *      
         *  **Note:** This property is ignored if [member light_energy] is equal to `0.0`, as the light won't be present at all in the GI shader.  
         */
        get lightIndirectEnergy(): float64
        set lightIndirectEnergy(value: float64)
        
        /** Secondary multiplier multiplied with [member light_energy] then used with the [Environment]'s volumetric fog (if enabled). If set to `0.0`, computing volumetric fog will be skipped for this light, which can improve performance for large amounts of lights when volumetric fog is enabled.  
         *      
         *  **Note:** To prevent short-lived dynamic light effects from poorly interacting with volumetric fog, lights used in those effects should have [member light_volumetric_fog_energy] set to `0.0` unless [member Environment.volumetric_fog_temporal_reprojection_enabled] is disabled (or unless the reprojection amount is significantly lowered).  
         */
        get lightVolumetricFogEnergy(): float64
        set lightVolumetricFogEnergy(value: float64)
        
        /** [Texture2D] projected by light. [member shadow_enabled] must be on for the projector to work. Light projectors make the light appear as if it is shining through a colored but transparent object, almost like light shining through stained-glass.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for light projector textures is set globally with [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** Light projector textures are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get lightProjector(): null | Texture2D | AnimatedTexture | AtlasTexture | CameraTexture | CanvasTexture | MeshTexture | Texture2Drd | ViewportTexture
        set lightProjector(value: null | Texture2D | AnimatedTexture | AtlasTexture | CameraTexture | CanvasTexture | MeshTexture | Texture2Drd | ViewportTexture)
        
        /** The size of the light in Godot units. Only available for [OmniLight3D]s and [SpotLight3D]s. Increasing this value will make the light fade out slower and shadows appear blurrier (also called percentage-closer soft shadows, or PCSS). This can be used to simulate area lights to an extent. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.  
         *      
         *  **Note:** [member light_size] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         *      
         *  **Note:** PCSS for positional lights is only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get lightSize(): float64
        set lightSize(value: float64)
        
        /** The light's angular size in degrees. Increasing this will make shadows softer at greater distances (also called percentage-closer soft shadows, or PCSS). Only available for [DirectionalLight3D]s. For reference, the Sun from the Earth is approximately `0.5`. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.  
         *      
         *  **Note:** [member light_angular_distance] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         *      
         *  **Note:** PCSS for directional lights is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        get lightAngularDistance(): float64
        set lightAngularDistance(value: float64)
        
        /** If `true`, the light's effect is reversed, darkening areas and casting bright shadows. */
        get lightNegative(): boolean
        set lightNegative(value: boolean)
        
        /** The intensity of the specular blob in objects affected by the light. At `0`, the light becomes a pure diffuse light. When not baking emission, this can be used to avoid unrealistic reflections when placing lights above an emissive surface. */
        get lightSpecular(): float64
        set lightSpecular(value: float64)
        
        /** The light's bake mode. This will affect the global illumination techniques that have an effect on the light's rendering.  
         *      
         *  **Note:** Meshes' global illumination mode will also affect the global illumination rendering. See [member GeometryInstance3D.gi_mode].  
         */
        get lightBakeMode(): int64
        set lightBakeMode(value: int64)
        
        /** The light will affect objects in the selected layers.  
         *      
         *  **Note:** The light cull mask is ignored by [VoxelGI], SDFGI, [LightmapGI], and volumetric fog. These will always render lights in a way that ignores the cull mask. See also [member VisualInstance3D.layers].  
         */
        get lightCullMask(): int64
        set lightCullMask(value: int64)
        
        /** If `true`, the light will cast real-time shadows. This has a significant performance cost. Only enable shadow rendering when it makes a noticeable difference in the scene's appearance, and consider using [member distance_fade_enabled] to hide the light when far away from the [Camera3D]. */
        get shadowEnabled(): boolean
        set shadowEnabled(value: boolean)
        
        /** Used to adjust shadow appearance. Too small a value results in self-shadowing ("shadow acne"), while too large a value causes shadows to separate from casters ("peter-panning"). Adjust as needed. */
        get shadowBias(): float64
        set shadowBias(value: float64)
        
        /** Offsets the lookup into the shadow map by the object's normal. This can be used to reduce self-shadowing artifacts without using [member shadow_bias]. In practice, this value should be tweaked along with [member shadow_bias] to reduce artifacts as much as possible. */
        get shadowNormalBias(): float64
        set shadowNormalBias(value: float64)
        
        /** If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [constant GeometryInstance3D.SHADOW_CASTING_SETTING_DOUBLE_SIDED]. */
        get shadowReverseCullFace(): boolean
        set shadowReverseCullFace(value: boolean)
        get shadowTransmittanceBias(): float64
        set shadowTransmittanceBias(value: float64)
        
        /** The opacity to use when rendering the light's shadow map. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost. */
        get shadowOpacity(): float64
        set shadowOpacity(value: float64)
        
        /** Blurs the edges of the shadow. Can be used to hide pixel artifacts in low-resolution shadow maps. A high value can impact performance, make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible. */
        get shadowBlur(): float64
        set shadowBlur(value: float64)
        
        /** The light will only cast shadows using objects in the selected layers. */
        get shadowCasterMask(): int64
        set shadowCasterMask(value: int64)
        
        /** If `true`, the light will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. This acts as a form of level of detail (LOD). The light will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active lights in a scene and thus improve performance.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distanceFadeEnabled(): boolean
        set distanceFadeEnabled(value: boolean)
        
        /** The distance from the camera at which the light begins to fade away (in 3D units).  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distanceFadeBegin(): float64
        set distanceFadeBegin(value: float64)
        
        /** The distance from the camera at which the light's shadow cuts off (in 3D units). Set this to a value lower than [member distance_fade_begin] + [member distance_fade_length] to further improve performance, as shadow rendering is often more expensive than light rendering itself.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D], and only when [member shadow_enabled] is `true`.  
         */
        get distanceFadeShadow(): float64
        set distanceFadeShadow(value: float64)
        
        /** Distance over which the light and its shadow fades. The light's energy and shadow's opacity is progressively reduced over this distance and is completely invisible at the end.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distanceFadeLength(): float64
        set distanceFadeLength(value: float64)
        
        /** If `true`, the light only appears in the editor and will not be visible at runtime. If `true`, the light will never be baked in [LightmapGI] regardless of its [member light_bake_mode]. */
        get editorOnly(): boolean
        set editorOnly(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLight3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLight3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLightOccluder2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLightOccluder2D extends __NameMapNode2D {
        sdf_collision: "sdfCollision";
        occluder_light_mask: "occluderLightMask";
    }
    /** Occludes light cast by a Light2D, casting shadows.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lightoccluder2d.html  
     */
    class LightOccluder2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [OccluderPolygon2D] used to compute the shadow. */
        get occluder(): null | OccluderPolygon2D
        set occluder(value: null | OccluderPolygon2D)
        
        /** If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders. */
        get sdfCollision(): boolean
        set sdfCollision(value: boolean)
        
        /** The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s). */
        get occluderLightMask(): int64
        set occluderLightMask(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLightOccluder2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLightOccluder2D;
    }
    namespace LightmapGI {
        enum BakeQuality {
            BakeQualityLow = 0,
            BakeQualityMedium = 1,
            BakeQualityHigh = 2,
            BakeQualityUltra = 3,
        }
        enum GenerateProbes {
            GenerateProbesDisabled = 0,
            GenerateProbesSubdiv4 = 1,
            GenerateProbesSubdiv8 = 2,
            GenerateProbesSubdiv16 = 3,
            GenerateProbesSubdiv32 = 4,
        }
        enum BakeError {
            BakeErrorOk = 0,
            BakeErrorNoSceneRoot = 1,
            BakeErrorForeignData = 2,
            BakeErrorNoLightmapper = 3,
            BakeErrorNoSavePath = 4,
            BakeErrorNoMeshes = 5,
            BakeErrorMeshesInvalid = 6,
            BakeErrorCantCreateImage = 7,
            BakeErrorUserAborted = 8,
            BakeErrorTextureSizeTooSmall = 9,
            BakeErrorLightmapTooSmall = 10,
            BakeErrorAtlasTooSmall = 11,
        }
        enum EnvironmentMode {
            EnvironmentModeDisabled = 0,
            EnvironmentModeScene = 1,
            EnvironmentModeCustomSky = 2,
            EnvironmentModeCustomColor = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLightmapGI extends __RPCMapVisualInstance3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLightmapGI extends __NameMapVisualInstance3D {
        supersampling_factor: "supersamplingFactor";
        bounce_indirect_energy: "bounceIndirectEnergy";
        shadowmask_mode: "shadowmaskMode";
        use_texture_for_bounces: "useTextureForBounces";
        use_denoiser: "useDenoiser";
        denoiser_strength: "denoiserStrength";
        denoiser_range: "denoiserRange";
        texel_scale: "texelScale";
        max_texture_size: "maxTextureSize";
        environment_mode: "environmentMode";
        environment_custom_sky: "environmentCustomSky";
        environment_custom_color: "environmentCustomColor";
        environment_custom_energy: "environmentCustomEnergy";
        camera_attributes: "cameraAttributes";
        generate_probes_subdiv: "generateProbesSubdiv";
        light_data: "lightData";
    }
    /** Computes and stores baked lightmaps for fast global illumination.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lightmapgi.html  
     */
    class LightmapGI<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** The quality preset to use when baking lightmaps. This affects bake times, but output file sizes remain mostly identical across quality levels.  
         *  To further speed up bake times, decrease [member bounces], disable [member use_denoiser] and/or decrease [member texel_scale].  
         *  To further increase quality, enable [member supersampling] and/or increase [member texel_scale].  
         */
        get quality(): int64
        set quality(value: int64)
        
        /** If `true`, lightmaps are baked with the texel scale multiplied with [member supersampling_factor] and downsampled before saving the lightmap (so the effective texel density is identical to having supersampling disabled).  
         *  Supersampling provides increased lightmap quality with less noise, smoother shadows and better shadowing of small-scale features in objects. However, it may result in significantly increased bake times and memory usage while baking lightmaps. Padding is automatically adjusted to avoid increasing light leaking.  
         */
        get supersampling(): boolean
        set supersampling(value: boolean)
        
        /** The factor by which the texel density is multiplied for supersampling. For best results, use an integer value. While fractional values are allowed, they can result in increased light leaking and a blurry lightmap.  
         *  Higher values may result in better quality, but also increase bake times and memory usage while baking.  
         *  See [member supersampling] for more information.  
         */
        get supersamplingFactor(): float64
        set supersamplingFactor(value: float64)
        
        /** Number of light bounces that are taken into account during baking. Higher values result in brighter, more realistic lighting, at the cost of longer bake times. If set to `0`, only environment lighting, direct light and emissive lighting is baked. */
        get bounces(): int64
        set bounces(value: int64)
        
        /** The energy multiplier for each bounce. Higher values will make indirect lighting brighter. A value of `1.0` represents physically accurate behavior, but higher values can be used to make indirect lighting propagate more visibly when using a low number of bounces. This can be used to speed up bake times by lowering the number of [member bounces] then increasing [member bounce_indirect_energy].  
         *      
         *  **Note:** [member bounce_indirect_energy] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        get bounceIndirectEnergy(): float64
        set bounceIndirectEnergy(value: float64)
        
        /** If `true`, bakes lightmaps to contain directional information as spherical harmonics. This results in more realistic lighting appearance, especially with normal mapped materials and for lights that have their direct light baked ([member Light3D.light_bake_mode] set to [constant Light3D.BAKE_STATIC] and with [member Light3D.editor_only] set to `false`). The directional information is also used to provide rough reflections for static and dynamic objects. This has a small run-time performance cost as the shader has to perform more work to interpret the direction information from the lightmap. Directional lightmaps also take longer to bake and result in larger file sizes.  
         *      
         *  **Note:** The property's name has no relationship with [DirectionalLight3D]. [member directional] works with all light types.  
         */
        get directional(): boolean
        set directional(value: boolean)
        
        /** The shadowmasking policy to use for directional shadows on static objects that are baked with this [LightmapGI] instance.  
         *  Shadowmasking allows [DirectionalLight3D] nodes to cast shadows even outside the range defined by their [member DirectionalLight3D.directional_shadow_max_distance] property. This is done by baking a texture that contains a shadowmap for the directional light, then using this texture according to the current shadowmask mode.  
         *      
         *  **Note:** The shadowmask texture is only created if [member shadowmask_mode] is not [constant LightmapGIData.SHADOWMASK_MODE_NONE]. To see a difference, you need to bake lightmaps again after switching from [constant LightmapGIData.SHADOWMASK_MODE_NONE] to any other mode.  
         */
        get shadowmaskMode(): int64
        set shadowmaskMode(value: int64)
        
        /** If `true`, a texture with the lighting information will be generated to speed up the generation of indirect lighting at the cost of some accuracy. The geometry might exhibit extra light leak artifacts when using low resolution lightmaps or UVs that stretch the lightmap significantly across surfaces. Leave [member use_texture_for_bounces] at its default value of `true` if unsure.  
         *      
         *  **Note:** [member use_texture_for_bounces] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        get useTextureForBounces(): boolean
        set useTextureForBounces(value: boolean)
        
        /** If `true`, ignore environment lighting when baking lightmaps. */
        get interior(): boolean
        set interior(value: boolean)
        
        /** If `true`, uses a GPU-based denoising algorithm on the generated lightmap. This eliminates most noise within the generated lightmap at the cost of longer bake times. File sizes are generally not impacted significantly by the use of a denoiser, although lossless compression may do a better job at compressing a denoised image. */
        get useDenoiser(): boolean
        set useDenoiser(value: boolean)
        
        /** The strength of denoising step applied to the generated lightmaps. Only effective if [member use_denoiser] is `true` and [member ProjectSettings.rendering/lightmapping/denoising/denoiser] is set to JNLM. */
        get denoiserStrength(): float64
        set denoiserStrength(value: float64)
        
        /** The distance in pixels from which the denoiser samples. Lower values preserve more details, but may give blotchy results if the lightmap quality is not high enough. Only effective if [member use_denoiser] is `true` and [member ProjectSettings.rendering/lightmapping/denoising/denoiser] is set to JNLM. */
        get denoiserRange(): int64
        set denoiserRange(value: int64)
        
        /** The bias to use when computing shadows. Increasing [member bias] can fix shadow acne on the resulting baked lightmap, but can introduce peter-panning (shadows not connecting to their casters). Real-time [Light3D] shadows are not affected by this [member bias] property. */
        get bias(): float64
        set bias(value: float64)
        
        /** Scales the lightmap texel density of all meshes for the current bake. This is a multiplier that builds upon the existing lightmap texel size defined in each imported 3D scene, along with the per-mesh density multiplier (which is designed to be used when the same mesh is used at different scales). Lower values will result in faster bake times.  
         *  For example, doubling [member texel_scale] doubles the lightmap texture resolution for all objects  *on each axis* , so it will  *quadruple*  the texel count.  
         */
        get texelScale(): float64
        set texelScale(value: float64)
        
        /** The maximum texture size for the generated texture atlas. Higher values will result in fewer slices being generated, but may not work on all hardware as a result of hardware limitations on texture sizes. Leave [member max_texture_size] at its default value of `16384` if unsure. */
        get maxTextureSize(): int64
        set maxTextureSize(value: int64)
        
        /** The environment mode to use when baking lightmaps. */
        get environmentMode(): int64
        set environmentMode(value: int64)
        
        /** The sky to use as a source of environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_SKY]. */
        get environmentCustomSky(): null | Sky
        set environmentCustomSky(value: null | Sky)
        
        /** The color to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        get environmentCustomColor(): Color
        set environmentCustomColor(value: Color)
        
        /** The color multiplier to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        get environmentCustomEnergy(): float64
        set environmentCustomEnergy(value: float64)
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [LightmapGI] will have banding artifacts or may have over-exposure artifacts. */
        get cameraAttributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The level of subdivision to use when automatically generating [LightmapProbe]s for dynamic object lighting. Higher values result in more accurate indirect lighting on dynamic objects, at the cost of longer bake times and larger file sizes.  
         *      
         *  **Note:** Automatically generated [LightmapProbe]s are not visible as nodes in the Scene tree dock, and cannot be modified this way after they are generated.  
         *      
         *  **Note:** Regardless of [member generate_probes_subdiv], direct lighting on dynamic objects is always applied using [Light3D] nodes in real-time.  
         */
        get generateProbesSubdiv(): int64
        set generateProbesSubdiv(value: int64)
        
        /** The [LightmapGIData] associated to this [LightmapGI] node. This resource is automatically created after baking, and is not meant to be created manually. */
        get lightData(): null | LightmapGIData
        set lightData(value: null | LightmapGIData)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLightmapGI;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLightmapGI;
    }
    namespace LightmapGIData {
        enum ShadowmaskMode {
            ShadowmaskModeNone = 0,
            ShadowmaskModeReplace = 1,
            ShadowmaskModeOverlay = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLightmapGIData extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLightmapGIData extends __NameMapResource {
        add_user: "addUser";
        get_user_count: "getUserCount";
        get_user_path: "getUserPath";
        clear_users: "clearUsers";
        lightmap_textures: "lightmapTextures";
        shadowmask_textures: "shadowmaskTextures";
        uses_spherical_harmonics: "usesSphericalHarmonics";
        user_data: "userData";
        probe_data: "probeData";
        _uses_packed_directional: "_usesPackedDirectional";
        light_texture: "lightTexture";
        light_textures: "lightTextures";
    }
    /** Contains baked lightmap and dynamic object probe data for [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lightmapgidata.html  
     */
    class LightmapGIData extends Resource {
        constructor(identifier?: any)
        /** Adds an object that is considered baked within this [LightmapGIData]. */
        addUser(path: NodePath | string, uVScale: Rect2, sliceIndex: int64, subInstance: int64): void
        
        /** Returns the number of objects that are considered baked within this [LightmapGIData]. */
        getUserCount(): int64
        
        /** Returns the [NodePath] of the baked object at index [param user_idx]. */
        getUserPath(userIdx: int64): NodePath
        
        /** Clear all objects that are considered baked within this [LightmapGIData]. */
        clearUsers(): void
        
        /** The lightmap atlas textures generated by the lightmapper. */
        get lightmapTextures(): GArray<TextureLayered>
        set lightmapTextures(value: GArray<TextureLayered>)
        
        /** The shadowmask atlas textures generated by the lightmapper. */
        get shadowmaskTextures(): GArray<TextureLayered>
        set shadowmaskTextures(value: GArray<TextureLayered>)
        get usesSphericalHarmonics(): boolean
        set usesSphericalHarmonics(value: boolean)
        get userData(): GArray
        set userData(value: GArray)
        get probeData(): GDictionary
        set probeData(value: GDictionary)
        get _usesPackedDirectional(): boolean
        set _usesPackedDirectional(value: boolean)
        
        /** The lightmap atlas texture generated by the lightmapper. */
        get lightTexture(): null | TextureLayered
        set lightTexture(value: null | TextureLayered)
        get lightTextures(): GArray
        set lightTextures(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLightmapGIData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLightmapGIData;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLightmapProbe extends __RPCMapNode3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLightmapProbe extends __NameMapNode3D {
    }
    /** Represents a single manually placed probe for dynamic object lighting with [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lightmapprobe.html  
     */
    class LightmapProbe<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLightmapProbe;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLightmapProbe;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLightmapper extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLightmapper extends __NameMapRefCounted {
    }
    /** Abstract class extended by lightmappers, for use in [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lightmapper.html  
     */
    class Lightmapper extends RefCounted {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLightmapper;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLightmapper;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLightmapperRD extends __RPCMapLightmapper {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLightmapperRD extends __NameMapLightmapper {
    }
    /** The built-in GPU-based lightmapper for use with [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lightmapperrd.html  
     */
    class LightmapperRD extends Lightmapper {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLightmapperRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLightmapperRD;
    }
    namespace Line2D {
        enum LineJointMode {
            LineJointSharp = 0,
            LineJointBevel = 1,
            LineJointRound = 2,
        }
        enum LineCapMode {
            LineCapNone = 0,
            LineCapBox = 1,
            LineCapRound = 2,
        }
        enum LineTextureMode {
            LineTextureNone = 0,
            LineTextureTile = 1,
            LineTextureStretch = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLine2D extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLine2D extends __NameMapNode2D {
        set_point_position: "setPointPosition";
        get_point_position: "getPointPosition";
        get_point_count: "getPointCount";
        add_point: "addPoint";
        remove_point: "removePoint";
        clear_points: "clearPoints";
        width_curve: "widthCurve";
        default_color: "defaultColor";
        texture_mode: "textureMode";
        joint_mode: "jointMode";
        begin_cap_mode: "beginCapMode";
        end_cap_mode: "endCapMode";
        sharp_limit: "sharpLimit";
        round_precision: "roundPrecision";
    }
    /** A 2D polyline that can optionally be textured.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_line2d.html  
     */
    class Line2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Overwrites the position of the point at the given [param index] with the supplied [param position]. */
        setPointPosition(index: int64, position: Vector2): void
        
        /** Returns the position of the point at index [param index]. */
        getPointPosition(index: int64): Vector2
        
        /** Returns the number of points in the polyline. */
        getPointCount(): int64
        
        /** Adds a point with the specified [param position] relative to the polyline's own position. If no [param index] is provided, the new point will be added to the end of the points array.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. The indices of the points after the new point get increased by 1. The provided [param index] must not exceed the number of existing points in the polyline. See [method get_point_count].  
         */
        addPoint(position: Vector2, index?: int64 /* = -1 */): void
        
        /** Removes the point at index [param index] from the polyline. */
        removePoint(index: int64): void
        
        /** Removes all points from the polyline, making it empty. */
        clearPoints(): void
        
        /** The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array. */
        get points(): PackedVector2Array
        set points(value: PackedVector2Array | Vector2[])
        
        /** If `true` and the polyline has more than 2 points, the last point and the first one will be connected by a segment.  
         *      
         *  **Note:** The shape of the closing segment is not guaranteed to be seamless if a [member width_curve] is provided.  
         *      
         *  **Note:** The joint between the closing segment and the first segment is drawn first and it samples the [member gradient] and the [member width_curve] at the beginning. This is an implementation detail that might change in a future version.  
         */
        get closed(): boolean
        set closed(value: boolean)
        
        /** The polyline's width. */
        get width(): float64
        set width(value: float64)
        
        /** The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain. The width curve should be a unit [Curve]. */
        get widthCurve(): null | Curve
        set widthCurve(value: null | Curve)
        
        /** The color of the polyline. Will not be used if a gradient is set. */
        get defaultColor(): Color
        set defaultColor(value: Color)
        
        /** The gradient is drawn through the whole line from start to finish. The [member default_color] will not be used if this property is set. */
        get gradient(): null | Gradient
        set gradient(value: null | Gradient)
        
        /** The texture used for the polyline. Uses [member texture_mode] for drawing style. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** The style to render the [member texture] of the polyline. */
        get textureMode(): int64
        set textureMode(value: int64)
        
        /** The style of the connections between segments of the polyline. */
        get jointMode(): int64
        set jointMode(value: int64)
        
        /** The style of the beginning of the polyline, if [member closed] is `false`. */
        get beginCapMode(): int64
        set beginCapMode(value: int64)
        
        /** The style of the end of the polyline, if [member closed] is `false`. */
        get endCapMode(): int64
        set endCapMode(value: int64)
        
        /** Determines the miter limit of the polyline. Normally, when [member joint_mode] is set to [constant LINE_JOINT_SHARP], sharp angles fall back to using the logic of [constant LINE_JOINT_BEVEL] joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles. */
        get sharpLimit(): float64
        set sharpLimit(value: float64)
        
        /** The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update. */
        get roundPrecision(): int64
        set roundPrecision(value: int64)
        
        /** If `true`, the polyline's border will be anti-aliased.  
         *      
         *  **Note:** [Line2D] is not accelerated by batching when being anti-aliased.  
         */
        get antialiased(): boolean
        set antialiased(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLine2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLine2D;
    }
    namespace LineEdit {
        enum MenuItems {
            MenuCut = 0,
            MenuCopy = 1,
            MenuPaste = 2,
            MenuClear = 3,
            MenuSelectAll = 4,
            MenuUndo = 5,
            MenuRedo = 6,
            MenuSubmenuTextDir = 7,
            MenuDirInherited = 8,
            MenuDirAuto = 9,
            MenuDirLtr = 10,
            MenuDirRtl = 11,
            MenuDisplayUcc = 12,
            MenuSubmenuInsertUcc = 13,
            MenuInsertLrm = 14,
            MenuInsertRlm = 15,
            MenuInsertLre = 16,
            MenuInsertRle = 17,
            MenuInsertLro = 18,
            MenuInsertRlo = 19,
            MenuInsertPdf = 20,
            MenuInsertAlm = 21,
            MenuInsertLri = 22,
            MenuInsertRli = 23,
            MenuInsertFsi = 24,
            MenuInsertPdi = 25,
            MenuInsertZwj = 26,
            MenuInsertZwnj = 27,
            MenuInsertWj = 28,
            MenuInsertShy = 29,
            MenuEmojiAndSymbol = 30,
            MenuMax = 31,
        }
        enum VirtualKeyboardType {
            KeyboardTypeDefault = 0,
            KeyboardTypeMultiline = 1,
            KeyboardTypeNumber = 2,
            KeyboardTypeNumberDecimal = 3,
            KeyboardTypePhone = 4,
            KeyboardTypeEmailAddress = 5,
            KeyboardTypePassword = 6,
            KeyboardTypeUrl = 7,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapLineEdit extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapLineEdit extends __NameMapControl {
        has_ime_text: "hasImeText";
        cancel_ime: "cancelIme";
        apply_ime: "applyIme";
        is_editing: "isEditing";
        select_all: "selectAll";
        has_undo: "hasUndo";
        has_redo: "hasRedo";
        has_selection: "hasSelection";
        get_selected_text: "getSelectedText";
        get_selection_from_column: "getSelectionFromColumn";
        get_selection_to_column: "getSelectionToColumn";
        get_next_composite_character_column: "getNextCompositeCharacterColumn";
        get_previous_composite_character_column: "getPreviousCompositeCharacterColumn";
        get_scroll_offset: "getScrollOffset";
        insert_text_at_caret: "insertTextAtCaret";
        delete_char_at_caret: "deleteCharAtCaret";
        delete_text: "deleteText";
        menu_option: "menuOption";
        get_menu: "getMenu";
        is_menu_visible: "isMenuVisible";
        placeholder_text: "placeholderText";
        max_length: "maxLength";
        keep_editing_on_text_submit: "keepEditingOnTextSubmit";
        expand_to_text_length: "expandToTextLength";
        context_menu_enabled: "contextMenuEnabled";
        emoji_menu_enabled: "emojiMenuEnabled";
        backspace_deletes_composite_character_enabled: "backspaceDeletesCompositeCharacterEnabled";
        virtual_keyboard_enabled: "virtualKeyboardEnabled";
        virtual_keyboard_show_on_focus: "virtualKeyboardShowOnFocus";
        virtual_keyboard_type: "virtualKeyboardType";
        clear_button_enabled: "clearButtonEnabled";
        shortcut_keys_enabled: "shortcutKeysEnabled";
        middle_mouse_paste_enabled: "middleMousePasteEnabled";
        selecting_enabled: "selectingEnabled";
        deselect_on_focus_loss_enabled: "deselectOnFocusLossEnabled";
        drag_and_drop_selection_enabled: "dragAndDropSelectionEnabled";
        right_icon: "rightIcon";
        draw_control_chars: "drawControlChars";
        select_all_on_focus: "selectAllOnFocus";
        caret_blink: "caretBlink";
        caret_blink_interval: "caretBlinkInterval";
        caret_column: "caretColumn";
        caret_force_displayed: "caretForceDisplayed";
        caret_mid_grapheme: "caretMidGrapheme";
        secret_character: "secretCharacter";
        text_direction: "textDirection";
        structured_text_bidi_override: "structuredTextBidiOverride";
        structured_text_bidi_override_options: "structuredTextBidiOverrideOptions";
        text_changed: "textChanged";
        text_change_rejected: "textChangeRejected";
        text_submitted: "textSubmitted";
        editing_toggled: "editingToggled";
    }
    /** An input field for single-line text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_lineedit.html  
     */
    class LineEdit<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the user has text in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME). */
        hasImeText(): boolean
        
        /** Closes the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) if it is open. Any text in the IME will be lost. */
        cancelIme(): void
        
        /** Applies text from the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) and closes the IME if it is open. */
        applyIme(): void
        
        /** Allows entering edit mode whether the [LineEdit] is focused or not.  
         *  See also [member keep_editing_on_text_submit].  
         */
        edit(): void
        
        /** Allows exiting edit mode while preserving focus. */
        unedit(): void
        
        /** Returns whether the [LineEdit] is being edited. */
        isEditing(): boolean
        
        /** Erases the [LineEdit]'s [member text]. */
        clear(): void
        
        /** Selects characters inside [LineEdit] between [param from] and [param to]. By default, [param from] is at the beginning and [param to] at the end.  
         *    
         */
        select(from?: int64 /* = 0 */, to?: int64 /* = -1 */): void
        
        /** Selects the whole [String]. */
        selectAll(): void
        
        /** Clears the current selection. */
        deselect(): void
        
        /** Returns `true` if an "undo" action is available. */
        hasUndo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        hasRedo(): boolean
        
        /** Returns `true` if the user has selected text. */
        hasSelection(): boolean
        
        /** Returns the text inside the selection. */
        getSelectedText(): string
        
        /** Returns the selection begin column. */
        getSelectionFromColumn(): int64
        
        /** Returns the selection end column. */
        getSelectionToColumn(): int64
        
        /** Returns the correct column at the end of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the start of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_next_composite_character_column(get_caret_column())`  
         */
        getNextCompositeCharacterColumn(column: int64): int64
        
        /** Returns the correct column at the start of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the end of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_previous_composite_character_column(get_caret_column())`  
         */
        getPreviousCompositeCharacterColumn(column: int64): int64
        
        /** Returns the scroll offset due to [member caret_column], as a number of characters. */
        getScrollOffset(): float64
        
        /** Inserts [param text] at the caret. If the resulting value is longer than [member max_length], nothing happens. */
        insertTextAtCaret(text: string): void
        
        /** Deletes one character at the caret's current position (equivalent to pressing [kbd]Delete[/kbd]). */
        deleteCharAtCaret(): void
        
        /** Deletes a section of the [member text] going from position [param from_column] to [param to_column]. Both parameters should be within the text's length. */
        deleteText(fromColumn: int64, toColumn: int64): void
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menuOption(option: int64): void
        
        /** Returns the [PopupMenu] of this [LineEdit]. By default, this menu is displayed when right-clicking on the [LineEdit].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getMenu(): null | PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        isMenuVisible(): boolean
        
        /** String value of the [LineEdit].  
         *      
         *  **Note:** Changing text using this property won't emit the [signal text_changed] signal.  
         */
        get text(): string
        set text(value: string)
        
        /** Text shown when the [LineEdit] is empty. It is **not** the [LineEdit]'s default value (see [member text]). */
        get placeholderText(): string
        set placeholderText(value: string)
        
        /** Text alignment as defined in the [enum HorizontalAlignment] enum. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Maximum number of characters that can be entered inside the [LineEdit]. If `0`, there is no limit.  
         *  When a limit is defined, characters that would exceed [member max_length] are truncated. This happens both for existing [member text] contents when setting the max length, or for new text inserted in the [LineEdit], including pasting.  
         *  If any input text is truncated, the [signal text_change_rejected] signal is emitted with the truncated substring as a parameter:  
         *    
         */
        get maxLength(): int64
        set maxLength(value: int64)
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, the [LineEdit] will not exit edit mode when text is submitted by pressing `ui_text_submit` action (by default: [kbd]Enter[/kbd] or [kbd]Kp Enter[/kbd]). */
        get keepEditingOnTextSubmit(): boolean
        set keepEditingOnTextSubmit(value: boolean)
        
        /** If `true`, the [LineEdit] width will increase to stay longer than the [member text]. It will **not** compress if the [member text] is shortened. */
        get expandToTextLength(): boolean
        set expandToTextLength(value: boolean)
        
        /** If `true`, the context menu will appear when right-clicked. */
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        
        /** If `true`, "Emoji and Symbols" menu is enabled. */
        get emojiMenuEnabled(): boolean
        set emojiMenuEnabled(value: boolean)
        
        /** If `true` and [member caret_mid_grapheme] is `false`, backspace deletes an entire composite character such as ❤️‍🩹, instead of deleting part of the composite character. */
        get backspaceDeletesCompositeCharacterEnabled(): boolean
        set backspaceDeletesCompositeCharacterEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is enabled on platforms that support it. */
        get virtualKeyboardEnabled(): boolean
        set virtualKeyboardEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is shown on focus events on platforms that support it. */
        get virtualKeyboardShowOnFocus(): boolean
        set virtualKeyboardShowOnFocus(value: boolean)
        
        /** Specifies the type of virtual keyboard to show. */
        get virtualKeyboardType(): int64
        set virtualKeyboardType(value: int64)
        
        /** If `true`, the [LineEdit] will show a clear button if [member text] is not empty, which can be used to clear the text quickly. */
        get clearButtonEnabled(): boolean
        set clearButtonEnabled(value: boolean)
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        get middleMousePasteEnabled(): boolean
        set middleMousePasteEnabled(value: boolean)
        
        /** If `false`, it's impossible to select the text using mouse nor keyboard. */
        get selectingEnabled(): boolean
        set selectingEnabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. */
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        
        /** Sets the icon that will appear in the right end of the [LineEdit] if there's no [member text], or always, if [member clear_button_enabled] is set to `false`. */
        get rightIcon(): null | Texture2D
        set rightIcon(value: null | Texture2D)
        
        /** If `true`, the [LineEdit] doesn't display decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** If `true`, control characters are displayed. */
        get drawControlChars(): boolean
        set drawControlChars(value: boolean)
        
        /** If `true`, the [LineEdit] will select the whole text when it gains focus. */
        get selectAllOnFocus(): boolean
        set selectAllOnFocus(value: boolean)
        
        /** If `true`, makes the caret blink. */
        get caretBlink(): boolean
        set caretBlink(value: boolean)
        
        /** The interval at which the caret blinks (in seconds). */
        get caretBlinkInterval(): float64
        set caretBlinkInterval(value: float64)
        
        /** The caret's column position inside the [LineEdit]. When set, the text may scroll to accommodate it. */
        get caretColumn(): int64
        set caretColumn(value: int64)
        
        /** If `true`, the [LineEdit] will always show the caret, even if not editing or focus is lost. */
        get caretForceDisplayed(): boolean
        set caretForceDisplayed(value: boolean)
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        get caretMidGrapheme(): boolean
        set caretMidGrapheme(value: boolean)
        
        /** If `true`, every character is replaced with the secret character (see [member secret_character]). */
        get secret(): boolean
        set secret(value: boolean)
        
        /** The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead. */
        get secretCharacter(): string
        set secretCharacter(value: string)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
        
        /** Emitted when the text changes. */
        readonly textChanged: Signal<(newText: string) => void>
        
        /** Emitted when appending text that overflows the [member max_length]. The appended text is truncated to fit [member max_length], and the part that couldn't fit is passed as the [param rejected_substring] argument. */
        readonly textChangeRejected: Signal<(rejectedSubstring: string) => void>
        
        /** Emitted when the user presses the `ui_text_submit` action (by default: [kbd]Enter[/kbd] or [kbd]Kp Enter[/kbd]) while the [LineEdit] has focus. */
        readonly textSubmitted: Signal<(newText: string) => void>
        
        /** Emitted when the [LineEdit] switches in or out of edit mode. */
        readonly editingToggled: Signal<(toggledOn: boolean) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapLineEdit;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapLineEdit;
    }
}
