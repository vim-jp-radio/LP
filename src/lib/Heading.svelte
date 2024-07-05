<script lang='ts'>
	const { title }: { title: string } = $props();
</script>

<h2 uno-text='LP-blue 4xl'>
	{title}
</h2>

<style>
h2 {
	text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #1ECFFF, 0 0 0.5em #1ECFFF, 0 0 0.1em #1ECFFF, 0 10px 3px #000;
}
</style>
