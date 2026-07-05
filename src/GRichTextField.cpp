#include "GRichTextField.h"
#include "utils/UBBParser.h"
#include "utils/ByteBuffer.h"
#include "utils/html/HtmlObject.h"
#include "utils/WeakPtr.h"
#include "display/FUILabel.h"

NS_FGUI_BEGIN
GRichTextField::GRichTextField() :
    _richText(nullptr),
    _updatingSize(false),
    _singleLine(false)
{
}

GRichTextField::~GRichTextField()
{
}

void GRichTextField::handleInit()
{
    _richText = FUIRichText::create();
    _displayObject = _richText;

}

void GRichTextField::applyTextFormat()
{
    _richText->applyTextFormat();
    updateGear(4);
    if (!_underConstruct)
        updateSize();
}

void GRichTextField::setAutoSize(AutoSizeType value)
{
    _autoSize = value;
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

    _richText->setDimensions(_size.width, _size.height);
    if (!_underConstruct)
        updateSize();
}

void GRichTextField::setSingleLine(bool value)
{
    if (_singleLine != value)
    {
        _singleLine = value;
        setTextFieldText();
    }
}

void GRichTextField::setTextFieldText()
{
    std::string text = _text;
    if (_singleLine)
    {
        for (char& c : text)
        {
            if (c == '\n' || c == '\r')
                c = ' ';
        }
    }

    // autoSize=height: lay out at design width first so virtual-list reuse (narrow width)
    // does not wrap short text before the caller shrinks the field to content width.
    if (_autoSize == AutoSizeType::HEIGHT)
    {
        float layoutWidth = sourceSize.width;
        if (layoutWidth <= 0.f)
            layoutWidth = initSize.width;
        if (layoutWidth > 0.f)
            _richText->setDimensions(layoutWidth, _size.height);
    }

    if (_ubbEnabled)
    {
        std::string parsedText = UBBParser::getInstance()->parse(text.c_str());
        if (_templateVars != nullptr)
            parsedText = parseTemplate(parsedText.c_str());
        _richText->setText(parsedText);
    }
    else
    {
        if (_templateVars != nullptr)
            _richText->setText(parseTemplate(text.c_str()));
        else
            _richText->setText(text);
    }
}

void GRichTextField::updateSize()
{
    if (_updatingSize)
        return;

    _updatingSize = true;

    Vector2 sz = _richText->get_content_size();
    if (_autoSize == AutoSizeType::BOTH)
        setSize(sz.x, sz.y);
    else if (_autoSize == AutoSizeType::HEIGHT)
        setHeight(sz.y);

    _updatingSize = false;
}

HtmlObject* GRichTextField::getControl(const std::string& pName) const
{
    return _richText->getControl(pName);
}

Vector2 GRichTextField::getTextSize()
{
    return _richText->get_content_size();
}

bool GRichTextField::isAnchorTextUnderline() const
{
    return _richText->isAnchorTextUnderline();
}

void GRichTextField::setAnchorTextUnderline(bool value)
{
    _richText->setAnchorTextUnderline(value);
}

Color GRichTextField::getAnchorFontColor() const
{
    return _richText->getAnchorFontColor();
}

void GRichTextField::setAnchorFontColor(const Color& value)
{
    _richText->setAnchorFontColor(value);
}

void GRichTextField::handleGrayedChanged()
{
    GObject::handleGrayedChanged();
    if (_richText)
        _richText->applyGrayedToLabels(_finalGrayed);
}

void GRichTextField::handleSizeChanged()
{
    if (_updatingSize)
        return;

    if (_autoSize != AutoSizeType::BOTH)
    {
        _richText->setDimensions(_size.width, _size.height);

        if (_autoSize == AutoSizeType::HEIGHT)
        {
            if (!_text.empty())
                setSizeDirectly(_size.width, _richText->get_content_size().height);
        }
    }
}

GObject* GRichTextField::hitTest(const Vector2& worldPoint, const Camera2D* camera)
{
    const std::vector<HtmlObject*>& objs = _richText->getControls();
    for (auto &obj : objs)
    {
        GObject* ui = obj->getUI();
        if (ui == nullptr)
            continue;
        GObject* target = ui->hitTest(worldPoint, camera);
        if (target)
            return resolve_live_gobject(target);
    }

    return GTextField::hitTest(worldPoint, camera);
}

void GRichTextField::_bind_methods()
{
    // set_text/get_text inherited from GTextField
}

NS_FGUI_END


