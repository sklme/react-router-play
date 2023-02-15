import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  // 开启直接用属性代替类名
  preflight: false,
  attributify: true,
  extract: {
    include: ['**/*.{html,jsx,tsx,ts}'],
    exclude: [
      'node_modules',
      '.git',
      'excluded',
      'dist',
      'windi.config.{ts,js}',
    ],
  },
});
