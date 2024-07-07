<script lang='ts'>
	const { title }: { title: string } = $props();
</script>

<h2 uno-mb-6 uno-text='LP-blue 3xl'>
	{title}
</h2>

<style>
h2 {
	text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--LP-blue), 0 0 0.5em var(--LP-blue), 0 0 0.1em var(--LP-blue), 0 10px 3px var(--LP-backgroud);
}
</style>
