import path from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import UnoCss from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { cloudflareRedirect } from '@ryoppippi/vite-plugin-cloudflare-redirect';
import { faviconsPlugin } from 'vite-plugin-favicons';

import { theme } from './uno.config.js';
import { LINKS, VIM_JP_RADIO_INFO } from './src/lib/links/_links.js';

function relativePath(...args: string[]): string {
	return path.resolve(import.meta.dirname, ...args);
}

/* unocss から background color を取得 */
const background = theme.colors.LP.backgroud;

export default defineConfig({
	plugins: [
		/* favicon と metadata の設定 */
		faviconsPlugin({
			/** ===== faviconsの設定 ===== */
			imgSrc: relativePath('./src/assets/vimjp-radio-cover-art/3000x3000-fs8.png'),
			/** ========================= */

			/* ===== metadataの設定 ===== */
			path: `/favicons`,
			theme_color: background,
			background,
			appName: VIM_JP_RADIO_INFO.title,
			appShortName: VIM_JP_RADIO_INFO.title,
			appDescription: VIM_JP_RADIO_INFO.description,
			lang: 'ja-JP',
			orientation: 'portrait',
			/* ========================= */
		}),

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
