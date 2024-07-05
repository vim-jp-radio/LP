<script lang='ts'>
	import { animate, createCircles } from './circle.js';

	let canvas = $state<HTMLCanvasElement | undefined>(undefined);
	const ctx = $derived.by(() => canvas?.getContext('2d'));
	let width = $state(0);
	let height = $state(0);

	const circles = $derived.by(() =>
		canvas != null && ctx != null ? createCircles(15, canvas, ctx) : [],
	);

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
<canvas
	bind:this={canvas}
	id='canvas'
	{height}
	{width}
/>

<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #010A01;
  z-index: 1;
}
</style>
