import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from '@sveltejs/adapter-static';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			plugins: [WindiCSS.default()]
		}),
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
