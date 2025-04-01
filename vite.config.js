import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Specify your render.ts file as the entry point
    rollupOptions: {
      input: './src/render.ts',
    },
    // Output directory
    outDir: 'dist',
  },
});
