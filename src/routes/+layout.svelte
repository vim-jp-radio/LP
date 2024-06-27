<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/normalize.css';

	import Header from './Header.svelte';

	const { children } = $props();
</script>

<Header />

{@render children()}
