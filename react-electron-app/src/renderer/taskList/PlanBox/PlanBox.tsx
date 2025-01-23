// import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f8efef',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width: '30%',
  height: '200px',
  borderRadius: '15px',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const PlanBox = () => {
  return (
    // ボックス(枠なし)の幅を100%に設定
    <Box sx={{ width: 'calc(100% - 20px)',padding: '10px' }}> 
      <Stack direction='row' justifyContent='center' spacing={3}>
        <Item>Outlook</Item>
        <Item>Wait</Item>
        <Item>My Plan</Item>
      </Stack>
    </Box>
  );
}

export default PlanBox;
