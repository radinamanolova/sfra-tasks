'use strict';

const Template = require('dw/util/Template');
const HashMap = require('dw/util/HashMap');
const URLUtils = require('dw/web/URLUtils');

/**
 * Render logic for featured products carousel component
 * @param {dw.experience.ComponentScriptContent} context The Component script context object
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 * @returns {string} The markup to be displayed
 */

module.exports.render = function (context, modelIn) {
    const model = modelIn || new HashMap();
    const ProductFactory = require('*/cartridge/scripts/factories/product');
    const content = context.content;

    model.title = content.title;
    const productTileParams = { pview: 'tile', pid: context.content.product.ID };
    const product = ProductFactory.get(productTileParams);
    const productUrl = URLUtils.url('Product-Show', 'pid', product.id).relative().toString();

    model.product = product;
    model.urls = { product: productUrl };

    return new Template('experience/components/commerce_assets/featuredProductsTile').render(model).text;
}