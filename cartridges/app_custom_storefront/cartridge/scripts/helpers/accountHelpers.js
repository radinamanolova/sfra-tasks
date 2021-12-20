'use strict';

var URLUtils = require('dw/web/URLUtils');
var endpoints = require('*/cartridge/config/oAuthRenentryRedirectEndpoints');
var base = module.superModule;

function sendCreateAccountEmailCustom(registeredUser, products, emailHeaderText) {
    var Resource = require('dw/web/Resource');
    var Site = require('dw/system/Site');
    var emailHelpers = require('*/cartridge/scripts/helpers/emailHelpers');

    var userObject = {
        email: registeredUser.email,
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        url: URLUtils.https('Login-Show'),
        products: products,
        emailHeaderText: emailHeaderText
    };

    var emailObj = {
        to: registeredUser.email,
        subject: Resource.msg('email.subject.new.registration', 'registration', null),
        from: Site.current.getCustomPreferenceValue('customerServiceEmail') || 'no-reply@testorganization.com',
        type: emailHelpers.emailTypes.registration
    };

    emailHelpers.sendEmail(emailObj, 'checkout/confirmation/accountRegisteredEmail', userObject);
}

base.sendCreateAccountEmailCustom = sendCreateAccountEmailCustom;
module.exports = base;