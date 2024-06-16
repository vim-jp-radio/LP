import antfu from '@antfu/eslint-config';

export default antfu(
	{
		formatters: true,

		/** general rules */
		rules: {
			'eqeqeq': ['error', 'always', { null: 'ignore' }],
			'no-unexpected-multiline': 'error',
			'no-unreachable': 'error',
		},

		stylistic: {
			indent: 'tab',
			quotes: 'single',
			semi: true,
		},

		unocss: true,
		yaml: true,
		markdown: true,

		typescript: {
			tsconfigPath: './tsconfig.json',
		},

		svelte: {
			overrides: {
				'svelte/indent': [
					'error',
					{ indent: 'tab', alignAttributesVertically: true },
				],
				'svelte/html-self-closing': ['error', 'all'],
				'svelte/sort-attributes': 'error',
			},
		},
	},
);
