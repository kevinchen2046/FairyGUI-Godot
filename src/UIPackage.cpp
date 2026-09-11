#include "UIPackage.h"
#include "GObject.h"
#include "UIObjectFactory.h"
#include "UIConfig.h"
#include "display/BitmapFont.h"
#include "event/HitTest.h"
#include "utils/ByteBuffer.h"
#include "utils/ToolSet.h"
#include <chrono>
#ifdef FGUI_GDEXTENSION
#include <godot_cpp/classes/image.hpp>
#include <godot_cpp/classes/image_texture.hpp>
#include <godot_cpp/classes/resource_loader.hpp>
#include <godot_cpp/classes/resource_uid.hpp>
#else
#include "core/io/image.h"
#include "core/io/image_loader.h"
#include "core/io/resource_uid.h"
#include "scene/resources/image_texture.h"
#include "core/io/resource_loader.h"
#endif

NS_FGUI_BEGIN

using namespace std;

const string UIPackage::URL_PREFIX = "ui://";
int UIPackage::_constructing = 0;
std::string UIPackage::_branch;
std::unordered_map<std::string, std::string> UIPackage::_vars;

std::unordered_map<std::string, UIPackage*> UIPackage::_packageInstById;
std::unordered_map<std::string, UIPackage*> UIPackage::_packageInstByName;
std::vector<UIPackage*> UIPackage::_packageList;

Ref<Texture2D> UIPackage::_emptyTexture;

static PackedStringArray fui_string_vector_to_packed(const std::vector<std::string>* values)
{
    PackedStringArray result;
    if (values == nullptr)
        return result;
    for (const std::string& value : *values)
        result.push_back(String::utf8(value.c_str()));
    return result;
}

static Dictionary fui_image_frame_to_dictionary(const ImageFrame& frame)
{
    Dictionary result;
    result["texture"] = frame.texture;
    result["region"] = frame.region;
    result["rotated"] = frame.rotated;
    result["offset"] = frame.offset;
    result["original_size"] = frame.originalSize;
    result["original_size_in_pixels"] = frame.originalSizeInPixels;
    return result;
}

static Dictionary fui_package_item_to_dictionary(PackageItem* item)
{
    Dictionary result;
    if (item == nullptr)
        return result;

    result["id"] = String::utf8(item->id.c_str());
    result["name"] = String::utf8(item->name.c_str());
    result["type"] = static_cast<int>(item->type);
    result["object_type"] = static_cast<int>(item->objectType);
    result["width"] = item->width;
    result["height"] = item->height;
    result["file"] = String::utf8(item->file.c_str());
    result["owner"] = Ref<UIPackage>(item->owner);
    result["url"] = item->owner != nullptr
        ? String::utf8((UIPackage::URL_PREFIX + item->owner->getId() + item->id).c_str())
        : String();
    result["branches"] = fui_string_vector_to_packed(item->branches);
    result["high_resolution"] = fui_string_vector_to_packed(item->highResolution);
    result["smoothing"] = item->smoothing;
    result["scale_by_tile"] = item->scaleByTile;
    result["has_scale9_grid"] = item->hasScale9Grid;
    result["scale9_grid"] = item->scale9Grid;
    result["tile_grid_indice"] = item->tileGridIndice;
    result["has_skeleton_anchor"] = item->hasSkeletonAnchor;
    result["skeleton_anchor"] = item->skeletonAnchor;
    return result;
}

static Variant fui_package_item_asset_to_variant(PackageItem* item)
{
    if (item == nullptr || item->owner == nullptr)
        return Variant();

    item->owner->getItemAsset(item);
    switch (item->type)
    {
    case PackageItemType::IMAGE:
        return fui_image_frame_to_dictionary(item->imageFrame);
    case PackageItemType::ATLAS:
        return item->texture;
    case PackageItemType::FONT:
        return item->bitmapFont != nullptr ? Variant(item->bitmapFont->getFont()) : Variant();
    case PackageItemType::MOVIECLIP:
    {
        if (item->movieclip == nullptr)
            return Variant();
        Dictionary result;
        result["interval"] = item->movieclip->interval;
        result["repeat_delay"] = item->movieclip->repeatDelay;
        result["swing"] = item->movieclip->swing;
        Array frames;
        for (const MovieClipFrameData& frame : item->movieclip->frames)
        {
            Dictionary frameInfo = fui_image_frame_to_dictionary(frame.imageData);
            frameInfo["add_delay"] = frame.addDelay;
            frames.push_back(frameInfo);
        }
        result["frames"] = frames;
        return result;
    }
    default:
        return Variant();
    }
}

UIPackage::UIPackage()
    : _branchIndex(-1)
{
}

UIPackage::~UIPackage()
{
    for (auto& it : _items)
        FGUI_DELETE(it);
    for (auto& it : _sprites)
        delete it.second;
}

void UIPackage::setBranch(const std::string& value)
{
    _branch = value;
    for (auto& it : _packageList)
    {
        if (it->_branches.size() > 0)
        {
            it->_branchIndex = ToolSet::findInStringArray(it->_branches, value);
        }
    }
}

const std::string& UIPackage::getVar(const std::string& key)
{
    auto it = _vars.find(key);
    if (it != _vars.end())
        return it->second;
    else
        return EMPTY_STRING;
}

void UIPackage::setVar(const std::string& key, const std::string& value)
{
    _vars[key] = value;
}

UIPackage* UIPackage::getById(const string& id)
{
    auto it = _packageInstById.find(id);
    if (it != _packageInstById.end())
        return it->second;
    return nullptr;
}

UIPackage* UIPackage::getByName(const string& name)
{
    auto it = _packageInstByName.find(name);
    if (it != _packageInstByName.end())
        return it->second;
    return nullptr;
}

UIPackage* UIPackage::addPackage(const string& assetPath)
{
    auto it = _packageInstById.find(assetPath);
    if (it != _packageInstById.end())
        return it->second;

    if (_emptyTexture.is_null())
    {
        // Create a 2x2 empty texture
        Ref<Image> emptyImg;
        emptyImg.instantiate();
        // Create a tiny white image
        PackedByteArray emptyData;
        emptyData.resize(16);
        for (int i = 0; i < 16; i++)
            emptyData.set(i, 0);
        emptyImg->set_data(2, 2, false, Image::FORMAT_RGBA8, emptyData);

        Ref<ImageTexture> emptyTex;
        emptyTex.instantiate();
        emptyTex->set_image(emptyImg);
        _emptyTexture = emptyTex;
    }

    // Read .fui file
    string fuiPath = assetPath + ".fui";
    Ref<FileAccess> file = FileAccess::open(String(fuiPath.c_str()), FileAccess::READ);
    if (file.is_null() || !file->is_open())
    {
        print_line("FairyGUI: cannot load package from '", assetPath.c_str(), "'");
        return nullptr;
    }

    PackedByteArray fileData = file->get_buffer(file->get_length());
    file.unref();

    char* p = new char[fileData.size()];
    memcpy(p, fileData.ptr(), fileData.size());
    ByteBuffer buffer(p, 0, (int)fileData.size(), true);

    Ref<UIPackage> pkg_ref = memnew(UIPackage);
    UIPackage* pkg = pkg_ref.ptr();
    pkg->_assetPath = assetPath;
    if (!pkg->loadPackage(&buffer))
    {
        // pkg_ref dtor cleans up (init_ref gave refcount=1 → dtor → 0 → freed)
        return nullptr;
    }

    _packageInstById[pkg->getId()] = pkg;
    _packageInstByName[pkg->getName()] = pkg;
    _packageInstById[assetPath] = pkg;
    _packageList.push_back(pkg);

    pkg->reference(); // keep alive for static maps (pkg_ref dtor: 2→1)
    return pkg;
}

void UIPackage::removePackage(const string& packageIdOrName)
{
    UIPackage* pkg = UIPackage::getByName(packageIdOrName);
    if (!pkg)
        pkg = getById(packageIdOrName);

    if (pkg)
    {
        auto it = std::find(_packageList.cbegin(), _packageList.cend(), pkg);
        if (it != _packageList.cend())
            _packageList.erase(it);

        _packageInstById.erase(pkg->getId());
        _packageInstById.erase(pkg->_assetPath);
        _packageInstByName.erase(pkg->getName());

        pkg->unreference(); // matches reference() in addPackage
    }
    else
        print_line("FairyGUI: invalid package name or id: ", packageIdOrName.c_str());
}

void UIPackage::removeAllPackages()
{
    for (auto& it : _packageList)
        it->unreference(); // matches reference() in addPackage

    _packageInstById.clear();
    _packageInstByName.clear();
    _packageList.clear();
}

Ref<GObject> UIPackage::createObject(const string& pkgName, const string& resName)
{
    const auto startedAt = std::chrono::steady_clock::now();
    UIPackage* pkg = UIPackage::getByName(pkgName);
    if (pkg)
    {
        Ref<GObject> result = pkg->createObject(resName);
        const int64_t elapsedMs = std::chrono::duration_cast<std::chrono::milliseconds>(
            std::chrono::steady_clock::now() - startedAt).count();
        if (elapsedMs >= 100)
        {
            print_line("FairyGUI performance: UIPackage.createObject('", pkgName.c_str(),
                "', '", resName.c_str(), "') took ", int64_t(elapsedMs),
                " ms. Slow _on_construct callbacks are reported separately; otherwise this is usually synchronous first-use resource loading or native component construction.");
        }
        return result;
    }
    else
    {
        print_line("FairyGUI: package not found - ", pkgName.c_str());
        return Ref<GObject>();
    }
}

Ref<GObject> UIPackage::createObjectFromURL(const string& url)
{
    PackageItem* pi = UIPackage::getItemByURL(url);
    if (pi)
        return pi->owner->createObject(pi);
    else
    {
        print_line("FairyGUI: resource not found - ", url.c_str());
        return Ref<GObject>();
    }
}

string UIPackage::getItemURL(const string& pkgName, const string& resName)
{
    UIPackage* pkg = UIPackage::getByName(pkgName);
    if (pkg)
    {
        PackageItem* pi = pkg->getItemByName(resName);
        if (pi)
            return URL_PREFIX + pkg->getId() + pi->id;
    }
    return EMPTY_STRING;
}

PackageItem* UIPackage::getItemByURL(const string& url)
{
    if (url.size() == 0)
        return nullptr;

    ssize_t pos1 = url.find('/');
    if (pos1 == -1)
        return nullptr;

    ssize_t pos2 = url.find('/', pos1 + 2);
    if (pos2 == -1)
    {
        if (url.size() > 13)
        {
            string pkgId = url.substr(5, 8);
            UIPackage* pkg = getById(pkgId);
            if (pkg != nullptr)
            {
                string srcId = url.substr(13);
                return pkg->getItem(srcId);
            }
        }
    }
    else
    {
        string pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
        UIPackage* pkg = getByName(pkgName);
        if (pkg != nullptr)
        {
            string srcName = url.substr(pos2 + 1);
            return pkg->getItemByName(srcName);
        }
    }

    return nullptr;
}

string UIPackage::normalizeURL(const string& url)
{
    if (url.size() == 0)
        return url;

    ssize_t pos1 = url.find('/');
    if (pos1 == -1)
        return url;

    ssize_t pos2 = url.find('/', pos1 + 2);
    if (pos2 == -1)
        return url;
    else
    {
        string pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
        string srcName = url.substr(pos2 + 1);
        return getItemURL(pkgName, srcName);
    }
}

void* UIPackage::getItemAsset(const std::string& pkgName, const std::string& resName, PackageItemType type)
{
    UIPackage* pkg = UIPackage::getByName(pkgName);
    if (pkg)
    {
        PackageItem* pi = pkg->getItemByName(resName);
        if (pi)
        {
            if (type != PackageItemType::UNKNOWN && pi->type != type)
                return nullptr;
            else
                return pkg->getItemAsset(pi);
        }
    }
    return nullptr;
}

void* UIPackage::getItemAssetByURL(const std::string& url, PackageItemType type)
{
    PackageItem* pi = UIPackage::getItemByURL(url);
    if (pi)
    {
        if (type != PackageItemType::UNKNOWN && pi->type != type)
            return nullptr;
        else
            return pi->owner->getItemAsset(pi);
    }
    else
        return nullptr;
}

PackageItem* UIPackage::getItem(const string& itemId)
{
    auto it = _itemsById.find(itemId);
    if (it != _itemsById.end())
        return it->second;
    return nullptr;
}

PackageItem* UIPackage::getItemByName(const string& itemName)
{
    auto it = _itemsByName.find(itemName);
    if (it != _itemsByName.end())
        return it->second;

    static const char* kExtensions[] = { ".jta", ".png", ".jpg", ".jpeg", ".xml", ".fnt" };
    for (const char* ext : kExtensions)
    {
        it = _itemsByName.find(itemName + ext);
        if (it != _itemsByName.end())
            return it->second;
    }

    const size_t dot = itemName.find_last_of('.');
    if (dot != string::npos && dot > 0)
    {
        it = _itemsByName.find(itemName.substr(0, dot));
        if (it != _itemsByName.end())
            return it->second;
    }

    return nullptr;
}

Ref<GObject> UIPackage::createObject(const string& resName)
{
    PackageItem* pi = getItemByName(resName);
    if (!pi)
    {
        print_line("FairyGUI: resource not found - ", resName.c_str(), " in ", _name.c_str());
        return Ref<GObject>();
    }

    return createObject(pi);
}

Ref<GObject> UIPackage::createObject(PackageItem* item)
{
    Ref<GObject> g = UIObjectFactory::newObject(item);
    if (g.is_null())
        return Ref<GObject>();

    _constructing++;
    g->constructFromResource();
    _constructing--;
    return g;
}

bool UIPackage::loadPackage(ByteBuffer* buffer)
{
    if (buffer->readUint() != 0x46475549)
    {
        print_line("FairyGUI: old package format found in '", _assetPath.c_str(), "'");
        return false;
    }

    buffer->version = buffer->readInt();
    bool ver2 = buffer->version >= 2;
    buffer->readBool(); //compressed
    _id = buffer->readString();
    _name = buffer->readString();
    buffer->skip(20);
    int indexTablePos = buffer->getPos();
    int cnt;

    buffer->seek(indexTablePos, 4);

    cnt = buffer->readInt();
    _stringTable.resize(cnt);
    for (int i = 0; i < cnt; i++)
        _stringTable[i] = buffer->readString();
    buffer->setStringTable(&_stringTable);

    buffer->seek(indexTablePos, 0);
    cnt = buffer->readShort();
    for (int i = 0; i < cnt; i++)
    {
        std::unordered_map<std::string, std::string> info;
        info["id"] = buffer->readS();
        info["name"] = buffer->readS();

        _dependencies.push_back(info);
    }

    bool branchIncluded = false;
    if (ver2)
    {
        cnt = buffer->readShort();
        if (cnt > 0)
        {
            buffer->readSArray(_branches, cnt);
            if (_branch.size() > 0)
                _branchIndex = ToolSet::findInStringArray(_branches, _branch);
        }

        branchIncluded = cnt > 0;
    }

    buffer->seek(indexTablePos, 1);

    PackageItem* pi;
    string path = _assetPath;
    size_t pos = path.find('/');
    string shortPath = pos == -1 ? EMPTY_STRING : path.substr(0, pos + 1);
    path += "_";

    cnt = buffer->readShort();
    for (int i = 0; i < cnt; i++)
    {
        int nextPos = buffer->readInt();
        nextPos += buffer->getPos();

        pi = new PackageItem();
        pi->owner = this;
        pi->type = (PackageItemType)buffer->readByte();
        pi->id = buffer->readS();
        pi->name = buffer->readS();
        buffer->skip(2); //path
        pi->file = buffer->readS();
        buffer->readBool(); //exported
        pi->width = buffer->readInt();
        pi->height = buffer->readInt();

        switch (pi->type)
        {
        case PackageItemType::IMAGE:
        {
            pi->objectType = ObjectType::IMAGE;
            int scaleOption = buffer->readByte();
            if (scaleOption == 1)
            {
                float gx = (float)buffer->readInt();
                float gy = (float)buffer->readInt();
                float gw = (float)buffer->readInt();
                float gh = (float)buffer->readInt();
                pi->scale9Grid = Rect2(gx, gy, gw, gh);
                pi->tileGridIndice = buffer->readInt();
                pi->hasScale9Grid = true;
            }
            else if (scaleOption == 2)
                pi->scaleByTile = true;

            pi->smoothing = buffer->readBool();
            break;
        }

        case PackageItemType::MOVIECLIP:
        {
            pi->smoothing = buffer->readBool();
            pi->objectType = ObjectType::MOVIECLIP;
            pi->rawData = buffer->readBuffer();
            break;
        }

        case PackageItemType::FONT:
        {
            pi->rawData = buffer->readBuffer();
            break;
        }

        case PackageItemType::COMPONENT:
        {
            int extension = buffer->readByte();
            if (extension > 0)
                pi->objectType = (ObjectType)extension;
            else
                pi->objectType = ObjectType::COMPONENT;
            pi->rawData = buffer->readBuffer();

            UIObjectFactory::resolvePackageItemExtension(pi);
            break;
        }

        case PackageItemType::ATLAS:
        case PackageItemType::SOUND:
        case PackageItemType::MISC:
        {
            pi->file = path + pi->file;
            break;
        }

        case PackageItemType::SPINE:
        case PackageItemType::DRAGONBONES:
        {
            pi->file = shortPath + pi->file;
            float sax = buffer->readFloat();
            float say = buffer->readFloat();
            pi->skeletonAnchor = Vector2(sax, say);
            pi->hasSkeletonAnchor = true;
            break;
        }

        default:
            break;
        }

        if (ver2)
        {
            std::string str = buffer->readS(); //branch
            if (!str.empty())
                pi->name = str + "/" + pi->name;

            int branchCnt = buffer->readUbyte();
            if (branchCnt > 0)
            {
                if (branchIncluded)
                {
                    pi->branches = new std::vector<std::string>();
                    buffer->readSArray(*pi->branches, branchCnt);
                }
                else
                    _itemsById[buffer->readS()] = pi;
            }

            int highResCnt = buffer->readUbyte();
            if (highResCnt > 0)
            {
                pi->highResolution = new std::vector<std::string>();
                buffer->readSArray(*pi->highResolution, highResCnt);
            }
        }

        _items.push_back(pi);
        _itemsById[pi->id] = pi;
        if (!pi->name.empty())
            _itemsByName[pi->name] = pi;

        buffer->setPos(nextPos);
    }

    buffer->seek(indexTablePos, 2);

    cnt = buffer->readShort();
    for (int i = 0; i < cnt; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        const string& itemId = buffer->readS();
        pi = _itemsById[buffer->readS()];

        AtlasSprite* sprite = new AtlasSprite();
        sprite->atlas = pi;
        
        float x = (float)buffer->readInt(),
            y = (float)buffer->readInt(),
            width = (float)buffer->readInt(),
            height = (float)buffer->readInt();
        sprite->rect = Rect2(
            x, y, width, height
        );
        sprite->rotated = buffer->readBool();
        if (ver2 && buffer->readBool())
        {
            float offX = (float)buffer->readInt();
            float offY = (float)buffer->readInt();
            float origW = (float)buffer->readInt();
            float origH = (float)buffer->readInt();
            sprite->offset = Vector2(offX, offY);
            sprite->originalSize = Vector2(origW, origH);
        }
        else
        {
            sprite->offset = Vector2();
            sprite->originalSize = sprite->rect.size;
        }
        _sprites[itemId] = sprite;

        buffer->setPos(nextPos);
    }

    if (buffer->seek(indexTablePos, 3))
    {
        cnt = buffer->readShort();
        for (int i = 0; i < cnt; i++)
        {
            int nextPos = buffer->readInt();
            nextPos += buffer->getPos();

            auto it = _itemsById.find(buffer->readS());
            if (it != _itemsById.end())
            {
                pi = it->second;
                if (pi->type == PackageItemType::IMAGE)
                {
                    pi->pixelHitTestData = new PixelHitTestData();
                    pi->pixelHitTestData->load(buffer);
                }
            }

            buffer->setPos(nextPos);
        }
    }

    return true;
}

void* UIPackage::getItemAsset(PackageItem* item)
{
    switch (item->type)
    {
    case PackageItemType::IMAGE:
        if (item->imageFrame.texture.is_null())
            loadImage(item);
        return (void*)&item->imageFrame;

    case PackageItemType::ATLAS:
        if (item->texture.is_null())
            loadAtlas(item);
        return item->texture.ptr();

    case PackageItemType::FONT:
        if (item->bitmapFont == nullptr)
            loadFont(item);
        return item->bitmapFont;

    case PackageItemType::MOVIECLIP:
        if (item->movieclip == nullptr)
            loadMovieClip(item);
        return item->movieclip;

    default:
        return nullptr;
    }
}

void UIPackage::loadAtlas(PackageItem* item)
{
    const auto startedAt = std::chrono::steady_clock::now();
    // 通过 Godot 导入系统加载为 Texture2D，再提取 Image
#ifdef FGUI_GDEXTENSION
    Ref<Texture2D> tex2d = ResourceLoader::get_singleton()->load(GObject::toGodotStr(item->file), "Texture2D");
#else
    Ref<Texture2D> tex2d = ResourceLoader::load(GObject::toGodotStr(item->file), "Texture2D");
#endif
    if (tex2d.is_null())
    {
        item->texture = _emptyTexture;
        print_line("FairyGUI: texture '", item->file.c_str(), "' not found in ", _name.c_str());
        return;
    }

    // Handle separate alpha texture for ETC1 format
    string alphaFilePath;
    string ext;
    size_t dotPos = item->file.find_last_of('.');
    if (dotPos != -1)
    {
        ext = item->file.substr(dotPos);
        alphaFilePath = item->file.substr(0, dotPos) + "!a" + ext;
    }
    else
    {
        alphaFilePath = item->file + "!a";
    }

    if (!ToolSet::isFileExist(alphaFilePath))
    {
        // Godot already owns and caches this imported texture. Reusing it avoids
        // a GPU/CPU readback and a second full-size texture upload.
        item->texture = tex2d;
    }
    else
    {
#ifdef FGUI_GDEXTENSION
        Ref<Texture2D> alphaTex2d = ResourceLoader::get_singleton()->load(GObject::toGodotStr(alphaFilePath), "Texture2D");
#else
        Ref<Texture2D> alphaTex2d = ResourceLoader::load(GObject::toGodotStr(alphaFilePath), "Texture2D");
#endif
        Ref<Image> image = tex2d->get_image();
        Ref<Image> alphaImg = alphaTex2d.is_valid() ? alphaTex2d->get_image() : Ref<Image>();
        if (image.is_valid() && alphaImg.is_valid())
        {
            if (image->get_format() != Image::FORMAT_RGBA8)
                image->convert(Image::FORMAT_RGBA8);
            if (alphaImg->get_format() != Image::FORMAT_RGBA8)
                alphaImg->convert(Image::FORMAT_RGBA8);

            // Combine RGB from main image, alpha from alpha image
            int width = image->get_width();
            int height = image->get_height();
            PackedByteArray mainData = image->get_data();
            PackedByteArray alphaData = alphaImg->get_data();

            int alphaW = alphaImg->get_width();
            int alphaH = alphaImg->get_height();

            // Direct pointer access avoids millions of checked set() calls on a
            // large atlas, which previously could block createObject for seconds.
            uint8_t* mainBytes = mainData.ptrw();
            const uint8_t* alphaBytes = alphaData.ptr();
            const int copyWidth = std::min(width, alphaW);
            const int copyHeight = std::min(height, alphaH);
            for (int y = 0; y < copyHeight; y++)
            {
                for (int x = 0; x < copyWidth; x++)
                {
                    int mainIdx = (y * width + x) * 4;
                    int alphaIdx = (y * alphaW + x) * 4;
                    mainBytes[mainIdx + 3] = alphaBytes[alphaIdx];
                }
            }

            image->set_data(width, height, false, Image::FORMAT_RGBA8, mainData);

            Ref<ImageTexture> combinedTexture;
            combinedTexture.instantiate();
            combinedTexture->set_image(image);
            item->texture = combinedTexture;
        }
        else
        {
            item->texture = tex2d;
            print_line("FairyGUI: separate alpha texture '", alphaFilePath.c_str(),
                "' could not be read; using the main atlas texture.");
        }
    }

    const int64_t elapsedMs = std::chrono::duration_cast<std::chrono::milliseconds>(
        std::chrono::steady_clock::now() - startedAt).count();
    if (elapsedMs >= 50)
        print_line("FairyGUI performance: loading atlas '", item->file.c_str(), "' took ", int64_t(elapsedMs), " ms.");
}

AtlasSprite* UIPackage::getSprite(const std::string& spriteId)
{
    auto it = _sprites.find(spriteId);
    if (it != _sprites.end())
        return it->second;
    else
        return nullptr;
}

void UIPackage::createSpriteTexture(AtlasSprite* sprite, ImageFrame& outFrame)
{
    getItemAsset(sprite->atlas);

    outFrame.texture = sprite->atlas->texture;
    outFrame.region = sprite->rect;
    outFrame.rotated = sprite->rotated;
    const Vector2 trimSize = sprite->rotated
        && (Math::abs(sprite->rect.size.x - sprite->originalSize.x) > 0.5f
            || Math::abs(sprite->rect.size.y - sprite->originalSize.y) > 0.5f)
        ? Vector2(sprite->rect.size.y, sprite->rect.size.x)
        : sprite->rect.size;
    outFrame.offset = Vector2(
        sprite->offset.x - (sprite->originalSize.x - trimSize.x) / 2,
        -(sprite->offset.y - (sprite->originalSize.y - trimSize.y) / 2)
    );
    outFrame.originalSize = sprite->originalSize;
    outFrame.originalSizeInPixels = trimSize;
}

void UIPackage::loadImage(PackageItem* item)
{
    AtlasSprite* sprite = getSprite(item->id);
    if (sprite != nullptr)
    {
        item->imageFrame = ImageFrame();
        createSpriteTexture(sprite, item->imageFrame);
        item->texture = item->imageFrame.texture;
    }
    else
    {
        // Create empty image frame using empty texture
        item->imageFrame = ImageFrame();
        item->imageFrame.texture = _emptyTexture;
        item->imageFrame.region = Rect2(0, 0, 2, 2);
        item->imageFrame.originalSize = Vector2(2, 2);
        item->imageFrame.originalSizeInPixels = Vector2(2, 2);
        item->texture = _emptyTexture;
    }

    if (item->scaleByTile)
    {
        // In Godot, texture repeat is set on the CanvasItem/Sprite2D level
        // This is handled by FUISprite when rendering with scaleByTile
    }
}

void UIPackage::loadMovieClip(PackageItem* item)
{
    item->movieclip = new MovieClipData();

    ByteBuffer* buffer = item->rawData;

    buffer->seek(0, 0);

    float interval = buffer->readInt() / 1000.0f;
    item->swing = buffer->readBool();
    item->repeatDelay = buffer->readInt() / 1000.0f;

    buffer->seek(0, 1);

    int frameCount = buffer->readShort();
    item->movieclip->frames.resize(frameCount);

    Vector2 mcSizeInPixels = Vector2((float)item->width, (float)item->height);
    Vector2 mcSize = mcSizeInPixels;

    AtlasSprite* sprite;

    for (int i = 0; i < frameCount; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        Rect2 rect;
        rect.position.x = (float)buffer->readInt();
        rect.position.y = (float)buffer->readInt();
        rect.size.x = (float)buffer->readInt();
        rect.size.y = (float)buffer->readInt();
        float addDelay = buffer->readInt() / 1000.0f;
        const string& spriteId = buffer->readS();

        MovieClipFrameData& frameData = item->movieclip->frames[i];
        frameData.addDelay = addDelay;

        if (!spriteId.empty() && (sprite = getSprite(spriteId)) != nullptr)
        {
            getItemAsset(sprite->atlas);

            frameData.imageData.texture = sprite->atlas->texture;
            frameData.imageData.region = sprite->rect;
            frameData.imageData.rotated = sprite->rotated;
            // The package stores the trimmed frame's top-left position in the
            // movie clip canvas. cocos2d converts that value to a centre-based
            // SpriteFrame offset, but FUISprite draws from a top-left origin and
            // therefore needs the package value directly.
            frameData.imageData.offset = rect.position;
            frameData.imageData.originalSize = mcSize;
            frameData.imageData.originalSizeInPixels = mcSizeInPixels;
        }
        else
        {
            frameData.imageData.texture = _emptyTexture;
            frameData.imageData.region = Rect2(0, 0, 2, 2);
            frameData.imageData.offset = rect.position;
            frameData.imageData.originalSize = mcSize;
            frameData.imageData.originalSizeInPixels = mcSizeInPixels;
        }

        buffer->setPos(nextPos);
    }

    item->movieclip->interval = interval;
    item->movieclip->repeatDelay = item->repeatDelay;
    item->movieclip->swing = item->swing;

    delete buffer;
    item->rawData = nullptr;
}

void UIPackage::loadFont(PackageItem* item)
{
    item->bitmapFont = BitmapFont::create();
    FontAtlas* fontAtlas = new FontAtlas(*item->bitmapFont);
    item->bitmapFont->_fontAtlas = fontAtlas;

    ByteBuffer* buffer = item->rawData;

    buffer->seek(0, 0);

    bool ttf = buffer->readBool();
    item->bitmapFont->_canTint = buffer->readBool();
    item->bitmapFont->_resizable = buffer->readBool();
    buffer->readBool(); //hasChannel
    int fontSize = buffer->readInt();
    int xadvance = buffer->readInt();
    int lineHeight = buffer->readInt();

    Ref<Texture2D> mainTexture;
    AtlasSprite* mainSprite = nullptr;

    if (ttf && (mainSprite = getSprite(item->id)) != nullptr)
    {
        getItemAsset(mainSprite->atlas);
        mainTexture = mainSprite->atlas->texture;
    }

    buffer->seek(0, 1);

    FontLetterDefinition def;
    int bx = 0, by = 0;
    int bw = 0, bh = 0;
    PackageItem* charImg = nullptr;

    int cnt = buffer->readInt();
    for (int i = 0; i < cnt; i++)
    {
        int nextPos = buffer->readUshort();
        nextPos += buffer->getPos();

        memset(&def, 0, sizeof(def));

        unsigned short ch = buffer->readUshort();
        const string& img = buffer->readS();
        bx = buffer->readInt();
        by = buffer->readInt();
        def.offsetX = (float)buffer->readInt();
        def.offsetY = (float)buffer->readInt();
        bw = buffer->readInt();
        bh = buffer->readInt();
        def.xAdvance = (float)buffer->readInt();
        buffer->readByte(); //channel

        if (ttf)
        {
            Rect2 tempRect = Rect2(
                (float)(bx + mainSprite->rect.position.x),
                (float)(by + mainSprite->rect.position.y),
                (float)bw,
                (float)bh
            );
            def.U = tempRect.position.x;
            def.V = tempRect.position.y;
            def.width = tempRect.size.x;
            def.height = tempRect.size.y;
            def.validDefinition = true;
        }
        else
        {
            charImg = getItem(img);
            if (charImg)
            {
                charImg = charImg->getBranch();
                bw = charImg->width;
                bh = charImg->height;

                AtlasSprite* atlasSprite = getSprite(img);
                if (atlasSprite != nullptr)
                {
                    def.offsetX += atlasSprite->offset.x;
                    def.offsetY += atlasSprite->offset.y;
                }

                charImg = charImg->getHighResolution();
                getItemAsset(charImg);

                if (charImg->imageFrame.texture.is_valid())
                {
                    Rect2 tempRect = charImg->imageFrame.region;
                    def.U = tempRect.position.x;
                    def.V = tempRect.position.y;
                    def.width = tempRect.size.x;
                    def.height = tempRect.size.y;
                    if (mainTexture.is_null())
                        mainTexture = charImg->imageFrame.texture;
                    def.validDefinition = true;
                }

                if (def.xAdvance == 0)
                {
                    if (xadvance == 0)
                        def.xAdvance = def.offsetX + bw;
                    else
                        def.xAdvance = (float)xadvance;
                }

                if (fontSize == 0)
                    fontSize = bh;
                lineHeight = std::max(fontSize, lineHeight);
            }
        }

        fontAtlas->addLetterDefinition(ch, def);
        buffer->setPos(nextPos);
    }

    if (mainTexture.is_valid())
        fontAtlas->addTexture(mainTexture, 0);
    fontAtlas->setLineHeight((float)lineHeight);
    item->bitmapFont->_originalFontSize = (float)fontSize;
    item->bitmapFont->_fontSize = fontSize;
    item->bitmapFont->buildGodotFont();

    delete buffer;
    item->rawData = nullptr;
}

void UIPackage::_bind_methods()
{
    ClassDB::bind_method(D_METHOD("getId"), &UIPackage::gd_getId);
    ClassDB::bind_method(D_METHOD("getName"), &UIPackage::gd_getName);
    ADD_PROPERTY(PropertyInfo(Variant::STRING, "id", PROPERTY_HINT_NONE, "", PROPERTY_USAGE_EDITOR | PROPERTY_USAGE_READ_ONLY), "", "getId");
    ADD_PROPERTY(PropertyInfo(Variant::STRING, "name", PROPERTY_HINT_NONE, "", PROPERTY_USAGE_EDITOR | PROPERTY_USAGE_READ_ONLY), "", "getName");

    ClassDB::bind_method(D_METHOD("getItem", "item_id"), &UIPackage::gd_getItem);
    ClassDB::bind_method(D_METHOD("getItemByName", "item_name"), &UIPackage::gd_getItemByName);
    ClassDB::bind_method(D_METHOD("getItemAssetById", "item_id"), &UIPackage::gd_getItemAssetById);
    ClassDB::bind_method(D_METHOD("getItems"), &UIPackage::gd_getItems);
    ClassDB::bind_method(D_METHOD("getDependencies"), &UIPackage::gd_getDependencies);

    ClassDB::bind_static_method(get_class_static(), D_METHOD("getById", "id"), &UIPackage::gd_getById);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getByName", "name"), &UIPackage::gd_getByName);

    ClassDB::bind_static_method(get_class_static(), D_METHOD("addPackage", "asset_path"), &UIPackage::gd_addPackage);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("removePackage", "package_id_or_name"), &UIPackage::gd_removePackage);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("removeAllPackages"), &UIPackage::removeAllPackages);

    ClassDB::bind_static_method(get_class_static(), D_METHOD("createObject", "pkg_name", "res_name"), &UIPackage::gd_createObject);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("createObjectFromURL", "url"), &UIPackage::gd_createObjectFromURL);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getItemURL", "pkg_name", "res_name"), &UIPackage::gd_getItemURL);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getItemByURL", "url"), &UIPackage::gd_getItemByURL);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("normalizeURL", "url"), &UIPackage::gd_normalizeURL);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getItemAsset", "pkg_name", "res_name", "type"), &UIPackage::gd_getItemAsset, DEFVAL(static_cast<int>(PackageItemType::UNKNOWN)));
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getItemAssetByURL", "url", "type"), &UIPackage::gd_getItemAssetByURL, DEFVAL(static_cast<int>(PackageItemType::UNKNOWN)));
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getEmptyTexture"), &UIPackage::gd_getEmptyTexture);

    ClassDB::bind_static_method(get_class_static(), D_METHOD("getBranch"), &UIPackage::gd_getBranch);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("setBranch", "value"), &UIPackage::gd_setBranch);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("getVar", "key"), &UIPackage::gd_getVar);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("setVar", "key", "value"), &UIPackage::gd_setVar);

    ClassDB::bind_static_method(get_class_static(), D_METHOD("registerFont", "alias_name", "real_name"), &UIPackage::gd_registerFont);
    ClassDB::bind_static_method(get_class_static(), D_METHOD("setDefaultFont", "font_name"), &UIPackage::gd_setDefaultFont);
}

String UIPackage::gd_getId() const { return String(getId().c_str()); }
String UIPackage::gd_getName() const { return String(getName().c_str()); }
Dictionary UIPackage::gd_getItem(const String& itemId) { return fui_package_item_to_dictionary(getItem(itemId.utf8().get_data())); }
Dictionary UIPackage::gd_getItemByName(const String& itemName) { return fui_package_item_to_dictionary(getItemByName(itemName.utf8().get_data())); }
Variant UIPackage::gd_getItemAssetById(const String& itemId) { return fui_package_item_asset_to_variant(getItem(itemId.utf8().get_data())); }
Array UIPackage::gd_getItems() const
{
    Array result;
    for (PackageItem* item : _items)
        result.push_back(fui_package_item_to_dictionary(item));
    return result;
}
Array UIPackage::gd_getDependencies() const
{
    Array result;
    for (const auto& dependency : _dependencies)
    {
        Dictionary info;
        auto id = dependency.find("id");
        auto name = dependency.find("name");
        info["id"] = id != dependency.end() ? String::utf8(id->second.c_str()) : String();
        info["name"] = name != dependency.end() ? String::utf8(name->second.c_str()) : String();
        result.push_back(info);
    }
    return result;
}
Ref<UIPackage> UIPackage::gd_getById(const String& id) { return Ref<UIPackage>(getById(id.utf8().get_data())); }
Ref<UIPackage> UIPackage::gd_getByName(const String& name) { return Ref<UIPackage>(getByName(name.utf8().get_data())); }
Ref<UIPackage> UIPackage::gd_addPackage(const String& descFilePath) { return Ref<UIPackage>(addPackage(descFilePath.utf8().get_data())); }
void UIPackage::gd_removePackage(const String& packageIdOrName) { removePackage(packageIdOrName.utf8().get_data()); }
Ref<GObject> UIPackage::gd_createObject(const String& pkgName, const String& resName)
{
    return createObject(pkgName.utf8().get_data(), resName.utf8().get_data());
}
Ref<GObject> UIPackage::gd_createObjectFromURL(const String& url)
{
    return createObjectFromURL(url.utf8().get_data());
}
String UIPackage::gd_getItemURL(const String& pkgName, const String& resName) { return String(getItemURL(pkgName.utf8().get_data(), resName.utf8().get_data()).c_str()); }
Dictionary UIPackage::gd_getItemByURL(const String& url) { return fui_package_item_to_dictionary(getItemByURL(url.utf8().get_data())); }
String UIPackage::gd_normalizeURL(const String& url) { return String::utf8(normalizeURL(url.utf8().get_data()).c_str()); }
Variant UIPackage::gd_getItemAsset(const String& pkgName, const String& resName, int type)
{
    UIPackage* package = getByName(pkgName.utf8().get_data());
    PackageItem* item = package != nullptr ? package->getItemByName(resName.utf8().get_data()) : nullptr;
    if (item == nullptr || (type != static_cast<int>(PackageItemType::UNKNOWN) && type != static_cast<int>(item->type)))
        return Variant();
    return fui_package_item_asset_to_variant(item);
}
Variant UIPackage::gd_getItemAssetByURL(const String& url, int type)
{
    PackageItem* item = getItemByURL(url.utf8().get_data());
    if (item == nullptr || (type != static_cast<int>(PackageItemType::UNKNOWN) && type != static_cast<int>(item->type)))
        return Variant();
    return fui_package_item_asset_to_variant(item);
}
Ref<Texture2D> UIPackage::gd_getEmptyTexture() { return getEmptyTexture(); }
String UIPackage::gd_getBranch() { return String::utf8(getBranch().c_str()); }
void UIPackage::gd_setBranch(const String& value) { setBranch(value.utf8().get_data()); }
String UIPackage::gd_getVar(const String& key) { return String::utf8(getVar(key.utf8().get_data()).c_str()); }
void UIPackage::gd_setVar(const String& key, const String& value) { setVar(key.utf8().get_data(), value.utf8().get_data()); }

void UIPackage::gd_registerFont(const String& aliasName, const String& realName) { UIConfig::registerFont(aliasName.utf8().get_data(), realName.utf8().get_data()); }
void UIPackage::gd_setDefaultFont(const String& fontName) { UIConfig::defaultFont = fontName.utf8().get_data(); }

NS_FGUI_END
