<script lang='ts'>
	import { ensureURL } from '../utils/url';

	const { link, icon, alt, imageClass, ...rest }: { link?: string; icon: string; alt: string; imageClass?: string } = $props();

	const defaultImageClass = `h-full object-scale-down w-auto`;
	const _imageClassName = imageClass ?? defaultImageClass;

</script>
{#snippet image()}
	{#if typeof icon === 'string' && icon.endsWith('.svg')}
    <!-- svg image -->
		<img
			class={_imageClassName}
			{alt}
			src={icon}
			{...rest}
		/>
{:else}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<enhanced:img
		class={_imageClassName}
		{alt}
		src={icon}
		{...rest}
	/>
{/if}
{/snippet}

{#if link != null}
	<a class='h-full w-auto' href={ensureURL(link)} target='_blank'>
		{@render image()}
	</a>
{:else}
	{@render image()}
{/if}
