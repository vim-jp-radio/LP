import { on } from 'svelte/events';
import { browser } from '$app/environment';

/** Konami コマンド */
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
] as const;

type KonamiCode = typeof KONAMI_CODES[number];

/** キーが Konami コマンドに含まれるか判定 */
function isKonamiCode(code: string): code is KonamiCode {
	return typeof code === 'string' && KONAMI_CODES.includes(code as KonamiCode);
}

/** 配列が等しいか判定 */
function arrayEqual(a: readonly unknown[], b: readonly unknown[]): boolean {
	return a.length === b.length && a.every((v, i) => v === b[i]);
}

/*
 * EASTER_EGG🐰🥚: Konami コマンドを検知するクラス
 * ページ上でキーが入力されると記録し、Konami コマンドが入力されたと判定されたら `activated` が `true` になる
 */
export class Konami {
	#combo: KonamiCode[] = $state([]);
	#time = Date.now();

	/**
	 * @param timeout milliseconds to wait between key presses
	 */
	constructor(timeout = 2000) {
		/** サーバーサイドでは動作しない */
		if (!browser) {
			return;
		}

		on(window, 'keyup', (_event) => {
			const { key } = _event as KeyboardEvent;
			const now = Date.now();

			/** 有効なキーが入力されていない場合はコンボをリセット */
			if (!isKonamiCode(key)) {
				this._log('combo has reset because of invalid key');
				this.reset();
				return;
			}

			/** 入力と入力間の時間がタイムアウトを超えた場合はコンボをリセット */
			if (now - this.#time > timeout) {
				this._log('combo has reset because of timeout');
				this.reset();
			}

			/** コンボにキーを追加 */
			this.#combo.push(key);
			this.#time = now;
		});
	}

	/** Konami コマンドが入力されたかどうか */
	get activated() {
		return arrayEqual(this.#combo, KONAMI_CODES);
	}

	/** 現在入力されたコマンド */
	get combo() {
		return this.#combo;
	}

	/** コマンドをリセット */
	reset() {
		this.#combo = [];
	}

	/**
	 * ログを出力
	 * @internal
	 */
	_log(...args: unknown[]) {
		console.info(...args); // eslint-disable-line no-console
	}
}
