// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "Cocktail's Odyssey",
      meta: [
        { name: 'description', content: 'Discover amazing cocktail recipes and create your own mixology journey' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})