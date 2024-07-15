<script lang='ts'>
	/** EASTER_EGG🐰🥚: ありすえさんのAA */
	import ALISUE_AA from '$/assets/aa/alisue.txt?raw';
	/** EASTER_EGG🐰🥚: VIM-JP RADIOのAA */
	import VIM_JP_RADIO from '$/assets/aa/vim-jp-radio.txt?raw';

	const log = (s: string) => console.log(s.replaceAll('%', '%%')); // eslint-disable-line no-console

	/** EASTER_EGG🐰🥚: ページが読み込まれた時に、ありすえさんのAAとVIM-JP RADIOのAAをconsole.logで表示 */
	$effect(() => {
		log(VIM_JP_RADIO);
		log(ALISUE_AA);
	});
</script>
