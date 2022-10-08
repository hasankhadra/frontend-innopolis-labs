import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
        adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
        paths: {
            // change below to your repo name
            base: "",
        }
        // hydrate the <iv id="svelte"> element in src/app.html
    }
	// kit: {
	// 	adapter: adapter()
	// }
};

export default config;
