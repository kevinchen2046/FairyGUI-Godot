#include "UIConfig.h"
#include "core/io/resource_loader.h"

NS_FGUI_BEGIN
std::string UIConfig::defaultFont = "";
std::string UIConfig::buttonSound = "";
float UIConfig::buttonSoundVolumeScale = 1;
int UIConfig::defaultScrollStep = 25;
float UIConfig::defaultScrollDecelerationRate = 0.967f;
bool UIConfig::defaultScrollTouchEffect = true;
bool UIConfig::defaultScrollBounceEffect = true;
ScrollBarDisplayType UIConfig::defaultScrollBarDisplay = ScrollBarDisplayType::DEFAULT;
std::string UIConfig::verticalScrollBar = "";
std::string UIConfig::horizontalScrollBar = "";
int UIConfig::touchDragSensitivity = 10;
int UIConfig::clickDragSensitivity = 2;
int UIConfig::touchScrollSensitivity = 20;
int UIConfig::defaultComboBoxVisibleItemCount = 10;
std::string UIConfig::globalModalWaiting = "";
std::string UIConfig::tooltipsWin = "";
Color UIConfig::modalLayerColor = Color(0, 0, 0, 0.4f);
bool UIConfig::bringWindowToFrontOnClick = true;
std::string UIConfig::windowModalWaiting = "";
std::string UIConfig::popupMenu = "";
std::string UIConfig::popupMenu_seperator = "";

std::unordered_map<std::string, UIConfig::FontNameItem> UIConfig::_fontNames;

bool UIConfig::isFontFilePath(const std::string& path)
{
    if (path.empty())
        return false;

    const size_t dot = path.rfind('.');
    if (dot == std::string::npos || dot + 1 >= path.size())
        return false;

    std::string ext = path.substr(dot);
    for (char& c : ext)
        c = (char)tolower((unsigned char)c);

    return ext == ".ttf" || ext == ".otf" || ext == ".woff" || ext == ".woff2" || ext == ".ttc";
}

void UIConfig::registerFont(const std::string& aliasName, const std::string& realName)
{
    FontNameItem fi;
    fi.name = realName;
    // Match README: file extension decides TTF loading, not FileAccess::exists().
    // Web export may only ship imported .fontdata while the res:// path still resolves via ResourceLoader.
    fi.ttf = isFontFilePath(realName);

    _fontNames[aliasName] = fi;
}

const std::string& UIConfig::getRealFontName(const std::string& aliasName, bool* isTTF)
{
    std::unordered_map<std::string, FontNameItem>::const_iterator it;
    if (aliasName.empty())
        it = _fontNames.find(UIConfig::defaultFont);
    else
        it = _fontNames.find(aliasName);
    if (it != _fontNames.end())
    {
        if (isTTF)
            *isTTF = it->second.ttf;
        return it->second.name;
    }

    if (!aliasName.empty() && !UIConfig::defaultFont.empty())
    {
        it = _fontNames.find(UIConfig::defaultFont);
        if (it != _fontNames.end())
        {
            if (isTTF)
                *isTTF = it->second.ttf;
            return it->second.name;
        }
    }

    if (isFontFilePath(aliasName))
    {
        if (isTTF)
            *isTTF = true;
        return aliasName;
    }

    if (isTTF)
        *isTTF = false;
    return aliasName;
}

Ref<Font> UIConfig::loadFont(const std::string& resolvedName, bool is_file)
{
    if (!is_file)
    {
        Ref<SystemFont> sysFont;
        sysFont.instantiate();
        Vector<String> names = String(resolvedName.c_str()).split(",");
        sysFont->set_font_names(PackedStringArray(names));
        return sysFont;
    }

    const String path = String(resolvedName.c_str());
    if (path.begins_with("res://") || path.begins_with("user://"))
    {
        Ref<Font> loaded = ResourceLoader::load(path);
        if (loaded.is_valid())
            return loaded;
    }

    Ref<FontFile> fontFile;
    fontFile.instantiate();
    if (fontFile->load_dynamic_font(path) == OK)
        return fontFile;

    return Ref<Font>();
}

NS_FGUI_END
