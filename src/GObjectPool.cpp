#include "GObjectPool.h"
#include "GObject.h"
#include "UIPackage.h"

NS_FGUI_BEGIN
GObjectPool::GObjectPool()
{
}

GObjectPool::~GObjectPool()
{
}

Ref<GObject> GObjectPool::getObject(const std::string & url)
{
    std::string url2 = UIPackage::normalizeURL(url);
    if (url2.length() == 0)
        return Ref<GObject>();

    std::vector<Ref<GObject>>& arr = _pool[url2];
    if (!arr.empty())
    {
        Ref<GObject> ref = arr.back();
        arr.pop_back();
        return ref;
    }
    return UIPackage::createObjectFromURL(url2);
}

void GObjectPool::returnObject(GObject* obj)
{
    if (obj == nullptr)
        return;
    Ref<GObject> ref = obj;
    ref->setVisible(false);
    _pool[ref->getResourceURL()].push_back(ref);
}

NS_FGUI_END