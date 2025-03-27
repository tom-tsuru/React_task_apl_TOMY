import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Dayjs } from 'dayjs';
import { ModalContext } from '../TaskContext/ModalContext';
import { TaskBoxContext } from '../TaskContext/TaskBoxContext';
import { TaskContext } from '../TaskContext/TaskContext';

interface StatusModalProps {
  id: number;
}

const StatusModal: React.FC<StatusModalProps> = ({ id }) => {
  const { setOpenTodoModal, setOpenDoingModal, setOpenDoneModal } = React.useContext(ModalContext);
    // Context を取得
    const taskBoxContext  = React.useContext(TaskBoxContext);
    const taskContext = React.useContext(TaskContext);
    // Context が未定義の場合はエラー
    if (!taskBoxContext) {
      console.log("TaskBoxContextが未定義です");
      throw new Error("TaskContext must be used within a TaskBoxContextProvider");
    }
    if(!taskContext) {
      console.log("undefined");
      throw new Error("TaskContext must be used within a TaskContextProvider");
    }

    const { setAddTasks } = taskBoxContext;
    const { editState, setEditState }  = taskContext;
    
// タスク編集
const handleTaskEdit = async (id: number, status: 'Todo' | 'Doing' | 'Done') => {
  try {
    // 編集するタスクオブジェクトを作成
    const task = {
      name: editState.name,
      project: editState.project,
      deadline: editState.deadline?.format('YYYY-MM-DD'), // Dayjsオブジェクトのフォーマット変換
      priority: editState.priority,
      details: editState.details,
      status: status, // ステータスを更新
    };

    // タスクを編集
    const editedTasks = await window.electron.editTask(id,task);

    setAddTasks(editedTasks);

    setOpenTodoModal(false);
    setOpenDoingModal(false);
    setOpenDoneModal(false);

    console.log('Task edited successfully:', task);
  } catch (err) {
    console.error('Error editing task:', err);
  }
};


  // タスクの削除
  const handleTaskDelete = async (id: number) => {
    try {
      // タスク削除
      const updatedTasks = await window.electron.deleteTask(id);

      // タスクリストを更新
      setAddTasks(updatedTasks);

      setOpenTodoModal(false);
      setOpenDoingModal(false);
      setOpenDoneModal(false);

      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

    // 入力
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    // 優先度
    const handlePriorityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setEditState({
        ...editState,
        priority: event.target.value as number, // 新しい優先度の値を状態に設定
      });
      };
    // 期限
    const handleDeadlineChange = (newValue: Dayjs | null) => {
      setEditState((prevState) => ({
        ...prevState,
        deadline: newValue, // Dayjs型で保存
      }));
    };

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { display: 'flex', alignItems: 'center' } }} // m(マージン):1=8px,25ch=各子要素の幅を25文字分に設定
      noValidate
    //   autoComplete="off"
    >
        <Stack key={id} spacing={1} >
            {/* Task Name */}
            <TextField id="outlined-basic" label="Task Name" sx={{ width: '100%' }} 
              name="name"
              value={editState.name} 
              onChange={inputChange}
              />

            {/* Project Name */}
            <TextField id="outlined-basic" label="Project Name" sx={{ width: '100%' }}
              name="project"
              value={editState.project}
              onChange={inputChange}
            />

            <Stack key={id} spacing={10} direction='row' sx={{ width: '100%', }}>
              {/* 期限 */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{ width: '45%'}}>
                  <DatePicker label="Deadline" sx={{ width: '100%'}}
                    value={editState.deadline}
                    onChange={handleDeadlineChange}
                    />
                </DemoContainer>
              </LocalizationProvider>

              {/* 優先度 */}
              <FormControl style={{ width: '40%' ,position: 'absolute', right: '5%'}}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Priority
                </InputLabel>
                <NativeSelect
                  value={editState.priority}
                  onChange={handlePriorityChange}
                  inputProps={{
                    name: 'priority',
                    id: 'uncontrolled-native',
                  }}>
                  <option value={1}>高</option>
                  <option value={2}>中</option>
                  <option value={3}>低</option>
                </NativeSelect>
              </FormControl>
            </Stack>

            {/* タスク詳細 */}
            <TextField 
                id="outlined-basic" 
                label="Task details" 
                multiline // 複数行追加
                rows={8}   // 初期行数
                sx={{ width: '100%'}}
                name="details"
                value={editState.details}
                onChange={inputChange}
                />

            {/* 振り分けボタン,削除/クリアボタン */}
            <Stack sx={{ width: '100%'}} spacing={2} direction='row'>
              <Button variant="contained" color='secondary' sx={{ width: '33%'}} onClick={() => handleTaskEdit(id, 'Todo')}
              >
                ToDo
              </Button>
              <Button variant="contained" color='secondary' sx={{ width: '33%'}} onClick={() => handleTaskEdit(id, 'Doing')}
              >
                Doing
              </Button>
              <Button variant="contained" color='secondary' sx={{ width: '33%'}} onClick={() => handleTaskEdit(id, 'Done')}
              >
                Done
              </Button>
            </Stack>
            <Button onClick={() => handleTaskDelete(id)}>Delete</Button>
        </Stack>
    </Box>
  );
}

export default StatusModal;
