import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyleBox = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e3f3f0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '50%',
  height: '500px',
  borderRadius: '10px',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
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
