const ngModule = require('./module');

require('./provider')(ngModule);
require('./config')(ngModule);

module.exports = ngModule;