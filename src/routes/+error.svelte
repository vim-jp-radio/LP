<script>
	import { page } from '$app/stores';
</script>

{#if $page.error != null}
	<div
		uno-grid
		uno-place='content-center items-center'
	>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<enhanced:img alt='some alt text' src='$/assets/404.png' />
		<h1>{$page.error.message}</h1>
	</div>
{/if}
