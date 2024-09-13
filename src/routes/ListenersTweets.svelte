<script lang='ts'>
	import { Heading } from '$/lib/Heading';
	import { SvelteTweet, type Tweet } from 'sveltweet';

	const { tweets }: { tweets: Tweet[] } = $props();
</script>

<section>
	<Heading title='リスナーの声' />
	<div data-theme='dark'>
		{#each tweets as tweet (tweet.id_str)}
			<SvelteTweet {tweet} />
		{/each}
	</div>
</section>
