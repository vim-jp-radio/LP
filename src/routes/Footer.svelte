<script lang='ts'>
	import * as Logo from '$lib/Logo';
</script>

<footer uno-pb-20 uno-pt-64>
	<div uno-mb-24>
		<Logo.VimJpRadio class='mx-auto h-auto max-w-100% w-50svh' loading={null} />
	</div>

	<div
		uno-flex
		uno-gap-4
		uno-h-8
		uno-justify-center
		uno-mb-8
	>
		<Logo.ApplePodcast />
		<Logo.Spotify />
		<Logo.AmazonMusic />
		<Logo.YouTube />
		<Logo.X />
		<Logo.Suzuri />
	</div>

	<div uno-flex-col uno-space-y-4>
		<p data-budoux uno-color-LP-gray uno-text-sm>
			Personality: lambdalisue & tomoya<br />
			Theme music: Jun Tanaka (GENTOUKI)<br />
			Cover art design: Kazuaki Komai (こまゐ図考室)<br />
			Production: Sha-la-la Company<br />
			vim-jp radio team: conao3, kawarimidoll, kleha, ryoppippi, and wagomu
		</p>
		<p uno-color-LP-gray uno-text-sm>(c) Forcode Co., Ltd.</p>
	</div>
</footer>
