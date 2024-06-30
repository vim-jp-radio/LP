<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/normalize.css';

	import Header from './Header.svelte';
	import { ALISUE } from '$/assets/aa';

	const { children } = $props();

	$effect(() => {
		// eslint-disable-next-line no-console
		console.log(ALISUE);
	});
</script>

<Header />

{@render children()}
