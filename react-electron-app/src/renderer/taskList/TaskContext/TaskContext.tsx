import * as React from 'react';
import { Dayjs } from 'dayjs'; 

interface TaskContextType {
  state: {
    name: string;
    project: string;
    deadline: Dayjs | null;
    priority: number;
    details: string;
  };
  setState: React.Dispatch<React.SetStateAction<TaskContextType["state"]>>;
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

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
};
