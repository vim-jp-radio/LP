<script lang='ts'>
	import Base from './_Base.svelte';

	const { ...rest } = $props();

	const alt = `github`;
	const icon = '/src/assets/logos/icon-github.png';
</script>

<Base {alt} {icon} {...rest} />
