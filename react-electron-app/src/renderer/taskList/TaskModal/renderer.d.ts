// renderer.d.ts
export interface ElectronAPI {
  addTask: (task: Task) => Promise<string>; // 成功時には成功メッセージ（string）を返す
  getTask: () => Promise<any[]>; // getTaskの戻り値の型に適切な型を設定
  editTask: (id: number, task: Task) => Promise<Task[]>; // タスク編集後、更新されたタスクリストを返す
  deleteTask: (id: number) => Promise<Task[]>; // // 削除後、更新されたタスクの配列を返す
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
