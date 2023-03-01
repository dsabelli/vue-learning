// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "First Nuxt App",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
    },
  },
});
