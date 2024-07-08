import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetMini,
	presetUno,
	transformerDirectives,
} from 'unocss';
import { animatedUno } from 'animated-unocss';

export default defineConfig({
	presets: [
		presetUno(), // defaultの設定。
		presetAttributify({ prefix: 'uno-', prefixedOnly: true }), // class属性ではなく、属性地に直接書く設定。https://unocss.dev/presets/attributify
		presetMini(), // Tailwind互換の最小限の設定を含む。 Aspect ration とか。 https://unocss.dev/presets/mini
		presetIcons({ autoInstall: true }), // Iconを使うための設定。autoInstallも設定している。https://unocss.dev/presets/icons
		animatedUno(), // アニメーションを使うための設定。https://animated-unocss.elonehoo.me/
	],
	transformers: [
		transformerDirectives(), // v-bindやv-modelなどのVueのディレクティブを使うための設定。https://unocss.dev/presets/directives
	],
	theme: {
		colors: {
			'LP-blue': 'var(--LP-blue)',
			'LP-pink': 'var(--LP-pink)',
			'LP-yellow': 'var(--LP-yellow)',
			'LP-gray': 'var(--LP-gray)',
			'LP-backgroud': 'var(--LP-backgroud)',
			'LP-text-color': 'var(--LP-text-color)',
		},
		breakpoints: {
			tiny: '320px',
		},
	},
	shortcuts: {
		text: 'text-base text-LP-text-color',
		button: 'color-LP-yellow border-solid border-2 border-[var(--LP-yellow)] rounded px-4 py-2 hover:bg-[var(--LP-yellow)] hover:color-[var(--LP-backgroud)] w-fit',
	},
});
