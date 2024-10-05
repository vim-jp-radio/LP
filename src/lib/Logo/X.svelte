<script lang='ts'>
	import type { ComponentProps } from 'svelte';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest }: Omit<ComponentProps<Base>, 'icon'> = $props();

	const { label: alt, url } = LINKS.X;

	const link = rest.link ?? url;
	const icon = '/src/assets/logos/logo-x.png';
</script>

<Base {alt} {icon} {link} {...rest} />
