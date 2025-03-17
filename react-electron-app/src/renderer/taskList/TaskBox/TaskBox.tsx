// import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import ToDo from './ToDo/ToDo';
// import Doing from './Doing/Doing';
// import Done from './Done/Done';
import StatusList from './StatusList';

const TaskBox = () => {
  return (
    // ボックス(枠なし)の幅を100%に設定
    <Box sx={{ width:'100%', padding: '10px' }}> 
      <Stack direction='row' justifyContent='space-between' spacing={2}>
        {/* <ToDo />
        <Doing />
        <Done /> */}
        <StatusList status='Todo'/>
        <StatusList status='Doing'/>
        <StatusList status='Done'/>
      </Stack>
    </Box>
  );
}

export default TaskBox;
