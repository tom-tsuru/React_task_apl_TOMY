import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e3f3f0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '30%',
  height: '500px',
  borderRadius: '10px',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const TaskBox = () => {
  return (
    // ボックス(枠なし)の幅を100%に設定
    <Box sx={{ width: 'calc(100% - 20px)',padding: '10px' }}> 
      <Stack direction='row' justifyContent='flex-end' sx={{ width: '99%' }} spacing={2}>
        <Item>ToDo</Item>
        <Item sx={{ width: '50%' }}>Doing</Item>
        <Item>Done</Item>
      </Stack>
    </Box>
  );
}

export default TaskBox;
