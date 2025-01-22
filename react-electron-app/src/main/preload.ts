// レンダラープロセスとメインプロセスのIPC通信
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electron', {
  addTask: (task: { name: string; project: string; deadline: string; priority: number; details: string }) => {
    return ipcRenderer.invoke('add-task', task);
  },
});

// addTaskメソッドをレンダラープロセスのwindow.electronオブジェクトに公開している
// レンダラープロセスはこのメソッドを通じてメインプロセスのadd-taskハンドラを呼び出すことができる

// main.js
// Electronアプリケーションのメインプロセスを定義するスクリプト。
// BrowserWindowを作成し、preload.tsを指定してレンダラープロセスを設定する
// ipcMainを使用して、レンダラープロセスからのリクエストを受け取り、適切な処理を行う
