import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetMini,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(), // defaultの設定。
		presetAttributify({ prefix: 'uno-', prefixedOnly: true }), // class属性ではなく、属性地に直接書く設定。https://unocss.dev/presets/attributify
		presetMini(), // Tailwind互換の最小限の設定を含む。 Aspect ration とか。 https://unocss.dev/presets/mini
		presetIcons({ autoInstall: true }), // Iconを使うための設定。autoInstallも設定している。https://unocss.dev/presets/icons
	],
	transformers: [
		transformerDirectives(), // @apply等のディレクティブを使うための設定。https://unocss.dev/presets/directives
		transformerVariantGroup(), // hoverなど `:` で始まるクラスをまとめる設定。https://unocss.dev/presets/variant-group
	],
	theme: {
		/**
		 * color はそれぞれ CSS Variables で設定している。
		 * それぞれの色の設定は './src/main.css' に記述している。
		 */
		colors: {
			'LP-blue': '#1ecfff',
			'LP-pink': '#ff00ff',
			'LP-yellow': '#ffffb3',
			'LP-gray': '#909296',
			'LP-backgroud': '#010a01',
			'LP-text-color': '#f8f9fa',
		},
		breakpoints: {
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
