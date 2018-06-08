module.exports = (ngModule) => {
    require('./interceptor')(ngModule);
    require('./endpoints')(ngModule);
};
