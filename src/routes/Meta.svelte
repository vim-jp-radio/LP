<script lang='ts'>
	import OGP from '$/assets/vimjp-radio-cover-art/ogp.png';
	import { VIM_JP_RADIO_INFO } from '$/lib/links';

	const { title, titleWithTagline, description, url } = VIM_JP_RADIO_INFO;

	const xAccount = `@vimjpradio`;
	const locale = `ja_JP`;

	const image = { src: OGP, alt: title, type: `image/png` } as const;

	type XCardType = 'summary' | 'summary_large_image' | 'app' | 'player';
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
	<title>{titleWithTagline}</title>
	<meta name='description' content={description} />
	<meta name='viewport' content='width=device-width,initial-scale=1' />

	<!-- X -->
	{@render xMeta('site', xAccount)}
	{@render xMeta('creator', xAccount)}
	{@render xMeta('title', titleWithTagline)}
	{@render xMeta('description', description)}
	{@render xMeta('card', `summary_large_image` satisfies XCardType)}
	{@render xMeta('image', image.src)}
	{@render xMeta('image:alt', image.alt)}
	{@render xMeta('image:type', image.type)}

	<!-- Open Graph -->
	{@render ogMeta('url', url)}
	{@render ogMeta('type', 'website')}
	{@render ogMeta('title', titleWithTagline)}
	{@render ogMeta('description', description)}
	{@render ogMeta('locale', locale)}
	{@render ogMeta('image', image.src)}
	{@render ogMeta('image:alt', image.alt)}
	{@render ogMeta('image:type', image.type)}
</svelte:head>
