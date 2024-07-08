<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/logo-x.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const alt = `X`;
</script>

<Base {alt} {icon} {...rest} />
