<script>
	import Description from './Description.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import ListenersTweets from './ListenersTweets.svelte';
	import Personalities from './Personalities.svelte';
	import Platforms from './Platforms.svelte';
	import RadioLetter from './RadioLetter.svelte';
</script>

<Header />

<main uno-flex-col uno-space-y-16>
	<Description />
	<Platforms />
	<Personalities />
	<RadioLetter />
	<ListenersTweets />
</main>

<Footer />
