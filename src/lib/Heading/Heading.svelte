<script lang='ts'>
	const { title }: { title: string } = $props();
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<!-- groupはclassじゃないとうまくいかないっぽい https://github.com/unocss/unocss/issues/655#issuecomment-1052934514 -->
<!-- アイコンとタイトルの間に謎の隙間ができるので整形に失敗したHTMLみたいになっている -->
<a href='#{title}'>
	<h2
		id={title}
		class='group'
		uno-flex
		uno-items-center
		uno-mb-6
		uno-text='LP-blue 3xl'
	>
		{title}<span
			uno-color-LP-darkGray
			uno-group-hover-visible
			uno-i-ph-hash-bold
			uno-invisible
			uno-ml-1
			uno-text-2xl
		/>
	</h2>
</a>

<style>
h2 {
  --blue: theme('colors.LP.blue');
  --background: theme('colors.LP.backgroud');
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--blue), 0 0 0.5em var(--blue), 0 0 0.1em var(--blue), 0 10px 3px var(--background);
}
</style>
