import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Close } from '@mui/icons-material/';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setAuth } from '../../store/slice';
import { styles } from './style';
import { ILogInInputs, ILogInProps, ILogInUser } from '../../types';
import { Navigate } from 'react-router-dom';

const LogIn: React.FC<ILogInProps> = ({ setPopup, mode }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm<ILogInInputs>();
  const [wrongUser, setWrongUser] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const user: ILogInUser =
    localStorage.getItem('user') !== null
      ? JSON.parse(localStorage.getItem('user')!)
      : {
          username: 'admin',
          password: '12345',
        };

  const onSubmit: SubmitHandler<ILogInInputs> = (dataMessage) => {
    if (dataMessage.username === user.username && dataMessage.password === user.password) {
      dispatch(setAuth());
      reset();
      setPopup(false);
      setWrongUser(false);
      setIsAuth(true);
    } else {
      setWrongUser(true);
      reset();
    }
  };

  if (isAuth) {
    return <Navigate to="/alter-ego-tt/profile" />;
  }

  return (
    <Box
      pt={5}
      sx={{
        zIndex: 1000,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: mode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      }}>
      <Stack sx={styles.stack}>
        <Close sx={styles.close} onClick={() => setPopup(false)} />
        <Typography variant="h4" align="center">
          {t('login.enter')}
        </Typography>

        <form
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 45,
            borderRadius: '5px',
            background: mode ? '#121212' : '#fafafad',
          }}
          onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label={t('login.username')}
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'This field is required!' }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label={t('login.password')}
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
              />
            )}
            rules={{ required: 'Password is required!' }}
          />
          {wrongUser && (
            <Typography variant="h6" color={'#c50d00'}>
              {t('login.wrong')}
            </Typography>
          )}
          <Button sx={styles.button} variant="contained" color="success" type="submit">
            {t('login.submit')}
          </Button>
          <Button sx={styles.button} color="warning" onClick={() => reset()}>
            {t('login.clear')}
          </Button>
        </form>
      </Stack>
    </Box>
  );
};

export default React.memo(LogIn);
