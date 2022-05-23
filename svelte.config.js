import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static"; 
const dev = process.env.NODE_ENV === 'development';


console.log('dev??',dev);


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: null,
			precompress: false
        }),
		prerender:{
			default: true
		},
		paths: {
			// base: dev ? '' : '/website-boldgeo',
		},
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
