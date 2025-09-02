import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './vite-plugin-pwa.config.js'

export default defineConfig({
  plugins: [react(), VitePWA(pwaConfig)],
})