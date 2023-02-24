import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { styles } from './style';
import { IMainState } from '../../types';

const MainPage: React.FC<IMainState> = ({ mode }) => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.boxBg}>
      <Box sx={styles.boxSize}>
        <Paper sx={{ background: mode ? '#000' : '#fff', opacity: '0.8', borderRadius: '5px' }}>
          <Typography sx={styles.typography} variant="h4">
            {t('main.title')}
          </Typography>
          <Typography sx={styles.typography} variant="h6">
            {t('main.subtitle')}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default React.memo(MainPage);
