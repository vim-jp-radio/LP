<script lang='ts'>
	// @ts-ignore
	import icon from '$/assets/logos/icon-home.png?enhanced&w=300;600;800';
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const alt = `Home icon`;
</script>

<Base {alt} {icon} {...rest} />
