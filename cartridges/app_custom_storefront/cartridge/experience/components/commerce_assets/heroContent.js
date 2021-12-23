'use static';

const Template = require('dw/util/Template');
const HashMap = require('dw/util/HashMap');
const URLUtils = require('dw/web/URLUtils');

/**
 * Render logic for heroContent component
 * @param {dw.experience.ComponentScriptContext} context The component script context object
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    const content = context.content;
    const model = new HashMap();
    model.title = content.title;
    model.imageUrl = content.image ? content.image.absURL : null;
    model.shortDescription = content.description;
    model.ctaText = content.ctaText;
    model.ctaLink = content.ctaLink ? content.ctaLink : '#';

    return new Template('experience/components/heroContent').render(model).text;
}