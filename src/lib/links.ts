import { ensureURL } from './utils/url';
import { building } from '$app/environment';

/** リンク集 */
export const LINKS = {
	VimJpRadio: `https://vim-jp-radio.com/`,
	AmazonMusic: `https://music.amazon.co.jp/podcasts/e059ff85-b9a1-499e-9cc5-b148e5b56c18/エンジニアの楽園-vim-jp-ラジオ`,
	ApplePodcast: `https://podcasts.apple.com/jp/podcast/エンジニアの楽園-vim-jp-ラジオ/id1755104750`,
	Spotify: `https://open.spotify.com/show/3fkxQ6g3577mog02HuXZMj?nd=1&dlsi=c2f29ebcdc1940ab`,
	X: `https://x.com/vimjpradio`,
	AuDee: `https://audee.jp/program/show/300008578`,
	Youtube: `https://www.youtube.com/playlist?list=PLcptmT4PuRVNm5qjf5DhzPYZenncjLWQ8`,
} as const;

/* ビルド時にURLをチェックする */
if (building) {
	for (const key in LINKS) {
		const link = LINKS[key as keyof typeof LINKS];
		ensureURL(link);
	}
}
