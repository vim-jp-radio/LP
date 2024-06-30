import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetMini,
	presetUno,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(), // defaultの設定。
		presetAttributify(), // class属性ではなく、属性地に直接書く設定。https://unocss.dev/presets/attributify
		presetMini(), // Tailwind互換の最小限の設定を含む。 Aspect ration とか。 https://unocss.dev/presets/mini
		presetIcons({ autoInstall: true }), // Iconを使うための設定。autoInstallも設定している。https://unocss.dev/presets/icons
	],
});
