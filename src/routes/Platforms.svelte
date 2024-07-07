<script lang='ts'>
	import Heading from '$/lib/Heading.svelte';
	import * as Logo from '$lib/Logo';
</script>

<div>
	<Heading title='配信プラットフォーム' />
	<div>
		<div>
			<p uno-text>
				「エンジニアの楽園 vim-jpラジオ」は AuDee（TOKYO FM）の公式番組です。
			</p>
			<a href='https://audee.jp/program/show/300008578' target='_blank'>AuDeeで聞く</a>
		</div>
		<Logo.AuDee />
	</div>
	<div>
		<p uno-text>
			ほかにもつぎのプラットフォームで配信しています。
		</p>
		<div
			uno-flex
			uno-h-24
			uno-justify-between
		>
			<Logo.ApplePodcast />
			<Logo.Spotify />
			<Logo.AmazonMusic />
			<Logo.YouTube />
		</div>
	</div>
</div>
