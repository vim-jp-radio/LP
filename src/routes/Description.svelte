<script lang='ts'>
	const description = [
		`エンジニアが集まるインターネット上のコミュニティvim-jpから生まれた初の音声プログラム。`,
		`vim-jpはプログラミングから子育てに至るまで無数のチャンネルを抱えたコミュニティです。`,
		`そんなコミュニティの面白さを生かして、各分野の様々なゲストを交えながら楽しく雑談していきます。`,
		`配信日時は毎週月曜 昼12時です。`,
		`なお、5週目はお休みとなります。`,
	] as const satisfies string[];
</script>

<div uno-text='LP-foreground'>
	{#each description as line (line)}
		<p class='text'>{line}</p>
	{/each}
</div>
