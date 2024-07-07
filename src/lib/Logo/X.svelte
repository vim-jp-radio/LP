<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/logo-x.png?enhanced';

	const { ...rest } = $props();

	const alt = `X`;
</script>

<Base {alt} {icon} {...rest} />
