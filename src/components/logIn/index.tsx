import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Close } from '@mui/icons-material/';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setAuth } from '../../store/slice';
import { styles } from './style';
import { ILogInInputs, ILogInProps, ILogInUser } from '../../tyeps';
import { Link, Navigate, Outlet } from 'react-router-dom';

const user: ILogInUser =
  localStorage.getItem('user') !== null
    ? JSON.parse(localStorage.getItem('user')!)
    : {
        username: 'admin',
        password: '12345',
      };

const LogIn: React.FC<ILogInProps> = ({ setPopup }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm<ILogInInputs>();
  const [wrongUser, setWrongUser] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(false);

  const onSubmit: SubmitHandler<ILogInInputs> = (dataMessage) => {
    if (dataMessage.username === user.username && dataMessage.password === user.password) {
      dispatch(setAuth());
      reset();
      setIsAuth(true);
      setPopup(false);
      setWrongUser(false);
    } else {
      setWrongUser(true);
      reset();
    }
  };

  return (
    <Box pt={5} sx={styles.box}>
      {isAuth ? <Navigate to="/alter-ego-tt/profile" /> : <Outlet />}
      <Stack sx={styles.stack}>
        <Typography variant="h4" align="center">
          {t('login.enter')}
        </Typography>
        {wrongUser && (
          <Typography variant="h6" color={'#c50d00'}>
            {t('login.wrong')}
          </Typography>
        )}
        <form
          style={{
            position: 'relative',
            display: 'flex',
            width: '300px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
            paddingTop: 45,
            borderRadius: '5px',
            background: '#fafafad',
          }}
          onSubmit={handleSubmit(onSubmit)}>
          <Close sx={styles.close} onClick={() => setPopup(false)} />
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
          <Button sx={styles.button} color="success" type="submit">
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

export default LogIn;
