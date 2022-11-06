// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['trpc-nuxt'],
  trpc: {
    enableFileRouting: false
  }
})