import { defineConfig } from 'vite'; // Import from 'vite', not 'vitest/config'
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Import the path module

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configure the alias here
    },
  },
  test: { // Test options remain here
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
});