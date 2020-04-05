const express = require('express');
const path = require('path');

const rootDir = require('./util/path');

const indexRoute = require('./routes/index');

const server = express();
server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(indexRoute);
server.use((req, resp, next) => {
  resp.status(404).render('404');
});

server.listen(3000);