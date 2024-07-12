import path from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import UnoCss from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { cloudflareRedirect } from '@ryoppippi/vite-plugin-cloudflare-redirect';
import { LINKS } from './src/lib/links/_links.js';
import { faviconPlugin } from './plugins';

function relativePath(...args: string[]): string {
	return path.resolve(import.meta.dirname, ...args);
}

export default defineConfig({
	plugins: [
		faviconPlugin,

		/* `_recirects`ファイルを生成するための設定 */
		cloudflareRedirect({
			mode: 'generate',
			redirectsFilePath: relativePath('./static/_redirects'),
			entries: [
				{ from: '/audee', to: LINKS.AuDee.url },
				{ from: '/apple', to: LINKS.ApplePodcast.url },
				{ from: '/amazon', to: LINKS.AmazonMusic.url },
				{ from: '/spotify', to: LINKS.Spotify.url },
				{ from: '/youtube', to: LINKS.Youtube.url },
				{ from: '/suzuri', to: LINKS.Suzuri.url },
			],
		}),

		UnoCss({ extractors: [extractorSvelte()] }), // UnoCssの設定。extractorsにextractorSvelteを設定している。https://unocss.dev/extractors/svelte#svelte-extractor
		enhancedImages(),
		sveltekit(),
	],
});
