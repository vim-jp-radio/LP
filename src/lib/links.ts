import { ensureURL } from './utils/url';
import { building } from '$app/environment';

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
} as const satisfies Record<string, { url: string; label: string }>;

/* ビルド時にURLをチェックする */
if (building) {
	for (const key in LINKS) {
		const { url } = LINKS[key as keyof typeof LINKS];
		ensureURL(url);
	}
}
