<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/normalize.css';

	import Header from './Header.svelte';
	import ALISUE_AA from '$/assets/aa/alisue.txt?raw';

	const { children } = $props();

	const log = (s: string) => console.log(s); // eslint-disable-line no-console
	$effect(() => {
		log(ALISUE_AA);
	});
</script>

<Header />

{@render children()}
