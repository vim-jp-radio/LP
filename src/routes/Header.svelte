<script lang='ts'>
	import Logo from '$/assets/vimjp-radio-cover-art/3000x3000-fs8.png';
	import OGP from '$/assets/vimjp-radio-cover-art/ogp.png';

	const title = `エンジニアの楽園 vim-jpラジオ`;
	const description = `2024年7月8日配信開始のラジオ番組`;

	const xAccount = `@vimjpradio`;
	const locale = `ja_JP`;

	const images = [
		{ src: OGP, alt: `vim-jpラジオのロゴ`, type: `image/png` },
		{ src: Logo, alt: `vim-jpラジオのロゴ`, type: `image/png` },
	] as const satisfies { src: string; alt: string; type: string }[];
</script>

<!-- X のメタタグを生成するsnippet -->
{#snippet xMeta(property: string, content: string)}
	<meta name='twitter:{property}' content={content} />
{/snippet}

<!-- Open Graph のメタタグを生成するsnippet -->
{#snippet ogMeta(property: string, content: string)}
	<!-- eslint-disable svelte/sort-attributes -->
	<meta property='og:{property}' content={content} />
	<!-- eslint-enable svelte/sort-attributes -->
{/snippet}

<svelte:head>
	<title>{title}</title>
	<meta name='description' content={description} />

	<!-- X -->
	{@render xMeta('site', xAccount)}
	{@render xMeta('creator', xAccount)}
	{@render xMeta('title', title)}
	{@render xMeta('description', description)}
	{@render xMeta('card', 'summary_large')}
	{@render xMeta('image', images[0].src)}
	{@render xMeta('image:alt', images[0].alt)}
	{@render xMeta('image:type', images[0].type)}

	<!-- Open Graph -->
	{@render ogMeta('type', 'website')}
	{@render ogMeta('title', title)}
	{@render ogMeta('description', description)}
	{@render ogMeta('locale', locale)}
	{#each images as { src, alt, type } (src)}
		{@render ogMeta('image', src)}
		{@render ogMeta('image:alt', alt)}
		{@render ogMeta('image:type', type)}
	{/each}
</svelte:head>
