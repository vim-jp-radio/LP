<script lang='ts' module>
	export type CircleData = {
		x: number;
		y: number;
		radius: number;
		dx: number;
		dy: number;
	};
</script>

<script lang='ts'>
	import { onMount } from 'svelte';
	import { getRandomColor, getRandomSpeed } from './utils';

	type Props = {
		x: number;
		y: number;
		radius: number;
		minSpeed: number;
		maxSpeed: number;
		motionPaused: boolean;
		onCollision: (circle: CircleData) => void;
	};

	const { ...restProps }: Props = $props();

	let dx: number;
	let dy: number;
	const speed = getRandomSpeed(restProps.minSpeed, restProps.maxSpeed);
	const color = getRandomColor();

	onMount(() => {
		const angle = Math.random() * Math.PI * 2;
		dx = Math.cos(angle) * speed;
		dy = Math.sin(angle) * speed;
	});

	$effect(() => {
		if (!restProps.motionPaused) {
			restProps.x += dx;
			restProps.y += dy;
			restProps.onCollision({
				x: restProps.x,
				y: restProps.y,
				radius: restProps.radius,
				dx,
				dy,
			});
		}
	});
</script>

<circle
	{color}
	cx={restProps.x}
	cy={restProps.y}
	filter='url(#blur)'
	r={restProps.radius}
/>

