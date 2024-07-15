<script lang='ts'>
	import type { ITweet } from 'sveltekit-tweet';
	import { Heading } from '$/lib/Heading';

	const { tweets }: { tweets: ITweet[] } = $props();
</script>

<section>
	<Heading title='リスナーの声' />
	{#await import('sveltekit-tweet') then { Tweet }}
		<div data-theme='dark'>
			{#each tweets as tweet (tweet.id_str)}
				<Tweet {tweet} />
			{/each}
		</div>
	{/await}
</section>
