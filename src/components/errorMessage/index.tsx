import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img from './error.gif';

const ErrorMessage = () => {
  const { t } = useTranslation();
  return (
    <Box padding={2}>
      <Typography variant="h5" align="center">
        {t('error.error_1')}
        <br />
        {t('error.error_2')}
        <br />
        {t('error.error_3')}
        <br />
        <Link to="/alter-ego-tt/">{t('error.error_4')}</Link>
      </Typography>
      <img
        style={{
          display: 'block',
          maxWidth: '100%',
          height: '70vh',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        src={img}
        alt="Error"
      />
    </Box>
  );
};

export default ErrorMessage;
