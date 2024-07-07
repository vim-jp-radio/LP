<script lang='ts'>
	const { ...rest } = $props();

	import Base from './_Base.svelte';

	// @ts-ignore
	import icon from '$/assets/vimjp-radio-cover-art/3000x3000-alpha-fs8.png?enhanced';

	const alt = `エンジニアの楽園 vim-jpラジオ`;
</script>

<Base {alt} {icon} {...rest} />
