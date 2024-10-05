<script lang='ts'>
	const { ...rest } = $props();

	import { LINKS } from '../links';
	import Base from './_Base.svelte';

	const { label: alt } = LINKS.VimJpRadio;
	const icon = '/src/assets/vimjp-radio-cover-art/3000x3000-alpha-fs8.png';
</script>

<Base {alt} {icon} {...rest} />
