<script lang='ts'>
	import { Heading } from '$/lib/Heading';
	import * as Logo from '$lib/Logo';
</script>

<section>
	<Heading title='配信プラットフォーム' />
	<div uno-flex-col uno-space-y-12>
		<div uno-flex uno-space-x-4>
			<div uno-flex-col uno-space-y-6>
				<p uno-text>
					「エンジニアの楽園 vim-jpラジオ」は AuDee（TOKYO FM）の公式番組です。
				</p>
				<div>
					<a href='https://audee.jp/program/show/300008578' target='_blank' uno-button>AuDeeで聞く</a>
				</div>
			</div>
			<div uno-max-w-60 uno-min-w-36 uno-w-full>
				<Logo.AuDee />
			</div>
		</div>
		<div uno-flex-col uno-space-y-6>
			<p uno-text>
				ほかにも以下のプラットフォームで配信しています。
			</p>
			<div
				uno-flex
				uno-gap-8
				uno-h-16
				uno-justify-center
			>
				<Logo.ApplePodcast />
				<Logo.Spotify />
				<Logo.AmazonMusic />
				<Logo.YouTube />
			</div>
		</div>
	</div>
</section>
