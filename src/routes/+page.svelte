<script>
	import Header from './Header.svelte';
	import RadioLetter from './RadioLetter.svelte';
	import Description from './Description.svelte';
	import Platforms from './Platforms.svelte';
	import Personalities from './Personalities.svelte';
	import Footer from './Footer.svelte';
	import ListenersTweets from './ListenersTweets.svelte';

	/* +page.server.ts からデータを取得 */
	const { data } = $props();
</script>

<Header />

<main uno-flex-col uno-space-y-16>
	<Description />
	<Platforms />
	<Personalities />
	<RadioLetter />
	<ListenersTweets tweets={data.tweets} />
</main>

<Footer />
