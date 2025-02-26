// レンダラープロセスとメインプロセスのIPC通信
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electron', {
  addTask: (task: { name: string; project: string; deadline: string; priority: number; details: string }) => {
    return ipcRenderer.invoke('add-task', task);
  },
  getTask: () => {
    return ipcRenderer.invoke('get-task');
  }
});
