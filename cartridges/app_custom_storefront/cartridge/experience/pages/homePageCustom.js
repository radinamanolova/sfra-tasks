'use strict';

const Template = require('dw/util/Template');
const HashMap = require('dw/util/HashMap');
const PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
const RegionModelRegistry = require('*/cartridge/experience/utilities/RegionModelRegistry.js');

/**
 * Render logic for the custom home page
 * @param {dw.experience.PageScriptContext} context The page script context object
 * @return {string} The template text
 */

module.exports.render = function (context) {
    const model = new HashMap();
    const page = context.page;
    //auto register configured regions
    model.page = page;
    const metaDefinition = require('*/cartridge/experience/pages/homePageCustom.json');
    model.regions = new RegionModelRegistry(page, metaDefinition);

    model.CurrentPageMetaData = {};
    model.CurrentPageMetaData.title = page.pageTitle;
    model.CurrentPageMetaData.description = page.pageDescription;
    model.CurrentPageMetaData.keywords = page.pageKeywords;
    if (PageRenderHelper.isInEditMode()) {
        const HookMgr = require('dw/system/HookMgr');
        HookMgr.callHook('app.experience.editmode', 'editmode');
        model.resetEditPDMode = true;
    }

    //render page
    return new Template('experience/pages/homePageCustom').render(model).text;
}