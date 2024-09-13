import { building } from '$app/environment';
import { ensureURL } from '../utils/url';
import { LINKS, LISTENERS_TWEET_IDS, VIM_JP_RADIO_INFO } from './_links';

/* ビルド時にURLをチェックする */
if (building) {
	for (const key in LINKS) {
		const { url } = LINKS[key as keyof typeof LINKS];
		ensureURL(url);
	}
}

export { LINKS, LISTENERS_TWEET_IDS, VIM_JP_RADIO_INFO };
