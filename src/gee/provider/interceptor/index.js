module.exports = (ngModule) => {

    let _endpointPrefix = '';

    let _interceptor;

    const _endpointActionCollection = {};

    const _endpointAliasCollection = {};

    class Interceptor {

        constructor(actions, geeService) {
            _interceptor = this;
            this.actions = actions;
            this.geeService = geeService;
        }

        response(res) {
            if (res.config.gee !== false) {
                let url = res.config.url.replace(window.location.hostname, '');
                url = url.split('?')[0];
                url = `${url.charAt(0) === '/' || /http(s)?:/.test(url) ? '' : '/'}${url}`.replace(/\.json$/, '');

                for (const endpoint in _interceptor.actions) {
                    if (_interceptor.actions[endpoint] && _interceptor.actions[endpoint].length) {
                        if ((new RegExp(`^${_endpointPrefix}${endpoint}(/)?$`)).test(url)) {
                            _interceptor.actions[endpoint].forEach((action) => {
                                _interceptor.geeService.trigger(action, res.data);
                            });
                        }
                    }
                }
            }

            return res;
        }
    }


    const InterceptorFactory = (geeService) => {
        const _processedEndpointActionCollection = {};

        for(const endpoint in _endpointAliasCollection) {
            if (_endpointAliasCollection[endpoint]) {
                let actions = [];
                const aliases = _endpointAliasCollection[endpoint] || [];
                aliases.push(endpoint);

                aliases.forEach((alias) => {
                    actions = actions.concat(_endpointActionCollection[alias] || []);
                });

                _processedEndpointActionCollection[endpoint] = actions.filter((value, index, self) => {
                    return self.indexOf(value) === index;
                });
            }
        }

        return new Interceptor(_processedEndpointActionCollection, geeService);
    }

    InterceptorFactory.$inject = [require('./../gee/name')];


    class InterceptorProvider {
        addAction(endpoint, action) {
            return this.safePush(_endpointActionCollection, endpoint, action);
        }

        set endpointPrefix(value) {
            _endpointPrefix = value;
        }

        get endpointPrefix() {
            return _endpointPrefix;
        }

        addEndpointAlias(endpoint, alias) {
            return this.safePush(_endpointAliasCollection, endpoint, alias);
        }

        safePush(arr, key, value) {
            arr[key] = arr[key] || [];
            arr[key].push(value);

            return this;
        }

        get $get() {
            return InterceptorFactory;
        }
    }

    InterceptorProvider.$inject = [];

    ngModule.provider(require('./name'), InterceptorProvider);
};
