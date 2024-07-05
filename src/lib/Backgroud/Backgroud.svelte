<script lang='ts'>
	import { animate, createCircles } from './circle.js';

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

{#if jsLoaded}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<canvas
		bind:this={canvas}
		{height}
		uno-bg='LP-backgroud'
		uno-left='0'
		uno-position='fixed'
		uno-top='0'
		uno-z='1'
		{width}
	/>
{:else}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<div
		uno-bg='LP-backgroud'
		uno-h='full'
		uno-left='0'
		uno-position='fixed'
		uno-top='0'
		uno-w='full'
		uno-z='1'
	/>
{/if}
