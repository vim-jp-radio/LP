<script lang='ts'>
	// @ts-ignore
	import icon from '$/assets/logos/logo-surisurikun.png?enhanced&w=300;600;800';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Suzuri;
</script>

<Base {alt} {icon} {link} {...rest} />
