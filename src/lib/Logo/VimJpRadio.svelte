<script lang='ts'>
	const { ...rest } = $props();

	// @ts-ignore
	import icon from '$/assets/vimjp-radio-cover-art/3000x3000-alpha-fs8.png?enhanced&w=200;400;600;800;1000;1200;1600;2000;2400;3000';
	import { LINKS } from '../links';

	import Base from './_Base.svelte';

	const { label: alt } = LINKS.VimJpRadio;
</script>

<Base {alt} {icon} {...rest} />
