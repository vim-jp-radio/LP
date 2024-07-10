import { sequence } from '@sveltejs/kit/hooks';
import { meta } from './handles/meta';
import { redirects } from './handles/redirects';
import { dev } from '$app/environment';

/** 最終的な hooks */
export const handle = sequence(
	...[
		meta, // head に favicon を追加する
		dev ? await redirects() : [], // `_redirects` を元にリダイレクトを行う (dev 時のみ)
	].flat(),
);
