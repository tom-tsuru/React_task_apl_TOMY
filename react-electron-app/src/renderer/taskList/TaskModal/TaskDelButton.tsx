import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskContext } from '../TaskContext/TaskContext';
import { ModalContext } from '../TaskContext/ModalContext';

export default function TaskDelButton() {
  const { setState } = React.useContext(TaskContext) || { state: {}, setState: () => {} };
  const { setOpenModal } = React.useContext(ModalContext);
  const DeleteData = () => {
    setState({
      name: '',
      project: '',
      deadline: null,
      priority: 2,
      details: '',
    }); // 状態をリセット
  }
  const DeleteModal = () => {
    DeleteData();
    setOpenModal(false);
  }

  return (
    <div>
      <Stack spacing={2} direction='row'>
        <Button
          variant="outlined" 
          startIcon={<DeleteIcon />} 
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
