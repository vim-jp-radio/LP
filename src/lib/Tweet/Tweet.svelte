<script lang='ts'>
	import { Tweet as Sveltweet } from 'sveltweet';
	import { getTweet } from './getTweet.remote';

	type Props = Parameters<typeof getTweet>[0];

	const { id }: Props = $props();
</script>

<svelte:boundary>
	{#snippet pending()} loading{/snippet}
	<!-- eslint-disable-next-line antfu/no-top-level-await -->
	<Sveltweet tweet={await getTweet({ id })} />
</svelte:boundary>
