// import React from 'react';
import Box from '@mui/material/Box';
import TaskButtons from './Button/TaskButtons';
import PlanBox from './PlanBox/PlanBox';
import TaskBox from './TaskBox/TaskBox';
import { TaskContextProvider } from './TaskContext/TaskContext';
import { ModalContextProvider } from './TaskContext/ModalContext';

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
