import { Box, TextField } from '@mui/material';
import React from 'react';

const LogIn = () => {
  const user = {
    username: 'admin',
    password: 12345,
  };

  return (
    <Box
      component="form"
      sx={{
        margin: '25px auto',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
      noValidate
      autoComplete="off">
      <TextField variant="outlined" />
      <TextField variant="outlined" />
    </Box>
  );
};

export default LogIn;
