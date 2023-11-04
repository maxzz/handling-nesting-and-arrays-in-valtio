import twColors from 'tailwindcss/colors';
import twTheme from 'tailwindcss/defaultTheme';
import { shadcnPlugin } from './tailwind/tailwind-plugin-shadcn';
//const debugScreens = require('./tailwind/tailwind-plugin-debug-screens');
//const debugScreens = require('tailwindcss-plugin-debug-screens');
import debugScreens from 'tailwindcss-plugin-debug-screens';

module.exports = {
    content: ['./index.html', './src/**/*.{tsx,ts,js,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            // screens: {
            //     smallest: '501px',
            // },
            // screens: {
            //     xs: '420px',
            //     sm: '640px',
            //     md: '768px',
            //     lg: '1024px',
            //     xl: '1350px',
            //     '2xl': '1536px',
            //     '3xl': '1920px',
            // },

            colors: {
                // primary: {
                //     100: twColors.blue['500'],
                // },
                primary: twColors.slate,
                title: '#06133e',
                url: twColors.blue['500'],
            },
            fontFamily: {
                header: ['Merriweather', ...twTheme.fontFamily.sans],
                orgiginal: [...twTheme.fontFamily.sans],
            },
            backgroundImage: () => ({
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
                'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
                'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
                'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
            }),
        },
    },
    plugins: [
        require('./tailwind/tailwind-plugin-data-state'),
        require('./tailwind/tailwind-plugin-colors-bridge')({ prefix: '--tm-', groupName: 'primary' }),
        require('./tailwind/tailwind-plugin-all-colors'),
        require('./tailwind/tailwnd-plugin-debug-styles'),
        require('./tailwind/tailwind-plugin-overflow-overlay'),
        debugScreens,
        require('@tailwindcss/forms')({ strategy: 'class' }),
        shadcnPlugin,
    ],
};
