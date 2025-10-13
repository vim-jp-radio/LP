import path from 'node:path';
import antfu from '@antfu/eslint-config';

export default antfu(
	{
		lessopinionated: true,
		formatters: true,

		/** general rules */
		rules: {
			'eqeqeq': ['error', 'always', { null: 'ignore' }],
			'no-unexpected-multiline': 'error',
			'no-unreachable': 'error',
			'curly': ['error', 'all'],
			'antfu/top-level-function': 'error',
		},

		stylistic: {
			indent: 'tab',
			quotes: 'single',
			semi: true,
		},

		svelte: true,
		unocss: true,
		yaml: true,
		markdown: true,

		typescript: {
			tsconfigPath: path.join(import.meta.dirname, 'tsconfig.json'),
		},
	},
	{
		files: ['**/*.svelte', '**/*.svelte'],
		rules: {
			'antfu/no-top-level-await': 'off',
			'svelte/valid-compile': 'off',
			'svelte/button-has-type': 'error',
			'svelte/require-each-key': 'error',
			'svelte/valid-each-key': 'error',
			'svelte/no-reactive-literals': 'error',
			'svelte/no-reactive-functions': 'error',

			/* stylic */
			'svelte/indent': [
				'error',
				{
					indent: 'tab',
					alignAttributesVertically: true,
				},
			],
			'svelte/html-self-closing': ['error', 'all'],
			'svelte/sort-attributes': 'error',
			'svelte/prefer-class-directive': 'warn',
			'svelte/prefer-style-directive': 'warn',
			'svelte/first-attribute-linebreak': [
				'error',
				{
					multiline: 'below',
					singleline: 'beside',
				},
			],
		},
	},
);
