import path from 'node:path';
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import { type Handle, redirect } from '@sveltejs/kit';
import { createRedirect } from 'cloudflare-redirect-parser';

/**
 * `_redirects` を元にリダイレクトを行う
 * base は 下のライブラリ
 * @see https://github.com/bluwy/cloudflare-redirect-parser
 */
export const redirects = (async ({ event, resolve }) => {
	const redirectFile = path.join(import.meta.dirname, '../../static/_redirects');

	if (!existsSync(redirectFile)) {
		return resolve(event);
	}
	const redirectContent = await fs.readFile(redirectFile, 'utf-8');
	const redirectF = createRedirect(redirectContent);

	const result = redirectF(event.url.pathname);

	if (result != null) {
		const { status, to } = result;
		return redirect(status, to);
	}

	return resolve(event);
}) satisfies Handle;
