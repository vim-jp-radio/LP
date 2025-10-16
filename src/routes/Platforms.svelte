<script lang='ts'>
	import { Heading } from '$/lib/Heading';
	import { LINKS } from '$/lib/links';
	import * as Logo from '$lib/Logo';
</script>

<section>
	<Heading title='配信プラットフォーム' />
	<div uno-flex-col uno-space-y-12>
		<!-- 幅がtiny未満であれば、上下に分割して表示 -->
		<div uno-flex='~ col tiny:row-reverse justify-center' uno-space-y='6 tiny:0'>
			<!-- Apple Podcast Logo -->
			<div uno-max-w-60 uno-min-w-36 uno-tiny-w-full>
				<Logo.ApplePodcast class='h-full w-full object-fill' />
			</div>
			<div uno-space-y='4 tiny:6'>
				<!-- description -->
				<p data-budoux uno-text>
					「エンジニアの楽園 vim-jpラジオ」は TOKYO FM の公式番組です。
				</p>
				<!-- Apple Podcast link -->
				<a data-budoux href={LINKS.ApplePodcast.url} target='_blank' uno-button>Apple Podcastで聞く</a>
			</div>
		</div>

		<div uno-flex-col uno-space-y-6>
			<p data-budoux uno-text>
				ほかにも以下のプラットフォームで配信しています。
			</p>
			<div
				uno-flex
				uno-gap-8
				uno-h-16
				uno-justify-center
			>
				<Logo.Spotify />
				<Logo.AmazonMusic />
				<Logo.YouTube />
			</div>
		</div>
	</div>
</section>
