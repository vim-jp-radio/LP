<script lang='ts'>
	import type dummyEnhanced from '*?enhanced';
	import type { Snippet } from 'svelte';
	import * as Logo from '$lib/Logo';

	type Picture = typeof dummyEnhanced;

	const {
		name,
		imgSrc,
		children,
		xLink,
		ghLink,
		homeLink,
	}: {
		name: string;
		imgSrc: Picture;
		children: Snippet<[]>;
		xLink?: string;
		ghLink?: string;
		homeLink?: string;
	} = $props();
</script>

<div uno-flex='~ col gap-1rem'>

	<!-- sns -->
	<div
		uno-flex='~ gap-1rem'
		uno-items-center
	>

		<h3 uno-text='2xl LP-blue'>
			{name}
		</h3>

		{#if xLink != null}
			<Logo.X
				class='h-auto w-1.25rem'
				link={xLink}
			/>
		{/if}

		{#if ghLink != null}
			<Logo.GitHub
				class='h-auto w-1.25rem'
				link={ghLink}
			/>
		{/if}

		{#if homeLink != null}
			<Logo.Home
				class='h-auto w-1.5rem'
				link={homeLink}
			/>
		{/if}

	</div>

	<div>
		<!-- プロフ画像 -->
		<enhanced:img
			class='float-right ml-10px h-auto w-100px'
			alt={name}
			loading='lazy'
			src={imgSrc}
		/>

		<!-- 説明文。必ず p.textで囲むこと -->
		<!-- 文字列を渡すだけだとBudouXが処理できない（コードにあるtagをpreprocessしなければならない都合）ので、pタグで囲む -->
		{@render children()}
	</div>

</div>
