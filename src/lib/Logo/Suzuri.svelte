<script lang='ts'>
	import icon from '$/assets/logos/logo-surisurikun.svg';
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Suzuri;
</script>

<Base {alt} {icon} {link} {...rest} />
