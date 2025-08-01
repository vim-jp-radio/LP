import { prerender } from '$app/server';
import { retry } from '@std/async';
import { error } from '@sveltejs/kit';
import * as sveltweet from 'sveltweet/api';
import * as v from 'valibot';

const getTweetPropsSchema = v.object({
	id: v.string(),
});

/**
 * tweet を取得するRemote function
 * https://svelte.dev/docs/kit/remote-functions
 */
export const getTweet = prerender(getTweetPropsSchema, async ({ id }) => {
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
	return tweet;
});
