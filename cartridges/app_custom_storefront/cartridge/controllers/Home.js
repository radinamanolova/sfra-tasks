'use static';

var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    const Site = require('dw/system/Site');
    const PageMgr = require('dw/experience/PageMgr');

    let customPageDesignerTemplate = Site.current.preferences.custom.customHomePageTemplate.displayValue;

    let page = PageMgr.getPage(customPageDesignerTemplate);

    if (page && page.isVisible()) {
        res.page(customPageDesignerTemplate);
    } else {
        res.render('home/homePage');
    }

    next();
})

module.exports = server.exports();