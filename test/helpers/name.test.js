const { name:nameHelper } = require('./../../src/helpers');

describe('helpers', () => {
	describe('name', () => {
		test('Generated name is valid', () => {
			const prefix = 'swivInsite';
			const upperCasePrefix = `${prefix.charAt(0).toUpperCase()}${prefix.slice(1)}`;
			const tests = [
				'Test',
				'test',
				`${prefix}Test`,
				`${prefix}Test`,
				`${upperCasePrefix}Test`
			];

			tests.forEach((name) => {
				expect(nameHelper.getName(name)).toBe(`${prefix}Test`);
			});
		});
	});
});
