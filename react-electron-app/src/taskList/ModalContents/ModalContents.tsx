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


export default function ModalContents() {
  const {
    taskName, setTaskName,
    proName, setProName,
    limit, setLimit,
    level, setLevel,
    taskDetails, setTaskDetails
  } = React.useContext(TaskContext);

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
              value={taskName} 
              onChange={(e) => setTaskName(e.target.value)}
              />

            {/* Project Name */}
            <TextField id="outlined-basic" label="Project Name" sx={{ width: '100%' }}
              value={proName}
              onChange={(e) => setProName(e.target.value)}
            />

            <Stack spacing={10} direction='row' sx={{ width: '100%', }}>
              {/* 期限 */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{ width: '45%'}}>
                  <DatePicker label="Limit" sx={{ width: '100%'}}
                    value={limit}
                    onChange={(newValue) => setLimit(newValue)}
                    />
                </DemoContainer>
              </LocalizationProvider>

              {/* 優先度 */}
              <FormControl style={{ width: '40%' ,position: 'absolute', right: '5%'}}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Level
                </InputLabel>
                <NativeSelect
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  inputProps={{
                    name: 'Level',
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
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
                />

            {/* 振り分けボタン,削除/クリアボタン */}
            <Stack sx={{ width: '100%' }} spacing={2}>
              <TaskSelButton />
              <TaskDelButton />
            </Stack>
        </Stack>
    </Box>
  );
}
