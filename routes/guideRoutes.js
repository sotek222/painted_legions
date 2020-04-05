const Router = require('express').Router();

Router.get('/slaanesh', (req, resp, _) => {
  resp.render('../guides/slaanesh');
});
Router.get('/ostermark', (req, resp, _) => {
  resp.render('../guides/ostermark');
});

module.exports = Router;


