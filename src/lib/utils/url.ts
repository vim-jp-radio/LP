import { building, dev } from '$app/environment';

declare const tag: unique symbol;

/** URLとしてValidだと保証されたことを示す型 */
type URLString<T extends Readonly<string>> = T & { [tag]: 'URLString' };

/**
 * URLとしてValidだと保証されたことを示す
 * 開発時とビルド時のみチェックする
 */
export function ensureURL<const T extends string>(url: T): URLString<T> {
	type U = URLString<T>;

	/* 開発時とビルド時以外はチェックしない */
	if (!(dev || building)) {
		return url as U;
	}

	if (typeof url !== 'string') {
		throw new TypeError(`URL must be string: ${url as any}`);
	}

	/* URL として正しいかどうかをチェックする */
	if (!URL.canParse(url)) {
		throw new Error(`Invalid URL: ${url}`);
	}

	/* https で始まるかどうかをチェックする */
	if (!url.startsWith('https://')) {
		throw new Error(`URL must be HTTPS: ${url}`);
	}

	return url as U;
}
