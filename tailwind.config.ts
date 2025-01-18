import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                highlight: 'var(--highlight)',
                dim: 'var(--dim)',
                accent: 'var(--accent)',
            },
            fontFamily: {
                sans: ['var(--font-space-grotesk)', 'sans-serif'],
                geist: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
        },
    },
    plugins: [],
} satisfies Config;
