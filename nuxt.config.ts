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
  }
})
