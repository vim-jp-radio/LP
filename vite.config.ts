import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import UnoCss from 'unocss/vite';
import { faviconPlugin } from './plugins/favicons';

export default defineConfig({
	plugins: [faviconPlugin, enhancedImages(), UnoCss(), sveltekit()],
});
