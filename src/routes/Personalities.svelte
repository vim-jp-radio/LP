<script lang='ts'>
	import type { Snippet } from 'svelte';
	import { Heading } from '$/lib/Heading';
	import * as Logo from '$lib/Logo';

	// @ts-ignore
	import tomoyaImg from '$/assets/avatar/tomoya.jpg?enhanced';

	// @ts-ignore
	import lambdalisueImg from '$/assets/avatar/lambdalisue.png?enhanced';
</script>

<!-- 実際にレンダリングされる部分 -->
<section>
	<Heading title='パーソナリティ' />
	<div uno-flex='~ col gap-2rem'>
		{@render personality(
			'tomoya',
			'https://x.com/tomoyaton',
			'https://github.com/tomoya',
			'https://blog.tomoya.dev/',
			tomoyaImg,
			tomoyaDesc,
		)}
		{@render personality(
			'ありすえ',
			'https://twitter.com/lambdalisue',
			'https://github.com/lambdalisue',
			undefined,
			lambdalisueImg,
			lambdalisueDesc,
		)}
	</div>
</section>
<!-- 実際にレンダリングされる部分 -->

<!-- 以下snippetたち -->

<!-- personality部分をsnippetとして定義 -->
{#snippet personality(
	name: string,
	xLink: string | undefined,
	ghLink: string | undefined,
	homeLink: string | undefined,
	imgSrc: string,
	desc: Snippet,
)}
	<div uno-flex='~ col gap-1rem'>
		<div
			uno-flex='~ gap-1rem'
			uno-items-center
		>
			<h3 uno-text='2xl LP-blue'>
				{name}
			</h3>
			{#if xLink}
				<Logo.X
					class='h-auto w-1.25rem'
					link={xLink}
				/>
			{/if}
			{#if ghLink}
				<Logo.GitHub
					class='h-auto w-1.25rem'
					link={ghLink}
				/>
			{/if}
			{#if homeLink}
				<Logo.Home
					class='h-auto w-1.5rem'
					link={homeLink}
				/>
			{/if}
		</div>
		<div>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<enhanced:img
				class='float-right ml-10px h-auto w-100px'
				alt={name}
				src={imgSrc}
			/>
			{@render desc()}
		</div>

	</div>
{/snippet}

<!-- 以下それぞれのパーソナリティの説明をsnippetとして定義 -->
<!-- 文字列を渡すだけだとBudouXが処理できない（コードにあるtagをpreprocessしなければならない都合）ので、snippetとして定義している。 -->
<!-- 将来的にword-break: auto-phraseが広く使えるようになったら、もっと楽になるかもしれない -->

<!-- tomoyaの説明 -->
{#snippet tomoyaDesc()}
	<p data-budoux uno-text>
		1983年生まれ。起業家、及びフロントエンドからバックエンドまで幅広くカバーするWebエンジニア。
		2010年に起業。2015年にイグジット。2017年にフォーコード株式会社を設立して、現在は日本で一番多くのVimmerと一緒に仕事するEmacserとして、大企業システムを作ったりしています。著書に『Atom実践入門』、『［改訂新版］Emacs実践入門』、『CircleCI実践入門』（共に技術評論社）がある。
	</p>
{/snippet}

<!-- ありすえの説明 -->
{#snippet lambdalisueDesc()}
	<p data-budoux uno-text>
		Vim/Neovimのプラグイン開発用エコシステムDenopsの作者。
		小学校の時に「ゲームを作ってみたい」と思ったことがきっかけでプログラミングにハマる。
		私生活のほとんどの時間をプログラミングに費やした。『Software
		Design』への寄稿や、『VimConf』、『Deno
		Fest』など多数のイベント登壇あり。トヨクモ株式会社の『Thanks OSS Award
		2022』を受賞。好物は 🍣 と 🍺 と 🍜 。
	</p>
{/snippet}
