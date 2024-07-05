<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/normalize.css';

	import Header from './Header.svelte';
	import { Backgroud } from '$lib/Backgroud';
	import ALISUE_AA from '$/assets/aa/alisue.txt?raw';
	import VIM_JP_RADIO from '$/assets/aa/vim-jp-radio.txt?raw';

	const { children } = $props();

	const log = (s: string) => console.log(s.replaceAll('%', '%%')); // eslint-disable-line no-console
	$effect(() => {
		log(VIM_JP_RADIO);
		log(ALISUE_AA);
	});
</script>

<Header />

<Backgroud />
<div>
	{@render children()}
</div>
<style>
/* css variable でglobal要素に設定する */
:global(body) {
	margin: 0;
}

div {
  z-index: 1;
  position: relative;
}
</style>
