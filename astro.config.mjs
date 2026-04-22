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
                    collapsed: false,
                    translations: {
                        en: 'Wi-Fi Gateway',
                        ja: 'Wi-Fiゲートウェイ',
                        de: 'Wi-Fi-Gateway',
                        es: 'Puerta de enlace Wi-Fi',
                        fr: 'Passerelle Wi-Fi',
                        it: 'Gateway Wi-Fi',
                    },
                    items: [
                        {
                            label: 'FAQ',
                            translations: {
                                en: 'FAQ',
                                ja: 'FAQ',
                                de: 'FAQ',
                                es: 'FAQ',
                                fr: 'FAQ',
                                it: 'FAQ',
                            },
                            autogenerate: {directory: 'wifi-gateway/FAQ'},
                        },
                        {
                            label: 'How To Install',
                            translations: {
                                en: 'How To Install',
                                ja: '設置方法',
                                de: 'Installation',
                                es: 'Cómo instalar',
                                fr: 'Comment installer',
                                it: 'Come installare',
                            },
                            autogenerate: {directory: 'wifi-gateway/How To Install'},
                        },
                        {
                            label: 'Installation Requirements',
                            translations: {
                                en: 'Installation Requirements',
                                ja: '設置要件',
                                de: 'Anforderungen',
                                es: 'Requisitos de instalación',
                                fr: "Exigences d'installation",
                                it: 'Requisiti di installazione',
                            },
                            autogenerate: {directory: 'wifi-gateway/Installation Requirements'},
                        },
                        {
                            label: 'Troubleshooting',
                            translations: {
                                en: 'Troubleshooting',
                                ja: 'トラブルシューティング',
                                de: 'Fehlerbehebung',
                                es: 'Solución de problemas',
                                fr: 'Dépannage',
                                it: 'Risoluzione dei problemi',
                            },
                            autogenerate: {directory: 'wifi-gateway/Troubleshooting'},
                        },
                        {
                            label: 'Features',
                            translations: {
                                en: 'Features',
                                ja: '機能',
                                de: 'Funktionen',
                                es: 'Características',
                                fr: 'Caractéristiques',
                                it: 'Caratteristiche',
                            },
                            autogenerate: {directory: 'wifi-gateway/Features'},
                        },
                    ],
                },
            ],
        }),
        vue(),
    ],
});
