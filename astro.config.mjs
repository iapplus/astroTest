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
            customCss: [
                './src/styles/homepage.css',
                './src/styles/colors.css',
            ],
            pagefind: false,
            components: {
                Header: './src/components/CustomHeader.astro',
                Footer: './src/components/Footer.astro',
            },
            logo: {
                src: './public/images/logo.webp',
                alt: 'WELOCK',
                replacesTitle: true,
            },
            social: [],
            locales: {
                root: {label: '简体中文', lang: 'zh-CN'},
                en: {label: 'English', lang: 'en'},
                ja: {label: '日本語', lang: 'ja'},
            },
            sidebar: [
                {
                    label: 'Wi-Fi Gateway',
                    items: [
                        {
                            label: 'FAQ',
                            autogenerate: {directory: 'wifi-gateway/FAQ'},
                        },
                        {
                            label: 'Features',
                            autogenerate: {directory: 'wifi-gateway/Features'},
                        },
                        {
                            label: 'How To Install',
                            autogenerate: {directory: 'wifi-gateway/How To Install'},
                        },
                        {
                            label: 'Installation Requirements',
                            autogenerate: {directory: 'wifi-gateway/Installation Requirements'},
                        },
                        {
                            label: 'Troubleshooting',
                            autogenerate: {directory: 'wifi-gateway/Troubleshooting'},
                        },
                    ],
                },
                {
                    label: 'Guides',
                    translations: {
                        'en': 'Guides',
                        'ja': 'ガイド'
                    },
                    items: [
                        {
                            label: 'Example Guide',
                            translations: {
                                'en': 'Guides',
                                'ja': '日本'
                            }, slug: 'guides/example'
                        },
                        {label: 'test123', slug: 'guides/aaa'},
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: {directory: 'reference'},
                },
            ],
        }),
        vue(),
    ],
});
