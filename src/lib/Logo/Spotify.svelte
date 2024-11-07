<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';
	import icon from '$/assets/logos/icon-spotify.svg';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Spotify;
</script>

<Base {alt} {icon} {link} {...rest} />
