<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import '../main.css';

	import Header from './Header.svelte';
	import { Backgroud } from '$lib/Backgroud';

	/** EASTER_EGG🐰🥚: ありすえさんのAA */
	import ALISUE_AA from '$/assets/aa/alisue.txt?raw';
	/** EASTER_EGG🐰🥚: VIM-JP RADIOのAA */
	import VIM_JP_RADIO from '$/assets/aa/vim-jp-radio.txt?raw';

	const { children } = $props();

	const log = (s: string) => console.log(s.replaceAll('%', '%%')); // eslint-disable-line no-console

	/** EASTER_EGG🐰🥚: ページが読み込まれた時に、ありすえさんのAAとVIM-JP RADIOのAAをconsole.logで表示 */
	$effect(() => {
		log(VIM_JP_RADIO);
		log(ALISUE_AA);
	});
</script>

<Header />

<Backgroud />
<div
	uno-max='w-[600px]'
	uno-mx='auto'
	uno-px='6'
	uno-text='~'
	uno-w='full'
>
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
