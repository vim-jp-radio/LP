/** @url https://github.com/r3dDoX/vite-plugin-svgo/blob/main/src/index.ts */

import path from 'node:path';
import fs from 'node:fs/promises';
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

			if (fileRegex.test(id) && !id.includes(cacheDir)) {
				let svgCode;
				try {
					svgCode = await fs.readFile(id, 'utf8');
				}
				catch (exception) {
					console.warn(`${id} couldn't be loaded by vite-plugin-svgo: `, exception);
					return;
				}
				try {
					const optimizedSvg = optimize(svgCode, {
						path: id,
						...svgoOptimizeOptions,
					});

					/* save optimized svg to cache */
					await fs.mkdir(cacheDir, { recursive: true });

					const basename = path.basename(id);
					const cachePath = path.join(cacheDir, basename);

					await fs.writeFile(cachePath, optimizedSvg.data, 'utf8');

					console.log(`Optimized ${id} to ${cachePath}`); // eslint-disable-line no-console
					return cachePath;
				}
				catch (exception) {
					console.error(`${id} errored during svg optimization: `, exception);
				}
			}
		},
	};
};
