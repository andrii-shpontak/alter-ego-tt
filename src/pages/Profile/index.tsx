import React, { useState } from 'react';
import { Button, Card, CardMedia, Container, Stack, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Logout } from '@mui/icons-material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { setAuth } from '../../store/slice';

import { styles } from './style';
import { IProfileAvatar, IProfileInputs, IProfileUser } from '../../types';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm<IProfileInputs>();
  const [changeUser, setChangeUser] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const { t } = useTranslation();

  const user: IProfileUser =
    localStorage.getItem('user') !== null
      ? JSON.parse(localStorage.getItem('user')!)
      : {
          username: 'admin',
          password: '12345',
        };

  const avatar: IProfileAvatar =
    localStorage.getItem('avatar') !== null
      ? JSON.parse(localStorage.getItem('avatar')!)
      : {
          userimage:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        };

  const onSubmitData: SubmitHandler<IProfileInputs> = (dataMessage) => {
    localStorage.setItem('user', JSON.stringify(dataMessage));
    reset();
    setChangeUser(false);
  };

  const onSubmitImage: SubmitHandler<IProfileInputs> = (dataMessage) => {
    localStorage.setItem('avatar', JSON.stringify(dataMessage));
    reset();
    setChangeAvatar(false);
  };

  return (
    <Container sx={styles.container}>
      <Card sx={styles.card}>
        <Typography variant="h4" sx={styles.welcome}>
          {t('profile.welcome')} {user.username}
        </Typography>
        <Stack sx={styles.stack}>
          <CardMedia sx={styles.cardMedia} component="img" alt="photo" image={avatar.userimage} />
        </Stack>

        {changeAvatar ? (
          <Stack>
            <Typography variant="h6">{t('profile.corect')}</Typography>
            <form
              style={{
                display: 'flex',
                width: '300px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '25px auto',
                borderRadius: '5px',
                background: '#fafafad',
              }}
              onSubmit={handleSubmit(onSubmitImage)}>
              <Controller
                name="userimage"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label={t('profile.img_link')}
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'This field is required!' }}
              />

              <Button sx={styles.buttonForm} color="success" type="submit">
                {t('login.submit')}
              </Button>
              <Button sx={styles.buttonForm} color="warning" onClick={() => setChangeAvatar(false)}>
                {t('profile.cancel')}
              </Button>
            </form>
          </Stack>
        ) : (
          <Button onClick={() => setChangeAvatar(true)} sx={styles.buttonOpen} variant="contained">
            {t('profile.avatar')}
          </Button>
        )}

        {!changeUser && (
          <Button onClick={() => setChangeUser(true)} sx={styles.buttonOpen} variant="contained">
            {t('profile.edit_data')}
          </Button>
        )}

        {changeUser && (
          <Stack>
            <Typography sx={{ marginTop: '15px' }} variant="h6">
              {t('profile.change_data')}
            </Typography>
            <form
              style={{
                display: 'flex',
                width: '300px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '25px auto',
                borderRadius: '5px',
                background: '#fafafad',
              }}
              onSubmit={handleSubmit(onSubmitData)}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label={t('profile.new_name')}
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
                    label={t('profile.new_password')}
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
              <Button sx={styles.buttonForm} color="success" type="submit">
                {t('login.submit')}
              </Button>
              <Button sx={styles.buttonForm} color="warning" onClick={() => setChangeUser(false)}>
                {t('profile.cancel')}
              </Button>
            </form>
          </Stack>
        )}

        <Button
          sx={styles.buttonUnAuth}
          endIcon={<Logout />}
          variant="contained"
          color="warning"
          onClick={() => dispatch(setAuth())}>
          {t('profile.logout')}
        </Button>
      </Card>
    </Container>
  );
};

export default React.memo(ProfilePage);
