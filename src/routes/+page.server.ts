import type { Tweet as TweetT } from 'sveltweet/api';
import { LISTENERS_TWEET_IDS } from '$/lib/links';
import { retry } from '@std/async';
import { error } from '@sveltejs/kit';
import { getTweet } from 'sveltweet/api';

/* tweet を取得する。 */
export async function load() {
	const tweets: TweetT[] = [];
	for (const id of LISTENERS_TWEET_IDS) {
		const tweet = await retry(async () => {
			const _tweet = await getTweet(id);

			if (_tweet == null) {
				throw new Error(`Retry: Tweet not found: ${id}`);
			}
			return _tweet;
		});
		if (tweet == null) {
			error(404, `Tweet not found: ${id}`);
		}
		tweets.push(tweet);
	}

	return { tweets };
}
