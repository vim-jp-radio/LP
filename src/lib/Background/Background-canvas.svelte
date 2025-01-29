<script lang='ts' module>
	export type Props = {
		circleNum?: number;
		minSpeed?: number;
		maxSpeed?: number;
		blurStrength?: number;
	};
</script>

<script lang='ts'>
	import { prefersReducedMotion } from 'svelte/motion';
	import { innerHeight, innerWidth } from 'svelte/reactivity/window';
	import { animate, cancelAnimate, createCircles } from './circle.js';

	const {
		blurStrength = 50,
		circleNum = 15,
		minSpeed = 0.5,
		maxSpeed = 1,
	}: Props = $props();

	let canvas = $state<HTMLCanvasElement | undefined>(undefined);
	const ctx = $derived.by(() => canvas?.getContext('2d'));

	const circles = $derived.by(() =>
		canvas != null && ctx != null ? createCircles(circleNum, canvas, ctx, minSpeed, maxSpeed, prefersReducedMotion.current) : [],
	);

	$effect(() => {
		if (
			circles?.length > 0
			&& canvas != null
			&& ctx != null
		) {
			animate(canvas, ctx, circles);
		}

		/** ページ遷移時にアニメーションをキャンセル */
		return () => {
			cancelAnimate();
		};
	});
</script>
<!-- css変数を経由することで、unocssのclassに値を渡すことができる -->

<!-- svelte-ignore element_invalid_self_closing_tag -->
<canvas
	bind:this={canvas}
	style:--blur='{blurStrength}px'
	height={innerHeight.current ?? 0 + blurStrength * 4}
	uno-bg-LP-background
	uno-filter-blur='[--blur]'
	uno-left='50%'
	uno-position-absolute
	uno-position-fixed
	uno-top='50%'
	uno-transform-translate-x='-50%'
	uno-transform-translate-y='-50%'
	uno-z-1
	width={innerWidth.current ?? 0 + blurStrength * 4}
/>
