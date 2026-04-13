// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    output: 'server',
    adapter: vercel(),
    integrations: [
        starlight({
            title: 'WELOCK',
            locales: {
                root: {label: '简体中文', lang: 'zh-CN'},
                en: {label: 'English', lang: 'en'},
                ja: {label: '日本語', lang: 'ja'},
            },
            logo: {
                src: './public/favicon.svg',
            },
            social: [],
            sidebar: [
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
