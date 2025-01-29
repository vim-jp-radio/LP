<script module lang='ts'>
	export type Props = {
		circleNum?: number;
		minSpeed?: number;
		maxSpeed?: number;
		blurStrength?: number;
	};
</script>

<script lang='ts'>
	import type { CircleData } from './Circle.svelte';
	import { prefersReducedMotion } from 'svelte/motion';
	import { innerHeight, innerWidth } from 'svelte/reactivity/window';
	import Circle from './Circle.svelte';
	import { checkCollision, getRandomRadius, handleCollision } from './utils';

	const {
		circleNum = 15,
		minSpeed = 0.5,
		maxSpeed = 1,
		blurStrength = 50,
	}: Props = $props();

	type CircleState = {
		id: string;
		x: number;
		y: number;
		radius: number;
	};

	const circles = $state<CircleState[]>([]);

	$effect(() => {
		// 初期円の位置を設定
		circles = Array.from({ length: circleNum }, () => ({
			id: Math.random().toString(36).substr(2, 9),
			x: Math.random() * (innerWidth.current - 200) + 100,
			y: Math.random() * (innerHeight.current - 200) + 100,
			radius: getRandomRadius(),
		}));
	});

	function handleCircleCollision(currentCircle: CircleData, currentId: string): void {
		circles.forEach((otherCircle) => {
			if (currentId === otherCircle.id) { return; }

			if (checkCollision(currentCircle, otherCircle)) {
				const newVelocities = handleCollision(
					currentCircle,
					otherCircle as CircleData,
				);
			// 衝突後の速度を更新
				// ここでCircleコンポーネントの速度を更新する処理を実装
			}
		});
	}
</script>

<svg
	class='background'
	height={innerHeight.current ?? 0 + blurStrength * 4}
	width={innerWidth.current ?? 0 + blurStrength * 4}
>
	<defs>
		<filter id='blur'>
			<feGaussianBlur stdDeviation={blurStrength} />
		</filter>
	</defs>

	{#each circles as circle (circle.id)}
		<Circle
			{maxSpeed}
			{minSpeed}
			motionPaused={prefersReducedMotion.current}
			onCollision={circleData => handleCircleCollision(circleData, circle.id)}
			radius={circle.radius}
			x={circle.x}
			y={circle.y}
		/>
	{/each}
</svg>

<style>
	.background {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		background: var(--LP-background);
		filter: blur(var(--blur, 50px));
	}
</style>

