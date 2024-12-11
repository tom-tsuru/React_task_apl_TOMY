import React from 'react';
import Box from '@mui/material/Box';
import TaskButtons from './Button/TaskButtons';
import PlanBox from './PlanBox/PlanBox';
import TaskBox from './TaskBox/TaskBox';
import { TaskContextProvider } from './TaskContext/TaskContext';
import { ModalContextProvider } from './TaskContext/ModalContext';

interface TaskContextType {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    project: string;
    setProject: React.Dispatch<React.SetStateAction<string>>;
    limit: Date;
    setLimit: React.Dispatch<React.SetStateAction<Date>>;
    level: string;
    setLevel: React.Dispatch<React.SetStateAction<string>>;
}

export const TaskContext = React.createContext<TaskContextType>({
    title   : "",
    setTitle: () => {},
    task    : "",
    setTask : () => {},
    project : "",
    setProject: () => {},
    limit   : new Date(),
    setLimit : () => {},
    level   : "",
    setLevel : () => {}
});


export default function TaskList() {
  return (
    <div>
        <PlanBox />
        <ModalContextProvider>
        <TaskContextProvider>
          <Box sx={{ display:'flex'}}>
            <TaskButtons />
            <TaskBox />
          </Box>
        </TaskContextProvider>
        </ModalContextProvider>
    </div>
  );
}
