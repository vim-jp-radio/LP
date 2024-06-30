<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/normalize.css';

	import Header from './Header.svelte';
	import ALISUE_AA from '$/assets/aa/alisue.txt?raw';

	const { children } = $props();

	$effect(() => {
		// eslint-disable-next-line no-console
		console.log(ALISUE_AA);
	});
</script>

<Header />

{@render children()}
