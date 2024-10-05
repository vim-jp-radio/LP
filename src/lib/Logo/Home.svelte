<script lang='ts'>
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const alt = `Home icon`;
	const icon = '/src/assets/logos/icon-home.png';
</script>

<Base {alt} {icon} {...rest} />
