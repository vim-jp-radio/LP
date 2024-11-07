<script lang='ts'>
	import icon from '$/assets/logos/icon-youtube.svg';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Youtube;
</script>

<Base {alt} {icon} {link} {...rest} />
