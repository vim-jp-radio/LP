<script lang='ts'>
	import { animate, createCircles } from './circle.js';

	const { blurStrength = 50 }: { blurStrength?: number } = $props();

	let canvas = $state<HTMLCanvasElement | undefined>(undefined);
	const ctx = $derived.by(() => canvas?.getContext('2d'));
	let width = $state(0);
	let height = $state(0);

	/** jsが読み込まれたかどうか */
	let jsLoaded = $state(false);

	const circles = $derived.by(() =>
		canvas != null && ctx != null ? createCircles(15, canvas, ctx) : [],
	);

	/** js が読み込まれたらオンになる */
	$effect(() => {
		jsLoaded = true;
	});

	$effect(() => {
		if (
			circles?.length > 0
			&& canvas != null
			&& ctx != null
		) {
			animate(canvas, ctx, circles);
		}
	});
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<!-- svelte-ignore element_invalid_self_closing_tag -->
<div
	uno-h-full
	uno-left-0
	uno-overflow-hidden
	uno-position-fixed
	uno-top-0
	uno-w-full
>
	{#if jsLoaded}
		<canvas
			bind:this={canvas}
			class:filter-blur={blurStrength}
			height={height + blurStrength * 4}
			uno-bg='LP-backgroud'
			uno-left='50%'
			uno-position-absolute
			uno-position-fixed
			uno-top='50%'
			uno-transform-translate-x='-50%'
			uno-transform-translate-y='-50%'
			uno-z-1
			width={width + blurStrength * 4}
		/>
	{:else}
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div
			uno-bg-LP-backgroud
			uno-h-full
			uno-position-absolute
			uno-w-full
		/>
	{/if}
</div>
