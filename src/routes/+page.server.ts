import { error } from '@sveltejs/kit';
import { getTweet } from 'sveltweet/api';
import type { Tweet } from 'sveltweet';
import { LISTENERS_TWEET_IDS } from '$/lib/links';

/* tweet を取得する。 */
export async function load() {
	const tweets: Tweet[] = [];
	for (const id of LISTENERS_TWEET_IDS) {
		const tweet = await getTweet(id);
		if (tweet == null) {
			error(404, `Tweet not found: ${id}`);
		}
		tweets.push(tweet);
	}

	return { tweets };
}
