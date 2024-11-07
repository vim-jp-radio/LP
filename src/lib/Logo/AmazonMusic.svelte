<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-amazon-music.svg';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.AmazonMusic;
</script>

<Base {alt} {icon} {link} {...rest} />
