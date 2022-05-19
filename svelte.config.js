import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = process.env.NODE_ENV === 'development';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
        paths: {
            // change below to your repo name
            base: dev ? "" : "/website-boldgeo",
			assets: dev ? "" : "https://boldgeo.github.io/website-boldgeo"
        }
    }
};

export default config;