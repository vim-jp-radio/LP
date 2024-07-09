<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/logo-audee.svg';

	const { ...rest } = $props();

	const alt = `AuDee`;
	const link = LINKS.AuDee;
	const width = 123.836;
	const height = 66.126;
</script>

<Base {alt} {height} {icon} {link} {width} {...rest} />
