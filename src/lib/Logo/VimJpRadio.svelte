<script lang='ts'>
	const { className: _className, ...rest }: { className?: string } = $props();

	import Base from './_Base.svelte';

	// @ts-ignore
	import icon from '$/assets/vimjp-radio-cover-art/3000x3000-alpha-fs8.png?enhanced';

	const alt = `エンジニアの楽園 vim-jpラジオ`;
	const className = `${_className} h-auto max-w-100% w-50svh`;
</script>

<Base {alt} {className} {icon} {...rest} />
