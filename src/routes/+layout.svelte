<script lang='ts'>
	export const prerender = true;

	import 'uno.css';
	import '@unocss/reset/normalize.css';

	const { children } = $props();
</script>

{@render children()}
