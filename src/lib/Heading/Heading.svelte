<script lang='ts'>
	const { title }: { title: string } = $props();
</script>

<h2 uno-mb-6 uno-text='LP-blue 3xl'>
	{title}
</h2>

<style>
h2 {
  --blue: theme('colors.LP-blue');
  --background: theme('colors.LP-backgroud');
	text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em var(--blue), 0 0 0.5em var(--blue), 0 0 0.1em var(--blue), 0 10px 3px var(--background);
}
</style>
