#include "GImage.h"
#include "PackageItem.h"
#include "display/FUIContainer.h"
#include "display/FUISprite.h"
#include "utils/ByteBuffer.h"
#include "utils/ToolSet.h"

NS_FGUI_BEGIN
GImage::GImage() : _content(nullptr)
{
    _touchDisabled = true;
}

GImage::~GImage()
{
}

void GImage::handleInit()
{
    FUIInnerContainer* root = memnew(FUIInnerContainer);
    _content = FUISprite::create();
    _content->set_offset(Vector2());
    root->add_child(_content);
    _displayObject = root;
    applyPivotOffset();
}

void GImage::handleSizeChanged()
{
    GObject::handleSizeChanged();
    if (_content)
        _content->set_content_size(_size);
    applyPivotOffset();
}

void GImage::applyPivotOffset()
{
    if (_content)
    {
        _content->set_offset(Vector2());
        _content->set_position(computeContentPivotOffset());
    }
}

FlipType GImage::getFlip() const
{
    if (!_content) return FlipType::NONE;
    if (_content->isFlippedH() && _content->isFlippedV())
        return FlipType::BOTH;
    else if (_content->isFlippedH())
        return FlipType::HORIZONTAL;
    else if (_content->isFlippedV())
        return FlipType::VERTICAL;
    else
        return FlipType::NONE;
}

void GImage::setFlip(FlipType value)
{
    _content->setFlippedH(value == FlipType::HORIZONTAL || value == FlipType::BOTH);
    _content->setFlippedV(value == FlipType::VERTICAL || value == FlipType::BOTH);
}

void GImage::handleGrayedChanged()
{
    GObject::handleGrayedChanged();

    ((FUISprite*)_content)->setGrayed(_finalGrayed);
}

Color GImage::getColor() const
{
    if (!_content) return Color(1, 1, 1, 1);
    return _content->getColor();
}

void GImage::setColor(const Color& value)
{
    _content->setColor(value);
}

FillMethod GImage::getFillMethod() const
{
    if (!_content) return FillMethod::None;
    return _content->getFillMethod();
}

void GImage::setFillMethod(FillMethod value)
{
    _content->setFillMethod(value);
}

FillOrigin GImage::getFillOrigin() const
{
    if (!_content) return FillOrigin::Left;
    return _content->getFillOrigin();
}

void GImage::setFillOrigin(FillOrigin value)
{
    _content->setFillOrigin(value);
}

bool GImage::isFillClockwise() const
{
    if (!_content) return false;
    return _content->isFillClockwise();
}

void GImage::setFillClockwise(bool value)
{
    _content->setFillClockwise(value);
}

float GImage::getFillAmount() const
{
    if (!_content) return 0;
    return _content->getFillAmount();
}

void GImage::setFillAmount(float value)
{
    _content->setFillAmount(value);
}

Variant GImage::getProp(ObjectPropID propId)
{
    switch (propId)
    {
    case ObjectPropID::Color:
        return Variant(ToolSet::colorToInt(getColor()));
    default:
        return GObject::getProp(propId);
    }
}

void GImage::setProp(ObjectPropID propId, const Variant& value)
{
    switch (propId)
    {
    case ObjectPropID::Color:
        setColor(ToolSet::intToColor(value.operator int()));
        break;
    default:
        GObject::setProp(propId, value);
        break;
    }
}

void GImage::constructFromResource()
{
    PackageItem* contentItem = _packageItem->getBranch();
    sourceSize.width = contentItem->width;
    sourceSize.height = contentItem->height;
    initSize = sourceSize;

    contentItem = contentItem->getHighResolution();
    contentItem->load();

    _content->set_region_rect(contentItem->imageFrame.region);
    ((FUISprite*)_content)->setRotated(contentItem->imageFrame.rotated);
    ((FUISprite*)_content)->setImageFrameInfo(contentItem->imageFrame.originalSize, contentItem->imageFrame.offset);
    _content->set_content_size(sourceSize);
    _content->setTexture(contentItem->texture);

    if (contentItem->hasScale9Grid)
        ((FUISprite*)_content)->setScale9Grid(contentItem->scale9Grid);
    else if (contentItem->scaleByTile)
        ((FUISprite*)_content)->setScaleByTile(true);

    setSize(sourceSize.width, sourceSize.height);
    ((FUISprite*)_content)->setGrayed(_finalGrayed);
}

void GImage::setup_beforeAdd(ByteBuffer* buffer, int beginPos)
{
    GObject::setup_beforeAdd(buffer, beginPos);

    buffer->seek(beginPos, 5);

    if (buffer->readBool())
        setColor((Color)buffer->readColor());
    setFlip((FlipType)buffer->readByte());
    int fillMethod = buffer->readByte();
    if (fillMethod != 0)
    {
        _content->setFillMethod((FillMethod)fillMethod);
        _content->setFillOrigin((FillOrigin)buffer->readByte());
        _content->setFillClockwise(buffer->readBool());
        _content->setFillAmount(buffer->readFloat());
    }
}

void GImage::_bind_methods()
{
    /// @author Kevin.CodeBuddy.Auto / 2026-07-16
    // FlipType 枚举
    ClassDB::bind_integer_constant(get_class_static(), "FlipType", "NONE", static_cast<int64_t>(FlipType::NONE));
    ClassDB::bind_integer_constant(get_class_static(), "FlipType", "HORIZONTAL", static_cast<int64_t>(FlipType::HORIZONTAL));
    ClassDB::bind_integer_constant(get_class_static(), "FlipType", "VERTICAL", static_cast<int64_t>(FlipType::VERTICAL));
    ClassDB::bind_integer_constant(get_class_static(), "FlipType", "BOTH", static_cast<int64_t>(FlipType::BOTH));

    ClassDB::bind_method(D_METHOD("setFlip", "flip"), &GImage::gd_setFlip);
    ClassDB::bind_method(D_METHOD("getFlip"), &GImage::gd_getFlip);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "flip"), "setFlip", "getFlip");

    ClassDB::bind_method(D_METHOD("setColor", "color"), &GImage::setColor);
    ClassDB::bind_method(D_METHOD("getColor"), &GImage::getColor);
    ADD_PROPERTY(PropertyInfo(Variant::COLOR, "imageColor"), "setColor", "getColor");

    ClassDB::bind_method(D_METHOD("setFillMethod", "method"), &GImage::gd_setFillMethod);
    ClassDB::bind_method(D_METHOD("getFillMethod"), &GImage::gd_getFillMethod);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "fillMethod"), "setFillMethod", "getFillMethod");

    ClassDB::bind_method(D_METHOD("setFillOrigin", "origin"), &GImage::gd_setFillOrigin);
    ClassDB::bind_method(D_METHOD("getFillOrigin"), &GImage::gd_getFillOrigin);
    ADD_PROPERTY(PropertyInfo(Variant::INT, "fillOrigin"), "setFillOrigin", "getFillOrigin");

    ClassDB::bind_method(D_METHOD("setFillClockwise", "value"), &GImage::setFillClockwise);
    ClassDB::bind_method(D_METHOD("isFillClockwise"), &GImage::isFillClockwise);
    ADD_PROPERTY(PropertyInfo(Variant::BOOL, "fillClockwise"), "setFillClockwise", "isFillClockwise");

    ClassDB::bind_method(D_METHOD("setFillAmount", "amount"), &GImage::setFillAmount);
    ClassDB::bind_method(D_METHOD("getFillAmount"), &GImage::getFillAmount);
    ADD_PROPERTY(PropertyInfo(Variant::FLOAT, "fillAmount", PROPERTY_HINT_RANGE, "0,1,0.01"), "setFillAmount", "getFillAmount");

    ClassDB::bind_method(D_METHOD("setTexture", "texture"), &GImage::setTexture);
    ClassDB::bind_method(D_METHOD("getTexture"), &GImage::getTexture);
    ADD_PROPERTY(PropertyInfo(Variant::OBJECT, "texture", PROPERTY_HINT_RESOURCE_TYPE, "Texture2D"), "setTexture", "getTexture");
}

void GImage::gd_setFillMethod(int value) { setFillMethod(static_cast<FillMethod>(value)); }
int GImage::gd_getFillMethod() const { return static_cast<int>(getFillMethod()); }
void GImage::gd_setFillOrigin(int value) { setFillOrigin(static_cast<FillOrigin>(value)); }
int GImage::gd_getFillOrigin() const { return static_cast<int>(getFillOrigin()); }
void GImage::gd_setFlip(int value) { setFlip(static_cast<FlipType>(value)); }
int GImage::gd_getFlip() const { return static_cast<int>(getFlip()); }

Ref<Texture2D> GImage::getTexture() const
{
    return _content ? _content->getTexture() : Ref<Texture2D>();
}

void GImage::setTexture(const Ref<Texture2D>& value)
{
    if (!_content)
        return;

    _content->setTexture(value);

    if (value.is_valid())
    {
        Vector2 texSize = value->get_size();
        _content->set_region_rect(Rect2(Vector2(), texSize));
        ((FUISprite*)_content)->setImageFrameInfo(texSize, Vector2());
        setSize(texSize.width, texSize.height);
    }
}

NS_FGUI_END

