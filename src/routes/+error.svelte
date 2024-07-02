<script lang='ts'>
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { Konami } from '$/lib/Konami';

	const konami = new Konami(2000);

	if (dev) {
		$inspect(konami.combo);
	}
</script>

{#if $page.error != null}
	<div
		uno-grid
		uno-place='content-center items-center'
	>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<enhanced:img
			class:animate-spin={konami.activated}
			alt='error logo'
			src='$/assets/alisue/beer.png'
		/>
		<h1 uno-text='white'>
			{$page.error.message}
		</h1>
	</div>
{/if}
