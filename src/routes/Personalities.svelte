<script lang='ts'>
	import Personality from './Personality.svelte';
	import { Heading } from '$/lib/Heading';

	// @ts-ignore
	import tomoyaImg from '$/assets/avatar/tomoya.jpg?enhanced';

	// @ts-ignore
	import lambdalisueImg from '$/assets/avatar/lambdalisue.png?enhanced';
</script>

<section>
	<Heading title='パーソナリティ' />
	<div uno-flex='~ col gap-2rem'>
		<Personality
			name='tomoya'
			ghLink='https://github.com/tomoya'
			homeLink='https://blog.tomoya.dev/'
			imgSrc={tomoyaImg}
			xLink='https://x.com/tomoyaton'
		>
			<!-- 文字列を渡すだけだとBudouXが処理できない（コードにあるtagをpreprocessしなければならない都合）ので、pタグで囲む -->
			<p data-budoux uno-text>
				1983年生まれ。起業家、及びフロントエンドからバックエンドまで幅広くカバーする Web エンジニア。
				2010年に起業。2015年にイグジット。
				2017年にフォーコード株式会社を設立して、現在は日本で一番多くの Vimmer と一緒に仕事する Emacser として、大企業システムを作ったりしています。
				著書に『Atom実践入門』、『［改訂新版］Emacs実践入門』、『CircleCI実践入門』（共に技術評論社）がある。
			</p>
		</Personality>

		<Personality
			name='ありすえ'
			ghLink='https://github.com/lambdalisue'
			imgSrc={lambdalisueImg}
			xLink='https://twitter.com/lambdalisue'
		>
			<!-- 文字列を渡すだけだとBudouXが処理できない（コードにあるtagをpreprocessしなければならない都合）ので、pタグで囲む -->
			<p data-budoux uno-text>
				Vim/Neovim のプラグイン開発用エコシステム Denops の作者。
				小学校の時に「ゲームを作ってみたい」と思ったことがきっかけでプログラミングにハマる。
				私生活のほとんどの時間をプログラミングに費やした。『Software Design』への寄稿や、『VimConf』、『Deno Fest』など多数のイベント登壇あり。トヨクモ株式会社の『Thanks OSS Award 2022』を受賞。
				好物は 🍣 と 🍺 と 🍜 。
			</p>
		</Personality>
	</div>
</section>
