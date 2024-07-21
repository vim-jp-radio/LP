<script lang='ts'>
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { ensureURL } from '../utils/url';

	const { link, icon, alt, class: className, ...rest }: { link?: string; icon: string } & Omit<HTMLImgAttributes, 'src'> = $props();

	const _defaultClassName = `h-full object-scale-down w-auto`;
	const _className = className ?? _defaultClassName;

</script>
{#snippet image()}
	{#if typeof icon === 'string' && icon.endsWith('.svg')}
    <!-- svg image -->
		<img
			class={_className}
			{alt}
			loading='lazy'
			src={icon}
			{...rest}
		/>
{:else}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<enhanced:img
		class={_className}
		{alt}
		loading='lazy'
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
