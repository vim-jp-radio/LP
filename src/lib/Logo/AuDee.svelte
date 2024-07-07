<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/logo-audee.svg';

	const { ...rest } = $props();

	const alt = `AuDee`;
	const link = `https://audee.jp/program/show/300008578`;
</script>

<Base {alt} {icon} {link} {...rest} />
