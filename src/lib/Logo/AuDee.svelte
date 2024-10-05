<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.AuDee;
	const width = 123.836;
	const height = 66.126;
	const icon = '/src/assets/logos/logo-audee.svg';
</script>

<Base {alt} {height} {icon} {link} {width} {...rest} />
