# Personal website - mikkelam.com

My personal website/blog. Written with svelte-kit. I use mdsvex to write blogposts. Hosting is done with github pages as svelte-kit can produce static assets that can be directly read.

# Running

I uses `pnpm` as it's very fast so I have the lockfile with `pnpm`.

To run in dev mode: `pnpm run dev`. This will start a live-reload local webserver

# Building static web app

`pnpm run build`

# Deploying

I use the package `gh-pages` to deploy to the `gh-pages` branch.

`pnpm run publish` will accomplish that.
