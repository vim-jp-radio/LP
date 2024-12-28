<script lang='ts'>
	import type { Tweet as TweetT } from 'sveltweet/api';
	import { Heading } from '$/lib/Heading';
	import { Tweet } from 'sveltweet';

	const { tweets }: { tweets: TweetT[] } = $props();
</script>

<section>
	<Heading title='リスナーの声' />
	<div data-theme='dark'>
		{#each tweets as tweet (tweet.id_str)}
			<Tweet {tweet} />
		{/each}
	</div>
</section>
