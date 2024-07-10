/* eslint-disable no-console */

import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { LINKS } from '../src/lib/links/_links.js';

const publicDir = join(import.meta.dirname, '../static');

/** @param {import('cloudflare-redirect-parser').RedirectEntry[]} entries */
function generateRedirect(entries) {
	let content = '';

	for (const entry of entries) {
		content += `${encodeURI(entry.from)} ${encodeURI(entry.to)} ${entry.status ?? 301}\n`;
	}

	return content;
}

async function main() {
	/** @satisfies {import('cloudflare-redirect-parser').RedirectEntry[]} */
	const entries = /** @type {const} */ ([
		{ from: '/audee', to: LINKS.AuDee.url },
		{ from: '/apple', to: LINKS.ApplePodcast.url },
		{ from: '/amazon', to: LINKS.AmazonMusic.url },
		{ from: '/spotify', to: LINKS.Spotify.url },
		{ from: '/youtube', to: LINKS.Youtube.url },
	]);

	const content = generateRedirect(entries);

	if (existsSync(publicDir)) {
		await fs.writeFile(join(publicDir, '_redirects'), content);
	}
}

/** @type {import('vite').Plugin} */
export const generateRedirects = {
	name: 'redirects',
	enforce: 'pre',
	async buildStart() {
		await main();
		console.log('generate redirects');
	},
};
