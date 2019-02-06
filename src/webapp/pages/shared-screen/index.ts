'use strict';

const template = require('./template');

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.marko(template, {});
};