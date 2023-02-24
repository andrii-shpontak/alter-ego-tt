import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img from './error.gif';
import { useSelector } from 'react-redux';
import { IState } from '../../types';

const ErrorMessage = () => {
  const { t } = useTranslation();
  const isError: boolean = useSelector((state: IState) => state?.isError);

  return (
    <Box padding={2}>
      <Typography variant="h5" align="center">
        {t('error.error_1')}
        <br />
        {isError ? t('error.error_2') : t('error.not_found')}
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

export default React.memo(ErrorMessage);
