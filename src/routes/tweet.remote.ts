import type { Tweet as TweetT } from 'sveltweet/api';
import { LISTENERS_TWEET_IDS } from '$/lib/links';
import { prerender } from '$app/server';
import { retry } from '@std/async';
import { error } from '@sveltejs/kit';
import * as sveltweet from 'sveltweet/api';

/**
 * tweet を取得するRemote function
 * https://svelte.dev/docs/kit/remote-functions#form
 */
export const getTweets = prerender(async () => {
	const tweets: TweetT[] = [];
	for (const id of LISTENERS_TWEET_IDS) {
		const tweet = await retry(async () => {
			const _tweet = await sveltweet.getTweet(id);

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
});
