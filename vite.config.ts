import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), react()],
  server: {
    port: 8007,
  },
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
    },
  },
});
