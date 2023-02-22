import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { IState } from '../../store/slice';

const ProfilePage = () => {
  const auth: boolean = useSelector((state: IState) => state?.isAuth);
  return (
    <Box sx={{ textAlign: 'center' }}>
      {auth ? (
        <Typography>Welcome in Your profile</Typography>
      ) : (
        <Typography>You are not authorized</Typography>
      )}
    </Box>
  );
};

export default ProfilePage;
