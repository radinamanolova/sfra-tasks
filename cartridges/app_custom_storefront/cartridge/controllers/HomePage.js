'use strict';

let server = require('server');

server.get('Show', function (req, res, next) {
    let ContentMgr = require('dw/content/ContentMgr');
    let cid = req.httpParameterMap.cid;
    let content = ContentMgr.getContent(cid);
    res.render('homePage', {
        content: content,
        cid: cid
    });
    next();
});

module.exports = server.exports();