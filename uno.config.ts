import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetMini,
	presetUno,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetMini(),
		presetIcons({ autoInstall: true }),
	],
});
