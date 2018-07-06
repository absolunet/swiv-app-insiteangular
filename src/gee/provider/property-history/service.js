const instanceHistories = new WeakMap();
const guidHistories = {};

module.exports = class PropertyHistoryService {

	updateProperty(instance, property, value) {
		this.getPropertyHistory(instance, property).push(value);
	}

	resetPropertyHistory(instance, property) {
		this.getInstanceHistory(instance)[property] = [];
	}

	resetInstanceHistory(instance) {
		const history = this.getInstanceHistory(instance);
		Object.keys(history).forEach((property) => {
			this.resetPropertyHistory(instance, property);
		});
	}

	getInitialValue(instance, property) {
		return this.getPropertyHistory(instance, property)[0];
	}

	getLatestValue(instance, property) {
		const history = this.getPropertyHistory(instance, property);

		if (history.length === 0) {
			return null;
		}

		return history[history.length - 1];
	}

	getPropertyHistory(instance, property) {
		const instanceHistory = this.getInstanceHistory(instance);
		if (!instanceHistory[property]) {
			instanceHistory[property] = [];
		}

		return instanceHistory[property];
	}

	getInstanceHistory(instance) {
		if (!instanceHistories.has(instance)) {
			const { id } = instance;
			if (!guidHistories[id]) {
				guidHistories[id] = {};
			}
			instanceHistories.set(instance, guidHistories[instance.id]);
		}

		return instanceHistories.get(instance);
	}

};
