import type { Handle } from '@sveltejs/kit';
import faviconLinks from '$/assets/favicons.html?raw';

export const handle = (async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace(`%additional_head%`, faviconLinks),
	});
	return response;
}) satisfies Handle;
