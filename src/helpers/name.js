class NameHelper {

	get prefix() {
		return 'swivInsite';
	}

	getName(name) {
		const [start, end] = [this.prefix.charAt(0), this.prefix.slice(1)];
		const _name = name.replace(new RegExp(`^[${start.toLowerCase()}${start.toUpperCase()}]${end}`), '');

		return `${this.prefix}${_name.charAt(0).toUpperCase()}${_name.slice(1)}`;
	}

}

module.exports = new NameHelper();
