import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Daily Code Journal',
        short_name: 'Code Journal',
        description: 'Track your coding journey, build your streak, and document your growth.',
        theme_color: '#6b21a8',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/daily-code-journal/',  // ← Add repo name
        start_url: '/daily-code-journal/',  // ← Add repo name
        icons: [
          {
            src: '/daily-code-journal/pwa-192x192.png',  // ← Add repo name
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/daily-code-journal/pwa-512x512.png',  // ← Add repo name
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/daily-code-journal/pwa-512x512.png',  // ← Add repo name
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/firebasestorage\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'firebase-storage-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
            },
          },
        ],
      },
    }),
  ],
  
  base: '/', 
  
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'firebase-core': ['firebase/app'],
          'firebase-auth': ['firebase/auth'],
          'firebase-firestore': ['firebase/firestore'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'firebase/app', 'firebase/auth', 'firebase/firestore'],
  },
})