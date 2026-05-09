import { prerender } from '$app/server';
import { buildGuestEpisodesFromFeedXml, RSS_FEED_URL } from '$lib/guests';

interface ApplePodcastEpisode {
	trackName?: string;
	trackViewUrl?: string;
}

interface ApplePodcastLookupResponse {
	results?: ApplePodcastEpisode[];
}

const YOUTUBE_PLAYLIST_ID = 'PLcptmT4PuRVNm5qjf5DhzPYZenncjLWQ8';
const YOUTUBE_PLAYLIST_URL = `https://www.youtube.com/playlist?list=${YOUTUBE_PLAYLIST_ID}`;

export const getGuestEpisodes = prerender(async () => {
	const response = await fetch(RSS_FEED_URL);

	if (!response.ok) {
		throw new Error(`Failed to fetch podcast feed: ${response.status}`);
	}

	const episodes = buildGuestEpisodesFromFeedXml(await response.text());
	const [applePodcastLinks, youtubeLinks] = await Promise.all([
		fetchApplePodcastLinks(),
		fetchYoutubeLinks(),
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
});

async function fetchApplePodcastLinks(): Promise<Map<number, string>> {
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

async function fetchYoutubeLinks(): Promise<Map<number, string>> {
	const response = await fetch(YOUTUBE_PLAYLIST_URL);

	if (!response.ok) {
		return new Map();
	}

	return parseYoutubePlaylistLinks(await response.text());
}

function parseYoutubePlaylistLinks(html: string): Map<number, string> {
	const links = new Map<number, string>();

	for (const match of html.matchAll(/"playlistVideoRenderer":\{"videoId":"([^"]+)"[\s\S]*?"title":\{"runs":\[\{"text":"((?:\\.|[^"\\])*)"\}\][\s\S]*?"index":\{"simpleText":"\d+"\}/g)) {
		const [, videoId, encodedTitle] = match;
		const title = decodeJsonString(encodedTitle);
		const episodeNumber = title.match(/#(\d+)/)?.[1];

		if (episodeNumber != null) {
			links.set(Number(episodeNumber), `https://www.youtube.com/watch?v=${videoId}&list=${YOUTUBE_PLAYLIST_ID}`);
		}
	}

	return links;
}

function decodeJsonString(text: string): string {
	try {
		return JSON.parse(`"${text}"`) as string;
	}
	catch {
		return text;
	}
}
