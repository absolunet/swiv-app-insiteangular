const ngModule = require('./module');

require('./provider')(ngModule);
require('./directive')(ngModule);
require('./config')(ngModule);

module.exports = ngModule;
