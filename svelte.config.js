import process from 'node:process';
import path from 'node:path';
import adapter from '@sveltejs/adapter-static';
import htmlMinifierAdaptor from 'sveltekit-html-minifier';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { isDevelopment } from 'std-env';

/** @param {...string} args */
function relativePath(...args) {
	return path.resolve(import.meta.dirname, ...args);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	compilerOptions: {
		runes: true,
	},

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: htmlMinifierAdaptor(
			adapter({
				fallback: '404.html',
			}),
		),

		typescript: {
			config(config) {
				config.include.push(path.join(import.meta.dirname, 'uno.config.ts'));
			},
		},

		alias: {
			$: relativePath('src'),
		},

		paths: {
			assets: isDevelopment ? '' : process.env.CF_PAGES_URL,
		},
	},
};

export default config;
