<script lang='ts'>
	const description = [
		[
			`エンジニアが集まるインターネット上のコミュニティvim-jpから生まれた初の音声プログラム。`,
			`vim-jpはプログラミングから子育てに至るまで無数のチャンネルを抱えたコミュニティです。`,
			`そんなコミュニティの面白さを生かして、各分野の様々なゲストを交えながら楽しく雑談していきます。`,
		],
		[
			`配信日時は毎週月曜 昼12時です。`,
			`なお、5週目はお休みとなります。`,
		],
	] as const satisfies string[][];
</script>

<section uno-flex='~ col' uno-gap-1.5>
	{#each description as paragraph (paragraph)}
		<p class='text'>
			{#each paragraph as line, i (line)}
				{line}
				{#if i < paragraph.length - 1}
					<br />
				{/if}
			{/each}
		</p>
	{/each}
</section>
