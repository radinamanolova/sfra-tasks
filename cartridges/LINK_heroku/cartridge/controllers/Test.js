'use strict';

var server = require('server');

server.get("Show", function (req, res, next) {
    var HookMgr = require('dw/system/HookMgr');
    var hookData = HookMgr.callHook('custom.customer.data', 'sendUserData');

    res.render('test');
    next();
})

module.exports = server.exports();