<script lang='ts'>
	import { Tweet as Sveltweet } from 'sveltweet';
	import { getTweet } from './getTweet.remote';

	type Props = Parameters<typeof getTweet>[0];

	const { id }: Props = $props();
	const tweet = getTweet({ id });
</script>

{#if tweet.current != null}
	<Sveltweet tweet={tweet.current} />
{/if}
