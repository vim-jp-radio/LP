<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/logo-x.png?enhanced';

	const { ...rest } = $props();

	const alt = `Spotify`;
	const link = `https://x.com/vimjpradio`;
</script>

<Base {alt} {icon} {link} {...rest} />
