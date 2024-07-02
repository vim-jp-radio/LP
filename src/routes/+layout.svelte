<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/normalize.css';
	import './global.css'; // bodyにbackground-colorをあてようとしたときに、この方法しかうまくいかなかったため

	import Header from './Header.svelte';
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

{@render children()}
