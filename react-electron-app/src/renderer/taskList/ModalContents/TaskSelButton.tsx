import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface TaskSelButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TaskSelButton: React.FC<TaskSelButtonProps> = ({ onClick }) => {
  const [todoCount, setTodoCount] = React.useState<number>(0);
  const [doingCount, setDoingCount] = React.useState<number>(0);
  const [doneCount, setDoneCount] = React.useState<number>(0);
  const addToDo = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick(event);
      setTodoCount((prevConst) => todoCount + 1);
  }
  return (
    <div>
          <Stack sx={{ width: '100%'}} spacing={2} direction='row'>
            <Button variant="contained" color='secondary' sx={{ width: '33%'}} onClick={onClick}
            >
                ToDo
            </Button>
            <Button variant="contained" color='secondary' sx={{ width: '33%'}} onClick={onClick}
              >
                Doing
            </Button>
            <Button variant="contained" color='secondary' sx={{ width: '33%'}} onClick={onClick}
              >
                Done
            </Button>
          </Stack>
    </div>
  );
}

export default TaskSelButton;
