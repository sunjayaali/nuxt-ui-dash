// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@pinia/nuxt', 'nuxt-charts'],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
  },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    clientBundle: {
      scan: true,
    },
  },
})
