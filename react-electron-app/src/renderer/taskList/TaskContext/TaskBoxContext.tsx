import * as React from 'react';

// 型定義
interface Task {
  id: number;
  name: string;
  project: string;
  deadline: string;
  priority: number;
  details: string;
  status: 'Todo' | 'Doing' | 'Done';
  created_at: string;
}

interface TaskContextType {
  addTasks: Task[];
  setAddTasks: React.Dispatch<React.SetStateAction<TaskContextType["addTasks"]>>;
}

// Context作成
export const TaskBoxContext = React.createContext<TaskContextType | undefined>(undefined);

// Providerコンポーネント
export const TaskBoxContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [addTasks, setAddTasks] = React.useState<Task[]>([]);

  return (
    <TaskBoxContext.Provider value={{ addTasks, setAddTasks }}>
      {children}
    </TaskBoxContext.Provider>
  );
};
