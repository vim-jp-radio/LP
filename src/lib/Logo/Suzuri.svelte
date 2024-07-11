<script lang='ts'>
	import type { ComponentProps } from 'svelte';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/suzuri-logo-white.png?enhanced&w=300;600;800';

	const { ...rest }: Omit<ComponentProps<Base>, 'icon'> = $props();

	const { label: alt, url } = LINKS.X;

	const link = rest.link ?? url;
</script>

<Base {alt} {icon} {link} {...rest} />
