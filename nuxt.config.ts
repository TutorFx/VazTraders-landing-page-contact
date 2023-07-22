// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
  ],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    densities: [1, 2, 3],
  },
  build: {
    templates: [
      {
        src: 'src/templates/app.html',
      }
    ],
  },
  css: ['@/assets/styles.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/mixins.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    
    public: {
      youtube: 'https://www.youtube.com/LuisVazTrader',
      instagram: 'https://instagram.com/oluisvaz',
      facebook: 'https://www.facebook.com/profile.php?id=100093435019657&mibextid=LQQJ4d'
    },
  },
  devtools: { enabled: true }
})
