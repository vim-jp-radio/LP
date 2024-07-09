<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-spotify.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const alt = `Spotify`;
	const link = LINKS.Spotify;
</script>

<Base {alt} {icon} {link} {...rest} />
