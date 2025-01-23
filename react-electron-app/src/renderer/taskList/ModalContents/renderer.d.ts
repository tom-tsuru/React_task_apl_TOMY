// renderer.d.ts
export interface ElectronAPI {
  addTask: (task: Task) => Promise<string>; // 成功時には成功メッセージ（string）を返す
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
