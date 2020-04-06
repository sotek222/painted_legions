const Router = require('express').Router();
const { ostermark } = require('../util/palletes');

Router.get('/', (req, resp, _) => {
  resp.render('guides');
});

Router.get('/slaanesh', (req, resp, _) => {
  resp.render('../guides/slaanesh');
});
Router.get('/ostermark', (req, resp, _) => {
  resp.render('../guides/ostermark', { palette: ostermark });
});

module.exports = Router;


