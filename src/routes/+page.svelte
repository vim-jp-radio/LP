<script>
	import Header from './Header.svelte';
	import RadioLetter from './RadioLetter.svelte';
	import Description from './Description.svelte';
	import Platforms from './Platforms.svelte';
	import Personalities from './Personalities.svelte';
	import Footer from './Footer.svelte';

	/* +page.server.ts からデータを取得 */
	const { data } = $props();
</script>

<Header />

<main uno-flex-col uno-space-y-16>
	<Description />
	<Platforms />
	<Personalities />
	<RadioLetter />
	{#await import('./ListenersTweets.svelte') then { default: ListenersTweets }}
		<ListenersTweets tweets={data.tweets} />
	{/await}
</main>

<Footer />
