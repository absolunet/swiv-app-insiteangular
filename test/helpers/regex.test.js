const { regex:regexHelper } = require('./../../src/helpers');

describe('helpers', () => {
	describe('regex', () => {
		test('GUID RegExp is valid', () => {
			const tests = {
				valid: [
					'd2bd63a9-efba-4142-b8e2-3e24e7acafb6',
					'dfbe7740-4384-47eb-a2e7-ecc35fff417a',
					'd8e5354e-d0d3-4a78-9a9a-f76a7aefd576',
					'0f0115a3-292a-413b-ba71-11c5de09e077',
					'542ccd22-6b39-4d66-ab1f-5c93d07b168f',
					'4c1cc7b4-61bf-423b-9685-3c8c5280efb2'
				],
				invalid: [
					'123',
					'12345678-1234-1234-1234-123456789012',
					'qwertyui-qwer-qwer-qwer-qwertyuiopas',
					'4c1cc7b4-61bf-623b-9685-3c8c5280efb2', // (6)23b => 6 should not pass ([1-5])
					'4c1cc7b4-61bf-423b-1685-3c8c5280efb2'  // (1)685 => 1 should not pass ([89ab])
				]
			};

			tests.valid.forEach((guid) => {
				expect(guid).toMatch(new RegExp(regexHelper.guidRegExp));
			});

			tests.invalid.forEach((guid) => {
				expect(guid).not.toMatch(new RegExp(regexHelper.guidRegExp));
			});
		});
	});
});
