<script>
	import { page } from '$app/stores';
</script>

<!-- eslint-disable svelte/valid-compile -->
<!-- svelte-ignore element_invalid_self_closing_tag -->

{#if $page.error != null}
	<div class='grid place-content-center place-items-center'>
		<enhanced:img alt='some alt text' src='$/assets/404.png' />
		<h1>{$page.error.message}</h1>
	</div>
{/if}
