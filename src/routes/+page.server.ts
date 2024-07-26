import { error } from '@sveltejs/kit';
import { getTweet } from 'sveltekit-tweet/server';
import { LISTENERS_TWEET_IDS } from '$/lib/links';

/* tweet を取得する。 */
export async function load() {
	const tweets = LISTENERS_TWEET_IDS.map(
		async id => getTweet(id)
			.then((tweet) => {
				if (tweet == null) {
					error(404, `Tweet not found: ${id}`);
				}
				return tweet;
			}),
	);

	return { tweets: await Promise.all(tweets) };
}
