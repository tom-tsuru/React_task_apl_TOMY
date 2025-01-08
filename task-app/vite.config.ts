import { defineConfig } from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({

  main: {
    build: {
      rollupOptions: {
        input: 'public/main.js', // mainプロセスのエントリーポイント
      },
    },
  },
  renderer: {
    plugins: [react()], // Renderer 用プラグイン
    build: {
      rollupOptions: {
        input: 'src/index.tsx', // rendererプロセスのエントリーポイント（React用）
      },
    },
    server: {
      port: 3004,  // 使用したいポート番号
      strictPort: true, // ポートが使用中の場合エラーを発生させる
      open: true, // サーバー起動時にブラウザを自動で開く
    },
  },
});
