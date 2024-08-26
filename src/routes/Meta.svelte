<script lang='ts'>
	// import FaviconsHead from 'vite-plugin-favicons/svelte';
	import faviconLinks from 'virtual:favicons';
	import { MetaTags } from 'svelte-meta-tags';

	import OGP from '$/assets/vimjp-radio-cover-art/ogp.png';
	import { VIM_JP_RADIO_INFO } from '$/lib/links';

	const { title, titleWithTagline, description, url } = VIM_JP_RADIO_INFO;

	const xAccount = `@vimjpradio`;
	const locale = `ja_JP`;

	const image = { src: OGP, alt: title, type: `image/png` } as const;
</script>
<!-- eslint-disable svelte/sort-attributes -->
<!-- eslint-disable svelte/no-at-html-tags -->

<svelte:head>{@html faviconLinks}</svelte:head>

<MetaTags
	title={titleWithTagline}
	description={description}
	additionalLinkTags={[
		{ rel: `canonical`, href: url },
	]}
	additionalMetaTags={[
		{ name: 'description', content: description },
		{ name: `viewport`, content: `width=device-width, initial-scale=1, viewport-fit=cover` },
	]}
	openGraph={{
		url,
		type: `website`,
		title: titleWithTagline,
		description,
		locale,
		images: [{
			url: image.src,
			alt: image.alt,
			type: image.type,
		}],
	}}
	twitter={{
		cardType: `summary_large_image`,
		site: xAccount,
		title: titleWithTagline,
		description,
		image: image.src,
		imageAlt: image.alt,
	}}
/>
