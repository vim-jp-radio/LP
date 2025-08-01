import path from 'node:path';
import process from 'node:process';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { isDevelopment } from 'std-env';
import { budouxPreprocess } from 'svelte-preprocess-budoux';

/** @param {...string} args */
function relativePath(...args) {
	return path.resolve(import.meta.dirname, ...args);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		budouxPreprocess({ language: 'ja', attribute: 'data-budoux' }), // budouxを使って日本語の改行をいい感じにする。 https://github.com/google/budoux/tree/main/javascript https://github.com/ryoppippi/svelte-preprocess-budoux
	],

	compilerOptions: {
		experimental: {
			async: true,
		},
	},

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			fallback: '404.html',
		}),

		experimental: {
			remoteFunctions: true,
		},

		typescript: {
			config(config) {
				config.include.push(path.join(import.meta.dirname, 'uno.config.ts'));
			},
		},

		alias: {
			$: relativePath('src'),
		},

		paths: {
			/**
      @see https://developers.cloudflare.com/pages/configuration/build-configuration#environment-variables
      @see https://kit.svelte.jp/docs/configuration#paths
			 */
			assets: isDevelopment
				? '' // もし開発環境ならば、相対パスでアクセスする
				: process.env.CF_PAGES_BRANCH === 'main'
					? `https:///vim-jp-radio.com` // もし本番環境で、main ブランチならば、vim-jp-radio.com からアクセスする
					: process.env.CF_PAGES_URL, // それ以外の場合は、CF_PAGES_URL からアクセスする
		},
	},
};

export default config;
