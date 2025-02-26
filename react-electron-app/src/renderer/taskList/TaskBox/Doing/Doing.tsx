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
  color: theme.palette.text.secondary,
  width: '50%',
  borderRadius: '10px',
  ...theme.applyStyles('dark', {
    background: 'linear-gradient(to bottom, #1A2027, #2D3748)',
  }),
}));

const Doing = () => {
  return (
    <StyleBox> 
      Doing
    </StyleBox>
  );
}

export default Doing;
