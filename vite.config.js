import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/render.ts',
      external: ['fsevents'],
    },
    outDir: 'dist',
  },
})