<script lang='ts'>
	import type dummyEnhanced from '*?enhanced';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { ensureURL } from '../utils/url';

	type Picture = typeof dummyEnhanced;

	const { link, icon, alt, class: className, ...rest }: { link?: string; icon: string | Picture } & Omit<HTMLImgAttributes, 'src'> = $props();

	const _defaultClassName = `h-full object-scale-down w-auto`;
	const _className = className ?? _defaultClassName;
	const loading: typeof rest.loading = 'loading' in rest ? rest.loading : `lazy`;

</script>
{#snippet image()}
	{#if typeof icon === 'string'}
		<!-- svg image -->
		<img
			class={_className}
			{alt}
			{loading}
			src={icon}
			{...rest}
		/>
	{:else}
		<enhanced:img
			class={_className}
			{alt}
			{loading}
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
