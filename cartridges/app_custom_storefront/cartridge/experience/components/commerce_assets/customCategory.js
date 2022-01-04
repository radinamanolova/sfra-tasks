'use static';

const Template = require('dw/util/Template');
const HashMap = require('dw/util/HashMap');
const URLUtils = require('dw/web/URLUtils');

/**
 * Render logic for custom category component
 * @param {dw.experience.ComponentScriptContext} context The component script context object
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    const model = new HashMap();
    const content = context.content;
    const category = content.categoryID;

    model.category = category;
    model.url = URLUtils.url('Search-Show', 'cgid', category.ID)
    model.categoryImage = content.categoryImage ? content.categoryImage.absURL : null;
    model.shortDescription = content.description;
    model.ctaText = content.ctaText;
    model.ctaPosition = content.ctaPosition == 'Bottom' ? 'bottom' : 'top';

    return new Template('experience/components/commerce_assets/customCategory').render(model).text;
}