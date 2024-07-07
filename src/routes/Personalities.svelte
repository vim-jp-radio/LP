<script lang='ts'>
	import Heading from '$/lib/Heading.svelte';
	import * as Logo from '$lib/Logo';
</script>

<div>
	<Heading title='パーソナリティ' />
	<div
		uno-flex
		uno-flex-col
		uno-flex-gap-2rem
	>
		<div
			uno-flex
			uno-flex-col
			uno-flex-gap-1rem
		>
			<div
				uno-flex
				uno-flex-gap-1rem
				uno-items-center
			>
				<h3
					pl-1rem
					uno-text-3xl
					uno-text-LP-blue
				>tomoya</h3>
				<Logo.X
					class='h-auto w-1.5rem'
					link='https://x.com/tomoyaton'
				/>
				<Logo.GitHub
					class='h-auto w-1.5rem'
					link='https://github.com/tomoya'
				/>
				<Logo.Home
					class='h-auto w-1.5rem'
					link='https://blog.tomoya.dev/'
				/>
			</div>
			<div>
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<enhanced:img
					class='float-right ml-10px h-auto w-100px'
					alt='tomoya'
					src='$/assets/avatar/tomoya.jpg?enhanced'
				/>
				<p uno-text>
					1983年生まれ。起業家、及びフロントエンドからバックエンドまで幅広くカバーするWebエンジニア。
					2010年に起業。2015年にイグジット。2017年にフォーコード株式会社を設立して、現在は日本で一番多くのVimmerと一緒にするEmacserとして、大企業システムを作ったりしています。著書に『Atom実践入門』、『［改訂新版］Emacs実践入門』、『CircleCI実践入門』（共に技術評論社）がある。
				</p>
			</div>
		</div>
		<div
			uno-flex
			uno-flex-col
			uno-flex-gap-1rem
		>
			<div
				uno-flex
				uno-flex-gap-1rem
				uno-items-center
			>
				<h3
					pl-1rem
					uno-text-3xl
					uno-text-LP-pink
				>ありすえ</h3>
				<Logo.X
					class='h-auto w-1.5rem'
					link='https://twitter.com/lambdalisue'
				/>
				<Logo.GitHub
					class='h-auto w-1.5rem'
					link='https://github.com/lambdalisue'
				/>
			</div>
			<div>
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<enhanced:img
					class='float-right ml-10px h-auto w-100px'
					alt='ありすえ'
					src='$/assets/avatar/lambdalisue.png?enhanced'
				/>
				<p uno-text>
					Vim/Neovimのプラグイン開発用エコシステムDenopsの作者。
					小学校の時に「ゲームを作ってみたい」と思ったことがきっかけでプログラミングにハマる。
					私生活のほとんどの時間をプログラミングに費やした。『Software
					Design』への寄稿や、『VimConf』、『Deno
					Fest』など多数のイベント登壇あり。トヨクモ株式会社の『Thanks OSS Award
					2022』を受賞。好物は 🍣 と 🍺 と 🍜 。
				</p>
			</div>
		</div>
	</div>
</div>
