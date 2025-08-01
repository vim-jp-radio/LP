<script lang='ts'>
	import { Heading } from '$/lib/Heading';
	import { LISTENERS_TWEET_IDS } from '$/lib/links';
	import { Tweet } from '$/lib/Tweet';
</script>

<section>
	<Heading title='リスナーの声' />
	<div data-theme='dark'>
		{#each LISTENERS_TWEET_IDS as id (id)}
			<Tweet {id} />
		{/each}
	</div>
</section>
