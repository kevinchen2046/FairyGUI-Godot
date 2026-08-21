#include "GTextField.h"
#include "utils/ByteBuffer.h"
#include "utils/ToolSet.h"
#include "utils/UBBParser.h"
#include "display/FUIContainer.h"
#include "display/FUILabel.h"

NS_FGUI_BEGIN
GTextField::GTextField()
    : _ubbEnabled(false),
      _autoSize(AutoSizeType::BOTH),
      _templateVars(nullptr)
{
}

GTextField::~GTextField()
{
    delete _templateVars; _templateVars = nullptr;
}

void GTextField::setText(const std::string& value)
{
    _text = value;
    setTextFieldText();
    updateGear(6);
    updateSize();
}

void GTextField::setUBBEnabled(bool value)
{
    if (_ubbEnabled != value)
    {
        _ubbEnabled = value;
        setTextFieldText();
        updateSize();
    }
}

void GTextField::setColor(const Color& value)
{
    TextFormat* tf = getTextFormat();
    if (tf->color != value)
    {
        tf->color = value;
        applyTextFormat();
    }
}

void GTextField::setFontSize(float value)
{
    TextFormat* tf = getTextFormat();
    if (tf->fontSize != value)
    {
        tf->fontSize = value;
        applyTextFormat();
    }
}

void GTextField::setOutlineColor(const Color& value)
{
    TextFormat* tf = getTextFormat();
    if (tf->outlineColor != value)
    {
        tf->outlineColor = value;
        if (tf->outlineSize <= 0.f)
            tf->outlineSize = 1.f;
        tf->enableEffect(TextFormat::OUTLINE);
        applyTextFormat();
    }
}

void GTextField::setTemplateVars(std::unordered_map<std::string, Variant>* value)
{
    if (_templateVars == nullptr && value == nullptr)
        return;

    if (value == nullptr)
    {
        delete _templateVars;
        _templateVars = nullptr;
    }
    else
    {
        if (_templateVars == nullptr)
            _templateVars = new std::unordered_map<std::string, Variant>();
        *_templateVars = *value;
    }

    flushVars();
}

GTextField* GTextField::setVar(const std::string& varName, const Variant& value)
{
    if (_templateVars == nullptr)
        _templateVars = new std::unordered_map<std::string, Variant>();

    (*_templateVars)[varName] = value;

    return this;
}

void GTextField::flushVars()
{
    setTextFieldText();
    updateSize();
}

void GTextField::updateSize()
{
}

Variant GTextField::getProp(ObjectPropID propId)
{
    switch (propId)
    {
    case ObjectPropID::Color:
        return Variant(ToolSet::colorToInt(getColor()));
    case ObjectPropID::OutlineColor:
        return Variant(ToolSet::colorToInt(getOutlineColor()));
    case ObjectPropID::FontSize:
        return Variant(getFontSize());
    default:
        return GObject::getProp(propId);
    }
}

void GTextField::setProp(ObjectPropID propId, const Variant& value)
{
    switch (propId)
    {
    case ObjectPropID::Color:
        setColor(ToolSet::intToColor(value.operator int()));
        break;
    case ObjectPropID::OutlineColor:
        setOutlineColor(ToolSet::intToColor(value.operator int()));
        break;
    case ObjectPropID::FontSize:
        setFontSize(value.operator int64_t());
        break;
    default:
        GObject::setProp(propId, value);
        break;
    }
}

void GTextField::setup_beforeAdd(ByteBuffer* buffer, int beginPos)
{
    GObject::setup_beforeAdd(buffer, beginPos);

    buffer->seek(beginPos, 5);

    TextFormat* tf = getTextFormat();

    tf->face = buffer->readS();
    tf->fontSize = buffer->readShort();
    tf->color = (Color)buffer->readColor();
    tf->align = buffer->readByte();
    tf->verticalAlign = buffer->readByte();
    tf->lineSpacing = buffer->readShort();
    tf->letterSpacing = buffer->readShort();
    _ubbEnabled = buffer->readBool();
    setAutoSize((AutoSizeType)buffer->readByte());
    tf->underline = buffer->readBool();
    tf->italics = buffer->readBool();
    tf->bold = buffer->readBool();
    setSingleLine(buffer->readBool());
    if (buffer->readBool())
    {
        tf->outlineColor = (Color)buffer->readColor();
        tf->outlineSize = buffer->readFloat();
        if (tf->outlineSize <= 0.f)
            tf->outlineSize = 1.f;
        tf->enableEffect(TextFormat::OUTLINE);
    }

    if (buffer->readBool())
    {
        tf->shadowColor = (Color)buffer->readColor();
        float f1 = buffer->readFloat();
        float f2 = buffer->readFloat();
        tf->shadowOffset = Vector2(f1, -f2);
        tf->enableEffect(TextFormat::SHADOW);
    }

    if (buffer->readBool())
        _templateVars = new std::unordered_map<std::string, Variant>();

    if (buffer->version >= 3)
    {
        buffer->readBool(); // strikethrough
        buffer->skip(12);
    }
}

void GTextField::setup_afterAdd(ByteBuffer* buffer, int beginPos)
{
    GObject::setup_afterAdd(buffer, beginPos);

    applyTextFormat();

    buffer->seek(beginPos, 6);

    const std::string& str = buffer->readS();
    if (!str.empty())
        setText(str);
}

std::string GTextField::parseTemplate(const char* text)
{
    const char* pString = text;

    ssize_t pos;
    ssize_t pos2;
    std::string tag, attr;
    std::string repl;
    std::string out;

    while (*pString != '\0')
    {
        const char* p = strchr(pString, '{');
        if (!p)
        {
            out.append(pString);
            break;
        }

        pos = p - pString;
        if (pos > 0 && *(p - 1) == '\\')
        {
            out.append(pString, pos - 1);
            out.append("{");
            pString += pos + 1;
            continue;
        }

        out.append(pString, pos);
        pString += pos;

        p = strchr(pString, '}');
        if (!p)
        {
            out.append(pString);
            break;
        }

        pos = p - pString;
        if (pos == 1)
        {
            out.append(pString, 0, 2);
            pString += 2;
            continue;
        }

        tag.assign(pString + 1, pos - 1);

        attr.clear();
        repl.clear();
        pos2 = tag.find('=');
        if (pos2 != -1)
        {
            auto it = _templateVars->find(tag.substr(0, pos2));
            if (it != _templateVars->end())
                out.append(std::string((const char*)it->second.stringify().utf8().ptr()));
            else
                out.append(tag.substr(pos2 + 1));
        }
        else
        {
            auto it = _templateVars->find(tag);
            if (it != _templateVars->end())
                out.append(std::string((const char*)it->second.stringify().utf8().ptr()));
        }
        pString += pos + 1;
    }
    return out;
}

//---------------------------

GBasicTextField::GBasicTextField() : _label(nullptr),
                                     _richText(nullptr),
                                     _updatingSize(false),
                                     _singleLine(false)
{
    _touchDisabled = true;
}

GBasicTextField::~GBasicTextField()
{
}

void GBasicTextField::handleInit()
{
    FUIContainer* container = FUIContainer::create();
    _label = FUILabel::create();
    _richText = FUIRichText::create();
    _label->setWrapEnabled(true);
    container->add_child(_label);
    container->add_child(_richText);
    _richText->set_visible(false);
    _displayObject = container;
}

void GBasicTextField::syncRichTextSettings()
{
    if (!_richText || !_label)
        return;

    _richText->getTextFormat()->setFormat(*_label->getTextFormat());
    configureRichTextAutoSize(_autoSize);
    syncTextDimensions();
}

void GBasicTextField::syncTextDimensions()
{
    if (!_label)
        return;

    Vector2 dimensions;
    if (_autoSize == AutoSizeType::BOTH)
        dimensions = Vector2(0, 0);
    else if (_autoSize == AutoSizeType::HEIGHT)
        dimensions = Vector2(_size.width, 0);
    else
        dimensions = Vector2(_size.width, _size.height);

    _label->setContentSize(dimensions);
    if (_richText)
        _richText->setDimensions(_size.width, _size.height);
}

void GBasicTextField::updateShrink()
{
    if (!_label)
        return;

    _label->setDrawFontSize(0);
    if (_ubbEnabled || _autoSize != AutoSizeType::SHRINK || _text.empty()
            || _size.width <= 0 || _size.height <= 0)
        return;

    int fontSize = (int)getTextFormat()->fontSize;
    while (fontSize > 1)
    {
        _label->setDrawFontSize(fontSize);
        Vector2 sz = _label->getTextSize();
        if (sz.x <= _size.width && sz.y <= _size.height)
            break;
        fontSize--;
    }
}

void GBasicTextField::updateDisplayMode()
{
    if (!_label || !_richText)
        return;

    _label->set_visible(!_ubbEnabled);
    _richText->set_visible(_ubbEnabled);
}

void GBasicTextField::configureRichTextAutoSize(AutoSizeType value)
{
    if (!_richText)
        return;

    switch (value)
    {
    case AutoSizeType::NONE:
        _richText->setOverflow(1);
        break;
    case AutoSizeType::BOTH:
        _richText->setOverflow(0);
        break;
    case AutoSizeType::HEIGHT:
        _richText->setOverflow(3);
        break;
    case AutoSizeType::SHRINK:
        _richText->setOverflow(2);
        break;
    }
}

void GBasicTextField::setUBBEnabled(bool value)
{
    if (_ubbEnabled != value)
    {
        _ubbEnabled = value;
        updateDisplayMode();
        setTextFieldText();
        updateSize();
    }
}

void GBasicTextField::applyTextFormat()
{
    _label->applyTextFormat();
    if (_ubbEnabled)
    {
        syncRichTextSettings();
        _richText->applyTextFormat();
    }
    updateGear(4);
    if (!_underConstruct)
        updateSize();
}

void GBasicTextField::setAutoSize(AutoSizeType value)
{
    _autoSize = value;
    if (_label)
        _label->setWrapEnabled(!_singleLine);

    configureRichTextAutoSize(value);
    syncTextDimensions();

    if (!_underConstruct)
        updateSize();
}

void GBasicTextField::setSingleLine(bool value)
{
    if (_singleLine == value)
        return;

    _singleLine = value;
    _label->setWrapEnabled(!_singleLine);
    if (!_underConstruct)
    {
        if (_ubbEnabled)
            setTextFieldText();
        updateSize();
        _label->queue_redraw();
    }
}

void GBasicTextField::setTextFieldText()
{
    updateDisplayMode();

    if (_ubbEnabled)
    {
        std::string text = _text;
        if (isSingleLine())
        {
            for (char& c : text)
            {
                if (c == '\n' || c == '\r')
                    c = ' ';
            }
        }

        std::string parsedText = UBBParser::getInstance()->parse(text.c_str());
        if (_templateVars != nullptr)
            parsedText = parseTemplate(parsedText.c_str());

        syncRichTextSettings();
        _richText->setText(parsedText);
    }
    else if (_templateVars != nullptr)
        _label->setText(parseTemplate(_text.c_str()));
    else
        _label->setText(_text);
}

void GBasicTextField::updateSize()
{
    if (_updatingSize)
        return;

    _updatingSize = true;

    syncTextDimensions();
    Vector2 sz = _ubbEnabled ? _richText->get_content_size() : _label->getTextSize();
    if (_autoSize == AutoSizeType::BOTH)
        setSize(sz.x, sz.y);
    else if (_autoSize == AutoSizeType::HEIGHT)
        setHeight(sz.y);
    else if (_autoSize == AutoSizeType::SHRINK)
        updateShrink();

    _updatingSize = false;
    syncTextDimensions();
}

void GBasicTextField::handleSizeChanged()
{
    if (_updatingSize)
        return;

    syncTextDimensions();
    updateShrink();

    _label->queue_redraw();

    if (_autoSize != AutoSizeType::BOTH)
    {
        if (_autoSize == AutoSizeType::HEIGHT)
        {
            if (!_text.empty())
            {
                float height = _ubbEnabled ? _richText->get_content_size().y : _label->getTextSize().y;
                setSizeDirectly(_size.width, height);
                syncTextDimensions();
            }
        }
    }
}

void GBasicTextField::handleGrayedChanged()
{
    GObject::handleGrayedChanged();

    _label->setGrayed(_finalGrayed);
    if (_richText)
        _richText->applyGrayedToLabels(_finalGrayed);
}

void GBasicTextField::_bind_methods()
{
    // set_text/get_text inherited from GTextField
    ADD_PROPERTY(PropertyInfo(Variant::COLOR, "color"), "setColor", "getColor");
    ADD_PROPERTY(PropertyInfo(Variant::INT, "fontSize"), "setFontSize", "getFontSize");
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "singleLine"), "setSingleLine", "isSingleLine");
    ADD_PROPERTY(PropertyInfo(Variant::INT, "autoSize"), "setAutoSize", "getAutoSize");
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "ubbEnabled"), "setUBBEnabled", "isUBBEnabled");
}

Vector2 GBasicTextField::getTextSize()
{
    if (_ubbEnabled)
        return _richText ? _richText->get_content_size() : Vector2();
    return _label ? _label->getTextSize() : Vector2();
}

Vector2 GTextField::getTextSize()
{
    return Vector2(_size.width, _size.height);
}

void GTextField::_bind_methods()
{
    /// @author Kevin.CodeBuddy.Auto / 2026-07-16
    // AutoSizeType 枚举
    ClassDB::bind_integer_constant(get_class_static(), "AutoSizeType", "NONE", static_cast<int64_t>(AutoSizeType::NONE));
    ClassDB::bind_integer_constant(get_class_static(), "AutoSizeType", "BOTH", static_cast<int64_t>(AutoSizeType::BOTH));
    ClassDB::bind_integer_constant(get_class_static(), "AutoSizeType", "HEIGHT", static_cast<int64_t>(AutoSizeType::HEIGHT));
    ClassDB::bind_integer_constant(get_class_static(), "AutoSizeType", "SHRINK", static_cast<int64_t>(AutoSizeType::SHRINK));

    // setText/getText inherited from GObject

    ClassDB::bind_method(D_METHOD("setColor", "color"), &GTextField::setColor);
    ClassDB::bind_method(D_METHOD("getColor"), &GTextField::getColor);

    ClassDB::bind_method(D_METHOD("setFontSize", "size"), &GTextField::setFontSize);
    ClassDB::bind_method(D_METHOD("getFontSize"), &GTextField::getFontSize);

    ClassDB::bind_method(D_METHOD("setSingleLine", "value"), &GTextField::setSingleLine);
    ClassDB::bind_method(D_METHOD("isSingleLine"), &GTextField::isSingleLine);

    ClassDB::bind_method(D_METHOD("setAutoSize", "value"), &GTextField::gd_setAutoSize);
    ClassDB::bind_method(D_METHOD("getAutoSize"), &GTextField::gd_getAutoSize);

    ClassDB::bind_method(D_METHOD("setUBBEnabled", "value"), &GTextField::setUBBEnabled);
    ClassDB::bind_method(D_METHOD("isUBBEnabled"), &GTextField::isUBBEnabled);

    ClassDB::bind_method(D_METHOD("setTemplateVars", "vars"), &GTextField::gd_setTemplateVars);
    ClassDB::bind_method(D_METHOD("getTextSize"), &GTextField::getTextSize);
}

void GTextField::gd_setTemplateVars(const Dictionary& vars) {
    if (_templateVars)
        delete static_cast<std::unordered_map<std::string, Variant>*>(_templateVars);
    _templateVars = nullptr;
}

NS_FGUI_END
