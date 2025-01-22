import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ToDo from './ToDo/ToDo';
import Doing from './Doing/Doing';
import Done from './Done/Done';

const TaskBox = () => {
  return (
    // ボックス(枠なし)の幅を100%に設定
    <Box sx={{ width: 'calc(100% - 20px)',padding: '10px' }}> 
      <Stack direction='row' justifyContent='flex-end' sx={{ width: '99%' }} spacing={2}>
        <ToDo />
        <Doing />
        <Done />
      </Stack>
    </Box>
  );
}

export default TaskBox;
