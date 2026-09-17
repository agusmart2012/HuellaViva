import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    // Native fs.watch on Windows throws EBUSY when a file in public/ is
    // still being copied/locked, and Vite crashes the whole process.
    watch:
      process.platform === 'win32'
        ? {
            usePolling: true,
            interval: 300,
            awaitWriteFinish: {
              stabilityThreshold: 500,
              pollInterval: 100,
            },
          }
        : undefined,
  },
})
