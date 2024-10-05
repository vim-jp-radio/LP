<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Youtube;
	const icon = '/src/assets/logos/icon-youtube.png';
</script>

<Base {alt} {icon} {link} {...rest} />
