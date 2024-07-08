<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-apple-podcast.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const alt = `Apple Podcast`;
	const link = `https://podcasts.apple.com/jp/podcast/エンジニアの楽園-vim-jp-ラジオ/id1755104750`;
</script>

<Base {alt} {icon} {link} {...rest} />
