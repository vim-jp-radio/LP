import { browser } from '$app/environment';

/**
 *
 * MediaQueryの`prefers-reduced-motion`を監視する
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data
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
		this.#mediaQuery.addEventListener('change', (event) => {
			this.#isReduced = event.matches;
		});
	}

	get isReduced() {
		return this.#isReduced;
	}
}
