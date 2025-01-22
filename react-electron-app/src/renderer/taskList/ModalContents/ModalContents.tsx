import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TaskSelButton from './TaskSelButton';
import TaskDelButton from './TaskDelButton';
import { TaskContext } from '../TaskContext/TaskContext';
import { Dayjs } from 'dayjs'; 

export default function ModalContents() {
  const { state, setState } = React.useContext(TaskContext) || { state: {}, setState: () => {} };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // タスク追加処理
  const handleTaskAdd = () => {
    // 必要な処理を追加（例: ローカルストレージやAPIへの保存）
    const task = {
      name: state.name,
      project: state.project,
      deadline: state.deadline?.toISOString(), // DayjsオブジェクトをISOフォーマットに変換
      priority: state.priority,
      details: state.details,
    };
  
    // メインプロセスにタスク追加リクエストを送る
    window.electron.addTask(task)
    .then((response) => {
      console.log(response); // 成功メッセージを表示
      setState({
        name: '',
        project: '',
        deadline: null,
        priority: 2,
        details: '',
      }); // 状態をリセット
    }).catch((err) => {
      console.error('タスク追加に失敗しました:', err);
    });
  }

  const handleDeadlineChange = (newValue: Dayjs | null) => {
    setState((prevState) => ({
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
        <Stack spacing={1} >
            {/* Task Name */}
            <TextField id="outlined-basic" label="Task Name" sx={{ width: '100%' }} 
              name="name"
              value={state.name} 
              onChange={inputChange}
              />

            {/* Project Name */}
            <TextField id="outlined-basic" label="Project Name" sx={{ width: '100%' }}
              name="project"
              value={state.project}
              onChange={inputChange}
            />

            <Stack spacing={10} direction='row' sx={{ width: '100%', }}>
              {/* 期限 */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{ width: '45%'}}>
                  <DatePicker label="Deadline" sx={{ width: '100%'}}
                    value={state.deadline}
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
                  value={state.priority}
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
                value={state.details}
                onChange={inputChange}
                />

            {/* 振り分けボタン,削除/クリアボタン */}
            <Stack sx={{ width: '100%' }} spacing={2}>
              <TaskSelButton onClick={handleTaskAdd}/>
              <TaskDelButton />
            </Stack>
        </Stack>
    </Box>
  );
}
