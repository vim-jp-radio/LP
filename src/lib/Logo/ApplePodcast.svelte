<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-apple-podcast.svg';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.ApplePodcast;
</script>

<Base {alt} {icon} {link} {...rest} />
