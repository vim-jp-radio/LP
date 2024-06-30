import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import UnoCss from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { faviconPlugin } from './plugins/favicons';

export default defineConfig({
	plugins: [
		faviconPlugin,
		UnoCss({ extractors: [extractorSvelte()] }), // UnoCssの設定。extractorsにextractorSvelteを設定している。https://unocss.dev/extractors/svelte#svelte-extractor
		enhancedImages(),
		sveltekit(),
	],
});
