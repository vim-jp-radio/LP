<script lang='ts'>
	// @ts-ignore
	import icon from '$/assets/logos/icon-amazon-music.svg';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.AmazonMusic;
</script>

<Base {alt} {icon} {link} {...rest} />
