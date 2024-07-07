<script>
	import RadioLetter from './RadioLetter.svelte';
	import Description from './Description.svelte';
	import Platforms from './Platforms.svelte';
	import Personalities from './Personalities.svelte';
	import Footer from './Footer.svelte';
	import { VimJpRadio } from '$lib/Logo';
</script>

<h1
	uno-grid
	uno-h-100svh
	uno-m-0
	uno-place='content-center items-center'
>
	<VimJpRadio imageClass='h-auto max-w-100% w-50svh' />

</h1>

<main uno-flex-col uno-space-y-8>
	<Description />
	<Platforms />
	<Personalities />
	<RadioLetter />
</main>
<Footer />
