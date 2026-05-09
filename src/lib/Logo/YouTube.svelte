<script lang='ts'>
	import icon from '$/assets/logos/icon-youtube.svg';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { link: linkOverride, ...rest }: { link?: string } & Record<string, unknown> = $props();

	const { label: alt, url } = LINKS.Youtube;
	const link = linkOverride ?? url;
</script>

<Base {alt} {icon} {link} {...rest} />
