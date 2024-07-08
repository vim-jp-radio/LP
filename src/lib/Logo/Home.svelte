<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-home.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const alt = `Home icon`;
</script>

<Base {alt} {icon} {...rest} />
