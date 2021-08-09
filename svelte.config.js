import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import WindiCSS from 'vite-plugin-windicss';

import abbr from 'remark-abbr';
import slug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';
import addClasses from 'rehype-add-classes';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

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

	preprocess: mdsvex({
		layout:"/src/routes/blog/blog.svelte",
		remarkPlugins: [abbr],
		rehypePlugins: [
			slug,
			[autoLinkHeadings, { behavior: 'wrap' }],
			[addClasses, { 'ul,ol': 'list' }]
		]
	})
};

export default config;
