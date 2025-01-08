import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TaskContext } from '../TaskContext/TaskContext';
import { ModalContext } from '../TaskContext/ModalContext';

export default function TaskDelButton() {
  const { setTaskName, setProName, setLimit, setLevel, setTaskDetails } = React.useContext(TaskContext);
  const { setOpenModal } = React.useContext(ModalContext);
  const DeleteData = () => {
    setTaskName('');// TaskNameを削除
    setProName('');// ProjectNameを削除
    setLimit(null);// Limitを削除
    setLevel('2');// Levelを削除
    setTaskDetails('');// Detailsを削除
  }
  const DeleteModal = () => {
    DeleteData();
    setOpenModal(false);
  }

  return (
    <div>
      <Stack spacing={2} direction='row'>
        <Button
          variant="contained" 
          sx={{
          position: 'absolute', // 絶対位置で配置
          bottom: 15, // 下からの距離
          right: '36%',  // 右からの距離
          }}
          onClick={DeleteModal}
        >
          Delete
        </Button>
        <Button
          variant="outlined" 
          sx={{
          position: 'absolute', // 絶対位置で配置
          bottom: 15, // 下からの距離
          left: '33.5%',  // 右からの距離
          }}
          onClick={DeleteData}
        >
          Clear
        </Button>
      </Stack>
    </div>
  );
}
