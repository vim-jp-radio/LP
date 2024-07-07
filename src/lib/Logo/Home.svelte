<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-home.png?enhanced';

	const { link, alt, ...rest }: { link: string; alt: string } = $props();

</script>

<Base {alt} {icon} {link} {...rest} />
