#include "HtmlParser.h"
#include "HtmlElement.h"
#include "utils/ToolSet.h"
#include "core/io/xml_parser.h"

#include <sstream>
#include <vector>
#include <algorithm>
#include <cstring>

NS_FGUI_BEGIN
using namespace std;

#ifdef _MSC_VER
#define strcasecmp _stricmp
#endif

// Alpha 0 = inherit surrounding text color (matches Unity HtmlParseOptions.DefaultLinkColor).
Color HtmlParseOptions::defaultLinkColor(0, 0, 0, 0);
bool HtmlParseOptions::defaultLinkUnderline = true;

HtmlParseOptions::HtmlParseOptions()
{
    linkColor = defaultLinkColor;
    linkUnderline = defaultLinkUnderline;
}

// HtmlParser HtmlParser::defaultParser;  // moved to getDefaultParser() to avoid static init crash
HtmlParser& HtmlParser::getDefaultParser() {
    static HtmlParser parser;
    return parser;
}

HtmlParser::HtmlParser()
{

}

HtmlParser::~HtmlParser()
{
}

void HtmlParser::pushTextFormat()
{
    if (_textFormatStack.size() <= _textFormatStackTop)
        _textFormatStack.push_back(_format);
    else
        _textFormatStack[_textFormatStackTop] = _format;
    _textFormatStackTop++;
}

void HtmlParser::popTextFormat()
{
    if (_textFormatStackTop > 0)
    {
        _format = _textFormatStack[_textFormatStackTop - 1];
        _textFormatStackTop--;
    }
}

void HtmlParser::addNewLine(bool check)
{
    HtmlElement* lastElement = _elements->empty() ? nullptr : _elements->back();
    if (lastElement && lastElement->type == HtmlElement::Type::TEXT)
    {
        if (!check || lastElement->text.back() != '\n')
            lastElement->text += "\n";
        return;
    }

    HtmlElement* element = new HtmlElement(HtmlElement::Type::TEXT);
    element->format = _format;
    element->text = "\n";
    _elements->push_back(element);
    if (!_linkStack.empty())
        element->link = _linkStack.back();
}

void HtmlParser::finishTextBlock()
{
    if (!_textBlock.empty())
    {
        HtmlElement* element = new HtmlElement(HtmlElement::Type::TEXT);
        element->format = _format;
        element->text = _textBlock;
        _textBlock.clear();
        _elements->push_back(element);
        if (!_linkStack.empty())
            element->link = _linkStack.back();
    }
}

#if defined(_MSC_VER)
#pragma warning(once:4307)
#endif
void HtmlParser::startElement(void* /*ctx*/, const char *elementName, const char **atts)
{
    if (_skipText == 0)
        finishTextBlock();
    else if (!_textBlock.empty())
        _textBlock.clear();

    if (strcasecmp(elementName, "b") == 0)
    {
        pushTextFormat();
        _format.bold = true;
    }
    else if (strcasecmp(elementName, "i") == 0)
    {
        pushTextFormat();
        _format.italics = true;
    }
    else if (strcasecmp(elementName, "u") == 0)
    {
        pushTextFormat();
        _format.underline = true;
    }
    else if (strcasecmp(elementName, "font") == 0)
    {
        pushTextFormat();
        Dictionary attrMap = parseAttrs(atts);
        _format.fontSize = attributeInt(attrMap, "size", _format.fontSize);

        Variant colorVal = attrMap[String("color")];
        if (colorVal.get_type() != Variant::NIL)
        {
            _format.color = (Color)ToolSet::hexToColor(std::string((const char*)colorVal.stringify().utf8().ptr()).c_str());
            _format._hasColor = true;
        }
    }
    else if (strcasecmp(elementName, "br") == 0)
    {
        addNewLine(false);
    }
    else if (strcasecmp(elementName, "img") == 0)
    {
        HtmlElement* element = new HtmlElement(HtmlElement::Type::IMAGE);
        element->attrs = parseAttrs(atts);
        _elements->push_back(element);
        if (!_linkStack.empty())
            element->link = _linkStack.back();
    }
    else if (strcasecmp(elementName, "a") == 0)
    {
        pushTextFormat();

        HtmlElement* element = new HtmlElement(HtmlElement::Type::LINK);
        element->attrs = parseAttrs(atts);
        element->text = element->getString("href");
        _elements->push_back(element);
        _linkStack.push_back(element);

        if (_parseOptions.linkUnderline)
            _format.underline = true;
        if (!_format._hasColor && _parseOptions.linkColor.a > 0.0f)
            _format.color = _parseOptions.linkColor;
    }
    else if (strcasecmp(elementName, "p") == 0 || strcasecmp(elementName, "ui") == 0 || strcasecmp(elementName, "div") == 0
        || strcasecmp(elementName, "li") == 0)
    {
        addNewLine(true);
    }
    else if (strcasecmp(elementName, "html") == 0 || strcasecmp(elementName, "body") == 0)
    {
        //full html
        _ignoreWhiteSpace = true;
    }
    else if (strcasecmp(elementName, "head") == 0 || strcasecmp(elementName, "style") == 0 || strcasecmp(elementName, "script") == 0
        || strcasecmp(elementName, "form") == 0)
    {
        _skipText++;
    }
    else if (strcasecmp(elementName, "input") == 0)
    {
        HtmlElement* element = new HtmlElement(HtmlElement::Type::INPUT);
        element->attrs = parseAttrs(atts);
        _elements->push_back(element);
    }
    else if (strcasecmp(elementName, "select") == 0)
    {
        HtmlElement* element = new HtmlElement(HtmlElement::Type::SELECT);
        element->attrs = parseAttrs(atts);
        _elements->push_back(element);

        _currentSelect = element;
        _skipText++;
    }
    else if (strcasecmp(elementName, "option") == 0)
    {
        if (_currentSelect != nullptr)
        {
            Dictionary attrMap = parseAttrs(atts);
            Variant val = attrMap[String("value")];
            if (val.get_type() != Variant::NIL)
                _currentSelect->getArray("values").push_back(Variant(val.stringify()));
            else
                _currentSelect->getArray("values").push_back(Variant(""));
        }
    }
    else if (strcasecmp(elementName, "object") == 0)
    {
        HtmlElement* element = new HtmlElement(HtmlElement::Type::OBJECT);
        element->attrs = parseAttrs(atts);
        _elements->push_back(element);

        _skipText++;
    }
}

void HtmlParser::endElement(void* /*ctx*/, const char *elementName)
{
    if (_currentSelect != nullptr && strcasecmp(elementName, "option") == 0)
    {
        _currentSelect->getArray("items").push_back(Variant(_textBlock.c_str()));
        _textBlock.clear();
        return;
    }

    if (_skipText == 0)
        finishTextBlock();
    else if (!_textBlock.empty())
        _textBlock.clear();

    if (strcasecmp(elementName, "b") == 0 || strcasecmp(elementName, "i") == 0 || strcasecmp(elementName, "u") == 0
        || strcasecmp(elementName, "font") == 0)
    {
        popTextFormat();
    }
    else if (strcasecmp(elementName, "a") == 0)
    {
        popTextFormat();

        if (!_linkStack.empty())
            _linkStack.pop_back();
    }
    else if (strcasecmp(elementName, "head") == 0 || strcasecmp(elementName, "style") == 0 || strcasecmp(elementName, "script") == 0
        || strcasecmp(elementName, "form") == 0
        || strcasecmp(elementName, "object") == 0)
    {
        _skipText--;
    }
    else if (strcasecmp(elementName, "select") == 0)
    {
        _currentSelect = nullptr;
        _skipText--;
    }
}
#if defined(_MSC_VER)
#pragma warning(default:4307)
#endif

void HtmlParser::textHandler(void* /*ctx*/, const char *str, size_t len)
{
    if (_ignoreWhiteSpace)
    {
        String s = String::utf8(str, (int)len);
        s = s.strip_edges();
        CharString utf8 = s.utf8();
        _textBlock.append(utf8.ptr(), utf8.length());
    }
    else
        _textBlock.append(str, len);
}

Dictionary HtmlParser::parseAttrs(const char** attrs)
{
    Dictionary attrMap;
    for (const char** attr = attrs; *attr != nullptr; attr = (attrs += 2)) {
        if (attr[0] && attr[1]) {
            attrMap[String(attr[0])] = String(attr[1]);
        }
    }
    return attrMap;
}

int HtmlParser::attributeInt(const Dictionary& valueMap, const std::string& key, int defaultValue)
{
    Variant result = valueMap[String(key.c_str())];
    if (result.get_type() != Variant::NIL) {
        string str = std::string((const char*)result.stringify().utf8().ptr());
        if (!str.empty() && str.back() == '%')
            return (int)ceil(atoi(str.substr(0, str.size() - 1).c_str()) / 100.0f * defaultValue);
        else
            return atoi(str.c_str());
    }
    else
        return defaultValue;
}

void HtmlParser::parse(const std::string& source, const TextFormat& format, std::vector<HtmlElement*>& elements, const HtmlParseOptions& parseOptions)
{
    _format = format;
    _format._hasColor = false;
    _elements = &elements;
    _parseOptions = parseOptions;
    _ignoreWhiteSpace = false;
    _textFormatStackTop = 0;
    _skipText = 0;
    _textBlock.clear();
    _linkStack.clear();
    _currentSelect = nullptr;

    if (source.empty())
        return;

    // Keep raw UTF-8 bytes (same as Cocos SAXParser); do not round-trip through String.
    const std::string xmlText = std::string("<dummy>") + source + "</dummy>";
    Vector<uint8_t> xmlBuf;
    xmlBuf.resize(xmlText.size());
    memcpy(xmlBuf.ptrw(), xmlText.data(), xmlText.size());

    Ref<XMLParser> parser;
    parser.instantiate();
    if (parser->open_buffer(xmlBuf) != OK)
    {
        HtmlElement* element = new HtmlElement(HtmlElement::Type::TEXT);
        element->format = _format;
        element->text = source;
        elements.push_back(element);
        return;
    }

    while (true)
    {
        Error err = parser->read();
        if (err != OK)
            break;

        switch (parser->get_node_type())
        {
        case XMLParser::NODE_ELEMENT:
        {
            String nodeName = parser->get_node_name();
            std::vector<std::string> attrKeys;
            std::vector<std::string> attrValues;
            std::vector<const char*> attrPtrs;
            for (int i = 0; i < parser->get_attribute_count(); i++)
            {
                attrKeys.push_back(std::string(parser->get_attribute_name(i).utf8().get_data()));
                attrValues.push_back(std::string(parser->get_attribute_value(i).utf8().get_data()));
            }
            for (size_t i = 0; i < attrKeys.size(); i++)
            {
                attrPtrs.push_back(attrKeys[i].c_str());
                attrPtrs.push_back(attrValues[i].c_str());
            }
            attrPtrs.push_back(nullptr);
            startElement(nullptr, nodeName.utf8().get_data(), attrPtrs.data());
            if (parser->is_empty())
                endElement(nullptr, nodeName.utf8().get_data());
            break;
        }
        case XMLParser::NODE_ELEMENT_END:
            endElement(nullptr, parser->get_node_name().utf8().get_data());
            break;
        case XMLParser::NODE_TEXT:
        {
            String data = parser->get_node_data();
            if (!data.is_empty())
            {
                CharString utf8 = data.utf8();
                textHandler(nullptr, utf8.ptr(), utf8.length());
            }
            break;
        }
        default:
            break;
        }
    }

    finishTextBlock();
}

NS_FGUI_END
