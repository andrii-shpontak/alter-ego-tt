import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { styles } from './style';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.boxBg}>
      <Box sx={styles.boxSize}>
        <Box sx={styles.boxLayout}>
          <Typography sx={styles.typography} variant="h4">
            {t('main.title')}
          </Typography>
          <Typography sx={styles.typography} variant="h6">
            {t('main.subtitle')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MainPage);
