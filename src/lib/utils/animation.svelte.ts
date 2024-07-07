import { browser } from '$app/environment';

/**
 * アニメーションを再起動する関数
 * style を付け直すと良い
 */
export function restartAnimation<T extends HTMLElement>(element: T): void {
	/* browser 上での実行でないなら何もしない */
	if (!browser) {
		throw new Error('This function can only be used in the browser environment.');
	}

	element.style.animationName = 'none';
	requestAnimationFrame(
		() => requestAnimationFrame(
			() => element.style.animationName = '',
		),
	);
}

/**
 * scroll を監視するClass
 */
export class ScrollXY {
	#x = $state(0);
	#y = $state(0);

	constructor() {
		if (!browser) {
			throw new Error('This class can only be used in the browser environment.');
		}

		window.addEventListener('scroll', this.#update);
	}

	#update = () => {
		this.#x = window.scrollX;
		this.#y = window.scrollY;
	};

	get x() {
		return this.#x;
	}

	get y() {
		return this.#y;
	}
}
