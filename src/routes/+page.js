import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	console.log('redirecting to /blog');
	throw redirect(307, '/blog');
}


