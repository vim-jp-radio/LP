// このfileは、favicon pluginが使うために検証ロジックを含んでいないfileです
// sveltekitから使う場合は `$lib/links` でimportしてください

/** リンク集 */
export const LINKS = {
	VimJpRadio: { url: `https://vim-jp-radio.com/`, label: `エンジニアの楽園 - vim-jp ラジオ` },
	VimJpSlack: { url: `https://vim-jp.org/docs/chat.html`, label: `vim-jp Slack` },
	AmazonMusic: { url: `https://music.amazon.co.jp/podcasts/e059ff85-b9a1-499e-9cc5-b148e5b56c18/エンジニアの楽園-vim-jp-ラジオ`, label: `Amazon Music` },
	ApplePodcast: { url: `https://podcasts.apple.com/jp/podcast/エンジニアの楽園-vim-jp-ラジオ/id1755104750`, label: `Apple Podcast` },
	Spotify: { url: `https://open.spotify.com/show/3fkxQ6g3577mog02HuXZMj?nd=1&dlsi=c2f29ebcdc1940ab`, label: `Spotify` },
	X: { url: `https://x.com/vimjpradio`, label: `X` },
	AuDee: { url: `https://audee.jp/program/show/300008578`, label: `AuDee` },
	Youtube: { url: `https://www.youtube.com/playlist?list=PLcptmT4PuRVNm5qjf5DhzPYZenncjLWQ8`, label: `Youtube` },
	Suzuri: { url: `https://suzuri.jp/vim-jp-radio`, label: `Suzuri` },
} as const satisfies Record<string, { url: string; label: string }>;

export const VIM_JP_RADIO_INFO = {
	...LINKS.VimJpRadio,
	title: `エンジニアの楽園 vim-jpラジオ`,
	titleWithTagline: `エンジニアの楽園 vim-jpラジオ | 毎週月曜配信の技術系ポッドキャスト`,
	description: `エンジニアが集まるインターネット上のコミュニティvim-jpから生まれた初の音声プログラム。vim-jpはプログラミングから子育てに至るまで無数のチャンネルを抱えたコミュニティです。そんなコミュニティの面白さを生かして、各分野の様々なゲストを交えながら楽しく雑談していきます。`,
} as const satisfies Record<string, string>;

/** リスナーの声で表示する X ID のリスト。 */
export const LISTENERS_TWEET_IDS = [
	'1810659027053154344', // @yoosee
	'1810553887545532868', // @engineer_tetta
	'1810159818499567970', // @Matthew238
	'1810160793507483680', // @mattn_jp
	'1811006835534811272', // @ken_c_lo
	'1810492472386257249', // @the_uhooi
	'1810824539372409032', // @hirataq__
] as const satisfies string[];
