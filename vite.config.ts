import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Force le nettoyage des anciens caches pour éviter les erreurs 404 persistantes
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        // Exclut les fichiers qui posent problème au déploiement
        navigateFallbackDenylist: [/^\/api/], 
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Leitourghia',
        short_name: 'Leitourghia',
        theme_color: '#f59e0b',
        icons: [
          {
            src: '/logo192.png', // Doit être à la racine de public/
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});