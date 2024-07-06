<script lang='ts'>
	import { building } from '$app/environment';

	const { link, icon, alt, className = '' }: { link?: string; icon: string; alt: string; className?: string } = $props();

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

</script>
{#snippet image()}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	{#if typeof icon === 'string' && icon.endsWith('.svg')}
		<img
			class={`${className} object-contain h-full w-full`}
			{alt}
			src={icon}
		/>
{:else}
	<enhanced:img
		class={`${className} object-contain h-full w-full`}
		{alt}
		src={icon}
	/>
{/if}
{/snippet}

{#if link != null}
	<a href={link} target='_blank'>
		{@render image()}
	</a>
{:else}
	{@render image()}
{/if}
