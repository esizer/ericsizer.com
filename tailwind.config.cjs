/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			borderWidth: {
				12: '12px',
				24: '24px'
			},
			transitionTimingFunction: {
				'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		},
	},
	plugins: [],
}
