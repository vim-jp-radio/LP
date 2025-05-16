<script lang='ts'>
	import type { Attachment } from 'svelte/attachments';
	import { prefersReducedMotion } from 'svelte/motion';
	import { innerHeight, innerWidth } from 'svelte/reactivity/window';
	import { animate, cancelAnimate, createCircles } from './circle.js';

	/**
	 * @param {number} circleNum - 円の数
	 * @param {number} minSpeed - 最小速度
	 * @param {number} maxSpeed - 最大速度
	 */
	const {
		circleNum = 15,
		minSpeed = 0.5,
		maxSpeed = 1,
	}: {
		circleNum?: number;
		minSpeed?: number;
		maxSpeed?: number;
	} = $props();

	const blurStrength = 50;

	function canvasAttachment(canvas: HTMLCanvasElement): Attachment | void {
		const ctx = canvas.getContext('2d');
		if (ctx == null) {
			return;
		}

		const circles = createCircles(circleNum, canvas, ctx, minSpeed, maxSpeed, prefersReducedMotion.current);
		if (circles?.length > 0) {
			animate(canvas, ctx, circles);
		}

		/** ページ遷移時にアニメーションをキャンセル */
		return () => {
			cancelAnimate();
		};
	}
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div
	uno-bg-LP-background
	uno-h-full
	uno-left-0
	uno-overflow-hidden
	uno-position-fixed
	uno-top-0
	uno-w-full
>
	<!-- css変数を経由することで、unocssのclassに値を渡すことができる -->
	<canvas
		style:--blur='{blurStrength}px'
		{@attach canvasAttachment}
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
</div>
