const config = require('./config');
const server = require('./server');

server(config.get('port'));
