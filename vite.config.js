import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    host: true,
    hmr: {
      port: 3000,
    },
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'seo-boost-agency.preview.emergentagent.com',
      '.emergentagent.com'
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
              'vendor-motion': ['framer-motion'],
              'vendor-icons': ['lucide-react'],
            },
          },
        },
  },
  ssr: {
    noExternal: ['react-helmet-async']
  },
  define: {
    'process.env': {},
  },
}))