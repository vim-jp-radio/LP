<script lang='ts'>
	import type { HTMLImgAttributes } from 'svelte/elements';
	import Image from '../Image.svelte';
	import { ensureURL } from '../utils/url';

	const { link, icon, alt, class: className, ...rest }: { link?: string; icon: string } & Omit<HTMLImgAttributes, 'src'> = $props();

	const _defaultClassName = `h-full object-scale-down w-auto`;
	const _className = className ?? _defaultClassName;
	const loading: typeof rest.loading = 'loading' in rest ? rest.loading : `lazy`;
</script>
{#snippet image()}
	<Image
		class={_className}
		alt={alt as string}
		{loading}
		src={icon}
		{...rest}
	/>
{/snippet}

{#if link != null}
	<a class='h-full w-auto' href={ensureURL(link)} target='_blank'>
		{@render image()}
	</a>
{:else}
	{@render image()}
{/if}
