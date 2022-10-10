import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={8}>
      
      <Button variant="contained" color="success">
        Love it 
      </Button>
      <Button variant="outlined" color="error">
        Nope it
      </Button>
    </Stack>
  );
  
}

