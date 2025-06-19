// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxt/ui',
        'nuxt-proxy',
        '@pinia/nuxt',
        'nuxt-aos',
    ],
    colorMode: {
        preference: 'light'
    },
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/main.css',
    ],
    proxy: {
        options: {
            target: process.env.BASE_URL,
            changeOrigin: true,
            pathRewrite: {'^/api': ''},
            pathFilter: [
                '/api'
            ]
        }
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
            CDN: process.env.CDN,
            STRIPE_PK: process.env.STRIPE_PK,
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
            FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
            GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
            GHOST_KEY: process.env.GHOST_KEY,
            MIXPANEL_PROJECT_TOKEN: process.env.MIXPANEL_PROJECT_TOKEN,
            AMAZON_URL: process.env.AMAZON_URL || '',
            ENVIRONMENT: process.env.ENVIRONMENT ?? 'production'
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    aos: {
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
    },
})