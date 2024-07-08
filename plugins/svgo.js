/** @url https://github.com/r3dDoX/vite-plugin-svgo/blob/main/src/index.ts */

import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import findCacheDirectory from 'find-cache-dir';
import { optimize } from 'svgo';

const VITE_PLUGIN_NAME = 'vite-plugin-svgo';
const fileRegex = /\.svg$/;
const cacheDir = findCacheDirectory({ name: VITE_PLUGIN_NAME });

/**
 * @typedef {import('svgo').Config} Config
 * @typedef {import('vite').Plugin} Plugin
 * @typedef {Omit<Config, 'path'>} PluginOptions
 */

/**
 * This plugin will optimize SVG files using SVGO.
 * @param {PluginOptions} svgoOptimizeOptions - SVGO options
 * @returns {Plugin} - Vite plugin
 */
export default function viteSvgPlugin(svgoOptimizeOptions = {}) {
	/** @type {Plugin} */
	return {

		/** @type {Plugin['name']} */
		name: VITE_PLUGIN_NAME,

		/** @type {Plugin['enforce']} */
		enforce: 'pre',

		/** @param {string} id */
		async resolveId(id) {
			if (typeof cacheDir !== 'string') {
				throw new TypeError('Cache directory not found');
			}

			/* もし、SVGファイルでない場合、または、キャッシュディレクトリに含まれている場合は、そのまま返す */
			if (!fileRegex.test(id) || id.includes('node_modules')) {
				return;
			}

			// svgをよみこむ
			let svgCode;
			try {
				svgCode = await fs.readFile(id, 'utf8');
			}
			catch (exception) {
				console.warn(`${id} couldn't be loaded by vite-plugin-svgo: `, exception);
				return;
			}

			/** svgCodeのmd5ハッシュを取得 */
			const hash = createHash('md5').update(svgCode).digest('hex');

			/** idの拡張子を取得 */
			const ext = path.extname(id);

			/** idのbasenameを取得 */
			const basename = path.basename(id, ext);

			/** キャッシュディレクトリに保存されたファイルのパス */
			const cachePath = path.join(cacheDir, `${basename}-${hash}${ext}`);

			/* キャッシュディレクトリにファイルが存在する場合、そのパスを返す */
			if (existsSync(cachePath)) {
				console.log(`Found cached ${id} at ${cachePath}`); // eslint-disable-line no-console
				return cachePath;
			}

			/* svgを最適化 */
			try {
				const optimizedSvg = optimize(svgCode, {
					path: id,
					...svgoOptimizeOptions,
				});

				/* save optimized svg to cache */
				await fs.mkdir(cacheDir, { recursive: true });

				await fs.writeFile(cachePath, optimizedSvg.data, 'utf8');

				console.log(`Optimized ${id} to ${cachePath}`); // eslint-disable-line no-console
				return cachePath;
			}
			catch (exception) {
				console.error(`${id} errored during svg optimization: `, exception);
			}
		},
	};
}
