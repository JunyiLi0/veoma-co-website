import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#1B2A41',
        'muted-gold': '#C5A065',
        'off-white': '#F9F9F7',
        'slate-grey': '#6B7280',
        'sage-green': '#4A7C59',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      aspectRatio: {
        'product': '3/4',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
}

export default config
