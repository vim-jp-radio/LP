<script lang='ts'>
	import { mount, onMount, unmount } from 'svelte';
	import BackgroundCanvas, { type Props as CanvasProps } from './Background-canvas.svelte';

	/**
	 * @param {number} circleNum - 円の数
	 * @param {number} minSpeed - 最小速度
	 * @param {number} maxSpeed - 最大速度
	 */
	const { ...restProps }: CanvasProps = $props();

	let div: HTMLDivElement;

	/** js が読み込まれたらCanvasをマウント */
	onMount(() => {
		const bg = mount(BackgroundCanvas, {
			target: div,
			props: restProps,
		});

		return () => {
			unmount(bg);
		};
	});
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div
	bind:this={div}
	uno-bg-LP-background
	uno-h-full
	uno-left-0
	uno-overflow-hidden
	uno-position-fixed
	uno-top-0
	uno-w-full
/>
