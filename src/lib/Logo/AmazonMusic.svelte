<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-amazon-music.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const alt = `Amazon Music`;
	const link = `https://music.amazon.co.jp/podcasts/e059ff85-b9a1-499e-9cc5-b148e5b56c18/エンジニアの楽園-vim-jp-ラジオ`;
</script>

<Base {alt} {icon} {link} {...rest} />
