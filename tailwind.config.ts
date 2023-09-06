import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        spotify: '#5FFF97',
      },
    },
    fontSize: {
      sm: ['14px', 'normal'],
      base: ['18px', 'normal'],
      lg: ['20px', 'normal'],
      xl: ['26px', 'normal'],
    },
  },
  plugins: [],
};
export default config;
