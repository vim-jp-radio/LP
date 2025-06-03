<script lang='ts'>
	// @ts-ignore
	import icon from '$/assets/logos/icon-apple-podcast.svg';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.ApplePodcast;
</script>

<Base {alt} {icon} {link} {...rest} />
