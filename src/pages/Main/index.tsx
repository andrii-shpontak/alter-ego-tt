import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';

import { styles } from './style';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Stack textAlign={'center'}>
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
      </Stack>
    </Container>
  );
};

export default MainPage;
