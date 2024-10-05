<script lang='ts'>
	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const { label: alt, url: link } = LINKS.Suzuri;
	const icon = '/src/assets/logos/logo-surisurikun.png';
</script>

<Base {alt} {icon} {link} {...rest} />
