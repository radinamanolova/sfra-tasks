'use strict';

var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
    var showProductPageHelperResult = productHelper.showProductPage(req.querystring, req.pageMetaData);
    let ContentMgr = require('dw/content/ContentMgr');
    let content = ContentMgr.getContent('product-info');
    const ProductMgr = require('dw/catalog/ProductMgr');
    const product = ProductMgr.getProduct(showProductPageHelperResult.product.id);
    const ShippingMgr = require('dw/order/ShippingMgr');
    const shippingForProduct = ShippingMgr.getProductShippingModel(product);

    res.render(showProductPageHelperResult.template, {
        content: content,
        shippingForProduct: shippingForProduct
    });

    next();
});

module.exports = server.exports();