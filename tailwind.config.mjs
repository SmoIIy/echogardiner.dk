/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {		
			colors: {
			'main-white': '#F2F2F2',
			'main-dark-grey': '#2D2E28',
			'light-brown': '#AC651A',
			'dark-brown': '#663B1E',
			'dark-blue': '#212830'
		},},

	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
}
