#ifndef __FGUI_GD_HELPER_H__
#define __FGUI_GD_HELPER_H__

#include "FairyGUIMacros.h"
#include "GObject.h"

NS_FGUI_BEGIN

class GRoot;

class FGUIHelper : public RefCounted
{
    GDCLASS(FGUIHelper, RefCounted)

public:
    static FGUIHelper* getInstance();
    static Ref<FGUIHelper> gd_getInstance() { return Ref<FGUIHelper>(getInstance()); }

    Ref<GRoot> gd_getGRoot();
    Ref<GObject> gd_createObject(const String& pkgName, const String& resName);
    void addPackage(const String& path);
    void loadTranslation(const String& xmlPath);
    void loadTranslationFromXML(const String& xml);

    void setHtmlButtonResource(const String& url);
    void setHtmlInputResource(const String& url);
    void setHtmlSelectResource(const String& url);

    static void _bind_methods();

private:
    static FGUIHelper* _inst;
};

NS_FGUI_END

#endif
