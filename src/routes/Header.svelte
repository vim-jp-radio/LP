<script lang='ts'>
	import { VimJpRadio } from '$lib/Logo';
	import { restartAnimation } from '$lib/utils/animation.svelte.js';

	/** header 要素の参照 */
	let header = $state<HTMLHeadElement>();

/* eslint-disable svelte/no-unused-svelte-ignore */
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<header
	bind:this={header}
	onclick={() => (header != null) && restartAnimation(header)}
	uno-animated='duration-500ms flash repeat-1.5 delay-500ms'
>
	<h1
		uno-grid
		uno-h-100svh
		uno-m-0
		uno-place='content-center items-center'
	>
		<VimJpRadio imageClass='h-auto max-w-100% w-50svh' />
	</h1>
</header>
