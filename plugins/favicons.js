/* eslint-disable no-console */

import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { favicons } from 'favicons';
import { isProduction } from 'std-env';
import { VIM_JP_RADIO_INFO } from '../src/lib/links/_links.js';

const staticDir = join(import.meta.dirname, '../static');
const assetDir = join(staticDir, '../src/assets');
const src = join(assetDir, 'vimjp-radio-cover-art/3000x3000-fs8.png');
const dest = join(staticDir, 'favicons');
const htmlDest = join(assetDir, 'favicons.html');

/** @satisfies {import('favicons').FaviconOptions} */
const configuration = {
	path: `/favicons`,
	theme_color: '#010A01',
	background: '#010A01',
	appName: VIM_JP_RADIO_INFO.title,
	appShortName: VIM_JP_RADIO_INFO.shortTitle,
	appDescription: VIM_JP_RADIO_INFO.description,
	lang: 'ja-JP',
	orientation: 'portrait',
};

async function main() {
	/** cache key */
	const cacheKey = `<!-- ${createHash('md5').update(JSON.stringify(configuration) + await fs.readFile(src, 'utf-8')).digest('hex')} -->`;

	/* cacheがある場合は再生成しない */
	if (existsSync(htmlDest) && !isProduction) {
		const oldHTML = await fs.readFile(htmlDest, 'utf-8');
		/* html file 末尾にcache keyがあれば再生成しない */
		if (oldHTML.endsWith(cacheKey)) {
			console.log('Cache Hit');
			return;
		}
	}

	/* 既存のファイルを削除 */
	if (existsSync(dest)) {
		await fs.rm(dest, { recursive: true });
	}

	/* 既存のhtmlを削除 */
	if (existsSync(htmlDest)) {
		await fs.rm(htmlDest);
	}

	/* faviconのdirectoryをstaticに作成 */
	await fs.mkdir(dest, { recursive: true });
	await fs.mkdir(assetDir, { recursive: true });

	/* faviconsの生成 */
	const response = await favicons(src, configuration);

	await Promise.all([
		/* 生成したfavicon 画像を書き出し */
		...response.images.map(async image => await fs.writeFile(join(dest, image.name), image.contents)),
		/* 生成したfavicon ファイルを書き出し */
		...response.files.map(async file => await fs.writeFile(join(dest, file.name), file.contents)),
		/* 生成したhtmlを書き出し 末尾にcache keyを追加 */
		fs.writeFile(htmlDest, response.html.join('\n') + cacheKey),
	]);
}

/** @type {import('vite').Plugin} */
export const faviconPlugin = {
	name: 'favicons',
	enforce: 'pre',
	async buildStart() {
		console.log('build start');
		await main();
		console.log('Favicon generated');
	},
};
