/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'cursor': 'pulse 0.75s ease-in-out infinite'
			},
			keyframes: {
				cursor: {
				  '0%, 100%': { opacity: 1 },
				  '50%': { opacity: .1 },
				}
			  },
			  colors: {
				'container': '#23262d',
				'background': '#13151a'
			  },
			  boxShadow: {
				'primary': '0 0 1px 1px rgba(255,255,255,0.1)'
			  },
			  backgroundImage: {
				'primary': "url('./public/assets/bg.jpg')"
			  }
		},
	},
	plugins: [],
}
