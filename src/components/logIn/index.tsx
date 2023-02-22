import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/slice';

type Props = {
  setPopup: (value: boolean) => void;
};

const user = {
  username: 'admin',
  password: '12345',
};

const LogIn: React.FC<Props> = ({ setPopup }) => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm();
  const [wrongUser, setWrongUser] = React.useState(false);

  const onSubmit = (dataMessage: any) => {
    if (dataMessage.username === user.username && dataMessage.password === user.password) {
      dispatch(setAuth());
      reset();
      setPopup(false);
      setWrongUser(false);
    } else {
      setWrongUser(true);
      reset();
    }
  };

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
        background: 'rgba(255, 255, 255, 0.8)',
      }}>
      <Stack
        sx={{
          padding: '15px',
          background: '#adadad',
          borderRadius: '20px',
        }}>
        <Typography variant="h4" align="center">
          Enter in Your profile
        </Typography>
        {wrongUser && (
          <Typography variant="h6" color={'#c50d00'}>
            Wrong user name or password!
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
          <CloseIcon
            sx={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
            onClick={() => setPopup(false)}
          />
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="username"
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
                label="password"
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
          <Button sx={{ marginTop: '15px' }} color="success" type="submit">
            Subit
          </Button>
          <Button sx={{ marginTop: '15px' }} color="warning" onClick={() => reset()}>
            Clear
          </Button>
        </form>
      </Stack>
    </Box>
  );
};

export default LogIn;
