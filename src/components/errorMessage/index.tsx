import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img from './error.gif';

const ErrorMessage = () => {
  const { t } = useTranslation();
  return (
    <Box padding={2}>
      <Typography variant="h6" align="center">
        {t('error.title_1')} <br />
        <Link to="/alter-ego-tt/">{t('error.title_2')}</Link>
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
