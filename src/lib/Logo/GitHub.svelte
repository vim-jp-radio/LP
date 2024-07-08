<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-github.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const alt = `github`;
</script>

<Base {alt} {icon} {...rest} />
