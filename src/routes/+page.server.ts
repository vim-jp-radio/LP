import { getTweet } from 'sveltekit-tweet/server';
import type { ITweet } from 'sveltekit-tweet';
import { TWEET_IDS } from '$env/static/private';

/** Tweet ID のリスト。 `TWEET_IDS` 環境変数にIDをカンマ区切りで指定する。 */
const tweetIds = TWEET_IDS.split(',');

/* tweet を取得する。 */
export async function load() {
	const tweets: ITweet[] = [];
	for (const id of tweetIds) {
		try {
			const tweet = await getTweet(id);
			if (tweet != null) {
				tweets.push(tweet);
			}
		}
		catch (error) {
			console.error(error);
		}
	}

	return { tweets };
}
