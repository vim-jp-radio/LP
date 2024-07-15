import { error } from '@sveltejs/kit';
import { getTweet } from 'sveltekit-tweet/server';
import type { ITweet } from 'sveltekit-tweet';

/** リスナーの声で表示する X ID のリスト。 */
const TWEET_IDS = [
	'1810659027053154344', // @yoosee
	'1810553887545532868', // @engineer_tetta
	'1810159818499567970', // @Matthew238
	'1810160793507483680', // @mattn_jp
	'1811006835534811272', // @ken_c_lo
	'1810492472386257249', // @the_uhooi
	'1810824539372409032', // @hirataq__
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
