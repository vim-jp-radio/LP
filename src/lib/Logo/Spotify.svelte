<script lang='ts'>
	import icon from '$/assets/logos/icon-spotify.svg';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Spotify;
</script>

<Base {alt} {icon} {link} {...rest} />
