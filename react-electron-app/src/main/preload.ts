// レンダラープロセスとメインプロセスのIPC通信
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electron', {
  addTask: (task: { name: string; project: string; deadline: string; priority: number; details: string; status: string }) => {
    return ipcRenderer.invoke('add-task', task);
  },
  getTask: () => {
    return ipcRenderer.invoke('get-task');
  },
  editTask: (id: number, task: { name: string; project: string; deadline: string; priority: number; details: string; status: string }) => {
    return ipcRenderer.invoke('edit-task',id, task);
  },
  deleteTask: (id: number) => {
    return ipcRenderer.invoke('delete-task',id);
  }
});
