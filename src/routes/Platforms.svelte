<script lang='ts'>
	import { Heading } from '$/lib/Heading';
	import { LINKS } from '$/lib/links';
	import * as Logo from '$lib/Logo';
</script>

<!-- それぞれ繰り返し使う部分をsnippetとして定義 -->
{#snippet desc()}
<p data-budoux uno-text>
	「エンジニアの楽園 vim-jpラジオ」は AuDee（TOKYO FM）の公式番組です。
</p>
{/snippet}

{#snippet audeeLink()}
<a data-budoux href={LINKS.AuDee.url} target='_blank' uno-button>AuDeeで聞く</a>
{/snippet}

{#snippet audeeLogo()}
<div uno-max-w-60 uno-min-w-36 uno-tiny-w-full>
	<Logo.AuDee class='h-full w-full object-fill' />
</div>
{/snippet}

<section>
	<Heading title='配信プラットフォーム' />
	<div uno-flex-col uno-space-y-12>

		<!-- 幅がtiny以上であれば、左右に分割して表示 -->
		<div uno-hidden uno-space-x-4 uno-tiny-flex>
			<div uno-flex-col uno-space-y-6>
				{@render desc()}
				{@render audeeLink()}
			</div>
			{@render audeeLogo()}
		</div>

		<!-- 幅がtiny未満であれば、上下に分割して表示 -->
		<div uno-flex='~ col' uno-justify-center uno-space-y-6 uno-tiny-hidden>
			<div uno-flex-row uno-space-y-4>
				{@render audeeLogo()}
				{@render desc()}
			</div>
			{@render audeeLink()}
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
				<Logo.ApplePodcast />
				<Logo.Spotify />
				<Logo.AmazonMusic />
				<Logo.YouTube />
			</div>
		</div>
	</div>
</section>
