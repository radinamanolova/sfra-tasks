'use strict';

var Resource = require('dw/web/Resource');
var Site = require('dw/system/Site');
var base = module.superModule;

function sendConfirmationEmailCustom(order, locale, products, emailHeaderText) {
    var OrderModel = require('*/cartridge/models/order');
    var emailHelpers = require('*/cartridge/scripts/helpers/emailHelpers');
    var Locale = require('dw/util/Locale');

    var currentLocale = Locale.getLocale(locale);

    var orderModel = new OrderModel(order, { countryCode: currentLocale.country, containerView: 'order' });

    var orderObject = {
        order: orderModel,
        products: products,
        emailHeaderText: emailHeaderText
    };

    var emailObj = {
        to: order.customerEmail,
        subject: Resource.msg('subject.order.confirmation.email', 'order', null),
        from: Site.current.getCustomPreferenceValue('customerServiceEmail') || 'no-reply@testorganization.com',
        type: emailHelpers.emailTypes.orderConfirmation
    };

    emailHelpers.sendEmail(emailObj, 'checkout/confirmation/confirmationEmail', orderObject);
}

base.sendConfirmationEmailCustom = sendConfirmationEmailCustom;
module.exports = base;