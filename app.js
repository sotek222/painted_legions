const express = require('express');
const path = require('path');

const rootDir = require('./util/path');

const indexRoute = require('./routes/index');
const guideRoutes = require('./routes/guideRoutes');

const server = express();
server.set('view engine', 'ejs');
server.set('views', [path.join(rootDir, 'views'), path.join(rootDir, 'views/guides')]);

server.use(indexRoute);
server.use('/guides', guideRoutes);
server.use((req, resp, next) => {
  resp.status(404).render('404');
});

server.listen(3000);