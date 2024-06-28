<script lang='ts'>
	import OGP from '$/assets/vimjp-radio-cover-art/ogp.png';

	const title = `エンジニアの楽園 vim-jpラジオ`;
	const description = `2024年7月8日配信開始のラジオ番組`;

	const xAccount = `@vimjpradio`;
	const locale = `ja_JP`;

	const image = { src: OGP, alt: `vim-jpラジオのロゴ`, type: `image/png` } as const;
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
	{@render xMeta('image', image.src)}
	{@render xMeta('image:alt', image.alt)}
	{@render xMeta('image:type', image.type)}

	<!-- Open Graph -->
	{@render ogMeta('type', 'website')}
	{@render ogMeta('title', title)}
	{@render ogMeta('description', description)}
	{@render ogMeta('locale', locale)}
	{@render ogMeta('image', image.src)}
	{@render ogMeta('image:alt', image.alt)}
	{@render ogMeta('image:type', image.type)}
</svelte:head>
