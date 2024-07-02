import { browser } from '$app/environment';

const KONAMI_CODES = [
	'ArrowUp',
	'ArrowUp',
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
	'b',
	'a',
	'Enter',
] as const;

type KonamiCode = typeof KONAMI_CODES[number];

function isKonamiCode(code: string): code is KonamiCode {
	return typeof code === 'string' && KONAMI_CODES.includes(code as KonamiCode);
}

function arrayEqual(a: readonly unknown[], b: readonly unknown[]): boolean {
	return a.length === b.length && a.every((v, i) => v === b[i]);
}

export class Konami {
	#combo: KonamiCode[] = $state([]);
	#time = Date.now();

	/**
	 * @param timeout milliseconds to wait between key presses
	 */
	constructor(timeout = 2000) {
		if (!browser) {
			return;
		}

		window.addEventListener(
			'keyup',
			({ key }) => {
				const now = Date.now();

				if (!isKonamiCode(key)) {
					this._log('combo has reset because of invalid key');
					this.reset();
					return;
				}

				if (now - this.#time > timeout) {
					this._log('combo has reset because of timeout');
					this.reset();
				}

				this.#combo.push(key);
				this.#time = now;
			},
		);
	}

	get activated() {
		return arrayEqual(this.#combo, KONAMI_CODES);
	}

	get combo() {
		return this.#combo;
	}

	reset() {
		this.#combo = [];
	}

	_log(...args: unknown[]) {
		console.info(...args); // eslint-disable-line no-console
	}
}
