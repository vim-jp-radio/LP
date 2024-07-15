<script lang='ts'>
	import { type ITweet, Tweet } from 'sveltekit-tweet';
	import { Heading } from '$/lib/Heading';

	const { tweets }: { tweets: ITweet[] } = $props();
</script>

<section>
	<Heading title='リスナーの声' />
	<div
		data-theme='dark'
		uno-grid='~ cols-1 gap-4'
	>
		{#each tweets as tweet (tweet.id_str)}
			<Tweet {tweet} />
		{/each}
	</div>
</section>
