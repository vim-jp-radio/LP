<script lang='ts'>
	import { Konami } from '$/lib/Konami';
	import { dev } from '$app/environment';
	import { page } from '$app/state';

	const konami = new Konami(2000);

	/* EASTER_EGG🐰🥚: dev 環境でのみ, consoleに入力されたキーのコードを表示 */
	if (dev) {
		$inspect(konami.combo);
	}
</script>

{#if page.error != null}
	<h1
		uno-grid
		uno-h-100svh
		uno-m-0
		uno-place='content-center items-center'
	>
		<!-- EASTER_EGG🐰🥚: Konamiコマンドが認識されると、`konami.activated`が`true`になり、`animate-spin`が適用されます。 -->
		<enhanced:img
			class={{ 'animate-spin': konami.activated }}
			alt='error logo'
			loading='lazy'
			src='$/assets/alisue/beer.png'
		/>
		<span uno-text>
			{page.error.message}
		</span>
	</h1>
{/if}
