import * as React from 'react';
import { Dayjs } from 'dayjs'; 

interface TaskState {
    name: string;
    project: string;
    deadline: Dayjs | null;
    priority: number;
    details: string;
}
interface TaskContextType {
  state: TaskState
  setState: React.Dispatch<React.SetStateAction<TaskState>>;
  editState: TaskState
  setEditState: React.Dispatch<React.SetStateAction<TaskState>>;
}

// Context作成
export const TaskContext = React.createContext<TaskContextType | undefined>(undefined);

// Providerコンポーネント
export const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useState<TaskContextType["state"]>({
    name: '',
    project: '',
    deadline: null,
    priority: 2,
    details: '',
  });
  const [editState, setEditState] = React.useState<TaskContextType["state"]>({
    name: '',
    project: '',
    deadline: null,
    priority: 2,
    details: '',
  });

  return (
    <TaskContext.Provider value={{ state, setState, editState, setEditState }}>
      {children}
    </TaskContext.Provider>
  );
};
