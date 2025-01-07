const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // メインプロセスと通信する API を定義
});
