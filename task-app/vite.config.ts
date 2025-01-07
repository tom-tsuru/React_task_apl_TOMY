import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    port: 3000, // 例えば、3000番に変更
  },
  plugins: [react()],  // React のプラグインを追加
  build: {
    outDir: 'dist',  // 出力先のディレクトリ
    rollupOptions: {
      input: 'src/index.tsx',  // エントリーポイントを指定
    },
  },
});
