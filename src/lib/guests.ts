export const RSS_FEED_URL = 'https://feeds.megaphone.fm/TFM3978755021';

export interface Episode {
	number: number;
	title: string;
	date: string;
	guests: string[];
	links?: {
		applePodcast?: string;
		youtube?: string;
	};
}

interface FeedEpisode extends Omit<Episode, 'guests'> {
	description: string;
}

const EXCLUDED_NAMES = new Set(['tomoya', 'ありすえ']);
const KNOWN_GUEST_NAMES = [
	'naota',
	'ryoppippi',
	'maguro',
	'市川達大',
	'Kyohei',
	'稲尾',
	'mattn',
	'あおい',
	'mozumasu',
	'寺田純路',
	'藤巻俊一',
	'ゴリラ',
	'たけてぃ',
	'aizawa',
	'Sosuke Suzuki',
	'Piro',
	'ちっくん',
	'giginet',
	'西山信行',
	'丸田康司',
	'edvakf',
	'kyuns',
	'田中潤',
	't-wada',
	'tadsan',
	'Dr.tani',
	'yuys13',
	'kat0h',
	'ujihisa',
	'mopp',
	'vaaaaanquish',
	'mizchi',
	'k-takata',
	'thinca',
	'uzulla',
	'yusukebe',
	'Shougo',
	'KoRoN',
] as const;

export function buildGuestEpisodesFromFeedXml(xml: string): Episode[] {
	return parseFeedEpisodes(xml)
		.map(episode => ({
			number: episode.number,
			title: episode.title,
			date: episode.date,
			guests: extractGuestNames(episode),
		}))
		.filter(episode => episode.guests.length > 0)
		.sort((a, b) => b.number - a.number);
}

function parseFeedEpisodes(xml: string): FeedEpisode[] {
	return [...xml.matchAll(/<item>[\s\S]*?<\/item>/g)]
		.map(match => match[0])
		.map((item) => {
			const title = normalizeText(getTagText(item, 'title'));
			const episodeNumber = title.match(/#(\d+)/)?.[1];
			const pubDate = getTagText(item, 'pubDate');

			return {
				number: episodeNumber == null ? 0 : Number(episodeNumber),
				title: title.match(/【(.+?)】/)?.[1] ?? title.replace(/エンジニアの楽園 vim-jp ラジオ #\d+$/, '').trim(),
				date: new Date(pubDate).toISOString().slice(0, 10),
				description: normalizeText(getTagText(item, 'description')),
			};
		})
		.filter(episode => episode.number > 0);
}

function getTagText(xml: string, tag: string): string {
	return decodeXml(xml.match(new RegExp(`<${tag}(?: [^>]*)?>([\\s\\S]*?)<\\/${tag}>`))?.[1] ?? '');
}

function extractGuestNames(episode: FeedEpisode): string[] {
	const intro = `${episode.title}。${getLeadText(episode.description)}`;

	if (intro.includes('ゲストなし')) {
		return [];
	}

	const names = [...intro.matchAll(/さん/g)]
		.map(match => cleanGuestName(intro.slice(0, match.index)))
		.map(canonicalizeGuestName)
		.filter(name => name.length > 0 && !EXCLUDED_NAMES.has(name));

	return [...new Set(names)];
}

function getLeadText(text: string): string {
	return getIntroText(text).split(/今回の(?:トーク)?テーマ|そして、エンディング/)[0];
}

function getIntroText(text: string): string {
	return text
		.split(/〜〜〜|～～～|【vim-jp ラジオ インフォメーション】/)[0]
		.replace(/エンジニアコミュニティ「vim-jp」のラジオ版としてスタートした「エンジニアの楽園 vim-jp ラジオ」。/g, '')
		.replace(/WEBコミュニティ「vim-jp」のラジオ版としてスタートした「エンジニアの楽園 vim-jp ラジオ」。/g, '');
}

function cleanGuestName(textBeforeSan: string): string {
	const sentence = textBeforeSan.slice(Math.max(
		textBeforeSan.lastIndexOf('。'),
		textBeforeSan.lastIndexOf('！'),
		textBeforeSan.lastIndexOf('？'),
		textBeforeSan.lastIndexOf('\n'),
	) + 1);

	return sentence
		.replace(/^.*さん[と・、]/, '')
		.split('、')
		.at(-1)!
		.replace(/^.*(?:の|こと)/, '')
		.replace(/^(?:そして|同じく|初の女性ゲスト|番組初のゲスト|ゲスト|「|『)+/, '')
		.replace(/[「」『』（）()]/g, '')
		.trim();
}

function canonicalizeGuestName(name: string): string {
	const normalizedName = name.replace(/^◯/, '').trim();
	const candidates = KNOWN_GUEST_NAMES
		.filter(guestName => normalizedName.includes(guestName) || (normalizedName.length >= 2 && guestName.startsWith(normalizedName)))
		.sort((a, b) => b.length - a.length);

	if (candidates[0] != null) {
		return candidates[0];
	}

	return isLikelyGuestName(normalizedName) ? normalizedName : '';
}

function isLikelyGuestName(name: string): boolean {
	const nameParts = name.split(' ');

	return name.length <= 24
		&& nameParts.length <= 2
		&& nameParts.every(part => /^[\p{Letter}\p{Number}_.-]+$/u.test(part))
		&& !/今回|テーマ|について|から|まで|して|され|だった|いる|たく|もちろん/.test(name);
}

function normalizeText(text: string): string {
	return text
		.replace(/<!\[CDATA\[|\]\]>/g, '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function decodeXml(text: string): string {
	return text
		.replaceAll('&amp;', '&')
		.replaceAll('&lt;', '<')
		.replaceAll('&gt;', '>')
		.replaceAll('&quot;', '"')
		.replaceAll('&apos;', '\'');
}
