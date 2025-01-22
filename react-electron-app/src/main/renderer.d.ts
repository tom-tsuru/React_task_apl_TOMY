// renderer.d.ts
export interface ElectronAPI {
  addTask: (task: Task) => Promise<any>;
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
