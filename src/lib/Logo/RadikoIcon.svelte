<script lang='ts'>
	import icon from '$/assets/logos/icon-radiko.png';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Radiko;
</script>

<Base {alt} {icon} {link} {...rest} />
