import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function TaskSelButton() {
  return (
    <div>
          <Stack sx={{ width: '100%'}} spacing={2} direction='row'>
            <Button variant="contained" color='secondary' sx={{ width: '33%'}}>
                ToDo
            </Button>
            <Button variant="contained" color='secondary' sx={{ width: '33%'}}>
                Doing
            </Button>
            <Button variant="contained" color='secondary' sx={{ width: '33%'}}>
                Done
            </Button>
          </Stack>
    </div>
  );
}
