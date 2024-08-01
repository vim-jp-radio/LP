<script lang='ts'>
	import { SvelteTweet, type Tweet } from 'sveltweet';
	import { Heading } from '$/lib/Heading';

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
