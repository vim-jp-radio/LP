<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/logo-x.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const { label: alt } = LINKS.X;
</script>

<Base {alt} {icon} {...rest} />
