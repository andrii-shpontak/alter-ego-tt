import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { IState, setAuth } from '../../store/slice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth: boolean = useSelector((state: IState) => state?.isAuth);
  return (
    <Box sx={{ textAlign: 'center' }}>
      {auth ? (
        <Box>
          <Typography sx={{ margin: '25px auto' }}>{t('profile.welcome')}</Typography>
          <Button
            sx={{ margin: '25px auto' }}
            variant="contained"
            onClick={() => dispatch(setAuth())}>
            {t('profile.logout')}
          </Button>
        </Box>
      ) : (
        <Typography>{t('profile.unauthorized')}</Typography>
      )}
    </Box>
  );
};

export default ProfilePage;
