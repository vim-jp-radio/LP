import type { PresetUnoTheme } from 'unocss';
import { deepMerge } from '@std/collections/deep-merge';
import { isDevelopment } from 'std-env';
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export const theme = {
	colors: {
		LP: {
			blue: '#1ecfff',
			pink: '#ff00ff',
			yellow: '#ffffb3',
			gray: '#909296',
			darkGray: '#5C5F66',
			background: '#010a01',
			textColor: '#f8f9fa',
		},
	},
	breakpoints: {
		tiny: '375px',
	},
} as const satisfies PresetUnoTheme;

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify({ prefix: 'uno-', prefixedOnly: true }), // class属性ではなく、属性値に直接書く設定。https://unocss.dev/presets/attributify
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
	// `extendTheme` を用いないと deep-merge されない https://github.com/unocss/unocss/issues/3038#issuecomment-2287766398
	extendTheme: _theme => deepMerge(_theme, theme),
	rules: [
		['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
		['min-h-safe', { 'min-height': 'calc(100% + env(safe-area-inset-top))' }],
	],
	shortcuts: {
		text: 'text-base text-LP-textColor',
		button: 'color-LP-yellow border-(solid 2 LP-yellow) rounded px-4 py-2 hover:(bg-LP-yellow color-LP-background) w-fit flex',
	},
});
