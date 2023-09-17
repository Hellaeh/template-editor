const KEY = 'template';

/**
 * Singleton Helper Class for managing templates
 */
class Template {
	#presets = [];

	save() {
		localStorage.setItem(KEY, JSON.stringify(this));
	}

	load() {
		const lol = localStorage.getItem(KEY);
	}

	#serialize() {
		JSON.stringify(this);
	}

	// #deserialize() {}

	get presets() {
		return '';
	}
}

export default new Template();
