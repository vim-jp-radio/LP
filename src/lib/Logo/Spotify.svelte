<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-spotify.png?enhanced&w=300;600;800';

	const { ...rest } = $props();

	const alt = `Spotify`;
	const link = `https://open.spotify.com/show/3fkxQ6g3577mog02HuXZMj?nd=1&dlsi=c2f29ebcdc1940ab`;
</script>

<Base {alt} {icon} {link} {...rest} />
