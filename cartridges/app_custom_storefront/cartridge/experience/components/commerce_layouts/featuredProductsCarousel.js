'use strict';

const Template = require('dw/util/Template');
const HashMap = require('dw/util/HashMap');
const PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');

/**
 * Render logic for featured products carousel layout.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The markup to be displayed
 */

module.exports.render = function (context) {
    const model = new HashMap();
    const component = context.component;
    const content = context.content;

    model.regions = PageRenderHelper.getRegionModelRegistry(component);
    model.regions.featuredProductsSlides.setClassName('carousel-inner row w-100 mx-auto');
    model.regions.featuredProductsSlides.setComponentClassName('carousel-item mx-auto');
    model.regions.featuredProductsSlides.setComponentClassName('carousel-item mx-auto active', { position: 0 });
    model.id = 'carousel-' + PageRenderHelper.safeCSSClass(context.component.getID());
    model.title = content.title;

    return new Template('experience/components/commerce_layouts/featuredProductsCarousel').render(model).text;
};