<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import '../main.css';

	import Meta from './Meta.svelte';
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

<Meta />

<Backgroud />
<div
	uno-max-w='[600px]'
	uno-mx-auto
	uno-px-6
	uno-relative
	uno-text
	uno-w-full
	uno-z-1
>
	{@render children()}
</div>

<style>
/* css variable でglobal要素に設定する */
:global(body) {
	@apply uno-bg-LP-backgroud;
	margin: 0;
	min-width: 300px; /* 実際には320pxだが、スクロールバー等を考慮して300pxとしておく */
}
</style>
