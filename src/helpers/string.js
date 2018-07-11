class StringHelper {

	snakeCase(str, separator = '_') {
		return str.replace(/([a-z0-9])([A-Z])/g, `$1${separator}$2`).toLowerCase();
	}

	kebabCase(str) {
		return this.snakeCase(str, '-');
	}

	camelCase(str, pascal = false) {
		const camel = str.replace(/([-_]\w)/g, (matches) => {
			return matches[1].toUpperCase();
		});

		return `${camel.charAt(0)[`to${pascal ? 'Upper' : 'Lower'}Case`]()}${camel.slice(1)}`;
	}

	pascalCase(str) {
		return this.camelCase(str, true);
	}

}

module.exports = new StringHelper();
