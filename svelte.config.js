import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	prerender: {
		crawl: true,
		enabled: true,
		force: true,
		pages: ['*']
	},
	preprocess: [
		preprocess({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		trailingSlash: 'always',
		prerender: {
			default: true
		},
		paths: {
		    // change below to your repo name
		    base: "/hasankhadra.github.io",
		}
		// hydrate the <div id="svelte"> element in src/app.html
	}
	// kit: {
	// 	adapter: adapter()
	// }
};

export default config;
