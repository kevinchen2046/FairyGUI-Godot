#!/usr/bin/env python3
"""FairyGUI Godot 类文档增量更新工具。

流程:
  1. 扫描 .cpp _bind_methods → 获取类结构（方法/属性/信号/常量）
  2. 扫描 .h 文件 → 提取注释（/// @brief 和 /** */ 风格）
  3. 读取已有的 doc_classes/*.xml → 保留已有描述
  4. 按优先级填充描述: XML已有 > .h注释 > 内置字典 > 空
  5. 输出 doc_classes/*.xml

用法: python tools/update_docs.py

特点:
  - 增量安全：不会覆盖已在 XML 中手动编辑的描述
  - 代码即文档：在 .h 中写注释，运行脚本即可同步到 XML
"""

import re
import xml.etree.ElementTree as ET
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

ROOT = Path(__file__).parent.parent
SRC_DIR = ROOT / "src"
DOC_DIR = ROOT / "doc_classes"

# ═══════════════════════════════════════════════════════════════
#  常量
# ═══════════════════════════════════════════════════════════════

GODOT_TYPE_MAP = {
    "BOOL": "bool", "INT": "int", "FLOAT": "float", "STRING": "String",
    "STRING_NAME": "StringName", "NODE_PATH": "NodePath",
    "VECTOR2": "Vector2", "VECTOR2I": "Vector2i",
    "VECTOR3": "Vector3", "VECTOR3I": "Vector3i",
    "VECTOR4": "Vector4", "VECTOR4I": "Vector4i",
    "RECT2": "Rect2", "RECT2I": "Rect2i",
    "COLOR": "Color", "ARRAY": "Array", "DICTIONARY": "Dictionary",
    "OBJECT": "Object", "NIL": "Variant",
    "TRANSFORM2D": "Transform2D", "TRANSFORM3D": "Transform3D",
    "PLANE": "Plane", "QUATERNION": "Quaternion",
    "AABB": "AABB", "BASIS": "Basis",
    "PACKEDBYTEARRAY": "PackedByteArray",
    "PACKEDSTRINGARRAY": "PackedStringArray",
    "PACKEDINT32ARRAY": "PackedInt32Array",
    "PACKEDINT64ARRAY": "PackedInt64Array",
    "PACKEDFLOAT64ARRAY": "PackedFloat64Array",
    "PACKEDFLOAT32ARRAY": "PackedFloat32Array",
    "PACKEDVECTOR2ARRAY": "PackedVector2Array",
    "PACKEDVECTOR3ARRAY": "PackedVector3Array",
    "PACKEDCOLORARRAY": "PackedColorArray",
    "CALLABLE": "Callable", "SIGNAL": "Signal",
}

CLASS_INHERITS = {
    "UIEventDispatcher": "RefCounted",
    "FGUIEventContext": "RefCounted",
    "GController": "RefCounted",
    "GuiObject": "RefCounted",
    "GComponent": "GuiObject",
    "GRoot": "GComponent",
    "GImage": "GuiObject",
    "GGraph": "GuiObject",
    "GGroup": "GuiObject",
    "GLoader": "GuiObject",
    "GLoader3D": "GuiObject",
    "GMovieClip": "GuiObject",
    "GTextField": "GuiObject",
    "GBasicTextField": "GTextField",
    "GRichTextField": "GBasicTextField",
    "GTextInput": "GBasicTextField",
    "GButton": "GComponent",
    "GLabel": "GComponent",
    "GList": "GComponent",
    "GTree": "GComponent",
    "GTreeNode": "RefCounted",
    "GComboBox": "GComponent",
    "GProgressBar": "GComponent",
    "GSlider": "GComponent",
    "GScrollBar": "GComponent",
    "GWindow": "GComponent",
    "UIPackage": "RefCounted",
    "Transition": "RefCounted",
    "ScrollPane": "RefCounted",
    "GPopupMenu": "RefCounted",
    "GTweener": "RefCounted",
    "GTweenHelper": "RefCounted",
    "UIConfigHelper": "RefCounted",
    "UIObjectFactoryHelper": "RefCounted",
    "DragDropManagerHelper": "RefCounted",
    "FGUIHelper": "RefCounted",
    "FUIContainer": "Control",
    "FUIClipContainer": "FUIContainer",
    "FUIInnerContainer": "FUIContainer",
    "FUIInput": "Control",
    "FUILabel": "Control",
    "FUIRichText": "Control",
    "FUISprite": "RefCounted",
    "GEnumRelation": "RefCounted",
    "GEnumAlign": "RefCounted",
    "GEnumVAlign": "RefCounted",
    "GEnumProp": "RefCounted",
    "GEnumObject": "RefCounted",
    "GEnumPackage": "RefCounted",
    "GEnumMouse": "RefCounted",
    "GEnumKey": "RefCounted",
    "GObjectPool": "RefCounted",
}

# 从函数声明中排除的关键字
_KEYWORDS = frozenset({
    'if', 'while', 'for', 'switch', 'return', 'sizeof',
    'catch', 'GDCLASS', 'FAIRYGUI_CREATE', 'typedef',
    'ifdef', 'ifndef', 'define', 'include', 'pragma',
    'error', 'warning', 'endif', 'elif', 'else',
})

# 快速提取函数名：找行中最后一个 单词( 模式
# 不使用复杂回溯，直接用简单正则在去掉尾部后匹配
_FUNC_RE = re.compile(r'\b(\w+)\s*\(')


def _extract_func_name(line: str):
    """快速提取 C++ 函数声明中的函数名。"""
    # 去掉行尾的 { ; // 之后的内容
    for ch in ('{', ';', '//'):
        idx = line.find(ch)
        if idx >= 0:
            line = line[:idx]
    # 找最后一个匹配的 函数名(
    matches = list(_FUNC_RE.finditer(line))
    if matches:
        name = matches[-1].group(1)
        if name not in _KEYWORDS:
            return name
    return None


# ═══════════════════════════════════════════════════════════════
#  1. .cpp _bind_methods 解析
# ═══════════════════════════════════════════════════════════════

def find_bind_methods_blocks(cpp_path: Path) -> list:
    """提取所有 _bind_methods 函数体，返回 [(class_name, body), ...]"""
    content = cpp_path.read_text(encoding="utf-8", errors="replace")
    results = []
    for m in re.finditer(r'void\s+(\w+)::_bind_methods\s*\(\s*\)\s*\{(.*?)\n\}', content, re.DOTALL):
        results.append((m.group(1), m.group(2)))
    return results


def parse_bind_methods(body: str) -> dict:
    """解析 _bind_methods 体，提取 methods, properties, signals, constants"""
    methods = []
    properties = []
    signals = []
    constants = []

    # 移除行注释
    clean_body = re.sub(r'//[^\n]*', '', body)

    # D_METHOD("name", "param1", ...)
    for m in re.finditer(
        r'ClassDB::bind_method\s*\(\s*D_METHOD\s*\(\s*"([^"]+)"((?:\s*,\s*"[^"]*")*)\s*\)',
        clean_body,
    ):
        name = m.group(1)
        params = [pm.group(1) for pm in re.finditer(r'"([^"]*)"', m.group(2))]
        methods.append({"name": name, "params": params})

    # ADD_PROPERTY
    for m in re.finditer(
        r'ADD_PROPERTY\s*\(\s*PropertyInfo\s*\(\s*Variant::(\w+)\s*,\s*"([^"]+)"[^)]*\)\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"',
        clean_body,
    ):
        properties.append({
            "type": GODOT_TYPE_MAP.get(m.group(1), "Variant"),
            "name": m.group(2),
            "setter": m.group(3),
            "getter": m.group(4),
        })

    # ADD_SIGNAL
    for m in re.finditer(r'ADD_SIGNAL\s*\(\s*MethodInfo\s*\(\s*"([^"]+)"', clean_body):
        signals.append({"name": m.group(1)})

    # bind_integer_constant
    for m in re.finditer(
        r'ClassDB::bind_integer_constant\s*\([^,]+,\s*"([^"]*)"\s*,\s*"([^"]+)"\s*,\s*[^)]+\)',
        clean_body,
    ):
        constants.append({"group": m.group(1), "name": m.group(2)})

    return {"methods": methods, "properties": properties, "signals": signals, "constants": constants}


def scan_all_sources() -> dict:
    """扫描所有 .cpp 文件，返回 {class_name: parsed_data}"""
    all_data = {}
    for cpp_file in SRC_DIR.rglob("*.cpp"):
        for class_name, body in find_bind_methods_blocks(cpp_file):
            if class_name and body:
                parsed = parse_bind_methods(body)
                if any(parsed.values()):
                    all_data[class_name] = parsed
    return all_data


# ═══════════════════════════════════════════════════════════════
#  2. .h 文件注释提取（简化快速版）
# ═══════════════════════════════════════════════════════════════

def _strip_comment_text(text: str) -> str:
    """清理注释文本：去 @brief @param @return 标签，合并空白"""
    # 去掉 @brief 标签
    text = re.sub(r'@brief\s+', '', text)
    # 去掉 @param xxx 标签
    text = re.sub(r'@param\s+\S+\s*', '', text)
    # 去掉 @return 标签
    text = re.sub(r'@return\s+', '', text)
    return ' '.join(text.split()).strip()


def _is_empty_line(line: str) -> bool:
    """判断是否为空行或纯注释行"""
    s = line.strip()
    return not s or s.startswith('#') or s.startswith('//')


def extract_h_comments(h_path: Path):
    """快速扫描单个 .h 文件，提取注释。

    支持两种风格:
      1. /// @brief 描述文本（可多行）
      2. /** 单行描述 */

    返回 (class_name, {func_name: comment}, class_comment_or_None)
    """
    lines = h_path.read_text(encoding="utf-8", errors="replace").split('\n')

    # 找类名
    class_name = None
    for line in lines:
        m = re.match(r'^\s*class\s+(\w+)\s*:\s*public', line)
        if m:
            class_name = m.group(1)
            break

    if not class_name:
        return None, {}, None

    methods = {}
    class_comment = None
    i = 0

    while i < len(lines):
        line = lines[i]

        # ---- /// 风格 ----
        if line.strip().startswith('///'):
            # 收集连续的 /// 行
            parts = []
            j = i
            while j < len(lines) and lines[j].strip().startswith('///'):
                t = lines[j].strip()[3:].strip()
                if t and not t.startswith('@param') and not t.startswith('@return'):
                    parts.append(t)
                j += 1

            if parts:
                comment = _strip_comment_text(' '.join(parts))

                # 跳过空白行，找下一个声明行
                k = j
                while k < len(lines) and _is_empty_line(lines[k]):
                    k += 1

                if k < len(lines):
                    next_line = lines[k].strip()
                    # 判断是类声明还是函数声明
                    if re.match(r'class\s+\w+\s*:', next_line):
                        class_comment = comment
                    else:
                        func_name = _extract_func_name(next_line)
                        if func_name:
                            methods[func_name] = comment

            i = j
            continue

        # ---- /** 风格（单行） ----
        if line.strip().startswith('/**'):
            # 单行: /** 描述 */
            m_single = re.match(r'\s*/\*\*\s*(.*?)\s*\*/\s*$', line)
            if m_single:
                comment = _strip_comment_text(m_single.group(1))

                # 跳过空白/注释行，找下一个声明
                j = i + 1
                while j < len(lines) and _is_empty_line(lines[j]):
                    j += 1

                if j < len(lines):
                    func_name = _extract_func_name(lines[j])
                    if func_name:
                        methods[func_name] = comment
                i += 1
                continue

            # 多行 /** ... */
            parts = []
            j = i + 1
            while j < len(lines) and '*/' not in lines[j]:
                t = lines[j].strip().lstrip('*').strip()
                if t:
                    parts.append(t)
                j += 1
            comment = ' '.join(parts).strip()

            # 跳过空行，找下一个声明
            k = j + 1
            while k < len(lines) and _is_empty_line(lines[k]):
                k += 1

            if k < len(lines):
                func_name = _extract_func_name(lines[k])
                if func_name and comment:
                    methods[func_name] = _strip_comment_text(comment)

            i = k
            continue

        i += 1

    return class_name, methods, class_comment


def extract_all_h_comments() -> dict:
    """扫描所有 .h 文件，返回 {'methods': {class: {func: desc}}, 'classes': {class: desc}}"""
    all_methods = {}
    all_classes = {}

    for h_file in SRC_DIR.rglob("*.h"):
        class_name, methods, class_comment = extract_h_comments(h_file)
        if class_name:
            if methods:
                all_methods[class_name] = methods
            if class_comment:
                all_classes[class_name] = class_comment

    return {'methods': all_methods, 'classes': all_classes}


# ═══════════════════════════════════════════════════════════════
#  3. 已有 XML 描述读取
# ═══════════════════════════════════════════════════════════════

def read_existing_descriptions() -> dict:
    """读取已有 XML 中的描述。
    返回: {class_name: {
        'class_brief': str|None, 'class_desc': str|None,
        'method': {method_name: desc}, 'member': {prop_name: desc},
        'signal': {signal_name: desc}, 'constant': {const_name: desc}
    }}
    """
    existing = {}
    if not DOC_DIR.exists():
        return existing

    for xml_path in DOC_DIR.glob("*.xml"):
        class_name = xml_path.stem
        try:
            content = xml_path.read_text(encoding="utf-8")
        except Exception:
            continue
        if len(content) < 20:
            continue
        try:
            tree = ET.fromstring(content)
        except ET.ParseError:
            continue

        descs = {
            'class_brief': None, 'class_desc': None,
            'method': {}, 'member': {}, 'signal': {}, 'constant': {}
        }

        brief = tree.find('brief_description')
        if brief is not None and brief.text and brief.text.strip():
            descs['class_brief'] = brief.text.strip()

        desc = tree.find('description')
        if desc is not None and desc.text and desc.text.strip():
            descs['class_desc'] = desc.text.strip()

        methods_el = tree.find('methods')
        if methods_el is not None:
            for m in methods_el.findall('method'):
                name = m.get('name', '')
                d_el = m.find('description')
                if d_el is not None and d_el.text and d_el.text.strip():
                    descs['method'][name] = d_el.text.strip()

        members_el = tree.find('members')
        if members_el is not None:
            for m in members_el.findall('member'):
                name = m.get('name', '')
                if m.text and m.text.strip():
                    descs['member'][name] = m.text.strip()

        signals_el = tree.find('signals')
        if signals_el is not None:
            for s in signals_el.findall('signal'):
                name = s.get('name', '')
                d_el = s.find('description')
                if d_el is not None and d_el.text and d_el.text.strip():
                    descs['signal'][name] = d_el.text.strip()

        constants_el = tree.find('constants')
        if constants_el is not None:
            for c in constants_el.findall('constant'):
                name = c.get('name', '')
                if c.text and c.text.strip():
                    descs['constant'][name] = c.text.strip()

        existing[class_name] = descs

    return existing


# ═══════════════════════════════════════════════════════════════
#  4. 内置描述字典（fallback）
# ═══════════════════════════════════════════════════════════════

CLASS_DESCRIPTIONS = {
    "GuiObject": {"brief": "FairyGUI 中所有 UI 对象的基类。",
                  "description": "GuiObject 是 FairyGUI 对象层次结构的根，提供了所有 UI 元素共有的基本属性和功能：位置、大小、缩放、旋转、透明度、可见性、可触摸性、拖拽支持等。\n每个 UI 对象都有一个唯一标识符（id）、一个名称（name）和一个可选的包项引用（packageItem）。"},
    "GComponent": {"brief": "FairyGUI 中的组件类，是所有容器的基类。",
                   "description": "GComponent 是 FairyGUI 中最重要的类之一。它可以包含子对象（children），管理控制器（controllers），控制过渡动画（transitions），支持滚动面板（scrollPane），设置遮罩（mask）和点击区域（hitArea）。\nGComponent 的不透明度（opaque）属性决定其是否参与点击测试：关闭时点击穿透到下层对象。"},
    "GRoot": {"brief": "FairyGUI 的根组件，管理所有顶层 UI。",
              "description": "GRoot 是 FairyGUI UI 层级结构的顶层组件。它管理所有弹出窗口（Popup）、模态层（ModalLayer）、工具提示（Tooltips）和顶层显示对象。\n通过 GRoot.inst() 获取全局单例。"},
    "GButton": {"brief": "FairyGUI 中的按钮组件。",
                "description": "GButton 支持三种按钮模式：普通按钮（Common）、复选按钮（Check）和单选按钮（Radio）。具有上下左右四种状态（UP/DOWN/OVER/SELECTED），每种状态可以设置不同的标题和图标。通过 relatedController 可以实现页面切换控制。"},
    "GList": {"brief": "FairyGUI 中的列表组件。",
              "description": "GList 支持多种布局模式（单列、单行、横向流动、纵向流动、分页），可设置为虚拟列表以支持大量项目。支持单选/多选模式，内置对象池（GObjectPool）以优化性能。"},
    "GLoader": {"brief": "FairyGUI 中的加载器组件，用于加载外部资源。",
                "description": "GLoader 支持从 URL 加载图片或组件资源，支持多种填充模式（等比例缩放、拉伸等），可以设置对齐方式。加载完成后会触发相应的事件。"},
    "GImage": {"brief": "FairyGUI 中的图片组件。",
               "description": "GImage 用于显示图片资源。支持翻转（水平/垂直）、颜色调制、填充方式（FillMethod）和填充量（fillAmount）等属性。"},
    "GGroup": {"brief": "FairyGUI 中的组布局组件。",
               "description": "GGroup 用于对多个子对象进行自动排列布局。支持设置列间距（columnGap）、行间距（lineGap）以及布局对齐方式。"},
    "GGraph": {"brief": "FairyGUI 中的图形组件。",
               "description": "GGraph 用于绘制基本图形，包括矩形（drawRect）、椭圆（drawEllipse）、多边形（drawPolygon）和正多边形（drawRegularPolygon）。"},
    "GLabel": {"brief": "FairyGUI 中的标签组件。",
               "description": "GLabel 继承自 GComponent，包含一个标题文本（title）和一个图标（icon），同时可设置标题颜色和字体大小。常被用作按钮的扩展或带图标的标签。"},
    "GComboBox": {"brief": "FairyGUI 中的下拉框组件。",
                  "description": "GComboBox 提供下拉选择功能，包含标题文本、图标和下拉列表。通过 dropdownList 和 visibleItemCount 控制样式和行为。"},
    "GProgressBar": {"brief": "FairyGUI 中的进度条组件。",
                     "description": "GProgressBar 通过设置 value 和 max 来控制进度，支持正向（LEFT_TO_RIGHT）和反向（RIGHT_TO_LEFT）两种方向模式。"},
    "GSlider": {"brief": "FairyGUI 中的滑块组件。",
                "description": "GSlider 支持设置 value、max 和 slideStep，用于实现连续的数值选择。可以关联标题和图标来显示当前值。"},
    "GScrollBar": {"brief": "FairyGUI 中的滚动条组件。",
                   "description": "GScrollBar 继承自 GComponent，用于控制滚动面板的滚动位置。支持垂直和水平方向。"},
    "GWindow": {"brief": "FairyGUI 中的窗口组件。",
                "description": "GWindow 提供模态和非模态窗口功能。支持拖拽标题栏移动、点击关闭按钮关闭、显示/隐藏模态层等。通过 Show() 和 Hide() 控制显示。"},
    "GTree": {"brief": "FairyGUI 中的树形组件。",
              "description": "GTree 继承自 GComponent，用于显示层次结构数据。每个节点由 GTreeNode 表示，支持展开/折叠操作。"},
    "GTreeNode": {"brief": "FairyGUI 中的树节点。",
                  "description": "GTreeNode 表示 GTree 中的一个节点。支持设置是否为文件夹（isFolder）、展开状态（expanded）、节点文本（text）和图标（icon）。通过 parent、children 管理层次关系。"},
    "GTextField": {"brief": "FairyGUI 中文本字段的抽象基类。",
                   "description": "GTextField 是所有文本显示组件的基类，提供文本渲染的基础功能。子类包括 GBasicTextField、GRichTextField 和 GTextInput。"},
    "GBasicTextField": {"brief": "FairyGUI 中的基础文本字段。",
                        "description": "GBasicTextField 支持 UBB 语法解析、模板变量替换、自动大小调整（autoSize）等。是 GRichTextField 和 GTextInput 的父类。"},
    "GRichTextField": {"brief": "FairyGUI 中的富文本字段。",
                       "description": "GRichTextField 在 GBasicTextField 的基础上增加了对 HTML/UBB 标记的支持，可以嵌入内联控件、图片链接等。"},
    "GTextInput": {"brief": "FairyGUI 中的文本输入组件。",
                   "description": "GTextInput 支持密码模式（password）、占位符文本（placeholder）、键盘类型设置、输入字符限制（restrict）等功能。"},
    "GLoader3D": {"brief": "FairyGUI 中的 3D 加载器组件。",
                  "description": "GLoader3D 用于加载和显示 3D 模型资源，支持动画、材质设置等 3D 场景功能。"},
    "GMovieClip": {"brief": "FairyGUI 中的影片剪辑组件。",
                   "description": "GMovieClip 用于播放帧动画，支持设置帧率（frameRate）、循环播放（loop）和播放控制。"},
    "GObjectPool": {"brief": "FairyGUI 中的对象池。",
                    "description": "GObjectPool 用于管理和复用 GObject 实例，减少频繁创建/销毁带来的性能开销。常与虚拟列表（GList）配合使用。"},
    "GPopupMenu": {"brief": "FairyGUI 中的弹出菜单组件。",
                   "description": "GPopupMenu 用于显示右键菜单或下拉菜单。通过 addItem() 添加菜单项，支持分隔线和子菜单。"},
    "GController": {"brief": "FairyGUI 中的控制器。",
                    "description": "GController 管理一组页面，支持页面切换和选择。通过 selectedIndex 或 selectedPage 控制当前显示的页面，可用于切换组件状态。切换时可触发预定义的动作（ControllerAction）。"},
    "UIEventDispatcher": {"brief": "FairyGUI 事件分发器基类。",
                          "description": "UIEventDispatcher 是 FairyGUI 事件系统的基础，提供 addEventListener / removeEventListener / dispatchEvent / bubbleEvent 等核心事件功能。\n所有 UI 对象都继承此类，支持 CLICK（点击）、ROLLOVER（悬停进入）、ROLLOUT（悬停离开）等多种事件类型。"},
    "FGUIEventContext": {"brief": "FairyGUI 事件上下文。",
                         "description": "FGUIEventContext 封装了事件的详细信息，包括事件类型、目标对象、发送者、鼠标位置、键盘按键等。在事件回调中通过此对象获取事件的上下文数据。"},
    "Transition": {"brief": "FairyGUI 中的过渡动画。",
                   "description": "Transition 管理组件内多个属性（位置、大小、透明度、颜色等）随时间变化的动画。支持多种播放模式（Play/Stop/Pause/Reverse），可设置时间缩放、自动播放等。"},
    "ScrollPane": {"brief": "FairyGUI 中的滚动面板。",
                   "description": "ScrollPane 提供惯性滚动、弹性回弹、分页模式、下拉刷新等功能。支持垂直和水平方向的滚动控制，可通过 scrollStep 设置每次滚动的步长。"},
    "UIPackage": {"brief": "FairyGUI 中的 UI 包管理类。",
                  "description": "UIPackage 负责加载和管理 FairyGUI 编辑器导出的 UI 包文件。通过 addPackage() 加载包，通过 createObject() 创建包内的 UI 对象。"},
    "UIConfigHelper": {"brief": "FairyGUI UI 配置辅助类。",
                       "description": "UIConfigHelper 用于配置 FairyGUI 的全局设置，包括默认字体、按钮声音、滚动设置、全局颜色等。"},
    "UIObjectFactoryHelper": {"brief": "FairyGUI UI 对象工厂辅助类。",
                              "description": "UIObjectFactoryHelper 提供扩展 UI 对象类型的注册功能，允许用户注册自定义的 UI 组件类型。"},
    "DragDropManagerHelper": {"brief": "FairyGUI 拖放管理器辅助类。",
                              "description": "DragDropManagerHelper 提供拖放操作的管理接口，用于启动、控制和监听拖放行为。"},
    "FGUIHelper": {"brief": "FairyGUI 辅助工具类。",
                   "description": "FGUIHelper 提供 FairyGUI 的通用辅助功能。"},
    "GEnumRelation": {"brief": "关联类型枚举常量类。",
                      "description": "定义 FairyGUI 组件的关联类型（RelationType）。"},
    "GEnumAlign": {"brief": "水平对齐枚举常量类。",
                   "description": "定义水平对齐方式：LEFT（左对齐）、CENTER（居中对齐）、RIGHT（右对齐）。"},
    "GEnumVAlign": {"brief": "垂直对齐枚举常量类。",
                    "description": "定义垂直对齐方式：TOP（顶部对齐）、CENTER（居中对齐）、BOTTOM（底部对齐）。"},
    "GEnumProp": {"brief": "对象属性枚举常量类。",
                  "description": "定义 FairyGUI 对象的常用属性 ID：TEXT、ICON、COLOR、OUTLINE_COLOR、PLAYING、FRAME、DELTA_TIME、TIME_SCALE、FONT_SIZE、SELECTED。"},
    "GEnumObject": {"brief": "对象类型枚举常量类。",
                    "description": "定义 FairyGUI 支持的所有对象类型。"},
    "GEnumPackage": {"brief": "包项类型枚举常量类。",
                     "description": "定义 UI 包中的资源类型。"},
    "GEnumMouse": {"brief": "鼠标按键枚举常量类。",
                   "description": "定义鼠标按键类型：NONE、LEFT、RIGHT、MIDDLE。"},
    "GEnumKey": {"brief": "键盘按键枚举常量类。",
                 "description": "定义常用的键盘按键码。"},
    "FUIClipContainer": {"brief": "FairyGUI 裁剪容器节点。",
                         "description": "FUIClipContainer 是支持裁剪区域的容器节点，继承自 FUIContainer。用于实现遮罩效果和内容裁剪。"},
    "FUIInnerContainer": {"brief": "FairyGUI 内部容器节点。",
                          "description": "FUIInnerContainer 是 GComponent 内部使用的容器节点，继承自 FUIContainer。"},
    "GTweener": {"brief": "FairyGUI 缓动动画实例。",
                 "description": "GTweener 封装了单个缓动动画的配置和执行。支持设置延迟、持续时间、缓动类型、重复次数、回调函数等。"},
    "GTweenHelper": {"brief": "FairyGUI 缓动动画辅助工具。",
                     "description": "GTweenHelper 提供创建和启动缓动动画的静态方法，简化 GTweener 的使用。"},
    "FUIContainer": {"brief": "FairyGUI 的 UI 容器节点。",
                     "description": "FUIContainer 是 FairyGUI 在 Godot 场景树中的显示节点基类。所有 FairyGUI 对象在底层都由 FUIContainer 或子类渲染。继承自 Control。"},
    "FUIInput": {"brief": "FairyGUI 文本输入显示节点。",
                 "description": "FUIInput 是 GTextInput 底层使用的显示节点，封装了 LineEdit 控件。支持文本输入、密码模式、占位符等。"},
    "FUILabel": {"brief": "FairyGUI 文本标签显示节点。",
                 "description": "FUILabel 是 GBasicTextField / GRichTextField 使用的底层显示节点，负责文本的渲染和显示。"},
    "FUIRichText": {"brief": "FairyGUI 富文本显示节点。",
                    "description": "FUIRichText 是用于富文本渲染的底层显示节点，支持 BBCode 样式和图文混排。"},
    "FUISprite": {"brief": "FairyGUI 精灵显示节点。",
                  "description": "FUISprite 是 GImage / GLoader 等图片/动画组件的底层渲染节点，负责纹理的绘制和精灵动画播放。"},
}

# ═══════════════════════════════════════════════════════════════
#  5. XML 生成
# ═══════════════════════════════════════════════════════════════

def _guess_return_type(method_name: str) -> str:
    """根据方法名猜测返回类型"""
    if method_name.startswith(("get", "is", "has", "can", "should")):
        return "Variant"
    return "void"


def _resolve_method_desc(mname, class_name, existing_descs, h_methods):
    """解析方法描述，优先级: XML已有 > .h注释 > setter推断 > 空"""
    # 1) 已有 XML 描述
    desc = existing_descs.get(class_name, {}).get('method', {}).get(mname, '')
    if desc:
        return desc

    # 2) .h 注释
    class_methods = h_methods.get(class_name, {})
    if mname in class_methods:
        return class_methods[mname]

    # 3) setter 推断（从对应的 getter 注释推导）
    if mname.startswith('set') and len(mname) > 3:
        getter = 'get' + mname[3:]
        if getter in class_methods:
            gd = class_methods[getter]
            if gd.startswith('获取') or gd.startswith('返回'):
                return gd.replace('获取', '设置', 1).replace('返回', '设置', 1)

    return ''


def generate_xml(class_name: str, parsed: dict, existing_descs: dict, h_data: dict) -> str:
    """生成单个类的 XML 文档"""
    inherits = CLASS_INHERITS.get(class_name, "RefCounted")
    h_methods = h_data.get('methods', {})
    h_classes = h_data.get('classes', {})
    class_existing = existing_descs.get(class_name, {})

    # 类描述
    brief = (
        class_existing.get('class_brief') or
        h_classes.get(class_name) or
        CLASS_DESCRIPTIONS.get(class_name, {}).get('brief', '')
    )
    desc_text = (
        class_existing.get('class_desc') or
        CLASS_DESCRIPTIONS.get(class_name, {}).get('description', '')
    )

    # 方法
    methods_xml = ""
    for method in parsed["methods"]:
        mname = method["name"]
        params_xml = ''.join(
            f'\t\t\t<param index="{i}" name="{p}" type="Variant" />\n'
            for i, p in enumerate(method["params"])
        )
        ret = _guess_return_type(mname)
        desc = xml_escape(_resolve_method_desc(mname, class_name, existing_descs, h_methods))
        methods_xml += (
            f'\t\t<method name="{mname}">\n'
            f'\t\t\t<return type="{ret}" />\n'
            f'{params_xml}'
            f'\t\t\t<description>{desc}</description>\n'
            f'\t\t</method>\n'
        )

    # 属性
    members_xml = ""
    for prop in parsed["properties"]:
        pname = prop["name"]
        prop_desc = class_existing.get('member', {}).get(pname, '')
        members_xml += (
            f'\t\t<member name="{pname}" type="{prop["type"]}" '
            f'setter="{prop["setter"]}" getter="{prop["getter"]}">' 
            f'{xml_escape(prop_desc)}</member>\n'
        )

    # 信号
    signals_xml = ""
    for sig in parsed["signals"]:
        sname = sig["name"]
        sig_desc = class_existing.get('signal', {}).get(sname, '')
        signals_xml += (
            f'\t\t<signal name="{sname}">\n'
            f'\t\t\t<description>{xml_escape(sig_desc)}</description>\n'
            f'\t\t</signal>\n'
        )

    # 常量
    constants_xml = ""
    for const in parsed["constants"]:
        g = const["group"]
        cname = const["name"]
        full_name = f"{g}_{cname}" if g else cname
        const_desc = class_existing.get('constant', {}).get(full_name, '')
        constants_xml += f'\t\t<constant name="{full_name}" value="0">{xml_escape(const_desc)}</constant>\n'

    return (
        f'<?xml version="1.0" encoding="UTF-8" ?>\n'
        f'<class name="{class_name}" inherits="{inherits}" '
        f'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
        f'xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/godotengine/godot/master/doc/class.xsd">\n'
        f'\t<brief_description>{xml_escape(brief)}</brief_description>\n'
        f'\t<description>{xml_escape(desc_text)}</description>\n'
        # 不输出空 tutorials 节点。Godot 4.7 的 XMLParser 在扩展内嵌
        # 文档中会把空 tutorials 后面的 methods 误判为非法标签。
        f'\t<methods>\n{methods_xml}\t</methods>\n'
        f'\t<members>\n{members_xml}\t</members>\n'
        f'\t<signals>\n{signals_xml}\t</signals>\n'
        f'\t<constants>\n{constants_xml}\t</constants>\n'
        f'</class>\n'
    )


# ═══════════════════════════════════════════════════════════════
#  main
# ═══════════════════════════════════════════════════════════════

def main():
    DOC_DIR.mkdir(parents=True, exist_ok=True)

    # 1. 扫描 .cpp
    print("[1/4] 扫描 _bind_methods...")
    all_data = scan_all_sources()
    print(f"  发现 {len(all_data)} 个类")

    # 2. 扫描 .h 注释
    print("[2/4] 扫描 .h 注释...")
    h_data = extract_all_h_comments()
    method_count = sum(len(v) for v in h_data['methods'].values())
    class_count = len(h_data['classes'])
    print(f"  方法注释: {method_count}, 类注释: {class_count}")

    # 3. 读取已有 XML
    print("[3/4] 读取已有 XML...")
    existing_descs = read_existing_descriptions()
    total_existing = sum(
        len(v.get('method', {})) + (1 if v.get('class_brief') else 0)
        for v in existing_descs.values()
    )
    print(f"  已有描述: {total_existing} 条")

    # 4. 生成 XML
    print("[4/4] 生成 doc_classes/*.xml...")
    generated = 0
    for class_name, parsed in sorted(all_data.items()):
        xml_content = generate_xml(class_name, parsed, existing_descs, h_data)
        xml_path = DOC_DIR / f"{class_name}.xml"
        xml_path.write_text(xml_content, encoding="utf-8")

        nm = len(parsed["methods"])
        np = len(parsed["properties"])
        ns = len(parsed["signals"])
        nc = len(parsed["constants"])
        generated += 1
        print(f"  {class_name}.xml: {nm} methods, {np} props, {ns} signals, {nc} constants")

    print(f"\nDone: {generated} classes generated.")


if __name__ == "__main__":
    main()
