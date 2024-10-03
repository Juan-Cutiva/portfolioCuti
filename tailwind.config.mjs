/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '550px'
			},
			fontFamily: {
				Rubik: ['Rubik Variable', 'sans-serif']
			},
			colors: {
				White: '#fafafa',
				Black: '#2f074d'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
