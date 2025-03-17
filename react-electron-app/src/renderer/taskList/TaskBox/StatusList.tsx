import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { TaskBoxContext } from '../TaskContext/TaskBoxContext';
import { TaskContext } from '../TaskContext/TaskContext';
import { ModalContext } from '../TaskContext/ModalContext';
import StatusModal from './StatusModal';
import dayjs from 'dayjs';

const StyleBox = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(to bottom, #d2faf5, #b3eee8)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '30%',
  height: '835px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  ...theme.applyStyles('dark', {
    background: 'linear-gradient(to bottom, #1A2027, #2D3748)',
  }),
}));

const ScrollableContent = styled('div')({
  flex: 1,
  overflowY: 'auto',
  padding: '5px',
});

const StyleTask = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
  height: '100px',
  borderRadius: '10px',
  margin: '5px auto',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  height: 500,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

// TaskListコンポーネント
const StatusList = ({ status }: { status: 'Todo' | 'Doing' | 'Done' }) => {
  const taskContext = React.useContext(TaskContext);
  if (!taskContext) {
    console.log('undefined');
    throw new Error('TaskContext must be used within a TaskContextProvider');
  }
  const { setEditState } = taskContext;

  const [selectedTaskId, setSelectedTaskId] = React.useState<number | null>(null);
  const { openTodoModal, setOpenTodoModal, openDoingModal, setOpenDoingModal, openDoneModal, setOpenDoneModal } =
    React.useContext(ModalContext);

  const taskBoxContext = React.useContext(TaskBoxContext);
  if (!taskBoxContext) {
    console.log('TaskBoxContextが未定義です');
    throw new Error('TaskContext must be used within a TaskBoxContextProvider');
  }
  const { addTasks } = taskBoxContext;

  const handleOpen = (taskId: number | null) => {
    const task = addTasks.find((task) => task.id === taskId && task.status === status);
    if (task) {
      const editedTask = {
        name: task.name,
        project: task.project,
        deadline: dayjs(task.deadline),
        priority: task.priority,
        details: task.details,
      };
      setSelectedTaskId(taskId);
      setEditState(editedTask);
      switch (status) {
        case 'Todo':
          setOpenTodoModal(true);
          break;
        case 'Doing':
          setOpenDoingModal(true);
          break;
        case 'Done':
          setOpenDoneModal(true);
          break;
      }
    } else {
      console.error('Task not found!');
    }
  };

  const handleClose = () => {
    switch (status) {
      case 'Todo':
        setOpenTodoModal(false);
        break;
      case 'Doing':
        setOpenDoingModal(false);
        break;
      case 'Done':
        setOpenDoneModal(false);
        break;
    }
  };

  return (
    <StyleBox 
      style={status === 'Doing' ? {width: '40%'}: {}}>
      {status}
      <ScrollableContent>
        {addTasks
          .filter((task) => task.status === status)
          .map((task) => (
            <StyleTask key={task.id} 
            onClick={() => handleOpen(task.id)}
            style={status === 'Doing' ? {height:'27%'} : {}}
            >
              <p>タスク：{task.name}</p>
              <p>プロジェクト：{task.project}</p>

              {status === 'Done' ? (
                <p>完了日：{task.created_at}</p>
              ) : (
                <>
                  <p>期限：{task.deadline}</p> 
                  {status === 'Doing' && (
                  <Box sx={{ width: '100%', textAlign: 'center' }}> {/* 中央揃え用のBox */}
                  <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>詳細</p>
                  <Box
                    sx={{
                      border: '1px solid #ccc',
                      padding: '10px',
                      borderRadius: '5px',
                      whiteSpace: 'pre-line',
                      height: '60px',
                      overflowY: 'auto',
                      width: '90%',  // ボックスの幅を狭める
                      margin: '0 auto',  // 中央に配置
                    }}
                  >
                    <p>{task.details}</p>
                  </Box>
                </Box>
              )}
                </>
              )}
            </StyleTask>
          ))}
      </ScrollableContent>

      {/* 詳細情報モーダル */}
      <Modal
        open={status === 'Todo' ? openTodoModal : status === 'Doing' ? openDoingModal : openDoneModal}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box sx={style}>
          {selectedTaskId !== null && <StatusModal id={selectedTaskId} />}
        </Box>
      </Modal>
    </StyleBox>
  );
};

export default StatusList;
