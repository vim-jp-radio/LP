import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCss from 'unocss/vite';

export default defineConfig({
	plugins: [UnoCss(), sveltekit()]
});
