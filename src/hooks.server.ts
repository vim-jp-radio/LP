import fs from 'node:fs/promises';
import path from 'node:path';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createRedirect } from 'cloudflare-redirect-parser';
import { redirect } from '@sveltejs/kit';
import faviconLinks from '$/assets/favicons.html?raw';
import { dev } from '$app/environment';

const meta = (async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('</head>', `${faviconLinks}</head>`),
	});
	return response;
}) satisfies Handle;

/**
 * `_redirects` を元にリダイレクトを行う
 * base は 下のライブラリ
 * @see https://github.com/bluwy/cloudflare-redirect-parser
 */
async function redirects(): Promise<Handle> {
	const redirectFile = path.join(import.meta.dirname, '../static/_redirects');
	const redirectContent = await fs.readFile(redirectFile, 'utf-8');
	const redirectF = createRedirect(redirectContent);

	return async ({ event, resolve }) => {
		const result = redirectF(event.url.pathname);

		if (result != null) {
			const { status, to } = result;
			return redirect(status, to);
		}

		return resolve(event);
	};
}

/* 最終的な hooks
 * meta は head に favicon を追加する
 * redirects は _redirects を元にリダイレクトを行う ( dev 環境のみ )
 */
export const handle = sequence(...[meta, dev ? await redirects() : []].flat());
