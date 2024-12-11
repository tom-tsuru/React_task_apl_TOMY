import * as React from 'react';
import { Dayjs } from 'dayjs'; 

// 型定義
interface TaskContextType {
  taskName: string;
  setTaskName: (taskName: string) => void;
  proName: string;
  setProName: (taskName: string) => void;
  limit: Dayjs | null;
  setLimit: (taskName: Dayjs | null) => void;
  level: string;
  setLevel: (taskName: string) => void;
  taskDetails: string;
  setTaskDetails: (taskName: string) => void;
}


// Context作成(初期値設定)
export const TaskContext = React.createContext<TaskContextType>({
  taskName: '',
  setTaskName: () => {},
  proName: '',
  setProName: () => {},
  limit: null,
  setLimit: () => {},
  level: '',
  setLevel: () => {},
  taskDetails: '',
  setTaskDetails: () => {}
})

export const TaskContextProvider = ({children}: {children: React.ReactNode}) => {
  const [taskName, setTaskName]       = React.useState<string>('');
  const [proName, setProName]         = React.useState<string>('');
  const [limit, setLimit]             = React.useState<Dayjs | null>(null);
  const [level, setLevel]             = React.useState<string>('2');
  const [taskDetails, setTaskDetails] = React.useState<string>('');
  return (
    <TaskContext.Provider value={{
      taskName, setTaskName,
      proName, setProName,
      limit, setLimit,
      level, setLevel,
      taskDetails, setTaskDetails
    }}>
      {children}
    </TaskContext.Provider>
  );
};
