<script lang='ts'>
	import { Heading } from '$/lib/Heading';
	import { Tweet } from 'sveltweet';
	import { getTweets } from './tweet.remote';

	const tweets = getTweets();
</script>

<section>
	<Heading title='リスナーの声' />
	<svelte:boundary>
		<div data-theme='dark'>
			{#each tweets.current as tweet (tweet.id_str)}
				<Tweet {tweet} />
			{/each}
		</div>
	</svelte:boundary>
</section>
