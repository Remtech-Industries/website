// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { static: true },
    '/**': { static: true }
  },
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
      ],
      titleTemplate: '%s | RemTech Industries',
      meta: [
        {
            hid: 'og:image:type',
            property: 'og:image:type',
            content: 'image/png'
        },
        {
            hid: 'og:image:width',
            property: 'og:image:width',
            content: '1920'
        },
        {
            hid: 'og:image:height',
            property: 'og:image:height',
            content: '1080'
        },
        {
            hid: 'twitter:card',
            property: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            hid: 'twitter:image:width',
            property: 'twitter:image:width',
            content: '1920'
        },
        {
            hid: 'twitter:image:height',
            property: 'twitter:image:height',
            content: '1080'
        }
      ]
      // script: [
      //   {
      //     src: 'https://www.google.com/recaptcha/api.js',
      //     async: '',
      //     defer: ''
      //   }
      // ]
    }
  },

  // runtimeConfig: {
    // googleRecaptchaSecretKey: '',
    // public: {
    //   googleRecaptchaSiteKey: ''
    // }
  // },

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