<script lang='ts'>
	import Base from './_Base.svelte';
	// @ts-ignore
	import icon from '$/assets/logos/icon-youtube.png?enhanced';

	const alt = `YouTube`;
	const link = `https://www.youtube.com/playlist?list=PLcptmT4PuRVNm5qjf5DhzPYZenncjLWQ8`;
</script>

<Base {alt} {icon} {link} />
