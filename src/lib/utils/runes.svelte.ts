import { on } from 'svelte/events';
import { browser } from '$app/environment';

/**
 *
 * MediaQueryの`prefers-reduced-motion`を監視する
 * @see https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-reduced-motion
 *
 * @example
 * ```svelte
 * <script>
 *   import { PrefersReducedMotion } from '$lib/utils/runes.svelte.js';
 *   const prefersReducedMotion = new PrefersReducedMotion();
 *
 *   console.log($prefersReducedMotion.isReduced); // reduced motionの設定が変わると更新される
 * </script>
 * ```
 *
 */
export class PrefersReducedMotion {
	#isReduced = $state(false);
	#mediaQuery: MediaQueryList | undefined = undefined;

	constructor() {
		if (!browser) {
			return;
		}

		this.#mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		this.#isReduced = this.#mediaQuery.matches;
		on(this.#mediaQuery, 'change', (_event) => {
			const event = _event as MediaQueryListEvent;
			this.#isReduced = event.matches;
		});
	}

	get isReduced() {
		return this.#isReduced;
	}
}
