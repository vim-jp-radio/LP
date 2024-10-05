<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.ApplePodcast;
	const icon = '/src/assets/logos/icon-apple-podcast.png';
</script>

<Base {alt} {icon} {link} {...rest} />
