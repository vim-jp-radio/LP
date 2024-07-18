import { error } from '@sveltejs/kit';
import { getTweet } from 'sveltekit-tweet/server';
import type { ITweet } from 'sveltekit-tweet';
import { LISTENERS_TWEET_IDS } from '$/lib/links';

/* tweet を取得する。 */
export async function load() {
	const tweets: ITweet[] = [];
	for (const id of LISTENERS_TWEET_IDS) {
		const tweet = await getTweet(id);
		if (tweet == null) {
			error(404, `Tweet not found: ${id}`);
		}
		tweets.push(tweet);
	}

	return { tweets };
}
