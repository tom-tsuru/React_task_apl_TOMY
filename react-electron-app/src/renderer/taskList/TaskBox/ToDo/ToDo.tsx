// import * as React from 'react';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyleBox = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(to bottom, #d2faf5, #b3eee8)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '30%',
  height: '700px',
  borderRadius: '10px',
  ...theme.applyStyles('dark', {
    background: 'linear-gradient(to bottom, #1A2027, #2D3748)',
  }),
}));

// const StyleTask = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#ffffff',
//   ...theme.typography.body2,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   width: '100%',
//   height: '100px',
//   borderRadius: '10px',
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));


const ToDo = () => {


  return (
    <StyleBox> 
      ToDo
      {/* <Stack direction="column" spacing={1}>
        {Array.from({ length: boxCount }).map((_, index) => (
          <StyleTask
            key={index}
          >
            Box {index + 1}
          </StyleTask>
        ))}

      </Stack> */}
    </StyleBox>
  );
}

export default ToDo;
