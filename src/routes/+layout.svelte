<script lang='ts'>
	import { Background } from '$lib/Background';
	import EasterEgg from './EasterEgg.svelte';
	import Footer from './Footer.svelte';

	import Meta from './Meta.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind-compat.css';

	const { children } = $props();
</script>

<Meta />

<!-- EASTER_EGG🐰🥚 -->
<EasterEgg />

<Background />
<div
	uno-max-w-600px
	uno-mx-auto
	uno-px-6
	uno-relative
	uno-text
	uno-w-full
	uno-z-1
>
	{@render children()}
	<Footer />
</div>

<style>
/*
* @apply は --at-apply で代用する https://unocss.dev/transformers/directives#at-apply
*/
:global {
	body {
		--at-apply: bg-LP-background p-safe min-h-safe;
		margin: 0;
		min-width: 300px; /* 実際には320pxだが、スクロールバー等を考慮して300pxとしておく */
	}
}
</style>
