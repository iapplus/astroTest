// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel';

export default defineConfig({
    output: 'server',
    adapter: vercel(),
    integrations: [
        starlight({
            title: 'WELOCK',
            defaultLocale: 'root',
            customCss: [
                './src/styles/homepage.css',
                './src/styles/colors.css',
            ],
            pagefind: false,
            components: {
                Header: './src/components/CustomHeader.astro',
                // Footer: './src/components/Footer.astro',
            },
            logo: {
                src: './public/images/logo.webp',
                alt: 'WELOCK',
                replacesTitle: true,
            },
            social: [],
            locales: {
                root: {label: 'English', lang: 'en'},
                ja: {label: '日本語', lang: 'ja'},
                de: {label: 'Deutsch', lang: 'de'},
                es: {label: 'Español', lang: 'es'},
                fr: {label: 'Français', lang: 'fr'},
                it: {label: 'Italiano', lang: 'it'},
            },

            sidebar: [
                {
                    label: 'Wi-Fi Gateway',
                    collapsed: true,
                    translations: {
                        en: 'Wi-Fi Gateway',
                        ja: 'Wi-Fiゲートウェイ',
                        de: 'Wi-Fi-Gateway',
                        es: 'Puerta de enlace Wi-Fi',
                        fr: 'Passerelle Wi-Fi',
                        it: 'Gateway Wi-Fi',
                    },
                    autogenerate: {directory: 'wifi-gateway'},
                },
                {
                    label: 'Fingerprint Door Lock',
                    collapsed: true,
                    translations: {
                        en: 'Fingerprint Door Lock',
                        ja: 'Wi-Fiゲートウェイ',
                        de: 'Wi-Fi-Gateway',
                        es: 'Puerta de enlace Wi-Fi',
                        fr: 'Passerelle Wi-Fi',
                        it: 'Gateway Wi-Fi',
                    },
                    autogenerate: {directory: 'fingerprint-door-lock'},
                },
            ],
        }),
        vue(),
    ],
});
