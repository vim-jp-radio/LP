<script lang='ts'>
	import type { ComponentProps } from 'svelte';
	import icon from '$/assets/logos/logo-x.svg';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest }: Omit<ComponentProps<typeof Base>, 'icon'> = $props();

	const { label: alt, url } = LINKS.X;

	const link = rest.link ?? url;
</script>

<Base {alt} {icon} {link} {...rest} />
