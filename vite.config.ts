import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensure your base URL is correct
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          // Remove `/public` prefix from the paths
          if (assetInfo.name?.startsWith('images/')) {
            return 'images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
