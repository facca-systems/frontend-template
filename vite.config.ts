/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import { imageOptimizerPlugin } from './plugins/ImageOptmizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imageOptimizerPlugin()],
  base: './',
  server: {
    open: true,
    host: '127.0.0.1',
    port: 1904,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@views': path.resolve(__dirname, 'src', 'views'),
    },
  },
});