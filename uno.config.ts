import { isDevelopment } from 'std-env';
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(), // defaultの設定。
		presetAttributify({ prefix: 'uno-', prefixedOnly: true }), // class属性ではなく、属性地に直接書く設定。https://unocss.dev/presets/attributify
		presetIcons({ autoInstall: isDevelopment }), // Iconを使うための設定。autoInstallも設定している。https://unocss.dev/presets/icons
	],
	transformers: [
		transformerDirectives(), // @apply等のディレクティブを使うための設定。https://unocss.dev/presets/directives
		transformerVariantGroup(), // hoverなど `:` で始まるクラスをまとめる設定。https://unocss.dev/presets/variant-group
	],
	content: {
		pipeline: {
			exclude: [
				/sveltekit-tweet/,
			],
		},
	},
	theme: {
		colors: {
			'LP-blue': '#1ecfff',
			'LP-pink': '#ff00ff',
			'LP-yellow': '#ffffb3',
			'LP-gray': '#909296',
			'LP-dark-gray': '#5C5F66',
			'LP-backgroud': '#010a01',
			'LP-text-color': '#f8f9fa',
		},
		breakpoints: {
			...presetUno()?.theme?.breakpoints ?? {}, // https://github.com/unocss/unocss/issues/3038
			tiny: '375px',
		},
	},
	rules: [
		['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
		['min-h-safe', { 'min-height': 'calc(100% + env(safe-area-inset-top))' }],
	],
	shortcuts: {
		text: 'text-base text-LP-text-color',
		button: 'color-LP-yellow border-(solid 2 LP-yellow) rounded px-4 py-2 hover:(bg-LP-yellow color-LP-backgroud) w-fit flex',
	},
});
