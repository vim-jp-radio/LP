import type { PageServerLoad } from './$types';
import { buildGuestEpisodesFromFeedXml, RSS_FEED_URL } from '$lib/guests';

interface ApplePodcastEpisode {
	trackName?: string;
	trackViewUrl?: string;
}

interface ApplePodcastLookupResponse {
	results?: ApplePodcastEpisode[];
}

const YOUTUBE_PLAYLIST_FEED_URL = 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLcptmT4PuRVNm5qjf5DhzPYZenncjLWQ8';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(RSS_FEED_URL);

	if (!response.ok) {
		throw new Error(`Failed to fetch podcast feed: ${response.status}`);
	}

	const episodes = buildGuestEpisodesFromFeedXml(await response.text());
	const [applePodcastLinks, youtubeLinks] = await Promise.all([
		fetchApplePodcastLinks(fetch),
		fetchYoutubeLinks(fetch),
	]);
	const guests = new Set(episodes.flatMap(episode => episode.guests));

	return {
		episodeCount: episodes.length,
		guestCount: guests.size,
		episodes: episodes.map(episode => ({
			...episode,
			links: {
				applePodcast: applePodcastLinks.get(episode.number),
				youtube: youtubeLinks.get(episode.number),
			},
		})),
	};
};

async function fetchApplePodcastLinks(fetch: typeof globalThis.fetch): Promise<Map<number, string>> {
	const response = await fetch('https://itunes.apple.com/lookup?id=1755104750&entity=podcastEpisode&limit=200&country=JP');

	if (!response.ok) {
		return new Map();
	}

	const data = await response.json() as ApplePodcastLookupResponse;
	const links = new Map<number, string>();

	for (const episode of data.results ?? []) {
		const episodeNumber = episode.trackName?.match(/#(\d+)/)?.[1];

		if (episodeNumber != null && episode.trackViewUrl != null) {
			links.set(Number(episodeNumber), episode.trackViewUrl);
		}
	}

	return links;
}

async function fetchYoutubeLinks(fetch: typeof globalThis.fetch): Promise<Map<number, string>> {
	const response = await fetch(YOUTUBE_PLAYLIST_FEED_URL);

	if (!response.ok) {
		return new Map();
	}

	const feed = await response.text();
	const links = new Map<number, string>();

	for (const match of feed.matchAll(/<entry>[\s\S]*?<\/entry>/g)) {
		const entry = match[0];
		const title = decodeXml(entry.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
		const episodeNumber = title.match(/#(\d+)/)?.[1];
		const url = decodeXml(entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1] ?? '');

		if (episodeNumber != null && url !== '') {
			links.set(Number(episodeNumber), url);
		}
	}

	return links;
}

function decodeXml(text: string): string {
	return text
		.replaceAll('&amp;', '&')
		.replaceAll('&lt;', '<')
		.replaceAll('&gt;', '>')
		.replaceAll('&quot;', '"')
		.replaceAll('&#39;', '\'');
}
