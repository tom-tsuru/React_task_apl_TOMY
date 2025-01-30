import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  root: "src/renderer",
  base: './',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  },
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,    // このオプションでディレクトリを空にできるようにする
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/renderer/index.html'),
      },
    },
  },
});
