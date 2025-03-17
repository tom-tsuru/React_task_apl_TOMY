// import React from 'react';
import Box from '@mui/material/Box';
import TaskModal from './TaskModal/TaskModal';
// import PlanBox from './PlanBox/PlanBox';
import TaskBox from './TaskBox/TaskBox';
import { TaskContextProvider } from './TaskContext/TaskContext';
import { ModalContextProvider } from './TaskContext/ModalContext';
import { TaskBoxContextProvider } from './TaskContext/TaskBoxContext';


export default function TaskList() {
  return (
    <div>
        {/* <PlanBox /> */}
        <ModalContextProvider>
        <TaskBoxContextProvider>
        <TaskContextProvider>
          <Box sx={{ display:'flex'}}>
            <TaskModal />
            <TaskBox />
          </Box>
        </TaskContextProvider>
        </TaskBoxContextProvider>
        </ModalContextProvider>
    </div>
  );
}
