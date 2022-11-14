import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "./src/style.less";', // 全局less文件，可选
      },
    },
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  base: './',
  build: {
    cssCodeSplit: false,
  },
  server: {
    // hmr: true,
    proxy: {
      '/api': {
        target: 'http://8.134.162.35:9999',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
