/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				"1/5": "1r 5fr"
			},
			colors: {
				theme: {
					50: "hsl(var(--theme-50))",
					100: "hsl(var(--theme-100))",
					200: "hsl(var(--theme-200))",
					300: "hsl(var(--theme-300))",
					400: "hsl(var(--theme-400))",
					500: "hsl(var(--theme-500))",
					600: "hsl(var(--theme-600))",
					700: "hsl(var(--theme-700))",
					800: "hsl(var(--theme-800))",
					900: "hsl(var(--theme-900))",
				},
			}
		},
	},
	plugins: [],
}

