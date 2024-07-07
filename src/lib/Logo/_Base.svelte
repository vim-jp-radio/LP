<script lang='ts'>
	import { building } from '$app/environment';

	const { link, icon, alt, imageClass, ...rest }: { link?: string; icon: string; alt: string; imageClass?: string } = $props();

	/** build時にURLが正しいかチェック */
	if (building && link != null) {
		/** https で始まるURLかチェック */
		if (!link.startsWith('https')) {
			throw new Error(`link must start with http or https: ${link}`);
		}
		/** URLが正しいかチェック */
		if (!URL.canParse(link)) {
			throw new Error(`link is not a valid URL: ${link}`);
		}
	}

	const defaultImageClass = `h-full object-fill w-auto`;
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
	<a class='h-full w-auto' href={link} target='_blank'>
		{@render image()}
	</a>
{:else}
	{@render image()}
{/if}
