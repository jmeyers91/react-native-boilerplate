const nconf = require('nconf');

nconf.argv().env();
nconf.file({file: 'server/config/config.json'});
nconf.defaults({type: 'file', file: 'server/config/config.defaults.json'});

module.exports = nconf;
