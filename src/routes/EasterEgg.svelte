<script lang='ts'>
	/** EASTER_EGG🐰🥚: ありすえさんのAA */
	import ALISUE_AA_URL from '$/assets/aa/alisue.txt?url';
	/** EASTER_EGG🐰🥚: VIM-JP RADIOのAA */
	import VIM_JP_RADIO_URL from '$/assets/aa/vim-jp-radio.txt?url';

	const log = (s: string) => console.log(s.replaceAll('%', '%%')); // eslint-disable-line no-console

	function fetchAndLog(url: string) {
		fetch(url)
			.then(res => res.text())
			.then(text => log(text))
			.catch(err => console.error(err));
	}

	/** EASTER_EGG🐰🥚: ページが読み込まれた時に、ありすえさんのAAとVIM-JP RADIOのAAをconsole.logで表示 */
	$effect(() => {
		fetchAndLog(ALISUE_AA_URL);
		fetchAndLog(VIM_JP_RADIO_URL);
	});
</script>
