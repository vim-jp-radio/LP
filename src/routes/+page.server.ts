import type { Tweet } from 'sveltweet';
import { LISTENERS_TWEET_IDS } from '$/lib/links';
import { error } from '@sveltejs/kit';
import pRetry from 'p-retry';
import { getTweet } from 'sveltweet/api';

/* tweet を取得する。 */
export async function load() {
	const tweets: Tweet[] = [];
	for (const id of LISTENERS_TWEET_IDS) {
		const tweet = await pRetry(async () => getTweet(id), { retries: 5 });
		if (tweet == null) {
			error(404, `Tweet not found: ${id}`);
		}
		tweets.push(tweet);
	}

	return { tweets };
}
