// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

require('dotenv').config();

export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest:{
      name: "MANNIT-INNOVATIONS",
      short_name: "MANNIT-INNOVATIONS",
      start_url: "/login",
      display: "standalone",
      background_color: "#fff",
      description: "MANNIT-INNOVATIONS",
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "icons/icon_72x72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ], 
    },
    workbox:{
      navigateFallback:"/",

    },
    devOptions: {
      enabled: true, //PWA features are active during development , that why we are using true
      type: "module",
    },
  }
})


