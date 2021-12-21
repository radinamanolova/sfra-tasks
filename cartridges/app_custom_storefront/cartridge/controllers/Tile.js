'use strict';

/**
 * @namespace Tile
 */

var server = require('server');
var productTile = require('*/cartridge/models/product/productTile');

server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    res.render('product/gridTile.isml', productTile);
    next();
});

module.exports = server.exports();
