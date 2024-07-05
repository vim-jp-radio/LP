import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetMini,
	presetUno,
	transformerDirectives,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(), // defaultの設定。
		presetAttributify({ prefix: 'uno-', prefixedOnly: true }), // class属性ではなく、属性地に直接書く設定。https://unocss.dev/presets/attributify
		presetMini(), // Tailwind互換の最小限の設定を含む。 Aspect ration とか。 https://unocss.dev/presets/mini
		presetIcons({ autoInstall: true }), // Iconを使うための設定。autoInstallも設定している。https://unocss.dev/presets/icons
	],
	transformers: [
		transformerDirectives(), // v-bindやv-modelなどのVueのディレクティブを使うための設定。https://unocss.dev/presets/directives
	],
	theme: {
		colors: {
			'LP-blue': '#1ECFFF',
			'LP-pink': '#FF00FF',
			'LP-yellow': '#FFFFB3',
			'LP-gray': '#909296',
			'LP-backgroud': '#010A01',
			'LP-foreground': '#F8F9FA',
		},
	},
});
