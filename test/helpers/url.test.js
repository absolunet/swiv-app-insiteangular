const { url:urlHelper } = require('./../../src/helpers');

describe('helpers', () => {
	describe('url', () => {
		test('URI is correctly parsed', () => {
			const expected = '/api/v1/foo/bar';
			const tests = [
				expected,
				`www.foo.test${expected}`,
				`foo.test${expected}`,
				`www.foo${expected}?foo=bar`,
				`foo${expected}?foo=bar`,
				`http://www.foo.test${expected}`,
				`http://foo.test${expected}`,
				`http://www.foo.test${expected}?foo=bar`,
				`http://foo.test${expected}?foo=bar`,
				`https://www.foo.test${expected}`,
				`https://foo.test${expected}`,
				`https://www.foo.test${expected}?foo=bar`,
				`https://foo.test${expected}?foo=bar`,
				`http://foo.test${expected}.json`,
				`http://foo.test${expected}.json?foo=bar`,
			];

			tests.forEach((url) => {
				expect(urlHelper.getUri(url)).toBe(expected);
			});
		});

		test('Method is correctly analysed', () => {
			const tests = {
				valid: [
					{
						methods: undefined,
						method: urlHelper.methods.get,
					},
					{
						methods: urlHelper.methods.get,
						method: urlHelper.methods.get,
					},
					{
						methods: [urlHelper.methods.get],
						method: urlHelper.methods.get,
					},
					{
						methods: [urlHelper.methods.get, urlHelper.methods.post],
						method: urlHelper.methods.post,
					}
				],
				invalid: [
					{
						methods: [],
						method: urlHelper.methods.get,
					},
					{
						methods: urlHelper.methods.get,
						method: urlHelper.methods.post,
					},
					{
						methods: [urlHelper.methods.get],
						method: urlHelper.methods.post,
					},
					{
						methods: [urlHelper.methods.get, urlHelper.methods.patch],
						method: urlHelper.methods.post,
					},
				]
			};

			tests.valid.forEach(({ method, methods }) => {
				expect(urlHelper.isMethod(method, methods)).toBe(true);
			});

			tests.invalid.forEach(({ method, methods }) => {
				expect(urlHelper.isMethod(method, methods)).toBe(false);
			});
		});
	});
});
