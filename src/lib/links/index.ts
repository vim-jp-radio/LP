import { ensureURL } from '../utils/url';
import { LINKS } from './_links';
import { building } from '$app/environment';

/* ビルド時にURLをチェックする */
if (building) {
	for (const key in LINKS) {
		const { url } = LINKS[key as keyof typeof LINKS];
		ensureURL(url);
	}
}

export { LINKS };
