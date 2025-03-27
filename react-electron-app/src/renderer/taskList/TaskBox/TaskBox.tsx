import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import StatusList from './StatusList';

const TaskBox = () => {
  return (
    // ボックス(枠なし)の幅を100%に設定
    <Box sx={{ width:'100%', padding: '10px' }}> 
      <Stack direction='row' justifyContent='space-between' spacing={2}>
        <StatusList status='Todo'/>
        <StatusList status='Doing'/>
        <StatusList status='Done'/>
      </Stack>
    </Box>
  );
}

export default TaskBox;
