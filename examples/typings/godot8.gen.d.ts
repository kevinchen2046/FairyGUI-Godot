// AUTO-GENERATED
declare module "godot" {
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStyleBoxLine extends __RPCMapStyleBox {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStyleBoxLine extends __NameMapStyleBox {
        grow_begin: "growBegin";
        grow_end: "growEnd";
    }
    /** A [StyleBox] that displays a single line of a given color and thickness.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_styleboxline.html  
     */
    class StyleBoxLine extends StyleBox {
        constructor(identifier?: any)
        /** The line's color. */
        get color(): Color
        set color(value: Color)
        
        /** The number of pixels the line will extend before the [StyleBoxLine]'s bounds. If set to a negative value, the line will begin inside the [StyleBoxLine]'s bounds. */
        get growBegin(): float64
        set growBegin(value: float64)
        
        /** The number of pixels the line will extend past the [StyleBoxLine]'s bounds. If set to a negative value, the line will end inside the [StyleBoxLine]'s bounds. */
        get growEnd(): float64
        set growEnd(value: float64)
        
        /** The line's thickness in pixels. */
        get thickness(): int64
        set thickness(value: int64)
        
        /** If `true`, the line will be vertical. If `false`, the line will be horizontal. */
        get vertical(): boolean
        set vertical(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStyleBoxLine;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStyleBoxLine;
    }
    namespace StyleBoxTexture {
        enum AxisStretchMode {
            AxisStretchModeStretch = 0,
            AxisStretchModeTile = 1,
            AxisStretchModeTileFit = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapStyleBoxTexture extends __RPCMapStyleBox {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapStyleBoxTexture extends __NameMapStyleBox {
        set_texture_margin: "setTextureMargin";
        set_texture_margin_all: "setTextureMarginAll";
        get_texture_margin: "getTextureMargin";
        set_expand_margin: "setExpandMargin";
        set_expand_margin_all: "setExpandMarginAll";
        get_expand_margin: "getExpandMargin";
        texture_margin_left: "textureMarginLeft";
        texture_margin_top: "textureMarginTop";
        texture_margin_right: "textureMarginRight";
        texture_margin_bottom: "textureMarginBottom";
        expand_margin_left: "expandMarginLeft";
        expand_margin_top: "expandMarginTop";
        expand_margin_right: "expandMarginRight";
        expand_margin_bottom: "expandMarginBottom";
        axis_stretch_horizontal: "axisStretchHorizontal";
        axis_stretch_vertical: "axisStretchVertical";
        region_rect: "regionRect";
        modulate_color: "modulateColor";
        draw_center: "drawCenter";
    }
    /** A texture-based nine-patch [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_styleboxtexture.html  
     */
    class StyleBoxTexture extends StyleBox {
        constructor(identifier?: any)
        /** Sets the margin to [param size] pixels for the specified [enum Side]. */
        setTextureMargin(margin: Side, size: float64): void
        
        /** Sets the margin to [param size] pixels for all sides. */
        setTextureMarginAll(size: float64): void
        
        /** Returns the margin size of the specified [enum Side]. */
        getTextureMargin(margin: Side): float64
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        setExpandMargin(margin: Side, size: float64): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        setExpandMarginAll(size: float64): void
        
        /** Returns the expand margin size of the specified [enum Side]. */
        getExpandMargin(margin: Side): float64
        
        /** The texture to use when drawing this style box. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Increases the left margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the left border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_left] if it is negative.  
         */
        get textureMarginLeft(): float64
        set textureMarginLeft(value: float64)
        
        /** Increases the top margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the top border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_top] if it is negative.  
         */
        get textureMarginTop(): float64
        set textureMarginTop(value: float64)
        
        /** Increases the right margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the right border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_right] if it is negative.  
         */
        get textureMarginRight(): float64
        set textureMarginRight(value: float64)
        
        /** Increases the bottom margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the bottom border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_bottom] if it is negative.  
         */
        get textureMarginBottom(): float64
        set textureMarginBottom(value: float64)
        
        /** Expands the left margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginLeft(): float64
        set expandMarginLeft(value: float64)
        
        /** Expands the top margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginTop(): float64
        set expandMarginTop(value: float64)
        
        /** Expands the right margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginRight(): float64
        set expandMarginRight(value: float64)
        
        /** Expands the bottom margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginBottom(): float64
        set expandMarginBottom(value: float64)
        
        /** Controls how the stylebox's texture will be stretched or tiled horizontally. */
        get axisStretchHorizontal(): int64
        set axisStretchHorizontal(value: int64)
        
        /** Controls how the stylebox's texture will be stretched or tiled vertically. */
        get axisStretchVertical(): int64
        set axisStretchVertical(value: int64)
        
        /** The region to use from the [member texture].  
         *  This is equivalent to first wrapping the [member texture] in an [AtlasTexture] with the same region.  
         *  If empty (`Rect2(0, 0, 0, 0)`), the whole [member texture] is used.  
         */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** Modulates the color of the texture when this style box is drawn. */
        get modulateColor(): Color
        set modulateColor(value: Color)
        
        /** If `true`, the nine-patch texture's center tile will be drawn. */
        get drawCenter(): boolean
        set drawCenter(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapStyleBoxTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapStyleBoxTexture;
    }
    namespace SubViewport {
        enum ClearMode {
            ClearModeAlways = 0,
            ClearModeNever = 1,
            ClearModeOnce = 2,
        }
        enum UpdateMode {
            UpdateDisabled = 0,
            UpdateOnce = 1,
            UpdateWhenVisible = 2,
            UpdateWhenParentVisible = 3,
            UpdateAlways = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSubViewport extends __RPCMapViewport {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSubViewport extends __NameMapViewport {
        size_2d_override: "size2DOverride";
        size_2d_override_stretch: "size2DOverrideStretch";
        render_target_clear_mode: "renderTargetClearMode";
        render_target_update_mode: "renderTargetUpdateMode";
    }
    /** An interface to a game world that doesn't create a window or draw to the screen directly.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_subviewport.html  
     */
    class SubViewport<Map extends NodePathMap = any> extends Viewport<Map> {
        constructor(identifier?: any)
        /** The width and height of the sub-viewport. Must be set to a value greater than or equal to 2 pixels on both dimensions. Otherwise, nothing will be displayed.  
         *      
         *  **Note:** If the parent node is a [SubViewportContainer] and its [member SubViewportContainer.stretch] is `true`, the viewport size cannot be changed manually.  
         */
        get size(): Vector2I
        set size(value: Vector2I)
        
        /** The 2D size override of the sub-viewport. If either the width or height is `0`, the override is disabled. */
        get size2DOverride(): Vector2I
        set size2DOverride(value: Vector2I)
        
        /** If `true`, the 2D size override affects stretch as well. */
        get size2DOverrideStretch(): boolean
        set size2DOverrideStretch(value: boolean)
        
        /** The clear mode when the sub-viewport is used as a render target.  
         *      
         *  **Note:** This property is intended for 2D usage.  
         */
        get renderTargetClearMode(): int64
        set renderTargetClearMode(value: int64)
        
        /** The update mode when the sub-viewport is used as a render target. */
        get renderTargetUpdateMode(): int64
        set renderTargetUpdateMode(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSubViewport;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSubViewport;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSubViewportContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSubViewportContainer extends __NameMapContainer {
        _propagate_input_event: "_propagateInputEvent";
        stretch_shrink: "stretchShrink";
        mouse_target: "mouseTarget";
    }
    /** A container used for displaying the contents of a [SubViewport].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_subviewportcontainer.html  
     */
    class SubViewportContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** Virtual method to be implemented by the user. If it returns `true`, the [param event] is propagated to [SubViewport] children. Propagation doesn't happen if it returns `false`. If the function is not implemented, all events are propagated to SubViewports. */
        /* gdvirtual */ _propagateInputEvent(event: InputEvent): boolean
        
        /** If `true`, the sub-viewport will be automatically resized to the control's size.  
         *      
         *  **Note:** If `true`, this will prohibit changing [member SubViewport.size] of its children manually.  
         */
        get stretch(): boolean
        set stretch(value: boolean)
        
        /** Divides the sub-viewport's effective resolution by this value while preserving its scale. This can be used to speed up rendering.  
         *  For example, a 1280×720 sub-viewport with [member stretch_shrink] set to `2` will be rendered at 640×360 while occupying the same size in the container.  
         *      
         *  **Note:** [member stretch] must be `true` for this property to work.  
         */
        get stretchShrink(): int64
        set stretchShrink(value: int64)
        
        /** Configure, if either the [SubViewportContainer] or alternatively the [Control] nodes of its [SubViewport] children should be available as targets of mouse-related functionalities, like identifying the drop target in drag-and-drop operations or cursor shape of hovered [Control] node.  
         *  If `false`, the [Control] nodes inside its [SubViewport] children are considered as targets.  
         *  If `true`, the [SubViewportContainer] itself will be considered as a target.  
         */
        get mouseTarget(): boolean
        set mouseTarget(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSubViewportContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSubViewportContainer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSubtweenTweener extends __RPCMapTweener {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSubtweenTweener extends __NameMapTweener {
        set_delay: "setDelay";
    }
    /** Runs a [Tween] nested within another [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_subtweentweener.html  
     */
    class SubtweenTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets the time in seconds after which the [SubtweenTweener] will start running the subtween. By default there's no delay. */
        setDelay(delay: float64): null | SubtweenTweener
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSubtweenTweener;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSubtweenTweener;
    }
    namespace SurfaceTool {
        enum CustomFormat {
            CustomRgba8Unorm = 0,
            CustomRgba8Snorm = 1,
            CustomRgHalf = 2,
            CustomRgbaHalf = 3,
            CustomRFloat = 4,
            CustomRgFloat = 5,
            CustomRgbFloat = 6,
            CustomRgbaFloat = 7,
            CustomMax = 8,
        }
        enum SkinWeightCount {
            Skin4Weights = 0,
            Skin8Weights = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSurfaceTool extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSurfaceTool extends __NameMapRefCounted {
        set_skin_weight_count: "setSkinWeightCount";
        get_skin_weight_count: "getSkinWeightCount";
        set_custom_format: "setCustomFormat";
        get_custom_format: "getCustomFormat";
        add_vertex: "addVertex";
        set_color: "setColor";
        set_normal: "setNormal";
        set_tangent: "setTangent";
        set_uv: "setUV";
        set_uv2: "setUV2";
        set_bones: "setBones";
        set_weights: "setWeights";
        set_custom: "setCustom";
        set_smooth_group: "setSmoothGroup";
        add_triangle_fan: "addTriangleFan";
        add_index: "addIndex";
        generate_normals: "generateNormals";
        generate_tangents: "generateTangents";
        optimize_indices_for_cache: "optimizeIndicesForCache";
        get_aabb: "getAabb";
        generate_lod: "generateLod";
        set_material: "setMaterial";
        get_primitive_type: "getPrimitiveType";
        create_from: "createFrom";
        create_from_arrays: "createFromArrays";
        create_from_blend_shape: "createFromBlendShape";
        append_from: "appendFrom";
        commit_to_arrays: "commitToArrays";
    }
    /** Helper tool to create geometry.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_surfacetool.html  
     */
    class SurfaceTool extends RefCounted {
        constructor(identifier?: any)
        /** Set to [constant SKIN_8_WEIGHTS] to indicate that up to 8 bone influences per vertex may be used.  
         *  By default, only 4 bone influences are used ([constant SKIN_4_WEIGHTS]).  
         *      
         *  **Note:** This function takes an enum, not the exact number of weights.  
         */
        setSkinWeightCount(count: SurfaceTool.SkinWeightCount): void
        
        /** By default, returns [constant SKIN_4_WEIGHTS] to indicate only 4 bone influences per vertex are used.  
         *  Returns [constant SKIN_8_WEIGHTS] if up to 8 influences are used.  
         *      
         *  **Note:** This function returns an enum, not the exact number of weights.  
         */
        getSkinWeightCount(): SurfaceTool.SkinWeightCount
        
        /** Sets the color format for this custom [param channel_index]. Use [constant CUSTOM_MAX] to disable.  
         *  Must be invoked after [method begin] and should be set before [method commit] or [method commit_to_arrays].  
         */
        setCustomFormat(channelIndex: int64, format: SurfaceTool.CustomFormat): void
        
        /** Returns the format for custom [param channel_index] (currently up to 4). Returns [constant CUSTOM_MAX] if this custom channel is unused. */
        getCustomFormat(channelIndex: int64): SurfaceTool.CustomFormat
        
        /** Called before adding any vertices. Takes the primitive type as an argument (e.g. [constant Mesh.PRIMITIVE_TRIANGLES]). */
        begin(primitive: Mesh.PrimitiveType): void
        
        /** Specifies the position of current vertex. Should be called after specifying other vertex properties (e.g. Color, UV). */
        addVertex(vertex: Vector3): void
        
        /** Specifies a [Color] to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.  
         *      
         *  **Note:** The material must have [member BaseMaterial3D.vertex_color_use_as_albedo] enabled for the vertex color to be visible.  
         */
        setColor(color: Color): void
        
        /** Specifies a normal to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setNormal(normal: Vector3): void
        
        /** Specifies a tangent to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setTangent(tangent: Plane): void
        
        /** Specifies a set of UV coordinates to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setUV(uV: Vector2): void
        
        /** Specifies an optional second set of UV coordinates to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setUV2(uV2: Vector2): void
        
        /** Specifies an array of bones to use for the  *next*  vertex. [param bones] must contain 4 integers. */
        setBones(bones: PackedInt32Array | int32[]): void
        
        /** Specifies weight values to use for the  *next*  vertex. [param weights] must contain 4 values. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setWeights(weights: PackedFloat32Array | float32[]): void
        
        /** Sets the custom value on this vertex for [param channel_index].  
         *  [method set_custom_format] must be called first for this [param channel_index]. Formats which are not RGBA will ignore other color channels.  
         */
        setCustom(channelIndex: int64, customColor: Color): void
        
        /** Specifies the smooth group to use for the  *next*  vertex. If this is never called, all vertices will have the default smooth group of `0` and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to `-1`.  
         *      
         *  **Note:** This function actually takes a `uint32_t`, so C# users should use `uint32.MaxValue` instead of `-1` to produce a mesh with flat normals.  
         */
        setSmoothGroup(index: int64): void
        
        /** Inserts a triangle fan made of array data into [Mesh] being constructed.  
         *  Requires the primitive type be set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        addTriangleFan(vertices: PackedVector3Array | Vector3[], uvs?: PackedVector2Array | Vector2[] /* = [] */, colors?: PackedColorArray | Color[] /* = [] */, uv2S?: PackedVector2Array | Vector2[] /* = [] */, normals?: PackedVector3Array | Vector3[] /* = [] */, tangents?: GArray<Plane>): void
        
        /** Adds a vertex to index array if you are using indexed vertices. Does not need to be called before adding vertices. */
        addIndex(index: int64): void
        
        /** Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse. */
        index(): void
        
        /** Removes the index array by expanding the vertex array. */
        deindex(): void
        
        /** Generates normals from vertices so you do not have to do it manually. If [param flip] is `true`, the resulting normals will be inverted. [method generate_normals] should be called  *after*  generating geometry and  *before*  committing the mesh using [method commit] or [method commit_to_arrays]. For correct display of normal-mapped surfaces, you will also have to generate tangents using [method generate_tangents].  
         *      
         *  **Note:** [method generate_normals] only works if the primitive type is set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         *      
         *  **Note:** [method generate_normals] takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to `0` using [method set_smooth_group] or leave the smooth group at the default of `0`. To generate flat normals, set the smooth group to `-1` using [method set_smooth_group] prior to adding vertices.  
         */
        generateNormals(flip?: boolean /* = false */): void
        
        /** Generates a tangent vector for each vertex. Requires that each vertex already has UVs and normals set (see [method generate_normals]). */
        generateTangents(): void
        
        /** Optimizes triangle sorting for performance. Requires that [method get_primitive_type] is [constant Mesh.PRIMITIVE_TRIANGLES]. */
        optimizeIndicesForCache(): void
        
        /** Returns the axis-aligned bounding box of the vertex positions. */
        getAabb(): Aabb
        
        /** Generates an LOD for a given [param nd_threshold] in linear units (square root of quadric error metric), using at most [param target_index_count] indices. */
        generateLod(ndThreshold: float64, targetIndexCount?: int64 /* = 3 */): PackedInt32Array
        
        /** Sets [Material] to be used by the [Mesh] you are constructing. */
        setMaterial(material: Material): void
        
        /** Returns the type of mesh geometry, such as [constant Mesh.PRIMITIVE_TRIANGLES]. */
        getPrimitiveType(): Mesh.PrimitiveType
        
        /** Clear all information passed into the surface tool so far. */
        clear(): void
        
        /** Creates a vertex array from an existing [Mesh]. */
        createFrom(existing: Mesh, surface: int64): void
        
        /** Creates this SurfaceTool from existing vertex arrays such as returned by [method commit_to_arrays], [method Mesh.surface_get_arrays], [method Mesh.surface_get_blend_shape_arrays], [method ImporterMesh.get_surface_arrays], and [method ImporterMesh.get_surface_blend_shape_arrays]. [param primitive_type] controls the type of mesh data, defaulting to [constant Mesh.PRIMITIVE_TRIANGLES]. */
        createFromArrays(arrays: GArray, primitiveType?: Mesh.PrimitiveType /* = 3 */): void
        
        /** Creates a vertex array from the specified blend shape of an existing [Mesh]. This can be used to extract a specific pose from a blend shape. */
        createFromBlendShape(existing: Mesh, surface: int64, blendShape: string): void
        
        /** Append vertices from a given [Mesh] surface onto the current vertex array with specified [Transform3D]. */
        appendFrom(existing: Mesh, surface: int64, transform: Transform3D): void
        
        /** Returns a constructed [ArrayMesh] from current information passed in. If an existing [ArrayMesh] is passed in as an argument, will add an extra surface to the existing [ArrayMesh].  
         *  The [param flags] argument can be the bitwise OR of [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         */
        commit(existing?: ArrayMesh, flags?: int64 /* = 0 */): null | ArrayMesh
        
        /** Commits the data to the same format used by [method ArrayMesh.add_surface_from_arrays], [method ImporterMesh.add_surface], and [method create_from_arrays]. This way you can further process the mesh data using the [ArrayMesh] or [ImporterMesh] APIs. */
        commitToArrays(): GArray
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSurfaceTool;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSurfaceTool;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSyntaxHighlighter extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSyntaxHighlighter extends __NameMapResource {
        _get_line_syntax_highlighting: "_getLineSyntaxHighlighting";
        _clear_highlighting_cache: "_clearHighlightingCache";
        _update_cache: "_updateCache";
        get_line_syntax_highlighting: "getLineSyntaxHighlighting";
        update_cache: "updateCache";
        clear_highlighting_cache: "clearHighlightingCache";
        get_text_edit: "getTextEdit";
    }
    /** Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_syntaxhighlighter.html  
     */
    class SyntaxHighlighter extends Resource {
        constructor(identifier?: any)
        /** Virtual method which can be overridden to return syntax highlighting data.  
         *  See [method get_line_syntax_highlighting] for more details.  
         */
        /* gdvirtual */ _getLineSyntaxHighlighting(line: int64): GDictionary
        
        /** Virtual method which can be overridden to clear any local caches. */
        /* gdvirtual */ _clearHighlightingCache(): void
        
        /** Virtual method which can be overridden to update any local caches. */
        /* gdvirtual */ _updateCache(): void
        
        /** Returns the syntax highlighting data for the line at index [param line]. If the line is not cached, calls [method _get_line_syntax_highlighting] first to calculate the data.  
         *  Each entry is a column number containing a nested [Dictionary]. The column number denotes the start of a region, the region will end if another region is found, or at the end of the line. The nested [Dictionary] contains the data for that region. Currently only the key `"color"` is supported.  
         *  **Example:** Possible return value. This means columns `0` to `4` should be red, and columns `5` to the end of the line should be green:  
         *    
         */
        getLineSyntaxHighlighting(line: int64): GDictionary
        
        /** Clears then updates the [SyntaxHighlighter] caches. Override [method _update_cache] for a callback.  
         *      
         *  **Note:** This is called automatically when the associated [TextEdit] node, updates its own cache.  
         */
        updateCache(): void
        
        /** Clears all cached syntax highlighting data.  
         *  Then calls overridable method [method _clear_highlighting_cache].  
         */
        clearHighlightingCache(): void
        
        /** Returns the associated [TextEdit] node. */
        getTextEdit(): null | TextEdit
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSyntaxHighlighter;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSyntaxHighlighter;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapSystemFont extends __RPCMapFont {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapSystemFont extends __NameMapFont {
        font_names: "fontNames";
        font_italic: "fontItalic";
        font_weight: "fontWeight";
        font_stretch: "fontStretch";
        generate_mipmaps: "generateMipmaps";
        disable_embedded_bitmaps: "disableEmbeddedBitmaps";
        allow_system_fallback: "allowSystemFallback";
        force_autohinter: "forceAutohinter";
        modulate_color_glyphs: "modulateColorGlyphs";
        subpixel_positioning: "subpixelPositioning";
        keep_rounding_remainders: "keepRoundingRemainders";
        multichannel_signed_distance_field: "multichannelSignedDistanceField";
        msdf_pixel_range: "msdfPixelRange";
        msdf_size: "msdfSize";
    }
    /** A font loaded from a system font. Falls back to a default theme font if not implemented on the host OS.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_systemfont.html  
     */
    class SystemFont extends Font {
        constructor(identifier?: any)
        /** Array of font family names to search, first matching font found is used. */
        get fontNames(): PackedStringArray
        set fontNames(value: PackedStringArray | string[])
        
        /** If set to `true`, italic or oblique font is preferred. */
        get fontItalic(): boolean
        set fontItalic(value: boolean)
        
        /** Preferred weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        get fontWeight(): int64
        set fontWeight(value: int64)
        
        /** Preferred font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        get fontStretch(): int64
        set fontStretch(value: int64)
        
        /** Font anti-aliasing mode. */
        get antialiasing(): int64
        set antialiasing(value: int64)
        
        /** If set to `true`, generate mipmaps for the font textures. */
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        
        /** If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property). */
        get disableEmbeddedBitmaps(): boolean
        set disableEmbeddedBitmaps(value: boolean)
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        get allowSystemFallback(): boolean
        set allowSystemFallback(value: boolean)
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. */
        get forceAutohinter(): boolean
        set forceAutohinter(value: boolean)
        
        /** If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
        get modulateColorGlyphs(): boolean
        set modulateColorGlyphs(value: boolean)
        
        /** Font hinting mode. */
        get hinting(): int64
        set hinting(value: int64)
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        get subpixelPositioning(): int64
        set subpixelPositioning(value: int64)
        
        /** If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        get keepRoundingRemainders(): boolean
        set keepRoundingRemainders(value: boolean)
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        get multichannelSignedDistanceField(): boolean
        set multichannelSignedDistanceField(value: boolean)
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        get msdfPixelRange(): int64
        set msdfPixelRange(value: int64)
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        get msdfSize(): int64
        set msdfSize(value: int64)
        
        /** If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling` parameter of [code skip-lint]draw_*` methods. */
        get oversampling(): float64
        set oversampling(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapSystemFont;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapSystemFont;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTcpServer extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTcpServer extends __NameMapRefCounted {
        is_connection_available: "isConnectionAvailable";
        is_listening: "isListening";
        get_local_port: "getLocalPort";
        take_connection: "takeConnection";
    }
    class TcpServer extends RefCounted {
        constructor(identifier?: any)
        listen(port: int64, bindAddress?: string /* = '*' */): GError
        isConnectionAvailable(): boolean
        isListening(): boolean
        getLocalPort(): int64
        takeConnection(): null | StreamPeerTcp
        stop(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTcpServer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTcpServer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTlsOptions extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTlsOptions extends __NameMapRefCounted {
        client_unsafe: "clientUnsafe";
        is_server: "isServer";
        is_unsafe_client: "isUnsafeClient";
        get_common_name_override: "getCommonNameOverride";
        get_trusted_ca_chain: "getTrustedCaChain";
        get_private_key: "getPrivateKey";
        get_own_certificate: "getOwnCertificate";
    }
    class TlsOptions extends RefCounted {
        constructor(identifier?: any)
        static client(trustedChain?: X509Certificate, commonNameOverride?: string /* = '' */): null | TlsOptions
        static clientUnsafe(trustedChain?: X509Certificate): null | TlsOptions
        static server(key: CryptoKey, certificate: X509Certificate): null | TlsOptions
        isServer(): boolean
        isUnsafeClient(): boolean
        getCommonNameOverride(): string
        getTrustedCaChain(): null | X509Certificate
        getPrivateKey(): null | CryptoKey
        getOwnCertificate(): null | X509Certificate
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTlsOptions;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTlsOptions;
    }
    namespace TabBar {
        enum AlignmentMode {
            AlignmentLeft = 0,
            AlignmentCenter = 1,
            AlignmentRight = 2,
            AlignmentMax = 3,
        }
        enum CloseButtonDisplayPolicy {
            CloseButtonShowNever = 0,
            CloseButtonShowActiveOnly = 1,
            CloseButtonShowAlways = 2,
            CloseButtonMax = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTabBar extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTabBar extends __NameMapControl {
        get_previous_tab: "getPreviousTab";
        select_previous_available: "selectPreviousAvailable";
        select_next_available: "selectNextAvailable";
        set_tab_title: "setTabTitle";
        get_tab_title: "getTabTitle";
        set_tab_tooltip: "setTabTooltip";
        get_tab_tooltip: "getTabTooltip";
        set_tab_text_direction: "setTabTextDirection";
        get_tab_text_direction: "getTabTextDirection";
        set_tab_language: "setTabLanguage";
        get_tab_language: "getTabLanguage";
        set_tab_icon: "setTabIcon";
        get_tab_icon: "getTabIcon";
        set_tab_icon_max_width: "setTabIconMaxWidth";
        get_tab_icon_max_width: "getTabIconMaxWidth";
        set_tab_button_icon: "setTabButtonIcon";
        get_tab_button_icon: "getTabButtonIcon";
        set_tab_disabled: "setTabDisabled";
        is_tab_disabled: "isTabDisabled";
        set_tab_hidden: "setTabHidden";
        is_tab_hidden: "isTabHidden";
        set_tab_metadata: "setTabMetadata";
        get_tab_metadata: "getTabMetadata";
        remove_tab: "removeTab";
        add_tab: "addTab";
        get_tab_idx_at_point: "getTabIdxAtPoint";
        get_tab_offset: "getTabOffset";
        get_offset_buttons_visible: "getOffsetButtonsVisible";
        ensure_tab_visible: "ensureTabVisible";
        get_tab_rect: "getTabRect";
        move_tab: "moveTab";
        clear_tabs: "clearTabs";
        current_tab: "currentTab";
        tab_alignment: "tabAlignment";
        clip_tabs: "clipTabs";
        close_with_middle_mouse: "closeWithMiddleMouse";
        tab_close_display_policy: "tabCloseDisplayPolicy";
        max_tab_width: "maxTabWidth";
        scrolling_enabled: "scrollingEnabled";
        drag_to_rearrange_enabled: "dragToRearrangeEnabled";
        tabs_rearrange_group: "tabsRearrangeGroup";
        scroll_to_selected: "scrollToSelected";
        select_with_rmb: "selectWithRmb";
        deselect_enabled: "deselectEnabled";
        tab_count: "tabCount";
        tab_selected: "tabSelected";
        tab_changed: "tabChanged";
        tab_clicked: "tabClicked";
        tab_rmb_clicked: "tabRmbClicked";
        tab_close_pressed: "tabClosePressed";
        tab_button_pressed: "tabButtonPressed";
        tab_hovered: "tabHovered";
        active_tab_rearranged: "activeTabRearranged";
    }
    /** A control that provides a horizontal bar with tabs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tabbar.html  
     */
    class TabBar<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Returns the previously active tab index. */
        getPreviousTab(): int64
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        selectPreviousAvailable(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        selectNextAvailable(): boolean
        
        /** Sets a [param title] for the tab at index [param tab_idx]. */
        setTabTitle(tabIdx: int64, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. */
        getTabTitle(tabIdx: int64): string
        
        /** Sets a [param tooltip] for tab at index [param tab_idx].  
         *      
         *  **Note:** By default, if the [param tooltip] is empty and the tab text is truncated (not all characters fit into the tab), the title will be displayed as a tooltip. To hide the tooltip, assign `" "` as the [param tooltip] text.  
         */
        setTabTooltip(tabIdx: int64, tooltip: string): void
        
        /** Returns the tooltip text of the tab at index [param tab_idx]. */
        getTabTooltip(tabIdx: int64): string
        
        /** Sets tab title base writing direction. */
        setTabTextDirection(tabIdx: int64, direction: Control.TextDirection): void
        
        /** Returns tab title text base writing direction. */
        getTabTextDirection(tabIdx: int64): Control.TextDirection
        
        /** Sets language code of tab title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setTabLanguage(tabIdx: int64, language: string): void
        
        /** Returns tab title language code. */
        getTabLanguage(tabIdx: int64): string
        
        /** Sets an [param icon] for the tab at index [param tab_idx]. */
        setTabIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the icon for the tab at index [param tab_idx] or `null` if the tab has no icon. */
        getTabIcon(tabIdx: int64): null | Texture2D
        
        /** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        setTabIconMaxWidth(tabIdx: int64, width: int64): void
        
        /** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
        getTabIconMaxWidth(tabIdx: int64): int64
        
        /** Sets an [param icon] for the button of the tab at index [param tab_idx] (located to the right, before the close button), making it visible and clickable (See [signal tab_button_pressed]). Giving it a `null` value will hide the button. */
        setTabButtonIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the icon for the right button of the tab at index [param tab_idx] or `null` if the right button has no icon. */
        getTabButtonIcon(tabIdx: int64): null | Texture2D
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        setTabDisabled(tabIdx: int64, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        isTabDisabled(tabIdx: int64): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        setTabHidden(tabIdx: int64, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        isTabHidden(tabIdx: int64): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        setTabMetadata(tabIdx: int64, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        getTabMetadata(tabIdx: int64): any
        
        /** Removes the tab at index [param tab_idx]. */
        removeTab(tabIdx: int64): void
        
        /** Adds a new tab. */
        addTab(title?: string /* = '' */, icon?: Texture2D): void
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        getTabIdxAtPoint(point: Vector2): int64
        
        /** Returns the number of hidden tabs offsetted to the left. */
        getTabOffset(): int64
        
        /** Returns `true` if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible. */
        getOffsetButtonsVisible(): boolean
        
        /** Moves the scroll view to make the tab visible. */
        ensureTabVisible(idx: int64): void
        
        /** Returns tab [Rect2] with local position and size. */
        getTabRect(tabIdx: int64): Rect2
        
        /** Moves a tab from [param from] to [param to]. */
        moveTab(from: int64, to: int64): void
        
        /** Clears all tabs. */
        clearTabs(): void
        
        /** The index of the current selected tab. A value of `-1` means that no tab is selected and can only be set when [member deselect_enabled] is `true` or if all tabs are hidden or disabled. */
        get currentTab(): int64
        set currentTab(value: int64)
        
        /** The position at which tabs will be placed. */
        get tabAlignment(): int64
        set tabAlignment(value: int64)
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        get clipTabs(): boolean
        set clipTabs(value: boolean)
        
        /** If `true`, middle clicking on the mouse will fire the [signal tab_close_pressed] signal. */
        get closeWithMiddleMouse(): boolean
        set closeWithMiddleMouse(value: boolean)
        
        /** When the close button will appear on the tabs. */
        get tabCloseDisplayPolicy(): int64
        set tabCloseDisplayPolicy(value: int64)
        
        /** Sets the maximum width which all tabs should be limited to. Unlimited if set to `0`. */
        get maxTabWidth(): int64
        set maxTabWidth(value: int64)
        
        /** if `true`, the mouse's scroll wheel can be used to navigate the scroll view. */
        get scrollingEnabled(): boolean
        set scrollingEnabled(value: boolean)
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        get dragToRearrangeEnabled(): boolean
        set dragToRearrangeEnabled(value: boolean)
        
        /** [TabBar]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabBar]s.  
         */
        get tabsRearrangeGroup(): int64
        set tabsRearrangeGroup(value: int64)
        
        /** If `true`, the tab offset will be changed to keep the currently selected tab visible. */
        get scrollToSelected(): boolean
        set scrollToSelected(value: boolean)
        
        /** If `true`, enables selecting a tab with the right mouse button. */
        get selectWithRmb(): boolean
        set selectWithRmb(value: boolean)
        
        /** If `true`, all tabs can be deselected so that no tab is selected. Click on the current tab to deselect it. */
        get deselectEnabled(): boolean
        set deselectEnabled(value: boolean)
        
        /** The number of tabs currently in the bar. */
        get tabCount(): int64
        set tabCount(value: int64)
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tabSelected: Signal<(tab: int64) => void>
        
        /** Emitted when switching to another tab. */
        readonly tabChanged: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tabClicked: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is right-clicked. [member select_with_rmb] must be enabled. */
        readonly tabRmbClicked: Signal<(tab: int64) => void>
        
        /** Emitted when a tab's close button is pressed or when middle-clicking on a tab, if [member close_with_middle_mouse] is enabled.  
         *      
         *  **Note:** Tabs are not removed automatically once the close button is pressed, this behavior needs to be programmed manually. For example:  
         *    
         */
        readonly tabClosePressed: Signal<(tab: int64) => void>
        
        /** Emitted when a tab's right button is pressed. See [method set_tab_button_icon]. */
        readonly tabButtonPressed: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tabHovered: Signal<(tab: int64) => void>
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
        readonly activeTabRearranged: Signal<(idxTo: int64) => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTabBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTabBar;
    }
    namespace TabContainer {
        enum TabPosition {
            PositionTop = 0,
            PositionBottom = 1,
            PositionMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTabContainer extends __RPCMapContainer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTabContainer extends __NameMapContainer {
        get_tab_count: "getTabCount";
        get_previous_tab: "getPreviousTab";
        select_previous_available: "selectPreviousAvailable";
        select_next_available: "selectNextAvailable";
        get_current_tab_control: "getCurrentTabControl";
        get_tab_bar: "getTabBar";
        get_tab_control: "getTabControl";
        set_tab_title: "setTabTitle";
        get_tab_title: "getTabTitle";
        set_tab_tooltip: "setTabTooltip";
        get_tab_tooltip: "getTabTooltip";
        set_tab_icon: "setTabIcon";
        get_tab_icon: "getTabIcon";
        set_tab_icon_max_width: "setTabIconMaxWidth";
        get_tab_icon_max_width: "getTabIconMaxWidth";
        set_tab_disabled: "setTabDisabled";
        is_tab_disabled: "isTabDisabled";
        set_tab_hidden: "setTabHidden";
        is_tab_hidden: "isTabHidden";
        set_tab_metadata: "setTabMetadata";
        get_tab_metadata: "getTabMetadata";
        set_tab_button_icon: "setTabButtonIcon";
        get_tab_button_icon: "getTabButtonIcon";
        get_tab_idx_at_point: "getTabIdxAtPoint";
        get_tab_idx_from_control: "getTabIdxFromControl";
        set_popup: "setPopup";
        get_popup: "getPopup";
        tab_alignment: "tabAlignment";
        current_tab: "currentTab";
        tabs_position: "tabsPosition";
        clip_tabs: "clipTabs";
        tabs_visible: "tabsVisible";
        all_tabs_in_front: "allTabsInFront";
        drag_to_rearrange_enabled: "dragToRearrangeEnabled";
        tabs_rearrange_group: "tabsRearrangeGroup";
        use_hidden_tabs_for_min_size: "useHiddenTabsForMinSize";
        tab_focus_mode: "tabFocusMode";
        deselect_enabled: "deselectEnabled";
        active_tab_rearranged: "activeTabRearranged";
        tab_changed: "tabChanged";
        tab_clicked: "tabClicked";
        tab_hovered: "tabHovered";
        tab_selected: "tabSelected";
        tab_button_pressed: "tabButtonPressed";
        pre_popup_pressed: "prePopupPressed";
    }
    /** A container that creates a tab for each child control, displaying only the active tab's control.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tabcontainer.html  
     */
    class TabContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** Returns the number of tabs. */
        getTabCount(): int64
        
        /** Returns the previously active tab index. */
        getPreviousTab(): int64
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        selectPreviousAvailable(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        selectNextAvailable(): boolean
        
        /** Returns the child [Control] node located at the active tab index. */
        getCurrentTabControl(): null | Control
        
        /** Returns the [TabBar] contained in this container.  
         *  **Warning:** This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in [TabContainer].  
         */
        getTabBar(): null | TabBar
        
        /** Returns the [Control] node from the tab at index [param tab_idx]. */
        getTabControl(tabIdx: int64): null | Control
        
        /** Sets a custom title for the tab at index [param tab_idx] (tab titles default to the name of the indexed child node). Set it back to the child's name to make the tab default to it again. */
        setTabTitle(tabIdx: int64, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. Tab titles default to the name of the indexed child node, but this can be overridden with [method set_tab_title]. */
        getTabTitle(tabIdx: int64): string
        
        /** Sets a custom tooltip text for tab at index [param tab_idx].  
         *      
         *  **Note:** By default, if the [param tooltip] is empty and the tab text is truncated (not all characters fit into the tab), the title will be displayed as a tooltip. To hide the tooltip, assign `" "` as the [param tooltip] text.  
         */
        setTabTooltip(tabIdx: int64, tooltip: string): void
        
        /** Returns the tooltip text of the tab at index [param tab_idx]. */
        getTabTooltip(tabIdx: int64): string
        
        /** Sets an icon for the tab at index [param tab_idx]. */
        setTabIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the [Texture2D] for the tab at index [param tab_idx] or `null` if the tab has no [Texture2D]. */
        getTabIcon(tabIdx: int64): null | Texture2D
        
        /** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        setTabIconMaxWidth(tabIdx: int64, width: int64): void
        
        /** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
        getTabIconMaxWidth(tabIdx: int64): int64
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        setTabDisabled(tabIdx: int64, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        isTabDisabled(tabIdx: int64): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        setTabHidden(tabIdx: int64, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        isTabHidden(tabIdx: int64): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        setTabMetadata(tabIdx: int64, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        getTabMetadata(tabIdx: int64): any
        
        /** Sets the button icon from the tab at index [param tab_idx]. */
        setTabButtonIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the button icon from the tab at index [param tab_idx]. */
        getTabButtonIcon(tabIdx: int64): null | Texture2D
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        getTabIdxAtPoint(point: Vector2): int64
        
        /** Returns the index of the tab tied to the given [param control]. The control must be a child of the [TabContainer]. */
        getTabIdxFromControl(control: Control): int64
        
        /** If set on a [Popup] node instance, a popup menu icon appears in the top-right corner of the [TabContainer] (setting it to `null` will make it go away). Clicking it will expand the [Popup] node. */
        setPopup(popup: Node): void
        
        /** Returns the [Popup] node instance if one has been set already with [method set_popup].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getPopup(): null | Popup
        
        /** The position at which tabs will be placed. */
        get tabAlignment(): int64
        set tabAlignment(value: int64)
        
        /** The current tab index. When set, this index's [Control] node's `visible` property is set to `true` and all others are set to `false`.  
         *  A value of `-1` means that no tab is selected.  
         */
        get currentTab(): int64
        set currentTab(value: int64)
        
        /** The position of the tab bar. */
        get tabsPosition(): int64
        set tabsPosition(value: int64)
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        get clipTabs(): boolean
        set clipTabs(value: boolean)
        
        /** If `true`, tabs are visible. If `false`, tabs' content and titles are hidden. */
        get tabsVisible(): boolean
        set tabsVisible(value: boolean)
        
        /** If `true`, all tabs are drawn in front of the panel. If `false`, inactive tabs are drawn behind the panel. */
        get allTabsInFront(): boolean
        set allTabsInFront(value: boolean)
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        get dragToRearrangeEnabled(): boolean
        set dragToRearrangeEnabled(value: boolean)
        
        /** [TabContainer]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabContainer]s.  
         */
        get tabsRearrangeGroup(): int64
        set tabsRearrangeGroup(value: int64)
        
        /** If `true`, child [Control] nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one. */
        get useHiddenTabsForMinSize(): boolean
        set useHiddenTabsForMinSize(value: boolean)
        
        /** The focus access mode for the internal [TabBar] node. */
        get tabFocusMode(): int64
        set tabFocusMode(value: int64)
        
        /** If `true`, all tabs can be deselected so that no tab is selected. Click on the [member current_tab] to deselect it.  
         *  Only the tab header will be shown if no tabs are selected.  
         */
        get deselectEnabled(): boolean
        set deselectEnabled(value: boolean)
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
        readonly activeTabRearranged: Signal<(idxTo: int64) => void>
        
        /** Emitted when switching to another tab. */
        readonly tabChanged: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tabClicked: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tabHovered: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tabSelected: Signal<(tab: int64) => void>
        
        /** Emitted when the user clicks on the button icon on this tab. */
        readonly tabButtonPressed: Signal<(tab: int64) => void>
        
        /** Emitted when the [TabContainer]'s [Popup] button is clicked. See [method set_popup] for details. */
        readonly prePopupPressed: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTabContainer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTabContainer;
    }
    namespace TextEdit {
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
        enum EditAction {
            ActionNone = 0,
            ActionTyping = 1,
            ActionBackspace = 2,
            ActionDelete = 3,
        }
        enum SearchFlags {
            SearchMatchCase = 1,
            SearchWholeWords = 2,
            SearchBackwards = 4,
        }
        enum CaretType {
            CaretTypeLine = 0,
            CaretTypeBlock = 1,
        }
        enum SelectionMode {
            SelectionModeNone = 0,
            SelectionModeShift = 1,
            SelectionModePointer = 2,
            SelectionModeWord = 3,
            SelectionModeLine = 4,
        }
        enum LineWrappingMode {
            LineWrappingNone = 0,
            LineWrappingBoundary = 1,
        }
        enum GutterType {
            GutterTypeString = 0,
            GutterTypeIcon = 1,
            GutterTypeCustom = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextEdit extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextEdit extends __NameMapControl {
        _handle_unicode_input: "_handleUnicodeInput";
        _paste_primary_clipboard: "_pastePrimaryClipboard";
        has_ime_text: "hasImeText";
        cancel_ime: "cancelIme";
        apply_ime: "applyIme";
        set_tab_size: "setTabSize";
        get_tab_size: "getTabSize";
        set_overtype_mode_enabled: "setOvertypeModeEnabled";
        is_overtype_mode_enabled: "isOvertypeModeEnabled";
        get_line_count: "getLineCount";
        set_line: "setLine";
        get_line: "getLine";
        get_line_with_ime: "getLineWithIme";
        get_line_width: "getLineWidth";
        get_line_height: "getLineHeight";
        get_indent_level: "getIndentLevel";
        get_first_non_whitespace_column: "getFirstNonWhiteSpaceColumn";
        swap_lines: "swapLines";
        insert_line_at: "insertLineAt";
        remove_line_at: "removeLineAt";
        insert_text_at_caret: "insertTextAtCaret";
        insert_text: "insertText";
        remove_text: "removeText";
        get_last_unhidden_line: "getLastUnhiddenLine";
        get_next_visible_line_offset_from: "getNextVisibleLineOffsetFrom";
        get_next_visible_line_index_offset_from: "getNextVisibleLineIndexOffsetFrom";
        paste_primary_clipboard: "pastePrimaryClipboard";
        start_action: "startAction";
        end_action: "endAction";
        begin_complex_operation: "beginComplexOperation";
        end_complex_operation: "endComplexOperation";
        has_undo: "hasUndo";
        has_redo: "hasRedo";
        clear_undo_history: "clearUndoHistory";
        tag_saved_version: "tagSavedVersion";
        get_version: "getVersion";
        get_saved_version: "getSavedVersion";
        set_search_text: "setSearchText";
        set_search_flags: "setSearchFlags";
        set_tooltip_request_func: "setTooltipRequestFunc";
        get_local_mouse_pos: "getLocalMousePos";
        get_word_at_pos: "getWordAtPos";
        get_line_column_at_pos: "getLineColumnAtPos";
        get_pos_at_line_column: "getPosAtLineColumn";
        get_rect_at_line_column: "getRectAtLineColumn";
        get_minimap_line_at_pos: "getMinimapLineAtPos";
        is_dragging_cursor: "isDraggingCursor";
        is_mouse_over_selection: "isMouseOverSelection";
        add_caret: "addCaret";
        remove_caret: "removeCaret";
        remove_secondary_carets: "removeSecondaryCarets";
        get_caret_count: "getCaretCount";
        add_caret_at_carets: "addCaretAtCarets";
        get_sorted_carets: "getSortedCarets";
        collapse_carets: "collapseCarets";
        merge_overlapping_carets: "mergeOverlappingCarets";
        begin_multicaret_edit: "beginMulticaretEdit";
        end_multicaret_edit: "endMulticaretEdit";
        is_in_mulitcaret_edit: "isInMulitcaretEdit";
        multicaret_edit_ignore_caret: "multicaretEditIgnoreCaret";
        is_caret_visible: "isCaretVisible";
        get_caret_draw_pos: "getCaretDrawPos";
        set_caret_line: "setCaretLine";
        get_caret_line: "getCaretLine";
        set_caret_column: "setCaretColumn";
        get_caret_column: "getCaretColumn";
        get_next_composite_character_column: "getNextCompositeCharacterColumn";
        get_previous_composite_character_column: "getPreviousCompositeCharacterColumn";
        get_caret_wrap_index: "getCaretWrapIndex";
        get_word_under_caret: "getWordUnderCaret";
        set_selection_mode: "setSelectionMode";
        get_selection_mode: "getSelectionMode";
        select_all: "selectAll";
        select_word_under_caret: "selectWordUnderCaret";
        add_selection_for_next_occurrence: "addSelectionForNextOccurrence";
        skip_selection_for_next_occurrence: "skipSelectionForNextOccurrence";
        has_selection: "hasSelection";
        get_selected_text: "getSelectedText";
        get_selection_at_line_column: "getSelectionAtLineColumn";
        get_line_ranges_from_carets: "getLineRangesFromCarets";
        get_selection_origin_line: "getSelectionOriginLine";
        get_selection_origin_column: "getSelectionOriginColumn";
        set_selection_origin_line: "setSelectionOriginLine";
        set_selection_origin_column: "setSelectionOriginColumn";
        get_selection_from_line: "getSelectionFromLine";
        get_selection_from_column: "getSelectionFromColumn";
        get_selection_to_line: "getSelectionToLine";
        get_selection_to_column: "getSelectionToColumn";
        is_caret_after_selection_origin: "isCaretAfterSelectionOrigin";
        delete_selection: "deleteSelection";
        is_line_wrapped: "isLineWrapped";
        get_line_wrap_count: "getLineWrapCount";
        get_line_wrap_index_at_column: "getLineWrapIndexAtColumn";
        get_line_wrapped_text: "getLineWrappedText";
        get_v_scroll_bar: "getVScrollBar";
        get_h_scroll_bar: "getHScrollBar";
        get_scroll_pos_for_line: "getScrollPosForLine";
        set_line_as_first_visible: "setLineAsFirstVisible";
        get_first_visible_line: "getFirstVisibleLine";
        set_line_as_center_visible: "setLineAsCenterVisible";
        set_line_as_last_visible: "setLineAsLastVisible";
        get_last_full_visible_line: "getLastFullVisibleLine";
        get_last_full_visible_line_wrap_index: "getLastFullVisibleLineWrapIndex";
        get_visible_line_count: "getVisibleLineCount";
        get_visible_line_count_in_range: "getVisibleLineCountInRange";
        get_total_visible_line_count: "getTotalVisibleLineCount";
        adjust_viewport_to_caret: "adjustViewportToCaret";
        center_viewport_to_caret: "centerViewportToCaret";
        get_minimap_visible_lines: "getMinimapVisibleLines";
        add_gutter: "addGutter";
        remove_gutter: "removeGutter";
        get_gutter_count: "getGutterCount";
        set_gutter_name: "setGutterName";
        get_gutter_name: "getGutterName";
        set_gutter_type: "setGutterType";
        get_gutter_type: "getGutterType";
        set_gutter_width: "setGutterWidth";
        get_gutter_width: "getGutterWidth";
        set_gutter_draw: "setGutterDraw";
        is_gutter_drawn: "isGutterDrawn";
        set_gutter_clickable: "setGutterClickable";
        is_gutter_clickable: "isGutterClickable";
        set_gutter_overwritable: "setGutterOverwritable";
        is_gutter_overwritable: "isGutterOverwritable";
        merge_gutters: "mergeGutters";
        set_gutter_custom_draw: "setGutterCustomDraw";
        get_total_gutter_width: "getTotalGutterWidth";
        set_line_gutter_metadata: "setLineGutterMetadata";
        get_line_gutter_metadata: "getLineGutterMetadata";
        set_line_gutter_text: "setLineGutterText";
        get_line_gutter_text: "getLineGutterText";
        set_line_gutter_icon: "setLineGutterIcon";
        get_line_gutter_icon: "getLineGutterIcon";
        set_line_gutter_item_color: "setLineGutterItemColor";
        get_line_gutter_item_color: "getLineGutterItemColor";
        set_line_gutter_clickable: "setLineGutterClickable";
        is_line_gutter_clickable: "isLineGutterClickable";
        set_line_background_color: "setLineBackgroundColor";
        get_line_background_color: "getLineBackgroundColor";
        get_menu: "getMenu";
        is_menu_visible: "isMenuVisible";
        menu_option: "menuOption";
        adjust_carets_after_edit: "adjustCaretsAfterEdit";
        get_caret_index_edit_order: "getCaretIndexEditOrder";
        get_selection_line: "getSelectionLine";
        get_selection_column: "getSelectionColumn";
        placeholder_text: "placeholderText";
        context_menu_enabled: "contextMenuEnabled";
        emoji_menu_enabled: "emojiMenuEnabled";
        backspace_deletes_composite_character_enabled: "backspaceDeletesCompositeCharacterEnabled";
        shortcut_keys_enabled: "shortcutKeysEnabled";
        selecting_enabled: "selectingEnabled";
        deselect_on_focus_loss_enabled: "deselectOnFocusLossEnabled";
        drag_and_drop_selection_enabled: "dragAndDropSelectionEnabled";
        virtual_keyboard_enabled: "virtualKeyboardEnabled";
        virtual_keyboard_show_on_focus: "virtualKeyboardShowOnFocus";
        middle_mouse_paste_enabled: "middleMousePasteEnabled";
        empty_selection_clipboard_enabled: "emptySelectionClipboardEnabled";
        wrap_mode: "wrapMode";
        autowrap_mode: "autowrapMode";
        indent_wrapped_lines: "indentWrappedLines";
        tab_input_mode: "tabInputMode";
        scroll_smooth: "scrollSmooth";
        scroll_v_scroll_speed: "scrollVScrollSpeed";
        scroll_past_end_of_file: "scrollPastEndOfFile";
        scroll_vertical: "scrollVertical";
        scroll_horizontal: "scrollHorizontal";
        scroll_fit_content_height: "scrollFitContentHeight";
        scroll_fit_content_width: "scrollFitContentWidth";
        minimap_draw: "minimapDraw";
        minimap_width: "minimapWidth";
        caret_type: "caretType";
        caret_blink: "caretBlink";
        caret_blink_interval: "caretBlinkInterval";
        caret_draw_when_editable_disabled: "caretDrawWhenEditableDisabled";
        caret_move_on_right_click: "caretMoveOnRightClick";
        caret_mid_grapheme: "caretMidGrapheme";
        caret_multiple: "caretMultiple";
        use_default_word_separators: "useDefaultWordSeparators";
        use_custom_word_separators: "useCustomWordSeparators";
        custom_word_separators: "customWordSeparators";
        syntax_highlighter: "syntaxHighlighter";
        highlight_all_occurrences: "highlightAllOccurrences";
        highlight_current_line: "highlightCurrentLine";
        draw_control_chars: "drawControlChars";
        draw_tabs: "drawTabs";
        draw_spaces: "drawSpaces";
        text_direction: "textDirection";
        structured_text_bidi_override: "structuredTextBidiOverride";
        structured_text_bidi_override_options: "structuredTextBidiOverrideOptions";
        text_set: "textSet";
        text_changed: "textChanged";
        lines_edited_from: "linesEditedFrom";
        caret_changed: "caretChanged";
        gutter_clicked: "gutterClicked";
        gutter_added: "gutterAdded";
        gutter_removed: "gutterRemoved";
    }
    /** A multiline text editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textedit.html  
     */
    class TextEdit<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Override this method to define what happens when the user types in the provided key [param unicode_char]. */
        /* gdvirtual */ _handleUnicodeInput(unicodeChar: int64, caretIndex: int64): void
        
        /** Override this method to define what happens when the user presses the backspace key. */
        /* gdvirtual */ _backspace(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a cut operation. */
        /* gdvirtual */ _cut(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a copy operation. */
        /* gdvirtual */ _copy(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a paste operation. */
        /* gdvirtual */ _paste(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a paste operation with middle mouse button.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        /* gdvirtual */ _pastePrimaryClipboard(caretIndex: int64): void
        
        /** Returns `true` if the user has text in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME). */
        hasImeText(): boolean
        
        /** Closes the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) if it is open. Any text in the IME will be lost. */
        cancelIme(): void
        
        /** Applies text from the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) to each caret and closes the IME if it is open. */
        applyIme(): void
        
        /** Sets the tab size for the [TextEdit] to use. */
        setTabSize(size: int64): void
        
        /** Returns the [TextEdit]'s' tab size. */
        getTabSize(): int64
        
        /** If `true`, enables overtype mode. In this mode, typing overrides existing text instead of inserting text. The [member ProjectSettings.input/ui_text_toggle_insert_mode] action toggles overtype mode. See [method is_overtype_mode_enabled]. */
        setOvertypeModeEnabled(enabled: boolean): void
        
        /** Returns `true` if overtype mode is enabled. See [method set_overtype_mode_enabled]. */
        isOvertypeModeEnabled(): boolean
        
        /** Performs a full reset of [TextEdit], including undo history. */
        clear(): void
        
        /** Returns the number of lines in the text. */
        getLineCount(): int64
        
        /** Sets the text for a specific [param line].  
         *  Carets on the line will attempt to keep their visual x position.  
         */
        setLine(line: int64, newText: string): void
        
        /** Returns the text of a specific line. */
        getLine(line: int64): string
        
        /** Returns line text as it is currently displayed, including IME composition string. */
        getLineWithIme(line: int64): string
        
        /** Returns the width in pixels of the [param wrap_index] on [param line]. */
        getLineWidth(line: int64, wrapIndex?: int64 /* = -1 */): int64
        
        /** Returns the maximum value of the line height among all lines.  
         *      
         *  **Note:** The return value is influenced by [theme_item line_spacing] and [theme_item font_size]. And it will not be less than `1`.  
         */
        getLineHeight(): int64
        
        /** Returns the indent level of the given line. This is the number of spaces and tabs at the beginning of the line, with the tabs taking the tab size into account (see [method get_tab_size]). */
        getIndentLevel(line: int64): int64
        
        /** Returns the first column containing a non-whitespace character on the given line. If there is only whitespace, returns the number of characters. */
        getFirstNonWhiteSpaceColumn(line: int64): int64
        
        /** Swaps the two lines. Carets will be swapped with the lines. */
        swapLines(fromLine: int64, toLine: int64): void
        
        /** Inserts a new line with [param text] at [param line]. */
        insertLineAt(line: int64, text: string): void
        
        /** Removes the line of text at [param line]. Carets on this line will attempt to match their previous visual x position.  
         *  If [param move_carets_down] is `true` carets will move to the next line down, otherwise carets will move up.  
         */
        removeLineAt(line: int64, moveCaretsDown?: boolean /* = true */): void
        
        /** Insert the specified text at the caret position. */
        insertTextAtCaret(text: string, caretIndex?: int64 /* = -1 */): void
        
        /** Inserts the [param text] at [param line] and [param column].  
         *  If [param before_selection_begin] is `true`, carets and selections that begin at [param line] and [param column] will moved to the end of the inserted text, along with all carets after it.  
         *  If [param before_selection_end] is `true`, selections that end at [param line] and [param column] will be extended to the end of the inserted text. These parameters can be used to insert text inside of or outside of selections.  
         */
        insertText(text: string, line: int64, column: int64, beforeSelectionBegin?: boolean /* = true */, beforeSelectionEnd?: boolean /* = false */): void
        
        /** Removes text between the given positions. */
        removeText(fromLine: int64, fromColumn: int64, toLine: int64, toColumn: int64): void
        
        /** Returns the last unhidden line in the entire [TextEdit]. */
        getLastUnhiddenLine(): int64
        
        /** Returns the count to the next visible line from [param line] to `line + visible_amount`. Can also count backwards. For example if a [TextEdit] has 5 lines with lines 2 and 3 hidden, calling this with `line = 1, visible_amount = 1` would return 3. */
        getNextVisibleLineOffsetFrom(line: int64, visibleAmount: int64): int64
        
        /** Similar to [method get_next_visible_line_offset_from], but takes into account the line wrap indexes. In the returned vector, `x` is the line, `y` is the wrap index. */
        getNextVisibleLineIndexOffsetFrom(line: int64, wrapIndex: int64, visibleAmount: int64): Vector2I
        
        /** Called when the user presses the backspace key. Can be overridden with [method _backspace]. */
        backspace(caretIndex?: int64 /* = -1 */): void
        
        /** Cut's the current selection. Can be overridden with [method _cut]. */
        cut(caretIndex?: int64 /* = -1 */): void
        
        /** Copies the current text selection. Can be overridden with [method _copy]. */
        copy(caretIndex?: int64 /* = -1 */): void
        
        /** Paste at the current location. Can be overridden with [method _paste]. */
        paste(caretIndex?: int64 /* = -1 */): void
        
        /** Pastes the primary clipboard. */
        pastePrimaryClipboard(caretIndex?: int64 /* = -1 */): void
        
        /** Starts an action, will end the current action if [param action] is different.  
         *  An action will also end after a call to [method end_action], after [member ProjectSettings.gui/timers/text_edit_idle_detect_sec] is triggered or a new undoable step outside the [method start_action] and [method end_action] calls.  
         */
        startAction(action: TextEdit.EditAction): void
        
        /** Marks the end of steps in the current action started with [method start_action]. */
        endAction(): void
        
        /** Starts a multipart edit. All edits will be treated as one action until [method end_complex_operation] is called. */
        beginComplexOperation(): void
        
        /** Ends a multipart edit, started with [method begin_complex_operation]. If called outside a complex operation, the current operation is pushed onto the undo/redo stack. */
        endComplexOperation(): void
        
        /** Returns `true` if an "undo" action is available. */
        hasUndo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        hasRedo(): boolean
        
        /** Perform undo operation. */
        undo(): void
        
        /** Perform redo operation. */
        redo(): void
        
        /** Clears the undo history. */
        clearUndoHistory(): void
        
        /** Tag the current version as saved. */
        tagSavedVersion(): void
        
        /** Returns the current version of the [TextEdit]. The version is a count of recorded operations by the undo/redo history. */
        getVersion(): int64
        
        /** Returns the last tagged saved version from [method tag_saved_version]. */
        getSavedVersion(): int64
        
        /** Sets the search text. See [method set_search_flags]. */
        setSearchText(searchText: string): void
        
        /** Sets the search [param flags]. This is used with [method set_search_text] to highlight occurrences of the searched text. Search flags can be specified from the [enum SearchFlags] enum. */
        setSearchFlags(flags: int64): void
        
        /** Perform a search inside the text. Search flags can be specified in the [enum SearchFlags] enum.  
         *  In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.  
         *    
         */
        search(text: string, flags: int64, fromLine: int64, fromColumn: int64): Vector2I
        
        /** Provide custom tooltip text. The callback method must take the following args: `hovered_word: String`. */
        setTooltipRequestFunc(callback: Callable): void
        
        /** Returns the local mouse position adjusted for the text direction. */
        getLocalMousePos(): Vector2
        
        /** Returns the word at [param position]. */
        getWordAtPos(position: Vector2): string
        
        /** Returns the line and column at the given position. In the returned vector, `x` is the column and `y` is the line.  
         *  If [param clamp_line] is `false` and [param position] is below the last line, `Vector2i(-1, -1)` is returned.  
         *  If [param clamp_column] is `false` and [param position] is outside the column range of the line, `Vector2i(-1, -1)` is returned.  
         */
        getLineColumnAtPos(position: Vector2I, clampLine?: boolean /* = true */, clampColumn?: boolean /* = true */): Vector2I
        
        /** Returns the local position for the given [param line] and [param column]. If `x` or `y` of the returned vector equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position corresponds to the bottom side of the line. Use [method get_rect_at_line_column] to get the top side position.  
         */
        getPosAtLineColumn(line: int64, column: int64): Vector2I
        
        /** Returns the local position and size for the grapheme at the given [param line] and [param column]. If `x` or `y` position of the returned rect equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position of the returned rect corresponds to the top side of the line, unlike [method get_pos_at_line_column] which returns the bottom side.  
         */
        getRectAtLineColumn(line: int64, column: int64): Rect2I
        
        /** Returns the equivalent minimap line at [param position]. */
        getMinimapLineAtPos(position: Vector2I): int64
        
        /** Returns `true` if the user is dragging their mouse for scrolling, selecting, or text dragging. */
        isDraggingCursor(): boolean
        
        /** Returns `true` if the mouse is over a selection. If [param edges] is `true`, the edges are considered part of the selection. */
        isMouseOverSelection(edges: boolean, caretIndex?: int64 /* = -1 */): boolean
        
        /** Adds a new caret at the given location. Returns the index of the new caret, or `-1` if the location is invalid. */
        addCaret(line: int64, column: int64): int64
        
        /** Removes the given caret index.  
         *      
         *  **Note:** This can result in adjustment of all other caret indices.  
         */
        removeCaret(caret: int64): void
        
        /** Removes all additional carets. */
        removeSecondaryCarets(): void
        
        /** Returns the number of carets in this [TextEdit]. */
        getCaretCount(): int64
        
        /** Adds an additional caret above or below every caret. If [param below] is `true` the new caret will be added below and above otherwise. */
        addCaretAtCarets(below: boolean): void
        
        /** Returns the carets sorted by selection beginning from lowest line and column to highest (from top to bottom of text).  
         *  If [param include_ignored_carets] is `false`, carets from [method multicaret_edit_ignore_caret] will be ignored.  
         */
        getSortedCarets(includeIgnoredCarets?: boolean /* = false */): PackedInt32Array
        
        /** Collapse all carets in the given range to the [param from_line] and [param from_column] position.  
         *  [param inclusive] applies to both ends.  
         *  If [method is_in_mulitcaret_edit] is `true`, carets that are collapsed will be `true` for [method multicaret_edit_ignore_caret].  
         *  [method merge_overlapping_carets] will be called if any carets were collapsed.  
         */
        collapseCarets(fromLine: int64, fromColumn: int64, toLine: int64, toColumn: int64, inclusive?: boolean /* = false */): void
        
        /** Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.  
         *  If [method is_in_mulitcaret_edit] is `true`, the merge will be queued to happen at the end of the multicaret edit. See [method begin_multicaret_edit] and [method end_multicaret_edit].  
         *      
         *  **Note:** This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.  
         */
        mergeOverlappingCarets(): void
        
        /** Starts an edit for multiple carets. The edit must be ended with [method end_multicaret_edit]. Multicaret edits can be used to edit text at multiple carets and delay merging the carets until the end, so the caret indexes aren't affected immediately. [method begin_multicaret_edit] and [method end_multicaret_edit] can be nested, and the merge will happen at the last [method end_multicaret_edit].  
         *    
         */
        beginMulticaretEdit(): void
        
        /** Ends an edit for multiple carets, that was started with [method begin_multicaret_edit]. If this was the last [method end_multicaret_edit] and [method merge_overlapping_carets] was called, carets will be merged. */
        endMulticaretEdit(): void
        
        /** Returns `true` if a [method begin_multicaret_edit] has been called and [method end_multicaret_edit] has not yet been called. */
        isInMulitcaretEdit(): boolean
        
        /** Returns `true` if the given [param caret_index] should be ignored as part of a multicaret edit. See [method begin_multicaret_edit] and [method end_multicaret_edit]. Carets that should be ignored are ones that were part of removed text and will likely be merged at the end of the edit, or carets that were added during the edit.  
         *  It is recommended to `continue` within a loop iterating on multiple carets if a caret should be ignored.  
         */
        multicaretEditIgnoreCaret(caretIndex: int64): boolean
        
        /** Returns `true` if the caret is visible, `false` otherwise. A caret will be considered hidden if it is outside the scrollable area when scrolling is enabled.  
         *      
         *  **Note:** [method is_caret_visible] does not account for a caret being off-screen if it is still within the scrollable area. It will return `true` even if the caret is off-screen as long as it meets [TextEdit]'s own conditions for being visible. This includes uses of [member scroll_fit_content_width] and [member scroll_fit_content_height] that cause the [TextEdit] to expand beyond the viewport's bounds.  
         */
        isCaretVisible(caretIndex?: int64 /* = 0 */): boolean
        
        /** Returns the caret pixel draw position. */
        getCaretDrawPos(caretIndex?: int64 /* = 0 */): Vector2
        
        /** Moves the caret to the specified [param line] index. The caret column will be moved to the same visual position it was at the last time [method set_caret_column] was called, or clamped to the end of the line.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *  If [param can_be_hidden] is `true`, the specified [param line] can be hidden.  
         *  If [param wrap_index] is `-1`, the caret column will be clamped to the [param line]'s length. If [param wrap_index] is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's [param wrap_index] to the position from the last time [method set_caret_column] was called.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        setCaretLine(line: int64, adjustViewport?: boolean /* = true */, canBeHidden?: boolean /* = true */, wrapIndex?: int64 /* = 0 */, caretIndex?: int64 /* = 0 */): void
        
        /** Returns the line the editing caret is on. */
        getCaretLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Moves the caret to the specified [param column] index.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        setCaretColumn(column: int64, adjustViewport?: boolean /* = true */, caretIndex?: int64 /* = 0 */): void
        
        /** Returns the column the editing caret is at. */
        getCaretColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the correct column at the end of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the start of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_next_composite_character_column(get_caret_line(), get_caret_column())`  
         */
        getNextCompositeCharacterColumn(line: int64, column: int64): int64
        
        /** Returns the correct column at the start of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the end of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_previous_composite_character_column(get_caret_line(), get_caret_column())`  
         */
        getPreviousCompositeCharacterColumn(line: int64, column: int64): int64
        
        /** Returns the wrap index the editing caret is on. */
        getCaretWrapIndex(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns a [String] text with the word under the caret's location. */
        getWordUnderCaret(caretIndex?: int64 /* = -1 */): string
        
        /** Sets the current selection mode. */
        setSelectionMode(mode: TextEdit.SelectionMode): void
        
        /** Returns the current selection mode. */
        getSelectionMode(): TextEdit.SelectionMode
        
        /** Select all the text.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         */
        selectAll(): void
        
        /** Selects the word under the caret. */
        selectWordUnderCaret(caretIndex?: int64 /* = -1 */): void
        
        /** Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret. */
        addSelectionForNextOccurrence(): void
        
        /** Moves a selection and a caret for the next occurrence of the current selection. If there is no active selection, moves to the next occurrence of the word under caret. */
        skipSelectionForNextOccurrence(): void
        
        /** Selects text from [param origin_line] and [param origin_column] to [param caret_line] and [param caret_column] for the given [param caret_index]. This moves the selection origin and the caret. If the positions are the same, the selection will be deselected.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        select(originLine: int64, originColumn: int64, caretLine: int64, caretColumn: int64, caretIndex?: int64 /* = 0 */): void
        
        /** Returns `true` if the user has selected text. */
        hasSelection(caretIndex?: int64 /* = -1 */): boolean
        
        /** Returns the text inside the selection of a caret, or all the carets if [param caret_index] is its default value `-1`. */
        getSelectedText(caretIndex?: int64 /* = -1 */): string
        
        /** Returns the caret index of the selection at the given [param line] and [param column], or `-1` if there is none.  
         *  If [param include_edges] is `false`, the position must be inside the selection and not at either end. If [param only_selections] is `false`, carets without a selection will also be considered.  
         */
        getSelectionAtLineColumn(line: int64, column: int64, includeEdges?: boolean /* = true */, onlySelections?: boolean /* = true */): int64
        
        /** Returns an [Array] of line ranges where `x` is the first line and `y` is the last line. All lines within these ranges will have a caret on them or be part of a selection. Each line will only be part of one line range, even if it has multiple carets on it.  
         *  If a selection's end column ([method get_selection_to_column]) is at column `0`, that line will not be included. If a selection begins on the line after another selection ends and [param merge_adjacent] is `true`, or they begin and end on the same line, one line range will include both selections.  
         */
        getLineRangesFromCarets(onlySelections?: boolean /* = false */, mergeAdjacent?: boolean /* = true */): GArray<Vector2I>
        
        /** Returns the origin line of the selection. This is the opposite end from the caret. */
        getSelectionOriginLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the origin column of the selection. This is the opposite end from the caret. */
        getSelectionOriginColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Sets the selection origin line to the [param line] for the given [param caret_index]. If the selection origin is moved to the caret position, the selection will deselect.  
         *  If [param can_be_hidden] is `false`, The line will be set to the nearest unhidden line below or above.  
         *  If [param wrap_index] is `-1`, the selection origin column will be clamped to the [param line]'s length. If [param wrap_index] is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's [param wrap_index] to the position from the last time [method set_selection_origin_column] or [method select] was called.  
         */
        setSelectionOriginLine(line: int64, canBeHidden?: boolean /* = true */, wrapIndex?: int64 /* = -1 */, caretIndex?: int64 /* = 0 */): void
        
        /** Sets the selection origin column to the [param column] for the given [param caret_index]. If the selection origin is moved to the caret position, the selection will deselect. */
        setSelectionOriginColumn(column: int64, caretIndex?: int64 /* = 0 */): void
        
        /** Returns the selection begin line. Returns the caret line if there is no selection. */
        getSelectionFromLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the selection begin column. Returns the caret column if there is no selection. */
        getSelectionFromColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the selection end line. Returns the caret line if there is no selection. */
        getSelectionToLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the selection end column. Returns the caret column if there is no selection. */
        getSelectionToColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns `true` if the caret of the selection is after the selection origin. This can be used to determine the direction of the selection. */
        isCaretAfterSelectionOrigin(caretIndex?: int64 /* = 0 */): boolean
        
        /** Deselects the current selection. */
        deselect(caretIndex?: int64 /* = -1 */): void
        
        /** Deletes the selected text. */
        deleteSelection(caretIndex?: int64 /* = -1 */): void
        
        /** Returns if the given line is wrapped. */
        isLineWrapped(line: int64): boolean
        
        /** Returns the number of times the given line is wrapped. */
        getLineWrapCount(line: int64): int64
        
        /** Returns the wrap index of the given column on the given line. This ranges from `0` to [method get_line_wrap_count]. */
        getLineWrapIndexAtColumn(line: int64, column: int64): int64
        
        /** Returns an array of [String]s representing each wrapped index. */
        getLineWrappedText(line: int64): PackedStringArray
        
        /** Returns the [VScrollBar] of the [TextEdit]. */
        getVScrollBar(): null | VScrollBar
        
        /** Returns the [HScrollBar] used by [TextEdit]. */
        getHScrollBar(): null | HScrollBar
        
        /** Returns the scroll position for [param wrap_index] of [param line]. */
        getScrollPosForLine(line: int64, wrapIndex?: int64 /* = 0 */): float64
        
        /** Positions the [param wrap_index] of [param line] at the top of the viewport. */
        setLineAsFirstVisible(line: int64, wrapIndex?: int64 /* = 0 */): void
        
        /** Returns the first visible line. */
        getFirstVisibleLine(): int64
        
        /** Positions the [param wrap_index] of [param line] at the center of the viewport. */
        setLineAsCenterVisible(line: int64, wrapIndex?: int64 /* = 0 */): void
        
        /** Positions the [param wrap_index] of [param line] at the bottom of the viewport. */
        setLineAsLastVisible(line: int64, wrapIndex?: int64 /* = 0 */): void
        
        /** Returns the last visible line. Use [method get_last_full_visible_line_wrap_index] for the wrap index. */
        getLastFullVisibleLine(): int64
        
        /** Returns the last visible wrap index of the last visible line. */
        getLastFullVisibleLineWrapIndex(): int64
        
        /** Returns the number of lines that can visually fit, rounded down, based on this control's height. */
        getVisibleLineCount(): int64
        
        /** Returns the total number of lines between [param from_line] and [param to_line] (inclusive) in the text. This includes wrapped lines and excludes folded lines. If the range covers all lines it is equivalent to [method get_total_visible_line_count]. */
        getVisibleLineCountInRange(fromLine: int64, toLine: int64): int64
        
        /** Returns the total number of lines in the text. This includes wrapped lines and excludes folded lines. If [member wrap_mode] is set to [constant LINE_WRAPPING_NONE] and no lines are folded (see [method CodeEdit.is_line_folded]) then this is equivalent to [method get_line_count]. See [method get_visible_line_count_in_range] for a limited range of lines. */
        getTotalVisibleLineCount(): int64
        
        /** Adjust the viewport so the caret is visible. */
        adjustViewportToCaret(caretIndex?: int64 /* = 0 */): void
        
        /** Centers the viewport on the line the editing caret is at. This also resets the [member scroll_horizontal] value to `0`. */
        centerViewportToCaret(caretIndex?: int64 /* = 0 */): void
        
        /** Returns the number of lines that may be drawn on the minimap. */
        getMinimapVisibleLines(): int64
        
        /** Register a new gutter to this [TextEdit]. Use [param at] to have a specific gutter order. A value of `-1` appends the gutter to the right. */
        addGutter(at?: int64 /* = -1 */): void
        
        /** Removes the gutter at the given index. */
        removeGutter(gutter: int64): void
        
        /** Returns the number of gutters registered. */
        getGutterCount(): int64
        
        /** Sets the name of the gutter at the given index. */
        setGutterName(gutter: int64, name: string): void
        
        /** Returns the name of the gutter at the given index. */
        getGutterName(gutter: int64): string
        
        /** Sets the type of gutter at the given index. Gutters can contain icons, text, or custom visuals. */
        setGutterType(gutter: int64, type: TextEdit.GutterType): void
        
        /** Returns the type of the gutter at the given index. Gutters can contain icons, text, or custom visuals. */
        getGutterType(gutter: int64): TextEdit.GutterType
        
        /** Set the width of the gutter at the given index. */
        setGutterWidth(gutter: int64, width: int64): void
        
        /** Returns the width of the gutter at the given index. */
        getGutterWidth(gutter: int64): int64
        
        /** If `true`, the gutter at the given index is drawn. The gutter type ([method set_gutter_type]) determines how it is drawn. See [method is_gutter_drawn]. */
        setGutterDraw(gutter: int64, draw: boolean): void
        
        /** Returns `true` if the gutter at the given index is currently drawn. See [method set_gutter_draw]. */
        isGutterDrawn(gutter: int64): boolean
        
        /** If `true`, the mouse cursor will change to a pointing hand ([constant Control.CURSOR_POINTING_HAND]) when hovering over the gutter at the given index. See [method is_gutter_clickable] and [method set_line_gutter_clickable]. */
        setGutterClickable(gutter: int64, clickable: boolean): void
        
        /** Returns `true` if the gutter at the given index is clickable. See [method set_gutter_clickable]. */
        isGutterClickable(gutter: int64): boolean
        
        /** If `true`, the line data of the gutter at the given index can be overridden when using [method merge_gutters]. See [method is_gutter_overwritable]. */
        setGutterOverwritable(gutter: int64, overwritable: boolean): void
        
        /** Returns `true` if the gutter at the given index is overwritable. See [method set_gutter_overwritable]. */
        isGutterOverwritable(gutter: int64): boolean
        
        /** Merge the gutters from [param from_line] into [param to_line]. Only overwritable gutters will be copied. See [method set_gutter_overwritable]. */
        mergeGutters(fromLine: int64, toLine: int64): void
        
        /** Set a custom draw callback for the gutter at the given index. [param draw_callback] must take the following arguments: A line index [int], a gutter index [int], and an area [Rect2]. This callback only works when the gutter type is [constant GUTTER_TYPE_CUSTOM] (see [method set_gutter_type]). */
        setGutterCustomDraw(column: int64, drawCallback: Callable): void
        
        /** Returns the total width of all gutters and internal padding. */
        getTotalGutterWidth(): int64
        
        /** Sets the metadata for [param gutter] on [param line] to [param metadata]. */
        setLineGutterMetadata(line: int64, gutter: int64, metadata: any): void
        
        /** Returns the metadata currently in [param gutter] at [param line]. */
        getLineGutterMetadata(line: int64, gutter: int64): any
        
        /** Sets the text for [param gutter] on [param line] to [param text]. This only works when the gutter type is [constant GUTTER_TYPE_STRING] (see [method set_gutter_type]). */
        setLineGutterText(line: int64, gutter: int64, text: string): void
        
        /** Returns the text currently in [param gutter] at [param line]. This only works when the gutter type is [constant GUTTER_TYPE_STRING] (see [method set_gutter_type]). */
        getLineGutterText(line: int64, gutter: int64): string
        
        /** Sets the icon for [param gutter] on [param line] to [param icon]. This only works when the gutter type is [constant GUTTER_TYPE_ICON] (see [method set_gutter_type]). */
        setLineGutterIcon(line: int64, gutter: int64, icon: Texture2D): void
        
        /** Returns the icon currently in [param gutter] at [param line]. This only works when the gutter type is [constant GUTTER_TYPE_ICON] (see [method set_gutter_type]). */
        getLineGutterIcon(line: int64, gutter: int64): null | Texture2D
        
        /** Sets the color for [param gutter] on [param line] to [param color]. */
        setLineGutterItemColor(line: int64, gutter: int64, color: Color): void
        
        /** Returns the color currently in [param gutter] at [param line]. */
        getLineGutterItemColor(line: int64, gutter: int64): Color
        
        /** If [param clickable] is `true`, makes the [param gutter] on the given [param line] clickable. This is like [method set_gutter_clickable], but for a single line. If [method is_gutter_clickable] is `true`, this will not have any effect. See [method is_line_gutter_clickable] and [signal gutter_clicked]. */
        setLineGutterClickable(line: int64, gutter: int64, clickable: boolean): void
        
        /** Returns `true` if the gutter at the given index on the given line is clickable. See [method set_line_gutter_clickable]. */
        isLineGutterClickable(line: int64, gutter: int64): boolean
        
        /** Sets the custom background color of the given line. If transparent, this color is applied on top of the default background color (See [theme_item background_color]). If set to `Color(0, 0, 0, 0)`, no additional color is applied. */
        setLineBackgroundColor(line: int64, color: Color): void
        
        /** Returns the custom background color of the given line. If no color is set, returns `Color(0, 0, 0, 0)`. */
        getLineBackgroundColor(line: int64): Color
        
        /** Returns the [PopupMenu] of this [TextEdit]. By default, this menu is displayed when right-clicking on the [TextEdit].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getMenu(): null | PopupMenu
        
        /** Returns `true` if the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). See [method get_menu]. */
        isMenuVisible(): boolean
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menuOption(option: int64): void
        
        /** This method does nothing. */
        adjustCaretsAfterEdit(caret: int64, fromLine: int64, fromCol: int64, toLine: int64, toCol: int64): void
        
        /** Returns a list of caret indexes in their edit order, this done from bottom to top. Edit order refers to the way actions such as [method insert_text_at_caret] are applied. */
        getCaretIndexEditOrder(): PackedInt32Array
        
        /** Returns the original start line of the selection. */
        getSelectionLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the original start column of the selection. */
        getSelectionColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** String value of the [TextEdit]. */
        get text(): string
        set text(value: string)
        
        /** Text shown when the [TextEdit] is empty. It is **not** the [TextEdit]'s default value (see [member text]). */
        get placeholderText(): string
        set placeholderText(value: string)
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, a right-click displays the context menu. */
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        
        /** If `true`, "Emoji and Symbols" menu is enabled. */
        get emojiMenuEnabled(): boolean
        set emojiMenuEnabled(value: boolean)
        
        /** If `true` and [member caret_mid_grapheme] is `false`, backspace deletes an entire composite character such as ❤️‍🩹, instead of deleting part of the composite character. */
        get backspaceDeletesCompositeCharacterEnabled(): boolean
        set backspaceDeletesCompositeCharacterEnabled(value: boolean)
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        
        /** If `true`, text can be selected.  
         *  If `false`, text can not be selected by the user or by the [method select] or [method select_all] methods.  
         */
        get selectingEnabled(): boolean
        set selectingEnabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. Text can still be dropped from other sources. */
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is enabled on platforms that support it. */
        get virtualKeyboardEnabled(): boolean
        set virtualKeyboardEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is shown on focus events on platforms that support it. */
        get virtualKeyboardShowOnFocus(): boolean
        set virtualKeyboardShowOnFocus(value: boolean)
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        get middleMousePasteEnabled(): boolean
        set middleMousePasteEnabled(value: boolean)
        
        /** If `true`, copying or cutting without a selection is performed on all lines with a caret. Otherwise, copy and cut require a selection. */
        get emptySelectionClipboardEnabled(): boolean
        set emptySelectionClipboardEnabled(value: boolean)
        
        /** Sets the line wrapping mode to use. */
        get wrapMode(): int64
        set wrapMode(value: int64)
        
        /** If [member wrap_mode] is set to [constant LINE_WRAPPING_BOUNDARY], sets text wrapping mode. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** If `true`, all wrapped lines are indented to the same amount as the unwrapped line. */
        get indentWrappedLines(): boolean
        set indentWrappedLines(value: boolean)
        
        /** If `true`, [member ProjectSettings.input/ui_text_indent] input `Tab` character, otherwise it moves keyboard focus to the next [Control] in the scene. */
        get tabInputMode(): boolean
        set tabInputMode(value: boolean)
        
        /** Scroll smoothly over the text rather than jumping to the next location. */
        get scrollSmooth(): boolean
        set scrollSmooth(value: boolean)
        
        /** Sets the scroll speed with the minimap or when [member scroll_smooth] is enabled. */
        get scrollVScrollSpeed(): float64
        set scrollVScrollSpeed(value: float64)
        
        /** Allow scrolling past the last line into "virtual" space. */
        get scrollPastEndOfFile(): boolean
        set scrollPastEndOfFile(value: boolean)
        
        /** If there is a vertical scrollbar, this determines the current vertical scroll value in line numbers, starting at 0 for the top line. */
        get scrollVertical(): float64
        set scrollVertical(value: float64)
        
        /** If there is a horizontal scrollbar, this determines the current horizontal scroll value in pixels. */
        get scrollHorizontal(): int64
        set scrollHorizontal(value: int64)
        
        /** If `true`, [TextEdit] will disable vertical scroll and fit minimum height to the number of visible lines. When both this property and [member scroll_fit_content_width] are `true`, no scrollbars will be displayed. */
        get scrollFitContentHeight(): boolean
        set scrollFitContentHeight(value: boolean)
        
        /** If `true`, [TextEdit] will disable horizontal scroll and fit minimum width to the widest line in the text. When both this property and [member scroll_fit_content_height] are `true`, no scrollbars will be displayed. */
        get scrollFitContentWidth(): boolean
        set scrollFitContentWidth(value: boolean)
        
        /** If `true`, a minimap is shown, providing an outline of your source code. The minimap uses a fixed-width text size. */
        get minimapDraw(): boolean
        set minimapDraw(value: boolean)
        
        /** The width, in pixels, of the minimap. */
        get minimapWidth(): int64
        set minimapWidth(value: int64)
        
        /** Set the type of caret to draw. */
        get caretType(): int64
        set caretType(value: int64)
        
        /** If `true`, makes the caret blink. */
        get caretBlink(): boolean
        set caretBlink(value: boolean)
        
        /** The interval at which the caret blinks (in seconds). */
        get caretBlinkInterval(): float64
        set caretBlinkInterval(value: float64)
        
        /** If `true`, caret will be visible when [member editable] is disabled. */
        get caretDrawWhenEditableDisabled(): boolean
        set caretDrawWhenEditableDisabled(value: boolean)
        
        /** If `true`, a right-click moves the caret at the mouse position before displaying the context menu.  
         *  If `false`, the context menu ignores mouse location.  
         */
        get caretMoveOnRightClick(): boolean
        set caretMoveOnRightClick(value: boolean)
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        get caretMidGrapheme(): boolean
        set caretMidGrapheme(value: boolean)
        
        /** If `true`, multiple carets are allowed. Left-clicking with [kbd]Alt[/kbd] adds a new caret. See [method add_caret] and [method get_caret_count]. */
        get caretMultiple(): boolean
        set caretMultiple(value: boolean)
        
        /** If `false`, using [kbd]Ctrl + Left[/kbd] or [kbd]Ctrl + Right[/kbd] ([kbd]Cmd + Left[/kbd] or [kbd]Cmd + Right[/kbd] on macOS) bindings will stop moving caret only if a space or punctuation is detected. If `true`, it will also stop the caret if a character is part of `!"#$%&'()*+,-./:;<=>?@[\]^`{|}~`, the Unicode General Punctuation table, or the Unicode CJK Punctuation table. Useful for subword moving. This behavior also will be applied to the behavior of text selection. */
        get useDefaultWordSeparators(): boolean
        set useDefaultWordSeparators(value: boolean)
        
        /** If `false`, using [kbd]Ctrl + Left[/kbd] or [kbd]Ctrl + Right[/kbd] ([kbd]Cmd + Left[/kbd] or [kbd]Cmd + Right[/kbd] on macOS) bindings will use the behavior of [member use_default_word_separators]. If `true`, it will also stop the caret if a character within [member custom_word_separators] is detected. Useful for subword moving. This behavior also will be applied to the behavior of text selection. */
        get useCustomWordSeparators(): boolean
        set useCustomWordSeparators(value: boolean)
        
        /** The characters to consider as word delimiters if [member use_custom_word_separators] is `true`. The characters should be defined without separation, for example `#_!`. */
        get customWordSeparators(): string
        set customWordSeparators(value: string)
        
        /** The syntax highlighter to use.  
         *      
         *  **Note:** A [SyntaxHighlighter] instance should not be used across multiple [TextEdit] nodes.  
         */
        get syntaxHighlighter(): null | SyntaxHighlighter
        set syntaxHighlighter(value: null | SyntaxHighlighter)
        
        /** If `true`, all occurrences of the selected text will be highlighted. */
        get highlightAllOccurrences(): boolean
        set highlightAllOccurrences(value: boolean)
        
        /** If `true`, the line containing the cursor is highlighted. */
        get highlightCurrentLine(): boolean
        set highlightCurrentLine(value: boolean)
        
        /** If `true`, control characters are displayed. */
        get drawControlChars(): boolean
        set drawControlChars(value: boolean)
        
        /** If `true`, the "tab" character will have a visible representation. */
        get drawTabs(): boolean
        set drawTabs(value: boolean)
        
        /** If `true`, the "space" character will have a visible representation. */
        get drawSpaces(): boolean
        set drawSpaces(value: boolean)
        
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
        
        /** Emitted when [method clear] is called or [member text] is set. */
        readonly textSet: Signal<() => void>
        
        /** Emitted when the text changes. */
        readonly textChanged: Signal<() => void>
        
        /** Emitted immediately when the text changes.  
         *  When text is added [param from_line] will be less than [param to_line]. On a remove [param to_line] will be less than [param from_line].  
         */
        readonly linesEditedFrom: Signal<(fromLine: int64, toLine: int64) => void>
        
        /** Emitted when any caret changes position. */
        readonly caretChanged: Signal<() => void>
        
        /** Emitted when a gutter is clicked. */
        readonly gutterClicked: Signal<(line: int64, gutter: int64) => void>
        
        /** Emitted when a gutter is added. */
        readonly gutterAdded: Signal<() => void>
        
        /** Emitted when a gutter is removed. */
        readonly gutterRemoved: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextEdit;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextEdit;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextLine extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextLine extends __NameMapRefCounted {
        get_inferred_direction: "getInferredDirection";
        set_bidi_override: "setBidiOverride";
        add_string: "addString";
        add_object: "addObject";
        resize_object: "resizeObject";
        tab_align: "tabAlign";
        get_objects: "getObjects";
        get_object_rect: "getObjectRect";
        get_size: "getSize";
        get_rid: "getRid";
        get_line_ascent: "getLineAscent";
        get_line_descent: "getLineDescent";
        get_line_width: "getLineWidth";
        get_line_underline_position: "getLineUnderlinePosition";
        get_line_underline_thickness: "getLineUnderlineThickness";
        draw_outline: "drawOutline";
        hit_test: "hitTest";
        preserve_invalid: "preserveInvalid";
        preserve_control: "preserveControl";
        text_overrun_behavior: "textOverrunBehavior";
        ellipsis_char: "ellipsisChar";
    }
    /** Holds a line of text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textline.html  
     */
    class TextLine extends RefCounted {
        constructor(identifier?: any)
        /** Clears text line (removes text and inline objects). */
        clear(): void
        
        /** Returns the text writing direction inferred by the BiDi algorithm. */
        getInferredDirection(): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        setBidiOverride(override: GArray): void
        
        /** Adds text span and font to draw it. */
        addString(text: string, font: Font, fontSize: int64, language?: string /* = '' */, meta?: any /* = {} */): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        addObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, length?: int64 /* = 1 */, baseline?: float64 /* = 0 */): boolean
        
        /** Sets new size and alignment of embedded object. */
        resizeObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, baseline?: float64 /* = 0 */): boolean
        
        /** Aligns text to the given tab-stops. */
        tabAlign(tabStops: PackedFloat32Array | float32[]): void
        
        /** Returns array of inline objects. */
        getObjects(): GArray
        
        /** Returns bounding rectangle of the inline object. */
        getObjectRect(key: any): Rect2
        
        /** Returns size of the bounding box of the text. */
        getSize(): Vector2
        
        /** Returns TextServer buffer RID. */
        getRid(): Rid
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        getLineAscent(): float64
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        getLineDescent(): float64
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        getLineWidth(): float64
        
        /** Returns pixel offset of the underline below the baseline. */
        getLineUnderlinePosition(): float64
        
        /** Returns thickness of the underline. */
        getLineUnderlineThickness(): float64
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        draw(canvas: Rid, pos: Vector2, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawOutline(canvas: Rid, pos: Vector2, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        hitTest(coords: float64): int64
        
        /** Text writing direction. */
        get direction(): int64
        set direction(value: int64)
        
        /** Text orientation. */
        get orientation(): int64
        set orientation(value: int64)
        
        /** If set to `true` text will display invalid characters. */
        get preserveInvalid(): boolean
        set preserveInvalid(value: boolean)
        
        /** If set to `true` text will display control characters. */
        get preserveControl(): boolean
        set preserveControl(value: boolean)
        
        /** Text line width. */
        get width(): float64
        set width(value: float64)
        
        /** Sets text alignment within the line as if the line was horizontal. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Line alignment rules. For more info see [TextServer]. */
        get flags(): int64
        set flags(value: int64)
        
        /** The clipping behavior when the text exceeds the text line's set width. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** Ellipsis character used for text clipping. */
        get ellipsisChar(): string
        set ellipsisChar(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextLine;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextLine;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextMesh extends __NameMapPrimitiveMesh {
        font_size: "fontSize";
        horizontal_alignment: "horizontalAlignment";
        vertical_alignment: "verticalAlignment";
        line_spacing: "lineSpacing";
        autowrap_mode: "autowrapMode";
        justification_flags: "justificationFlags";
        pixel_size: "pixelSize";
        curve_step: "curveStep";
        text_direction: "textDirection";
        structured_text_bidi_override: "structuredTextBidiOverride";
        structured_text_bidi_override_options: "structuredTextBidiOverrideOptions";
    }
    /** Generate a [PrimitiveMesh] from the text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textmesh.html  
     */
    class TextMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The text to generate mesh from.  
         *      
         *  **Note:** Due to being a [Resource], it doesn't follow the rules of [member Node.auto_translate_mode]. If disabling translation is desired, it should be done manually with [method Object.set_message_translation].  
         */
        get text(): string
        set text(value: string)
        
        /** Font configuration used to display text. */
        get font(): null | Font
        set font(value: null | Font)
        
        /** Font size of the [TextMesh]'s text. */
        get fontSize(): int64
        set fontSize(value: int64)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. */
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
        
        /** Line fill alignment rules. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** The size of one pixel's width on the text to scale it in 3D. */
        get pixelSize(): float64
        set pixelSize(value: float64)
        
        /** Step (in pixels) used to approximate Bézier curves. */
        get curveStep(): float64
        set curveStep(value: float64)
        
        /** Depths of the mesh, if set to `0.0` only front surface, is generated, and UV layout is changed to use full texture for the front face only. */
        get depth(): float64
        set depth(value: float64)
        
        /** Text width (in pixels), used for fill alignment. */
        get width(): float64
        set width(value: float64)
        
        /** The text drawing offset (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextParagraph extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextParagraph extends __NameMapRefCounted {
        get_inferred_direction: "getInferredDirection";
        set_bidi_override: "setBidiOverride";
        set_dropcap: "setDropcap";
        clear_dropcap: "clearDropcap";
        add_string: "addString";
        add_object: "addObject";
        resize_object: "resizeObject";
        tab_align: "tabAlign";
        get_non_wrapped_size: "getNonWrappedSize";
        get_size: "getSize";
        get_rid: "getRid";
        get_line_rid: "getLineRid";
        get_dropcap_rid: "getDropcapRid";
        get_range: "getRange";
        get_line_count: "getLineCount";
        get_line_objects: "getLineObjects";
        get_line_object_rect: "getLineObjectRect";
        get_line_size: "getLineSize";
        get_line_range: "getLineRange";
        get_line_ascent: "getLineAscent";
        get_line_descent: "getLineDescent";
        get_line_width: "getLineWidth";
        get_line_underline_position: "getLineUnderlinePosition";
        get_line_underline_thickness: "getLineUnderlineThickness";
        get_dropcap_size: "getDropcapSize";
        get_dropcap_lines: "getDropcapLines";
        draw_outline: "drawOutline";
        draw_line: "drawLine";
        draw_line_outline: "drawLineOutline";
        draw_dropcap: "drawDropcap";
        draw_dropcap_outline: "drawDropcapOutline";
        hit_test: "hitTest";
        custom_punctuation: "customPunctuation";
        preserve_invalid: "preserveInvalid";
        preserve_control: "preserveControl";
        break_flags: "breakFlags";
        justification_flags: "justificationFlags";
        text_overrun_behavior: "textOverrunBehavior";
        ellipsis_char: "ellipsisChar";
        max_lines_visible: "maxLinesVisible";
        line_spacing: "lineSpacing";
    }
    /** Holds a paragraph of text.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textparagraph.html  
     */
    class TextParagraph extends RefCounted {
        constructor(identifier?: any)
        /** Clears text paragraph (removes text and inline objects). */
        clear(): void
        
        /** Returns the text writing direction inferred by the BiDi algorithm. */
        getInferredDirection(): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        setBidiOverride(override: GArray): void
        
        /** Sets drop cap, overrides previously set drop cap. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        setDropcap(text: string, font: Font, fontSize: int64, dropcapMargins?: Rect2 /* = new Rect2(0, 0, 0, 0) */, language?: string /* = '' */): boolean
        
        /** Removes dropcap. */
        clearDropcap(): void
        
        /** Adds text span and font to draw it. */
        addString(text: string, font: Font, fontSize: int64, language?: string /* = '' */, meta?: any /* = {} */): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        addObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, length?: int64 /* = 1 */, baseline?: float64 /* = 0 */): boolean
        
        /** Sets new size and alignment of embedded object. */
        resizeObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, baseline?: float64 /* = 0 */): boolean
        
        /** Aligns paragraph to the given tab-stops. */
        tabAlign(tabStops: PackedFloat32Array | float32[]): void
        
        /** Returns the size of the bounding box of the paragraph, without line breaks. */
        getNonWrappedSize(): Vector2
        
        /** Returns the size of the bounding box of the paragraph. */
        getSize(): Vector2
        
        /** Returns TextServer full string buffer RID. */
        getRid(): Rid
        
        /** Returns TextServer line buffer RID. */
        getLineRid(line: int64): Rid
        
        /** Returns drop cap text buffer RID. */
        getDropcapRid(): Rid
        
        /** Returns the character range of the paragraph. */
        getRange(): Vector2I
        
        /** Returns number of lines in the paragraph. */
        getLineCount(): int64
        
        /** Returns array of inline objects in the line. */
        getLineObjects(line: int64): GArray
        
        /** Returns bounding rectangle of the inline object. */
        getLineObjectRect(line: int64, key: any): Rect2
        
        /** Returns size of the bounding box of the line of text. Returned size is rounded up. */
        getLineSize(line: int64): Vector2
        
        /** Returns character range of the line. */
        getLineRange(line: int64): Vector2I
        
        /** Returns the text line ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        getLineAscent(line: int64): float64
        
        /** Returns the text line descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        getLineDescent(line: int64): float64
        
        /** Returns width (for horizontal layout) or height (for vertical) of the line of text. */
        getLineWidth(line: int64): float64
        
        /** Returns pixel offset of the underline below the baseline. */
        getLineUnderlinePosition(line: int64): float64
        
        /** Returns thickness of the underline. */
        getLineUnderlineThickness(line: int64): float64
        
        /** Returns drop cap bounding box size. */
        getDropcapSize(): Vector2
        
        /** Returns number of lines used by dropcap. */
        getDropcapLines(): int64
        
        /** Draw all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        draw(canvas: Rid, pos: Vector2, color?: Color /* = new Color(1, 1, 1, 1) */, dcColor?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw outlines of all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawOutline(canvas: Rid, pos: Vector2, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, dcColor?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawLine(canvas: Rid, pos: Vector2, line: int64, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw outline of the single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawLineOutline(canvas: Rid, pos: Vector2, line: int64, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawDropcap(canvas: Rid, pos: Vector2, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw drop cap outline into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawDropcapOutline(canvas: Rid, pos: Vector2, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns caret character offset at the specified coordinates. This function always returns a valid position. */
        hitTest(coords: Vector2): int64
        
        /** Text writing direction. */
        get direction(): int64
        set direction(value: int64)
        
        /** Custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        get customPunctuation(): string
        set customPunctuation(value: string)
        
        /** Text orientation. */
        get orientation(): int64
        set orientation(value: int64)
        
        /** If set to `true` text will display invalid characters. */
        get preserveInvalid(): boolean
        set preserveInvalid(value: boolean)
        
        /** If set to `true` text will display control characters. */
        get preserveControl(): boolean
        set preserveControl(value: boolean)
        
        /** Paragraph horizontal alignment. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Line breaking rules. For more info see [TextServer]. */
        get breakFlags(): int64
        set breakFlags(value: int64)
        
        /** Line fill alignment rules. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** The clipping behavior when the text exceeds the paragraph's set width. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** Ellipsis character used for text clipping. */
        get ellipsisChar(): string
        set ellipsisChar(value: string)
        
        /** Paragraph width. */
        get width(): float64
        set width(value: float64)
        
        /** Limits the lines of text shown. */
        get maxLinesVisible(): int64
        set maxLinesVisible(value: int64)
        
        /** Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative. */
        get lineSpacing(): float64
        set lineSpacing(value: float64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextParagraph;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextParagraph;
    }
    namespace TextServer {
        enum FontAntialiasing {
            FontAntialiasingNone = 0,
            FontAntialiasingGray = 1,
            FontAntialiasingLcd = 2,
        }
        enum FontLcdSubpixelLayout {
            FontLcdSubpixelLayoutNone = 0,
            FontLcdSubpixelLayoutHrgb = 1,
            FontLcdSubpixelLayoutHbgr = 2,
            FontLcdSubpixelLayoutVrgb = 3,
            FontLcdSubpixelLayoutVbgr = 4,
            FontLcdSubpixelLayoutMax = 5,
        }
        enum Direction {
            DirectionAuto = 0,
            DirectionLtr = 1,
            DirectionRtl = 2,
            DirectionInherited = 3,
        }
        enum Orientation {
            OrientationHorizontal = 0,
            OrientationVertical = 1,
        }
        enum JustificationFlag {
            JustificationNone = 0,
            JustificationKashida = 1,
            JustificationWordBound = 2,
            JustificationTrimEdgeSpaces = 4,
            JustificationAfterLastTab = 8,
            JustificationConstrainEllipsis = 16,
            JustificationSkipLastLine = 32,
            JustificationSkipLastLineWithVisibleChars = 64,
            JustificationDoNotSkipSingleLine = 128,
        }
        enum AutowrapMode {
            AutowrapOff = 0,
            AutowrapArbitrary = 1,
            AutowrapWord = 2,
            AutowrapWordSmart = 3,
        }
        enum LineBreakFlag {
            BreakNone = 0,
            BreakMandatory = 1,
            BreakWordBound = 2,
            BreakGraphemeBound = 4,
            BreakAdaptive = 8,
            BreakTrimEdgeSpaces = 16,
            BreakTrimIndent = 32,
            BreakTrimStartEdgeSpaces = 64,
            BreakTrimEndEdgeSpaces = 128,
        }
        enum VisibleCharactersBehavior {
            VcCharsBeforeShaping = 0,
            VcCharsAfterShaping = 1,
            VcGlyphsAuto = 2,
            VcGlyphsLtr = 3,
            VcGlyphsRtl = 4,
        }
        enum OverrunBehavior {
            OverrunNoTrimming = 0,
            OverrunTrimChar = 1,
            OverrunTrimWord = 2,
            OverrunTrimEllipsis = 3,
            OverrunTrimWordEllipsis = 4,
            OverrunTrimEllipsisForce = 5,
            OverrunTrimWordEllipsisForce = 6,
        }
        enum TextOverrunFlag {
            OverrunNoTrim = 0,
            OverrunTrim = 1,
            OverrunTrimWordOnly = 2,
            OverrunAddEllipsis = 4,
            OverrunEnforceEllipsis = 8,
            OverrunJustificationAware = 16,
        }
        enum GraphemeFlag {
            GraphemeIsValid = 1,
            GraphemeIsRtl = 2,
            GraphemeIsVirtual = 4,
            GraphemeIsSpace = 8,
            GraphemeIsBreakHard = 16,
            GraphemeIsBreakSoft = 32,
            GraphemeIsTab = 64,
            GraphemeIsElongation = 128,
            GraphemeIsPunctuation = 256,
            GraphemeIsUnderscore = 512,
            GraphemeIsConnected = 1024,
            GraphemeIsSafeToInsertTatweel = 2048,
            GraphemeIsEmbeddedObject = 4096,
            GraphemeIsSoftHyphen = 8192,
        }
        enum Hinting {
            HintingNone = 0,
            HintingLight = 1,
            HintingNormal = 2,
        }
        enum SubpixelPositioning {
            SubpixelPositioningDisabled = 0,
            SubpixelPositioningAuto = 1,
            SubpixelPositioningOneHalf = 2,
            SubpixelPositioningOneQuarter = 3,
            SubpixelPositioningOneHalfMaxSize = 20,
            SubpixelPositioningOneQuarterMaxSize = 16,
        }
        enum Feature {
            FeatureSimpleLayout = 1,
            FeatureBidiLayout = 2,
            FeatureVerticalLayout = 4,
            FeatureShaping = 8,
            FeatureKashidaJustification = 16,
            FeatureBreakIterators = 32,
            FeatureFontBitmap = 64,
            FeatureFontDynamic = 128,
            FeatureFontMsdf = 256,
            FeatureFontSystem = 512,
            FeatureFontVariable = 1024,
            FeatureContextSensitiveCaseConversion = 2048,
            FeatureUseSupportData = 4096,
            FeatureUnicodeIdentifiers = 8192,
            FeatureUnicodeSecurity = 16384,
        }
        enum ContourPointTag {
            ContourCurveTagOn = 1,
            ContourCurveTagOffConic = 0,
            ContourCurveTagOffCubic = 2,
        }
        enum SpacingType {
            SpacingGlyph = 0,
            SpacingSpace = 1,
            SpacingTop = 2,
            SpacingBottom = 3,
            SpacingMax = 4,
        }
        enum FontStyle {
            FontBold = 1,
            FontItalic = 2,
            FontFixedWidth = 4,
        }
        enum StructuredTextParser {
            StructuredTextDefault = 0,
            StructuredTextUri = 1,
            StructuredTextFile = 2,
            StructuredTextEmail = 3,
            StructuredTextList = 4,
            StructuredTextGdscript = 5,
            StructuredTextCustom = 6,
        }
        enum FixedSizeScaleMode {
            FixedSizeScaleDisable = 0,
            FixedSizeScaleIntegerOnly = 1,
            FixedSizeScaleEnabled = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextServer extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextServer extends __NameMapRefCounted {
        has_feature: "hasFeature";
        get_name: "getName";
        get_features: "getFeatures";
        load_support_data: "loadSupportData";
        get_support_data_filename: "getSupportDataFileName";
        get_support_data_info: "getSupportDataInfo";
        save_support_data: "saveSupportData";
        get_support_data: "getSupportData";
        is_locale_right_to_left: "isLocaleRightToLeft";
        name_to_tag: "nameToTag";
        tag_to_name: "tagToName";
        free_rid: "freeRid";
        create_font: "createFont";
        create_font_linked_variation: "createFontLinkedVariation";
        font_set_data: "fontSetData";
        font_set_face_index: "fontSetFaceIndex";
        font_get_face_index: "fontGetFaceIndex";
        font_get_face_count: "fontGetFaceCount";
        font_set_style: "fontSetStyle";
        font_get_style: "fontGetStyle";
        font_set_name: "fontSetName";
        font_get_name: "fontGetName";
        font_get_ot_name_strings: "fontGetOtNameStrings";
        font_set_style_name: "fontSetStyleName";
        font_get_style_name: "fontGetStyleName";
        font_set_weight: "fontSetWeight";
        font_get_weight: "fontGetWeight";
        font_set_stretch: "fontSetStretch";
        font_get_stretch: "fontGetStretch";
        font_set_antialiasing: "fontSetAntialiasing";
        font_get_antialiasing: "fontGetAntialiasing";
        font_set_disable_embedded_bitmaps: "fontSetDisableEmbeddedBitmaps";
        font_get_disable_embedded_bitmaps: "fontGetDisableEmbeddedBitmaps";
        font_set_generate_mipmaps: "fontSetGenerateMipmaps";
        font_get_generate_mipmaps: "fontGetGenerateMipmaps";
        font_set_multichannel_signed_distance_field: "fontSetMultichannelSignedDistanceField";
        font_is_multichannel_signed_distance_field: "fontIsMultichannelSignedDistanceField";
        font_set_msdf_pixel_range: "fontSetMsdfPixelRange";
        font_get_msdf_pixel_range: "fontGetMsdfPixelRange";
        font_set_msdf_size: "fontSetMsdfSize";
        font_get_msdf_size: "fontGetMsdfSize";
        font_set_fixed_size: "fontSetFixedSize";
        font_get_fixed_size: "fontGetFixedSize";
        font_set_fixed_size_scale_mode: "fontSetFixedSizeScaleMode";
        font_get_fixed_size_scale_mode: "fontGetFixedSizeScaleMode";
        font_set_allow_system_fallback: "fontSetAllowSystemFallback";
        font_is_allow_system_fallback: "fontIsAllowSystemFallback";
        font_clear_system_fallback_cache: "fontClearSystemFallbackCache";
        font_set_force_autohinter: "fontSetForceAutohinter";
        font_is_force_autohinter: "fontIsForceAutohinter";
        font_set_modulate_color_glyphs: "fontSetModulateColorGlyphs";
        font_is_modulate_color_glyphs: "fontIsModulateColorGlyphs";
        font_set_hinting: "fontSetHinting";
        font_get_hinting: "fontGetHinting";
        font_set_subpixel_positioning: "fontSetSubpixelPositioning";
        font_get_subpixel_positioning: "fontGetSubpixelPositioning";
        font_set_keep_rounding_remainders: "fontSetKeepRoundingRemainders";
        font_get_keep_rounding_remainders: "fontGetKeepRoundingRemainders";
        font_set_embolden: "fontSetEmbolden";
        font_get_embolden: "fontGetEmbolden";
        font_set_spacing: "fontSetSpacing";
        font_get_spacing: "fontGetSpacing";
        font_set_baseline_offset: "fontSetBaselineOffset";
        font_get_baseline_offset: "fontGetBaselineOffset";
        font_set_transform: "fontSetTransform";
        font_get_transform: "fontGetTransform";
        font_set_variation_coordinates: "fontSetVariationCoordinates";
        font_get_variation_coordinates: "fontGetVariationCoordinates";
        font_set_oversampling: "fontSetOversampling";
        font_get_oversampling: "fontGetOversampling";
        font_get_size_cache_list: "fontGetSizeCacheList";
        font_clear_size_cache: "fontClearSizeCache";
        font_remove_size_cache: "fontRemoveSizeCache";
        font_get_size_cache_info: "fontGetSizeCacheInfo";
        font_set_ascent: "fontSetAscent";
        font_get_ascent: "fontGetAscent";
        font_set_descent: "fontSetDescent";
        font_get_descent: "fontGetDescent";
        font_set_underline_position: "fontSetUnderlinePosition";
        font_get_underline_position: "fontGetUnderlinePosition";
        font_set_underline_thickness: "fontSetUnderlineThickness";
        font_get_underline_thickness: "fontGetUnderlineThickness";
        font_set_scale: "fontSetScale";
        font_get_scale: "fontGetScale";
        font_get_texture_count: "fontGetTextureCount";
        font_clear_textures: "fontClearTextures";
        font_remove_texture: "fontRemoveTexture";
        font_set_texture_image: "fontSetTextureImage";
        font_get_texture_image: "fontGetTextureImage";
        font_set_texture_offsets: "fontSetTextureOffsets";
        font_get_texture_offsets: "fontGetTextureOffsets";
        font_get_glyph_list: "fontGetGlyphList";
        font_clear_glyphs: "fontClearGlyphs";
        font_remove_glyph: "fontRemoveGlyph";
        font_get_glyph_advance: "fontGetGlyphAdvance";
        font_set_glyph_advance: "fontSetGlyphAdvance";
        font_get_glyph_offset: "fontGetGlyphOffset";
        font_set_glyph_offset: "fontSetGlyphOffset";
        font_get_glyph_size: "fontGetGlyphSize";
        font_set_glyph_size: "fontSetGlyphSize";
        font_get_glyph_uv_rect: "fontGetGlyphUVRect";
        font_set_glyph_uv_rect: "fontSetGlyphUVRect";
        font_get_glyph_texture_idx: "fontGetGlyphTextureIdx";
        font_set_glyph_texture_idx: "fontSetGlyphTextureIdx";
        font_get_glyph_texture_rid: "fontGetGlyphTextureRid";
        font_get_glyph_texture_size: "fontGetGlyphTextureSize";
        font_get_glyph_contours: "fontGetGlyphContours";
        font_get_kerning_list: "fontGetKerningList";
        font_clear_kerning_map: "fontClearKerningMap";
        font_remove_kerning: "fontRemoveKerning";
        font_set_kerning: "fontSetKerning";
        font_get_kerning: "fontGetKerning";
        font_get_glyph_index: "fontGetGlyphIndex";
        font_get_char_from_glyph_index: "fontGetCharFromGlyphIndex";
        font_has_char: "fontHasChar";
        font_get_supported_chars: "fontGetSupportedChars";
        font_get_supported_glyphs: "fontGetSupportedGlyphs";
        font_render_range: "fontRenderRange";
        font_render_glyph: "fontRenderGlyph";
        font_draw_glyph: "fontDrawGlyph";
        font_draw_glyph_outline: "fontDrawGlyphOutline";
        font_is_language_supported: "fontIsLanguageSupported";
        font_set_language_support_override: "fontSetLanguageSupportOverride";
        font_get_language_support_override: "fontGetLanguageSupportOverride";
        font_remove_language_support_override: "fontRemoveLanguageSupportOverride";
        font_get_language_support_overrides: "fontGetLanguageSupportOverrides";
        font_is_script_supported: "fontIsScriptSupported";
        font_set_script_support_override: "fontSetScriptSupportOverride";
        font_get_script_support_override: "fontGetScriptSupportOverride";
        font_remove_script_support_override: "fontRemoveScriptSupportOverride";
        font_get_script_support_overrides: "fontGetScriptSupportOverrides";
        font_set_opentype_feature_overrides: "fontSetOpentypeFeatureOverrides";
        font_get_opentype_feature_overrides: "fontGetOpentypeFeatureOverrides";
        font_supported_feature_list: "fontSupportedFeatureList";
        font_supported_variation_list: "fontSupportedVariationList";
        font_get_global_oversampling: "fontGetGlobalOversampling";
        font_set_global_oversampling: "fontSetGlobalOversampling";
        get_hex_code_box_size: "getHexCodeBoxSize";
        draw_hex_code_box: "drawHexCodeBox";
        create_shaped_text: "createShapedText";
        shaped_text_clear: "shapedTextClear";
        shaped_text_set_direction: "shapedTextSetDirection";
        shaped_text_get_direction: "shapedTextGetDirection";
        shaped_text_get_inferred_direction: "shapedTextGetInferredDirection";
        shaped_text_set_bidi_override: "shapedTextSetBidiOverride";
        shaped_text_set_custom_punctuation: "shapedTextSetCustomPunctuation";
        shaped_text_get_custom_punctuation: "shapedTextGetCustomPunctuation";
        shaped_text_set_custom_ellipsis: "shapedTextSetCustomEllipsis";
        shaped_text_get_custom_ellipsis: "shapedTextGetCustomEllipsis";
        shaped_text_set_orientation: "shapedTextSetOrientation";
        shaped_text_get_orientation: "shapedTextGetOrientation";
        shaped_text_set_preserve_invalid: "shapedTextSetPreserveInvalid";
        shaped_text_get_preserve_invalid: "shapedTextGetPreserveInvalid";
        shaped_text_set_preserve_control: "shapedTextSetPreserveControl";
        shaped_text_get_preserve_control: "shapedTextGetPreserveControl";
        shaped_text_set_spacing: "shapedTextSetSpacing";
        shaped_text_get_spacing: "shapedTextGetSpacing";
        shaped_text_add_string: "shapedTextAddString";
        shaped_text_add_object: "shapedTextAddObject";
        shaped_text_resize_object: "shapedTextResizeObject";
        shaped_get_text: "shapedGetText";
        shaped_get_span_count: "shapedGetSpanCount";
        shaped_get_span_meta: "shapedGetSpanMeta";
        shaped_get_span_embedded_object: "shapedGetSpanEmbeddedObject";
        shaped_get_span_text: "shapedGetSpanText";
        shaped_get_span_object: "shapedGetSpanObject";
        shaped_set_span_update_font: "shapedSetSpanUpdateFont";
        shaped_get_run_count: "shapedGetRunCount";
        shaped_get_run_text: "shapedGetRunText";
        shaped_get_run_range: "shapedGetRunRange";
        shaped_get_run_font_rid: "shapedGetRunFontRid";
        shaped_get_run_font_size: "shapedGetRunFontSize";
        shaped_get_run_language: "shapedGetRunLanguage";
        shaped_get_run_direction: "shapedGetRunDirection";
        shaped_get_run_object: "shapedGetRunObject";
        shaped_text_substr: "shapedTextSubstr";
        shaped_text_get_parent: "shapedTextGetParent";
        shaped_text_fit_to_width: "shapedTextFitToWidth";
        shaped_text_tab_align: "shapedTextTabAlign";
        shaped_text_shape: "shapedTextShape";
        shaped_text_is_ready: "shapedTextIsReady";
        shaped_text_has_visible_chars: "shapedTextHasVisibleChars";
        shaped_text_get_glyphs: "shapedTextGetGlyphs";
        shaped_text_sort_logical: "shapedTextSortLogical";
        shaped_text_get_glyph_count: "shapedTextGetGlyphCount";
        shaped_text_get_range: "shapedTextGetRange";
        shaped_text_get_line_breaks_adv: "shapedTextGetLineBreaksAdv";
        shaped_text_get_line_breaks: "shapedTextGetLineBreaks";
        shaped_text_get_word_breaks: "shapedTextGetWordBreaks";
        shaped_text_get_trim_pos: "shapedTextGetTrimPos";
        shaped_text_get_ellipsis_pos: "shapedTextGetEllipsisPos";
        shaped_text_get_ellipsis_glyphs: "shapedTextGetEllipsisGlyphs";
        shaped_text_get_ellipsis_glyph_count: "shapedTextGetEllipsisGlyphCount";
        shaped_text_overrun_trim_to_width: "shapedTextOverrunTrimToWidth";
        shaped_text_get_objects: "shapedTextGetObjects";
        shaped_text_get_object_rect: "shapedTextGetObjectRect";
        shaped_text_get_object_range: "shapedTextGetObjectRange";
        shaped_text_get_object_glyph: "shapedTextGetObjectGlyph";
        shaped_text_get_size: "shapedTextGetSize";
        shaped_text_get_ascent: "shapedTextGetAscent";
        shaped_text_get_descent: "shapedTextGetDescent";
        shaped_text_get_width: "shapedTextGetWidth";
        shaped_text_get_underline_position: "shapedTextGetUnderlinePosition";
        shaped_text_get_underline_thickness: "shapedTextGetUnderlineThickness";
        shaped_text_get_carets: "shapedTextGetCarets";
        shaped_text_get_selection: "shapedTextGetSelection";
        shaped_text_hit_test_grapheme: "shapedTextHitTestGrapheme";
        shaped_text_hit_test_position: "shapedTextHitTestPosition";
        shaped_text_get_grapheme_bounds: "shapedTextGetGraphemeBounds";
        shaped_text_next_grapheme_pos: "shapedTextNextGraphemePos";
        shaped_text_prev_grapheme_pos: "shapedTextPrevGraphemePos";
        shaped_text_get_character_breaks: "shapedTextGetCharacterBreaks";
        shaped_text_next_character_pos: "shapedTextNextCharacterPos";
        shaped_text_prev_character_pos: "shapedTextPrevCharacterPos";
        shaped_text_closest_character_pos: "shapedTextClosestCharacterPos";
        shaped_text_draw: "shapedTextDraw";
        shaped_text_draw_outline: "shapedTextDrawOutline";
        shaped_text_get_dominant_direction_in_range: "shapedTextGetDominantDirectionInRange";
        format_number: "formatNumber";
        parse_number: "parseNumber";
        percent_sign: "percentSign";
        string_get_word_breaks: "stringGetWordBreaks";
        string_get_character_breaks: "stringGetCharacterBreaks";
        is_confusable: "isConfusable";
        spoof_check: "spoofCheck";
        strip_diacritics: "stripDiacritics";
        is_valid_identifier: "isValidIdentifier";
        is_valid_letter: "isValidLetter";
        string_to_upper: "stringToUpper";
        string_to_lower: "stringToLower";
        string_to_title: "stringToTitle";
        parse_structured_text: "parseStructuredText";
    }
    /** A server interface for font management and text rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textserver.html  
     */
    class TextServer extends RefCounted {
        constructor(identifier?: any)
        /** Returns `true` if the server supports a feature. */
        hasFeature(feature: TextServer.Feature): boolean
        
        /** Returns the name of the server interface. */
        getName(): string
        
        /** Returns text server features, see [enum Feature]. */
        getFeatures(): int64
        
        /** Loads optional TextServer database (e.g. ICU break iterators and dictionaries).  
         *      
         *  **Note:** This function should be called before any other TextServer functions used, otherwise it won't have any effect.  
         */
        loadSupportData(fileName: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename. */
        getSupportDataFileName(): string
        
        /** Returns TextServer database (e.g. ICU break iterators and dictionaries) description. */
        getSupportDataInfo(): string
        
        /** Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.  
         *      
         *  **Note:** This function is used by during project export, to include TextServer database.  
         */
        saveSupportData(fileName: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries). */
        getSupportData(): PackedByteArray
        
        /** Returns `true` if locale is right-to-left. */
        isLocaleRightToLeft(locale: string): boolean
        
        /** Converts readable feature, variation, script, or language name to OpenType tag. */
        nameToTag(name: string): int64
        
        /** Converts OpenType tag to readable feature, variation, script, or language name. */
        tagToName(tag: int64): string
        
        /** Returns `true` if [param rid] is valid resource owned by this text server. */
        has(rid: Rid): boolean
        
        /** Frees an object created by this [TextServer]. */
        freeRid(rid: Rid): void
        
        /** Creates a new, empty font cache entry resource. To free the resulting resource, use the [method free_rid] method. */
        createFont(): Rid
        
        /** Creates a new variation existing font which is reusing the same glyph cache and font data. To free the resulting resource, use the [method free_rid] method. */
        createFontLinkedVariation(fontRid: Rid): Rid
        
        /** Sets font source data, e.g contents of the dynamic font source file. */
        fontSetData(fontRid: Rid, data: PackedByteArray | byte[] | ArrayBuffer): void
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        fontSetFaceIndex(fontRid: Rid, faceIndex: int64): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        fontGetFaceIndex(fontRid: Rid): int64
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        fontGetFaceCount(fontRid: Rid): int64
        
        /** Sets the font style flags.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], [method font_set_embolden], or [method font_set_transform] instead.  
         */
        fontSetStyle(fontRid: Rid, style: TextServer.FontStyle): void
        
        /** Returns font style flags. */
        fontGetStyle(fontRid: Rid): TextServer.FontStyle
        
        /** Sets the font family name. */
        fontSetName(fontRid: Rid, name: string): void
        
        /** Returns font family name. */
        fontGetName(fontRid: Rid): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        fontGetOtNameStrings(fontRid: Rid): GDictionary
        
        /** Sets the font style name. */
        fontSetStyleName(fontRid: Rid, name: string): void
        
        /** Returns font style name. */
        fontGetStyleName(fontRid: Rid): string
        
        /** Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_embolden] instead.  
         */
        fontSetWeight(fontRid: Rid, weight: int64): void
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        fontGetWeight(fontRid: Rid): int64
        
        /** Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_transform] instead.  
         */
        fontSetStretch(fontRid: Rid, weight: int64): void
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        fontGetStretch(fontRid: Rid): int64
        
        /** Sets font anti-aliasing mode. */
        fontSetAntialiasing(fontRid: Rid, antialiasing: TextServer.FontAntialiasing): void
        
        /** Returns font anti-aliasing mode. */
        fontGetAntialiasing(fontRid: Rid): TextServer.FontAntialiasing
        
        /** If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property). */
        fontSetDisableEmbeddedBitmaps(fontRid: Rid, disableEmbeddedBitmaps: boolean): void
        
        /** Returns whether the font's embedded bitmap loading is disabled. */
        fontGetDisableEmbeddedBitmaps(fontRid: Rid): boolean
        
        /** If set to `true` font texture mipmap generation is enabled. */
        fontSetGenerateMipmaps(fontRid: Rid, generateMipmaps: boolean): void
        
        /** Returns `true` if font texture mipmap generation is enabled. */
        fontGetGenerateMipmaps(fontRid: Rid): boolean
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        fontSetMultichannelSignedDistanceField(fontRid: Rid, msdf: boolean): void
        
        /** Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        fontIsMultichannelSignedDistanceField(fontRid: Rid): boolean
        
        /** Sets the width of the range around the shape between the minimum and maximum representable signed distance. */
        fontSetMsdfPixelRange(fontRid: Rid, msdfPixelRange: int64): void
        
        /** Returns the width of the range around the shape between the minimum and maximum representable signed distance. */
        fontGetMsdfPixelRange(fontRid: Rid): int64
        
        /** Sets source font size used to generate MSDF textures. */
        fontSetMsdfSize(fontRid: Rid, msdfSize: int64): void
        
        /** Returns source font size used to generate MSDF textures. */
        fontGetMsdfSize(fontRid: Rid): int64
        
        /** Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes. */
        fontSetFixedSize(fontRid: Rid, fixedSize: int64): void
        
        /** Returns bitmap font fixed size. */
        fontGetFixedSize(fontRid: Rid): int64
        
        /** Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero. */
        fontSetFixedSizeScaleMode(fontRid: Rid, fixedSizeScaleMode: TextServer.FixedSizeScaleMode): void
        
        /** Returns bitmap font scaling mode. */
        fontGetFixedSizeScaleMode(fontRid: Rid): TextServer.FixedSizeScaleMode
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        fontSetAllowSystemFallback(fontRid: Rid, allowSystemFallback: boolean): void
        
        /** Returns `true` if system fonts can be automatically used as fallbacks. */
        fontIsAllowSystemFallback(fontRid: Rid): boolean
        
        /** Frees all automatically loaded system fonts. */
        fontClearSystemFallbackCache(): void
        
        /** If set to `true` auto-hinting is preferred over font built-in hinting. */
        fontSetForceAutohinter(fontRid: Rid, forceAutohinter: boolean): void
        
        /** Returns `true` if auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only. */
        fontIsForceAutohinter(fontRid: Rid): boolean
        
        /** If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
        fontSetModulateColorGlyphs(fontRid: Rid, forceAutohinter: boolean): void
        
        /** Returns `true`, if color modulation is applied when drawing colored glyphs. */
        fontIsModulateColorGlyphs(fontRid: Rid): boolean
        
        /** Sets font hinting mode. Used by dynamic fonts only. */
        fontSetHinting(fontRid: Rid, hinting: TextServer.Hinting): void
        
        /** Returns the font hinting mode. Used by dynamic fonts only. */
        fontGetHinting(fontRid: Rid): TextServer.Hinting
        
        /** Sets font subpixel glyph positioning mode. */
        fontSetSubpixelPositioning(fontRid: Rid, subpixelPositioning: TextServer.SubpixelPositioning): void
        
        /** Returns font subpixel glyph positioning mode. */
        fontGetSubpixelPositioning(fontRid: Rid): TextServer.SubpixelPositioning
        
        /** Sets glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        fontSetKeepRoundingRemainders(fontRid: Rid, keepRoundingRemainders: boolean): void
        
        /** Returns glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        fontGetKeepRoundingRemainders(fontRid: Rid): boolean
        
        /** Sets font embolden strength. If [param strength] is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        fontSetEmbolden(fontRid: Rid, strength: float64): void
        
        /** Returns font embolden strength. */
        fontGetEmbolden(fontRid: Rid): float64
        
        /** Sets the spacing for [param spacing] to [param value] in pixels (not relative to the font size). */
        fontSetSpacing(fontRid: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns the spacing for [param spacing] in pixels (not relative to the font size). */
        fontGetSpacing(fontRid: Rid, spacing: TextServer.SpacingType): int64
        
        /** Sets extra baseline offset (as a fraction of font height). */
        fontSetBaselineOffset(fontRid: Rid, baselineOffset: float64): void
        
        /** Returns extra baseline offset (as a fraction of font height). */
        fontGetBaselineOffset(fontRid: Rid): float64
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
         */
        fontSetTransform(fontRid: Rid, transform: Transform2D): void
        
        /** Returns 2D transform applied to the font outlines. */
        fontGetTransform(fontRid: Rid): Transform2D
        
        /** Sets variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        fontSetVariationCoordinates(fontRid: Rid, variationCoordinates: GDictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        fontGetVariationCoordinates(fontRid: Rid): GDictionary
        
        /** If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling` parameter of [code skip-lint]draw_*` methods. Used by dynamic fonts only. */
        fontSetOversampling(fontRid: Rid, oversampling: float64): void
        
        /** Returns oversampling factor override. If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling` parameter of [code skip-lint]draw_*` methods. Used by dynamic fonts only. */
        fontGetOversampling(fontRid: Rid): float64
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        fontGetSizeCacheList(fontRid: Rid): GArray<Vector2I>
        
        /** Removes all font sizes from the cache entry. */
        fontClearSizeCache(fontRid: Rid): void
        
        /** Removes specified font size from the cache entry. */
        fontRemoveSizeCache(fontRid: Rid, size: Vector2I): void
        
        /** Returns font cache information, each entry contains the following fields: `Vector2i size_px` - font size in pixels, `float viewport_oversampling` - viewport oversampling factor, `int glyphs` - number of rendered glyphs, `int textures` - number of used textures, `int textures_size` - size of texture data in bytes. */
        fontGetSizeCacheInfo(fontRid: Rid): GArray<GDictionary>
        
        /** Sets the font ascent (number of pixels above the baseline). */
        fontSetAscent(fontRid: Rid, size: int64, ascent: float64): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        fontGetAscent(fontRid: Rid, size: int64): float64
        
        /** Sets the font descent (number of pixels below the baseline). */
        fontSetDescent(fontRid: Rid, size: int64, descent: float64): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        fontGetDescent(fontRid: Rid, size: int64): float64
        
        /** Sets pixel offset of the underline below the baseline. */
        fontSetUnderlinePosition(fontRid: Rid, size: int64, underlinePosition: float64): void
        
        /** Returns pixel offset of the underline below the baseline. */
        fontGetUnderlinePosition(fontRid: Rid, size: int64): float64
        
        /** Sets thickness of the underline in pixels. */
        fontSetUnderlineThickness(fontRid: Rid, size: int64, underlineThickness: float64): void
        
        /** Returns thickness of the underline in pixels. */
        fontGetUnderlineThickness(fontRid: Rid, size: int64): float64
        
        /** Sets scaling factor of the color bitmap font. */
        fontSetScale(fontRid: Rid, size: int64, scale: float64): void
        
        /** Returns scaling factor of the color bitmap font. */
        fontGetScale(fontRid: Rid, size: int64): float64
        
        /** Returns number of textures used by font cache entry. */
        fontGetTextureCount(fontRid: Rid, size: Vector2I): int64
        
        /** Removes all textures from font cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method font_remove_glyph] to remove them manually.  
         */
        fontClearTextures(fontRid: Rid, size: Vector2I): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, remove them manually, using [method font_remove_glyph].  
         */
        fontRemoveTexture(fontRid: Rid, size: Vector2I, textureIndex: int64): void
        
        /** Sets font cache texture image data. */
        fontSetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64, image: Image): void
        
        /** Returns font cache texture image data. */
        fontGetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64): null | Image
        
        /** Sets array containing glyph packing data. */
        fontSetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        
        /** Returns array containing glyph packing data. */
        fontGetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        fontGetGlyphList(fontRid: Rid, size: Vector2I): PackedInt32Array
        
        /** Removes all rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        fontClearGlyphs(fontRid: Rid, size: Vector2I): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        fontRemoveGlyph(fontRid: Rid, size: Vector2I, glyph: int64): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        fontGetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64): Vector2
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        fontSetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64, advance: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        fontGetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Sets glyph offset from the baseline. */
        fontSetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64, offset: Vector2): void
        
        /** Returns size of the glyph. */
        fontGetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Sets size of the glyph. */
        fontSetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64, glSize: Vector2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        fontGetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64): Rect2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        fontSetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64, uVRect: Rect2): void
        
        /** Returns index of the cache texture containing the glyph. */
        fontGetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64): int64
        
        /** Sets index of the cache texture containing the glyph. */
        fontSetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64, textureIdx: int64): void
        
        /** Returns resource ID of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontGetGlyphTextureRid(fontRid: Rid, size: Vector2I, glyph: int64): Rid
        
        /** Returns size of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontGetGlyphTextureSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Returns outline contours of the glyph as a [Dictionary] with the following contents:  
         *  `points`         - [PackedVector3Array], containing outline points. `x` and `y` are point coordinates. `z` is the type of the point, using the [enum ContourPointTag] values.  
         *  `contours`       - [PackedInt32Array], containing indices the end points of each contour.  
         *  `orientation`    - [bool], contour orientation. If `true`, clockwise contours must be filled.  
         *  - Two successive [constant CONTOUR_CURVE_TAG_ON] points indicate a line segment.  
         *  - One [constant CONTOUR_CURVE_TAG_OFF_CONIC] point between two [constant CONTOUR_CURVE_TAG_ON] points indicates a single conic (quadratic) Bézier arc.  
         *  - Two [constant CONTOUR_CURVE_TAG_OFF_CUBIC] points between two [constant CONTOUR_CURVE_TAG_ON] points indicate a single cubic Bézier arc.  
         *  - Two successive [constant CONTOUR_CURVE_TAG_OFF_CONIC] points indicate two successive conic (quadratic) Bézier arcs with a virtual [constant CONTOUR_CURVE_TAG_ON] point at their middle.  
         *  - Each contour is closed. The last point of a contour uses the first point of a contour as its next point, and vice versa. The first point can be [constant CONTOUR_CURVE_TAG_OFF_CONIC] point.  
         */
        fontGetGlyphContours(font: Rid, size: int64, index: int64): GDictionary
        
        /** Returns list of the kerning overrides. */
        fontGetKerningList(fontRid: Rid, size: int64): GArray<Vector2I>
        
        /** Removes all kerning overrides. */
        fontClearKerningMap(fontRid: Rid, size: int64): void
        
        /** Removes kerning override for the pair of glyphs. */
        fontRemoveKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): void
        
        /** Sets kerning for the pair of glyphs. */
        fontSetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        fontGetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): Vector2
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. See [method font_get_char_from_glyph_index]. */
        fontGetGlyphIndex(fontRid: Rid, size: int64, char: int64, variationSelector: int64): int64
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method font_get_glyph_index]. */
        fontGetCharFromGlyphIndex(fontRid: Rid, size: int64, glyphIndex: int64): int64
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        fontHasChar(fontRid: Rid, char: int64): boolean
        
        /** Returns a string containing all the characters available in the font. */
        fontGetSupportedChars(fontRid: Rid): string
        
        /** Returns an array containing all glyph indices in the font. */
        fontGetSupportedGlyphs(fontRid: Rid): PackedInt32Array
        
        /** Renders the range of characters to the font cache texture. */
        fontRenderRange(fontRid: Rid, size: Vector2I, start: int64, end: int64): void
        
        /** Renders specified glyph to the font cache texture. */
        fontRenderGlyph(fontRid: Rid, size: Vector2I, index: int64): void
        
        /** Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontDrawGlyph(fontRid: Rid, canvas: Rid, size: int64, pos: Vector2, index: int64, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontDrawGlyphOutline(fontRid: Rid, canvas: Rid, size: int64, outlineSize: int64, pos: Vector2, index: int64, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        fontIsLanguageSupported(fontRid: Rid, language: string): boolean
        
        /** Adds override for [method font_is_language_supported]. */
        fontSetLanguageSupportOverride(fontRid: Rid, language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        fontGetLanguageSupportOverride(fontRid: Rid, language: string): boolean
        
        /** Remove language support override. */
        fontRemoveLanguageSupportOverride(fontRid: Rid, language: string): void
        
        /** Returns list of language support overrides. */
        fontGetLanguageSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** Returns `true`, if font supports given script (ISO 15924 code). */
        fontIsScriptSupported(fontRid: Rid, script: string): boolean
        
        /** Adds override for [method font_is_script_supported]. */
        fontSetScriptSupportOverride(fontRid: Rid, script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        fontGetScriptSupportOverride(fontRid: Rid, script: string): boolean
        
        /** Removes script support override. */
        fontRemoveScriptSupportOverride(fontRid: Rid, script: string): void
        
        /** Returns list of script support overrides. */
        fontGetScriptSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** Sets font OpenType feature set override. */
        fontSetOpentypeFeatureOverrides(fontRid: Rid, overrides: GDictionary): void
        
        /** Returns font OpenType feature set override. */
        fontGetOpentypeFeatureOverrides(fontRid: Rid): GDictionary
        
        /** Returns the dictionary of the supported OpenType features. */
        fontSupportedFeatureList(fontRid: Rid): GDictionary
        
        /** Returns the dictionary of the supported OpenType variation coordinates. */
        fontSupportedVariationList(fontRid: Rid): GDictionary
        
        /** Deprecated. This method always returns `1.0`. */
        fontGetGlobalOversampling(): float64
        
        /** Deprecated. This method does nothing. */
        fontSetGlobalOversampling(oversampling: float64): void
        
        /** Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters). */
        getHexCodeBoxSize(size: int64, index: int64): Vector2
        
        /** Draws box displaying character hexadecimal code. Used for replacing missing characters. */
        drawHexCodeBox(canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color): void
        
        /** Creates a new buffer for complex text layout, with the given [param direction] and [param orientation]. To free the resulting buffer, use [method free_rid] method.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        createShapedText(direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */): Rid
        
        /** Clears text buffer (removes text and inline objects). */
        shapedTextClear(rid: Rid): void
        
        /** Sets desired text direction. If set to [constant DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shapedTextSetDirection(shaped: Rid, direction?: TextServer.Direction /* = 0 */): void
        
        /** Returns direction of the text. */
        shapedTextGetDirection(shaped: Rid): TextServer.Direction
        
        /** Returns direction of the text, inferred by the BiDi algorithm. */
        shapedTextGetInferredDirection(shaped: Rid): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        shapedTextSetBidiOverride(shaped: Rid, override: GArray): void
        
        /** Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shapedTextSetCustomPunctuation(shaped: Rid, punct: string): void
        
        /** Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shapedTextGetCustomPunctuation(shaped: Rid): string
        
        /** Sets ellipsis character used for text clipping. */
        shapedTextSetCustomEllipsis(shaped: Rid, char: int64): void
        
        /** Returns ellipsis character used for text clipping. */
        shapedTextGetCustomEllipsis(shaped: Rid): int64
        
        /** Sets desired text orientation.  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shapedTextSetOrientation(shaped: Rid, orientation?: TextServer.Orientation /* = 0 */): void
        
        /** Returns text orientation. */
        shapedTextGetOrientation(shaped: Rid): TextServer.Orientation
        
        /** If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed. */
        shapedTextSetPreserveInvalid(shaped: Rid, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.  
         *      
         *  **Note:** If set to `false`, nothing is displayed in place of invalid characters.  
         */
        shapedTextGetPreserveInvalid(shaped: Rid): boolean
        
        /** If set to `true` text buffer will display control characters. */
        shapedTextSetPreserveControl(shaped: Rid, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display control characters. */
        shapedTextGetPreserveControl(shaped: Rid): boolean
        
        /** Sets extra spacing added between glyphs or lines in pixels. */
        shapedTextSetSpacing(shaped: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns extra spacing added between glyphs or lines in pixels. */
        shapedTextGetSpacing(shaped: Rid, spacing: TextServer.SpacingType): int64
        
        /** Adds text span and font to draw it to the text buffer. */
        shapedTextAddString(shaped: Rid, text: string, fonts: GArray<Rid>, size: int64, opentypeFeatures?: GDictionary /* = new GDictionary() */, language?: string /* = '' */, meta?: any /* = {} */): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        shapedTextAddObject(shaped: Rid, key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, length?: int64 /* = 1 */, baseline?: float64 /* = 0 */): boolean
        
        /** Sets new size and alignment of embedded object. */
        shapedTextResizeObject(shaped: Rid, key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, baseline?: float64 /* = 0 */): boolean
        
        /** Returns the text buffer source text, including object replacement characters. */
        shapedGetText(shaped: Rid): string
        
        /** Returns number of text spans added using [method shaped_text_add_string] or [method shaped_text_add_object]. */
        shapedGetSpanCount(shaped: Rid): int64
        
        /** Returns text span metadata. */
        shapedGetSpanMeta(shaped: Rid, index: int64): any
        
        /** Returns text embedded object key. */
        shapedGetSpanEmbeddedObject(shaped: Rid, index: int64): any
        
        /** Returns the text span source text. */
        shapedGetSpanText(shaped: Rid, index: int64): string
        
        /** Returns the text span embedded object key. */
        shapedGetSpanObject(shaped: Rid, index: int64): any
        
        /** Changes text span font, font size, and OpenType features, without changing the text. */
        shapedSetSpanUpdateFont(shaped: Rid, index: int64, fonts: GArray<Rid>, size: int64, opentypeFeatures?: GDictionary /* = new GDictionary() */): void
        
        /** Returns the number of uniform text runs in the buffer. */
        shapedGetRunCount(shaped: Rid): int64
        
        /** Returns the source text of the [param index] text run (in visual order). */
        shapedGetRunText(shaped: Rid, index: int64): string
        
        /** Returns the source text range of the [param index] text run (in visual order). */
        shapedGetRunRange(shaped: Rid, index: int64): Vector2I
        
        /** Returns the font RID of the [param index] text run (in visual order). */
        shapedGetRunFontRid(shaped: Rid, index: int64): Rid
        
        /** Returns the font size of the [param index] text run (in visual order). */
        shapedGetRunFontSize(shaped: Rid, index: int64): int64
        
        /** Returns the language of the [param index] text run (in visual order). */
        shapedGetRunLanguage(shaped: Rid, index: int64): string
        
        /** Returns the direction of the [param index] text run (in visual order). */
        shapedGetRunDirection(shaped: Rid, index: int64): TextServer.Direction
        
        /** Returns the embedded object of the [param index] text run (in visual order). */
        shapedGetRunObject(shaped: Rid, index: int64): any
        
        /** Returns text buffer for the substring of the text in the [param shaped] text buffer (including inline objects). */
        shapedTextSubstr(shaped: Rid, start: int64, length: int64): Rid
        
        /** Returns the parent buffer from which the substring originates. */
        shapedTextGetParent(shaped: Rid): Rid
        
        /** Adjusts text width to fit to specified width, returns new text width. */
        shapedTextFitToWidth(shaped: Rid, width: float64, justificationFlags?: TextServer.JustificationFlag /* = 3 */): float64
        
        /** Aligns shaped text to the given tab-stops. */
        shapedTextTabAlign(shaped: Rid, tabStops: PackedFloat32Array | float32[]): float64
        
        /** Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.  
         *      
         *  **Note:** It is not necessary to call this function manually, buffer will be shaped automatically as soon as any of its output data is requested.  
         */
        shapedTextShape(shaped: Rid): boolean
        
        /** Returns `true` if buffer is successfully shaped. */
        shapedTextIsReady(shaped: Rid): boolean
        
        /** Returns `true` if text buffer contains any visible characters. */
        shapedTextHasVisibleChars(shaped: Rid): boolean
        
        /** Returns an array of glyphs in the visual order. */
        shapedTextGetGlyphs(shaped: Rid): GArray<GDictionary>
        
        /** Returns text glyphs in the logical order. */
        shapedTextSortLogical(shaped: Rid): GArray<GDictionary>
        
        /** Returns number of glyphs in the buffer. */
        shapedTextGetGlyphCount(shaped: Rid): int64
        
        /** Returns substring buffer character range in the parent buffer. */
        shapedTextGetRange(shaped: Rid): Vector2I
        
        /** Breaks text to the lines and columns. Returns character ranges for each segment. */
        shapedTextGetLineBreaksAdv(shaped: Rid, width: PackedFloat32Array | float32[], start?: int64 /* = 0 */, once?: boolean /* = true */, breakFlags?: TextServer.LineBreakFlag /* = 3 */): PackedInt32Array
        
        /** Breaks text to the lines and returns character ranges for each line. */
        shapedTextGetLineBreaks(shaped: Rid, width: float64, start?: int64 /* = 0 */, breakFlags?: TextServer.LineBreakFlag /* = 3 */): PackedInt32Array
        
        /** Breaks text into words and returns array of character ranges. Use [param grapheme_flags] to set what characters are used for breaking. */
        shapedTextGetWordBreaks(shaped: Rid, graphemeFlags?: TextServer.GraphemeFlag /* = 264 */, skipGraphemeFlags?: TextServer.GraphemeFlag /* = 4 */): PackedInt32Array
        
        /** Returns the position of the overrun trim. */
        shapedTextGetTrimPos(shaped: Rid): int64
        
        /** Returns position of the ellipsis. */
        shapedTextGetEllipsisPos(shaped: Rid): int64
        
        /** Returns array of the glyphs in the ellipsis. */
        shapedTextGetEllipsisGlyphs(shaped: Rid): GArray<GDictionary>
        
        /** Returns number of glyphs in the ellipsis. */
        shapedTextGetEllipsisGlyphCount(shaped: Rid): int64
        
        /** Trims text if it exceeds the given width. */
        shapedTextOverrunTrimToWidth(shaped: Rid, width?: float64 /* = 0 */, overrunTrimFlags?: TextServer.TextOverrunFlag /* = 0 */): void
        
        /** Returns array of inline objects. */
        shapedTextGetObjects(shaped: Rid): GArray
        
        /** Returns bounding rectangle of the inline object. */
        shapedTextGetObjectRect(shaped: Rid, key: any): Rect2
        
        /** Returns the character range of the inline object. */
        shapedTextGetObjectRange(shaped: Rid, key: any): Vector2I
        
        /** Returns the glyph index of the inline object. */
        shapedTextGetObjectGlyph(shaped: Rid, key: any): int64
        
        /** Returns size of the text. */
        shapedTextGetSize(shaped: Rid): Vector2
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).  
         *      
         *  **Note:** Overall ascent can be higher than font ascent, if some glyphs are displaced from the baseline.  
         */
        shapedTextGetAscent(shaped: Rid): float64
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).  
         *      
         *  **Note:** Overall descent can be higher than font descent, if some glyphs are displaced from the baseline.  
         */
        shapedTextGetDescent(shaped: Rid): float64
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        shapedTextGetWidth(shaped: Rid): float64
        
        /** Returns pixel offset of the underline below the baseline. */
        shapedTextGetUnderlinePosition(shaped: Rid): float64
        
        /** Returns thickness of the underline. */
        shapedTextGetUnderlineThickness(shaped: Rid): float64
        
        /** Returns shapes of the carets corresponding to the character offset [param position] in the text. Returned caret shape is 1 pixel wide rectangle. */
        shapedTextGetCarets(shaped: Rid, position: int64): GDictionary
        
        /** Returns selection rectangles for the specified character range. */
        shapedTextGetSelection(shaped: Rid, start: int64, end: int64): PackedVector2Array
        
        /** Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found. */
        shapedTextHitTestGrapheme(shaped: Rid, coords: float64): int64
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        shapedTextHitTestPosition(shaped: Rid, coords: float64): int64
        
        /** Returns composite character's bounds as offsets from the start of the line. */
        shapedTextGetGraphemeBounds(shaped: Rid, pos: int64): Vector2
        
        /** Returns grapheme end position closest to the [param pos]. */
        shapedTextNextGraphemePos(shaped: Rid, pos: int64): int64
        
        /** Returns grapheme start position closest to the [param pos]. */
        shapedTextPrevGraphemePos(shaped: Rid, pos: int64): int64
        
        /** Returns array of the composite character boundaries. */
        shapedTextGetCharacterBreaks(shaped: Rid): PackedInt32Array
        
        /** Returns composite character end position closest to the [param pos]. */
        shapedTextNextCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Returns composite character start position closest to the [param pos]. */
        shapedTextPrevCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Returns composite character position closest to the [param pos]. */
        shapedTextClosestCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Draw shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  [param clip_l] and [param clip_r] are offsets relative to [param pos], going to the right in horizontal layout and downward in vertical layout. If [param clip_l] is not negative, glyphs starting before the offset are clipped. If [param clip_r] is not negative, glyphs ending after the offset are clipped.  
         */
        shapedTextDraw(shaped: Rid, canvas: Rid, pos: Vector2, clipL?: float64 /* = -1 */, clipR?: float64 /* = -1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw the outline of the shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  [param clip_l] and [param clip_r] are offsets relative to [param pos], going to the right in horizontal layout and downward in vertical layout. If [param clip_l] is not negative, glyphs starting before the offset are clipped. If [param clip_r] is not negative, glyphs ending after the offset are clipped.  
         */
        shapedTextDrawOutline(shaped: Rid, canvas: Rid, pos: Vector2, clipL?: float64 /* = -1 */, clipR?: float64 /* = -1 */, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns dominant direction of in the range of text. */
        shapedTextGetDominantDirectionInRange(shaped: Rid, start: int64, end: int64): TextServer.Direction
        
        /** Converts a number from the Western Arabic (0..9) to the numeral systems used in [param language].  
         *  If [param language] is omitted, the active locale will be used.  
         */
        formatNumber(number: string, language?: string /* = '' */): string
        
        /** Converts [param number] from the numeral systems used in [param language] to Western Arabic (0..9). */
        parseNumber(number: string, language?: string /* = '' */): string
        
        /** Returns percent sign used in the [param language]. */
        percentSign(language?: string /* = '' */): string
        
        /** Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.  
         *  When [param chars_per_line] is greater than zero, line break boundaries are returned instead.  
         *    
         */
        stringGetWordBreaks(string_: string, language?: string /* = '' */, charsPerLine?: int64 /* = 0 */): PackedInt32Array
        
        /** Returns array of the composite character boundaries.  
         *    
         */
        stringGetCharacterBreaks(string_: string, language?: string /* = '' */): PackedInt32Array
        
        /** Returns index of the first string in [param dict] which is visually confusable with the [param string], or `-1` if none is found.  
         *      
         *  **Note:** This method doesn't detect invisible characters, for spoof detection use it in combination with [method spoof_check].  
         *      
         *  **Note:** Always returns `-1` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        isConfusable(string_: string, dict: PackedStringArray | string[]): int64
        
        /** Returns `true` if [param string] is likely to be an attempt at confusing the reader.  
         *      
         *  **Note:** Always returns `false` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        spoofCheck(string_: string): boolean
        
        /** Strips diacritics from the string.  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stripDiacritics(string_: string): string
        
        /** Returns `true` if [param string] is a valid identifier.  
         *  If the text server supports the [constant FEATURE_UNICODE_IDENTIFIERS] feature, a valid identifier must:  
         *  - Conform to normalization form C.  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         *  - Use UAX #31 recommended scripts only (mixed scripts are allowed).  
         *  If the [constant FEATURE_UNICODE_IDENTIFIERS] feature is not supported, a valid identifier must:  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         */
        isValidIdentifier(string_: string): boolean
        
        /** Returns `true` if the given code point is a valid letter, i.e. it belongs to the Unicode category "L". */
        isValidLetter(unicode: int64): boolean
        
        /** Returns the string converted to uppercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stringToUpper(string_: string, language?: string /* = '' */): string
        
        /** Returns the string converted to lowercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stringToLower(string_: string, language?: string /* = '' */): string
        
        /** Returns the string converted to title case.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stringToTitle(string_: string, language?: string /* = '' */): string
        
        /** Default implementation of the BiDi algorithm override function. */
        parseStructuredText(parserType: TextServer.StructuredTextParser, args: GArray, text: string): GArray<Vector3I>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextServer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextServer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextServerAdvanced extends __RPCMapTextServerExtension {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextServerAdvanced extends __NameMapTextServerExtension {
    }
    /** An advanced text server with support for BiDi, complex text layout, and contextual OpenType features. Used in Godot by default.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textserveradvanced.html  
     */
    class TextServerAdvanced extends TextServerExtension {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextServerAdvanced;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextServerAdvanced;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextServerDummy extends __RPCMapTextServerExtension {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextServerDummy extends __NameMapTextServerExtension {
    }
    /** A dummy text server that can't render text or manage fonts.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textserverdummy.html  
     */
    class TextServerDummy extends TextServerExtension {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextServerDummy;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextServerDummy;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextServerExtension extends __RPCMapTextServer {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextServerExtension extends __NameMapTextServer {
        _has_feature: "_hasFeature";
        _get_name: "_getName";
        _get_features: "_getFeatures";
        _free_rid: "_freeRid";
        _load_support_data: "_loadSupportData";
        _get_support_data_filename: "_getSupportDataFileName";
        _get_support_data_info: "_getSupportDataInfo";
        _save_support_data: "_saveSupportData";
        _get_support_data: "_getSupportData";
        _is_locale_right_to_left: "_isLocaleRightToLeft";
        _name_to_tag: "_nameToTag";
        _tag_to_name: "_tagToName";
        _create_font: "_createFont";
        _create_font_linked_variation: "_createFontLinkedVariation";
        _font_set_data: "_fontSetData";
        _font_set_data_ptr: "_fontSetDataPtr";
        _font_set_face_index: "_fontSetFaceIndex";
        _font_get_face_index: "_fontGetFaceIndex";
        _font_get_face_count: "_fontGetFaceCount";
        _font_set_style: "_fontSetStyle";
        _font_get_style: "_fontGetStyle";
        _font_set_name: "_fontSetName";
        _font_get_name: "_fontGetName";
        _font_get_ot_name_strings: "_fontGetOtNameStrings";
        _font_set_style_name: "_fontSetStyleName";
        _font_get_style_name: "_fontGetStyleName";
        _font_set_weight: "_fontSetWeight";
        _font_get_weight: "_fontGetWeight";
        _font_set_stretch: "_fontSetStretch";
        _font_get_stretch: "_fontGetStretch";
        _font_set_antialiasing: "_fontSetAntialiasing";
        _font_get_antialiasing: "_fontGetAntialiasing";
        _font_set_disable_embedded_bitmaps: "_fontSetDisableEmbeddedBitmaps";
        _font_get_disable_embedded_bitmaps: "_fontGetDisableEmbeddedBitmaps";
        _font_set_generate_mipmaps: "_fontSetGenerateMipmaps";
        _font_get_generate_mipmaps: "_fontGetGenerateMipmaps";
        _font_set_multichannel_signed_distance_field: "_fontSetMultichannelSignedDistanceField";
        _font_is_multichannel_signed_distance_field: "_fontIsMultichannelSignedDistanceField";
        _font_set_msdf_pixel_range: "_fontSetMsdfPixelRange";
        _font_get_msdf_pixel_range: "_fontGetMsdfPixelRange";
        _font_set_msdf_size: "_fontSetMsdfSize";
        _font_get_msdf_size: "_fontGetMsdfSize";
        _font_set_fixed_size: "_fontSetFixedSize";
        _font_get_fixed_size: "_fontGetFixedSize";
        _font_set_fixed_size_scale_mode: "_fontSetFixedSizeScaleMode";
        _font_get_fixed_size_scale_mode: "_fontGetFixedSizeScaleMode";
        _font_set_allow_system_fallback: "_fontSetAllowSystemFallback";
        _font_is_allow_system_fallback: "_fontIsAllowSystemFallback";
        _font_clear_system_fallback_cache: "_fontClearSystemFallbackCache";
        _font_set_force_autohinter: "_fontSetForceAutohinter";
        _font_is_force_autohinter: "_fontIsForceAutohinter";
        _font_set_modulate_color_glyphs: "_fontSetModulateColorGlyphs";
        _font_is_modulate_color_glyphs: "_fontIsModulateColorGlyphs";
        _font_set_hinting: "_fontSetHinting";
        _font_get_hinting: "_fontGetHinting";
        _font_set_subpixel_positioning: "_fontSetSubpixelPositioning";
        _font_get_subpixel_positioning: "_fontGetSubpixelPositioning";
        _font_set_keep_rounding_remainders: "_fontSetKeepRoundingRemainders";
        _font_get_keep_rounding_remainders: "_fontGetKeepRoundingRemainders";
        _font_set_embolden: "_fontSetEmbolden";
        _font_get_embolden: "_fontGetEmbolden";
        _font_set_spacing: "_fontSetSpacing";
        _font_get_spacing: "_fontGetSpacing";
        _font_set_baseline_offset: "_fontSetBaselineOffset";
        _font_get_baseline_offset: "_fontGetBaselineOffset";
        _font_set_transform: "_fontSetTransform";
        _font_get_transform: "_fontGetTransform";
        _font_set_variation_coordinates: "_fontSetVariationCoordinates";
        _font_get_variation_coordinates: "_fontGetVariationCoordinates";
        _font_set_oversampling: "_fontSetOversampling";
        _font_get_oversampling: "_fontGetOversampling";
        _font_get_size_cache_list: "_fontGetSizeCacheList";
        _font_clear_size_cache: "_fontClearSizeCache";
        _font_remove_size_cache: "_fontRemoveSizeCache";
        _font_get_size_cache_info: "_fontGetSizeCacheInfo";
        _font_set_ascent: "_fontSetAscent";
        _font_get_ascent: "_fontGetAscent";
        _font_set_descent: "_fontSetDescent";
        _font_get_descent: "_fontGetDescent";
        _font_set_underline_position: "_fontSetUnderlinePosition";
        _font_get_underline_position: "_fontGetUnderlinePosition";
        _font_set_underline_thickness: "_fontSetUnderlineThickness";
        _font_get_underline_thickness: "_fontGetUnderlineThickness";
        _font_set_scale: "_fontSetScale";
        _font_get_scale: "_fontGetScale";
        _font_get_texture_count: "_fontGetTextureCount";
        _font_clear_textures: "_fontClearTextures";
        _font_remove_texture: "_fontRemoveTexture";
        _font_set_texture_image: "_fontSetTextureImage";
        _font_get_texture_image: "_fontGetTextureImage";
        _font_set_texture_offsets: "_fontSetTextureOffsets";
        _font_get_texture_offsets: "_fontGetTextureOffsets";
        _font_get_glyph_list: "_fontGetGlyphList";
        _font_clear_glyphs: "_fontClearGlyphs";
        _font_remove_glyph: "_fontRemoveGlyph";
        _font_get_glyph_advance: "_fontGetGlyphAdvance";
        _font_set_glyph_advance: "_fontSetGlyphAdvance";
        _font_get_glyph_offset: "_fontGetGlyphOffset";
        _font_set_glyph_offset: "_fontSetGlyphOffset";
        _font_get_glyph_size: "_fontGetGlyphSize";
        _font_set_glyph_size: "_fontSetGlyphSize";
        _font_get_glyph_uv_rect: "_fontGetGlyphUVRect";
        _font_set_glyph_uv_rect: "_fontSetGlyphUVRect";
        _font_get_glyph_texture_idx: "_fontGetGlyphTextureIdx";
        _font_set_glyph_texture_idx: "_fontSetGlyphTextureIdx";
        _font_get_glyph_texture_rid: "_fontGetGlyphTextureRid";
        _font_get_glyph_texture_size: "_fontGetGlyphTextureSize";
        _font_get_glyph_contours: "_fontGetGlyphContours";
        _font_get_kerning_list: "_fontGetKerningList";
        _font_clear_kerning_map: "_fontClearKerningMap";
        _font_remove_kerning: "_fontRemoveKerning";
        _font_set_kerning: "_fontSetKerning";
        _font_get_kerning: "_fontGetKerning";
        _font_get_glyph_index: "_fontGetGlyphIndex";
        _font_get_char_from_glyph_index: "_fontGetCharFromGlyphIndex";
        _font_has_char: "_fontHasChar";
        _font_get_supported_chars: "_fontGetSupportedChars";
        _font_get_supported_glyphs: "_fontGetSupportedGlyphs";
        _font_render_range: "_fontRenderRange";
        _font_render_glyph: "_fontRenderGlyph";
        _font_draw_glyph: "_fontDrawGlyph";
        _font_draw_glyph_outline: "_fontDrawGlyphOutline";
        _font_is_language_supported: "_fontIsLanguageSupported";
        _font_set_language_support_override: "_fontSetLanguageSupportOverride";
        _font_get_language_support_override: "_fontGetLanguageSupportOverride";
        _font_remove_language_support_override: "_fontRemoveLanguageSupportOverride";
        _font_get_language_support_overrides: "_fontGetLanguageSupportOverrides";
        _font_is_script_supported: "_fontIsScriptSupported";
        _font_set_script_support_override: "_fontSetScriptSupportOverride";
        _font_get_script_support_override: "_fontGetScriptSupportOverride";
        _font_remove_script_support_override: "_fontRemoveScriptSupportOverride";
        _font_get_script_support_overrides: "_fontGetScriptSupportOverrides";
        _font_set_opentype_feature_overrides: "_fontSetOpentypeFeatureOverrides";
        _font_get_opentype_feature_overrides: "_fontGetOpentypeFeatureOverrides";
        _font_supported_feature_list: "_fontSupportedFeatureList";
        _font_supported_variation_list: "_fontSupportedVariationList";
        _font_get_global_oversampling: "_fontGetGlobalOversampling";
        _font_set_global_oversampling: "_fontSetGlobalOversampling";
        _reference_oversampling_level: "_referenceOversamplingLevel";
        _unreference_oversampling_level: "_unreferenceOversamplingLevel";
        _get_hex_code_box_size: "_getHexCodeBoxSize";
        _draw_hex_code_box: "_drawHexCodeBox";
        _create_shaped_text: "_createShapedText";
        _shaped_text_clear: "_shapedTextClear";
        _shaped_text_set_direction: "_shapedTextSetDirection";
        _shaped_text_get_direction: "_shapedTextGetDirection";
        _shaped_text_get_inferred_direction: "_shapedTextGetInferredDirection";
        _shaped_text_set_bidi_override: "_shapedTextSetBidiOverride";
        _shaped_text_set_custom_punctuation: "_shapedTextSetCustomPunctuation";
        _shaped_text_get_custom_punctuation: "_shapedTextGetCustomPunctuation";
        _shaped_text_set_custom_ellipsis: "_shapedTextSetCustomEllipsis";
        _shaped_text_get_custom_ellipsis: "_shapedTextGetCustomEllipsis";
        _shaped_text_set_orientation: "_shapedTextSetOrientation";
        _shaped_text_get_orientation: "_shapedTextGetOrientation";
        _shaped_text_set_preserve_invalid: "_shapedTextSetPreserveInvalid";
        _shaped_text_get_preserve_invalid: "_shapedTextGetPreserveInvalid";
        _shaped_text_set_preserve_control: "_shapedTextSetPreserveControl";
        _shaped_text_get_preserve_control: "_shapedTextGetPreserveControl";
        _shaped_text_set_spacing: "_shapedTextSetSpacing";
        _shaped_text_get_spacing: "_shapedTextGetSpacing";
        _shaped_text_add_string: "_shapedTextAddString";
        _shaped_text_add_object: "_shapedTextAddObject";
        _shaped_text_resize_object: "_shapedTextResizeObject";
        _shaped_get_text: "_shapedGetText";
        _shaped_get_span_count: "_shapedGetSpanCount";
        _shaped_get_span_meta: "_shapedGetSpanMeta";
        _shaped_get_span_embedded_object: "_shapedGetSpanEmbeddedObject";
        _shaped_get_span_text: "_shapedGetSpanText";
        _shaped_get_span_object: "_shapedGetSpanObject";
        _shaped_set_span_update_font: "_shapedSetSpanUpdateFont";
        _shaped_get_run_count: "_shapedGetRunCount";
        _shaped_get_run_text: "_shapedGetRunText";
        _shaped_get_run_range: "_shapedGetRunRange";
        _shaped_get_run_font_rid: "_shapedGetRunFontRid";
        _shaped_get_run_font_size: "_shapedGetRunFontSize";
        _shaped_get_run_language: "_shapedGetRunLanguage";
        _shaped_get_run_direction: "_shapedGetRunDirection";
        _shaped_get_run_object: "_shapedGetRunObject";
        _shaped_text_substr: "_shapedTextSubstr";
        _shaped_text_get_parent: "_shapedTextGetParent";
        _shaped_text_fit_to_width: "_shapedTextFitToWidth";
        _shaped_text_tab_align: "_shapedTextTabAlign";
        _shaped_text_shape: "_shapedTextShape";
        _shaped_text_update_breaks: "_shapedTextUpdateBreaks";
        _shaped_text_update_justification_ops: "_shapedTextUpdateJustificationOps";
        _shaped_text_is_ready: "_shapedTextIsReady";
        _shaped_text_get_glyphs: "_shapedTextGetGlyphs";
        _shaped_text_sort_logical: "_shapedTextSortLogical";
        _shaped_text_get_glyph_count: "_shapedTextGetGlyphCount";
        _shaped_text_get_range: "_shapedTextGetRange";
        _shaped_text_get_line_breaks_adv: "_shapedTextGetLineBreaksAdv";
        _shaped_text_get_line_breaks: "_shapedTextGetLineBreaks";
        _shaped_text_get_word_breaks: "_shapedTextGetWordBreaks";
        _shaped_text_get_trim_pos: "_shapedTextGetTrimPos";
        _shaped_text_get_ellipsis_pos: "_shapedTextGetEllipsisPos";
        _shaped_text_get_ellipsis_glyph_count: "_shapedTextGetEllipsisGlyphCount";
        _shaped_text_get_ellipsis_glyphs: "_shapedTextGetEllipsisGlyphs";
        _shaped_text_overrun_trim_to_width: "_shapedTextOverrunTrimToWidth";
        _shaped_text_get_objects: "_shapedTextGetObjects";
        _shaped_text_get_object_rect: "_shapedTextGetObjectRect";
        _shaped_text_get_object_range: "_shapedTextGetObjectRange";
        _shaped_text_get_object_glyph: "_shapedTextGetObjectGlyph";
        _shaped_text_get_size: "_shapedTextGetSize";
        _shaped_text_get_ascent: "_shapedTextGetAscent";
        _shaped_text_get_descent: "_shapedTextGetDescent";
        _shaped_text_get_width: "_shapedTextGetWidth";
        _shaped_text_get_underline_position: "_shapedTextGetUnderlinePosition";
        _shaped_text_get_underline_thickness: "_shapedTextGetUnderlineThickness";
        _shaped_text_get_dominant_direction_in_range: "_shapedTextGetDominantDirectionInRange";
        _shaped_text_get_carets: "_shapedTextGetCarets";
        _shaped_text_get_selection: "_shapedTextGetSelection";
        _shaped_text_hit_test_grapheme: "_shapedTextHitTestGrapheme";
        _shaped_text_hit_test_position: "_shapedTextHitTestPosition";
        _shaped_text_draw: "_shapedTextDraw";
        _shaped_text_draw_outline: "_shapedTextDrawOutline";
        _shaped_text_get_grapheme_bounds: "_shapedTextGetGraphemeBounds";
        _shaped_text_next_grapheme_pos: "_shapedTextNextGraphemePos";
        _shaped_text_prev_grapheme_pos: "_shapedTextPrevGraphemePos";
        _shaped_text_get_character_breaks: "_shapedTextGetCharacterBreaks";
        _shaped_text_next_character_pos: "_shapedTextNextCharacterPos";
        _shaped_text_prev_character_pos: "_shapedTextPrevCharacterPos";
        _shaped_text_closest_character_pos: "_shapedTextClosestCharacterPos";
        _format_number: "_formatNumber";
        _parse_number: "_parseNumber";
        _percent_sign: "_percentSign";
        _strip_diacritics: "_stripDiacritics";
        _is_valid_identifier: "_isValidIdentifier";
        _is_valid_letter: "_isValidLetter";
        _string_get_word_breaks: "_stringGetWordBreaks";
        _string_get_character_breaks: "_stringGetCharacterBreaks";
        _is_confusable: "_isConfusable";
        _spoof_check: "_spoofCheck";
        _string_to_upper: "_stringToUpper";
        _string_to_lower: "_stringToLower";
        _string_to_title: "_stringToTitle";
        _parse_structured_text: "_parseStructuredText";
    }
    /** Base class for custom [TextServer] implementations (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textserverextension.html  
     */
    class TextServerExtension extends TextServer {
        constructor(identifier?: any)
        /** Returns `true` if the server supports a feature. */
        /* gdvirtual */ _hasFeature(feature: TextServer.Feature): boolean
        
        /** Returns the name of the server interface. */
        /* gdvirtual */ _getName(): string
        
        /** Returns text server features, see [enum TextServer.Feature]. */
        /* gdvirtual */ _getFeatures(): int64
        
        /** Frees an object created by this [TextServer]. */
        /* gdvirtual */ _freeRid(rid: Rid): void
        
        /** Returns `true` if [param rid] is valid resource owned by this text server. */
        /* gdvirtual */ _has(rid: Rid): boolean
        
        /** Loads optional TextServer database (e.g. ICU break iterators and dictionaries). */
        /* gdvirtual */ _loadSupportData(fileName: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename. */
        /* gdvirtual */ _getSupportDataFileName(): string
        
        /** Returns TextServer database (e.g. ICU break iterators and dictionaries) description. */
        /* gdvirtual */ _getSupportDataInfo(): string
        
        /** Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file. */
        /* gdvirtual */ _saveSupportData(fileName: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries). */
        /* gdvirtual */ _getSupportData(): PackedByteArray
        
        /** Returns `true` if locale is right-to-left. */
        /* gdvirtual */ _isLocaleRightToLeft(locale: string): boolean
        
        /** Converts readable feature, variation, script, or language name to OpenType tag. */
        /* gdvirtual */ _nameToTag(name: string): int64
        
        /** Converts OpenType tag to readable feature, variation, script, or language name. */
        /* gdvirtual */ _tagToName(tag: int64): string
        
        /** Creates a new, empty font cache entry resource. */
        /* gdvirtual */ _createFont(): Rid
        
        /** Optional, implement if font supports extra spacing or baseline offset.  
         *  Creates a new variation existing font which is reusing the same glyph cache and font data.  
         */
        /* gdvirtual */ _createFontLinkedVariation(fontRid: Rid): Rid
        
        /** Sets font source data, e.g contents of the dynamic font source file. */
        /* gdvirtual */ _fontSetData(fontRid: Rid, data: PackedByteArray | byte[] | ArrayBuffer): void
        
        /** Sets pointer to the font source data, e.g contents of the dynamic font source file. */
        /* gdvirtual */ _fontSetDataPtr(fontRid: Rid, dataPtr: int64, dataSize: int64): void
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        /* gdvirtual */ _fontSetFaceIndex(fontRid: Rid, faceIndex: int64): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        /* gdvirtual */ _fontGetFaceIndex(fontRid: Rid): int64
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        /* gdvirtual */ _fontGetFaceCount(fontRid: Rid): int64
        
        /** Sets the font style flags. */
        /* gdvirtual */ _fontSetStyle(fontRid: Rid, style: TextServer.FontStyle): void
        
        /** Returns font style flags. */
        /* gdvirtual */ _fontGetStyle(fontRid: Rid): TextServer.FontStyle
        
        /** Sets the font family name. */
        /* gdvirtual */ _fontSetName(fontRid: Rid, name: string): void
        
        /** Returns font family name. */
        /* gdvirtual */ _fontGetName(fontRid: Rid): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        /* gdvirtual */ _fontGetOtNameStrings(fontRid: Rid): GDictionary
        
        /** Sets the font style name. */
        /* gdvirtual */ _fontSetStyleName(fontRid: Rid, nameStyle: string): void
        
        /** Returns font style name. */
        /* gdvirtual */ _fontGetStyleName(fontRid: Rid): string
        
        /** Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        /* gdvirtual */ _fontSetWeight(fontRid: Rid, weight: int64): void
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        /* gdvirtual */ _fontGetWeight(fontRid: Rid): int64
        
        /** Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        /* gdvirtual */ _fontSetStretch(fontRid: Rid, stretch: int64): void
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        /* gdvirtual */ _fontGetStretch(fontRid: Rid): int64
        
        /** Sets font anti-aliasing mode. */
        /* gdvirtual */ _fontSetAntialiasing(fontRid: Rid, antialiasing: TextServer.FontAntialiasing): void
        
        /** Returns font anti-aliasing mode. */
        /* gdvirtual */ _fontGetAntialiasing(fontRid: Rid): TextServer.FontAntialiasing
        
        /** If set to `true`, embedded font bitmap loading is disabled. */
        /* gdvirtual */ _fontSetDisableEmbeddedBitmaps(fontRid: Rid, disableEmbeddedBitmaps: boolean): void
        
        /** Returns whether the font's embedded bitmap loading is disabled. */
        /* gdvirtual */ _fontGetDisableEmbeddedBitmaps(fontRid: Rid): boolean
        
        /** If set to `true` font texture mipmap generation is enabled. */
        /* gdvirtual */ _fontSetGenerateMipmaps(fontRid: Rid, generateMipmaps: boolean): void
        
        /** Returns `true` if font texture mipmap generation is enabled. */
        /* gdvirtual */ _fontGetGenerateMipmaps(fontRid: Rid): boolean
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes. */
        /* gdvirtual */ _fontSetMultichannelSignedDistanceField(fontRid: Rid, msdf: boolean): void
        
        /** Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        /* gdvirtual */ _fontIsMultichannelSignedDistanceField(fontRid: Rid): boolean
        
        /** Sets the width of the range around the shape between the minimum and maximum representable signed distance. */
        /* gdvirtual */ _fontSetMsdfPixelRange(fontRid: Rid, msdfPixelRange: int64): void
        
        /** Returns the width of the range around the shape between the minimum and maximum representable signed distance. */
        /* gdvirtual */ _fontGetMsdfPixelRange(fontRid: Rid): int64
        
        /** Sets source font size used to generate MSDF textures. */
        /* gdvirtual */ _fontSetMsdfSize(fontRid: Rid, msdfSize: int64): void
        
        /** Returns source font size used to generate MSDF textures. */
        /* gdvirtual */ _fontGetMsdfSize(fontRid: Rid): int64
        
        /** Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes. */
        /* gdvirtual */ _fontSetFixedSize(fontRid: Rid, fixedSize: int64): void
        
        /** Returns bitmap font fixed size. */
        /* gdvirtual */ _fontGetFixedSize(fontRid: Rid): int64
        
        /** Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero. */
        /* gdvirtual */ _fontSetFixedSizeScaleMode(fontRid: Rid, fixedSizeScaleMode: TextServer.FixedSizeScaleMode): void
        
        /** Returns bitmap font scaling mode. */
        /* gdvirtual */ _fontGetFixedSizeScaleMode(fontRid: Rid): TextServer.FixedSizeScaleMode
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        /* gdvirtual */ _fontSetAllowSystemFallback(fontRid: Rid, allowSystemFallback: boolean): void
        
        /** Returns `true` if system fonts can be automatically used as fallbacks. */
        /* gdvirtual */ _fontIsAllowSystemFallback(fontRid: Rid): boolean
        
        /** Frees all automatically loaded system fonts. */
        /* gdvirtual */ _fontClearSystemFallbackCache(): void
        
        /** If set to `true` auto-hinting is preferred over font built-in hinting. */
        /* gdvirtual */ _fontSetForceAutohinter(fontRid: Rid, forceAutohinter: boolean): void
        
        /** Returns `true` if auto-hinting is supported and preferred over font built-in hinting. */
        /* gdvirtual */ _fontIsForceAutohinter(fontRid: Rid): boolean
        
        /** If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
        /* gdvirtual */ _fontSetModulateColorGlyphs(fontRid: Rid, modulate: boolean): void
        
        /** Returns `true`, if color modulation is applied when drawing colored glyphs. */
        /* gdvirtual */ _fontIsModulateColorGlyphs(fontRid: Rid): boolean
        
        /** Sets font hinting mode. Used by dynamic fonts only. */
        /* gdvirtual */ _fontSetHinting(fontRid: Rid, hinting: TextServer.Hinting): void
        
        /** Returns the font hinting mode. Used by dynamic fonts only. */
        /* gdvirtual */ _fontGetHinting(fontRid: Rid): TextServer.Hinting
        
        /** Sets font subpixel glyph positioning mode. */
        /* gdvirtual */ _fontSetSubpixelPositioning(fontRid: Rid, subpixelPositioning: TextServer.SubpixelPositioning): void
        
        /** Returns font subpixel glyph positioning mode. */
        /* gdvirtual */ _fontGetSubpixelPositioning(fontRid: Rid): TextServer.SubpixelPositioning
        
        /** Sets glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        /* gdvirtual */ _fontSetKeepRoundingRemainders(fontRid: Rid, keepRoundingRemainders: boolean): void
        
        /** Returns glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        /* gdvirtual */ _fontGetKeepRoundingRemainders(fontRid: Rid): boolean
        
        /** Sets font embolden strength. If [param strength] is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        /* gdvirtual */ _fontSetEmbolden(fontRid: Rid, strength: float64): void
        
        /** Returns font embolden strength. */
        /* gdvirtual */ _fontGetEmbolden(fontRid: Rid): float64
        
        /** Sets the spacing for [param spacing] to [param value] in pixels (not relative to the font size). */
        /* gdvirtual */ _fontSetSpacing(fontRid: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns the spacing for [param spacing] in pixels (not relative to the font size). */
        /* gdvirtual */ _fontGetSpacing(fontRid: Rid, spacing: TextServer.SpacingType): int64
        
        /** Sets extra baseline offset (as a fraction of font height). */
        /* gdvirtual */ _fontSetBaselineOffset(fontRid: Rid, baselineOffset: float64): void
        
        /** Returns extra baseline offset (as a fraction of font height). */
        /* gdvirtual */ _fontGetBaselineOffset(fontRid: Rid): float64
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs. */
        /* gdvirtual */ _fontSetTransform(fontRid: Rid, transform: Transform2D): void
        
        /** Returns 2D transform applied to the font outlines. */
        /* gdvirtual */ _fontGetTransform(fontRid: Rid): Transform2D
        
        /** Sets variation coordinates for the specified font cache entry. */
        /* gdvirtual */ _fontSetVariationCoordinates(fontRid: Rid, variationCoordinates: GDictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. */
        /* gdvirtual */ _fontGetVariationCoordinates(fontRid: Rid): GDictionary
        
        /** If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling` parameter of [code skip-lint]draw_*` methods. Used by dynamic fonts only. */
        /* gdvirtual */ _fontSetOversampling(fontRid: Rid, oversampling: float64): void
        
        /** Returns oversampling factor override. If set to a positive value, overrides the oversampling factor of the viewport this font is used in. See [member Viewport.oversampling]. This value doesn't override the [code skip-lint]oversampling` parameter of [code skip-lint]draw_*` methods. Used by dynamic fonts only. */
        /* gdvirtual */ _fontGetOversampling(fontRid: Rid): float64
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        /* gdvirtual */ _fontGetSizeCacheList(fontRid: Rid): GArray<Vector2I>
        
        /** Removes all font sizes from the cache entry. */
        /* gdvirtual */ _fontClearSizeCache(fontRid: Rid): void
        
        /** Removes specified font size from the cache entry. */
        /* gdvirtual */ _fontRemoveSizeCache(fontRid: Rid, size: Vector2I): void
        
        /** Returns font cache information, each entry contains the following fields: `Vector2i size_px` - font size in pixels, `float viewport_oversampling` - viewport oversampling factor, `int glyphs` - number of rendered glyphs, `int textures` - number of used textures, `int textures_size` - size of texture data in bytes. */
        /* gdvirtual */ _fontGetSizeCacheInfo(fontRid: Rid): GArray<GDictionary>
        
        /** Sets the font ascent (number of pixels above the baseline). */
        /* gdvirtual */ _fontSetAscent(fontRid: Rid, size: int64, ascent: float64): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        /* gdvirtual */ _fontGetAscent(fontRid: Rid, size: int64): float64
        
        /** Sets the font descent (number of pixels below the baseline). */
        /* gdvirtual */ _fontSetDescent(fontRid: Rid, size: int64, descent: float64): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        /* gdvirtual */ _fontGetDescent(fontRid: Rid, size: int64): float64
        
        /** Sets pixel offset of the underline below the baseline. */
        /* gdvirtual */ _fontSetUnderlinePosition(fontRid: Rid, size: int64, underlinePosition: float64): void
        
        /** Returns pixel offset of the underline below the baseline. */
        /* gdvirtual */ _fontGetUnderlinePosition(fontRid: Rid, size: int64): float64
        
        /** Sets thickness of the underline in pixels. */
        /* gdvirtual */ _fontSetUnderlineThickness(fontRid: Rid, size: int64, underlineThickness: float64): void
        
        /** Returns thickness of the underline in pixels. */
        /* gdvirtual */ _fontGetUnderlineThickness(fontRid: Rid, size: int64): float64
        
        /** Sets scaling factor of the color bitmap font. */
        /* gdvirtual */ _fontSetScale(fontRid: Rid, size: int64, scale: float64): void
        
        /** Returns scaling factor of the color bitmap font. */
        /* gdvirtual */ _fontGetScale(fontRid: Rid, size: int64): float64
        
        /** Returns number of textures used by font cache entry. */
        /* gdvirtual */ _fontGetTextureCount(fontRid: Rid, size: Vector2I): int64
        
        /** Removes all textures from font cache entry. */
        /* gdvirtual */ _fontClearTextures(fontRid: Rid, size: Vector2I): void
        
        /** Removes specified texture from the cache entry. */
        /* gdvirtual */ _fontRemoveTexture(fontRid: Rid, size: Vector2I, textureIndex: int64): void
        
        /** Sets font cache texture image data. */
        /* gdvirtual */ _fontSetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64, image: Image): void
        
        /** Returns font cache texture image data. */
        /* gdvirtual */ _fontGetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64): null | Image
        
        /** Sets array containing glyph packing data. */
        /* gdvirtual */ _fontSetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        
        /** Returns array containing glyph packing data. */
        /* gdvirtual */ _fontGetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        /* gdvirtual */ _fontGetGlyphList(fontRid: Rid, size: Vector2I): PackedInt32Array
        
        /** Removes all rendered glyph information from the cache entry. */
        /* gdvirtual */ _fontClearGlyphs(fontRid: Rid, size: Vector2I): void
        
        /** Removes specified rendered glyph information from the cache entry. */
        /* gdvirtual */ _fontRemoveGlyph(fontRid: Rid, size: Vector2I, glyph: int64): void
        
        /** Returns glyph advance (offset of the next glyph). */
        /* gdvirtual */ _fontGetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64): Vector2
        
        /** Sets glyph advance (offset of the next glyph). */
        /* gdvirtual */ _fontSetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64, advance: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        /* gdvirtual */ _fontGetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Sets glyph offset from the baseline. */
        /* gdvirtual */ _fontSetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64, offset: Vector2): void
        
        /** Returns size of the glyph. */
        /* gdvirtual */ _fontGetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Sets size of the glyph. */
        /* gdvirtual */ _fontSetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64, glSize: Vector2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        /* gdvirtual */ _fontGetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64): Rect2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        /* gdvirtual */ _fontSetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64, uVRect: Rect2): void
        
        /** Returns index of the cache texture containing the glyph. */
        /* gdvirtual */ _fontGetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64): int64
        
        /** Sets index of the cache texture containing the glyph. */
        /* gdvirtual */ _fontSetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64, textureIdx: int64): void
        
        /** Returns resource ID of the cache texture containing the glyph. */
        /* gdvirtual */ _fontGetGlyphTextureRid(fontRid: Rid, size: Vector2I, glyph: int64): Rid
        
        /** Returns size of the cache texture containing the glyph. */
        /* gdvirtual */ _fontGetGlyphTextureSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Returns outline contours of the glyph. */
        /* gdvirtual */ _fontGetGlyphContours(fontRid: Rid, size: int64, index: int64): GDictionary
        
        /** Returns list of the kerning overrides. */
        /* gdvirtual */ _fontGetKerningList(fontRid: Rid, size: int64): GArray<Vector2I>
        
        /** Removes all kerning overrides. */
        /* gdvirtual */ _fontClearKerningMap(fontRid: Rid, size: int64): void
        
        /** Removes kerning override for the pair of glyphs. */
        /* gdvirtual */ _fontRemoveKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): void
        
        /** Sets kerning for the pair of glyphs. */
        /* gdvirtual */ _fontSetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        /* gdvirtual */ _fontGetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): Vector2
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
        /* gdvirtual */ _fontGetGlyphIndex(fontRid: Rid, size: int64, char: int64, variationSelector: int64): int64
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. */
        /* gdvirtual */ _fontGetCharFromGlyphIndex(fontRid: Rid, size: int64, glyphIndex: int64): int64
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        /* gdvirtual */ _fontHasChar(fontRid: Rid, char: int64): boolean
        
        /** Returns a string containing all the characters available in the font. */
        /* gdvirtual */ _fontGetSupportedChars(fontRid: Rid): string
        
        /** Returns an array containing all glyph indices in the font. */
        /* gdvirtual */ _fontGetSupportedGlyphs(fontRid: Rid): PackedInt32Array
        
        /** Renders the range of characters to the font cache texture. */
        /* gdvirtual */ _fontRenderRange(fontRid: Rid, size: Vector2I, start: int64, end: int64): void
        
        /** Renders specified glyph to the font cache texture. */
        /* gdvirtual */ _fontRenderGlyph(fontRid: Rid, size: Vector2I, index: int64): void
        
        /** Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        /* gdvirtual */ _fontDrawGlyph(fontRid: Rid, canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color, oversampling: float64): void
        
        /** Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        /* gdvirtual */ _fontDrawGlyphOutline(fontRid: Rid, canvas: Rid, size: int64, outlineSize: int64, pos: Vector2, index: int64, color: Color, oversampling: float64): void
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        /* gdvirtual */ _fontIsLanguageSupported(fontRid: Rid, language: string): boolean
        
        /** Adds override for [method _font_is_language_supported]. */
        /* gdvirtual */ _fontSetLanguageSupportOverride(fontRid: Rid, language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        /* gdvirtual */ _fontGetLanguageSupportOverride(fontRid: Rid, language: string): boolean
        
        /** Remove language support override. */
        /* gdvirtual */ _fontRemoveLanguageSupportOverride(fontRid: Rid, language: string): void
        
        /** Returns list of language support overrides. */
        /* gdvirtual */ _fontGetLanguageSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** Returns `true`, if font supports given script (ISO 15924 code). */
        /* gdvirtual */ _fontIsScriptSupported(fontRid: Rid, script: string): boolean
        
        /** Adds override for [method _font_is_script_supported]. */
        /* gdvirtual */ _fontSetScriptSupportOverride(fontRid: Rid, script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        /* gdvirtual */ _fontGetScriptSupportOverride(fontRid: Rid, script: string): boolean
        
        /** Removes script support override. */
        /* gdvirtual */ _fontRemoveScriptSupportOverride(fontRid: Rid, script: string): void
        
        /** Returns list of script support overrides. */
        /* gdvirtual */ _fontGetScriptSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** Sets font OpenType feature set override. */
        /* gdvirtual */ _fontSetOpentypeFeatureOverrides(fontRid: Rid, overrides: GDictionary): void
        
        /** Returns font OpenType feature set override. */
        /* gdvirtual */ _fontGetOpentypeFeatureOverrides(fontRid: Rid): GDictionary
        
        /** Returns the dictionary of the supported OpenType features. */
        /* gdvirtual */ _fontSupportedFeatureList(fontRid: Rid): GDictionary
        
        /** Returns the dictionary of the supported OpenType variation coordinates. */
        /* gdvirtual */ _fontSupportedVariationList(fontRid: Rid): GDictionary
        
        /** Returns the font oversampling factor, shared by all fonts in the TextServer. */
        /* gdvirtual */ _fontGetGlobalOversampling(): float64
        
        /** Sets oversampling factor, shared by all font in the TextServer. */
        /* gdvirtual */ _fontSetGlobalOversampling(oversampling: float64): void
        
        /** Increases the reference count of the specified oversampling level. This method is called by [Viewport], and should not be used directly. */
        /* gdvirtual */ _referenceOversamplingLevel(oversampling: float64): void
        
        /** Decreases the reference count of the specified oversampling level, and frees the font cache for oversampling level when the reference count reaches zero. This method is called by [Viewport], and should not be used directly. */
        /* gdvirtual */ _unreferenceOversamplingLevel(oversampling: float64): void
        
        /** Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters). */
        /* gdvirtual */ _getHexCodeBoxSize(size: int64, index: int64): Vector2
        
        /** Draws box displaying character hexadecimal code. */
        /* gdvirtual */ _drawHexCodeBox(canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color): void
        
        /** Creates a new buffer for complex text layout, with the given [param direction] and [param orientation]. */
        /* gdvirtual */ _createShapedText(direction: TextServer.Direction, orientation: TextServer.Orientation): Rid
        
        /** Clears text buffer (removes text and inline objects). */
        /* gdvirtual */ _shapedTextClear(shaped: Rid): void
        
        /** Sets desired text direction. If set to [constant TextServer.DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale. */
        /* gdvirtual */ _shapedTextSetDirection(shaped: Rid, direction: TextServer.Direction): void
        
        /** Returns direction of the text. */
        /* gdvirtual */ _shapedTextGetDirection(shaped: Rid): TextServer.Direction
        
        /** Returns direction of the text, inferred by the BiDi algorithm. */
        /* gdvirtual */ _shapedTextGetInferredDirection(shaped: Rid): TextServer.Direction
        
        /** Overrides BiDi for the structured text. */
        /* gdvirtual */ _shapedTextSetBidiOverride(shaped: Rid, override: GArray): void
        
        /** Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        /* gdvirtual */ _shapedTextSetCustomPunctuation(shaped: Rid, punct: string): void
        
        /** Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        /* gdvirtual */ _shapedTextGetCustomPunctuation(shaped: Rid): string
        
        /** Sets ellipsis character used for text clipping. */
        /* gdvirtual */ _shapedTextSetCustomEllipsis(shaped: Rid, char: int64): void
        
        /** Returns ellipsis character used for text clipping. */
        /* gdvirtual */ _shapedTextGetCustomEllipsis(shaped: Rid): int64
        
        /** Sets desired text orientation. */
        /* gdvirtual */ _shapedTextSetOrientation(shaped: Rid, orientation: TextServer.Orientation): void
        
        /** Returns text orientation. */
        /* gdvirtual */ _shapedTextGetOrientation(shaped: Rid): TextServer.Orientation
        
        /** If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed. */
        /* gdvirtual */ _shapedTextSetPreserveInvalid(shaped: Rid, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters. */
        /* gdvirtual */ _shapedTextGetPreserveInvalid(shaped: Rid): boolean
        
        /** If set to `true` text buffer will display control characters. */
        /* gdvirtual */ _shapedTextSetPreserveControl(shaped: Rid, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display control characters. */
        /* gdvirtual */ _shapedTextGetPreserveControl(shaped: Rid): boolean
        
        /** Sets extra spacing added between glyphs or lines in pixels. */
        /* gdvirtual */ _shapedTextSetSpacing(shaped: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns extra spacing added between glyphs or lines in pixels. */
        /* gdvirtual */ _shapedTextGetSpacing(shaped: Rid, spacing: TextServer.SpacingType): int64
        
        /** Adds text span and font to draw it to the text buffer. */
        /* gdvirtual */ _shapedTextAddString(shaped: Rid, text: string, fonts: GArray<Rid>, size: int64, opentypeFeatures: GDictionary, language: string, meta: any): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        /* gdvirtual */ _shapedTextAddObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment, length: int64, baseline: float64): boolean
        
        /** Sets new size and alignment of embedded object. */
        /* gdvirtual */ _shapedTextResizeObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment, baseline: float64): boolean
        
        /** Returns the text buffer source text, including object replacement characters. */
        /* gdvirtual */ _shapedGetText(shaped: Rid): string
        
        /** Returns number of text spans added using [method _shaped_text_add_string] or [method _shaped_text_add_object]. */
        /* gdvirtual */ _shapedGetSpanCount(shaped: Rid): int64
        
        /** Returns text span metadata. */
        /* gdvirtual */ _shapedGetSpanMeta(shaped: Rid, index: int64): any
        
        /** Returns text embedded object key. */
        /* gdvirtual */ _shapedGetSpanEmbeddedObject(shaped: Rid, index: int64): any
        
        /** Returns the text span source text. */
        /* gdvirtual */ _shapedGetSpanText(shaped: Rid, index: int64): string
        
        /** Returns the text span embedded object key. */
        /* gdvirtual */ _shapedGetSpanObject(shaped: Rid, index: int64): any
        
        /** Changes text span font, font size, and OpenType features, without changing the text. */
        /* gdvirtual */ _shapedSetSpanUpdateFont(shaped: Rid, index: int64, fonts: GArray<Rid>, size: int64, opentypeFeatures: GDictionary): void
        
        /** Returns the number of uniform text runs in the buffer. */
        /* gdvirtual */ _shapedGetRunCount(shaped: Rid): int64
        
        /** Returns the source text of the [param index] text run (in visual order). */
        /* gdvirtual */ _shapedGetRunText(shaped: Rid, index: int64): string
        
        /** Returns the source text range of the [param index] text run (in visual order). */
        /* gdvirtual */ _shapedGetRunRange(shaped: Rid, index: int64): Vector2I
        
        /** Returns the font RID of the [param index] text run (in visual order). */
        /* gdvirtual */ _shapedGetRunFontRid(shaped: Rid, index: int64): Rid
        
        /** Returns the font size of the [param index] text run (in visual order). */
        /* gdvirtual */ _shapedGetRunFontSize(shaped: Rid, index: int64): int64
        
        /** Returns the language of the [param index] text run (in visual order). */
        /* gdvirtual */ _shapedGetRunLanguage(shaped: Rid, index: int64): string
        
        /** Returns the direction of the [param index] text run (in visual order). */
        /* gdvirtual */ _shapedGetRunDirection(shaped: Rid, index: int64): TextServer.Direction
        
        /** Returns the embedded object of the [param index] text run (in visual order). */
        /* gdvirtual */ _shapedGetRunObject(shaped: Rid, index: int64): any
        
        /** Returns text buffer for the substring of the text in the [param shaped] text buffer (including inline objects). */
        /* gdvirtual */ _shapedTextSubstr(shaped: Rid, start: int64, length: int64): Rid
        
        /** Returns the parent buffer from which the substring originates. */
        /* gdvirtual */ _shapedTextGetParent(shaped: Rid): Rid
        
        /** Adjusts text width to fit to specified width, returns new text width. */
        /* gdvirtual */ _shapedTextFitToWidth(shaped: Rid, width: float64, justificationFlags: TextServer.JustificationFlag): float64
        
        /** Aligns shaped text to the given tab-stops. */
        /* gdvirtual */ _shapedTextTabAlign(shaped: Rid, tabStops: PackedFloat32Array | float32[]): float64
        
        /** Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully. */
        /* gdvirtual */ _shapedTextShape(shaped: Rid): boolean
        
        /** Updates break points in the shaped text. This method is called by default implementation of text breaking functions. */
        /* gdvirtual */ _shapedTextUpdateBreaks(shaped: Rid): boolean
        
        /** Updates justification points in the shaped text. This method is called by default implementation of text justification functions. */
        /* gdvirtual */ _shapedTextUpdateJustificationOps(shaped: Rid): boolean
        
        /** Returns `true` if buffer is successfully shaped. */
        /* gdvirtual */ _shapedTextIsReady(shaped: Rid): boolean
        
        /** Returns an array of glyphs in the visual order. */
        /* gdvirtual */ _shapedTextGetGlyphs(shaped: Rid): int64
        
        /** Returns text glyphs in the logical order. */
        /* gdvirtual */ _shapedTextSortLogical(shaped: Rid): int64
        
        /** Returns number of glyphs in the buffer. */
        /* gdvirtual */ _shapedTextGetGlyphCount(shaped: Rid): int64
        
        /** Returns substring buffer character range in the parent buffer. */
        /* gdvirtual */ _shapedTextGetRange(shaped: Rid): Vector2I
        
        /** Breaks text to the lines and columns. Returns character ranges for each segment. */
        /* gdvirtual */ _shapedTextGetLineBreaksAdv(shaped: Rid, width: PackedFloat32Array | float32[], start: int64, once: boolean, breakFlags: TextServer.LineBreakFlag): PackedInt32Array
        
        /** Breaks text to the lines and returns character ranges for each line. */
        /* gdvirtual */ _shapedTextGetLineBreaks(shaped: Rid, width: float64, start: int64, breakFlags: TextServer.LineBreakFlag): PackedInt32Array
        
        /** Breaks text into words and returns array of character ranges. Use [param grapheme_flags] to set what characters are used for breaking. */
        /* gdvirtual */ _shapedTextGetWordBreaks(shaped: Rid, graphemeFlags: TextServer.GraphemeFlag, skipGraphemeFlags: TextServer.GraphemeFlag): PackedInt32Array
        
        /** Returns the position of the overrun trim. */
        /* gdvirtual */ _shapedTextGetTrimPos(shaped: Rid): int64
        
        /** Returns position of the ellipsis. */
        /* gdvirtual */ _shapedTextGetEllipsisPos(shaped: Rid): int64
        
        /** Returns number of glyphs in the ellipsis. */
        /* gdvirtual */ _shapedTextGetEllipsisGlyphCount(shaped: Rid): int64
        
        /** Returns array of the glyphs in the ellipsis. */
        /* gdvirtual */ _shapedTextGetEllipsisGlyphs(shaped: Rid): int64
        
        /** Trims text if it exceeds the given width. */
        /* gdvirtual */ _shapedTextOverrunTrimToWidth(shaped: Rid, width: float64, trimFlags: TextServer.TextOverrunFlag): void
        
        /** Returns array of inline objects. */
        /* gdvirtual */ _shapedTextGetObjects(shaped: Rid): GArray
        
        /** Returns bounding rectangle of the inline object. */
        /* gdvirtual */ _shapedTextGetObjectRect(shaped: Rid, key: any): Rect2
        
        /** Returns the character range of the inline object. */
        /* gdvirtual */ _shapedTextGetObjectRange(shaped: Rid, key: any): Vector2I
        
        /** Returns the glyph index of the inline object. */
        /* gdvirtual */ _shapedTextGetObjectGlyph(shaped: Rid, key: any): int64
        
        /** Returns size of the text. */
        /* gdvirtual */ _shapedTextGetSize(shaped: Rid): Vector2
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        /* gdvirtual */ _shapedTextGetAscent(shaped: Rid): float64
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        /* gdvirtual */ _shapedTextGetDescent(shaped: Rid): float64
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        /* gdvirtual */ _shapedTextGetWidth(shaped: Rid): float64
        
        /** Returns pixel offset of the underline below the baseline. */
        /* gdvirtual */ _shapedTextGetUnderlinePosition(shaped: Rid): float64
        
        /** Returns thickness of the underline. */
        /* gdvirtual */ _shapedTextGetUnderlineThickness(shaped: Rid): float64
        
        /** Returns dominant direction of in the range of text. */
        /* gdvirtual */ _shapedTextGetDominantDirectionInRange(shaped: Rid, start: int64, end: int64): int64
        
        /** Returns shapes of the carets corresponding to the character offset [param position] in the text. Returned caret shape is 1 pixel wide rectangle. */
        /* gdvirtual */ _shapedTextGetCarets(shaped: Rid, position: int64, caret: int64): void
        
        /** Returns selection rectangles for the specified character range. */
        /* gdvirtual */ _shapedTextGetSelection(shaped: Rid, start: int64, end: int64): PackedVector2Array
        
        /** Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found. */
        /* gdvirtual */ _shapedTextHitTestGrapheme(shaped: Rid, coord: float64): int64
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        /* gdvirtual */ _shapedTextHitTestPosition(shaped: Rid, coord: float64): int64
        
        /** Draw shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        /* gdvirtual */ _shapedTextDraw(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64, clipR: float64, color: Color, oversampling: float64): void
        
        /** Draw the outline of the shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        /* gdvirtual */ _shapedTextDrawOutline(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64, clipR: float64, outlineSize: int64, color: Color, oversampling: float64): void
        
        /** Returns composite character's bounds as offsets from the start of the line. */
        /* gdvirtual */ _shapedTextGetGraphemeBounds(shaped: Rid, pos: int64): Vector2
        
        /** Returns grapheme end position closest to the [param pos]. */
        /* gdvirtual */ _shapedTextNextGraphemePos(shaped: Rid, pos: int64): int64
        
        /** Returns grapheme start position closest to the [param pos]. */
        /* gdvirtual */ _shapedTextPrevGraphemePos(shaped: Rid, pos: int64): int64
        
        /** Returns array of the composite character boundaries. */
        /* gdvirtual */ _shapedTextGetCharacterBreaks(shaped: Rid): PackedInt32Array
        
        /** Returns composite character end position closest to the [param pos]. */
        /* gdvirtual */ _shapedTextNextCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Returns composite character start position closest to the [param pos]. */
        /* gdvirtual */ _shapedTextPrevCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Returns composite character position closest to the [param pos]. */
        /* gdvirtual */ _shapedTextClosestCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Converts a number from the Western Arabic (0..9) to the numeral systems used in [param language]. */
        /* gdvirtual */ _formatNumber(number: string, language: string): string
        
        /** Converts [param number] from the numeral systems used in [param language] to Western Arabic (0..9). */
        /* gdvirtual */ _parseNumber(number: string, language: string): string
        
        /** Returns percent sign used in the [param language]. */
        /* gdvirtual */ _percentSign(language: string): string
        
        /** Strips diacritics from the string. */
        /* gdvirtual */ _stripDiacritics(string_: string): string
        
        /** Returns `true` if [param string] is a valid identifier. */
        /* gdvirtual */ _isValidIdentifier(string_: string): boolean
        /* gdvirtual */ _isValidLetter(unicode: int64): boolean
        
        /** Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even. */
        /* gdvirtual */ _stringGetWordBreaks(string_: string, language: string, charsPerLine: int64): PackedInt32Array
        
        /** Returns array of the composite character boundaries. */
        /* gdvirtual */ _stringGetCharacterBreaks(string_: string, language: string): PackedInt32Array
        
        /** Returns index of the first string in [param dict] which is visually confusable with the [param string], or `-1` if none is found. */
        /* gdvirtual */ _isConfusable(string_: string, dict: PackedStringArray | string[]): int64
        
        /** Returns `true` if [param string] is likely to be an attempt at confusing the reader. */
        /* gdvirtual */ _spoofCheck(string_: string): boolean
        
        /** Returns the string converted to uppercase. */
        /* gdvirtual */ _stringToUpper(string_: string, language: string): string
        
        /** Returns the string converted to lowercase. */
        /* gdvirtual */ _stringToLower(string_: string, language: string): string
        
        /** Returns the string converted to title case. */
        /* gdvirtual */ _stringToTitle(string_: string, language: string): string
        
        /** Default implementation of the BiDi algorithm override function. */
        /* gdvirtual */ _parseStructuredText(parserType: TextServer.StructuredTextParser, args: GArray, text: string): GArray<Vector3I>
        
        /** This method is called before text server is unregistered. */
        /* gdvirtual */ _cleanup(): void
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextServerExtension;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextServerExtension;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTexture extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTexture extends __NameMapResource {
    }
    /** Base class for all texture types.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texture.html  
     */
    class Texture extends Resource {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTexture;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTexture;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTexture2D extends __RPCMapTexture {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTexture2D extends __NameMapTexture {
        _get_width: "_getWidth";
        _get_height: "_getHeight";
        _is_pixel_opaque: "_isPixelOpaque";
        _has_alpha: "_hasAlpha";
        _draw_rect: "_drawRect";
        _draw_rect_region: "_drawRectRegion";
        get_width: "getWidth";
        get_height: "getHeight";
        get_size: "getSize";
        has_alpha: "hasAlpha";
        draw_rect: "drawRect";
        draw_rect_region: "drawRectRegion";
        get_image: "getImage";
        create_placeholder: "createPlaceholder";
    }
    /** Texture for 2D and 3D.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texture2d.html  
     */
    class Texture2D extends Texture {
        constructor(identifier?: any)
        /** Called when the [Texture2D]'s width is queried. */
        /* gdvirtual */ _getWidth(): int64
        
        /** Called when the [Texture2D]'s height is queried. */
        /* gdvirtual */ _getHeight(): int64
        
        /** Called when a pixel's opaque state in the [Texture2D] is queried at the specified `(x, y)` position. */
        /* gdvirtual */ _isPixelOpaque(x: int64, y: int64): boolean
        
        /** Called when the presence of an alpha channel in the [Texture2D] is queried. */
        /* gdvirtual */ _hasAlpha(): boolean
        
        /** Called when the entire [Texture2D] is requested to be drawn over a [CanvasItem], with the top-left offset specified in [param pos]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw(toCanvasItem: Rid, pos: Vector2, modulate: Color, transpose: boolean): void
        
        /** Called when the [Texture2D] is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _drawRect(toCanvasItem: Rid, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        
        /** Called when a part of the [Texture2D] specified by [param src_rect]'s coordinates is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _drawRectRegion(toCanvasItem: Rid, rect: Rect2, srcRect: Rect2, modulate: Color, transpose: boolean, clipUV: boolean): void
        
        /** Returns the texture width in pixels. */
        getWidth(): int64
        
        /** Returns the texture height in pixels. */
        getHeight(): int64
        
        /** Returns the texture size in pixels. */
        getSize(): Vector2
        
        /** Returns `true` if this [Texture2D] has an alpha channel. */
        hasAlpha(): boolean
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API at the specified [param position]. */
        draw(canvasItem: Rid, position: Vector2, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */): void
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API. */
        drawRect(canvasItem: Rid, rect: Rect2, tile: boolean, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */): void
        
        /** Draws a part of the texture using a [CanvasItem] with the [RenderingServer] API. */
        drawRectRegion(canvasItem: Rid, rect: Rect2, srcRect: Rect2, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */, clipUV?: boolean /* = true */): void
        
        /** Returns an [Image] that is a copy of data from this [Texture2D] (a new [Image] is created each time). [Image]s can be accessed and manipulated directly.  
         *      
         *  **Note:** This will return `null` if this [Texture2D] is invalid.  
         *      
         *  **Note:** This will fetch the texture data from the GPU, which might cause performance problems when overused. Avoid calling [method get_image] every frame, especially on large textures.  
         */
        getImage(): null | Image
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture2D]). */
        createPlaceholder(): Resource
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTexture2D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTexture2D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTexture2DArray extends __RPCMapImageTextureLayered {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTexture2DArray extends __NameMapImageTextureLayered {
        create_placeholder: "createPlaceholder";
    }
    /** A single texture resource which consists of multiple, separate images. Each image has the same dimensions and number of mipmap levels.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texture2darray.html  
     */
    class Texture2DArray extends ImageTextureLayered {
        constructor(identifier?: any)
        /** Creates a placeholder version of this resource ([PlaceholderTexture2DArray]). */
        createPlaceholder(): Resource
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTexture2DArray;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTexture2DArray;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTexture2DArrayRD extends __RPCMapTextureLayeredRD {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTexture2DArrayRD extends __NameMapTextureLayeredRD {
    }
    /** Texture Array for 2D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texture2darrayrd.html  
     */
    class Texture2DArrayRD extends TextureLayeredRD {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTexture2DArrayRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTexture2DArrayRD;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTexture2Drd extends __RPCMapTexture2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTexture2Drd extends __NameMapTexture2D {
        texture_rd_rid: "textureRdRid";
    }
    class Texture2Drd extends Texture2D {
        constructor(identifier?: any)
        get textureRdRid(): Rid
        set textureRdRid(value: Rid)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTexture2Drd;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTexture2Drd;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTexture3D extends __RPCMapTexture {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTexture3D extends __NameMapTexture {
        _get_format: "_getFormat";
        _get_width: "_getWidth";
        _get_height: "_getHeight";
        _get_depth: "_getDepth";
        _has_mipmaps: "_hasMipmaps";
        _get_data: "_getData";
        get_format: "getFormat";
        get_width: "getWidth";
        get_height: "getHeight";
        get_depth: "getDepth";
        has_mipmaps: "hasMipmaps";
        get_data: "getData";
        create_placeholder: "createPlaceholder";
    }
    /** Base class for 3-dimensional textures.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texture3d.html  
     */
    class Texture3D extends Texture {
        constructor(identifier?: any)
        /** Called when the [Texture3D]'s format is queried. */
        /* gdvirtual */ _getFormat(): Image.Format
        
        /** Called when the [Texture3D]'s width is queried. */
        /* gdvirtual */ _getWidth(): int64
        
        /** Called when the [Texture3D]'s height is queried. */
        /* gdvirtual */ _getHeight(): int64
        
        /** Called when the [Texture3D]'s depth is queried. */
        /* gdvirtual */ _getDepth(): int64
        
        /** Called when the presence of mipmaps in the [Texture3D] is queried. */
        /* gdvirtual */ _hasMipmaps(): boolean
        
        /** Called when the [Texture3D]'s data is queried. */
        /* gdvirtual */ _getData(): GArray<Image>
        
        /** Returns the current format being used by this texture. */
        getFormat(): Image.Format
        
        /** Returns the [Texture3D]'s width in pixels. Width is typically represented by the X axis. */
        getWidth(): int64
        
        /** Returns the [Texture3D]'s height in pixels. Width is typically represented by the Y axis. */
        getHeight(): int64
        
        /** Returns the [Texture3D]'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [Texture2D]). */
        getDepth(): int64
        
        /** Returns `true` if the [Texture3D] has generated mipmaps. */
        hasMipmaps(): boolean
        
        /** Returns the [Texture3D]'s data as an array of [Image]s. Each [Image] represents a  *slice*  of the [Texture3D], with different slices mapping to different depth (Z axis) levels. */
        getData(): GArray<Image>
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture3D]). */
        createPlaceholder(): Resource
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTexture3D;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTexture3D;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTexture3Drd extends __RPCMapTexture3D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTexture3Drd extends __NameMapTexture3D {
        texture_rd_rid: "textureRdRid";
    }
    class Texture3Drd extends Texture3D {
        constructor(identifier?: any)
        get textureRdRid(): Rid
        set textureRdRid(value: Rid)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTexture3Drd;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTexture3Drd;
    }
    namespace TextureButton {
        enum StretchMode {
            StretchScale = 0,
            StretchTile = 1,
            StretchKeep = 2,
            StretchKeepCentered = 3,
            StretchKeepAspect = 4,
            StretchKeepAspectCentered = 5,
            StretchKeepAspectCovered = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextureButton extends __RPCMapBaseButton {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextureButton extends __NameMapBaseButton {
        texture_normal: "textureNormal";
        texture_pressed: "texturePressed";
        texture_hover: "textureHover";
        texture_disabled: "textureDisabled";
        texture_focused: "textureFocused";
        texture_click_mask: "textureClickMask";
        ignore_texture_size: "ignoreTextureSize";
        stretch_mode: "stretchMode";
        flip_h: "flipH";
        flip_v: "flipV";
    }
    /** Texture-based button. Supports Pressed, Hover, Disabled and Focused states.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texturebutton.html  
     */
    class TextureButton<Map extends NodePathMap = any> extends BaseButton<Map> {
        constructor(identifier?: any)
        /** Texture to display by default, when the node is **not** in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [member texture_focused] drawn on top. */
        get textureNormal(): null | Texture2D
        set textureNormal(value: null | Texture2D)
        
        /** Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the [member BaseButton.shortcut] key. If not assigned, the [TextureButton] displays [member texture_hover] instead when pressed. */
        get texturePressed(): null | Texture2D
        set texturePressed(value: null | Texture2D)
        
        /** Texture to display when the mouse hovers over the node. If not assigned, the [TextureButton] displays [member texture_normal] instead when hovered over. */
        get textureHover(): null | Texture2D
        set textureHover(value: null | Texture2D)
        
        /** Texture to display when the node is disabled. See [member BaseButton.disabled]. If not assigned, the [TextureButton] displays [member texture_normal] instead. */
        get textureDisabled(): null | Texture2D
        set textureDisabled(value: null | Texture2D)
        
        /** Texture to  *overlay on the base texture*  when the node has mouse or keyboard focus. Because [member texture_focused] is displayed on top of the base texture, a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons. */
        get textureFocused(): null | Texture2D
        set textureFocused(value: null | Texture2D)
        
        /** Pure black and white [BitMap] image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes. */
        get textureClickMask(): null | Bitmap
        set textureClickMask(value: null | Bitmap)
        
        /** If `true`, the size of the texture won't be considered for minimum size calculation, so the [TextureButton] can be shrunk down past the texture size. */
        get ignoreTextureSize(): boolean
        set ignoreTextureSize(value: boolean)
        
        /** Controls the texture's behavior when you resize the node's bounding rectangle. See the [enum StretchMode] constants for available options. */
        get stretchMode(): int64
        set stretchMode(value: int64)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextureButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextureButton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextureCubemapArrayRD extends __RPCMapTextureLayeredRD {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextureCubemapArrayRD extends __NameMapTextureLayeredRD {
    }
    /** Texture Array for Cubemaps that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texturecubemaparrayrd.html  
     */
    class TextureCubemapArrayRD extends TextureLayeredRD {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextureCubemapArrayRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextureCubemapArrayRD;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextureCubemapRD extends __RPCMapTextureLayeredRD {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextureCubemapRD extends __NameMapTextureLayeredRD {
    }
    /** Texture for Cubemap that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texturecubemaprd.html  
     */
    class TextureCubemapRD extends TextureLayeredRD {
        constructor(identifier?: any)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextureCubemapRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextureCubemapRD;
    }
    namespace TextureLayered {
        enum LayeredType {
            LayeredType2DArray = 0,
            LayeredTypeCubemap = 1,
            LayeredTypeCubemapArray = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextureLayered extends __RPCMapTexture {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextureLayered extends __NameMapTexture {
        _get_format: "_getFormat";
        _get_layered_type: "_getLayeredType";
        _get_width: "_getWidth";
        _get_height: "_getHeight";
        _get_layers: "_getLayers";
        _has_mipmaps: "_hasMipmaps";
        _get_layer_data: "_getLayerData";
        get_format: "getFormat";
        get_layered_type: "getLayeredType";
        get_width: "getWidth";
        get_height: "getHeight";
        get_layers: "getLayers";
        has_mipmaps: "hasMipmaps";
        get_layer_data: "getLayerData";
    }
    /** Base class for texture types which contain the data of multiple [Image]s. Each image is of the same size and format.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texturelayered.html  
     */
    class TextureLayered extends Texture {
        constructor(identifier?: any)
        /** Called when the [TextureLayered]'s format is queried. */
        /* gdvirtual */ _getFormat(): Image.Format
        
        /** Called when the layers' type in the [TextureLayered] is queried. */
        /* gdvirtual */ _getLayeredType(): int64
        
        /** Called when the [TextureLayered]'s width queried. */
        /* gdvirtual */ _getWidth(): int64
        
        /** Called when the [TextureLayered]'s height is queried. */
        /* gdvirtual */ _getHeight(): int64
        
        /** Called when the number of layers in the [TextureLayered] is queried. */
        /* gdvirtual */ _getLayers(): int64
        
        /** Called when the presence of mipmaps in the [TextureLayered] is queried. */
        /* gdvirtual */ _hasMipmaps(): boolean
        
        /** Called when the data for a layer in the [TextureLayered] is queried. */
        /* gdvirtual */ _getLayerData(layerIndex: int64): null | Image
        
        /** Returns the current format being used by this texture. */
        getFormat(): Image.Format
        
        /** Returns the [TextureLayered]'s type. The type determines how the data is accessed, with cubemaps having special types. */
        getLayeredType(): TextureLayered.LayeredType
        
        /** Returns the width of the texture in pixels. Width is typically represented by the X axis. */
        getWidth(): int64
        
        /** Returns the height of the texture in pixels. Height is typically represented by the Y axis. */
        getHeight(): int64
        
        /** Returns the number of referenced [Image]s. */
        getLayers(): int64
        
        /** Returns `true` if the layers have generated mipmaps. */
        hasMipmaps(): boolean
        
        /** Returns an [Image] resource with the data from specified [param layer]. */
        getLayerData(layer: int64): null | Image
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextureLayered;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextureLayered;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextureLayeredRD extends __RPCMapTextureLayered {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextureLayeredRD extends __NameMapTextureLayered {
        texture_rd_rid: "textureRdRid";
    }
    /** Abstract base class for layered texture RD types.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texturelayeredrd.html  
     */
    class TextureLayeredRD extends TextureLayered {
        constructor(identifier?: any)
        /** The RID of the texture object created on the [RenderingDevice]. */
        get textureRdRid(): Rid
        set textureRdRid(value: Rid)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextureLayeredRD;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextureLayeredRD;
    }
    namespace TextureProgressBar {
        enum FillMode {
            FillLeftToRight = 0,
            FillRightToLeft = 1,
            FillTopToBottom = 2,
            FillBottomToTop = 3,
            FillClockwise = 4,
            FillCounterClockwise = 5,
            FillBilinearLeftAndRight = 6,
            FillBilinearTopAndBottom = 7,
            FillClockwiseAndCounterClockwise = 8,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextureProgressBar extends __RPCMapRange {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextureProgressBar extends __NameMapRange {
        set_stretch_margin: "setStretchMargin";
        get_stretch_margin: "getStretchMargin";
        fill_mode: "fillMode";
        radial_initial_angle: "radialInitialAngle";
        radial_fill_degrees: "radialFillDegrees";
        radial_center_offset: "radialCenterOffset";
        nine_patch_stretch: "ninePatchStretch";
        stretch_margin_left: "stretchMarginLeft";
        stretch_margin_top: "stretchMarginTop";
        stretch_margin_right: "stretchMarginRight";
        stretch_margin_bottom: "stretchMarginBottom";
        texture_under: "textureUnder";
        texture_over: "textureOver";
        texture_progress: "textureProgress";
        texture_progress_offset: "textureProgressOffset";
        tint_under: "tintUnder";
        tint_over: "tintOver";
        tint_progress: "tintProgress";
    }
    /** Texture-based progress bar. Useful for loading screens and life or stamina bars.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_textureprogressbar.html  
     */
    class TextureProgressBar<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** Sets the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        setStretchMargin(margin: Side, value: int64): void
        
        /** Returns the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        getStretchMargin(margin: Side): int64
        
        /** The fill direction. See [enum FillMode] for possible values. */
        get fillMode(): int64
        set fillMode(value: int64)
        
        /** Starting angle for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE], [constant FILL_COUNTER_CLOCKWISE], or [constant FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `min_value`, the texture doesn't show up at all. When the `value` increases, the texture fills and tends towards [member radial_fill_degrees].  
         *      
         *  **Note:** [member radial_initial_angle] is wrapped between `0` and `360` degrees (inclusive).  
         */
        get radialInitialAngle(): float64
        set radialInitialAngle(value: float64)
        
        /** Upper limit for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE], [constant FILL_COUNTER_CLOCKWISE], or [constant FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `max_value`, the texture fills up to this angle.  
         *  See [member Range.value], [member Range.max_value].  
         */
        get radialFillDegrees(): float64
        set radialFillDegrees(value: float64)
        
        /** Offsets [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE], [constant FILL_COUNTER_CLOCKWISE], or [constant FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE].  
         *      
         *  **Note:** The effective radial center always stays within the [member texture_progress] bounds. If you need to move it outside the texture's bounds, modify the [member texture_progress] to contain additional empty space where needed.  
         */
        get radialCenterOffset(): Vector2
        set radialCenterOffset(value: Vector2)
        
        /** If `true`, Godot treats the bar's textures like in [NinePatchRect]. Use the `stretch_margin_*` properties like [member stretch_margin_bottom] to set up the nine patch's 3×3 grid. When using a radial [member fill_mode], this setting will only enable stretching for [member texture_progress], while [member texture_under] and [member texture_over] will be treated like in [NinePatchRect]. */
        get ninePatchStretch(): boolean
        set ninePatchStretch(value: boolean)
        
        /** The width of the 9-patch's left column. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginLeft(): int64
        set stretchMarginLeft(value: int64)
        
        /** The height of the 9-patch's top row. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginTop(): int64
        set stretchMarginTop(value: int64)
        
        /** The width of the 9-patch's right column. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginRight(): int64
        set stretchMarginRight(value: int64)
        
        /** The height of the 9-patch's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginBottom(): int64
        set stretchMarginBottom(value: int64)
        
        /** [Texture2D] that draws under the progress bar. The bar's background. */
        get textureUnder(): null | Texture2D
        set textureUnder(value: null | Texture2D)
        
        /** [Texture2D] that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of [member texture_progress]. */
        get textureOver(): null | Texture2D
        set textureOver(value: null | Texture2D)
        
        /** [Texture2D] that clips based on the node's `value` and [member fill_mode]. As `value` increased, the texture fills up. It shows entirely when `value` reaches `max_value`. It doesn't show at all if `value` is equal to `min_value`.  
         *  The `value` property comes from [Range]. See [member Range.value], [member Range.min_value], [member Range.max_value].  
         */
        get textureProgress(): null | Texture2D
        set textureProgress(value: null | Texture2D)
        
        /** The offset of [member texture_progress]. Useful for [member texture_over] and [member texture_under] with fancy borders, to avoid transparent margins in your progress texture. */
        get textureProgressOffset(): Vector2
        set textureProgressOffset(value: Vector2)
        
        /** Multiplies the color of the bar's [member texture_under] texture. */
        get tintUnder(): Color
        set tintUnder(value: Color)
        
        /** Multiplies the color of the bar's [member texture_over] texture. The effect is similar to [member CanvasItem.modulate], except it only affects this specific texture instead of the entire node. */
        get tintOver(): Color
        set tintOver(value: Color)
        
        /** Multiplies the color of the bar's [member texture_progress] texture. */
        get tintProgress(): Color
        set tintProgress(value: Color)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextureProgressBar;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextureProgressBar;
    }
    namespace TextureRect {
        enum ExpandMode {
            ExpandKeepSize = 0,
            ExpandIgnoreSize = 1,
            ExpandFitWidth = 2,
            ExpandFitWidthProportional = 3,
            ExpandFitHeight = 4,
            ExpandFitHeightProportional = 5,
        }
        enum StretchMode {
            StretchScale = 0,
            StretchTile = 1,
            StretchKeep = 2,
            StretchKeepCentered = 3,
            StretchKeepAspect = 4,
            StretchKeepAspectCentered = 5,
            StretchKeepAspectCovered = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTextureRect extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTextureRect extends __NameMapControl {
        expand_mode: "expandMode";
        stretch_mode: "stretchMode";
        flip_h: "flipH";
        flip_v: "flipV";
    }
    /** A control that displays a texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_texturerect.html  
     */
    class TextureRect<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** The node's [Texture2D] resource. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Defines how minimum size is determined based on the texture's size. */
        get expandMode(): int64
        set expandMode(value: int64)
        
        /** Controls the texture's behavior when resizing the node's bounding rectangle. */
        get stretchMode(): int64
        set stretchMode(value: int64)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTextureRect;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTextureRect;
    }
    namespace Theme {
        enum DataType {
            DataTypeColor = 0,
            DataTypeConstant = 1,
            DataTypeFont = 2,
            DataTypeFontSize = 3,
            DataTypeIcon = 4,
            DataTypeStylebox = 5,
            DataTypeMax = 6,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTheme extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTheme extends __NameMapResource {
        set_icon: "setIcon";
        get_icon: "getIcon";
        has_icon: "hasIcon";
        rename_icon: "renameIcon";
        clear_icon: "clearIcon";
        get_icon_list: "getIconList";
        get_icon_type_list: "getIconTypeList";
        set_stylebox: "setStylebox";
        get_stylebox: "getStylebox";
        has_stylebox: "hasStylebox";
        rename_stylebox: "renameStylebox";
        clear_stylebox: "clearStylebox";
        get_stylebox_list: "getStyleboxList";
        get_stylebox_type_list: "getStyleboxTypeList";
        set_font: "setFont";
        get_font: "getFont";
        has_font: "hasFont";
        rename_font: "renameFont";
        clear_font: "clearFont";
        get_font_list: "getFontList";
        get_font_type_list: "getFontTypeList";
        set_font_size: "setFontSize";
        get_font_size: "getFontSize";
        has_font_size: "hasFontSize";
        rename_font_size: "renameFontSize";
        clear_font_size: "clearFontSize";
        get_font_size_list: "getFontSizeList";
        get_font_size_type_list: "getFontSizeTypeList";
        set_color: "setColor";
        get_color: "getColor";
        has_color: "hasColor";
        rename_color: "renameColor";
        clear_color: "clearColor";
        get_color_list: "getColorList";
        get_color_type_list: "getColorTypeList";
        set_constant: "setConstant";
        get_constant: "getConstant";
        has_constant: "hasConstant";
        rename_constant: "renameConstant";
        clear_constant: "clearConstant";
        get_constant_list: "getConstantList";
        get_constant_type_list: "getConstantTypeList";
        has_default_base_scale: "hasDefaultBaseScale";
        has_default_font: "hasDefaultFont";
        has_default_font_size: "hasDefaultFontSize";
        set_theme_item: "setThemeItem";
        get_theme_item: "getThemeItem";
        has_theme_item: "hasThemeItem";
        rename_theme_item: "renameThemeItem";
        clear_theme_item: "clearThemeItem";
        get_theme_item_list: "getThemeItemList";
        get_theme_item_type_list: "getThemeItemTypeList";
        set_type_variation: "setTypeVariation";
        is_type_variation: "isTypeVariation";
        clear_type_variation: "clearTypeVariation";
        get_type_variation_base: "getTypeVariationBase";
        get_type_variation_list: "getTypeVariationList";
        add_type: "addType";
        remove_type: "removeType";
        rename_type: "renameType";
        get_type_list: "getTypeList";
        merge_with: "mergeWith";
        default_base_scale: "defaultBaseScale";
        default_font: "defaultFont";
        default_font_size: "defaultFontSize";
    }
    /** A resource used for styling/skinning [Control]s and [Window]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_theme.html  
     */
    class Theme extends Resource {
        constructor(identifier?: any)
        /** Creates or changes the value of the icon property defined by [param name] and [param theme_type]. Use [method clear_icon] to remove the property. */
        setIcon(name: StringName, themeType: StringName, texture: Texture2D): void
        
        /** Returns the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback icon value if the property doesn't exist (see [member ThemeDB.fallback_icon]). Use [method has_icon] to check for existence.  
         */
        getIcon(name: StringName, themeType: StringName): null | Texture2D
        
        /** Returns `true` if the icon property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_icon] to define it.  
         */
        hasIcon(name: StringName, themeType: StringName): boolean
        
        /** Renames the icon property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_icon] to check for existence, and [method clear_icon] to remove the existing property.  
         */
        renameIcon(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_icon] to check for existence.  
         */
        clearIcon(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for icon properties defined with [param theme_type]. Use [method get_icon_type_list] to get a list of possible theme type names. */
        getIconList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for icon properties. Use [method get_type_list] to get a list of all unique theme types. */
        getIconTypeList(): PackedStringArray
        
        /** Creates or changes the value of the [StyleBox] property defined by [param name] and [param theme_type]. Use [method clear_stylebox] to remove the property. */
        setStylebox(name: StringName, themeType: StringName, texture: StyleBox): void
        
        /** Returns the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback stylebox value if the property doesn't exist (see [member ThemeDB.fallback_stylebox]). Use [method has_stylebox] to check for existence.  
         */
        getStylebox(name: StringName, themeType: StringName): null | StyleBox
        
        /** Returns `true` if the [StyleBox] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_stylebox] to define it.  
         */
        hasStylebox(name: StringName, themeType: StringName): boolean
        
        /** Renames the [StyleBox] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_stylebox] to check for existence, and [method clear_stylebox] to remove the existing property.  
         */
        renameStylebox(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_stylebox] to check for existence.  
         */
        clearStylebox(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for [StyleBox] properties defined with [param theme_type]. Use [method get_stylebox_type_list] to get a list of possible theme type names. */
        getStyleboxList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [StyleBox] properties. Use [method get_type_list] to get a list of all unique theme types. */
        getStyleboxTypeList(): PackedStringArray
        
        /** Creates or changes the value of the [Font] property defined by [param name] and [param theme_type]. Use [method clear_font] to remove the property. */
        setFont(name: StringName, themeType: StringName, font: Font): void
        
        /** Returns the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font if the property doesn't exist and the default theme font is set up (see [member default_font]). Use [method has_font] to check for existence of the property and [method has_default_font] to check for existence of the default theme font.  
         *  Returns the engine fallback font value, if neither exist (see [member ThemeDB.fallback_font]).  
         */
        getFont(name: StringName, themeType: StringName): null | Font
        
        /** Returns `true` if the [Font] property defined by [param name] and [param theme_type] exists, or if the default theme font is set up (see [method has_default_font]).  
         *  Returns `false` if neither exist. Use [method set_font] to define the property.  
         */
        hasFont(name: StringName, themeType: StringName): boolean
        
        /** Renames the [Font] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font] to check for existence, and [method clear_font] to remove the existing property.  
         */
        renameFont(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font] to check for existence.  
         */
        clearFont(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for [Font] properties defined with [param theme_type]. Use [method get_font_type_list] to get a list of possible theme type names. */
        getFontList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Font] properties. Use [method get_type_list] to get a list of all unique theme types. */
        getFontTypeList(): PackedStringArray
        
        /** Creates or changes the value of the font size property defined by [param name] and [param theme_type]. Use [method clear_font_size] to remove the property. */
        setFontSize(name: StringName, themeType: StringName, fontSize: int64): void
        
        /** Returns the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see [member default_font_size]). Use [method has_font_size] to check for existence of the property and [method has_default_font_size] to check for existence of the default theme font.  
         *  Returns the engine fallback font size value, if neither exist (see [member ThemeDB.fallback_font_size]).  
         */
        getFontSize(name: StringName, themeType: StringName): int64
        
        /** Returns `true` if the font size property defined by [param name] and [param theme_type] exists, or if the default theme font size is set up (see [method has_default_font_size]).  
         *  Returns `false` if neither exist. Use [method set_font_size] to define the property.  
         */
        hasFontSize(name: StringName, themeType: StringName): boolean
        
        /** Renames the font size property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font_size] to check for existence, and [method clear_font_size] to remove the existing property.  
         */
        renameFontSize(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font_size] to check for existence.  
         */
        clearFontSize(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for font size properties defined with [param theme_type]. Use [method get_font_size_type_list] to get a list of possible theme type names. */
        getFontSizeList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for font size properties. Use [method get_type_list] to get a list of all unique theme types. */
        getFontSizeTypeList(): PackedStringArray
        
        /** Creates or changes the value of the [Color] property defined by [param name] and [param theme_type]. Use [method clear_color] to remove the property. */
        setColor(name: StringName, themeType: StringName, color: Color): void
        
        /** Returns the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default color value if the property doesn't exist. Use [method has_color] to check for existence.  
         */
        getColor(name: StringName, themeType: StringName): Color
        
        /** Returns `true` if the [Color] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_color] to define it.  
         */
        hasColor(name: StringName, themeType: StringName): boolean
        
        /** Renames the [Color] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_color] to check for existence, and [method clear_color] to remove the existing property.  
         */
        renameColor(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_color] to check for existence.  
         */
        clearColor(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for [Color] properties defined with [param theme_type]. Use [method get_color_type_list] to get a list of possible theme type names. */
        getColorList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Color] properties. Use [method get_type_list] to get a list of all unique theme types. */
        getColorTypeList(): PackedStringArray
        
        /** Creates or changes the value of the constant property defined by [param name] and [param theme_type]. Use [method clear_constant] to remove the property. */
        setConstant(name: StringName, themeType: StringName, constant: int64): void
        
        /** Returns the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Returns `0` if the property doesn't exist. Use [method has_constant] to check for existence.  
         */
        getConstant(name: StringName, themeType: StringName): int64
        
        /** Returns `true` if the constant property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_constant] to define it.  
         */
        hasConstant(name: StringName, themeType: StringName): boolean
        
        /** Renames the constant property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_constant] to check for existence, and [method clear_constant] to remove the existing property.  
         */
        renameConstant(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_constant] to check for existence.  
         */
        clearConstant(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for constant properties defined with [param theme_type]. Use [method get_constant_type_list] to get a list of possible theme type names. */
        getConstantList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for constant properties. Use [method get_type_list] to get a list of all unique theme types. */
        getConstantTypeList(): PackedStringArray
        
        /** Returns `true` if [member default_base_scale] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.  
         */
        hasDefaultBaseScale(): boolean
        
        /** Returns `true` if [member default_font] has a valid value.  
         *  Returns `false` if it doesn't.  
         */
        hasDefaultFont(): boolean
        
        /** Returns `true` if [member default_font_size] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.  
         */
        hasDefaultFontSize(): boolean
        
        /** Creates or changes the value of the theme property of [param data_type] defined by [param name] and [param theme_type]. Use [method clear_theme_item] to remove the property.  
         *  Fails if the [param value] type is not accepted by [param data_type].  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        setThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName, value: any): void
        
        /** Returns the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback value if the property doesn't exist (see [ThemeDB]). Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        getThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): any
        
        /** Returns `true` if the theme property of [param data_type] defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_theme_item] to define it.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        hasThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): boolean
        
        /** Renames the theme property of [param data_type] defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_theme_item] to check for existence, and [method clear_theme_item] to remove the existing property.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        renameThemeItem(dataType: Theme.DataType, oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        clearThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): void
        
        /** Returns a list of names for properties of [param data_type] defined with [param theme_type]. Use [method get_theme_item_type_list] to get a list of possible theme type names.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        getThemeItemList(dataType: Theme.DataType, themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [param data_type] properties. Use [method get_type_list] to get a list of all unique theme types.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        getThemeItemTypeList(dataType: Theme.DataType): PackedStringArray
        
        /** Marks [param theme_type] as a variation of [param base_type].  
         *  This adds [param theme_type] as a suggested option for [member Control.theme_type_variation] on a [Control] that is of the [param base_type] class.  
         *  Variations can also be nested, i.e. [param base_type] can be another variation. If a chain of variations ends with a [param base_type] matching the class of the [Control], the whole chain is going to be suggested as options.  
         *      
         *  **Note:** Suggestions only show up if this theme resource is set as the project default theme. See [member ProjectSettings.gui/theme/custom].  
         */
        setTypeVariation(themeType: StringName, baseType: StringName): void
        
        /** Returns `true` if [param theme_type] is marked as a variation of [param base_type]. */
        isTypeVariation(themeType: StringName, baseType: StringName): boolean
        
        /** Unmarks [param theme_type] as being a variation of another theme type. See [method set_type_variation]. */
        clearTypeVariation(themeType: StringName): void
        
        /** Returns the name of the base theme type if [param theme_type] is a valid variation type. Returns an empty string otherwise. */
        getTypeVariationBase(themeType: StringName): StringName
        
        /** Returns a list of all type variations for the given [param base_type]. */
        getTypeVariationList(baseType: StringName): PackedStringArray
        
        /** Adds an empty theme type for every valid data type.  
         *      
         *  **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.  
         */
        addType(themeType: StringName): void
        
        /** Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base. */
        removeType(themeType: StringName): void
        
        /** Renames the theme type [param old_theme_type] to [param theme_type], if the old type exists and the new one doesn't exist.  
         *      
         *  **Note:** Renaming a theme type to an empty name or a variation to a type associated with a built-in class removes type variation connections in a way that cannot be undone by reversing the rename alone.  
         */
        renameType(oldThemeType: StringName, themeType: StringName): void
        
        /** Returns a list of all unique theme type names. Use the appropriate `get_*_type_list` method to get a list of unique theme types for a single data type. */
        getTypeList(): PackedStringArray
        
        /** Adds missing and overrides existing definitions with values from the [param other] theme resource.  
         *      
         *  **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.  
         */
        mergeWith(other: Theme): void
        
        /** Removes all the theme properties defined on the theme resource. */
        clear(): void
        
        /** The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see [member ThemeDB.fallback_base_scale]).  
         *  Use [method has_default_base_scale] to check if this value is valid.  
         */
        get defaultBaseScale(): float64
        set defaultBaseScale(value: float64)
        
        /** The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font]).  
         *  Use [method has_default_font] to check if this value is valid.  
         */
        get defaultFont(): null | Font
        set defaultFont(value: null | Font)
        
        /** The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font_size]).  
         *  Values below `1` are invalid and can be used to unset the property. Use [method has_default_font_size] to check if this value is valid.  
         */
        get defaultFontSize(): int64
        set defaultFontSize(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTheme;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTheme;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileData extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileData extends __NameMapGObject {
        set_occluder_polygons_count: "setOccluderPolygonsCount";
        get_occluder_polygons_count: "getOccluderPolygonsCount";
        add_occluder_polygon: "addOccluderPolygon";
        remove_occluder_polygon: "removeOccluderPolygon";
        set_occluder_polygon: "setOccluderPolygon";
        get_occluder_polygon: "getOccluderPolygon";
        set_occluder: "setOccluder";
        get_occluder: "getOccluder";
        set_constant_linear_velocity: "setConstantLinearVelocity";
        get_constant_linear_velocity: "getConstantLinearVelocity";
        set_constant_angular_velocity: "setConstantAngularVelocity";
        get_constant_angular_velocity: "getConstantAngularVelocity";
        set_collision_polygons_count: "setCollisionPolygonsCount";
        get_collision_polygons_count: "getCollisionPolygonsCount";
        add_collision_polygon: "addCollisionPolygon";
        remove_collision_polygon: "removeCollisionPolygon";
        set_collision_polygon_points: "setCollisionPolygonPoints";
        get_collision_polygon_points: "getCollisionPolygonPoints";
        set_collision_polygon_one_way: "setCollisionPolygonOneWay";
        is_collision_polygon_one_way: "isCollisionPolygonOneWay";
        set_collision_polygon_one_way_margin: "setCollisionPolygonOneWayMargin";
        get_collision_polygon_one_way_margin: "getCollisionPolygonOneWayMargin";
        set_terrain_peering_bit: "setTerrainPeeringBit";
        get_terrain_peering_bit: "getTerrainPeeringBit";
        is_valid_terrain_peering_bit: "isValidTerrainPeeringBit";
        set_navigation_polygon: "setNavigationPolygon";
        get_navigation_polygon: "getNavigationPolygon";
        set_custom_data: "setCustomData";
        get_custom_data: "getCustomData";
        has_custom_data: "hasCustomData";
        set_custom_data_by_layer_id: "setCustomDataByLayerId";
        get_custom_data_by_layer_id: "getCustomDataByLayerId";
        flip_h: "flipH";
        flip_v: "flipV";
        texture_origin: "textureOrigin";
        z_index: "zIndex";
        y_sort_origin: "ySortOrigin";
        terrain_set: "terrainSet";
    }
    /** Settings for a single tile in a [TileSet].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tiledata.html  
     */
    class TileData extends GObject {
        constructor(identifier?: any)
        /** Sets the occluder polygon count in the TileSet occlusion layer with index [param layer_id]. */
        setOccluderPolygonsCount(layerId: int64, polygonsCount: int64): void
        
        /** Returns the number of occluder polygons of the tile in the TileSet occlusion layer with index [param layer_id]. */
        getOccluderPolygonsCount(layerId: int64): int64
        
        /** Adds an occlusion polygon to the tile on the TileSet occlusion layer with index [param layer_id]. */
        addOccluderPolygon(layerId: int64): void
        
        /** Removes the polygon at index [param polygon_index] for TileSet occlusion layer with index [param layer_id]. */
        removeOccluderPolygon(layerId: int64, polygonIndex: int64): void
        
        /** Sets the occluder for polygon with index [param polygon_index] in the TileSet occlusion layer with index [param layer_id]. */
        setOccluderPolygon(layerId: int64, polygonIndex: int64, polygon: OccluderPolygon2D): void
        
        /** Returns the occluder polygon at index [param polygon_index] from the TileSet occlusion layer with index [param layer_id].  
         *  The [param flip_h], [param flip_v], and [param transpose] parameters can be `true` to transform the returned polygon.  
         */
        getOccluderPolygon(layerId: int64, polygonIndex: int64, flipH?: boolean /* = false */, flipV?: boolean /* = false */, transpose?: boolean /* = false */): null | OccluderPolygon2D
        
        /** Sets the occluder for the TileSet occlusion layer with index [param layer_id]. */
        setOccluder(layerId: int64, occluderPolygon: OccluderPolygon2D): void
        
        /** Returns the occluder polygon of the tile for the TileSet occlusion layer with index [param layer_id].  
         *  [param flip_h], [param flip_v], and [param transpose] allow transforming the returned polygon.  
         */
        getOccluder(layerId: int64, flipH?: boolean /* = false */, flipV?: boolean /* = false */, transpose?: boolean /* = false */): null | OccluderPolygon2D
        
        /** Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts. */
        setConstantLinearVelocity(layerId: int64, velocity: Vector2): void
        
        /** Returns the constant linear velocity applied to objects colliding with this tile. */
        getConstantLinearVelocity(layerId: int64): Vector2
        
        /** Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile. */
        setConstantAngularVelocity(layerId: int64, velocity: float64): void
        
        /** Returns the constant angular velocity applied to objects colliding with this tile. */
        getConstantAngularVelocity(layerId: int64): float64
        
        /** Sets the polygons count for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonsCount(layerId: int64, polygonsCount: int64): void
        
        /** Returns how many polygons the tile has for TileSet physics layer with index [param layer_id]. */
        getCollisionPolygonsCount(layerId: int64): int64
        
        /** Adds a collision polygon to the tile on the given TileSet physics layer. */
        addCollisionPolygon(layerId: int64): void
        
        /** Removes the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        removeCollisionPolygon(layerId: int64, polygonIndex: int64): void
        
        /** Sets the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonPoints(layerId: int64, polygonIndex: int64, polygon: PackedVector2Array | Vector2[]): void
        
        /** Returns the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        getCollisionPolygonPoints(layerId: int64, polygonIndex: int64): PackedVector2Array
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonOneWay(layerId: int64, polygonIndex: int64, oneWay: boolean): void
        
        /** Returns whether one-way collisions are enabled for the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        isCollisionPolygonOneWay(layerId: int64, polygonIndex: int64): boolean
        
        /** Sets the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonOneWayMargin(layerId: int64, polygonIndex: int64, oneWayMargin: float64): void
        
        /** Returns the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        getCollisionPolygonOneWayMargin(layerId: int64, polygonIndex: int64): float64
        
        /** Sets the tile's terrain bit for the given [param peering_bit] direction. To check that a direction is valid, use [method is_valid_terrain_peering_bit]. */
        setTerrainPeeringBit(peeringBit: TileSet.CellNeighbor, terrain: int64): void
        
        /** Returns the tile's terrain bit for the given [param peering_bit] direction. To check that a direction is valid, use [method is_valid_terrain_peering_bit]. */
        getTerrainPeeringBit(peeringBit: TileSet.CellNeighbor): int64
        
        /** Returns whether the given [param peering_bit] direction is valid for this tile. */
        isValidTerrainPeeringBit(peeringBit: TileSet.CellNeighbor): boolean
        
        /** Sets the navigation polygon for the TileSet navigation layer with index [param layer_id]. */
        setNavigationPolygon(layerId: int64, navigationPolygon: NavigationPolygon): void
        
        /** Returns the navigation polygon of the tile for the TileSet navigation layer with index [param layer_id].  
         *  [param flip_h], [param flip_v], and [param transpose] allow transforming the returned polygon.  
         */
        getNavigationPolygon(layerId: int64, flipH?: boolean /* = false */, flipV?: boolean /* = false */, transpose?: boolean /* = false */): null | NavigationPolygon
        
        /** Sets the tile's custom data value for the TileSet custom data layer with name [param layer_name]. */
        setCustomData(layerName: string, value: any): void
        
        /** Returns the custom data value for custom data layer named [param layer_name]. To check if a custom data layer exists, use [method has_custom_data]. */
        getCustomData(layerName: string): any
        
        /** Returns whether there exists a custom data layer named [param layer_name]. */
        hasCustomData(layerName: string): boolean
        
        /** Sets the tile's custom data value for the TileSet custom data layer with index [param layer_id]. */
        setCustomDataByLayerId(layerId: int64, value: any): void
        
        /** Returns the custom data value for custom data layer with index [param layer_id]. */
        getCustomDataByLayerId(layerId: int64): any
        
        /** If `true`, the tile will have its texture flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, the tile will have its texture flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
        
        /** If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
        get transpose(): boolean
        set transpose(value: boolean)
        
        /** Offsets the position of where the tile is drawn. */
        get textureOrigin(): Vector2I
        set textureOrigin(value: Vector2I)
        
        /** Color modulation of the tile. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The [Material] to use for this [TileData]. This can be a [CanvasItemMaterial] to use the default shader, or a [ShaderMaterial] to use a custom shader. */
        get material(): null | CanvasItemMaterial | ShaderMaterial
        set material(value: null | CanvasItemMaterial | ShaderMaterial)
        
        /** Ordering index of this tile, relative to [TileMapLayer]. */
        get zIndex(): int64
        set zIndex(value: int64)
        
        /** Vertical point of the tile used for determining y-sorted order. */
        get ySortOrigin(): int64
        set ySortOrigin(value: int64)
        
        /** ID of the terrain set that the tile uses. */
        get terrainSet(): int64
        set terrainSet(value: int64)
        
        /** ID of the terrain from the terrain set that the tile uses. */
        get terrain(): int64
        set terrain(value: int64)
        
        /** Relative probability of this tile being selected when drawing a pattern of random tiles. */
        get probability(): float64
        set probability(value: float64)
        
        /** Emitted when any of the properties are changed. */
        readonly changed: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileData;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileData;
    }
    namespace TileMap {
        enum VisibilityMode {
            VisibilityModeDefault = 0,
            VisibilityModeForceHide = 2,
            VisibilityModeForceShow = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileMap extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileMap extends __NameMapNode2D {
        _use_tile_data_runtime_update: "_useTileDataRuntimeUpdate";
        _tile_data_runtime_update: "_tileDataRuntimeUpdate";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        force_update: "forceUpdate";
        get_layers_count: "getLayersCount";
        add_layer: "addLayer";
        move_layer: "moveLayer";
        remove_layer: "removeLayer";
        set_layer_name: "setLayerName";
        get_layer_name: "getLayerName";
        set_layer_enabled: "setLayerEnabled";
        is_layer_enabled: "isLayerEnabled";
        set_layer_modulate: "setLayerModulate";
        get_layer_modulate: "getLayerModulate";
        set_layer_y_sort_enabled: "setLayerYSortEnabled";
        is_layer_y_sort_enabled: "isLayerYSortEnabled";
        set_layer_y_sort_origin: "setLayerYSortOrigin";
        get_layer_y_sort_origin: "getLayerYSortOrigin";
        set_layer_z_index: "setLayerZIndex";
        get_layer_z_index: "getLayerZIndex";
        set_layer_navigation_enabled: "setLayerNavigationEnabled";
        is_layer_navigation_enabled: "isLayerNavigationEnabled";
        set_layer_navigation_map: "setLayerNavigationMap";
        get_layer_navigation_map: "getLayerNavigationMap";
        set_cell: "setCell";
        erase_cell: "eraseCell";
        get_cell_source_id: "getCellSourceId";
        get_cell_atlas_coords: "getCellAtlasCoords";
        get_cell_alternative_tile: "getCellAlternativeTile";
        get_cell_tile_data: "getCellTileData";
        is_cell_flipped_h: "isCellFlippedH";
        is_cell_flipped_v: "isCellFlippedV";
        is_cell_transposed: "isCellTransposed";
        get_coords_for_body_rid: "getCoordsForBodyRid";
        get_layer_for_body_rid: "getLayerForBodyRid";
        get_pattern: "getPattern";
        map_pattern: "mapPattern";
        set_pattern: "setPattern";
        set_cells_terrain_connect: "setCellsTerrainConnect";
        set_cells_terrain_path: "setCellsTerrainPath";
        fix_invalid_tiles: "fixInvalidTiles";
        clear_layer: "clearLayer";
        update_internals: "updateInternals";
        notify_runtime_tile_data_update: "notifyRuntimeTileDataUpdate";
        get_surrounding_cells: "getSurroundingCells";
        get_used_cells: "getUsedCells";
        get_used_cells_by_id: "getUsedCellsById";
        get_used_rect: "getUsedRect";
        map_to_local: "mapToLocal";
        local_to_map: "localToMap";
        get_neighbor_cell: "getNeighborCell";
        tile_set: "tileSet";
        rendering_quadrant_size: "renderingQuadrantSize";
        collision_animatable: "collisionAnimatable";
        collision_visibility_mode: "collisionVisibilityMode";
        navigation_visibility_mode: "navigationVisibilityMode";
    }
    /** Node for 2D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tilemap.html  
     */
    class TileMap<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Should return `true` if the tile at coordinates [param coords] on layer [param layer] requires a runtime update.  
         *  **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.  
         *      
         *  **Note:** If the result of this function should changed, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _useTileDataRuntimeUpdate(layer: int64, coords: Vector2I): boolean
        
        /** Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.  
         *  This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords] and [param layer].  
         *  **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.  
         *      
         *  **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _tileDataRuntimeUpdate(layer: int64, coords: Vector2I, tileData: TileData): void
        
        /** Assigns [param map] as a [NavigationServer2D] navigation map for the specified TileMap layer [param layer]. */
        setNavigationMap(layer: int64, map: Rid): void
        
        /** Returns the [RID] of the [NavigationServer2D] navigation map assigned to the specified TileMap layer [param layer]. */
        getNavigationMap(layer: int64): Rid
        
        /** Forces the TileMap and the layer [param layer] to update. */
        forceUpdate(layer?: int64 /* = -1 */): void
        
        /** Returns the number of layers in the TileMap. */
        getLayersCount(): int64
        
        /** Adds a layer at the given position [param to_position] in the array. If [param to_position] is negative, the position is counted from the end, with `-1` adding the layer at the end of the array. */
        addLayer(toPosition: int64): void
        
        /** Moves the layer at index [param layer] to the given position [param to_position] in the array. */
        moveLayer(layer: int64, toPosition: int64): void
        
        /** Removes the layer at index [param layer]. */
        removeLayer(layer: int64): void
        
        /** Sets a layer's name. This is mostly useful in the editor.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerName(layer: int64, name: string): void
        
        /** Returns a TileMap layer's name.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerName(layer: int64): string
        
        /** Enables or disables the layer [param layer]. A disabled layer is not processed at all (no rendering, no physics, etc.).  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerEnabled(layer: int64, enabled: boolean): void
        
        /** Returns if a layer is enabled.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        isLayerEnabled(layer: int64): boolean
        
        /** Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerModulate(layer: int64, modulate: Color): void
        
        /** Returns a TileMap layer's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerModulate(layer: int64): Color
        
        /** Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.  
         *  Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerYSortEnabled(layer: int64, ySortEnabled: boolean): void
        
        /** Returns if a layer Y-sorts its tiles.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        isLayerYSortEnabled(layer: int64): boolean
        
        /** Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.  
         *  This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerYSortOrigin(layer: int64, ySortOrigin: int64): void
        
        /** Returns a TileMap layer's Y sort origin.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerYSortOrigin(layer: int64): int64
        
        /** Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerZIndex(layer: int64, zIndex: int64): void
        
        /** Returns a TileMap layer's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerZIndex(layer: int64): int64
        
        /** Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a [NavigationRegion2D] node. */
        setLayerNavigationEnabled(layer: int64, enabled: boolean): void
        
        /** Returns if a layer's built-in navigation regions generation is enabled. */
        isLayerNavigationEnabled(layer: int64): boolean
        
        /** Assigns [param map] as a [NavigationServer2D] navigation map for the specified TileMap layer [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerNavigationMap(layer: int64, map: Rid): void
        
        /** Returns the [RID] of the [NavigationServer2D] navigation map assigned to the specified TileMap layer [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerNavigationMap(layer: int64): Rid
        
        /** Sets the tile identifiers for the cell on layer [param layer] at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:  
         *  - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],  
         *  - The atlas coordinates identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`),  
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].  
         *  If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)` or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setCell(layer: int64, coords: Vector2I, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = 0 */): void
        
        /** Erases the cell on layer [param layer] at coordinates [param coords].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        eraseCell(layer: int64, coords: Vector2I): void
        
        /** Returns the tile source ID of the cell on layer [param layer] at coordinates [param coords]. Returns `-1` if the cell does not exist.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw source identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getCellSourceId(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): int64
        
        /** Returns the tile atlas coordinates ID of the cell on layer [param layer] at coordinates [param coords]. Returns `Vector2i(-1, -1)` if the cell does not exist.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw atlas coordinate identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getCellAtlasCoords(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): Vector2I
        
        /** Returns the tile alternative ID of the cell on layer [param layer] at [param coords].  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getCellAlternativeTile(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): int64
        
        /** Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *    
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies. See [method TileSet.map_tile_proxy].  
         */
        getCellTileData(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): null | TileData
        
        /** Returns `true` if the cell on layer [param layer] at coordinates [param coords] is flipped horizontally. The result is valid only for atlas sources. */
        isCellFlippedH(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): boolean
        
        /** Returns `true` if the cell on layer [param layer] at coordinates [param coords] is flipped vertically. The result is valid only for atlas sources. */
        isCellFlippedV(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): boolean
        
        /** Returns `true` if the cell on layer [param layer] at coordinates [param coords] is transposed. The result is valid only for atlas sources. */
        isCellTransposed(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): boolean
        
        /** Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        getCoordsForBodyRid(body: Rid): Vector2I
        
        /** Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        getLayerForBodyRid(body: Rid): int64
        
        /** Creates a new [TileMapPattern] from the given layer and set of cells.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getPattern(layer: int64, coordsArray: GArray<Vector2I>): null | TileMapPattern
        
        /** Returns for the given coordinate [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`. */
        mapPattern(positionInTilemap: Vector2I, coordsInPattern: Vector2I, pattern: TileMapPattern): Vector2I
        
        /** Paste the given [TileMapPattern] at the given [param position] and [param layer] in the tile map.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setPattern(layer: int64, position: Vector2I, pattern: TileMapPattern): void
        
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainConnect(layer: int64, cells: GArray<Vector2I>, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainPath(layer: int64, path: GArray<Vector2I>, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Clears cells that do not exist in the tileset. */
        fixInvalidTiles(): void
        
        /** Clears all cells on the given layer.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        clearLayer(layer: int64): void
        
        /** Clears all cells. */
        clear(): void
        
        /** Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.  
         *  However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.  
         */
        updateInternals(): void
        
        /** Notifies the TileMap node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a TileMap update.  
         *  If [param layer] is provided, only notifies changes for the given layer. Providing the [param layer] argument (when applicable) is usually preferred for performance reasons.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.  
         *      
         *  **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [method update_internals]).  
         */
        notifyRuntimeTileDataUpdate(layer?: int64 /* = -1 */): void
        
        /** Returns the list of all neighbourings cells to the one at [param coords]. */
        getSurroundingCells(coords: Vector2I): GArray<Vector2I>
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getUsedCells(layer: int64): GArray<Vector2I>
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]) or alternative id ([param alternative_tile]).  
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [method get_used_cells].  
         *  A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getUsedCellsById(layer: int64, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = -1 */): GArray<Vector2I>
        
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers. */
        getUsedRect(): Rect2I
        
        /** Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].  
         *      
         *  **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.  
         */
        mapToLocal(mapPosition: Vector2I): Vector2
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        localToMap(localPosition: Vector2): Vector2I
        
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        getNeighborCell(coords: Vector2I, neighbor: TileSet.CellNeighbor): Vector2I
        
        /** The [TileSet] used by this [TileMap]. The textures, collisions, and additional behavior of all available tiles are stored here. */
        get tileSet(): null | TileSet
        set tileSet(value: null | TileSet)
        
        /** The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.  
         *  The quadrant size does not apply on Y-sorted layers, as tiles are grouped by Y position instead in that case.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.  
         */
        get renderingQuadrantSize(): int64
        set renderingQuadrantSize(value: int64)
        
        /** If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.  
         *      
         *  **Note:** Enabling [member collision_animatable] may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.  
         */
        get collisionAnimatable(): boolean
        set collisionAnimatable(value: boolean)
        
        /** Show or hide the TileMap's collision shapes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        get collisionVisibilityMode(): int64
        set collisionVisibilityMode(value: int64)
        
        /** Show or hide the TileMap's navigation meshes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        get navigationVisibilityMode(): int64
        set navigationVisibilityMode(value: int64)
        
        /** Emitted when the [TileSet] of this TileMap changes. */
        readonly changed: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileMap;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileMap;
    }
    namespace TileMapLayer {
        enum DebugVisibilityMode {
            DebugVisibilityModeDefault = 0,
            DebugVisibilityModeForceHide = 2,
            DebugVisibilityModeForceShow = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileMapLayer extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileMapLayer extends __NameMapNode2D {
        _use_tile_data_runtime_update: "_useTileDataRuntimeUpdate";
        _tile_data_runtime_update: "_tileDataRuntimeUpdate";
        _update_cells: "_updateCells";
        set_cell: "setCell";
        erase_cell: "eraseCell";
        fix_invalid_tiles: "fixInvalidTiles";
        get_cell_source_id: "getCellSourceId";
        get_cell_atlas_coords: "getCellAtlasCoords";
        get_cell_alternative_tile: "getCellAlternativeTile";
        get_cell_tile_data: "getCellTileData";
        is_cell_flipped_h: "isCellFlippedH";
        is_cell_flipped_v: "isCellFlippedV";
        is_cell_transposed: "isCellTransposed";
        get_used_cells: "getUsedCells";
        get_used_cells_by_id: "getUsedCellsById";
        get_used_rect: "getUsedRect";
        get_pattern: "getPattern";
        set_pattern: "setPattern";
        set_cells_terrain_connect: "setCellsTerrainConnect";
        set_cells_terrain_path: "setCellsTerrainPath";
        has_body_rid: "hasBodyRid";
        get_coords_for_body_rid: "getCoordsForBodyRid";
        update_internals: "updateInternals";
        notify_runtime_tile_data_update: "notifyRuntimeTileDataUpdate";
        map_pattern: "mapPattern";
        get_surrounding_cells: "getSurroundingCells";
        get_neighbor_cell: "getNeighborCell";
        map_to_local: "mapToLocal";
        local_to_map: "localToMap";
        set_navigation_map: "setNavigationMap";
        get_navigation_map: "getNavigationMap";
        tile_map_data: "tileMapData";
        tile_set: "tileSet";
        occlusion_enabled: "occlusionEnabled";
        y_sort_origin: "ySortOrigin";
        x_draw_order_reversed: "xDrawOrderReversed";
        rendering_quadrant_size: "renderingQuadrantSize";
        collision_enabled: "collisionEnabled";
        use_kinematic_bodies: "useKinematicBodies";
        collision_visibility_mode: "collisionVisibilityMode";
        physics_quadrant_size: "physicsQuadrantSize";
        navigation_enabled: "navigationEnabled";
        navigation_visibility_mode: "navigationVisibilityMode";
    }
    /** Node for 2D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tilemaplayer.html  
     */
    class TileMapLayer<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Should return `true` if the tile at coordinates [param coords] requires a runtime update.  
         *  **Warning:** Make sure this function only returns `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.  
         *      
         *  **Note:** If the result of this function should change, use [method notify_runtime_tile_data_update] to notify the [TileMapLayer] it needs an update.  
         */
        /* gdvirtual */ _useTileDataRuntimeUpdate(coords: Vector2I): boolean
        
        /** Called with a [TileData] object about to be used internally by the [TileMapLayer], allowing its modification at runtime.  
         *  This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords].  
         *  **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.  
         *      
         *  **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the [TileMapLayer] it needs an update.  
         */
        /* gdvirtual */ _tileDataRuntimeUpdate(coords: Vector2I, tileData: TileData): void
        
        /** Called when this [TileMapLayer]'s cells need an internal update. This update may be caused from individual cells being modified or by a change in the [member tile_set] (causing all cells to be queued for an update). The first call to this function is always for initializing all the [TileMapLayer]'s cells. [param coords] contains the coordinates of all modified cells, roughly in the order they were modified. [param forced_cleanup] is `true` when the [TileMapLayer]'s internals should be fully cleaned up. This is the case when:  
         *  - The layer is disabled;  
         *  - The layer is not visible;  
         *  - [member tile_set] is set to `null`;  
         *  - The node is removed from the tree;  
         *  - The node is freed.  
         *  Note that any internal update happening while one of these conditions is verified is considered to be a "cleanup". See also [method update_internals].  
         *  **Warning:** Implementing this method may degrade the [TileMapLayer]'s performance.  
         */
        /* gdvirtual */ _updateCells(coords: GArray<Vector2I>, forcedCleanup: boolean): void
        
        /** Sets the tile identifiers for the cell at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:  
         *  - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],  
         *  - The atlas coordinate identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`,  
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].  
         *  If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)`, or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.  
         */
        setCell(coords: Vector2I, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = 0 */): void
        
        /** Erases the cell at coordinates [param coords]. */
        eraseCell(coords: Vector2I): void
        
        /** Clears cells containing tiles that do not exist in the [member tile_set]. */
        fixInvalidTiles(): void
        
        /** Clears all cells. */
        clear(): void
        
        /** Returns the tile source ID of the cell at coordinates [param coords]. Returns `-1` if the cell does not exist. */
        getCellSourceId(coords: Vector2I): int64
        
        /** Returns the tile atlas coordinates ID of the cell at coordinates [param coords]. Returns `Vector2i(-1, -1)` if the cell does not exist. */
        getCellAtlasCoords(coords: Vector2I): Vector2I
        
        /** Returns the tile alternative ID of the cell at coordinates [param coords]. */
        getCellAlternativeTile(coords: Vector2I): int64
        
        /** Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].  
         *    
         */
        getCellTileData(coords: Vector2I): null | TileData
        
        /** Returns `true` if the cell at coordinates [param coords] is flipped horizontally. The result is valid only for atlas sources. */
        isCellFlippedH(coords: Vector2I): boolean
        
        /** Returns `true` if the cell at coordinates [param coords] is flipped vertically. The result is valid only for atlas sources. */
        isCellFlippedV(coords: Vector2I): boolean
        
        /** Returns `true` if the cell at coordinates [param coords] is transposed. The result is valid only for atlas sources. */
        isCellTransposed(coords: Vector2I): boolean
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile. A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`. */
        getUsedCells(): GArray<Vector2I>
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]), or alternative id ([param alternative_tile]).  
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default values, this method returns the same result as [method get_used_cells].  
         *  A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`.  
         */
        getUsedCellsById(sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = -1 */): GArray<Vector2I>
        
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map. */
        getUsedRect(): Rect2I
        
        /** Creates and returns a new [TileMapPattern] from the given array of cells. See also [method set_pattern]. */
        getPattern(coordsArray: GArray<Vector2I>): null | TileMapPattern
        
        /** Pastes the [TileMapPattern] at the given [param position] in the tile map. See also [method get_pattern]. */
        setPattern(position: Vector2I, pattern: TileMapPattern): void
        
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *      
         *  **Note:** To work correctly, this method requires the [TileMapLayer]'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainConnect(cells: GArray<Vector2I>, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *      
         *  **Note:** To work correctly, this method requires the [TileMapLayer]'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainPath(path: GArray<Vector2I>, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Returns whether the provided [param body] [RID] belongs to one of this [TileMapLayer]'s cells. */
        hasBodyRid(body: Rid): boolean
        
        /** Returns the coordinates of the physics quadrant (see [member physics_quadrant_size]) for given physics body [RID]. Such an [RID] can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        getCoordsForBodyRid(body: Rid): Vector2I
        
        /** Triggers a direct update of the [TileMapLayer]. Usually, calling this function is not needed, as [TileMapLayer] node updates automatically when one of its properties or cells is modified.  
         *  However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the [TileMapLayer] to update right away instead.  
         *  **Warning:** Updating the [TileMapLayer] is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.  
         */
        updateInternals(): void
        
        /** Notifies the [TileMapLayer] node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a [TileMapLayer] update.  
         *  **Warning:** Updating the [TileMapLayer] is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.  
         *      
         *  **Note:** This does not trigger a direct update of the [TileMapLayer], the update will be done at the end of the frame as usual (unless you call [method update_internals]).  
         */
        notifyRuntimeTileDataUpdate(): void
        
        /** Returns for the given coordinates [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`. */
        mapPattern(positionInTilemap: Vector2I, coordsInPattern: Vector2I, pattern: TileMapPattern): Vector2I
        
        /** Returns the list of all neighboring cells to the one at [param coords]. Any neighboring cell is one that is touching edges, so for a square cell 4 cells would be returned, for a hexagon 6 cells are returned. */
        getSurroundingCells(coords: Vector2I): GArray<Vector2I>
        
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        getNeighborCell(coords: Vector2I, neighbor: TileSet.CellNeighbor): Vector2I
        
        /** Returns the centered position of a cell in the [TileMapLayer]'s local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].  
         *      
         *  **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.  
         */
        mapToLocal(mapPosition: Vector2I): Vector2
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        localToMap(localPosition: Vector2): Vector2I
        
        /** Sets a custom [param map] as a [NavigationServer2D] navigation map. If not set, uses the default [World2D] navigation map instead. */
        setNavigationMap(map: Rid): void
        
        /** Returns the [RID] of the [NavigationServer2D] navigation used by this [TileMapLayer].  
         *  By default this returns the default [World2D] navigation map, unless a custom map was provided using [method set_navigation_map].  
         */
        getNavigationMap(): Rid
        
        /** The raw tile map data as a byte array. */
        get tileMapData(): PackedByteArray
        set tileMapData(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** If `false`, disables this [TileMapLayer] completely (rendering, collision, navigation, scene tiles, etc.) */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The [TileSet] used by this layer. The textures, collisions, and additional behavior of all available tiles are stored here. */
        get tileSet(): null | TileSet
        set tileSet(value: null | TileSet)
        
        /** Enable or disable light occlusion. */
        get occlusionEnabled(): boolean
        set occlusionEnabled(value: boolean)
        
        /** This Y-sort origin value is added to each tile's Y-sort origin value. This allows, for example, to fake a different height level. This can be useful for top-down view games. */
        get ySortOrigin(): int64
        set ySortOrigin(value: int64)
        
        /** If [member CanvasItem.y_sort_enabled] is enabled, setting this to `true` will reverse the order the tiles are drawn on the X-axis. */
        get xDrawOrderReversed(): boolean
        set xDrawOrderReversed(value: boolean)
        
        /** The [TileMapLayer]'s rendering quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.  
         *  The quadrant size does not apply on a Y-sorted [TileMapLayer], as tiles are grouped by Y position instead in that case.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the [TileMapLayer]'s local coordinate system.  
         */
        get renderingQuadrantSize(): int64
        set renderingQuadrantSize(value: int64)
        
        /** Enable or disable collisions. */
        get collisionEnabled(): boolean
        set collisionEnabled(value: boolean)
        
        /** If `true`, this [TileMapLayer] collision shapes will be instantiated as kinematic bodies. This can be needed for moving [TileMapLayer] nodes (i.e. moving platforms). */
        get useKinematicBodies(): boolean
        set useKinematicBodies(value: boolean)
        
        /** Show or hide the [TileMapLayer]'s collision shapes. If set to [constant DEBUG_VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        get collisionVisibilityMode(): int64
        set collisionVisibilityMode(value: int64)
        
        /** The [TileMapLayer]'s physics quadrant size. Within a physics quadrant, cells with similar physics properties are grouped together and their collision shapes get merged. [member physics_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the [TileMapLayer]'s local coordinate system.  
         *      
         *  **Note:** This impacts the value returned by [method get_coords_for_body_rid].  
         */
        get physicsQuadrantSize(): int64
        set physicsQuadrantSize(value: int64)
        
        /** If `true`, navigation regions are enabled. */
        get navigationEnabled(): boolean
        set navigationEnabled(value: boolean)
        
        /** Show or hide the [TileMapLayer]'s navigation meshes. If set to [constant DEBUG_VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        get navigationVisibilityMode(): int64
        set navigationVisibilityMode(value: int64)
        
        /** Emitted when this [TileMapLayer]'s properties changes. This includes modified cells, properties, or changes made to its assigned [TileSet].  
         *      
         *  **Note:** This signal may be emitted very often when batch-modifying a [TileMapLayer]. Avoid executing complex processing in a connected function, and consider delaying it to the end of the frame instead (i.e. calling [method Object.call_deferred]).  
         */
        readonly changed: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileMapLayer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileMapLayer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileMapPattern extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileMapPattern extends __NameMapResource {
        set_cell: "setCell";
        has_cell: "hasCell";
        remove_cell: "removeCell";
        get_cell_source_id: "getCellSourceId";
        get_cell_atlas_coords: "getCellAtlasCoords";
        get_cell_alternative_tile: "getCellAlternativeTile";
        get_used_cells: "getUsedCells";
        get_size: "getSize";
        set_size: "setSize";
        is_empty: "isEmpty";
    }
    /** Holds a pattern to be copied from or pasted into [TileMap]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tilemappattern.html  
     */
    class TileMapPattern extends Resource {
        constructor(identifier?: any)
        /** Sets the tile identifiers for the cell at coordinates [param coords]. See [method TileMap.set_cell]. */
        setCell(coords: Vector2I, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = -1 */): void
        
        /** Returns whether the pattern has a tile at the given coordinates. */
        hasCell(coords: Vector2I): boolean
        
        /** Remove the cell at the given coordinates. */
        removeCell(coords: Vector2I, updateSize: boolean): void
        
        /** Returns the tile source ID of the cell at [param coords]. */
        getCellSourceId(coords: Vector2I): int64
        
        /** Returns the tile atlas coordinates ID of the cell at [param coords]. */
        getCellAtlasCoords(coords: Vector2I): Vector2I
        
        /** Returns the tile alternative ID of the cell at [param coords]. */
        getCellAlternativeTile(coords: Vector2I): int64
        
        /** Returns the list of used cell coordinates in the pattern. */
        getUsedCells(): GArray<Vector2I>
        
        /** Returns the size, in cells, of the pattern. */
        getSize(): Vector2I
        
        /** Sets the size of the pattern. */
        setSize(size: Vector2I): void
        
        /** Returns whether the pattern is empty or not. */
        isEmpty(): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileMapPattern;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileMapPattern;
    }
    namespace TileSet {
        enum TileShape {
            TileShapeSquare = 0,
            TileShapeIsometric = 1,
            TileShapeHalfOffsetSquare = 2,
            TileShapeHexagon = 3,
        }
        enum TileLayout {
            TileLayoutStacked = 0,
            TileLayoutStackedOffset = 1,
            TileLayoutStairsRight = 2,
            TileLayoutStairsDown = 3,
            TileLayoutDiamondRight = 4,
            TileLayoutDiamondDown = 5,
        }
        enum TileOffsetAxis {
            TileOffsetAxisHorizontal = 0,
            TileOffsetAxisVertical = 1,
        }
        enum CellNeighbor {
            CellNeighborRightSide = 0,
            CellNeighborRightCorner = 1,
            CellNeighborBottomRightSide = 2,
            CellNeighborBottomRightCorner = 3,
            CellNeighborBottomSide = 4,
            CellNeighborBottomCorner = 5,
            CellNeighborBottomLeftSide = 6,
            CellNeighborBottomLeftCorner = 7,
            CellNeighborLeftSide = 8,
            CellNeighborLeftCorner = 9,
            CellNeighborTopLeftSide = 10,
            CellNeighborTopLeftCorner = 11,
            CellNeighborTopSide = 12,
            CellNeighborTopCorner = 13,
            CellNeighborTopRightSide = 14,
            CellNeighborTopRightCorner = 15,
        }
        enum TerrainMode {
            TerrainModeMatchCornersAndSides = 0,
            TerrainModeMatchCorners = 1,
            TerrainModeMatchSides = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileSet extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileSet extends __NameMapResource {
        get_next_source_id: "getNextSourceId";
        add_source: "addSource";
        remove_source: "removeSource";
        set_source_id: "setSourceId";
        get_source_count: "getSourceCount";
        get_source_id: "getSourceId";
        has_source: "hasSource";
        get_source: "getSource";
        get_occlusion_layers_count: "getOcclusionLayersCount";
        add_occlusion_layer: "addOcclusionLayer";
        move_occlusion_layer: "moveOcclusionLayer";
        remove_occlusion_layer: "removeOcclusionLayer";
        set_occlusion_layer_light_mask: "setOcclusionLayerLightMask";
        get_occlusion_layer_light_mask: "getOcclusionLayerLightMask";
        set_occlusion_layer_sdf_collision: "setOcclusionLayerSdfCollision";
        get_occlusion_layer_sdf_collision: "getOcclusionLayerSdfCollision";
        get_physics_layers_count: "getPhysicsLayersCount";
        add_physics_layer: "addPhysicsLayer";
        move_physics_layer: "movePhysicsLayer";
        remove_physics_layer: "removePhysicsLayer";
        set_physics_layer_collision_layer: "setPhysicsLayerCollisionLayer";
        get_physics_layer_collision_layer: "getPhysicsLayerCollisionLayer";
        set_physics_layer_collision_mask: "setPhysicsLayerCollisionMask";
        get_physics_layer_collision_mask: "getPhysicsLayerCollisionMask";
        set_physics_layer_collision_priority: "setPhysicsLayerCollisionPriority";
        get_physics_layer_collision_priority: "getPhysicsLayerCollisionPriority";
        set_physics_layer_physics_material: "setPhysicsLayerPhysicsMaterial";
        get_physics_layer_physics_material: "getPhysicsLayerPhysicsMaterial";
        get_terrain_sets_count: "getTerrainSetsCount";
        add_terrain_set: "addTerrainSet";
        move_terrain_set: "moveTerrainSet";
        remove_terrain_set: "removeTerrainSet";
        set_terrain_set_mode: "setTerrainSetMode";
        get_terrain_set_mode: "getTerrainSetMode";
        get_terrains_count: "getTerrainsCount";
        add_terrain: "addTerrain";
        move_terrain: "moveTerrain";
        remove_terrain: "removeTerrain";
        set_terrain_name: "setTerrainName";
        get_terrain_name: "getTerrainName";
        set_terrain_color: "setTerrainColor";
        get_terrain_color: "getTerrainColor";
        get_navigation_layers_count: "getNavigationLayersCount";
        add_navigation_layer: "addNavigationLayer";
        move_navigation_layer: "moveNavigationLayer";
        remove_navigation_layer: "removeNavigationLayer";
        set_navigation_layer_layers: "setNavigationLayerLayers";
        get_navigation_layer_layers: "getNavigationLayerLayers";
        set_navigation_layer_layer_value: "setNavigationLayerLayerValue";
        get_navigation_layer_layer_value: "getNavigationLayerLayerValue";
        get_custom_data_layers_count: "getCustomDataLayersCount";
        add_custom_data_layer: "addCustomDataLayer";
        move_custom_data_layer: "moveCustomDataLayer";
        remove_custom_data_layer: "removeCustomDataLayer";
        get_custom_data_layer_by_name: "getCustomDataLayerByName";
        set_custom_data_layer_name: "setCustomDataLayerName";
        has_custom_data_layer_by_name: "hasCustomDataLayerByName";
        get_custom_data_layer_name: "getCustomDataLayerName";
        set_custom_data_layer_type: "setCustomDataLayerType";
        get_custom_data_layer_type: "getCustomDataLayerType";
        set_source_level_tile_proxy: "setSourceLevelTileProxy";
        get_source_level_tile_proxy: "getSourceLevelTileProxy";
        has_source_level_tile_proxy: "hasSourceLevelTileProxy";
        remove_source_level_tile_proxy: "removeSourceLevelTileProxy";
        set_coords_level_tile_proxy: "setCoordsLevelTileProxy";
        get_coords_level_tile_proxy: "getCoordsLevelTileProxy";
        has_coords_level_tile_proxy: "hasCoordsLevelTileProxy";
        remove_coords_level_tile_proxy: "removeCoordsLevelTileProxy";
        set_alternative_level_tile_proxy: "setAlternativeLevelTileProxy";
        get_alternative_level_tile_proxy: "getAlternativeLevelTileProxy";
        has_alternative_level_tile_proxy: "hasAlternativeLevelTileProxy";
        remove_alternative_level_tile_proxy: "removeAlternativeLevelTileProxy";
        map_tile_proxy: "mapTileProxy";
        cleanup_invalid_tile_proxies: "cleanupInvalidTileProxies";
        clear_tile_proxies: "clearTileProxies";
        add_pattern: "addPattern";
        get_pattern: "getPattern";
        remove_pattern: "removePattern";
        get_patterns_count: "getPatternsCount";
        tile_shape: "tileShape";
        tile_layout: "tileLayout";
        tile_offset_axis: "tileOffsetAxis";
        tile_size: "tileSize";
        uv_clipping: "uVClipping";
    }
    /** Tile library for tilemaps.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tileset.html  
     */
    class TileSet extends Resource {
        constructor(identifier?: any)
        /** Returns a new unused source ID. This generated ID is the same that a call to [method add_source] would return. */
        getNextSourceId(): int64
        
        /** Adds a [TileSetSource] to the TileSet. If [param atlas_source_id_override] is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.  
         *  The function returns the added source ID or -1 if the source could not be added.  
         *  **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another [TileSet], it will be removed from that one.  
         */
        addSource(source: TileSetSource, atlasSourceIdOverride?: int64 /* = -1 */): int64
        
        /** Removes the source with the given source ID. */
        removeSource(sourceId: int64): void
        
        /** Changes a source's ID. */
        setSourceId(sourceId: int64, newSourceId: int64): void
        
        /** Returns the number of [TileSetSource] in this TileSet. */
        getSourceCount(): int64
        
        /** Returns the source ID for source with index [param index]. */
        getSourceId(index: int64): int64
        
        /** Returns if this TileSet has a source for the given source ID. */
        hasSource(sourceId: int64): boolean
        
        /** Returns the [TileSetSource] with ID [param source_id]. */
        getSource(sourceId: int64): null | TileSetSource
        
        /** Returns the occlusion layers count. */
        getOcclusionLayersCount(): int64
        
        /** Adds an occlusion layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Occlusion layers allow assigning occlusion polygons to atlas tiles.  
         */
        addOcclusionLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the occlusion layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveOcclusionLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the occlusion layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removeOcclusionLayer(layerIndex: int64): void
        
        /** Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer. */
        setOcclusionLayerLightMask(layerIndex: int64, lightMask: int64): void
        
        /** Returns the light mask of the occlusion layer. */
        getOcclusionLayerLightMask(layerIndex: int64): int64
        
        /** Enables or disables SDF collision for occluders in the given TileSet occlusion layer. */
        setOcclusionLayerSdfCollision(layerIndex: int64, sdfCollision: boolean): void
        
        /** Returns if the occluders from this layer use `sdf_collision`. */
        getOcclusionLayerSdfCollision(layerIndex: int64): boolean
        
        /** Returns the physics layers count. */
        getPhysicsLayersCount(): int64
        
        /** Adds a physics layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Physics layers allow assigning collision polygons to atlas tiles.  
         */
        addPhysicsLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the physics layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        movePhysicsLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the physics layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removePhysicsLayer(layerIndex: int64): void
        
        /** Sets the collision layer (as in the physics server) for bodies in the given TileSet physics layer. */
        setPhysicsLayerCollisionLayer(layerIndex: int64, layer: int64): void
        
        /** Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in. */
        getPhysicsLayerCollisionLayer(layerIndex: int64): int64
        
        /** Sets the collision mask for bodies in the given TileSet physics layer. */
        setPhysicsLayerCollisionMask(layerIndex: int64, mask: int64): void
        
        /** Returns the collision mask of bodies on the given TileSet's physics layer. */
        getPhysicsLayerCollisionMask(layerIndex: int64): int64
        
        /** Sets the collision priority for bodies in the given TileSet physics layer. */
        setPhysicsLayerCollisionPriority(layerIndex: int64, priority: float64): void
        
        /** Returns the collision priority of bodies on the given TileSet's physics layer. */
        getPhysicsLayerCollisionPriority(layerIndex: int64): float64
        
        /** Sets the physics material for bodies in the given TileSet physics layer. */
        setPhysicsLayerPhysicsMaterial(layerIndex: int64, physicsMaterial: PhysicsMaterial): void
        
        /** Returns the physics material of bodies on the given TileSet's physics layer. */
        getPhysicsLayerPhysicsMaterial(layerIndex: int64): null | PhysicsMaterial
        
        /** Returns the terrain sets count. */
        getTerrainSetsCount(): int64
        
        /** Adds a new terrain set at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        addTerrainSet(toPosition?: int64 /* = -1 */): void
        
        /** Moves the terrain set at index [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveTerrainSet(terrainSet: int64, toPosition: int64): void
        
        /** Removes the terrain set at index [param terrain_set]. Also updates the atlas tiles accordingly. */
        removeTerrainSet(terrainSet: int64): void
        
        /** Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains. */
        setTerrainSetMode(terrainSet: int64, mode: TileSet.TerrainMode): void
        
        /** Returns a terrain set mode. */
        getTerrainSetMode(terrainSet: int64): TileSet.TerrainMode
        
        /** Returns the number of terrains in the given terrain set. */
        getTerrainsCount(terrainSet: int64): int64
        
        /** Adds a new terrain to the given terrain set [param terrain_set] at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        addTerrain(terrainSet: int64, toPosition?: int64 /* = -1 */): void
        
        /** Moves the terrain at index [param terrain_index] for terrain set [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveTerrain(terrainSet: int64, terrainIndex: int64, toPosition: int64): void
        
        /** Removes the terrain at index [param terrain_index] in the given terrain set [param terrain_set]. Also updates the atlas tiles accordingly. */
        removeTerrain(terrainSet: int64, terrainIndex: int64): void
        
        /** Sets a terrain's name. */
        setTerrainName(terrainSet: int64, terrainIndex: int64, name: string): void
        
        /** Returns a terrain's name. */
        getTerrainName(terrainSet: int64, terrainIndex: int64): string
        
        /** Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor. */
        setTerrainColor(terrainSet: int64, terrainIndex: int64, color: Color): void
        
        /** Returns a terrain's color. */
        getTerrainColor(terrainSet: int64, terrainIndex: int64): Color
        
        /** Returns the navigation layers count. */
        getNavigationLayersCount(): int64
        
        /** Adds a navigation layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Navigation layers allow assigning a navigable area to atlas tiles.  
         */
        addNavigationLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the navigation layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveNavigationLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the navigation layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removeNavigationLayer(layerIndex: int64): void
        
        /** Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer. */
        setNavigationLayerLayers(layerIndex: int64, layers: int64): void
        
        /** Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer. */
        getNavigationLayerLayers(layerIndex: int64): int64
        
        /** Based on [param value], enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index], given a navigation_layers [param layer_number] between 1 and 32. */
        setNavigationLayerLayerValue(layerIndex: int64, layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index] is enabled, given a navigation_layers [param layer_number] between 1 and 32. */
        getNavigationLayerLayerValue(layerIndex: int64, layerNumber: int64): boolean
        
        /** Returns the custom data layers count. */
        getCustomDataLayersCount(): int64
        
        /** Adds a custom data layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Custom data layers allow assigning custom properties to atlas tiles.  
         */
        addCustomDataLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the custom data layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveCustomDataLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the custom data layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removeCustomDataLayer(layerIndex: int64): void
        
        /** Returns the index of the custom data layer identified by the given name. */
        getCustomDataLayerByName(layerName: string): int64
        
        /** Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error. */
        setCustomDataLayerName(layerIndex: int64, layerName: string): void
        
        /** Returns if there is a custom data layer named [param layer_name]. */
        hasCustomDataLayerByName(layerName: string): boolean
        
        /** Returns the name of the custom data layer identified by the given index. */
        getCustomDataLayerName(layerIndex: int64): string
        
        /** Sets the type of the custom data layer identified by the given index. */
        setCustomDataLayerType(layerIndex: int64, layerType: Variant.Type): void
        
        /** Returns the type of the custom data layer identified by the given index. */
        getCustomDataLayerType(layerIndex: int64): Variant.Type
        
        /** Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.  
         *  Proxied tiles can be automatically replaced in TileMapLayer nodes using the editor.  
         */
        setSourceLevelTileProxy(sourceFrom: int64, sourceTo: int64): void
        
        /** Returns the source-level proxy for the given source identifier.  
         *  If the TileSet has no proxy for the given identifier, returns -1.  
         */
        getSourceLevelTileProxy(sourceFrom: int64): int64
        
        /** Returns if there is a source-level proxy for the given source ID. */
        hasSourceLevelTileProxy(sourceFrom: int64): boolean
        
        /** Removes a source-level tile proxy. */
        removeSourceLevelTileProxy(sourceFrom: int64): void
        
        /** Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.  
         *  Proxied tiles can be automatically replaced in TileMapLayer nodes using the editor.  
         */
        setCoordsLevelTileProxy(pSourceFrom: int64, coordsFrom: Vector2I, sourceTo: int64, coordsTo: Vector2I): void
        
        /** Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        getCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): GArray
        
        /** Returns if there is a coodinates-level proxy for the given identifiers. */
        hasCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): boolean
        
        /** Removes a coordinates-level proxy for the given identifiers. */
        removeCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): void
        
        /** Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.  
         *  Proxied tiles can be automatically replaced in TileMapLayer nodes using the editor.  
         */
        setAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64, sourceTo: int64, coordsTo: Vector2I, alternativeTo: int64): void
        
        /** Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        getAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): GArray
        
        /** Returns if there is an alternative-level proxy for the given identifiers. */
        hasAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): boolean
        
        /** Removes an alternative-level proxy for the given identifiers. */
        removeAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): void
        
        /** According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.  
         *  This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.  
         *  If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.  
         */
        mapTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): GArray
        
        /** Clears tile proxies pointing to invalid tiles. */
        cleanupInvalidTileProxies(): void
        
        /** Clears all tile proxies. */
        clearTileProxies(): void
        
        /** Adds a [TileMapPattern] to be stored in the TileSet resource. If provided, insert it at the given [param index]. */
        addPattern(pattern: TileMapPattern, index?: int64 /* = -1 */): int64
        
        /** Returns the [TileMapPattern] at the given [param index]. */
        getPattern(index?: int64 /* = -1 */): null | TileMapPattern
        
        /** Remove the [TileMapPattern] at the given index. */
        removePattern(index: int64): void
        
        /** Returns the number of [TileMapPattern] this tile set handles. */
        getPatternsCount(): int64
        
        /** The tile shape. */
        get tileShape(): int64
        set tileShape(value: int64)
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the [TileMapLayer] grid. */
        get tileLayout(): int64
        set tileLayout(value: int64)
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis. */
        get tileOffsetAxis(): int64
        set tileOffsetAxis(value: int64)
        
        /** The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas. */
        get tileSize(): Vector2I
        set tileSize(value: Vector2I)
        
        /** Enables/Disable uv clipping when rendering the tiles. */
        get uVClipping(): boolean
        set uVClipping(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileSet;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileSet;
    }
    namespace TileSetAtlasSource {
        enum TileAnimationMode {
            TileAnimationModeDefault = 0,
            TileAnimationModeRandomStartTimes = 1,
            TileAnimationModeMax = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileSetAtlasSource extends __RPCMapTileSetSource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileSetAtlasSource extends __NameMapTileSetSource {
        create_tile: "createTile";
        remove_tile: "removeTile";
        move_tile_in_atlas: "moveTileInAtlas";
        get_tile_size_in_atlas: "getTileSizeInAtlas";
        has_room_for_tile: "hasRoomForTile";
        get_tiles_to_be_removed_on_change: "getTilesToBeRemovedOnChange";
        get_tile_at_coords: "getTileAtCoords";
        has_tiles_outside_texture: "hasTilesOutsideTexture";
        clear_tiles_outside_texture: "clearTilesOutsideTexture";
        set_tile_animation_columns: "setTileAnimationColumns";
        get_tile_animation_columns: "getTileAnimationColumns";
        set_tile_animation_separation: "setTileAnimationSeparation";
        get_tile_animation_separation: "getTileAnimationSeparation";
        set_tile_animation_speed: "setTileAnimationSpeed";
        get_tile_animation_speed: "getTileAnimationSpeed";
        set_tile_animation_mode: "setTileAnimationMode";
        get_tile_animation_mode: "getTileAnimationMode";
        set_tile_animation_frames_count: "setTileAnimationFramesCount";
        get_tile_animation_frames_count: "getTileAnimationFramesCount";
        set_tile_animation_frame_duration: "setTileAnimationFrameDuration";
        get_tile_animation_frame_duration: "getTileAnimationFrameDuration";
        get_tile_animation_total_duration: "getTileAnimationTotalDuration";
        create_alternative_tile: "createAlternativeTile";
        remove_alternative_tile: "removeAlternativeTile";
        set_alternative_tile_id: "setAlternativeTileId";
        get_next_alternative_tile_id: "getNextAlternativeTileId";
        get_tile_data: "getTileData";
        get_atlas_grid_size: "getAtlasGridSize";
        get_tile_texture_region: "getTileTextureRegion";
        get_runtime_texture: "getRuntimeTexture";
        get_runtime_tile_texture_region: "getRuntimeTileTextureRegion";
        texture_region_size: "textureRegionSize";
        use_texture_padding: "useTexturePadding";
    }
    /** Exposes a 2D atlas texture as a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tilesetatlassource.html  
     */
    class TileSetAtlasSource extends TileSetSource {
        /** Represents cell's horizontal flip flag. Should be used directly with [TileMapLayer] to flip placed tiles by altering their alternative IDs.  
         *    
         *      
         *  **Note:** These transformations can be combined to do the equivalent of 0, 90, 180, and 270 degree rotations, as shown below:  
         *    
         */
        static readonly TRANSFORM_FLIP_H = 4096
        
        /** Represents cell's vertical flip flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_FLIP_V = 8192
        
        /** Represents cell's transposed flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_TRANSPOSE = 16384
        constructor(identifier?: any)
        
        /** Creates a new tile at coordinates [param atlas_coords] with the given [param size]. */
        createTile(atlasCoords: Vector2I, size?: Vector2I /* = Vector2I.ONE */): void
        
        /** Remove a tile and its alternative at coordinates [param atlas_coords]. */
        removeTile(atlasCoords: Vector2I): void
        
        /** Move the tile and its alternatives at the [param atlas_coords] coordinates to the [param new_atlas_coords] coordinates with the [param new_size] size. This functions will fail if a tile is already present in the given area.  
         *  If [param new_atlas_coords] is `Vector2i(-1, -1)`, keeps the tile's coordinates. If [param new_size] is `Vector2i(-1, -1)`, keeps the tile's size.  
         *  To avoid an error, first check if a move is possible using [method has_room_for_tile].  
         */
        moveTileInAtlas(atlasCoords: Vector2I, newAtlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, newSize?: Vector2I /* = new Vector2I(-1, -1) */): void
        
        /** Returns the size of the tile (in the grid coordinates system) at coordinates [param atlas_coords]. */
        getTileSizeInAtlas(atlasCoords: Vector2I): Vector2I
        
        /** Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If [param ignored_tile] is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties. */
        hasRoomForTile(atlasCoords: Vector2I, size: Vector2I, animationColumns: int64, animationSeparation: Vector2I, framesCount: int64, ignoredTile?: Vector2I /* = new Vector2I(-1, -1) */): boolean
        
        /** Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: [param texture], [param margins], [param separation] or [param texture_region_size]. This can be used to undo changes that would have caused tiles data loss. */
        getTilesToBeRemovedOnChange(texture: Texture2D, margins: Vector2I, separation: Vector2I, textureRegionSize: Vector2I): PackedVector2Array
        
        /** If there is a tile covering the [param atlas_coords] coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns `Vector2i(-1, -1)` otherwise. */
        getTileAtCoords(atlasCoords: Vector2I): Vector2I
        
        /** Checks if the source has any tiles that don't fit the texture area (either partially or completely). */
        hasTilesOutsideTexture(): boolean
        
        /** Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use [method has_tiles_outside_texture] beforehand. */
        clearTilesOutsideTexture(): void
        
        /** Sets the number of columns in the animation layout of the tile at coordinates [param atlas_coords]. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas. */
        setTileAnimationColumns(atlasCoords: Vector2I, frameColumns: int64): void
        
        /** Returns how many columns the tile at [param atlas_coords] has in its animation layout. */
        getTileAnimationColumns(atlasCoords: Vector2I): int64
        
        /** Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates [param atlas_coords] has. */
        setTileAnimationSeparation(atlasCoords: Vector2I, separation: Vector2I): void
        
        /** Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates [param atlas_coords]. */
        getTileAnimationSeparation(atlasCoords: Vector2I): Vector2I
        
        /** Sets the animation speed of the tile at coordinates [param atlas_coords] has. */
        setTileAnimationSpeed(atlasCoords: Vector2I, speed: float64): void
        
        /** Returns the animation speed of the tile at coordinates [param atlas_coords]. */
        getTileAnimationSpeed(atlasCoords: Vector2I): float64
        
        /** Sets the tile animation mode of the tile at [param atlas_coords] to [param mode]. See also [method get_tile_animation_mode]. */
        setTileAnimationMode(atlasCoords: Vector2I, mode: TileSetAtlasSource.TileAnimationMode): void
        
        /** Returns the tile animation mode of the tile at [param atlas_coords]. See also [method set_tile_animation_mode]. */
        getTileAnimationMode(atlasCoords: Vector2I): TileSetAtlasSource.TileAnimationMode
        
        /** Sets how many animation frames the tile at coordinates [param atlas_coords] has. */
        setTileAnimationFramesCount(atlasCoords: Vector2I, framesCount: int64): void
        
        /** Returns how many animation frames has the tile at coordinates [param atlas_coords]. */
        getTileAnimationFramesCount(atlasCoords: Vector2I): int64
        
        /** Sets the animation frame [param duration] of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        setTileAnimationFrameDuration(atlasCoords: Vector2I, frameIndex: int64, duration: float64): void
        
        /** Returns the animation frame duration of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        getTileAnimationFrameDuration(atlasCoords: Vector2I, frameIndex: int64): float64
        
        /** Returns the sum of the sum of the frame durations of the tile at coordinates [param atlas_coords]. This value needs to be divided by the animation speed to get the actual animation loop duration. */
        getTileAnimationTotalDuration(atlasCoords: Vector2I): float64
        
        /** Creates an alternative tile for the tile at coordinates [param atlas_coords]. If [param alternative_id_override] is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.  
         *  Returns the new alternative identifier, or -1 if the alternative could not be created with a provided [param alternative_id_override].  
         */
        createAlternativeTile(atlasCoords: Vector2I, alternativeIdOverride?: int64 /* = -1 */): int64
        
        /** Remove a tile's alternative with alternative ID [param alternative_tile].  
         *  Calling this function with [param alternative_tile] equals to 0 will fail, as the base tile alternative cannot be removed.  
         */
        removeAlternativeTile(atlasCoords: Vector2I, alternativeTile: int64): void
        
        /** Change a tile's alternative ID from [param alternative_tile] to [param new_id].  
         *  Calling this function with [param new_id] of 0 will fail, as the base tile alternative cannot be moved.  
         */
        setAlternativeTileId(atlasCoords: Vector2I, alternativeTile: int64, newId: int64): void
        
        /** Returns the alternative ID a following call to [method create_alternative_tile] would return. */
        getNextAlternativeTileId(atlasCoords: Vector2I): int64
        
        /** Returns the [TileData] object for the given atlas coordinates and alternative ID. */
        getTileData(atlasCoords: Vector2I, alternativeTile: int64): null | TileData
        
        /** Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the [member texture]'s size, the atlas [member margins], and the tiles' [member texture_region_size]. */
        getAtlasGridSize(): Vector2I
        
        /** Returns a tile's texture region in the atlas texture. For animated tiles, a [param frame] argument might be provided for the different frames of the animation. */
        getTileTextureRegion(atlasCoords: Vector2I, frame?: int64 /* = 0 */): Rect2I
        
        /** If [member use_texture_padding] is `false`, returns [member texture]. Otherwise, returns and internal [ImageTexture] created that includes the padding. */
        getRuntimeTexture(): null | Texture2D
        
        /** Returns the region of the tile at coordinates [param atlas_coords] for the given [param frame] inside the texture returned by [method get_runtime_texture].  
         *      
         *  **Note:** If [member use_texture_padding] is `false`, returns the same as [method get_tile_texture_region].  
         */
        getRuntimeTileTextureRegion(atlasCoords: Vector2I, frame: int64): Rect2I
        
        /** The atlas texture. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Margins, in pixels, to offset the origin of the grid in the texture. */
        get margins(): Vector2I
        set margins(value: Vector2I)
        
        /** Separation, in pixels, between each tile texture region of the grid. */
        get separation(): Vector2I
        set separation(value: Vector2I)
        
        /** The base tile size in the texture (in pixel). This size must be bigger than or equal to the TileSet's `tile_size` value. */
        get textureRegionSize(): Vector2I
        set textureRegionSize(value: Vector2I)
        
        /** If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.  
         *  Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.  
         */
        get useTexturePadding(): boolean
        set useTexturePadding(value: boolean)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileSetAtlasSource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileSetAtlasSource;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileSetScenesCollectionSource extends __RPCMapTileSetSource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileSetScenesCollectionSource extends __NameMapTileSetSource {
        get_scene_tiles_count: "getSceneTilesCount";
        get_scene_tile_id: "getSceneTileId";
        has_scene_tile_id: "hasSceneTileId";
        create_scene_tile: "createSceneTile";
        set_scene_tile_id: "setSceneTileId";
        set_scene_tile_scene: "setSceneTileScene";
        get_scene_tile_scene: "getSceneTileScene";
        set_scene_tile_display_placeholder: "setSceneTileDisplayPlaceholder";
        get_scene_tile_display_placeholder: "getSceneTileDisplayPlaceholder";
        remove_scene_tile: "removeSceneTile";
        get_next_scene_tile_id: "getNextSceneTileId";
    }
    /** Exposes a set of scenes as tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tilesetscenescollectionsource.html  
     */
    class TileSetScenesCollectionSource extends TileSetSource {
        constructor(identifier?: any)
        /** Returns the number or scene tiles this TileSet source has. */
        getSceneTilesCount(): int64
        
        /** Returns the scene tile ID of the scene tile at [param index]. */
        getSceneTileId(index: int64): int64
        
        /** Returns whether this TileSet source has a scene tile with [param id]. */
        hasSceneTileId(id: int64): boolean
        
        /** Creates a scene-based tile out of the given scene.  
         *  Returns a newly generated unique ID.  
         */
        createSceneTile(packedScene: PackedScene, idOverride?: int64 /* = -1 */): int64
        
        /** Changes a scene tile's ID from [param id] to [param new_id]. This will fail if there is already a tile with an ID equal to [param new_id]. */
        setSceneTileId(id: int64, newId: int64): void
        
        /** Assigns a [PackedScene] resource to the scene tile with [param id]. This will fail if the scene does not extend [CanvasItem], as positioning properties are needed to place the scene on the [TileMapLayer]. */
        setSceneTileScene(id: int64, packedScene: PackedScene): void
        
        /** Returns the [PackedScene] resource of scene tile with [param id]. */
        getSceneTileScene(id: int64): null | PackedScene
        
        /** Sets whether or not the scene tile with [param id] should display a placeholder in the editor. This might be useful for scenes that are not visible. */
        setSceneTileDisplayPlaceholder(id: int64, displayPlaceholder: boolean): void
        
        /** Returns whether the scene tile with [param id] displays a placeholder in the editor. */
        getSceneTileDisplayPlaceholder(id: int64): boolean
        
        /** Remove the scene tile with [param id]. */
        removeSceneTile(id: int64): void
        
        /** Returns the scene ID a following call to [method create_scene_tile] would return. */
        getNextSceneTileId(): int64
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileSetScenesCollectionSource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileSetScenesCollectionSource;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTileSetSource extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTileSetSource extends __NameMapResource {
        get_tiles_count: "getTilesCount";
        get_tile_id: "getTileId";
        has_tile: "hasTile";
        get_alternative_tiles_count: "getAlternativeTilesCount";
        get_alternative_tile_id: "getAlternativeTileId";
        has_alternative_tile: "hasAlternativeTile";
    }
    /** Exposes a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tilesetsource.html  
     */
    class TileSetSource extends Resource {
        constructor(identifier?: any)
        /** Returns how many tiles this atlas source defines (not including alternative tiles). */
        getTilesCount(): int64
        
        /** Returns the tile coordinates ID of the tile with index [param index]. */
        getTileId(index: int64): Vector2I
        
        /** Returns if this atlas has a tile with coordinates ID [param atlas_coords]. */
        hasTile(atlasCoords: Vector2I): boolean
        
        /** Returns the number of alternatives tiles for the coordinates ID [param atlas_coords].  
         *  For [TileSetAtlasSource], this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.  
         *  Returns -1 if there is not tile at the given coords.  
         */
        getAlternativeTilesCount(atlasCoords: Vector2I): int64
        
        /** Returns the alternative ID for the tile with coordinates ID [param atlas_coords] at index [param index]. */
        getAlternativeTileId(atlasCoords: Vector2I, index: int64): int64
        
        /** Returns if the base tile at coordinates [param atlas_coords] has an alternative with ID [param alternative_tile]. */
        hasAlternativeTile(atlasCoords: Vector2I, alternativeTile: int64): boolean
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTileSetSource;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTileSetSource;
    }
    namespace Timer {
        enum TimerProcessCallback {
            TimerProcessPhysics = 0,
            TimerProcessIdle = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTimer extends __RPCMapNode {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTimer extends __NameMapNode {
        is_stopped: "isStopped";
        process_callback: "processCallback";
        wait_time: "waitTime";
        one_shot: "oneShot";
        ignore_time_scale: "ignoreTimeScale";
        time_left: "timeLeft";
    }
    /** A countdown timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_timer.html  
     */
    class Timer<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Starts the timer, or resets the timer if it was started already. Fails if the timer is not inside the scene tree. If [param time_sec] is greater than `0`, this value is used for the [member wait_time].  
         *      
         *  **Note:** This method does not resume a paused timer. See [member paused].  
         */
        start(timeSec?: float64 /* = -1 */): void
        
        /** Stops the timer. See also [member paused]. Unlike [method start], this can safely be called if the timer is not inside the scene tree.  
         *      
         *  **Note:** Calling [method stop] does not emit the [signal timeout] signal, as the timer is not considered to have timed out. If this is desired, use `$Timer.timeout.emit()` after calling [method stop] to manually emit the signal.  
         */
        stop(): void
        
        /** Returns `true` if the timer is stopped or has not started. */
        isStopped(): boolean
        
        /** Specifies when the timer is updated during the main loop. */
        get processCallback(): int64
        set processCallback(value: int64)
        
        /** The time required for the timer to end, in seconds. This property can also be set every time [method start] is called.  
         *      
         *  **Note:** Timers can only process once per physics or process frame (depending on the [member process_callback]). An unstable framerate may cause the timer to end inconsistently, which is especially noticeable if the wait time is lower than roughly `0.05` seconds. For very short timers, it is recommended to write your own code instead of using a [Timer] node. Timers are also affected by [member Engine.time_scale].  
         */
        get waitTime(): float64
        set waitTime(value: float64)
        
        /** If `true`, the timer will stop after reaching the end. Otherwise, as by default, the timer will automatically restart. */
        get oneShot(): boolean
        set oneShot(value: boolean)
        
        /** If `true`, the timer will start immediately when it enters the scene tree.  
         *      
         *  **Note:** After the timer enters the tree, this property is automatically set to `false`.  
         *      
         *  **Note:** This property does nothing when the timer is running in the editor.  
         */
        get autostart(): boolean
        set autostart(value: boolean)
        
        /** If `true`, the timer is paused. A paused timer does not process until this property is set back to `false`, even when [method start] is called. See also [method stop]. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** If `true`, the timer will ignore [member Engine.time_scale] and update with the real, elapsed time. */
        get ignoreTimeScale(): boolean
        set ignoreTimeScale(value: boolean)
        
        /** The timer's remaining time in seconds. This is always `0` if the timer is stopped.  
         *      
         *  **Note:** This property is read-only and cannot be modified. It is based on [member wait_time].  
         */
        get timeLeft(): float64
        set timeLeft(value: float64)
        
        /** Emitted when the timer reaches the end. */
        readonly timeout: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTimer;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTimer;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTorusMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTorusMesh extends __NameMapPrimitiveMesh {
        inner_radius: "innerRadius";
        outer_radius: "outerRadius";
        ring_segments: "ringSegments";
    }
    /** Class representing a torus [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_torusmesh.html  
     */
    class TorusMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The inner radius of the torus. */
        get innerRadius(): float64
        set innerRadius(value: float64)
        
        /** The outer radius of the torus. */
        get outerRadius(): float64
        set outerRadius(value: float64)
        
        /** The number of slices the torus is constructed of. */
        get rings(): int64
        set rings(value: int64)
        
        /** The number of edges each ring of the torus is constructed of. */
        get ringSegments(): int64
        set ringSegments(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTorusMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTorusMesh;
    }
    namespace TouchScreenButton {
        enum VisibilityMode {
            VisibilityAlways = 0,
            VisibilityTouchscreenOnly = 1,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTouchScreenButton extends __RPCMapNode2D {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTouchScreenButton extends __NameMapNode2D {
        is_pressed: "isPressed";
        texture_normal: "textureNormal";
        texture_pressed: "texturePressed";
        shape_centered: "shapeCentered";
        shape_visible: "shapeVisible";
        passby_press: "passbyPress";
        visibility_mode: "visibilityMode";
    }
    /** Button for touch screen devices for gameplay use.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_touchscreenbutton.html  
     */
    class TouchScreenButton<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if this button is currently pressed. */
        isPressed(): boolean
        
        /** The button's texture for the normal state. */
        get textureNormal(): null | Texture2D
        set textureNormal(value: null | Texture2D)
        
        /** The button's texture for the pressed state. */
        get texturePressed(): null | Texture2D
        set texturePressed(value: null | Texture2D)
        
        /** The button's bitmask. */
        get bitmask(): null | Bitmap
        set bitmask(value: null | Bitmap)
        
        /** The button's shape. */
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
        get shapeCentered(): boolean
        set shapeCentered(value: boolean)
        
        /** If `true`, the button's shape is visible in the editor. */
        get shapeVisible(): boolean
        set shapeVisible(value: boolean)
        
        /** If `true`, the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.  
         *      
         *  **Note:** This is a "pass-by" (not "bypass") press mode.  
         */
        get passbyPress(): boolean
        set passbyPress(value: boolean)
        
        /** The button's action. Actions can be handled with [InputEventAction]. */
        get action(): StringName
        set action(value: StringName)
        
        /** The button's visibility mode. */
        get visibilityMode(): int64
        set visibilityMode(value: int64)
        
        /** Emitted when the button is pressed (down). */
        readonly pressed: Signal<() => void>
        
        /** Emitted when the button is released (up). */
        readonly released: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTouchScreenButton;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTouchScreenButton;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTransition extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTransition extends __NameMapRefCounted {
    }
    /** @link https://docs.godotengine.org/en/4.5/classes/class_transition.html */
    class Transition extends RefCounted {
        constructor(identifier?: any)
        play(times?: int64 /* = 1 */, delay?: float64 /* = 0 */, callback?: Callable /* = new Callable() */): void
        stop(): void
        isPlaying(): boolean
        getOwner(): null | GComponent
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTransition;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTransition;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTranslation extends __RPCMapResource {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTranslation extends __NameMapResource {
        _get_plural_message: "_getPluralMessage";
        _get_message: "_getMessage";
        add_message: "addMessage";
        add_plural_message: "addPluralMessage";
        get_message: "getMessage";
        get_plural_message: "getPluralMessage";
        erase_message: "eraseMessage";
        get_message_list: "getMessageList";
        get_translated_message_list: "getTranslatedMessageList";
        get_message_count: "getMessageCount";
    }
    /** A language translation that maps a collection of strings to their individual translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_translation.html  
     */
    class Translation extends Resource {
        constructor(identifier?: any)
        /** Virtual method to override [method get_plural_message]. */
        /* gdvirtual */ _getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int64, context: StringName): StringName
        
        /** Virtual method to override [method get_message]. */
        /* gdvirtual */ _getMessage(srcMessage: StringName, context: StringName): StringName
        
        /** Adds a message if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        addMessage(srcMessage: StringName, xlatedMessage: StringName, context?: StringName /* = '' */): void
        
        /** Adds a message involving plural translation if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         *      
         *  **Note:** Plurals are only supported in [url=https://docs.godotengine.org/en/4.5/tutorials/i18n/localization_using_gettext.html]gettext-based translations (PO)[/url], not CSV.  
         */
        addPluralMessage(srcMessage: StringName, xlatedMessages: PackedStringArray | string[], context?: StringName /* = '' */): void
        
        /** Returns a message's translation. */
        getMessage(srcMessage: StringName, context?: StringName /* = '' */): StringName
        
        /** Returns a message's translation involving plurals.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         *      
         *  **Note:** Plurals are only supported in [url=https://docs.godotengine.org/en/4.5/tutorials/i18n/localization_using_gettext.html]gettext-based translations (PO)[/url], not CSV.  
         */
        getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int64, context?: StringName /* = '' */): StringName
        
        /** Erases a message. */
        eraseMessage(srcMessage: StringName, context?: StringName /* = '' */): void
        
        /** Returns all the messages (keys). */
        getMessageList(): PackedStringArray
        
        /** Returns all the messages (translated text). */
        getTranslatedMessageList(): PackedStringArray
        
        /** Returns the number of existing messages. */
        getMessageCount(): int64
        get messages(): GDictionary
        set messages(value: GDictionary)
        
        /** The locale of the translation. */
        get locale(): string
        set locale(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTranslation;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTranslation;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTranslationDomain extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTranslationDomain extends __NameMapRefCounted {
        get_translation_object: "getTranslationObject";
        add_translation: "addTranslation";
        remove_translation: "removeTranslation";
        translate_plural: "translatePlural";
        get_locale_override: "getLocaleOverride";
        set_locale_override: "setLocaleOverride";
        pseudolocalization_enabled: "pseudolocalizationEnabled";
        pseudolocalization_accents_enabled: "pseudolocalizationAccentsEnabled";
        pseudolocalization_double_vowels_enabled: "pseudolocalizationDoubleVowelsEnabled";
        pseudolocalization_fake_bidi_enabled: "pseudolocalizationFakeBidiEnabled";
        pseudolocalization_override_enabled: "pseudolocalizationOverrideEnabled";
        pseudolocalization_skip_placeholders_enabled: "pseudolocalizationSkipPlaceholdersEnabled";
        pseudolocalization_expansion_ratio: "pseudolocalizationExpansionRatio";
        pseudolocalization_prefix: "pseudolocalizationPrefix";
        pseudolocalization_suffix: "pseudolocalizationSuffix";
    }
    /** A self-contained collection of [Translation] resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_translationdomain.html  
     */
    class TranslationDomain extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [Translation] instance that best matches [param locale]. Returns `null` if there are no matches. */
        getTranslationObject(locale: string): null | Translation
        
        /** Adds a translation. */
        addTranslation(translation: Translation): void
        
        /** Removes the given translation. */
        removeTranslation(translation: Translation): void
        
        /** Removes all translations. */
        clear(): void
        
        /** Returns the current locale's translation for the given message and context. */
        translate(message: StringName, context?: StringName /* = '' */): StringName
        
        /** Returns the current locale's translation for the given message, plural message and context.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        translatePlural(message: StringName, messagePlural: StringName, n: int64, context?: StringName /* = '' */): StringName
        
        /** Returns the locale override of the domain. Returns an empty string if locale override is disabled. */
        getLocaleOverride(): string
        
        /** Sets the locale override of the domain.  
         *  If [param locale] is an empty string, locale override is disabled. Otherwise, [param locale] will be standardized to match known locales (e.g. `en-US` would be matched to `en_US`).  
         *      
         *  **Note:** Calling this method does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] signal manually.  
         */
        setLocaleOverride(locale: string): void
        
        /** Returns the pseudolocalized string based on the [param message] passed in. */
        pseudolocalize(message: StringName): StringName
        
        /** If `true`, translation is enabled. Otherwise, [method translate] and [method translate_plural] will return the input message unchanged regardless of the current locale. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationEnabled(): boolean
        set pseudolocalizationEnabled(value: boolean)
        
        /** Replace all characters with their accented variants during pseudolocalization.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationAccentsEnabled(): boolean
        set pseudolocalizationAccentsEnabled(value: boolean)
        
        /** Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationDoubleVowelsEnabled(): boolean
        set pseudolocalizationDoubleVowelsEnabled(value: boolean)
        
        /** If `true`, emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationFakeBidiEnabled(): boolean
        set pseudolocalizationFakeBidiEnabled(value: boolean)
        
        /** Replace all characters in the string with `*`. Useful for finding non-localizable strings.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationOverrideEnabled(): boolean
        set pseudolocalizationOverrideEnabled(value: boolean)
        
        /** Skip placeholders for string formatting like `%s` or `%f` during pseudolocalization. Useful to identify strings which need additional control characters to display correctly.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationSkipPlaceholdersEnabled(): boolean
        set pseudolocalizationSkipPlaceholdersEnabled(value: boolean)
        
        /** The expansion ratio to use during pseudolocalization. A value of `0.3` is sufficient for most practical purposes, and will increase the length of each string by 30%.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationExpansionRatio(): float64
        set pseudolocalizationExpansionRatio(value: float64)
        
        /** Prefix that will be prepended to the pseudolocalized string.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationPrefix(): string
        set pseudolocalizationPrefix(value: string)
        
        /** Suffix that will be appended to the pseudolocalized string.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationSuffix(): string
        set pseudolocalizationSuffix(value: string)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTranslationDomain;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTranslationDomain;
    }
    namespace Tree {
        enum SelectMode {
            SelectSingle = 0,
            SelectRow = 1,
            SelectMulti = 2,
        }
        enum DropModeFlags {
            DropModeDisabled = 0,
            DropModeOnItem = 1,
            DropModeInbetween = 2,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTree extends __RPCMapControl {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTree extends __NameMapControl {
        create_item: "createItem";
        get_root: "getRoot";
        set_column_custom_minimum_width: "setColumnCustomMinimumWidth";
        set_column_expand: "setColumnExpand";
        set_column_expand_ratio: "setColumnExpandRatio";
        set_column_clip_content: "setColumnClipContent";
        is_column_expanding: "isColumnExpanding";
        is_column_clipping_content: "isColumnClippingContent";
        get_column_expand_ratio: "getColumnExpandRatio";
        get_column_width: "getColumnWidth";
        get_next_selected: "getNextSelected";
        get_selected: "getSelected";
        set_selected: "setSelected";
        get_selected_column: "getSelectedColumn";
        get_pressed_button: "getPressedButton";
        deselect_all: "deselectAll";
        get_edited: "getEdited";
        get_edited_column: "getEditedColumn";
        edit_selected: "editSelected";
        get_custom_popup_rect: "getCustomPopupRect";
        get_item_area_rect: "getItemAreaRect";
        get_item_at_position: "getItemAtPosition";
        get_column_at_position: "getColumnAtPosition";
        get_drop_section_at_position: "getDropSectionAtPosition";
        get_button_id_at_position: "getButtonIdAtPosition";
        ensure_cursor_is_visible: "ensureCursorIsVisible";
        set_column_title: "setColumnTitle";
        get_column_title: "getColumnTitle";
        set_column_title_alignment: "setColumnTitleAlignment";
        get_column_title_alignment: "getColumnTitleAlignment";
        set_column_title_direction: "setColumnTitleDirection";
        get_column_title_direction: "getColumnTitleDirection";
        set_column_title_language: "setColumnTitleLanguage";
        get_column_title_language: "getColumnTitleLanguage";
        get_scroll: "getScroll";
        scroll_to_item: "scrollToItem";
        column_titles_visible: "columnTitlesVisible";
        allow_reselect: "allowReselect";
        allow_rmb_select: "allowRmbSelect";
        allow_search: "allowSearch";
        hide_folding: "hideFolding";
        enable_recursive_folding: "enableRecursiveFolding";
        hide_root: "hideRoot";
        drop_mode_flags: "dropModeFlags";
        select_mode: "selectMode";
        scroll_horizontal_enabled: "scrollHorizontalEnabled";
        scroll_vertical_enabled: "scrollVerticalEnabled";
        auto_tooltip: "autoTooltip";
        item_selected: "itemSelected";
        cell_selected: "cellSelected";
        multi_selected: "multiSelected";
        item_mouse_selected: "itemMouseSelected";
        empty_clicked: "emptyClicked";
        item_edited: "itemEdited";
        custom_item_clicked: "customItemClicked";
        item_icon_double_clicked: "itemIconDoubleClicked";
        item_collapsed: "itemCollapsed";
        check_propagated_to_item: "checkPropagatedToItem";
        button_clicked: "buttonClicked";
        custom_popup_edited: "customPopupEdited";
        item_activated: "itemActivated";
        column_title_clicked: "columnTitleClicked";
        nothing_selected: "nothingSelected";
    }
    /** A control used to show a set of internal [TreeItem]s in a hierarchical structure.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tree.html  
     */
    class Tree<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Clears the tree. This removes all items. */
        clear(): void
        
        /** Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or `null`.  
         *  If [param parent] is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.  
         *  The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.  
         */
        createItem(parent?: TreeItem, index?: int64 /* = -1 */): TreeItem
        
        /** Returns the tree's root item, or `null` if the tree is empty. */
        getRoot(): null | TreeItem
        
        /** Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
        setColumnCustomMinimumWidth(column: int64, minWidth: int64): void
        
        /** If `true`, the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
        setColumnExpand(column: int64, expand: boolean): void
        
        /** Sets the relative expand ratio for a column. See [method set_column_expand]. */
        setColumnExpandRatio(column: int64, ratio: int64): void
        
        /** Allows to enable clipping for column's content, making the content size ignored. */
        setColumnClipContent(column: int64, enable: boolean): void
        
        /** Returns `true` if the column has enabled expanding (see [method set_column_expand]). */
        isColumnExpanding(column: int64): boolean
        
        /** Returns `true` if the column has enabled clipping (see [method set_column_clip_content]). */
        isColumnClippingContent(column: int64): boolean
        
        /** Returns the expand ratio assigned to the column. */
        getColumnExpandRatio(column: int64): int64
        
        /** Returns the column's width in pixels. */
        getColumnWidth(column: int64): int64
        
        /** Returns the next selected [TreeItem] after the given one, or `null` if the end is reached.  
         *  If [param from] is `null`, this returns the first selected item.  
         */
        getNextSelected(from: TreeItem): null | TreeItem
        
        /** Returns the currently focused item, or `null` if no item is focused.  
         *  In [constant SELECT_ROW] and [constant SELECT_SINGLE] modes, the focused item is same as the selected item. In [constant SELECT_MULTI] mode, the focused item is the item under the focus cursor, not necessarily selected.  
         *  To get the currently selected item(s), use [method get_next_selected].  
         */
        getSelected(): null | TreeItem
        
        /** Selects the specified [TreeItem] and column. */
        setSelected(item: TreeItem, column: int64): void
        
        /** Returns the currently focused column, or -1 if no column is focused.  
         *  In [constant SELECT_SINGLE] mode, the focused column is the selected column. In [constant SELECT_ROW] mode, the focused column is always 0 if any item is selected. In [constant SELECT_MULTI] mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.  
         *  To tell whether a column of an item is selected, use [method TreeItem.is_selected].  
         */
        getSelectedColumn(): int64
        
        /** Returns the last pressed button's index. */
        getPressedButton(): int64
        
        /** Deselects all tree items (rows and columns). In [constant SELECT_MULTI] mode also removes selection cursor. */
        deselectAll(): void
        
        /** Returns the currently edited item. Can be used with [signal item_edited] to get the item that was modified.  
         *    
         */
        getEdited(): null | TreeItem
        
        /** Returns the column for the currently edited item. */
        getEditedColumn(): int64
        
        /** Edits the selected tree item as if it was clicked.  
         *  Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be `true`.  
         *  Returns `true` if the item could be edited. Fails if no item is selected.  
         */
        editSelected(forceEdit?: boolean /* = false */): boolean
        
        /** Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [method TreeItem.set_cell_mode]. */
        getCustomPopupRect(): Rect2
        
        /** Returns the rectangle area for the specified [TreeItem]. If [param column] is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned. */
        getItemAreaRect(item: TreeItem, column?: int64 /* = -1 */, buttonIndex?: int64 /* = -1 */): Rect2
        
        /** Returns the tree item at the specified position (relative to the tree origin position). */
        getItemAtPosition(position: Vector2): null | TreeItem
        
        /** Returns the column index at [param position], or -1 if no item is there. */
        getColumnAtPosition(position: Vector2): int64
        
        /** Returns the drop section at [param position], or -100 if no item is there.  
         *  Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [enum DropModeFlags] for a description of each drop section.  
         *  To get the item which the returned drop section is relative to, use [method get_item_at_position].  
         */
        getDropSectionAtPosition(position: Vector2): int64
        
        /** Returns the button ID at [param position], or -1 if no button is there. */
        getButtonIdAtPosition(position: Vector2): int64
        
        /** Makes the currently focused cell visible.  
         *  This will scroll the tree if necessary. In [constant SELECT_ROW] mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.  
         *      
         *  **Note:** Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.  
         */
        ensureCursorIsVisible(): void
        
        /** Sets the title of a column. */
        setColumnTitle(column: int64, title: string): void
        
        /** Returns the column's title. */
        getColumnTitle(column: int64): string
        
        /** Sets the column title alignment. Note that [constant @GlobalScope.HORIZONTAL_ALIGNMENT_FILL] is not supported for column titles. */
        setColumnTitleAlignment(column: int64, titleAlignment: HorizontalAlignment): void
        
        /** Returns the column title alignment. */
        getColumnTitleAlignment(column: int64): HorizontalAlignment
        
        /** Sets column title base writing direction. */
        setColumnTitleDirection(column: int64, direction: Control.TextDirection): void
        
        /** Returns column title base writing direction. */
        getColumnTitleDirection(column: int64): Control.TextDirection
        
        /** Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setColumnTitleLanguage(column: int64, language: string): void
        
        /** Returns column title language code. */
        getColumnTitleLanguage(column: int64): string
        
        /** Returns the current scrolling position. */
        getScroll(): Vector2
        
        /** Causes the [Tree] to jump to the specified [TreeItem]. */
        scrollToItem(item: TreeItem, centerOnItem?: boolean /* = false */): void
        
        /** The number of columns. */
        get columns(): int64
        set columns(value: int64)
        
        /** If `true`, column titles are visible. */
        get columnTitlesVisible(): boolean
        set columnTitlesVisible(value: boolean)
        
        /** If `true`, the currently selected cell may be selected again. */
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        
        /** If `true`, a right mouse button click can select items. */
        get allowRmbSelect(): boolean
        set allowRmbSelect(value: boolean)
        
        /** If `true`, allows navigating the [Tree] with letter keys through incremental search. */
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        
        /** If `true`, the folding arrow is hidden. */
        get hideFolding(): boolean
        set hideFolding(value: boolean)
        
        /** If `true`, recursive folding is enabled for this [Tree]. Holding down [kbd]Shift[/kbd] while clicking the fold arrow or using `ui_right`/`ui_left` shortcuts collapses or uncollapses the [TreeItem] and all its descendants. */
        get enableRecursiveFolding(): boolean
        set enableRecursiveFolding(value: boolean)
        
        /** If `true`, the tree's root is hidden. */
        get hideRoot(): boolean
        set hideRoot(value: boolean)
        
        /** The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.  
         *  This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.  
         */
        get dropModeFlags(): int64
        set dropModeFlags(value: int64)
        
        /** Allows single or multiple selection. See the [enum SelectMode] constants. */
        get selectMode(): int64
        set selectMode(value: int64)
        
        /** If `true`, enables horizontal scrolling. */
        get scrollHorizontalEnabled(): boolean
        set scrollHorizontalEnabled(value: boolean)
        
        /** If `true`, enables vertical scrolling. */
        get scrollVerticalEnabled(): boolean
        set scrollVerticalEnabled(value: boolean)
        
        /** If `true`, tree items with no tooltip assigned display their text as their tooltip. See also [method TreeItem.get_tooltip_text] and [method TreeItem.get_button_tooltip_text]. */
        get autoTooltip(): boolean
        set autoTooltip(value: boolean)
        
        /** Emitted when an item is selected. */
        readonly itemSelected: Signal<() => void>
        
        /** Emitted when a cell is selected. */
        readonly cellSelected: Signal<() => void>
        
        /** Emitted instead of [signal item_selected] if [member select_mode] is set to [constant SELECT_MULTI]. */
        readonly multiSelected: Signal<(item: TreeItem, column: int64, selected: boolean) => void>
        
        /** Emitted when an item is selected with a mouse button. */
        readonly itemMouseSelected: Signal<(mousePosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when a mouse button is clicked in the empty space of the tree. */
        readonly emptyClicked: Signal<(clickPosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when an item is edited. */
        readonly itemEdited: Signal<() => void>
        
        /** Emitted when an item with [constant TreeItem.CELL_MODE_CUSTOM] is clicked with a mouse button. */
        readonly customItemClicked: Signal<(mouseButtonIndex: int64) => void>
        
        /** Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [signal item_activated]. */
        readonly itemIconDoubleClicked: Signal<() => void>
        
        /** Emitted when an item is expanded or collapsed by clicking on the folding arrow or through code.  
         *      
         *  **Note:** Despite its name, this signal is also emitted when an item is expanded.  
         */
        readonly itemCollapsed: Signal<(item: TreeItem) => void>
        
        /** Emitted when [method TreeItem.propagate_check] is called. Connect to this signal to process the items that are affected when [method TreeItem.propagate_check] is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item. */
        readonly checkPropagatedToItem: Signal<(item: TreeItem, column: int64) => void>
        
        /** Emitted when a button on the tree was pressed (see [method TreeItem.add_button]). */
        readonly buttonClicked: Signal<(item: TreeItem, column: int64, id: int64, mouseButtonIndex: int64) => void>
        
        /** Emitted when a cell with the [constant TreeItem.CELL_MODE_CUSTOM] is clicked to be edited. */
        readonly customPopupEdited: Signal<(arrowClicked: boolean) => void>
        
        /** Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using [kbd]Enter[/kbd] or [kbd]Space[/kbd] on the keyboard). */
        readonly itemActivated: Signal<() => void>
        
        /** Emitted when a column's title is clicked with either [constant MOUSE_BUTTON_LEFT] or [constant MOUSE_BUTTON_RIGHT]. */
        readonly columnTitleClicked: Signal<(column: int64, mouseButtonIndex: int64) => void>
        
        /** Emitted when a left mouse button click does not select any item. */
        readonly nothingSelected: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTree;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTree;
    }
    namespace TreeItem {
        enum TreeCellMode {
            CellModeString = 0,
            CellModeCheck = 1,
            CellModeRange = 2,
            CellModeIcon = 3,
            CellModeCustom = 4,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTreeItem extends __RPCMapGObject {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTreeItem extends __NameMapGObject {
        set_cell_mode: "setCellMode";
        get_cell_mode: "getCellMode";
        set_auto_translate_mode: "setAutoTranslateMode";
        get_auto_translate_mode: "getAutoTranslateMode";
        set_edit_multiline: "setEditMultiline";
        is_edit_multiline: "isEditMultiline";
        set_checked: "setChecked";
        set_indeterminate: "setIndeterminate";
        is_checked: "isChecked";
        is_indeterminate: "isIndeterminate";
        propagate_check: "propagateCheck";
        set_text: "setText";
        get_text: "getText";
        set_description: "setDescription";
        get_description: "getDescription";
        set_text_direction: "setTextDirection";
        get_text_direction: "getTextDirection";
        set_autowrap_mode: "setAutowrapMode";
        get_autowrap_mode: "getAutowrapMode";
        set_text_overrun_behavior: "setTextOverrunBehavior";
        get_text_overrun_behavior: "getTextOverrunBehavior";
        set_structured_text_bidi_override: "setStructuredTextBidiOverride";
        get_structured_text_bidi_override: "getStructuredTextBidiOverride";
        set_structured_text_bidi_override_options: "setStructuredTextBidiOverrideOptions";
        get_structured_text_bidi_override_options: "getStructuredTextBidiOverrideOptions";
        set_language: "setLanguage";
        get_language: "getLanguage";
        set_suffix: "setSuffix";
        get_suffix: "getSuffix";
        set_icon: "setIcon";
        get_icon: "getIcon";
        set_icon_overlay: "setIconOverlay";
        get_icon_overlay: "getIconOverlay";
        set_icon_region: "setIconRegion";
        get_icon_region: "getIconRegion";
        set_icon_max_width: "setIconMaxWidth";
        get_icon_max_width: "getIconMaxWidth";
        set_icon_modulate: "setIconModulate";
        get_icon_modulate: "getIconModulate";
        set_range: "setRange";
        get_range: "getRange";
        set_range_config: "setRangeConfig";
        get_range_config: "getRangeConfig";
        set_metadata: "setMetadata";
        get_metadata: "getMetadata";
        set_custom_draw: "setCustomDraw";
        set_custom_draw_callback: "setCustomDrawCallback";
        get_custom_draw_callback: "getCustomDrawCallback";
        set_collapsed_recursive: "setCollapsedRecursive";
        is_any_collapsed: "isAnyCollapsed";
        is_visible_in_tree: "isVisibleInTree";
        uncollapse_tree: "uncollapseTree";
        set_selectable: "setSelectable";
        is_selectable: "isSelectable";
        is_selected: "isSelected";
        set_editable: "setEditable";
        is_editable: "isEditable";
        set_custom_color: "setCustomColor";
        get_custom_color: "getCustomColor";
        clear_custom_color: "clearCustomColor";
        set_custom_font: "setCustomFont";
        get_custom_font: "getCustomFont";
        set_custom_font_size: "setCustomFontSize";
        get_custom_font_size: "getCustomFontSize";
        set_custom_bg_color: "setCustomBgColor";
        clear_custom_bg_color: "clearCustomBgColor";
        get_custom_bg_color: "getCustomBgColor";
        set_custom_as_button: "setCustomAsButton";
        is_custom_set_as_button: "isCustomSetAsButton";
        clear_buttons: "clearButtons";
        add_button: "addButton";
        get_button_count: "getButtonCount";
        get_button_tooltip_text: "getButtonTooltipText";
        get_button_id: "getButtonId";
        get_button_by_id: "getButtonById";
        get_button_color: "getButtonColor";
        get_button: "getButton";
        set_button_tooltip_text: "setButtonTooltipText";
        set_button: "setButton";
        erase_button: "eraseButton";
        set_button_description: "setButtonDescription";
        set_button_disabled: "setButtonDisabled";
        set_button_color: "setButtonColor";
        is_button_disabled: "isButtonDisabled";
        set_tooltip_text: "setTooltipText";
        get_tooltip_text: "getTooltipText";
        set_text_alignment: "setTextAlignment";
        get_text_alignment: "getTextAlignment";
        set_expand_right: "setExpandRight";
        get_expand_right: "getExpandRight";
        create_child: "createChild";
        add_child: "addChild";
        remove_child: "removeChild";
        get_tree: "getTree";
        get_next: "getNext";
        get_prev: "getPrev";
        get_parent: "getParent";
        get_first_child: "getFirstChild";
        get_next_in_tree: "getNextInTree";
        get_prev_in_tree: "getPrevInTree";
        get_next_visible: "getNextVisible";
        get_prev_visible: "getPrevVisible";
        get_child: "getChild";
        get_child_count: "getChildCount";
        get_children: "getChildren";
        get_index: "getIndex";
        move_before: "moveBefore";
        move_after: "moveAfter";
        call_recursive: "callRecursive";
        disable_folding: "disableFolding";
        custom_minimum_height: "customMinimumHeight";
    }
    /** An internal control for a single item inside [Tree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_treeitem.html  
     */
    class TreeItem extends GObject {
        constructor(identifier?: any)
        /** Sets the given column's cell mode to [param mode]. This determines how the cell is displayed and edited. */
        setCellMode(column: int64, mode: TreeItem.TreeCellMode): void
        
        /** Returns the column's cell mode. */
        getCellMode(column: int64): TreeItem.TreeCellMode
        
        /** Sets the given column's auto translate mode to [param mode].  
         *  All columns use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [Tree] itself.  
         */
        setAutoTranslateMode(column: int64, mode: Node.AutoTranslateMode): void
        
        /** Returns the column's auto translate mode. */
        getAutoTranslateMode(column: int64): Node.AutoTranslateMode
        
        /** If [param multiline] is `true`, the given [param column] is multiline editable.  
         *      
         *  **Note:** This option only affects the type of control ([LineEdit] or [TextEdit]) that appears when editing the column. You can set multiline values with [method set_text] even if the column is not multiline editable.  
         */
        setEditMultiline(column: int64, multiline: boolean): void
        
        /** Returns `true` if the given [param column] is multiline editable. */
        isEditMultiline(column: int64): boolean
        
        /** If [param checked] is `true`, the given [param column] is checked. Clears column's indeterminate status. */
        setChecked(column: int64, checked: boolean): void
        
        /** If [param indeterminate] is `true`, the given [param column] is marked indeterminate.  
         *      
         *  **Note:** If set `true` from `false`, then column is cleared of checked status.  
         */
        setIndeterminate(column: int64, indeterminate: boolean): void
        
        /** Returns `true` if the given [param column] is checked. */
        isChecked(column: int64): boolean
        
        /** Returns `true` if the given [param column] is indeterminate. */
        isIndeterminate(column: int64): boolean
        
        /** Propagates this item's checked status to its children and parents for the given [param column]. It is possible to process the items affected by this method call by connecting to [signal Tree.check_propagated_to_item]. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If [param emit_signal] is `false`, then [signal Tree.check_propagated_to_item] will not be emitted. */
        propagateCheck(column: int64, emitSignal?: boolean /* = true */): void
        
        /** Sets the given column's text value. */
        setText(column: int64, text: string): void
        
        /** Returns the given column's text. */
        getText(column: int64): string
        
        /** Sets the given column's description for assistive apps. */
        setDescription(column: int64, description: string): void
        
        /** Returns the given column's description for assistive apps. */
        getDescription(column: int64): string
        
        /** Sets item's text base writing direction. */
        setTextDirection(column: int64, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        getTextDirection(column: int64): Control.TextDirection
        
        /** Sets the autowrap mode in the given [param column]. If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the cell's bounding rectangle. */
        setAutowrapMode(column: int64, autowrapMode: TextServer.AutowrapMode): void
        
        /** Returns the text autowrap mode in the given [param column]. By default it is [constant TextServer.AUTOWRAP_OFF]. */
        getAutowrapMode(column: int64): TextServer.AutowrapMode
        
        /** Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. */
        setTextOverrunBehavior(column: int64, overrunBehavior: TextServer.OverrunBehavior): void
        
        /** Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. By default it is [constant TextServer.OVERRUN_TRIM_ELLIPSIS]. */
        getTextOverrunBehavior(column: int64): TextServer.OverrunBehavior
        
        /** Set BiDi algorithm override for the structured text. Has effect for cells that display text. */
        setStructuredTextBidiOverride(column: int64, parser: TextServer.StructuredTextParser): void
        
        /** Returns the BiDi algorithm override set for this cell. */
        getStructuredTextBidiOverride(column: int64): TextServer.StructuredTextParser
        
        /** Set additional options for BiDi override. Has effect for cells that display text. */
        setStructuredTextBidiOverrideOptions(column: int64, args: GArray): void
        
        /** Returns the additional BiDi options set for this cell. */
        getStructuredTextBidiOverrideOptions(column: int64): GArray
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setLanguage(column: int64, language: string): void
        
        /** Returns item's text language code. */
        getLanguage(column: int64): string
        
        /** Sets a string to be shown after a column's value (for example, a unit abbreviation). */
        setSuffix(column: int64, text: string): void
        
        /** Gets the suffix string shown after the column value. */
        getSuffix(column: int64): string
        
        /** Sets the given cell's icon [Texture2D]. If the cell is in [constant CELL_MODE_ICON] mode, the icon is displayed in the center of the cell. Otherwise, the icon is displayed before the cell's text. [constant CELL_MODE_RANGE] does not display an icon. */
        setIcon(column: int64, texture: Texture2D): void
        
        /** Returns the given column's icon [Texture2D]. Error if no icon is set. */
        getIcon(column: int64): null | Texture2D
        
        /** Sets the given cell's icon overlay [Texture2D]. The cell has to be in [constant CELL_MODE_ICON] mode, and icon has to be set. Overlay is drawn on top of icon, in the bottom left corner. */
        setIconOverlay(column: int64, texture: Texture2D): void
        
        /** Returns the given column's icon overlay [Texture2D]. */
        getIconOverlay(column: int64): null | Texture2D
        
        /** Sets the given column's icon's texture region. */
        setIconRegion(column: int64, region: Rect2): void
        
        /** Returns the icon [Texture2D] region as [Rect2]. */
        getIconRegion(column: int64): Rect2
        
        /** Sets the maximum allowed width of the icon in the given [param column]. This limit is applied on top of the default size of the icon and on top of [theme_item Tree.icon_max_width]. The height is adjusted according to the icon's ratio. */
        setIconMaxWidth(column: int64, width: int64): void
        
        /** Returns the maximum allowed width of the icon in the given [param column]. */
        getIconMaxWidth(column: int64): int64
        
        /** Modulates the given column's icon with [param modulate]. */
        setIconModulate(column: int64, modulate: Color): void
        
        /** Returns the [Color] modulating the column's icon. */
        getIconModulate(column: int64): Color
        
        /** Sets the value of a [constant CELL_MODE_RANGE] column. */
        setRange(column: int64, value: float64): void
        
        /** Returns the value of a [constant CELL_MODE_RANGE] column. */
        getRange(column: int64): float64
        
        /** Sets the range of accepted values for a column. The column must be in the [constant CELL_MODE_RANGE] mode.  
         *  If [param expr] is `true`, the edit mode slider will use an exponential scale as with [member Range.exp_edit].  
         */
        setRangeConfig(column: int64, min: float64, max: float64, step: float64, expr?: boolean /* = false */): void
        
        /** Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr". */
        getRangeConfig(column: int64): GDictionary
        
        /** Sets the metadata value for the given column, which can be retrieved later using [method get_metadata]. This can be used, for example, to store a reference to the original data. */
        setMetadata(column: int64, meta: any): void
        
        /** Returns the metadata value that was set for the given column using [method set_metadata]. */
        getMetadata(column: int64): any
        
        /** Sets the given column's custom draw callback to the [param callback] method on [param object].  
         *  The method named [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        setCustomDraw(column: int64, object: GObject, callback: StringName): void
        
        /** Sets the given column's custom draw callback. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the custom callback. The cell has to be in [constant CELL_MODE_CUSTOM] to use this feature.  
         *  The [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        setCustomDrawCallback(column: int64, callback: Callable): void
        
        /** Returns the custom callback of column [param column]. */
        getCustomDrawCallback(column: int64): Callable
        
        /** Collapses or uncollapses this [TreeItem] and all the descendants of this item. */
        setCollapsedRecursive(enable: boolean): void
        
        /** Returns `true` if this [TreeItem], or any of its descendants, is collapsed.  
         *  If [param only_visible] is `true` it ignores non-visible [TreeItem]s.  
         */
        isAnyCollapsed(onlyVisible?: boolean /* = false */): boolean
        
        /** Returns `true` if [member visible] is `true` and all its ancestors are also visible. */
        isVisibleInTree(): boolean
        
        /** Uncollapses all [TreeItem]s necessary to reveal this [TreeItem], i.e. all ancestor [TreeItem]s. */
        uncollapseTree(): void
        
        /** If [param selectable] is `true`, the given [param column] is selectable. */
        setSelectable(column: int64, selectable: boolean): void
        
        /** Returns `true` if the given [param column] is selectable. */
        isSelectable(column: int64): boolean
        
        /** Returns `true` if the given [param column] is selected. */
        isSelected(column: int64): boolean
        
        /** Selects the given [param column]. */
        select(column: int64): void
        
        /** Deselects the given column. */
        deselect(column: int64): void
        
        /** If [param enabled] is `true`, the given [param column] is editable. */
        setEditable(column: int64, enabled: boolean): void
        
        /** Returns `true` if the given [param column] is editable. */
        isEditable(column: int64): boolean
        
        /** Sets the given column's custom color. */
        setCustomColor(column: int64, color: Color): void
        
        /** Returns the custom color of column [param column]. */
        getCustomColor(column: int64): Color
        
        /** Resets the color for the given column to default. */
        clearCustomColor(column: int64): void
        
        /** Sets custom font used to draw text in the given [param column]. */
        setCustomFont(column: int64, font: Font): void
        
        /** Returns custom font used to draw text in the column [param column]. */
        getCustomFont(column: int64): null | Font
        
        /** Sets custom font size used to draw text in the given [param column]. */
        setCustomFontSize(column: int64, fontSize: int64): void
        
        /** Returns custom font size used to draw text in the column [param column]. */
        getCustomFontSize(column: int64): int64
        
        /** Sets the given column's custom background color and whether to just use it as an outline. */
        setCustomBgColor(column: int64, color: Color, justOutline?: boolean /* = false */): void
        
        /** Resets the background color for the given column to default. */
        clearCustomBgColor(column: int64): void
        
        /** Returns the custom background color of column [param column]. */
        getCustomBgColor(column: int64): Color
        
        /** Makes a cell with [constant CELL_MODE_CUSTOM] display as a non-flat button with a [StyleBox]. */
        setCustomAsButton(column: int64, enable: boolean): void
        
        /** Returns `true` if the cell was made into a button with [method set_custom_as_button]. */
        isCustomSetAsButton(column: int64): boolean
        
        /** Removes all buttons from all columns of this item. */
        clearButtons(): void
        
        /** Adds a button with [Texture2D] [param button] to the end of the cell at column [param column]. The [param id] is used to identify the button in the according [signal Tree.button_clicked] signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling [method get_button_count] immediately before this method. Optionally, the button can be [param disabled] and have a [param tooltip_text]. [param description] is used as the button description for assistive apps. */
        addButton(column: int64, button: Texture2D, id?: int64 /* = -1 */, disabled?: boolean /* = false */, tooltipText?: string /* = '' */, description?: string /* = '' */): void
        
        /** Returns the number of buttons in column [param column]. */
        getButtonCount(column: int64): int64
        
        /** Returns the tooltip text for the button at index [param button_index] in column [param column]. */
        getButtonTooltipText(column: int64, buttonIndex: int64): string
        
        /** Returns the ID for the button at index [param button_index] in column [param column]. */
        getButtonId(column: int64, buttonIndex: int64): int64
        
        /** Returns the button index if there is a button with ID [param id] in column [param column], otherwise returns -1. */
        getButtonById(column: int64, id: int64): int64
        
        /** Returns the color of the button with ID [param id] in column [param column]. If the specified button does not exist, returns [constant Color.BLACK]. */
        getButtonColor(column: int64, id: int64): Color
        
        /** Returns the [Texture2D] of the button at index [param button_index] in column [param column]. */
        getButton(column: int64, buttonIndex: int64): null | Texture2D
        
        /** Sets the tooltip text for the button at index [param button_index] in the given [param column]. */
        setButtonTooltipText(column: int64, buttonIndex: int64, tooltip: string): void
        
        /** Sets the given column's button [Texture2D] at index [param button_index] to [param button]. */
        setButton(column: int64, buttonIndex: int64, button: Texture2D): void
        
        /** Removes the button at index [param button_index] in column [param column]. */
        eraseButton(column: int64, buttonIndex: int64): void
        
        /** Sets the given column's button description at index [param button_index] for assistive apps. */
        setButtonDescription(column: int64, buttonIndex: int64, description: string): void
        
        /** If `true`, disables the button at index [param button_index] in the given [param column]. */
        setButtonDisabled(column: int64, buttonIndex: int64, disabled: boolean): void
        
        /** Sets the given column's button color at index [param button_index] to [param color]. */
        setButtonColor(column: int64, buttonIndex: int64, color: Color): void
        
        /** Returns `true` if the button at index [param button_index] for the given [param column] is disabled. */
        isButtonDisabled(column: int64, buttonIndex: int64): boolean
        
        /** Sets the given column's tooltip text. */
        setTooltipText(column: int64, tooltip: string): void
        
        /** Returns the given column's tooltip text. */
        getTooltipText(column: int64): string
        
        /** Sets the given column's text alignment to [param text_alignment]. */
        setTextAlignment(column: int64, textAlignment: HorizontalAlignment): void
        
        /** Returns the given column's text alignment. */
        getTextAlignment(column: int64): HorizontalAlignment
        
        /** If [param enable] is `true`, the given [param column] is expanded to the right. */
        setExpandRight(column: int64, enable: boolean): void
        
        /** Returns `true` if `expand_right` is set. */
        getExpandRight(column: int64): boolean
        
        /** Creates an item and adds it as a child.  
         *  The new item will be inserted as position [param index] (the default value `-1` means the last position), or it will be the last child if [param index] is higher than the child count.  
         */
        createChild(index?: int64 /* = -1 */): TreeItem
        
        /** Adds a previously unparented [TreeItem] as a direct child of this one. The [param child] item must not be a part of any [Tree] or parented to any [TreeItem]. See also [method remove_child]. */
        addChild(child: TreeItem): void
        
        /** Removes the given child [TreeItem] and all its children from the [Tree]. Note that it doesn't free the item from memory, so it can be reused later (see [method add_child]). To completely remove a [TreeItem] use [method Object.free].  
         *      
         *  **Note:** If you want to move a child from one [Tree] to another, then instead of removing and adding it manually you can use [method move_before] or [method move_after].  
         */
        removeChild(child: TreeItem): void
        
        /** Returns the [Tree] that owns this TreeItem. */
        getTree(): null | Tree
        
        /** Returns the next sibling TreeItem in the tree or a `null` object if there is none. */
        getNext(): null | TreeItem
        
        /** Returns the previous sibling TreeItem in the tree or a `null` object if there is none. */
        getPrev(): null | TreeItem
        
        /** Returns the parent TreeItem or a `null` object if there is none. */
        getParent(): null | TreeItem
        
        /** Returns the TreeItem's first child. */
        getFirstChild(): null | TreeItem
        
        /** Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.  
         */
        getNextInTree(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        getPrevInTree(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.  
         */
        getNextVisible(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        getPrevVisible(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns a child item by its [param index] (see [method get_child_count]). This method is often used for iterating all children of an item.  
         *  Negative indices access the children from the last one.  
         */
        getChild(index: int64): null | TreeItem
        
        /** Returns the number of child items. */
        getChildCount(): int64
        
        /** Returns an array of references to the item's children. */
        getChildren(): GArray<TreeItem>
        
        /** Returns the node's order in the tree. For example, if called on the first child item the position is `0`. */
        getIndex(): int64
        
        /** Moves this TreeItem right before the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        moveBefore(item: TreeItem): void
        
        /** Moves this TreeItem right after the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        moveAfter(item: TreeItem): void
        
        /** Calls the [param method] on the actual TreeItem and its children recursively. Pass parameters as a comma separated list. */
        callRecursive(method: StringName, ...varargs: any[]): void
        
        /** If `true`, the TreeItem is collapsed. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        
        /** If `true`, the [TreeItem] is visible (default).  
         *  Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, folding is disabled for this TreeItem. */
        get disableFolding(): boolean
        set disableFolding(value: boolean)
        
        /** The custom minimum height. */
        get customMinimumHeight(): int64
        set customMinimumHeight(value: int64)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTreeItem;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTreeItem;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTriangleMesh extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTriangleMesh extends __NameMapRefCounted {
        create_from_faces: "createFromFaces";
        get_faces: "getFaces";
        intersect_segment: "intersectSegment";
        intersect_ray: "intersectRay";
    }
    /** Triangle geometry for efficient, physicsless intersection queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_trianglemesh.html  
     */
    class TriangleMesh extends RefCounted {
        constructor(identifier?: any)
        /** Creates the BVH tree from an array of faces. Each 3 vertices of the input [param faces] array represent one triangle (face).  
         *  Returns `true` if the tree is successfully built, `false` otherwise.  
         */
        createFromFaces(faces: PackedVector3Array | Vector3[]): boolean
        
        /** Returns a copy of the geometry faces. Each 3 vertices of the array represent one triangle (face). */
        getFaces(): PackedVector3Array
        
        /** Tests for intersection with a segment going from [param begin] to [param end].  
         *  If an intersection with a triangle happens returns a [Dictionary] with the following fields:  
         *  `position`: The position on the intersected triangle.  
         *  `normal`: The normal of the intersected triangle.  
         *  `face_index`: The index of the intersected triangle.  
         *  Returns an empty [Dictionary] if no intersection happens.  
         *  See also [method intersect_ray], which is similar but uses an infinite-length ray.  
         */
        intersectSegment(begin: Vector3, end: Vector3): GDictionary
        
        /** Tests for intersection with a ray starting at [param begin] and facing [param dir] and extending toward infinity.  
         *  If an intersection with a triangle happens, returns a [Dictionary] with the following fields:  
         *  `position`: The position on the intersected triangle.  
         *  `normal`: The normal of the intersected triangle.  
         *  `face_index`: The index of the intersected triangle.  
         *  Returns an empty [Dictionary] if no intersection happens.  
         *  See also [method intersect_segment], which is similar but uses a finite-length segment.  
         */
        intersectRay(begin: Vector3, dir: Vector3): GDictionary
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTriangleMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTriangleMesh;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTubeTrailMesh extends __RPCMapPrimitiveMesh {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTubeTrailMesh extends __NameMapPrimitiveMesh {
        radial_steps: "radialSteps";
        section_length: "sectionLength";
        section_rings: "sectionRings";
        cap_top: "capTop";
        cap_bottom: "capBottom";
    }
    /** Represents a straight tube-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tubetrailmesh.html  
     */
    class TubeTrailMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the [member curve] at the given distance. */
        get radius(): float64
        set radius(value: float64)
        
        /** The number of sides on the tube. For example, a value of `5` means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance. */
        get radialSteps(): int64
        set radialSteps(value: int64)
        
        /** The total number of sections on the tube. */
        get sections(): int64
        set sections(value: int64)
        
        /** The length of a section of the tube. */
        get sectionLength(): float64
        set sectionLength(value: float64)
        
        /** The number of rings in a section. The [member curve] is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance. */
        get sectionRings(): int64
        set sectionRings(value: int64)
        
        /** If `true`, generates a cap at the top of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get capTop(): boolean
        set capTop(value: boolean)
        
        /** If `true`, generates a cap at the bottom of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get capBottom(): boolean
        set capBottom(value: boolean)
        
        /** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit [Curve]. */
        get curve(): null | Curve
        set curve(value: null | Curve)
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTubeTrailMesh;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTubeTrailMesh;
    }
    namespace Tween {
        enum TweenProcessMode {
            TweenProcessPhysics = 0,
            TweenProcessIdle = 1,
        }
        enum TweenPauseMode {
            TweenPauseBound = 0,
            TweenPauseStop = 1,
            TweenPauseProcess = 2,
        }
        enum TransitionType {
            TransLinear = 0,
            TransSine = 1,
            TransQuint = 2,
            TransQuart = 3,
            TransQuad = 4,
            TransExpo = 5,
            TransElastic = 6,
            TransCubic = 7,
            TransCirc = 8,
            TransBounce = 9,
            TransBack = 10,
            TransSpring = 11,
        }
        enum EaseType {
            EaseIn = 0,
            EaseOut = 1,
            EaseInOut = 2,
            EaseOutIn = 3,
        }
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTween extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTween extends __NameMapRefCounted {
        tween_property: "tweenProperty";
        tween_interval: "tweenInterval";
        tween_callback: "tweenCallback";
        tween_method: "tweenMethod";
        tween_subtween: "tweenSubtween";
        custom_step: "customStep";
        get_total_elapsed_time: "getTotalElapsedTime";
        is_running: "isRunning";
        is_valid: "isValid";
        bind_node: "bindNode";
        set_process_mode: "setProcessMode";
        set_pause_mode: "setPauseMode";
        set_ignore_time_scale: "setIgnoreTimeScale";
        set_parallel: "setParallel";
        set_loops: "setLoops";
        get_loops_left: "getLoopsLeft";
        set_speed_scale: "setSpeedScale";
        set_trans: "setTrans";
        set_ease: "setEase";
        interpolate_value: "interpolateValue";
        step_finished: "stepFinished";
        loop_finished: "loopFinished";
    }
    /** Lightweight object used for general-purpose animation via script, using [Tweener]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tween.html  
     */
    class Tween extends RefCounted {
        constructor(identifier?: any)
        /** Creates and appends a [PropertyTweener]. This method tweens a [param property] of an [param object] between an initial value and [param final_val] in a span of time equal to [param duration], in seconds. The initial value by default is the property's value at the time the tweening of the [PropertyTweener] starts.  
         *    
         *  will move the sprite to position (100, 200) and then to (200, 300). If you use [method PropertyTweener.from] or [method PropertyTweener.from_current], the starting position will be overwritten by the given value instead. See other methods in [PropertyTweener] to see how the tweening can be tweaked further.  
         *      
         *  **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.  
         *  **Example:** Moving an object twice from the same position, with different transition types:  
         *    
         */
        tweenProperty(object: GObject, property: NodePath | string, finalVal: any, duration: float64): null | PropertyTweener
        
        /** Creates and appends an [IntervalTweener]. This method can be used to create delays in the tween animation, as an alternative to using the delay in other [Tweener]s, or when there's no animation (in which case the [Tween] acts as a timer). [param time] is the length of the interval, in seconds.  
         *  **Example:** Creating an interval in code execution:  
         *    
         *  **Example:** Creating an object that moves back and forth and jumps every few seconds:  
         *    
         */
        tweenInterval(time: float64): null | IntervalTweener
        
        /** Creates and appends a [CallbackTweener]. This method can be used to call an arbitrary method in any object. Use [method Callable.bind] to bind additional arguments for the call.  
         *  **Example:** Object that keeps shooting every 1 second:  
         *    
         *  **Example:** Turning a sprite red and then blue, with 2 second delay:  
         *    
         */
        tweenCallback(callback: Callable): null | CallbackTweener
        
        /** Creates and appends a [MethodTweener]. This method is similar to a combination of [method tween_callback] and [method tween_property]. It calls a method over time with a tweened value provided as an argument. The value is tweened between [param from] and [param to] over the time specified by [param duration], in seconds. Use [method Callable.bind] to bind additional arguments for the call. You can use [method MethodTweener.set_ease] and [method MethodTweener.set_trans] to tweak the easing and transition of the value or [method MethodTweener.set_delay] to delay the tweening.  
         *  **Example:** Making a 3D object look from one point to another point:  
         *    
         *  **Example:** Setting the text of a [Label], using an intermediate method and after a delay:  
         *    
         */
        tweenMethod(method: Callable, from: any, to: any, duration: float64): null | MethodTweener
        
        /** Creates and appends a [SubtweenTweener]. This method can be used to nest [param subtween] within this [Tween], allowing for the creation of more complex and composable sequences.  
         *    
         *      
         *  **Note:** The methods [method pause], [method stop], and [method set_loops] can cause the parent [Tween] to get stuck on the subtween step; see the documentation for those methods for more information.  
         *      
         *  **Note:** The pause and process modes set by [method set_pause_mode] and [method set_process_mode] on [param subtween] will be overridden by the parent [Tween]'s settings.  
         */
        tweenSubtween(subtween: Tween): null | SubtweenTweener
        
        /** Processes the [Tween] by the given [param delta] value, in seconds. This is mostly useful for manual control when the [Tween] is paused. It can also be used to end the [Tween] animation immediately, by setting [param delta] longer than the whole duration of the [Tween] animation.  
         *  Returns `true` if the [Tween] still has [Tweener]s that haven't finished.  
         */
        customStep(delta: float64): boolean
        
        /** Stops the tweening and resets the [Tween] to its initial state. This will not remove any appended [Tweener]s.  
         *      
         *  **Note:** This does  *not*  reset targets of [PropertyTweener]s to their values when the [Tween] first started.  
         *    
         *      
         *  **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        stop(): void
        
        /** Pauses the tweening. The animation can be resumed by using [method play].  
         *      
         *  **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        pause(): void
        
        /** Resumes a paused or stopped [Tween]. */
        play(): void
        
        /** Aborts all tweening operations and invalidates the [Tween]. */
        kill(): void
        
        /** Returns the total time in seconds the [Tween] has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [method set_speed_scale], and [method stop] will reset it to `0`.  
         *      
         *  **Note:** As it results from accumulating frame deltas, the time returned after the [Tween] has finished animating will be slightly greater than the actual [Tween] duration.  
         */
        getTotalElapsedTime(): float64
        
        /** Returns whether the [Tween] is currently running, i.e. it wasn't paused and it's not finished. */
        isRunning(): boolean
        
        /** Returns whether the [Tween] is valid. A valid [Tween] is a [Tween] contained by the scene tree (i.e. the array from [method SceneTree.get_processed_tweens] will contain this [Tween]). A [Tween] might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid [Tween]s can't have [Tweener]s appended. */
        isValid(): boolean
        
        /** Binds this [Tween] with the given [param node]. [Tween]s are processed directly by the [SceneTree], so they run independently of the animated nodes. When you bind a [Node] with the [Tween], the [Tween] will halt the animation when the object is not inside tree and the [Tween] will be automatically killed when the bound object is freed. Also [constant TWEEN_PAUSE_BOUND] will make the pausing behavior dependent on the bound node.  
         *  For a shorter way to create and bind a [Tween], you can use [method Node.create_tween].  
         */
        bindNode(node: Node): null | Tween
        
        /** Determines whether the [Tween] should run after process frames (see [method Node._process]) or physics frames (see [method Node._physics_process]).  
         *  Default value is [constant TWEEN_PROCESS_IDLE].  
         */
        setProcessMode(mode: Tween.TweenProcessMode): null | Tween
        
        /** Determines the behavior of the [Tween] when the [SceneTree] is paused.  
         *  Default value is [constant TWEEN_PAUSE_BOUND].  
         */
        setPauseMode(mode: Tween.TweenPauseMode): null | Tween
        
        /** If [param ignore] is `true`, the tween will ignore [member Engine.time_scale] and update with the real, elapsed time. This affects all [Tweener]s and their delays. Default value is `false`. */
        setIgnoreTimeScale(ignore?: boolean /* = true */): null | Tween
        
        /** If [param parallel] is `true`, the [Tweener]s appended after this method will by default run simultaneously, as opposed to sequentially.  
         *      
         *  **Note:** Just like with [method parallel], the tweener added right before this method will also be part of the parallel step.  
         *    
         */
        setParallel(parallel?: boolean /* = true */): null | Tween
        
        /** Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.  
         *  Calling this method without arguments will make the [Tween] run infinitely, until either it is killed with [method kill], the [Tween]'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).  
         *  **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [CallbackTweener] with no delay) are stopped after a small number of loops, which may produce unexpected results. If a [Tween]'s lifetime depends on some node, always use [method bind_node].  
         */
        setLoops(loops?: int64 /* = 0 */): null | Tween
        
        /** Returns the number of remaining loops for this [Tween] (see [method set_loops]). A return value of `-1` indicates an infinitely looping [Tween], and a return value of `0` indicates that the [Tween] has already finished. */
        getLoopsLeft(): int64
        
        /** Scales the speed of tweening. This affects all [Tweener]s and their delays. */
        setSpeedScale(speed: float64): null | Tween
        
        /** Sets the default transition type for [PropertyTweener]s and [MethodTweener]s appended after this method.  
         *  Before this method is called, the default transition type is [constant TRANS_LINEAR].  
         *    
         */
        setTrans(trans: Tween.TransitionType): null | Tween
        
        /** Sets the default ease type for [PropertyTweener]s and [MethodTweener]s appended after this method.  
         *  Before this method is called, the default ease type is [constant EASE_IN_OUT].  
         *    
         */
        setEase(ease: Tween.EaseType): null | Tween
        
        /** Makes the next [Tweener] run parallelly to the previous one.  
         *    
         *  All [Tweener]s in the example will run at the same time.  
         *  You can make the [Tween] parallel by default by using [method set_parallel].  
         */
        parallel(): null | Tween
        
        /** Used to chain two [Tweener]s after [method set_parallel] is called with `true`.  
         *    
         */
        chain(): null | Tween
        
        /** This method can be used for manual interpolation of a value, when you don't want [Tween] to do animating for you. It's similar to [method @GlobalScope.lerp], but with support for custom transition and easing.  
         *  [param initial_value] is the starting value of the interpolation.  
         *  [param delta_value] is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.  
         *  [param elapsed_time] is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the [param duration], the interpolated value will be halfway between initial and final values. This value can also be greater than [param duration] or lower than 0, which will extrapolate the value.  
         *  [param duration] is the total time of the interpolation.  
         *      
         *  **Note:** If [param duration] is equal to `0`, the method will always return the final value, regardless of [param elapsed_time] provided.  
         */
        static interpolateValue(initialValue: any, deltaValue: any, elapsedTime: float64, duration: float64, transType: Tween.TransitionType, easeType: Tween.EaseType): any
        
        /** Emitted when one step of the [Tween] is complete, providing the step index. One step is either a single [Tweener] or a group of [Tweener]s running in parallel. */
        readonly stepFinished: Signal<(idx: int64) => void>
        
        /** Emitted when a full loop is complete (see [method set_loops]), providing the loop index. This signal is not emitted after the final loop, use [signal finished] instead for this case. */
        readonly loopFinished: Signal<(loopCount: int64) => void>
        
        /** Emitted when the [Tween] has finished all tweening. Never emitted when the [Tween] is set to infinite looping (see [method set_loops]). */
        readonly finished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTween;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTween;
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __RPCMapTweener extends __RPCMapRefCounted {
    }
    /** @deprecated Internal use. Does not exist at runtime. */
    interface __NameMapTweener extends __NameMapRefCounted {
    }
    /** Abstract class for all Tweeners used by [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.5/classes/class_tweener.html  
     */
    class Tweener extends RefCounted {
        constructor(identifier?: any)
        /** Emitted when the [Tweener] has just finished its job or became invalid (e.g. due to a freed object). */
        readonly finished: Signal<() => void>
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotRPCMap: __RPCMapTweener;
        /** @deprecated Internal use. Does not exist at runtime. */
        __godotNameMap: __NameMapTweener;
    }
}
