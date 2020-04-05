const express = require('express');
const path = require('path');

const rootDir = require('./util/path');

const indexRoute = require('./routes/index');

const server = express();


server.use(indexRoute);
server.use((req, resp, next) => {
  resp.sendFile(path.join(rootDir, 'views', '404.html'));
});



server.listen(3000);