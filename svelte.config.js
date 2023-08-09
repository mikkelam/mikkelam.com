import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';
import abbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';
import addClasses from 'rehype-add-classes';



export default {
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: { post: "/src/lib/PostLayout.svelte" },
			remarkPlugins: [abbr],
			rehypePlugins: [
				rehypeSlug,
				[autoLinkHeadings, { behavior: 'wrap' }],
				[addClasses, { 'ul,ol': 'list' }]
			]
		})
	]
};
