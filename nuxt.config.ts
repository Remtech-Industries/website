// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // TODO enable ssr and route rules before launch
  ssr: false,

  //routeRules: {
  //'/': { static: true },
  //'/**': { static: true }
  //},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@600&family=Space+Grotesk:wght@700&family=Space+Grotesk&display=swap'
        }
      ]
    }
  },

  modules: ['nuxt-gtag', '@nuxtjs/seo'],

  gtag: {
    id: 'G-KNCDT92Y34',
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      }]
    ]
  }
})