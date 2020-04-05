const rootDir = require('../util/path');
const path = require('path');
const Router = require('express').Router();

Router.get('/', (req, resp, _) => {
  resp.render('index');
});

module.exports = Router;