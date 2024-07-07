<script>
	import Header from './Header.svelte';
	import RadioLetter from './RadioLetter.svelte';
	import Description from './Description.svelte';
	import Platforms from './Platforms.svelte';
	import Personalities from './Personalities.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />

<main uno-flex-col uno-space-y-8>
	<Description />
	<Platforms />
	<Personalities />
	<RadioLetter />
</main>

<Footer />
