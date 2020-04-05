const Router = require('express').Router();

Router.get('/slaanesh', (req, resp, _) => {
  resp.render('../guides/slaanesh');
});

module.exports = Router;