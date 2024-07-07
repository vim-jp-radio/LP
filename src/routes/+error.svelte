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
	<h1
		uno-grid
		uno-h-100svh
		uno-m-0
		uno-place='content-center items-center'
	>
		<!-- EASTER_EGG🐰🥚: Konamiコマンドが認識されると、`konami.activated`が`true`になり、`animate-spin`が適用されます。 -->
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<enhanced:img
			class:animate-spin={konami.activated}
			alt='error logo'
			src='$/assets/alisue/beer.png'
		/>
		<span uno-text='white'>
			{$page.error.message}
		</span>
	</h1>
{/if}
