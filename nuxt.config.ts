import tailwindcss from '@tailwindcss/vite'
import { site } from './app/data/site'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&display=swap',
        },
      ],
      meta: [{ name: 'theme-color', content: '#0F2B26' }],
    },
  },

  // Lite is English only. The full version adds German and French with hreflang:
  // https://stavreva68.gumroad.com/l/handwerk-nuxt-template
  i18n: {
    baseUrl: site.url,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [{ code: 'en', language: 'en-GB', name: 'English', file: 'en.json' }],
    detectBrowserLanguage: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },
})
