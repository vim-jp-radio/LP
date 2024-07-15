import { error } from '@sveltejs/kit';
import { getTweet } from 'sveltekit-tweet/server';
import type { ITweet } from 'sveltekit-tweet';

/** リスナーの声で表示する X ID のリスト。 */
const TWEET_IDS = [
	'1810659027053154344',
	'1810553887545532868',
	'1810159818499567970',
	'1811006835534811272',
	'1811918122003349532',
] as const satisfies string[];

/* tweet を取得する。 */
export async function load() {
	const tweets: ITweet[] = [];
	for (const id of TWEET_IDS) {
		const tweet = await getTweet(id);
		if (tweet == null) {
			error(404, `Tweet not found: ${id}`);
		}
		tweets.push(tweet);
	}

	return { tweets };
}
