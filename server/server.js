const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const api = require('./api');

module.exports = function apiServer(port) {
  const app = express();

  app.use(morgan('dev'));
  app.use(bodyparser.json());
  app.use(express.static('server/static'));
  app.use('/api', api);

  app.listen(port, (error) => {
    if(error) {
      console.error(error);
    } else {
      console.log(`API server listening on port ${port}`);
    }
  });
}
