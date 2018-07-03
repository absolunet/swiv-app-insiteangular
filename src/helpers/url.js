class UrlHelper {

	getUri(url) {
		return url
			.replace(/^http(s)?:\/\//, '')
			.replace(/^[^/]+(\/)?/, '/')
			.replace(/\?(.*)/, '')
			.replace(/\.json$/, '');
	}

	get methods() {
		return {
			'get': 'GET',
			'post': 'POST',
			'patch': 'PATCH',
			'put': 'PUT',
			'options': 'OPTIONS',
			'delete': 'DELETE'
		};
	}

	isMethod(method, expected = this.methods.get) {
		return (expected instanceof Array ? expected : [expected]).indexOf(method) !== -1;
	}

}

module.exports = new UrlHelper();
